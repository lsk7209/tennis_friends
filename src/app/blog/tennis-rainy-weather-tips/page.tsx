import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "비 오는 날 테니스 팁 | 미끄럼·그립·전술 조정";
const description =
  "비 오는 날 테니스에서 경기 여부 판단, 미끄럼 방지, 젖은 그립 관리, 샷 선택과 안전 기준을 정리했습니다.";

const faqItems = [
  {
    question: "비 오는 날 야외 테니스를 해도 되나요?",
    answer:
      "코트에 물막이 보이거나 발이 미끄러지면 중단하는 것이 맞습니다. 약한 비라도 하드코트, 라인, 베이스라인 주변이 미끄러우면 부상 위험이 커집니다.",
  },
  {
    question: "젖은 코트에서는 어떤 움직임이 가장 위험한가요?",
    answer:
      "급정지, 급회전, 오픈스탠스에서 강하게 버티는 동작이 위험합니다. 작은 스텝으로 들어가고, 방향 전환 전에 속도를 먼저 줄여야 합니다.",
  },
  {
    question: "비 오는 날 그립은 어떻게 관리해야 하나요?",
    answer:
      "마른 수건을 여러 장 준비하고, 체인지오버마다 손과 그립을 닦아야 합니다. 여분 오버그립을 준비해 젖으면 바로 교체하는 편이 안전합니다.",
  },
  {
    question: "젖은 공과 코트에서는 어떤 전술이 좋나요?",
    answer:
      "강한 위너보다 깊은 중앙, 낮은 슬라이스, 안정적인 서브 코스가 좋습니다. 공이 무거워지고 바운드가 낮아지므로 큰 목표를 잡는 편이 안전합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "비 오는 날 테니스",
    "우천 테니스",
    "테니스 미끄럼",
    "테니스 그립 관리",
    "젖은 코트 전술",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-rainy-weather-tips` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-rainy-weather-tips`,
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
          { name: title, item: `${siteUrl}/blog/tennis-rainy-weather-tips` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-sky-700 dark:text-sky-300">
            우천 경기·젖은 코트 안전 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            비 오는 날 테니스의 핵심은 무리해서 치는 것이 아니라 멈출 기준을
            먼저 정하는 것입니다. 코트가 젖으면 미끄럼, 그립, 바운드, 공 무게가
            모두 바뀌므로 안전 판단과 전술 조정이 함께 필요합니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-sky-200 bg-sky-50 p-5 dark:border-sky-800 dark:bg-sky-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>코트에 물막이 보이거나 발이 밀리면 바로 중단합니다.</li>
            <li>젖은 코트에서는 작은 스텝, 낮은 중심, 큰 목표가 기본입니다.</li>
            <li>그립과 손은 체인지오버마다 닦고 여분 오버그립을 준비합니다.</li>
            <li>강한 위너보다 깊은 중앙, 낮은 슬라이스, 안전한 서브를 씁니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 비 오는 날은 경기 여부 판단이 첫 번째 전술이다</h2>
          <p>
            비 오는 날 테니스에서 가장 중요한 판단은 어떻게 칠지가 아니라 계속
            쳐도 되는지입니다. 약한 비라도 코트 라인, 베이스라인 뒤쪽, 네트
            근처에 물이 고이면 발이 순간적으로 밀릴 수 있습니다. 한 번의 미끄럼이
            발목, 무릎, 허리 부상으로 이어질 수 있습니다.
          </p>
          <p>
            경기 전에는 코트를 걸어보면서 발이 밀리는 구간을 확인해야 합니다.
            특히 하드코트는 겉으로는 멀쩡해 보여도 라인 위와 먼지 낀 구간이
            먼저 미끄러워집니다. 클레이나 인조잔디도 배수 상태에 따라 공이
            멈추거나 발이 박힐 수 있어 같은 기준으로 확인해야 합니다.
          </p>
          <p>
            경기장 안전과 날씨 판단은
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어 자료
            </a>
            와
            <a
              href="https://www.weather.go.kr/w/index.do"
              target="_blank"
              rel="noreferrer"
            >
              기상청 날씨 정보
            </a>
            를 함께 확인하면 좋습니다. 코트 상태가 애매하면 경기보다 안전이 우선입니다.
          </p>

          <h2>2. 젖은 코트에서는 움직임을 작게 줄인다</h2>
          <p>
            젖은 코트에서 가장 위험한 움직임은 급정지와 급회전입니다. 평소처럼
            큰 스플릿스텝 뒤에 강하게 밀고 나가면 발이 먼저 미끄러지고 몸이
            늦게 따라옵니다. 방향을 바꾸기 전에는 속도를 줄이고, 마지막 두
            걸음은 짧게 조정해야 합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>상황</th>
                <th>위험한 선택</th>
                <th>안전한 조정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>베이스라인 랠리</td>
                <td>큰 오픈스탠스 버티기</td>
                <td>작은 스텝과 낮은 중심</td>
              </tr>
              <tr>
                <td>짧은 공 처리</td>
                <td>전력질주 후 급정지</td>
                <td>한 박자 빨리 출발하고 속도 줄이기</td>
              </tr>
              <tr>
                <td>복식 전위</td>
                <td>급한 포치와 몸 던지기</td>
                <td>중앙 커버와 안정적인 첫 발리</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 젖은 그립은 샷보다 먼저 관리한다</h2>
          <p>
            비가 오면 라켓 컨트롤이 먼저 흔들립니다. 손바닥, 오버그립, 라켓
            프레임에 물기가 쌓이면 임팩트 순간 라켓면이 열리거나 닫힙니다.
            이때 스윙을 고치기보다 그립 상태를 먼저 바꿔야 합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              비 오는 날 장비 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>마른 수건을 2장 이상 준비하고 손과 그립용을 분리합니다.</li>
              <li>여분 오버그립을 바로 꺼낼 수 있게 가방 위쪽에 둡니다.</li>
              <li>젖은 공을 닦을 작은 타월과 방수 라켓 커버를 준비합니다.</li>
              <li>밑창 마모가 심한 테니스화는 젖은 코트에서 쓰지 않습니다.</li>
            </ul>
          </aside>
          <p>
            젖은 그립을 억지로 세게 잡으면 팔과 손목에 힘이 들어가고, 오히려
            임팩트가 더 흔들립니다. 그립이 미끄럽다고 느껴지는 순간 체인지오버를
            기다리지 말고 수건으로 닦거나 오버그립을 교체하는 편이 낫습니다.
          </p>

          <h2>4. 젖은 공은 무겁고 낮게 움직인다</h2>
          <p>
            비가 오면 공은 물기를 머금어 무거워지고 바운드가 낮아질 수 있습니다.
            평소처럼 강한 탑스핀으로 밀어붙이면 공이 생각보다 덜 튀거나 라켓에
            무겁게 걸립니다. 젖은 공에서는 스윙 크기를 줄이고 타점을 앞에서
            간결하게 잡는 편이 안전합니다.
          </p>
          <ul>
            <li>깊은 중앙 공으로 상대의 급한 방향 전환을 유도합니다.</li>
            <li>낮은 슬라이스로 젖은 바운드를 활용합니다.</li>
            <li>드롭샷은 미끄럼 위험과 바운드 변수가 커서 신중하게 씁니다.</li>
            <li>강한 플랫 위너보다 큰 목표의 크로스와 몸쪽 공을 선택합니다.</li>
          </ul>

          <h2>5. 서브와 리턴은 힘보다 확률을 우선한다</h2>
          <p>
            젖은 날에는 토스와 그립이 모두 흔들릴 수 있습니다. 강한 플랫 서브를
            고집하면 더블폴트와 손목 부담이 함께 늘어납니다. 서브는 평소보다
            토스를 낮게 두고, 넓은 코스보다 안정적인 깊이와 몸쪽 코스를 먼저
            봅니다.
          </p>
          <ol>
            <li>1서브는 속도보다 깊이와 바디 서브를 우선합니다.</li>
            <li>2서브는 과한 킥보다 낮은 리스크의 슬라이스를 선택합니다.</li>
            <li>리턴은 라인샷보다 중앙 깊은 반구를 먼저 목표로 합니다.</li>
            <li>복식 리턴에서는 낮고 깊게 보내 전위 움직임을 줄입니다.</li>
          </ol>

          <h2>6. 비가 멈춘 뒤에도 바로 정상 경기로 돌아가지 않는다</h2>
          <p>
            비가 멈췄다고 코트가 바로 안전해지는 것은 아닙니다. 물기가 남은
            라인, 그림자진 코트 구석, 베이스라인 뒤쪽은 더 오래 미끄럽습니다.
            재개 전에는 다시 걸어보고, 첫 5분은 워밍업처럼 짧은 스텝과 낮은
            강도로 시작해야 합니다.
          </p>
          <p>
            경기 후에는 라켓, 그립, 신발을 바로 말려야 합니다. 젖은 상태로
            가방에 넣어두면 그립 접착력과 스트링 상태가 나빠지고 냄새도 쉽게
            생깁니다. 장비 관리까지 마쳐야 다음 경기에서 같은 문제가 반복되지
            않습니다.
          </p>

          <h2>마무리</h2>
          <p>
            비 오는 날 테니스 팁의 핵심은 안전 기준을 먼저 정하고, 젖은 코트에
            맞춰 움직임과 샷 선택을 줄이는 것입니다. 미끄럼이 보이면 멈추고,
            그립은 계속 말리고, 전술은 깊은 중앙과 낮은 슬라이스 중심으로
            단순하게 운영하세요. 무리한 승부보다 안전하게 끝내는 판단이 다음
            경기를 지킵니다.
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

        <section className="mt-10 rounded-lg bg-sky-700 p-6 text-white">
          <h2 className="mb-3 text-2xl font-bold">코트 상태도 함께 점검하세요</h2>
          <p className="mb-4 text-sky-50">
            비 오는 날에는 표면, 신발, 움직임 기준을 같이 봐야 부상 위험을
            줄일 수 있습니다.
          </p>
          <Link
            href="/utility/court-surface-advisor"
            className="inline-flex rounded-md bg-white px-4 py-2 font-semibold text-sky-800"
          >
            코트 표면 체크하기
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
