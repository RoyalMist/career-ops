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

function companyIdentifier(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';
  return raw
    .replace(/[^a-z0-9_-]/gi, '');
}

function normalizeLocation(job) {
  const location = job?.location || {};
  return location.fullLocation || [location.city, location.region, location.country].filter(Boolean).join(', ');
}

function normalizeUrl(job, companyId) {
  if (job.postingUrl) return job.postingUrl;
  const id = job.id || job.jobId || job.uuid;
  if (!id) return '';
  const title = slugify(job.name || job.title);
  return `https://jobs.smartrecruiters.com/${companyId}/${id}${title ? `-${title}` : ''}`;
}

async function fetchJson(url) {
  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/json',
        'user-agent': 'career-ops job scanner',
      },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    const { stdout } = await execFileAsync('curl', [
      '-L',
      '--max-time',
      '25',
      url,
      '-H',
      'accept: application/json',
    ], {
      maxBuffer: 8_000_000,
    });

    return JSON.parse(stdout);
  }
}

async function main() {
  const careersUrl = process.argv[2];
  const explicitCompanyId = process.argv[3];
  if (!careersUrl || !explicitCompanyId) {
    throw new Error('Usage: node scripts/parsers/smartrecruiters-jobs.mjs <careers-url> <company-identifier>');
  }

  const companyId = companyIdentifier(explicitCompanyId);
  const limit = 100;
  let offset = 0;
  const jobs = [];

  while (true) {
    const endpoint = `https://api.smartrecruiters.com/v1/companies/${companyId}/postings?limit=${limit}&offset=${offset}`;
    const json = await fetchJson(endpoint);
    const content = Array.isArray(json.content) ? json.content : [];
    jobs.push(...content);

    offset += content.length;
    if (content.length === 0 || offset >= Number(json.totalFound || 0)) break;
  }

  const results = jobs
    .filter(job => job?.name && job?.id && job?.visibility !== 'PRIVATE')
    .map(job => ({
      title: job.name,
      url: normalizeUrl(job, companyId),
      location: [
        normalizeLocation(job),
        job.department?.label,
        job.function?.label,
        job.experienceLevel?.label,
        job.typeOfEmployment?.label,
      ].filter(Boolean).join(' | '),
      company: job.company?.name || '',
      department: job.department?.label || '',
    }));

  process.stdout.write(JSON.stringify(results, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
