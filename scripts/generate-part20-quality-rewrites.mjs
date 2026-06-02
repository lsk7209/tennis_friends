#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part20-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part20-overrides.js");

const sources = [
  ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
  ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
];

const internalLinks = [
  ["/utility/serve-placement-mapper", "서브 코스 기록"],
  ["/utility/reaction-test", "리턴 반응 테스트"],
  ["/utility/doubles-positioning-simulator", "복식 위치 시뮬레이터"],
  ["/utility/match-analyzer", "경기 분석 도구"],
  ["/blog/tennis-practice-journal-guide", "연습 일지 가이드"],
];

const manualRows = [
  {
    slug: "aw-297-30-club-match",
    title: "혼자 연습 30분 동호회 적용",
    excerpt: "혼자 연습 30분은 동호회 경기에서 다시 확인할 한 장면으로 좁혀야 합니다.",
    category: "훈련 가이드",
    tags: ["혼자 연습", "30분 루틴", "동호회 경기"],
    angle: "혼자 만든 감각을 실제 경기 선택으로 연결하는 기준",
  },
  {
    slug: "aw-298-match-record",
    title: "경기 후 다음 연습 기록법",
    excerpt: "경기 후 다음 연습은 경기 기록 한 줄로 반복 실수를 먼저 고릅니다.",
    category: "경기 분석",
    tags: ["경기 후 복기", "다음 연습", "경기 기록"],
    angle: "감정 복기를 다음 주 훈련 과제로 바꾸는 기록법",
  },
];

const aw2Topics = [
  {
    base: "first-serve-in-ratio",
    stem: "첫 서브 인 비율",
    category: "서브 전략",
    tags: ["첫 서브", "인 비율", "서브 기록"],
  },
  {
    base: "second-serve-spin",
    stem: "세컨드 서브 회전",
    category: "서브 전략",
    tags: ["세컨드 서브", "회전 조절", "더블폴트"],
  },
  {
    base: "wide-serve-angle",
    stem: "와이드 서브 각도",
    category: "서브 전략",
    tags: ["와이드 서브", "서브 각도", "코스 만들기"],
  },
  {
    base: "kick-serve-toss",
    stem: "킥서브 토스 위치",
    category: "서브 전략",
    tags: ["킥서브", "토스 위치", "회전 궤적"],
  },
  {
    base: "post-serve-recovery",
    stem: "서브 후 첫 발 회복",
    category: "서브 전략",
    tags: ["서브 후 회복", "첫 발", "다음 공"],
  },
  {
    base: "deep-return-contact",
    stem: "깊은 리턴 임팩트",
    category: "리턴 전략",
    tags: ["깊은 리턴", "임팩트", "리턴 깊이"],
  },
  {
    base: "attack-second-serve",
    stem: "세컨드 서브 공격 리턴",
    category: "리턴 전략",
    tags: ["세컨드 서브", "공격 리턴", "리턴 타이밍"],
  },
  {
    base: "return-plus-one",
    stem: "리턴 다음 공 설계",
    category: "리턴 전략",
    tags: ["리턴 다음 공", "전환 공격", "코스 선택"],
  },
  {
    base: "chase-return-control",
    stem: "체이스 리턴 제어",
    category: "리턴 전략",
    tags: ["체이스 리턴", "리턴 제어", "수비 전환"],
  },
  {
    base: "doubles-poaching-cue",
    stem: "복식 포칭 신호",
    category: "복식 전술",
    tags: ["복식 포칭", "포칭 신호", "전위 움직임"],
  },
];

const variants = [
  {
    suffix: "beginner-checklist",
    title: (stem) => `${stem} 초보 체크`,
    excerpt: (stem) => `${stem} 초보 체크는 성공률보다 준비 위치와 반복 신호를 먼저 봅니다.`,
    angle: (stem) => `${stem}을 초보자가 바로 확인할 수 있는 체크 기준`,
  },
  {
    suffix: "twenty-min-routine",
    title: (stem) => `${stem} 20분 루틴`,
    excerpt: (stem) => `${stem} 20분 루틴은 한 장면 반복과 짧은 기록으로 충분합니다.`,
    angle: (stem) => `${stem}을 20분 안에 점검하는 압축 루틴`,
  },
  {
    suffix: "level-gap",
    title: (stem) => `${stem} 레벨 차이`,
    excerpt: (stem) => `${stem} 레벨 차이는 힘보다 준비 시간과 선택 기준에서 갈립니다.`,
    angle: (stem) => `${stem}에서 초보와 중급자의 판단 차이를 분리`,
  },
  {
    suffix: "match-record",
    title: (stem) => `${stem} 경기 기록`,
    excerpt: (stem) => `${stem} 경기 기록은 점수보다 다음 포인트에서 볼 신호를 남깁니다.`,
    angle: (stem) => `${stem}을 경기 후 복기 가능한 한 줄 기록으로 바꾸기`,
  },
  {
    suffix: "common-mistakes",
    title: (stem) => `${stem} 실수 줄이기`,
    excerpt: (stem) => `${stem} 실수 줄이기는 결과보다 반복 조건을 먼저 찾는 과정입니다.`,
    angle: (stem) => `${stem}에서 자주 반복되는 실수 조건을 끊는 방식`,
  },
];

const rows = [
  ...manualRows,
  ...aw2Topics.flatMap((topic, topicIndex) =>
    variants.map((variant, variantIndex) => {
      const id = String(topicIndex * variants.length + variantIndex + 1).padStart(3, "0");
      return {
        slug: `aw2-${id}-${topic.base}-${variant.suffix}`,
        title: variant.title(topic.stem),
        excerpt: variant.excerpt(topic.stem),
        category: topic.category,
        tags: topic.tags,
        angle: variant.angle(topic.stem),
      };
    }),
  ),
];

const selectedRows = rows.slice(0, 50);

const accents = [
  { border: "#0f766e", bg: "#ecfdf5" },
  { border: "#1d4ed8", bg: "#eff6ff" },
  { border: "#9333ea", bg: "#faf5ff" },
  { border: "#c2410c", bg: "#fff7ed" },
  { border: "#be123c", bg: "#fff1f2" },
];

function esc(value) {
  return JSON.stringify(value);
}

function sourceLinks() {
  return sources
    .map(([name, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`)
    .join(", ");
}

function relatedLinks(row) {
  const preferred =
    row.category === "복식 전술"
      ? internalLinks.filter(([href]) => href.includes("doubles") || href.includes("match"))
      : row.category === "리턴 전략"
        ? internalLinks.filter(([href]) => href.includes("reaction") || href.includes("match"))
        : internalLinks.filter(([href]) => href.includes("serve") || href.includes("match"));
  return [...preferred, ...internalLinks]
    .slice(0, 3)
    .map(([href, label]) => `<a href="${href}">${label}</a>`)
    .join(", ");
}

function buildTable(row) {
  const [main, extended, support] = row.tags;
  return `<table><thead><tr><th>판단 항목</th><th>유지할 신호</th><th>수정할 신호</th></tr></thead><tbody><tr><td>${main}</td><td>준비 위치가 먼저 정해진다</td><td>공이 온 뒤 급하게 반응한다</td></tr><tr><td>${extended}</td><td>반복 전후 차이가 기록된다</td><td>성공률만 보고 원인을 모른다</td></tr><tr><td>${support}</td><td>다음 포인트 선택으로 이어진다</td><td>연습과 경기 기록이 분리된다</td></tr></tbody></table>`;
}

function buildContent(row, index) {
  const accent = accents[index % accents.length];
  const [main, extended, support] = row.tags;
  const h2s = [
    `${main}을 먼저 좁혀야 하는 이유`,
    `${extended} 기준으로 경기 중 신호 읽기`,
    `${support}까지 연결하는 20분 루틴`,
    `${row.category} 기록을 다음 포인트로 바꾸기`,
  ];

  return `<div class="article-summary" style="border-left:4px solid ${accent.border};background:${accent.bg};padding:16px 18px;margin:20px 0;border-radius:8px;"><strong>${row.title}</strong><br>${row.excerpt}</div>
<p>${row.title}을 찾는 사람은 이미 비슷한 장면에서 여러 번 흔들렸을 가능성이 큽니다. 문제는 조언이 부족한 것이 아니라 경기 중 어떤 신호를 먼저 봐야 할지 흐려지는 데 있습니다. 이 글은 ${main}, ${extended}, ${support}를 한꺼번에 고치자는 글이 아닙니다. ${row.angle}에 맞춰 먼저 볼 기준과 나중에 남길 기록을 분리합니다. 기본 규칙과 훈련 원칙은 ${sourceLinks()}를 참고했고, 실제 동호회 경기에서 바로 확인 가능한 표현으로 정리했습니다.</p>
<p>오늘의 목표는 완벽한 정답이 아니라 다음 경기에서 다시 쓸 수 있는 기준입니다. 잘 된 날에도 이유를 설명하지 못하면 다음 경기에서 다시 흔들립니다. 실패한 날에도 어떤 조건에서 무너졌는지 남기면 다음 연습 주제가 생깁니다. 관련 도구와 참고 글은 ${relatedLinks(row)}에서 이어서 확인할 수 있습니다. 지금 가장 자주 반복되는 한 장면만 고르고, 그 장면에 이 기준을 적용하세요.</p>
<h2>${h2s[0]}</h2>
<p>${main}은 결과 이름처럼 보이지만 실제로는 준비 위치, 타이밍, 상대 공의 깊이, 몸 상태가 함께 섞인 신호입니다. 그래서 첫 단계는 큰 문제 이름을 붙이는 것이 아니라 직전 장면을 작게 나누는 일입니다. 준비가 늦었는지, 첫 발이 멈췄는지, 라켓 면이 열렸는지, 호흡이 끊겼는지를 나눠 봐야 합니다. 이 구분이 되면 같은 실수라도 다음 행동이 달라집니다.</p>
<aside style="border-left:4px solid ${accent.border};background:#fff;padding:14px 16px;margin:18px 0;border-radius:8px;"><strong>판단 박스</strong><br>${row.excerpt} 이 문장을 경기 전 기준으로 삼으면 선택이 흔들릴 때 다시 돌아올 지점이 생깁니다. 오늘의 성과는 더 강하게 치는 것이 아니라 같은 장면에서 같은 기준을 쓰는 것입니다.</aside>
<ul><li>${main}이 나온 점수와 위치를 함께 적습니다.</li><li>${extended}는 성공 여부보다 반복 가능한 준비 동작으로 봅니다.</li><li>${support}는 다음 경기에서 확인할 문장 하나로 압축합니다.</li><li>통증, 미끄럼, 장비 이상처럼 안전과 관련된 신호는 훈련 목표보다 먼저 확인합니다.</li></ul>
<h2>${h2s[1]}</h2>
<p>${extended}를 경기 중에 확인하려면 좋은 신호와 수정 신호를 분리해야 합니다. 좋은 신호는 다음 선택을 안정시키는 정보입니다. 수정 신호는 방금 점수를 잃었더라도 같은 실수가 왜 반복되는지 알려주는 정보입니다. 동호회 경기에서는 결과 감정이 강해서 이 구분이 쉽게 무너집니다. 이겼지만 위험 선택이 반복됐다면 연습 주제가 남아 있고, 졌지만 기준을 지켰다면 다음 경기에서 유지할 근거가 생깁니다.</p>
${buildTable(row)}
<p>표는 경기 직후 3분 안에 채울 정도로 짧아야 합니다. 길게 쓰면 기록 자체가 부담이 되고 결국 지속되지 않습니다. ${main}은 장면 이름, ${extended}는 판단 기준, ${support}는 다음 확인 문장으로 남기세요. 세 줄만 있어도 레슨에서 질문할 때 "왜 안 되나요"가 아니라 "이 장면에서 제 준비가 늦은지 봐주세요"처럼 구체적인 피드백을 받을 수 있습니다.</p>
<h2>${h2s[2]}</h2>
<p>20분 루틴은 네 구간이면 충분합니다. 처음 5분은 몸과 장비 상태를 확인합니다. 다음 7분은 같은 장면을 강도 없이 반복합니다. 그다음 5분은 실제 점수 상황을 붙입니다. 마지막 3분은 기록입니다. 이때 성공률을 길게 계산할 필요는 없습니다. ${support}가 다음 경기에서 다시 확인 가능한 문장으로 남았는지가 더 중요합니다.</p>
<ol><li>오늘 볼 기준을 ${main} 하나로 제한합니다.</li><li>${extended}가 드러나는 장면을 두 가지 이하로 고릅니다.</li><li>${support}와 연결되는 실제 점수 상황을 붙입니다.</li><li>마지막에는 다음 경기 전 읽을 문장 하나만 남깁니다.</li></ol>
<p>많은 동호인이 문제를 발견하면 그 자리에서 전부 바꾸려 합니다. 하지만 테니스는 움직임, 판단, 감정이 동시에 작동하는 종목이라 기준을 여러 개 바꾸면 무엇이 좋아졌는지 알기 어렵습니다. 하나를 고르고, 작게 확인하고, 다음 경기에서 다시 보는 방식이 더 오래 갑니다. 이 과정은 느려 보이지만 실제로는 같은 실수를 반복하는 시간을 줄여줍니다.</p>
<h2>${h2s[3]}</h2>
<p>${row.category}에서 중요한 것은 마지막에 "꾸준히 하세요"로 끝내지 않는 것입니다. 실제로 필요한 것은 다음 선택입니다. 오늘의 기록이 다음 레슨 질문, 다음 파트너 콜, 다음 서브 코스, 다음 리턴 위치 중 어디로 이어지는지 정해야 합니다. ${row.title}도 마찬가지입니다. 읽고 끝나는 정보가 아니라 경기 전 30초 안에 다시 확인할 체크 문장으로 남겨야 합니다.</p>
<details><summary>${main}은 하루 만에 바꿀 수 있나요?</summary><p>완전히 바꾸기는 어렵지만 한 가지 신호를 알아차리는 것은 가능합니다. 오늘은 성공률보다 같은 장면에서 같은 기준을 적용했는지 확인하세요.</p></details>
<details><summary>${extended}와 ${support} 중 무엇을 먼저 봐야 하나요?</summary><p>경기 중에는 ${extended}를 먼저 보고, 경기 후에는 ${support}를 확인하는 순서가 좋습니다. 동시에 둘 다 바꾸려 하면 원인 추적이 흐려집니다.</p></details>
<details><summary>초보자도 이 기준을 써도 되나요?</summary><p>초보자일수록 기준을 줄이는 편이 좋습니다. 다만 통증, 미끄럼, 장비 파손처럼 안전과 관련된 신호는 연습 목표보다 먼저 확인해야 합니다.</p></details>
<p>정리하면 ${row.title}의 목표는 더 많은 조언을 모으는 것이 아니라 ${main}, ${extended}, ${support}를 통해 다음 행동을 좁히는 것입니다. 경기 전에는 기준을 하나만 고르고, 경기 중에는 신호를 보고, 경기 후에는 다음 확인 문장을 남기세요. 이 흐름이 쌓이면 검색으로 얻은 정보가 실제 실력 변화로 이어집니다.</p>`;
}

const contentEntries = selectedRows
  .map((row, index) => {
    const faq = [
      { question: `${row.tags[0]}에서 가장 먼저 볼 기준은?`, answer: `${row.tags[1]}와 ${row.tags[2]}를 동시에 바꾸지 말고 경기 중 확인 가능한 신호 하나부터 봅니다.` },
      { question: `${row.category} 초보자도 적용할 수 있나요?`, answer: "가능합니다. 기준을 하나로 줄이고 통증, 미끄럼, 장비 이상 같은 안전 신호는 먼저 확인하세요." },
      { question: "경기 후에는 무엇을 기록하나요?", answer: "성공률보다 같은 장면이 반복됐는지, 다음 경기에서 확인할 문장이 남았는지를 적으면 충분합니다." },
    ];
    return `  ${esc(row.slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(row.tags)},
    summary: ${esc(row.excerpt)},
    highlight: ${esc(`${row.title}은 ${row.tags[0]}, ${row.tags[1]}, ${row.tags[2]}를 분리해 다음 경기에서 확인 가능한 기준으로 바꾸는 글입니다.`)},
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

export const BLOG_CONTENT_PART20_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries}
};
`;

const postEntries = selectedRows
  .map((row, index) => {
    const publishAt = new Date(
      Date.parse("2026-05-22T06:00:00+09:00") + index * 5 * 60 * 60 * 1000,
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

const postsFile = `export const articleWriterPart20PostOverrides = [
${postEntries}
];
`;

fs.mkdirSync(path.dirname(CONTENT_OUT), { recursive: true });
fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(
  JSON.stringify({ generated: selectedRows.length, content: CONTENT_OUT, posts: POSTS_OUT }, null, 2),
);
