#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const REPORT_DATE = new Date().toISOString().slice(0, 10);
const REPORT_DIR = join(ROOT, "docs", "reports");

const POST_FILES = [
  "src/data/blog-posts.js",
  "src/data/blog-posts-aw-300.js",
  "src/data/blog-posts-aw-part12.js",
  "src/data/blog-posts-aw-title100.js",
  "src/data/blog-posts-part16-overrides.js",
  "src/data/blog-posts-part17-overrides.js",
  "src/data/blog-posts-part18-overrides.js",
  "src/data/blog-posts-part19-overrides.js",
  "src/data/blog-posts-part20-overrides.js",
  "src/data/blog-posts-part21-overrides.js",
  "src/data/blog-posts-part22-overrides.js",
  "src/data/blog-posts-part23-overrides.js",
  "src/data/blog-posts-part24-overrides.js",
  "src/data/blog-posts-part25-overrides.js",
  "src/data/blog-posts-part26-overrides.js",
];

const CONTENT_FILES = [
  "part1",
  "part2",
  "part3",
  "part4-new30",
  "part5-scheduled",
  "part6-generated",
  "part7-generated",
  "part8-bulk-01",
  "part8-bulk-02",
  "part8-bulk-03",
  "part8-bulk-04",
  "part9-scheduled-100",
  "part10-scheduled-300",
  "part11-article-writer-300",
  "part12-article-writer-300",
  "part13-optimized",
  "part14-title100",
  "part16-quality-rewrites",
  "part17-quality-rewrites",
  "part18-quality-rewrites",
  "part19-quality-rewrites",
  "part20-quality-rewrites",
  "part21-quality-rewrites",
  "part22-quality-rewrites",
  "part23-quality-rewrites",
  "part24-quality-rewrites",
  "part25-quality-rewrites",
  "part26-quality-rewrites",
].map((name) => `src/data/blog-content/${name}.ts`);

const MIN_BODY_INTERNAL_LINKS = 2;
const MIN_BODY_EXTERNAL_LINKS = 1;

function readProjectFile(relativePath) {
  const filePath = join(ROOT, relativePath);
  if (!existsSync(filePath)) return "";
  return readFileSync(filePath, "utf8");
}

function decodeString(value) {
  return value
    .replace(/\\"/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    );
}

function readStringField(segment, field) {
  const match = new RegExp(`"${field}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`, "s").exec(
    segment,
  );
  return match ? decodeString(match[1]) : "";
}

function extractObjectSegments(text) {
  const segments = [];
  const slugRe = /"slug"\s*:\s*"([^"]+)"/g;
  let match;

  while ((match = slugRe.exec(text)) !== null) {
    const start = text.lastIndexOf("{", match.index);
    const next = text.indexOf("\n  {", match.index + 1);
    const end = next > -1 ? next : text.indexOf("\n]", match.index);
    if (start > -1 && end > -1) {
      segments.push(text.slice(start, end));
    }
  }

  return segments;
}

function collectEffectivePosts() {
  const posts = new Map();

  for (const file of POST_FILES) {
    const text = readProjectFile(file);
    for (const segment of extractObjectSegments(text)) {
      const slug = readStringField(segment, "slug");
      if (!slug) continue;

      posts.set(slug, {
        slug,
        title: readStringField(segment, "title"),
        category: readStringField(segment, "category"),
      });
    }
  }

  return [...posts.values()];
}

const TOPIC_PROFILES = [
  {
    id: "serve",
    patterns: [/serve/, /return/, /toss/, /kick/, /slice-serve/],
    insertion: "serve/return decision paragraph",
    utilityLinks: [
      ["/utility/serve-placement-mapper", "serve placement map"],
      ["/utility/return-position-calculator", "return position check"],
      ["/utility/match-analyzer", "match pattern review"],
    ],
  },
  {
    id: "doubles",
    patterns: [/doubles/, /partner/, /poach/, /formation/, /mixed/],
    insertion: "partner communication or court-position paragraph",
    utilityLinks: [
      ["/utility/doubles-positioning-simulator", "doubles positioning"],
      ["/utility/doubles-chemistry-test", "partner rhythm check"],
      ["/utility/partner-compatibility-check", "partner fit review"],
    ],
  },
  {
    id: "equipment",
    patterns: [/string/, /racket/, /grip/, /shoe/, /overgrip/, /dampener/, /equipment/],
    insertion: "equipment selection or maintenance paragraph",
    utilityLinks: [
      ["/utility/equipment-recommendation", "equipment recommendation"],
      ["/utility/string-tension", "string tension check"],
      ["/utility/equipment-maintenance-scheduler", "maintenance schedule"],
    ],
  },
  {
    id: "injury",
    patterns: [/injury/, /elbow/, /wrist/, /shoulder/, /ankle/, /recovery/, /cooldown/, /warmup/, /hydration/, /sleep/, /nutrition/],
    insertion: "risk signal, recovery, or safety disclaimer paragraph",
    utilityLinks: [
      ["/utility/injury-risk", "injury risk check"],
      ["/utility/recovery-routine-generator", "recovery routine"],
      ["/utility/warmup-routine-builder", "warmup routine"],
    ],
  },
  {
    id: "court",
    patterns: [/(^|-)court($|-)/, /clay/, /grass/, /hard-court/, /weather/, /windy/, /rainy/, /night/, /indoor/, /surface/],
    insertion: "court condition or pre-match adjustment paragraph",
    utilityLinks: [
      ["/utility/court-conditions", "court condition checklist"],
      ["/utility/weather-check", "weather check"],
      ["/utility/court-surface-advisor", "surface adjustment"],
    ],
  },
  {
    id: "practice",
    patterns: [/practice/, /training/, /drill/, /wall/, /routine/, /journal/, /beginner/, /lesson/, /coach/],
    insertion: "practice routine or weekly planning paragraph",
    utilityLinks: [
      ["/utility/training-planner", "training planner"],
      ["/utility/practice-drill-generator", "drill generator"],
      ["/utility/match-recorder", "match recorder"],
    ],
  },
  {
    id: "mental",
    patterns: [/mental/, /pressure/, /focus/, /nerves/, /tiebreak/, /slump/, /confidence/],
    insertion: "pressure reset or between-points routine paragraph",
    utilityLinks: [
      ["/utility/mental-training", "mental routine"],
      ["/utility/tiebreak-pressure-simulator", "pressure simulator"],
      ["/utility/focus-training", "focus training"],
    ],
  },
  {
    id: "strategy",
    patterns: [/strategy/, /match/, /error/, /baseline/, /lob/, /volley/, /topspin/, /slice/, /forehand/, /backhand/, /drop-shot/, /winner/],
    insertion: "shot-selection, error pattern, or point review paragraph",
    utilityLinks: [
      ["/utility/shot-selection-trainer", "shot selection"],
      ["/utility/unforced-error-audit", "error audit"],
      ["/utility/rally-consistency-tracker", "rally consistency"],
    ],
  },
];

function topicProfile(slug) {
  return (
    TOPIC_PROFILES.find((profile) =>
      profile.patterns.some((pattern) => pattern.test(slug)),
    ) ?? TOPIC_PROFILES.find((profile) => profile.id === "practice")
  );
}

function relatedBlogLinks(slug, posts, limit = 3) {
  const tokens = new Set(slug.split("-").filter((token) => token.length >= 4));
  return posts
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      slug: post.slug,
      score: post.slug
        .split("-")
        .filter((token) => tokens.has(token))
        .length,
    }))
    .filter((post) => post.score > 0)
    .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
    .slice(0, limit)
    .map((post) => `/blog/${post.slug}`);
}

function rewriteBrief(post, posts) {
  const profile = topicProfile(post.slug);
  const neededInternalLinks = Math.max(
    0,
    MIN_BODY_INTERNAL_LINKS - post.internalLinks,
  );

  return {
    topic: profile.id,
    neededInternalLinks,
    insertionTarget: profile.insertion,
    utilityCandidates: profile.utilityLinks.slice(0, Math.max(2, neededInternalLinks)),
    relatedBlogCandidates: relatedBlogLinks(post.slug, posts),
    rewriteGuard:
      "Add links only inside a paragraph that already discusses the same decision point; avoid repeating the same anchor sentence across posts.",
  };
}

function countMatches(text, pattern) {
  return (text.match(pattern) ?? []).length;
}

function collectContentSignals() {
  const signals = new Map();

  for (const file of CONTENT_FILES) {
    const text = readProjectFile(file);
    const keyRe = /["']([a-z][a-z0-9-]{4,})["']\s*:\s*\{/g;
    const keys = [];
    let match;

    while ((match = keyRe.exec(text)) !== null) {
      if (match[1].includes("-")) {
        keys.push({ slug: match[1], index: match.index });
      }
    }

    keys.forEach(({ slug, index }, itemIndex) => {
      const nextIndex = keys[itemIndex + 1]?.index ?? text.length;
      const segment = text.slice(index, nextIndex);
      const internalLinks = countMatches(
        segment,
        /href=(?:\\?["'])\/(?!\/|#)(?:[^\\"']+)/g,
      );
      const externalLinks = countMatches(
        segment,
        /href=(?:\\?["'])https?:\/\//g,
      );

      signals.set(slug, {
        file,
        internalLinks,
        externalLinks,
        utilityLinks: countMatches(segment, /href=(?:\\?["'])\/utility\//g),
        blogLinks: countMatches(segment, /href=(?:\\?["'])\/blog\//g),
        playerLinks: countMatches(segment, /href=(?:\\?["'])\/players/g),
        sourceLinks: countMatches(segment, /target=(?:\\?["'])_blank(?:\\?["'])/g),
      });
    });
  }

  return signals;
}

function renderMarkdown({ summary, warnings }) {
  const lines = [
    `# Content Link Coverage Audit | ${REPORT_DATE}`,
    "",
    "## Summary",
    "",
    `- Effective posts: ${summary.effectivePosts}`,
    `- Posts with body content: ${summary.postsWithBodyContent}`,
    `- Body internal links below ${MIN_BODY_INTERNAL_LINKS}: ${summary.lowInternalBodyLinks}`,
    `- Body external links below ${MIN_BODY_EXTERNAL_LINKS}: ${summary.lowExternalBodyLinks}`,
    `- Strong body link coverage: ${summary.strongBodyLinkCoveragePct}%`,
    "",
    "## Operating Note",
    "",
    "This is a report-only audit. The rendered article page already adds related article and utility modules; this audit isolates links embedded inside each article body so future rewrites can improve them without bulk-templating old posts.",
    "",
    "## Priority Targets",
    "",
    "| slug | topic | body internal | recommended insertion | first utility | title |",
    "|---|---|---:|---|---|---|",
  ];

  for (const item of warnings.slice(0, 80)) {
    const brief = rewriteBrief(item, rows);
    lines.push(
      `| \`${item.slug}\` | ${brief.topic} | ${item.internalLinks} | ${brief.insertionTarget} | ${brief.utilityCandidates[0][0]} | ${item.title.replaceAll("|", " ")} |`,
    );
  }

  lines.push("");
  return lines.join("\n");
}

mkdirSync(REPORT_DIR, { recursive: true });

const posts = collectEffectivePosts();
const signals = collectContentSignals();
const rows = posts
  .map((post) => ({ ...post, ...(signals.get(post.slug) ?? {}) }))
  .filter((post) => post.file);
const warnings = rows
  .filter(
    (post) =>
      post.internalLinks < MIN_BODY_INTERNAL_LINKS ||
      post.externalLinks < MIN_BODY_EXTERNAL_LINKS,
  )
  .sort((a, b) => {
    const aScore = a.internalLinks + a.externalLinks;
    const bScore = b.internalLinks + b.externalLinks;
    return aScore - bScore || a.slug.localeCompare(b.slug);
  });
const strongRows = rows.filter(
  (post) =>
    post.internalLinks >= MIN_BODY_INTERNAL_LINKS &&
    post.externalLinks >= MIN_BODY_EXTERNAL_LINKS,
);

const summary = {
  status: warnings.length > 0 ? "warning" : "ok",
  effectivePosts: posts.length,
  postsWithBodyContent: rows.length,
  lowInternalBodyLinks: rows.filter(
    (post) => post.internalLinks < MIN_BODY_INTERNAL_LINKS,
  ).length,
  lowExternalBodyLinks: rows.filter(
    (post) => post.externalLinks < MIN_BODY_EXTERNAL_LINKS,
  ).length,
  strongBodyLinkCoveragePct: Number(
    ((strongRows.length / Math.max(rows.length, 1)) * 100).toFixed(1),
  ),
};

const jsonReport = {
  ...summary,
  thresholds: {
    minBodyInternalLinks: MIN_BODY_INTERNAL_LINKS,
    minBodyExternalLinks: MIN_BODY_EXTERNAL_LINKS,
  },
  note:
    "Report-only body link audit. Do not bulk-insert repeated links; use the priority list for human-like rewrites.",
  warnings: warnings.slice(0, 200).map((post) => ({
    ...post,
    rewriteBrief: rewriteBrief(post, posts),
  })),
};
const markdown = renderMarkdown({ summary, warnings });

writeFileSync(
  join(REPORT_DIR, "content-link-coverage-audit-latest.json"),
  `${JSON.stringify(jsonReport, null, 2)}\n`,
  "utf8",
);
writeFileSync(
  join(REPORT_DIR, `content-link-coverage-audit-${REPORT_DATE}.md`),
  markdown,
  "utf8",
);
writeFileSync(
  join(REPORT_DIR, "content-link-coverage-audit-latest.md"),
  markdown,
  "utf8",
);

console.log(
  JSON.stringify(
    {
      ...summary,
      report: "docs/reports/content-link-coverage-audit-latest.json",
    },
    null,
    2,
  ),
);
