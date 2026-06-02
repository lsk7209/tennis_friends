import fs from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";

const ROOT = process.cwd();
const require = createRequire(import.meta.url);
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const CANONICAL_HOST = "www.tennisfrens.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;
const INDEXNOW_KEY = "46d9a30e05e90f665fa353387fa67c4c";
const REQUIRED_SITEMAPS = [
  `${CANONICAL_ORIGIN}/sitemap.xml`,
  `${CANONICAL_ORIGIN}/sitemap-naver.xml`,
];
const REQUIRED_INDEXNOW_ENDPOINTS = ["IndexNow", "Bing", "Naver"];

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function readOptionalProjectFile(relativePath) {
  const filePath = path.join(ROOT, relativePath);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function script(packageJson, name) {
  return packageJson.scripts?.[name] || "";
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]/.test(value);
}

function expectThrows(label, fn) {
  try {
    fn();
    findings.push({
      scope: "IndexNow validation",
      issue: "expected validation failure did not occur",
      label,
    });
  } catch {
    // Expected path.
  }
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const packageJson = JSON.parse(readProjectFile("package.json"));
const notifySearchEngines = readProjectFile("scripts/notify-search-engines.js");
const submitGsc = readProjectFile("scripts/submit-gsc-sitemap.js");
const submitIndexNow = readProjectFile("scripts/submit-indexnow.js");
const robots = readProjectFile("src/app/robots.ts");
const sitemap = readProjectFile("src/app/sitemap.ts");
const naverSitemap = readProjectFile("src/app/sitemap-naver.xml/route.ts");
const sitemapEntries = readProjectFile("src/lib/sitemap-entries.ts");
const gscDomain = readOptionalProjectFile(".gsc-domain").trim();
const indexNowKeyFile = readOptionalProjectFile(
  `public/${INDEXNOW_KEY}.txt`,
).trim();
const indexNowModule = require(path.join(ROOT, "scripts", "submit-indexnow.js"));

assert(script(packageJson, "publish:vercel").includes("vercel --prod"), {
  scope: "package scripts",
  issue: "publish:vercel does not deploy production",
});
assert(script(packageJson, "publish:vercel").includes("npm run search:notify"), {
  scope: "package scripts",
  issue: "publish:vercel is not chained to search notification",
});
assert(script(packageJson, "postdeploy").includes("search:notify:postdeploy"), {
  scope: "package scripts",
  issue: "postdeploy does not trigger resilient search notification",
});
assert(script(packageJson, "postcf-deploy").includes("search:notify:postdeploy"), {
  scope: "package scripts",
  issue: "Cloudflare postdeploy does not trigger resilient search notification",
});
assert(script(packageJson, "audit:search-notify").includes("--dry-run"), {
  scope: "package scripts",
  issue: "search notification audit is not dry-run protected",
});
assert(script(packageJson, "audit:ops").includes("audit:search-notify"), {
  scope: "package scripts",
  issue: "ops audit does not verify search notification path",
});

assert(notifySearchEngines.includes("scripts/submit-gsc-sitemap.js"), {
  scope: "search notify",
  issue: "GSC sitemap submitter is not invoked",
});
assert(notifySearchEngines.includes("scripts/submit-indexnow.js"), {
  scope: "search notify",
  issue: "IndexNow submitter is not invoked",
});
assert(notifySearchEngines.includes("--all"), {
  scope: "search notify",
  issue: "IndexNow is not configured to submit sitemap URLs",
});
assert(notifySearchEngines.includes("--no-fail"), {
  scope: "search notify",
  issue: "resilient postdeploy flag is not supported",
});
assert(notifySearchEngines.includes("--dry-run"), {
  scope: "search notify",
  issue: "dry-run flag is not supported",
});

for (const sitemapUrl of REQUIRED_SITEMAPS) {
  assert(submitGsc.includes(sitemapUrl), {
    scope: "GSC submitter",
    issue: "required sitemap URL missing",
    sitemap: sitemapUrl,
  });
}
assert(submitGsc.includes("sc-domain:tennisfrens.com"), {
  scope: "GSC submitter",
  issue: "domain property fallback missing",
});
assert(submitGsc.includes("GOOGLE_APPLICATION_CREDENTIALS"), {
  scope: "GSC submitter",
  issue: "GSC credential environment override missing",
});
assert(submitGsc.includes("DEFAULT_CREDENTIALS_PATH"), {
  scope: "GSC submitter",
  issue: "GSC credential fallback path missing",
});
assert(submitGsc.includes("fallbackSiteUrls"), {
  scope: "GSC submitter",
  issue: "GSC fallback site property handling missing",
});

assert(gscDomain === `${CANONICAL_ORIGIN}/`, {
  scope: "GSC domain",
  issue: "canonical GSC domain file mismatch",
  expected: `${CANONICAL_ORIGIN}/`,
  actual: gscDomain,
});

assert(indexNowKeyFile === INDEXNOW_KEY, {
  scope: "IndexNow key",
  issue: "public IndexNow key file mismatch",
  expected: INDEXNOW_KEY,
  actualLength: indexNowKeyFile.length,
});
assert(submitIndexNow.includes(`'${INDEXNOW_KEY}'`), {
  scope: "IndexNow submitter",
  issue: "IndexNow key fallback missing",
});
assert(submitIndexNow.includes("readHost()"), {
  scope: "IndexNow submitter",
  issue: "IndexNow host is not derived from site domain",
});
for (const endpoint of REQUIRED_INDEXNOW_ENDPOINTS) {
  assert(submitIndexNow.includes(`name: '${endpoint}'`), {
    scope: "IndexNow submitter",
    issue: "required IndexNow-compatible endpoint missing",
    endpoint,
  });
}
assert(submitIndexNow.includes("validateUrls(urls"), {
  scope: "IndexNow submitter",
  issue: "IndexNow sitemap URLs are not validated before submit",
});
assert(submitIndexNow.includes("parsed.hostname !== requireHost"), {
  scope: "IndexNow submitter",
  issue: "IndexNow host mismatch guard missing",
});
assert(submitIndexNow.includes("INDEXNOW_BATCH_SIZE = 10000"), {
  scope: "IndexNow submitter",
  issue: "IndexNow batch-size guard missing",
});
assert(indexNowModule.HOST === CANONICAL_HOST, {
  scope: "IndexNow module",
  issue: "IndexNow exported host mismatch",
  expected: CANONICAL_HOST,
  actual: indexNowModule.HOST,
});
assert(indexNowModule.KEY_LOCATION === `${CANONICAL_ORIGIN}/${INDEXNOW_KEY}.txt`, {
  scope: "IndexNow module",
  issue: "IndexNow key location mismatch",
  expected: `${CANONICAL_ORIGIN}/${INDEXNOW_KEY}.txt`,
  actual: indexNowModule.KEY_LOCATION,
});
assert(indexNowModule.SITEMAP_URL === `${CANONICAL_ORIGIN}/sitemap.xml`, {
  scope: "IndexNow module",
  issue: "IndexNow sitemap URL mismatch",
  expected: `${CANONICAL_ORIGIN}/sitemap.xml`,
  actual: indexNowModule.SITEMAP_URL,
});
assert(indexNowModule.INDEXNOW_BATCH_SIZE === 10000, {
  scope: "IndexNow module",
  issue: "IndexNow batch size mismatch",
  actual: indexNowModule.INDEXNOW_BATCH_SIZE,
});
assert(
  Array.isArray(indexNowModule.INDEXNOW_ENDPOINTS) &&
    REQUIRED_INDEXNOW_ENDPOINTS.every((endpoint) =>
      indexNowModule.INDEXNOW_ENDPOINTS.some((item) => item.name === endpoint),
    ),
  {
    scope: "IndexNow module",
    issue: "IndexNow exported endpoint set mismatch",
  },
);

const sampleUrls = indexNowModule.validateUrls(
  [
    `${CANONICAL_ORIGIN}/`,
    `${CANONICAL_ORIGIN}/blog/tennis-hybrid-string-setup`,
    `${CANONICAL_ORIGIN}/players/arthur-rinderknech`,
  ],
  { requireHost: CANONICAL_HOST },
);
assert(sampleUrls.length === 3, {
  scope: "IndexNow validation",
  issue: "valid sample URLs were not preserved",
  actual: sampleUrls.length,
});
expectThrows("duplicate URLs", () =>
  indexNowModule.validateUrls(
    [`${CANONICAL_ORIGIN}/`, `${CANONICAL_ORIGIN}/`],
    { requireHost: CANONICAL_HOST },
  ),
);
expectThrows("host mismatch", () =>
  indexNowModule.validateUrls(
    [`https://${"tennisfrens.com"}/blog/tennis-hybrid-string-setup`],
    { requireHost: CANONICAL_HOST },
  ),
);
expectThrows("trailing slash", () =>
  indexNowModule.validateUrls(
    [`${CANONICAL_ORIGIN}/blog/tennis-hybrid-string-setup/`],
    { requireHost: CANONICAL_HOST },
  ),
);
expectThrows("fragment", () =>
  indexNowModule.validateUrls(
    [`${CANONICAL_ORIGIN}/blog/tennis-hybrid-string-setup#comments`],
    { requireHost: CANONICAL_HOST },
  ),
);

const payloadWithKeyLocation = JSON.parse(indexNowModule.createPayload(sampleUrls, true));
const payloadWithoutKeyLocation = JSON.parse(indexNowModule.createPayload(sampleUrls, false));
assert(payloadWithKeyLocation.host === CANONICAL_HOST, {
  scope: "IndexNow payload",
  issue: "payload host mismatch",
  actual: payloadWithKeyLocation.host,
});
assert(payloadWithKeyLocation.key === INDEXNOW_KEY, {
  scope: "IndexNow payload",
  issue: "payload key mismatch",
  actual: payloadWithKeyLocation.key,
});
assert(payloadWithKeyLocation.keyLocation === `${CANONICAL_ORIGIN}/${INDEXNOW_KEY}.txt`, {
  scope: "IndexNow payload",
  issue: "payload keyLocation missing",
  actual: payloadWithKeyLocation.keyLocation,
});
assert(!Object.hasOwn(payloadWithoutKeyLocation, "keyLocation"), {
  scope: "IndexNow payload",
  issue: "Naver payload should omit keyLocation",
});

assert(robots.includes("sitemap.xml") && robots.includes("sitemap-naver.xml"), {
  scope: "robots",
  issue: "robots does not advertise both sitemaps",
});
assert(sitemap.includes("getSitemapEntries()"), {
  scope: "sitemap",
  issue: "metadata sitemap does not use shared sitemap entries",
});
assert(
  naverSitemap.includes("toXmlSitemap(getSitemapEntries(") ||
    naverSitemap.includes("toXmlSitemap(getSitemapEntries())"),
  {
    scope: "sitemap-naver",
    issue: "Naver sitemap does not use shared sitemap entries",
  },
);
assert(sitemapEntries.includes("getPublishedBlogPosts(allBlogPosts)"), {
  scope: "sitemap entries",
  issue: "sitemap does not use published blog filter",
});
assert(sitemapEntries.includes("isIndexableBlogSlug(post.slug)"), {
  scope: "sitemap entries",
  issue: "sitemap does not filter non-indexable blog slugs",
});
assert(sitemapEntries.includes("getBlogPublishDate(post)"), {
  scope: "sitemap entries",
  issue: "sitemap lastmod is not tied to blog publish schedule",
});

for (const [file, source] of [
  ["scripts/notify-search-engines.js", notifySearchEngines],
  ["scripts/submit-gsc-sitemap.js", submitGsc],
  ["scripts/submit-indexnow.js", submitIndexNow],
]) {
  assert(!hasMojibake(source), {
    scope: "source text",
    issue: "search automation source contains mojibake marker",
    file,
  });
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  canonicalOrigin: CANONICAL_ORIGIN,
  requiredSitemaps: REQUIRED_SITEMAPS,
  indexNowEndpoints: REQUIRED_INDEXNOW_ENDPOINTS,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "search-automation-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
