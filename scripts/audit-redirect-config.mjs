import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CANONICAL_ORIGIN = "https://www.tennisfrens.com";
const NON_WWW_ORIGIN = `https://${"tennisfrens.com"}`;
const TYPO_SLUG = "/players/arthur-landercknech";
const CANONICAL_PLAYER_SLUG = "/players/arthur-rinderknech";

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function compact(text) {
  return text.replace(/\s+/g, " ");
}

const nextConfig = readProjectFile("next.config.ts");
const redirectsFile = readProjectFile("public/_redirects");
const normalizedNextConfig = compact(nextConfig);
const redirectLines = redirectsFile
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"));

assert(nextConfig.includes("async redirects()"), {
  scope: "next.config.ts",
  issue: "Next redirects hook missing",
});
assert(
  normalizedNextConfig.includes('has: [{ type: "host", value: "tennisfrens.com" }]') &&
    normalizedNextConfig.includes('destination: "https://www.tennisfrens.com/:path*"') &&
    normalizedNextConfig.includes("permanent: true"),
  {
    scope: "next.config.ts",
    issue: "non-www to www permanent redirect missing",
  },
);
assert(
  normalizedNextConfig.includes(`source: "${TYPO_SLUG}"`) &&
    normalizedNextConfig.includes(`destination: "${CANONICAL_PLAYER_SLUG}"`) &&
    normalizedNextConfig.includes("permanent: true"),
  {
    scope: "next.config.ts",
    issue: "Arthur Rinderknech typo slug permanent redirect missing",
  },
);

assert(
  redirectLines.includes(`${TYPO_SLUG} ${CANONICAL_PLAYER_SLUG} 301`),
  {
    scope: "public/_redirects",
    issue: "Cloudflare typo slug redirect missing",
    expected: `${TYPO_SLUG} ${CANONICAL_PLAYER_SLUG} 301`,
  },
);
assert(
  redirectLines.includes(`${NON_WWW_ORIGIN}/* ${CANONICAL_ORIGIN}/:splat 301`),
  {
    scope: "public/_redirects",
    issue: "Cloudflare non-www canonical redirect missing",
    expected: `${NON_WWW_ORIGIN}/* ${CANONICAL_ORIGIN}/:splat 301`,
  },
);

const nonWwwLineIndex = redirectLines.indexOf(
  `${NON_WWW_ORIGIN}/* ${CANONICAL_ORIGIN}/:splat 301`,
);
const typoLineIndex = redirectLines.indexOf(`${TYPO_SLUG} ${CANONICAL_PLAYER_SLUG} 301`);
assert(typoLineIndex >= 0 && nonWwwLineIndex >= 0 && typoLineIndex < nonWwwLineIndex, {
  scope: "public/_redirects",
  issue: "specific typo redirect should be evaluated before host wildcard redirect",
  order: redirectLines,
});

if (findings.length > 0) {
  console.error(JSON.stringify({ status: "failed", findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    checked: ["next.config.ts", "public/_redirects"],
    redirects: {
      canonicalHost: CANONICAL_ORIGIN,
      typoSlug: `${TYPO_SLUG} -> ${CANONICAL_PLAYER_SLUG}`,
    },
    findings,
  }),
);
