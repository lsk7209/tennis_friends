#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const npmCli = process.env.npm_execpath;
const outputOnly = process.argv.includes("--output-only");
if (!outputOnly) {
  if (!npmCli) throw new Error("npm_execpath is required; run through npm run audit:static-export");
  const result = spawnSync(process.execPath, [npmCli, "run", "build"], {
    cwd: ROOT,
    env: {
      ...process.env,
      GITHUB_ACTIONS: "true",
      GITHUB_PAGES: "true",
      GITHUB_REPOSITORY: "lsk7209/tennis_friends",
      GITHUB_PAGES_BASE_PATH: "/tennis_friends",
      NEXT_PUBLIC_SITE_URL: "https://tennisfrens.com",
    },
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}

const required = [
  "out/index.html",
  "out/blog/page/2/index.html",
  "out/blog/tennis-western-grip-advantages/index.html",
  "out/blog/t01-tennis-grip-size/index.html",
  "out/blog/t09-20-minute-wall-practice-log/index.html",
  "out/players/carlos-alcaraz/index.html",
  "out/utility/ntrp-test/result/index.html",
  "out/admin/index.html",
  "out/privacy/index.html",
  "out/terms/index.html",
  "out/sitemap.xml",
];
for (const relativePath of required) {
  if (!fs.existsSync(path.join(ROOT, relativePath))) {
    throw new Error(`Static export is missing ${relativePath}`);
  }
}

const home = fs.readFileSync(path.join(ROOT, "out/index.html"), "utf8");
if (!home.includes("G-W1K51D8SBX") || !home.includes("googletagmanager.com/gtag/js")) {
  throw new Error("Static export is missing the GA4 loader");
}

const cafeUrl = "https://cafe.naver.com/homecookie";
const resultPage = fs.readFileSync(
  path.join(ROOT, "out/utility/ntrp-test/result/index.html"),
  "utf8",
);
for (const [label, html] of [
  ["home", home],
  ["NTRP result", resultPage],
]) {
  if (!html.includes(cafeUrl)) {
    throw new Error(`Static ${label} output is missing the Naver Cafe link`);
  }
  if (!html.includes('target="_blank"') || !html.includes("noopener noreferrer")) {
    throw new Error(`Static ${label} output is missing safe external-link attributes`);
  }
  if (html.includes("naver-cafe-tennisfriends-banner.png")) {
    throw new Error(`Static ${label} output still renders the unsupported No.1 banner`);
  }
}

const sitewideCafeHeading = "테니스 이야기를 카페에서 이어가세요";
for (const relativePath of [
  "out/blog/t01-tennis-grip-size/index.html",
  "out/players/carlos-alcaraz/index.html",
  "out/utility/ntrp-test/result/index.html",
]) {
  const html = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  if (!html.includes(sitewideCafeHeading)) {
    throw new Error(`Static export is missing the contextual cafe banner in ${relativePath}`);
  }
}

const physicalNoindexRoutes = fs
  .readdirSync(path.join(ROOT, "src", "app", "blog"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .filter((slug) => {
    const layoutPath = path.join(ROOT, "src", "app", "blog", slug, "layout.tsx");
    return (
      fs.existsSync(layoutPath) &&
      fs.readFileSync(layoutPath, "utf8").includes("NoIndexLayout")
    );
  });
if (physicalNoindexRoutes.length !== 54) {
  throw new Error(`Expected 54 physical noindex blog routes, found ${physicalNoindexRoutes.length}`);
}
for (const slug of physicalNoindexRoutes) {
  const relativePath = `out/blog/${slug}/index.html`;
  if (!fs.existsSync(path.join(ROOT, relativePath))) {
    throw new Error(`Physical low-quality blog route is missing from export: ${relativePath}`);
  }
  const html = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  if (!html.includes('name="robots" content="noindex, follow"')) {
    throw new Error(`Physical low-quality blog route is missing noindex: ${relativePath}`);
  }
}

for (const relativePath of [
  "out/admin/index.html",
  "out/privacy/index.html",
  "out/terms/index.html",
]) {
  const html = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  if (html.includes(sitewideCafeHeading)) {
    throw new Error(`Static export leaked the sitewide cafe banner into ${relativePath}`);
  }
}

for (const relativePath of [
  "out/admin/index.html",
  "out/tennis-rules-quiz/quiz/index.html",
  "out/tennis-rules-quiz/result/index.html",
]) {
  const html = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  if (!html.includes('name="robots" content="noindex, follow"')) {
    throw new Error(`Static export is missing noindex metadata in ${relativePath}`);
  }
}

const robotsTxt = fs.readFileSync(path.join(ROOT, "out/robots.txt"), "utf8");
const normalizedRobotsTxt = robotsTxt.toLowerCase();
const aiCrawlerPolicy = normalizedRobotsTxt.slice(
  normalizedRobotsTxt.indexOf("user-agent: gptbot"),
);
for (const privatePath of ["/private/", "/admin/", "/api/auth/"]) {
  if (!aiCrawlerPolicy.includes(`disallow: ${privatePath}`)) {
    throw new Error(`AI crawler policy is missing ${privatePath}`);
  }
}

const blogIndex = fs.readFileSync(path.join(ROOT, "out/blog/index.html"), "utf8");
if (Buffer.byteLength(blogIndex) > 250_000) {
  throw new Error(`Blog index payload is too large: ${Buffer.byteLength(blogIndex)} bytes`);
}
if (!blogIndex.includes('/tennis_friends/blog/page/2/')) {
  throw new Error("GitHub Pages export is missing the repository base path");
}
if (!home.includes('/tennis_friends/_next/')) {
  throw new Error("GitHub Pages assets are missing the repository base path");
}

const customArticle = fs.readFileSync(
  path.join(ROOT, "out/blog/tennis-western-grip-advantages/index.html"),
  "utf8",
);
if (!customArticle.includes("웨스턴 그립")) {
  throw new Error("Static export replaced the custom article body");
}

const wallPracticeArticle = fs.readFileSync(
  path.join(ROOT, "out/blog/t09-20-minute-wall-practice-log/index.html"),
  "utf8",
);
if (!wallPracticeArticle.includes("article-data-table")) {
  throw new Error("Static export is missing the converted wall-practice tables");
}
if (/<p>\s*:?-{3,}:?\s*\|/i.test(wallPracticeArticle)) {
  throw new Error("Static export still exposes a raw Markdown table separator");
}
if (!wallPracticeArticle.includes("/tennis_friends/images/blog/20-minute-wall-practice.webp")) {
  throw new Error("GitHub Pages article image is missing the repository base path");
}
if (!fs.existsSync(path.join(ROOT, "out/images/blog/20-minute-wall-practice.webp"))) {
  throw new Error("GitHub Pages export is missing the wall-practice image asset");
}
if (fs.existsSync(path.join(ROOT, "out/ads.txt"))) {
  throw new Error("GitHub Pages export still contains ads.txt");
}

const adFreeOutputAudit = spawnSync(
  process.execPath,
  [path.join(ROOT, "scripts", "audit-ad-free-cafe-first.mjs"), "--output"],
  {
    cwd: ROOT,
    env: {
      ...process.env,
      GITHUB_ACTIONS: "true",
      GITHUB_PAGES: "true",
      GITHUB_PAGES_BASE_PATH: "/tennis_friends",
    },
    stdio: "inherit",
  },
);
if (adFreeOutputAudit.error) throw adFreeOutputAudit.error;
if (adFreeOutputAudit.status !== 0) process.exit(adFreeOutputAudit.status ?? 1);

console.log("GitHub Pages static export audit passed.");
