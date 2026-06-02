import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const EXPECTED_INTERVAL_HOURS = 5;
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

const findings = [];
const rawPosts = [];
const fileSummaries = [];
const overrideFiles = POST_FILES.filter((file) =>
  /blog-posts-part\d+-overrides\.js$/.test(file),
);
const baseFiles = POST_FILES.filter((file) => !overrideFiles.includes(file));

function readStringField(segment, field) {
  const match = new RegExp(
    `"${field}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`,
    "s",
  ).exec(segment);

  if (!match) return "";
  return match[1]
    .replace(/\\"/g, '"')
    .replace(/\\n/g, " ")
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, code) =>
      String.fromCharCode(Number.parseInt(code, 16)),
    );
}

function extractObjectSegments(source) {
  const segments = [];
  const slugRe = /"slug"\s*:\s*"([^"]+)"/g;
  let match;

  while ((match = slugRe.exec(source)) !== null) {
    const start = source.lastIndexOf("{", match.index);
    const next = source.indexOf("\n  {", match.index + 1);
    const end = next > -1 ? next : source.indexOf("\n]", match.index);
    if (start > -1 && end > -1) {
      segments.push(source.slice(start, end));
    }
  }

  return segments;
}

function collectPosts(file) {
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) {
    findings.push({ file, issue: "post metadata file missing" });
    return [];
  }

  return extractObjectSegments(fs.readFileSync(fullPath, "utf8"))
    .map((segment) => ({
      file,
      slug: readStringField(segment, "slug"),
      title: readStringField(segment, "title"),
      date: readStringField(segment, "date"),
      scheduledAt: readStringField(segment, "scheduledAt"),
    }))
    .filter((post) => post.slug);
}

function duplicateGroups(posts, key) {
  const groups = new Map();
  for (const post of posts) {
    const value = post[key]?.trim();
    if (!value) continue;
    const group = groups.get(value) ?? [];
    group.push(post);
    groups.set(value, group);
  }

  return [...groups.entries()]
    .filter(([, group]) => group.length > 1)
    .map(([value, group]) => ({
      value,
      count: group.length,
      files: [...new Set(group.map((post) => post.file))].sort(),
      slugs: group.map((post) => post.slug).slice(0, 20),
    }));
}

function parseSchedule(post) {
  const timestamp = Date.parse(post.scheduledAt);
  if (Number.isNaN(timestamp)) {
    findings.push({
      file: post.file,
      slug: post.slug,
      issue: "scheduledAt is invalid",
      scheduledAt: post.scheduledAt,
    });
    return null;
  }

  if (post.date && post.scheduledAt.slice(0, 10) !== post.date) {
    findings.push({
      file: post.file,
      slug: post.slug,
      issue: "date does not match scheduledAt",
      date: post.date,
      scheduledAt: post.scheduledAt,
    });
  }

  return timestamp;
}

function auditFileSchedule(file, posts) {
  const scheduled = posts
    .filter((post) => post.scheduledAt)
    .map((post) => ({ ...post, timestamp: parseSchedule(post) }))
    .filter((post) => post.timestamp !== null)
    .sort((a, b) => a.timestamp - b.timestamp);

  const intervals = [];
  for (let index = 1; index < scheduled.length; index += 1) {
    const previous = scheduled[index - 1];
    const current = scheduled[index];
    const hours = (current.timestamp - previous.timestamp) / 3_600_000;
    intervals.push(hours);

    if (hours !== EXPECTED_INTERVAL_HOURS) {
      findings.push({
        file,
        slug: current.slug,
        issue: "scheduledAt interval is not 5 hours",
        previousSlug: previous.slug,
        previousScheduledAt: previous.scheduledAt,
        scheduledAt: current.scheduledAt,
        intervalHours: hours,
      });
    }
  }

  fileSummaries.push({
    file,
    posts: posts.length,
    scheduled: scheduled.length,
    firstScheduledAt: scheduled[0]?.scheduledAt ?? null,
    lastScheduledAt: scheduled.at(-1)?.scheduledAt ?? null,
    intervalHours: [...new Set(intervals)],
  });
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const postsByFile = new Map();
for (const file of POST_FILES) {
  const posts = collectPosts(file);
  postsByFile.set(file, posts);
  rawPosts.push(...posts);
  auditFileSchedule(file, posts);
}

const overrideMap = new Map();
for (const file of overrideFiles) {
  for (const post of postsByFile.get(file) ?? []) {
    overrideMap.set(post.slug, post);
  }
}

const effectivePosts = [];
for (const file of baseFiles) {
  for (const post of postsByFile.get(file) ?? []) {
    effectivePosts.push({ ...post, ...(overrideMap.get(post.slug) ?? {}) });
  }
}

for (const duplicate of duplicateGroups(effectivePosts, "slug")) {
  findings.push({ issue: "duplicate blog slug", ...duplicate });
}

for (const duplicate of duplicateGroups(effectivePosts, "title")) {
  findings.push({ issue: "duplicate blog title", ...duplicate });
}

const scheduledPosts = effectivePosts.filter((post) => post.scheduledAt);
const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  expectedIntervalHours: EXPECTED_INTERVAL_HOURS,
  files: POST_FILES.length,
  rawPosts: rawPosts.length,
  effectivePosts: effectivePosts.length,
  scheduledPosts: scheduledPosts.length,
  fileSummaries,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "blog-schedule-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
