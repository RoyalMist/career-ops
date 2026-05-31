#!/usr/bin/env node

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

function stripTags(value) {
  return decodeHtml(String(value || '').replace(/<[^>]*>/g, ' '));
}

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      accept: 'text/html,application/xhtml+xml',
      'user-agent': 'career-ops job scanner',
    },
  });

  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.text();
}

function absolutizeUrl(rawUrl, baseUrl) {
  try {
    return new URL(decodeHtml(rawUrl), baseUrl).href;
  } catch {
    return '';
  }
}

async function main() {
  const careersUrl = process.argv[2];
  if (!careersUrl) {
    throw new Error('Usage: node scripts/parsers/successfactors-category-jobs.mjs <category-url>');
  }

  const html = await fetchText(careersUrl);
  const jobs = [];
  const seen = new Set();

  for (const rowMatch of html.matchAll(/<tr\b[^>]*class="[^"]*\bdata-row\b[^"]*"[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const row = rowMatch[1];
    const linkMatch = row.match(/<a\b[^>]*class="[^"]*\bjobTitle-link\b[^"]*"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
    if (!linkMatch) continue;

    const url = absolutizeUrl(linkMatch[1], careersUrl);
    const title = stripTags(linkMatch[2]);
    if (!url || !title || seen.has(url)) continue;

    const department = stripTags(row.match(/<span\b[^>]*class="[^"]*\bjobDepartment\b[^"]*"[^>]*>([\s\S]*?)<\/span>/i)?.[1] || '');
    const facility = stripTags(row.match(/<span\b[^>]*class="[^"]*\bjobFacility\b[^"]*"[^>]*>([\s\S]*?)<\/span>/i)?.[1] || '');
    const type = stripTags(row.match(/<span\b[^>]*class="[^"]*\bjobShifttype\b[^"]*"[^>]*>([\s\S]*?)<\/span>/i)?.[1] || '');

    seen.add(url);
    jobs.push({
      title,
      url,
      location: ['Geneva, Switzerland', department, facility, type].filter(Boolean).join(' | '),
    });
  }

  process.stdout.write(JSON.stringify(jobs, null, 2));
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
