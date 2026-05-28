import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "NTRP 3.0→3.5 레벨업 | 중급 진입 기준";
const description =
  "NTRP 3.0에서 3.5로 올라가기 위한 일관성, 코스 선택, 서브·리턴 훈련 기준을 정리했습니다.";

const faqItems = [
  {
    question: "NTRP 3.0과 3.5의 가장 큰 차이는 무엇인가요?",
    answer:
      "3.0은 기본 스트로크를 만들 수 있는 단계이고, 3.5는 그 스트로크를 경기 흐름 속에서 반복하는 단계입니다. 특히 리턴 인플레이, 크로스 랠리 유지, 쉬운 공 처리 안정성이 차이를 만듭니다.",
  },
  {
    question: "NTRP 3.5까지 보통 얼마나 걸리나요?",
    answer:
      "주 2회 이상 꾸준히 연습하고 월 2회 이상 경기를 한다면 6개월에서 1년을 현실적인 기준으로 볼 수 있습니다. 다만 서브 안정성과 풋워크가 늦게 잡히면 더 오래 걸립니다.",
  },
  {
    question: "혼자 연습할 때 가장 효과적인 항목은 무엇인가요?",
    answer:
      "벽치기나 볼머신으로 포핸드·백핸드 크로스 20구 연속, 2서브 30구 성공률, 리턴 대체 드릴을 기록하는 방식이 좋습니다. 기록 없이 오래 치는 것보다 실패 유형을 남기는 편이 빠릅니다.",
  },
  {
    question: "3.5로 올라가려면 위너를 많이 쳐야 하나요?",
    answer:
      "아닙니다. 3.5 진입의 핵심은 위너보다 쉬운 실수를 줄이고 중립 랠리를 유지하는 능력입니다. 위너는 기회가 왔을 때 마무리하는 보조 수단으로 두는 편이 안전합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "NTRP 3.0",
    "NTRP 3.5",
    "테니스 레벨업",
    "중급자 테니스",
    "테니스 훈련",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-ntrp-30-to-35-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-ntrp-30-to-35-guide`,
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
          { name: title, item: `${siteUrl}/blog/tennis-ntrp-30-to-35-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
            NTRP 3.0·중급 진입 훈련 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            NTRP 3.0에서 3.5로 올라가는 핵심은 더 어려운 기술을 배우는
            것이 아니라, 이미 배운 포핸드·백핸드·서브·리턴을 경기 중에도
            같은 품질로 반복하는 것입니다. 3.5 진입은 위너보다 일관성, 코스
            선택, 회복 위치가 먼저입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-cyan-200 bg-cyan-50 p-5 dark:border-cyan-800 dark:bg-cyan-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>NTRP 3.0의 벽은 샷 종류 부족보다 쉬운 공 실수와 회복 지연입니다.</li>
            <li>3.5 기준은 크로스 랠리 6구 이상, 2서브 안정, 리턴 인플레이입니다.</li>
            <li>훈련은 포핸드만 많이 치기보다 서브·리턴·첫 랠리 공을 묶어야 합니다.</li>
            <li>경기 기록은 점수보다 실점 원인, 첫 실수 위치, 쉬운 공 처리율을 봐야 합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. NTRP 3.0은 기술 습득, 3.5는 경기 재현성이다</h2>
          <p>
            NTRP 3.0 선수는 기본 스트로크를 만들 수 있고 간단한 랠리를 이어갈
            수 있습니다. 하지만 경기에서는 공이 몸쪽으로 붙거나, 상대가 깊게
            보내거나, 점수가 불리해질 때 스윙과 판단이 쉽게 흔들립니다. 3.5로
            올라가려면 좋은 샷을 늘리는 것보다 흔들릴 때도 기본 공을 유지하는
            능력이 먼저입니다.
          </p>
          <p>
            USTA는 NTRP를 테니스 경기 능력의 일반적 특성을 설명하는 분류 체계로
            안내합니다. 공식 자료를 보면 등급은 특정 기술 하나가 아니라 스트로크
            안정성, 코스 조절, 포인트 구성, 경기 경험이 함께 반영됩니다. 따라서
            3.0에서 3.5로 가는 길은 "포핸드가 세졌다"가 아니라 "포핸드를 어디로
            보낼지 덜 흔들린다"에 가깝습니다.
          </p>
          <p>
            기준을 확인할 때는
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
            를 함께 참고하면 좋습니다. 동호회 체감 등급과 공식 설명을 같이 봐야
            자신의 약점을 과장하거나 축소하지 않습니다.
          </p>

          <h2>2. 3.5 진입을 막는 4가지 벽</h2>
          <p>
            3.0에서 3.5로 넘어가지 못하는 사람은 대부분 비슷한 패턴에서 막힙니다.
            연습에서는 괜찮지만 경기에서 리턴이 짧아지고, 세 번째 공부터 균형이
            무너지며, 쉬운 공을 마무리하려다 네트에 걸립니다. 이 문제는 의지보다
            구조의 문제라서 항목별로 분리해 봐야 합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>벽</th>
                <th>경기에서 보이는 모습</th>
                <th>3.5로 가는 기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>일관성</td>
                <td>2-3구는 좋지만 4구 이후 쉬운 실수</td>
                <td>크로스 랠리 6구 이상을 목표로 둠</td>
              </tr>
              <tr>
                <td>2서브</td>
                <td>넣기 급해서 짧거나 더블폴트가 잦음</td>
                <td>속도보다 높은 탄도와 같은 토스 유지</td>
              </tr>
              <tr>
                <td>리턴</td>
                <td>강하게 치려다 네트, 전위 차단 허용</td>
                <td>중앙 깊게 보내 포인트를 시작함</td>
              </tr>
              <tr>
                <td>회복 위치</td>
                <td>친 뒤 구경하다 다음 공에 늦음</td>
                <td>샷 직후 2걸음 회복을 습관화함</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 첫 번째 과제는 크로스 랠리의 품질이다</h2>
          <p>
            3.5에 가까운 선수는 공격을 잘해서가 아니라 중립 랠리를 덜 잃어서
            점수를 버팁니다. 포핸드 크로스와 백핸드 크로스에서 깊이와 높이가
            일정하면 상대는 먼저 각도를 열기 어렵습니다. 반대로 크로스가 짧으면
            상대는 다운더라인, 어프로치, 드롭샷까지 쉽게 선택합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              크로스 랠리 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>목표를 라인 위가 아니라 코트 안쪽 1m로 잡는가?</li>
              <li>네트 위 1m 이상 여유를 두고 보내는가?</li>
              <li>강하게 칠 때보다 깊게 보낼 때 실수가 줄어드는가?</li>
              <li>친 뒤 중앙 회복을 2걸음 안에 시작하는가?</li>
              <li>상대가 짧게 줬을 때만 방향 전환을 시도하는가?</li>
            </ul>
          </aside>
          <p>
            훈련은 20구 연속보다 "6구 성공 후 방향 전환 1구"처럼 경기와 가까워야
            합니다. 3.0 선수는 오래 넘기는 훈련만 하면 안전한 공은 늘지만 찬스볼
            선택이 늦어집니다. 6구를 버틴 뒤 7구째에 깊은 중앙 또는 반대 크로스를
            선택하는 연습이 3.5에 더 가깝습니다.
          </p>

          <h2>4. 서브와 리턴은 점수를 시작하는 기술이다</h2>
          <p>
            3.0 단계에서는 서브를 넣는 것만으로도 큰 목표가 됩니다. 그러나 3.5로
            가려면 서브가 들어간 뒤 다음 공이 어디로 올지 예상해야 합니다. 1서브
            속도를 올리는 것보다 2서브를 깊게 넣고, 상대 리턴이 중앙으로 오게
            만드는 편이 실전 승률에 더 빨리 연결됩니다.
          </p>
          <p>
            리턴도 마찬가지입니다. 상대 서브가 빠르지 않아도 준비가 늦으면 리턴은
            짧아지고, 짧은 리턴은 바로 공격당합니다. 3.5 준비 단계에서는 리턴
            위너보다 인플레이율이 중요합니다. 중앙 깊게, 백핸드 크로스, 전위 발밑
            중 하나의 안전 목표를 정해야 합니다.
          </p>
          <ul>
            <li>2서브는 높고 깊게, 같은 토스에서 시작합니다.</li>
            <li>리턴은 힘보다 준비 위치와 스플릿스텝 타이밍을 먼저 고칩니다.</li>
            <li>서브 게임에서는 서브 다음 공을 포핸드 크로스로 보낼 계획을 세웁니다.</li>
            <li>리턴 게임에서는 상대 2서브를 무리하게 끝내지 않고 중립 이상으로 시작합니다.</li>
          </ul>

          <h2>5. 6주 훈련표는 기록 가능한 지표로 만든다</h2>
          <p>
            3.0에서 3.5로 가는 훈련은 막연하면 오래 걸립니다. 매주 같은 지표를
            기록해야 실제로 좋아지는지 알 수 있습니다. 추천 지표는 크로스 랠리
            6구 성공률, 2서브 성공률, 리턴 인플레이율, 쉬운 공 실수 수입니다.
          </p>
          <ol>
            <li>1주차: 포핸드·백핸드 크로스 6구 성공률을 기록합니다.</li>
            <li>2주차: 2서브 30구 중 더블폴트와 짧은 서브를 따로 셉니다.</li>
            <li>3주차: 리턴 30구 중 네트, 아웃, 짧은 리턴을 분류합니다.</li>
            <li>4주차: 서브+1 첫 공 목표 코스를 정하고 성공률을 봅니다.</li>
            <li>5주차: 연습 경기에서 쉬운 공 실수만 따로 기록합니다.</li>
            <li>6주차: 가장 많이 나온 실점 원인 1개만 다음 훈련 주제로 잡습니다.</li>
          </ol>
          <p>
            이 표의 목적은 완벽한 선수가 되는 것이 아니라 가장 큰 누수를 찾는
            것입니다. 예를 들어 백핸드가 약하다고 느껴도 실제 기록에서 리턴 실수가
            더 많다면 먼저 리턴을 고쳐야 합니다. 감정이 아니라 기록이 훈련 순서를
            정해야 합니다.
          </p>

          <h2>6. 경기 운영은 안전한 선택을 먼저 정하는 일이다</h2>
          <p>
            3.5 선수는 모든 포인트에서 새로운 답을 찾지 않습니다. 압박이 오면
            안전한 기본 선택으로 돌아갑니다. 포핸드는 크로스 깊게, 백핸드는 중앙
            깊게, 2서브는 바디 또는 백핸드 쪽, 리턴은 중앙 깊게처럼 기본 메뉴가
            있어야 흔들릴 때도 무너지지 않습니다.
          </p>
          <p>
            중요한 포인트에서 과감함이 필요할 때도 있지만, 그 과감함은 평소
            성공률이 있는 선택이어야 합니다. 평소 한 번도 연습하지 않은
            다운더라인이나 드롭샷은 전술이 아니라 즉흥입니다. 3.5로 올라가는
            선수는 자신이 자주 성공하는 선택과 아직 경기에서 쓰면 안 되는 선택을
            구분합니다.
          </p>

          <h2>마무리</h2>
          <p>
            NTRP 3.0에서 3.5로 올라가는 과정은 중급자로 들어가는 첫 문입니다.
            필요한 것은 더 화려한 기술보다 더 반복 가능한 기본기입니다. 크로스
            랠리, 2서브, 리턴, 회복 위치, 쉬운 공 처리율을 기록하면 어디서 막히는지
            분명해집니다. 그 지점 하나를 6주 동안 고치면 3.5에 필요한 경기 안정성이
            눈에 보이기 시작합니다.
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
            현재 내 레벨과 훈련 우선순위를 먼저 확인해 보세요.
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
