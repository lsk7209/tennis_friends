import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const DEFAULT_BASE_URL = "https://www.tennisfrens.com";
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
const sourceOnly = hasArg("--source-only");

const quizFiles = [
  "src/app/tennis-rules-quiz/layout.tsx",
  "src/app/tennis-rules-quiz/page.tsx",
  "src/app/tennis-rules-quiz/quiz/page.tsx",
  "src/app/tennis-rules-quiz/result/page.tsx",
  "src/lib/tennisQuiz.ts",
  "src/components/seo/QuizSchema.tsx",
];

const requiredCategories = [
  "Serve",
  "Return",
  "Scoring",
  "Tiebreak",
  "Let/Net",
  "Footfault",
  "Doubles",
  "Hindrance",
  "BallInPlay",
];

const findings = [];
const results = [];

function readArg(flag) {
  const args = process.argv.slice(2);
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function hasArg(flag) {
  return process.argv.slice(2).includes(flag);
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function readFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]|[\u4E00-\u9FFF]{2,}/.test(
    String(value || ""),
  );
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

function getMeta(html, key, value) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = getAttrs(match[0]);
    if (attrs[key] === value) return attrs.content || "";
  }
  return "";
}

function getCanonical(html) {
  for (const match of html.matchAll(/<link\b[^>]*>/gi)) {
    const attrs = getAttrs(match[0]);
    if (attrs.rel === "canonical") return attrs.href || "";
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
    value.forEach((item) => collectSchemaTypes(item, types));
    return types;
  }

  const type = value["@type"];
  if (Array.isArray(type)) types.push(...type);
  else if (type) types.push(type);

  if (Array.isArray(value["@graph"])) {
    value["@graph"].forEach((item) => collectSchemaTypes(item, types));
  }

  return types;
}

function parseSchemaTypes(blocks, pathname) {
  const schemaTypes = [];
  for (const block of blocks) {
    try {
      collectSchemaTypes(JSON.parse(block), schemaTypes);
    } catch (error) {
      findings.push({
        path: pathname,
        issue: "invalid JSON-LD",
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }
  return [...new Set(schemaTypes)];
}

async function fetchPage(pathname) {
  const url = `${baseUrl}${pathname}`;
  const response = await fetch(url, { redirect: "manual" });
  const html = await response.text();
  assert(response.status === 200, {
    path: pathname,
    issue: "unexpected status",
    status: response.status,
    location: response.headers.get("location"),
  });
  return {
    path: pathname,
    url,
    status: response.status,
    title: getTitle(html),
    canonical: getCanonical(html),
    description: getMeta(html, "name", "description"),
    html,
    bytes: Buffer.byteLength(html),
  };
}

function validateSource() {
  const fileContents = new Map(
    quizFiles.map((relativePath) => [relativePath, readFile(relativePath)]),
  );
  const combined = [...fileContents.values()].join("\n");
  const quizData = fileContents.get("src/lib/tennisQuiz.ts") || "";
  const intro = fileContents.get("src/app/tennis-rules-quiz/page.tsx") || "";
  const quiz = fileContents.get("src/app/tennis-rules-quiz/quiz/page.tsx") || "";
  const result = fileContents.get("src/app/tennis-rules-quiz/result/page.tsx") || "";

  for (const [relativePath, content] of fileContents) {
    assert(!hasMojibake(content), {
      file: relativePath,
      issue: "source contains mojibake marker",
    });
  }

  const questionIds = [...quizData.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);
  assert(questionIds.length >= 24, {
    scope: "source",
    issue: "question count too low",
    count: questionIds.length,
  });
  assert(new Set(questionIds).size === questionIds.length, {
    scope: "source",
    issue: "duplicate question IDs",
  });

  for (const category of requiredCategories) {
    assert(quizData.includes(`cat: "${category}"`), {
      scope: "source",
      issue: "question category missing",
      category,
    });
  }

  for (const phrase of [
    "테니스 규칙 퀴즈",
    "퀴즈 시작",
    "실전 규칙 판단 테스트",
    "테니스 규칙 점수",
    "오답 해설",
    "규칙 퀴즈 결과로 다음 점검 이어가기",
  ]) {
    assert(combined.includes(phrase), {
      scope: "source",
      issue: "required Korean UX phrase missing",
      phrase,
    });
  }

  for (const href of [
    "/tennis-rules-quiz/quiz",
    "/utility/ntrp-test",
    "/utility/string-tension",
    "/utility/injury-risk",
    "/utility/play-style-test",
    "/blog",
  ]) {
    assert(combined.includes(href), {
      scope: "source",
      issue: "required internal link missing",
      href,
    });
  }

  assert(intro.includes("<QuizSchema") && intro.includes("<FAQSection"), {
    scope: "source",
    issue: "quiz intro schema or FAQ missing",
  });
  assert(quiz.includes("pickQuestions(QUESTION_BANK)") && quiz.includes("gradeQuiz"), {
    scope: "source",
    issue: "quiz flow helpers missing",
  });
  assert(result.includes("trackTestCompletionOnce") && result.includes("<UtilityResultLinks"), {
    scope: "source",
    issue: "result tracking or internal links missing",
  });

  results.push({
    scope: "source",
    files: quizFiles.length,
    questions: questionIds.length,
    categories: requiredCategories.length,
  });
}

async function validateLive() {
  const intro = await fetchPage("/tennis-rules-quiz");
  const quiz = await fetchPage("/tennis-rules-quiz/quiz");
  const result = await fetchPage(
    "/tennis-rules-quiz/result?score=8&grade=Match+Ready&timeSpent=120&wrongByCat=%7B%22Serve%22%3A1%7D&answers=%5B%5D&questions=%5B%5D",
  );

  assert(intro.title.includes("테니스 규칙") || intro.title.includes("Tennis"), {
    path: intro.path,
    issue: "intro title missing quiz signal",
    title: intro.title,
  });
  assert(intro.description.length >= 60, {
    path: intro.path,
    issue: "intro meta description too short",
    length: intro.description.length,
  });
  assert(intro.canonical === `${canonicalBaseUrl}/tennis-rules-quiz`, {
    path: intro.path,
    issue: "intro canonical mismatch",
    expected: `${canonicalBaseUrl}/tennis-rules-quiz`,
    actual: intro.canonical,
  });

  const introSchemaTypes = parseSchemaTypes(getJsonLdBlocks(intro.html), intro.path);
  for (const requiredType of ["Quiz", "BreadcrumbList", "FAQPage"]) {
    assert(introSchemaTypes.includes(requiredType), {
      path: intro.path,
      issue: "required schema type missing",
      requiredType,
      schemaTypes: introSchemaTypes,
    });
  }

  for (const page of [intro, quiz, result]) {
    assert(!hasMojibake(page.html), {
      path: page.path,
      issue: "mojibake marker found in live HTML",
    });
  }

  assert(quiz.html.includes("실전 규칙 판단 테스트"), {
    path: quiz.path,
    issue: "quiz page main heading missing",
  });
  results.push(
    {
      scope: "live",
      path: intro.path,
      status: intro.status,
      bytes: intro.bytes,
      schemaTypes: introSchemaTypes,
    },
    {
      scope: "live",
      path: quiz.path,
      status: quiz.status,
      bytes: quiz.bytes,
    },
    {
      scope: "live",
      path: result.path,
      status: result.status,
      bytes: result.bytes,
    },
  );
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });
validateSource();
if (!sourceOnly) {
  await validateLive();
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  mode: sourceOnly ? "source" : "live",
  generatedAt: new Date().toISOString(),
  baseUrl,
  canonicalBaseUrl,
  findings,
  results,
};

fs.writeFileSync(
  path.join(
    REPORTS_DIR,
    sourceOnly
      ? "quiz-experience-source-audit-latest.json"
      : "quiz-experience-audit-latest.json",
  ),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
