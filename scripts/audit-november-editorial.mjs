import assert from "node:assert/strict";
import fs from "node:fs";
import { createRequire } from "node:module";
import { loadProjectSource } from "./lib/load-project-source.mjs";
const require = createRequire(import.meta.url);
const { validateGeneratedHtml } = require("./lib/validate-generated-html.js");
const { november2026ScheduledPosts: posts } = loadProjectSource("src/data/blog-posts-november-2026.js");
const { blogContentMap } = loadProjectSource("src/data/blog-content/index.ts");
const { allBlogPosts } = loadProjectSource("src/data/blog-posts.js");
const { isPublishedBlogPost } = loadProjectSource("src/lib/blog-publish.ts");
const knownBlog = new Set(allBlogPosts.map(p => p.slug));
const { unavailableBlogSlugs } = loadProjectSource("src/data/blog-unavailable.js");
assert.equal(posts.length, 4);
assert.equal(new Set(posts.map(p => p.slug)).size, 4);
for (const post of posts) {
  const entry = blogContentMap[post.slug];
  assert.ok(entry?.content, `missing November body ${post.slug}`);
  assert.ok(!/<(?:script|iframe|object|embed|svg|math|form|input|button)\b|on[a-z]+\s*=|javascript:|data:text\/html|\$\{/i.test(entry.content));
  // Reviewed articles add static tables and verified local anchors; the raw-AI
  // validator deliberately forbids those, so keep its strict prose check intact.
  validateGeneratedHtml(entry.content.replace(/<\/?(?:a|table|thead|tbody|tr|th|td)\b[^>]*>/gi, ""), {minHeadings:3});
  assert.ok(entry.content.includes("<table"), `missing usable record table ${post.slug}`);
  assert.ok(!isPublishedBlogPost(post, new Date("2026-10-31T23:59:59+09:00")));
  if (post.publicationState !== "draft") {
    assert.ok(isPublishedBlogPost(post, new Date(post.scheduledAt)), `does not publish at release ${post.slug}`);
  }
  for (const [,href] of entry.content.matchAll(/href=["'](\/[^"'#?]+)[^"']*["']/g)) {
    if (href.startsWith("/blog/")) {
      const slug = href.slice(6);
      assert.ok(knownBlog.has(slug) && !unavailableBlogSlugs.includes(slug), `invalid blog target ${href}`);
      const target = allBlogPosts.find(p=>p.slug===slug);
      assert.ok(isPublishedBlogPost(target,new Date(post.scheduledAt)), `unreleased link ${href}`);
    } else assert.ok(fs.existsSync(`src/app${href}/page.tsx`), `invalid internal target ${href}`);
  }
}
console.log(JSON.stringify({status:"ok",articles:posts.length,scheduled:posts.filter(p=>p.publicationState!=="draft").length}));
