import fs from "node:fs";
import { createHash } from "node:crypto";

function hashText(text) {
  return createHash("sha256").update(text).digest("hex");
}

const proposalPath = ".goal-harness/content-90-20261020/next-court-club-proposals.json";
const proposalRaw = fs.readFileSync(proposalPath, "utf8");
const proposal = JSON.parse(proposalRaw);
const proposalHash = hashText(proposalRaw);

const filesChanged = [];
fs.mkdirSync(".goal-harness/content-90-20261020/source-backups", { recursive: true });

// 1. src/data/blog-content/part16-quality-rewrites.ts
{
  const file = "src/data/blog-content/part16-quality-rewrites.ts";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '"aw-074-court-beginner":';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '"aw-079-20":';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const entriesText = proposal.items.map(item => {
    const slug = item.slug;
    return `"${slug}": ${JSON.stringify(item.body, null, 2)},\n  `;
  }).join("");

  const updated = original.slice(0, startIdx) + entriesText + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  const backupPath = `.goal-harness/content-90-20261020/source-backups/court-club-src_data_blog-content_part16-quality-rewrites.ts-${beforeHash.slice(0, 12)}.txt`;
  fs.writeFileSync(backupPath, original, "utf8");

  filesChanged.push({
    file,
    backup: backupPath,
    beforeHash,
    afterHash,
    targetSlugs: proposal.items.map(i => i.slug)
  });
}

// 2. src/data/blog-posts-part16-overrides.js
{
  const file = "src/data/blog-posts-part16-overrides.js";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '{\n    "slug": "aw-074-court-beginner",';
  let startIdx = original.indexOf(startMarker);
  if (startIdx === -1) {
    // try CRLF or looser match
    const match = original.match(/\{\s*"slug":\s*"aw-074-court-beginner",/);
    if (match) startIdx = match.index;
  }

  const endMarker = '{\n    "slug": "aw-079-20",';
  let endIdx = original.indexOf(endMarker, startIdx);
  if (endIdx === -1) {
    const match = original.match(/\{\s*"slug":\s*"aw-079-20",/);
    if (match) endIdx = match.index;
  }

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const overridesText = proposal.items.map(item => {
    return JSON.stringify(item.metadata, null, 2) + ",\n  ";
  }).join("");

  const updated = original.slice(0, startIdx) + overridesText + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  const backupPath = `.goal-harness/content-90-20261020/source-backups/court-club-src_data_blog-posts-part16-overrides.js-${beforeHash.slice(0, 12)}.txt`;
  fs.writeFileSync(backupPath, original, "utf8");

  filesChanged.push({
    file,
    backup: backupPath,
    beforeHash,
    afterHash,
    targetSlugs: proposal.items.map(i => i.slug)
  });
}

const record = {
  integratedAt: new Date().toISOString(),
  proposalPath,
  proposalHash,
  filesChanged
};

fs.writeFileSync(
  ".goal-harness/content-90-20261020/court-club-integration.json",
  JSON.stringify(record, null, 2) + "\n"
);
console.log("Integration completed and recorded in .goal-harness/content-90-20261020/court-club-integration.json");
