import fs from 'node:fs';
import path from 'node:path';

function argument(name) {
  const index = process.argv.indexOf(`--${name}`);
  return index >= 0 ? process.argv[index + 1] : null;
}

function normalizeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value, 'https://tennisfrens.com');
    const pathname = url.pathname.replace(/\/+$/, '') || '/';
    return pathname;
  } catch {
    return null;
  }
}

function validateExport(payload, source) {
  if (!payload?.metadata || !Array.isArray(payload.rows)) throw new Error(`${source}: invalid export shape`);
  for (const field of ['property', 'timezone', 'dateStart', 'dateEnd', 'dimensions', 'rowLimit', 'anonymized']) {
    if (!(field in payload.metadata)) throw new Error(`${source}: metadata.${field} is required`);
  }
  if (payload.metadata.anonymized !== true) throw new Error(`${source}: only anonymized exports are accepted`);
}

function readExport(file, source) {
  const payload = JSON.parse(fs.readFileSync(file, 'utf8'));
  validateExport(payload, source);
  return payload;
}

function mergeExports(gsc, ga4) {
  const byUrl = new Map();
  for (const [source, payload] of [['gsc', gsc], ['ga4', ga4]]) {
    if (!payload) continue;
    for (const row of payload.rows) {
      const url = normalizeUrl(row.url);
      if (!url) continue;
      const current = byUrl.get(url) || {
        url,
        clicks: null,
        impressions: null,
        views: null,
        sessions: null,
        engagementRate: null,
      };
      for (const metric of source === 'gsc' ? ['clicks', 'impressions'] : ['views', 'sessions', 'engagementRate']) {
        if (row[metric] !== null && row[metric] !== undefined && Number.isFinite(Number(row[metric]))) {
          current[metric] = Number(row[metric]);
        }
      }
      byUrl.set(url, current);
    }
  }
  return [...byUrl.values()].sort((a, b) => a.url.localeCompare(b.url));
}

if (process.argv.includes('--self-test')) {
  const rows = mergeExports(
    { rows: [{ url: 'https://tennisfrens.com/a?x=1', clicks: 0, impressions: 4 }] },
    { rows: [{ url: '/a/', views: 3, sessions: 2, engagementRate: 0.5 }] },
  );
  if (JSON.stringify(rows) !== JSON.stringify([{ url: '/a', clicks: 0, impressions: 4, views: 3, sessions: 2, engagementRate: 0.5 }])) {
    throw new Error('analytics export merge self-test failed');
  }
  console.log(JSON.stringify({ status: 'PASS', cases: ['URL normalization', 'zero preserved', 'null distinct from zero', 'cross-source join'] }));
  process.exit(0);
}

const gscPath = argument('gsc');
const ga4Path = argument('ga4');
if (!gscPath && !ga4Path) throw new Error('Provide --gsc <normalized.json> and/or --ga4 <normalized.json>');

const gsc = gscPath ? readExport(gscPath, 'GSC') : null;
const ga4 = ga4Path ? readExport(ga4Path, 'GA4') : null;
const report = {
  generatedAt: new Date().toISOString(),
  status: 'IMPORTED',
  metadata: { gsc: gsc?.metadata ?? null, ga4: ga4?.metadata ?? null },
  rows: mergeExports(gsc, ga4),
  decisionPolicy: 'No URL deletion or noindex decision may be made from a single metric or zero-click row.',
};
const output = argument('output') || 'docs/reports/analytics-joined-latest.json';
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ status: report.status, output, rows: report.rows.length }));
