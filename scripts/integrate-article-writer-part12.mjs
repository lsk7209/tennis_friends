// part12 generator 결과를 site에 통합:
// - src/data/blog-posts-aw-part12.js  (메타: id/slug/title/excerpt/date/scheduledAt/category/tags ...)
// - src/data/blog-content/part12-article-writer-300.ts  (본문 contentMap)

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "out", "article-writer", "tennisfrens-part12");
const MANIFEST_PATH = path.join(SRC_DIR, "manifest.json");
const CONTENT_OUT = path.join(ROOT, "src", "data", "blog-content", "part12-article-writer-300.ts");
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-aw-part12.js");

const categoryClassMap = {
  "서브 기술": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "리턴 전술": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  "복식 전술": "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
  "장비 가이드": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  "부상 예방": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
  "회복 루틴": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
  "경기 분석": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  "코트·환경": "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
  "멘탈 루틴": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "입문 가이드": "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300",
  "동호회 운영": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  "훈련 가이드": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
};

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function toReadTime(charCount) {
  return `${Math.max(10, Math.ceil(charCount / 500))}분`;
}

function buildTags(draft) {
  const factSources = draft.used_facts.map((fact) => fact.source).slice(0, 2);
  const h2Tags = draft.h2_list
    .map((h) => h.replace(/^\d+\.\s*/, "").replace(/[?？]/g, "").trim())
    .filter(Boolean)
    .slice(0, 2);
  return [...new Set([draft.category, ...h2Tags, ...factSources, "테니스프렌즈"])];
}

function extractFaq(draft) {
  const faqBlock = draft.jsonld_blocks.find((b) => b["@type"] === "FAQPage");
  if (!faqBlock) return [];
  return faqBlock.mainEntity.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  }));
}

function buildOutputs() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error(`Missing manifest: ${MANIFEST_PATH}`);
  }
  const manifest = readJson(MANIFEST_PATH);
  if (manifest.passCount !== manifest.total) {
    throw new Error(`Pass count mismatch: ${manifest.passCount}/${manifest.total}`);
  }
  if (manifest.minScore < 90) {
    throw new Error(`Quality score below 90: minScore=${manifest.minScore}`);
  }

  const posts = [];
  const contentMap = {};

  for (const row of manifest.rows) {
    const draftPath = path.join(SRC_DIR, "drafts", `${row.slug}.draft.json`);
    if (!fs.existsSync(draftPath)) {
      throw new Error(`Missing draft: ${draftPath}`);
    }
    const draft = readJson(draftPath);
    const tags = buildTags(draft);

    posts.push({
      id: draft.slug,
      slug: draft.slug,
      tags,
      title: draft.title,
      excerpt: draft.excerpt,
      badge: "예약 발행",
      category: draft.category,
      date: draft.date,
      scheduledAt: draft.scheduledAt,
      readTime: toReadTime(draft.char_count),
      badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
      categoryColor:
        categoryClassMap[draft.category] ||
        "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    });

    const highlight =
      draft.text
        .split(/[.!?]\s/)
        .map((s) => s.trim())
        .find((s) => s.length >= 60 && s.length <= 180) || draft.excerpt;

    contentMap[draft.slug] = {
      content: draft.content_html,
      tags,
      summary: draft.excerpt,
      highlight,
      faq: extractFaq(draft),
    };
  }

  // 슬러그 중복 검사
  const seen = new Set();
  for (const p of posts) {
    if (seen.has(p.slug)) throw new Error(`Duplicate slug: ${p.slug}`);
    seen.add(p.slug);
  }
  return { posts, contentMap, manifest };
}

function writeOutputs({ posts, contentMap, manifest }) {
  const banner = `// Auto-generated from out/article-writer/tennisfrens-part12. Do not edit by hand.\n// generatedAt: ${manifest.generatedAt}\n// schedule: ${manifest.schedule.start} → ${manifest.schedule.end} (interval ${manifest.schedule.intervalHours}h)\n// avgScore: ${manifest.avgScore} / minScore: ${manifest.minScore} / passCount: ${manifest.passCount}/${manifest.total}\n`;

  fs.writeFileSync(
    POSTS_OUT,
    `${banner}export const articleWriterPart12Posts = ${JSON.stringify(posts, null, 2)};\n`,
    "utf8",
  );

  fs.writeFileSync(
    CONTENT_OUT,
    `${banner}type BlogContentEntry = {\n  content: string;\n  tags: string[];\n  summary: string;\n  highlight: string;\n  faq?: { question: string; answer: string }[];\n};\n\nexport const BLOG_CONTENT_PART12_ARTICLE_WRITER_300 = ${JSON.stringify(contentMap, null, 2)} satisfies Record<string, BlogContentEntry>;\n`,
    "utf8",
  );
}

const outputs = buildOutputs();
writeOutputs(outputs);

console.log(
  JSON.stringify(
    {
      posts: outputs.posts.length,
      contentEntries: Object.keys(outputs.contentMap).length,
      postsOut: POSTS_OUT,
      contentOut: CONTENT_OUT,
      firstScheduled: outputs.posts[0].scheduledAt,
      lastScheduled: outputs.posts[outputs.posts.length - 1].scheduledAt,
    },
    null,
    2,
  ),
);
