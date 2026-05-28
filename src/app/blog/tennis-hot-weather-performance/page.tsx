import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "더운 날 테니스 컨디션 관리 | 수분·페이스 조절";
const description =
  "더운 날 테니스에서 탈수, 열피로를 줄이고 경기력을 유지하는 수분 보충, 휴식, 페이스 조절 기준을 정리했습니다.";

const faqItems = [
  {
    question: "더운 날 테니스에서 가장 먼저 조심할 것은 무엇인가요?",
    answer:
      "탈수와 열피로입니다. 갈증을 느낀 뒤 마시는 방식은 늦을 수 있으므로 경기 전부터 물과 전해질을 나눠 마시고, 어지러움이나 오한이 있으면 즉시 멈춰야 합니다.",
  },
  {
    question: "여름 테니스 중 물은 얼마나 자주 마셔야 하나요?",
    answer:
      "정확한 양은 개인차가 있지만, 체인지오버마다 조금씩 마시는 방식이 안전합니다. 땀을 많이 흘리는 날에는 물만이 아니라 전해질도 함께 보충해야 합니다.",
  },
  {
    question: "더운 날에는 공격적으로 치는 게 불리한가요?",
    answer:
      "무조건 불리한 것은 아니지만 긴 랠리와 무리한 전력질주는 체력 소모가 큽니다. 초반에는 큰 목표, 깊은 중앙, 짧은 포인트 운영으로 에너지 사용을 조절하는 편이 좋습니다.",
  },
  {
    question: "폭염에는 야외 테니스를 쉬어야 하나요?",
    answer:
      "폭염 특보, 높은 습도, 컨디션 저하가 겹치면 쉬는 것이 맞습니다. 가능하면 이른 오전이나 실내 코트를 선택하고, 몸 이상 신호가 있으면 경기를 중단해야 합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "더운 날 테니스",
    "여름 테니스",
    "테니스 컨디션 관리",
    "테니스 수분 보충",
    "테니스 페이스 조절",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-hot-weather-performance` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-hot-weather-performance`,
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
          { name: title, item: `${siteUrl}/blog/tennis-hot-weather-performance` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-rose-700 dark:text-rose-300">
            여름 경기·체력 관리 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            더운 날 테니스는 잘 치는 것보다 먼저 무너지지 않는 것이 중요합니다.
            수분, 전해질, 체온, 포인트 길이를 관리하면 경기 후반 집중력과
            발 움직임을 훨씬 안정적으로 유지할 수 있습니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-rose-200 bg-rose-50 p-5 dark:border-rose-800 dark:bg-rose-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>더운 날에는 갈증이 오기 전부터 조금씩 마시는 방식이 안전합니다.</li>
            <li>물만 많이 마시기보다 땀 배출량에 맞춰 전해질도 보충합니다.</li>
            <li>초반부터 전력질주를 반복하지 말고 포인트 길이를 조절합니다.</li>
            <li>어지러움, 오한, 두통, 구역감이 있으면 즉시 경기를 멈춥니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 더운 날 테니스는 체온 관리가 경기력이다</h2>
          <p>
            여름 테니스에서 실력이 갑자기 떨어지는 이유는 기술이 나빠져서가
            아닙니다. 체온이 올라가고 땀이 늘면 심박이 빨라지고, 판단 속도와
            발 움직임이 함께 무너집니다. 특히 하드코트는 바닥 열이 올라오기
            때문에 실제 체감은 기온보다 더 높게 느껴질 수 있습니다.
          </p>
          <p>
            경기 전부터 몸 상태를 체크해야 합니다. 전날 수면이 부족했거나,
            이미 피로가 쌓였거나, 오후 가장 더운 시간대라면 평소와 같은 강도의
            랠리 훈련은 위험할 수 있습니다. 더운 날의 목표는 최대 출력이 아니라
            실수 없이 오래 유지되는 출력입니다.
          </p>
          <p>
            열 관련 질환의 기본 경고 신호는
            <a
              href="https://www.cdc.gov/heat-health/about/index.html"
              target="_blank"
              rel="noreferrer"
            >
              CDC Heat and Health
            </a>
            와
            <a
              href="https://www.weather.go.kr/w/weather/warning/heatwave.do"
              target="_blank"
              rel="noreferrer"
            >
              기상청 폭염 정보
            </a>
            를 함께 참고하면 좋습니다. 경기력보다 안전 신호가 먼저입니다.
          </p>

          <h2>2. 수분 보충은 경기 전에 이미 시작돼야 한다</h2>
          <p>
            코트에 들어간 뒤 한꺼번에 물을 마시는 방식은 늦습니다. 더운 날에는
            경기 시작 전부터 조금씩 마시고, 체인지오버마다 보충하는 방식이
            더 안정적입니다. 물을 너무 많이 한 번에 마시면 속이 불편해지고
            움직임이 둔해질 수 있습니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>시점</th>
                <th>관리 기준</th>
                <th>주의할 점</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>경기 2-3시간 전</td>
                <td>식사와 함께 수분을 나눠 보충</td>
                <td>기름진 음식과 과식 피하기</td>
              </tr>
              <tr>
                <td>워밍업 전</td>
                <td>물과 전해질 상태 확인</td>
                <td>갈증을 기다리지 않기</td>
              </tr>
              <tr>
                <td>체인지오버</td>
                <td>조금씩 반복해서 마시기</td>
                <td>한 번에 과하게 마시지 않기</td>
              </tr>
              <tr>
                <td>경기 후</td>
                <td>체중 감소와 소변 색 확인</td>
                <td>회복 수분과 염분 보충</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 전해질은 땀을 많이 흘리는 날의 안전장치다</h2>
          <p>
            땀을 많이 흘리면 물만 빠지는 것이 아니라 나트륨 같은 전해질도 함께
            빠집니다. 물만 계속 마시면 갈증은 줄어도 몸이 무겁거나 집중력이
            떨어질 수 있습니다. 특히 1시간 이상 경기하거나 땀이 옷을 적실
            정도라면 전해질 보충을 계획해야 합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              더운 날 코트 가방 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>물 1병과 전해질 음료 또는 전해질 정제를 따로 준비합니다.</li>
              <li>여분 그립, 수건 2장, 밝은 색 모자나 헤어밴드를 챙깁니다.</li>
              <li>바나나, 젤, 작은 에너지바처럼 소화가 쉬운 간식을 준비합니다.</li>
              <li>휴식 때 사용할 차가운 수건이나 쿨링 타월을 준비합니다.</li>
            </ul>
          </aside>
          <p>
            전해질 음료가 항상 정답은 아닙니다. 당분이 너무 많은 음료는 속을
            불편하게 만들 수 있고, 개인에 따라 맞지 않을 수 있습니다. 평소
            연습 때 어떤 음료와 간식이 잘 맞는지 미리 확인한 뒤 경기에서
            사용하는 것이 안전합니다.
          </p>

          <h2>4. 더운 날 페이스 조절은 전술의 일부다</h2>
          <p>
            무더위에서는 첫 세 게임을 너무 강하게 시작하면 후반 집중력이 급격히
            떨어집니다. 초반부터 모든 공을 전력으로 따라가기보다, 큰 목표로
            깊게 보내고 상대 실수를 기다리는 구간이 필요합니다. 에너지를 쓰는
            포인트와 아끼는 포인트를 구분해야 합니다.
          </p>
          <ul>
            <li>초반에는 라인샷보다 중앙 깊은 공으로 리듬을 잡습니다.</li>
            <li>긴 랠리 뒤에는 다음 포인트 서브 루틴을 평소보다 천천히 합니다.</li>
            <li>복식에서는 전위 압박보다 안정적인 첫 발리와 중앙 커버를 우선합니다.</li>
            <li>체력이 떨어질 때는 드롭샷 남발보다 깊은 크로스로 시간을 법니다.</li>
          </ul>
          <p>
            더운 날에는 공격 자체를 포기할 필요는 없습니다. 다만 공격할 공과
            버틸 공을 더 명확히 나눠야 합니다. 얕은 공은 과감하게 들어가되,
            깊은 공에서는 무리한 위너보다 높은 확률의 크로스를 선택하는 편이
            실전적입니다.
          </p>

          <h2>5. 휴식 시간에는 몸을 식히는 루틴이 필요하다</h2>
          <p>
            체인지오버는 단순히 물을 마시는 시간이 아닙니다. 그늘을 찾고, 목과
            얼굴의 땀을 닦고, 호흡을 낮추는 시간입니다. 가능하면 젖은 수건으로
            목 뒤나 팔을 식히고, 신발 끈이나 그립처럼 불편한 요소를 바로
            정리합니다.
          </p>
          <ol>
            <li>라켓을 내려놓고 먼저 호흡을 낮춥니다.</li>
            <li>물과 전해질을 조금씩 나눠 마십니다.</li>
            <li>목 뒤, 손목, 얼굴의 열을 낮춥니다.</li>
            <li>다음 두 포인트의 첫 코스만 단순하게 정합니다.</li>
          </ol>

          <h2>6. 중단해야 하는 신호는 미리 정해둔다</h2>
          <p>
            더운 날 가장 위험한 선택은 괜찮다고 버티는 것입니다. 어지러움,
            오한, 두통, 구역감, 비정상적으로 빠른 심박, 손발 저림이 있으면
            경기력 문제가 아니라 안전 문제입니다. 이때는 점수와 상관없이
            경기를 멈추고 그늘에서 휴식해야 합니다.
          </p>
          <p>
            동호회 경기라면 파트너와도 미리 기준을 정해두는 것이 좋습니다.
            한 명이 흔들리면 바로 휴식 시간을 늘리고, 필요하면 경기를 줄이는
            방식으로 합의해야 합니다. 무더위에서는 이기는 것보다 안전하게
            끝내는 것이 다음 경기력을 지키는 선택입니다.
          </p>

          <h2>마무리</h2>
          <p>
            더운 날 테니스 컨디션 관리는 물을 많이 마시는 것만으로 해결되지
            않습니다. 경기 전 수분 준비, 전해질 보충, 체인지오버 냉각 루틴,
            초반 페이스 조절, 중단 신호 확인이 함께 필요합니다. 이 기준을
            지키면 여름 코트에서도 경기 후반까지 발과 집중력을 유지할 수
            있습니다.
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
        </section>

        <section className="mt-10 rounded-lg bg-rose-700 p-6 text-white">
          <h2 className="mb-3 text-2xl font-bold">경기 전 준비 루틴도 점검하세요</h2>
          <p className="mb-4 text-rose-50">
            더운 날에는 워밍업, 수분, 장비 준비가 함께 맞아야 경기력이
            흔들리지 않습니다.
          </p>
          <Link
            href="/utility/warmup-routine-builder"
            className="inline-flex rounded-md bg-white px-4 py-2 font-semibold text-rose-800"
          >
            워밍업 루틴 만들기
          </Link>
        </section>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}
