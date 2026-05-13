import fs from "node:fs";
import path from "node:path";

const [,, titlesPath, outDir, startArg = "1", countArg = "100"] = process.argv;

if (!titlesPath || !outDir) {
  console.error("Usage: node scripts/prepare-article-batch.mjs <titles.jsonl> <outDir> [start] [count]");
  process.exit(2);
}

const start = Number.parseInt(startArg, 10);
const count = Number.parseInt(countArg, 10);

if (!Number.isInteger(start) || !Number.isInteger(count) || start < 1 || count < 1) {
  console.error("start/count must be positive integers");
  process.exit(2);
}

const rows = fs
  .readFileSync(titlesPath, "utf8")
  .split(/\r?\n/)
  .filter(Boolean)
  .map((line) => JSON.parse(line));

const selected = rows.slice(start - 1, start - 1 + count);
const batchId = `batch-${String(start).padStart(3, "0")}-${String(start + selected.length - 1).padStart(3, "0")}`;

const knownStatus = new Map([
  [1, "queued"],
  [2, "reroll_required"],
]);

const knownSlugs = new Map([
  [1, "tennis-beginner-30day-practice-order"],
  [2, "tennis-beginner-court-etiquette-five-rules"],
]);

const items = selected.map((row, index) => {
  const id = start + index;
  return {
    id,
    title: row.title,
    longTail: row.long_tail,
    pattern: row.pattern,
    persona: row.persona,
    slug: knownSlugs.get(id) || null,
    status: knownStatus.get(id) || "pending_research",
    gates: {
      research: id === 1 || id === 2 ? "done" : "pending",
      draft: id === 1 || id === 2 ? "done" : "pending",
      cliche: id === 1 ? "pass" : id === 2 ? "pass" : "pending",
      dedup: id === 1 ? "pass" : id === 2 ? "fail" : "pending",
      queued: id === 1 ? "yes" : "no",
    },
  };
});

const batch = {
  batchId,
  range: { start, end: start + selected.length - 1, count: selected.length },
  policy: {
    mode: "100-title batch orchestration",
    noTemplateWriting: true,
    perArticleFlow: "Researcher -> Writer -> Editor 13 gate",
    publishRule: "Only articles passing length, cliche, dedup, source, and build checks are queued.",
  },
  items,
};

fs.mkdirSync(path.join(outDir, "batches"), { recursive: true });
const batchPath = path.join(outDir, "batches", `${batchId}.json`);
fs.writeFileSync(batchPath, `${JSON.stringify(batch, null, 2)}\n`, "utf8");

const queueState = {
  activeBatch: batchId,
  totalTitles: rows.length,
  batchSize: count,
  completedQueued: items.filter((item) => item.status === "queued").length,
  rerollRequired: items.filter((item) => item.status === "reroll_required").map((item) => item.id),
  pendingResearch: items.filter((item) => item.status === "pending_research").length,
  nextAction: "Reroll item 2 with seed_bump=1, then continue item 3 onward.",
};

fs.writeFileSync(path.join(outDir, "queue-state.json"), `${JSON.stringify(queueState, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ batchPath, queueState }, null, 2));
