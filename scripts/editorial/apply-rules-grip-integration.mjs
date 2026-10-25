import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";

function hashText(text) {
  return createHash("sha256").update(text).digest("hex");
}

const backupDir = ".goal-harness/content-90-20261020/source-backups";
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const proposalFile = ".goal-harness/content-90-20261020/next-rules-grip-proposals.json";
const proposals = JSON.parse(fs.readFileSync(proposalFile, "utf8"));

const filesChanged = [];

// 1. src/data/blog-content/part16-quality-rewrites.ts (aw-085, aw-086, aw-087, aw-088)
{
  const filePath = "src/data/blog-content/part16-quality-rewrites.ts";
  const original = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(original);

  const backupPath = path.join(backupDir, `rules-grip-src_data_blog-content_part16-quality-rewrites.ts-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, original, "utf8");

  const startMarker = '"aw-085-match-5":';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '"aw-090-tennis-guide":';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const items85to88 = proposals.items.filter(i => ["aw-085-match-5", "aw-086-grip-beginner", "aw-087-serve-record", "aw-088-club-doubles"].includes(i.slug));
  const newEntries = items85to88.map(item => {
    const entryObj = {
      content: item.body,
      tags: item.tags,
      summary: item.excerpt,
      highlight: `${item.title}의 핵심은 실전 상황에 맞는 단계별 판정 기준과 명확한 소통으로 불필요한 실수를 줄이는 것입니다.`,
      faq: [
        {
          question: `${item.title.split(":")[0]}에서 가장 중요한 핵심은 무엇인가요?`,
          answer: "원칙을 사전에 명확히 합의하고, 상황 발생 시 망설이지 않고 즉시 간결한 신호나 콜로 대응하는 것입니다."
        },
        {
          question: "초보자도 이 기준을 실전에 바로 적용할 수 있나요?",
          answer: "가능합니다. 한 번에 모든 것을 바꾸려 하지 말고 오늘 경기에서 점검할 기준 한 가지만 정해 집중하는 편이 안전합니다."
        },
        {
          question: "상황별 예외나 분쟁이 발생하면 어떻게 하나요?",
          answer: "공식 협회(ITF/USTA) 규칙과 매너 가이드에 따라 양측이 합의된 이전 상태로 복귀하거나 공식 규정을 존중해야 합니다."
        }
      ]
    };
    return `"${item.slug}": ${JSON.stringify(entryObj, null, 2)},\n  `;
  }).join("");

  const updated = original.slice(0, startIdx) + newEntries + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(filePath, updated, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: items85to88.map(i => i.slug)
  });
}

// 2. src/data/blog-posts-part16-overrides.js (aw-085, aw-086, aw-087, aw-088)
{
  const filePath = "src/data/blog-posts-part16-overrides.js";
  const original = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(original);

  const backupPath = path.join(backupDir, `rules-grip-src_data_blog-posts-part16-overrides.js-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, original, "utf8");

  const startMarker = '"slug": "aw-085-match-5"';
  const markerIdx = original.indexOf(startMarker);
  const startIdx = original.lastIndexOf('{', markerIdx);
  const endMarker = '"slug": "aw-090-tennis-guide"';
  const endMarkerIdx = original.indexOf(endMarker);
  const endIdx = original.lastIndexOf('{', endMarkerIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const items85to88 = proposals.items.filter(i => ["aw-085-match-5", "aw-086-grip-beginner", "aw-087-serve-record", "aw-088-club-doubles"].includes(i.slug));
  const newOverrides = items85to88.map(item => {
    return `{\n    "slug": "${item.slug}",\n    "title": "${item.title}",\n    "excerpt": "${item.excerpt}",\n    "category": "${item.category}",\n    "tags": ${JSON.stringify(item.tags)},\n    "readTime": "9분",\n    "updatedAt": "2026-10-25"\n  },\n  `;
  }).join("");

  const updated = original.slice(0, startIdx) + newOverrides + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(filePath, updated, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: items85to88.map(i => i.slug)
  });
}

// 3. src/data/blog-content/part11-article-writer-300.ts (aw-089-tennis-guide)
{
  const filePath = "src/data/blog-content/part11-article-writer-300.ts";
  const original = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(original);

  const backupPath = path.join(backupDir, `rules-grip-src_data_blog-content_part11-article-writer-300.ts-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, original, "utf8");

  const startMarker = '"aw-089-tennis-guide":';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '"aw-090-tennis-guide":';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const item89 = proposals.items.find(i => i.slug === "aw-089-tennis-guide");
  const entry89Obj = {
    content: item89.body,
    tags: item89.tags,
    summary: item89.excerpt,
    highlight: "스플릿스텝의 핵심은 단순한 점프가 아닌 체중 무중력화와 앞꿈치(전족부) 착지를 통해 무릎 관절로 전달되는 충격을 분산시키는 것입니다.",
    faq: [
      {
        question: "스플릿스텝 착지 시 무릎에 가해지는 충격을 줄이려면 어떻게 해야 하나요?",
        answer: "뒤꿈치로 쿵 착지하지 않고 발볼(앞꿈치)로 부드럽게 지면을 딛으며 고관절과 무릎을 동시에 살짝 굽혀 충격을 완충해야 합니다."
      },
      {
        question: "하드코트에서 뛸 때 무릎 통증이 더 심해질 수 있나요?",
        answer: "네, 충격 흡수력이 낮은 하드코트에서는 전족부 착지와 적절한 쿠셔닝 테니스화 착용이 필수적입니다."
      },
      {
        question: "스플릿스텝 후 통증이 느껴지면 어떻게 대처해야 하나요?",
        answer: "통증이나 붓기가 발생하면 즉시 플레이를 중단하고 휴식을 취해야 하며, 증상이 지속되면 정형외과 전문의의 진료를 받아야 합니다."
      }
    ]
  };

  const newEntry89 = `"aw-089-tennis-guide": ${JSON.stringify(entry89Obj, null, 2)},\n  `;
  const updated = original.slice(0, startIdx) + newEntry89 + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(filePath, updated, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-089-tennis-guide"]
  });
}

// 4. src/data/blog-posts-aw-300.js (aw-089-tennis-guide)
{
  const filePath = "src/data/blog-posts-aw-300.js";
  const original = fs.readFileSync(filePath, "utf8");
  const beforeHash = hashText(original);

  const backupPath = path.join(backupDir, `rules-grip-src_data_blog-posts-aw-300.js-${beforeHash.slice(0, 12)}.txt`);
  fs.writeFileSync(backupPath, original, "utf8");

  const startMarker = '"aw-089-tennis-guide"';
  const markerIdx = original.indexOf(startMarker);
  const startIdx = original.lastIndexOf('{', markerIdx);
  const endMarker = '"aw-090-tennis-guide"';
  const endMarkerIdx = original.indexOf(endMarker);
  const endIdx = original.lastIndexOf('{', endMarkerIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${filePath}`);
  }

  const item89 = proposals.items.find(i => i.slug === "aw-089-tennis-guide");
  const newPost89 = `{\n    "id": "aw-089-tennis-guide",\n    "slug": "aw-089-tennis-guide",\n    "tags": ${JSON.stringify(item89.tags, null, 6).replace(/\n/g, '\n    ')},\n    "title": "${item89.title}",\n    "excerpt": "${item89.excerpt}",\n    "badge": "부상 예방",\n    "category": "${item89.category}",\n    "date": "2026-05-15",\n    "readTime": "8분",\n    "badgeColor": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",\n    "categoryColor": "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",\n    "updatedAt": "2026-10-25"\n  },\n  `;

  const updated = original.slice(0, startIdx) + newPost89 + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(filePath, updated, "utf8");
  console.log(`Updated ${filePath}: ${beforeHash.slice(0, 12)} -> ${afterHash.slice(0, 12)}`);

  filesChanged.push({
    file: filePath,
    backup: backupPath,
    beforeHash,
    afterHash,
    slugs: ["aw-089-tennis-guide"]
  });
}

const summaryPath = ".goal-harness/content-90-20261020/rules-grip-integration.json";
fs.writeFileSync(summaryPath, JSON.stringify({
  appliedAt: new Date().toISOString(),
  batchId: proposals.batchId,
  filesChanged
}, null, 2) + "\n", "utf8");
console.log(`Wrote integration summary to ${summaryPath}`);
