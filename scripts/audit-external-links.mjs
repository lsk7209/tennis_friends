#!/usr/bin/env node
// On-demand external link check (network). Not part of `verify` because remote
// sites change independently; run with `npm run audit:external-links`.
// A link is reported dead only when GET returns 404/410 on two attempts.
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "src");
const REPORT = path.join(process.cwd(), "docs", "reports", "external-links-audit-latest.json");
const IGNORED_HOSTS = /tennisfrens\.com|localhost|127\.0\.0\.1|schema\.org|w3\.org|googletagmanager|google-analytics|googlesyndication|cafe\.naver\.com|example\.com|google\.com\/search|naver\.com\/search/;
const CONCURRENCY = 10;
const TIMEOUT_MS = 25000;
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130 Safari/537.36";

function collectUrls() {
  const urls = new Map();
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (/\.(ts|tsx|js|mjs)$/.test(entry.name)) {
        const source = fs.readFileSync(fullPath, "utf8");
        for (const match of source.matchAll(/https?:\/\/[^\s"'`<>)\\]+/g)) {
          const url = match[0].replace(/[.,;]+$/, "");
          if (IGNORED_HOSTS.test(url) || url.includes("${")) continue;
          if (!urls.has(url)) urls.set(url, new Set());
          urls.get(url).add(path.relative(process.cwd(), fullPath).replaceAll("\\", "/"));
        }
      }
    }
  };
  walk(ROOT);
  return urls;
}

async function getStatus(url) {
  try {
    const response = await fetch(url, { redirect: "follow", headers: { "user-agent": UA, accept: "text/html,*/*" }, signal: AbortSignal.timeout(TIMEOUT_MS) });
    return response.status;
  } catch {
    return 0;
  }
}

const urls = [...collectUrls()];
const results = [];
let cursor = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (cursor < urls.length) {
    const [url, files] = urls[cursor++];
    let status = await getStatus(url);
    if (status === 404 || status === 410 || status === 0) status = await getStatus(url);
    results.push({ url, status, files: [...files] });
  }
}));

const dead = results.filter((result) => result.status === 404 || result.status === 410);
const unreachable = results.filter((result) => result.status === 0);
fs.mkdirSync(path.dirname(REPORT), { recursive: true });
fs.writeFileSync(REPORT, JSON.stringify({ checkedAt: new Date().toISOString(), total: results.length, dead, unreachable }, null, 2));
console.log(JSON.stringify({ total: results.length, dead: dead.length, unreachable: unreachable.length }));
if (dead.length) process.exit(1);
