#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const REPORT_DATE = new Date().toISOString().slice(0, 10);
const CANONICAL_ORIGIN = "https://www.tennisfrens.com";
const MIN_IMPRESSIONS = 20;
const MAX_ITEMS = 25;

function readProjectFile(relativePath) {
  const filePath = path.join(ROOT, relativePath);
  return fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf8") : "";
}

function latestCsv(prefix) {
  const files = fs
    .readdirSync(REPORTS_DIR)
    .filter((name) => name.startsWith(prefix) && name.endsWith(".csv"))
    .sort();
  return files.at(-1);
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && quoted && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      quoted = !quoted;
      continue;
    }

    if (char === "," && !quoted) {
      cells.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  cells.push(current);
  return cells;
}

function parseCsv(text) {
  const [headerLine, ...lines] = text.trim().split(/\r?\n/);
  const headers = parseCsvLine(headerLine);

  return lines
    .filter(Boolean)
    .map((line) => {
      const values = parseCsvLine(line);
      return Object.fromEntries(headers.map((header, index) => [header, values[index]]));
    });
}

function canonicalizePage(page) {
  try {
    const url = new URL(page);
    url.protocol = "https:";
    url.host = "www.tennisfrens.com";
    if (url.pathname === "/players/arthur-landercknech") {
      url.pathname = "/players/arthur-rinderknech";
    }
    return `${CANONICAL_ORIGIN}${url.pathname}`;
  } catch {
    return page;
  }
}

function slugFromPath(page) {
  try {
    return new URL(page).pathname.split("/").filter(Boolean).at(-1) ?? "";
  } catch {
    return page.split("/").filter(Boolean).at(-1) ?? "";
  }
}

function pathType(page) {
  try {
    const pathname = new URL(page).pathname;
    if (pathname.startsWith("/blog/")) return "blog";
    if (pathname.startsWith("/players/")) return "player";
    if (pathname.startsWith("/utility/")) return "utility";
    return "site";
  } catch {
    return "site";
  }
}

function decodeJsString(value) {
  return value
    .replace(/\\"/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    );
}

function collectBlogTitles() {
  const text = readProjectFile("src/data/blog-posts.js");
  const titles = new Map();
  const segmentPattern = /{\s*id:\s*"([^"]+)"[\s\S]*?title:\s*"((?:\\.|[^"\\])*)"/g;
  let match;

  while ((match = segmentPattern.exec(text)) !== null) {
    const segment = text.slice(match.index, text.indexOf("\n  },", match.index));
    const slugMatch = /slug:\s*"([^"]+)"/.exec(segment);
    const slug = slugMatch?.[1] ?? match[1];
    titles.set(slug, decodeJsString(match[2]));
  }

  return titles;
}

function collectPlayerTitles() {
  const titles = new Map();
  for (const file of ["src/data/players/male.ts", "src/data/players/female.ts", "src/data/players/new-30.ts", "src/data/players/scheduled-20.ts"]) {
    const text = readProjectFile(file);
    const keyedPattern = /^\s*["']([^"']+)["']\s*:\s*{\s*\r?\n\s*name:\s*["']([^"']+)["']/gm;
    let match;
    while ((match = keyedPattern.exec(text)) !== null) {
      titles.set(match[1], decodeJsString(match[2]));
    }

    const seedPattern = /{\s*slug:\s*["']([^"']+)["'][\s\S]*?\r?\n\s*name:\s*["']([^"']+)["']/g;
    while ((match = seedPattern.exec(text)) !== null) {
      titles.set(match[1], decodeJsString(match[2]));
    }
  }
  return titles;
}

function titleizeSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]|[\u4E00-\u9FFF]{2,}/.test(
    value,
  );
}

function safeTitle(title, slug) {
  if (!title || hasMojibake(title)) return titleizeSlug(slug);
  return title;
}

function expectedCtr(position) {
  if (position <= 3) return 10;
  if (position <= 5) return 6;
  if (position <= 10) return 3;
  if (position <= 20) return 1.5;
  return 1;
}

function opportunityReason(item) {
  if (item.ctr === 0) return "high impressions with zero CTR";
  if (item.position <= 10 && item.ctr < 2) return "page-one visibility with low CTR";
  if (item.position <= 20 && item.impressions >= 50) return "near page-one opportunity";
  return "watch for query expansion";
}

function recommendedAction(type) {
  if (type === "blog") {
    return "Prepare a non-template title/subtitle, first-answer, FAQ, and internal-link rewrite brief.";
  }
  if (type === "player") {
    return "Improve profile title framing, Korean name clarity, schema-visible summary, and related player/article paths.";
  }
  if (type === "utility") {
    return "Tighten above-the-fold task copy, result CTA, FAQ answer, and related article links.";
  }
  return "Review title, meta description, primary heading, and related navigation intent.";
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const pagesCsv = latestCsv("gsc-pages-");
if (!pagesCsv) {
  console.error("No gsc-pages CSV found.");
  process.exit(1);
}

const pageRows = parseCsv(fs.readFileSync(path.join(REPORTS_DIR, pagesCsv), "utf8"));
const blogTitles = collectBlogTitles();
const playerTitles = collectPlayerTitles();

const opportunities = pageRows
  .map((row) => {
    const page = canonicalizePage(row.page);
    const slug = slugFromPath(page);
    const type = pathType(page);
    const clicks = Number(row.clicks);
    const impressions = Number(row.impressions);
    const ctr = Number(row.ctr);
    const position = Number(row.position);
    const rawTitle =
      type === "blog"
        ? blogTitles.get(slug)
        : type === "player"
          ? playerTitles.get(slug)
          : titleizeSlug(slug);
    const ctrGap = Math.max(0, expectedCtr(position) - ctr);
    const score = impressions * ctrGap * (position <= 20 ? 1 : 0.25);

    return {
      page,
      type,
      slug,
      title: safeTitle(rawTitle, slug),
      clicks,
      impressions,
      ctr,
      position,
      expectedCtr: expectedCtr(position),
      score: Number(score.toFixed(2)),
      reason: opportunityReason({ ctr, position, impressions }),
      tier: type === "blog" ? "T3" : "T2/T3",
      action: recommendedAction(type),
    };
  })
  .filter((item) => item.impressions >= MIN_IMPRESSIONS && item.position <= 25)
  .sort((a, b) => b.score - a.score)
  .slice(0, MAX_ITEMS);

const findings = [];
const badTitles = opportunities.filter((item) => hasMojibake(item.title));
if (badTitles.length > 0) {
  findings.push({
    issue: "mojibake_opportunity_titles",
    count: badTitles.length,
    examples: badTitles.slice(0, 5).map((item) => ({
      slug: item.slug,
      title: item.title,
    })),
  });
}

const playerOpportunities = opportunities.filter((item) => item.type === "player");
const blogOpportunities = opportunities.filter((item) => item.type === "blog");

const audit = {
  status: findings.length === 0 ? "ok" : "needs_attention",
  generatedAt: new Date().toISOString(),
  source: `docs/reports/${pagesCsv}`,
  criteria: {
    minImpressions: MIN_IMPRESSIONS,
    maxItems: MAX_ITEMS,
    note: "Report-only. Article titles and bodies are not edited by this audit.",
  },
  summary: {
    total: opportunities.length,
    players: playerOpportunities.length,
    blogs: blogOpportunities.length,
    topPlayerSlugs: playerOpportunities.slice(0, 10).map((item) => item.slug),
    topBlogSlugs: blogOpportunities.slice(0, 10).map((item) => item.slug),
  },
  findings,
  opportunities,
};

function renderMarkdown() {
  const rows = opportunities
    .map(
      (item, index) =>
        `| ${index + 1} | ${item.tier} | ${item.type} | ${item.title} | ${item.impressions} | ${item.ctr.toFixed(2)} | ${item.position.toFixed(2)} | ${item.reason} | ${item.action} |`,
    )
    .join("\n");

  return `# Content Opportunity Briefs | ${REPORT_DATE}

Source: \`docs/reports/${pagesCsv}\`

Summary: ${opportunities.length} opportunities, ${playerOpportunities.length} player pages, ${blogOpportunities.length} blog pages

This is a handoff report. It does not edit article titles, bodies, headings, or in-body internal links.

| # | Tier | Type | Page title | Impressions | CTR % | Position | Reason | Recommended action |
|---|---|---|---:|---:|---:|---:|---|---|
${rows}
`;
}

const json = JSON.stringify(audit, null, 2);
const markdown = renderMarkdown();
for (const suffix of ["latest", REPORT_DATE]) {
  fs.writeFileSync(
    path.join(REPORTS_DIR, `content-opportunities-${suffix}.json`),
    json,
    "utf8",
  );
  fs.writeFileSync(
    path.join(REPORTS_DIR, `content-opportunities-${suffix}.md`),
    markdown,
    "utf8",
  );
}

console.log(
  JSON.stringify({
    status: audit.status,
    source: audit.source,
    opportunities: opportunities.length,
  }),
);
