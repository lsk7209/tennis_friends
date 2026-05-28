import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "야간 테니스 경기 팁 | 시야·조명 적응 전략";
const description =
  "야간 테니스 경기에서 시야, 조명, 집중력, 준비 루틴을 조정하는 실전 팁과 체크리스트를 정리했습니다.";

const faqItems = [
  {
    question: "야간 테니스에서 공이 잘 안 보이면 무엇부터 바꿔야 하나요?",
    answer:
      "스윙보다 시선 기준을 먼저 바꾸세요. 공을 끝까지 보려 하기보다 상대 임팩트 순간, 바운드 지점, 내 임팩트 위치를 순서대로 확인하면 조명 아래에서도 반응이 안정됩니다.",
  },
  {
    question: "야간 경기 전 워밍업은 낮 경기와 다르게 해야 하나요?",
    answer:
      "네. 코트 조명에 눈이 적응할 시간이 필요하므로 경기 20-30분 전에 들어가 짧은 랠리, 로브, 서브 리턴을 모두 확인하는 편이 좋습니다.",
  },
  {
    question: "조명 때문에 서브 토스가 흔들릴 때는 어떻게 하나요?",
    answer:
      "토스를 너무 높이지 말고 평소보다 약간 낮고 앞쪽으로 고정하세요. 조명과 겹치는 위치가 있다면 서브 위치를 반 걸음 조정해 눈부심을 피하는 것이 좋습니다.",
  },
  {
    question: "야간 복식에서는 어떤 전술이 안전한가요?",
    answer:
      "강한 각도보다 중앙 깊은 리턴, 전위 발밑, 높은 로브가 안전합니다. 조명 아래에서는 빠른 위너보다 상대의 시야 판단을 어렵게 만드는 깊이와 높이가 더 효과적입니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "야간 테니스",
    "야간 경기",
    "테니스 시야",
    "조명 적응",
    "테니스 집중력",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-night-match-tips` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-night-match-tips`,
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
          { name: title, item: `${siteUrl}/blog/tennis-night-match-tips` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-indigo-700 dark:text-indigo-300">
            야간 경기·조명 적응 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            야간 테니스는 단순히 어두운 시간에 치는 낮 경기가 아닙니다. 조명
            각도, 그림자, 공의 높이 판단, 눈 피로가 모두 달라지기 때문에 시야
            기준과 경기 루틴을 따로 준비해야 합니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-800 dark:bg-indigo-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>야간 경기 전에는 조명 적응 시간을 최소 20분 확보합니다.</li>
            <li>공을 끝까지 보려 하기보다 상대 임팩트와 바운드 지점을 먼저 읽습니다.</li>
            <li>서브 토스, 로브, 스매시는 조명과 겹치는 구간을 워밍업 때 확인합니다.</li>
            <li>전술은 빠른 위너보다 깊이, 높이, 중앙 안정성을 우선합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 야간 테니스는 시야 기준이 달라지는 경기다</h2>
          <p>
            낮 경기에서는 공의 높이와 속도를 자연광으로 읽습니다. 반면 야간 경기에서는
            조명 방향과 그림자 때문에 공이 떠 보이거나 갑자기 사라지는 느낌이 날 수
            있습니다. 특히 높은 로브, 서브 토스, 스매시는 조명과 겹치면 판단 시간이
            짧아집니다.
          </p>
          <p>
            그래서 야간 경기에서는 "공을 끝까지 본다"는 말만으로 부족합니다. 상대가
            임팩트하는 순간 라켓면, 공이 바운드되는 지점, 내 임팩트 위치를 순서대로
            확인하는 방식이 더 현실적입니다. 시선을 한 지점에 고정하기보다 세 지점을
            리듬 있게 따라가면 공이 조명에 잠깐 묻혀도 다음 위치를 예측할 수 있습니다.
          </p>
          <p>
            테니스의 기본 규칙과 코트 환경을 확인할 때는
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어 자료
            </a>
            와
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 테니스 팁 자료
            </a>
            를 함께 참고하면 좋습니다. 기술 이름보다 상황별 판단 기준을 정리하는 데
            도움이 됩니다.
          </p>

          <h2>2. 경기 전 20분은 조명 적응 시간으로 쓴다</h2>
          <p>
            야간 경기에서 가장 흔한 실수는 코트에 도착하자마자 바로 강하게 치는
            것입니다. 눈이 조명과 코트 색에 적응하기 전에는 공의 깊이가 평소보다
            늦게 읽힙니다. 워밍업 초반에는 강타보다 바운드 위치와 공의 궤적을 읽는
            데 집중해야 합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>시간</th>
                <th>확인할 것</th>
                <th>목표</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0-5분</td>
                <td>가벼운 조깅, 스플릿스텝, 코트 라인 확인</td>
                <td>눈과 발을 동시에 깨움</td>
              </tr>
              <tr>
                <td>5-10분</td>
                <td>느린 미니 랠리와 바운드 지점 확인</td>
                <td>공 높이 판단을 안정시킴</td>
              </tr>
              <tr>
                <td>10-15분</td>
                <td>로브, 스매시, 높은 공 처리</td>
                <td>조명과 겹치는 구간을 찾음</td>
              </tr>
              <tr>
                <td>15-20분</td>
                <td>서브 토스, 리턴 위치, 첫 3구</td>
                <td>경기 시작 패턴을 고정함</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 조명 아래에서는 토스와 높은 공이 먼저 흔들린다</h2>
          <p>
            야간 경기에서 서브 토스가 갑자기 불안해지는 이유는 손 감각이 아니라
            시야 기준이 바뀌기 때문일 때가 많습니다. 토스가 조명과 겹치면 공이
            잠깐 사라지고, 그 순간 몸이 급하게 열리면서 더블폴트가 나옵니다. 이때
            스윙을 크게 고치기보다 토스 높이와 시작 위치를 먼저 조정해야 합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              야간 서브 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>토스가 조명과 직접 겹치는 위치가 있는가?</li>
              <li>2서브 토스를 평소보다 약간 낮게 고정했는가?</li>
              <li>서브 후 첫 공을 볼 수 있는 회복 위치로 돌아오는가?</li>
              <li>스매시 전에는 공보다 먼저 발 위치를 잡고 있는가?</li>
              <li>로브 수비 때 뒤로 뛰며 고개만 젖히지 않는가?</li>
            </ul>
          </aside>
          <p>
            높은 공은 무조건 공격하려 하지 않는 편이 안전합니다. 공이 조명과 겹치는
            순간에는 스매시보다 깊은 로브 재반환이나 안정적인 발리가 더 좋은 선택일
            수 있습니다. 특히 복식에서는 한 번에 끝내려는 스매시보다 상대 발밑으로
            낮게 보내는 선택이 실수를 줄입니다.
          </p>

          <h2>4. 집중력은 루틴으로 지키고 눈 피로는 쉬는 방식으로 줄인다</h2>
          <p>
            야간 경기에서는 눈 피로와 집중력 저하가 함께 옵니다. 조명 아래에서 계속
            작은 공을 추적하면 눈과 목, 어깨가 빨리 굳습니다. 실수 후 공을 오래
            바라보거나 조명 쪽으로 고개를 드는 습관은 피로를 더 키웁니다.
          </p>
          <ul>
            <li>포인트 사이에는 2-3초 정도 시선을 코트 바닥이나 라켓 줄로 낮춥니다.</li>
            <li>서브 전에는 공 튕김 횟수와 호흡을 일정하게 유지합니다.</li>
            <li>리턴 전에는 상대 토스 손과 임팩트 지점을 먼저 봅니다.</li>
            <li>긴 랠리 뒤에는 급하게 서브하지 말고 호흡을 한 번 더 정리합니다.</li>
          </ul>
          <p>
            집중력은 의지만으로 유지되지 않습니다. 매 포인트마다 같은 루틴을 반복하면
            조명, 소음, 주변 코트 움직임 같은 변수가 줄어듭니다. 루틴은 거창할 필요가
            없습니다. 라켓 줄 정리, 호흡 1회, 목표 코스 확인 정도면 충분합니다.
          </p>

          <h2>5. 야간 경기 전술은 깊이와 높이를 우선한다</h2>
          <p>
            조명 아래에서는 양쪽 선수 모두 공의 높이를 평소보다 늦게 읽습니다. 그래서
            빠른 낮은 공만 고집하기보다 깊은 공, 높은 공, 중앙 공을 섞는 전술이
            효과적입니다. 상대가 공을 늦게 보면 강한 샷이 아니어도 타점이 흔들립니다.
          </p>
          <ol>
            <li>리턴은 라인 근처보다 중앙 깊은 곳을 목표로 둡니다.</li>
            <li>랠리 초반에는 빠른 다운더라인보다 높은 크로스로 안정성을 확보합니다.</li>
            <li>상대가 조명 아래 높은 공을 불편해하면 로브를 적극적으로 섞습니다.</li>
            <li>복식에서는 전위 발밑과 중앙을 사용해 시야 판단을 어렵게 만듭니다.</li>
            <li>중요 포인트에서는 속도보다 네트 위 여유와 깊이를 먼저 봅니다.</li>
          </ol>

          <h2>6. 장비와 복장은 시야 방해를 줄이는 방향으로 고른다</h2>
          <p>
            야간 경기에서는 모자, 렌즈, 옷 색, 그립 상태도 영향을 줍니다. 밝은 조명
            아래에서 땀이 눈에 들어가면 시야가 더 빨리 흐려지고, 어두운 공 주변 배경과
            비슷한 복장은 상대에게도 판단을 어렵게 만들 수 있습니다. 다만 장비보다
            중요한 것은 불편 요소를 경기 전에 제거하는 것입니다.
          </p>
          <p>
            땀 흡수가 좋은 헤어밴드나 모자, 여분 그립, 얇은 겉옷, 충분한 물을 준비하세요.
            저녁에는 체온이 떨어질 수 있어 워밍업 후 바로 쉬면 몸이 굳습니다. 경기 전
            복장은 몸을 따뜻하게 유지하고, 경기 중에는 시야와 손 감각을 방해하지 않는
            쪽이 좋습니다.
          </p>

          <h2>마무리</h2>
          <p>
            야간 테니스 경기 팁의 핵심은 조명에 맞춰 시야, 루틴, 전술을 바꾸는 것입니다.
            낮과 같은 방식으로 더 강하게 치려 하면 실수가 늘어납니다. 경기 전 조명 적응,
            토스 확인, 높은 공 처리, 포인트 루틴, 깊은 중앙 전술을 준비하면 야간 경기에서도
            평소 실력을 더 안정적으로 낼 수 있습니다.
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
            야간 경기 전 내 플레이 성향과 안정 패턴을 확인해 보세요.
          </p>
          <Link
            href="/utility/play-style-test"
            className="font-semibold text-blue-700 underline underline-offset-4 dark:text-blue-300"
          >
            플레이 스타일 테스트 하기
          </Link>
        </div>
      </article>
    </main>
  );
}
