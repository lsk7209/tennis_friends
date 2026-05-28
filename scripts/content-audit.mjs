#!/usr/bin/env node
/**
 * content-audit.mjs — 블로그 & 선수 페이지 콘텐츠 감사 스크립트
 * 실행: node scripts/content-audit.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── 1. 블로그 슬러그 수집 ───────────────────────────────────────────
function extractIds(filePath) {
  if (!existsSync(filePath)) return [];
  const text = readFileSync(filePath, 'utf8');
  const ids = [];
  // "id": "slug" 형식 (aw-300, aw-part12)
  const re1 = /"id":\s*"([^"]+)"/g;
  let m;
  while ((m = re1.exec(text)) !== null) ids.push(m[1]);
  // id: "slug" 형식 (scheduled seeds — 키에 따옴표 없음)
  const re2 = /\bid:\s*"([^"]+)"/g;
  while ((m = re2.exec(text)) !== null) {
    if (!ids.includes(m[1])) ids.push(m[1]);
  }
  return ids;
}

const allSlugs = [
  ...extractIds(join(ROOT, 'src/data/blog-posts.js')),
  ...extractIds(join(ROOT, 'src/data/blog-posts-aw-300.js')),
  ...extractIds(join(ROOT, 'src/data/blog-posts-aw-part12.js')),
];
const uniqueSlugs = [...new Set(allSlugs)];
console.log(`블로그 슬러그 수집: ${uniqueSlugs.length}개`);

// ─── 2. 콘텐츠 맵 키 & 길이 수집 ────────────────────────────────────
const PART_FILES = [
  'part1', 'part2', 'part3', 'part4-new30', 'part5-scheduled',
  'part6-generated', 'part7-generated', 'part8-bulk-01', 'part8-bulk-02',
  'part8-bulk-03', 'part8-bulk-04', 'part9-scheduled-100',
  'part10-scheduled-300', 'part11-article-writer-300', 'part12-article-writer-300',
].map(f => join(ROOT, `src/data/blog-content/${f}.ts`));

// slug → content 문자 수
const contentMap = {};

for (const filePath of PART_FILES) {
  if (!existsSync(filePath)) continue;
  const text = readFileSync(filePath, 'utf8');

  // 모든 최상위 슬러그 키와 위치 수집
  const keyRe = /["']([a-z][a-z0-9-]{4,})["']:\s*\{/g;
  const keys = [];
  let m;
  while ((m = keyRe.exec(text)) !== null) {
    // TypeScript 타입 이름, 변수명 등 필터: 하이픈이 포함된 것만 슬러그로 간주
    if (m[1].includes('-')) keys.push({ key: m[1], pos: m.index });
  }

  for (let i = 0; i < keys.length; i++) {
    const { key, pos } = keys[i];
    const nextPos = i + 1 < keys.length ? keys[i + 1].pos : text.length;
    const segment = text.slice(pos, nextPos);

    // content: `...` (템플릿 리터럴) 또는 "content": "..." (JSON 문자열) 두 형식 지원
    const tmplMatch = segment.match(/content:\s*`([\s\S]*?)`/);
    const hasJsonContent = segment.includes('"content":');
    if (tmplMatch) {
      contentMap[key] = tmplMatch[1].trim().length;
    } else if (hasJsonContent) {
      // JSON 문자열 형식: "content": 이후 세그먼트 길이를 근사값으로 사용
      const ci = segment.indexOf('"content":');
      contentMap[key] = segment.length - ci;
    } else if (!(key in contentMap)) {
      contentMap[key] = 0;
    }
  }
}

console.log(`콘텐츠 맵 키 수집: ${Object.keys(contentMap).length}개`);

// ─── 3. 블로그 감사 분류 ─────────────────────────────────────────────
const THIN_THRESHOLD = 800;
const missing = [];
const thin = [];
const ok = [];

for (const slug of uniqueSlugs) {
  if (!(slug in contentMap)) {
    missing.push(slug);
  } else if (contentMap[slug] < THIN_THRESHOLD) {
    thin.push({ slug, len: contentMap[slug] });
  } else {
    ok.push({ slug, len: contentMap[slug] });
  }
}

// ─── 4. 선수 감사 ────────────────────────────────────────────────────
const TOP20_ATP = [
  'jannik-sinner', 'carlos-alcaraz', 'alexander-zverev', 'taylor-fritz',
  'casper-ruud', 'andrey-rublev', 'ben-shelton', 'alex-de-minaur',
  'tommy-paul', 'daniil-medvedev',
];
const TOP20_WTA = [
  'aryna-sabalenka', 'iga-swiatek', 'coco-gauff', 'jessica-pegula',
  'elena-rybakina', 'mirra-andreeva', 'qinwen-zheng', 'madison-keys',
  'emma-navarro', 'barbora-krejcikova',
];

const PROFILE_FIELDS = [
  'oneLineSummary', 'whyNotable', 'playStyle',
  'signatureMatch', 'fanAppeal', 'recentForm', 'faq',
];

const PLAYER_DATA_FILES = [
  join(ROOT, 'src/data/players/male.ts'),
  join(ROOT, 'src/data/players/female.ts'),
  join(ROOT, 'src/data/players/new-30.ts'),
  join(ROOT, 'src/data/players/scheduled-20.ts'),
];

const playerTexts = PLAYER_DATA_FILES
  .filter(f => existsSync(f))
  .map(f => readFileSync(f, 'utf8'))
  .join('\n');

function auditPlayers(slugs) {
  return slugs.map(slug => {
    const pageExists = existsSync(join(ROOT, `src/app/players/${slug}/page.tsx`));
    const slugRe = new RegExp(`["']${slug}["']:\\s*\\{`);
    const match = slugRe.exec(playerTexts);

    if (!match) return { slug, pageExists, hasData: false, score: 0, fields: {} };

    // 해당 선수 세그먼트 (최대 25000자 — 풍부한 선수는 길어질 수 있음)
    const segment = playerTexts.slice(match.index, match.index + 25000);
    const hasDetailedProfile = segment.includes('detailedProfile:');

    if (!hasDetailedProfile) {
      return { slug, pageExists, hasData: true, score: 0, fields: {} };
    }

    const dpStart = segment.indexOf('detailedProfile:');
    const dpSegment = segment.slice(dpStart, dpStart + 15000);

    const fields = {};
    for (const field of PROFILE_FIELDS) {
      fields[field] = dpSegment.includes(`${field}:`);
    }
    const score = Math.round(
      Object.values(fields).filter(Boolean).length / PROFILE_FIELDS.length * 100
    );

    return { slug, pageExists, hasData: true, score, fields };
  });
}

const atpResults = auditPlayers(TOP20_ATP);
const wtaResults = auditPlayers(TOP20_WTA);

// ─── 5. 마크다운 리포트 ──────────────────────────────────────────────
const today = new Date().toISOString().slice(0, 10);
let md = `# 콘텐츠 감사 리포트 — ${today}\n\n`;

// 블로그 요약
md += `## 1. 블로그 콘텐츠 현황\n\n`;
md += `| 분류 | 수 |\n|------|----|\n`;
md += `| 전체 슬러그 | ${uniqueSlugs.length} |\n`;
md += `| ✅ 정상 (${THIN_THRESHOLD}자 이상) | ${ok.length} |\n`;
md += `| ⚠️ 얇음 (${THIN_THRESHOLD}자 미만) | ${thin.length} |\n`;
md += `| ❌ 콘텐츠 없음 | ${missing.length} |\n\n`;

if (missing.length > 0) {
  md += `### ❌ 콘텐츠 없음 (${missing.length}개) — 우선 작성 대상\n\n`;
  for (const s of missing) md += `- \`${s}\`\n`;
  md += '\n';
}

if (thin.length > 0) {
  md += `### ⚠️ 얇은 콘텐츠 (${thin.length}개) — 보강 대상\n\n`;
  md += `| 슬러그 | 길이(자) |\n|--------|----------|\n`;
  for (const { slug, len } of thin.sort((a, b) => a.len - b.len)) {
    md += `| \`${slug}\` | ${len} |\n`;
  }
  md += '\n';
}

// 선수 감사
md += `## 2. 선수 페이지 완성도 — 상위 20명\n\n`;

function playerTable(results, title) {
  md += `### ${title}\n\n`;
  md += `| 선수 | 페이지 | 데이터 | detailedProfile | 점수 |\n`;
  md += `|------|--------|--------|-----------------|------|\n`;

  for (const r of results) {
    const page = r.pageExists ? '✅' : '❌';
    const data = r.hasData ? '✅' : '❌';
    let profile = '—';
    if (r.hasData && r.score > 0) profile = `${r.score}%`;
    else if (r.hasData) profile = '❌ 없음';
    md += `| \`${r.slug}\` | ${page} | ${data} | ${profile} | ${r.score} |\n`;
  }
  md += '\n';

  const incomplete = results.filter(r => r.hasData && r.score > 0 && r.score < 100);
  if (incomplete.length > 0) {
    md += `**미완성 필드:**\n\n`;
    for (const r of incomplete) {
      const missingFields = PROFILE_FIELDS.filter(f => !r.fields[f]);
      if (missingFields.length > 0) {
        md += `- \`${r.slug}\`: ${missingFields.join(', ')}\n`;
      }
    }
    md += '\n';
  }
}

playerTable(atpResults, 'ATP Top 10');
playerTable(wtaResults, 'WTA Top 10');

md += `---\n*생성: ${new Date().toISOString()}*\n`;

// ─── 6. 저장 & 콘솔 요약 ─────────────────────────────────────────────
const outPath = join(ROOT, 'docs/content-audit-2026-05.md');
writeFileSync(outPath, md, 'utf8');

console.log(`\n===== 감사 결과 요약 =====`);
console.log(`블로그 전체: ${uniqueSlugs.length}개`);
console.log(`  ✅ 정상:     ${ok.length}개`);
console.log(`  ⚠️ 얇음:     ${thin.length}개`);
console.log(`  ❌ 없음:     ${missing.length}개`);
console.log(`\n선수 페이지:`);
console.log(`  ATP 페이지 있음: ${atpResults.filter(r => r.pageExists).length}/10`);
console.log(`  WTA 페이지 있음: ${wtaResults.filter(r => r.pageExists).length}/10`);
console.log(`  ATP 데이터 있음: ${atpResults.filter(r => r.hasData).length}/10`);
console.log(`  WTA 데이터 있음: ${wtaResults.filter(r => r.hasData).length}/10`);
console.log(`\n리포트 저장: ${outPath}`);
