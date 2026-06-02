const DEFAULT_BASE_URL = "https://www.tennisfrens.com";
const NON_WWW_BASE_URL = `https://${"tennisfrens.com"}`;
const INDEXNOW_KEY = "46d9a30e05e90f665fa353387fa67c4c";
const ADSENSE_LINE =
  "google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0";

const args = process.argv.slice(2);
const baseUrl = (
  readArg("--base-url") ||
  process.env.PUBLIC_AUDIT_BASE_URL ||
  DEFAULT_BASE_URL
).replace(/\/$/, "");

const endpoints = [
  { path: "/", type: "html" },
  { path: "/robots.txt", type: "robots" },
  { path: "/sitemap.xml", type: "sitemap" },
  { path: "/sitemap-naver.xml", type: "sitemap" },
  { path: "/rss.xml", type: "rss" },
  { path: "/ads.txt", type: "ads" },
  { path: "/llms.txt", type: "llms" },
  { path: "/llms-full.txt", type: "llms-full" },
  { path: "/ai-index.json", type: "ai-index" },
  { path: `/${INDEXNOW_KEY}.txt`, type: "indexnow-key" },
  { path: "/.well-known/ai.txt", type: "well-known-ai" },
  { path: "/.well-known/security.txt", type: "security" },
];

function readArg(flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function count(text, pattern) {
  return (text.match(pattern) || []).length;
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

async function fetchEndpoint(path) {
  const url = `${baseUrl}${path}`;
  const response = await fetch(url, { redirect: "manual" });
  const contentType = response.headers.get("content-type") || "";
  const text = await response.text();

  return {
    path,
    url,
    status: response.status,
    contentType,
    text,
    bytes: Buffer.byteLength(text),
    location: response.headers.get("location"),
  };
}

function validateHtml(endpoint) {
  assert(endpoint.text.includes("<title>"), {
    path: endpoint.path,
    issue: "home title missing",
  });
  assert(endpoint.text.includes('rel="canonical"'), {
    path: endpoint.path,
    issue: "home canonical missing",
  });
}

function validateRobots(endpoint) {
  assert(endpoint.text.includes(`${baseUrl}/sitemap.xml`), {
    path: endpoint.path,
    issue: "robots sitemap.xml missing",
  });
  assert(endpoint.text.includes(`${baseUrl}/sitemap-naver.xml`), {
    path: endpoint.path,
    issue: "robots sitemap-naver.xml missing",
  });
  assert(endpoint.text.includes("User-Agent: Googlebot"), {
    path: endpoint.path,
    issue: "Googlebot rule missing",
  });
  assert(endpoint.text.includes("User-Agent: GPTBot"), {
    path: endpoint.path,
    issue: "AI crawler rule missing",
  });
}

function validateSitemap(endpoint) {
  const locCount = count(endpoint.text, /<loc>/g);
  assert(locCount >= 1000, {
    path: endpoint.path,
    issue: "sitemap loc count too low",
    locCount,
  });
  assert(!endpoint.text.includes(NON_WWW_BASE_URL), {
    path: endpoint.path,
    issue: "sitemap contains non-www URL",
  });
  assert(endpoint.text.includes(`${baseUrl}/utility/ntrp-test`), {
    path: endpoint.path,
    issue: "sitemap missing NTRP utility",
  });
  assert(endpoint.text.includes(`${baseUrl}/players/arthur-rinderknech`), {
    path: endpoint.path,
    issue: "sitemap missing corrected Arthur Rinderknech URL",
  });
}

function validateRss(endpoint) {
  const itemCount = count(endpoint.text, /<item>/g);
  assert(itemCount >= 20, {
    path: endpoint.path,
    issue: "RSS item count too low",
    itemCount,
  });
  assert(endpoint.text.includes("<atom:link"), {
    path: endpoint.path,
    issue: "RSS self atom link missing",
  });
}

function validateAds(endpoint) {
  assert(endpoint.text.trim() === ADSENSE_LINE, {
    path: endpoint.path,
    issue: "ads.txt line mismatch",
    actual: endpoint.text.trim(),
  });
}

function validateLlms(endpoint) {
  assert(endpoint.text.includes(baseUrl), {
    path: endpoint.path,
    issue: "llms canonical base missing",
  });
  assert(endpoint.text.includes("도구 64") || endpoint.text.includes("도구 (64"), {
    path: endpoint.path,
    issue: "llms tool count missing",
  });
  assert(endpoint.text.includes("블로그 205") || endpoint.text.includes("블로그 (205"), {
    path: endpoint.path,
    issue: "llms article count missing",
  });
}

function validateAiTxt(endpoint) {
  for (const required of [
    "User-agent: GPTBot",
    "User-agent: OAI-SearchBot",
    "User-agent: Google-Extended",
    `Sitemap: ${baseUrl}/sitemap.xml`,
    `RSS: ${baseUrl}/rss.xml`,
    `LLMs: ${baseUrl}/llms.txt`,
    `LLMs-Full: ${baseUrl}/llms-full.txt`,
    `AI-Index: ${baseUrl}/ai-index.json`,
  ]) {
    assert(endpoint.text.includes(required), {
      path: endpoint.path,
      issue: "ai.txt required directive missing",
      required,
    });
  }
}

function validateAiIndex(endpoint) {
  let parsed;
  try {
    parsed = JSON.parse(endpoint.text);
  } catch {
    findings.push({ path: endpoint.path, issue: "ai-index invalid JSON" });
    return;
  }

  assert(parsed.url === baseUrl, {
    path: endpoint.path,
    issue: "ai-index base URL mismatch",
    actual: parsed.url,
  });
  assert(parsed.stats?.totalPages === parsed.pages?.length, {
    path: endpoint.path,
    issue: "ai-index totalPages mismatch",
    totalPages: parsed.stats?.totalPages,
    pageLength: parsed.pages?.length,
  });
  assert(parsed.stats?.tools === 64, {
    path: endpoint.path,
    issue: "ai-index tool count mismatch",
    actual: parsed.stats?.tools,
  });
  assert(parsed.stats?.articles === 205, {
    path: endpoint.path,
    issue: "ai-index article count mismatch",
    actual: parsed.stats?.articles,
  });
  assert(parsed.stats?.playerProfiles === 269, {
    path: endpoint.path,
    issue: "ai-index player count mismatch",
    actual: parsed.stats?.playerProfiles,
  });
}

function validateIndexNowKey(endpoint) {
  assert(endpoint.text.trim() === INDEXNOW_KEY, {
    path: endpoint.path,
    issue: "IndexNow key file mismatch",
  });
}

function validateSecurity(endpoint) {
  assert(endpoint.text.includes("Contact:"), {
    path: endpoint.path,
    issue: "security.txt contact missing",
  });
}

const findings = [];
const results = [];

for (const endpoint of endpoints) {
  const result = await fetchEndpoint(endpoint.path);
  results.push({
    path: endpoint.path,
    status: result.status,
    contentType: result.contentType,
    bytes: result.bytes,
  });

  assert(result.status === 200, {
    path: endpoint.path,
    issue: "unexpected status",
    status: result.status,
    location: result.location,
  });

  if (result.status !== 200) continue;

  switch (endpoint.type) {
    case "html":
      validateHtml(result);
      break;
    case "robots":
      validateRobots(result);
      break;
    case "sitemap":
      validateSitemap(result);
      break;
    case "rss":
      validateRss(result);
      break;
    case "ads":
      validateAds(result);
      break;
    case "llms":
    case "llms-full":
      validateLlms(result);
      break;
    case "well-known-ai":
      validateAiTxt(result);
      break;
    case "ai-index":
      validateAiIndex(result);
      break;
    case "indexnow-key":
      validateIndexNowKey(result);
      break;
    case "security":
      validateSecurity(result);
      break;
  }
}

if (findings.length > 0) {
  console.error(JSON.stringify({ baseUrl, findings, results }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    baseUrl,
    endpoints: results.length,
    sitemapLocs: results
      .filter((result) => result.path.includes("sitemap"))
      .map((result) => result.path),
    results,
  }),
);
