const fs = require("fs");
const path = require("path");
const { BLOG_BATCH, PLAYER_BATCH, UTILITY_BATCH } = require("./content_expansion_batch");

const projectRoot = path.join(__dirname, "..");
const blogRoot = path.join(projectRoot, "src", "app", "blog");
const blogRegistryPath = path.join(projectRoot, "src", "data", "blog-posts.js");
const docsRoot = path.join(projectRoot, "docs");

const PROFILES = {
  "tennis-tiebreak-strategy-guide": ["첫 두 샷 선택", "6-6 이후 급해지는 장면", "타이브레이크 점수 게임", "타이브레이크 첫 서브 성공률", "/utility/tiebreak-pressure-simulator", "타이브레이크 시뮬레이터"],
  "tennis-second-serve-confidence-guide": ["세컨드 서브를 시작점으로 쓰기", "더블폴트 뒤 위축되는 장면", "세컨드 서브 20개 루틴", "세컨드 서브 인 비율", "/utility/serve-placement-mapper", "서브 코스 매퍼"],
  "tennis-clay-court-sliding-guide": ["감속하며 타점 맞추기", "브레이크를 억지로 걸다 미끄러지는 장면", "공 없이 슬라이드 정지 후 랠리", "슬라이드 후 첫 회복 스텝", "/utility/court-surface-advisor", "코트 표면 추천기"],
  "tennis-hard-court-recovery-guide": ["충격 누적 관리", "하드코트 연전 뒤 종아리가 무거운 장면", "10분 걷기와 스트레칭 회복 루틴", "다음날 하체 뻐근함", "/utility/recovery-routine-generator", "회복 루틴 생성기"],
  "tennis-grass-court-movement-guide": ["짧은 지지 시간과 낮은 타점 대응", "잔디에서 타점이 자꾸 늦는 장면", "낮은 피드볼 전진 반응 훈련", "낮은 볼 처리 성공률", "/utility/court-surface-advisor", "코트 표면 추천기"],
  "tennis-doubles-serve-formation-guide": ["포메이션과 첫 볼 전개 연결", "같은 위치만 써서 읽히는 장면", "I포메이션과 기본 포메이션 순환", "포메이션별 첫 두 샷 성공률", "/utility/doubles-positioning-simulator", "복식 포지셔닝 시뮬레이터"],
  "tennis-return-positioning-by-surface": ["표면별 준비 거리 조정", "클레이와 잔디에서 같은 위치를 쓰는 장면", "반 걸음 단위 위치 조정 훈련", "리턴 인플레이 비율", "/utility/return-position-calculator", "리턴 위치 계산기"],
  "tennis-matchday-warmup-routine": ["몸과 판단을 동시에 깨우기", "경기 초반만 손발이 안 맞는 장면", "가동성 5분과 패턴 5분 루틴", "경기 첫 두 게임 범실 수", "/utility/warmup-routine-builder", "워밍업 루틴 빌더"],
  "tennis-cooldown-stretching-routine": ["회복 속도를 높이는 정리 루틴", "경기 뒤 바로 식어서 다음날 굳는 장면", "호흡과 스트레칭 묶음 루틴", "다음날 피로감", "/utility/cooldown-routine-builder", "쿨다운 루틴 빌더"],
  "tennis-sleep-recovery-guide": ["취침 전 회복 설계", "야간 경기 후 잠이 늦게 드는 장면", "샤워와 화면 차단 루틴", "기상 시 피로도", "/utility/sleep-readiness-check", "수면 준비도 체크"],
  "tennis-hydration-electrolyte-guide": ["갈증보다 앞서 마시기", "세트 후반 집중력이 급격히 떨어지는 장면", "15분 간격 섭취 기록 훈련", "세션 전후 체중 변화", "/utility/hydration-planner", "수분 섭취 플래너"],
  "tennis-hot-weather-match-guide": ["폭염에서 생존률 높이기", "초반부터 빨리 끝내려다 무너지는 장면", "냉각 루틴 반복", "후반 범실률", "/utility/hydration-planner", "수분 섭취 플래너"],
  "tennis-cold-weather-match-guide": ["추위 속 타이밍 유지", "손이 굳어 프레임샷이 나는 장면", "짧은 점프와 밴드 활성화", "경기 초반 실수 수", "/utility/warmup-routine-builder", "워밍업 루틴 빌더"],
  "tennis-practice-journal-guide": ["느낌이 아니라 기록 남기기", "열심히 했지만 뭐가 좋아졌는지 모르는 장면", "목표와 성공 장면 기록 루틴", "주간 반복 실수 패턴", "/utility/match-video-review-template", "경기 영상 리뷰 템플릿"],
  "tennis-unforced-error-reduction-guide": ["선택 구조 단순화", "내용은 비슷한데 범실에서만 지는 장면", "높이와 깊이 제한 랠리", "세트당 범실 수", "/utility/unforced-error-audit", "범실 분석기"],
  "tennis-approach-shot-guide": ["짧은 볼을 기회로 만들기", "짧은 볼이 와도 애매하게 들어가는 장면", "어프로치 후 첫 발리 연결 훈련", "어프로치 후 득점률", "/utility/shot-selection-trainer", "샷 선택 트레이너"],
  "tennis-split-step-timing-guide": ["반응 출발 장치 만들기", "발은 빠른데 출발이 늘 늦는 장면", "상대 임팩트 타이밍 반응 훈련", "첫 반응 지연 횟수", "/utility/focus-training", "집중 훈련"],
  "tennis-serve-plus-one-patterns": ["서브 다음 볼까지 설계", "좋은 서브 후 세 번째 볼에서 놓치는 장면", "코스별 다음 볼 루틴", "3구 내 주도권 유지율", "/utility/serve-placement-mapper", "서브 코스 매퍼"],
  "tennis-mental-reset-between-points": ["짧은 재정렬 루틴", "실수 뒤 연속으로 흔들리는 장면", "턴과 호흡 4단계 루틴", "실수 직후 다음 포인트 승률", "/utility/focus-training", "집중 훈련"],
  "tennis-junior-training-roadmap": ["연령에 맞는 우선순위", "기술은 빠른데 경기 이해가 늦는 장면", "연령별 비중 조정 계획", "단계별 과제 달성률", "/utility/junior-development-roadmap", "주니어 성장 로드맵"],
  "tennis-adult-beginner-first-90-days": ["지속 가능한 입문 루틴", "초반 의욕으로 무리하다 멈추는 장면", "30일 단위 학습 계획", "30구 랠리 성공 횟수", "/utility/adult-beginner-roadmap", "성인 입문 로드맵"],
  "tennis-partner-practice-drills": ["둘이서도 구조 있는 훈련", "파트너 연습이 랠리만 하다 끝나는 장면", "크로스와 전환 드릴", "드릴별 목표 달성률", "/utility/practice-drill-generator", "연습 드릴 생성기"],
  "tennis-wall-practice-guide": ["벽을 상대로도 경기형 반복", "벽치기가 실전으로 이어지지 않는 장면", "포핸드·백핸드·전환 루틴", "연속 성공 횟수", "/utility/practice-wall-drill-planner", "벽치기 드릴 플래너"],
  "tennis-doubles-net-player-guide": ["네트 압박 타이밍", "네트에 서도 영향이 없는 장면", "포치와 복귀 반복", "네트 포치 성공률", "/utility/doubles-positioning-simulator", "복식 포지셔닝 시뮬레이터"],
  "tennis-kick-serve-guide": ["높은 바운드로 시간 벌기", "세컨드 서브 안정성을 높여야 하는 장면", "높은 타점 브러시 훈련", "킥서브 인 비율", "/utility/serve-placement-mapper", "서브 코스 매퍼"],
  "tennis-slice-serve-guide": ["각도와 공간 만들기", "상대를 밖으로 끌어내고 싶은 장면", "와이드와 바디 슬라이스 반복", "슬라이스 후 오픈코트 활용률", "/utility/serve-placement-mapper", "서브 코스 매퍼"],
  "tennis-forehand-depth-control-guide": ["강타보다 길이 만들기", "포핸드가 자꾸 짧아지는 장면", "깊이 구역 목표 랠리", "깊은 포핸드 성공률", "/utility/shot-selection-trainer", "샷 선택 트레이너"],
  "tennis-backhand-return-guide": ["강한 서브에 밀리지 않기", "백핸드 리턴이 계속 짧아지는 장면", "짧은 테이크백 블록 리턴", "백핸드 리턴 인 비율", "/utility/return-position-calculator", "리턴 위치 계산기"],
  "tennis-match-video-review-guide": ["영상을 훈련 계획으로 연결", "그냥 아쉬운 장면만 다시 보는 장면", "서브·리턴·중립·압박 구간 복기", "리뷰 후 실제 반영률", "/utility/match-video-review-template", "경기 영상 리뷰 템플릿"],
  "tennis-tournament-preparation-checklist": ["실전 스트레스 줄이는 준비", "대회 당일 준비 부족으로 꼬이는 장면", "전날·이동·직전 3단계 체크", "당일 누락 항목 수", "/utility/matchday-packing-checklist", "경기일 체크리스트"],
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function toReadTime(description) {
  const words = description.split(/\s+/).filter(Boolean).length;
  return `${Math.max(6, Math.min(10, Math.ceil(words / 16)))}분`;
}

function buildSections(post) {
  const [angle, scenario, drill, metric, utility, utilityLabel] = PROFILES[post.slug];

  return {
    intro: `${post.description} 이 글은 특히 ${scenario}에서 흔들리는 동호인 기준으로, 무엇을 먼저 정리해야 하는지와 어떻게 반복해야 하는지를 실전 언어로 설명합니다.`,
    summaryBox: `핵심은 ${angle}입니다. 좋은 날의 감각이 아니라 반복 가능한 구조를 만들어야 경기에서도 유지됩니다.`,
    keyPoints: [
      `${post.title}의 차이는 화려함보다 재현 가능한 기준을 만드는 데서 납니다.`,
      `대표 장면은 ${scenario}입니다. 이때 선택 구조가 단순해야 범실이 줄어듭니다.`,
      `${metric}을 추적하면 감각이 아니라 실제 변화를 확인할 수 있습니다.`,
    ],
    sections: [
      {
        id: "principle",
        title: "핵심 원리",
        paragraphs: [
          `${post.title}을 잘하는 선수는 새로운 기술을 하나 더 갖춘 선수가 아니라, 흔들릴 때도 기준을 유지하는 선수입니다. ${angle}이 정리돼 있으면 점수와 상대 스타일이 바뀌어도 첫 판단이 무너지지 않습니다.`,
          `중요한 것은 한 번 멋진 장면보다 여러 번 반복되는 구조입니다. 실전에서는 완벽한 해답보다 다시 꺼내기 쉬운 기준이 더 강합니다.`,
        ],
      },
      {
        id: "application",
        title: "실전 적용 장면",
        paragraphs: [
          `${scenario}은 많은 동호인이 실제 경기에서 겪는 문제입니다. 이때는 스윙 전체를 바꾸기보다 준비 타이밍, 높이, 목표 구역 중 하나를 먼저 고정해야 합니다.`,
          `특히 포인트 사이 생각이 길어지면 다음 선택도 느려집니다. 그래서 기준은 짧고 분명해야 하며, 한 포인트 안에서 한 번만 적용해도 효과가 나야 합니다.`,
        ],
      },
      {
        id: "routine",
        title: "권장 연습 루틴",
        paragraphs: [
          `가장 효율적인 드릴은 ${drill}입니다. 핵심은 보기 좋은 훈련이 아니라 핵심 감각이 무너지지 않도록 조건을 제한하는 것입니다.`,
          `처음 10분은 기준 확인, 다음 15분은 반복량 확보, 마지막 10분은 점수 조건을 넣는 방식이 좋습니다. 이렇게 해야 연습 감각이 경기 장면으로 넘어갑니다.`,
        ],
      },
      {
        id: "review",
        title: "자주 나오는 실수와 점검 포인트",
        paragraphs: [
          `가장 흔한 문제는 한 장면이 잘되거나 안됐다는 이유로 다음 선택까지 크게 바꾸는 것입니다. 그러면 리듬이 무너지고 오히려 실수 폭이 커집니다.`,
          `그래서 리뷰 기준도 단순해야 합니다. 오늘은 ${metric} 하나만 본다고 정해두면, 다음 연습에서 무엇을 반복할지 빠르게 결정할 수 있습니다.`,
        ],
      },
    ],
    checklist: [
      `오늘 연습 목표를 "${angle}" 한 문장으로 적었다.`,
      `${scenario}을 가정한 상황 훈련을 넣었다.`,
      `${metric}을 확인할 기록 기준을 정했다.`,
      `마지막 10분은 점수 조건을 걸고 실전 전환까지 확인했다.`,
    ],
    faq: [
      {
        question: `${post.title}은 얼마나 자주 연습해야 하나요?`,
        answer: `짧게라도 주 2~3회 반복하는 편이 좋습니다. 특히 ${metric}을 같이 기록하면 감각이 아니라 실제 변화를 추적하기 쉽습니다.`,
      },
      {
        question: "경기 중 갑자기 흔들릴 때는 무엇부터 점검해야 하나요?",
        answer: "한 번에 모든 것을 바꾸지 말고 준비 타이밍, 목표 구역, 템포 중 하나만 먼저 되돌리세요. 대부분의 무너짐은 기준이 동시에 많아질 때 시작됩니다.",
      },
    ],
    nextAction: `다음 세션에서는 ${drill}을 20분만 실행하고, 끝난 뒤 ${metric} 하나만 기록해 보세요.`,
    utility,
    utilityLabel,
  };
}

function createBlogPage(post) {
  const targetDir = path.join(blogRoot, post.slug);
  const targetFile = path.join(targetDir, "page.tsx");
  ensureDir(targetDir);
  const content = buildSections(post);

  const code = `import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfrens.com";

export const metadata: Metadata = {
  title: ${JSON.stringify(post.title)},
  description: ${JSON.stringify(post.description)},
  alternates: {
    canonical: \`\${siteUrl}/blog/${post.slug}\`,
  },
  openGraph: {
    title: ${JSON.stringify(post.title)},
    description: ${JSON.stringify(post.description)},
    url: \`\${siteUrl}/blog/${post.slug}\`,
    type: "article",
    siteName: "TennisFriends",
    locale: "ko_KR",
  },
};

const content = ${JSON.stringify(content, null, 2)} as const;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">${post.category}</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">${post.title}</h1>
        <p className="mb-6 text-base leading-7 text-gray-600 dark:text-gray-300">${post.description}</p>

        <div className="mb-8 rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/30">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">핵심 요약</h2>
          <p className="leading-7 text-gray-700 dark:text-gray-300">{content.intro}</p>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{content.summaryBox}</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">이 글에서 먼저 가져갈 것</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {content.keyPoints.map((item) => (
              <li key={item} className="rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-emerald-100 bg-white p-6 dark:border-emerald-900/40 dark:bg-gray-950">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">실전 체크리스트</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {content.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">자주 묻는 질문</h2>
          <div className="space-y-4">
            {content.faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{item.question}</h3>
                <p className="leading-7 text-gray-700 dark:text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10 rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">다음 액션</h2>
          <p className="mb-4 text-sm leading-6 text-gray-700 dark:text-gray-300">{content.nextAction}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={content.utility} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              {content.utilityLabel}
            </Link>
            <Link href="/utility/training-planner" className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600">
              훈련 플래너
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
`;

  fs.writeFileSync(targetFile, code, "utf8");
}

function updateBlogRegistry() {
  const registryText = fs.readFileSync(blogRegistryPath, "utf8");
  const marker = "];";
  const index = registryText.lastIndexOf(marker);
  const existingSlugs = new Set(Array.from(registryText.matchAll(/"slug":\s*"([^"]+)"/g)).map((match) => match[1]));

  const newEntries = BLOG_BATCH.filter((post) => !existingSlugs.has(post.slug)).map((post) => `  {
    "id": ${JSON.stringify(post.slug)},
    "slug": ${JSON.stringify(post.slug)},
    "title": ${JSON.stringify(post.title)},
    "excerpt": ${JSON.stringify(post.description)},
    "badge": "신규",
    "category": ${JSON.stringify(post.category)},
    "date": "2026-03-07",
    "readTime": ${JSON.stringify(toReadTime(post.description))},
    "badgeColor": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300",
    "categoryColor": "bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-300"
  }`);

  if (newEntries.length > 0) {
    const prefix = registryText.slice(0, index).trimEnd();
    fs.writeFileSync(blogRegistryPath, `${prefix},\n${newEntries.join(",\n")}\n];\n`, "utf8");
  }

  return newEntries.length;
}

function writeSeedDocs() {
  ensureDir(docsRoot);
  const playerLines = PLAYER_BATCH.map(([slug, nameEn, gender, country], idx) => `${idx + 1}. ${nameEn} | ${slug} | ${gender} | ${country}`);
  const utilityLines = UTILITY_BATCH.map(([slug, title, category], idx) => `${idx + 1}. ${title} | ${slug} | ${category}`);
  const imageTodo = PLAYER_BATCH.map(([slug, nameEn]) => `- ${nameEn} | ${slug} | 이미지 파일 연결 필요`);

  fs.writeFileSync(path.join(docsRoot, "player-expansion-batch-2026-03.md"), `# Player Expansion Batch\n\n${playerLines.join("\n")}\n`, "utf8");
  fs.writeFileSync(path.join(docsRoot, "utility-expansion-batch-2026-03.md"), `# Utility Expansion Batch\n\n${utilityLines.join("\n")}\n`, "utf8");
  fs.writeFileSync(
    path.join(docsRoot, "image-followup-tasks-2026-03.md"),
    `# Image Follow-up Tasks\n\n## Players needing real images\n\n${imageTodo.join("\n")}\n\n## Notes\n\n- 현재 신규 선수 30명은 placeholder 이미지를 사용 중\n- 실제 이미지 파일 확보 후 src/data/players.ts 의 image 값을 교체하면 됨\n- 권장 경로: /images/players/{slug}.jpg 또는 .webp\n`,
    "utf8",
  );
}

function main() {
  BLOG_BATCH.forEach(createBlogPage);
  const registered = updateBlogRegistry();
  writeSeedDocs();
  console.log(JSON.stringify({ createdBlogPages: BLOG_BATCH.length, registeredBlogPosts: registered }, null, 2));
}

main();
