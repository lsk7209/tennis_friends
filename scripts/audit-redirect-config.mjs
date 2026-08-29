import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CANONICAL_ORIGIN = "https://tennisfrens.com";
const TYPO_SLUG = "/players/arthur-landercknech";
const CANONICAL_PLAYER_SLUG = "/players/arthur-rinderknech";
const LEGACY_PLAYER_SLUG = "marta-kostyuk-legacy";
const LEGACY_PLAYER_CANONICAL_SLUG = "marta-kostyuk";
const DUPLICATE_PLAYER_SLUG = "hong-seong-chan";
const DUPLICATE_PLAYER_CANONICAL_SLUG = "seongchan-hong";

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
const playerPage = readProjectFile("src/app/players/[slug]/page.tsx");
const playerDirectory = readProjectFile("src/app/players/page.tsx");
const searchClient = readProjectFile("src/app/search/SearchClient.tsx");
const playerLegacyRedirects = JSON.parse(
  readProjectFile("src/data/players/legacy-redirects.json"),
);
const normalizedNextConfig = compact(nextConfig);

assert(nextConfig.includes("async redirects()"), {
  scope: "next.config.ts",
  issue: "Next redirects hook missing",
});
assert(
  normalizedNextConfig.includes('has: [{ type: "host", value: "www.tennisfrens.com" }]') &&
    normalizedNextConfig.includes('destination: "https://tennisfrens.com/:path*"') &&
    normalizedNextConfig.includes("permanent: true"),
  {
    scope: "next.config.ts",
    issue: "www to non-www permanent redirect missing",
  },
);
assert(
  playerLegacyRedirects[LEGACY_PLAYER_SLUG] === LEGACY_PLAYER_CANONICAL_SLUG,
  {
    scope: "player legacy redirects",
    issue: "Marta Kostyuk legacy slug mapping missing",
    expected: LEGACY_PLAYER_CANONICAL_SLUG,
    actual: playerLegacyRedirects[LEGACY_PLAYER_SLUG],
  },
);
assert(
  playerLegacyRedirects[DUPLICATE_PLAYER_SLUG] ===
    DUPLICATE_PLAYER_CANONICAL_SLUG,
  {
    scope: "player legacy redirects",
    issue: "Hong Seong-chan duplicate slug mapping missing",
    expected: DUPLICATE_PLAYER_CANONICAL_SLUG,
    actual: playerLegacyRedirects[DUPLICATE_PLAYER_SLUG],
  },
);
assert(
  playerPage.includes("permanentRedirect") &&
    playerPage.includes("playerLegacyRedirects[") &&
    playerPage.includes("permanentRedirect(`/players/${canonicalSlug}`)"),
  {
    scope: "player page",
    issue: "legacy player slugs are not redirected before rendering",
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
for (const [scope, source] of [
  ["player directory", playerDirectory],
  ["site search", searchClient],
]) {
  assert(
    source.includes("playerLegacyRedirects") &&
      source.includes("!(slug in playerLegacyRedirects)"),
    {
      scope,
      issue: "legacy player aliases remain internally discoverable",
    },
  );
}

if (findings.length > 0) {
  console.error(JSON.stringify({ status: "failed", findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    checked: [
      "next.config.ts",
      "src/app/players/[slug]/page.tsx",
      "src/app/players/page.tsx",
      "src/app/search/SearchClient.tsx",
      "src/data/players/legacy-redirects.json",
    ],
    redirects: {
      canonicalHost: CANONICAL_ORIGIN,
      typoSlug: `${TYPO_SLUG} -> ${CANONICAL_PLAYER_SLUG}`,
      legacyPlayerSlug: `${LEGACY_PLAYER_SLUG} -> ${LEGACY_PLAYER_CANONICAL_SLUG}`,
      duplicatePlayerSlug: `${DUPLICATE_PLAYER_SLUG} -> ${DUPLICATE_PLAYER_CANONICAL_SLUG}`,
    },
    findings,
  }),
);
