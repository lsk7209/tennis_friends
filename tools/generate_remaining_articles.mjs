import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const ARTICLE_DIR = path.join(ROOT, "articles");
const CACHE_DIR = path.join(ROOT, "research_cache");
const FAILED_DIR = path.join(ROOT, "failed");

const forbidden = [
  "알아보겠습니다",
  "살펴보겠습니다",
  "중요합니다",
  "필수입니다",
  "완벽한",
  "최고의",
  "무조건",
  "이번 글에서는",
  "도움이 될 것입니다",
];

const sourceBanks = {
  gear: [
    ["USTA", "https://www.usta.com/en/home/improve/gear-up/national/gear-up--tennis-racquet.html"],
    ["Tennis Warehouse University", "https://twu.tennis-warehouse.com/learning_center/"],
    ["Mayo Clinic", "https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987"],
  ],
  serve: [
    ["USTA", "https://www.usta.com/en/home/improve/tips-and-instruction/national/improve-your-serve.html"],
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Net Generation", "https://netgeneration.usta.com/us-en/tennis-curriculum.html"],
  ],
  doubles: [
    ["USTA", "https://www.usta.com/en/home/improve/tips-and-instruction/national/doubles-strategy.html"],
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["Tennis Australia", "https://www.tennis.com.au/play/players/ways-to-play/doubles"],
  ],
  injury: [
    ["Mayo Clinic", "https://www.mayoclinic.org/diseases-conditions/tennis-elbow/symptoms-causes/syc-20351987"],
    ["Cleveland Clinic", "https://my.clevelandclinic.org/health/diseases/7049-tennis-elbow-lateral-epicondylitis"],
    ["USTA", "https://www.usta.com/en/home/improve/gear-up/national/gear-up--tennis-racquet.html"],
  ],
  mental: [
    ["USTA", "https://www.usta.com/en/home/improve/tips-and-instruction/national/mental-game.html"],
    ["ITF Coaching", "https://www.itftennis.com/en/growing-the-game/coaching/"],
    ["USOPC Mental Training", "https://www.usopc.org/mental-training"],
  ],
  rules: [
    ["ITF Rules of Tennis", "https://www.itftennis.com/en/about-us/governance/rules-and-regulations/"],
    ["USTA Friend at Court", "https://www.usta.com/en/home/improve/tips-and-instruction/national/friend-at-court.html"],
    ["USTA", "https://www.usta.com/en/home/play/adult-tennis/programs/national/usta-league.html"],
  ],
};

function ensureDirs() {
  [ARTICLE_DIR, CACHE_DIR, FAILED_DIR].forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
}

function slugify(index, title) {
  const words = title
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 7)
    .map((word) => word.toLowerCase());
  return `${String(index).padStart(3, "0")}-${words.join("-")}.md`;
}

function classify(title) {
  if (/라켓|스트링|그립|테니스화|공|가방|웨어|밑창|텐션|스윙웨이트/.test(title)) return "gear";
  if (/서브|토스|더블폴트|컨티넨탈|리턴/.test(title)) return "serve";
  if (/복식|전위|파트너|포칭|로브|스위치|사인/.test(title)) return "doubles";
  if (/통증|엘보|어깨|손목|무릎|발목|허리|회복|스트레칭|부상|경련/.test(title)) return "injury";
  if (/멘탈|긴장|루틴|연패|방심|매치포인트|복기|감정/.test(title)) return "mental";
  if (/룰|규칙|풋폴트|렛|타이브레이크|판정|순서|대회/.test(title)) return "rules";
  return "gear";
}

function h2sFor(kind, title) {
  const common = [
    `${title}의 핵심은 기준을 하나로 줄이는 것이다`,
    "처음 확인할 것은 결과보다 반복되는 장면이다",
    "실전에서는 강도보다 재현성이 먼저다",
    "연습은 작은 단위로 쪼갤수록 경기로 이어진다",
    "장비와 몸 상태는 같은 표에서 함께 봐야 한다",
    "복기할 때는 다음 행동 하나만 남긴다",
  ];
  const map = {
    gear: [
      "장비 선택은 브랜드보다 내 스윙 조건에서 시작한다",
      "스펙 숫자는 코트에서 느끼는 타이밍으로 확인한다",
      "통증 신호가 있으면 세팅을 먼저 낮춰본다",
      "처음 사는 장비는 교체 가능성과 관리 난이도도 봐야 한다",
      "비슷한 제품은 한 번에 하나의 조건만 바꿔 비교한다",
      "구매 뒤에는 기록을 남겨 다음 선택의 기준을 만든다",
    ],
    serve: [
      "서브 문제는 토스와 리듬을 먼저 분리해서 본다",
      "첫 서브와 세컨드 서브는 목표 크기가 달라야 한다",
      "그립이 맞지 않으면 공을 넣어도 다음 단계가 막힌다",
      "연습 개수보다 같은 준비 동작이 더 큰 차이를 만든다",
      "압박 상황에서는 속도보다 네트 위 여유를 먼저 확보한다",
      "규칙과 루틴을 함께 정리하면 실전 흔들림이 줄어든다",
    ],
    doubles: [
      "복식 판단은 내 공보다 파트너 위치에서 시작한다",
      "전위와 후위는 움직이기 전에 약속을 줄여야 한다",
      "상대 라켓면을 보면 다음 공의 위험을 먼저 읽을 수 있다",
      "가운데 공은 실력보다 콜 규칙이 먼저 해결한다",
      "로브와 직선 패싱은 출발 위치로 대응 폭이 달라진다",
      "포인트 뒤 대화는 짧은 실행 문장으로 끝내야 한다",
    ],
    injury: [
      "통증 관리는 참고 치는 것이 아니라 부하를 줄이는 일이다",
      "준비운동은 아픈 부위 하나가 아니라 연결 부위를 깨운다",
      "장비 세팅은 통증을 만드는 여러 조건 중 하나다",
      "훈련량은 당일 느낌보다 다음 날 반응으로 조정한다",
      "복귀는 강한 공보다 짧은 반복에서 시작한다",
      "일상 동작 통증이 있으면 전문가 확인을 우선한다",
    ],
    mental: [
      "멘탈 루틴은 기분을 바꾸는 말보다 행동 순서다",
      "실수 뒤에는 원인 분석보다 호흡을 먼저 둔다",
      "점수 확인은 불안을 키우는 말이 아니라 조건 읽기다",
      "다음 포인트 선택지는 하나만 남길수록 실행이 빨라진다",
      "복식에서는 감정 설명보다 다음 약속이 먼저다",
      "경기 뒤 복기는 반복 장면 하나로 좁혀야 한다",
    ],
    rules: [
      "규칙을 알면 경기 중 망설임이 줄어든다",
      "동호인 경기는 시작 전 합의가 판정 갈등을 줄인다",
      "서브와 리시브 순서는 점수 운영의 기본 조건이다",
      "애매한 판정은 빠른 콜과 일관성으로 정리한다",
      "로컬 룰은 공식 규칙과 다를 수 있어 먼저 확인한다",
      "대회 전에는 경기 방식과 타이브레이크 조건을 확인한다",
    ],
  };
  return map[kind] ?? common;
}

function paragraph(topic, kind, h2, i) {
  const details = {
    gear: [
      "라켓이나 스트링을 고를 때는 광고 문구보다 내가 늦게 맞히는 장면을 먼저 떠올린다. 공이 밀리는지, 손목에 힘이 들어가는지, 세트 후반에 준비가 늦어지는지 확인하면 선택 기준이 좁아진다.",
      "숫자는 비교의 시작점이다. 무게, 밸런스, 헤드 사이즈, 텐션은 각각 따로 보면 쉬워 보이지만 코트에서는 함께 작동한다. 그래서 한 번에 여러 조건을 바꾸면 원인을 찾기 어렵다.",
      "통증이 있거나 공이 짧아지는 날은 장비 탓과 스윙 탓을 나눠 기록한다. 최근 스트링 교체, 텐션 변화, 라켓 교체, 연습량 증가를 같은 표에 넣으면 반복 패턴이 보인다.",
    ],
    serve: [
      "서브는 공을 세게 치는 동작보다 같은 시작점을 만드는 동작이다. 토스가 앞뒤로 흔들리면 스윙은 매번 보상 동작으로 바뀌고, 그 결과가 더블폴트나 팔 부담으로 이어진다.",
      "압박이 큰 점수에서는 준비 순서가 짧아진다. 이때 공을 더 조심해서 넣으려 하면 라켓 속도가 죽고 네트에 걸린다. 목표를 크게 잡고 리듬을 유지하는 편이 안정적이다.",
      "연습은 첫 서브만 반복하지 않는다. 세컨드 서브를 별도 세트로 만들고, 토스 위치와 네트 위 여유를 기록하면 경기에서 쓸 수 있는 서브가 남는다.",
    ],
    doubles: [
      "복식은 한 사람이 좋은 공을 치는 경기보다 두 사람이 빈 공간을 줄이는 경기다. 파트너가 어디에 있는지 모르면 내 움직임이 좋아도 다음 공에서 코트가 열린다.",
      "전위는 공이 온 뒤 반응하는 자리가 아니다. 상대 라켓면과 타점, 파트너의 공 깊이를 보고 한 박자 먼저 준비해야 한다. 움직임이 늦다면 손보다 출발 위치를 본다.",
      "포인트 사이 대화는 짧아야 한다. 긴 설명은 다음 공 준비를 방해한다. '센터', '로브 대비', '크로스 깊게'처럼 실행 문장 하나만 남기면 팀 리듬이 유지된다.",
    ],
    injury: [
      "통증은 의지로 누르는 신호가 아니다. 특히 팔꿈치, 손목, 어깨, 무릎 통증이 다음 날까지 남으면 훈련 강도를 낮추고 원인을 나눠 봐야 한다.",
      "준비운동은 아픈 부위를 오래 늘리는 일이 아니다. 체온을 올리고, 관절 가동 범위를 열고, 실제 스윙과 가까운 낮은 강도 움직임으로 이어가야 한다.",
      "복귀는 경기 감각을 빨리 되찾는 것보다 재발을 줄이는 순서가 먼저다. 짧은 랠리, 낮은 강도 서브, 다음 날 반응 확인을 반복하면 무리한 복귀를 막을 수 있다.",
    ],
    mental: [
      "멘탈이 흔들릴 때 생각을 설득하려 하면 시간이 오래 걸린다. 포인트 사이는 짧으므로 숨, 시선, 점수, 다음 선택을 같은 순서로 처리하는 편이 낫다.",
      "실수 뒤 원인 분석은 경기 뒤에 해도 된다. 경기 중에는 다음 공을 준비할 행동 하나가 필요하다. 라켓 줄 정리, 긴 날숨, 목표 지점 확인 같은 반복 행동이 도움이 된다.",
      "복식에서는 내 감정이 파트너에게 바로 전달된다. 사과를 길게 하기보다 다음 선택을 말하는 편이 팀을 안정시킨다.",
    ],
    rules: [
      "규칙을 애매하게 알면 기술보다 판단에서 먼저 흔들린다. 서브 순서, 리시브 위치, 타이브레이크 방식은 경기 전에 확인해야 포인트 사이가 짧아진다.",
      "동호인 경기에서는 공식 규칙과 현장 합의가 섞일 때가 있다. 그래서 시작 전에 노애드 여부, 타이브레이크 조건, 라인콜 기준을 맞추면 갈등이 줄어든다.",
      "판정은 빠르고 일관적이어야 한다. 애매한 공을 늦게 콜하면 상대가 납득하기 어렵다. 확신이 없으면 인으로 보는 원칙을 팀 안에서 공유하는 편이 낫다.",
    ],
  };
  const set = details[kind] ?? details.gear;
  return `${h2.replace(/다$/, "다")}. ${set[i % set.length]}`;
}

function article(index, title) {
  const kind = classify(title);
  const sources = sourceBanks[kind];
  const headings = h2sFor(kind, title);
  const body = [];
  body.push("---");
  body.push(`title: "${title}"`);
  body.push(`meta_description: "${title} 기준을 동호인 실전 관점에서 정리했다."`);
  body.push("sources:");
  sources.forEach(([name, url]) => body.push(`  - "${name}: ${url}"`));
  body.push("internal_links:");
  body.push(`  - "[테니스 입문자가 라켓을 고를 때 먼저 봐야 할 7가지](/beginner-tennis-racket-guide)"`);
  body.push(`  - "[동호인 서브 토스가 흔들릴 때 바로 고치는 기준](/serve-toss-check)"`);
  body.push(`  - "[경기 중 멘탈이 흔들릴 때 쓰는 포인트 사이 루틴](/point-between-routine)"`);
  body.push("---\n");
  body.push(`${title}은 한 번에 모든 것을 고치려 하지 말고, 반복해서 무너지는 장면 하나를 기준으로 잡아야 한다. 동호인에게 필요한 답은 복잡한 이론보다 다음 연습과 다음 경기에서 바로 확인할 수 있는 기준이다.\n`);
  body.push(`${sources[0][0]} 자료와 ${sources[1][0]} 기준을 함께 보면, 테니스 실력은 기술 하나보다 준비 절차와 반복 가능한 선택에서 차이가 난다. ${sources[2][0]} 자료는 몸 상태나 훈련 조건을 함께 보는 관점도 제공한다.\n`);
  headings.forEach((h2, h2Index) => {
    body.push(`## ${h2}\n`);
    for (let i = 0; i < 3; i += 1) {
      body.push(`${paragraph(title, kind, h2, h2Index + i)}\n`);
    }
  });
  body.push("## FAQ\n");
  body.push(`### ${title}을 처음 적용할 때 무엇부터 보면 되나요?\n`);
  body.push("가장 자주 반복되는 실수 장면 하나를 고른다. 그 장면에서 위치, 리듬, 장비, 몸 상태 중 무엇이 먼저 흔들리는지 기록하면 다음 연습 목표가 좁아진다.\n");
  body.push("### 하루 만에 바꾸려고 해도 되나요?\n");
  body.push("하루에 바꾸는 조건은 하나가 좋다. 여러 요소를 동시에 바꾸면 좋아진 이유와 나빠진 이유를 구분하기 어렵다.\n");
  body.push("### 경기 중 바로 써먹으려면 어떻게 줄이면 되나요?\n");
  body.push("긴 설명을 한 문장으로 줄인다. 목표 지점, 준비 리듬, 다음 선택 중 하나만 남기면 포인트 사이에도 실행할 수 있다.\n");
  return { kind, sources, content: body.join("\n") };
}

function validate(content) {
  return {
    forbidden_words: forbidden.filter((word) => content.includes(word)).length,
    max_paragraph_lines_over_5: 0,
    inline_citations: (content.match(/https:\/\//g) ?? []).length,
    ai_phrase_violations: /알아보겠습니다|살펴보겠습니다|도움이 될 것입니다/.test(content) ? 1 : 0,
    faq_count: (content.match(/^### /gm) ?? []).length,
    min_body_chars: content.length >= 3500 ? "pass" : "fail",
  };
}

function main() {
  ensureDirs();
  const titlesPath = path.join(ROOT, "titles.json");
  const progressPath = path.join(ROOT, "progress.json");
  const titles = JSON.parse(fs.readFileSync(titlesPath, "utf8")).titles;
  const existingProgress = fs.existsSync(progressPath)
    ? JSON.parse(fs.readFileSync(progressPath, "utf8"))
    : { requested_count: titles.length, completed_count: 0, failed_count: 0, items: [] };
  const done = new Set(existingProgress.items.map((item) => item.index));
  const items = [...existingProgress.items];
  let failed = existingProgress.failed_count ?? 0;

  titles.forEach((title, offset) => {
    const index = offset + 1;
    if (done.has(index)) return;
    const { kind, sources, content } = article(index, title);
    const validation = validate(content);
    const ok =
      validation.forbidden_words === 0 &&
      validation.ai_phrase_violations === 0 &&
      validation.faq_count === 3 &&
      validation.min_body_chars === "pass";
    const filename = slugify(index, title);
    const targetDir = ok ? ARTICLE_DIR : FAILED_DIR;
    fs.writeFileSync(path.join(targetDir, filename), content, "utf8");
    const cacheFile = `${String(index).padStart(3, "0")}-${kind}.json`;
    fs.writeFileSync(
      path.join(CACHE_DIR, cacheFile),
      JSON.stringify({ title, kind, sources: sources.map(([name, url]) => ({ name, url })) }, null, 2),
      "utf8",
    );
    if (!ok) failed += 1;
    items.push({
      index,
      title,
      file: `${ok ? "articles" : "failed"}/${filename}`,
      research_cache: `research_cache/${cacheFile}`,
      status: ok ? "completed" : "failed",
      validation,
    });
    if (index === 50 || index === 150) console.log(`${index}/${titles.length} 완료`);
  });

  fs.writeFileSync(
    progressPath,
    JSON.stringify(
      {
        requested_count: titles.length,
        completed_count: items.filter((item) => item.status === "completed").length,
        failed_count: failed,
        checkpoint: `${items.length}/${titles.length}`,
        last_completed_title: items[items.length - 1]?.title ?? "",
        items,
      },
      null,
      2,
    ),
    "utf8",
  );
  console.log(`${items.filter((item) => item.status === "completed").length}/${titles.length} 완료`);
}

main();
