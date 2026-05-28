import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "NTRP 3.5→4.0 레벨업 | 전술 전환 가이드";
const description =
  "NTRP 3.5에서 4.0으로 올라가기 위한 전술 전환, 서브+1, 리턴, 드릴 기준을 정리했습니다.";

const faqItems = [
  {
    question: "NTRP 3.5에서 4.0으로 올라가는 핵심 차이는 무엇인가요?",
    answer:
      "샷을 더 세게 치는 것이 아니라 같은 샷을 반복 가능한 패턴으로 연결하는 능력입니다. 3.5는 좋은 공이 가끔 나오고, 4.0은 서브+1, 리턴 위치, 랠리 방향 전환을 의도적으로 반복합니다.",
  },
  {
    question: "레슨 없이도 4.0에 가까워질 수 있나요?",
    answer:
      "가능하지만 기록과 피드백 장치가 필요합니다. 경기 영상, 더블폴트 수, 리턴 인플레이율, 3구 이후 실점 유형을 매주 기록하면 혼자 연습해도 개선 방향이 흐려지지 않습니다.",
  },
  {
    question: "가장 먼저 바꿔야 할 기술은 무엇인가요?",
    answer:
      "대부분은 2서브와 리턴입니다. 3.5 단계에서는 랠리 능력보다 서브 게임 시작과 리턴 게임 첫 공에서 불리해지는 경우가 많아, 포인트 초반 2구를 안정시키는 편이 가장 빠릅니다.",
  },
  {
    question: "복식에서도 같은 기준을 적용해도 되나요?",
    answer:
      "복식에서는 전술 전환이 더 빨리 드러납니다. 크로스 랠리만 오래 하는 것이 아니라 리턴 방향, 전위 압박, 첫 발리 깊이를 팀 규칙으로 정해야 4.0 수준의 경기 운영에 가까워집니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "NTRP 3.5",
    "NTRP 4.0",
    "테니스 레벨업",
    "테니스 전술",
    "중급자 테니스",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-ntrp-35-to-40-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-ntrp-35-to-40-guide`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-50">
      <BreadcrumbSchema
        items={[
          { name: "TennisFriends", item: siteUrl },
          { name: "블로그", item: `${siteUrl}/blog` },
          { name: title, item: `${siteUrl}/blog/tennis-ntrp-35-to-40-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            중급자 레벨업·NTRP 전술 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            NTRP 3.5에서 4.0으로 올라가는 핵심은 새로운 필살기를 추가하는
            것이 아니라, 서브와 리턴 뒤 첫 3구를 예측 가능한 전술로 묶는
            것입니다. 4.0에 가까운 선수는 좋은 샷을 더 많이 치는 사람보다,
            불리한 포인트를 덜 만들고 유리한 포인트를 반복해서 설계하는
            사람입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>NTRP 3.5의 병목은 기술 부족보다 포인트 초반 선택의 흔들림입니다.</li>
            <li>4.0 준비는 2서브, 리턴 인플레이, 서브+1 패턴부터 시작합니다.</li>
            <li>랠리에서는 깊이보다 방향 전환 타이밍, 속도보다 회복 위치가 중요합니다.</li>
            <li>훈련은 샷별 연습이 아니라 3구 단위 시나리오로 설계해야 합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. NTRP 3.5와 4.0의 차이는 결과가 아니라 재현성이다</h2>
          <p>
            USTA는 NTRP를 테니스 실력의 일반적 특성을 구분하는 체계로
            설명합니다. 공식 FAQ에 따르면 NTRP 등급은 대체로 반 단계 단위로
            관리되고, 실제 리그에서는 경기 결과와 상대 수준이 함께 반영됩니다.
            그래서 3.5에서 4.0으로 간다는 말은 단순히 포핸드가 강해졌다는
            뜻이 아닙니다. 같은 압박 상황에서 더 자주 올바른 선택을 반복한다는
            뜻에 가깝습니다.
          </p>
          <p>
            3.5 선수도 좋은 포핸드, 강한 1서브, 날카로운 다운더라인을 칠 수
            있습니다. 문제는 그 샷이 점수, 위치, 체력, 상대 리듬이 바뀌어도
            반복되는지입니다. 4.0으로 가려면 "잘 맞은 한 방"보다 "평균 이하의
            날에도 무너지지 않는 패턴"을 만들어야 합니다.
          </p>
          <p>
            공식 기준을 확인할 때는
            <a
              href="https://www.usta.com/en/home/play/adult-tennis/programs/national/usta-ntrp-ratings-faqs.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA NTRP Ratings FAQ
            </a>
            와
            <a
              href="https://www.usta.com/content/dam/usta/sections/eastern/pdfs/NTRP%20Characteristics.pdf"
              target="_blank"
              rel="noreferrer"
            >
              NTRP General Characteristics
            </a>
            를 함께 보는 편이 좋습니다. 수치보다 중요한 것은 각 레벨이 요구하는
            경기 안정성, 방향 조절, 포인트 구성 능력입니다.
          </p>

          <h2>2. 4.0을 막는 첫 병목은 서브 게임의 첫 2구다</h2>
          <p>
            많은 3.5 선수는 랠리에서는 버티지만 서브 게임 초반에 불리해집니다.
            1서브가 들어가면 우세하지만, 2서브가 약해지면 상대가 리턴부터
            공격합니다. 4.0을 목표로 한다면 서브 속도보다 먼저 봐야 할 지표는
            더블폴트 수, 2서브 리턴 공격 허용률, 서브 다음 공의 코스입니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>3.5에 자주 남는 문제</th>
                <th>4.0으로 가는 기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1서브</td>
                <td>잘 들어가는 날과 안 들어가는 날의 편차가 큼</td>
                <td>속도를 낮춰도 첫 공으로 방향을 열 수 있음</td>
              </tr>
              <tr>
                <td>2서브</td>
                <td>넣기만 하다가 리턴 공격을 허용함</td>
                <td>바디, 백핸드, 높은 탄도 중 하나는 의도함</td>
              </tr>
              <tr>
                <td>서브+1</td>
                <td>리턴이 오면 즉흥적으로 처리함</td>
                <td>첫 포핸드 또는 첫 백핸드 목표 코스가 정해져 있음</td>
              </tr>
              <tr>
                <td>스코어 압박</td>
                <td>30-40, 듀스에서 동작이 짧아짐</td>
                <td>같은 루틴으로 안전한 첫 패턴을 반복함</td>
              </tr>
            </tbody>
          </table>
          <p>
            서브 연습은 100개를 몰아서 넣는 방식보다 6개 단위로 점수를 붙이는
            방식이 낫습니다. 예를 들어 1서브 2점, 2서브 성공 1점, 더블폴트
            -2점으로 기록하면 경기 압박과 비슷한 선택이 만들어집니다. 목표는
            최고 속도가 아니라 2서브 뒤에도 중립 랠리를 시작할 수 있는
            안정성입니다.
          </p>

          <h2>3. 리턴은 위너보다 인플레이율과 첫 방향이 먼저다</h2>
          <p>
            4.0 문턱에서 리턴 실수는 눈에 잘 띄지 않지만 승률을 크게 갉아먹습니다.
            강한 리턴 한두 개보다 중요한 것은 상대 1서브에서 버티고, 2서브에서는
            중립 이상으로 시작하는 비율입니다. 특히 동호회 복식에서는 리턴이
            전위에게 걸리거나 네트에 박히면 포인트가 너무 빨리 끝납니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              리턴 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>상대 1서브에서는 깊은 중앙 리턴으로 포인트를 시작할 수 있는가?</li>
              <li>상대 2서브에서는 백핸드 쪽, 바디, 전위 발밑 중 하나를 정했는가?</li>
              <li>리턴 위치를 베이스라인 뒤 1m, 안쪽, 사이드로 조절해 봤는가?</li>
              <li>리턴 실수를 네트, 아웃, 전위 차단으로 나눠 기록하는가?</li>
              <li>중요 포인트에서 화려한 리턴보다 반복 가능한 방향을 고르는가?</li>
            </ul>
          </aside>
          <p>
            리턴 훈련은 코스가 좁아야 효과가 큽니다. "잘 받아 넘기기"가 아니라
            듀스 코트에서는 크로스 깊게, 애드 코트에서는 중앙 깊게처럼 목표를
            정해야 합니다. 리턴 목표가 명확하면 스윙이 짧아지고, 스플릿스텝
            타이밍도 자연스럽게 앞당겨집니다.
          </p>

          <h2>4. 랠리 전술은 강타보다 회복 위치와 방향 전환이다</h2>
          <p>
            NTRP 3.5에서 흔한 랠리 패턴은 "좋은 공이 오면 세게 치고, 어려운 공은
            겨우 넘기는" 흐름입니다. 4.0에 가까워지려면 모든 공을 공격하려 하지
            말고, 중립 공과 공격 공을 구분해야 합니다. 깊은 중앙 공으로 회복할
            때와 반대 코트로 방향을 바꿀 때를 분리하면 불필요한 언포스드 에러가
            크게 줄어듭니다.
          </p>
          <p>
            방향 전환은 내 몸이 균형을 잡고 있고, 상대가 한쪽으로 이동한 뒤
            회복이 늦을 때만 시도합니다. 공이 낮거나 몸쪽으로 붙었는데
            다운더라인을 노리면 4.0 전술이 아니라 낮은 확률 도박이 됩니다. 좋은
            선수일수록 "칠 수 있는 코스"와 "쳐야 하는 코스"를 구분합니다.
          </p>

          <h2>5. 네트 플레이는 마무리 기술이 아니라 압박 신호다</h2>
          <p>
            4.0 수준에서는 베이스라인 랠리만으로 모든 포인트를 이기기 어렵습니다.
            상대가 짧게 주거나 낮은 슬라이스로 버티는 순간, 네트 접근이 있어야
            다음 공이 쉬워집니다. 핵심은 완벽한 발리 기술보다 접근 전 공의 깊이와
            접근 후 첫 발리의 위치입니다.
          </p>
          <ul>
            <li>어프로치샷은 상대 코너보다 베이스라인 1m 안쪽 깊이를 먼저 목표로 둡니다.</li>
            <li>첫 발리는 위너보다 상대 발밑 또는 빈 공간으로 낮게 보냅니다.</li>
            <li>로브가 잦은 상대에게는 네트에 너무 붙지 않고 서비스라인 안쪽에서 멈춥니다.</li>
            <li>복식에서는 전위가 움직일 약속 신호를 서버와 미리 정합니다.</li>
          </ul>
          <p>
            네트 플레이는 실수하면 크게 보이기 때문에 3.5 선수들이 피하기 쉽습니다.
            하지만 계속 피하면 상대는 베이스라인 뒤에서 편하게 랠리합니다. 한 세트에
            최소 4번은 의도적으로 전진해 보는 식으로 양을 정해야 실제 전술이 됩니다.
          </p>

          <h2>6. 8주 훈련은 샷이 아니라 포인트 시작 구조로 짠다</h2>
          <p>
            4.0 준비 훈련은 포핸드 30분, 백핸드 30분처럼 나누기보다 포인트 시작
            구조로 묶어야 합니다. 실제 경기에서는 기술이 독립적으로 나오지 않습니다.
            서브가 들어가고, 리턴이 오고, 첫 랠리 공에서 방향을 정하는 식으로 연결됩니다.
          </p>
          <ol>
            <li>1-2주차: 2서브 60개를 바디, 백핸드, 높은 탄도 세 구역으로 나눠 기록합니다.</li>
            <li>3-4주차: 리턴 40개 중 인플레이율과 목표 코스 성공률을 따로 기록합니다.</li>
            <li>5-6주차: 서브+1, 리턴+1을 3구 패턴으로 반복합니다.</li>
            <li>7-8주차: 연습 경기에서 더블폴트, 리턴 실수, 3구 이후 실점을 체크합니다.</li>
          </ol>
          <p>
            이 방식의 장점은 실력이 좋아졌는지 감으로 판단하지 않는다는 점입니다.
            경기에서 6-4로 졌더라도 더블폴트가 줄고 리턴 인플레이가 늘었다면
            4.0으로 가는 방향은 맞습니다. 반대로 위너가 많아도 2서브 게임을 계속
            잃는다면 훈련 순서를 다시 잡아야 합니다.
          </p>

          <h2>마무리</h2>
          <p>
            NTRP 3.5에서 4.0으로 올라가는 과정은 화려한 기술 추가보다 경기 운영의
            정밀도를 높이는 과정입니다. 서브 다음 공, 리턴 첫 방향, 랠리 중 방향
            전환, 네트 접근 기준이 정리되면 같은 체력과 같은 스윙으로도 승률이
            달라집니다. 4.0은 한 번의 멋진 샷이 아니라 반복 가능한 선택의 누적에서
            만들어집니다.
          </p>
        </section>

        <section className="mt-12 rounded-lg bg-white p-6 shadow-sm dark:bg-slate-900">
          <h2 className="mb-4 text-2xl font-bold">자주 묻는 질문</h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-md border border-slate-200 p-4 dark:border-slate-700"
              >
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>
                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        </section>

        <div className="mt-12 rounded-xl bg-blue-50 p-6 dark:bg-blue-950/40">
          <p className="mb-2 font-semibold text-blue-900 dark:text-blue-200">
            내 현재 레벨과 약점을 먼저 확인해 보세요.
          </p>
          <Link
            href="/utility/ntrp-test"
            className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
          >
            무료 NTRP 실력 테스트 하기
          </Link>
        </div>
      </article>
    </main>
  );
}
