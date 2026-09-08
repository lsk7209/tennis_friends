import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const metadataPath = path.join(root, "src/data/blog-posts-reviewed-september-2026.js");
const contentPath = path.join(root, "src/data/blog-content/part30-reviewed-september-2026.ts");
const metadata = fs.readFileSync(metadataPath, "utf8");
const content = fs.readFileSync(contentPath, "utf8");
const blogPage = fs.readFileSync(path.join(root, "src/app/blog/page.tsx"), "utf8");
const paginatedPage = fs.readFileSync(path.join(root, "src/app/blog/page/[page]/page.tsx"), "utf8");
const releasePlan = JSON.parse(fs.readFileSync(path.join(root, "docs/reports/reviewed-tennis-release-plan.json"), "utf8"));
const posts = [...metadata.matchAll(/"id":\s*"([^"]+)"[\s\S]*?"slug":\s*"([^"]+)"[\s\S]*?"scheduledAt":\s*"([^"]+)"/g)]
  .map((match) => ({ id: match[1], slug: match[2], scheduledAt: match[3], time: Date.parse(match[3]) }));

const findings = [];
if (posts.length !== 30) findings.push(`expected 30 posts, received ${posts.length}`);
if (posts[0]?.scheduledAt !== "2026-09-09T09:00:00+09:00") findings.push("unexpected first schedule");
if (posts.at(-1)?.scheduledAt !== "2026-09-23T21:00:00+09:00") findings.push("unexpected last schedule");
for (let index = 1; index < posts.length; index += 1) {
  if ((posts[index].time - posts[index - 1].time) / 3_600_000 !== 12) findings.push(`interval failure at ${posts[index].slug}`);
}
for (const post of posts) {
  if (!content.includes(`"${post.slug}":`)) findings.push(`missing content: ${post.slug}`);
}
if (/<h1[ >]/i.test(content)) findings.push("generated content contains an h1");
if (/<p>\s*#\s/.test(content)) findings.push("generated content contains a raw Markdown h1");
if (/href=\\?"(?:javascript:|data:|\/\/)/i.test(content)) findings.push("generated content contains an unsafe link scheme");
if (posts.some((post) => !Number.isFinite(post.time))) findings.push("invalid scheduledAt value");
if (!/export const revalidate = 60/.test(blogPage)) findings.push("blog index does not revalidate every minute");
if (!/export const dynamicParams = true/.test(paginatedPage) || !/export const revalidate = 60/.test(paginatedPage)) findings.push("paginated blog cannot add scheduled pages on demand within one minute");
const releaseConsumers = [
  "src/app/blog/[slug]/page.tsx",
  "src/app/blog-render/[slug]/page.tsx",
  "src/app/rss.xml/route.ts",
  "src/app/feed/route.ts",
  "src/app/feed.xml/route.ts",
  "src/app/sitemap.ts",
  "src/app/sitemap-naver.xml/route.ts",
];
for (const file of releaseConsumers) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  if (!/export const revalidate = 60/.test(source)) findings.push(`${file} does not honor the one-minute release cache contract`);
}
for (const dependency of releasePlan.dependencies) {
  if (!dependency.targetScheduledAt || !dependency.dependentScheduledAt) findings.push(`unresolved dependency: ${dependency.targetArticleId} -> ${dependency.articleId}`);
  else if (Date.parse(dependency.targetScheduledAt) >= Date.parse(dependency.dependentScheduledAt)) findings.push(`dependency is not released first: ${dependency.targetArticleId} -> ${dependency.articleId}`);
}

const firstTime = posts[0]?.time;
const publishGate = {
  beforeFirst: posts.filter((post) => post.time <= firstTime - 1).length,
  atFirst: posts.filter((post) => post.time <= firstTime).length,
  afterTwelveHours: posts.filter((post) => post.time <= firstTime + 12 * 3_600_000).length,
};
if (publishGate.beforeFirst !== 0 || publishGate.atFirst !== 1 || publishGate.afterTwelveHours !== 2) findings.push("publish gate progression failed");

const report = { status: findings.length ? "failed" : "ok", posts: posts.length, first: posts[0]?.scheduledAt, last: posts.at(-1)?.scheduledAt, intervalHours: 12, dependencyLinks: releasePlan.dependencies.length, publishGate, findings };
fs.mkdirSync(path.join(root, "docs/reports"), { recursive: true });
fs.writeFileSync(path.join(root, "docs/reports/reviewed-tennis-schedule-latest.json"), JSON.stringify(report, null, 2) + "\n", "utf8");
console.log(JSON.stringify(report));
if (findings.length) process.exit(1);
