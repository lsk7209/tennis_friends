import fs from "node:fs";
import crypto from "node:crypto";
import assert from "node:assert/strict";
import { buildInventory } from "./build-existing-content-inventory.mjs";
import { validateReview } from "./audit-content-review.mjs";

const root = ".goal-harness/content-90-20261020";
const read = (p) => JSON.parse(fs.readFileSync(p, "utf8").replace(/^\uFEFF/, ""));
const sha = (bytes) => crypto.createHash("sha256").update(bytes).digest("hex");
const ledgerPath = "docs/editorial/content-quality-ledger.json";
const raw = fs.readFileSync(ledgerPath);
const before = JSON.parse(raw);
const ledger = structuredClone(before);

const review = read(`${root}/warmup-club-editorial-review.json`);
const packet = read(`${root}/next-warmup-club-sources.json`);
const proposal = read(`${root}/next-warmup-club-proposals.json`);
const integration = read(`${root}/warmup-club-integration.json`);
const indexBaseline = read(`${root}/warmup-club-indexability-baseline.json`);

assert.equal(sha(fs.readFileSync(indexBaseline.source)), indexBaseline.sourceSha256);
const expectedIndex = new Map(indexBaseline.items.map((item) => [item.route, item.effectiveIndexable]));
assert.equal(expectedIndex.size, 5);

const { inventory } = buildInventory({ now: before.baseline.baselineNow });
assert.equal(review.items.length, 5);
assert.deepEqual(new Set(review.items.map((x) => x.route)), new Set(proposal.items.map((x) => x.route)));
assert.equal(sha(fs.readFileSync(`${root}/next-warmup-club-proposals.json`)), integration.proposalHash);

for (const file of integration.files) {
  assert.equal(sha(fs.readFileSync(file.file)), file.afterHash);
}

for (const item of review.items) {
  assert.equal(item.verdict, "approved", `${item.route}: final independent pass required`);
  const current = inventory.items.find((x) => x.route === item.route);
  assert.equal(current?.contentHash, item.contentHash, `${item.route}: stale source review`);
  assert.equal(current.effectiveIndexable, expectedIndex.get(item.route));

  const entry = ledger.entries.find((x) => x.route === item.route);
  assert.ok(entry, `${item.route} must exist in ledger`);
  assert.ok(["pending", "revision"].includes(entry.status));

  entry.author = "TennisFriends Editorial Author (Executor)";
  entry.readerQuestion = item.readerQuestion;
  entry.differentiation = proposal.items.find((x) => x.route === item.route).differentiation;
  assert.ok(entry.differentiation?.length > 0);

  const mappedSources = packet.sources
    .filter((x) => x.routeMappings.includes(item.route))
    .map((x) => ({
      official: true,
      url: x.url,
      checkedAt: x.checkedAtUtc,
      claims: [x.actualReadClaim],
      limitations: x.limits ?? "",
      evidencePath: `${root}/next-warmup-club-sources.json`,
    }));
  assert.ok(mappedSources.length > 0);
  entry.sources = mappedSources;

  entry.status = "approved";
  entry.after = {
    contentHash: item.contentHash,
    scores: item.scores,
    score: item.total,
    vetoes: item.vetoes,
  };
  entry.review = {
    reviewer: review.reviewer,
    reviewedAt: review.checkedAt,
    verdict: "approved",
    evidencePath: `${root}/warmup-club-editorial-review.json`,
    contentHash: item.contentHash,
  };
  entry.checks = [
    {
      name: "local-body-viewport-keyboard",
      status: "passed",
      evidencePath: `${root}/warmup-club-local-validation.json`,
    },
    {
      name: "local-full-npm-verify",
      status: "passed",
      evidencePath: `${root}/warmup-club-full-verification.json`,
    },
  ];
  entry.blockers = [
    "Actual serving-source integration and OVH deployment/live-content reconciliation pending",
  ];

  const result = validateReview(entry, current.contentHash, {
    readEvidence: (p) => fs.readFileSync(p, "utf8"),
  });
  assert.equal(result.ok, true, JSON.stringify(result.errors));
}

const changed = new Set(review.items.map((x) => x.route));
assert.equal(ledger.entries.length, before.entries.length);

for (const old of before.entries) {
  if (!changed.has(old.route)) {
    assert.deepEqual(ledger.entries.find((x) => x.route === old.route), old);
  }
}

for (const [key, value] of Object.entries(before)) {
  if (!["entries", "updatedAt"].includes(key)) {
    assert.deepEqual(ledger[key], value);
  }
}

ledger.updatedAt = new Date().toISOString();
const backup = `${root}/source-backups/ledger-before-warmup-club-approval-${sha(raw).slice(0, 12)}.json`;
if (!fs.existsSync(backup)) fs.writeFileSync(backup, raw, { flag: "wx" });
assert.deepEqual(fs.readFileSync(backup), raw);
assert.deepEqual(fs.readFileSync(ledgerPath), raw, "Concurrent ledger change; retry with fresh state");

fs.writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + "\n");

const result = {
  checkedAt: ledger.updatedAt,
  routes: [...changed],
  backup,
  entriesPreserved: ledger.entries.length,
  dailyArticlesPreserved: (ledger.articles ?? []).length,
  approved: ledger.entries.filter((x) => x.status === "approved").length,
  pending: ledger.entries.filter((x) => x.status === "pending").length,
  servingDeployment: "pending",
};

fs.writeFileSync(`${root}/warmup-club-ledger-reconciliation.json`, JSON.stringify(result, null, 2) + "\n");
console.log("Successfully reconciled ledger:", JSON.stringify(result, null, 2));
