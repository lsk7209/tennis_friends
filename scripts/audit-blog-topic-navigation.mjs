#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { allBlogPosts } from "../src/data/blog-posts.js";
import { isIndexableBlogSlug } from "../src/lib/blog-quality.ts";
import { getPublishedBlogPosts } from "../src/lib/blog-publish.ts";
import { buildBlogTopicNavigation, filterBlogPostsByTopic } from "../src/lib/blog-utils.ts";
import { paginatePublishedBlogPosts } from "../src/lib/blog-publish.ts";

const post = (slug, category) => ({ slug, category, title: slug });
const topics = buildBlogTopicNavigation([
  post("serve-a", "테니스 서브"),
  post("unknown-a", "새 카테고리"),
  post("serve-b", "서브 기술"),
  post("serve-c", "테니스 레슨"),
  post("gear-a", "테니스 라켓"),
]);

assert.deepEqual(topics.map(({ id, count }) => [id, count]), [
  ["skills", 3],
  ["gear", 1],
  ["other", 1],
]);
assert.deepEqual(topics[0].examples.map(({ slug }) => slug), ["serve-a", "serve-b"]);
assert.deepEqual(topics[2].examples.map(({ slug }) => slug), ["unknown-a"]);
assert.deepEqual(buildBlogTopicNavigation([]), []);
assert.deepEqual(filterBlogPostsByTopic([], "unknown"), []);

const activePosts = getPublishedBlogPosts(allBlogPosts).filter((item) =>
  isIndexableBlogSlug(item.slug),
);
const activeTopics = buildBlogTopicNavigation(activePosts);
assert.equal(activeTopics.reduce((sum, topic) => sum + topic.count, 0), activePosts.length);
assert(activeTopics.every((topic) => topic.count > 0));
assert(activeTopics.every((topic) => topic.examples.length <= 2));
for (const topic of activeTopics) {
  const matching = filterBlogPostsByTopic(activePosts, topic.id);
  assert.equal(matching.length, topic.count);
  const pages = Array.from(
    { length: Math.ceil(topic.count / 12) },
    (_, index) => paginatePublishedBlogPosts(matching, index + 1, 12).posts,
  ).flat();
  assert.deepEqual(pages.map(({ slug }) => slug), matching.map(({ slug }) => slug));
}

const read = (relativePath) => fs.readFileSync(path.join(process.cwd(), relativePath), "utf8");
const content = read("src/app/blog/BlogIndexPageContent.tsx");
const topicRoot = read("src/app/blog/topic/[topic]/page.tsx");
const topicPages = read("src/app/blog/topic/[topic]/page/[page]/page.tsx");
const index = read("src/lib/blog-index.ts");
const manifest = JSON.parse(read("package.json"));
assert(content.includes("getBlogTopicPageHref(topic.id, 1)"));
assert(content.includes("pageHref(currentPage + 1)"));
assert(content.includes('action="/search"') && content.includes('method="get"'));
assert(index.includes("filterBlogPostsByTopic(getPublishedIndexPosts(), topicId)"));
assert(index.includes("paginatePublishedBlogPosts(posts, page, POSTS_PER_PAGE)"));
for (const route of [topicRoot, topicPages]) {
  assert(route.includes("generateStaticParams") && route.includes("dynamicParams = false"));
  assert(route.includes("robots: { index: false, follow: true }"));
  assert(route.includes("alternates: { canonical: getBlogTopicPageHref("));
  assert(route.includes("notFound()"));
}
assert(manifest.scripts.verify.includes("npm run audit:blog-topic-navigation"));

console.log(JSON.stringify({
  status: "ok",
  activePosts: activePosts.length,
  topics: activeTopics.map(({ id, count }) => ({ id, count })),
  routePolicy: "canonical self; noindex,follow; static topic pages",
}));
