#!/usr/bin/env node

import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();
const TARGET = join(ROOT, "src", "data", "blog-content", "part1.ts");

const briefs = {
  "tennis-club-selection-guide": {
    links: [
      ["/utility/training-planner", "주간 훈련 계획"],
      ["/utility/practice-drill-generator", "연습 드릴 생성기"],
    ],
    sentence:
      "클럽을 고를 때는 시설 조건만 보지 말고 실제로 꾸준히 나갈 수 있는 훈련 리듬까지 확인해야 합니다.",
  },
  "tennis-backhand-crosscourt": {
    links: [
      ["/utility/shot-selection-trainer", "샷 선택 훈련"],
      ["/utility/unforced-error-audit", "실수 패턴 점검"],
    ],
    sentence:
      "백핸드 크로스코트는 각도보다 반복되는 선택 기준과 실수 방향을 함께 봐야 안정됩니다.",
  },
  "tennis-backhand-slice-low-ball": {
    links: [
      ["/utility/shot-selection-trainer", "낮은 공 샷 선택"],
      ["/utility/unforced-error-audit", "에러 원인 기록"],
    ],
    sentence:
      "낮은 공 슬라이스는 공격 전환보다 먼저 안전한 선택지와 실패 원인을 분리해야 합니다.",
  },
  "tennis-baseline-rally-strategy": {
    links: [
      ["/utility/rally-consistency-tracker", "랠리 일관성 기록"],
      ["/utility/unforced-error-audit", "언포스드 에러 점검"],
    ],
    sentence:
      "베이스라인 랠리는 강한 한 방보다 같은 기준으로 깊이와 방향을 반복하는지가 핵심입니다.",
  },
  "tennis-coach-selection-guide": {
    links: [
      ["/utility/training-planner", "레슨 목표 정리"],
      ["/utility/practice-drill-generator", "복습 드릴 구성"],
    ],
    sentence:
      "코치를 선택할 때는 레슨 설명보다 수업 뒤 혼자 반복할 과제가 분명한지를 확인해야 합니다.",
  },
  "tennis-error-reduction-guide": {
    links: [
      ["/utility/unforced-error-audit", "실수 원인 감사"],
      ["/utility/shot-selection-trainer", "상황별 샷 선택"],
    ],
    sentence:
      "에러를 줄이려면 기술 이름보다 언제 같은 판단이 반복해서 무너지는지 기록해야 합니다.",
  },
  "tennis-forehand-down-the-line": {
    links: [
      ["/utility/shot-selection-trainer", "다운더라인 선택 훈련"],
      ["/utility/rally-consistency-tracker", "랠리 성공률 기록"],
    ],
    sentence:
      "포핸드 다운더라인은 코스 욕심보다 준비 위치와 이전 랠리 흐름이 맞을 때 선택해야 합니다.",
  },
  "tennis-forehand-inside-in-guide": {
    links: [
      ["/utility/shot-selection-trainer", "인사이드인 판단 훈련"],
      ["/utility/unforced-error-audit", "위험 샷 기록"],
    ],
    sentence:
      "인사이드인 포핸드는 각도와 타이밍이 모두 맞는 순간만 고르는 편이 실전 성공률을 높입니다.",
  },
  "tennis-hot-weather-performance": {
    links: [
      ["/utility/weather-check", "더운 날씨 체크"],
      ["/utility/hydration-planner", "수분 보충 계획"],
    ],
    sentence:
      "더운 날 경기력은 기술보다 체온, 수분, 휴식 간격을 먼저 관리할 때 흔들림이 줄어듭니다.",
  },
  "tennis-match-flow-reading": {
    links: [
      ["/utility/match-analyzer", "경기 흐름 분석"],
      ["/utility/shot-selection-trainer", "포인트별 선택 점검"],
    ],
    sentence:
      "경기 흐름을 읽을 때는 분위기보다 직전 포인트에서 반복된 선택과 상대 반응을 기록해야 합니다.",
  },
  "tennis-night-match-tips": {
    links: [
      ["/utility/court-conditions", "야간 코트 조건 점검"],
      ["/utility/weather-check", "경기 전 날씨 확인"],
    ],
    sentence:
      "야간 경기는 조명과 공의 높이가 다르게 느껴지므로 코트 조건을 먼저 분리해서 확인해야 합니다.",
  },
  "tennis-ntrp-25-to-30-guide": {
    links: [
      ["/utility/ntrp-test", "NTRP 현재 위치 확인"],
      ["/utility/training-planner", "초급 탈출 훈련 계획"],
    ],
    sentence:
      "NTRP 2.5에서 3.0으로 올라가려면 새 기술보다 같은 준비 동작을 반복하는 계획이 필요합니다.",
  },
  "tennis-ntrp-30-to-35-guide": {
    links: [
      ["/utility/ntrp-test", "NTRP 단계 점검"],
      ["/utility/match-recorder", "경기 기록"],
    ],
    sentence:
      "NTRP 3.0 이후에는 레슨 감각보다 실제 경기에서 어떤 실수가 반복되는지 남겨야 합니다.",
  },
  "tennis-ntrp-35-to-40-guide": {
    links: [
      ["/utility/ntrp-test", "NTRP 3.5-4.0 점검"],
      ["/utility/match-analyzer", "전술 패턴 분석"],
    ],
    sentence:
      "NTRP 3.5에서 4.0으로 가는 구간은 기술 수보다 포인트 운영 기준이 안정적인지가 갈립니다.",
  },
  "tennis-rainy-weather-tips": {
    links: [
      ["/utility/weather-check", "비 예보 확인"],
      ["/utility/court-conditions", "젖은 코트 점검"],
    ],
    sentence:
      "비 오는 날에는 샷을 세게 고치기보다 미끄러짐, 바운드, 그립 상태를 먼저 확인해야 합니다.",
  },
  "tennis-second-serve-kick-topspin": {
    links: [
      ["/utility/serve-placement-mapper", "세컨드 서브 코스 기록"],
      ["/utility/return-position-calculator", "상대 리턴 위치 확인"],
    ],
    sentence:
      "킥과 톱스핀 세컨드 서브는 구질 자체보다 코스와 상대 리턴 위치가 함께 맞아야 효과가 납니다.",
  },
  "tennis-slump-recovery-guide": {
    links: [
      ["/utility/injury-risk", "몸 상태 위험 신호 점검"],
      ["/utility/recovery-routine-generator", "회복 루틴 생성"],
    ],
    sentence:
      "슬럼프가 길어질 때는 멘탈만 탓하지 말고 피로, 통증, 회복 루틴을 같이 확인해야 합니다.",
  },
  "tennis-windy-day-strategy": {
    links: [
      ["/utility/weather-check", "바람 조건 확인"],
      ["/utility/court-conditions", "코트 적응 체크"],
    ],
    sentence:
      "바람이 강한 날은 샷 모양보다 방향별 위험과 코트 적응 순서를 먼저 정해야 합니다.",
  },
  "tennis-winner-production-guide": {
    links: [
      ["/utility/shot-selection-trainer", "위너 선택 훈련"],
      ["/utility/match-analyzer", "찬스볼 패턴 분석"],
    ],
    sentence:
      "위너는 힘으로 만드는 결과가 아니라 이전 샷으로 만든 찬스와 선택 기준이 맞을 때 나옵니다.",
  },
};

function linkParagraph({ links, sentence }) {
  const anchors = links
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join("와 ");
  return `\n      <p class="context-link-note">${sentence} 이어서 ${anchors}를 함께 확인하면 다음 경기에서 바로 기록할 기준을 좁힐 수 있습니다.</p>\n`;
}

let source = readFileSync(TARGET, "utf8");
let changed = 0;

for (const [slug, brief] of Object.entries(briefs)) {
  const entryStart = source.indexOf(`"${slug}": {`);
  if (entryStart === -1) {
    throw new Error(`Missing content entry: ${slug}`);
  }

  const nextEntry = source.indexOf('\n  "', entryStart + slug.length + 5);
  const entryEnd = nextEntry === -1 ? source.length : nextEntry;
  const entry = source.slice(entryStart, entryEnd);

  if ((entry.match(/href="\/(?:utility|blog|players)/g) ?? []).length >= 2) {
    continue;
  }

  const contentStart = source.indexOf("content: `", entryStart);
  if (contentStart === -1 || contentStart > entryEnd) {
    throw new Error(`Missing content field: ${slug}`);
  }

  const firstParagraphEnd = source.indexOf("</p>", contentStart);
  if (firstParagraphEnd === -1 || firstParagraphEnd > entryEnd) {
    throw new Error(`Missing first paragraph end: ${slug}`);
  }

  const insertAt = firstParagraphEnd + "</p>".length;
  source =
    source.slice(0, insertAt) + linkParagraph(brief) + source.slice(insertAt);
  changed += 1;
}

writeFileSync(TARGET, source, "utf8");
console.log(JSON.stringify({ changed, target: TARGET }, null, 2));
