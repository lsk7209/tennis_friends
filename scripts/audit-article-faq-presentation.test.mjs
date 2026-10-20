import assert from "node:assert/strict";
import fs from "node:fs";
import { prepareInlineFaq } from "../src/lib/article-html.mjs";

const source = fs.readFileSync("src/data/blog-content/part10-scheduled-300.ts", "utf8");
const entry = source.match(/"tennis-knee-footwork-load-monthly-review":\s*\{\s*"content":\s*("(?:\\.|[^"\\])*")/);
assert.ok(entry, "review article fixture exists");
const original = JSON.parse(entry[1]);
const prepared = prepareInlineFaq(original);
assert.equal(prepared.hasInlineFaq, true);
assert.match(prepared.html, /<h2 id="faq">자주 묻는 질문<\/h2>/);
assert.equal((prepared.html.match(/<details>/g) ?? []).length, 3);
assert.match(prepared.html, /<h2>참고 자료<\/h2>/);
assert.match(prepared.html, /nhs\.uk\/symptoms\/knee-pain/);

const plain = prepareInlineFaq("<h2>본문</h2><p>내용</p>");
assert.deepEqual(plain, { html: "<h2>본문</h2><p>내용</p>", hasInlineFaq: false });

const page = fs.readFileSync("src/app/blog/[slug]/page.tsx", "utf8");
const faq = fs.readFileSync("src/components/seo/FAQSection.tsx", "utf8");
const css = fs.readFileSync("src/app/globals.css", "utf8");
assert.match(page, /faqItems\.length > 0 && !hasInlineFaq && \(\s*<FAQSection/);
assert.match(page, /dangerouslySetInnerHTML=\{\{ __html: articleContent \}\}/);
assert.doesNotMatch(faq, /schemaOnly/, "hidden metadata-only FAQ schema is not emitted");
assert.match(css, /\.dark \.prose a\s*\{\s*color:\s*var\(--prose-link\)/);
assert.match(css, /\.dark\s*\{[^}]*--prose-link:\s*#38bdf8/s);

console.log("Article FAQ and link presentation audit passed.");
