#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  getBlogPublishDate,
  getBlogPageHref,
  getPaginationWindow,
  getPublishedBlogPosts,
  isPublishedBlogPost,
  paginatePublishedBlogPosts,
  sortBlogPostsByPublishTime,
} from "../src/lib/blog-publish.ts";

const now = new Date("2026-09-15T12:00:00+09:00");
const base = {
  id: "fixture",
  slug: "fixture",
  title: "fixture",
  excerpt: "fixture",
  category: "fixture",
  date: "2026-09-15",
  readTime: "1분",
};
const published = { ...base, id: "published", scheduledAt: now.toISOString() };
const future = {
  ...base,
  id: "future",
  scheduledAt: new Date(now.getTime() + 1).toISOString(),
};
const edited = {
  ...published,
  id: "edited",
  updatedAt: "2099-01-01T00:00:00+09:00",
};
const draft = { ...published, id: "draft", publicationState: "draft" };
const privatePost = { ...published, id: "private", publicationState: "private" };
const invalid = { ...base, id: "invalid", date: "not-a-date" };

assert.equal(isPublishedBlogPost(published, now), true, "release instant must publish");
assert.equal(isPublishedBlogPost(future, now), false, "future post leaked");
assert.equal(isPublishedBlogPost(edited, now), true, "updatedAt changed publish state");
assert.equal(isPublishedBlogPost(draft, now), false, "draft leaked");
assert.equal(isPublishedBlogPost(privatePost, now), false, "private post leaked");
assert.equal(isPublishedBlogPost(invalid, now), false, "invalid date must fail closed");
assert.equal(Number.isNaN(getBlogPublishDate(invalid).getTime()), true);

assert.deepEqual(
  getPublishedBlogPosts([future, draft, privatePost, invalid, edited], now).map(
    (post) => post.id,
  ),
  ["edited"],
  "list publication gate differs from detail gate",
);
assert.deepEqual(
  sortBlogPostsByPublishTime([published, future, invalid]).map((post) => post.id),
  ["future", "published", "invalid"],
);

const fixtures = Array.from({ length: 25 }, (_, index) => ({ id: index + 1 }));
const first = paginatePublishedBlogPosts(fixtures, 1, 12);
const middle = paginatePublishedBlogPosts(fixtures, 2, 12);
const last = paginatePublishedBlogPosts(fixtures, 3, 12);
const beyond = paginatePublishedBlogPosts(fixtures, 4, 12);
const invalidPage = paginatePublishedBlogPosts(fixtures, 1.5, 12);
assert.deepEqual(first.posts.map((item) => item.id), Array.from({ length: 12 }, (_, index) => index + 1));
assert.deepEqual(middle.posts.map((item) => item.id), Array.from({ length: 12 }, (_, index) => index + 13));
assert.deepEqual(last.posts.map((item) => item.id), [25]);
assert.equal(last.totalPages, 3);
assert.equal(new Set([...first.posts, ...middle.posts, ...last.posts].map((item) => item.id)).size, 25);
assert.equal(beyond.outOfRange, true);
assert.deepEqual(beyond.posts, [], "out-of-range page duplicated the last page");
assert.equal(invalidPage.outOfRange, true);
assert.throws(() => paginatePublishedBlogPosts(fixtures, 1, 0), RangeError);
assert.equal(getBlogPageHref(1), "/blog");
assert.equal(getBlogPageHref(3), "/blog/page/3");
assert.deepEqual(getPaginationWindow(3, 5), ["/blog", "/blog/page/2", "/blog/page/3", "/blog/page/4", "/blog/page/5"]);

const audit = {
  status: "ok",
  generatedAt: new Date().toISOString(),
  fixtures: [
      "published-at-release",
      "future",
      "edited",
      "draft",
      "private",
      "invalid-date",
      "stable-order",
      "first-page",
      "last-page",
      "out-of-range",
      "invalid-page-size",
  ],
};
const report = path.join(
  process.cwd(),
  "docs",
  "reports",
  "blog-publication-contract-audit-latest.json",
);
fs.mkdirSync(path.dirname(report), { recursive: true });
fs.writeFileSync(report, JSON.stringify(audit, null, 2), "utf8");
console.log(JSON.stringify(audit));
