// @ts-check
/** @typedef {import('./_types.js').Provider} Provider */

// Workday provider — hits the public CXS jobs endpoint.
// Supports careers URLs like:
//   https://company.wd3.myworkdayjobs.com/fr-FR/Site_Name

const WORKDAY_HOST_RE = /^[a-z0-9-]+\.wd\d+\.myworkdayjobs\.com$/i;
const LOCALE_RE = /^[a-z]{2}-[A-Z]{2}$/;

function parseWorkdayUrl(entry) {
  const rawUrl = entry.api || entry.careers_url || '';
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return null;
  }

  if (parsed.protocol !== 'https:') return null;
  if (!WORKDAY_HOST_RE.test(parsed.hostname)) return null;

  const tenant = parsed.hostname.split('.')[0];
  const parts = parsed.pathname.split('/').filter(Boolean);
  if (parts.length === 0) return null;

  const locale = LOCALE_RE.test(parts[0]) ? parts[0] : 'en-US';
  const site = LOCALE_RE.test(parts[0]) ? parts[1] : parts[0];
  if (!site) return null;

  const origin = parsed.origin;
  return {
    origin,
    tenant,
    site,
    locale,
    apiUrl: `${origin}/wday/cxs/${tenant}/${site}/jobs`,
  };
}

function publicUrl(meta, externalPath) {
  if (!externalPath) return '';
  if (/^https?:\/\//i.test(externalPath)) return externalPath;
  const path = externalPath.startsWith('/') ? externalPath : `/${externalPath}`;
  return `${meta.origin}/${meta.locale}/${meta.site}${path}`;
}

/** @type {Provider} */
export default {
  id: 'workday',

  detect(entry) {
    const meta = parseWorkdayUrl(entry);
    return meta ? { url: meta.apiUrl } : null;
  },

  async fetch(entry, ctx) {
    const meta = parseWorkdayUrl(entry);
    if (!meta) throw new Error(`workday: cannot derive API URL for ${entry.name}`);

    const jobs = [];
    const limit = 20;
    let offset = 0;
    let total = null;

    while (total === null || offset < total) {
      const json = await ctx.fetchJson(meta.apiUrl, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          appliedFacets: {},
          limit,
          offset,
          searchText: '',
        }),
      });

      const pageJobs = Array.isArray(json?.jobPostings) ? json.jobPostings : [];
      total = Number.isFinite(json?.total) ? json.total : offset + pageJobs.length;

      for (const job of pageJobs) {
        jobs.push({
          title: job.title || '',
          url: publicUrl(meta, job.externalPath || ''),
          company: entry.name,
          location: job.locationsText || '',
        });
      }

      if (pageJobs.length === 0) break;
      offset += limit;
    }

    return jobs;
  },
};
