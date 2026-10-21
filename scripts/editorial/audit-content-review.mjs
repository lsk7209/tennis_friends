import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildInventory, hashValue } from "./build-existing-content-inventory.mjs";

export const SCORE_RULES = Object.freeze({
  facts: [25, 23],
  sources: [15, 14],
  usefulness: [20, 18],
  depth: [15, 13],
  language: [10, 8],
  intent: [10, 8],
  accessibility: [5, 4],
});

const isText = (value) => typeof value === "string" && value.trim().length > 0;
const isDate = (value) => isText(value) && /T.*(?:Z|[+-]\d\d:\d\d)$/.test(value) && Number.isFinite(Date.parse(value));
const isCheckedDate = (value) => isDate(value) || (typeof value === "string" && /^\d{4}-\d\d-\d\d$/.test(value) && !Number.isNaN(Date.parse(value)));
const isHash = (value) => typeof value === "string" && /^[a-f0-9]{64}$/.test(value);

function validUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
}

// The reader and current content hash are injected so this check is deterministic and testable.
// It verifies a review record, not whether its reviewer actually read or judged the article well.
export function validateReview(entry, currentHash, { readEvidence } = {}) {
  const errors = [];
  const after = entry?.after;
  const review = entry?.review;
  const scores = after?.scores;
  if (!isText(entry?.author)) errors.push("author is required for independent approval");
  if (!isText(review?.reviewer)) errors.push("review.reviewer is required");
  else if (isText(entry?.author) && review.reviewer.trim().toLowerCase() === entry.author.trim().toLowerCase()) errors.push("reviewer must differ from author");
  if (review?.verdict !== "approved") errors.push("review.verdict must be approved");
  if (!isDate(review?.reviewedAt)) errors.push("review.reviewedAt must be a valid timestamp with timezone");
  if (!isHash(after?.contentHash)) errors.push("after.contentHash must be a SHA-256 hash");
  if (!isHash(review?.contentHash) || review.contentHash !== after?.contentHash) errors.push("review.contentHash must match after.contentHash");
  if (!isHash(currentHash) || currentHash !== after?.contentHash) errors.push("current content hash is absent or differs from reviewed content");

  let total = 0;
  if (scores && (typeof scores !== "object" || Array.isArray(scores) || Object.keys(scores).some((key) => !Object.hasOwn(SCORE_RULES, key)))) errors.push("after.scores must contain only the seven rubric dimensions");
  for (const [dimension, [weight, floor]] of Object.entries(SCORE_RULES)) {
    const score = scores?.[dimension];
    if (!Number.isInteger(score) || score < 0 || score > weight) errors.push(`after.scores.${dimension} must be an integer from 0 to ${weight}`);
    else {
      total += score;
      if (score < floor) errors.push(`after.scores.${dimension} is below the ${floor} point floor`);
    }
  }
  if (!Number.isInteger(after?.score) || after.score < 0 || after.score > 100) errors.push("after.score must be an integer from 0 to 100");
  else {
    if (after.score !== total) errors.push("after.score does not equal the dimension sum");
    if (after.score < 90) errors.push("after.score is below 90");
  }
  if (!Array.isArray(after?.vetoes) || after.vetoes.length !== 0) errors.push("after.vetoes must be an empty array");

  if (!Array.isArray(entry?.sources) || entry.sources.length === 0) errors.push("at least one checked official source is required");
  else entry.sources.forEach((source, index) => {
    if (source?.official !== true || !validUrl(source?.url) || !isCheckedDate(source?.checkedAt)
      || !Array.isArray(source?.claims) || source.claims.length === 0 || !source.claims.every(isText)) {
      errors.push(`sources[${index}] requires official: true, a valid URL, checkedAt, and linked claims`);
    }
  });

  if (!isText(review?.evidencePath)) errors.push("review.evidencePath is required");
  else {
    try {
      const raw = typeof readEvidence === "function" ? readEvidence(review.evidencePath) : null;
      if (!isText(raw)) errors.push("review evidence is absent or empty");
      else {
        const artifact = JSON.parse(raw);
        const matching = Array.isArray(artifact?.items) ? artifact.items.filter((item) => item?.route === entry?.route) : [];
        if (artifact?.reviewer !== review.reviewer || artifact?.checkedAt !== review.reviewedAt) errors.push("review artifact reviewer or checkedAt differs from ledger");
        if (matching.length !== 1) errors.push("review artifact must contain exactly one matching route item");
        else {
          const item = matching[0];
          if (item.contentHash !== after?.contentHash) errors.push("review artifact contentHash differs from ledger");
          if (!item.scores || Object.keys(item.scores).length !== Object.keys(SCORE_RULES).length
            || Object.keys(SCORE_RULES).some((dimension) => item.scores[dimension] !== scores?.[dimension])) errors.push("review artifact scores differ from ledger");
          if (item.total !== after?.score) errors.push("review artifact total differs from ledger");
          if (!Array.isArray(item.vetoes) || item.vetoes.length !== 0) errors.push("review artifact has unresolved vetoes");
          if (!["PASS", "approved"].includes(item.verdict)) errors.push("review artifact verdict must be PASS or approved");
          if (!Array.isArray(item.strengths) || item.strengths.length === 0 || !item.strengths.every(isText)) errors.push("review artifact requires written positive evidence");
          const deductions = item.deductions;
          if (!Array.isArray(deductions) || deductions.some((d) => !Object.hasOwn(SCORE_RULES, d?.dimension)
            || !Number.isInteger(d.points) || d.points <= 0 || !isText(d.location) || !isText(d.reason)
            || !isText(d.fix ?? d.requiredFix))) errors.push("review artifact requires valid located deduction reasons and fixes");
          else for (const [dimension, [weight]] of Object.entries(SCORE_RULES)) {
            if (deductions.filter((d) => d.dimension === dimension).reduce((sum, d) => sum + d.points, 0) !== weight - scores?.[dimension]) errors.push(`review artifact ${dimension} deductions do not explain lost points`);
          }
        }
      }
    } catch {
      errors.push("review evidence is unreadable or invalid JSON");
    }
  }
  return { ok: errors.length === 0, errors };
}

export function auditLedger(ledger, { currentHashes = {}, routes = [], readEvidence } = {}) {
  const errors = [];
  const entries = ledger?.entries;
  if (ledger?.schemaVersion !== 1) errors.push("schemaVersion must be 1");
  if (!isText(ledger?.baseline?.inventoryPath) || !isDate(ledger?.baseline?.baselineNow)) errors.push("baseline requires inventoryPath and baselineNow");
  if (!Array.isArray(entries)) return { ok: false, errors: [...errors, "entries must be an array"], approved: 0, pending: 0, revision: 0 };
  const selected = new Set(routes);
  const seen = new Set();
  let approved = 0;
  let pending = 0;
  let revision = 0;
  for (const entry of entries) {
    const route = entry?.route;
    if (!isText(route) || !route.startsWith("/")) { errors.push("entry.route must be an absolute site path"); continue; }
    if (seen.has(route)) errors.push(`${route}: duplicate route`);
    seen.add(route);
    if (!["pending", "revision", "approved"].includes(entry.status)) { errors.push(`${route}: invalid status`); continue; }
    if (entry.status === "pending") pending += 1;
    if (entry.status === "revision") revision += 1;
    if (entry.status === "approved") {
      approved += 1;
      const currentHash = currentHashes instanceof Map ? currentHashes.get(route) : currentHashes[route];
      const result = validateReview(entry, currentHash, { readEvidence });
      errors.push(...result.errors.map((error) => `${route}: ${error}`));
    } else if (selected.has(route)) errors.push(`${route}: selected route is ${entry.status}, not approved`);
  }
  for (const route of selected) if (!seen.has(route)) errors.push(`${route}: selected route is absent from ledger`);
  return { ok: errors.length === 0, errors, approved, pending, revision };
}

// Compare against the immutable v1 baseline. Player v2 contentHash includes search SEO;
// its legacyContentHash preserves the v1 comparison while searchSeoHash tracks SEO alone.
export function findChangedRoutes(ledger, inventory, { baselineRenderHashes = new Map() } = {}) {
  const routes = [];
  const errors = [];
  const untrackedRoutes = [];
  if (!Array.isArray(ledger?.entries) || !Array.isArray(inventory?.items)) {
    return { routes, errors: ["ledger entries and current inventory items must be arrays"], untrackedRoutes };
  }
  const current = new Map();
  for (const item of inventory.items) {
    if (current.has(item.route)) errors.push(`${item.route}: duplicate route in current inventory`);
    current.set(item.route, item);
  }
  for (const entry of ledger.entries) {
    const route = entry?.route;
    if (entry.scopeStatus === "non_editorial_scope") continue;
    const item = current.get(route);
    if (!item) { errors.push(`${route ?? "unknown route"}: baseline route missing from current inventory`); continue; }
    const baselineHash = entry?.before?.canonicalContentHash ?? entry?.before?.contentHash;
    if (!isHash(baselineHash)) { errors.push(`${route}: before.contentHash is missing or invalid`); continue; }
    if (entry.kind === "player") {
      if (!isHash(item.legacyContentHash) || !isHash(entry.before.searchSeoHash) || !Object.hasOwn(item, "searchSeo")) {
        errors.push(`${route}: player legacy or search SEO baseline is missing`);
        continue;
      }
      if (item.legacyContentHash !== baselineHash || hashValue(item.searchSeo ?? null) !== entry.before.searchSeoHash) routes.push(route);
    } else {
      const currentHash = item.comparisonContentHash ?? item.contentHash ?? item.sourceHash;
      if (!isHash(currentHash)) errors.push(`${route}: current content hash is missing or invalid`);
      else if (currentHash !== baselineHash) routes.push(route);
    }
    if (item.renderDependencyHash) {
      const baselineRenderHash = baselineRenderHashes.get(route);
      if (!isHash(baselineRenderHash)) errors.push(`${route}: render dependency baseline is missing`);
      else if (baselineRenderHash !== item.renderDependencyHash) routes.push(route);
    }
  }
  const recorded = new Set([
    ...ledger.entries.map((entry) => entry.route),
    ...(ledger.articles ?? []).map((entry) => entry.route),
  ]);
  for (const item of inventory.items) {
    if (recorded.has(item.route)) continue;
    if (item.kind === "blog" && item.publication === "published") errors.push(`${item.route}: new published blog route is absent from ledger`);
    else if (item.kind !== "blog") errors.push(`${item.route}: new route candidate requires explicit editorial scope and ledger assignment`);
    else untrackedRoutes.push(item.route);
  }
  return { routes: [...new Set(routes)], errors, untrackedRoutes };
}

// Original raw hashes remain tied to the frozen inventory. A newline migration
// can only use the separate exact-match reconciliation, never an editable override.
// A technical restoration does not approve editorial content. It can reconcile
// one independently reviewed analytics module only when every other source,
// asset and editorial content hash remains identical to the frozen baseline.
export function reconcileTechnicalRestoration(proof, ledger, inventory, frozenRenderItems) {
  if (proof?.schemaVersion !== 1 || proof?.kind !== "analytics-restoration"
    || proof?.verdict !== "approved" || !isText(proof.author) || !isText(proof.reviewer)
    || proof.author.trim().toLowerCase() === proof.reviewer.trim().toLowerCase()
    || !isDate(proof.reviewedAt) || !isText(proof.reason)
    || !/^[a-f0-9]{40}$/.test(proof.restoredFromCommit ?? "")
    || proof.file !== "src/lib/analytics.ts" || !isHash(proof.beforeHash)
    || !isHash(proof.afterHash) || proof.beforeHash === proof.afterHash
    || !Array.isArray(proof.items) || proof.items.length === 0
    || new Set(proof.items.map(item => item.route)).size !== proof.items.length) {
    throw new Error("invalid independent technical restoration review");
  }
  const reconciled = new Map();
  for (const item of proof.items) {
    const entry = ledger.entries.find(entry => entry.route === item.route);
    const current = inventory.items.find(entry => entry.route === item.route);
    const frozen = frozenRenderItems.get(item.route);
    const contentHash = current?.comparisonContentHash ?? current?.contentHash ?? current?.sourceHash;
    const originalContentHash = entry?.before?.canonicalContentHash ?? entry?.before?.contentHash;
    if (entry?.kind !== "tool_description_candidate" || !current || !frozen
      || !isHash(originalContentHash) || contentHash !== originalContentHash
      || item.contentHash !== contentHash || frozen.reviewSourceHashes?.[proof.file] !== proof.beforeHash
      || item.beforeRenderHash !== frozen.renderDependencyHash
      || item.afterRenderHash !== current.renderDependencyHash) {
      throw new Error(`${item.route}: technical restoration content or preimage mismatch`);
    }
    const sources = { ...frozen.reviewSourceHashes, [proof.file]: proof.afterHash };
    const expected = { reviewSourceHashes: sources, reviewAssetHashes: frozen.reviewAssetHashes };
    if (hashValue({ reviewSourceHashes: frozen.reviewSourceHashes, reviewAssetHashes: frozen.reviewAssetHashes }) !== frozen.renderDependencyHash
      || hashValue(sources) !== hashValue(current.reviewSourceHashes)
      || hashValue(frozen.reviewAssetHashes) !== hashValue(current.reviewAssetHashes)
      || hashValue(expected) !== current.renderDependencyHash) {
      throw new Error(`${item.route}: technical restoration exceeds reviewed module delta`);
    }
    reconciled.set(item.route, current.renderDependencyHash);
  }
  return reconciled;
}

export function validateBaselineEvidence(ledger, inventory, { readEvidence } = {}) {
  const errors = [];
  const renderHashes = new Map();
  const cache = new Map();
  const read = (file) => {
    if (!cache.has(file)) cache.set(file, JSON.parse(readEvidence(file).replace(/^\uFEFF/, "")));
    return cache.get(file);
  };
  try {
    const frozen = new Map();
    for (const file of [ledger.baseline.inventoryPath, ...(ledger.baseline.additionalInventoryPaths ?? [])]) {
      const data = read(file);
      if (!Array.isArray(data.items)) throw new Error("Frozen baseline inventory items missing");
      for (const item of data.items) {
        if (frozen.has(item.route)) throw new Error(`Duplicate frozen baseline route ${item.route}`);
        frozen.set(item.route, item);
      }
    }
    const evidenceMaps = new Map();
    const indexEvidence = (file) => {
      if (!evidenceMaps.has(file)) {
        const items = read(file).items;
        if (!Array.isArray(items) || new Set(items.map(i => i.route)).size !== items.length) throw new Error("Invalid or duplicate baseline evidence items");
        evidenceMaps.set(file, new Map(items.map(i => [i.route, i])));
      }
      return evidenceMaps.get(file);
    };
    for (const entry of ledger.entries ?? []) {
      const frozenItem = frozen.get(entry.route);
      const original = frozenItem?.contentHash ?? frozenItem?.sourceHash;
      if (!isHash(original) || original !== entry.before?.contentHash) errors.push(`${entry.route}: original before hash differs from frozen baseline`);
      if (frozenItem?.kind !== entry.kind) errors.push(`${entry.route}: kind differs from frozen baseline`);
      if (entry.before?.canonicalContentHash !== undefined) {
        const proof = indexEvidence(entry.before.canonicalHashEvidencePath).get(entry.route);
        if (!proof || proof.frozenRawHash !== original || proof.currentRawHash !== original || proof.canonicalHash !== entry.before.canonicalContentHash) errors.push(`${entry.route}: canonical baseline override lacks exact frozen-raw reconciliation`);
      }
      if (entry.scopeStatus === "non_editorial_scope") {
        const scope = indexEvidence(ledger.baseline.scopeEvidencePath).get(entry.route);
        const runtimeOrSupport = /\/(?:test|result|stats|leaderboard|quiz)$/.test(entry.route)
          || ["/", "/utility", "/about", "/contact", "/privacy", "/terms", "/search", "/admin"].includes(entry.route);
        if (frozenItem?.kind !== "unclassified_page_candidate" || !runtimeOrSupport) errors.push(`${entry.route}: fixed editorial cohort cannot be excluded by scope relabeling`);
        if (scope?.scopeStatus !== "non_editorial_scope" || !isText(scope.reason)) errors.push(`${entry.route}: non-editorial exclusion lacks scope evidence`);
      }
    }
    if (inventory.items.some(item => item.renderDependencyHash)) {
      const frozenRenderItems = indexEvidence(ledger.baseline.renderDependencyInventoryPath);
      for (const [route, item] of frozenRenderItems) {
        if (!isHash(item.renderDependencyHash)) errors.push(`${route}: invalid frozen render dependency hash`);
        else renderHashes.set(route, item.renderDependencyHash);
      }
      if (ledger.baseline.technicalDependencyReviewPath) {
        const reviewed = reconcileTechnicalRestoration(read(ledger.baseline.technicalDependencyReviewPath), ledger, inventory, frozenRenderItems);
        for (const [route, hash] of reviewed) renderHashes.set(route, hash);
      }
    }
  } catch (error) {
    errors.push(`baseline evidence is absent, unreadable, or invalid: ${error.message}`);
  }
  return { errors, renderHashes };
}

export function auditCurrentLedger(ledger, inventory, { routes = [], readEvidence, verifyBaseline = true } = {}) {
  const baseline = verifyBaseline ? validateBaselineEvidence(ledger, inventory, { readEvidence }) : { errors: [], renderHashes: new Map() };
  const changes = findChangedRoutes(ledger, inventory, { baselineRenderHashes: baseline.renderHashes });
  const revisionRoutes = Array.isArray(ledger?.entries) ? ledger.entries.filter((entry) => entry.status === "revision").map((entry) => entry.route) : [];
  const requiredRoutes = [...new Set([...changes.routes, ...revisionRoutes, ...routes])];
  const currentHashes = new Map((Array.isArray(inventory?.items) ? inventory.items : []).map((item) => [item.route, item.contentHash ?? item.sourceHash]));
  const result = auditLedger(ledger, { currentHashes, routes: requiredRoutes, readEvidence });
  const approvedRoutes = new Set((ledger?.entries ?? []).filter(entry => entry.status === "approved").map(entry => entry.route));
  const missingAssets = (inventory?.items ?? []).flatMap(item => Object.entries(item.reviewAssetHashes ?? {})
    .filter(([, value]) => value === "MISSING_LOCAL_ASSET")
    .map(([asset]) => ({ route: item.route, asset })));
  for (const { route, asset } of missingAssets) {
    if (approvedRoutes.has(route)) result.errors.push(`${route}: approved route references missing local asset ${asset}`);
  }
  result.errors.push(...changes.errors, ...baseline.errors);
  result.ok = result.errors.length === 0;
  const entries = Array.isArray(ledger?.entries) ? ledger.entries : [];
  const editorial = entries.filter(entry => entry.scopeStatus !== "non_editorial_scope");
  return { ...result, changedRoutes: changes.routes, requiredRoutes, untrackedRoutes: changes.untrackedRoutes, missingAssets,
    scopeSummary: { retainedRecords: entries.length, editorialRecords: editorial.length,
      nonEditorialRecords: entries.length - editorial.length,
      approvedEditorial: editorial.filter(entry => entry.status === "approved").length,
      pendingEditorial: editorial.filter(entry => entry.status !== "approved").length } };
}

function parseArgs(args) {
  const options = { ledgerPath: "docs/editorial/content-quality-ledger.json", routes: [] };
  for (let index = 0; index < args.length; index += 2) {
    const flag = args[index];
    const value = args[index + 1];
    if (!value || !["--ledger", "--current-inventory", "--routes"].includes(flag)) {
      throw new Error("Usage: node scripts/editorial/audit-content-review.mjs [--ledger path] [--current-inventory path] [--routes /blog/a,/blog/b]");
    }
    if (flag === "--ledger") options.ledgerPath = value;
    if (flag === "--current-inventory") options.inventoryPath = value;
    if (flag === "--routes") options.routes = value.split(",").map((route) => route.trim()).filter(Boolean);
  }
  return options;
}

function main() {
  const { ledgerPath, inventoryPath, routes } = parseArgs(process.argv.slice(2));
  const ledger = JSON.parse(fs.readFileSync(path.resolve(ledgerPath), "utf8"));
  // Keep the cohort fixed in the ledger, but evaluate newly public routes at the
  // current time so a future reservation cannot bypass review after publication.
  const inventory = inventoryPath ? JSON.parse(fs.readFileSync(path.resolve(inventoryPath), "utf8")) : buildInventory({ now: new Date().toISOString() }).inventory;
  if (!Array.isArray(inventory.items)) throw new Error("Current inventory requires an items array");
  const readEvidence = (evidencePath) => fs.readFileSync(path.resolve(evidencePath), "utf8");
  const result = auditCurrentLedger(ledger, inventory, { routes, readEvidence });
  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try { main(); } catch (error) { console.error(error.message); process.exitCode = 1; }
}
