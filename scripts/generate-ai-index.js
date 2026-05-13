#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE_URL = "https://www.tennisfrens.com";
const BLOG_POSTS_PATH = path.join(ROOT, "src", "data", "blog-posts.js");
const BLOG_QUALITY_PATH = path.join(ROOT, "src", "lib", "blog-quality.ts");
const UTILITY_DIR = path.join(ROOT, "src", "app", "utility");
const PLAYERS_DIR = path.join(ROOT, "src", "data", "players");
const AI_INDEX_PATH = path.join(ROOT, "public", "ai-index.json");
const LLMS_PATH = path.join(ROOT, "public", "llms.txt");
const LLMS_FULL_PATH = path.join(ROOT, "public", "llms-full.txt");

function readBlogPosts() {
  const source = fs.readFileSync(BLOG_POSTS_PATH, "utf8");
  const evaluatedPosts = readBlogPostsByEvaluation(source);
  if (evaluatedPosts.length > 0) return evaluatedPosts;

  const objectMatches = source.matchAll(/\{\s*(?:id|"id"):\s*["']([^"']+)["'][\s\S]*?\n\s*\}/g);
  const slugMatches = source.matchAll(/slug\s*:\s*["']([^"']+)["'][\s\S]*?title\s*:\s*["']([^"']+)["'][\s\S]*?excerpt\s*:\s*["']([^"']*)["'][\s\S]*?date\s*:\s*["']([^"']+)["']/g);
  const posts = [];
  const seen = new Set();

  for (const match of objectMatches) {
    const block = match[0];
    const id = readStringField(block, "id") || match[1];
    const slug = readStringField(block, "slug") || id;
    const title = readStringField(block, "title");
    const excerpt = readStringField(block, "excerpt");
    const category = readStringField(block, "category");
    const date = readStringField(block, "date");
    const scheduledAt = readStringField(block, "scheduledAt");

    if (!slug || !title || !date || seen.has(slug)) continue;

    seen.add(slug);
    posts.push({
      id,
      slug,
      title,
      excerpt: excerpt || title,
      category: category || "테니스 가이드",
      date,
      scheduledAt,
    });
  }

  for (const match of slugMatches) {
    const slug = match[1];
    if (!slug || seen.has(slug)) continue;

    seen.add(slug);
    posts.push({
      id: slug,
      slug,
      title: match[2],
      excerpt: match[3] || match[2],
      category: "테니스 가이드",
      date: match[4],
      scheduledAt: "",
    });
  }

  return posts;
}

function readBlogPostsByEvaluation(source) {
  try {
    if (source.includes("import ")) return [];

    const executable = source.replace(
      /export\s+const\s+allBlogPosts\s*=/,
      "globalThis.allBlogPosts =",
    );
    const context = { globalThis: {} };
    vm.createContext(context);
    vm.runInContext(executable, context, { timeout: 1000 });

    const posts = context.globalThis.allBlogPosts;
    if (!Array.isArray(posts)) return [];

    return posts
      .map((post) => ({
        id: post.id || post.slug,
        slug: post.slug || post.id,
        title: post.title || "",
        excerpt: post.excerpt || post.title || "",
        category: post.category || "테니스 가이드",
        date: post.date || "",
        scheduledAt: post.scheduledAt || "",
      }))
      .filter((post) => post.slug && post.title && post.date);
  } catch {
    return [];
  }
}

function readStringField(block, field) {
  const quoted = new RegExp(`["']${field}["']\\s*:\\s*["']([^"']*)["']`).exec(
    block,
  );
  if (quoted) return quoted[1];

  const bare = new RegExp(`${field}\\s*:\\s*["']([^"']*)["']`).exec(block);
  return bare ? bare[1] : "";
}

function toPublishTime(post) {
  const publishDate = post.scheduledAt || post.date;
  const normalizedDate = publishDate.includes("T")
    ? publishDate
    : `${publishDate}T00:00:00+09:00`;
  const timestamp = Date.parse(normalizedDate);
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

function getPublishedBlogPosts(posts) {
  const now = Date.now();
  return posts
    .filter((post) => toPublishTime(post) <= now)
    .sort((a, b) => toPublishTime(b) - toPublishTime(a));
}

function readLowQualityBlogSlugs() {
  if (!fs.existsSync(BLOG_QUALITY_PATH)) return new Set();

  const source = fs.readFileSync(BLOG_QUALITY_PATH, "utf8");
  const match = /LOW_QUALITY_BLOG_SLUGS\s*=\s*\[([\s\S]*?)\]\s*as const/.exec(
    source,
  );

  if (!match) return new Set();

  return new Set(
    [...match[1].matchAll(/"([^"]+)"/g)].map((item) => item[1]),
  );
}

function getUtilitySlugs() {
  return fs
    .readdirSync(UTILITY_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

function getPlayerSlugs() {
  const slugs = new Set();
  for (const file of fs.readdirSync(PLAYERS_DIR)) {
    if (!file.endsWith(".ts")) continue;
    const source = fs.readFileSync(path.join(PLAYERS_DIR, file), "utf8");
    const matches = [
      ...source.matchAll(/['"]([a-z0-9]+(?:-[a-z0-9]+)+)['"]\s*:/g),
      ...source.matchAll(/slug\s*:\s*['"]([a-z0-9]+(?:-[a-z0-9]+)+)['"]/g),
    ];
    for (const match of matches) {
      slugs.add(match[1]);
    }
  }
  return [...slugs].sort();
}

function page(url, description, type) {
  return { url, description, type };
}

function getKstDateString() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function updateCountText(filePath, stats, today) {
  if (!fs.existsSync(filePath)) return;

  const content = fs.readFileSync(filePath, "utf8");
  const updated = content
    .replace(/무료 도구 \d+종/g, `무료 도구 ${stats.tools}종`)
    .replace(/전문 블로그 \d+개/g, `전문 블로그 ${stats.articles}개`)
    .replace(/선수 프로필 \d+명/g, `선수 프로필 ${stats.playerProfiles}명`)
    .replace(
      /ATP·WTA 선수 프로필 \d+명/g,
      `ATP·WTA 선수 프로필 ${stats.playerProfiles}명`,
    )
    .replace(/테니스 도구 \(\d+종\)/g, `테니스 도구 (${stats.tools}종)`)
    .replace(
      /선수 프로필 \(\d+명(?: 이상)?\)/g,
      `선수 프로필 (${stats.playerProfiles}명)`,
    )
    .replace(/블로그 \(\d+개\+\)/g, `블로그 (${stats.articles}개)`)
    .replace(/블로그 \(\d+개(?: 이상)?\)/g, `블로그 (${stats.articles}개)`)
    .replace(/도구 \d+종/g, `도구 ${stats.tools}종`)
    .replace(/블로그 \d+개/g, `블로그 ${stats.articles}개`)
    .replace(/업데이트:\s*\d{4}-\d{2}-\d{2}/g, `업데이트: ${today}`)
    .replace(/마지막:\s*\d{4}-\d{2}-\d{2}/g, `마지막: ${today}`);

  if (updated !== content) {
    fs.writeFileSync(filePath, updated, "utf8");
  }
}

const lowQualityBlogSlugs = readLowQualityBlogSlugs();
const blogPosts = getPublishedBlogPosts(readBlogPosts()).filter(
  (post) => !lowQualityBlogSlugs.has(post.slug),
);
const utilitySlugs = getUtilitySlugs();
const playerSlugs = getPlayerSlugs();
const today = getKstDateString();

const pages = [
  page(SITE_URL, "TennisFriends 홈 - 테니스 실력 향상 도구와 가이드", "homepage"),
  page(`${SITE_URL}/utility`, "테니스 도구 모음", "index"),
  page(`${SITE_URL}/blog`, "테니스 블로그", "index"),
  page(`${SITE_URL}/players`, "테니스 선수 프로필", "index"),
  page(`${SITE_URL}/tennis-rules-quiz`, "테니스 규칙 퀴즈", "tool"),
  page(`${SITE_URL}/about`, "TennisFriends 소개와 운영 기준", "static"),
  page(`${SITE_URL}/contact`, "TennisFriends 문의", "static"),
  page(`${SITE_URL}/privacy`, "개인정보 처리방침", "static"),
  page(`${SITE_URL}/terms`, "이용 약관", "static"),
  page(`${SITE_URL}/search`, "TennisFriends 검색", "static"),
  ...utilitySlugs.map((slug) =>
    page(`${SITE_URL}/utility/${slug}`, `테니스 ${slug} 도구`, "tool"),
  ),
  ...blogPosts.map((post) =>
    page(`${SITE_URL}/blog/${post.slug}`, post.excerpt || post.title, "article"),
  ),
  ...playerSlugs.map((slug) =>
    page(`${SITE_URL}/players/${slug}`, `테니스 선수 ${slug} 프로필`, "player"),
  ),
];

const stats = {
  totalPages: pages.length,
  tools: utilitySlugs.length + 1,
  articles: blogPosts.length,
  playerProfiles: playerSlugs.length,
};

const aiIndex = {
  site: "TennisFriends",
  url: SITE_URL,
  language: "ko-KR",
  description: "한국어 테니스 실력 향상 도구와 전문 가이드 플랫폼",
  lastUpdated: today,
  stats,
  pages,
};

fs.writeFileSync(AI_INDEX_PATH, `${JSON.stringify(aiIndex, null, 2)}\n`, "utf8");
updateCountText(LLMS_PATH, stats, today);
updateCountText(LLMS_FULL_PATH, stats, today);

console.log(
  `AI index updated: ${stats.totalPages} pages, ${stats.tools} tools, ${stats.articles} articles, ${stats.playerProfiles} players`,
);
