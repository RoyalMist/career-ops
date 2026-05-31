#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

function decodeText(value) {
  return String(value || '')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripHtml(value) {
  return decodeText(String(value || '').replace(/<[^>]+>/g, ' '));
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
      '-s',
      '-H',
      'accept: application/json',
      url,
    ], {
      maxBuffer: 5_000_000,
    });
    return JSON.parse(stdout);
  }
}

function extractConfig(careersUrl) {
  const parsed = new URL(careersUrl);
  const match = parsed.pathname.match(/\/external\/([^/]+)\/companies\/([^/]+)\/jobs/);
  if (!match) {
    throw new Error('PeopleWeek URL must look like /external/{locale}/companies/{entityGroupId}/jobs');
  }

  return {
    origin: parsed.origin,
    locale: match[1],
    entityGroupId: match[2],
  };
}

function buildJobUrl(origin, locale, entityGroupId, vacancyId) {
  return `${origin}/external/${locale}/companies/${entityGroupId}/jobs/${vacancyId}`;
}

function locationText(job) {
  const locations = Array.isArray(job?.locations?.data) ? job.locations.data : [];
  return locations
    .map(location => location?.name || [location?.state, location?.country].filter(Boolean).join(', '))
    .filter(Boolean)
    .join(', ');
}

async function main() {
  const careersUrl = process.argv[2];
  if (!careersUrl) {
    throw new Error('Usage: node scripts/parsers/peopleweek-jobs.mjs <careers-url>');
  }

  const { origin, locale, entityGroupId } = extractConfig(careersUrl);
  const apiUrl = `${origin}/api/v1/external/recruitment/vacancies/entity-group/${entityGroupId}`
    + '?accessRule=DIRECT_APPLICANTS&perPage=9999&page=1&include=locations,customVacancyFieldValues';

  const payload = await fetchJson(apiUrl);
  const rows = Array.isArray(payload?.data) ? payload.data : [];
  const seen = new Set();
  const jobs = [];

  for (const row of rows) {
    const id = row?.id;
    const title = decodeText(row?.jobTitle?.title || row?.title || '');
    if (!id || !title) continue;

    const url = buildJobUrl(origin, locale, entityGroupId, id);
    if (seen.has(url)) continue;

    seen.add(url);
    jobs.push({
      title,
      url,
      location: locationText(row),
      department: decodeText(row?.department?.name || ''),
      description: stripHtml([
        row?.jobPurpose,
        row?.positionSummary,
        row?.requirements,
      ].filter(Boolean).join('\n\n')),
    });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
