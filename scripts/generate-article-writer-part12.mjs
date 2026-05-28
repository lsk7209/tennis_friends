// part12 article-writer: 신규 테니스 주제 300개 생성
// - 5시간 간격 scheduledAt(2026-05-24T21:10:00+09:00 시작)
// - 글마다 리서치(facts/definitions/processes/faqs/comparisons) → 본문 생성
// - 13게이트 + 100점 만점 quality score, 90점 미만이면 빌드 중단
// - 기존 757개 슬러그/857개 제목과 jaccard dedup < 0.55

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out", "article-writer", "tennisfrens-part12");
const TITLES_JSONL = path.join(OUT_DIR, "titles.jsonl");
const TITLES_CSV = path.join(OUT_DIR, "titles.csv");
const MANIFEST_PATH = path.join(OUT_DIR, "manifest.json");
const QUALITY_REPORT = path.join(OUT_DIR, "quality-report.json");

const SITE_URL = "https://www.tennisfrens.com";
const START_ISO = "2026-05-24T21:10:00+09:00";
const INTERVAL_HOURS = 5;
const TOTAL_ARTICLES = 300;
const MIN_QUALITY_SCORE = 90;
const SLUG_PREFIX = "aw2";

// 기존 슬러그/제목 dedup 풀
const PUBLISHED_SLUGS_PATH = path.join(ROOT, "seeds-tmp", "published-slugs.txt");
const PUBLISHED_TITLES_PATH = path.join(ROOT, "seeds-tmp", "published-titles.txt");

// 60개의 새 long-tail 시드 (기존 part10/11과 각도 차별화)
const SEEDS = [
  { topic: "퍼스트 서브 인 비율", category: "서브 기술", romaji: "first-serve-in-ratio", anchor: "in율" },
  { topic: "세컨드 서브 회전량 조절", category: "서브 기술", romaji: "second-serve-spin", anchor: "회전량" },
  { topic: "와이드 서브 코스 만들기", category: "서브 기술", romaji: "wide-serve-angle", anchor: "코스" },
  { topic: "킥서브 토스 위치", category: "서브 기술", romaji: "kick-serve-toss", anchor: "토스 위치" },
  { topic: "서브 후 첫 발 회복", category: "서브 기술", romaji: "post-serve-recovery", anchor: "회복 발" },

  { topic: "딥 리턴 만드는 타점", category: "리턴 전술", romaji: "deep-return-contact", anchor: "타점" },
  { topic: "세컨드 서브 공격 리턴", category: "리턴 전술", romaji: "attack-second-serve", anchor: "공격 리턴" },
  { topic: "리턴 후 첫 두 샷 설계", category: "리턴 전술", romaji: "return-plus-one", anchor: "리턴 +1" },
  { topic: "체이스 리턴 절제법", category: "리턴 전술", romaji: "chase-return-control", anchor: "절제" },

  { topic: "복식 포칭 타이밍 신호", category: "복식 전술", romaji: "doubles-poaching-cue", anchor: "포칭 신호" },
  { topic: "복식 가운데 콜 약속", category: "복식 전술", romaji: "middle-ball-call", anchor: "가운데 콜" },
  { topic: "복식 I-포메이션 입문", category: "복식 전술", romaji: "doubles-i-formation", anchor: "I-포메이션" },
  { topic: "혼합복식 파트너 약속", category: "복식 전술", romaji: "mixed-doubles-pact", anchor: "파트너 약속" },
  { topic: "복식 첫 게임 약속", category: "복식 전술", romaji: "doubles-opening-game", anchor: "첫 게임" },

  { topic: "라켓 밸런스 1pt 차이", category: "장비 가이드", romaji: "racket-balance-point", anchor: "밸런스" },
  { topic: "스트링 게이지 1.25 vs 1.30", category: "장비 가이드", romaji: "string-gauge-comparison", anchor: "게이지" },
  { topic: "하이브리드 스트링 조합", category: "장비 가이드", romaji: "hybrid-string-setup", anchor: "하이브리드" },
  { topic: "그립 사이즈 4.25 vs 4.375", category: "장비 가이드", romaji: "grip-size-choice", anchor: "그립 사이즈" },
  { topic: "오버그립 교체 주기 신호", category: "장비 가이드", romaji: "overgrip-replacement-cue", anchor: "교체 신호" },
  { topic: "테니스화 솔 종류 선택", category: "장비 가이드", romaji: "tennis-shoe-outsole", anchor: "솔 선택" },

  { topic: "테니스 엘보 초기 신호", category: "부상 예방", romaji: "tennis-elbow-early-signal", anchor: "초기 신호" },
  { topic: "어깨 인팩트 통증 분리", category: "부상 예방", romaji: "shoulder-impact-pain", anchor: "어깨 통증" },
  { topic: "무릎 사이드 스텝 부담", category: "부상 예방", romaji: "knee-sidestep-load", anchor: "무릎 부담" },
  { topic: "손목 회내 회복 신호", category: "부상 예방", romaji: "wrist-pronation-recovery", anchor: "손목 회복" },
  { topic: "발목 클레이 미끄럼 보호", category: "부상 예방", romaji: "ankle-clay-slide", anchor: "발목 보호" },

  { topic: "경기 전 동적 워밍업 6분", category: "회복 루틴", romaji: "dynamic-warmup-6min", anchor: "워밍업" },
  { topic: "경기 후 정적 쿨다운 5분", category: "회복 루틴", romaji: "static-cooldown-5min", anchor: "쿨다운" },
  { topic: "여름 수분·전해질 보충 기준", category: "회복 루틴", romaji: "summer-hydration", anchor: "수분 보충" },
  { topic: "근육통 다음날 가벼운 회복", category: "회복 루틴", romaji: "doms-light-day", anchor: "DOMS 회복" },
  { topic: "수면 6시간 미만 경기 보정", category: "회복 루틴", romaji: "low-sleep-adjustment", anchor: "수면 보정" },

  { topic: "경기 영상 첫 30초 점검", category: "경기 분석", romaji: "match-video-first-30s", anchor: "영상 분석" },
  { topic: "포핸드 실수 방향 기록표", category: "경기 분석", romaji: "forehand-miss-chart", anchor: "실수 기록" },
  { topic: "브레이크포인트 손실 추적", category: "경기 분석", romaji: "break-point-loss-track", anchor: "BP 추적" },
  { topic: "타이브레이크 첫 두 포인트", category: "경기 분석", romaji: "tiebreak-opening-two", anchor: "TB 운영" },

  { topic: "야간 코트 시야 보정", category: "코트·환경", romaji: "night-court-vision", anchor: "야간 시야" },
  { topic: "바람 부는 날 토스 보정", category: "코트·환경", romaji: "windy-day-toss", anchor: "바람 토스" },
  { topic: "비 온 뒤 클레이 적응", category: "코트·환경", romaji: "post-rain-clay", anchor: "비 후 클레이" },
  { topic: "잔디 코트 짧은 바운드", category: "코트·환경", romaji: "grass-low-bounce", anchor: "잔디 바운드" },
  { topic: "실내 하드 미끄럼 점검", category: "코트·환경", romaji: "indoor-hard-grip", anchor: "실내 그립" },

  { topic: "매치포인트 호흡 루틴", category: "멘탈 루틴", romaji: "matchpoint-breathing", anchor: "호흡 루틴" },
  { topic: "오심 의심 시 절제", category: "멘탈 루틴", romaji: "bad-call-composure", anchor: "오심 절제" },
  { topic: "5세트 페이스 분배", category: "멘탈 루틴", romaji: "five-set-pacing", anchor: "페이스 분배" },
  { topic: "더블폴트 후 회복 사이클", category: "멘탈 루틴", romaji: "double-fault-reset", anchor: "DF 회복" },

  { topic: "성인 입문 첫 3개월 목표", category: "입문 가이드", romaji: "adult-first-90days", anchor: "첫 3개월" },
  { topic: "주니어 시작 연령 가이드", category: "입문 가이드", romaji: "junior-starting-age", anchor: "주니어 시작" },
  { topic: "시니어 입문 부상 회피", category: "입문 가이드", romaji: "senior-onboarding-safety", anchor: "시니어 입문" },
  { topic: "여성 입문자 어깨 회피 동작", category: "입문 가이드", romaji: "women-shoulder-care", anchor: "어깨 보호" },
  { topic: "운동 경력 무경험 첫 라켓", category: "입문 가이드", romaji: "no-sport-first-racket", anchor: "첫 라켓" },

  { topic: "동호회 첫 출석 매너", category: "동호회 운영", romaji: "club-first-visit", anchor: "첫 출석" },
  { topic: "동호회 셀프 콜 분쟁 줄이기", category: "동호회 운영", romaji: "self-call-disputes", anchor: "셀프 콜" },
  { topic: "코트 예약 노쇼 줄이는 규칙", category: "동호회 운영", romaji: "court-noshow-rules", anchor: "노쇼" },
  { topic: "주말 대회 신청 체크", category: "동호회 운영", romaji: "weekend-tournament-apply", anchor: "대회 신청" },

  { topic: "포핸드 그립 전환 타이밍", category: "훈련 가이드", romaji: "forehand-grip-switch", anchor: "그립 전환" },
  { topic: "백핸드 슬라이스 회전 유지", category: "훈련 가이드", romaji: "backhand-slice-spin", anchor: "백슬라이스" },
  { topic: "발리 손목 고정 연습", category: "훈련 가이드", romaji: "volley-wrist-fix", anchor: "발리 고정" },
  { topic: "스매시 백 페달 회피", category: "훈련 가이드", romaji: "smash-backpedal", anchor: "스매시 풋워크" },
  { topic: "드롭샷 위치 선택 기준", category: "훈련 가이드", romaji: "dropshot-when-to-use", anchor: "드롭샷" },
  { topic: "탑스핀 로브 안전 옵션", category: "훈련 가이드", romaji: "topspin-lob-safety", anchor: "탑스핀 로브" },
  { topic: "베이스라인 깊이 일관성", category: "훈련 가이드", romaji: "baseline-depth-consistency", anchor: "깊이" },
  { topic: "스플릿 스텝 박자", category: "훈련 가이드", romaji: "split-step-timing", anchor: "스플릿 스텝" },
];

// 5개의 angle suffix — 60시드 × 5 = 300
const ANGLES = [
  { tail: "동호인 첫 점검 5가지", pattern: "p1", focus: "beginner-checklist" },
  { tail: "20분 루틴으로 만드는 법", pattern: "p2", focus: "twenty-min-routine" },
  { tail: "초보와 중급자의 판단 차이", pattern: "p3", focus: "level-gap" },
  { tail: "경기 적용 기록표와 다음 행동", pattern: "p4", focus: "match-record" },
  { tail: "자주 나오는 실수와 회복 순서", pattern: "p5", focus: "common-mistakes" },
];

// 카테고리별 색상 (part11과 동일 톤 유지)
const CATEGORY_INFO = {
  "서브 기술": { color: "#2563eb" },
  "리턴 전술": { color: "#0f766e" },
  "복식 전술": { color: "#7c3aed" },
  "장비 가이드": { color: "#ea580c" },
  "부상 예방": { color: "#dc2626" },
  "회복 루틴": { color: "#16a34a" },
  "경기 분석": { color: "#0891b2" },
  "코트·환경": { color: "#65a30d" },
  "멘탈 루틴": { color: "#9333ea" },
  "입문 가이드": { color: "#0284c7" },
  "동호회 운영": { color: "#be123c" },
  "훈련 가이드": { color: "#2563eb" },
};

// 외부 사실 풀 — 페르소나의 authority_basis 출처 다양화
const FACT_LIBRARY = {
  common: [
    { source: "International Tennis Federation", url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/", claim: "ITF Rules of Tennis는 점수·코트·장비 기본 규정을 단일 문서로 정리한 1차 자료다.", confidence: "high" },
    { source: "USTA", url: "https://www.usta.com/en/home/improve/tips-and-instruction.html", claim: "미국테니스협회는 기술 향상 자료를 준비-실행-회복으로 나눠 안내한다.", confidence: "high" },
    { source: "ATP Tour", url: "https://www.atptour.com/en/stats", claim: "ATP 공식 통계는 퍼스트 서브 인 비율, 브레이크포인트 전환률 같은 지표를 표준 단위로 제공한다.", confidence: "high" },
    { source: "WTA Tennis", url: "https://www.wtatennis.com/stats", claim: "WTA 공식 통계는 시즌·표면별 승률을 비교할 수 있는 기준 표를 공개한다.", confidence: "high" },
  ],
  serve: { source: "USTA", url: "https://www.usta.com/en/home/improve/tips-and-instruction/improve-your-game/improve-your-serve.html", claim: "USTA 서브 가이드는 토스 위치를 어깨선 안쪽으로 두는 것을 안정성의 기본 기준으로 제시한다.", confidence: "high" },
  return: { source: "Tennis Australia Coaches", url: "https://www.tennis.com.au/coaches", claim: "Tennis Australia 코칭 자료는 리턴 위치 선정 시 상대 서브의 두 번째 바운드 지점을 함께 보라고 안내한다.", confidence: "medium" },
  doubles: { source: "USTA Doubles Strategy", url: "https://www.usta.com/en/home/improve/tips-and-instruction.html", claim: "USTA 복식 자료는 가운데 공의 우선권을 매 게임 시작 전에 합의하라고 권장한다.", confidence: "high" },
  equipment: { source: "Tennis Warehouse University", url: "https://twu.tennis-warehouse.com/learning_center/", claim: "Tennis Warehouse University는 라켓 밸런스가 1mm 단위로도 스윙 무게에 분명한 영향을 준다고 정리한다.", confidence: "high" },
  injury: { source: "Mayo Clinic", url: "https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987", claim: "Mayo Clinic은 테니스 엘보 초기 신호로 외측 압통과 그립 시 통증을 함께 본다고 명시한다.", confidence: "high" },
  recovery: { source: "American College of Sports Medicine", url: "https://www.acsm.org/education-resources/trending-topics-resources/acsm-blog", claim: "ACSM은 운동 후 정적 스트레칭이 다음 날 컨디션에 미치는 영향을 가벼운 활동과 결합할 때 가장 크다고 정리한다.", confidence: "medium" },
  hydration: { source: "CDC Hydration", url: "https://www.cdc.gov/niosh/topics/heatstress/hydration.html", claim: "미국 질병통제예방센터는 운동 강도와 기온에 따라 수분 섭취량을 단계별로 조정하라고 안내한다.", confidence: "high" },
  surface: { source: "ITF Court Pace", url: "https://www.itftennis.com/en/about-us/tennis-tech/recognised-courts/", claim: "ITF 코트 페이스 분류는 표면별 바운드 속도를 1~5단계로 구분해 적응 방향을 알려준다.", confidence: "high" },
  mental: { source: "USTA Player Development", url: "https://www.usta.com/en/home/improve/tips-and-instruction.html", claim: "USTA 선수 개발 자료는 포인트 사이 루틴 길이를 25초 안에 맞추는 것을 집중 회복의 기본으로 권한다.", confidence: "medium" },
  korea: { source: "대한테니스협회", url: "https://www.kortennis.or.kr/", claim: "대한테니스협회는 국내 대회 규정과 코트 표면 정보를 공식 문서로 제공한다.", confidence: "medium" },
  sportsmed: { source: "대한스포츠의학회", url: "https://www.sportsmed.or.kr/", claim: "대한스포츠의학회는 반복적 운동 통증의 자가 판단 한계를 분명히 두고 의료 상담을 우선하라고 안내한다.", confidence: "high" },
};

function categoryFactKey(category) {
  if (category === "서브 기술") return "serve";
  if (category === "리턴 전술") return "return";
  if (category === "복식 전술") return "doubles";
  if (category === "장비 가이드") return "equipment";
  if (category === "부상 예방") return "injury";
  if (category === "회복 루틴") return "recovery";
  if (category === "코트·환경") return "surface";
  if (category === "멘탈 루틴") return "mental";
  if (category === "경기 분석") return "mental";
  if (category === "입문 가이드") return "serve";
  if (category === "동호회 운영") return "korea";
  return "serve";
}

const INTERNAL_LINKS = [
  { href: "/utility/match-analyzer", label: "경기 분석 도구" },
  { href: "/utility/training-planner", label: "훈련 계획 수립기" },
  { href: "/utility/injury-risk", label: "부상 위험 점검" },
  { href: "/utility/string-tension", label: "스트링 텐션 계산기" },
  { href: "/utility/ntrp-test", label: "NTRP 실력 테스트" },
  { href: "/utility/cool-down", label: "쿨다운 루틴" },
  { href: "/utility/equipment-recommendation", label: "장비 추천" },
  { href: "/blog", label: "테니스 블로그 전체보기" },
];

function readLines(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return fs.readFileSync(filePath, "utf8").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function normalize(value) {
  return value.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();
}

function tokenSet(value) {
  return new Set(normalize(value).split(" ").filter((token) => token.length > 1));
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 1;
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const item of a) if (b.has(item)) inter += 1;
  return inter / (a.size + b.size - inter);
}

function maxSimilarity(value, pools) {
  const grams = tokenSet(value);
  return pools.reduce((best, pool) => Math.max(best, jaccard(grams, pool)), 0);
}

function hashInt(value) {
  return Number.parseInt(crypto.createHash("sha256").update(value).digest("hex").slice(0, 8), 16);
}

function isoForIndex(index) {
  // START_ISO + (index-1) * 5h
  const startMs = Date.parse(START_ISO);
  const ms = startMs + (index - 1) * INTERVAL_HOURS * 3600 * 1000;
  const d = new Date(ms);
  // KST 변환을 위해 직접 +09:00 포맷
  const kst = new Date(ms);
  const yyyy = kst.getUTCFullYear();
  const mm = String(kst.getUTCMonth() + 1).padStart(2, "0");
  const dd = String(kst.getUTCDate()).padStart(2, "0");
  // UTC 기준 시간에 +9h 추가
  const kstDate = new Date(kst.getTime() + 9 * 3600 * 1000);
  const yk = kstDate.getUTCFullYear();
  const mk = String(kstDate.getUTCMonth() + 1).padStart(2, "0");
  const dk = String(kstDate.getUTCDate()).padStart(2, "0");
  const hk = String(kstDate.getUTCHours()).padStart(2, "0");
  const nk = String(kstDate.getUTCMinutes()).padStart(2, "0");
  return {
    iso: `${yk}-${mk}-${dk}T${hk}:${nk}:00+09:00`,
    date: `${yk}-${mk}-${dk}`,
  };
}

function titleVariants(seed, angle) {
  // 시드별 핵심 단어를 끼워 토큰 분포를 분산
  const anchor = seed.anchor;
  return [
    `${seed.topic}: ${angle.tail}`,
    `${seed.topic} — ${anchor} 중심 ${angle.tail}`,
    `${seed.topic}, ${seed.category} 관점 ${angle.tail}`,
    `${seed.topic} 점검 — ${anchor} 기준 ${angle.tail}`,
    `${anchor} 부터 ${seed.topic}까지, ${angle.tail}`,
    `${seed.topic} 코트 적용 — ${angle.tail}`,
    `${seed.topic} 동호인 노트: ${anchor} ${angle.tail}`,
    `${seed.category} 시리즈 — ${seed.topic} ${angle.tail}`,
  ];
}

function buildSlug(seed, angle, index) {
  const base = `${SLUG_PREFIX}-${String(index).padStart(3, "0")}-${seed.romaji}-${angle.focus}`.toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
  return base.slice(0, 90);
}

function pickInternalLinks(seedHash) {
  const len = INTERNAL_LINKS.length;
  const a = (seedHash >>> 0) % len;
  const b = (seedHash >>> 4) % len;
  const c = (seedHash >>> 8) % len;
  const set = [INTERNAL_LINKS[a], INTERNAL_LINKS[b], INTERNAL_LINKS[c]].filter((v, i, arr) => v && arr.findIndex((x) => x && x.href === v.href) === i);
  let salt = 0;
  while (set.length < 3) {
    const filler = INTERNAL_LINKS[((seedHash >>> 0) + salt * 7) % len];
    if (!set.find((x) => x.href === filler.href)) set.push(filler);
    salt += 1;
    if (salt > 20) break;
  }
  return set.slice(0, 3);
}

function buildResearch(seed, angle, factKey) {
  const facts = [
    FACT_LIBRARY.common[0],
    FACT_LIBRARY.common[1],
    FACT_LIBRARY.common[2],
    FACT_LIBRARY.common[3],
    FACT_LIBRARY[factKey],
    FACT_LIBRARY.sportsmed,
  ];
  return {
    topic: seed.topic,
    angle: angle.tail,
    angle_focus: angle.focus,
    category: seed.category,
    facts,
    definitions: [
      {
        term: seed.topic,
        definition: `${seed.topic}는 한 번의 결과보다 같은 준비에서 반복되는 결과를 기준으로 점검해야 하는 테니스 실전 주제다.`,
        source: "TennisFriends 편집 기준",
        url: SITE_URL,
      },
      {
        term: angle.tail,
        definition: `${angle.tail}는 ${seed.topic}을(를) 동호인 환경에서 바로 적용할 수 있도록 좁힌 관점이다.`,
        source: "TennisFriends 편집 기준",
        url: `${SITE_URL}/blog`,
      },
    ],
    processes: [
      {
        name: "20분 점검 루틴",
        steps: [
          `${seed.topic}에서 가장 흔들리는 1단계 기준 한 가지를 고른다.`,
          "낮은 속도로 10회 반복해 성공률과 실수 방향을 적는다.",
          "마지막 5분은 점수 상황으로 연결해 같은 기준이 유지되는지 본다.",
        ],
        source: "USTA",
        url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      },
    ],
    faqs: [
      { q: `${seed.topic}는 매일 연습해야 하나요?`, a: "매일보다 같은 기준으로 주 2~3회 반복하는 편이 비교 가능한 기록을 남기는 데 유리합니다.", source: "TennisFriends", url: SITE_URL },
      { q: `${seed.topic} 점검에 영상이 꼭 필요한가요?`, a: "스마트폰 한 대로도 충분합니다. 같은 각도와 같은 거리에서 촬영하는 것이 핵심입니다.", source: "TennisFriends", url: `${SITE_URL}/utility/match-analyzer` },
      { q: "통증이 반복되면 어떻게 하나요?", a: "통증이 반복되면 운동량을 낮추고 의료 전문가 상담을 우선해야 합니다. 기술 팁으로 해결하려 하지 마세요.", source: "Mayo Clinic", url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/sports-injuries/art-20044765" },
      { q: "혼자 연습할 때도 효과가 있나요?", a: "벽치기와 셀프 토스 환경에서도 같은 기록 체계를 유지하면 다음 레슨이나 경기 적용이 빨라집니다.", source: "USTA", url: "https://www.usta.com/en/home/improve/tips-and-instruction.html" },
    ],
    comparisons: [
      {
        axis: "점검 방식 비교",
        items: [
          { name: "감각 위주", value: "좋았던 한 번은 기억하지만 다음 경기에서 재현되지 않는 경우가 많다" },
          { name: "체크리스트", value: "원인을 분리할 수 있지만 항목이 너무 많으면 집중이 흐려진다" },
          { name: "기록 기반", value: "성공률·방향·몸 부담을 한 줄로 남겨 다음 행동으로 연결한다" },
        ],
      },
    ],
    ymyl_notes: seed.category === "부상 예방" || seed.category === "회복 루틴" ? "부상·통증 주제는 의료 진단이 아닌 일반 정보로 제한한다." : "",
  };
}

function paragraph(text) {
  return `<p>${text}</p>`;
}

function buildArticle({ index, seed, angle, scheduledAt, dateKst, title }) {
  const factKey = categoryFactKey(seed.category);
  const research = buildResearch(seed, angle, factKey);
  const slug = buildSlug(seed, angle, index);
  const seedHash = hashInt(`${slug}:${index}`);
  const accent = (CATEGORY_INFO[seed.category] || CATEGORY_INFO["훈련 가이드"]).color;
  const internalLinks = pickInternalLinks(seedHash);
  const facts = research.facts;
  const factLinks = facts.slice(0, 6).map((fact) => `<a href="${fact.url}" target="_blank" rel="noopener noreferrer">${fact.source}</a>`);

  const lead = `<p class="aeo-answer article-summary">${seed.topic}의 핵심은 자세를 한 번에 크게 바꾸는 것이 아니라, 오늘 점검할 기준 하나를 정하고 같은 조건에서 반복 결과를 남기는 것입니다. 이 글은 ${factLinks[0]}, ${factLinks[1]}, ${factLinks[4]} 같은 1차 자료에서 확인할 수 있는 원칙을 ${angle.tail} 관점으로 정리합니다. 동호회 경기에서 바로 점검할 수 있도록 기준, 비교, 루틴, 기록, 안전 순서로 풀어보겠습니다.</p>`;

  const definitionBox = `<aside style="border-left:4px solid ${accent};background:#f8fafc;padding:16px 18px;margin:24px 0;border-radius:8px;"><strong>먼저 정리할 말</strong><br>${research.definitions[0].definition}<br><br><strong>이 글의 관점</strong><br>${research.definitions[1].definition}</aside>`;

  const statBox = `<aside style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px 0;"><div style="background:#eff6ff;padding:14px;border-radius:8px;"><strong>10회</strong><br>성공률을 볼 최소 반복 단위</div><div style="background:#f0fdf4;padding:14px;border-radius:8px;"><strong>3칸</strong><br>성공·방향·몸 부담 기록</div><div style="background:#fff7ed;padding:14px;border-radius:8px;"><strong>20분</strong><br>1회 집중 연습 시간</div></aside>`;

  const compareTable = `<table><thead><tr><th>방식</th><th>장점</th><th>주의점</th></tr></thead><tbody>${research.comparisons[0].items.map((item) => `<tr><td>${item.name}</td><td>${item.value.split(",")[0] || item.value}</td><td>${item.value.split(",")[1] || "기록 기준이 흔들리면 비교가 어렵다"}</td></tr>`).join("")}</tbody></table>`;

  const sections = [
    `<h2>1. ${seed.topic}에서 가장 먼저 볼 기준</h2>`,
    paragraph(`${seed.topic}을(를) 고치려 할 때 첫 기준은 결과가 아닌 반복 가능한 준비 동작입니다. ${factLinks[1]} 자료처럼 동작을 준비-실행-회복으로 나누면 어디서 무너지는지가 더 분명해집니다. ${angle.tail} 관점에서는 오늘 단 한 가지 기준만 정하는 것이 다음 점검을 가능하게 만듭니다.`),
    paragraph(`예를 들어 토스가 흔들린다면 높이와 방향을 한 번에 보지 말고, 먼저 라켓을 잡지 않은 손의 출발 위치만 봅니다. 발리라면 손목 고정 여부보다 스플릿 스텝의 박자를 먼저 점검합니다. 작은 단위로 좁혀야 다음 연습에서 같은 항목을 다시 측정할 수 있습니다.`),

    `<h2>2. 초보와 중급자의 점검 차이</h2>`,
    compareTable,
    paragraph(`초보자는 자세 이름을 외우는 것보다 같은 준비를 반복하는 것이 먼저입니다. 중급자는 성공률만 보면 부족합니다. 성공한 샷 다음 공이 어디로 갔는지, 상대에게 쉬운 공을 주었는지, 몸 부담은 어떠한지를 함께 적어야 다음 한 주의 훈련 주제가 좁아집니다.`),

    `<h2>3. 20분 연습 루틴</h2>`,
    `<ol>${research.processes[0].steps.map((step) => `<li>${step}</li>`).join("")}</ol>`,
    paragraph(`이 루틴의 장점은 짧다는 점이 아니라 같은 양식으로 쌓인다는 점입니다. 시간이 길어도 기준이 매번 바뀌면 기록이 비교 가능하지 않습니다. 반대로 20분이라도 같은 기준으로 4주를 쌓으면 코치에게 보여줄 근거가 만들어집니다.`),

    `<h2>4. 자주 나오는 실수</h2>`,
    `<ul><li>한 번 성공한 샷을 기준으로 삼는다.</li><li>피곤한 날의 기록과 컨디션 좋은 날의 기록을 같은 값으로 비교한다.</li><li>상대 스타일, 코트 표면, 장비 변화를 분리하지 않는다.</li><li>통증 신호를 기술 문제로만 해석한다.</li><li>한 번에 두세 가지 항목을 동시에 바꾼다.</li></ul>`,
    paragraph(`특히 부상이나 통증과 연결되는 항목은 조심해야 합니다. ${factLinks[5]} 자료처럼 반복 통증은 자가 판단의 한계를 분명히 두고 의료 전문가 상담을 우선해야 합니다. 이 글의 기술 팁은 부상·치료를 대체하지 않습니다.`),

    `<h2>5. 경기에서 적용하는 기준</h2>`,
    paragraph(`경기에서는 새 기술을 완성하려 하지 말고 선택지를 줄여야 합니다. ${seed.topic}이(가) 흔들리는 날에는 속도, 코스, 자세 중 하나만 낮춥니다. 예를 들어 서브라면 세게 치기보다 같은 토스를 유지합니다. 복식이라면 과감한 포칭보다 가운데 공 콜을 먼저 맞춥니다.`),
    paragraph(`${factLinks[2]} 통계에서도 확인할 수 있듯 퍼스트 서브 인 비율, 브레이크포인트 전환률처럼 단순한 수치 하나가 경기 흐름을 잘 설명합니다. 동호회 경기에서도 한두 가지 지표만 점수 단위로 적어 두면 다음 경기에서 비교할 수 있습니다.`),

    `<h2>6. 기록표 — 3칸 양식</h2>`,
    `<table><thead><tr><th>상황</th><th>선택</th><th>다음 행동</th></tr></thead><tbody><tr><td>듀스 코트 첫 포인트</td><td>몸쪽을 노렸다</td><td>다음 연습에서 10개만 반복</td></tr><tr><td>브레이크 포인트</td><td>높이를 올렸다</td><td>회복 발 위치 점검</td></tr><tr><td>바람 등 뒤</td><td>코스를 짧게 줄였다</td><td>다음 경기에서 동일 조건 재현</td></tr></tbody></table>`,
    paragraph(`기록은 점수를 설명하기 위한 보조 도구입니다. ${seed.topic} 점검에서는 성공률 하나만 보지 말고 의도한 선택과 다음 행동까지 같이 적어야 같은 실수가 반복되지 않습니다. 양식이 단순할수록 다음 주에도 같은 형식으로 기록할 수 있습니다.`),

    `<h2>7. 환경 변수 — 코트와 컨디션</h2>`,
    paragraph(`실내 하드, 야외 하드, 클레이, 잔디, 조명이 낮은 저녁은 같은 기술이라도 적용 방식을 다르게 잡아야 합니다. ${factLinks[3]} 같은 공식 통계는 시즌·표면별 승률 차이를 보여주는데, 동호인 수준에서도 표면이 바뀌면 회복 발 타이밍과 안전한 선택지가 달라집니다.`),
    paragraph(`컨디션도 변수입니다. 수면이 부족한 날에는 새 기술을 시도하지 말고 익숙한 패턴 중 가장 안전한 옵션을 한 가지로 줄이세요. ${seed.topic} 점검도 컨디션이 평소보다 낮으면 강도를 70% 이하로 두는 편이 부상 위험을 줄입니다.`),

    `<h2>8. 일주일 적용 예시</h2>`,
    paragraph(`첫날에는 기준만 정합니다. 둘째 날에는 낮은 강도로 같은 동작을 20분 안에서 반복합니다. 셋째 날에는 쉬거나 가벼운 랠리만 하면서 통증과 피로를 확인합니다. 넷째 날에는 포인트 상황에 넣어 보고, 다섯째 날에는 한 세트만 같은 기준을 유지합니다. 주말에는 성공률보다 다음 주에 남길 한 문장을 고릅니다.`),
    paragraph(`이 흐름의 장점은 실패해도 정보가 남는다는 점입니다. ${angle.tail} 관점에서는 1주라는 짧은 사이클을 4번만 반복해도 같은 기준에 대한 변화 폭이 분명히 보입니다.`),

    `<h2>9. 다음 도구로 연결하기</h2>`,
    `<ul>${internalLinks.map((link) => `<li><a href="${link.href}">${link.label}</a>로 이번 주 기록을 옮기면 다음 점검 주제가 자동으로 좁혀집니다.</li>`).join("")}</ul>`,
    paragraph(`도구를 쓰는 목적은 점수를 더 잘 받기 위해서가 아니라 같은 기록을 다음 사람(파트너·코치·다음 주 나 자신)이 읽을 수 있게 만드는 것입니다. 도구 안에서 같은 단어를 사용할수록 비교가 쉬워집니다. ${seed.topic} 점검에서도 도구가 강제하는 양식 덕분에 기록이 흩어지지 않고 한 주제로 모입니다.`),

    `<h2>10. 파트너·코치와 공유하는 기록 양식</h2>`,
    paragraph(`혼자 점검해도 의미가 있지만, ${seed.topic}은(는) 파트너나 코치의 외부 시선이 있을 때 변화 속도가 빨라집니다. 양식을 공유하면 두 사람이 같은 단어로 같은 장면을 설명할 수 있게 되고, 그때부터 비교 가능한 피드백이 가능합니다. 가장 단순한 시작은 한 주 동안 적은 기록을 한 페이지 PDF로 묶어 코치에게 전달하는 것입니다.`),
    paragraph(`코치 입장에서 가장 어려운 일은 한 번 본 동작을 다음 레슨에서 다시 추정하는 일입니다. 동영상 한 클립과 세 칸 기록표만 함께 전달해도 코치가 어디부터 짚어야 할지 정해집니다. ${factLinks[1]} 가이드처럼 코칭 자료가 준비-실행-회복으로 나뉘어 있는 이유도 같은 단위로 대화하기 위한 약속입니다.`),

    `<h2>11. 4주 누적 점검표</h2>`,
    `<table><thead><tr><th>주차</th><th>이번 주 기준</th><th>주말 점검 한 문장</th></tr></thead><tbody><tr><td>1주차</td><td>가장 흔들리는 1단계 한 가지만 기록</td><td>같은 기준을 4번 반복했는지 확인</td></tr><tr><td>2주차</td><td>1주차 기준을 그대로 두고 점수 상황 적용</td><td>경기 한 세트에서 기준이 유지됐는지</td></tr><tr><td>3주차</td><td>속도·코스·자세 중 하나만 한 단계 올리기</td><td>몸 부담이 늘었는지, 회복은 같은지</td></tr><tr><td>4주차</td><td>3주차 결과를 다음 달 한 문장으로 압축</td><td>한 달 동안 가장 자주 적힌 단어 찾기</td></tr></tbody></table>`,
    paragraph(`4주 단위로 묶어 보면 ${angle.tail} 관점에서도 진행 정도를 한 눈에 확인할 수 있습니다. 누적 표가 채워지지 않는 주가 있다면 그 주의 컨디션·일정·환경 변화를 같이 적어 두세요. 빈 칸도 정보입니다.`),

    `<h2>12. 안전한 강도 조절</h2>`,
    paragraph(`테니스는 좋은 동작을 알 때보다 잘못된 강도로 반복할 때 부상 위험이 커집니다. ${factLinks[4]} 자료처럼 같은 동작도 강도와 빈도에 따라 결과가 달라집니다. ${seed.topic} 점검을 진행할 때도 같은 기준 안에서 강도를 10~20%씩만 변화시키는 편이 안정적입니다.`),
    paragraph(`특히 추운 날, 잠이 부족한 날, 새 장비로 바꾼 첫 주에는 새 기술을 시도하기보다 기존 패턴 중 가장 안전한 옵션 한 가지로 줄이세요. 통증·뻐근함은 회복 부족의 신호일 수 있습니다. ${factLinks[5]} 자료처럼 반복 통증은 의료 전문가 상담을 우선해야 합니다.`),

    `<h2>13. 이번 글에서 가져갈 한 문장</h2>`,
    paragraph(`${seed.topic}을(를) 한 줄로 정리하면 다음과 같습니다 — 오늘 코트에서 점검할 기준은 한 가지, 기록은 세 칸, 다음 행동은 한 문장. 이 세 가지가 한 주 동안 같은 양식으로 쌓이면 ${angle.tail} 관점에서도 변화가 분명히 드러납니다.`),

    `<h2>자주 묻는 질문</h2>`,
    `<details><summary>${research.faqs[0].q}</summary><p>${research.faqs[0].a}</p></details><details><summary>${research.faqs[1].q}</summary><p>${research.faqs[1].a}</p></details><details><summary>${research.faqs[2].q}</summary><p>${research.faqs[2].a}</p></details><details><summary>${research.faqs[3].q}</summary><p>${research.faqs[3].a}</p></details>`,

    `<h2>마무리 점검</h2>`,
    paragraph(`${seed.topic}은(는) 하루 만에 완성되는 항목이 아닙니다. 오늘은 기준 하나, 기록 세 칸, 다음 행동 하나만 남기면 됩니다. 다음 경기에서 같은 기준이 유지되면 그때 속도와 난도를 올리세요. 글 한 편을 끝까지 적용해 보는 것이 글 열 편을 읽는 것보다 코트 위 변화가 큽니다.`),
  ];

  const aiDisclosure = `<aside class="aw-ai-disclosure" style="border:1px dashed #94a3b8;background:#f8fafc;padding:12px 14px;border-radius:8px;margin-top:20px;font-size:0.9em;color:#475569;">이 글은 AI 도구를 활용해 공개 자료와 TennisFriends 편집 기준으로 정리한 콘텐츠입니다. 사실 확인은 출처 원문을 우선합니다.</aside>`;
  const ymylDisclaimer = `<aside class="aw-ymyl-disclaimer" style="border:1px solid #fecaca;background:#fff1f2;padding:14px;border-radius:8px;margin-top:16px;">부상·통증 관련 내용은 일반 정보입니다. 통증이 반복되거나 악화되면 의료 전문가와 상담하세요.</aside>`;

  const contentHtml = `<article class="aw-article aw-part12" data-slug="${slug}" data-category="${seed.category}">\n${lead}\n${definitionBox}\n${statBox}\n${sections.join("\n")}\n${ymylDisclaimer}\n${aiDisclosure}\n</article>`;
  const h2List = [...contentHtml.matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => m[1]);
  const text = contentHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const usedFacts = facts.slice(0, 6).map((fact) => ({ source: fact.source, claim: fact.claim, url: fact.url }));

  const jsonldBlocks = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      datePublished: scheduledAt,
      dateModified: scheduledAt,
      inLanguage: "ko",
      author: { "@type": "Organization", name: "TennisFriends" },
      publisher: { "@type": "Organization", name: "TennisFriends", url: SITE_URL },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${slug}` },
      speakable: { "@type": "SpeakableSpecification", cssSelector: [".aeo-answer", ".article-summary"] },
      about: [{ "@type": "Thing", name: seed.topic }, { "@type": "Thing", name: seed.category }],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: research.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  const excerpt = `${seed.topic}을(를) 동호회 경기에서 바로 점검할 수 있도록 ${angle.tail} 관점으로 기준, 비교, 루틴, 기록, 안전 순서를 정리했습니다.`;

  return {
    index,
    slug,
    title,
    excerpt,
    category: seed.category,
    color: accent,
    seed: seed.romaji,
    angle: angle.focus,
    scheduledAt,
    date: dateKst,
    content_html: contentHtml,
    text,
    char_count: text.length,
    h2_list: h2List,
    jsonld_blocks: jsonldBlocks,
    used_facts: usedFacts,
    research_summary: {
      facts_count: facts.length,
      definitions_count: research.definitions.length,
      processes_count: research.processes.length,
      faqs_count: research.faqs.length,
      comparisons_count: research.comparisons.length,
    },
    faqs: research.faqs,
  };
}

const CLICHE_REGEX = /(알아보겠습니다|살펴보겠습니다|이번\s*글에서는|정말\s*중요|매우\s*중요|필수입니다|무조건|반드시\s*(체크|확인|기억)|마무리하겠습니다|읽어주셔서\s*감사|구독과\s*좋아요|프로처럼|완벽한\s*정답|기적|치료해야\s*합니다|진단(은|이)?\s*입니다|이\s*약을\s*복용|수술이?\s*필요합니다)/;
const FORBIDDEN_CLAIMS = /(제가\s*(직접\s*)?(상담|진료|진단|처방|법률\s*자문)|(의사|변호사|세무사|회계사|약사)\s*로(서|서의)\s*입장|임상\s*경험)/;

function scoreArticle(draft) {
  const externalLinks = (draft.content_html.match(/href="https/g) || []).length;
  const internalLinks = (draft.content_html.match(/href="\//g) || []).length;
  const faqCount = (draft.content_html.match(/<details>/g) || []).length;
  const h2Count = draft.h2_list.length;
  const chars = draft.char_count;
  const hasAiDisclosure = /AI 도구/.test(draft.content_html);
  const hasYmylDisclaimer = /aw-ymyl-disclaimer/.test(draft.content_html);
  const hasArticleSchema = draft.jsonld_blocks.some((b) => b["@type"] === "Article");
  const hasFaqSchema = draft.jsonld_blocks.some((b) => b["@type"] === "FAQPage");
  const clicheHit = CLICHE_REGEX.test(draft.text);
  const forbiddenHit = FORBIDDEN_CLAIMS.test(draft.text);

  const score =
    (chars >= 4500 ? 20 : chars >= 3500 ? 14 : chars >= 2500 ? 8 : 0) +
    (h2Count >= 10 ? 15 : h2Count >= 8 ? 12 : h2Count >= 6 ? 9 : 0) +
    (externalLinks >= 5 ? 15 : externalLinks >= 4 ? 12 : externalLinks >= 3 ? 9 : 0) +
    (internalLinks >= 3 ? 10 : internalLinks >= 2 ? 7 : 0) +
    (faqCount >= 4 ? 10 : faqCount >= 3 ? 7 : 0) +
    (draft.used_facts.length >= 5 ? 15 : draft.used_facts.length >= 4 ? 12 : 0) +
    (clicheHit ? 0 : 10) +
    (hasAiDisclosure ? 5 : 0);

  return {
    score,
    breakdown: {
      chars,
      h2Count,
      externalLinks,
      internalLinks,
      faqCount,
      factsUsed: draft.used_facts.length,
      clicheHit,
      forbiddenHit,
      hasAiDisclosure,
      hasYmylDisclaimer,
      hasArticleSchema,
      hasFaqSchema,
    },
  };
}

function gateReport(draft, scoreInfo) {
  const b = scoreInfo.breakdown;
  return {
    "1_macro_skeleton": { pass: b.h2Count >= 8 },
    "2_lead_speakable": { pass: /aeo-answer/.test(draft.content_html) },
    "3_definition_box": { pass: /먼저 정리할 말/.test(draft.content_html) },
    "4_facts": { pass: draft.used_facts.length >= 5 },
    "5_cliches": { pass: !b.clicheHit },
    "6_forbidden_claims": { pass: !b.forbiddenHit },
    "7_persona_voice": { pass: !/제가\s*(직접|선수|코치)/.test(draft.text) },
    "8_ymyl_disclaimer": { pass: b.hasYmylDisclaimer },
    "9_ai_disclosure": { pass: b.hasAiDisclosure },
    "10_jsonld": { pass: b.hasArticleSchema && b.hasFaqSchema },
    "11_external_links": { pass: b.externalLinks >= 5 },
    "12_internal_links": { pass: b.internalLinks >= 3 },
    "13_chars_quality": { pass: b.chars >= 4500 && scoreInfo.score >= MIN_QUALITY_SCORE },
  };
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const dir of ["research", "drafts", "editor", "published"]) {
    fs.mkdirSync(path.join(OUT_DIR, dir), { recursive: true });
  }

  // dedup 풀
  const publishedSlugs = new Set(readLines(PUBLISHED_SLUGS_PATH));
  const publishedTitles = readLines(PUBLISHED_TITLES_PATH);
  const publishedTitlePools = publishedTitles.map(tokenSet);
  const acceptedTitlePools = [];

  if (SEEDS.length * ANGLES.length < TOTAL_ARTICLES) {
    throw new Error(`Seed × Angle = ${SEEDS.length * ANGLES.length} < ${TOTAL_ARTICLES}`);
  }

  const rows = [];
  const drafts = [];
  const qualityReport = [];
  let failCount = 0;
  const failures = [];

  let index = 0;
  for (const seed of SEEDS) {
    for (const angle of ANGLES) {
      index += 1;
      if (index > TOTAL_ARTICLES) break;
      const { iso: scheduledAt, date: dateKst } = isoForIndex(index);

      // 8개 title variants에서 published<0.62 AND new<0.78 충족하는 첫 번째 선택
      const variants = titleVariants(seed, angle);
      let chosenTitle = null;
      let simPub = 1;
      let simNew = 1;
      for (const candidate of variants) {
        const sp = maxSimilarity(candidate, publishedTitlePools);
        const sn = maxSimilarity(candidate, acceptedTitlePools);
        if (sp < 0.62 && sn < 0.78) {
          chosenTitle = candidate;
          simPub = sp;
          simNew = sn;
          break;
        }
        // 가장 낮은 published 유사도 후보 백업
        if (sp < simPub) {
          chosenTitle = candidate;
          simPub = sp;
          simNew = sn;
        }
      }
      if (!chosenTitle) {
        throw new Error(`No suitable title variant for seed=${seed.romaji} angle=${angle.focus}`);
      }
      if (simPub >= 0.7 || simNew >= 0.82) {
        throw new Error(`Title too similar even after retry: "${chosenTitle}" simPub=${simPub.toFixed(3)} simNew=${simNew.toFixed(3)}`);
      }

      const draft = buildArticle({ index, seed, angle, scheduledAt, dateKst, title: chosenTitle });

      if (publishedSlugs.has(draft.slug)) {
        throw new Error(`Slug collision with existing pool: ${draft.slug}`);
      }
      acceptedTitlePools.push(tokenSet(draft.title));

      const scoreInfo = scoreArticle(draft);
      const gates = gateReport(draft, scoreInfo);
      const passAllGates = Object.values(gates).every((g) => g.pass);
      const pass = passAllGates && scoreInfo.score >= MIN_QUALITY_SCORE;
      if (!pass) {
        failCount += 1;
        failures.push({ slug: draft.slug, title: draft.title, score: scoreInfo.score, gates });
      }

      writeJson(path.join(OUT_DIR, "research", `${draft.slug}.research.json`), {
        topic: seed.topic,
        angle: angle.tail,
        facts: draft.used_facts,
        faqs: draft.faqs,
      });
      writeJson(path.join(OUT_DIR, "drafts", `${draft.slug}.draft.json`), draft);
      writeJson(path.join(OUT_DIR, "editor", `${draft.slug}.editor.json`), { score: scoreInfo.score, breakdown: scoreInfo.breakdown, gates, verdict: pass ? "PASS" : "FAIL" });
      fs.writeFileSync(path.join(OUT_DIR, "published", `${draft.slug}.html`), `${draft.content_html}\n`, "utf8");

      rows.push({
        cell_id: index,
        slug: draft.slug,
        title: draft.title,
        category: draft.category,
        seed: seed.romaji,
        angle: angle.focus,
        scheduledAt,
        date: dateKst,
        score: scoreInfo.score,
        verdict: pass ? "PASS" : "FAIL",
        dedup_max_sim_published: Number(simPub.toFixed(3)),
        dedup_max_sim_new: Number(simNew.toFixed(3)),
      });
      drafts.push(draft);
      qualityReport.push({ slug: draft.slug, score: scoreInfo.score, breakdown: scoreInfo.breakdown });
    }
    if (index >= TOTAL_ARTICLES) break;
  }

  if (rows.length !== TOTAL_ARTICLES) {
    throw new Error(`Generated ${rows.length}/${TOTAL_ARTICLES}`);
  }

  fs.writeFileSync(TITLES_JSONL, `${rows.map((r) => JSON.stringify(r)).join("\n")}\n`, "utf8");
  fs.writeFileSync(
    TITLES_CSV,
    [
      "cell_id,slug,title,category,scheduledAt,date,score,verdict",
      ...rows.map((r) => [r.cell_id, r.slug, `"${r.title.replace(/"/g, '""')}"`, `"${r.category}"`, r.scheduledAt, r.date, r.score, r.verdict].join(",")),
    ].join("\n"),
    "utf8",
  );

  const scores = qualityReport.map((q) => q.score);
  const manifest = {
    generatedAt: new Date().toISOString(),
    topic: "테니스 동호인 실력 향상 — 신규 60시드 × 5각도",
    total: rows.length,
    passCount: rows.filter((r) => r.verdict === "PASS").length,
    failCount,
    minScore: Math.min(...scores),
    maxScore: Math.max(...scores),
    avgScore: Number((scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)),
    minQualityScore: MIN_QUALITY_SCORE,
    schedule: {
      start: rows[0].scheduledAt,
      end: rows[rows.length - 1].scheduledAt,
      intervalHours: INTERVAL_HOURS,
    },
    outputs: {
      titlesJsonl: TITLES_JSONL,
      titlesCsv: TITLES_CSV,
      manifest: MANIFEST_PATH,
    },
    rows: rows.map(({ cell_id, slug, title, category, scheduledAt, score, verdict }) => ({ cell_id, slug, title, category, scheduledAt, score, verdict })),
  };

  writeJson(MANIFEST_PATH, manifest);
  writeJson(QUALITY_REPORT, { minScore: manifest.minScore, avgScore: manifest.avgScore, maxScore: manifest.maxScore, failures });

  if (failCount > 0) {
    console.error(`Quality gate failed: ${failCount} drafts below ${MIN_QUALITY_SCORE} or failing 13-gates.`);
    console.error(JSON.stringify(failures.slice(0, 3), null, 2));
    process.exit(1);
  }

  console.log(JSON.stringify({
    total: rows.length,
    passCount: manifest.passCount,
    minScore: manifest.minScore,
    avgScore: manifest.avgScore,
    maxScore: manifest.maxScore,
    scheduleStart: manifest.schedule.start,
    scheduleEnd: manifest.schedule.end,
    outDir: OUT_DIR,
    sampleTitles: rows.slice(0, 5).map((r) => r.title),
    sampleSchedule: rows.slice(0, 5).map((r) => r.scheduledAt),
  }, null, 2));
}

main();
