#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const DEFAULT_FEED_URL = 'https://swissdevjobs.ch/rss';
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
  return url.replace(/[?&](utm_[^=]+)=[^&]+/g, '').replace(/[?&]$/, '');
}

function parseTitle(rawTitle) {
  const title = decodeHtml(rawTitle);
  const match = title.match(/^(.*?)\s+@\s+(.*?)(?:\s+\[(CHF[^\]]+)\])?$/);

  if (!match) {
    return { title, company: 'SwissDevJobs' };
  }

  return {
    title: match[3] ? `${match[1].trim()} [${match[3].trim()}]` : match[1].trim(),
    company: match[2].trim(),
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
      maxBuffer: 5_000_000,
    });
    return stdout;
  }
}

async function main() {
  const feedUrl = process.argv[2] || DEFAULT_FEED_URL;
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

    const { title, company } = parseTitle(titleMatch[1]);
    if (!title) continue;

    seen.add(url);
    jobs.push({
      title,
      company,
      url,
      location: 'Switzerland',
    });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
