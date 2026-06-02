#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const BLOG_PAGE = "src/app/blog/page.tsx";
const BLOG_CLIENT = "src/app/blog/BlogIndexClient.tsx";

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]/.test(value);
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const blogPage = readProjectFile(BLOG_PAGE);
const blogClient = readProjectFile(BLOG_CLIENT);
const [{ allBlogPosts }, { CATEGORY_GROUPS }] = await Promise.all([
  import("../src/data/blog-posts.js"),
  import("../src/lib/blog-utils.ts"),
]);

assert(!blogPage.startsWith('"use client"'), {
  scope: "blog index",
  issue: "blog page should remain a server component",
});

assert(blogPage.includes("export const metadata"), {
  scope: "blog index seo",
  issue: "blog index metadata missing",
});

assert(blogPage.includes("getPublishedBlogPosts(allBlogPosts)"), {
  scope: "blog index data",
  issue: "published post filtering missing on server page",
});

assert(blogPage.includes("isIndexableBlogSlug(post.slug)"), {
  scope: "blog index data",
  issue: "indexability gate missing on server page",
});

assert(blogPage.includes("<BlogIndexClient posts={posts}"), {
  scope: "blog index split",
  issue: "server page does not hand off to the client filter island",
});

assert(blogClient.startsWith('"use client"'), {
  scope: "blog index client",
  issue: "filter island must be the client component",
});

assert(blogClient.includes('type="search"') && blogClient.includes("useMemo"), {
  scope: "blog index filters",
  issue: "search/filter client behavior missing",
});

assert(blogClient.includes("pageWindow("), {
  scope: "blog index pagination",
  issue: "compact pagination window missing",
});

assert(!blogClient.includes("Array.from({ length: totalPages }"), {
  scope: "blog index pagination",
  issue: "pagination should not render every page button",
});

assert(!blogPage.includes("rounded-full") && !blogClient.includes("rounded-full"), {
  scope: "blog index design",
  issue: "blog index should use restrained radius, not pill-heavy controls",
});

assert(!hasMojibake(blogPage) && !hasMojibake(blogClient), {
  scope: "blog index source",
  issue: "blog index source contains mojibake marker",
});

const categoryGroups = Object.values(CATEGORY_GROUPS);
const groupedCategories = new Set(
  categoryGroups.flatMap((group) => group.categories),
);
const categoryCounts = new Map();
for (const post of allBlogPosts) {
  categoryCounts.set(post.category, (categoryCounts.get(post.category) ?? 0) + 1);
}

const uncoveredMajorCategories = [...categoryCounts.entries()]
  .filter(([category, count]) => count >= 3 && !groupedCategories.has(category))
  .sort((a, b) => b[1] - a[1]);

assert(uncoveredMajorCategories.length === 0, {
  scope: "blog index category filters",
  issue: "major blog categories are not covered by category group filters",
  categories: uncoveredMajorCategories.map(([category, count]) => ({
    category,
    count,
  })),
});

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  checkedFiles: [BLOG_PAGE, BLOG_CLIENT],
  categoryFilterCoverage: {
    groups: categoryGroups.length,
    publishedCategories: categoryCounts.size,
    uncoveredMajorCategories: uncoveredMajorCategories.length,
  },
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "blog-index-experience-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
