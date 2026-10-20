import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { loadProjectSource } from "./lib/load-project-source.mjs";
const { allBlogPosts } = loadProjectSource("src/data/blog-posts.js");
const { blogContentMap } = loadProjectSource("src/data/blog-content/index.ts");
const { getPublishedBlogPosts } = loadProjectSource("src/lib/blog-publish.ts");
const missing = [...new Set(allBlogPosts.filter(post => {
  if ((blogContentMap[post.slug] || blogContentMap[post.id])?.content?.trim()) return false;
  const file = path.join("src/app/blog", post.slug, "page.tsx");
  if (!fs.existsSync(file)) return true;
  const source = fs.readFileSync(file, "utf8");
  return /(?:@\/app\/blog\/\[slug\]\/page|\.\.\/\[slug\]\/page)/.test(source);
}).map(post => post.slug))].sort();
if (process.argv.includes("--inventory")) {
  console.log(JSON.stringify(missing, null, 2));
} else {
  const published = getPublishedBlogPosts(allBlogPosts, new Date("2100-01-01T00:00:00+09:00"));
  assert.equal(published.filter(post => missing.includes(post.slug)).length, 0,
    "metadata-only articles leak into public discovery");
  const { unavailableBlogSlugs } = loadProjectSource("src/data/blog-unavailable.js");
  assert.deepEqual([...unavailableBlogSlugs].sort(), missing,
    "availability registry drift: review missing bodies/custom routes, restore resolved slugs");
  for (const [slug, entry] of Object.entries(blogContentMap)) {
    for (const match of entry.content.matchAll(/href=["'](\/blog\/[^"'#?]+)[^"']*["']/g)) {
      assert.ok(!missing.includes(match[1].slice(6)), `dead inline link in ${slug}: ${match[1]}`);
    }
  }
  const custom = "tennis-western-grip-advantages";
  assert.ok(published.some(post => post.slug === custom), "custom-body article incorrectly hidden");
  assert.ok(!blogContentMap[custom], "custom-body fixture no longer exercises separate rendering");
  const { proxy } = loadProjectSource("src/proxy.ts");
  const { NextRequest } = loadProjectSource("node_modules/next/server.js");
  for (const slug of missing) {
    const response = proxy(new NextRequest(`https://tennisfrens.com/blog/${slug}`));
    assert.equal(response.status,404, `missing body route must return real 404: ${slug}`);
    assert.equal(response.headers.get("cache-control"),"no-store");
    assert.equal(response.headers.get("x-robots-tag"),"noindex");
  }
  assert.equal(proxy(new NextRequest(`https://tennisfrens.com/blog/${custom}`)).headers.get("x-middleware-next"),"1");
  const { getSitemapEntries } = loadProjectSource("src/lib/sitemap-entries.ts");
  const urls = getSitemapEntries().map(entry => entry.url);
  assert.equal(urls.filter(url => missing.some(slug => url.endsWith(`/blog/${slug}`))).length, 0);
  assert.ok(urls.some(url => url.endsWith(`/blog/${custom}`)));
  console.log(JSON.stringify({status:"ok", unavailable:missing.length, published:published.length, customPreserved:true}));
}
