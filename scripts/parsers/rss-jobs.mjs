#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const execFileAsync = promisify(execFile);

function decodeHtml(value) {
  return String(value || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, ' ')
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

function cleanUrl(value) {
  const url = decodeHtml(value);
  return url.replace(/[?&](feedId|utm_[^=]+)=[^&]+/g, '').replace(/[?&]$/, '');
}

function splitTitleAndLocation(rawTitle) {
  const title = decodeHtml(rawTitle);
  const locationMatch = title.match(/\s+\(([^()]*,\s*[^()]*,\s*CH)\)\s*$/);
  if (!locationMatch) return { title, location: '' };

  return {
    title: title.slice(0, locationMatch.index).trim(),
    location: locationMatch[1].replace(/,\s*CH$/, ', Switzerland'),
  };
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      headers: {
        accept: 'application/rss+xml,application/xml,text/xml',
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
  const feedUrl = process.argv[2];
  if (!feedUrl) throw new Error('Usage: node scripts/parsers/rss-jobs.mjs <rss-url>');

  const xml = await fetchText(feedUrl);
  const jobs = [];
  const seen = new Set();

  for (const match of xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)) {
    const item = match[1];
    const titleMatch = item.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const linkMatch = item.match(/<link[^>]*>([\s\S]*?)<\/link>/i);
    if (!titleMatch || !linkMatch) continue;

    const url = cleanUrl(linkMatch[1]);
    if (!url || seen.has(url)) continue;

    const { title, location } = splitTitleAndLocation(titleMatch[1]);
    if (!title) continue;

    seen.add(url);
    jobs.push({ title, url, location });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
