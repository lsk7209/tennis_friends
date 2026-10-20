import { allBlogPosts } from "../src/data/blog-posts.js";
import { unavailableBlogSlugs } from "../src/data/blog-unavailable.js";
import { getBlogPublishDate } from "../src/lib/blog-publish.ts";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DAY_MS = 24 * 60 * 60 * 1000;
const RUNWAY_DAYS = 14;
const DEFAULT_BASE_URL = "https://tennisfrens.com";
const SITEMAP_PATHS = ["/sitemap.xml", "/sitemap-naver.xml"];
const URL_CONCURRENCY = 4;
const unavailable = new Set(unavailableBlogSlugs);

export function assessPublicationQueue(posts, now) {
  if (!(now instanceof Date) || !Number.isFinite(now.getTime())) {
    throw new TypeError("now must be a valid Date");
  }

  const eligible = posts.filter(
    (post) => !unavailable.has(post.slug) &&
      post.publicationState !== "draft" && post.publicationState !== "private",
  );
  const dated = eligible.map((post) => ({
    slug: post.slug,
    date: getBlogPublishDate(post),
  }));
  const invalid = dated.filter((post) => !Number.isFinite(post.date.getTime()));
  const future = dated
    .filter((post) => Number.isFinite(post.date.getTime()) && post.date > now)
    .sort((a, b) => a.date.getTime() - b.date.getTime());
  const last = future.at(-1);
  const runwayDays = last
    ? Number(((last.date.getTime() - now.getTime()) / DAY_MS).toFixed(2))
    : 0;

  return {
    eligiblePosts: eligible.length,
    futurePosts: future.length,
    nextPost: future[0]
      ? { slug: future[0].slug, publishAt: future[0].date.toISOString() }
      : null,
    lastScheduledPost: last
      ? { slug: last.slug, publishAt: last.date.toISOString() }
      : null,
    runwayDays,
    invalidDateSlugs: invalid.map((post) => post.slug),
    alert: invalid.length > 0 || !last || last.date.getTime() - now.getTime() < RUNWAY_DAYS * DAY_MS,
  };
}

export async function checkSitemaps(baseUrl, fetchImpl = fetch) {
  const origin = new URL(baseUrl);
  if (origin.protocol !== "https:" && origin.protocol !== "http:") {
    throw new TypeError("base URL must use HTTP or HTTPS");
  }

  // Two known endpoints, at most two in-flight requests, each with a hard timeout.
  return Promise.all(SITEMAP_PATHS.map(async (path) => {
    const url = new URL(path, origin).href;
    try {
      const response = await fetchImpl(url, {
        method: "GET",
        redirect: "manual",
        signal: AbortSignal.timeout(10_000),
      });
      if (response.status !== 200) {
        await response.body?.cancel();
        return { url, status: response.status, ok: false, urls: [] };
      }
      const xml = await response.text();
      if (!/<urlset\b[^>]*>[\s\S]*<\/urlset>/i.test(xml)) {
        return { url, status: 200, ok: false, urls: [], error: "invalid sitemap URL set" };
      }
      const urls = [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)]
        .map((match) => match[1].replaceAll("&amp;", "&").trim());
      return { url, status: 200, ok: urls.length > 0, urls,
        ...(urls.length ? {} : { error: "sitemap has no URLs" }) };
    } catch (error) {
      return { url, status: null, ok: false, urls: [], error: String(error) };
    }
  }));
}

export async function checkSitemapUrls(sitemaps, baseUrl, {
  fetchImpl = fetch,
  maxUrls = null,
  concurrency = URL_CONCURRENCY,
} = {}) {
  if (!Number.isInteger(concurrency) || concurrency < 1) {
    throw new RangeError("concurrency must be a positive integer");
  }
  if (maxUrls !== null && (!Number.isInteger(maxUrls) || maxUrls < 1)) {
    throw new RangeError("maxUrls must be a positive integer");
  }

  const origin = new URL(baseUrl).origin;
  const urls = [...new Set(sitemaps.flatMap((sitemap) => sitemap.urls))].sort();
  const selected = maxUrls === null ? urls : urls.slice(0, maxUrls);
  const results = new Array(selected.length);
  let cursor = 0;

  async function checkOne(url) {
    let parsed;
    try {
      parsed = new URL(url);
      if (parsed.origin !== origin) throw new Error("URL outside sitemap origin");
    } catch (error) {
      return { url, status: null, ok: false, error: String(error) };
    }

    try {
      let response = await fetchImpl(parsed.href, {
        method: "HEAD", redirect: "manual", signal: AbortSignal.timeout(10_000),
      });
      if (response.status === 405) {
        await response.body?.cancel();
        response = await fetchImpl(parsed.href, {
          method: "GET", redirect: "manual", signal: AbortSignal.timeout(10_000),
        });
      }
      await response.body?.cancel();
      return { url, status: response.status, ok: response.status === 200 };
    } catch (error) {
      return { url, status: null, ok: false, error: String(error) };
    }
  }

  async function worker() {
    while (cursor < selected.length) {
      const index = cursor++;
      results[index] = await checkOne(selected[index]);
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, selected.length) }, worker));
  const failures = results.filter((item) => !item.ok);
  const notFound = failures.filter((item) => item.status === 404).length;
  return {
    total: urls.length,
    checked: results.length,
    coverage: results.length === urls.length ? "full" : "partial",
    notFound,
    otherErrors: failures.length - notFound,
    failures: failures.slice(0, 50),
    omittedFailures: Math.max(0, failures.length - 50),
  };
}

export async function auditEditorialOperations({
  posts = allBlogPosts,
  now = new Date(),
  live = false,
  checkUrls = false,
  maxUrls = null,
  baseUrl = DEFAULT_BASE_URL,
  fetchImpl = fetch,
} = {}) {
  const queue = assessPublicationQueue(posts, now);
  const sitemaps = live || checkUrls ? await checkSitemaps(baseUrl, fetchImpl) : null;
  const urls = checkUrls && sitemaps.every((item) => item.ok)
    ? await checkSitemapUrls(sitemaps, baseUrl, { fetchImpl, maxUrls })
    : null;
  return {
    status: queue.alert || sitemaps?.some((item) => !item.ok) ||
      (urls && urls.notFound + urls.otherErrors > 0) ? "alert" : "ok",
    checkedAt: now.toISOString(),
    thresholdDays: RUNWAY_DAYS,
    queue,
    sitemaps: sitemaps?.map(({ urls: _urls, ...summary }) => ({ ...summary, totalUrls: _urls.length })) ?? null,
    urls,
  };
}

function parseArgs(args) {
  const options = { live: false, checkUrls: false, maxUrls: null, baseUrl: DEFAULT_BASE_URL, now: new Date() };
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--live") options.live = true;
    else if (arg === "--check-urls") options.checkUrls = true;
    else if (arg === "--now" || arg === "--base-url" || arg === "--max-urls") {
      const value = args[++index];
      if (!value || value.startsWith("--")) throw new Error(`${arg} requires a value`);
      if (arg === "--now") {
        if (!/(?:Z|[+-]\d{2}:\d{2})$/.test(value)) {
          throw new Error("--now requires an ISO timestamp with timezone");
        }
        options.now = new Date(value);
        if (!Number.isFinite(options.now.getTime())) throw new Error("--now is invalid");
      } else if (arg === "--max-urls") {
        options.maxUrls = Number(value);
        if (!Number.isInteger(options.maxUrls) || options.maxUrls < 1) {
          throw new Error("--max-urls requires a positive integer");
        }
      } else options.baseUrl = value;
    } else throw new Error(`unknown argument: ${arg}`);
  }
  return options;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const report = await auditEditorialOperations(parseArgs(process.argv.slice(2)));
    console.log(JSON.stringify(report, null, 2));
    if (report.status === "alert") process.exitCode = 1;
  } catch (error) {
    console.error(`Editorial operations audit failed: ${error.message}`);
    process.exitCode = 2;
  }
}
