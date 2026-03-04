const fs = require('fs');
const path = require('path');

const root = process.cwd();
const playersDir = path.join(root, 'src', 'app', 'players');
const playersDataPath = path.join(root, 'src', 'data', 'players.ts');
const reportPath = path.join(root, 'docs', 'reports', 'PLAYER_SEO_AUDIT_LATEST.md');

const MIN_TEXT_LENGTH = 1800;
const canonicalDomain = 'https://www.tennisfrens.com';

const repeatedPatterns = [
  '세계 상위권을 유지하는 힘은',
  '화려한 장식보다는 효율을 추구하며',
  '가 상위권 경쟁력은',
  '이 상위권 경쟁력은',
];

function extractVisibleTextLength(content) {
  const cleaned = content
    .replace(/import[^\n]*\n/g, ' ')
    .replace(/export[^\n]*\n/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.length;
}

function getStaticPlayerPages() {
  return fs.readdirSync(playersDir, { withFileTypes: true })
    .filter((d) => d.isDirectory() && d.name !== '[slug]')
    .map((d) => ({
      slug: d.name,
      file: path.join(playersDir, d.name, 'page.tsx'),
    }))
    .filter((x) => fs.existsSync(x.file));
}

function auditStaticPages() {
  const pages = getStaticPlayerPages();
  const issues = {
    shortText: [],
    repeatedPhrase: [],
    canonicalMismatch: [],
    missingCanonical: [],
  };

  for (const page of pages) {
    const content = fs.readFileSync(page.file, 'utf8');
    const isRedirectOnly = /redirect\(['"`]\/players\//.test(content);

    if (isRedirectOnly) {
      continue;
    }

    const textLength = extractVisibleTextLength(content);

    if (textLength < MIN_TEXT_LENGTH) {
      issues.shortText.push({ slug: page.slug, textLength });
    }

    for (const p of repeatedPatterns) {
      if (content.includes(p)) {
        issues.repeatedPhrase.push({ slug: page.slug, pattern: p });
      }
    }

    const canonicalMatch = content.match(/canonical:\s*'([^']+)'/);
    if (!canonicalMatch) {
      issues.missingCanonical.push(page.slug);
    } else {
      const url = canonicalMatch[1];
      if (!url.startsWith(`${canonicalDomain}/players/${page.slug}`)) {
        issues.canonicalMismatch.push({ slug: page.slug, canonical: url });
      }
    }
  }

  return { count: pages.length, issues };
}

function auditPlayersData() {
  const content = fs.readFileSync(playersDataPath, 'utf8');
  const slugMatches = [...content.matchAll(/\n\s*'([^']+)':\s*\{/g)].map((m) => m[1]);

  const legacySlugs = ['linner-tien', 'arthur-landercknech'];
  const missingCanonicalSlugs = ['lerner-tien', 'arthur-rinderknech'].filter((s) => !slugMatches.includes(s));
  const remainedLegacy = legacySlugs.filter((s) => slugMatches.includes(s));

  return {
    totalPlayers: slugMatches.length,
    remainedLegacy,
    missingCanonicalSlugs,
  };
}

function formatList(items, formatter = (x) => `- ${x}`) {
  if (!items.length) return '- 없음';
  return items.map(formatter).join('\n');
}

function writeReport(staticAudit, dataAudit) {
  const now = new Date().toISOString();
  const lines = [
    '# PLAYER SEO AUDIT (LATEST)',
    '',
    `- Generated at: ${now}`,
    `- Static player pages checked: ${staticAudit.count}`,
    `- Player entries in DB: ${dataAudit.totalPlayers}`,
    '',
    '## 1) Static page text length (< 1800)',
    formatList(staticAudit.issues.shortText, (x) => `- ${x.slug}: ${x.textLength}`),
    '',
    '## 2) Repeated phrase patterns',
    formatList(staticAudit.issues.repeatedPhrase, (x) => `- ${x.slug}: ${x.pattern}`),
    '',
    '## 3) Canonical issues',
    '### Missing canonical',
    formatList(staticAudit.issues.missingCanonical),
    '',
    '### Canonical mismatch',
    formatList(staticAudit.issues.canonicalMismatch, (x) => `- ${x.slug}: ${x.canonical}`),
    '',
    '## 4) DB slug normalization checks',
    `- Legacy slug remained: ${dataAudit.remainedLegacy.length ? dataAudit.remainedLegacy.join(', ') : '없음'}`,
    `- Missing canonical slug: ${dataAudit.missingCanonicalSlugs.length ? dataAudit.missingCanonicalSlugs.join(', ') : '없음'}`,
    '',
    '## Suggested next actions',
    '- 다음 신규/수정 선수 페이지도 최소 1800자+최근 12개월 폼/코트별 전술/FAQ 기준을 유지',
    '- canonical 누락/불일치 페이지 우선 수정',
    '- 본 리포트를 배포 전 체크리스트로 활용',
    '',
  ];

  fs.writeFileSync(reportPath, lines.join('\n'));
}

function main() {
  const staticAudit = auditStaticPages();
  const dataAudit = auditPlayersData();
  writeReport(staticAudit, dataAudit);

  console.log('[PLAYER SEO AUDIT] done');
  console.log(`- static pages: ${staticAudit.count}`);
  console.log(`- short text pages: ${staticAudit.issues.shortText.length}`);
  console.log(`- repeated patterns: ${staticAudit.issues.repeatedPhrase.length}`);
  console.log(`- canonical missing: ${staticAudit.issues.missingCanonical.length}`);
  console.log(`- canonical mismatch: ${staticAudit.issues.canonicalMismatch.length}`);
  console.log(`- legacy slug remained: ${dataAudit.remainedLegacy.length}`);
  console.log(`- report: ${path.relative(root, reportPath)}`);
}

main();
