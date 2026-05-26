import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out", "article-writer", "tennisfrens-300");
const SLUG = "aw-001-serve-5";

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function polishText(value) {
  return value
    .replaceAll("토스 출발점과 릴리스 높이을", "토스 출발점과 릴리스 높이를")
    .replaceAll("토스 출발점과 릴리스 높이이", "토스 출발점과 릴리스 높이가")
    .replaceAll("빈손 토스 20회와 세컨드 서브 10회을", "빈손 토스 20회와 세컨드 서브 10회를")
    .replaceAll("20분 리라이트 루틴", "20분 교정 루틴")
    .replaceAll("서브 토스가 뒤로 넘어갈 때 교정이 반복되는 이유", "서브 토스가 뒤로 넘어가는 문제가 반복되는 이유")
    .replaceAll("서브 토스가 뒤로 넘어갈 때 교정도 마찬가지입니다.", "서브 토스 교정도 마찬가지입니다.")
    .replaceAll("서브 토스가 뒤로 넘어갈 때 교정이 흔들리는 날", "서브 토스가 흔들리는 날")
    .replaceAll("서브 토스가 뒤로 넘어갈 때 교정은 크게 고칠수록", "서브 토스 교정은 크게 고칠수록");
}

const draftPath = path.join(OUT_DIR, "drafts", `${SLUG}.draft.json`);
const editorPath = path.join(OUT_DIR, "editor", `${SLUG}.editor.json`);
const htmlPath = path.join(OUT_DIR, "published", `${SLUG}.html`);
const txtPath = path.join(OUT_DIR, "published", `${SLUG}.txt`);
const h2Path = path.join(OUT_DIR, "published", `${SLUG}.h2.json`);
const manifestPath = path.join(OUT_DIR, "manifest.json");

const draft = readJson(draftPath);
const contentHtml = polishText(draft.content_html);
const text = stripTags(contentHtml);
const h2List = [...contentHtml.matchAll(/<h2>(.*?)<\/h2>/g)].map((match) => match[1]);

const nextDraft = {
  ...draft,
  content_html: contentHtml,
  text,
  char_count: text.length,
  h2_list: h2List,
};

const editor = readJson(editorPath);
editor.gates["13_sanity"] = {
  pass: text.length >= 3500 && h2List.length >= 8 && (contentHtml.match(/target="_blank"/g) || []).length >= 3,
  char_count: text.length,
  h2_count: h2List.length,
  external_links: (contentHtml.match(/target="_blank"/g) || []).length,
};
editor.verdict = Object.values(editor.gates).every((gate) => gate.pass) ? "PASS" : "FAIL";
editor.summary = "Article 001 individually polished after sequential review.";

if (editor.verdict !== "PASS") {
  throw new Error(`Article 001 failed after polish: ${JSON.stringify(editor.gates["13_sanity"])}`);
}

writeJson(draftPath, nextDraft);
writeJson(editorPath, editor);
fs.writeFileSync(htmlPath, contentHtml, "utf8");
fs.writeFileSync(txtPath, text, "utf8");
writeJson(h2Path, h2List);

const manifest = readJson(manifestPath);
manifest.articles = manifest.articles.map((article) =>
  article.slug === SLUG ? { ...article, char_count: text.length, h2_count: h2List.length, verdict: "PASS" } : article,
);
manifest.articleWriter.minChars = Math.min(...manifest.articles.map((article) => article.char_count));
manifest.articleWriter.maxChars = Math.max(...manifest.articles.map((article) => article.char_count));
writeJson(manifestPath, manifest);

console.log(JSON.stringify({ slug: SLUG, char_count: text.length, h2_count: h2List.length }, null, 2));
