#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORT = path.join(ROOT, "docs", "reports", "blog-index-experience-audit-latest.json");
const files = {
  root: "src/app/blog/page.tsx",
  content: "src/app/blog/BlogIndexPageContent.tsx",
  route: "src/app/blog/page/[page]/page.tsx",
  data: "src/lib/blog-index.ts",
};
const findings = [];
const read = (file) => fs.readFileSync(path.join(ROOT, file), "utf8");
const source = Object.fromEntries(Object.entries(files).map(([key, file]) => [key, read(file)]));
const assert = (condition, issue) => {
  if (!condition) findings.push({ scope: "blog index", issue });
};

assert(!source.root.includes('"use client"') && !source.content.includes('"use client"'), "blog index must stay server rendered");
assert(source.route.includes("generateStaticParams") && source.route.includes("dynamicParams = false"), "static page generation is missing");
assert(source.data.includes("posts.slice(start, start + POSTS_PER_PAGE)"), "server-side page slicing is missing");
assert(!source.content.includes("allBlogPosts") && !source.content.includes("useMemo"), "complete post catalog must not reach a client component");
assert(source.content.includes('action="/search"') && source.content.includes('method="get"'), "search must use a crawl-safe GET form");
assert(source.content.includes("<Link href={pageHref("), "pagination must use ordinary links");
assert(source.content.includes('aria-label="블로그 페이지"'), "pagination navigation label is missing");

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  checkedFiles: Object.values(files),
  findings,
};

fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, JSON.stringify(audit, null, 2), "utf8");

if (findings.length) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
