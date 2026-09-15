import fs from "node:fs";
import path from "node:path";
import { assertPublishable } from "../src/lib/publication-quality.mjs";

const [packageDir, startAt = "2026-09-09T09:00:00+09:00"] = process.argv.slice(2);
if (!packageDir) throw new Error("Usage: node scripts/import-reviewed-tennis-drafts.mjs <package-dir> [start-at]");

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(packageDir, "manifest.json"), "utf8"));
const releaseDependencies = JSON.parse(fs.readFileSync(path.join(packageDir, "release-dependencies.json"), "utf8"));
const items = manifest.items ?? manifest.articles ?? manifest;
if (!Array.isArray(items) || items.length !== 30) throw new Error(`Expected 30 manifest items, received ${items?.length}`);
const knownRoutes = new Set([
  ...items.map((item) => `/blog/${item.slug}`),
  ...releaseDependencies.dependencies.map((dependency) => dependency.target_route),
  "/utility/ntrp-test",
  "/utility/tennis-dictionary",
  "/utility/play-style-test",
]);

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const plainText = (value) => value.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`>#]/g, "").replace(/\s+/g, " ").trim();
function inline(value) {
  let output = escapeHtml(value);
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    if (!/^(?:https:\/\/|\/(?!\/)|#)/.test(href)) throw new Error(`Unsupported link scheme: ${href}`);
    const external = /^https?:\/\//.test(href);
    return `<a href="${escapeHtml(href)}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${label}</a>`;
  });
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/`([^`]+)`/g, "<code>$1</code>");
  return output;
}

function markdownToHtml(source) {
  if (/```|<\/?[a-z][^>]*>/i.test(source)) throw new Error("Raw HTML or fenced code is not allowed in reviewed drafts");
  const body = source.replace(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n/, "").trimStart().replace(/^# .+(?:\r?\n)+/, "");
  const lines = body.split(/\r?\n/);
  const output = [];
  let paragraph = [];
  let list = [];
  const flushParagraph = () => { if (paragraph.length) output.push(`<p>${inline(paragraph.join(" "))}</p>`); paragraph = []; };
  const flushList = () => { if (list.length) output.push(`<ul>${list.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`); list = []; };

  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line) { flushParagraph(); flushList(); continue; }
    if (/^\|.*\|$/.test(line) && /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[i + 1]?.trim() ?? "")) {
      flushParagraph(); flushList();
      const rows = [line, ...lines.slice(i + 2).filter((candidate) => /^\|.*\|$/.test(candidate.trim()))];
      const cells = (row) => row.trim().slice(1, -1).split("|").map((cell) => cell.trim());
      const head = cells(rows[0]);
      const bodyRows = rows.slice(1);
      output.push(`<table><thead><tr>${head.map((cell) => `<th scope="col">${inline(cell)}</th>`).join("")}</tr></thead><tbody>${bodyRows.map((row) => `<tr>${cells(row).map((cell, index) => index === 0 ? `<th scope="row">${inline(cell)}</th>` : `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
      i += 1 + bodyRows.length;
      continue;
    }
    if (line.startsWith("## ") || line.startsWith("### ")) {
      flushParagraph(); flushList();
      const level = line.startsWith("### ") ? 3 : 2;
      output.push(`<h${level}>${inline(line.slice(level + 1))}</h${level}>`);
    } else if (/^[-*] /.test(line)) {
      flushParagraph(); list.push(line.slice(2));
    } else if (line.startsWith("> ")) {
      flushParagraph(); flushList(); output.push(`<blockquote>${inline(line.slice(2))}</blockquote>`);
    } else {
      flushList(); paragraph.push(line);
    }
  }
  flushParagraph(); flushList();
  return output.join("\n");
}

const startMs = Date.parse(startAt);
if (Number.isNaN(startMs)) throw new Error(`Invalid start timestamp: ${startAt}`);
const posts = [];
const contents = {};
for (const [index, item] of items.entries()) {
  if (item.status !== "done") throw new Error(`${item.id} is not done`);
  const draftPath = path.join(packageDir, item.draft_path);
  const markdown = fs.readFileSync(draftPath, "utf8");
  const quality = assertPublishable({ ...item, body: markdown, reviewEvidence: item.review_evidence ?? item.reviewed_by }, knownRoutes);
  if (quality.warnings.length) console.warn(`${item.id}: review warnings: ${quality.warnings.join(", ")}`);
  const html = markdownToHtml(markdown);
  const firstParagraph = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "").split(/\r?\n\r?\n/).map(plainText).find((value) => value && value !== item.title) ?? item.answer_claim;
  const excerpt = firstParagraph.slice(0, 190);
  const scheduledAt = new Date(startMs + index * 12 * 3_600_000).toISOString().replace(".000Z", "+00:00");
  const kst = new Date(Date.parse(scheduledAt) + 9 * 3_600_000).toISOString().slice(0, 19) + "+09:00";
  const tags = [...new Set([item.main_keyword, ...(item.extended_keywords ?? []).slice(0, 3)].filter(Boolean))];
  posts.push({ id: item.id, slug: item.slug, title: item.title, excerpt, badge: "예약 글", category: item.cluster || "테니스 가이드", date: kst.slice(0, 10), scheduledAt: kst, readTime: `${Math.max(6, Math.ceil(plainText(markdown).length / 650))}분`, badgeColor: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300", categoryColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300", tags });
  contents[item.slug] = {
    summary: item.answer_claim || item.subtitle || excerpt,
    highlight: item.subtitle || item.answer_claim || item.title,
    tags,
    content: html,
  };
}

const metadata = `export const reviewedSeptember2026Posts = ${JSON.stringify(posts, null, 2)};\n`;
const content = `export const BLOG_CONTENT_PART30_REVIEWED_SEPTEMBER_2026 = ${JSON.stringify(contents, null, 2)};\n`;
fs.writeFileSync(path.join(root, "src/data/blog-posts-reviewed-september-2026.js"), metadata, "utf8");
fs.writeFileSync(path.join(root, "src/data/blog-content/part30-reviewed-september-2026.ts"), content, "utf8");
const scheduleById = Object.fromEntries(posts.map((post) => [post.id, post.scheduledAt]));
const releasePlan = {
  generatedAt: new Date().toISOString(),
  scheduleStart: posts[0].scheduledAt,
  scheduleEnd: posts.at(-1).scheduledAt,
  intervalHours: 12,
  dependencies: releaseDependencies.dependencies.map((dependency) => ({
    articleId: dependency.article_id,
    targetArticleId: dependency.target_article_id,
    targetRoute: dependency.target_route,
    targetSha256: dependency.target_sha256,
    targetScheduledAt: scheduleById[dependency.target_article_id],
    dependentScheduledAt: scheduleById[dependency.article_id],
  })),
};
fs.mkdirSync(path.join(root, "docs/reports"), { recursive: true });
fs.writeFileSync(path.join(root, "docs/reports/reviewed-tennis-release-plan.json"), JSON.stringify(releasePlan, null, 2) + "\n", "utf8");
console.log(JSON.stringify({ posts: posts.length, first: posts[0].scheduledAt, last: posts.at(-1).scheduledAt }));
