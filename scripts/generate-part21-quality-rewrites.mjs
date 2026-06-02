#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part21-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part21-overrides.js");

const sources = [
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
];

const internalLinks = [
  ["/utility/doubles-positioning-simulator", "복식 위치 시뮬레이터"],
  ["/utility/equipment-maintenance-scheduler", "장비 관리 일정표"],
  ["/utility/shoe-wear-tracker", "테니스화 마모 기록"],
  ["/utility/match-recorder", "경기 기록 도구"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];

const topics = [
  {
    base: "doubles-poaching-cue",
    stem: "복식 포칭 신호",
    category: "복식 전술",
    tags: ["복식 포칭", "포칭 신호", "전위 움직임"],
    variants: ["match-record", "common-mistakes"],
  },
  {
    base: "middle-ball-call",
    stem: "복식 가운데 콜",
    category: "복식 전술",
    tags: ["복식 가운데", "콜 약속", "파트너 소통"],
  },
  {
    base: "doubles-i-formation",
    stem: "복식 I 포메이션",
    category: "복식 전술",
    tags: ["I 포메이션", "복식 전술", "서브 게임"],
  },
  {
    base: "mixed-doubles-pact",
    stem: "혼합복식 파트너 약속",
    category: "복식 전술",
    tags: ["혼합복식", "파트너 약속", "역할 분담"],
  },
  {
    base: "doubles-opening-game",
    stem: "복식 첫 게임 약속",
    category: "복식 전술",
    tags: ["복식 첫 게임", "초반 전략", "파트너 소통"],
  },
  {
    base: "racket-balance-point",
    stem: "라켓 밸런스 포인트",
    category: "장비 가이드",
    tags: ["라켓 밸런스", "스윙감", "장비 선택"],
  },
  {
    base: "string-gauge-comparison",
    stem: "스트링 게이지 비교",
    category: "장비 가이드",
    tags: ["스트링 게이지", "1.25 스트링", "1.30 스트링"],
  },
  {
    base: "hybrid-string-setup",
    stem: "하이브리드 스트링 조합",
    category: "장비 가이드",
    tags: ["하이브리드 스트링", "스트링 조합", "타구감"],
  },
  {
    base: "grip-size-choice",
    stem: "그립 사이즈 선택",
    category: "장비 가이드",
    tags: ["그립 사이즈", "손목 부담", "라켓 선택"],
  },
  {
    base: "overgrip-replacement-cue",
    stem: "오버그립 교체 신호",
    category: "장비 관리",
    tags: ["오버그립", "교체 신호", "손 미끄럼"],
  },
  {
    base: "tennis-shoe-outsole",
    stem: "테니스화 아웃솔",
    category: "장비 관리",
    tags: ["테니스화", "아웃솔 마모", "코트 접지"],
    variants: ["beginner-checklist", "twenty-min-routine", "level-gap"],
  },
];

const variantMeta = {
  "beginner-checklist": { suffix: "초보 체크", intent: "처음 고를 때 놓치기 쉬운 확인 순서를 줄인다" },
  "twenty-min-routine": { suffix: "20분 점검", intent: "짧은 시간 안에 경기 전 기준을 맞춘다" },
  "level-gap": { suffix: "레벨 차이", intent: "초보와 중급자가 다르게 봐야 할 신호를 나눈다" },
  "match-record": { suffix: "경기 기록", intent: "경기 뒤 다음 선택으로 이어지는 기록법을 만든다" },
  "common-mistakes": { suffix: "실수 줄이기", intent: "반복되는 오해를 줄이고 실행 기준을 남긴다" },
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
      const slug = `aw2-${String(rows.length + 49).padStart(3, "0")}-${topic.base}-${variant}`;
      rows.push({
        slug,
        title: `${topic.stem} ${meta.suffix}`,
        excerpt: `${topic.tags[0]}은 감각보다 ${topic.tags[1]} 기준을 먼저 정해야 흔들림이 줄어듭니다.`,
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
  const linkB = internalLinks[(index + 2) % internalLinks.length];
  const accent = index % 2 === 0 ? "border-emerald-500 bg-emerald-50" : "border-sky-500 bg-sky-50";
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

  return `<p>${row.title}은 ${main}을 말로만 이해하지 않고 경기 중 한 번 더 재현 가능한 기준으로 바꾸기 위한 글입니다. ${row.category} 글은 보통 멋진 전술 이름이나 장비 스펙부터 설명하지만, 동호회 경기에서 결과를 바꾸는 부분은 더 작습니다. 어느 순간에 보고, 어떤 신호가 나오면 멈추고, 다음 포인트에서 무엇을 반복할지 정해야 합니다. 그래서 이 글은 ${extended}, ${support}, ${row.intent}를 한 번에 묶어 설명합니다.</p>
<p>테니스프렌즈 페르소나는 초보와 중급자가 같은 말을 다르게 받아들이는 지점을 중요하게 봅니다. 예를 들어 ${main}을 잘한다고 해도 파트너와 기준이 다르면 복식에서는 빈 공간이 생기고, 장비에서는 좋은 스펙이 오히려 손 부담으로 돌아옵니다. 반대로 기준을 너무 많이 잡으면 경기 중에는 아무것도 실행하지 못합니다. 이 글의 핵심은 하나입니다. 오늘 경기나 연습에서 바로 확인할 신호를 세 개 이하로 줄이는 것입니다.</p>
<aside class="${accent} border-l-4 p-4 my-6"><strong>오늘의 기준</strong><br />${row.title}은 성공률을 높이는 주문이 아니라, ${main}이 흔들릴 때 다시 돌아갈 체크 포인트입니다. 먼저 ${extended}를 관찰하고, 그 다음 ${support}를 기록하세요.</aside>
<h2>${row.title}을 보기 전 정해야 할 한 문장</h2>
<p>시작 문장은 짧아야 합니다. "${main}을 잘하자"는 문장은 너무 넓습니다. 대신 "${extended}가 보이면 ${support}를 먼저 확인한다"처럼 행동이 보이는 문장으로 바꾸세요. 전술과 장비 모두 이 방식이 유효합니다. 복식이라면 파트너가 들을 수 있는 말이어야 하고, 장비라면 다음 교체나 조정 때 다시 확인할 수 있어야 합니다. ITF 규정처럼 경기의 큰 틀은 명확하지만, 동호회 현장에서는 그 안에서 자신만의 판단 순서를 만드는 일이 중요합니다. 참고 규정과 기본 팁은 <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a>에서 확인할 수 있습니다.</p>
<ul>
  <li>${main}: 오늘 바꿀 주제 하나만 고릅니다.</li>
  <li>${extended}: 경기 중 관찰 가능한 신호로 바꿉니다.</li>
  <li>${support}: 다음 연습에서 반복할 기록 항목으로 남깁니다.</li>
</ul>
<h2>${mode}으로 정리한 실행 순서</h2>
<p>${row.title}의 실행 순서는 상황을 복잡하게 만들지 않는 쪽으로 설계해야 합니다. 첫 번째는 경기 전 점검입니다. 몸이 덜 풀렸거나 파트너와 말이 맞지 않거나 장비 상태가 애매하면, 기술 교정보다 조건 확인이 먼저입니다. 두 번째는 경기 중 신호입니다. 공 하나를 놓쳤을 때 원인을 전부 찾으려 하지 말고 ${extended}가 무너졌는지만 봅니다. 세 번째는 경기 후 기록입니다. 결과보다 다음 경기에서 다시 써볼 문장을 남기는 것이 좋습니다.</p>
<table>
  <thead><tr><th>구간</th><th>확인 질문</th><th>남길 기록</th></tr></thead>
  <tbody>
    <tr><td>경기 전</td><td>${main}을 오늘 적용할 상황이 분명한가?</td><td>적용 포인트 1개</td></tr>
    <tr><td>경기 중</td><td>${extended} 신호를 실제로 봤는가?</td><td>성공/실패 장면</td></tr>
    <tr><td>경기 후</td><td>${support} 기준으로 다음 행동이 정해졌는가?</td><td>다음 연습 20분 과제</td></tr>
  </tbody>
</table>
<p>이 표를 쓰면 글을 읽고 끝나는 일이 줄어듭니다. ${row.category}는 특히 경기장 밖의 이해와 경기장 안의 실행 사이에 차이가 큽니다. 머리로는 알고 있지만 몸이 늦거나, 장비 정보는 많지만 실제 손 느낌을 기록하지 않는 경우가 많습니다. 그래서 표의 세 번째 칸이 가장 중요합니다. 다음 연습 20분 과제까지 내려와야 검색으로 얻은 정보가 실제 실력으로 이어집니다.</p>
<h2>${main}에서 자주 틀리는 판단</h2>
<p>첫 번째 실수는 결과만 보는 것입니다. 포인트를 땄는지 잃었는지만 보면 ${extended}가 제대로 작동했는지 알 수 없습니다. 두 번째 실수는 한 번에 두 가지 이상 바꾸는 것입니다. 포칭 위치와 콜, 라켓 무게와 스트링, 신발 접지와 풋워크를 동시에 바꾸면 원인을 추적할 수 없습니다. 세 번째 실수는 파트너나 몸 상태를 빼놓는 것입니다. 복식 전술은 상대보다 우리 둘의 기준이 먼저이고, 장비 선택은 스펙보다 손과 발의 반응이 먼저입니다.</p>
<p>이 부분은 <a href="${linkA[0]}">${linkA[1]}</a>와 함께 보면 더 실용적입니다. 복식 주제라면 위치와 콜을 시뮬레이션하고, 장비 주제라면 교체 주기나 마모 신호를 기록하세요. 이어서 <a href="${linkB[0]}">${linkB[1]}</a>에 오늘의 한 문장을 남기면 다음 경기에서 같은 문제를 다시 확인할 수 있습니다.</p>
<h2>초보와 중급자의 차이</h2>
<p>초보자는 ${row.title}을 정답처럼 외우는 경향이 있습니다. 하지만 실제 경기에서는 상대의 속도, 코트 상태, 파트너 위치, 손의 피로도에 따라 같은 기준도 다르게 작동합니다. 중급자는 이 차이를 알고 있습니다. 그래서 모든 상황을 맞히려 하지 않고, 자신에게 반복되는 실패 신호를 먼저 찾습니다. ${main}도 마찬가지입니다. 오늘 필요한 것은 완벽한 설명이 아니라 반복되는 장면 하나를 줄이는 기준입니다.</p>
<ol>
  <li>오늘 가장 자주 나온 장면 하나를 고릅니다.</li>
  <li>${extended}가 있었는지 없었는지 표시합니다.</li>
  <li>${support}를 다음 경기 전 체크 문장으로 바꿉니다.</li>
  <li>다음 연습에서 같은 조건을 10회만 반복합니다.</li>
</ol>
<h2>경기 후 3분 기록법</h2>
<p>경기 후에는 길게 쓰지 않아도 됩니다. 첫 줄에는 ${main}이 나온 장면을 적고, 둘째 줄에는 ${extended}가 보였는지 적습니다. 셋째 줄에는 ${support}를 기준으로 다음 행동을 씁니다. 이 세 줄이면 충분합니다. 중요한 것은 감정을 배제하는 것이 아니라 감정이 식기 전에 행동 기준으로 바꾸는 것입니다. "오늘 안 됐다"가 아니라 "다음에는 첫 신호를 파트너에게 먼저 말한다" 또는 "다음 교체 전 손 미끄럼을 기록한다"처럼 구체화해야 합니다.</p>
<details><summary>${row.title}은 매 경기 적용해야 하나요?</summary><p>아닙니다. 같은 문제가 두 번 이상 반복될 때만 적용하세요. 모든 포인트에 적용하면 판단이 느려집니다.</p></details>
<details><summary>${extended}와 ${support} 중 무엇이 먼저인가요?</summary><p>경기 중에는 ${extended}가 먼저이고, 경기 후에는 ${support}가 먼저입니다. 관찰과 기록의 순서를 나눠야 실행이 쉬워집니다.</p></details>
<details><summary>파트너와 의견이 다르면 어떻게 하나요?</summary><p>복식 주제라면 포인트 전 한 문장만 맞추세요. 장비 주제라면 감각 표현보다 수치나 장면 기록을 먼저 남기는 편이 좋습니다.</p></details>
<p>정리하면 ${row.title}은 검색용 정보가 아니라 다음 경기의 행동 기준입니다. ${main}, ${extended}, ${support}를 각각 따로 외우지 말고 한 장면으로 묶어 보세요. 그러면 글을 읽은 뒤 남는 것이 많아집니다. 오늘은 한 가지 신호만 고르고, 다음 경기에서는 그 신호가 다시 나오는지 확인하면 됩니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      { question: `${row.tags[0]}은 어디서부터 봐야 하나요?`, answer: `${row.tags[1]}을 먼저 보고 ${row.tags[2]}는 경기 후 기록으로 남기는 순서가 좋습니다.` },
      { question: `${row.category} 초보자도 바로 적용할 수 있나요?`, answer: "가능합니다. 다만 한 경기에서 한 가지 신호만 고르고, 성공률보다 반복 장면을 기록하세요." },
      { question: "다음 연습은 얼마나 해야 하나요?", answer: "20분이면 충분합니다. 같은 조건을 10회 반복하고 경기 전 체크 문장 하나로 줄이면 됩니다." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.title}은 ${row.tags[0]}, ${row.tags[1]}, ${row.tags[2]}를 경기 중 확인 가능한 기준으로 바꾸는 글입니다.`)},
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

export const BLOG_CONTENT_PART21_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-05-12T06:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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

const postsFile = `export const articleWriterPart21PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2));
