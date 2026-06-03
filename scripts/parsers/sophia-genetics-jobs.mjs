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
    .replace(/\s+/g, ' ')
    .trim();
}

function stripTags(value) {
  return decodeHtml(String(value || '').replace(/<[^>]*>/g, ' '));
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'career-ops job scanner',
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch {
    const { stdout } = await execFileAsync('curl', ['-L', '--max-time', '25', '-s', url], {
      maxBuffer: 3_000_000,
    });
    return stdout;
  }
}

function field(row, className) {
  const match = row.match(new RegExp(`<td\\b[^>]*class="[^"]*${className}[^"]*"[^>]*>([\\s\\S]*?)<\\/td>`, 'i'));
  return stripTags(match?.[1] || '');
}

async function main() {
  const careersUrl = process.argv[2] || 'https://careers.sophiagenetics.com/jobs/search/job-search-Switzerland';
  const html = await fetchText(careersUrl);
  const jobs = [];
  const seen = new Set();

  for (const rowMatch of html.matchAll(/<tr\b[^>]*data-job-url="([^"]+)"[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const url = decodeHtml(rowMatch[1]);
    const row = rowMatch[2];
    const title = stripTags(row.match(/<a\b[^>]*aria-label="Title:\s*([^"]+)"/i)?.[1] || field(row, 'job-search-results-title'));
    if (!url || !title || seen.has(url)) continue;

    const department = field(row, 'job-search-results-department');
    const employmentType = field(row, 'job-search-results-employment-type');
    const location = field(row, 'job-search-results-location');
    const workplaceType = field(row, 'job-search-results-workplace-types');

    seen.add(url);
    jobs.push({
      title,
      url,
      company: 'SOPHiA GENETICS',
      location: [location, department, employmentType, workplaceType].filter(Boolean).join(' | '),
    });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
