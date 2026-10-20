import assert from "node:assert/strict";
import { loadProjectSource } from "./lib/load-project-source.mjs";

const { blogContentMap } = loadProjectSource("src/data/blog-content/index.ts");
const { allBlogPosts } = loadProjectSource("src/data/blog-posts.js");
const { isIndexableBlogSlug } = loadProjectSource("src/lib/blog-quality.ts");
const cases = [
  ["tennis-elbow-load-management-match-application", "2026-06-23T00:00:00+09:00", "https://www.merseycare.nhs.uk/elbow-pain"],
  ["tennis-knee-footwork-load-monthly-review", "2026-06-28T10:00:00+09:00", "https://www.nhs.uk/symptoms/knee-pain/"],
  ["tf-title100-injury-recovery-076", "2026-08-11T00:10:00+09:00", "https://www.nhs.uk/symptoms/knee-pain/"],
];
for (const [slug, scheduledAt, source] of cases) {
  const post = allBlogPosts.find(p => p.slug === slug);
  const entry = blogContentMap[slug];
  assert(post && entry, `effective entry missing: ${slug}`);
  assert.equal(post.scheduledAt, scheduledAt, `schedule changed: ${slug}`);
  assert.equal(isIndexableBlogSlug(slug), true, `existing indexability changed: ${slug}`);
  assert.equal(post.excerpt, entry.summary, `snippet/body mismatch: ${slug}`);
  assert(entry.content.includes(source), `clinical source missing: ${slug}`);
  assert(entry.content.includes("2026년 10월 20일"), `source check date missing: ${slug}`);
  assert(entry.content.includes("진단") && entry.content.includes("단계적"), `scope/return guidance missing: ${slug}`);
  for (const { question, answer } of entry.faq) {
    assert(entry.content.includes(question) && entry.content.includes(answer), `FAQ schema/body mismatch: ${slug}`);
  }
  assert(!/샷 선택을 조정하며 마칠 수|통증이 줄고 있다면 연습 강도를 소폭 올려|혼자 하는 것으로 충분하지만|무릎이 뻐근한를|부상 예방가/.test(JSON.stringify(entry)), `unsafe or mismatched original content returned: ${slug}`);
  console.log(JSON.stringify({ slug, scheduledAt, indexable: isIndexableBlogSlug(slug), checked: "effective content, metadata, FAQ, clinical source, target indexability" }));
}
const knee = allBlogPosts.find(p => p.slug === cases[2][0]);
assert(!knee.title.includes("발리 연습이 나을"));
assert(!JSON.stringify(knee.tags).match(/어깨|엘보/));
console.log("PASS: 3 reviewed health articles; no global medical-content approval implied.");
