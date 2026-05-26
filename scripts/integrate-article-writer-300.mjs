import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SOURCE_DIR = path.join(ROOT, "out", "article-writer", "tennisfrens-300");
const MANIFEST_PATH = path.join(SOURCE_DIR, "manifest.json");
const CONTENT_OUT = path.join(ROOT, "src", "data", "blog-content", "part11-article-writer-300.ts");
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-aw-300.js");
const PUBLISH_DATE = "2026-05-15";

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

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function assertSourceReady() {
  if (!fs.existsSync(MANIFEST_PATH)) {
    throw new Error(`Missing manifest: ${MANIFEST_PATH}`);
  }
}

function extractFaq(draft) {
  const faqBlock = draft.jsonld_blocks.find((block) => block["@type"] === "FAQPage");
  if (!faqBlock) return [];

  return faqBlock.mainEntity.map((item) => ({
    question: item.name,
    answer: item.acceptedAnswer.text,
  }));
}

function buildTags(draft) {
  const sourceTags = draft.used_facts.map((fact) => fact.source).slice(0, 2);
  const h2Tags = draft.h2_list
    .map((heading) => heading.replace(/^\d+\.\s*/, "").replace(/[?？]/g, "").trim())
    .filter(Boolean)
    .slice(0, 2);

  return [...new Set([draft.category, ...h2Tags, ...sourceTags, "테니스프렌즈"])];
}

function toReadTime(charCount) {
  return `${Math.max(8, Math.ceil(charCount / 500))}분`;
}

function buildOutputs() {
  assertSourceReady();

  const manifest = readJson(MANIFEST_PATH);
  if (manifest.articleWriter.passCount !== 300) {
    throw new Error(`Expected 300 passing drafts, got ${manifest.articleWriter.passCount}`);
  }

  const posts = [];
  const contentMap = {};

  for (const article of manifest.articles) {
    const draftPath = path.join(SOURCE_DIR, "drafts", `${article.slug}.draft.json`);
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
      badge: "신규 가이드",
      category: draft.category,
      date: PUBLISH_DATE,
      readTime: toReadTime(draft.char_count),
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
      categoryColor:
        categoryClassMap[draft.category] ||
        "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    });

    contentMap[draft.slug] = {
      content: draft.content_html,
      tags,
      summary: draft.excerpt,
      highlight:
        draft.text
          .split(".")
          .map((sentence) => sentence.trim())
          .find((sentence) => sentence.length >= 60 && sentence.length <= 180) ||
        draft.excerpt,
      faq: extractFaq(draft),
    };
  }

  const duplicateSlugs = posts
    .map((post) => post.slug)
    .filter((slug, index, list) => list.indexOf(slug) !== index);

  if (duplicateSlugs.length > 0) {
    throw new Error(`Duplicate slugs: ${duplicateSlugs.join(", ")}`);
  }

  return { posts, contentMap };
}

function writeGeneratedFiles({ posts, contentMap }) {
  const banner = "// Auto-generated from out/article-writer/tennisfrens-300. Do not edit by hand.\n";

  fs.writeFileSync(
    POSTS_OUT,
    `${banner}export const articleWriterBlogPosts = ${JSON.stringify(posts, null, 2)};\n`,
    "utf8",
  );

  fs.writeFileSync(
    CONTENT_OUT,
    `${banner}type BlogContentEntry = {\n  content: string;\n  tags: string[];\n  summary: string;\n  highlight: string;\n  faq?: { question: string; answer: string }[];\n};\n\nexport const BLOG_CONTENT_ARTICLE_WRITER_300 = ${JSON.stringify(contentMap, null, 2)} satisfies Record<string, BlogContentEntry>;\n`,
    "utf8",
  );
}

const outputs = buildOutputs();
writeGeneratedFiles(outputs);

console.log(
  JSON.stringify(
    {
      posts: outputs.posts.length,
      contentEntries: Object.keys(outputs.contentMap).length,
      postsOut: POSTS_OUT,
      contentOut: CONTENT_OUT,
    },
    null,
    2,
  ),
);
