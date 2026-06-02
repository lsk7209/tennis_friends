#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const REPORT_DATE = new Date().toISOString().slice(0, 10);
const REPORT_DIR = join(ROOT, "docs", "reports");
const POST_FILES = [
  "src/data/blog-posts.js",
  "src/data/blog-posts-aw-300.js",
  "src/data/blog-posts-aw-part12.js",
  "src/data/blog-posts-aw-title100.js",
  "src/data/blog-posts-part16-overrides.js",
  "src/data/blog-posts-part17-overrides.js",
  "src/data/blog-posts-part18-overrides.js",
  "src/data/blog-posts-part19-overrides.js",
  "src/data/blog-posts-part20-overrides.js",
  "src/data/blog-posts-part21-overrides.js",
  "src/data/blog-posts-part22-overrides.js",
  "src/data/blog-posts-part23-overrides.js",
  "src/data/blog-posts-part24-overrides.js",
  "src/data/blog-posts-part25-overrides.js",
  "src/data/blog-posts-part26-overrides.js",
];
const CONTENT_FILES = [
  "part1",
  "part2",
  "part3",
  "part4-new30",
  "part5-scheduled",
  "part6-generated",
  "part7-generated",
  "part8-bulk-01",
  "part8-bulk-02",
  "part8-bulk-03",
  "part8-bulk-04",
  "part9-scheduled-100",
  "part10-scheduled-300",
  "part11-article-writer-300",
  "part12-article-writer-300",
  "part13-optimized",
  "part14-title100",
  "part16-quality-rewrites",
  "part17-quality-rewrites",
  "part18-quality-rewrites",
  "part19-quality-rewrites",
  "part20-quality-rewrites",
  "part21-quality-rewrites",
  "part22-quality-rewrites",
  "part23-quality-rewrites",
  "part24-quality-rewrites",
  "part25-quality-rewrites",
  "part26-quality-rewrites",
].map((name) => `src/data/blog-content/${name}.ts`);

const MOJIBAKE_PATTERN = /[\uFFFD]|\?\?|[\u4E00-\u9FFF]|[\uF900-\uFAFF]/;

function hasGarbledText(value) {
  return MOJIBAKE_PATTERN.test(value);
}

const TEMPLATE_TITLE_LIMIT = 8;
const TEMPLATE_EXCERPT_LIMIT = 8;
const TITLE_MAX_LENGTH = 60;
const NAVER_TITLE_MAX_LENGTH = 40;
const EXCERPT_MAX_LENGTH = 120;
const NAVER_EXCERPT_MAX_LENGTH = 80;

function readProjectFile(relativePath) {
  const filePath = join(ROOT, relativePath);
  if (!existsSync(filePath)) return "";
  return readFileSync(filePath, "utf8");
}

function readStringField(segment, field) {
  const match = new RegExp(`"${field}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`, "s").exec(
    segment,
  );
  if (!match) return "";
  return match[1]
    .replace(/\\"/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    );
}

function readArrayField(segment, field) {
  const match = new RegExp(`"${field}"\\s*:\\s*\\[([\\s\\S]*?)\\]`).exec(
    segment,
  );
  if (!match) return [];
  return [...match[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((item) =>
    item[1].replace(/\\"/g, '"'),
  );
}

function extractObjectSegments(text) {
  const segments = [];
  const slugRe = /"slug"\s*:\s*"([^"]+)"/g;
  let match;

  while ((match = slugRe.exec(text)) !== null) {
    const start = text.lastIndexOf("{", match.index);
    const next = text.indexOf("\n  {", match.index + 1);
    const end = next > -1 ? next : text.indexOf("\n]", match.index);
    if (start > -1 && end > -1) {
      segments.push(text.slice(start, end));
    }
  }

  return segments;
}

function collectPosts() {
  const posts = new Map();

  for (const file of POST_FILES) {
    const text = readProjectFile(file);
    for (const segment of extractObjectSegments(text)) {
      const slug = readStringField(segment, "slug");
      if (!slug) continue;

      posts.set(slug, {
        slug,
        title: readStringField(segment, "title"),
        excerpt: readStringField(segment, "excerpt"),
        category: readStringField(segment, "category"),
        tags: readArrayField(segment, "tags"),
      });
    }
  }

  return [...posts.values()];
}

function collectContentSignals() {
  const signals = new Map();

  for (const file of CONTENT_FILES) {
    const text = readProjectFile(file);
    const keyRe = /["']([a-z][a-z0-9-]{4,})["']\s*:\s*\{/g;
    const keys = [];
    let match;

    while ((match = keyRe.exec(text)) !== null) {
      if (match[1].includes("-")) keys.push({ slug: match[1], index: match.index });
    }

    keys.forEach(({ slug, index }, itemIndex) => {
      const nextIndex = keys[itemIndex + 1]?.index ?? text.length;
      const segment = text.slice(index, nextIndex);
      signals.set(slug, {
        length: segment.length,
        h2Count: (segment.match(/<h2[\s>]/g) || []).length,
        hasSummary: /article-summary|aeo-answer/.test(segment),
        hasTable: /<table[\s>]/.test(segment),
        hasList: /<(ul|ol)[\s>]/.test(segment),
        hasFaq: /<details[\s>]|"faq"\s*:/.test(segment),
        hasAside: /<aside[\s>]/.test(segment),
        hasExternalLink: /target=\\"_blank\\"|target="_blank"/.test(segment),
        hasBrokenText: hasGarbledText(segment),
      });
    });
  }

  return signals;
}

function normalizeTemplate(value) {
  return value
    .replace(/[0-9]+/g, "0")
    .replace(/[A-Za-z]+/g, "a")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 42);
}

function titlePrefix(title) {
  return title.split(/[:—-]/)[0].trim();
}

function includesAny(source, terms) {
  const normalizedSource = source.replace(/\s+/g, "");
  return terms.some((term) => {
    const normalizedTerm = term.replace(/\s+/g, "");
    return normalizedTerm.length >= 2 && normalizedSource.includes(normalizedTerm);
  });
}

function buildGroupCounts(items, keyFn) {
  const counts = new Map();
  for (const item of items) {
    const key = keyFn(item);
    if (!key) continue;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }
  return counts;
}

function auditPost(post, signals, titleGroups, excerptGroups) {
  const keywords = [post.category, ...post.tags].filter(Boolean).slice(0, 4);
  const titleHasKeyword = includesAny(post.title, keywords);
  const excerptHasKeyword = includesAny(post.excerpt, keywords);
  const content = signals.get(post.slug) ?? {};
  const visualCount = [
    content.hasSummary,
    content.hasTable,
    content.hasList,
    content.hasFaq,
    content.hasAside,
  ].filter(Boolean).length;
  const issues = [];

  if (!titleHasKeyword) issues.push("title_keyword");
  if (!excerptHasKeyword) issues.push("excerpt_keyword");
  if (post.title.length > TITLE_MAX_LENGTH) issues.push("title_over_google");
  if (post.title.length > NAVER_TITLE_MAX_LENGTH) issues.push("title_over_naver");
  if (post.excerpt.length > EXCERPT_MAX_LENGTH) issues.push("excerpt_over_google");
  if (post.excerpt.length > NAVER_EXCERPT_MAX_LENGTH) {
    issues.push("excerpt_over_naver");
  }
  if ((content.length ?? 0) < 3500) issues.push("thin_content");
  if ((content.h2Count ?? 0) < 3) issues.push("low_h2_count");
  if (visualCount < 3) issues.push("low_visual_variety");
  if (!content.hasExternalLink) issues.push("missing_external_source");
  if (post.title === post.excerpt) issues.push("duplicate_title_excerpt");
  if (hasGarbledText(`${post.title} ${post.excerpt}`)) {
    issues.push("garbled_metadata");
  }
  if (content.hasBrokenText) issues.push("garbled_content");
  if ((titleGroups.get(titlePrefix(post.title)) ?? 0) >= TEMPLATE_TITLE_LIMIT) {
    issues.push("template_title_prefix");
  }
  if (
    (excerptGroups.get(normalizeTemplate(post.excerpt)) ?? 0) >=
    TEMPLATE_EXCERPT_LIMIT
  ) {
    issues.push("template_excerpt_pattern");
  }

  return {
    ...post,
    issues,
    visualCount,
    contentLength: content.length ?? 0,
    h2Count: content.h2Count ?? 0,
  };
}

function renderReport(results) {
  const failed = results.filter((item) => item.issues.length > 0);
  const templateRisk = results.filter((item) =>
    item.issues.some((issue) => issue.startsWith("template_")),
  );
  const keywordRisk = results.filter((item) =>
    item.issues.some((issue) => issue.includes("keyword")),
  );
  const visualRisk = results.filter((item) =>
    item.issues.includes("low_visual_variety"),
  );

  const lines = [
    `# 블로그 품질 감사 | ${REPORT_DATE}`,
    "",
    "## 요약",
    "",
    `- 전체 글: ${results.length}`,
    `- 개선 필요: ${failed.length}`,
    `- 제목/부제 키워드 위험: ${keywordRisk.length}`,
    `- 템플릿화 위험: ${templateRisk.length}`,
    `- 글 유형 요소 부족: ${visualRisk.length}`,
    "",
    "## 기준",
    "",
    "- 제목: 메인/확장 키워드 중 1개 이상 포함, Google 60자/네이버 40자 기준 점검",
    "- 부제: excerpt를 부제로 보고 메인/확장 키워드 포함, Google 120자/네이버 80자 기준 점검",
    "- 본문: 3500자 이상, H2 3개 이상, 요약/표/목록/FAQ/박스 중 3개 이상",
    "- 템플릿화: 같은 제목 prefix 또는 부제 패턴이 8회 이상 반복되면 위험",
    "",
    "## 우선 개선 대상 50개",
    "",
    "| slug | issues | title |",
    "|---|---|---|",
  ];

  for (const item of failed.slice(0, 50)) {
    lines.push(
      `| \`${item.slug}\` | ${item.issues.join(", ")} | ${item.title.replaceAll("|", " ")} |`,
    );
  }

  lines.push(
    "",
    "## 판단",
    "",
    failed.length === 0
      ? "현재 자동 기준에서는 제목, 부제, 본문 구조가 통과 상태입니다."
      : "자동 기준상 일부 글은 제목/부제 키워드, 반복 패턴, 시각 요소 다양성 보강이 필요합니다. 본문을 일괄 수정하기보다 상위 노출/신규 발행 글부터 개별 보강하는 편이 안전합니다.",
    "",
  );

  return lines.join("\n");
}

mkdirSync(REPORT_DIR, { recursive: true });

const posts = collectPosts();
const signals = collectContentSignals();
const titleGroups = buildGroupCounts(posts, (post) => titlePrefix(post.title));
const excerptGroups = buildGroupCounts(posts, (post) =>
  normalizeTemplate(post.excerpt),
);
const results = posts.map((post) =>
  auditPost(post, signals, titleGroups, excerptGroups),
);
const report = renderReport(results);
const reportPath = join(REPORT_DIR, `blog-quality-audit-${REPORT_DATE}.md`);
const needsWork = results.filter((item) => item.issues.length > 0).length;
const templateRisk = results.filter((item) =>
  item.issues.some((issue) => issue.startsWith("template_")),
).length;

writeFileSync(reportPath, report, "utf8");
writeFileSync(join(REPORT_DIR, "blog-quality-audit-latest.md"), report, "utf8");

console.log(`Blog quality audit saved: ${reportPath}`);
console.log(
  JSON.stringify(
    {
      posts: results.length,
      needsWork,
      templateRisk,
    },
    null,
    2,
  ),
);

if (needsWork > 0 || templateRisk > 0) {
  process.exit(1);
}
