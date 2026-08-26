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
  },
  stdio: "inherit",
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);

const required = [
  "out/index.html",
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

const customArticle = fs.readFileSync(
  path.join(ROOT, "out/blog/tennis-western-grip-advantages/index.html"),
  "utf8",
);
if (!customArticle.includes("웨스턴 그립")) {
  throw new Error("Static export replaced the custom article body");
}

console.log("GitHub Pages static export audit passed.");
