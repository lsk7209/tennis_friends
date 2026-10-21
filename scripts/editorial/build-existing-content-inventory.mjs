import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { loadProjectSource } from "../lib/load-project-source.mjs";

const ROOT = process.cwd();
const BASELINE_NOW = "2026-10-20T00:00:00+09:00";
const BLOG_INDEX = "src/data/blog-content/index.ts";
const PLAYER_INDEX = "src/data/players/index.ts";

export function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

export function hashValue(value) {
  return createHash("sha256").update(stableJson(value)).digest("hex");
}

export function blogRenderDependencyHash(reviewSourceHashes, visual, reviewAssetHashes = {}) {
  return hashValue({ reviewSourceHashes, visual: visual ?? null, reviewAssetHashes });
}

export function playerContentHash(player, searchSeo, renderDependencyHash) {
  return hashValue({ player, searchSeo: searchSeo ?? null, renderDependencyHash });
}

function isLocalImagePath(reference) {
  return typeof reference === "string" && /^\/images\/[^?#]+\.(?:png|jpe?g|webp|avif|gif|svg|ico)(?:[?#].*)?$/i.test(reference);
}

export function collectLocalImagePaths(value) {
  const paths = new Set();
  const visited = new Set();
  const visit = (item) => {
    if (typeof item === "string") {
      if (isLocalImagePath(item)) paths.add(item);
      for (const match of item.matchAll(/\bsrc\s*=\s*["'](\/images\/[^"'<>\s]+)["']/gi)) {
        if (isLocalImagePath(match[1])) paths.add(match[1]);
      }
    } else if (item && typeof item === "object" && !visited.has(item)) {
      visited.add(item);
      for (const child of Object.values(item)) visit(child);
    }
  };
  visit(value);
  return [...paths].sort();
}

// The frozen v1 inventory was captured from a Windows CRLF checkout. Preserve
// those hashes while making Linux/CI and Windows reviews compare identically.
export function hashSourceText(text) {
  return createHash("sha256").update(text.replace(/\r?\n/g, "\r\n"), "utf8").digest("hex");
}

// Resolve only source files that can affect the local route render. One cache
// per inventory build keeps shared components from being read for every post.
export function createRenderDependencyFingerprinter({ root = ROOT, readFile = fs.readFileSync, exists = fs.existsSync } = {}) {
  const parsed = new Map();
  const assetCache = new Map();
  const publicRoot = path.resolve(root, "public");
  const publicAsset = (reference) => {
    if (typeof reference !== "string" || !reference.startsWith("/") || reference.startsWith("//")) return null;
    const pathname = reference.split(/[?#]/, 1)[0];
    let decoded;
    try { decoded = decodeURIComponent(pathname); } catch { return null; }
    const absolute = path.resolve(publicRoot, `.${decoded}`);
    if (!absolute.startsWith(`${publicRoot}${path.sep}`)) return null;
    return { key: `public/${path.relative(publicRoot, absolute).split(path.sep).join("/")}`, absolute };
  };
  const assetHash = (reference) => {
    const asset = publicAsset(reference);
    if (!asset) return null;
    if (!assetCache.has(asset.key)) {
      assetCache.set(asset.key, exists(asset.absolute)
        ? createHash("sha256").update(readFile(asset.absolute)).digest("hex")
        : "MISSING_LOCAL_ASSET");
    }
    return [asset.key, assetCache.get(asset.key)];
  };
  const routeMaps = new Map([
    ["src/data/blog-visuals.ts", "blogVisuals"],
    ["src/lib/player-search-seo.ts", "PLAYER_SEARCH_SEO"],
  ]);
  const withoutRouteMap = (file, text) => {
    const name = routeMaps.get(file);
    if (!name) return text;
    const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
    const statement = ast.statements.find((node) => ts.isVariableStatement(node)
      && node.declarationList.declarations.some((declaration) => ts.isIdentifier(declaration.name) && declaration.name.text === name));
    if (!statement) throw new Error(`Expected route map ${name} in ${file}`);
    return `${text.slice(0, statement.getStart(ast))}${text.slice(statement.end)}`;
  };
  const staticAssets = (file, text) => {
    const ast = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
    const assets = [];
    const visit = (node) => {
      if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && isLocalImagePath(node.text)) assets.push(node.text);
      ts.forEachChild(node, visit);
    };
    visit(ast);
    return assets;
  };
  const extensions = ["", ".ts", ".tsx", ".js", ".jsx", ".mjs", ".json"];
  const resolveImport = (from, specifier) => {
    if (!specifier.startsWith("./") && !specifier.startsWith("../") && !specifier.startsWith("@/")) return null;
    const base = specifier.startsWith("@/")
      ? path.posix.join("src", specifier.slice(2))
      : path.posix.join(path.posix.dirname(from), specifier);
    if (base !== "src" && !base.startsWith("src/")) return null;
    for (const candidate of [base, ...extensions.slice(1).map((ext) => `${base}${ext}`), ...extensions.slice(1).map((ext) => `${base}/index${ext}`)]) {
      if (!/\.(?:tsx?|jsx?|mjs|json)$/.test(candidate)) continue;
      if (exists(path.join(root, candidate))) return candidate;
    }
    return null;
  };
  const parse = (file) => {
    if (!parsed.has(file)) {
      const text = readFile(path.join(root, file), "utf8");
      const imports = file.endsWith(".json") ? [] : ts.preProcessFile(text, true, true).importedFiles
        .map(({ fileName }) => resolveImport(file, fileName)).filter(Boolean);
      const sharedText = withoutRouteMap(file, text);
      parsed.set(file, { hash: hashSourceText(text), sharedHash: hashSourceText(sharedText),
        assets: staticAssets(file, text), sharedAssets: staticAssets(file, sharedText), imports });
    }
    return parsed.get(file);
  };
  const isRouteCorpus = (file) => /^src\/data\/blog-posts[^/]*\.[jt]s$/.test(file)
    || file.startsWith("src/data/blog-content/")
    || file.startsWith("src/data/players/");
  return (entry, { skipCorpus = false, assetPaths = [] } = {}) => {
    const hashes = {};
    const references = new Set(assetPaths.filter(Boolean));
    const visited = new Set();
    const visit = (file) => {
      if (visited.has(file) || (skipCorpus && isRouteCorpus(file))) return;
      visited.add(file);
      const { hash, sharedHash, assets, sharedAssets, imports } = parse(file);
      hashes[file] = skipCorpus ? sharedHash : hash;
      for (const asset of skipCorpus ? sharedAssets : assets) references.add(asset);
      imports.forEach(visit);
    };
    visit(entry);
    const reviewSourceHashes = Object.fromEntries(Object.entries(hashes).sort(([a], [b]) => a.localeCompare(b)));
    const reviewAssetHashes = Object.fromEntries([...references].map(assetHash).filter(Boolean).sort(([a], [b]) => a.localeCompare(b)));
    return { reviewSourceHashes, reviewAssetHashes, renderDependencyHash: hashValue({ reviewSourceHashes, reviewAssetHashes }) };
  };
}

function sourceHash(file) {
  return hashSourceText(fs.readFileSync(path.join(ROOT, file), "utf8"));
}

function rawSourceHash(file) {
  return createHash("sha256").update(fs.readFileSync(path.join(ROOT, file))).digest("hex");
}

function filesUnder(dir) {
  const absolute = path.join(ROOT, dir);
  if (!fs.existsSync(absolute)) return [];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = `${dir}/${entry.name}`;
    return entry.isDirectory() ? filesUnder(child) : [child];
  });
}

function moduleEntryOrigins(indexFile, effective, keyForValue) {
  const source = fs.readFileSync(path.join(ROOT, indexFile), "utf8");
  const origins = new Map();
  for (const [, modulePath] of source.matchAll(/from\s+["'](\.\/[^"']+)["']/g)) {
    const stem = path.posix.join(path.posix.dirname(indexFile), modulePath.slice(2));
    const file = [".ts", ".js"].map((ext) => `${stem}${ext}`).find((candidate) => fs.existsSync(path.join(ROOT, candidate)));
    if (!file) continue;
    const exports = loadProjectSource(file);
    for (const collection of Object.values(exports)) {
      if (!collection || typeof collection !== "object" || Array.isArray(collection)) continue;
      for (const [key, value] of Object.entries(collection)) {
        const effectiveKey = keyForValue(key, value);
        if (effective[effectiveKey] === value) origins.set(effectiveKey, file);
      }
    }
  }
  return origins;
}

export function classifyBlog(post, now, isPublished, unavailable, content, customSource) {
  let publication;
  if (unavailable) publication = "unavailable";
  else if (post.publicationState === "draft") publication = "draft";
  else if (post.publicationState === "private") publication = "private";
  else if (isPublished(post, now)) publication = "published";
  else publication = "future_or_invalid_date";
  const bodyKind = customSource ? "custom_static" : content?.content?.trim() ? "content_map" : "missing";
  return { publication, bodyKind, renderable: publication === "published" && bodyKind !== "missing" };
}

function matchingSourceFiles(slug, sourceFiles) {
  const needle = JSON.stringify(slug);
  return sourceFiles.filter(({ text }) => text.includes(needle)).map(({ file }) => file);
}

function routeFile(prefix, slug) {
  const file = `${prefix}/${slug}/page.tsx`;
  return fs.existsSync(path.join(ROOT, file)) ? file : null;
}

function isIndependentStaticBlog(file) {
  if (!file) return false;
  const source = fs.readFileSync(path.join(ROOT, file), "utf8");
  return !/(?:@\/app\/blog\/\[slug\]\/page|\.\.\/\[slug\]\/page)/.test(source);
}

function staticIndexability(file) {
  if (!file) return null;
  const source = fs.readFileSync(path.join(ROOT, file), "utf8");
  const match = source.match(/robots\s*:\s*\{[^}]*?index\s*:\s*(true|false)/s);
  return match ? match[1] === "true" : null;
}

export function buildInventory({ now = BASELINE_NOW } = {}) {
  const nowDate = new Date(now);
  if (!Number.isFinite(nowDate.getTime()) || !/T.*(?:Z|[+-]\d\d:\d\d)$/.test(now)) throw new Error("--now requires an ISO timestamp with timezone");
  const renderFingerprint = createRenderDependencyFingerprinter();
  const { allBlogPosts } = loadProjectSource("src/data/blog-posts.js");
  const { blogContentMap } = loadProjectSource(BLOG_INDEX);
  const { isPublishedBlogPost } = loadProjectSource("src/lib/blog-publish.ts");
  const { isIndexableBlogSlug } = loadProjectSource("src/lib/blog-quality.ts");
  const { unavailableBlogSlugs } = loadProjectSource("src/data/blog-unavailable.js");
  const { PLAYERS_DB } = loadProjectSource(PLAYER_INDEX);
  const { getPlayerSearchSeo } = loadProjectSource("src/lib/player-search-seo.ts");
  const { getBlogVisual } = loadProjectSource("src/data/blog-visuals.ts");
  const legacyRedirects = loadProjectSource("src/data/players/legacy-redirects.json");
  const contentOrigins = moduleEntryOrigins(BLOG_INDEX, blogContentMap, (key) => key);
  const playerOrigins = moduleEntryOrigins(PLAYER_INDEX, PLAYERS_DB, (key) => key);
  const blogSources = filesUnder("src/data").filter((file) => /blog-posts.*\.js$/.test(file))
    .map((file) => ({ file, text: fs.readFileSync(path.join(ROOT, file), "utf8") }));
  const unavailableSet = new Set(unavailableBlogSlugs);
  const blog = allBlogPosts.map((post) => {
    const contentKey = blogContentMap[post.slug] ? post.slug : post.id;
    const content = blogContentMap[contentKey];
    const staticFile = routeFile("src/app/blog", post.slug);
    const customSource = isIndependentStaticBlog(staticFile) ? staticFile : null;
    const classification = classifyBlog(post, nowDate, isPublishedBlogPost, unavailableSet.has(post.slug), content, customSource);
    const indexableByPolicy = isIndexableBlogSlug(post.slug);
    const indexableByStaticMetadata = staticIndexability(customSource);
    const effectiveIndexable = customSource ? indexableByStaticMetadata : indexableByPolicy;
    const metadataSourceCandidates = matchingSourceFiles(post.slug, blogSources);
    const sourceFiles = [...new Set([...metadataSourceCandidates, ...(contentOrigins.has(contentKey) ? [contentOrigins.get(contentKey)] : []), ...(staticFile ? [staticFile] : [])])].sort();
    const visual = getBlogVisual(post.slug);
    const assetPaths = collectLocalImagePaths([post, content, visual]);
    const { reviewSourceHashes, reviewAssetHashes } = renderFingerprint(customSource ?? "src/app/blog/[slug]/page.tsx", { skipCorpus: true, assetPaths });
    const renderDependencyHash = blogRenderDependencyHash(reviewSourceHashes, visual, reviewAssetHashes);
    const comparisonContentHash = hashValue({ metadata: post, body: content ?? null, customSourceHash: customSource ? sourceHash(customSource) : null });
    return {
      kind: "blog", slug: post.slug, route: `/blog/${post.slug}`, title: post.title,
      publication: classification.publication, renderable: classification.renderable,
      bodyKind: classification.bodyKind, publishedNoindex: classification.publication === "published" && effectiveIndexable === false,
      indexableByPolicy, indexableByStaticMetadata, effectiveIndexable, scheduledAt: post.scheduledAt ?? null,
      sourceFiles, contentSourceFile: contentOrigins.get(contentKey) ?? null,
      metadataSourceCandidates,
      contentKey: content ? contentKey : null,
      contentHash: hashValue({ metadata: post, body: content ?? null, renderDependencyHash }),
      comparisonContentHash, renderDependencyHash, reviewSourceHashes, reviewAssetHashes,
      rawContentHash: hashValue({ metadata: post, body: content ?? null, customSourceHash: customSource ? rawSourceHash(customSource) : null }),
      customSourceHash: customSource ? sourceHash(customSource) : null,
      score: null,
    };
  }).sort((a, b) => a.route.localeCompare(b.route));

  const players = Object.entries(PLAYERS_DB).filter(([slug]) => !(slug in legacyRedirects)).map(([slug, player]) => {
    const staticFile = routeFile("src/app/players", slug);
    const sourceFiles = [...new Set([playerOrigins.get(slug), staticFile, "src/app/players/[slug]/page.tsx", "src/lib/player-search-seo.ts"].filter(Boolean))].sort();
    const assetPaths = collectLocalImagePaths(player);
    const { reviewSourceHashes, reviewAssetHashes, renderDependencyHash } = renderFingerprint(staticFile ?? "src/app/players/[slug]/page.tsx", { skipCorpus: true, assetPaths });
    return {
      kind: "player", slug, route: `/players/${slug}`, title: player.name,
      publication: "route_present_publication_unverified", renderable: true,
      bodyKind: "player_data", publishedNoindex: false, indexableByPolicy: true,
      sourceFiles, searchSeo: getPlayerSearchSeo(slug) ?? null, reviewSourceHashes, reviewAssetHashes, renderDependencyHash,
      legacyContentHash: hashValue({ player, staticSourceHash: staticFile ? sourceHash(staticFile) : null }),
      legacyRawContentHash: hashValue({ player, staticSourceHash: staticFile ? rawSourceHash(staticFile) : null }),
      contentHash: playerContentHash(player, getPlayerSearchSeo(slug), renderDependencyHash),
      customSourceHash: staticFile ? sourceHash(staticFile) : null, score: null,
    };
  }).sort((a, b) => a.route.localeCompare(b.route));

  const blogRoutes = new Set(blog.map((entry) => entry.route));
  const playerRoutes = new Set(players.map((entry) => entry.route));
  const orphanBlogRoutes = filesUnder("src/app/blog").filter((file) => file.endsWith("/page.tsx") && file !== "src/app/blog/page.tsx" && !file.includes("/["))
    .map((file) => ({ file, route: `/blog/${file.slice("src/app/blog/".length, -"/page.tsx".length)}` }))
    .filter(({ route }) => !blogRoutes.has(route))
    .map(({ file, route }) => {
      const sourceHashValue = sourceHash(file);
      const { reviewSourceHashes, reviewAssetHashes, renderDependencyHash } = renderFingerprint(file, { skipCorpus: true });
      return { kind: "unmatched_blog_static_route_candidate", route, sourceFiles: [file], sourceHash: sourceHashValue, comparisonContentHash: sourceHashValue, contentHash: hashValue({ renderDependencyHash }), reviewSourceHashes, reviewAssetHashes, renderDependencyHash, score: null, publication: "route_present_metadata_unmatched" };
    })
    .sort((a, b) => a.route.localeCompare(b.route));
  const otherPages = filesUnder("src/app").filter((file) => file.endsWith("/page.tsx") && !file.includes("/["))
    .map((file) => ({ file, route: `/${file.slice("src/app/".length, -"/page.tsx".length).replace(/\([^/]+\)\//g, "")}` }))
    .filter(({ route }) => !blogRoutes.has(route) && !playerRoutes.has(route) && !/^\/(?:blog|players)(?:\/|$)/.test(route))
    .map(({ file, route }) => {
      const sourceHashValue = sourceHash(file);
      const { reviewSourceHashes, reviewAssetHashes, renderDependencyHash } = renderFingerprint(file);
      return {
        kind: route.startsWith("/utility/") && !/(?:\/test|\/result|\/stats|\/leaderboard)$/.test(route) ? "tool_description_candidate" : "unclassified_page_candidate",
        route, sourceFiles: [file], sourceHash: sourceHashValue, comparisonContentHash: sourceHashValue,
        contentHash: hashValue({ renderDependencyHash }), reviewSourceHashes, reviewAssetHashes, renderDependencyHash,
        rawSourceHash: rawSourceHash(file), score: null,
        publication: "route_present_editorial_scope_unverified",
      };
    }).sort((a, b) => a.route.localeCompare(b.route));

  const items = [...blog, ...players, ...orphanBlogRoutes, ...otherPages];
  const summary = {
    baselineNow: nowDate.toISOString(),
    counts: {
      blogMetadata: blog.length,
      blogPublished: blog.filter((entry) => entry.publication === "published").length,
      blogPublishedRenderable: blog.filter((entry) => entry.renderable).length,
      blogPublishedNoindex: blog.filter((entry) => entry.publishedNoindex).length,
      blogFutureOrInvalidDate: blog.filter((entry) => entry.publication === "future_or_invalid_date").length,
      blogDraft: blog.filter((entry) => entry.publication === "draft").length,
      blogPrivate: blog.filter((entry) => entry.publication === "private").length,
      blogUnavailable: blog.filter((entry) => entry.publication === "unavailable").length,
      blogCustomStatic: blog.filter((entry) => entry.bodyKind === "custom_static").length,
      blogMissingBody: blog.filter((entry) => entry.bodyKind === "missing").length,
      playerRouteCandidates: players.length,
      unmatchedBlogStaticRouteCandidates: orphanBlogRoutes.length,
      toolDescriptionCandidates: otherPages.filter((entry) => entry.kind === "tool_description_candidate").length,
      otherPageCandidates: otherPages.filter((entry) => entry.kind === "unclassified_page_candidate").length,
    },
    coverageGaps: [
      "Player routes have no date-based publication helper; route presence is not proof of live publication.",
      "Other static pages and utility descriptions require editorial scope review; route presence is not a quality verdict.",
      "Static blog routes without matching metadata require route-level review; they are not counted as published blog posts.",
      "Metadata sourceFiles are literal-slug candidates; contentSourceFile is resolved from the effective content map.",
      "Render dependency hashes track local imported source files, not runtime-rendered HTML or external packages.",
      "Custom static indexability is resolved only when page source contains a literal metadata.robots.index value; null requires rendered metadata review.",
      "Local source inventory does not verify OVH deployment or live HTTP responses.",
    ],
  };
  return { inventory: { baselineNow: summary.baselineNow, createdAt: summary.baselineNow, items }, summary };
}

function parseArgs(args) {
  const options = {};
  for (let index = 0; index < args.length; index += 2) {
    if (!["--now", "--output-dir"].includes(args[index]) || !args[index + 1]) throw new Error("Usage: node scripts/editorial/build-existing-content-inventory.mjs [--now ISO] [--output-dir path]");
    options[args[index] === "--now" ? "now" : "outputDir"] = args[index + 1];
  }
  return options;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { now, outputDir = ".goal-harness/content-90-20261020/current" } = parseArgs(process.argv.slice(2));
  const { inventory, summary } = buildInventory({ now });
  const dir = path.resolve(ROOT, outputDir);
  if (dir === path.resolve(ROOT, ".goal-harness/content-90-20261020") && fs.existsSync(path.join(dir, "inventory.json"))) throw new Error("Frozen baseline exists; use a different --output-dir");
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "inventory.json"), `${JSON.stringify(inventory, null, 2)}\n`);
  fs.writeFileSync(path.join(dir, "inventory-summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
  console.log(JSON.stringify(summary));
}
