#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

function decodeHtml(value) {
  return String(value || '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([a-f0-9]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/\s+/g, ' ')
    .trim();
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      headers: {
        accept: 'text/html,application/xhtml+xml,application/json',
        'user-agent': 'career-ops job scanner',
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch {
    const { stdout } = await execFileAsync('curl', ['-L', '--max-time', '25', url], {
      maxBuffer: 3_000_000,
    });
    return stdout;
  }
}

async function postJson(url, payload) {
  const body = JSON.stringify(payload);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'user-agent': 'career-ops job scanner',
      },
      body,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    const { stdout } = await execFileAsync('curl', [
      '-L',
      '--max-time',
      '25',
      '-s',
      '-H',
      'accept: application/json',
      '-H',
      'content-type: application/json',
      '--data-binary',
      body,
      url,
    ], {
      maxBuffer: 5_000_000,
    });
    return JSON.parse(stdout);
  }
}

function extractPageConfig(html) {
  const locale = html.match(/currentLocale:\s*'([^']+)'/)?.[1]
    || html.match(/locale:\s*"([^"]+)"/)?.[1]
    || html.match(/'locale'\s*:\s*'([^']+)'/)?.[1]
    || 'fr_FR';

  const categoryId = Number(html.match(/categoryId:\s*"?(\d+)"?/)?.[1]
    || html.match(/"categoryId"\s*:\s*(\d+)/)?.[1]
    || 0);

  return { locale, categoryId };
}

function buildJobUrl(origin, job, locale) {
  const title = job.unifiedUrlTitle || job.urlTitle;
  const id = job.id;
  if (!title || !id) return '';
  return `${origin}/job/${title}/${id}-${locale}`;
}

async function main() {
  const careersUrl = process.argv[2];
  if (!careersUrl) {
    throw new Error('Usage: node scripts/parsers/successfactors-unified-jobs.mjs <search-url>');
  }

  const parsed = new URL(careersUrl);
  const origin = parsed.origin;
  const html = await fetchText(careersUrl);
  const { locale, categoryId } = extractPageConfig(html);
  const apiUrl = `${origin}/services/recruiting/v1/jobs`;
  const jobs = [];
  const seen = new Set();

  let pageNumber = 0;
  let totalJobs = null;

  while (totalJobs === null || jobs.length < totalJobs) {
    const payload = {
      locale,
      pageNumber,
      sortBy: '',
      keywords: '',
      location: '',
      facetFilters: {},
      brand: '',
      skills: [],
      categoryId,
      alertId: '',
      rcmCandidateId: '',
    };

    const data = await postJson(apiUrl, payload);
    const rows = Array.isArray(data?.jobSearchResult) ? data.jobSearchResult : [];
    totalJobs = Number.isFinite(data?.totalJobs) ? data.totalJobs : jobs.length + rows.length;

    for (const row of rows) {
      const job = row?.response || row || {};
      const title = decodeHtml(job.unifiedStandardTitle || job.title || '');
      const url = buildJobUrl(origin, job, locale);
      if (!title || !url || seen.has(url)) continue;

      const region = Array.isArray(job.filter1) ? job.filter1.map(decodeHtml).join(', ') : decodeHtml(job.filter1);
      const domain = Array.isArray(job.filter5) ? job.filter5.map(decodeHtml).join(', ') : decodeHtml(job.filter5);

      seen.add(url);
      jobs.push({
        title,
        url,
        location: ['Switzerland', region, domain].filter(Boolean).join(' | '),
      });
    }

    if (rows.length === 0) break;
    pageNumber += 1;
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
