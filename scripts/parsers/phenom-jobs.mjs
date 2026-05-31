#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

function slugify(value) {
  return String(value || '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
}

function normalizeLocation(job) {
  const locations = Array.isArray(job.multi_location) ? job.multi_location : [];
  if (locations.length > 0) return locations.join('; ');
  return job.location || job.cityStateCountry || job.city || '';
}

function jobUrl(baseUrl, job) {
  const url = new URL(baseUrl);
  const parts = url.pathname.split('/').filter(Boolean);
  const country = parts[0] || 'gb';
  const lang = parts[1] || 'en';
  return `${url.origin}/${country}/${lang}/job/${job.jobSeqNo}/${slugify(job.title)}`;
}

async function fetchJson(endpoint, payload) {
  const body = JSON.stringify(payload);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'user-agent': 'career-ops job scanner',
      },
      body,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.json();
  } catch {
    const { stdout } = await execFileAsync('curl', [
      '-L',
      '--max-time',
      '25',
      endpoint,
      '-H',
      'accept: application/json',
      '-H',
      'content-type: application/json',
      '--data',
      body,
    ], {
      maxBuffer: 8_000_000,
    });

    return JSON.parse(stdout);
  }
}

async function main() {
  const careersUrl = process.argv[2];
  const refNum = process.argv[3];
  if (!careersUrl || !refNum) {
    throw new Error('Usage: node scripts/parsers/phenom-jobs.mjs <careers-url> <ref-num>');
  }

  const url = new URL(careersUrl);
  const endpoint = `${url.origin}/widgets`;
  const payload = {
    ddoKey: 'refineSearch',
    from: 0,
    size: 1000,
    jobs: true,
    counts: true,
    all_fields: ['category', 'country', 'state', 'city', 'type'],
    siteType: 'external',
    refNum,
    locale: 'en_gb',
    pageName: 'search-results',
  };

  const json = await fetchJson(endpoint, payload);
  const jobs = json?.refineSearch?.data?.jobs || [];
  const results = jobs
    .filter(job => job?.title && job?.jobSeqNo)
    .map(job => ({
      title: job.title,
      url: jobUrl(careersUrl, job),
      location: normalizeLocation(job),
      company: 'Philip Morris International',
      department: job.category || '',
    }));

  process.stdout.write(JSON.stringify(results, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
