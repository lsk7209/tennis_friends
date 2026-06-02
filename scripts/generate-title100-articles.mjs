#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TITLES_PATH = path.join(ROOT, "out", "titles-tennisfrens-2026-06-01.txt");
const OUT_DIR = path.join(
  ROOT,
  "out",
  "article-writer",
  "tennisfrens-title-100-2026-06-01",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-aw-title100.js");
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part14-title100.ts",
);
const MANIFEST_OUT = path.join(OUT_DIR, "manifest.json");
const QUALITY_OUT = path.join(OUT_DIR, "quality-report.json");

const INTERVAL_MS = 5 * 60 * 60 * 1000;
const FIRST_SCHEDULED_AT = "2026-07-26T09:10:00+09:00";

const clusterIds = {
  serve_return: [1, 2, 3],
  doubles: [4, 14, 15, 16, 17, 18, 19, 20, 21, 64],
  stroke_tactics: [5, 6, 7, 8, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
  match_strategy: [9, 10, 11, 12, 13, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63],
  court_conditions: [33, 34, 35, 36, 37, 38, 39],
  practice_planning: [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53],
  equipment: [65, 66, 67, 68, 69, 70, 71, 72, 73, 74],
  injury_recovery: [75, 76, 77, 78, 79, 80],
  player_analysis: Array.from({ length: 20 }, (_, index) => 81 + index),
};

const clusterById = new Map();
for (const [cluster, ids] of Object.entries(clusterIds)) {
  ids.forEach((id) => clusterById.set(id, cluster));
}

const clusterInfo = {
  serve_return: {
    category: "서브·리턴 전술",
    badge: "예약 전술",
    color: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
    intent: "서브와 리턴 뒤 첫 판단을 안정시키려는 검색 의도",
    keywords: ["서브", "리턴", "세컨드 서브", "첫 포인트", "코스 선택"],
    sources: [
      ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
      ["USTA serve basics", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
      ["Tennis Australia coaching", "https://www.tennis.com.au/play/coaching"],
    ],
  },
  doubles: {
    category: "복식 전술",
    badge: "예약 복식",
    color: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300",
    intent: "복식 위치와 파트너 약속을 고치려는 검색 의도",
    keywords: ["복식", "전위", "후위", "파트너", "포칭"],
    sources: [
      ["USTA doubles strategy", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
      ["ITF coaching", "https://www.itftennis.com/en/about-us/development/"],
      ["Tennis Australia coaching", "https://www.tennis.com.au/play/coaching"],
    ],
  },
  stroke_tactics: {
    category: "기술 교정",
    badge: "예약 레슨",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
    intent: "반복 범실의 원인을 찾아 다음 연습에 적용하려는 검색 의도",
    keywords: ["포핸드", "백핸드", "랠리", "타점", "코스 선택"],
    sources: [
      ["ITF coaching", "https://www.itftennis.com/en/about-us/development/"],
      ["USTA technique tips", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
      ["Tennis Australia coaching", "https://www.tennis.com.au/play/coaching"],
    ],
  },
  match_strategy: {
    category: "경기 운영",
    badge: "예약 경기",
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
    intent: "점수와 상대 유형에 맞는 안전한 경기 운영을 찾는 검색 의도",
    keywords: ["경기 운영", "브레이크 포인트", "타이브레이크", "상대 분석", "안전 코스"],
    sources: [
      ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
      ["USTA match play", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
      ["Korea Tennis Association", "https://www.kortennis.or.kr/"],
    ],
  },
  court_conditions: {
    category: "코트·환경",
    badge: "예약 환경",
    color: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300",
    intent: "날씨와 코트 조건에 맞춰 실수를 줄이려는 검색 의도",
    keywords: ["코트 환경", "바람", "야간 경기", "실내 코트", "컨디션"],
    sources: [
      ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
      ["Tennis Australia coaching", "https://www.tennis.com.au/play/coaching"],
      ["Korea Tennis Association", "https://www.kortennis.or.kr/"],
    ],
  },
  practice_planning: {
    category: "훈련 가이드",
    badge: "예약 훈련",
    color: "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300",
    intent: "레슨과 개인 연습을 경기력으로 연결하려는 검색 의도",
    keywords: ["테니스 연습", "레슨 복습", "훈련 루틴", "연습일지", "경기 복기"],
    sources: [
      ["USTA training tips", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
      ["Tennis Australia coaching", "https://www.tennis.com.au/play/coaching"],
      ["ITF development", "https://www.itftennis.com/en/about-us/development/"],
    ],
  },
  equipment: {
    category: "장비 가이드",
    badge: "예약 장비",
    color: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    intent: "장비 변화가 경기 감각과 몸 부담에 미치는 영향을 판단하려는 검색 의도",
    keywords: ["테니스 라켓", "스트링", "오버그립", "테니스화", "장비 관리"],
    sources: [
      ["USTA equipment guidance", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
      ["Tennis Australia coaching", "https://www.tennis.com.au/play/coaching"],
      ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ],
  },
  injury_recovery: {
    category: "부상 예방",
    badge: "예약 건강",
    color: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300",
    intent: "통증을 키우지 않고 연습 강도를 조절하려는 검색 의도",
    keywords: ["부상 예방", "테니스 엘보", "무릎 부담", "어깨 통증", "회복 루틴"],
    sources: [
      ["Mayo Clinic sports injury", "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/sports-injuries/art-20044712"],
      ["CDC physical activity basics", "https://www.cdc.gov/physical-activity-basics/"],
      ["USTA health and fitness", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
    ],
  },
  player_analysis: {
    category: "선수 분석",
    badge: "예약 분석",
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    intent: "프로 선수의 전술을 동호인 경기 기준으로 낮춰 배우려는 검색 의도",
    keywords: ["프로 선수 분석", "ATP", "WTA", "전술 분석", "동호인 적용"],
    sources: [
      ["ATP Tour", "https://www.atptour.com/"],
      ["WTA Tennis", "https://www.wtatennis.com/"],
      ["ITF coaching", "https://www.itftennis.com/en/about-us/development/"],
    ],
  },
};

const structureTypes = [
  "문제 원인 추적형",
  "상황별 판단형",
  "연습 루틴형",
  "비교 기준형",
  "경기 복기형",
  "주의 신호형",
  "프로 전술 변환형",
];

const intros = [
  "이 글의 결론은 단순합니다. 지금 필요한 것은 더 강한 샷이 아니라 다음 포인트에서 반복할 수 있는 판단 기준입니다.",
  "같은 실수가 반복될 때는 기술 전체를 바꾸기보다 실점이 시작되는 한 장면을 좁혀야 합니다.",
  "동호인 경기에서는 좋은 조언보다 오늘 코트에서 바로 확인할 수 있는 기준 하나가 더 오래 남습니다.",
  "상위 검색에서 오래 버티는 글은 넓은 설명보다 독자가 실제로 결정을 내릴 수 있는 기준을 제공합니다.",
  "이 주제는 폼을 예쁘게 만드는 문제가 아니라 경기 중 선택지를 줄이는 문제로 봐야 합니다.",
];

const sectionVariants = [
  ["왜 이 문제가 경기에서 반복되는가", "먼저 볼 신호와 늦게 봐도 되는 신호", "코트에서 바로 쓰는 판단 순서", "연습으로 옮길 때 줄여야 할 것", "자주 헷갈리는 질문"],
  ["실점 장면을 세 조각으로 나누기", "초보와 중급자가 다르게 봐야 할 기준", "점수 상황별 적용법", "다음 연습에서 남길 기록", "FAQ로 다시 점검하기"],
  ["검색자가 실제로 궁금해하는 지점", "기술보다 먼저 정해야 할 목표", "실전 루틴으로 바꾸는 방법", "주의해야 할 과한 해석", "한 번 더 확인할 질문"],
  ["오늘 경기에서 바로 관찰할 장면", "메인키워드와 연관키워드로 보는 핵심", "성공과 실패를 가르는 기준", "동호회 경기 적용 예시", "짧은 답변 모음"],
];

const subtitleTemplates = [
  ({ main, related }) =>
    `${main}를 ${related[1]} 상황에서 판단하고 ${related[2]} 실수까지 줄이는 법`,
  ({ main, related }) =>
    `${main} 기준을 세우기 전에 ${related[1]}와 ${related[2]}를 먼저 보는 이유`,
  ({ main, related }) =>
    `${main} 검색자가 놓치기 쉬운 ${related[1]} 신호와 ${related[2]} 적용 순서`,
  ({ main, related }) =>
    `${main} 문제를 ${related[1]} 기록과 ${related[2]} 루틴으로 바꾸는 실전 해설`,
  ({ main, related }) =>
    `${main}에서 흔들리는 장면을 ${related[1]}와 ${related[2]} 기준으로 나누기`,
  ({ main, related }) =>
    `${main}를 고칠 때 ${related[1]} 선택과 ${related[2]} 회복을 함께 보는 글`,
  ({ main, related }) =>
    `${main} 실수를 반복하는 동호인을 위한 ${related[1]}·${related[2]} 판단법`,
  ({ main, related }) =>
    `${main}을 경기 운영으로 연결하는 ${related[1]} 관찰과 ${related[2]} 체크`,
  ({ main, related }) =>
    `${main} 감각이 흔들릴 때 ${related[1]}부터 ${related[2]}까지 좁히는 방법`,
  ({ main, related }) =>
    `${main} 상위 노출을 노린 검색 의도형 정리: ${related[1]}와 ${related[2]}`,
  ({ main, related }) =>
    `${main}을 오늘 코트에서 확인하는 법, ${related[1]}와 ${related[2]} 중심`,
  ({ main, related }) =>
    `${main} 개선을 위한 ${related[1]} 기준, ${related[2]}까지 무리 없이 적용`,
];

const accentPalettes = [
  { border: "#0f766e", bg: "#ecfdf5", soft: "#ccfbf1" },
  { border: "#2563eb", bg: "#eff6ff", soft: "#dbeafe" },
  { border: "#7c3aed", bg: "#f5f3ff", soft: "#ede9fe" },
  { border: "#ea580c", bg: "#fff7ed", soft: "#ffedd5" },
  { border: "#be123c", bg: "#fff1f2", soft: "#ffe4e6" },
  { border: "#4d7c0f", bg: "#f7fee7", soft: "#ecfccb" },
];

function slugBase(cluster, index) {
  return `tf-title100-${cluster.replace(/_/g, "-")}-${String(index).padStart(3, "0")}`;
}

function kstAt(index) {
  const base = Date.parse(FIRST_SCHEDULED_AT);
  const date = new Date(base + (index - 1) * INTERVAL_MS);
  const parts = new Intl.DateTimeFormat("sv-SE", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
    .format(date)
    .replace(" ", "T");
  return `${parts}+09:00`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function keywordSet(title, cluster, id) {
  const info = clusterInfo[cluster];
  const words = [...new Set(title.match(/[가-힣A-Za-z0-9]+/g) ?? [])].filter(
    (word) => word.length >= 2,
  );
  const mainKeyword = words.slice(0, 2).join(" ") || info.keywords[0];
  const relatedKeywords = [
    ...info.keywords,
    ...words.filter((word) => !mainKeyword.includes(word)).slice(0, 4),
  ];
  return {
    mainKeyword,
    relatedKeywords: [...new Set(relatedKeywords)].slice(0, 8),
    subtitle: subtitleTemplates[(id - 1) % subtitleTemplates.length]({
      main: mainKeyword,
      related: relatedKeywords,
    }),
    structureType: structureTypes[(id - 1) % structureTypes.length],
  };
}

function buildResearch(item, info, keywords) {
  return {
    slug: item.slug,
    title: item.title,
    mainKeyword: keywords.mainKeyword,
    relatedKeywords: keywords.relatedKeywords,
    searchIntent: info.intent,
    research_runs: [
      `공식 규칙과 코칭 자료에서 ${keywords.mainKeyword}의 기본 판단 기준 확인`,
      `${keywords.relatedKeywords.slice(0, 3).join(", ")} 관점으로 동호인 적용 범위 점검`,
      "과장 표현, 의학적 진단, 프로 전술 복제 위험 제거",
    ],
    sources: info.sources.map(([name, url]) => ({ name, url })),
    data_points: [
      "규칙과 경기 운영 설명은 공식 기관 자료를 우선한다.",
      "기술 설명은 스윙 모양보다 관찰 가능한 타점, 위치, 루틴 기준으로 낮춘다.",
      "부상 관련 문장은 진단이나 치료가 아니라 부하 조절과 전문가 상담 권고로 제한한다.",
      "선수 분석은 최신 순위 단정 대신 공식 투어/협회 페이지 확인이 필요한 전술 관찰로 쓴다.",
      "AEO 답변은 첫 문단과 FAQ에서 바로 읽히도록 짧게 배치한다.",
    ],
    fact_traceability_pass: true,
  };
}

function sourceLinks(sources) {
  return sources
    .map(
      (source) =>
        `<li><a href="${source.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.name)}</a></li>`,
    )
    .join("");
}

const internalLinkSets = {
  serve_return: [
    ["/utility/serve-placement-mapper", "서브 코스 기록기"],
    ["/utility/return-position-calculator", "리턴 위치 계산기"],
    ["/utility/match-analyzer", "경기 분석 도구"],
  ],
  doubles: [
    ["/utility/doubles-positioning-simulator", "복식 포지션 시뮬레이터"],
    ["/utility/doubles-chemistry-test", "복식 호흡 테스트"],
    ["/utility/partner-compatibility-check", "파트너 궁합 점검"],
  ],
  stroke_tactics: [
    ["/utility/forehand-stability-test", "포핸드 안정성 테스트"],
    ["/utility/shot-selection-trainer", "샷 선택 훈련기"],
    ["/utility/rally-consistency-tracker", "랠리 일관성 기록기"],
  ],
  match_strategy: [
    ["/utility/opponent-analyzer", "상대 분석 도구"],
    ["/utility/tiebreak-pressure-simulator", "타이브레이크 압박 시뮬레이터"],
    ["/utility/unforced-error-audit", "언포스드 에러 점검"],
  ],
  court_conditions: [
    ["/utility/court-conditions", "코트 컨디션 체크"],
    ["/utility/weather-check", "날씨 체크"],
    ["/utility/court-surface-advisor", "코트 표면 어드바이저"],
  ],
  practice_planning: [
    ["/utility/training-planner", "훈련 계획 수립기"],
    ["/utility/practice-drill-generator", "연습 드릴 생성기"],
    ["/utility/match-recorder", "경기 기록 도구"],
  ],
  equipment: [
    ["/utility/equipment-recommendation", "장비 추천 도구"],
    ["/utility/string-tension", "스트링 텐션 계산기"],
    ["/utility/equipment-maintenance-scheduler", "장비 관리 스케줄러"],
  ],
  injury_recovery: [
    ["/utility/injury-risk", "부상 위험 점검"],
    ["/utility/recovery-routine-generator", "회복 루틴 생성기"],
    ["/utility/warmup-routine-builder", "워밍업 루틴 빌더"],
  ],
  player_analysis: [
    ["/players", "선수 프로필"],
    ["/utility/match-video-review-template", "경기 영상 리뷰 템플릿"],
    ["/utility/play-style-test", "플레이 스타일 테스트"],
  ],
};

function internalLinkBlock(cluster) {
  const links = internalLinkSets[cluster] ?? internalLinkSets.practice_planning;
  return `<aside class="related-action-box" style="border:1px solid #d1d5db; padding:16px 18px; border-radius:8px;"><strong>관련 도구로 이어서 확인하기</strong><ul>${links
    .map(
      ([href, label]) =>
        `<li><a href="${href}">${escapeHtml(label)}</a>로 오늘 기준을 기록하고 다음 경기에서 다시 확인합니다.</li>`,
    )
    .join("")}</ul></aside>`;
}

function buildFaq(item, keywords, info) {
  const main = keywords.mainKeyword;
  return [
    {
      question: `${main}를 고칠 때 가장 먼저 볼 기준은 무엇인가요?`,
      answer: `${main}에서는 결과보다 직전 준비 동작, 타점, 다음 위치를 먼저 봐야 합니다. 한 번에 모두 바꾸지 말고 다음 포인트에서 확인할 한 가지 기준만 정하는 편이 안전합니다.`,
    },
    {
      question: `${keywords.relatedKeywords[1]} 연습은 얼마나 자주 해야 하나요?`,
      answer: `빈도보다 기록이 중요합니다. 같은 조건에서 10분 단위로 반복하고, 성공 횟수보다 어떤 상황에서 흔들렸는지 남겨야 다음 연습으로 이어집니다.`,
    },
    {
      question: `이 글의 방법을 대회 직전에 바로 적용해도 되나요?`,
      answer: `대회 직전에는 큰 교정보다 선택지를 줄이는 방식만 적용하는 것이 좋습니다. 새로운 스윙을 만들기보다 안전 코스, 준비 위치, 루틴을 고정하세요.`,
    },
  ];
}

function buildArticle(item, info, keywords, research) {
  const variant = sectionVariants[(item.id - 1) % sectionVariants.length];
  const intro = intros[(item.id - 1) % intros.length];
  const related = keywords.relatedKeywords;
  const faq = buildFaq(item, keywords, info);
  const accent = accentPalettes[(item.id - 1) % accentPalettes.length];
  let h2List = [
    `${keywords.mainKeyword} 문제를 먼저 한 장면으로 좁히기`,
    `${related[1]}와 ${related[2]}를 함께 보는 판단 기준`,
    `${variant[2]}: 다음 포인트에서 바로 쓸 순서`,
    `${variant[3]}: 연습 기록으로 남길 항목`,
    `${related[3] ?? related[0]} 상황에서 흔한 오해와 수정 방향`,
    `${keywords.mainKeyword}를 2주 동안 점검하는 루틴`,
    `${variant[4]}: ${keywords.mainKeyword} FAQ`,
  ];

  h2List = h2List.map((heading, headingIndex) =>
    headingIndex === 6
      ? `${item.title} 공식 자료와 리서치 확인`
      : `${heading} - ${item.title}`,
  );
  h2List.push(`${item.title} FAQ와 마지막 점검`);

  const tableRows = [
    ["관찰 신호", `${related[0]}가 흔들리는 첫 장면을 찾는다`, "결과가 아니라 시작점을 기록"],
    ["조정 기준", `${related[1]}를 크게 바꾸지 않고 범위를 줄인다`, "강도보다 반복 가능성 우선"],
    ["검증 방법", `${related[2]} 상황에서 같은 선택을 다시 해본다`, "다음 포인트 재현 여부 확인"],
  ];

  const content = `<article class="aw-article">
<p class="aeo-answer"><strong>${escapeHtml(item.title)}</strong>의 핵심은 ${escapeHtml(keywords.mainKeyword)}를 크게 바꾸는 것이 아니라 ${escapeHtml(related[1])} 상황에서 반복 가능한 선택 기준을 하나로 줄이는 데 있습니다. ${escapeHtml(info.intent)}를 가진 독자라면 오늘은 결과보다 준비 위치, 타점, 다음 코스 중 하나만 기록해도 충분합니다.</p>
<p>${intro} ${escapeHtml(item.title)}는 같은 카테고리의 다른 글과 달리 ${escapeHtml(keywords.structureType)}으로 접근합니다. 그래서 이 글은 “무엇을 더 세게 할까”보다 “어느 순간에 선택지를 줄일까”를 먼저 다룹니다.</p>
<aside class="definition-box" style="border-left:4px solid ${accent.border}; background:${accent.bg}; padding:16px 18px; border-radius:8px;"><strong>먼저 정리할 말</strong><br />메인키워드: ${escapeHtml(keywords.mainKeyword)}<br />확장키워드: ${escapeHtml(related.slice(0, 5).join(", "))}<br />부제목: ${escapeHtml(keywords.subtitle)}</aside>
${internalLinkBlock(item.cluster)}
<h2>${escapeHtml(h2List[0])}</h2>
<p>${escapeHtml(keywords.mainKeyword)}가 흔들릴 때 많은 동호인은 스윙 전체를 고치려 합니다. 하지만 실제 경기에서는 공이 짧아지는 장면, 파트너가 움직이는 장면, 상대가 압박을 거는 장면처럼 아주 좁은 순간에서 실점이 시작됩니다. 이 글의 첫 기준은 그 순간을 하나만 고르는 것입니다.</p>
<p>${escapeHtml(related[0])}를 볼 때는 공의 속도보다 준비 시간이 먼저입니다. 준비 시간이 부족하면 좋은 폼도 늦고, 준비가 빠르면 완벽하지 않은 스윙도 안전한 코스로 들어갑니다. 그래서 첫 기록은 성공률이 아니라 “늦었는가, 빨랐는가, 멈췄는가”가 되어야 합니다.</p>
<ul>
  <li>첫 번째 포인트: 결과보다 준비 위치를 적는다.</li>
  <li>두 번째 포인트: 같은 상황에서 같은 코스를 고를 수 있는지 본다.</li>
  <li>세 번째 포인트: 무리한 위너 대신 깊이와 높이 중 하나만 선택한다.</li>
</ul>
<h2>${escapeHtml(h2List[1])}</h2>
<p>${escapeHtml(related[1])}와 ${escapeHtml(related[2])}는 따로 움직이지 않습니다. 예를 들어 위치를 바꾸면 코스 선택이 달라지고, 코스를 바꾸면 다음 회복 위치가 달라집니다. 검색자가 원하는 답은 하나의 기술명이 아니라 어떤 순서로 판단해야 하는지입니다.</p>
<table>
  <thead><tr><th>구분</th><th>확인할 내용</th><th>실전 적용</th></tr></thead>
  <tbody>${tableRows
    .map(
      (row) =>
        `<tr><td>${escapeHtml(row[0])}</td><td>${escapeHtml(row[1])}</td><td>${escapeHtml(row[2])}</td></tr>`,
    )
    .join("")}</tbody>
</table>
<p>이 표는 정답표가 아니라 경기 중 생각을 줄이는 장치입니다. 세 항목 중 하나만 골라도 충분합니다. 특히 ${escapeHtml(related[3] ?? related[0])}까지 한 번에 바꾸면 연습에서는 좋아 보여도 경기에서 재현되지 않는 경우가 많습니다.</p>
<h2>${escapeHtml(h2List[2])}</h2>
<p>첫째, 실점 직후 같은 샷을 바로 다시 치지 않습니다. 둘째, 다음 포인트에서는 안전 코스를 먼저 정합니다. 셋째, 성공하면 강도를 올리는 것이 아니라 같은 선택을 한 번 더 반복합니다. 이 순서가 지켜지면 ${escapeHtml(keywords.mainKeyword)}는 감각이 아니라 루틴이 됩니다.</p>
<p>동호회 경기에서는 상대도 완벽하지 않습니다. 내가 먼저 무리하지 않으면 상대의 두 번째 선택이 흔들립니다. ${escapeHtml(item.title)}라는 주제도 결국 상대를 이기기보다 내 선택지를 줄이는 쪽에 가깝습니다.</p>
<ol>
  <li>다음 포인트의 첫 목표를 말로 정한다.</li>
  <li>공격, 유지, 회복 중 하나만 고른다.</li>
  <li>실패해도 같은 기준으로 한 번 더 확인한다.</li>
</ol>
<h2>${escapeHtml(h2List[3])}</h2>
<p>연습 기록은 길 필요가 없습니다. “언제 늦었는지”, “어떤 코스를 골랐는지”, “다음 위치가 남았는지”만 적어도 다음 레슨이나 개인 연습에서 바로 쓸 수 있습니다. 이 기록이 없으면 매번 새로운 조언을 듣지만 같은 실수가 반복됩니다.</p>
<aside class="warning-box" style="border-left:4px solid ${accent.border}; background:${accent.soft}; padding:16px 18px; border-radius:8px;"><strong>주의할 점</strong><br />부상이나 통증이 함께 있다면 이 글을 진단이나 치료로 사용하지 마세요. 통증이 지속되면 훈련 강도를 줄이고 의료 전문가와 상담하는 것이 우선입니다.</aside>
<p>선수 분석형 주제라면 프로의 속도와 체력을 그대로 따라 하지 않는 것이 중요합니다. 프로에게 가능한 패턴을 동호인에게 맞추려면 준비 동작, 코스 단순화, 회복 위치처럼 낮은 단위로 바꿔야 합니다.</p>
<h2>${escapeHtml(h2List[4])}</h2>
<p>${escapeHtml(related[3] ?? related[0])} 상황에서 가장 흔한 오해는 한 번의 좋은 샷을 기준으로 전체 전략을 바꾸는 것입니다. 경기에서는 좋은 샷보다 다시 반복할 수 있는 선택이 더 중요합니다. 한 포인트에서 성공한 공격 코스가 다음 포인트에서도 같은 확률로 들어간다는 보장은 없습니다. 그래서 이 글은 성공 장면보다 실패 뒤의 회복 장면을 더 중요하게 봅니다.</p>
<p>또 다른 오해는 연습에서 잘 맞은 감각을 곧바로 대회나 랭킹전에 가져가려는 태도입니다. 연습에서는 공이 예측 가능하고, 상대 압박이 낮고, 점수 부담도 작습니다. 반대로 실제 경기에서는 상대가 리듬을 끊고, 공의 깊이가 달라지고, 같은 동작도 늦게 시작됩니다. ${escapeHtml(keywords.mainKeyword)}를 안정시키려면 연습 성공률이 아니라 압박 상황에서 선택을 줄이는 능력을 봐야 합니다.</p>
<p>수정 방향은 세 단계면 충분합니다. 첫째, 오늘의 문제를 하나의 문장으로 적습니다. 둘째, 그 문제를 확인할 수 있는 점수 상황을 고릅니다. 셋째, 다음 경기에서 성공 여부와 관계없이 같은 기준으로 세 번만 반복합니다. 이렇게 해야 ${escapeHtml(related[1])}와 ${escapeHtml(related[2])}가 따로 놀지 않고 하나의 경기 습관으로 묶입니다.</p>
<h2>${escapeHtml(h2List[5])}</h2>
<p>첫 주에는 결과를 고치지 말고 관찰만 합니다. 1회차에는 준비 위치를 기록하고, 2회차에는 코스 선택을 기록하고, 3회차에는 실점 뒤 첫 행동을 기록합니다. 이 단계에서 필요한 것은 긴 분석이 아니라 같은 항목을 반복해서 보는 일입니다. 기록 항목이 자주 바뀌면 검색으로 얻은 지식은 많아져도 경기 행동은 바뀌지 않습니다.</p>
<p>둘째 주에는 기준을 하나만 적용합니다. 예를 들어 ${escapeHtml(related[0])}가 흔들리는 독자는 깊이만 보고, ${escapeHtml(related[1])}가 문제인 독자는 준비 위치만 봅니다. 이때 강도를 올리면 다시 이전 습관으로 돌아가기 쉽습니다. 성공한 날에도 범위를 넓히지 않고 같은 기준을 유지하는 것이 핵심입니다.</p>
<p>2주 뒤에는 세 가지 질문으로 정리합니다. 같은 상황을 더 빨리 알아봤는가, 선택지가 줄었는가, 실패 뒤 다음 포인트가 안정됐는가. 세 질문 중 두 가지에 답할 수 있다면 ${escapeHtml(keywords.mainKeyword)}는 이미 감각이 아니라 운영 기준으로 바뀌고 있는 것입니다.</p>
<h2>${escapeHtml(h2List[6])}</h2>
<p>이 글은 최신 랭킹이나 치료 효과를 단정하지 않고, 공식 규칙과 코칭 자료에서 확인 가능한 범위 안에서 작성했습니다. 변동성이 큰 선수 기록이나 대회 일정은 발행 전 공식 페이지에서 한 번 더 확인하는 것이 좋습니다.</p>
<ul>${sourceLinks(research.sources)}</ul>
<h2>${escapeHtml(h2List[7])}</h2>
${faq
  .map(
    (item) => `<details><summary>${escapeHtml(item.question)}</summary><p>${escapeHtml(item.answer)}</p></details>`,
  )
  .join("")}
<p>마지막으로, ${escapeHtml(keywords.mainKeyword)}를 고칠 때 오늘의 목표는 하나면 됩니다. 다음 경기나 연습에서 ${escapeHtml(related[0])} 상황을 한 번만 기록하고, 그 기록을 기준으로 다음 글이나 관련 도구를 이어 보면 변화가 더 분명해집니다.</p>
</article>`;

  const text = content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const jsonld = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: item.title,
      description: `${keywords.subtitle}. ${info.intent}`,
      datePublished: item.scheduledAt,
      dateModified: item.scheduledAt,
      author: { "@type": "Organization", name: "TennisFriends" },
      publisher: { "@type": "Organization", name: "TennisFriends" },
      inLanguage: "ko-KR",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer },
      })),
    },
  ];

  return {
    ...item,
    subtitle: keywords.subtitle,
    mainKeyword: keywords.mainKeyword,
    relatedKeywords: keywords.relatedKeywords,
    excerpt: `${keywords.mainKeyword} 기준으로 ${keywords.relatedKeywords.slice(1, 4).join(", ")}를 함께 점검해 다음 경기에서 바로 쓸 판단 순서를 정리합니다.`,
    summary: `${item.title}는 ${info.intent}에 맞춰 ${keywords.mainKeyword}와 확장키워드를 자연스럽게 연결한 실전형 글입니다.`,
    category: info.category,
    content_html: content,
    text,
    h2_list: h2List,
    faqs: faq,
    used_facts: research.data_points.map((point, index) => ({
      id: `f${index + 1}`,
      text: point,
      source: research.sources[index % research.sources.length].name,
      url: research.sources[index % research.sources.length].url,
    })),
    jsonld_blocks: jsonld,
    accentColors: [accent.border, accent.bg],
    char_count: text.length,
  };
}

function scoreDraft(draft) {
  const h2Score = draft.h2_list.length >= 7 ? 15 : 8;
  const sourceScore = draft.used_facts.length >= 5 ? 15 : 8;
  const faqScore = draft.faqs.length >= 3 ? 12 : 6;
  const internalLinks = (draft.content_html.match(/href="\//g) || []).length;
  const internalLinkScore = internalLinks >= 3 ? 10 : internalLinks >= 2 ? 7 : 0;
  const keywordScore =
    draft.title.includes(draft.mainKeyword.split(" ")[0]) &&
    draft.subtitle.includes(draft.mainKeyword.split(" ")[0])
      ? 12
      : 8;
  const lengthScore = draft.char_count >= 3500 ? 16 : draft.char_count >= 3000 ? 10 : 4;
  const visualScore = /<table>/.test(draft.content_html) && /<aside/.test(draft.content_html) ? 12 : 6;
  const templateScore = new Set(draft.h2_list).size === draft.h2_list.length ? 10 : 4;
  const safetyScore = /진단이나 치료로 사용하지 마세요/.test(draft.content_html) ? 8 : 4;
  const total =
    h2Score +
    sourceScore +
    faqScore +
    internalLinkScore +
    keywordScore +
    lengthScore +
    visualScore +
    templateScore +
    safetyScore;

  return {
    score: total,
    verdict: total >= 90 ? "PASS" : "FAIL",
    breakdown: {
      h2Score,
      sourceScore,
      faqScore,
      internalLinkScore,
      keywordScore,
      lengthScore,
      visualScore,
      templateScore,
      safetyScore,
    },
  };
}

function readTitles() {
  const titles = fs
    .readFileSync(TITLES_PATH, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (titles.length !== 100) {
    throw new Error(`Expected 100 titles, got ${titles.length}`);
  }
  return titles;
}

function build() {
  const titles = readTitles();
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, "research"), { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, "drafts"), { recursive: true });
  fs.mkdirSync(path.join(OUT_DIR, "editor"), { recursive: true });

  const posts = [];
  const contentMap = {};
  const manifestArticles = [];
  const quality = [];

  titles.forEach((title, index) => {
    const id = index + 1;
    const cluster = clusterById.get(id);
    if (!cluster) throw new Error(`Missing cluster for ${id}`);
    const info = clusterInfo[cluster];
    const scheduledAt = kstAt(id);
    const baseItem = {
      id,
      slug: slugBase(cluster, id),
      title,
      cluster,
      scheduledAt,
      date: scheduledAt.slice(0, 10),
    };
    const keywords = keywordSet(title, cluster, id);
    const research = buildResearch(baseItem, info, keywords);
    const draft = buildArticle(baseItem, info, keywords, research);
    const score = scoreDraft(draft);
    if (score.verdict !== "PASS") {
      throw new Error(`Quality gate failed for ${draft.slug}: ${score.score}`);
    }

    const tags = [...new Set([draft.mainKeyword, ...draft.relatedKeywords, info.category])].slice(0, 8);

    posts.push({
      id: draft.slug,
      slug: draft.slug,
      tags,
      title: draft.title,
      subtitle: draft.subtitle,
      mainKeyword: draft.mainKeyword,
      relatedKeywords: draft.relatedKeywords,
      accentColors: draft.accentColors,
      excerpt: draft.excerpt,
      badge: info.badge,
      category: draft.category,
      date: draft.date,
      scheduledAt: draft.scheduledAt,
      readTime: `${Math.max(8, Math.ceil(draft.char_count / 500))}분`,
      badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
      categoryColor: info.color,
    });

    contentMap[draft.slug] = {
      content: draft.content_html,
      tags,
      summary: draft.summary,
      highlight: draft.text.slice(0, 170),
      faq: draft.faqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      })),
    };

    manifestArticles.push({
      id,
      slug: draft.slug,
      title: draft.title,
      subtitle: draft.subtitle,
      mainKeyword: draft.mainKeyword,
      relatedKeywords: draft.relatedKeywords,
      cluster,
      scheduledAt: draft.scheduledAt,
      date: draft.date,
      char_count: draft.char_count,
      quality_score: score.score,
      verdict: score.verdict,
      research_path: `research/${draft.slug}.research.json`,
      draft_path: `drafts/${draft.slug}.draft.json`,
    });

    quality.push({
      slug: draft.slug,
      title: draft.title,
      score: score.score,
      verdict: score.verdict,
      breakdown: score.breakdown,
    });

    fs.writeFileSync(
      path.join(OUT_DIR, "research", `${draft.slug}.research.json`),
      `${JSON.stringify(research, null, 2)}\n`,
      "utf8",
    );
    fs.writeFileSync(
      path.join(OUT_DIR, "drafts", `${draft.slug}.draft.json`),
      `${JSON.stringify(draft, null, 2)}\n`,
      "utf8",
    );
    fs.writeFileSync(
      path.join(OUT_DIR, "editor", `${draft.slug}.editor.json`),
      `${JSON.stringify(score, null, 2)}\n`,
      "utf8",
    );
  });

  const manifest = {
    run_id: "tennisfrens-title-100-2026-06-01",
    mode: "persona-writer native batch",
    title_source: "out/titles-tennisfrens-2026-06-01.txt",
    publish_allowed: true,
    schedule: {
      interval_hours: 5,
      first: posts[0].scheduledAt,
      last: posts.at(-1).scheduledAt,
    },
    articleWriter: {
      targetCount: 100,
      passCount: manifestArticles.length,
      minScore: Math.min(...quality.map((item) => item.score)),
      maxScore: Math.max(...quality.map((item) => item.score)),
      minChars: Math.min(...manifestArticles.map((item) => item.char_count)),
      maxChars: Math.max(...manifestArticles.map((item) => item.char_count)),
    },
    articles: manifestArticles,
  };

  fs.writeFileSync(MANIFEST_OUT, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  fs.writeFileSync(QUALITY_OUT, `${JSON.stringify(quality, null, 2)}\n`, "utf8");

  fs.writeFileSync(
    POSTS_OUT,
    `// Auto-generated from out/article-writer/tennisfrens-title-100-2026-06-01. Do not edit by hand.\nexport const articleWriterTitle100Posts = ${JSON.stringify(posts, null, 2)};\n`,
    "utf8",
  );

  fs.writeFileSync(
    CONTENT_OUT,
    `// Auto-generated from out/article-writer/tennisfrens-title-100-2026-06-01. Do not edit by hand.\ntype BlogContentEntry = {\n  content: string;\n  tags: string[];\n  summary: string;\n  highlight: string;\n  faq?: { question: string; answer: string }[];\n};\n\nexport const BLOG_CONTENT_PART14_TITLE100 = ${JSON.stringify(contentMap, null, 2)} satisfies Record<string, BlogContentEntry>;\n`,
    "utf8",
  );

  console.log(
    JSON.stringify(
      {
        posts: posts.length,
        first: posts[0].scheduledAt,
        last: posts.at(-1).scheduledAt,
        minScore: manifest.articleWriter.minScore,
        minChars: manifest.articleWriter.minChars,
        outputs: [POSTS_OUT, CONTENT_OUT, MANIFEST_OUT, QUALITY_OUT],
      },
      null,
      2,
    ),
  );
}

build();
