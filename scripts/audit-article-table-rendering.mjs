#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { normalizeArticleHtml } from "../src/lib/article-html.mjs";

const ROOT = process.cwd();
const REPORT_DIR = path.join(ROOT, "docs", "reports");
const CONTENT_FILE = "src/data/blog-content/part29-approved-august-2026.ts";
const TARGET_SLUG = "t09-20-minute-wall-practice-log";
const findings = [];

function assert(condition, issue, detail = {}) {
  if (!condition) findings.push({ issue, ...detail });
}

const source = fs.readFileSync(path.join(ROOT, CONTENT_FILE), "utf8");
const contentDirectory = path.join(ROOT, "src", "data", "blog-content");
const rawTableFiles = fs
  .readdirSync(contentDirectory)
  .filter((file) => file.endsWith(".ts"))
  .map((file) => ({
    file,
    source: fs.readFileSync(path.join(contentDirectory, file), "utf8"),
  }))
  .filter(({ source: fileSource }) => /<p>\s*:?-{3,}:?\s*\|/i.test(fileSource));

assert(rawTableFiles.length === 1, "raw table syntax exists outside the known source file", {
  files: rawTableFiles.map(({ file }) => file),
});
assert(rawTableFiles[0]?.file === path.basename(CONTENT_FILE), "unexpected raw table source file", {
  files: rawTableFiles.map(({ file }) => file),
});

const contentEntries = [...source.matchAll(/"([^"]+)":\s*\{[\s\S]*?content:\s*`([\s\S]*?)`,\s*faq:/g)];
let allRawSeparatorCount = 0;
let allConvertedTableCount = 0;
for (const [, slug, rawContent] of contentEntries) {
  const separatorCount = (rawContent.match(/<p>\s*:?-{3,}:?\s*\|/gi) || []).length;
  if (separatorCount === 0) continue;

  const converted = normalizeArticleHtml(rawContent);
  const convertedCount = (converted.match(/<table\b/gi) || []).length;
  allRawSeparatorCount += separatorCount;
  allConvertedTableCount += convertedCount;
  assert(!/<p>\s*:?-{3,}:?\s*\|/i.test(converted), "raw separator remains after conversion", {
    slug,
  });
  assert(convertedCount === separatorCount, "not every raw table was converted", {
    slug,
    separatorCount,
    convertedCount,
  });
}
assert(allRawSeparatorCount === 29, "unexpected content-wide raw table count", {
  expected: 29,
  actual: allRawSeparatorCount,
});
assert(allConvertedTableCount === allRawSeparatorCount, "content-wide table conversion mismatch", {
  allRawSeparatorCount,
  allConvertedTableCount,
});

const articleStart = source.indexOf(`"${TARGET_SLUG}"`);
const articleEnd = source.indexOf('\n  "t10-match-mistake-review-scenes"', articleStart);
assert(articleStart >= 0 && articleEnd > articleStart, "target article source boundary missing");

let rawArticle = "";
if (articleStart >= 0 && articleEnd > articleStart) {
  const articleSource = source.slice(articleStart, articleEnd);
  rawArticle = articleSource.match(/content: `([\s\S]*?)`, faq:/)?.[1] ?? "";
}
assert(Boolean(rawArticle), "target article HTML template missing");

const rawSeparatorCount = (rawArticle.match(/<p>\s*:?-{3,}:?\s*\|/gi) || []).length;
const normalized = normalizeArticleHtml(rawArticle);
const tableCount = (normalized.match(/<table\b/gi) || []).length;
const wrapperCount = (normalized.match(/class="table-wrapper"/g) || []).length;

assert(rawSeparatorCount === 4, "unexpected target raw table count", {
  expected: 4,
  actual: rawSeparatorCount,
});
assert(tableCount === 4, "target raw tables were not all converted", {
  expected: 4,
  actual: tableCount,
});
assert(wrapperCount === tableCount, "each converted table needs one scroll wrapper", {
  tableCount,
  wrapperCount,
});
assert(!/<p>\s*:?-{3,}:?\s*\|/i.test(normalized), "raw separator paragraph remains");
assert(normalized.includes('<th scope="col">반복되는 결과</th>'), "target table header missing");
assert(normalized.includes('<th scope="row">공이 계속 높다</th>'), "target row header missing");
assert(normalized.includes("벽에 목표 구역을 상상한다"), "content before target table was lost");
assert(normalized.includes("쉬는 주의 감각을 지키는 다른 방법"), "content after target table was lost");

const existingTable = normalizeArticleHtml(
  "<article><p>앞</p><table><tbody><tr><td>값</td></tr></tbody></table><p>뒤</p></article>",
);
assert(existingTable.includes('class="table-wrapper"'), "existing HTML table wrapper missing");
assert((existingTable.match(/class="table-wrapper"/g) || []).length === 1, "existing table double wrapped");
assert(!existingTable.includes("<article>"), "outer article tag was not removed");

const ordinaryPipes = "<p>복식 위치 | 파트너 약속을 문장으로 적는다.</p><p>다음 문장</p>";
assert(
  normalizeArticleHtml(ordinaryPipes) === ordinaryPipes,
  "ordinary pipe text without a separator row must remain unchanged",
);

const visualPath = path.join(ROOT, "public", "images", "blog", "20-minute-wall-practice.webp");
const visualBytes = fs.existsSync(visualPath) ? fs.statSync(visualPath).size : 0;
assert(visualBytes > 0, "wall-practice image missing");
assert(visualBytes <= 150_000, "wall-practice image exceeds pilot byte budget", {
  maxBytes: 150_000,
  actualBytes: visualBytes,
});

const report = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  targetSlug: TARGET_SLUG,
  sourceFile: CONTENT_FILE,
  rawSeparatorCount,
  convertedTableCount: tableCount,
  contentWideRawTableCount: allRawSeparatorCount,
  contentWideConvertedTableCount: allConvertedTableCount,
  visualBytes,
  findings,
};

fs.mkdirSync(REPORT_DIR, { recursive: true });
fs.writeFileSync(
  path.join(REPORT_DIR, "article-table-rendering-audit-latest.json"),
  `${JSON.stringify(report, null, 2)}\n`,
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report));
