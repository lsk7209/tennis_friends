// Blocked browser storage (Safari cookie blocking, private/embedded browsers)
// throws on access. A 2026-09-29 production check showed that this crashed every
// page through the shared Header/Tracking. Public code must use
// src/lib/safe-storage.ts or an explicitly guarded module.
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const GUARDED_FILES = new Set([
  "src/lib/safe-storage.ts",
  "src/lib/ntrp-results.ts", // every access is wrapped in try/catch; covered by audit:ntrp-storage
  "src/components/Tracking.tsx", // remaining sessionStorage access sits inside try/catch
  "src/app/admin/page.tsx", // noindex internal page, not a public surface
]);
const RAW_ACCESS = /\b(?:window\.)?(?:localStorage|sessionStorage)\s*\.\s*(?:getItem|setItem|removeItem|clear)\s*\(/;

function listSource(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listSource(fullPath);
    return /\.(ts|tsx)$/.test(entry.name) ? [fullPath] : [];
  });
}

const offenders = listSource(path.join(root, "src"))
  .map((file) => path.relative(root, file).replaceAll("\\", "/"))
  .filter((file) => !GUARDED_FILES.has(file))
  .filter((file) => RAW_ACCESS.test(fs.readFileSync(path.join(root, file), "utf8")));
assert.deepEqual(offenders, [], `unguarded storage access:\n${offenders.join("\n")}`);

async function loadSafeStorage() {
  const source = fs.readFileSync(path.join(root, "src/lib/safe-storage.ts"), "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  return import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
}

const { safeStorageGet, safeStorageSet } = await loadSafeStorage();

const blocked = () => { throw new Error("SecurityError"); };
globalThis.window = {};
Object.defineProperty(globalThis.window, "localStorage", { get: blocked });
Object.defineProperty(globalThis.window, "sessionStorage", { get: blocked });
assert.equal(safeStorageGet("theme"), null, "blocked getter returns null");
assert.equal(safeStorageSet("theme", "dark", "session"), false, "blocked getter reports unsaved");

const quotaFull = { getItem: () => "light", setItem: () => { throw new Error("QuotaExceededError"); } };
globalThis.window = { localStorage: quotaFull, sessionStorage: quotaFull };
assert.equal(safeStorageGet("theme"), "light");
assert.equal(safeStorageSet("theme", "dark"), false, "quota error reports unsaved");

const memory = new Map();
const working = { getItem: (key) => memory.get(key) ?? null, setItem: (key, value) => memory.set(key, value) };
globalThis.window = { localStorage: working, sessionStorage: working };
assert.equal(safeStorageSet("theme", "dark"), true);
assert.equal(safeStorageGet("theme"), "dark");

delete globalThis.window;
assert.equal(safeStorageGet("theme"), null, "server render returns null");

console.log(`Storage safety audit passed: 0 unguarded files, ${GUARDED_FILES.size} guarded modules, 4 helper scenarios.`);
