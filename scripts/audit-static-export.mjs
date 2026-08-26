#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const npmCli = process.env.npm_execpath;
if (!npmCli) throw new Error("npm_execpath is required; run through npm run audit:static-export");
const result = spawnSync(process.execPath, [npmCli, "run", "build"], {
  cwd: ROOT,
  env: {
    ...process.env,
    GITHUB_ACTIONS: "true",
    GITHUB_PAGES: "true",
    GITHUB_REPOSITORY: "lsk7209/tennis_friends",
    GITHUB_PAGES_BASE_PATH: "",
    NEXT_PUBLIC_SITE_URL: "https://tennisfrens.com",
  },
  stdio: "inherit",
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const required = [
  "out/index.html",
  "out/blog/page/2/index.html",
  "out/blog/tennis-western-grip-advantages/index.html",
  "out/blog/t01-tennis-grip-size/index.html",
  "out/players/carlos-alcaraz/index.html",
  "out/sitemap.xml",
];
for (const relativePath of required) {
  if (!fs.existsSync(path.join(ROOT, relativePath))) {
    throw new Error(`Static export is missing ${relativePath}`);
  }
}

const home = fs.readFileSync(path.join(ROOT, "out/index.html"), "utf8");
if (!home.includes("G-W1K51D8SBX") || !home.includes("googletagmanager.com/gtag/js")) {
  throw new Error("Static export is missing the GA4 loader");
}

const blogIndex = fs.readFileSync(path.join(ROOT, "out/blog/index.html"), "utf8");
if (Buffer.byteLength(blogIndex) > 250_000) {
  throw new Error(`Blog index payload is too large: ${Buffer.byteLength(blogIndex)} bytes`);
}
if (blogIndex.includes('/tennis_friends/')) {
  throw new Error("Custom-domain export unexpectedly contains the repository base path");
}

const customArticle = fs.readFileSync(
  path.join(ROOT, "out/blog/tennis-western-grip-advantages/index.html"),
  "utf8",
);
if (!customArticle.includes("웨스턴 그립")) {
  throw new Error("Static export replaced the custom article body");
}

console.log("GitHub Pages static export audit passed.");
