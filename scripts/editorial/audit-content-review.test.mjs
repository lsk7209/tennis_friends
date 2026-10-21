import assert from "node:assert/strict";
import test from "node:test";
import { auditCurrentLedger as auditCurrentLedgerWithEvidence, auditLedger, findChangedRoutes, validateBaselineEvidence, validateReview } from "./audit-content-review.mjs";
import { hashValue } from "./build-existing-content-inventory.mjs";

const hash = "a".repeat(64);
const auditCurrentLedger = (record, inventory, options) => auditCurrentLedgerWithEvidence(record, inventory, { ...options, verifyBaseline: false });
const source = { official: true, url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/", checkedAt: "2026-10-20T10:00:00+09:00", claims: ["Rule applies to this format"] };

function approved(overrides = {}) {
  return {
    route: "/blog/test", author: "Writer A", status: "approved",
    after: { contentHash: hash, scores: { facts: 23, sources: 14, usefulness: 20, depth: 15, language: 10, intent: 10, accessibility: 5 }, score: 97, vetoes: [] },
    sources: [source],
    review: { reviewer: "Reviewer B", reviewedAt: "2026-10-20T12:00:00+09:00", verdict: "approved", evidencePath: "docs/reviews/test.md", contentHash: hash },
    ...overrides,
  };
}

function artifact(entry = approved()) {
  return { reviewer: entry.review.reviewer, checkedAt: entry.review.reviewedAt, items: [{ route: entry.route, contentHash: entry.after.contentHash, scores: entry.after.scores, total: entry.after.score, vetoes: [], verdict: "PASS", strengths: ["Fixture: verified official rule matches the scenario"], deductions: [
    { dimension: "facts", points: 2, location: "fixture paragraph 2", reason: "Fixture explanation omits a bounded example", fix: "Add a worked example" },
    { dimension: "sources", points: 1, location: "fixture source list", reason: "Fixture source lacks historical edition comparison", fix: "Compare the applicable editions" },
  ] }] };
}
const readEvidence = () => JSON.stringify(artifact());

const ledger = (entries) => ({ schemaVersion: 1, baseline: { inventoryPath: "inventory.json", baselineNow: "2026-10-20T00:00:00+09:00" }, entries });

test("a complete independent record with current hash passes", () => {
  assert.deepEqual(validateReview(approved(), hash, { readEvidence }), { ok: true, errors: [] });
});

test("missing local assets block approved routes while untouched pending assets remain visible debt", () => {
  const entry = approved({ kind: "blog", before: { contentHash: hash } });
  const item = { route: entry.route, contentHash: hash, reviewAssetHashes: { "/images/missing.webp": "MISSING_LOCAL_ASSET" } };
  const blocked = auditCurrentLedger(ledger([entry]), { items: [item] }, { readEvidence });
  assert.equal(blocked.ok, false);
  assert.match(blocked.errors.join(" "), /approved route references missing local asset/);
  const debt = auditCurrentLedger(ledger([{ ...entry, status: "pending" }]), { items: [item] });
  assert.equal(debt.ok, true);
  assert.deepEqual(debt.missingAssets, [{ route: entry.route, asset: "/images/missing.webp" }]);
  assert.equal(auditCurrentLedger(ledger([entry]), { items: [{ ...item, reviewAssetHashes: { "/images/missing.webp": hash } }] }, { readEvidence }).ok, true);
});

test("total 90 or above cannot offset a dimension below its floor", () => {
  const entry = approved();
  entry.after.scores.facts = 22;
  entry.after.scores.usefulness = 18;
  entry.after.scores.depth = 13;
  entry.after.scores.language = 8;
  entry.after.score = 90;
  assert.match(validateReview(entry, hash, { readEvidence }).errors.join(" "), /facts is below/);
});

test("veto, stale or missing current hash, and absent evidence fail", () => {
  assert.match(validateReview(approved({ after: { ...approved().after, vetoes: ["unverified medical claim"] } }), hash, { readEvidence }).errors.join(" "), /vetoes/);
  assert.match(validateReview(approved(), "b".repeat(64), { readEvidence }).errors.join(" "), /current content hash/);
  assert.match(validateReview(approved(), undefined, { readEvidence }).errors.join(" "), /current content hash/);
  assert.match(validateReview(approved(), hash, { readEvidence: () => "" }).errors.join(" "), /evidence is absent/);
});

test("scores require exact integer bounds and a matching total", () => {
  const outOfBounds = approved();
  outOfBounds.after.scores.accessibility = 6;
  assert.match(validateReview(outOfBounds, hash, { readEvidence }).errors.join(" "), /accessibility must be an integer from 0 to 5/);
  const fractional = approved();
  fractional.after.scores.facts = 23.5;
  assert.match(validateReview(fractional, hash, { readEvidence }).errors.join(" "), /facts must be an integer/);
  const mismatch = approved();
  mismatch.after.score = 90;
  assert.match(validateReview(mismatch, hash, { readEvidence }).errors.join(" "), /does not equal/);
});

test("author cannot approve own work and sources need official claim evidence", () => {
  const selfReview = approved({ review: { ...approved().review, reviewer: "writer a" } });
  assert.match(validateReview(selfReview, hash, { readEvidence }).errors.join(" "), /reviewer must differ/);
  const weakSource = approved({ sources: [{ ...source, official: false, claims: [] }] });
  assert.match(validateReview(weakSource, hash, { readEvidence }).errors.join(" "), /sources\[0\]/);
});

test("pending backlog is debt; explicitly selected route must be approved", () => {
  const pending = { route: "/blog/backlog", status: "pending" };
  const record = ledger([approved(), pending]);
  const options = { currentHashes: { "/blog/test": hash }, readEvidence };
  assert.deepEqual(auditLedger(record, options), { ok: true, errors: [], approved: 1, pending: 1, revision: 0 });
  const selected = auditLedger(record, { ...options, routes: ["/blog/backlog"] });
  assert.equal(selected.ok, false);
  assert.match(selected.errors.join(" "), /selected route is pending/);
  assert.match(auditLedger(record, { ...options, routes: ["/blog/absent"] }).errors.join(" "), /absent from ledger/);
});

test("unchanged player v1 baseline does not appear changed after v2 hash schema", () => {
  const searchSeo = { title: "Current player SEO" };
  const entry = { route: "/players/test", kind: "player", status: "pending", before: { contentHash: hash, searchSeoHash: hashValue(searchSeo) } };
  const inventory = { items: [{ route: entry.route, legacyContentHash: hash, contentHash: "b".repeat(64), searchSeo }] };
  assert.deepEqual(findChangedRoutes(ledger([entry]), inventory), { routes: [], errors: [], untrackedRoutes: [] });
});

test("present null player search SEO matches a frozen null baseline", () => {
  const entry = { route: "/players/no-override", kind: "player", status: "pending", before: { contentHash: hash, searchSeoHash: hashValue(null) } };
  const inventory = { items: [{ route: entry.route, legacyContentHash: hash, contentHash: "b".repeat(64), searchSeo: null }] };
  assert.deepEqual(findChangedRoutes(ledger([entry]), inventory), { routes: [], errors: [], untrackedRoutes: [] });
  delete inventory.items[0].searchSeo;
  assert.match(findChangedRoutes(ledger([entry]), inventory).errors.join(" "), /search SEO baseline is missing/);
});

test("SEO-only player change requires approval even when legacy content is unchanged", () => {
  const entry = { route: "/players/test", kind: "player", status: "pending", before: { contentHash: hash, searchSeoHash: hashValue({ title: "Old" }) } };
  const inventory = { items: [{ route: entry.route, legacyContentHash: hash, contentHash: "b".repeat(64), searchSeo: { title: "New" } }] };
  const changed = findChangedRoutes(ledger([entry]), inventory);
  assert.deepEqual(changed, { routes: [entry.route], errors: [], untrackedRoutes: [] });
  assert.match(auditCurrentLedger(ledger([entry]), inventory).errors.join(" "), /not approved/);
});

test("changed blog pending fails while an untouched blog remains debt", () => {
  const changed = { route: "/blog/changed", kind: "blog", status: "pending", before: { contentHash: hash } };
  const untouched = { route: "/blog/untouched", kind: "blog", status: "pending", before: { contentHash: hash } };
  const record = ledger([changed, untouched]);
  const inventory = { items: [{ route: changed.route, contentHash: "b".repeat(64) }, { route: untouched.route, contentHash: hash }] };
  const comparison = findChangedRoutes(record, inventory);
  assert.deepEqual(comparison, { routes: [changed.route], errors: [], untrackedRoutes: [] });
  const result = auditCurrentLedger(record, inventory);
  assert.equal(result.pending, 2);
  assert.match(result.errors.join(" "), /\/blog\/changed: selected route is pending/);
  assert.doesNotMatch(result.errors.join(" "), /\/blog\/untouched/);
});

test("baseline route missing from current inventory fails closed", () => {
  const entry = { route: "/blog/removed", kind: "blog", status: "pending", before: { contentHash: hash } };
  assert.match(auditCurrentLedger(ledger([entry]), { items: [] }).errors.join(" "), /baseline route missing/);
});

test("revision requires approval even if content hash matches baseline", () => {
  const entry = { route: "/blog/revision", kind: "blog", status: "revision", before: { contentHash: hash } };
  const result = auditCurrentLedger(ledger([entry]), { items: [{ route: entry.route, contentHash: hash }] });
  assert.deepEqual(result.changedRoutes, []);
  assert.deepEqual(result.requiredRoutes, [entry.route]);
  assert.match(result.errors.join(" "), /selected route is revision/);
});

test("review evidence must be parsed JSON for the exact reviewer, time, and route", () => {
  const entry = approved();
  assert.match(validateReview(entry, hash, { readEvidence: () => "not JSON" }).errors.join(" "), /invalid JSON/);
  assert.match(validateReview(entry, hash, { readEvidence: () => JSON.stringify({ ...artifact(), reviewer: "Other" }) }).errors.join(" "), /reviewer or checkedAt/);
  assert.match(validateReview(entry, hash, { readEvidence: () => JSON.stringify({ ...artifact(), checkedAt: "2026-10-21T12:00:00+09:00" }) }).errors.join(" "), /reviewer or checkedAt/);
  assert.match(validateReview(entry, hash, { readEvidence: () => JSON.stringify({ ...artifact(), items: [{ ...artifact().items[0], route: "/blog/other" }] }) }).errors.join(" "), /matching route item/);
});

test("stale hash, changed scores, changed total, veto, and HOLD in artifact reject approval", () => {
  const entry = approved();
  const errorsFor = (changes) => validateReview(entry, hash, { readEvidence: () => JSON.stringify({ ...artifact(), items: [{ ...artifact().items[0], ...changes }] }) }).errors.join(" ");
  assert.match(errorsFor({ contentHash: "b".repeat(64) }), /artifact contentHash/);
  assert.match(errorsFor({ scores: { ...entry.after.scores, facts: 24 } }), /artifact scores/);
  assert.match(errorsFor({ total: 96 }), /artifact total/);
  assert.match(errorsFor({ vetoes: ["unsafe claim"] }), /unresolved vetoes/);
  assert.match(errorsFor({ verdict: "HOLD_KEYBOARD_EVIDENCE" }), /verdict must be PASS/);
});

test("new published blog route fails while future and candidate routes are reported untracked", () => {
  const record = ledger([]);
  const inventory = { items: [
    { route: "/blog/new", kind: "blog", publication: "published" },
    { route: "/blog/future", kind: "blog", publication: "future_or_invalid_date" },
    { route: "/players/new", kind: "player", publication: "route_present_publication_unverified" },
  ] };
  const result = auditCurrentLedger(record, inventory);
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /new published blog route is absent/);
  assert.match(result.errors.join(" "), /new route candidate requires explicit editorial scope/);
  assert.deepEqual(result.untrackedRoutes, ["/blog/future"]);
});

test("scores alone cannot substitute for located editorial reasoning", () => {
  const entry=approved();
  for(const changes of [{strengths:[]},{deductions:[]},{deductions:[{dimension:'facts',points:3,location:'p2',reason:'Missing boundary',fix:'Add boundary'}]}]) {
    const record=artifact();Object.assign(record.items[0],changes);
    assert.equal(validateReview(entry,hash,{readEvidence:()=>JSON.stringify(record)}).ok,false);
  }
});

test("a new player or guide cannot silently bypass scope review", () => {
  for(const kind of ['player','tool_description_candidate','unclassified_page_candidate']) {
    const result=auditCurrentLedger(ledger([]),{items:[{route:'/new',kind,publication:'route_present_publication_unverified'}]});
    assert.equal(result.ok,false);
  }
});

test("frozen baseline and canonical reconciliation cannot be replaced by ledger overrides", () => {
  const record=ledger([{route:'/blog/test',before:{contentHash:hash,canonicalContentHash:'b'.repeat(64),canonicalHashEvidencePath:'reconciliation.json'}}]);
  const files={ 'inventory.json':{items:[{route:'/blog/test',contentHash:hash}]},'reconciliation.json':{items:[{route:'/blog/test',frozenRawHash:hash,currentRawHash:hash,canonicalHash:'b'.repeat(64)}]} };
  const readEvidence=p=>JSON.stringify(files[p]);
  assert.deepEqual(validateBaselineEvidence(record,{items:[]},{readEvidence}).errors,[]);
  record.entries[0].before.canonicalContentHash='c'.repeat(64);
  assert.match(validateBaselineEvidence(record,{items:[]},{readEvidence}).errors.join(' '),/canonical baseline override/);
  record.entries[0].before.contentHash='d'.repeat(64);
  assert.match(validateBaselineEvidence(record,{items:[]},{readEvidence}).errors.join(' '),/original before hash differs/);
});

test("only evidenced non-editorial exclusions avoid article review on app changes", () => {
  const record=ledger([{route:'/admin',scopeStatus:'non_editorial_scope',before:{contentHash:hash}}]);
  const inventory={items:[{route:'/admin',sourceHash:'b'.repeat(64)}]};
  assert.deepEqual(findChangedRoutes(record,inventory).routes,[]);
  record.entries[0].kind='unclassified_page_candidate';
  const files={'inventory.json':{items:[{route:'/admin',kind:'unclassified_page_candidate',sourceHash:hash}]},'scope.json':{items:[{route:'/admin',scopeStatus:'non_editorial_scope',reason:'Admin control surface, no editorial article'}]}};
  const readEvidence=p=>JSON.stringify(files[p]);
  assert.notEqual(validateBaselineEvidence(record,inventory,{readEvidence}).errors.length,0);
  record.baseline.scopeEvidencePath='scope.json';
  assert.deepEqual(validateBaselineEvidence(record,inventory,{readEvidence}).errors,[]);
});

test("supplemental cohorts cannot overwrite the frozen primary cohort", () => {
  const record=ledger([{route:'/blog/test',kind:'blog',before:{contentHash:'b'.repeat(64)}}]);
  record.baseline.additionalInventoryPaths=['extra.json'];
  const files={'inventory.json':{items:[{route:'/blog/test',kind:'blog',contentHash:hash}]},'extra.json':{items:[{route:'/blog/test',kind:'blog',contentHash:'b'.repeat(64)}]}};
  assert.match(validateBaselineEvidence(record,{items:[]},{readEvidence:p=>JSON.stringify(files[p])}).errors.join(' '),/Duplicate frozen baseline route/);
});

test("published articles cannot shrink the frozen cohort by relabeling scope", () => {
  const record=ledger([{route:'/blog/test',kind:'blog',scopeStatus:'non_editorial_scope',before:{contentHash:hash}}]);
  record.baseline.scopeEvidencePath='scope.json';
  const files={'inventory.json':{items:[{route:'/blog/test',kind:'blog',publication:'published',contentHash:hash}]},'scope.json':{items:[{route:'/blog/test',scopeStatus:'non_editorial_scope',reason:'Invented exclusion'}]}};
  assert.match(validateBaselineEvidence(record,{items:[]},{readEvidence:p=>JSON.stringify(files[p])}).errors.join(' '),/fixed editorial cohort cannot be excluded/);
});
