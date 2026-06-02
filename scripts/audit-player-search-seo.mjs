#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const FILES = [
  "src/lib/player-search-seo.ts",
  "src/app/players/[slug]/page.tsx",
  "src/templates/players/PlayerPageTemplate.tsx",
  "src/components/players/PlayerSearchAliasSection.tsx",
];
const GSC_TARGET_SLUGS = [
  "martin-landaluce",
  "miomir-kecmanovic",
  "marie-bouzkova",
  "arthur-rinderknech",
  "daniel-evans",
  "alexandre-muller",
  "jiri-lehecka",
  "laslo-djere",
  "hamad-medjedovic",
  "francisco-comesana",
  "tallon-griekspoor",
  "ethan-quinn",
  "polina-kudermetova",
  "yannick-hanfmann",
  "tomas-machac",
  "dino-prizmic",
  "camilo-ugo-carabelli",
  "linda-noskova",
  "alejandro-davidovich-fokina",
  "jakub-mensik",
  "karen-khachanov",
  "luciano-darderi",
];

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]|[\u4E00-\u9FFF]{2,}/.test(
    value,
  );
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const seo = readProjectFile("src/lib/player-search-seo.ts");
const playerPage = readProjectFile("src/app/players/[slug]/page.tsx");
const template = readProjectFile("src/templates/players/PlayerPageTemplate.tsx");
const aliasSection = readProjectFile(
  "src/components/players/PlayerSearchAliasSection.tsx",
);

for (const file of FILES) {
  assert(!hasMojibake(readProjectFile(file)), {
    scope: "player seo",
    file,
    issue: "player SEO/display source contains mojibake marker",
  });
}

assert(
  seo.includes("buildPlayerSeoTitle") &&
    seo.includes("buildPlayerSeoDescription") &&
    seo.includes("프로필 |") &&
    seo.includes("랭킹") &&
    seo.includes("플레이스타일"),
  {
    scope: "player metadata",
    issue: "clean Korean player metadata builders missing",
  },
);

for (const slug of GSC_TARGET_SLUGS) {
  assert(seo.includes(`"${slug}"`), {
    scope: "player ctr targets",
    slug,
    issue: "GSC low-CTR player slug is missing a search SEO override",
  });
}

assert(
  seo.includes("PLAYER_SEARCH_SEO") &&
    seo.includes("aliases") &&
    seo.includes("focus"),
  {
    scope: "player ctr targets",
    issue: "player search SEO override map is missing",
  },
);

assert(
  playerPage.includes("buildPlayerSeoTitle(player, tour)") &&
    playerPage.includes("buildPlayerSeoDescription(player, tour)") &&
    playerPage.includes("buildPlayerSeoKeywords(slug, player, tour"),
  {
    scope: "player metadata",
    issue: "player route is not using the clean SEO builders",
  },
);

assert(
  template.includes("Player profile") &&
    template.includes("playerFacts") &&
    template.includes("player.nameEn"),
  {
    scope: "player above fold",
    issue: "player page lacks visible name/identity summary for search intent",
  },
);

assert(
  aliasSection.includes("검색어 기준 핵심 정보") &&
    aliasSection.includes("랭킹, 전적, 플레이스타일"),
  {
    scope: "player alias section",
    issue: "player search alias section does not expose query intent clearly",
  },
);

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  checkedFiles: FILES,
  gscTargetSlugs: GSC_TARGET_SLUGS,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "player-search-seo-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
