import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const SITE_PERSONA = "persona.yml";
const WRITER_PERSONA = "site-config/tennisfriends-persona.yaml";
const REQUIRED_AUDIENCE_COUNT = 4;
const REQUIRED_TONE_COUNT = 3;
const REQUIRED_FORBIDDEN_COUNT = 6;
const REQUIRED_SOURCES = [
  "International Tennis Federation",
  "United States Tennis Association",
  "ATP Tour",
  "WTA Tennis",
  "대한테니스협회",
];
const TOPIC_TERMS = ["테니스", "동호인", "입문자", "기술", "전술", "장비", "훈련"];

const findings = [];

function readProjectFile(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]|[\u4E00-\u9FFF]/.test(
    value,
  );
}

function lineValue(source, key) {
  const match = new RegExp(`^\\s*${key}:\\s*\"?([^\"\\n]+)\"?`, "m").exec(
    source,
  );
  return match?.[1]?.trim() ?? "";
}

function section(source, key) {
  const match = new RegExp(
    `^${key}:\\s*\\n([\\s\\S]*?)(?=^[a-zA-Z0-9_-]+:|(?![\\s\\S]))`,
    "m",
  ).exec(source);
  return match?.[1] ?? "";
}

function nestedSection(source, key) {
  const match = new RegExp(
    `^\\s{2}${key}:\\s*\\n([\\s\\S]*?)(?=^\\s{2}[a-zA-Z0-9_-]+:|^[a-zA-Z0-9_-]+:|(?![\\s\\S]))`,
    "m",
  ).exec(source);
  return match?.[1] ?? "";
}

function listItemCount(source) {
  return (source.match(/^\s*-\s+/gm) || []).length;
}

function indentedListCount(source, key) {
  const match = new RegExp(
    `^\\s*${key}:\\s*\\n([\\s\\S]*?)(?=^\\s*[a-zA-Z0-9_-]+:|^\\s{0,2}[a-zA-Z0-9_-]+:|(?![\\s\\S]))`,
    "m",
  ).exec(source);
  return listItemCount(match?.[1] ?? "");
}

function containsAll(source, terms) {
  return terms.every((term) => source.includes(term));
}

function containsAny(source, terms) {
  return terms.some((term) => source.includes(term));
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const sitePersona = readProjectFile(SITE_PERSONA);
const writerPersona = readProjectFile(WRITER_PERSONA);

const siteSection = section(sitePersona, "site");
const personaSection = section(sitePersona, "persona");
const contentRules = section(sitePersona, "content_rules");
const seoFocus = section(sitePersona, "seo_focus");
const researchBasis = section(sitePersona, "research_basis");
const internalLinkPolicy = section(sitePersona, "internal_link_policy");
const writerAuthority = nestedSection(writerPersona, "authority_basis");
const writerSignature = nestedSection(writerPersona, "signature");
const writerOutput = section(writerPersona, "output_preferences");

assert(!hasMojibake(sitePersona), {
  scope: "site persona",
  issue: "site persona contains mojibake marker",
});
assert(!hasMojibake(writerPersona), {
  scope: "writer persona",
  issue: "writer persona contains mojibake marker",
});

assert(lineValue(siteSection, "name") === "TennisFriends", {
  scope: "site persona",
  issue: "site name mismatch",
  actual: lineValue(siteSection, "name"),
});
assert(lineValue(siteSection, "domain") === "https://www.tennisfrens.com", {
  scope: "site persona",
  issue: "site domain mismatch",
  actual: lineValue(siteSection, "domain"),
});
assert(lineValue(siteSection, "language") === "ko", {
  scope: "site persona",
  issue: "site language is not Korean",
});
assert(containsAll(lineValue(siteSection, "primary_topic"), TOPIC_TERMS), {
  scope: "site persona",
  issue: "primary topic does not cover required tennis content lanes",
  requiredTerms: TOPIC_TERMS,
});
assert(listItemCount(nestedSection(sitePersona, "audience")) >= REQUIRED_AUDIENCE_COUNT, {
  scope: "site persona",
  issue: "audience is not specific enough",
  expectedAtLeast: REQUIRED_AUDIENCE_COUNT,
});
assert(lineValue(siteSection, "purpose").includes("공식 자료"), {
  scope: "site persona",
  issue: "site purpose does not prioritize official sources",
});

assert(lineValue(personaSection, "identity").includes("편집팀"), {
  scope: "editorial persona",
  issue: "persona identity is missing editorial team framing",
});
assert(lineValue(personaSection, "role").includes("출처 기반"), {
  scope: "editorial persona",
  issue: "persona role is not source-based",
});
assert(listItemCount(nestedSection(sitePersona, "tone")) >= REQUIRED_TONE_COUNT, {
  scope: "editorial persona",
  issue: "tone constraints are too thin",
  expectedAtLeast: REQUIRED_TONE_COUNT,
});
assert(listItemCount(nestedSection(sitePersona, "forbidden")) >= REQUIRED_FORBIDDEN_COUNT, {
  scope: "editorial persona",
  issue: "forbidden phrase list is too thin",
  expectedAtLeast: REQUIRED_FORBIDDEN_COUNT,
});

assert(lineValue(contentRules, "min_body_chars") === "3500", {
  scope: "content rules",
  issue: "minimum body length does not match quality target",
});
assert(lineValue(contentRules, "faq_count") === "3", {
  scope: "content rules",
  issue: "FAQ count target missing",
});
assert(contentRules.includes("internal_link_count: \"2~4\""), {
  scope: "content rules",
  issue: "internal link target missing",
});
assert(contentRules.includes("external_link_count: \"1~3\""), {
  scope: "content rules",
  issue: "external source target missing",
});
assert(contentRules.includes("inline_citations_min: 2"), {
  scope: "content rules",
  issue: "citation minimum missing",
});
assert(containsAny(contentRules, ["의료", "통증", "부상"]), {
  scope: "content rules",
  issue: "health-risk disclaimer policy missing",
});

assert(seoFocus.includes("gsc_basis") && seoFocus.includes("ga4_basis"), {
  scope: "analytics basis",
  issue: "GSC/GA4 basis missing from persona",
});
assert(seoFocus.includes("dominant_device: \"mobile\""), {
  scope: "analytics basis",
  issue: "mobile-first GA4 finding missing",
});
assert(seoFocus.includes("www canonical"), {
  scope: "analytics basis",
  issue: "canonical consistency priority missing",
});
assert(researchBasis.includes("GSC/GA4 최신 로컬 리포트"), {
  scope: "research basis",
  issue: "persona is not tied to local GSC/GA4 reports",
});
assert(internalLinkPolicy.includes("2~4"), {
  scope: "internal link policy",
  issue: "internal link count policy missing",
});

assert(lineValue(section(writerPersona, "site"), "domain") === "https://www.tennisfrens.com", {
  scope: "writer persona",
  issue: "writer persona domain mismatch",
});
assert(lineValue(section(writerPersona, "site"), "ymyl_category") === "sports_information", {
  scope: "writer persona",
  issue: "writer persona YMYL category mismatch",
});
for (const sourceName of REQUIRED_SOURCES) {
  assert(writerAuthority.includes(sourceName), {
    scope: "writer authority",
    issue: "required authority source missing",
    source: sourceName,
  });
}
assert(writerAuthority.includes("credential_disclaimer"), {
  scope: "writer authority",
  issue: "credential disclaimer missing",
});
assert(writerAuthority.includes("의료 전문가"), {
  scope: "writer authority",
  issue: "medical expert disclaimer missing",
});
assert(writerAuthority.includes("ai_disclosure") && writerAuthority.includes("enabled: true"), {
  scope: "writer authority",
  issue: "AI disclosure policy missing",
});
assert(listItemCount(nestedSection(writerPersona, "forbidden_claims")) >= REQUIRED_FORBIDDEN_COUNT, {
  scope: "writer safety",
  issue: "forbidden claims list is too thin",
  expectedAtLeast: REQUIRED_FORBIDDEN_COUNT,
});
assert(indentedListCount(writerSignature, "avoid") >= REQUIRED_FORBIDDEN_COUNT, {
  scope: "writer signature",
  issue: "avoid phrase list is too thin",
  expectedAtLeast: REQUIRED_FORBIDDEN_COUNT,
});
assert(writerOutput.includes("word_count_range: [3500, 6000]"), {
  scope: "writer output",
  issue: "writer word count range missing",
});
assert(writerOutput.includes("include_faq: true"), {
  scope: "writer output",
  issue: "writer FAQ requirement missing",
});
assert(writerOutput.includes("internal_link_count: [2, 4]"), {
  scope: "writer output",
  issue: "writer internal link count missing",
});
assert(writerOutput.includes("external_link_count: [1, 3]"), {
  scope: "writer output",
  issue: "writer external link count missing",
});

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  sitePersona: SITE_PERSONA,
  writerPersona: WRITER_PERSONA,
  requiredAuthoritySources: REQUIRED_SOURCES.length,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "persona-profile-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
