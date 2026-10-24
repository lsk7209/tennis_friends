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

const reviewPath = `${root}/slowball-doubles-editorial-review.json`;
const review = read(reviewPath);
const packet = read(`${root}/next-slowball-doubles-sources.json`);
const proposal = read(`${root}/next-slowball-doubles-proposals.json`);

const { inventory } = buildInventory({ now: new Date().toISOString() });
assert.equal(review.items.length, 5);
assert.deepEqual(new Set(review.items.map((x) => x.route)), new Set(proposal.items.map((x) => x.route)));

for (const item of review.items) {
  assert.equal(item.verdict, "approved", `${item.route}: final independent pass required`);
  const current = inventory.items.find((x) => x.route === item.route);
  assert.equal(current?.contentHash, item.contentHash, `${item.route}: stale source review (got ${current?.contentHash}, expected ${item.contentHash})`);

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
      evidencePath: `${root}/next-slowball-doubles-sources.json`,
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
    evidencePath: reviewPath,
    contentHash: item.contentHash,
  };
  entry.checks = [
    {
      name: "local-body-viewport-keyboard",
      status: "passed",
      evidencePath: `${root}/slowball-doubles-local-validation.json`,
    },
    {
      name: "local-full-npm-verify",
      status: "passed",
      evidencePath: `${root}/slowball-doubles-full-verification.json`,
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

fs.mkdirSync(`${root}/source-backups`, { recursive: true });
const backupPath = `${root}/source-backups/ledger-before-slowball-doubles-approval-${sha(raw).slice(0, 12)}.json`;
fs.writeFileSync(backupPath, raw);

const targetBytes = Buffer.from(JSON.stringify(ledger, null, 2) + "\n", "utf8");
fs.writeFileSync(ledgerPath, targetBytes);

const approvedCount = ledger.entries.filter((x) => x.status === "approved").length;
const pendingCount = ledger.entries.filter((x) => x.status === "pending").length;

const summary = {
  reconciledAt: ledger.updatedAt,
  batchId: "slowball-doubles-5",
  evidencePath: reviewPath,
  approvedCount,
  pendingCount,
  routesApprovedToday: review.items.map((x) => ({
    route: x.route,
    score: x.total,
    contentHash: x.contentHash,
  })),
};

const summaryPath = `${root}/slowball-doubles-ledger-reconciliation.json`;
fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2) + "\n", "utf8");

console.log(JSON.stringify({
  status: "reconciled",
  approvedCount,
  pendingCount,
  backupPath,
  summaryPath,
}, null, 2));
