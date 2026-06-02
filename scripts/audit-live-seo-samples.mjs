const DEFAULT_BASE_URL = "https://www.tennisfrens.com";
const NON_WWW_BASE_URL = `https://${"tennisfrens.com"}`;

const args = process.argv.slice(2);
const baseUrl = (
  readArg("--base-url") ||
  process.env.PUBLIC_AUDIT_BASE_URL ||
  DEFAULT_BASE_URL
).replace(/\/$/, "");
const canonicalBaseUrl = (
  readArg("--canonical-base-url") ||
  process.env.PUBLIC_CANONICAL_BASE_URL ||
  DEFAULT_BASE_URL
).replace(/\/$/, "");

const samples = [
  {
    path: "/",
    canonical: canonicalBaseUrl,
    requiredSchemaTypes: ["Organization", "WebSite", "FAQPage"],
  },
  {
    path: "/blog/tennis-hybrid-string-setup",
    canonical: `${canonicalBaseUrl}/blog/tennis-hybrid-string-setup`,
    requiredSchemaTypes: ["BlogPosting", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/blog/tf-title100-stroke-tactics-005",
    canonical: `${canonicalBaseUrl}/blog/tf-title100-stroke-tactics-005`,
    requiredSchemaTypes: ["BlogPosting", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/players/arthur-rinderknech",
    canonical: `${canonicalBaseUrl}/players/arthur-rinderknech`,
    requiredSchemaTypes: ["Person", "BreadcrumbList", "FAQPage"],
  },
  {
    path: "/utility/ntrp-test",
    canonical: `${canonicalBaseUrl}/utility/ntrp-test`,
    requiredSchemaTypes: ["BreadcrumbList"],
  },
  {
    path: "/utility/string-tension",
    canonical: `${canonicalBaseUrl}/utility/string-tension`,
    requiredSchemaTypes: ["BreadcrumbList"],
  },
  {
    path: "/tennis-rules-quiz",
    canonical: `${canonicalBaseUrl}/tennis-rules-quiz`,
    requiredSchemaTypes: ["Quiz", "BreadcrumbList", "FAQPage"],
  },
];

const findings = [];
const results = [];

function readArg(flag) {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function getAttrs(tag) {
  const attrs = {};
  for (const match of tag.matchAll(/\s([a-zA-Z_:.-]+)\s*=\s*("([^"]*)"|'([^']*)')/g)) {
    attrs[match[1].toLowerCase()] = match[3] ?? match[4] ?? "";
  }
  return attrs;
}

function getTitle(html) {
  return html.match(/<title>(.*?)<\/title>/is)?.[1]?.trim() || "";
}

function getCanonical(html) {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const attrs = getAttrs(match[0]);
    if (attrs.rel === "canonical") return attrs.href || "";
  }
  return "";
}

function getMeta(html, key, value) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = getAttrs(match[0]);
    if (attrs[key] === value) return attrs.content || "";
  }
  return "";
}

function getJsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis)].map(
    (match) => match[1].trim(),
  );
}

function collectSchemaTypes(value, types = []) {
  if (!value || typeof value !== "object") return types;

  if (Array.isArray(value)) {
    for (const item of value) collectSchemaTypes(item, types);
    return types;
  }

  const type = value["@type"];
  if (Array.isArray(type)) types.push(...type);
  else if (type) types.push(type);

  if (Array.isArray(value["@graph"])) {
    for (const graphItem of value["@graph"]) collectSchemaTypes(graphItem, types);
  }

  return types;
}

function parseSchemaTypes(blocks, path) {
  const schemaTypes = [];

  for (const block of blocks) {
    try {
      collectSchemaTypes(JSON.parse(block), schemaTypes);
    } catch (error) {
      findings.push({
        path,
        issue: "invalid JSON-LD",
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  return schemaTypes;
}

function hasH1(html) {
  return /<h1\b[^>]*>[\s\S]*?<\/h1>/i.test(html);
}

for (const sample of samples) {
  const url = `${baseUrl}${sample.path}`;
  const response = await fetch(url, { redirect: "manual" });
  const html = await response.text();
  const title = getTitle(html);
  const canonical = getCanonical(html);
  const ogTitle = getMeta(html, "property", "og:title");
  const ogUrl = getMeta(html, "property", "og:url");
  const ogDescription = getMeta(html, "property", "og:description");
  const description = getMeta(html, "name", "description");
  const twitterCard = getMeta(html, "name", "twitter:card");
  const schemaBlocks = getJsonLdBlocks(html);
  const schemaTypes = parseSchemaTypes(schemaBlocks, sample.path);

  assert(response.status === 200, {
    path: sample.path,
    issue: "unexpected status",
    status: response.status,
    location: response.headers.get("location"),
  });

  assert(title.length >= 10 && title.length <= 80, {
    path: sample.path,
    issue: "title length outside SEO guardrail",
    title,
    length: title.length,
  });

  assert(canonical === sample.canonical, {
    path: sample.path,
    issue: "canonical mismatch",
    expected: sample.canonical,
    actual: canonical,
  });

  assert(ogTitle.length > 0, { path: sample.path, issue: "og:title missing" });
  assert(ogUrl === sample.canonical, {
    path: sample.path,
    issue: "og:url mismatch",
    expected: sample.canonical,
    actual: ogUrl,
  });
  assert(description.length >= 60, {
    path: sample.path,
    issue: "meta description too short or missing",
    length: description.length,
  });
  assert(ogDescription.length >= 60, {
    path: sample.path,
    issue: "og:description too short or missing",
    length: ogDescription.length,
  });
  assert(twitterCard === "summary_large_image", {
    path: sample.path,
    issue: "twitter card mismatch",
    actual: twitterCard,
  });
  assert(hasH1(html), { path: sample.path, issue: "h1 missing" });
  assert(schemaBlocks.length >= 2, {
    path: sample.path,
    issue: "JSON-LD block count too low",
    count: schemaBlocks.length,
  });

  for (const requiredType of sample.requiredSchemaTypes) {
    assert(schemaTypes.includes(requiredType), {
      path: sample.path,
      issue: "required schema type missing",
      requiredType,
      schemaTypes,
    });
  }

  assert(!html.includes(NON_WWW_BASE_URL), {
    path: sample.path,
    issue: "non-www absolute URL found",
  });
  assert(!/\uFFFD/.test(html), { path: sample.path, issue: "replacement character found" });
  assert(!/\?\?\?/.test(html), { path: sample.path, issue: "triple question mark mojibake marker found" });

  results.push({
    path: sample.path,
    status: response.status,
    titleLength: title.length,
    canonical,
    schemaBlocks: schemaBlocks.length,
    schemaTypes: [...new Set(schemaTypes)],
    bytes: Buffer.byteLength(html),
  });
}

if (findings.length > 0) {
  console.error(JSON.stringify({ baseUrl, canonicalBaseUrl, findings, results }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    baseUrl,
    canonicalBaseUrl,
    samples: results.length,
    results,
  }),
);
