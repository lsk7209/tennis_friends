#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { loadProjectSource } from "./lib/load-project-source.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const REPORT_DATE = new Date().toISOString().slice(0, 10);
const REPORT_DIR = join(ROOT, "docs", "reports");
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

function collectPosts() {
  const { allBlogPosts } = loadProjectSource("src/data/blog-posts.js");
  const unique = new Map();
  for (const post of allBlogPosts) {
    if (!unique.has(post.slug)) unique.set(post.slug, { ...post, tags: post.tags || [] });
  }
  return [...unique.values()];
}

function collectContentSignals(posts) {
  const { blogContentMap } = loadProjectSource("src/data/blog-content/index.ts");
  return new Map(posts.map(post => {
    const body = blogContentMap[post.slug] || blogContentMap[post.id];
    const file = join(ROOT, "src/app/blog", post.slug, "page.tsx");
    const customSource = existsSync(file) ? readFileSync(file, "utf8") : "";
    const isCustom = customSource && !customSource.includes("@/app/blog/[slug]/page");
    const text = body?.content || (isCustom ? customSource : "");
    return [post.slug, {
      length: text.replace(/<[^>]*>/g, "").length,
      h2Count: (text.match(/<h2[\s>]/g) || []).length,
      hasSummary: Boolean(body?.summary) || /article-summary|aeo-answer/.test(text),
      hasTable: /<table[\s>]/.test(text),
      hasList: /<(ul|ol)[\s>]/.test(text),
      hasFaq: Boolean(body?.faq?.length) || /<details[\s>]/.test(text),
      hasAside: /<aside[\s>]/.test(text),
      hasExternalLink: /https?:\/\//.test(text),
      hasBrokenText: hasGarbledText(text),
    }];
  }));
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
  if (post.title.length > TITLE_MAX_LENGTH) issues.push("title_length_hint");
  if (post.title.length > NAVER_TITLE_MAX_LENGTH) issues.push("title_length_secondary_hint");
  if (post.excerpt.length > EXCERPT_MAX_LENGTH) issues.push("excerpt_length_hint");
  if (post.excerpt.length > NAVER_EXCERPT_MAX_LENGTH) {
    issues.push("excerpt_length_secondary_hint");
  }
  if ((content.length ?? 0) < 3500) issues.push("short_body_review");
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
    "- 제목: 메인/확장 키워드 중 1개 이상 포함, 편집용 60자/40자 길이 참고값 (검색엔진 공식 제한 아님)",
    "- 부제: excerpt를 부제로 보고 메인/확장 키워드 포함, 편집용 120자/80자 길이 참고값 (검색엔진 공식 제한 아님)",
    "- 본문: 3500자·H2 3개·시각 요소 3개는 수동 검토 후보를 찾는 내부 휴리스틱이며 합격선이 아닙니다.",
    "- 런타임 메타데이터와 본문 맵을 직접 집계하며, 개별 페이지는 소스 구조를 참고합니다. 예약·비공개도 포함한 재고 점검이며 사실 정확성/Google 색인 판정이 아닙니다.",
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
const signals = collectContentSignals(posts);
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
