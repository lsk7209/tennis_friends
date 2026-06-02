#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part24-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part24-overrides.js");

const sources = [
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ["USTA Tennis 101", "https://www.usta.com/en/home/improve/tennis-101.html"],
];

const internalLinks = [
  ["/utility/tiebreak-pressure-simulator", "타이브레이크 압박 시뮬레이터"],
  ["/utility/mental-training", "멘탈 루틴 점검"],
  ["/utility/serve-placement-mapper", "서브 코스 기록"],
  ["/utility/adult-beginner-roadmap", "성인 입문 로드맵"],
  ["/utility/junior-development-roadmap", "주니어 성장 로드맵"],
  ["/utility/injury-risk", "부상 위험 점검"],
  ["/utility/equipment-recommendation", "장비 추천 도구"],
  ["/utility/match-recorder", "경기 기록 도구"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];

const topics = [
  {
    base: "matchpoint-breathing",
    stem: "매치포인트 호흡",
    category: "멘탈 트레이닝",
    tags: ["매치포인트", "호흡 루틴", "집중력"],
    variants: ["match-record", "common-mistakes"],
  },
  {
    base: "bad-call-composure",
    stem: "오심 평정 대응",
    category: "멘탈 트레이닝",
    tags: ["오심", "평정", "판정 대응"],
  },
  {
    base: "five-set-pacing",
    stem: "5세트 페이싱",
    category: "경기 운영",
    tags: ["5세트", "페이싱", "체력 분배"],
  },
  {
    base: "double-fault-reset",
    stem: "더블폴트 리셋",
    category: "서브 전략",
    tags: ["더블폴트", "리셋 루틴", "세컨드 서브"],
  },
  {
    base: "adult-first-90days",
    stem: "성인 입문 90일",
    category: "입문 가이드",
    tags: ["성인 입문", "90일 목표", "기초 루틴"],
  },
  {
    base: "junior-starting-age",
    stem: "주니어 시작 나이",
    category: "주니어 테니스",
    tags: ["주니어", "시작 나이", "부모 체크"],
  },
  {
    base: "senior-onboarding-safety",
    stem: "시니어 입문 안전",
    category: "시니어 테니스",
    tags: ["시니어 입문", "안전 기준", "운동 강도"],
  },
  {
    base: "women-shoulder-care",
    stem: "여성 입문 어깨",
    category: "입문 가이드",
    tags: ["여성 입문", "어깨 케어", "부담 줄이기"],
  },
  {
    base: "no-sport-first-racket",
    stem: "운동 초보 첫 라켓",
    category: "장비 가이드",
    tags: ["운동 초보", "첫 라켓", "라켓 선택"],
  },
  {
    base: "club-first-visit",
    stem: "동호회 첫 방문",
    category: "동호회 운영",
    tags: ["동호회", "첫 방문", "매너"],
  },
  {
    base: "self-call-disputes",
    stem: "셀프콜 분쟁",
    category: "동호회 운영",
    tags: ["셀프콜", "분쟁 줄이기", "동호회 매너"],
    variants: ["beginner-checklist", "twenty-min-routine", "level-gap"],
  },
];

const variantMeta = {
  "beginner-checklist": { suffix: "초보 체크", intent: "처음 겪는 상황에서 기준을 작게 잡는다" },
  "twenty-min-routine": { suffix: "20분 루틴", intent: "짧은 연습으로 다음 행동을 준비한다" },
  "level-gap": { suffix: "레벨 차이", intent: "초보와 중급자의 판단 기준을 나눈다" },
  "match-record": { suffix: "경기 기록", intent: "경기 뒤 다음 선택으로 이어지는 기록을 남긴다" },
  "common-mistakes": { suffix: "실수 줄이기", intent: "반복되는 오해를 줄이고 기준을 세운다" },
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
        slug: `aw2-${String(rows.length + 199).padStart(3, "0")}-${topic.base}-${variant}`,
        title: `${topic.stem} ${meta.suffix}`,
        excerpt: `${topic.tags[0]}은 감정보다 ${topic.tags[1]} 기준을 먼저 정해야 다음 선택이 흔들리지 않습니다.`,
        category: topic.category,
        tags: topic.tags,
        intent: meta.intent,
        variant,
      });
    }
  }
  return rows.slice(0, 50);
}

const rows = makeRows();

function sourceFor(row, index) {
  if (row.category.includes("입문") || row.category.includes("주니어") || row.category.includes("시니어")) {
    return sources[2];
  }
  return sources[index % 2];
}

function buildContent(row, index) {
  const [main, extended, support] = row.tags;
  const source = sourceFor(row, index);
  const linkA = internalLinks[index % internalLinks.length];
  const linkB = internalLinks[(index + 4) % internalLinks.length];
  const accent = index % 2 === 0 ? "border-indigo-500 bg-indigo-50" : "border-lime-500 bg-lime-50";
  const lens =
    row.category.includes("입문") || row.category.includes("주니어") || row.category.includes("시니어")
      ? "입문 설계형"
      : row.category.includes("동호회")
        ? "현장 매너형"
        : row.category.includes("서브")
          ? "기술 복구형"
          : "압박 관리형";

  return `<p>${row.title}은 ${main}을 한 번의 조언으로 끝내지 않고, 실제 경기와 연습에서 다시 확인할 수 있는 기준으로 바꾸기 위한 글입니다. ${row.category} 주제는 검색하면 정보가 많지만, 현장에서 필요한 것은 훨씬 작습니다. ${extended}가 흔들리는 순간을 알아차리고, ${support}를 다음 행동으로 남기는 것이 핵심입니다.</p>
<p>테니스프렌즈의 관점은 간단합니다. 초보자는 기준이 너무 많아서 흔들리고, 중급자는 기준을 상황에 맞게 줄일 때 성장합니다. ${row.title}도 마찬가지입니다. 매치포인트, 오심, 더블폴트, 입문 첫 90일, 주니어 시작, 시니어 안전, 동호회 첫 방문, 셀프콜 분쟁은 모두 다른 문제처럼 보이지만 공통점이 있습니다. 즉석에서 감정으로 반응하지 않고, 사전에 정한 한 문장으로 돌아가야 한다는 점입니다.</p>
<aside class="${accent} border-l-4 p-4 my-6"><strong>오늘의 기준</strong><br />${main}은 완벽한 정답보다 흔들릴 때 돌아갈 문장이 중요합니다. 오늘은 ${extended}를 먼저 보고, 경기 후에는 ${support}를 한 줄로 남기세요.</aside>
<h2>${row.title}을 시작하는 기준</h2>
<p>첫 기준은 짧아야 합니다. "${main}을 잘하자"는 말은 경기 중 도움이 되지 않습니다. 대신 "${extended}가 흔들리면 ${support}를 먼저 확인한다"처럼 행동이 보이는 문장으로 바꿔야 합니다. 경기 규칙과 기본 절차는 <a href="${source[1]}" target="_blank" rel="noopener noreferrer">${source[0]}</a> 같은 공식 자료를 참고하되, 동호회 현장에서는 상대와 파트너, 몸 상태, 코트 상황에 맞는 작은 기준이 더 중요합니다.</p>
<ul>
  <li>${main}: 오늘 다룰 상황을 하나로 좁힙니다.</li>
  <li>${extended}: 감정이 아니라 확인 가능한 신호로 바꿉니다.</li>
  <li>${support}: 다음 경기 전 다시 볼 문장으로 남깁니다.</li>
</ul>
<h2>${lens} 실행 순서</h2>
<p>${row.title}의 실행 순서는 세 단계입니다. 첫째, 경기 전이나 방문 전 기준을 정합니다. 둘째, 상황이 벌어졌을 때 바로 반응하지 않고 한 호흡 늦춥니다. 셋째, 경기 후에는 무엇을 유지하고 무엇을 줄일지 기록합니다. 이 세 단계가 있으면 같은 상황에서 매번 새로 고민하지 않아도 됩니다.</p>
<table>
  <thead><tr><th>구간</th><th>확인 질문</th><th>남길 문장</th></tr></thead>
  <tbody>
    <tr><td>사전 준비</td><td>${main}이 나올 상황을 예상했는가?</td><td>오늘 기준 1개</td></tr>
    <tr><td>현장 대응</td><td>${extended}가 흔들리는 순간을 봤는가?</td><td>멈춤 신호 1개</td></tr>
    <tr><td>사후 복기</td><td>${support}로 다음 행동이 정해졌는가?</td><td>다음 경기 문장</td></tr>
  </tbody>
</table>
<p>이 표는 복잡한 상황을 줄이기 위한 도구입니다. 예를 들어 더블폴트 이후에는 스윙 전체를 고치려 하지 말고 리셋 루틴 하나만 봅니다. 동호회 첫 방문에서는 실력보다 매너와 호칭, 대기 순서를 먼저 봅니다. 셀프콜 분쟁에서는 누가 맞았는지보다 다음 포인트를 어떻게 정리할지 봅니다. ${main}도 이렇게 좁혀야 실행됩니다.</p>
<h2>${main}에서 흔한 오해</h2>
<p>첫 번째 오해는 감정이 올라온 상태에서 바로 결론을 내리는 것입니다. 오심, 매치포인트, 더블폴트, 첫 방문 긴장 같은 상황에서는 판단 속도를 늦추는 것만으로도 실수가 줄어듭니다. 두 번째 오해는 모든 사람에게 같은 기준을 적용하는 것입니다. 성인 입문자, 주니어, 시니어, 운동 초보, 동호회 초참자는 필요한 기준이 다릅니다. 세 번째 오해는 기록을 남기지 않는 것입니다. 오늘의 ${extended}가 다음 경기의 ${support}로 이어져야 의미가 있습니다.</p>
<p>실행 도구로는 <a href="${linkA[0]}">${linkA[1]}</a>를 먼저 활용하고, 이후에는 <a href="${linkB[0]}">${linkB[1]}</a>에 한 문장을 남기세요. 압박 상황은 스코어와 첫 반응을, 입문 주제는 다음 20분 과제를, 동호회 주제는 실제로 쓸 말 한 문장을 기록하면 충분합니다.</p>
<h2>초보와 중급자의 차이</h2>
<p>초보자는 ${row.title}을 정답 목록으로 받아들이기 쉽습니다. 중급자는 상황의 우선순위를 정합니다. 예를 들어 ${main}이 나오면 초보자는 기술, 멘탈, 상대 반응을 한꺼번에 바꾸려 합니다. 중급자는 ${extended} 하나를 먼저 확인하고, 나머지는 다음 포인트로 넘깁니다. 그래서 레벨 차이는 지식량보다 복구 속도에서 드러납니다.</p>
<ol>
  <li>오늘 자주 흔들린 상황 하나를 고릅니다.</li>
  <li>${extended}가 나온 순간을 짧게 적습니다.</li>
  <li>${support} 기준으로 다음 행동을 한 문장으로 만듭니다.</li>
  <li>다음 경기나 방문 전 그 문장만 다시 확인합니다.</li>
</ol>
<h2>경기 후 또는 방문 후 3분 기록법</h2>
<p>기록은 세 줄이면 충분합니다. 첫 줄에는 ${main}이 나온 장면을 적습니다. 둘째 줄에는 ${extended}가 흔들렸는지 적습니다. 셋째 줄에는 ${support}로 다음 행동을 씁니다. "오심 이후 다음 포인트 첫 샷이 급했다", "동호회 첫 방문에서 대기 순서를 먼저 확인했다", "더블폴트 뒤 세컨드 서브 목표가 사라졌다"처럼 구체적인 문장이 좋습니다.</p>
<details><summary>${row.title}은 초보자에게도 필요할까요?</summary><p>필요합니다. 초보일수록 기준을 적게 잡아야 경기와 동호회 적응이 쉬워집니다.</p></details>
<details><summary>${extended}가 자주 흔들리면 어떻게 하나요?</summary><p>기술을 크게 바꾸기 전에 멈춤 신호 하나를 정하세요. 같은 상황이 반복되면 다음 연습의 첫 20분 과제로 옮기면 됩니다.</p></details>
<details><summary>${support}는 얼마나 자세히 써야 하나요?</summary><p>한 문장이면 충분합니다. 다음 경기 전에 바로 읽고 행동으로 옮길 수 있어야 합니다.</p></details>
<p>정리하면 ${row.title}은 더 많은 정보를 외우는 글이 아니라, ${main}, ${extended}, ${support}를 통해 흔들리는 순간의 다음 행동을 정하는 글입니다. 오늘 한 상황만 고르고, 현장에서 한 번 멈추고, 끝난 뒤 세 줄로 남기세요. 그 정도가 실제로 반복 가능한 성장 기준입니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const faq = [
      { question: `${row.tags[0]}은 어디서부터 잡아야 하나요?`, answer: `${row.tags[1]}이 흔들리는 순간을 먼저 보고 ${row.tags[2]}를 다음 행동으로 남기면 됩니다.` },
      { question: `${row.category} 초보자도 바로 적용할 수 있나요?`, answer: "가능합니다. 한 번에 많이 바꾸지 말고 한 상황, 한 문장, 한 기록으로 줄이세요." },
      { question: "다음 연습은 어떻게 연결하나요?", answer: "경기 후 세 줄 기록에서 가장 반복된 장면을 골라 첫 20분 과제로 옮기면 됩니다." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.title}은 ${row.tags[0]}, ${row.tags[1]}, ${row.tags[2]}를 현장에서 쓸 수 있는 한 문장 기준으로 바꾸는 글입니다.`)},
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

export const BLOG_CONTENT_PART24_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = rows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-04-09T06:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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

const postsFile = `export const articleWriterPart24PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(JSON.stringify({ generated: rows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2));
