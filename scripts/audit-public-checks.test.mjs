import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const origin = "https://tennisfrens.com";
const description = "테니스 실력을 점검하고 연습 계획을 세우는 데 도움이 되는 무료 도구와 자세한 테니스 가이드입니다. 각 결과는 참고 정보로 제공합니다.";
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

async function runAudit(script, { wwwLeak = false, tools = 67, declaredTools = tools, missingOg = false, llmsTools = tools, headingTools = llmsTools, transportUrl = origin } = {}) {
  const output = [];
  const requestedOrigins = [];
  let exitCode = 0;
  const exit = new Error("audit exit");
  const mockFetch = async (url) => {
    requestedOrigins.push(new URL(url).origin);
    const path = new URL(url).pathname;
    let text;
    if (path.includes("sitemap")) {
      text = `<urlset>${["/utility/ntrp-test", "/players/arthur-rinderknech", ...Array(1000).fill("/blog/example")].map((entry) => `<url><loc>${origin}${entry}</loc></url>`).join("")}</urlset>`;
    } else if (path === "/robots.txt") {
      text = `User-Agent: Googlebot\nUser-Agent: GPTBot\nSitemap: ${origin}/sitemap.xml\nSitemap: ${origin}/sitemap-naver.xml`;
    } else if (path === "/rss.xml") {
      text = `<rss><atom:link/>${"<item>example</item>".repeat(20)}</rss>`;
    } else if (path.startsWith("/llms")) {
      text = `${origin}\n무료 도구 ${llmsTools}종\n테니스 도구 (${headingTools}종)\n블로그 1개`;
    } else if (path === "/ai-index.json") {
      const pages = [...Array.from({ length: tools }, () => ({ type: "tool" })), { type: "article" }, { type: "player" }];
      text = JSON.stringify({ url: origin, pages, stats: { totalPages: pages.length, tools: declaredTools, articles: 1, playerProfiles: 1 } });
    } else if (path.endsWith("46d9a30e05e90f665fa353387fa67c4c.txt")) {
      text = "46d9a30e05e90f665fa353387fa67c4c";
    } else if (path === "/.well-known/ai.txt") {
      text = ["User-agent: GPTBot", "User-agent: OAI-SearchBot", "User-agent: cohere-ai", "User-agent: Google-Extended", `Sitemap: ${origin}/sitemap.xml`, `RSS: ${origin}/rss.xml`, `LLMs: ${origin}/llms.txt`, `LLMs-Full: ${origin}/llms-full.txt`, `AI-Index: ${origin}/ai-index.json`].join("\n");
    } else if (path === "/.well-known/security.txt") {
      text = "Contact: mailto:example@example.com";
    } else {
      const canonical = path === "/" ? origin : `${origin}${path}`;
      text = `<title>테니스 도구와 가이드 | TennisFriends</title><h1>테니스 도구</h1><link rel="canonical" href="${canonical}"><meta property="og:title" content="테니스 도구"><meta property="og:url" content="${canonical}">${missingOg ? "" : `<meta property="og:description" content="${description}">`}<meta name="description" content="${description}"><meta name="twitter:card" content="summary_large_image"><script type="application/ld+json">${JSON.stringify({ "@type": ["Organization", "WebSite", "FAQPage", "BlogPosting", "BreadcrumbList", "Person", "Quiz"] })}</script><script type="application/ld+json">{}</script>`;
    }
    if (wwwLeak && (path.includes("sitemap") || path === "/")) text += "https://www.tennisfrens.com/leaked";
    return new Response(text, { status: 200, headers: { "content-type": "text/html" } });
  };
  try {
    await new AsyncFunction("fetch", "process", "console", readFileSync(new URL(`./${script}`, import.meta.url), "utf8"))(
      mockFetch,
      { argv: ["node", script, "--base-url", transportUrl], env: {}, exit(code) { exitCode = code; throw exit; } },
      { log(value) { output.push(value); }, error(value) { output.push(value); } },
    );
  } catch (error) {
    if (error !== exit) throw error;
  }
  return { exitCode, output: output.join("\n"), requestedOrigins };
}

for (const script of ["audit-public-endpoints.mjs", "audit-live-seo-samples.mjs"]) {
  test(`${script}: local transport preserves the public canonical origin`, async () => {
    const result = await runAudit(script, { transportUrl: "http://localhost:3928" });
    assert.equal(result.exitCode, 0, result.output);
    assert(result.requestedOrigins.length > 0);
    assert(result.requestedOrigins.every(value => value === "http://localhost:3928"));
  });
  test(`${script}: canonical non-www fixture passes`, async () => {
    const result = await runAudit(script);
    assert.equal(result.exitCode, 0, result.output);
  });
  test(`${script}: leaked www URL still fails`, async () => {
    const result = await runAudit(script, { wwwLeak: true });
    assert.equal(result.exitCode, 1, result.output);
    assert.match(result.output, /www/);
  });
}

test("endpoint tool counts follow the inventory rather than fixed 64", async () => {
  const result = await runAudit("audit-public-endpoints.mjs", { tools: 68 });
  assert.equal(result.exitCode, 0, result.output);
});
test("endpoint check rejects inventory count mismatches", async () => {
  const result = await runAudit("audit-public-endpoints.mjs", { declaredTools: 68 });
  assert.equal(result.exitCode, 1, result.output);
  assert.match(result.output, /tool count mismatch/);
});
test("endpoint check rejects stale llms tool counts", async () => {
  const result = await runAudit("audit-public-endpoints.mjs", { llmsTools: 64 });
  assert.equal(result.exitCode, 1, result.output);
  assert.match(result.output, /tool count/);
});
test("SEO check rejects missing OpenGraph descriptions", async () => {
  const result = await runAudit("audit-live-seo-samples.mjs", { missingOg: true });
  assert.equal(result.exitCode, 1, result.output);
  assert.match(result.output, /og:description/);
});
test("endpoint check rejects a stale heading even when the intro count matches", async () => {
  const result = await runAudit("audit-public-endpoints.mjs", { headingTools: 64 });
  assert.equal(result.exitCode, 1, result.output);
  assert.match(result.output, /llms tool count/);
});

for (const [folder, envKey, expected] of [
  ["google[verification].html", "GOOGLE_SITE_VERIFICATION", "google-site-verification: test-code.html"],
  ["google[verification]", "GOOGLE_SITE_VERIFICATION", "google-site-verification: test-code.html"],
  ["naver[verification].html", "NAVER_SITE_VERIFICATION", "naver-site-verification: test-code"],
]) {
  test(`${folder} returns configured verification or explicit 404 without params`, async () => {
    const source = readFileSync(new URL(`../src/app/${folder}/route.ts`, import.meta.url), "utf8")
      .replaceAll("export ", "");
    const run = new AsyncFunction("process", `${source}\nreturn GET();`);
    const configured = await run({ env: { [envKey]: "test-code" } });
    assert.equal(configured.status, 200);
    assert.equal(await configured.text(), expected);
    const missing = await run({ env: {} });
    assert.equal(missing.status, 404);
    assert.equal(missing.headers.get("cache-control"), "no-store");
  });
}
