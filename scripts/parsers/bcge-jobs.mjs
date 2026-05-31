#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const DEFAULT_URL = 'https://jobs.bcge.ch/fr';
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

function extractNextData(html) {
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Could not find BCGE Next.js data');
  return JSON.parse(match[1]);
}

function getInformationValue(offer, id, labelPattern) {
  const item = (offer.information || []).find(info => {
    return info.id === id || labelPattern.test(String(info.label || ''));
  });

  return item ? decodeHtml(item.value) : '';
}

async function fetchHtml(url) {
  try {
    const response = await fetch(url, {
      headers: {
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'career-ops job scanner',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.text();
  } catch {
    const { stdout } = await execFileAsync('curl', ['-L', '--max-time', '25', url], {
      maxBuffer: 3_000_000,
    });
    return stdout;
  }
}

async function main() {
  const careersUrl = process.argv[2] || DEFAULT_URL;
  const html = await fetchHtml(careersUrl);
  const data = extractNextData(html);
  const offers = data?.props?.pageProps?.offers || [];
  const jobs = [];
  const seen = new Set();

  for (const offer of offers) {
    const title = decodeHtml(offer.title);
    const url = offer.uri || (offer.slug && offer.id
      ? `https://jobs.bcge.ch/fr/nos-offres/${offer.slug}-${offer.id}`
      : '');

    if (!title || !url || seen.has(url)) continue;

    const location = getInformationValue(offer, 'lieu-travail', /lieu de travail/i)
      || 'Geneva, Switzerland';
    const department = getInformationValue(offer, 'job', /m[ée]tier/i);

    seen.add(url);
    jobs.push({
      title,
      url,
      location,
      department,
    });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
