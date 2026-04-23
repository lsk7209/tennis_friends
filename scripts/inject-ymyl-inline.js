#!/usr/bin/env node
/**
 * Article 컴포넌트를 사용하지 않는 YMYL 블로그 8개에
 * YmylDisclaimer 컴포넌트를 JSX로 직접 주입.
 *
 * 삽입 전략: 최초 </h1> 바로 다음에 배치.
 * import 문은 기존 import 블록 끝에 추가.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");

const TARGETS = {
  "tennis-injury-prevention-stretching": "medical",
  "tennis-elbow-prevention-guide": "medical",
  "tennis-hydration-electrolyte-guide": "nutrition",
  "tennis-cooldown-stretching-routine": "fitness",
  "tennis-sleep-recovery-guide": "fitness",
  "tennis-fitness-training-guide": "fitness",
  "tennis-hot-weather-match-guide": "medical",
  "tennis-cold-weather-match-guide": "medical",
};

const IMPORT_LINE = `import YmylDisclaimer from "@/components/YmylDisclaimer";`;

let updated = 0;
const skipped = [];

for (const [slug, topic] of Object.entries(TARGETS)) {
  const file = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(file)) {
    skipped.push(`${slug} (file missing)`);
    continue;
  }
  let content = fs.readFileSync(file, "utf8");
  const before = content;

  // 이미 주입됐으면 스킵
  if (content.includes("YmylDisclaimer")) {
    skipped.push(`${slug} (이미 주입됨)`);
    continue;
  }

  // 1. import 추가 — 마지막 import 뒤에
  const importMatch = content.match(/((?:^import[^\n]+\n)+)/m);
  if (!importMatch) {
    skipped.push(`${slug} (import 블록 없음)`);
    continue;
  }
  const lastImportEnd = importMatch.index + importMatch[0].length;
  content =
    content.slice(0, lastImportEnd) +
    IMPORT_LINE +
    "\n" +
    content.slice(lastImportEnd);

  // 2. 첫 </h1> 뒤에 JSX 주입
  const h1Close = content.indexOf("</h1>");
  if (h1Close === -1) {
    skipped.push(`${slug} (</h1> 없음)`);
    continue;
  }
  const insertAt = h1Close + "</h1>".length;
  const inject = `\n        <YmylDisclaimer topic="${topic}" />`;
  content = content.slice(0, insertAt) + inject + content.slice(insertAt);

  if (content !== before) {
    fs.writeFileSync(file, content, "utf8");
    updated++;
    console.log(`✓ ${slug} — topic="${topic}"`);
  }
}

console.log(`\n완료: ${updated}개 파일 주입.`);
if (skipped.length) {
  console.log(`\n⚠️  스킵:`);
  skipped.forEach((s) => console.log("  " + s));
}
