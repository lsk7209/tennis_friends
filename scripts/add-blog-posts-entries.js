#!/usr/bin/env node
/**
 * blog-content/part4-new30.ts의 slug 목록을 읽어 blog-posts.js 에 entry 추가.
 * 중복 slug는 skip.
 */
const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "src", "data", "blog-posts.js");
const dbSource = fs.readFileSync(DB_PATH, "utf8");
const evalStart = dbSource.indexOf("[", dbSource.indexOf("allBlogPosts"));
const evalEnd = dbSource.lastIndexOf("];");
const arrayLiteral = dbSource.slice(evalStart, evalEnd + 1);
const entries = eval(arrayLiteral);
const existing = new Set(entries.map((e) => e.slug));

const NEW_ENTRIES = [
  {
    slug: "tennis-korean-ntrp-mapping-guide",
    title: "한국 동호회 레벨 ↔ NTRP 숫자 매핑 완전 가이드",
    excerpt:
      "한국 '초중·초고·중초' 구조를 NTRP 1.5~4.5로 정확히 환산하는 방법.",
    category: "실력 진단",
    tags: ["NTRP", "한국 동호회", "레벨"],
    date: "2026-04-24",
    readTime: "7분",
  },
  {
    slug: "tennis-korea-summer-humidity",
    title: "한국 여름 습도 테니스 가이드 — 70~90% 환경 대응",
    excerpt: "한국 6~8월 고습 환경에서 경기력 유지하는 체온·수분 관리.",
    category: "한국 특화",
    tags: ["여름 테니스", "습도", "컨디셔닝"],
    date: "2026-04-24",
    readTime: "8분",
  },
  {
    slug: "tennis-korea-winter-indoor-routine",
    title: "한국 겨울 테니스 — 실내 코트 12주 훈련 플랜",
    excerpt: "영하 기온 시즌 실내 코트 특성 이해와 효과적 훈련 루틴.",
    category: "한국 특화",
    tags: ["겨울 테니스", "실내 코트", "훈련"],
    date: "2026-04-24",
    readTime: "7분",
  },
  {
    slug: "tennis-korea-spring-fine-dust",
    title: "한국 봄 미세먼지·황사와 실외 테니스 판단 기준",
    excerpt: "PM2.5 수치별 실외 경기 가이드와 호흡기 관리.",
    category: "한국 특화",
    tags: ["봄 테니스", "미세먼지", "황사"],
    date: "2026-04-24",
    readTime: "6분",
  },
  {
    slug: "tennis-office-worker-evening-routine",
    title: "직장인 평일 1시간 테니스 훈련 루틴",
    excerpt: "퇴근 후 1시간으로 NTRP 0.3~0.5 상승시키는 구조화된 훈련.",
    category: "훈련",
    tags: ["직장인 테니스", "평일 훈련", "1시간"],
    date: "2026-04-24",
    readTime: "7분",
  },
  {
    slug: "tennis-racket-100k-beginner",
    title: "10만원대 입문자 테니스 라켓 추천 2026",
    excerpt: "무게·헤드사이즈 기준과 2026 주요 모델 비교.",
    category: "장비",
    tags: ["테니스 라켓", "입문자", "2026"],
    date: "2026-04-24",
    readTime: "6분",
  },
  {
    slug: "tennis-ntrp-2-to-3",
    title: "NTRP 2.0 → 3.0 레벨업 8주 훈련 플랜",
    excerpt: "입문자에서 중급자 진입 구간 — 실수 줄이기가 핵심.",
    category: "실력 진단",
    tags: ["NTRP", "레벨업", "훈련 플랜"],
    date: "2026-04-24",
    readTime: "7분",
  },
  {
    slug: "tennis-ntrp-3-to-3-5",
    title: "NTRP 3.0 → 3.5 12주 전술 플랜",
    excerpt: "중급자 정체 구간 돌파 — 샷을 '고르는' 능력 기르기.",
    category: "실력 진단",
    tags: ["NTRP", "전술", "중급자"],
    date: "2026-04-24",
    readTime: "8분",
  },
  {
    slug: "tennis-doubles-partner-finding",
    title: "복식 파트너 찾기 실전 가이드",
    excerpt: "실력보다 성향 궁합이 70% — 파트너십 오래 유지하는 법.",
    category: "복식",
    tags: ["복식", "파트너", "동호회"],
    date: "2026-04-24",
    readTime: "6분",
  },
  {
    slug: "tennis-tennis-elbow-early-signs",
    title: "테니스 엘보 조기 발견 체크리스트",
    excerpt: "동호인 50%가 겪는 테니스 엘보 — 초기 신호와 예방 장비 세팅.",
    category: "부상 관리",
    tags: ["테니스 엘보", "부상 예방", "재활"],
    date: "2026-04-24",
    readTime: "8분",
  },
];

let added = 0;
for (const e of NEW_ENTRIES) {
  if (existing.has(e.slug)) {
    console.log(`skip: ${e.slug} (이미 존재)`);
    continue;
  }
  entries.push({
    id: e.slug,
    slug: e.slug,
    tags: e.tags,
    title: e.title,
    excerpt: e.excerpt,
    badge: "신규",
    category: e.category,
    date: e.date,
    readTime: e.readTime,
    badgeColor:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    categoryColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  });
  added++;
}

// 날짜 역순 정렬
entries.sort((a, b) => (b.date || "").localeCompare(a.date || ""));

const newContent =
  "// 블로그 글 메타데이터 - 자동 생성됨\n" +
  "export const allBlogPosts = " +
  JSON.stringify(entries, null, 2) +
  ";\n";

fs.writeFileSync(DB_PATH, newContent, "utf8");
console.log(`\n완료: ${added}개 신규 entry 추가. 총 ${entries.length}개.`);
