import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const ROOT = process.cwd();
const SITE_URL = "https://www.tennisfrens.com";
const BLOG_POSTS_PATH = path.join(ROOT, "src", "data", "blog-posts.js");
const BLOG_QUALITY_PATH = path.join(ROOT, "src", "lib", "blog-quality.ts");
const UTILITY_DIR = path.join(ROOT, "src", "app", "utility");
const PLAYERS_DIR = path.join(ROOT, "src", "data", "players");
const DOCS_DIR = path.join(ROOT, "public", "docs");
const AI_INDEX_PATH = path.join(ROOT, "public", "ai-index.json");
const LLMS_PATHS = [
  path.join(ROOT, "public", "llms.txt"),
  path.join(ROOT, "public", "llms-full.txt"),
];

function readStringField(block, field) {
  const quoted = new RegExp(`["']${field}["']\\s*:\\s*["']([^"']*)["']`).exec(
    block,
  );
  if (quoted) return quoted[1];

  const bare = new RegExp(`${field}\\s*:\\s*["']([^"']*)["']`).exec(block);
  return bare ? bare[1] : "";
}

function readBlogPosts() {
  const source = fs.readFileSync(BLOG_POSTS_PATH, "utf8");

  try {
    if (!source.includes("import ")) {
      const executable = source.replace(
        /export\s+const\s+allBlogPosts\s*=/,
        "globalThis.allBlogPosts =",
      );
      const context = { globalThis: {} };
      vm.createContext(context);
      vm.runInContext(executable, context, { timeout: 1000 });

      if (Array.isArray(context.globalThis.allBlogPosts)) {
        return context.globalThis.allBlogPosts
          .map((post) => ({
            slug: post.slug || post.id,
            title: post.title || "",
            date: post.date || "",
            scheduledAt: post.scheduledAt || "",
          }))
          .filter((post) => post.slug && post.title && post.date);
      }
    }
  } catch {
    // Fallback to source parsing below.
  }

  const posts = [];
  const seen = new Set();
  const objectMatches = source.matchAll(
    /\{\s*(?:id|"id"):\s*["']([^"']+)["'][\s\S]*?\n\s*\}/g,
  );
  const slugMatches = source.matchAll(
    /slug\s*:\s*["']([^"']+)["'][\s\S]*?title\s*:\s*["']([^"']+)["'][\s\S]*?excerpt\s*:\s*["']([^"']*)["'][\s\S]*?date\s*:\s*["']([^"']+)["']/g,
  );

  for (const match of objectMatches) {
    const block = match[0];
    const slug = readStringField(block, "slug") || readStringField(block, "id") || match[1];
    const title = readStringField(block, "title");
    const date = readStringField(block, "date");
    const scheduledAt = readStringField(block, "scheduledAt");

    if (!slug || !title || !date || seen.has(slug)) continue;
    seen.add(slug);
    posts.push({ slug, title, date, scheduledAt });
  }

  for (const match of slugMatches) {
    const slug = match[1];
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);
    posts.push({
      slug,
      title: match[2],
      date: match[4],
      scheduledAt: "",
    });
  }

  return posts.filter((post) => post.slug && post.title && post.date);
}

function readLowQualityBlogSlugs() {
  if (!fs.existsSync(BLOG_QUALITY_PATH)) return new Set();

  const source = fs.readFileSync(BLOG_QUALITY_PATH, "utf8");
  const match = /LOW_QUALITY_BLOG_SLUGS\s*=\s*\[([\s\S]*?)\]\s*as const/.exec(
    source,
  );

  if (!match) return new Set();
  return new Set([...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]));
}

function toPublishTime(post) {
  const publishDate = post.scheduledAt || post.date;
  const normalizedDate = publishDate.includes("T")
    ? publishDate
    : `${publishDate}T00:00:00+09:00`;
  const timestamp = Date.parse(normalizedDate);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function getPublishedBlogSlugs() {
  const now = Date.now();
  const lowQuality = readLowQualityBlogSlugs();
  return readBlogPosts()
    .filter((post) => toPublishTime(post) <= now)
    .filter((post) => !lowQuality.has(post.slug))
    .map((post) => post.slug)
    .sort();
}

function getUtilitySlugs() {
  return fs
    .readdirSync(UTILITY_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

function getPlayerSlugs() {
  const players = new Set();
  for (const file of fs.readdirSync(PLAYERS_DIR)) {
    if (!file.endsWith(".ts")) continue;
    const source = fs.readFileSync(path.join(PLAYERS_DIR, file), "utf8");
    const matches = [
      ...source.matchAll(/['"]([a-z0-9]+(?:-[a-z0-9]+)+)['"]\s*:/g),
      ...source.matchAll(/slug\s*:\s*['"]([a-z0-9]+(?:-[a-z0-9]+)+)['"]/g),
    ];
    for (const match of matches) {
      const start = match.index ?? source.indexOf(match[0]);
      const block = source.slice(start, start + 3000);
      const slug = readStringField(block, "slug") || match[1];
      if (slug) players.add(slug);
    }
  }

  return [...players].sort();
}

function getDocSlugs() {
  if (!fs.existsSync(DOCS_DIR)) return [];

  return fs
    .readdirSync(DOCS_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith(".md"))
    .map((dirent) => dirent.name)
    .sort();
}

function compareSets(label, expected, actual, findings) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  const missing = [...expectedSet].filter((item) => !actualSet.has(item));
  const extra = [...actualSet].filter((item) => !expectedSet.has(item));

  if (missing.length || extra.length) {
    findings.push({
      issue: `${label} mismatch`,
      missing: missing.slice(0, 20),
      extra: extra.slice(0, 20),
      missingCount: missing.length,
      extraCount: extra.length,
    });
  }
}

execFileSync(process.execPath, [path.join(ROOT, "scripts", "generate-ai-index.js")], {
  cwd: ROOT,
  stdio: "inherit",
});

const aiIndex = JSON.parse(fs.readFileSync(AI_INDEX_PATH, "utf8"));
const pages = Array.isArray(aiIndex.pages) ? aiIndex.pages : [];
const findings = [];
const urls = pages.map((page) => page.url);
const duplicateUrls = urls.filter((url, index) => urls.indexOf(url) !== index);
const stats = aiIndex.stats || {};

if (aiIndex.url !== SITE_URL) {
  findings.push({ issue: "site url mismatch", actual: aiIndex.url, expected: SITE_URL });
}

if (stats.totalPages !== pages.length) {
  findings.push({
    issue: "total page count mismatch",
    actual: stats.totalPages,
    expected: pages.length,
  });
}

if (duplicateUrls.length > 0) {
  findings.push({
    issue: "duplicate URLs",
    count: duplicateUrls.length,
    examples: [...new Set(duplicateUrls)].slice(0, 20),
  });
}

for (const page of pages) {
  if (!page.url?.startsWith(SITE_URL)) {
    findings.push({ issue: "URL outside canonical host", url: page.url });
  }
  if (page.url && page.url !== SITE_URL && page.url.endsWith("/")) {
    findings.push({ issue: "trailing slash URL", url: page.url });
  }
  if (!page.title || !page.description || !page.type) {
    findings.push({ issue: "incomplete AI index page", page });
  }
}

const typeCounts = pages.reduce((counts, page) => {
  counts[page.type] = (counts[page.type] || 0) + 1;
  return counts;
}, {});

const utilityToolPages = pages.filter(
  (page) => page.type === "tool" && page.url?.startsWith(`${SITE_URL}/utility/`),
);
const slugLikeUtilityTitles = utilityToolPages.filter((page) =>
  /^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(page.title || ""),
);
const genericUtilityDescriptions = utilityToolPages.filter((page) =>
  (page.description || "").includes("TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다"),
);
const englishOnlyUtilityTitles = utilityToolPages.filter((page) =>
  /^[A-Za-z0-9 ]+$/.test(page.title || ""),
);

if (slugLikeUtilityTitles.length > 0) {
  findings.push({
    issue: "utility AI index titles use raw slugs",
    count: slugLikeUtilityTitles.length,
    examples: slugLikeUtilityTitles.slice(0, 20).map((page) => page.url),
  });
}

if (genericUtilityDescriptions.length > 0) {
  findings.push({
    issue: "utility AI index descriptions use generic fallback copy",
    count: genericUtilityDescriptions.length,
    examples: genericUtilityDescriptions.slice(0, 20).map((page) => page.url),
  });
}

if (englishOnlyUtilityTitles.length > 0) {
  findings.push({
    issue: "utility AI index titles should be localized",
    count: englishOnlyUtilityTitles.length,
    examples: englishOnlyUtilityTitles.slice(0, 20).map((page) => page.url),
  });
}

if (typeCounts.tool !== stats.tools) {
  findings.push({ issue: "tool count mismatch", actual: typeCounts.tool, expected: stats.tools });
}
if (typeCounts.article !== stats.articles) {
  findings.push({
    issue: "article count mismatch",
    actual: typeCounts.article,
    expected: stats.articles,
  });
}
if (typeCounts.player !== stats.playerProfiles) {
  findings.push({
    issue: "player count mismatch",
    actual: typeCounts.player,
    expected: stats.playerProfiles,
  });
}

compareSets(
  "utility URLs",
  ["tennis-rules-quiz", ...getUtilitySlugs()].map((slug) =>
    slug === "tennis-rules-quiz"
      ? `${SITE_URL}/tennis-rules-quiz`
      : `${SITE_URL}/utility/${slug}`,
  ),
  pages.filter((page) => page.type === "tool").map((page) => page.url).sort(),
  findings,
);

compareSets(
  "article URLs",
  getPublishedBlogSlugs().map((slug) => `${SITE_URL}/blog/${slug}`),
  pages.filter((page) => page.type === "article").map((page) => page.url).sort(),
  findings,
);

compareSets(
  "player URLs",
  getPlayerSlugs().map((slug) => `${SITE_URL}/players/${slug}`),
  pages.filter((page) => page.type === "player").map((page) => page.url).sort(),
  findings,
);

compareSets(
  "document URLs",
  getDocSlugs().map((name) => `${SITE_URL}/docs/${name}`),
  pages.filter((page) => page.type === "document").map((page) => page.url).sort(),
  findings,
);

for (const llmsPath of LLMS_PATHS) {
  const text = fs.readFileSync(llmsPath, "utf8");
  const relativePath = path.relative(ROOT, llmsPath);

  for (const [label, expected, pattern] of [
    ["tools", stats.tools, new RegExp(`(?:무료 도구|테니스 도구|도구)\\s*${stats.tools}(?:종|\\))`)],
    ["articles", stats.articles, new RegExp(`(?:전문 블로그|블로그)\\s*${stats.articles}(?:개|\\))`)],
    [
      "players",
      stats.playerProfiles,
      new RegExp(`선수 프로필\\s*(?:\\()?${stats.playerProfiles}명`),
    ],
  ]) {
    if (!pattern.test(text)) {
      findings.push({
        issue: "llms count text mismatch",
        file: relativePath,
        label,
        expected,
      });
    }
  }
}

if (findings.length > 0) {
  console.error(JSON.stringify({ findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    pages: pages.length,
    tools: stats.tools,
    articles: stats.articles,
    players: stats.playerProfiles,
    documents: typeCounts.document || 0,
  }),
);
