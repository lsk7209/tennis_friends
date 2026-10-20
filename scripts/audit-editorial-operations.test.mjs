import assert from "node:assert/strict";
import { test } from "node:test";
import {
  assessPublicationQueue,
  auditEditorialOperations,
  checkSitemaps,
  checkSitemapUrls,
  assessPublicationSync,
  checkRelease,
} from "./audit-editorial-operations.mjs";

const post = (slug, scheduledAt, publicationState) => ({
  slug,
  date: scheduledAt.slice(0, 10),
  scheduledAt,
  publicationState,
});
const now = new Date("2026-10-16T00:00:00Z");

test("publication sync catches overdue omissions and premature future URLs with cache grace", () => {
  const posts = [post("past", "2026-10-15T00:00:00Z"), post("recent", "2026-10-15T23:30:00Z"), post("future", "2026-11-01T00:00:00Z"), post("draft", "2026-10-01T00:00:00Z", "draft")];
  const result = assessPublicationSync(posts, now, [{ urls: ["https://example.com/blog/future"] }], "https://example.com");
  assert.deepEqual(result.missingPublishedSlugs, ["past"]);
  assert.deepEqual(result.prematureSlugs, ["future"]);
  assert.equal(result.ok, false);
  assert.equal(assessPublicationSync(posts, now, [{ urls: ["https://example.com/blog/past"] }], "https://example.com").ok, true);
});

test("release comparison fails closed for mismatches, missing markers and network errors", async () => {
  const digest = "a".repeat(64);
  const ok = await checkRelease("https://example.com", digest, async () => Response.json({ sourceDigest: digest }));
  assert.equal(ok.ok, true);
  for (const fetchImpl of [async () => Response.json({ sourceDigest: "b".repeat(64) }), async () => new Response("missing", { status: 404 }), async () => { throw new Error("offline"); }]) {
    assert.equal((await checkRelease("https://example.com", digest, fetchImpl)).ok, false);
  }
});

test("queue uses runtime publication dates and excludes draft/private posts", () => {
  const posts = [
    post("past", "2026-10-15T00:00:00Z"),
    post("next", "2026-10-20T00:00:00Z"),
    post("last", "2026-11-01T00:00:00Z"),
    post("draft", "2026-12-01T00:00:00Z", "draft"),
    post("private", "2026-12-02T00:00:00Z", "private"),
  ];
  const result = assessPublicationQueue(posts, now);
  assert.equal(result.futurePosts, 2);
  assert.equal(result.nextPost.slug, "next");
  assert.equal(result.lastScheduledPost.slug, "last");
  assert.equal(result.runwayDays, 16);
  assert.equal(result.alert, false);
  assert.equal(assessPublicationQueue(posts, new Date("2026-10-18T00:00:00Z")).alert, false);
  assert.equal(assessPublicationQueue(posts, new Date("2026-10-18T00:00:01Z")).alert, true);
  assert.equal(assessPublicationQueue(posts, new Date("2026-11-02T00:00:00Z")).alert, true);
});

test("invalid public date alerts while excluded invalid dates do not", () => {
  const posts = [post("valid", "2026-12-01T00:00:00Z"), post("bad", "invalid"), post("draft-bad", "invalid", "draft")];
  const result = assessPublicationQueue(posts, now);
  assert.deepEqual(result.invalidDateSlugs, ["bad"]);
  assert.equal(result.alert, true);
});

test("queue excludes articles in the runtime unavailable registry", () => {
  const posts = [
    post("valid", "2026-11-01T00:00:00Z"),
    post("tennis-ace-serve-placement", "2026-12-01T00:00:00Z"),
  ];
  const result = assessPublicationQueue(posts, now);
  assert.equal(result.futurePosts, 1);
  assert.equal(result.lastScheduledPost.slug, "valid");
});

test("live checks flag HTTP errors and network failures without stopping other endpoints", async () => {
  const calls = [];
  const results = await checkSitemaps("https://example.com/subpath", async (url, options) => {
    calls.push({ url, options });
    if (url.endsWith("sitemap.xml")) return new Response("missing", { status: 404 });
    throw new Error("network down");
  });
  assert.deepEqual(results.map((item) => item.ok), [false, false]);
  assert.deepEqual(results.map((item) => item.status), [404, null]);
  assert.match(results[1].error, /network down/);
  assert.deepEqual(calls.map((item) => item.url), ["https://example.com/sitemap.xml", "https://example.com/sitemap-naver.xml"]);
  assert.ok(calls.every((item) => item.options.redirect === "manual" && item.options.signal));
});

test("dry run makes no HTTP calls; live failure raises alert", async () => {
  const posts = [post("future", "2026-12-01T00:00:00Z")];
  const fetchImpl = async () => { throw new Error("network down"); };
  const dry = await auditEditorialOperations({ posts, now, fetchImpl });
  assert.equal(dry.status, "ok");
  assert.equal(dry.sitemaps, null);
  const live = await auditEditorialOperations({ posts, now, live: true, fetchImpl });
  assert.equal(live.status, "alert");
  assert.equal(live.sitemaps.length, 2);
});

test("sitemap URL checks deduplicate, bound concurrency, and report exact coverage", async () => {
  const sitemaps = [
    { urls: ["https://example.com/a", "https://example.com/b", "https://example.com/c"] },
    { urls: ["https://example.com/a", "https://example.com/d", "https://elsewhere.com/e"] },
  ];
  let active = 0;
  let peak = 0;
  const calls = [];
  const fetchImpl = async (url, options) => {
    active += 1;
    peak = Math.max(peak, active);
    calls.push({ url, method: options.method, redirect: options.redirect, signal: options.signal });
    await new Promise((done) => setTimeout(done, 1));
    active -= 1;
    if (url.endsWith("/a")) return new Response(null, { status: 404 });
    if (url.endsWith("/b") && options.method === "HEAD") return new Response(null, { status: 405 });
    if (url.endsWith("/c")) return new Response(null, { status: 302 });
    return new Response(null, { status: 200 });
  };
  const full = await checkSitemapUrls(sitemaps, "https://example.com", { fetchImpl, concurrency: 2 });
  assert.equal(full.total, 5);
  assert.equal(full.checked, 5);
  assert.equal(full.coverage, "full");
  assert.equal(full.notFound, 1);
  assert.equal(full.otherErrors, 2);
  assert.equal(peak <= 2, true);
  assert.equal(calls.filter((call) => call.url.endsWith("/a")).length, 1);
  assert.deepEqual(calls.filter((call) => call.url.endsWith("/b")).map((call) => call.method), ["HEAD", "GET"]);
  assert.ok(calls.every((call) => call.redirect === "manual" && call.signal));

  const partial = await checkSitemapUrls(sitemaps, "https://example.com", { fetchImpl, maxUrls: 2 });
  assert.equal(partial.total, 5);
  assert.equal(partial.checked, 2);
  assert.equal(partial.coverage, "partial");
});

test("contained URL network timeout is counted, and both XML endpoints are parsed", async () => {
  const posts = [post("future", "2026-12-01T00:00:00Z")];
  const fetchImpl = async (url, options) => {
    if (url.endsWith("sitemap.xml") || url.endsWith("sitemap-naver.xml")) {
      return new Response(`<urlset><url><loc>https://example.com/post</loc></url></urlset>`, { status: 200 });
    }
    assert.equal(options.method, "HEAD");
    throw new DOMException("timeout", "TimeoutError");
  };
  const report = await auditEditorialOperations({
    posts, now, checkUrls: true, baseUrl: "https://example.com", fetchImpl,
  });
  assert.equal(report.status, "alert");
  assert.deepEqual(report.sitemaps.map((item) => item.totalUrls), [1, 1]);
  assert.equal(report.urls.total, 1);
  assert.equal(report.urls.checked, 1);
  assert.equal(report.urls.notFound, 0);
  assert.equal(report.urls.otherErrors, 1);
  assert.match(report.urls.failures[0].error, /TimeoutError/);
});

test("intentional search exclusions are not missing publications", () => {
  const result = assessPublicationSync([
    post("tennis-mental-focus-recovery", "2026-01-01T00:00:00Z"),
    post("indexable-missing", "2026-01-01T00:00:00Z"),
  ], now, [{ urls: [] }], "https://example.com");
  assert.deepEqual(result.missingPublishedSlugs, ["indexable-missing"]);
});
