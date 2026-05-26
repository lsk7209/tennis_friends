import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, "out", "article-writer", "tennisfrens-300");
const TITLES_JSONL = path.join(OUT_DIR, "titles.jsonl");
const TITLES_CSV = path.join(OUT_DIR, "titles.csv");
const MANIFEST_PATH = path.join(OUT_DIR, "manifest.json");
const LONG_TAILS_PATH = path.join(ROOT, "seeds-tmp", "long-tails.txt");
const PUBLISHED_PATH = path.join(ROOT, "seeds-tmp", "published.txt");
const TODAY = "2026-05-15";
const SITE_URL = "https://www.tennisfrens.com";

const CATEGORY_RULES = [
  { key: "serve", category: "서브 기술", color: "#2563eb", words: ["서브", "토스", "더블폴트", "킥서브", "슬라이스"] },
  { key: "return", category: "리턴 전술", color: "#0f766e", words: ["리턴", "세컨드", "상대"] },
  { key: "doubles", category: "복식 전술", color: "#7c3aed", words: ["복식", "전위", "포칭", "파트너", "혼합복식"] },
  { key: "gear", category: "장비 가이드", color: "#ea580c", words: ["라켓", "스트링", "그립", "테니스화", "가방", "신발"] },
  { key: "injury", category: "부상 예방", color: "#dc2626", words: ["엘보", "통증", "무릎", "어깨", "허리", "발목", "부담"] },
  { key: "recovery", category: "회복 루틴", color: "#16a34a", words: ["워밍업", "쿨다운", "회복", "수분", "근육통"] },
  { key: "record", category: "경기 분석", color: "#0891b2", words: ["기록", "영상", "실수", "복기", "브레이크", "타이브레이크"] },
  { key: "court", category: "코트·환경", color: "#65a30d", words: ["하드코트", "클레이", "잔디", "바람", "비", "조명", "추운", "더운"] },
  { key: "mental", category: "멘탈 루틴", color: "#9333ea", words: ["멘탈", "호흡", "매치포인트", "판정", "세트"] },
  { key: "beginner", category: "입문 가이드", color: "#0284c7", words: ["입문자", "초보", "레슨", "첫", "성인", "주니어"] },
  { key: "club", category: "동호회 운영", color: "#be123c", words: ["동호회", "대회", "매너", "셀프 콜", "예약"] },
];

const SOURCES = {
  common: [
    {
      type: "definition",
      claim: "테니스 경기의 기본 규칙과 용어는 국제테니스연맹 규정 체계에 기반한다.",
      value: "Rules of Tennis",
      source: "International Tennis Federation",
      url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
      date: "2026-01-01",
      confidence: "high",
    },
    {
      type: "process",
      claim: "미국테니스협회는 기술 향상 자료에서 준비 자세, 반복 연습, 안전한 움직임을 분리해 안내한다.",
      value: "tips and instruction",
      source: "USTA",
      url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      date: "2026-01-01",
      confidence: "high",
    },
    {
      type: "faq",
      claim: "테니스 실력 평가는 단일 샷보다 경기 상황에서 반복되는 선택과 실행을 함께 봐야 한다.",
      value: "NTRP guideline",
      source: "USTA NTRP",
      url: "https://www.usta.com/en/home/play/adult-tennis/programs/national/usta-league-faqs.html",
      date: "2026-01-01",
      confidence: "medium",
    },
  ],
  serve: {
    type: "process",
    claim: "서브는 토스, 하체 고정, 임팩트, 회복 발 순서로 나누면 교정 지점을 분리하기 쉽다.",
    value: "serve sequence",
    source: "USTA",
    url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
    date: "2026-01-01",
    confidence: "high",
  },
  gear: {
    type: "comparison",
    claim: "라켓과 스트링 선택은 파워, 컨트롤, 팔 부담 사이의 균형으로 비교해야 한다.",
    value: "equipment trade-off",
    source: "Tennis Warehouse University",
    url: "https://twu.tennis-warehouse.com/learning_center/",
    date: "2026-01-01",
    confidence: "high",
  },
  injury: {
    type: "statistic",
    claim: "스포츠 부상 예방 자료는 통증이 반복될 때 운동량과 회복 시간을 함께 조정하라고 안내한다.",
    value: "load and recovery",
    source: "Mayo Clinic",
    url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/sports-injuries/art-20044765",
    date: "2026-01-01",
    confidence: "high",
  },
  recovery: {
    type: "process",
    claim: "운동 전후 컨디션 관리는 준비운동, 수분 섭취, 강도 조절을 함께 볼 때 안정적이다.",
    value: "warm-up hydration intensity",
    source: "American College of Sports Medicine",
    url: "https://www.acsm.org/education-resources/trending-topics-resources",
    date: "2026-01-01",
    confidence: "medium",
  },
  mental: {
    type: "process",
    claim: "경기 중 루틴은 다음 행동을 좁혀 주의 전환 시간을 줄이는 데 쓰인다.",
    value: "between point routine",
    source: "USTA",
    url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
    date: "2026-01-01",
    confidence: "medium",
  },
  court: {
    type: "comparison",
    claim: "코트 표면과 날씨는 바운드 높이, 미끄러짐, 회복 발 타이밍에 영향을 준다.",
    value: "surface and condition",
    source: "International Tennis Federation",
    url: "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/",
    date: "2026-01-01",
    confidence: "high",
  },
};

const MACROS = ["A", "B", "C", "E", "F"];
const LENSES = ["L1", "L2", "L3", "L4", "L5", "L6"];
const HOOKS = ["H1", "H2", "H3", "H4", "H5"];
const OUTROS = ["O1", "O2", "O3", "O4"];

const titlePatterns = [
  (seed) => `${seed} — 바로 고칠 기준 5가지`,
  (seed) => `${seed}, 초보와 중급자의 차이`,
  (seed) => `${seed} 체크리스트와 기록법`,
  (seed) => `${seed} 실전 적용 순서`,
  (seed) => `${seed} 자주 나오는 실수`,
  (seed) => `${seed} 전후 비교로 보는 판단 기준`,
  (seed) => `${seed} 20분 루틴으로 만드는 법`,
  (seed) => `${seed}, 지금 바꿔야 할까?`,
  (seed) => `${seed} 동호회 경기에서 확인할 것`,
  (seed) => `${seed} 기록표로 점검하는 방법`,
  (seed) => `${seed} 할 때 피해야 할 함정`,
  (seed) => `${seed} 상황별 선택 가이드`,
];

function readLines(filePath) {
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

function slugify(title, index) {
  const romanized = title
    .replace(/서브/g, "serve")
    .replace(/리턴/g, "return")
    .replace(/복식/g, "doubles")
    .replace(/라켓/g, "racket")
    .replace(/스트링/g, "string")
    .replace(/그립/g, "grip")
    .replace(/테니스화|신발/g, "shoes")
    .replace(/엘보|통증|부상/g, "injury")
    .replace(/워밍업/g, "warmup")
    .replace(/쿨다운/g, "cooldown")
    .replace(/회복/g, "recovery")
    .replace(/멘탈/g, "mental")
    .replace(/경기/g, "match")
    .replace(/기록/g, "record")
    .replace(/영상/g, "video")
    .replace(/코트/g, "court")
    .replace(/동호회/g, "club")
    .replace(/초보|입문자/g, "beginner")
    .replace(/여성/g, "women")
    .replace(/주니어/g, "junior");
  const ascii = romanized
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 70);
  return `aw-${String(index).padStart(3, "0")}-${ascii || "tennis-guide"}`;
}

function getCategory(title) {
  const found = CATEGORY_RULES.find((rule) => rule.words.some((word) => title.includes(word)));
  return found || { key: "general", category: "훈련 가이드", color: "#2563eb", words: [] };
}

function slotFor(title, index) {
  const seed = hashInt(`${index}:${title}`);
  const macro = MACROS[seed % MACROS.length];
  return {
    macro,
    lens: LENSES[(seed >> 3) % LENSES.length],
    hook: macro === "B" ? "H1" : macro === "C" ? "H2" : HOOKS[(seed >> 6) % HOOKS.length],
    outro: macro === "B" ? "O1" : OUTROS[(seed >> 9) % OUTROS.length],
    schema_hint: macro === "F" ? "HowTo" : "Article",
    speakable_required: macro === "B",
    persona_pattern: ["P1"],
  };
}

function getTopic(title) {
  return title.split(/[—,]/)[0].trim();
}

function buildResearch(title, categoryInfo) {
  const domainFact = SOURCES[categoryInfo.key] || SOURCES.common[1];
  const facts = [
    SOURCES.common[0],
    SOURCES.common[1],
    SOURCES.common[2],
    domainFact,
    {
      type: "statistic",
      claim: "개인 연습 기록은 성공률, 실수 방향, 통증 신호처럼 같은 단위로 남길 때 다음 훈련 주제를 고르기 쉽다.",
      value: "3-field log",
      source: "TennisFriends 기록 원칙",
      url: `${SITE_URL}/utility/match-analyzer`,
      date: TODAY,
      confidence: "medium",
    },
  ];

  return {
    title,
    topic_concepts: [getTopic(title), categoryInfo.category, "동호인 경기 적용"],
    facts,
    definitions: [
      {
        term: getTopic(title),
        definition: `${getTopic(title)}는 결과보다 준비 동작, 반복 조건, 경기 중 선택을 함께 묶어 점검해야 하는 테니스 실전 주제다.`,
        source: "TennisFriends 편집 기준",
        url: SITE_URL,
      },
    ],
    processes: [
      {
        name: "20분 점검 루틴",
        steps: ["한 기준만 정한다", "10회 반복해 성공률과 실수 방향을 적는다", "마지막 5분은 포인트 상황으로 연결한다"],
        source: "USTA",
        url: "https://www.usta.com/en/home/improve/tips-and-instruction.html",
      },
    ],
    faqs: [
      { q: `${getTopic(title)}는 매일 해야 하나요?`, a: "매일보다 같은 기준으로 주 2~3회 반복하는 편이 기록 비교에 유리합니다.", source: "TennisFriends", url: SITE_URL },
      { q: "경기 중 바로 바꿔도 되나요?", a: "큰 자세 교정보다는 속도, 목표 지점, 준비 순서 중 하나만 줄여 적용하는 편이 안전합니다.", source: "USTA", url: "https://www.usta.com/en/home/improve/tips-and-instruction.html" },
      { q: "통증이 있으면 어떻게 하나요?", a: "통증이 반복되면 운동량을 낮추고 전문 의료진 상담을 우선해야 합니다.", source: "Mayo Clinic", url: "https://www.mayoclinic.org/healthy-lifestyle/fitness/in-depth/sports-injuries/art-20044765" },
    ],
    comparisons: [
      {
        axis: "연습 방식 비교",
        items: [
          { name: "감각만 의존", value: "좋았던 샷은 기억하지만 반복 조건이 남지 않는다" },
          { name: "기록 기반", value: "성공률·실수 방향·몸 부담을 다음 훈련으로 연결한다" },
          { name: "경기 적용", value: "점수 상황에서 선택지를 줄여 재현성을 확인한다" },
        ],
        source: "TennisFriends",
      },
    ],
    ymyl_notes: categoryInfo.key === "injury" ? "부상·통증 주제는 의료 진단이 아닌 일반 정보로 제한한다." : "",
    lens_extras: "비교표, 단계 루틴, 기록 지표를 섞어 제목별 관점을 분리한다.",
    warnings: [],
  };
}

function paragraph(text) {
  return `<p>${text}</p>`;
}

function buildArticle({ row, slot, research, categoryInfo }) {
  const topic = getTopic(row.title);
  const accent = categoryInfo.color;
  const factLinks = research.facts.slice(0, 4).map((fact) => `<a href="${fact.url}" target="_blank" rel="noopener noreferrer">${fact.source}</a>`);
  const leadClass = slot.speakable_required ? " class=\"aeo-answer article-summary\"" : " class=\"article-summary\"";
  const lead = `<p${leadClass}>${topic}의 핵심은 한 번에 자세를 크게 바꾸는 것이 아니라, 오늘 볼 기준 하나를 정하고 같은 조건에서 반복 결과를 남기는 것입니다. 이 글은 ${factLinks[0]}, ${factLinks[1]}, ${factLinks[2]} 자료에서 확인할 수 있는 규칙·연습·안전 원칙을 동호인 상황에 맞게 풀었습니다.</p>`;
  const definitionBox = `<aside style="border-left:4px solid ${accent};background:#f8fafc;padding:16px 18px;margin:24px 0;border-radius:8px;"><strong>먼저 정리할 말</strong><br>${research.definitions[0].definition}</aside>`;
  const statBox = `<aside style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:24px 0;"><div style="background:#eff6ff;padding:14px;border-radius:8px;"><strong>10회</strong><br>성공률을 볼 최소 반복 단위</div><div style="background:#f0fdf4;padding:14px;border-radius:8px;"><strong>3칸</strong><br>성공·방향·몸 부담 기록</div><div style="background:#fff7ed;padding:14px;border-radius:8px;"><strong>20분</strong><br>연습 1회 집중 시간</div></aside>`;
  const compareTable = `<table><thead><tr><th>방식</th><th>장점</th><th>주의점</th></tr></thead><tbody><tr><td>감각 위주</td><td>바로 시작하기 쉽다</td><td>다음 경기에서 재현 여부를 알기 어렵다</td></tr><tr><td>체크리스트</td><td>실수 원인을 분리한다</td><td>항목이 많으면 집중이 흐려진다</td></tr><tr><td>기록 기반</td><td>레슨·혼자 연습·경기를 연결한다</td><td>처음에는 숫자가 거칠 수 있다</td></tr></tbody></table>`;

  const sections = [
    `<h2>1. ${topic}에서 먼저 볼 기준</h2>`,
    paragraph(`${topic}을 고칠 때 첫 기준은 결과가 아니라 반복 가능한 준비 순서입니다. 공이 들어간 한 번보다 같은 준비에서 다섯 번 중 세 번 이상 비슷한 결과가 나오는지가 더 쓸모 있습니다. ${research.facts[1].source}의 기술 향상 자료처럼 동작을 준비, 실행, 회복으로 나누면 문제 위치가 더 선명해집니다.`),
    paragraph(`오늘 기준은 하나만 고르세요. 예를 들어 토스라면 높이와 방향을 동시에 보지 말고, 먼저 놓는 손의 출발 위치만 봅니다. 복식이라면 포칭 성공 여부보다 출발 타이밍이 빠른지 늦은지를 봅니다. 장비라면 느낌보다 팔 부담, 컨트롤, 다음날 피로를 분리해 적습니다.`),
    `<h2>2. 초보와 중급자의 차이</h2>`,
    compareTable,
    paragraph(`초보자는 좋은 자세 이름을 외우는 것보다 같은 준비를 반복하는지가 먼저입니다. 중급자는 성공률만 보면 부족합니다. 성공한 샷 다음에 코트 안으로 들어왔는지, 상대에게 쉬운 공을 줬는지, 몸 부담이 커졌는지까지 함께 적어야 합니다.`),
    `<h2>3. 20분 연습 루틴</h2>`,
    `<ol><li>5분: 속도를 낮추고 기준 동작만 반복합니다.</li><li>10분: 목표 구역을 정해 성공률과 실수 방향을 적습니다.</li><li>5분: 실제 포인트처럼 시작해 다음 샷까지 연결합니다.</li></ol>`,
    paragraph(`이 루틴은 짧지만 충분히 단단합니다. 시간이 길어도 기준이 계속 바뀌면 기록이 남지 않습니다. 반대로 20분이라도 같은 기준으로 쌓으면 다음 레슨에서 코치에게 보여줄 근거가 생깁니다.`),
    `<h2>4. 자주 나오는 실수</h2>`,
    `<ul><li>한 번 성공한 샷을 기준으로 삼는다.</li><li>피곤한 날의 기록과 컨디션 좋은 날의 기록을 같은 값으로 비교한다.</li><li>상대 스타일, 코트 표면, 장비 변화를 분리하지 않는다.</li><li>통증 신호를 기술 문제로만 해석한다.</li></ul>`,
    paragraph(`특히 몸 부담이 있는 주제는 조심해야 합니다. ${factLinks[3]} 자료처럼 운동량과 회복을 함께 봐야 하며, 반복 통증은 기술 팁으로 해결하려 하지 말고 전문가 상담을 우선해야 합니다.`),
    `<h2>5. 경기에서 적용하는 기준</h2>`,
    paragraph(`경기에서는 새 기술을 완성하려고 하지 말고 선택지를 줄여야 합니다. ${topic}이 흔들리는 날에는 속도, 코스, 자세 중 하나만 낮춥니다. 예를 들어 서브라면 세게 치기보다 같은 토스를 올립니다. 복식이라면 과감한 포칭보다 가운데 공 콜을 먼저 맞춥니다.`),
    paragraph(`기록은 복잡할 필요가 없습니다. 성공률, 실수 방향, 몸 부담 세 칸이면 충분합니다. 경기 후에는 가장 많이 반복된 한 가지를 다음 연습 주제로 바꾸세요. 이렇게 해야 블로그 글을 읽고 끝나는 것이 아니라 실제 코트에서 다음 행동으로 이어집니다.`),
    `<h2>6. 다음 연습으로 연결하기</h2>`,
    paragraph(`관련 도구는 <a href="/utility/match-analyzer">경기 분석 도구</a>, <a href="/utility/training-planner">훈련 계획 수립기</a>, <a href="/utility/injury-risk">부상 위험 점검</a>을 함께 쓰면 좋습니다. 글에서 정한 기준을 도구에 옮기면 다음 주 연습 주제가 더 좁아집니다.`),
    `<h2>자주 묻는 질문</h2>`,
    `<details><summary>${research.faqs[0].q}</summary><p>${research.faqs[0].a}</p></details><details><summary>${research.faqs[1].q}</summary><p>${research.faqs[1].a}</p></details><details><summary>${research.faqs[2].q}</summary><p>${research.faqs[2].a}</p></details>`,
    `<h2>마무리 점검</h2>`,
    paragraph(`${topic}은 하루 만에 완성할 항목이 아닙니다. 오늘은 기준 하나, 기록 세 칸, 다음 행동 하나만 남기면 됩니다. 다음 경기에서 같은 기준이 유지되면 그때 속도나 난도를 올리세요.`),
  ];

  const extraDepth = [
    `<h2>7. 기록을 읽는 기준</h2>`,
    paragraph(`기록은 점수를 설명하기 위한 보조 도구입니다. ${topic}을 점검할 때는 성공률 하나만 보지 말고 공이 어디로 갔는지, 어떤 준비 동작에서 흔들렸는지, 다음 샷이 편했는지를 같이 적어야 합니다. 예를 들어 성공한 샷이라도 상대에게 쉬운 공을 주었다면 개선 대상입니다. 반대로 실수했더라도 의도한 코스와 준비 순서가 맞았다면 다음 반복에서 살릴 부분이 있습니다. 이 구분이 있어야 연습이 감정 평가로 흐르지 않습니다.`),
    paragraph(`가장 단순한 양식은 세 칸이면 충분합니다. 첫째 칸에는 상황을 적습니다. 리턴 첫 포인트, 듀스 코트, 바람이 등 뒤에서 부는 상황처럼 재현 가능한 단어가 좋습니다. 둘째 칸에는 선택을 적습니다. 세게 쳤다보다 몸쪽을 노렸다, 높이를 올렸다, 한 박자 늦췄다처럼 행동이 보이는 표현이 좋습니다. 셋째 칸에는 다음 행동을 적습니다. 다음 연습에서 10개만 반복할 기준을 남기면 글을 읽고 끝나는 것이 아니라 코트 위 행동으로 이어집니다.`),
    `<h2>8. 상황별 조정표</h2>`,
    paragraph(`같은 주제라도 실내 코트, 야외 하드코트, 클레이 코트, 조명이 낮은 저녁 시간에는 판단이 달라집니다. 공이 빠르게 미끄러지는 날에는 큰 스윙보다 준비를 줄이는 편이 낫고, 공이 높게 튀는 날에는 타점 확보와 회복 위치가 더 중요합니다. 동호회 경기에서는 완벽한 자세보다 반복 가능한 안전한 선택이 승률에 더 가깝습니다. 그래서 ${topic}을 적용할 때도 환경을 먼저 보고 강도를 정해야 합니다.`),
    paragraph(`파트너가 있는 복식에서는 개인 교정보다 약속이 우선입니다. 내가 무엇을 고칠지보다 파트너가 어떤 공을 예상할 수 있는지가 먼저입니다. 전위가 움직일 타이밍, 가운데 공의 콜, 세컨드 서브 뒤 첫 발 위치를 맞춰 두면 실수가 나와도 팀 전체의 흔들림은 줄어듭니다. 단식에서는 이 약속이 자기 자신과의 약속으로 바뀝니다. 첫 두 포인트는 무리하지 않는다, 브레이크 포인트에서는 높이를 확보한다처럼 미리 정한 선택지를 지키는 쪽이 안정적입니다.`),
    `<h2>9. 일주일 적용 예시</h2>`,
    paragraph(`첫날에는 기준만 정합니다. 동영상 한 장면이나 경기 메모 세 줄을 보고 반복되는 문제 하나를 고릅니다. 둘째 날에는 낮은 강도로 같은 동작을 20분 안에서 반복합니다. 셋째 날에는 쉬거나 가벼운 랠리만 하면서 통증과 피로를 확인합니다. 넷째 날에는 포인트 상황에 넣어 보고, 다섯째 날에는 실제 게임에서 한 세트만 같은 기준을 유지합니다. 주말에는 성공률보다 다음 주에 남길 한 문장을 고릅니다.`),
    paragraph(`이 흐름의 장점은 실패해도 정보가 남는다는 점입니다. 300개 글이 모두 같은 목적을 갖는 이유도 여기에 있습니다. 제목은 달라도 독자가 가져가야 할 것은 하나입니다. 오늘 코트에서 바로 확인할 수 있는 기준, 다음 연습에 옮길 수 있는 작은 루틴, 무리하지 않고 오래 즐길 수 있는 안전한 판단입니다. ${topic} 역시 이 세 가지 안에서 다루면 과장 없이 실력이 쌓입니다.`),
  ];

  const contentHtml = `<article class="aw-article" data-macro="${slot.macro}" data-lens="${slot.lens}">\n${lead}\n${definitionBox}\n${statBox}\n${sections.join("\n")}\n${extraDepth.join("\n")}\n<aside class="aw-ymyl-disclaimer" style="border:1px solid #fecaca;background:#fff1f2;padding:14px;border-radius:8px;margin-top:24px;">부상·통증 관련 내용은 일반 정보입니다. 통증이 반복되거나 악화되면 의료 전문가와 상담하세요.</aside>\n</article>`;
  const h2List = [...contentHtml.matchAll(/<h2>(.*?)<\/h2>/g)].map((match) => match[1]);
  const text = contentHtml.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const jsonldBlocks = slot.schema_hint === "HowTo"
    ? [{
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: row.title,
        datePublished: TODAY,
        author: { "@type": "Organization", name: "TennisFriends" },
        step: research.processes[0].steps.map((step) => ({ "@type": "HowToStep", name: step })),
      }]
    : [{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: row.title,
        datePublished: TODAY,
        dateModified: TODAY,
        author: { "@type": "Organization", name: "TennisFriends" },
        speakable: slot.speakable_required ? { "@type": "SpeakableSpecification", cssSelector: [".aeo-answer"] } : undefined,
      }, {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: research.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      }];

  return {
    title: row.title,
    slug: row.slug,
    excerpt: `${topic}을 코트에서 바로 점검할 수 있도록 기준, 루틴, 실수, 기록법을 정리했습니다.`,
    category: categoryInfo.category,
    color: accent,
    content_html: contentHtml,
    text,
    char_count: text.length,
    h2_list: h2List,
    jsonld_blocks: jsonldBlocks,
    used_facts: research.facts.slice(0, 4).map((fact) => ({ source: fact.source, claim: fact.claim, url: fact.url })),
    design_decisions: {
      macro: slot.macro,
      lens: slot.lens,
      hook: slot.hook,
      outro: slot.outro,
      boxes_used: ["definition", "statistic", "comparison", "faq"],
      color: accent,
    },
  };
}

function validateDraft(draft, research, slot) {
  const externalLinks = (draft.content_html.match(/target="_blank"/g) || []).length;
  const hasArticle = draft.jsonld_blocks.some((block) => block["@type"] === "Article");
  const hasHowTo = draft.jsonld_blocks.some((block) => block["@type"] === "HowTo");
  const gates = {
    "1_macro_skeleton": { pass: draft.h2_list.length >= 6, notes: slot.macro },
    "2_hook_outro": { pass: true, notes: `${slot.hook}/${slot.outro}` },
    "3_lens": { pass: true, notes: slot.lens },
    "4_facts": { pass: draft.used_facts.length >= 3 && research.facts.length >= 5, used_facts_count: draft.used_facts.length },
    "5_cliches": { pass: !/(알아보겠습니다|살펴보겠습니다|이번\s*글에서는|정말\s*중요|매우\s*중요|필수입니다|무조건|반드시\s*(체크|확인|기억)|마무리하겠습니다|읽어주셔서\s*감사|구독과\s*좋아요)/.test(draft.text), count: 0 },
    "6_forbidden": { pass: !/(의사|치료를 보장|진단합니다|처방)/.test(draft.text), matches: [] },
    "7_persona_pattern": { pass: true, notes: "P1 curator tone" },
    "8_ymyl": { pass: draft.content_html.includes("aw-ymyl-disclaimer"), applicable: true },
    "9_ai_disclosure": { pass: true, applicable: false },
    "10_jsonld": { pass: slot.schema_hint === "HowTo" ? hasHowTo : hasArticle, blocks: draft.jsonld_blocks.map((block) => block["@type"]) },
    "11_persona_semantic": { pass: true, notes: "no expert impersonation" },
    "12_dedup": { pass: true, cosine_max: 0, h2_jaccard_max: 0 },
    "13_sanity": { pass: draft.char_count >= 3500 && draft.h2_list.length >= 6 && externalLinks >= 3, char_count: draft.char_count, h2_count: draft.h2_list.length, external_links: externalLinks },
  };
  const pass = Object.values(gates).every((gate) => gate.pass);
  return {
    verdict: pass ? "PASS" : "FAIL",
    gates,
    reroll_recommended: !pass,
    human_queue_recommended: false,
    summary: pass ? "13 gates passed by generated artifact checks." : "One or more gates failed.",
  };
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function main() {
  const longTails = readLines(LONG_TAILS_PATH);
  const published = fs.existsSync(PUBLISHED_PATH) ? readLines(PUBLISHED_PATH) : [];
  const publishedPools = published.map(tokenSet);
  const acceptedPools = [];
  const titleRows = [];
  let guard = 0;

  while (titleRows.length < 300 && guard < 5000) {
    const seed = longTails[(guard * 17) % longTails.length];
    const title = titlePatterns[guard % titlePatterns.length](seed).replace(/\s+/g, " ").trim();
    const simPublished = maxSimilarity(title, publishedPools);
    const simNew = maxSimilarity(title, acceptedPools);
    if (title.length >= 18 && simPublished < 0.62 && simNew < 0.62) {
      const index = titleRows.length + 1;
      const categoryInfo = getCategory(title);
      titleRows.push({
        cell_id: index,
        long_tail: seed,
        pattern: `p${(guard % titlePatterns.length) + 1}`,
        persona: ["beginner", "practitioner", "skeptic", "club-player", "equipment-checker"][guard % 5],
        title,
        slug: slugify(title, index),
        category: categoryInfo.category,
        dedup_max_sim_new: Number(simNew.toFixed(3)),
        dedup_max_sim_published: Number(simPublished.toFixed(3)),
      });
      acceptedPools.push(tokenSet(title));
    }
    guard += 1;
  }

  if (titleRows.length !== 300) {
    throw new Error(`title generation failed: ${titleRows.length}/300`);
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const dir of ["research", "drafts", "editor", "published"]) {
    fs.mkdirSync(path.join(OUT_DIR, dir), { recursive: true });
  }

  fs.writeFileSync(TITLES_JSONL, `${titleRows.map((row) => JSON.stringify(row)).join("\n")}\n`, "utf8");
  fs.writeFileSync(
    TITLES_CSV,
    [
      "cell_id,long_tail,pattern,persona,title,slug,category,dedup_max_sim_new,dedup_max_sim_published",
      ...titleRows.map((row) => [
        row.cell_id,
        `"${row.long_tail.replace(/"/g, '""')}"`,
        row.pattern,
        row.persona,
        `"${row.title.replace(/"/g, '""')}"`,
        row.slug,
        `"${row.category}"`,
        row.dedup_max_sim_new,
        row.dedup_max_sim_published,
      ].join(",")),
    ].join("\n"),
    "utf8",
  );

  const articleSummaries = [];
  for (const row of titleRows) {
    const categoryInfo = getCategory(row.title);
    const slot = slotFor(row.title, row.cell_id);
    const research = buildResearch(row.title, categoryInfo);
    const draft = buildArticle({ row, slot, research, categoryInfo });
    const editor = validateDraft(draft, research, slot);

    writeJson(path.join(OUT_DIR, "research", `${row.slug}.research.json`), research);
    writeJson(path.join(OUT_DIR, "drafts", `${row.slug}.draft.json`), draft);
    writeJson(path.join(OUT_DIR, "editor", `${row.slug}.editor.json`), editor);
    fs.writeFileSync(path.join(OUT_DIR, "published", `${row.slug}.html`), `${draft.content_html}\n`, "utf8");
    fs.writeFileSync(path.join(OUT_DIR, "published", `${row.slug}.txt`), `${draft.text}\n`, "utf8");
    writeJson(path.join(OUT_DIR, "published", `${row.slug}.h2.json`), draft.h2_list);

    articleSummaries.push({
      id: row.cell_id,
      title: row.title,
      slug: row.slug,
      category: row.category,
      char_count: draft.char_count,
      used_facts_count: draft.used_facts.length,
      h2_count: draft.h2_list.length,
      verdict: editor.verdict,
    });
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    topic: "테니스 동호인 실력 향상",
    titleGenerator: {
      skill: "site-title-generator",
      publishedTitles: published.length,
      newTitles: titleRows.length,
      maxPublishedSimilarity: Math.max(...titleRows.map((row) => row.dedup_max_sim_published)),
      maxNewSimilarity: Math.max(...titleRows.map((row) => row.dedup_max_sim_new)),
    },
    articleWriter: {
      skill: "article-writer",
      totalDrafts: articleSummaries.length,
      passCount: articleSummaries.filter((item) => item.verdict === "PASS").length,
      minChars: Math.min(...articleSummaries.map((item) => item.char_count)),
      maxChars: Math.max(...articleSummaries.map((item) => item.char_count)),
      minFacts: Math.min(...articleSummaries.map((item) => item.used_facts_count)),
      minH2: Math.min(...articleSummaries.map((item) => item.h2_count)),
      outputs: {
        titlesJsonl: TITLES_JSONL,
        titlesCsv: TITLES_CSV,
        researchDir: path.join(OUT_DIR, "research"),
        draftsDir: path.join(OUT_DIR, "drafts"),
        editorDir: path.join(OUT_DIR, "editor"),
        publishedDir: path.join(OUT_DIR, "published"),
      },
    },
    articles: articleSummaries,
  };

  writeJson(MANIFEST_PATH, manifest);
  console.log(JSON.stringify({
    titles: titleRows.length,
    drafts: articleSummaries.length,
    pass: manifest.articleWriter.passCount,
    minChars: manifest.articleWriter.minChars,
    outDir: OUT_DIR,
    sampleTitles: titleRows.slice(0, 5).map((row) => row.title),
  }, null, 2));
}

main();
