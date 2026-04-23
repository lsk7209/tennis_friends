#!/usr/bin/env node
/**
 * 30개 블로그에 동일한 FAQ 패턴이 있어 Scaled Content Abuse 시그널.
 *   Q1: "{주제}은 얼마나 자주 연습해야 하나요?" (답변 generic)
 *   Q2: "경기 중 갑자기 흔들릴 때는 무엇부터 점검해야 하나요?" (100% 동일)
 *
 * 조치: FAQ 배열을 빈 배열로 교체 + 빈 배열일 때 섹션 숨김.
 * 이 방식이 콘텐츠 자동 재생성보다 scaled abuse 리스크가 훨씬 낮음.
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "src", "app", "blog");

const TARGETS = [
  "tennis-approach-shot-guide",
  "tennis-adult-beginner-first-90-days",
  "tennis-backhand-return-guide",
  "tennis-clay-court-sliding-guide",
  "tennis-cold-weather-match-guide",
  "tennis-cooldown-stretching-routine",
  "tennis-doubles-net-player-guide",
  "tennis-doubles-serve-formation-guide",
  "tennis-forehand-depth-control-guide",
  "tennis-grass-court-movement-guide",
  "tennis-hard-court-recovery-guide",
  "tennis-hot-weather-match-guide",
  "tennis-hydration-electrolyte-guide",
  "tennis-junior-training-roadmap",
  "tennis-kick-serve-guide",
  "tennis-match-video-review-guide",
  "tennis-matchday-warmup-routine",
  "tennis-mental-reset-between-points",
  "tennis-partner-practice-drills",
  "tennis-practice-journal-guide",
  "tennis-return-positioning-by-surface",
  "tennis-second-serve-confidence-guide",
  "tennis-serve-plus-one-patterns",
  "tennis-sleep-recovery-guide",
  "tennis-slice-serve-guide",
  "tennis-split-step-timing-guide",
  "tennis-tiebreak-strategy-guide",
  "tennis-tournament-preparation-checklist",
  "tennis-unforced-error-reduction-guide",
  "tennis-wall-practice-guide",
];

let faqEmptied = 0;
let sectionHidden = 0;

for (const slug of TARGETS) {
  const file = path.join(BLOG_DIR, slug, "page.tsx");
  if (!fs.existsSync(file)) {
    console.log(`⚠️  skip ${slug} (file missing)`);
    continue;
  }
  let content = fs.readFileSync(file, "utf8");
  const before = content;

  // 1. "faq": [ ...entries... ] 배열을 빈 배열로 교체
  content = content.replace(
    /"faq":\s*\[[\s\S]*?\],(\s*"nextAction")/,
    '"faq": [],$1',
  );
  if (content !== before) faqEmptied++;

  // 2. FAQ 렌더 섹션을 조건부로 — content.faq.length > 0 가드 추가
  const sectionPattern =
    /<section className="mt-10">\s*<h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">자주 묻는 질문<\/h2>\s*<div className="space-y-4">\s*\{content\.faq\.map\(\(item\) => \(/;
  if (sectionPattern.test(content)) {
    content = content.replace(
      sectionPattern,
      `{content.faq.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">자주 묻는 질문</h2>
            <div className="space-y-4">
              {content.faq.map((item) => (`,
    );
    // 닫힘 태그도 처리: 기존 </section> 하나 추가 괄호 필요
    // </section>\s*\n\s*<div ... 뒤에 "}\n" 추가
    content = content.replace(
      /(\}\)\s*\}\s*<\/div>\s*<\/section>)(\s*<div className="mt-10 rounded-2xl bg-emerald-50)/,
      "$1\n        )}$2",
    );
    sectionHidden++;
  }

  if (content !== before) {
    fs.writeFileSync(file, content, "utf8");
    console.log(`✓ ${slug}`);
  }
}

console.log(`\n완료:`);
console.log(`  - FAQ 배열 비운 파일: ${faqEmptied}개`);
console.log(`  - 조건부 섹션 전환: ${sectionHidden}개`);
