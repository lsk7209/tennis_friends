#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { articleWriterTitle100Posts } from "../src/data/blog-posts-aw-title100.js";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part26-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part26-overrides.js");

const TARGETS = [
  {
    slug: "aw2-299-split-step-timing-match-record",
    title: "훈련 가이드 스플릿 스텝 경기기록",
    excerpt: "스플릿 스텝을 반응 타이밍, 풋워크 기준으로 바로 점검합니다.",
    category: "훈련 가이드",
    tags: ["훈련 가이드", "스플릿 스텝", "반응 타이밍", "풋워크"],
    main: "스플릿 스텝",
    extended: "반응 타이밍",
    support: "풋워크",
    date: "2026-07-25",
    scheduledAt: "2026-07-25T23:10:00+09:00",
  },
  {
    slug: "aw2-300-split-step-timing-common-mistakes",
    title: "훈련 가이드 스플릿 스텝 실수 줄이기",
    excerpt: "스플릿 스텝을 반응 타이밍, 풋워크 기준으로 바로 점검합니다.",
    category: "훈련 가이드",
    tags: ["훈련 가이드", "스플릿 스텝", "반응 타이밍", "풋워크"],
    main: "스플릿 스텝",
    extended: "반응 타이밍",
    support: "풋워크",
    date: "2026-07-26",
    scheduledAt: "2026-07-26T04:10:00+09:00",
  },
  {
    slug: "tf-title100-stroke-tactics-005",
    title: "기술 교정 랠리 공이 짧아질 때",
    excerpt: "랠리 공이를 백핸드, 랠리 기준으로 점검해 깊이를 회복합니다.",
    main: "랠리 공이",
    extended: "백핸드",
    support: "랠리",
  },
  {
    slug: "tf-title100-practice-planning-050",
    title: "훈련 가이드 경기 복기 한 줄",
    excerpt: "경기 복기를 레슨 복습, 훈련 루틴 기준으로 바로 정리합니다.",
    main: "경기 복기",
    extended: "레슨 복습",
    support: "훈련 루틴",
  },
  {
    slug: "tf-title100-equipment-069",
    title: "장비 가이드 라켓 자루 세팅",
    excerpt: "라켓 자루를 스트링, 오버그립 기준으로 비교해 선택합니다.",
    main: "라켓 자루",
    extended: "스트링",
    support: "오버그립",
  },
  {
    slug: "tf-title100-injury-recovery-080",
    title: "부상 예방 회복일 테니스 감각",
    excerpt: "회복일 테니스를 테니스 엘보, 무릎 부담 기준으로 조절합니다.",
    main: "회복일 테니스",
    extended: "테니스 엘보",
    support: "무릎 부담",
  },
];

const titlePosts = new Map(articleWriterTitle100Posts.map((post) => [post.slug, post]));
const internalLinks = [
  ["/utility/match-recorder", "경기 기록 도구"],
  ["/utility/injury-risk", "부상 위험 점검"],
  ["/utility/equipment-recommendation", "장비 추천 도구"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];
const sources = [
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ["USTA Tennis 101", "https://www.usta.com/en/home/improve/tennis-101.html"],
];

function esc(value) {
  return JSON.stringify(value);
}

function scheduleAt(index) {
  const publishAt = new Date(
    Date.parse("2026-04-30T02:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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
  return { date, scheduledAt: `${date}T${parts.hour}:${parts.minute}:00+09:00` };
}

function rowFromTarget(target, index) {
  const original = titlePosts.get(target.slug);
  const schedule = scheduleAt(index);
  return {
    ...original,
    ...target,
    ...schedule,
    category: target.category ?? original.category,
    tags: target.tags ?? [original.category, target.main, target.extended, target.support],
  };
}

function buildContent(row, index) {
  const source = sources[index % sources.length];
  const linkA = internalLinks[index % internalLinks.length];
  const linkB = internalLinks[(index + 1) % internalLinks.length];
  const accent = index % 2 === 0 ? "border-teal-500 bg-teal-50" : "border-rose-500 bg-rose-50";
  const situation = index % 2 === 0 ? "경기 초반 리듬이 아직 잡히지 않은 구간" : "점수가 가까워져 몸이 먼저 굳는 구간";

  return `<p>${row.title}는 ${row.main}를 감각적인 조언이 아니라 경기에서 다시 확인할 수 있는 기준으로 바꾸는 글입니다. ${row.extended}와 ${row.support}가 함께 흔들리면 선수는 보통 더 세게 치거나 더 많이 연습하려고 합니다. 하지만 실제 개선은 한 장면을 고르고, 같은 언어로 기록하고, 다음 경기 전 다시 읽는 데서 시작됩니다.</p>
<p>이 글의 관점은 단순합니다. ${row.main}가 흔들릴 때 바로 결론을 내리지 말고 ${row.extended} 신호를 먼저 봅니다. 그다음 ${row.support}를 한 줄로 남깁니다. 기본 규칙과 훈련 원칙은 <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a> 같은 공식 자료를 기준으로 삼고, 동호회 환경에서는 더 짧고 반복 가능한 루틴으로 줄여 씁니다.</p>
<aside class="${accent} border-l-4 p-4 my-6"><strong>오늘의 한 줄</strong><br />${row.main}는 의지 문제가 아니라 기준 문제입니다. ${row.extended}를 먼저 확인하고 ${row.support} 한 줄을 남기면 다음 경기에서 바로 복구할 수 있습니다.</aside>
<h2>${row.main}를 볼 때 첫 기준</h2>
<p>${situation}에서는 판단 속도가 빨라진 것처럼 느껴지지만 실제로는 확인 순서가 사라진 경우가 많습니다. 첫 기준은 결과가 아닙니다. 성공했는지 실패했는지보다 어떤 신호를 보고 움직였는지가 중요합니다. 그래서 ${row.extended}를 기준으로 잡고, ${row.support}는 다음 행동을 남기는 기록 단위로 둡니다.</p>
<ul>
  <li>${row.main}: 오늘 고칠 핵심 장면입니다.</li>
  <li>${row.extended}: 장면을 판단할 때 먼저 볼 신호입니다.</li>
  <li>${row.support}: 다음 경기 전 다시 읽을 기록 단위입니다.</li>
</ul>
<p>초보자는 기술 이름을 많이 아는 것보다 한 기준을 안정적으로 반복하는 편이 더 빨리 좋아집니다. 중급자는 기준을 더 세밀하게 나누되, 경기 중에는 하나만 꺼냅니다. ${row.title}도 같은 방식으로 읽어야 합니다. 설명을 모두 외우는 글이 아니라 다음 포인트 전에 떠올릴 문장을 만드는 글입니다.</p>
<h2>${row.extended}와 ${row.support}를 연결하는 순서</h2>
<p>첫째, 경기 전에는 ${row.main}가 나올 가능성이 큰 상황을 하나 고릅니다. 둘째, 포인트 중에는 몸의 반응보다 ${row.extended} 신호를 먼저 확인합니다. 셋째, 포인트 뒤에는 ${row.support}를 기준으로 짧게 복기합니다. 넷째, 다음 연습의 첫 20분에 같은 장면을 다시 배치합니다.</p>
<table>
  <thead><tr><th>구간</th><th>질문</th><th>기록</th></tr></thead>
  <tbody>
    <tr><td>경기 전</td><td>${row.main}가 흔들릴 조건은?</td><td>예상 장면 1개</td></tr>
    <tr><td>포인트 중</td><td>${row.extended} 신호를 봤나?</td><td>멈춤 기준 1개</td></tr>
    <tr><td>경기 후</td><td>${row.support}로 남길 행동은?</td><td>다음 행동 1문장</td></tr>
  </tbody>
</table>
<p>이 표를 쓰면 복기가 길어지지 않습니다. 긴 복기는 그날 기분을 담기 쉽고, 짧은 복기는 다음 행동으로 이어지기 쉽습니다. ${row.main}는 특히 반복성이 중요합니다. 같은 장면을 같은 문장으로 남겨야 변화가 보입니다.</p>
<h2>자주 틀리는 판단</h2>
<p>첫 번째 실수는 ${row.main}를 전체 실력 문제로 확대하는 것입니다. 한 장면에서 나온 흔들림을 전부 고치려 하면 연습이 흐려집니다. 두 번째 실수는 ${row.extended}를 보지 않고 결과만 복기하는 것입니다. 세 번째 실수는 ${row.support} 없이 다음부터 조심하겠다고만 적는 것입니다. 이 세 가지가 쌓이면 연습량은 늘어도 경기 내용은 잘 바뀌지 않습니다.</p>
<p>대신 장면을 작게 나눕니다. 오늘은 ${row.extended}만 본다. 끝나면 ${row.support} 한 줄만 남긴다. 다음 경기 전 그 문장만 읽는다. 이 방식은 단순하지만 검색 상위 글에서 빠지기 쉬운 실제 반복 구조입니다.</p>
<h2>초보와 중급자의 차이</h2>
<p>초보자는 보통 ${row.main}가 실패한 뒤에야 문제를 알아차립니다. 중급자는 실패 직전의 신호를 봅니다. ${row.extended}가 바로 그 신호입니다. 하지만 중급자도 기록을 남기지 않으면 다음 경기에서 같은 장면을 다시 놓칩니다. 그래서 ${row.support}를 짧게 남기는 습관이 필요합니다.</p>
<ol>
  <li>오늘 흔들린 장면 하나를 선택합니다.</li>
  <li>${row.extended}가 보였는지 확인합니다.</li>
  <li>${row.support}로 다음 행동을 씁니다.</li>
  <li>다음 경기 전 그 문장만 다시 읽습니다.</li>
</ol>
<p>실행 도구가 필요하면 <a href="${linkA[0]}">${linkA[1]}</a>를 먼저 쓰고, 보완이 필요할 때 <a href="${linkB[0]}">${linkB[1]}</a>로 이어가세요. 중요한 것은 도구의 수가 아니라 같은 기준이 반복되는지입니다.</p>
<h2>3분 복기 예시</h2>
<p>복기는 세 줄이면 충분합니다. 첫 줄은 ${row.main}가 나온 장면, 둘째 줄은 ${row.extended}를 봤는지 여부, 셋째 줄은 ${row.support}로 다음 행동을 쓰는 방식입니다. 이렇게 남기면 다음 연습이 바로 정해집니다. "못했다"가 아니라 "어떤 신호를 놓쳤다"가 남아야 합니다.</p>
<details><summary>${row.main}는 매번 기록해야 하나요?</summary><p>아닙니다. 같은 문제가 두 번 이상 반복된 날에만 짧게 남겨도 충분합니다.</p></details>
<details><summary>${row.extended}가 잘 보이지 않으면 어떻게 하나요?</summary><p>점수 압박이 낮은 연습 랠리에서 먼저 확인하세요. 경기에서는 하나의 신호만 꺼내면 됩니다.</p></details>
<details><summary>${row.support}는 얼마나 구체적이어야 하나요?</summary><p>다음 경기 전 바로 읽고 행동할 수 있는 한 문장이면 됩니다. 길수록 다시 쓰기 어렵습니다.</p></details>
<p>정리하면 ${row.title}의 핵심은 ${row.main}, ${row.extended}, ${row.support}를 한 문장으로 묶는 것입니다. 오늘 하나의 장면만 고르고, 다음 경기 전 같은 문장으로 확인하세요. 그 반복이 실제 경기력과 콘텐츠 품질을 함께 올립니다.</p>`;
}

const rows = TARGETS.map(rowFromTarget);

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      { question: `${row.main}는 어디서부터 점검하나요?`, answer: `${row.extended} 신호를 먼저 보고 ${row.support} 한 줄로 남기면 됩니다.` },
      { question: "초보자도 바로 적용할 수 있나요?", answer: "가능합니다. 한 번에 하나의 기준만 꺼내면 경기 중에도 적용할 수 있습니다." },
      { question: "복기는 얼마나 길게 쓰나요?", answer: "세 줄이면 충분합니다. 장면, 신호, 다음 행동만 남기세요." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.main}를 ${row.extended}, ${row.support} 기준으로 줄여 다음 경기에서 반복할 수 있게 정리합니다.`)},
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

export const BLOG_CONTENT_PART26_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map(
    (row) => `  {
    "slug": ${esc(row.slug)},
    "title": ${esc(row.title)},
    "excerpt": ${esc(row.excerpt)},
    "category": ${esc(row.category)},
    "tags": ${esc(row.tags)},
    "date": ${esc(row.date)},
    "scheduledAt": ${esc(row.scheduledAt)},
  }`,
  )
  .join(",\n");

const postsFile = `export const articleWriterPart26PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2));
