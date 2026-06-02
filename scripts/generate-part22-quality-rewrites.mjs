#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part22-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part22-overrides.js");

const sources = [
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ["Mayo Clinic tennis elbow", "https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987"],
  ["CDC heat and athletes", "https://www.cdc.gov/heat-health/risk-factors/heat-and-athletes.html"],
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
];

const internalLinks = [
  ["/utility/shoe-wear-tracker", "테니스화 마모 기록"],
  ["/utility/injury-risk", "부상 위험 점검"],
  ["/utility/warmup-routine-builder", "워밍업 루틴 만들기"],
  ["/utility/cooldown-routine-builder", "쿨다운 루틴 만들기"],
  ["/utility/hydration-planner", "수분 보충 계획"],
  ["/utility/sleep-readiness-check", "수면 컨디션 점검"],
  ["/utility/match-recorder", "경기 기록 도구"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];

const topics = [
  {
    base: "tennis-shoe-outsole",
    stem: "테니스화 아웃솔",
    category: "장비 관리",
    tags: ["테니스화", "아웃솔 마모", "코트 접지"],
    variants: ["match-record", "common-mistakes"],
  },
  {
    base: "tennis-elbow-early-signal",
    stem: "테니스 엘보 초기 신호",
    category: "부상 예방",
    tags: ["테니스 엘보", "팔꿈치 통증", "초기 신호"],
  },
  {
    base: "shoulder-impact-pain",
    stem: "어깨 통증 임팩트",
    category: "부상 예방",
    tags: ["어깨 통증", "임팩트 부담", "스윙 조절"],
  },
  {
    base: "knee-sidestep-load",
    stem: "무릎 사이드스텝 부담",
    category: "부상 예방",
    tags: ["무릎 부담", "사이드스텝", "하체 회복"],
  },
  {
    base: "wrist-pronation-recovery",
    stem: "손목 회복 회내",
    category: "부상 예방",
    tags: ["손목 회복", "회내 동작", "그립 압력"],
  },
  {
    base: "ankle-clay-slide",
    stem: "발목 클레이 슬라이드",
    category: "부상 예방",
    tags: ["발목 보호", "클레이 슬라이드", "미끄럼 제어"],
  },
  {
    base: "dynamic-warmup-6min",
    stem: "동적 워밍업 6분",
    category: "컨디션 관리",
    tags: ["동적 워밍업", "경기 전 준비", "관절 가동성"],
  },
  {
    base: "static-cooldown-5min",
    stem: "정적 쿨다운 5분",
    category: "컨디션 관리",
    tags: ["정적 쿨다운", "경기 후 회복", "호흡 정리"],
  },
  {
    base: "summer-hydration",
    stem: "여름 수분 보충",
    category: "컨디션 관리",
    tags: ["여름 테니스", "수분 보충", "전해질 관리"],
  },
  {
    base: "doms-light-day",
    stem: "근육통 다음날 회복",
    category: "컨디션 관리",
    tags: ["근육통", "가벼운 회복", "훈련 강도"],
  },
  {
    base: "low-sleep-adjustment",
    stem: "수면 부족 경기 조정",
    category: "컨디션 관리",
    tags: ["수면 부족", "경기 조정", "집중력 관리"],
    variants: ["beginner-checklist", "twenty-min-routine", "level-gap"],
  },
];

const variantMeta = {
  "beginner-checklist": { suffix: "초보 체크", intent: "초보자가 무리하지 않고 먼저 볼 신호를 좁힌다" },
  "twenty-min-routine": { suffix: "20분 루틴", intent: "경기 전후 짧은 시간 안에 몸 상태를 정리한다" },
  "level-gap": { suffix: "레벨 차이", intent: "초보와 중급자의 판단 기준 차이를 분리한다" },
  "match-record": { suffix: "경기 기록", intent: "경기 뒤 반복되는 몸 신호와 선택을 남긴다" },
  "common-mistakes": { suffix: "실수 줄이기", intent: "무리한 해석과 반복 실수를 줄인다" },
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
        slug: `aw2-${String(rows.length + 99).padStart(3, "0")}-${topic.base}-${variant}`,
        title: `${topic.stem} ${meta.suffix}`,
        excerpt: `${topic.tags[0]}은 무리한 교정보다 ${topic.tags[1]} 신호를 먼저 기록해야 안전합니다.`,
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

function sourceFor(row, index) {
  if (row.tags.some((tag) => tag.includes("엘보") || tag.includes("통증"))) return sources[1];
  if (row.tags.some((tag) => tag.includes("여름") || tag.includes("수분"))) return sources[2];
  return sources[index % sources.length];
}

function buildContent(row, index) {
  const [main, extended, support] = row.tags;
  const source = sourceFor(row, index);
  const linkA = internalLinks[index % internalLinks.length];
  const linkB = internalLinks[(index + 3) % internalLinks.length];
  const accent = index % 2 === 0 ? "border-rose-500 bg-rose-50" : "border-emerald-500 bg-emerald-50";
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

  return `<p>${row.title}은 ${main}을 경기력 문제로만 보지 않고, 다음 경기까지 이어지는 몸 상태와 장비 상태의 신호로 읽기 위한 글입니다. 테니스프렌즈의 기준은 간단합니다. 아프거나 불안한 상태를 참고 밀어붙이는 것이 아니라, ${extended}, ${support}, ${row.intent}를 기록 가능한 기준으로 바꾸는 것입니다. 이 글은 의학적 진단이 아니라 동호회 선수가 스스로 무리를 줄이고 전문가 상담이 필요한 상황을 놓치지 않도록 돕는 일반 가이드입니다.</p>
<p>${row.category} 주제는 과장되기 쉽습니다. 어떤 글은 한 가지 스트레칭으로 모든 문제가 해결된다고 말하고, 어떤 글은 장비 하나로 통증이 사라진다고 말합니다. 실제로는 그렇게 단순하지 않습니다. 경기 전 컨디션, 최근 훈련량, 코트 표면, 신발 마모, 수면, 수분, 그립 압력 같은 요소가 함께 작동합니다. 그래서 ${row.title}은 해결책 목록보다 판단 순서를 먼저 제시합니다.</p>
<aside class="${accent} border-l-4 p-4 my-6"><strong>안전 기준</strong><br />통증이 날카롭거나 감각 저하, 붓기, 힘 빠짐이 있으면 연습 강도를 낮추고 전문가 상담을 우선하세요. 이 글은 진단이 아니라 기록과 조절 기준입니다.</aside>
<h2>${row.title}의 첫 기준</h2>
<p>첫 기준은 "오늘 더 잘하기"가 아니라 "오늘 악화시키지 않기"입니다. ${main}이 반복되면 기술 교정 전에 ${extended}가 언제 나타나는지부터 봐야 합니다. 공을 세게 칠 때만 나타나는지, 서브 후에만 나타나는지, 사이드스텝 뒤에만 나타나는지, 더운 날 후반부에만 나타나는지 나누면 다음 선택이 쉬워집니다. 팔꿈치 통증처럼 특정 증상이 이어지는 경우에는 <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a> 같은 공신력 있는 자료를 확인하고, 증상이 계속되면 전문 평가를 받는 편이 안전합니다.</p>
<ul>
  <li>${main}: 오늘 관찰할 몸 또는 장비 신호를 하나로 줄입니다.</li>
  <li>${extended}: 언제, 어떤 동작 뒤에 나타나는지 기록합니다.</li>
  <li>${support}: 다음 경기에서 낮출 강도나 바꿀 루틴을 정합니다.</li>
</ul>
<h2>${mode}으로 보는 경기 전후 루틴</h2>
<p>${row.title}을 실제로 쓰려면 루틴이 길어지면 안 됩니다. 경기 전에는 2분만 투자해도 충분합니다. 신발 접지, 손목과 팔꿈치 느낌, 어깨 회전, 무릎 사이드스텝, 수분 상태, 수면 부족 여부 중 오늘의 주제 하나만 고릅니다. 경기 중에는 점수를 잃은 이유를 전부 분석하지 말고 ${extended} 신호가 있었는지 확인합니다. 경기 후에는 ${support} 기준으로 다음 훈련 강도를 낮출지, 장비를 점검할지, 휴식을 늘릴지 결정합니다.</p>
<table>
  <thead><tr><th>구간</th><th>확인 질문</th><th>실행 기준</th></tr></thead>
  <tbody>
    <tr><td>경기 전</td><td>${main}이 오늘 이미 느껴지는가?</td><td>강도 10~20% 낮추기</td></tr>
    <tr><td>경기 중</td><td>${extended}가 특정 동작 뒤 반복되는가?</td><td>무리한 한 방 줄이기</td></tr>
    <tr><td>경기 후</td><td>${support} 기준으로 다음 선택이 보이는가?</td><td>기록, 휴식, 점검 중 하나 선택</td></tr>
  </tbody>
</table>
<p>이 표의 목적은 불안을 키우는 것이 아닙니다. 오히려 막연한 걱정을 줄이는 데 있습니다. 무엇을 봐야 할지 정해지면 불필요한 검색을 줄이고, 같은 문제를 다음 경기에서 더 정확히 확인할 수 있습니다. 특히 ${main}은 경기력이 좋았던 날에도 기록해 두면 좋습니다. 문제가 없던 날의 루틴을 알아야 문제가 생긴 날과 비교할 수 있습니다.</p>
<h2>${main}에서 자주 생기는 오해</h2>
<p>첫 번째 오해는 통증이나 피로를 정신력 문제로 보는 것입니다. 컨디션 신호는 의지와 별개로 다뤄야 합니다. 두 번째 오해는 장비나 루틴을 한 번에 많이 바꾸는 것입니다. 신발, 스트링, 그립, 워밍업, 수면 패턴을 동시에 바꾸면 무엇이 효과를 냈는지 알 수 없습니다. 세 번째 오해는 경기 후 기록을 남기지 않는 것입니다. 몸은 기억하지만 검색 기록은 금방 사라집니다. ${extended}와 ${support}를 한 줄로 남겨야 다음 선택이 선명해집니다.</p>
<p>실행 도구로는 <a href="${linkA[0]}">${linkA[1]}</a>를 먼저 쓰고, 경기 뒤에는 <a href="${linkB[0]}">${linkB[1]}</a>에 한 줄을 남기세요. 장비 주제라면 마모와 교체 주기를, 부상 예방 주제라면 증상 위치와 강도 변화를, 컨디션 주제라면 수면·수분·회복 시간을 같이 적으면 좋습니다.</p>
<h2>초보와 중급자의 차이</h2>
<p>초보자는 ${row.title}을 단일 정답으로 찾으려는 경우가 많습니다. 하지만 중급자는 같은 신호라도 경기 상황에 따라 다르게 조절합니다. 예를 들어 ${main}이 있을 때 초보자는 무조건 쉬거나 무조건 참고 치려고 합니다. 중급자는 먼저 강도를 낮추고, 특정 동작을 줄이고, 다음 경기 전까지 회복 여부를 확인합니다. 차이는 지식의 양보다 기록의 정확도에서 나옵니다.</p>
<ol>
  <li>오늘 가장 선명한 신호 하나만 고릅니다.</li>
  <li>${extended}가 나온 시점과 동작을 적습니다.</li>
  <li>${support} 기준으로 다음 경기 전 조절 항목을 정합니다.</li>
  <li>증상이 반복되거나 악화되면 훈련보다 상담을 우선합니다.</li>
</ol>
<h2>경기 후 3분 기록법</h2>
<p>경기 후 기록은 길 필요가 없습니다. 첫 줄에는 ${main}이 있었는지 적습니다. 둘째 줄에는 ${extended}가 언제 나타났는지 적습니다. 셋째 줄에는 ${support}를 기준으로 다음 행동을 씁니다. 예를 들어 "후반 서브에서 팔꿈치 바깥쪽 당김, 다음 경기 전 서브 개수 제한"처럼 짧게 쓰면 충분합니다. 이 기록이 쌓이면 자신에게 맞는 회복 속도와 위험 신호가 보입니다.</p>
<details><summary>${row.title}은 아프지 않아도 필요할까요?</summary><p>필요합니다. 문제가 없던 날의 기준이 있어야 컨디션이 떨어진 날과 비교할 수 있습니다.</p></details>
<details><summary>${extended}가 계속되면 어떻게 해야 하나요?</summary><p>강도를 낮추고 반복 동작을 줄이세요. 통증, 붓기, 힘 빠짐, 감각 이상이 이어지면 전문가 상담을 우선하는 편이 안전합니다.</p></details>
<details><summary>${support}는 얼마나 자세히 써야 하나요?</summary><p>세 줄이면 충분합니다. 장면, 신호, 다음 행동만 남기면 다음 경기 전 확인하기 쉽습니다.</p></details>
<p>정리하면 ${row.title}은 무리하게 버티기 위한 글이 아니라, ${main}, ${extended}, ${support}를 통해 경기와 회복을 같이 관리하기 위한 기준입니다. 오늘 한 가지 신호를 고르고, 경기 중 확인하고, 경기 후 한 줄로 남기세요. 그 기록이 다음 연습의 강도와 장비 선택, 휴식 판단을 더 안전하게 만들어 줍니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      { question: `${row.tags[0]}은 언제 기록해야 하나요?`, answer: `경기 전 느낌, 경기 중 ${row.tags[1]} 발생 시점, 경기 후 ${row.tags[2]} 기준을 세 줄로 남기면 충분합니다.` },
      { question: `${row.category} 글을 따라 하면 치료가 되나요?`, answer: "아닙니다. 이 글은 일반적인 조절과 기록 가이드입니다. 통증이나 이상 신호가 이어지면 전문가 상담을 우선하세요." },
      { question: "다음 연습은 얼마나 줄여야 하나요?", answer: "불편감이 있으면 강도를 10~20% 낮추고, 같은 동작 반복을 줄인 뒤 회복 변화를 확인하세요." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.title}은 ${row.tags[0]}, ${row.tags[1]}, ${row.tags[2]}를 안전한 경기 기록 기준으로 바꾸는 글입니다.`)},
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

export const BLOG_CONTENT_PART22_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-05-01T06:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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

const postsFile = `export const articleWriterPart22PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2));
