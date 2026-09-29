// Route-level loading.tsx wraps the page in a Suspense boundary, so Next.js
// streams the 200 status before a page calls notFound(). On 2026-09-29, production
// served unknown /blog/<slug> and /players/<slug> URLs as HTTP 200 + noindex
// (soft 404) because of this. Missing content must return a real 404.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const appDirectory = path.join(root, "src/app");

function findLoadingBoundaries(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return findLoadingBoundaries(fullPath);
    return /^loading\.(tsx|ts|jsx|js)$/.test(entry.name) ? [path.relative(root, fullPath).replaceAll("\\", "/")] : [];
  });
}

function routeCallsNotFound(loadingFile) {
  const segmentDirectory = path.dirname(path.join(root, loadingFile));
  const stack = [segmentDirectory];
  while (stack.length) {
    const directory = stack.pop();
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) stack.push(fullPath);
      else if (/^page\.(tsx|ts)$/.test(entry.name) && /\bnotFound\(\)/.test(fs.readFileSync(fullPath, "utf8"))) return true;
    }
  }
  return false;
}

const offending = findLoadingBoundaries(appDirectory).filter(routeCallsNotFound);
assert.deepEqual(offending, [], `loading.tsx above a notFound() page causes soft 404s:\n${offending.join("\n")}`);
console.log("Not-found status audit passed: no loading boundary wraps a notFound() route.");
