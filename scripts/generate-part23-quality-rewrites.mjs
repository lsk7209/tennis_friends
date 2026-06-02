#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part23-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part23-overrides.js");

const sources = [
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
];

const internalLinks = [
  ["/utility/match-video-review-template", "경기 영상 복기 템플릿"],
  ["/utility/match-analyzer", "경기 분석 도구"],
  ["/utility/match-recorder", "경기 기록 도구"],
  ["/utility/tiebreak-pressure-simulator", "타이브레이크 압박 시뮬레이터"],
  ["/utility/serve-placement-mapper", "서브 코스 기록"],
  ["/utility/shot-selection-trainer", "샷 선택 훈련"],
  ["/utility/sleep-readiness-check", "수면 컨디션 점검"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];

const topics = [
  {
    base: "low-sleep-adjustment",
    stem: "수면 부족 경기",
    category: "컨디션 관리",
    tags: ["수면 부족", "경기 조정", "집중력 관리"],
    variants: ["match-record", "common-mistakes"],
  },
  {
    base: "match-video-first-30s",
    stem: "경기 영상 첫 30초",
    category: "경기 분석",
    tags: ["경기 영상", "첫 30초", "영상 분석"],
  },
  {
    base: "forehand-miss-chart",
    stem: "포핸드 실수 방향",
    category: "경기 분석",
    tags: ["포핸드 실수", "실수 방향", "기록표"],
  },
  {
    base: "break-point-loss-track",
    stem: "브레이크 포인트 실점",
    category: "경기 분석",
    tags: ["브레이크 포인트", "실점 추적", "압박 상황"],
  },
  {
    base: "tiebreak-opening-two",
    stem: "타이브레이크 첫 두 포인트",
    category: "경기 분석",
    tags: ["타이브레이크", "첫 두 포인트", "초반 전략"],
  },
  {
    base: "night-court-vision",
    stem: "야간 코트 시야",
    category: "코트 적응",
    tags: ["야간 코트", "시야 보정", "조명 적응"],
  },
  {
    base: "windy-day-toss",
    stem: "바람 토스 서브",
    category: "코트 적응",
    tags: ["바람 토스", "서브 보정", "바람 대응"],
  },
  {
    base: "post-rain-clay",
    stem: "비 온 뒤 클레이",
    category: "코트 적응",
    tags: ["비 온 뒤 클레이", "클레이 적응", "미끄럼 제어"],
  },
  {
    base: "grass-low-bounce",
    stem: "잔디 코트 낮은 바운드",
    category: "코트 적응",
    tags: ["잔디 코트", "낮은 바운드", "타점 조절"],
  },
  {
    base: "indoor-hard-grip",
    stem: "실내 하드 미끄럼",
    category: "코트 적응",
    tags: ["실내 하드", "미끄럼 감각", "풋워크"],
  },
  {
    base: "matchpoint-breathing",
    stem: "매치포인트 호흡",
    category: "멘탈 트레이닝",
    tags: ["매치포인트", "호흡 루틴", "집중력"],
    variants: ["beginner-checklist", "twenty-min-routine", "level-gap"],
  },
];

const variantMeta = {
  "beginner-checklist": { suffix: "초보 체크", intent: "초보자가 먼저 볼 한 장면을 고른다" },
  "twenty-min-routine": { suffix: "20분 루틴", intent: "짧은 복기와 반복 연습으로 연결한다" },
  "level-gap": { suffix: "레벨 차이", intent: "초보와 중급자의 판단 차이를 나눈다" },
  "match-record": { suffix: "경기 기록", intent: "경기 뒤 다음 행동으로 이어지는 기록을 남긴다" },
  "common-mistakes": { suffix: "실수 줄이기", intent: "반복되는 오해를 줄이고 기준을 좁힌다" },
};

function esc(value) {
  return JSON.stringify(value);
}

function makeRows() {
  const rows = [];
  for (const topic of topics) {
    const variants =
      topic.variants ??
      ["beginner-checklist", "twenty-min-routine", "level-gap", "match-record", "common-mistakes"];
    for (const variant of variants) {
      const meta = variantMeta[variant];
      rows.push({
        slug: `aw2-${String(rows.length + 149).padStart(3, "0")}-${topic.base}-${variant}`,
        title: `${topic.stem} ${meta.suffix}`,
        excerpt: `${topic.tags[0]}은 결과보다 ${topic.tags[1]} 기준을 먼저 남겨야 다음 선택이 선명합니다.`,
        category: topic.category,
        tags: topic.tags,
        stem: topic.stem,
        intent: meta.intent,
        variant,
      });
    }
  }
  return rows.slice(0, 50);
}

const rows = makeRows();

function buildContent(row, index) {
  const [main, extended, support] = row.tags;
  const source = sources[index % sources.length];
  const linkA = internalLinks[index % internalLinks.length];
  const linkB = internalLinks[(index + 3) % internalLinks.length];
  const accent = index % 2 === 0 ? "border-cyan-500 bg-cyan-50" : "border-amber-500 bg-amber-50";
  const mode =
    row.variant === "common-mistakes"
      ? "실수 복구형"
      : row.variant === "match-record"
        ? "기록 분석형"
        : row.variant === "level-gap"
          ? "레벨 비교형"
          : row.variant === "twenty-min-routine"
            ? "시간 제한형"
            : "체크리스트형";

  return `<p>${row.title}은 ${main}을 막연한 감각이 아니라 다음 경기에서 다시 확인할 수 있는 기준으로 바꾸는 글입니다. ${row.category}는 경기 후에 생각하면 쉬워 보이지만, 실제 포인트 안에서는 시간이 거의 없습니다. 그래서 이 글은 ${extended}, ${support}, ${row.intent}를 한 줄 기록과 한 가지 행동으로 줄이는 방식에 집중합니다.</p>
<p>동호회 테니스에서 가장 자주 생기는 문제는 원인을 너무 많이 찾는 것입니다. 실점 하나에 폼, 멘탈, 상대, 코트, 장비, 체력을 모두 연결하면 다음 연습이 흐려집니다. 반대로 ${main}을 한 장면으로 줄이면 복기가 쉬워집니다. 오늘은 전체 경기를 분석하지 않고, 가장 반복된 신호 하나만 고르는 방식으로 접근하세요.</p>
<aside class="${accent} border-l-4 p-4 my-6"><strong>오늘의 적용 기준</strong><br />${row.title}은 멋진 해설보다 재현 가능한 판단을 남기는 것이 핵심입니다. 경기 중에는 ${extended}만 보고, 경기 후에는 ${support}로 다음 과제를 정하세요.</aside>
<h2>${row.title}을 시작하는 한 문장</h2>
<p>첫 문장은 짧아야 합니다. "${main}을 잘하자"는 문장은 행동으로 이어지지 않습니다. 대신 "${extended}가 보이면 ${support}를 먼저 확인한다"처럼 말해야 합니다. 경기 영상, 포핸드 실수, 브레이크 포인트, 야간 코트, 바람, 클레이, 잔디, 실내 하드, 매치포인트 모두 같은 원칙이 적용됩니다. 경기 규칙과 운영의 큰 틀은 <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a> 같은 공식 자료를 참고하되, 현장 실행은 자신의 반복 장면에 맞게 좁히는 편이 좋습니다.</p>
<ul>
  <li>${main}: 오늘 볼 장면을 하나만 고릅니다.</li>
  <li>${extended}: 경기 중 확인 가능한 신호로 바꿉니다.</li>
  <li>${support}: 다음 경기 전 다시 볼 기록으로 남깁니다.</li>
</ul>
<h2>${mode} 실행 순서</h2>
<p>${row.title}의 실행 순서는 세 단계입니다. 첫째, 경기 전에 관찰 기준을 정합니다. 둘째, 경기 중에는 결과보다 신호를 봅니다. 셋째, 경기 후에는 다음 연습의 첫 20분으로 바꿉니다. 이 세 단계가 연결되면 검색으로 얻은 정보가 경기 루틴이 됩니다. 특히 ${main}은 한 번의 성공보다 반복되는 실패 장면을 줄이는 데 더 큰 가치가 있습니다.</p>
<table>
  <thead><tr><th>구간</th><th>확인 질문</th><th>기록 문장</th></tr></thead>
  <tbody>
    <tr><td>경기 전</td><td>${main}을 볼 상황이 분명한가?</td><td>오늘 볼 장면 1개</td></tr>
    <tr><td>경기 중</td><td>${extended}가 실제로 반복됐는가?</td><td>성공/실패 장면</td></tr>
    <tr><td>경기 후</td><td>${support}로 다음 과제가 정해졌는가?</td><td>다음 20분 과제</td></tr>
  </tbody>
</table>
<p>이 표는 복기를 짧게 만들기 위한 장치입니다. 분석이 길어질수록 다음 행동은 흐려집니다. 경기 영상이라면 처음 30초만 보고, 포핸드라면 실수 방향만 보고, 압박 상황이라면 첫 선택만 봅니다. 코트 적응도 마찬가지입니다. 바람, 조명, 표면, 바운드 중 하나만 고르면 다음 경기가 훨씬 명확해집니다.</p>
<h2>${main}에서 자주 놓치는 부분</h2>
<p>첫 번째는 결과 편향입니다. 포인트를 땄다고 좋은 선택이었고, 포인트를 잃었다고 나쁜 선택이었다고 단정하면 학습이 느려집니다. 두 번째는 장면을 크게 잡는 것입니다. "오늘 전체적으로 안 됐다"는 기록은 쓸모가 적습니다. "두 번째 브레이크 포인트에서 리턴 위치가 뒤로 밀렸다"처럼 장면이 보여야 합니다. 세 번째는 다음 연습으로 연결하지 않는 것입니다. ${extended}를 봤다면 ${support}를 반드시 남겨야 합니다.</p>
<p>실행 도구로는 <a href="${linkA[0]}">${linkA[1]}</a>를 먼저 쓰고, 이후에는 <a href="${linkB[0]}">${linkB[1]}</a>에 한 문장으로 정리하세요. 영상 주제는 클립 시간을 남기고, 압박 상황은 스코어와 첫 선택을 남기고, 코트 적응은 표면·바람·조명 중 하나만 기록하면 충분합니다.</p>
<h2>초보와 중급자의 차이</h2>
<p>초보자는 ${row.title}을 정답 목록으로 찾는 경우가 많습니다. 중급자는 상황을 먼저 나눕니다. 같은 ${main}이라도 초반과 후반, 실내와 실외, 바람이 있는 날과 없는 날, 매치포인트와 일반 포인트는 다르게 봐야 합니다. 차이는 복잡한 지식이 아니라 기준을 바꾸는 능력입니다. 그래서 오늘은 ${extended} 하나만 기준으로 삼고, 다음 경기에서 같은 기준이 다시 맞는지 확인하세요.</p>
<ol>
  <li>오늘 가장 반복된 장면 하나를 고릅니다.</li>
  <li>${extended}가 있었는지 표시합니다.</li>
  <li>${support}를 다음 20분 연습으로 바꿉니다.</li>
  <li>다음 경기에서 같은 장면을 다시 확인합니다.</li>
</ol>
<h2>경기 후 3분 기록법</h2>
<p>경기 후에는 세 줄이면 충분합니다. 첫 줄은 ${main}이 나온 장면, 둘째 줄은 ${extended}가 보였는지, 셋째 줄은 ${support}로 다음 행동을 씁니다. 길게 쓰면 다시 읽지 않습니다. 짧게 쓰면 다음 경기 전에 바로 확인할 수 있습니다. 이 기록이 쌓이면 자신이 흔들리는 패턴과 코트별 적응 기준이 보입니다.</p>
<details><summary>${row.title}은 매 경기 해야 하나요?</summary><p>아닙니다. 같은 문제가 두 경기 이상 반복될 때만 적용하면 충분합니다.</p></details>
<details><summary>${extended}와 ${support} 중 무엇이 먼저인가요?</summary><p>경기 중에는 ${extended}가 먼저이고, 경기 후에는 ${support}가 먼저입니다. 관찰과 기록의 순서를 나누세요.</p></details>
<details><summary>20분 연습은 어떻게 구성하나요?</summary><p>같은 조건을 10회 반복하고, 성공률보다 선택 기준이 흔들리지 않았는지 기록하는 방식이 좋습니다.</p></details>
<p>정리하면 ${row.title}은 더 많은 정보를 외우는 글이 아니라, ${main}, ${extended}, ${support}를 통해 다음 경기의 행동을 하나로 줄이는 글입니다. 오늘 한 장면을 고르고, 경기 중 신호를 확인하고, 경기 후 세 줄로 남기세요. 그 정도면 다음 경기에서 충분히 달라질 수 있습니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      { question: `${row.tags[0]}은 무엇부터 봐야 하나요?`, answer: `${row.tags[1]} 신호를 먼저 보고 ${row.tags[2]}는 경기 후 기록으로 남기면 됩니다.` },
      { question: `${row.category} 초보자도 적용할 수 있나요?`, answer: "가능합니다. 다만 한 경기에서 한 가지 장면만 고르고, 결과보다 반복 신호를 기록하세요." },
      { question: "다음 연습은 얼마나 해야 하나요?", answer: "20분이면 충분합니다. 같은 조건을 10회 반복하고 한 줄로 복기하세요." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.title}은 ${row.tags[0]}, ${row.tags[1]}, ${row.tags[2]}를 다음 경기에서 재확인할 기준으로 바꾸는 글입니다.`)},
    faq: ${JSON.stringify(faq, null, 6).replaceAll("\n", "\n    ")},
  }`;
  })
  .join(",\n");

const contentFile = `type BlogContentEntry = {
  content: string;
  tags: string[];
  summary: string;
  highlight: string;
  faq?: { question: string; answer: string }[];
};

export const BLOG_CONTENT_PART23_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-04-20T06:00:00+09:00") + index * 5 * 60 * 60 * 1000,
    );
    const parts = Object.fromEntries(
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Seoul",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
        .formatToParts(publishAt)
        .map((part) => [part.type, part.value]),
    );
    const date = `${parts.year}-${parts.month}-${parts.day}`;
    const scheduledAt = `${date}T${parts.hour}:${parts.minute}:00+09:00`;
    return `  {
    "slug": ${esc(row.slug)},
    "title": ${esc(row.title)},
    "excerpt": ${esc(row.excerpt)},
    "category": ${esc(row.category)},
    "tags": ${esc(row.tags)},
    "date": ${esc(date)},
    "scheduledAt": ${esc(scheduledAt)},
  }`;
  })
  .join(",\n");

const postsFile = `export const articleWriterPart23PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2));
