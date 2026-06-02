#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONTENT_OUT = path.join(
  ROOT,
  "src",
  "data",
  "blog-content",
  "part16-quality-rewrites.ts",
);
const POSTS_OUT = path.join(ROOT, "src", "data", "blog-posts-part16-overrides.js");

const sources = {
  rules: [
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ],
  coaching: [
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
    ["Tennis Australia Coaching", "https://www.tennis.com.au/play/coaching"],
  ],
  health: [
    ["Mayo Clinic Sports Injuries", "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/sports-injuries/art-20044712"],
    ["CDC Physical Activity Basics", "https://www.cdc.gov/physical-activity-basics/"],
  ],
  equipment: [
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Improve Tennis", "https://www.usta.com/en/home/improve/tips-and-instruction.html"],
  ],
};

const internalSets = {
  serve: ["/utility/string-tension", "/tennis-rules-quiz", "/blog/tennis-serve-toss-technique"],
  doubles: ["/utility/play-style-test", "/blog/tennis-doubles-strategy-guide", "/blog/tennis-doubles-communication"],
  court: ["/utility/court-surface-advisor", "/utility/weather-check", "/blog/tennis-windy-day-strategy"],
  match: ["/utility/match-analyzer", "/utility/ntrp-test", "/blog/tennis-match-flow-reading"],
  equipment: ["/utility/equipment-recommendation", "/utility/string-tension", "/blog/tennis-racket-selection-guide"],
  health: ["/utility/injury-risk", "/utility/warmup-routine-builder", "/blog/tennis-injury-prevention-full-guide"],
  practice: ["/utility/practice-drill-generator", "/utility/goal-setting", "/blog/tennis-practice-journal-guide"],
};

const rows = [
  ["aw-066-tennis-guide", "매치포인트 선택 줄이기", "매치포인트 전술을 선택 기준과 실전 기록으로 정리해 긴장 상황의 판단 흔들림을 줄입니다.", "경기 운영", ["매치포인트", "선택 기준", "경기 기록"], "match", "rules"],
  ["aw-067-serve-20", "서브 코스 20분 루틴", "서브 코스 선택을 속도보다 배치와 반복 루틴 중심으로 재정리합니다.", "서브 전략", ["서브", "코스 선택", "20분 루틴"], "serve", "coaching"],
  ["aw-068-doubles", "복식 합 맞추는 포지션", "복식 포지션 조정을 파트너 거리와 빈 코스 기준으로 판단합니다.", "복식 전술", ["복식", "포지션", "파트너"], "doubles", "coaching"],
  ["aw-070-record", "테니스 점수 착각 줄이는 기록법", "테니스 점수 기록을 포인트 흐름과 실수 원인까지 남기는 방식으로 바꿉니다.", "경기 기록", ["테니스 점수", "기록법", "경기 복기"], "match", "rules"],
  ["aw-071-tennis-guide", "긴 랠리 다음 포인트 준비", "긴 랠리 뒤 포인트 준비를 호흡, 위치, 첫 샷 기준으로 정리합니다.", "경기 운영", ["긴 랠리", "포인트 준비", "첫 샷"], "match", "coaching"],
  ["aw-072-serve", "약한 서브 리턴 대응법", "약한 서브 뒤 흔들리는 랠리를 리턴 위치와 첫 발 반응으로 교정합니다.", "서브 전략", ["약한 서브", "리턴", "첫 발"], "serve", "coaching"],
  ["aw-073-doubles-5", "복식 전위 충돌 줄이는 기준", "복식 전위 충돌을 콜, 시선, 센터볼 기준으로 줄이는 5가지 점검법입니다.", "복식 전술", ["복식 전위", "충돌", "콜"], "doubles", "coaching"],
  ["aw-074-court-beginner", "발목 불안한 코트 이동법", "발목이 불안한 날 코트 이동을 보폭, 정지, 방향 전환 기준으로 조정합니다.", "코트 환경", ["발목", "코트 이동", "방향 전환"], "health", "health"],
  ["aw-075-club-record", "동호회 참가 체크리스트", "동호회 참가 전 실력, 운영 방식, 경기 매너를 기록으로 확인하는 기준입니다.", "동호회 운영", ["동호회", "체크리스트", "경기 매너"], "practice", "rules"],
  ["aw-076-mental", "더블폴트 뒤 멘탈 복구", "더블폴트 후 다음 포인트를 망치지 않도록 호흡과 루틴을 구체화합니다.", "멘탈 훈련", ["더블폴트", "멘탈 복구", "루틴"], "match", "coaching"],
  ["aw-077-serve-return", "슬라이스 서브 리턴 위치", "슬라이스 서브 리턴을 발 위치, 라켓면, 목표 코스로 나눠 점검합니다.", "리턴 전략", ["슬라이스 서브", "리턴 위치", "라켓면"], "serve", "coaching"],
  ["aw-078-doubles-serve", "복식 서브 후 첫 발 이동", "복식 서브 뒤 첫 발 이동을 전위와 후위 역할에 맞춰 정리합니다.", "복식 전술", ["복식 서브", "첫 발", "후위"], "doubles", "coaching"],
  ["aw-079-20", "느린 볼 백핸드 20분 훈련", "느린 볼에서 백핸드가 흔들리는 원인을 타점과 준비 루틴으로 교정합니다.", "기술 교정", ["느린 볼", "백핸드", "20분 훈련"], "practice", "coaching"],
  ["aw-080-tennis-guide", "높은 공 분리 판단법", "높은 공을 공격할지 넘길지 결정하는 타점, 균형, 코스 기준입니다.", "기술 교정", ["높은 공", "타점", "코스 선택"], "practice", "coaching"],
  ["aw-081-club-match", "사인 사이 인터벌 루틴", "동호회 경기에서 사인과 포인트 사이 시간을 짧고 명확하게 쓰는 방법입니다.", "경기 운영", ["동호회 경기", "사인", "인터벌"], "match", "rules"],
  ["aw-082-serve-record", "서브 더블폴트 기록법", "더블폴트 원인을 토스, 템포, 코스 선택으로 나눠 기록합니다.", "서브 전략", ["서브", "더블폴트", "기록법"], "serve", "coaching"],
  ["aw-083-doubles", "상대 로브 많은 복식 대응", "상대 로브가 많을 때 전위 위치와 후위 커버를 함께 조정합니다.", "복식 전술", ["복식", "로브", "후위 커버"], "doubles", "coaching"],
  ["aw-084-injury-serve", "어깨 통증 날 서브 관리", "어깨 통증이 있는 날 서브 강도와 연습량을 안전하게 낮추는 기준입니다.", "부상 예방", ["어깨 통증", "서브", "부상 예방"], "health", "health"],
  ["aw-085-match-5", "경기 중 규칙 확인 기준", "경기 규칙 논쟁을 줄이기 위한 확인 기준과 대화 순서 5가지입니다.", "경기 규칙", ["경기 규칙", "확인 기준", "테니스 매너"], "match", "rules"],
  ["aw-086-grip-beginner", "땀 많은 날 그립 관리", "더운 날 그립 미끄러짐을 줄이는 오버그립 교체와 손 관리 기준입니다.", "장비 가이드", ["그립", "오버그립", "땀"], "equipment", "equipment"],
  ["aw-087-serve-record", "서브 토스 교정 체크리스트", "서브 토스가 무너질 때 높이, 앞뒤 위치, 반복성을 기록하는 방법입니다.", "서브 전략", ["서브 토스", "체크리스트", "기록법"], "serve", "coaching"],
  ["aw-088-club-doubles", "동호회 복식 센터볼 처리", "센터볼에서 망설임을 줄이기 위한 콜과 우선권 기준을 정리합니다.", "복식 전술", ["동호회 복식", "센터볼", "콜"], "doubles", "coaching"],
  ["aw-090-tennis-guide", "테니스장 예약 전 확인 기준", "테니스장 예약 전 코트 상태, 조명, 이동 동선을 함께 확인합니다.", "코트 환경", ["테니스장 예약", "코트 상태", "조명"], "court", "rules"],
  ["aw-091-string-20", "추운 날 스트링 텐션 감각", "추운 날 텐션 체감을 기록하고 무리한 교체를 피하는 20분 점검법입니다.", "장비 가이드", ["스트링 텐션", "추운 날", "감각"], "equipment", "equipment"],
  ["aw-092-tennis-guide", "장비 교체 테스트 순서", "라켓과 스트링 교체 전 경기 감각을 잃지 않는 테스트 순서입니다.", "장비 가이드", ["장비 교체", "테스트", "라켓"], "equipment", "equipment"],
  ["aw-093-doubles-club-match", "복식 센터 사인 정하기", "동호회 복식에서 센터 사인을 정하고 경기 중 혼선을 줄이는 기준입니다.", "복식 전술", ["복식", "센터 사인", "동호회"], "doubles", "coaching"],
  ["aw-094-injury-grip-record", "손목 통증 그립 기록법", "손목 통증이 생긴 날 그립 두께와 타점 변화를 함께 기록합니다.", "부상 예방", ["손목 통증", "그립", "기록법"], "health", "health"],
  ["aw-095-club-match", "동호회 첫 경기 매너", "첫 동호회 경기에서 점수, 콜, 대기 시간을 자연스럽게 맞추는 기준입니다.", "동호회 운영", ["동호회", "첫 경기", "매너"], "match", "rules"],
  ["aw-096-tennis-guide", "야간 조명 로브 대응", "야간 조명 아래 로브 판단을 시선, 발 위치, 안전 코스로 나눠 정리합니다.", "코트 환경", ["야간 조명", "로브", "코트 환경"], "court", "coaching"],
  ["aw-097-record-5", "코치 피드백 기록 기준", "코치 피드백을 다음 연습에 연결하는 기록 기준 5가지를 정리합니다.", "훈련 가이드", ["코치 피드백", "기록", "훈련"], "practice", "coaching"],
  ["aw-098-doubles-beginner", "복식 스타트 위치 기준", "복식 초보가 시작 위치와 첫 이동을 헷갈리지 않게 정리한 기준입니다.", "복식 전술", ["복식", "스타트 위치", "초보"], "doubles", "coaching"],
  ["aw-100-tennis-guide", "레슨 질문 목록 만드는 법", "레슨에서 같은 지적을 반복하지 않도록 질문 목록과 복습 기준을 만듭니다.", "레슨 가이드", ["레슨", "질문 목록", "복습"], "practice", "coaching"],
  ["aw-101-court", "비 온 뒤 코트 판단 기준", "비 온 뒤 코트 사용 여부를 미끄러짐, 바운드, 안전 기준으로 봅니다.", "코트 환경", ["비 온 뒤", "코트", "안전"], "court", "rules"],
  ["aw-102-tennis-guide", "레슨비 아끼는 복습법", "테니스 레슨비를 낭비하지 않도록 복습 루틴과 질문 순서를 정합니다.", "레슨 가이드", ["테니스 레슨비", "복습", "질문"], "practice", "coaching"],
  ["aw-103-doubles-20", "복식 전위 백업 20분 루틴", "복식 전위가 빠진 뒤 백업 위치를 20분 루틴으로 익힙니다.", "복식 전술", ["복식 전위", "백업", "20분 루틴"], "doubles", "coaching"],
  ["aw-104-match", "테니스 가방 경기 전 준비", "경기 전 테니스 가방을 시간대와 날씨 기준으로 점검합니다.", "장비 가이드", ["테니스 가방", "경기 준비", "체크리스트"], "equipment", "rules"],
  ["aw-105-beginner-racket-club-match", "초보 첫 라켓 경기 감각", "초보가 첫 라켓을 동호회 경기에서 테스트할 때 볼 감각을 기록합니다.", "장비 가이드", ["초보 라켓", "경기 감각", "동호회"], "equipment", "equipment"],
  ["aw-106-record", "바람 부는 날 토스 기록", "바람 부는 날 서브 토스를 어떻게 낮추고 기록할지 정리합니다.", "코트 환경", ["바람", "토스", "기록법"], "court", "coaching"],
  ["aw-107-tennis-guide", "대회 전 가방 체크", "대회 전날 테니스 가방을 규칙, 날씨, 경기 시간 기준으로 점검합니다.", "경기 준비", ["대회 전", "가방 체크", "경기 준비"], "equipment", "rules"],
  ["aw-108-return", "리턴 게임 로브 타이밍", "리턴 게임에서 로브를 언제 선택할지 상대 전위와 깊이 기준으로 봅니다.", "리턴 전략", ["리턴 게임", "로브", "상대 전위"], "serve", "coaching"],
  ["aw-109-shoes-court-shoes-5", "클레이화 하드화 차이", "클레이화와 하드화 차이를 미끄러짐, 내구성, 발목 안정 기준으로 비교합니다.", "장비 가이드", ["테니스화", "클레이화", "하드화"], "equipment", "equipment"],
  ["aw-110-beginner", "출근 전 테니스 훈련", "출근 전 짧은 테니스 훈련을 몸풀기, 한 가지 기술, 기록으로 줄입니다.", "훈련 가이드", ["출근 전", "테니스 훈련", "초보"], "practice", "coaching"],
  ["aw-111-court-record", "하드코트 바운드 기록법", "하드코트 바운드 차이를 경기 전 기록하고 첫 게임 전략에 반영합니다.", "코트 환경", ["하드코트", "바운드", "기록법"], "court", "coaching"],
  ["aw-112-court", "테니스 여행 코트 예약", "테니스 여행에서 코트 예약, 이동 시간, 장비 운반을 함께 계산합니다.", "코트 환경", ["테니스 여행", "코트 예약", "이동 시간"], "court", "rules"],
  ["aw-113-doubles-return", "복식 리턴 사인 기준", "복식 리턴에서 전위와 후위가 같은 장면을 보도록 사인 기준을 정합니다.", "복식 전술", ["복식 리턴", "사인", "전위"], "doubles", "coaching"],
  ["aw-114-shoes", "테니스화 밑창 마모 확인", "테니스화 밑창 마모를 코트별 미끄러짐과 발목 부담 기준으로 봅니다.", "장비 가이드", ["테니스화", "밑창 마모", "발목"], "equipment", "equipment"],
  ["aw-115-1-20", "주 1회 동호회 실력 유지", "주 1회 동호회 플레이어가 20분 루틴으로 감각을 유지하는 방법입니다.", "훈련 가이드", ["주 1회", "동호회", "20분 루틴"], "practice", "coaching"],
  ["aw-116-court", "클레이코트 슬라이딩 입문", "클레이코트 슬라이딩을 멈춤 동작과 균형 회복 기준으로 시작합니다.", "코트 환경", ["클레이코트", "슬라이딩", "입문"], "court", "coaching"],
  ["aw-119-grip", "오버그립 교체 신호", "오버그립 미끄러짐과 손바닥 피로를 기준으로 교체 시점을 정합니다.", "장비 가이드", ["오버그립", "교체 신호", "그립"], "equipment", "equipment"],
  ["aw-121-court-5", "하드코트 미끄럼 줄이기", "하드코트에서 잔발과 정지 동작으로 미끄럼 실수를 줄이는 5가지 기준입니다.", "코트 환경", ["하드코트", "미끄럼", "잔발"], "court", "coaching"],
];

const palette = [
  { border: "#0f766e", bg: "#ecfdf5" },
  { border: "#2563eb", bg: "#eff6ff" },
  { border: "#7c3aed", bg: "#f5f3ff" },
  { border: "#ea580c", bg: "#fff7ed" },
  { border: "#be123c", bg: "#fff1f2" },
  { border: "#4d7c0f", bg: "#f7fee7" },
];

const linkLabels = {
  "/utility/string-tension": "스트링 텐션 계산기",
  "/tennis-rules-quiz": "테니스 규칙 퀴즈",
  "/blog/tennis-serve-toss-technique": "서브 토스 교정 글",
  "/utility/play-style-test": "플레이 스타일 테스트",
  "/blog/tennis-doubles-strategy-guide": "복식 전략 가이드",
  "/blog/tennis-doubles-communication": "복식 커뮤니케이션 글",
  "/utility/court-surface-advisor": "코트 표면 어드바이저",
  "/utility/weather-check": "날씨 체크 도구",
  "/blog/tennis-windy-day-strategy": "바람 부는 날 전략",
  "/utility/match-analyzer": "경기 분석 도구",
  "/utility/ntrp-test": "NTRP 테스트",
  "/blog/tennis-match-flow-reading": "경기 흐름 읽기 글",
  "/utility/equipment-recommendation": "장비 추천 도구",
  "/blog/tennis-racket-selection-guide": "라켓 선택 가이드",
  "/utility/injury-risk": "부상 위험 체크",
  "/utility/warmup-routine-builder": "워밍업 루틴 빌더",
  "/blog/tennis-injury-prevention-full-guide": "부상 예방 가이드",
  "/utility/practice-drill-generator": "연습 드릴 생성기",
  "/utility/goal-setting": "목표 설정 도구",
  "/blog/tennis-practice-journal-guide": "연습 일지 가이드",
};

function esc(value) {
  return JSON.stringify(value);
}

function sourceLinks(kind) {
  return sources[kind]
    .map(
      ([name, url]) =>
        `<a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>`,
    )
    .join(", ");
}

function table(row) {
  const [slug, title, excerpt, category, tags] = row;
  const [main, a, b] = tags;
  return `<table><thead><tr><th>점검 항목</th><th>좋은 신호</th><th>수정 신호</th></tr></thead><tbody><tr><td>${main}</td><td>첫 선택 기준이 말로 설명된다</td><td>결과만 보고 다음 샷을 바꾼다</td></tr><tr><td>${a}</td><td>반복 전후 차이를 기록한다</td><td>감으로만 좋고 나쁨을 판단한다</td></tr><tr><td>${b}</td><td>다음 경기에서 확인할 장면이 정해진다</td><td>연습과 경기 기록이 연결되지 않는다</td></tr></tbody></table>`;
}

function linkList(links) {
  return links
    .map((href) => `<a href="${href}">${linkLabels[href] ?? href}</a>`)
    .join(", ");
}

function buildContent(row, index) {
  const [slug, title, excerpt, category, tags, linkKey, sourceKind] = row;
  const [main, a, b] = tags;
  const links = internalSets[linkKey];
  const accent = palette[index % palette.length];
  const structure = index % 6;
  const headings = [
    [`${main} 문제가 반복되는 장면`, `${a} 기준으로 먼저 보는 신호`, `${b}까지 연결하는 실전 루틴`, `다음 경기에서 남길 기록`],
    [`${main}을 결과가 아니라 과정으로 보기`, `${a} 판단을 빠르게 만드는 표`, `${b} 실수를 줄이는 연습 순서`, `동호회 경기 적용법`],
    [`오늘 바로 확인할 ${main} 신호`, `${a}와 ${b}를 나누는 기준`, `무리하지 않는 수정 루틴`, `자주 헷갈리는 질문`],
    [`${main} 검색자가 실제로 막히는 지점`, `${a}를 코트에서 확인하는 법`, `${b} 기록이 필요한 이유`, `다음 선택을 좁히는 기준`],
    [`${main}을 바꾸기 전 멈춰볼 것`, `${a} 실패 패턴 비교`, `${b}를 살리는 20분 구성`, `복기 질문 3가지`],
    [`${main}의 핵심은 선택지 줄이기`, `${a} 상황별 판단표`, `${b}까지 이어지는 체크리스트`, `마지막으로 확인할 안전선`],
  ][structure];
  const visualLabel = ["판단표", "체크리스트", "주의 박스", "루틴 카드", "비교표", "복기 질문"][structure];

  return `<div class="article-summary" style="border-left:4px solid ${accent.border};background:${accent.bg};padding:16px 18px;margin:20px 0;border-radius:8px;"><strong>${title}</strong><br>${excerpt} 이 글은 ${main} 문제를 한 번에 해결한다는 약속 대신, 다음 경기에서 같은 장면을 더 잘 판단하게 만드는 기준을 제시합니다.</div>
<p>${title} 주제를 찾는 사람은 대개 이미 한두 번 같은 장면을 겪었습니다. 그래서 이 글은 “더 세게”, “더 많이” 같은 막연한 처방을 피하고 ${main}, ${a}, ${b} 세 항목을 따로 봅니다. 공식 규칙과 코칭 자료는 ${sourceLinks(sourceKind)}에서 확인할 수 있고, 여기서는 동호회 경기에서 바로 쓸 수 있는 판단 기준으로 풀어냅니다.</p>
<p>먼저 목표를 좁혀야 합니다. 오늘 필요한 것은 완벽한 폼 교정이 아니라 다음 포인트에서 같은 실수를 줄이는 일입니다. ${category} 글답게 결과보다 선택 기준, 준비 순서, 기록 방법을 함께 다룹니다. 관련 도구로는 ${linkList(links)}를 함께 확인하면 판단이 빨라집니다.</p>
<h2>${headings[0]}</h2>
<p>${main} 항목은 공 하나의 성공이나 실패로 판단하면 흔들립니다. 같은 상황이 세 번 이상 반복되는지, 그때 몸의 준비와 시선이 같은지, 그리고 선택한 코스가 경기 흐름과 맞는지를 같이 봐야 합니다. 특히 동호회 경기에서는 상대 수준, 코트 상태, 파트너 위치가 매번 달라지므로 하나의 정답보다 관찰 순서가 더 중요합니다.</p>
<aside style="border-left:4px solid ${accent.border};background:#ffffff;padding:14px 16px;margin:18px 0;border-radius:8px;"><strong>${visualLabel}</strong><br>${main} 문제를 볼 때 첫 질문은 “왜 실패했나”가 아니라 “실패 전에 어떤 선택을 했나”입니다. 선택이 정리되면 기술 교정도 훨씬 좁아집니다.</aside>
<ul><li>첫 번째 공에서 몸이 멈췄는지 확인합니다.</li><li>${a} 항목을 경기 중 한 단어로 부를 수 있게 정합니다.</li><li>${b} 항목은 성공률보다 반복 가능성으로 평가합니다.</li><li>다음 연습에서는 한 가지 신호만 다시 봅니다.</li></ul>
<h2>${headings[1]}</h2>
<p>${a} 항목은 많은 사람이 지나치는 기준입니다. 눈에 보이는 결과는 공이 들어갔는지 아닌지이지만, 실제 개선은 준비 위치와 판단 시간에서 시작됩니다. 예를 들어 좋은 샷이 나와도 준비가 늦었다면 다음에는 무너질 가능성이 큽니다. 반대로 공이 빠졌더라도 선택과 균형이 맞았다면 수정 폭은 작습니다.</p>
${table(row)}
<p>표는 점수표가 아니라 복기 도구입니다. 경기 중 모든 항목을 보려 하면 늦습니다. 오늘은 ${main} 하나, 다음 경기에는 ${a} 하나처럼 관찰 대상을 줄이는 편이 낫습니다. 이 방식은 검색 의도에도 맞습니다. 사용자는 긴 이론보다 “지금 바꿀 것”을 찾고 있고, 그 답은 보통 한 가지 기준을 명확히 하는 데서 나옵니다.</p>
<h2>${headings[2]}</h2>
<p>${b}까지 연결하려면 20분 루틴이 충분합니다. 처음 5분은 몸풀기와 리듬 확인, 다음 10분은 같은 장면 반복, 마지막 5분은 경기처럼 점수를 붙여 확인합니다. 중요한 점은 매번 같은 성공률을 요구하지 않는 것입니다. 오늘의 루틴은 다음 경기에서 다시 볼 질문을 만드는 데 목적이 있습니다.</p>
<ol><li>시작 전 오늘의 기준을 한 줄로 적습니다.</li><li>실패한 공은 기술명보다 상황명으로 기록합니다.</li><li>성공한 공도 왜 성공했는지 짧게 남깁니다.</li><li>마지막에는 다음 경기에서 볼 신호 하나만 고릅니다.</li></ol>
<p>이 순서로 기록하면 ${main} 고민이 막연한 상태에서 벗어납니다. ${a} 항목을 확인하고 ${b} 항목을 붙이는 과정이 반복되면, 같은 실수라도 수정할 지점이 달라집니다. 이 글이 다루지 않는 것은 장기간 프로그램이나 전문 코칭 진단입니다. 통증이 있거나 경기력이 급격히 떨어진 경우에는 코치나 의료 전문가의 도움을 우선해야 합니다.</p>
<h2>${headings[3]}</h2>
<p>마지막 기준은 다음 경기에서 확인할 수 있어야 합니다. “좋아졌다”는 느낌보다 “첫 세 포인트에서 준비가 빨랐다”, “센터볼 콜이 늦지 않았다”, “토스가 바람 방향에 맞게 조정됐다”처럼 검증 가능한 문장이 좋습니다. 그래야 같은 글을 다시 읽지 않고도 자신의 경기 기록으로 판단할 수 있습니다.</p>
<details><summary>${main} 문제는 하루 만에 고칠 수 있나요?</summary><p>완전히 고치기는 어렵지만 한 경기에서 확인할 기준 하나를 줄이는 것은 가능합니다. 이 글의 목적도 완성보다 반복 가능한 판단 기준을 만드는 데 있습니다.</p></details>
<details><summary>${a}와 ${b} 중 무엇을 먼저 봐야 하나요?</summary><p>경기 중에는 ${a} 항목을 먼저 보고, 경기 후 복기에서 ${b} 항목을 확인하는 순서가 안전합니다. 동시에 두 가지를 바꾸면 원인을 찾기 어렵습니다.</p></details>
<details><summary>초보자도 이 기준을 써도 되나요?</summary><p>초보자일수록 기준을 줄이는 편이 좋습니다. 단, 통증이나 장비 문제처럼 안전과 관련된 신호는 연습보다 먼저 확인해야 합니다.</p></details>
<p>정리하면 ${title}의 핵심은 더 많은 조언을 모으는 것이 아니라, 다음 경기에서 확인할 기준을 줄이는 것입니다. ${main} 주제를 중심으로 ${a}, ${b}를 나눠 기록하면 실수의 원인이 선명해지고, 연습 시간도 덜 낭비됩니다.</p>`;
}

const contentEntries = rows
  .map((row, index) => {
    const [slug, title, excerpt, category, tags] = row;
    const faq = [
      { question: `${tags[0]}은 무엇부터 봐야 하나요?`, answer: `${tags[1]}와 ${tags[2]}를 동시에 바꾸지 말고, 경기 중에는 한 가지 신호만 먼저 확인하는 편이 안전합니다.` },
      { question: `이 글은 ${category} 초보자도 쓸 수 있나요?`, answer: `가능합니다. 다만 통증이나 장비 파손처럼 안전 문제가 있으면 연습보다 점검을 먼저 해야 합니다.` },
      { question: `다음 경기에서 어떻게 복기하나요?`, answer: `성공률보다 같은 장면이 반복됐는지, 그리고 선택 기준이 흔들렸는지를 한 줄로 남기면 됩니다.` },
    ];
    return `  ${esc(slug)}: {
    content: ${esc(buildContent(row, index))},
    tags: ${esc(tags)},
    summary: ${esc(excerpt)},
    highlight: ${esc(`${title}의 핵심은 ${tags[0]} 주제를 ${tags[1]}와 ${tags[2]} 기준으로 나눠 기록하는 것입니다.`)},
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

export const BLOG_CONTENT_PART16_QUALITY_REWRITES: Record<string, BlogContentEntry> = {
${contentEntries},
};
`;

const postEntries = rows
  .map(([slug, title, excerpt, category, tags]) => {
    return `  {
    "slug": ${esc(slug)},
    "title": ${esc(title)},
    "excerpt": ${esc(excerpt)},
    "category": ${esc(category)},
    "tags": ${esc(tags)},
    "readTime": "9분",
  }`;
  })
  .join(",\n");

const postsFile = `export const articleWriterPart16PostOverrides = [
${postEntries},
];
`;

fs.writeFileSync(CONTENT_OUT, contentFile, "utf8");
fs.writeFileSync(POSTS_OUT, postsFile, "utf8");
console.log(`Generated ${rows.length} quality rewrites.`);
console.log(CONTENT_OUT);
console.log(POSTS_OUT);
