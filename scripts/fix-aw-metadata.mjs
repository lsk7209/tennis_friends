/**
 * 300편 article-writer 메타데이터 개선:
 * - excerpt: 템플릿 문구 → highlight 기반 핵심 요약
 * - tags: 섹션 헤더 태그 제거 → 제목 기반 키워드
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const POSTS_PATH = path.join(rootDir, "src/data/blog-posts-aw-300.js");
const CONTENT_PATH = path.join(
  rootDir,
  "src/data/blog-content/part11-article-writer-300.ts"
);

// 제거할 무의미 태그 (정확히 일치)
const BAD_TAGS = new Set([
  "왜 이 문제가 반복되는가",
  "코트에서 먼저 확인할 5가지",
]);

// 영어 기관명·출처 태그 패턴 (전부 제거)
function isReferencTag(tag) {
  // 대문자로 시작하는 영어 단어가 포함된 태그 → 외부 기관명
  return /\b[A-Z][a-zA-Z]+/.test(tag);
}

// part11-article-writer-300.ts에서 highlight 맵 추출
function extractHighlights(tsText) {
  const map = {};
  // "aw-XXX-slug": { ... "highlight": "..." }
  // highlight 값은 이스케이프된 따옴표 포함 가능
  const re = /"(aw-\d{3}-[^"]+)":\s*\{(?:[^}]|\}(?!\s*,?\s*"aw-))*?"highlight":\s*"((?:[^"\\]|\\.)*)"/gs;
  let m;
  while ((m = re.exec(tsText)) !== null) {
    map[m[1]] = m[2].replace(/\\"/g, '"').replace(/\\n/g, " ").trim();
  }
  return map;
}

// highlight → excerpt: 핵심 인용구 추출 후 간결한 설명 생성
function highlightToExcerpt(highlight, title, category) {
  // 따옴표로 감싸진 핵심 기준 추출 (예: "첫 발 위치와 몸통 회전 순서")
  const quotedMatch = highlight.match(/["""]([^"""]{4,30})["""]/);
  if (quotedMatch) {
    const phrase = quotedMatch[1];
    const excerpt = `'${phrase}' 기준으로 코트에서 바로 점검하는 ${category} 실전 가이드.`;
    return excerpt.length <= 90 ? excerpt : excerpt.slice(0, 88) + "..";
  }

  // 인용구 없으면 highlight에서 제목 prefix만 제거
  const prefix = `${title}의 핵심은 `;
  let text = highlight.startsWith(prefix)
    ? highlight.slice(prefix.length)
    : highlight;
  text = text.trim();
  if (text.length > 80) {
    const cut = text.slice(0, 80);
    const lastSpace = cut.lastIndexOf(" ");
    text = lastSpace > 40 ? cut.slice(0, lastSpace) : cut;
  }
  return text.endsWith(".") ? text : text.replace(/[,、]$/, "") + ".";
}

// 제목에서 검색 키워드 2개 추출
function titleKeywords(title, category) {
  // "—" 앞 부분 (핵심 주제어)
  const main = title.split(/\s*—\s*/)[0];

  // 카테고리 단어 집합
  const catWords = new Set(category.split(/\s+/));

  // 조사·어미 제거 패턴 (단어 끝)
  const particleRe = /[가-힣]+(가|이|은|는|을|를|에서|에|으로|로|의|과|와|도|만|서|고|며|지|면|때|할|하는|처럼|보다|부터|까지)$/;

  const words = main
    .split(/\s+/)
    .map((w) => w.replace(/[^가-힣A-Za-z0-9]/g, ""))
    .filter((w) => w.length >= 2);

  // 카테고리 단어와 완전히 겹치지 않는 것 우선
  const unique = words.filter((w) => !catWords.has(w) && !particleRe.test(w));
  const fallback = words.filter((w) => !particleRe.test(w));
  const pool = unique.length >= 2 ? unique : fallback;

  // 2단어 합성 키워드 + 단일 키워드
  if (pool.length >= 2) {
    return [`${pool[0]} ${pool[1]}`, `${category} ${pool[0]}`];
  }
  if (pool.length === 1) {
    return [`${category} ${pool[0]}`];
  }
  return [];
}

// --- 메인 ---
const postsRaw = fs.readFileSync(POSTS_PATH, "utf-8");
const contentRaw = fs.readFileSync(CONTENT_PATH, "utf-8");

const highlights = extractHighlights(contentRaw);
console.log(`highlight 추출: ${Object.keys(highlights).length}건`);

// blog-posts-aw-300.js에서 JSON 배열 파싱
const arrayMatch = postsRaw.match(/\[\s*\{[\s\S]*\}\s*\]/);
if (!arrayMatch) {
  console.error("❌ 배열을 찾을 수 없습니다");
  process.exit(1);
}

let posts;
try {
  posts = JSON.parse(arrayMatch[0]);
} catch (e) {
  console.error("❌ JSON 파싱 실패:", e.message);
  process.exit(1);
}

console.log(`포스트 로드: ${posts.length}건`);

let updated = 0;
for (const post of posts) {
  const { slug, title, category } = post;
  const hl = highlights[slug];

  // excerpt 교체
  if (hl) {
    post.excerpt = highlightToExcerpt(hl, title, category);
  }

  // tags 정리: 나쁜 태그 + 영어 기관명 제거 + 키워드 추가
  const kept = (post.tags || []).filter(
    (t) => !BAD_TAGS.has(t) && !isReferencTag(t)
  );
  const keywords = titleKeywords(title, category);
  const catTag = category;
  const hasCategory = kept.includes(catTag);
  const hasTennisfrens = kept.includes("테니스프렌즈");

  const newTags = [
    ...(hasCategory ? [] : [catTag]),
    ...kept.filter((t) => t !== catTag && t !== "테니스프렌즈"),
    ...keywords.filter((k) => !kept.includes(k) && k !== catTag),
    ...(hasTennisfrens ? ["테니스프렌즈"] : []),
  ];
  // 카테고리 맨 앞, 테니스프렌즈 맨 뒤 보장
  post.tags = [
    catTag,
    ...newTags.filter((t) => t !== catTag && t !== "테니스프렌즈"),
    "테니스프렌즈",
  ];

  updated++;
}

// 샘플 5개 출력
console.log("\n--- 샘플 5개 ---");
for (const p of posts.slice(0, 5)) {
  console.log(`\n[${p.slug}]`);
  console.log(`  title:   ${p.title}`);
  console.log(`  excerpt: ${p.excerpt}`);
  console.log(`  tags:    ${JSON.stringify(p.tags)}`);
}

// 파일 재작성
const header =
  "// Auto-generated from out/article-writer/tennisfrens-300. Do not edit by hand.\n";
const newContent =
  header +
  "export const articleWriterBlogPosts = " +
  JSON.stringify(posts, null, 2) +
  ";\n";

fs.writeFileSync(POSTS_PATH, newContent, "utf-8");
console.log(`\n✅ ${updated}건 업데이트 완료 → ${POSTS_PATH}`);
