#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");

const FILES = {
  design: "DESIGN.md",
  blogPage: "src/app/blog/page.tsx",
  blogClient: "src/app/blog/BlogIndexClient.tsx",
  articlePage: "src/app/blog/[slug]/page.tsx",
  playerPage: "src/app/players/[slug]/page.tsx",
  playerTemplate: "src/templates/players/PlayerPageTemplate.tsx",
  relatedContent: "src/components/RelatedContent.tsx",
};

const findings = [];
const watchItems = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const design = readProjectFile(FILES.design);
const blogPage = readProjectFile(FILES.blogPage);
const blogClient = readProjectFile(FILES.blogClient);
const articlePage = readProjectFile(FILES.articlePage);
const playerPage = readProjectFile(FILES.playerPage);
const playerTemplate = readProjectFile(FILES.playerTemplate);
const relatedContent = readProjectFile(FILES.relatedContent);

assert(design.includes("Status: Active") && design.includes("## Verification"), {
  scope: "design contract",
  issue: "DESIGN.md is not in active contract shape",
});

assert(!blogPage.includes("bg-gradient-to-br"), {
  scope: "blog index",
  issue: "blog index should avoid dominant decorative gradients",
});

assert(!blogClient.includes("rounded-full"), {
  scope: "blog index",
  issue: "blog index controls should avoid pill-heavy layout",
});

assert(blogClient.includes("pageWindow("), {
  scope: "blog index",
  issue: "compact pagination window missing",
});

assert(
  articlePage.includes("container mx-auto max-w-4xl px-4") &&
    articlePage.includes('id="article-content"'),
  {
    scope: "article layout",
    issue: "article detail needs constrained readable width and content anchor",
  },
);

assert(
  articlePage.includes('class="table-wrapper"') &&
    articlePage.includes("MIDDLE_AD_AFTER_HEADING_COUNT"),
  {
    scope: "article layout",
    issue: "article detail needs mobile-safe tables and controlled middle ad split",
  },
);

assert((articlePage.match(/<AdSenseSlot/g) || []).length >= 3, {
  scope: "article ads",
  issue: "article detail should keep top, middle, and bottom ad placements",
});

assert(!playerTemplate.includes("bg-gradient-to-br"), {
  scope: "player template",
  issue: "player profile template should avoid dominant decorative gradients",
});

assert(
  playerTemplate.includes("Player profile") &&
    playerTemplate.includes("playerFacts") &&
    playerTemplate.includes("aria-label={`${nameKo} 선수 핵심 정보`}"),
  {
    scope: "player template",
    issue: "player profile needs an above-the-fold summary block for CTR intent",
  },
);

assert(
  playerPage.includes("분석 다음 단계") &&
    playerPage.includes("/utility/play-style-test") &&
    playerPage.includes("/utility/ntrp-test") &&
    playerPage.includes("/utility/equipment-recommendation"),
  {
    scope: "player page",
    issue: "player detail needs clear post-profile utility links for search-intent continuation",
  },
);

assert(!playerPage.includes("bg-gradient-to-r from-blue-50 via-white to-purple-50"), {
  scope: "player page",
  issue: "player utility CTA should avoid decorative gradient card layout",
});

assert(!playerPage.includes("처럼 플레이하고 싶으신가요"), {
  scope: "player page",
  issue: "player utility CTA should use task-focused wording instead of promotional copy",
});

assert(
  relatedContent.includes('title = "관련 글 더보기"') &&
    relatedContent.includes('aria-label="블로그 전체 보기"') &&
    relatedContent.includes("전체 보기") &&
    relatedContent.includes("읽기"),
  {
    scope: "related content",
    issue: "related content component needs clean Korean labels and accessible link text",
  },
);

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  checkedFiles: Object.values(FILES),
  findings,
  watchItems,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "visual-layout-risk-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
