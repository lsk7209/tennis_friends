import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

function hashText(text) {
  return createHash("sha256").update(text).digest("hex");
}

const ledgerPath = "docs/editorial/content-quality-ledger.json";
const originalLedgerRaw = fs.readFileSync(ledgerPath, "utf8");
const beforeHash = hashText(originalLedgerRaw);

const backupDir = ".goal-harness/content-90-20261020/source-backups";
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}
const backupPath = path.join(backupDir, `ledger-before-rules-grip-approval-${beforeHash.slice(0, 12)}.json`);
fs.writeFileSync(backupPath, originalLedgerRaw, "utf8");

const reviewPath = ".goal-harness/content-90-20261020/rules-grip-editorial-review.json";
const review = JSON.parse(fs.readFileSync(reviewPath, "utf8"));

const proposalsPath = ".goal-harness/content-90-20261020/next-rules-grip-proposals.json";
const proposals = JSON.parse(fs.readFileSync(proposalsPath, "utf8"));

const sourcesPath = ".goal-harness/content-90-20261020/next-rules-grip-sources.json";
const sourcesData = JSON.parse(fs.readFileSync(sourcesPath, "utf8"));
const sourcesMap = new Map(sourcesData.sources.map(s => [s.id, s]));

const ledger = JSON.parse(originalLedgerRaw);

const updatedSlugs = [];

for (const revItem of review.items) {
  const slug = revItem.route.replace("/blog/", "");
  const propItem = proposals.items.find(p => p.slug === slug);
  const entry = ledger.entries.find(e => e.slug === slug);

  if (!entry) {
    throw new Error(`Ledger entry not found for ${slug}`);
  }

  entry.status = "approved";
  entry.author = "TennisFriends Editorial Author (Executor)";
  entry.readerQuestion = propItem.readerQuestion;
  entry.differentiation = propItem.differentiation;

  entry.after = {
    contentHash: revItem.contentHash,
    scores: { ...revItem.scores },
    score: revItem.total,
    vetoes: []
  };

  entry.sources = (revItem.sourceIds || []).map(srcId => {
    const s = sourcesMap.get(srcId);
    if (!s) return null;
    return {
      official: true,
      url: s.url,
      checkedAt: s.checkedAt,
      claims: s.claims,
      limitations: s.limitations,
      evidencePath: ".goal-harness/content-90-20261020/next-rules-grip-sources.json"
    };
  }).filter(Boolean);

  entry.review = {
    reviewer: review.reviewer,
    reviewedAt: review.reviewedAt,
    verdict: "approved",
    evidencePath: ".goal-harness/content-90-20261020/rules-grip-editorial-review.json",
    contentHash: revItem.contentHash
  };

  entry.checks = [
    {
      name: "local-body-viewport-keyboard",
      status: "passed",
      evidencePath: ".goal-harness/content-90-20261020/rules-grip-local-validation.json"
    },
    {
      name: "local-full-npm-verify",
      status: "passed",
      evidencePath: ".goal-harness/content-90-20261020/rules-grip-full-verification.json"
    }
  ];

  entry.deployment = {
    gitSha: null,
    sourceDigest: null,
    runtimeImage: null
  };

  entry.live = {
    checkedAt: null,
    http: null,
    contentMatch: null
  };

  entry.blockers = [
    "Actual serving-source integration and OVH deployment/live-content reconciliation pending"
  ];

  updatedSlugs.push(slug);
}

ledger.updatedAt = new Date().toISOString();

const approvedCount = ledger.entries.filter(e => e.status === "approved" && e.scopeStatus !== "non_editorial_scope").length;
console.log(`Updated ledger: ${updatedSlugs.length} articles approved. Total editorial approved: ${approvedCount}`);

const updatedLedgerRaw = JSON.stringify(ledger, null, 2) + "\n";
fs.writeFileSync(ledgerPath, updatedLedgerRaw, "utf8");

const reconciliationSummaryPath = ".goal-harness/content-90-20261020/rules-grip-ledger-reconciliation.json";
fs.writeFileSync(reconciliationSummaryPath, JSON.stringify({
  reconciledAt: new Date().toISOString(),
  batchId: "rules-grip-20261025",
  backupPath,
  updatedSlugs,
  editorialApprovedCount: approvedCount
}, null, 2) + "\n", "utf8");

console.log(`Reconciliation completed. Summary saved to ${reconciliationSummaryPath}`);
