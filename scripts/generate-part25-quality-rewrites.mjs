#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { articleWriterPart12Posts } from "../src/data/blog-posts-aw-part12.js";
import { articleWriterTitle100Posts } from "../src/data/blog-posts-aw-title100.js";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part25-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part25-overrides.js");

const TARGET_SLUGS = [
  "aw2-249-self-call-disputes-match-record",
  "aw2-250-self-call-disputes-common-mistakes",
  "aw2-251-court-noshow-rules-beginner-checklist",
  "aw2-252-court-noshow-rules-twenty-min-routine",
  "aw2-253-court-noshow-rules-level-gap",
  "aw2-254-court-noshow-rules-match-record",
  "aw2-255-court-noshow-rules-common-mistakes",
  "aw2-256-weekend-tournament-apply-beginner-checklist",
  "aw2-257-weekend-tournament-apply-twenty-min-routine",
  "aw2-258-weekend-tournament-apply-level-gap",
  "aw2-259-weekend-tournament-apply-match-record",
  "aw2-260-weekend-tournament-apply-common-mistakes",
  "aw2-261-forehand-grip-switch-beginner-checklist",
  "aw2-262-forehand-grip-switch-twenty-min-routine",
  "aw2-263-forehand-grip-switch-level-gap",
  "aw2-264-forehand-grip-switch-match-record",
  "aw2-265-forehand-grip-switch-common-mistakes",
  "aw2-266-backhand-slice-spin-beginner-checklist",
  "aw2-267-backhand-slice-spin-twenty-min-routine",
  "aw2-268-backhand-slice-spin-level-gap",
  "aw2-269-backhand-slice-spin-match-record",
  "aw2-270-backhand-slice-spin-common-mistakes",
  "aw2-271-volley-wrist-fix-beginner-checklist",
  "aw2-272-volley-wrist-fix-twenty-min-routine",
  "aw2-273-volley-wrist-fix-level-gap",
  "aw2-274-volley-wrist-fix-match-record",
  "aw2-275-volley-wrist-fix-common-mistakes",
  "aw2-276-smash-backpedal-beginner-checklist",
  "aw2-277-smash-backpedal-twenty-min-routine",
  "aw2-278-smash-backpedal-level-gap",
  "aw2-279-smash-backpedal-match-record",
  "aw2-280-smash-backpedal-common-mistakes",
  "aw2-281-dropshot-when-to-use-beginner-checklist",
  "aw2-282-dropshot-when-to-use-twenty-min-routine",
  "aw2-283-dropshot-when-to-use-level-gap",
  "aw2-284-dropshot-when-to-use-match-record",
  "aw2-285-dropshot-when-to-use-common-mistakes",
  "aw2-286-topspin-lob-safety-beginner-checklist",
  "aw2-287-topspin-lob-safety-twenty-min-routine",
  "aw2-288-topspin-lob-safety-level-gap",
  "aw2-289-topspin-lob-safety-match-record",
  "aw2-290-topspin-lob-safety-common-mistakes",
  "aw2-291-baseline-depth-consistency-beginner-checklist",
  "aw2-292-baseline-depth-consistency-twenty-min-routine",
  "aw2-293-baseline-depth-consistency-level-gap",
  "aw2-294-baseline-depth-consistency-match-record",
  "aw2-295-baseline-depth-consistency-common-mistakes",
  "aw2-296-split-step-timing-beginner-checklist",
  "aw2-297-split-step-timing-twenty-min-routine",
  "aw2-298-split-step-timing-level-gap",
];

const topicMap = {
  "self-call-disputes": {
    main: "셀프 콜 분쟁",
    extended: "동호회 운영",
    support: "경기기록",
    category: "동호회 운영",
    angle: "판정이 갈릴 때 말싸움보다 합의 절차를 먼저 세우는 글",
    action: "판정 표현을 짧게 통일하고 다음 포인트 전 확인 문장을 남긴다",
  },
  "court-noshow-rules": {
    main: "코트 노쇼 규칙",
    extended: "예약 매너",
    support: "동호회 운영",
    category: "동호회 운영",
    angle: "코트 예약 취소와 대기자 배정을 감정 없이 처리하는 글",
    action: "취소 시각, 대체자 기준, 반복 노쇼 처리선을 미리 공지한다",
  },
  "weekend-tournament-apply": {
    main: "주말 대회 신청",
    extended: "동호회 경기",
    support: "참가 준비",
    category: "경기 분석",
    angle: "대회 신청 전 레벨과 일정 리스크를 실제로 점검하는 글",
    action: "파트너, 이동 시간, 경기 수, 회복 시간을 신청 전에 함께 본다",
  },
  "forehand-grip-switch": {
    main: "포핸드 그립 전환",
    extended: "스윙 교정",
    support: "타점 안정",
    category: "테니스 레슨",
    angle: "그립을 바꾸기 전 타점과 라켓면이 먼저 흔들리는지 확인하는 글",
    action: "그립 각도보다 준비 위치와 임팩트 높이를 같은 조건으로 기록한다",
  },
  "backhand-slice-spin": {
    main: "백핸드 슬라이스",
    extended: "회전 조절",
    support: "수비 전환",
    category: "테니스 레슨",
    angle: "슬라이스가 뜨거나 짧아지는 원인을 회전과 깊이로 나누는 글",
    action: "라켓면을 여는 양보다 공 아래를 지나가는 길이를 먼저 일정하게 만든다",
  },
  "volley-wrist-fix": {
    main: "발리 손목 고정",
    extended: "네트 플레이",
    support: "임팩트 안정",
    category: "테니스 레슨",
    angle: "발리에서 손목을 쓰지 말라는 말을 실제 체크 기준으로 바꾸는 글",
    action: "스윙 크기를 줄이고 라켓면을 먼저 만든 뒤 발로 거리를 맞춘다",
  },
  "smash-backpedal": {
    main: "스매시 백스텝",
    extended: "오버헤드 풋워크",
    support: "부상 예방",
    category: "훈련 가이드",
    angle: "뒤로 뛰다 균형을 잃는 장면을 안전한 회전 풋워크로 바꾸는 글",
    action: "첫걸음 방향, 옆걸음 전환, 마지막 정지를 분리해 연습한다",
  },
  "dropshot-when-to-use": {
    main: "드롭샷 타이밍",
    extended: "전술 선택",
    support: "상대 위치",
    category: "전술 가이드",
    angle: "드롭샷을 기술 자랑이 아니라 상대 위치 판단으로 쓰는 글",
    action: "상대가 베이스라인 뒤에 멈춘 순간과 내 균형이 남은 순간만 고른다",
  },
  "topspin-lob-safety": {
    main: "탑스핀 로브",
    extended: "안전 선택",
    support: "복식 수비",
    category: "전술 가이드",
    angle: "위험한 패싱 대신 높이와 깊이로 시간을 버는 선택지를 다루는 글",
    action: "상대 전진 속도와 내 타점 높이에 따라 로브 목표 지점을 정한다",
  },
  "baseline-depth-consistency": {
    main: "베이스라인 깊이",
    extended: "일관성 훈련",
    support: "랠리 안정",
    category: "훈련 가이드",
    angle: "강한 공보다 깊은 공의 반복률을 먼저 올리는 글",
    action: "네트 위 여유와 착지 구역을 숫자로 기록해 깊이를 유지한다",
  },
  "split-step-timing": {
    main: "스플릿 스텝",
    extended: "반응 타이밍",
    support: "풋워크",
    category: "훈련 가이드",
    angle: "공을 본 뒤 움직이는 습관을 상대 임팩트 기준으로 고치는 글",
    action: "상대 라켓이 공을 치는 순간 가볍게 떠서 착지 방향을 정한다",
  },
};

const variantMap = {
  "beginner-checklist": {
    label: "초보 체크",
    intent: "처음 적용할 때 놓치기 쉬운 기준을 빠르게 고른다",
    form: "체크리스트",
  },
  "twenty-min-routine": {
    label: "20분 루틴",
    intent: "짧은 연습 시간 안에 다음 행동을 고정한다",
    form: "루틴",
  },
  "level-gap": {
    label: "레벨 차이",
    intent: "초보와 중급자의 판단 기준을 나눈다",
    form: "비교표",
  },
  "match-record": {
    label: "경기기록",
    intent: "경기 뒤 복기할 문장을 남긴다",
    form: "기록표",
  },
  "common-mistakes": {
    label: "실수 줄이기",
    intent: "자주 반복되는 오해와 과잉 수정을 줄인다",
    form: "실수 교정",
  },
};

const internalLinks = [
  ["/utility/match-recorder", "경기 기록 도구"],
  ["/utility/serve-placement-mapper", "코스 기록 도구"],
  ["/utility/mental-training", "멘탈 루틴"],
  ["/utility/tiebreak-pressure-simulator", "타이브레이크 압박 시뮬레이터"],
  ["/utility/injury-risk", "부상 위험 점검"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];

const sources = [
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ["USTA Tennis 101", "https://www.usta.com/en/home/improve/tennis-101.html"],
];

const allPosts = [...articleWriterPart12Posts, ...articleWriterTitle100Posts];

function esc(value) {
  return JSON.stringify(value);
}

function scheduleAt(index) {
  const publishAt = new Date(
    Date.parse("2026-04-19T16:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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

function parseSlug(slug) {
  const topicKey = Object.keys(topicMap).find((key) => slug.includes(`-${key}-`));
  const variantKey = Object.keys(variantMap).find((key) => slug.endsWith(key));
  if (!topicKey || !variantKey) {
    throw new Error(`Unsupported slug: ${slug}`);
  }
  return { topic: topicMap[topicKey], variant: variantMap[variantKey], topicKey, variantKey };
}

function makeTitle(topic, variant) {
  return `${topic.category} ${topic.main} ${variant.label}`;
}

function makeExcerpt(topic, variant) {
  return `${topic.main}를 ${topic.extended}, ${topic.support} 기준으로 바로 점검합니다.`;
}

function buildContent(row, index) {
  const { topic, variant } = row;
  const source = sources[index % sources.length];
  const linkA = internalLinks[index % internalLinks.length];
  const linkB = internalLinks[(index + 2) % internalLinks.length];
  const accent = index % 2 === 0 ? "border-emerald-500 bg-emerald-50" : "border-sky-500 bg-sky-50";
  const exampleScore = index % 3 === 0 ? "30-30" : index % 3 === 1 ? "듀스" : "세컨드 서브";
  const pressure = index % 2 === 0 ? "상대가 먼저 항의하거나 전진 압박을 거는 순간" : "내가 급하게 결론을 내리고 싶은 순간";

  return `<p>${row.title}는 ${topic.angle}입니다. 검색으로는 ${topic.main}의 정답처럼 보이는 조언이 많지만, 동호회 코트에서는 상대 수준, 예약 방식, 공의 속도, 파트너와의 약속이 섞이면서 판단이 자주 흔들립니다. 이 글은 ${topic.extended}와 ${topic.support}를 함께 보며 바로 적용할 수 있는 기준을 남기는 데 초점을 둡니다.</p>
<p>핵심은 ${topic.action}는 것입니다. ${variant.intent}. 그래서 이 글은 기술 설명만 늘리지 않고, 경기 전 확인, 포인트 중 판단, 경기 후 기록을 한 번에 연결합니다. 공식 규칙이나 기본 절차는 <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a>처럼 신뢰할 수 있는 자료를 기준으로 두고, 실제 동호회 상황에서는 더 짧고 반복 가능한 문장으로 바꿔야 합니다.</p>
<aside class="${accent} border-l-4 p-4 my-6"><strong>오늘의 적용 기준</strong><br />${topic.main}를 볼 때는 감정 평가보다 ${topic.extended} 신호를 먼저 확인합니다. 그다음 ${topic.support} 한 줄을 남기면 다음 경기에서 같은 실수를 줄일 수 있습니다.</aside>
<h2>${topic.main}를 시작하기 전 확인할 것</h2>
<p>${topic.main}는 혼자만 잘 이해한다고 해결되지 않습니다. 특히 ${exampleScore}처럼 흐름이 바뀌는 점수에서는 말이 길어질수록 판단 품질이 떨어집니다. 경기 전에는 기준을 하나만 고릅니다. 예를 들어 "${topic.extended}가 흔들리면 ${topic.support}를 먼저 확인한다"처럼 행동이 보이는 문장으로 정리해야 합니다.</p>
<ul>
  <li>${topic.extended}: 지금 상황에서 가장 먼저 볼 외부 신호입니다.</li>
  <li>${topic.support}: 다음 경기까지 가져갈 기록 단위입니다.</li>
  <li>${variant.form}: 이 글에서 기준을 담는 형식입니다.</li>
</ul>
<p>초보자는 문제를 많이 고치려 하고, 중급자는 우선순위를 줄입니다. ${topic.main}에서도 마찬가지입니다. 라켓면, 발, 상대 반응, 파트너 약속, 코트 예약, 판정 표현을 한꺼번에 고치려 하면 다음 포인트가 더 불안해집니다. 오늘은 하나만 봅니다. ${topic.action}. 이 문장이 남으면 이미 절반은 정리된 것입니다.</p>
<h2>${row.title} 실행 순서</h2>
<p>실행 순서는 네 단계로 나누면 충분합니다. 첫째, 경기 전에는 ${topic.main}가 생길 가능성이 높은 장면을 하나 적습니다. 둘째, 포인트 중에는 ${pressure}을 신호로 삼습니다. 셋째, 포인트 뒤에는 말보다 짧은 확인 문장을 씁니다. 넷째, 경기 뒤에는 ${topic.support}를 남겨 다음 연습 과제로 넘깁니다.</p>
<table>
  <thead><tr><th>구간</th><th>확인 질문</th><th>남길 문장</th></tr></thead>
  <tbody>
    <tr><td>경기 전</td><td>${topic.main}가 나올 장면은 어디인가?</td><td>${topic.extended} 기준 1개</td></tr>
    <tr><td>포인트 중</td><td>지금 반응은 판단인가 감정인가?</td><td>멈춤 신호 1개</td></tr>
    <tr><td>경기 후</td><td>다음에 반복할 행동은 무엇인가?</td><td>${topic.support} 한 줄</td></tr>
  </tbody>
</table>
<p>이 표는 복잡한 분석을 대신하는 장치가 아닙니다. 경기 중에는 자세한 설명보다 빠른 복구가 중요합니다. ${topic.main}가 흔들릴 때 ${topic.extended}를 확인하고, 바로 ${topic.support}로 연결하면 포인트 사이 시간이 짧아져도 다음 행동이 남습니다. 이 방식은 실내 코트, 야외 코트, 복식, 단식 모두에 맞게 줄여 쓸 수 있습니다.</p>
<h2>${topic.extended}에서 자주 나오는 실수</h2>
<p>첫 번째 실수는 원인을 너무 빨리 단정하는 것입니다. ${topic.main}가 나왔을 때 바로 실력, 성격, 집중력 문제로 결론 내리면 실제 조정 지점이 사라집니다. 두 번째 실수는 한 번에 모든 것을 바꾸는 것입니다. ${variant.label} 관점에서는 ${topic.support} 하나만 남겨도 충분합니다. 세 번째 실수는 기록을 경기 뒤 감상문처럼 길게 쓰는 것입니다. 기록은 짧아야 다시 읽힙니다.</p>
<p>예를 들어 ${topic.main} 상황에서 "다음부터 조심"이라고 적으면 다음 행동이 없습니다. 대신 "${topic.extended}가 보이면 ${topic.support}를 확인"이라고 적으면 다음 경기 전 바로 읽을 수 있습니다. 이 차이가 누적되면 같은 레벨의 상대와 경기해도 회복 속도가 달라집니다.</p>
<h2>초보와 중급자의 판단 차이</h2>
<p>초보자는 ${topic.main}를 결과로 봅니다. 성공했는지 실패했는지만 남기기 쉽습니다. 중급자는 과정을 봅니다. 어떤 신호를 보고, 어느 순간에 멈추고, 무엇을 다음 포인트로 넘겼는지 확인합니다. 그래서 ${topic.extended}와 ${topic.support}를 분리하는 습관이 중요합니다. 점수 하나를 잃어도 다음 판단이 좋아지면 글의 목적은 달성됩니다.</p>
<ol>
  <li>오늘 자주 흔들린 장면 하나를 고릅니다.</li>
  <li>${topic.extended} 신호가 있었는지 짧게 적습니다.</li>
  <li>${topic.support}로 다음 행동을 한 줄로 만듭니다.</li>
  <li>다음 경기 전 그 문장만 다시 읽습니다.</li>
</ol>
<p>이 루틴은 <a href="${linkA[0]}">${linkA[1]}</a>와 함께 쓰면 더 좋습니다. 경기 뒤 복기가 필요한 날에는 <a href="${linkB[0]}">${linkB[1]}</a>로 연결해 한 가지 과제만 남기세요. ${topic.main}는 많이 아는 사람보다 같은 기준을 반복하는 사람이 먼저 안정됩니다.</p>
<h2>${variant.form}로 남기는 3분 복기</h2>
<p>경기 후 3분이면 충분합니다. 첫 줄에는 ${topic.main}가 나온 장면을 씁니다. 둘째 줄에는 ${topic.extended}가 보였는지 씁니다. 셋째 줄에는 ${topic.support}로 다음 행동을 씁니다. 이때 잘했다, 못했다 같은 평가 단어는 줄입니다. 대신 언제, 어디서, 무엇을 봤는지 남겨야 다음 연습과 연결됩니다.</p>
<details><summary>${topic.main}는 초보자도 바로 적용할 수 있나요?</summary><p>가능합니다. 기준을 하나로 줄이고 ${topic.support} 한 줄만 남기면 과한 분석 없이 다음 경기에서 다시 확인할 수 있습니다.</p></details>
<details><summary>${topic.extended}가 계속 흔들리면 무엇부터 바꾸나요?</summary><p>기술 전체를 바꾸기보다 멈춤 신호 하나를 정하세요. 같은 장면이 반복되면 그때 연습 과제로 분리하면 됩니다.</p></details>
<details><summary>${variant.label} 방식은 얼마나 자주 쓰면 되나요?</summary><p>매 경기 전부가 아니라 같은 문제가 두 번 이상 반복된 날에만 쓰면 충분합니다. 짧고 반복 가능한 기록이 핵심입니다.</p></details>
<p>정리하면 ${row.title}의 목표는 많은 정보를 외우는 것이 아닙니다. ${topic.main}, ${topic.extended}, ${topic.support}를 연결해 코트에서 다시 꺼낼 수 있는 한 문장을 만드는 것입니다. 오늘은 한 장면만 고르고, 다음 경기 전 그 문장만 확인하세요. 그것이 실제로 검색 노출보다 오래 남는 콘텐츠 품질입니다.</p>`;
}

const rows = TARGET_SLUGS.map((slug, index) => {
  const sourcePost = allPosts.find((post) => post.slug === slug);
  if (!sourcePost) throw new Error(`Missing source post: ${slug}`);
  const parsed = parseSlug(slug);
  const title = makeTitle(parsed.topic, parsed.variant);
  const schedule = scheduleAt(index);
  return {
    ...sourcePost,
    ...parsed,
    ...schedule,
    title,
    excerpt: makeExcerpt(parsed.topic, parsed.variant),
    category: parsed.topic.category,
    tags: [parsed.topic.category, parsed.topic.main, parsed.topic.extended, parsed.topic.support],
  };
});

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      {
        question: `${row.topic.main}는 어디서부터 고치나요?`,
        answer: `${row.topic.extended} 신호를 먼저 확인하고 ${row.topic.support} 한 줄로 다음 행동을 남기면 됩니다.`,
      },
      {
        question: `${row.variant.label} 방식은 초보자에게도 맞나요?`,
        answer: "맞습니다. 기준을 하나로 줄여야 경기 중에도 다시 꺼낼 수 있습니다.",
      },
      {
        question: "다음 연습과는 어떻게 연결하나요?",
        answer: "경기 후 반복 장면 하나만 골라 첫 20분 과제로 넣으면 됩니다.",
      },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.topic.main}를 ${row.topic.extended}, ${row.topic.support} 기준으로 줄여 실제 경기에서 다시 쓸 수 있게 정리합니다.`)},
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

export const BLOG_CONTENT_PART25_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
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

const postsFile = `export const articleWriterPart25PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2));
