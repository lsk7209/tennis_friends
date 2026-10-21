import assert from "node:assert/strict";
import test from "node:test";
import { blogRenderDependencyHash, classifyBlog, collectLocalImagePaths, createRenderDependencyFingerprinter, hashSourceText, hashValue, playerContentHash, stableJson } from "./build-existing-content-inventory.mjs";
import { createHash } from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const publish = (post, now) => !["draft", "private"].includes(post.publicationState)
  && new Date(post.scheduledAt ?? `${post.date}T00:00:00+09:00`) <= now;

test("publication boundary and unpublished states", () => {
  const post = { date: "2026-10-20", scheduledAt: "2026-10-20T09:00:00+09:00" };
  assert.equal(classifyBlog(post, new Date("2026-10-19T23:59:59Z"), publish, false, { content: "body" }, null).publication, "future_or_invalid_date");
  assert.equal(classifyBlog(post, new Date("2026-10-20T00:00:00Z"), publish, false, { content: "body" }, null).publication, "published");
  assert.equal(classifyBlog({ ...post, publicationState: "draft" }, new Date("2026-10-21"), publish, false, { content: "body" }, null).publication, "draft");
  assert.equal(classifyBlog({ ...post, publicationState: "private" }, new Date("2026-10-21"), publish, false, { content: "body" }, null).publication, "private");
  assert.equal(classifyBlog(post, new Date("2026-10-21"), publish, true, null, null).publication, "unavailable");
});

test("independent static body is distinct from a missing body and takes route priority", () => {
  const post = { date: "2026-10-19" };
  const now = new Date("2026-10-20");
  assert.deepEqual(classifyBlog(post, now, publish, false, null, null), { publication: "published", bodyKind: "missing", renderable: false });
  assert.deepEqual(classifyBlog(post, now, publish, false, null, "src/app/blog/a/page.tsx"), { publication: "published", bodyKind: "custom_static", renderable: true });
  assert.equal(classifyBlog(post, now, publish, false, { content: "mapped" }, "src/app/blog/a/page.tsx").bodyKind, "custom_static");
});

test("canonical hash changes with metadata, body, or custom page source", () => {
  const baseline = { metadata: { slug: "a", title: "A" }, body: { content: "x" }, customSourceHash: "one" };
  assert.equal(hashValue(baseline), hashValue({ customSourceHash: "one", body: { content: "x" }, metadata: { title: "A", slug: "a" } }));
  assert.notEqual(hashValue(baseline), hashValue({ ...baseline, metadata: { ...baseline.metadata, title: "B" } }));
  assert.notEqual(hashValue(baseline), hashValue({ ...baseline, body: { content: "y" } }));
  assert.notEqual(hashValue(baseline), hashValue({ ...baseline, customSourceHash: "two" }));
  assert.equal(stableJson({ b: 2, a: 1 }), '{"a":1,"b":2}');
});

test("review source hashes survive Git newline conversion and retain frozen CRLF hashes", () => {
  const windows = 'export const title = "검토";\r\n';
  const linux = windows.replace(/\r\n/g, '\n');
  assert.equal(hashSourceText(windows), createHash('sha256').update(windows).digest('hex'));
  assert.equal(hashSourceText(linux), hashSourceText(windows));
  assert.notEqual(hashSourceText(linux.replace('title', 'subtitle')), hashSourceText(windows));
});

test("effective route fingerprint follows local components, metadata helpers, and cycles", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tennis-render-fingerprint-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, source) => {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, source);
  };
  write("src/app/blog/[slug]/page.tsx", 'import { card } from "@/components/Card";\nimport { title } from "@/lib/metadata";\nexport const page = card + title;\n');
  write("src/components/Card.tsx", 'import { title } from "../lib/metadata";\nexport const card = title;\n');
  write("src/lib/metadata.ts", 'import { card } from "../components/Card";\nexport const title = "A";\n');
  const fingerprint = () => createRenderDependencyFingerprinter({ root })("src/app/blog/[slug]/page.tsx", { skipCorpus: true });
  const first = fingerprint();
  assert.deepEqual(Object.keys(first.reviewSourceHashes), ["src/app/blog/[slug]/page.tsx", "src/components/Card.tsx", "src/lib/metadata.ts"]);
  write("src/lib/metadata.ts", 'import { card } from "../components/Card";\nexport const title = "B";\n');
  const afterMetadata = fingerprint();
  assert.notEqual(afterMetadata.renderDependencyHash, first.renderDependencyHash);
  write("src/components/Card.tsx", 'import { title } from "../lib/metadata";\nexport const card = `Card: ${title}`;\n');
  const afterComponent = fingerprint();
  assert.notEqual(afterComponent.renderDependencyHash, afterMetadata.renderDependencyHash);
  write("src/app/blog/[slug]/page.tsx", 'import { card } from "@/components/Card";\r\nimport { title } from "@/lib/metadata";\r\nexport const page = card + title;\r\n');
  const windows = fingerprint();
  write("src/app/blog/[slug]/page.tsx", 'import { card } from "@/components/Card";\nimport { title } from "@/lib/metadata";\nexport const page = card + title;\n');
  assert.equal(fingerprint().renderDependencyHash, windows.renderDependencyHash);
});

test("shared render sources are read once per inventory build", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tennis-render-cache-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const page = path.join(root, "src/app/page.tsx");
  fs.mkdirSync(path.dirname(page), { recursive: true });
  fs.writeFileSync(page, "export default function Page() { return null; }\n");
  let reads = 0;
  const fingerprint = createRenderDependencyFingerprinter({ root, readFile: (...args) => { reads += 1; return fs.readFileSync(...args); } });
  fingerprint("src/app/page.tsx");
  fingerprint("src/app/page.tsx");
  assert.equal(reads, 1);
});

test("blog visual entries affect only their route while shared visual logic affects all", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tennis-render-data-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  for (const file of ["src/app/blog/[slug]/page.tsx", "src/app/utility/tool/page.tsx"]) {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, 'import { value } from "@/data/blog-content";\nimport { visual } from "@/data/blog-visuals";\nexport default value + visual;\n');
  }
  const corpusFile = path.join(root, "src/data/blog-content/index.ts");
  const visualFile = path.join(root, "src/data/blog-visuals.ts");
  fs.mkdirSync(path.dirname(corpusFile), { recursive: true });
  fs.writeFileSync(corpusFile, 'export const value = "one";\n');
  const visualSource = (alt, logic = "return blogVisuals[slug]") => `const blogVisuals = { a: { alt: "${alt}" }, b: { alt: "B" } };\nexport function getBlogVisual(slug: string) { ${logic}; }\n`;
  fs.writeFileSync(visualFile, visualSource("first alt"));
  const fingerprint = () => createRenderDependencyFingerprinter({ root });
  const beforeBlog = fingerprint()("src/app/blog/[slug]/page.tsx", { skipCorpus: true });
  const beforeTool = fingerprint()("src/app/utility/tool/page.tsx");
  assert.equal(Object.hasOwn(beforeBlog.reviewSourceHashes, "src/data/blog-content/index.ts"), false);
  assert.equal(Object.hasOwn(beforeBlog.reviewSourceHashes, "src/data/blog-visuals.ts"), true);
  assert.equal(Object.hasOwn(beforeTool.reviewSourceHashes, "src/data/blog-content/index.ts"), true);
  const beforeA = blogRenderDependencyHash(beforeBlog.reviewSourceHashes, { alt: "first alt" });
  const beforeB = blogRenderDependencyHash(beforeBlog.reviewSourceHashes, { alt: "B" });
  fs.writeFileSync(corpusFile, 'export const value = "two";\n');
  assert.equal(fingerprint()("src/app/blog/[slug]/page.tsx", { skipCorpus: true }).renderDependencyHash, beforeBlog.renderDependencyHash);
  assert.notEqual(fingerprint()("src/app/utility/tool/page.tsx").renderDependencyHash, beforeTool.renderDependencyHash);
  fs.writeFileSync(visualFile, visualSource("revised alt"));
  const afterMap = fingerprint()("src/app/blog/[slug]/page.tsx", { skipCorpus: true });
  assert.equal(afterMap.renderDependencyHash, beforeBlog.renderDependencyHash);
  assert.notEqual(blogRenderDependencyHash(afterMap.reviewSourceHashes, { alt: "revised alt" }), beforeA);
  assert.equal(blogRenderDependencyHash(afterMap.reviewSourceHashes, { alt: "B" }), beforeB);
  fs.writeFileSync(visualFile, visualSource("revised alt", "return blogVisuals[slug] ?? null"));
  const afterLogic = fingerprint()("src/app/blog/[slug]/page.tsx", { skipCorpus: true });
  assert.notEqual(blogRenderDependencyHash(afterLogic.reviewSourceHashes, { alt: "B" }), beforeB);
});

test("player SEO map entries are per player while shared SEO helper logic is fingerprinted", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tennis-player-seo-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const page = path.join(root, "src/app/players/[slug]/page.tsx");
  const seoFile = path.join(root, "src/lib/player-search-seo.ts");
  fs.mkdirSync(path.dirname(page), { recursive: true });
  fs.mkdirSync(path.dirname(seoFile), { recursive: true });
  fs.writeFileSync(page, 'import { getPlayerSearchSeo } from "@/lib/player-search-seo";\nexport default getPlayerSearchSeo;\n');
  const seoSource = (a, logic = "return PLAYER_SEARCH_SEO[slug]") => `const PLAYER_SEARCH_SEO = { a: { title: "${a}" }, b: { title: "B" } };\nexport function getPlayerSearchSeo(slug: string) { ${logic}; }\n`;
  fs.writeFileSync(seoFile, seoSource("A"));
  const fingerprint = () => createRenderDependencyFingerprinter({ root })("src/app/players/[slug]/page.tsx", { skipCorpus: true });
  const before = fingerprint();
  const player = { name: "Same" };
  const beforeA = playerContentHash(player, { title: "A" }, before.renderDependencyHash);
  const beforeB = playerContentHash(player, { title: "B" }, before.renderDependencyHash);
  fs.writeFileSync(seoFile, seoSource("Revised A"));
  const afterMap = fingerprint();
  assert.equal(afterMap.renderDependencyHash, before.renderDependencyHash);
  assert.notEqual(playerContentHash(player, { title: "Revised A" }, afterMap.renderDependencyHash), beforeA);
  assert.equal(playerContentHash(player, { title: "B" }, afterMap.renderDependencyHash), beforeB);
  fs.writeFileSync(seoFile, seoSource("Revised A", "return PLAYER_SEARCH_SEO[slug] ?? null"));
  assert.notEqual(fingerprint().renderDependencyHash, before.renderDependencyHash);
});

test("local image bytes are route-specific and static renderer literals are tracked", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tennis-render-assets-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const write = (file, bytes) => {
    const target = path.join(root, file);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, bytes);
  };
  write("src/app/blog/[slug]/page.tsx", 'import { getBlogVisual } from "@/data/blog-visuals";\nexport const fallback = "/images/shared.png";\nexport const directory = "/images/";\nexport default getBlogVisual;\n');
  write("src/data/blog-visuals.ts", 'const blogVisuals = { a: { src: "/images/a.png" }, b: { src: "/images/b.png" } };\nexport function getBlogVisual(slug: string) { return blogVisuals[slug]; }\n');
  write("public/images/a.png", Buffer.from([0, 255, 1]));
  write("public/images/b.png", Buffer.from([0, 255, 2]));
  write("public/images/shared.png", Buffer.from([0, 255, 3]));
  const route = (slug) => {
    const visual = { src: `/images/${slug}.png` };
    const { reviewSourceHashes, reviewAssetHashes } = createRenderDependencyFingerprinter({ root })("src/app/blog/[slug]/page.tsx", { skipCorpus: true, assetPaths: [visual.src] });
    return { hash: blogRenderDependencyHash(reviewSourceHashes, visual, reviewAssetHashes), reviewAssetHashes };
  };
  const beforeA = route("a");
  const beforeB = route("b");
  assert.deepEqual(Object.keys(beforeA.reviewAssetHashes), ["public/images/a.png", "public/images/shared.png"]);
  assert.deepEqual(Object.keys(beforeB.reviewAssetHashes), ["public/images/b.png", "public/images/shared.png"]);
  write("public/images/a.png", Buffer.from([0, 255, 4]));
  assert.notEqual(route("a").hash, beforeA.hash);
  assert.equal(route("b").hash, beforeB.hash);
  write("public/images/shared.png", Buffer.from([0, 255, 5]));
  assert.notEqual(route("b").hash, beforeB.hash);
});

test("effective body HTML and nested player data expose local image paths only", () => {
  const values = [
    { image: "/images/cover.jpg", body: '<p><img src="/images/body.webp" alt="body"></p><img src="https://cdn.example.com/images/external.png">' },
    { detailedProfile: { gallery: [{ src: "/images/player.svg?size=2" }, { src: "/images/" }] } },
    "https://cdn.example.com/images/remote.png",
  ];
  assert.deepEqual(collectLocalImagePaths(values), ["/images/body.webp", "/images/cover.jpg", "/images/player.svg?size=2"]);
});

test("missing local assets are explicit and external or escaping paths are ignored", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "tennis-missing-asset-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const page = path.join(root, "src/app/page.tsx");
  fs.mkdirSync(path.dirname(page), { recursive: true });
  fs.writeFileSync(page, 'export const image = "/images/missing.png";\n');
  const fingerprint = () => createRenderDependencyFingerprinter({ root })("src/app/page.tsx", { assetPaths: ["https://example.com/a.png", "/../../secret.png"] });
  const before = fingerprint();
  assert.deepEqual(before.reviewAssetHashes, { "public/images/missing.png": "MISSING_LOCAL_ASSET" });
  const image = path.join(root, "public/images/missing.png");
  fs.mkdirSync(path.dirname(image), { recursive: true });
  fs.writeFileSync(image, Buffer.from([0, 1]));
  assert.notEqual(fingerprint().renderDependencyHash, before.renderDependencyHash);
});
