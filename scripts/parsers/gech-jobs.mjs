#!/usr/bin/env node

import { execFile } from 'child_process';
import { promisify } from 'util';

const DEFAULT_URL = 'https://www.ge.ch/offres-emploi-etat-geneve/liste-offres';
const execFileAsync = promisify(execFile);

function decodeHtml(value) {
  return String(value || '')
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

async function main() {
  const careersUrl = process.argv[2] || DEFAULT_URL;
  const html = await fetchHtml(careersUrl);
  const baseUrl = new URL(careersUrl);
  const jobs = [];
  const seen = new Set();
  const linkRe = /<a\b[^>]*href=["']([^"']*\/offres-emploi-etat-geneve\/liste-offres\/\d+[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi;

  for (const match of html.matchAll(linkRe)) {
    const url = new URL(match[1], baseUrl).href;
    if (seen.has(url)) continue;
    const title = decodeHtml(match[2]);
    if (!title || title.toLowerCase() === 'postuler') continue;
    seen.add(url);
    jobs.push({
      title,
      url,
      location: 'Geneva, Switzerland',
    });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
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
      maxBuffer: 2_000_000,
    });
    return stdout;
  }
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
