#!/usr/bin/env node
/**
 * YMYL 블로그 12개에 ymylTopic prop 자동 주입.
 *
 * Article 컴포넌트가 ymylTopic prop을 받도록 확장됐기 때문에
 * <Article title=... /> 에 주제별 topic을 추가하면 자동으로 disclaimer 노출.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");

// slug → YMYL topic 매핑
const YMYL_MAP = {
  "tennis-injury-prevention-full-guide": "medical",
  "tennis-injury-prevention-recovery": "medical",
  "tennis-injury-prevention-stretching": "medical", // 구조 달라서 skip, 수동 처리
  "tennis-elbow-prevention-guide": "medical",
  "tennis-wrist-knee-pain-care": "medical",
  "tennis-post-exercise-nutrition": "nutrition",
  "tennis-hydration-electrolyte-guide": "nutrition", // 구조 달라서 skip
  "tennis-cooldown-stretching-routine": "fitness",
  "tennis-sleep-recovery-guide": "fitness",
  "tennis-fitness-training-guide": "fitness",
  "tennis-hot-weather-match-guide": "medical",
  "tennis-cold-weather-match-guide": "medical",
};

let updated = 0;
let skipped = [];

for (const [slug, topic] of Object.entries(YMYL_MAP)) {
  const file = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(file)) {
    skipped.push(`${slug} (file missing)`);
    continue;
  }
  let content = fs.readFileSync(file, "utf8");
  const before = content;

  // <Article 컴포넌트 사용 여부 확인
  if (!content.includes("<Article ")) {
    skipped.push(`${slug} (Article 컴포넌트 미사용)`);
    continue;
  }

  // 이미 ymylTopic 있으면 스킵
  if (content.includes("ymylTopic=")) {
    skipped.push(`${slug} (이미 ymylTopic 있음)`);
    continue;
  }

  // <Article title="..." ...> 패턴에 ymylTopic 추가
  // title=... 다음, 또는 마지막 prop 뒤에 추가
  content = content.replace(/(<Article\s+)/, `$1ymylTopic="${topic}"\n      `);

  if (content !== before) {
    fs.writeFileSync(file, content, "utf8");
    updated++;
    console.log(`✓ ${slug} — ymylTopic="${topic}"`);
  }
}

console.log(`\n완료: ${updated}개 파일 주입.`);
if (skipped.length) {
  console.log(`\n⚠️  스킵 ${skipped.length}건:`);
  skipped.forEach((s) => console.log("  " + s));
}
