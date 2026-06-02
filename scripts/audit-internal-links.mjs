import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const INTERNAL_LINKING_FILE = "src/lib/internal-linking.ts";
const BLOG_PAGE_FILE = "src/app/blog/[slug]/page.tsx";
const RELATED_UTILITIES_FILE = "src/components/RelatedUtilitiesSection.tsx";
const RELATED_CONTENT_FILE = "src/components/RelatedContent.tsx";
const UTILITY_DIR = path.join(ROOT, "src", "app", "utility");
const MIN_CORE_UTILITY_LINKS = 10;

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]/.test(value);
}

function extractArrayBody(source, constName) {
  const marker = `const ${constName}`;
  const start = source.indexOf(marker);
  if (start < 0) return "";

  const assignment = source.indexOf("=", start);
  if (assignment < 0) return "";

  const arrayStart = source.indexOf("[", assignment);
  if (arrayStart < 0) return "";

  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "[") depth += 1;
    if (char === "]") depth -= 1;
    if (depth === 0) return source.slice(arrayStart + 1, index);
  }

  return "";
}

function splitObjectBlocks(arrayBody) {
  const blocks = [];
  let blockStart = -1;
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = 0; index < arrayBody.length; index += 1) {
    const char = arrayBody[index];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
      }
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "{") {
      if (depth === 0) blockStart = index;
      depth += 1;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0 && blockStart >= 0) {
        blocks.push(arrayBody.slice(blockStart, index + 1));
        blockStart = -1;
      }
    }
  }

  return blocks;
}

function readStringField(block, field) {
  const match = new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`).exec(block);
  return match?.[1]?.replace(/\\"/g, '"') ?? "";
}

function readNumberField(block, field) {
  const match = new RegExp(`${field}:\\s*([0-9]+)`).exec(block);
  return match ? Number(match[1]) : 0;
}

function readKeywords(block) {
  const match = /keywords:\s*\[([\s\S]*?)\]/.exec(block);
  if (!match) return [];
  return [...match[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((item) =>
    item[1].replace(/\\"/g, '"'),
  );
}

function collectUtilityRoutes() {
  return new Set(
    fs
      .readdirSync(UTILITY_DIR, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name),
  );
}

function collectCandidates(source) {
  return splitObjectBlocks(extractArrayBody(source, "CORE_UTILITY_LINKS")).map(
    (block) => ({
      id: readStringField(block, "id"),
      title: readStringField(block, "title"),
      description: readStringField(block, "description"),
      category: readStringField(block, "category"),
      href: readStringField(block, "href"),
      keywords: readKeywords(block),
      priority: readNumberField(block, "priority"),
    }),
  );
}

function duplicateValues(items, key) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of items) {
    const value = item[key];
    if (!value) continue;
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }

  return [...duplicates].sort();
}

function scoreCandidate(candidate, text) {
  const normalizedText = text.toLowerCase();
  const keywordScore = candidate.keywords.reduce(
    (score, keyword) =>
      score + (normalizedText.includes(keyword.toLowerCase()) ? 1 : 0),
    0,
  );
  return keywordScore * 10 + candidate.priority;
}

function bestCandidateFor(candidates, text) {
  return [...candidates].sort(
    (a, b) => scoreCandidate(b, text) - scoreCandidate(a, text),
  )[0];
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const internalLinking = readProjectFile(INTERNAL_LINKING_FILE);
const blogPage = readProjectFile(BLOG_PAGE_FILE);
const relatedUtilities = readProjectFile(RELATED_UTILITIES_FILE);
const relatedContent = readProjectFile(RELATED_CONTENT_FILE);
const candidates = collectCandidates(internalLinking);
const utilityRoutes = collectUtilityRoutes();

assert(candidates.length >= MIN_CORE_UTILITY_LINKS, {
  scope: "core utility links",
  issue: "too few core utility link candidates",
  expectedAtLeast: MIN_CORE_UTILITY_LINKS,
  actual: candidates.length,
});

for (const key of ["id", "href"]) {
  const duplicates = duplicateValues(candidates, key);
  assert(duplicates.length === 0, {
    scope: "core utility links",
    issue: `duplicate ${key}`,
    values: duplicates,
  });
}

for (const candidate of candidates) {
  assert(candidate.href === `/utility/${candidate.id}`, {
    scope: "core utility links",
    issue: "href does not match utility id",
    id: candidate.id,
    href: candidate.href,
  });
  assert(utilityRoutes.has(candidate.id), {
    scope: "core utility links",
    issue: "candidate route is missing",
    id: candidate.id,
    href: candidate.href,
  });
  assert(candidate.title.length >= 4 && !hasMojibake(candidate.title), {
    scope: "core utility links",
    issue: "candidate title is weak or garbled",
    id: candidate.id,
    title: candidate.title,
  });
  assert(candidate.description.length >= 20 && !hasMojibake(candidate.description), {
    scope: "core utility links",
    issue: "candidate description is weak or garbled",
    id: candidate.id,
  });
  assert(candidate.category.length >= 2 && !hasMojibake(candidate.category), {
    scope: "core utility links",
    issue: "candidate category is weak or garbled",
    id: candidate.id,
  });
  assert(candidate.keywords.length >= 5, {
    scope: "core utility links",
    issue: "candidate needs at least five matching keywords",
    id: candidate.id,
    keywords: candidate.keywords,
  });
  assert(candidate.priority > 0 && candidate.priority <= 100, {
    scope: "core utility links",
    issue: "candidate priority is out of range",
    id: candidate.id,
    priority: candidate.priority,
  });
}

for (const [label, source] of [
  [INTERNAL_LINKING_FILE, internalLinking],
  [RELATED_UTILITIES_FILE, relatedUtilities],
  [RELATED_CONTENT_FILE, relatedContent],
]) {
  assert(!hasMojibake(source), {
    scope: "source text",
    issue: "internal link source contains mojibake marker",
    file: label,
  });
}

assert(blogPage.includes("getRelatedUtilityLinks("), {
  scope: "blog article",
  issue: "blog article page does not call getRelatedUtilityLinks",
});
assert(blogPage.includes("relatedTools.map"), {
  scope: "blog article",
  issue: "blog article page does not render related utility links",
});
assert(relatedUtilities.includes("currentHref: `/utility/${currentUtilityId}`"), {
  scope: "utility pages",
  issue: "related utilities do not exclude current utility",
});
assert(relatedContent.includes("href={item.href}"), {
  scope: "shared related content",
  issue: "related content cards do not use item href",
});

const relevanceChecks = [
  {
    text: "하이브리드 스트링 텐션 라켓 타구감",
    expected: "string-tension",
  },
  {
    text: "팔꿈치 통증 부상 회복 위험 신호",
    expected: "injury-risk",
  },
  {
    text: "복식 파트너 전위 커버 궁합",
    expected: "doubles-chemistry-test",
  },
  {
    text: "멘탈 집중 루틴 긴장 회복",
    expected: "mental-training",
  },
];

for (const check of relevanceChecks) {
  const best = bestCandidateFor(candidates, check.text);
  assert(best?.id === check.expected, {
    scope: "keyword relevance",
    issue: "unexpected top utility recommendation",
    text: check.text,
    expected: check.expected,
    actual: best?.id,
  });
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  coreUtilityLinks: candidates.length,
  utilityRoutes: utilityRoutes.size,
  relevanceChecks: relevanceChecks.length,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "internal-links-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
