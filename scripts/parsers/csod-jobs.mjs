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
        accept: 'text/html,application/xhtml+xml',
        'user-agent': 'career-ops job scanner',
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.text();
  } catch {
    const { stdout } = await execFileAsync('curl', ['-L', '--max-time', '25', '-s', url], {
      maxBuffer: 2_000_000,
    });
    return stdout;
  }
}

async function postJson(url, payload, { token, cultureName }) {
  const body = JSON.stringify(payload);
  const headers = {
    accept: 'application/json',
    'content-type': 'application/json',
    Authorization: `Bearer ${token}`,
    'CSOD-Accept-Language': cultureName,
    'user-agent': 'career-ops job scanner',
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } catch {
    const curlHeaders = Object.entries(headers).flatMap(([key, value]) => ['-H', `${key}: ${value}`]);
    const { stdout } = await execFileAsync('curl', [
      '-L',
      '--max-time',
      '25',
      '-s',
      ...curlHeaders,
      '--data-binary',
      body,
      url,
    ], {
      maxBuffer: 5_000_000,
    });
    return JSON.parse(stdout);
  }
}

function extractJsonField(html, field) {
  return html.match(new RegExp(`"${field}"\\s*:\\s*"([^"]+)"`))?.[1] || '';
}

function extractNumberField(html, field) {
  const value = html.match(new RegExp(`"${field}"\\s*:\\s*(\\d+)`))?.[1]
    || html.match(new RegExp(`"${field}"\\s*:\\s*"(\\d+)"`))?.[1]
    || html.match(new RegExp(`${field}\\s*:\\s*(\\d+)`))?.[1];
  return value ? Number(value) : null;
}

function extractConfig(html) {
  const token = extractJsonField(html, 'token');
  const cultureName = extractJsonField(html, 'cultureName') || 'fr-FR';
  const cultureId = extractNumberField(html, 'cultureID') || extractNumberField(html, 'cultureId') || 13;
  const cloud = html.match(/"cloud"\s*:\s*"([^"]+)"/)?.[1] || 'https://eu-fra.api.csod.com/';
  const careerSiteId = extractNumberField(html, 'cid') || 1;

  if (!token) throw new Error('CSOD token not found in careers page');

  return {
    token,
    cultureName,
    cultureId,
    cloud: cloud.endsWith('/') ? cloud : `${cloud}/`,
    careerSiteId,
  };
}

function locationTitle(locations) {
  if (!Array.isArray(locations)) return '';
  return locations
    .map(location => [location.city, location.state, location.country].filter(Boolean).join(', '))
    .filter(Boolean)
    .join(' | ');
}

function buildJobUrl(careersUrl, requisitionId) {
  const parsed = new URL(careersUrl);
  const search = parsed.search || '';
  const basePath = parsed.pathname.replace(/\/home(?:\/.*)?$/, '/home');
  return `${parsed.origin}${basePath}/requisition/${requisitionId}${search}`;
}

async function main() {
  const careersUrl = process.argv[2];
  if (!careersUrl) {
    throw new Error('Usage: node scripts/parsers/csod-jobs.mjs <careers-url>');
  }

  const html = await fetchText(careersUrl);
  const config = extractConfig(html);
  const apiUrl = `${config.cloud}rec-job-search/external/jobs`;

  const payload = {
    careerSiteId: config.careerSiteId,
    careerSitePageId: config.careerSiteId,
    pageNumber: 1,
    pageSize: 100,
    cultureId: config.cultureId,
    searchText: '',
    cultureName: config.cultureName,
    states: [],
    countryCodes: [],
    cities: [],
    placeID: '',
    radius: null,
    postingsWithinDays: null,
    customFieldCheckboxKeys: [],
    customFieldDropdowns: [],
    customFieldRadios: [],
  };

  const data = await postJson(apiUrl, payload, config);
  const rows = Array.isArray(data?.data?.requisitions) ? data.data.requisitions : [];
  const jobs = rows
    .map(row => ({
      title: decodeHtml(row.displayJobTitle),
      url: buildJobUrl(careersUrl, row.requisitionId),
      location: locationTitle(row.locations),
    }))
    .filter(job => job.title && job.url);

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
