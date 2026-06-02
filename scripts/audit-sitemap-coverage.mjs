import fs from "node:fs";
import { createRequire } from "node:module";
import Module from "node:module";
import path from "node:path";
import ts from "typescript";

const ROOT = process.cwd();
const require = createRequire(import.meta.url);
const SITE_URL = "https://www.tennisfrens.com";
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const findings = [];

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function readProjectFile(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function registerSourceTranspiler() {
  const originalResolve = Module._resolveFilename;
  const originalJs = Module._extensions[".js"];

  Module._resolveFilename = function resolveFilename(request, parent, isMain, options) {
    if (request.startsWith("@/")) {
      return originalResolve.call(
        this,
        path.join(ROOT, "src", request.slice(2)),
        parent,
        isMain,
        options,
      );
    }

    return originalResolve.call(this, request, parent, isMain, options);
  };

  function transpile(filename) {
    const source = fs.readFileSync(filename, "utf8");
    return ts.transpileModule(source, {
      compilerOptions: {
        allowJs: true,
        esModuleInterop: true,
        jsx: ts.JsxEmit.ReactJSX,
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
      fileName: filename,
    }).outputText;
  }

  Module._extensions[".ts"] = (module, filename) => {
    module._compile(transpile(filename), filename);
  };

  Module._extensions[".js"] = (module, filename) => {
    if (filename.startsWith(path.join(ROOT, "src"))) {
      module._compile(transpile(filename), filename);
      return;
    }

    originalJs(module, filename);
  };
}

function compareSets(label, expected, actual) {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);
  const missing = [...expectedSet].filter((url) => !actualSet.has(url));
  const extra = [...actualSet].filter((url) => !expectedSet.has(url));

  assert(missing.length === 0 && extra.length === 0, {
    issue: `${label} sitemap coverage mismatch`,
    missing: missing.slice(0, 20),
    extra: extra.slice(0, 20),
    missingCount: missing.length,
    extraCount: extra.length,
  });
}

function getUtilitySlugs() {
  const utilityDir = path.join(ROOT, "src", "app", "utility");
  return fs
    .readdirSync(utilityDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

registerSourceTranspiler();

const { getSitemapEntries, toXmlSitemap } = require("../src/lib/sitemap-entries.ts");
const { allBlogPosts } = require("../src/data/blog-posts.js");
const { PLAYERS_DB } = require("../src/data/players/index.ts");
const { getPublishedBlogPosts } = require("../src/lib/blog-publish.ts");
const { isIndexableBlogSlug } = require("../src/lib/blog-quality.ts");

const entries = getSitemapEntries(SITE_URL);
const urls = entries.map((entry) => entry.url);
const duplicateUrls = urls.filter((url, index) => urls.indexOf(url) !== index);
const utilitySlugs = getUtilitySlugs();
const playerSlugs = Object.keys(PLAYERS_DB).sort();
const publishedBlogSlugs = getPublishedBlogPosts(allBlogPosts)
  .filter((post) => isIndexableBlogSlug(post.slug))
  .map((post) => post.slug)
  .sort();

assert(entries.length > 0, { issue: "sitemap has no entries" });
assert(duplicateUrls.length === 0, {
  issue: "duplicate sitemap URLs",
  count: duplicateUrls.length,
  examples: [...new Set(duplicateUrls)].slice(0, 20),
});

for (const entry of entries) {
  assert(entry.url.startsWith(SITE_URL), {
    issue: "sitemap URL outside canonical host",
    url: entry.url,
  });
  assert(entry.url === SITE_URL || !entry.url.endsWith("/"), {
    issue: "sitemap URL has trailing slash",
    url: entry.url,
  });
  assert(entry.lastModified instanceof Date && !Number.isNaN(entry.lastModified.getTime()), {
    issue: "invalid sitemap lastModified",
    url: entry.url,
  });
  assert(entry.priority >= 0 && entry.priority <= 1, {
    issue: "invalid sitemap priority",
    url: entry.url,
    priority: entry.priority,
  });
}

compareSets(
  "utility",
  utilitySlugs.map((slug) => `${SITE_URL}/utility/${slug}`),
  urls.filter((url) => url.startsWith(`${SITE_URL}/utility/`)),
);

compareSets(
  "player",
  playerSlugs.map((slug) => `${SITE_URL}/players/${slug}`),
  urls.filter((url) => url.startsWith(`${SITE_URL}/players/`)),
);

compareSets(
  "blog",
  publishedBlogSlugs.map((slug) => `${SITE_URL}/blog/${slug}`),
  urls.filter((url) => url.startsWith(`${SITE_URL}/blog/`) && url !== `${SITE_URL}/blog`),
);

for (const staticUrl of [
  SITE_URL,
  `${SITE_URL}/blog`,
  `${SITE_URL}/utility`,
  `${SITE_URL}/players`,
  `${SITE_URL}/about`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/privacy`,
  `${SITE_URL}/terms`,
  `${SITE_URL}/tennis-rules-quiz`,
]) {
  assert(urls.includes(staticUrl), {
    issue: "required static sitemap URL missing",
    url: staticUrl,
  });
}

const xml = toXmlSitemap(entries);
assert(xml.includes("<urlset") && xml.includes(`${SITE_URL}/sitemap`) === false, {
  issue: "XML sitemap serialization looks invalid",
});
assert((xml.match(/<url>/g) || []).length === entries.length, {
  issue: "XML sitemap URL count mismatch",
  xmlUrlCount: (xml.match(/<url>/g) || []).length,
  entryCount: entries.length,
});

const robots = readProjectFile("src/app/robots.ts");
const naverRoute = readProjectFile("src/app/sitemap-naver.xml/route.ts");
const sitemapRoute = readProjectFile("src/app/sitemap.ts");

assert(robots.includes("/sitemap.xml") && robots.includes("/sitemap-naver.xml"), {
  issue: "robots sitemap declarations missing",
});
assert(sitemapRoute.includes("getSitemapEntries") && sitemapRoute.includes("toMetadataSitemap"), {
  issue: "Next metadata sitemap route is not wired to shared entries",
});
assert(naverRoute.includes("getSitemapEntries") && naverRoute.includes("toXmlSitemap"), {
  issue: "Naver XML sitemap route is not wired to shared entries",
});

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  entries: entries.length,
  blogs: publishedBlogSlugs.length,
  utilities: utilitySlugs.length,
  players: playerSlugs.length,
  findings,
};

fs.mkdirSync(REPORTS_DIR, { recursive: true });
fs.writeFileSync(
  path.join(REPORTS_DIR, "sitemap-coverage-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
