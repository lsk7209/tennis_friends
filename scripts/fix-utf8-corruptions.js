#!/usr/bin/env node
/**
 * UTF-8 손상 문자(���, ��) 컨텍스트 기반 복원 — 2차 패스.
 * 1차 패스에서 놓친 잔여 손상 포함.
 */
const fs = require("fs");
const path = require("path");

const FIXES = {
  "tennis-beginner-first-month/page.tsx": [
    ["포핸드 스트로크 연���</h3>", "포핸드 스트로크 연습</h3>"],
  ],
  "tennis-clay-court-tactics/page.tsx": [
    [
      "바운드가 느리고 높게 뜨는 특성이 있습���다",
      "바운드가 느리고 높게 뜨는 특성이 있습니다",
    ],
    [
      "가장 큰 특징 중 하나는 슬라이딩���니다",
      "가장 큰 특징 중 하나는 슬라이딩입니다",
    ],
  ],
  "tennis-fitness-training-guide/page.tsx": [
    ["면밀히 파악하여 ���리하지 않는", "면밀히 파악하여 무리하지 않는"],
  ],
  "tennis-doubles-communication/page.tsx": [
    ["복식 경��는 개인의 기량", "복식 경기는 개인의 기량"],
    ["포메이션을 기���으로 경기를", "포메이션을 기준으로 경기를"],
  ],
  "tennis-injury-prevention-stretching/page.tsx": [
    ["스��레칭은 단순히", "스트레칭은 단순히"],
  ],
  "tennis-grass-court-strategy/page.tsx": [
    ["공이 잔디에 닿��면 스핀", "공이 잔디에 닿으면 스핀"],
    ["즉시 네트로 달려들�� 발리", "즉시 네트로 달려들어 발리"],
  ],
  "tennis-serve-and-volley-tactics/page.tsx": [
    ["서브가 상대방 코��에 도달", "서브가 상대방 코트에 도달"],
  ],
  "tennis-lob-shot-guide/page.tsx": [
    ["주의해야 할 점은 ���무 낮은 로브", "주의해야 할 점은 너무 낮은 로브"],
  ],
  "tennis-return-of-serve-guide/page.tsx": [
    ["리턴 게임에서의 ��공은 곧", "리턴 게임에서의 성공은 곧"],
  ],
  "tennis-string-tension-selection/page.tsx": [
    ["방지하기 위해 정기적��� 교체가", "방지하기 위해 정기적인 교체가"],
    ["파워가 부족하다��� 텐션을", "파워가 부족하다면 텐션을"],
  ],
  "tennis-kick-serve-technique/page.tsx": [
    ["공의 옆면을 라켓으로 강���게 긁어", "공의 옆면을 라켓으로 강하게 긁어"],
  ],
};

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");

let totalFiles = 0;
let totalFixes = 0;
const failed = [];

for (const [relPath, patterns] of Object.entries(FIXES)) {
  const fullPath = path.join(BLOG_DIR, relPath);
  if (!fs.existsSync(fullPath)) continue;
  let content = fs.readFileSync(fullPath, "utf8");
  const before = content;
  let fileFixes = 0;
  for (const [wrong, right] of patterns) {
    if (content.includes(wrong)) {
      content = content.split(wrong).join(right);
      fileFixes++;
    } else {
      failed.push(`${relPath}: "${wrong.replace(/�/g, "?")}"`);
    }
  }
  if (content !== before) {
    fs.writeFileSync(fullPath, content, "utf8");
    totalFiles++;
    totalFixes += fileFixes;
    console.log(`✓ ${relPath} — ${fileFixes}개 복원`);
  }
}

console.log(`\n2차 완료: ${totalFiles}개 파일, ${totalFixes}개 손상 복원.`);
if (failed.length) {
  console.log(`\n⚠️  매치 실패 ${failed.length}건:`);
  failed.forEach((p) => console.log("  " + p));
}
