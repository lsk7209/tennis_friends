#!/usr/bin/env node
/**
 * /utility/* 페이지에 metadata + canonical 일괄 주입.
 *
 * - 'use client' 파일은 metadata export 불가 → sibling layout.tsx 생성해서 처리
 * - server component는 기존 import 블록 뒤에 metadata export 추가
 * - 이미 metadata 있는 파일은 canonical만 누락 시 추가
 */
const fs = require("fs");
const path = require("path");

const UTIL_DIR = path.join(__dirname, "..", "src", "app", "utility");

// 슬러그 → 한글 제목 매핑 (부족한 건 슬러그 기반 fallback)
function slugToTitle(slug) {
  const known = {
    "ntrp-test": "NTRP 실력 테스트",
    "string-tension": "스트링 텐션 계산기",
    "injury-risk": "부상 위험도 평가",
    "training-planner": "훈련 플래너",
    "match-analyzer": "경기 분석 도구",
    "nutrition-guide": "테니스 영양 가이드",
    "equipment-recommendation": "장비 추천 도구",
    "play-style-test": "플레이 스타일 진단",
    "reaction-test": "반응 속도 테스트",
    "flexibility-test": "유연성 테스트",
    "focus-training": "집중력 훈련",
    "tennis-dictionary": "테니스 용어 사전",
    "match-recorder": "경기 기록기",
    "fitness-test": "테니스 체력 테스트",
    "court-booking": "코트 예약 도우미",
    "price-comparison": "장비 가격 비교",
  };
  if (known[slug]) return known[slug];
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function buildLayoutContent(slug, title) {
  return `import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "${title}",
  description: "${title} — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/${slug}",
  },
  openGraph: {
    title: "${title} | TennisFriends",
    description: "${title} — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/${slug}",
    type: "website",
    locale: "ko_KR",
    siteName: "TennisFriends",
  },
};

export default function UtilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
`;
}

const dirs = fs
  .readdirSync(UTIL_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

let created = 0;
let skipped = [];

for (const slug of dirs) {
  const pageFile = path.join(UTIL_DIR, slug, "page.tsx");
  const layoutFile = path.join(UTIL_DIR, slug, "layout.tsx");

  if (!fs.existsSync(pageFile)) continue;
  if (fs.existsSync(layoutFile)) {
    skipped.push(`${slug} (layout 이미 존재)`);
    continue;
  }

  const pageContent = fs.readFileSync(pageFile, "utf8");

  // canonical 이미 있으면 skip
  if (pageContent.includes("canonical:")) {
    skipped.push(`${slug} (canonical 이미 있음)`);
    continue;
  }

  // layout.tsx 생성 — client/server 관계없이 layout은 server component
  const title = slugToTitle(slug);
  fs.writeFileSync(layoutFile, buildLayoutContent(slug, title), "utf8");
  created++;
}

console.log(`\n완료: ${created}개 utility layout.tsx 생성.`);
if (skipped.length) {
  console.log(`\n스킵 ${skipped.length}건:`);
  skipped.slice(0, 10).forEach((s) => console.log("  " + s));
}
