#!/usr/bin/env node
/**
 * blog-posts.js DB와 실제 /blog/* 디렉토리 동기화.
 *
 * 1. DB에만 있고 페이지 없는 고아 entry 제거 (sitemap 404 방지)
 * 2. 페이지 있으나 DB에 없는 항목 자동 추가 (sitemap 누락 방지)
 *
 * 페이지 메타데이터는 파일의 metadata.title/description에서 추출.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");
const DB_PATH = path.join(__dirname, "..", "src", "data", "blog-posts.js");

function extractMeta(file) {
  const content = fs.readFileSync(file, "utf8");
  const titleMatch =
    content.match(/title:\s*['"]([^'"]+)['"]/) ||
    content.match(/title:\s*`([^`]+)`/);
  const descMatch =
    content.match(/description:\s*['"]([^'"]+)['"]/) ||
    content.match(/description:\s*`([^`]+)`/);
  return {
    title: titleMatch ? titleMatch[1].trim() : "테니스 가이드",
    description: descMatch ? descMatch[1].trim() : "",
  };
}

// 실제 블로그 디렉토리
const actualDirs = fs
  .readdirSync(BLOG_DIR, { withFileTypes: true })
  .filter(
    (d) => d.isDirectory() && !d.name.startsWith("[") && d.name !== "category",
  )
  .map((d) => d.name);
const actualSet = new Set(actualDirs);

// DB 로드
const dbSource = fs.readFileSync(DB_PATH, "utf8");
const startMatch = dbSource.match(/export\s+const\s+allBlogPosts\s*=\s*\[/);
if (!startMatch) {
  console.error("allBlogPosts 배열을 찾을 수 없음");
  process.exit(1);
}

// 런타임 평가로 배열 얻기 (안전성: DB는 순수 JSON-like 구조)
const evalStart = dbSource.indexOf("[", startMatch.index);
const evalEnd = dbSource.lastIndexOf("];");
const arrayLiteral = dbSource.slice(evalStart, evalEnd + 1);
const entries = eval(arrayLiteral);

const dbSet = new Set(entries.map((e) => e.slug));

// 1. 고아 entry 제거
const cleaned = entries.filter((e) => actualSet.has(e.slug));
const removed = entries.length - cleaned.length;

// 2. 누락 페이지 추가
const missing = actualDirs.filter((d) => !dbSet.has(d));
const today = new Date().toISOString().slice(0, 10);

for (const slug of missing) {
  const pageFile = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(pageFile)) continue;
  const { title, description } = extractMeta(pageFile);
  cleaned.push({
    id: slug,
    slug,
    tags: ["테니스"],
    title,
    excerpt: description || title,
    badge: "가이드",
    category: "기술 가이드",
    date: today,
    readTime: "10분",
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  });
}

// 날짜 역순 정렬
cleaned.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

// 파일 재작성
const newContent =
  "// 블로그 글 메타데이터 - 자동 생성됨\n" +
  "export const allBlogPosts = " +
  JSON.stringify(cleaned, null, 2) +
  ";\n";

fs.writeFileSync(DB_PATH, newContent, "utf8");

console.log(`완료:`);
console.log(`  - 고아 entry 제거: ${removed}개`);
console.log(`  - 누락 페이지 추가: ${missing.length}개`);
console.log(`  - 최종 DB 크기: ${cleaned.length}개`);
