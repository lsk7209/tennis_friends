import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SEEDS_PATH = path.join(ROOT, "seeds-tmp", "long-tails.txt");
const PUBLISHED_PATH = path.join(ROOT, "seeds-tmp", "published.txt");
const OUT_DIR = path.join(ROOT, "out", "article-writer", "tennisfrens-300");
const TITLES_JSONL = path.join(OUT_DIR, "titles.jsonl");
const TITLES_CSV = path.join(OUT_DIR, "titles.csv");

const patterns = [
  "question",
  "list",
  "howto",
  "compare",
  "case",
  "stat",
  "season",
  "mistake",
  "checklist",
  "decide",
  "story",
  "warning",
];

const personas = ["beginner", "practitioner", "expert", "skeptic", "failed"];

const patternWriters = {
  question: (seed, angle) => `${seed}, ${angle.question}`,
  list: (seed, angle) => `${seed} ${angle.list}`,
  howto: (seed, angle) => `${seed} ${angle.howto}`,
  compare: (seed, angle) => `${seed}, ${angle.compare}`,
  case: (seed, angle) => `${seed} ${angle.case}`,
  stat: (seed, angle) => `${seed} ${angle.stat}`,
  season: (seed, angle) => `${angle.season} ${seed}`,
  mistake: (seed, angle) => `${seed} ${angle.mistake}`,
  checklist: (seed, angle) => `${seed} ${angle.checklist}`,
  decide: (seed, angle) => `${seed}, ${angle.decide}`,
  story: (seed, angle) => `${seed} ${angle.story}`,
  warning: (seed, angle) => `${seed} ${angle.warning}`,
};

const angles = [
  {
    question: "지금 내 실력에 맞는 선택일까?",
    list: "핵심 기준 5가지",
    howto: "단계별로 잡는 법",
    compare: "초보와 중급자의 차이",
    case: "실제 경기에서 바꿔본 결과",
    stat: "기록으로 확인하는 방법",
    season: "2026년 기준",
    mistake: "자주 나오는 실수",
    checklist: "전 꼭 볼 체크리스트",
    decide: "언제 바꿔야 할까?",
    story: "한 달 점검 노트",
    warning: "할 때 조심할 함정",
  },
  {
    question: "먼저 고칠 부분은 무엇일까?",
    list: "실전 적용 포인트 7가지",
    howto: "연습 루틴으로 만드는 법",
    compare: "레슨 전후가 갈리는 지점",
    case: "동호회 경기에서 확인한 변화",
    stat: "체크 지표로 보는 법",
    season: "주말 동호인을 위한",
    mistake: "놓치기 쉬운 원인",
    checklist: "후 바로 점검할 항목",
    decide: "지금 연습해야 할까?",
    story: "경기 후 복기 노트",
    warning: "전에 피해야 할 습관",
  },
  {
    question: "계속 반복되는 이유는?",
    list: "우선순위 3단계",
    howto: "코트에서 바로 적용하는 법",
    compare: "힘으로 할 때와 기준으로 할 때",
    case: "레슨 없이 점검해본 과정",
    stat: "실수 패턴으로 읽는 법",
    season: "시합 전 확인하는",
    mistake: "고치기 전에 보는 신호",
    checklist: "연습 전후 점검표",
    decide: "바로 바꿔도 괜찮을까?",
    story: "실패 후 다시 잡은 기준",
    warning: "에서 과하게 하면 생기는 문제",
  },
];

function readLines(filePath) {
  return fs
    .readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function ngrams(value, n = 3) {
  const tokens = normalize(value)
    .split(" ")
    .filter((token) => token.length >= 2);
  if (tokens.length === 0) return new Set();
  if (tokens.length < n) return new Set([tokens.join(" ")]);

  const out = new Set();
  for (let i = 0; i <= tokens.length - n; i += 1) {
    out.add(tokens.slice(i, i + n).join(" "));
  }
  return out;
}

function jaccard(a, b) {
  if (a.size === 0 && b.size === 0) return 1;
  if (a.size === 0 || b.size === 0) return 0;

  let intersection = 0;
  for (const item of a) {
    if (b.has(item)) intersection += 1;
  }

  return intersection / (a.size + b.size - intersection);
}

function maxSimilarity(title, pools) {
  const grams = ngrams(title);
  return pools.reduce((max, pool) => Math.max(max, jaccard(grams, pool)), 0);
}

function csvEscape(value) {
  return `"${String(value).replace(/"/g, '""')}"`;
}

const seeds = readLines(SEEDS_PATH);
const published = readLines(PUBLISHED_PATH);
const publishedGrams = published.map((title) => ngrams(title));
const rows = [];
const acceptedGrams = [];
let guard = 0;

while (rows.length < 300 && guard < 3000) {
  const seed = seeds[(guard * 7) % seeds.length];
  const pattern = patterns[guard % patterns.length];
  const persona = personas[(guard * 11) % personas.length];
  const angle = angles[Math.floor(guard / seeds.length) % angles.length];
  const writer = patternWriters[pattern];
  const title = writer(seed, angle)
    .replace(/\s+/g, " ")
    .replace("?,", "?")
    .trim();
  const publishedSim = maxSimilarity(title, publishedGrams);
  const newSim = maxSimilarity(title, acceptedGrams);

  if (publishedSim < 0.6 && newSim < 0.6 && title.length >= 15) {
    rows.push({
      cell_id: rows.length + 1,
      long_tail: seed,
      pattern,
      persona,
      title,
      dedup_max_sim_new: Number(newSim.toFixed(3)),
      dedup_max_sim_published: Number(publishedSim.toFixed(3)),
    });
    acceptedGrams.push(ngrams(title));
  }

  guard += 1;
}

if (rows.length < 300) {
  throw new Error(`Only generated ${rows.length} titles`);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(TITLES_JSONL, `${rows.map((row) => JSON.stringify(row)).join("\n")}\n`, "utf8");
fs.writeFileSync(
  TITLES_CSV,
  [
    "cell_id,long_tail,pattern,persona,title,dedup_max_sim_new,dedup_max_sim_published",
    ...rows.map((row) =>
      [
        row.cell_id,
        csvEscape(row.long_tail),
        row.pattern,
        row.persona,
        csvEscape(row.title),
        row.dedup_max_sim_new,
        row.dedup_max_sim_published,
      ].join(","),
    ),
  ].join("\n"),
  "utf8",
);

console.log(`Generated ${rows.length} titles`);
console.log(rows.slice(0, 5).map((row) => `- ${row.title}`).join("\n"));
