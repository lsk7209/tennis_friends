import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "NTRP 2.5→3.0 레벨업 | 초급 탈출 기준";
const description =
  "NTRP 2.5에서 3.0으로 올라가기 위한 랠리 안정성, 서브, 풋워크, 경기 경험 기준을 정리했습니다.";

const faqItems = [
  {
    question: "NTRP 2.5와 3.0의 가장 큰 차이는 무엇인가요?",
    answer:
      "2.5는 기본 샷을 배우는 단계이고, 3.0은 기본 샷으로 짧은 랠리와 간단한 경기 운영을 시작하는 단계입니다. 특히 서브 인, 크로스 랠리, 쉬운 공 처리 안정성이 차이를 만듭니다.",
  },
  {
    question: "NTRP 3.0까지 얼마나 걸리나요?",
    answer:
      "주 2회 이상 연습하고 월 1-2회 실제 게임을 한다면 3개월에서 9개월을 현실적인 기준으로 볼 수 있습니다. 다만 서브와 풋워크를 늦게 시작하면 기간이 길어집니다.",
  },
  {
    question: "혼자 연습해도 NTRP 3.0에 도달할 수 있나요?",
    answer:
      "벽치기, 서브 연습, 풋워크 드릴은 혼자서도 가능합니다. 다만 3.0은 실제 게임에서 점수를 운영하는 능력이 필요하므로 주기적인 랠리 파트너나 연습 경기는 꼭 필요합니다.",
  },
  {
    question: "초급자는 포핸드와 백핸드 중 무엇을 먼저 고쳐야 하나요?",
    answer:
      "대부분은 포핸드보다 백핸드와 서브가 더 큰 병목입니다. 포핸드만 강해도 경기에서는 백핸드 리턴과 2서브가 흔들리면 3.0 수준의 안정성을 만들기 어렵습니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "NTRP 2.5",
    "NTRP 3.0",
    "테니스 초급",
    "테니스 레벨업",
    "초급자 테니스",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-ntrp-25-to-30-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-ntrp-25-to-30-guide`,
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
          { name: title, item: `${siteUrl}/blog/tennis-ntrp-25-to-30-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-sky-700 dark:text-sky-300">
            초급자 레벨업·NTRP 2.5 훈련 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            NTRP 2.5에서 3.0으로 올라가는 핵심은 새로운 샷을 많이 배우는
            것이 아니라, 포핸드·백핸드·서브를 경기에서 끊기지 않게 연결하는
            것입니다. 초급 탈출은 강한 공보다 안정적인 첫 3구, 쉬운 공 처리,
            기본 위치 회복에서 시작됩니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-sky-200 bg-sky-50 p-5 dark:border-sky-800 dark:bg-sky-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>NTRP 2.5의 병목은 파워 부족보다 랠리 연결과 서브 안정성입니다.</li>
            <li>3.0 기준은 포핸드·백핸드 크로스 4-6구, 2서브 인, 기본 점수 운영입니다.</li>
            <li>초급자는 샷 폼보다 준비 자세, 임팩트 위치, 친 뒤 회복을 먼저 봐야 합니다.</li>
            <li>연습만으로는 부족하고, 짧은 세트라도 실제 게임 경험을 쌓아야 합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. NTRP 2.5는 배운 기술을 경기로 옮기기 전 단계다</h2>
          <p>
            NTRP 2.5 선수는 포핸드와 백핸드의 기본 동작을 알고, 느린 공에서는
            랠리를 이어갈 수 있습니다. 하지만 공이 조금 빠르거나 깊어지면 준비가
            늦고, 서브 게임에서는 더블폴트와 리턴 실수가 자주 나옵니다. 3.0으로
            올라가려면 동작을 예쁘게 만드는 것보다 공을 계속 코트 안에 두는
            경기 안정성이 먼저입니다.
          </p>
          <p>
            USTA는 NTRP를 경기 능력의 일반적 특성을 구분하는 체계로 안내합니다.
            공식 자료를 보면 초급 단계의 차이는 기술 이름을 몇 개 아느냐보다
            스트로크를 얼마나 반복하고, 서브로 포인트를 시작하며, 기본적인 경기
            상황을 처리하느냐에 있습니다.
          </p>
          <p>
            공식 설명은
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
            에서 확인할 수 있습니다. 초급자는 이 기준을 볼 때 "나는 어떤 샷을
            못 치나"보다 "경기에서 어떤 상황이 반복해서 끊기나"를 보는 편이
            더 도움이 됩니다.
          </p>

          <h2>2. 3.0 진입 기준은 4가지로 보면 충분하다</h2>
          <p>
            3.0은 고급 기술의 시작이 아니라 테니스를 경기답게 이어가는 첫 단계입니다.
            포핸드 위너, 강한 서브, 발리 마무리가 없어도 됩니다. 대신 기본 랠리,
            서브 인, 리턴 인플레이, 점수 이해가 안정되어야 합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>항목</th>
                <th>2.5에서 자주 보이는 문제</th>
                <th>3.0 진입 기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>랠리</td>
                <td>2-3구 뒤 네트 또는 큰 아웃</td>
                <td>느린 크로스 랠리 4-6구 유지</td>
              </tr>
              <tr>
                <td>서브</td>
                <td>토스 흔들림과 더블폴트 반복</td>
                <td>2서브를 높은 탄도로 안전하게 넣음</td>
              </tr>
              <tr>
                <td>리턴</td>
                <td>스윙이 커서 첫 공부터 실점</td>
                <td>짧은 스윙으로 중앙 깊게 반환</td>
              </tr>
              <tr>
                <td>경기 운영</td>
                <td>점수와 위치를 동시에 놓침</td>
                <td>서브 순서, 듀스, 기본 포지션을 이해함</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 랠리 안정성은 스윙보다 준비가 먼저다</h2>
          <p>
            초급자가 랠리를 잃는 가장 큰 이유는 스윙 자체보다 준비가 늦기 때문입니다.
            공이 올 때 라켓을 늦게 빼고, 발이 멈춘 상태에서 팔로만 맞히면 공은
            네트에 걸리거나 길게 나갑니다. 3.0으로 가려면 스윙을 크게 바꾸기 전에
            준비 자세, 임팩트 위치, 친 뒤 회복을 고정해야 합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              초급 랠리 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>상대가 치는 순간 스플릿스텝을 하고 있는가?</li>
              <li>라켓 준비가 공이 바운드되기 전에 끝나는가?</li>
              <li>목표를 라인이 아니라 코트 중앙 깊은 곳으로 잡는가?</li>
              <li>친 뒤 바로 제자리로 돌아가는 첫 걸음이 나오는가?</li>
              <li>실수 후 폼 전체를 바꾸기보다 높이와 목표를 먼저 조정하는가?</li>
            </ul>
          </aside>
          <p>
            좋은 훈련은 포핸드 100개를 세게 치는 것이 아니라 포핸드 크로스 5구,
            백핸드 크로스 5구를 안정적으로 반복하는 것입니다. 속도를 줄이고,
            네트 위 여유를 크게 두고, 코트 안쪽 1m를 목표로 잡으면 실수가 줄어듭니다.
          </p>

          <h2>4. 서브는 넣기만 해도 되지만 토스는 반드시 고정해야 한다</h2>
          <p>
            2.5 단계에서 서브는 경기 전체를 흔드는 가장 큰 변수입니다. 좋은 랠리
            능력이 있어도 더블폴트가 많으면 게임을 운영할 수 없습니다. 3.0 목표라면
            빠른 1서브보다 같은 토스, 같은 리듬, 안전한 2서브가 우선입니다.
          </p>
          <ul>
            <li>토스는 머리 위보다 약간 앞, 매번 같은 높이로 올립니다.</li>
            <li>2서브는 속도를 포기하고 높은 탄도와 넉넉한 네트 여유를 둡니다.</li>
            <li>서브 30개 중 더블폴트, 짧은 서브, 좋은 서브를 따로 기록합니다.</li>
            <li>서브 후 공을 구경하지 말고 베이스라인 안쪽 회복 위치로 돌아옵니다.</li>
          </ul>
          <p>
            서브 연습은 무작정 많이 치면 어깨만 피곤해집니다. 10개 단위로 끊고
            성공률을 적어야 합니다. 30개 중 20개 이상 안전하게 들어가는 2서브가
            만들어지면 경기에서 자신감이 크게 달라집니다.
          </p>

          <h2>5. 첫 게임 경험은 짧게, 자주, 기록하면서 쌓는다</h2>
          <p>
            3.0은 연습장 안에서만 만들어지지 않습니다. 실제 게임에서는 점수,
            서브 순서, 상대 위치, 긴장감이 동시에 들어옵니다. 그래서 초급자는
            긴 세트보다 짧은 타이브레이크, 4게임 매치, 서브 게임만 따로 하는
            식으로 경기 경험을 자주 쌓는 편이 좋습니다.
          </p>
          <ol>
            <li>1주차: 포핸드·백핸드 크로스 5구 성공률을 기록합니다.</li>
            <li>2주차: 2서브 30개 중 성공 개수를 기록합니다.</li>
            <li>3주차: 리턴을 중앙으로 20개 보내는 훈련을 합니다.</li>
            <li>4주차: 타이브레이크 3번을 하고 실점 원인을 적습니다.</li>
            <li>5주차: 서브 게임만 4번 반복해 더블폴트 수를 줄입니다.</li>
            <li>6주차: 가장 많이 나온 실수 1개만 다음 훈련 주제로 잡습니다.</li>
          </ol>

          <h2>6. 초급 탈출을 늦추는 흔한 착각</h2>
          <p>
            초급자는 "폼이 완벽해지면 게임을 해야지"라고 생각하기 쉽습니다.
            하지만 게임을 해봐야 어떤 폼이 경기에서 무너지는지 알 수 있습니다.
            또 "강하게 쳐야 늘어난다"는 생각도 위험합니다. 2.5에서 3.0으로
            가는 구간에서는 강한 공보다 들어가는 공, 빠른 발보다 첫 준비,
            위너보다 상대가 한 번 더 치게 만드는 공이 더 중요합니다.
          </p>
          <p>
            라켓이나 스트링을 바꾸는 것도 보조 수단입니다. 장비가 너무 무겁거나
            그립이 맞지 않으면 조정해야 하지만, 대부분의 초급 병목은 장비보다
            토스, 준비, 목표 설정, 회복 습관에서 나옵니다. 먼저 기록 가능한
            기본 지표를 잡고, 그 뒤에 장비를 점검하는 순서가 안전합니다.
          </p>

          <h2>마무리</h2>
          <p>
            NTRP 2.5에서 3.0으로 올라가는 과정은 테니스가 연습 동작에서 경기로
            넘어가는 구간입니다. 포핸드와 백핸드를 코트 안에 반복하고, 2서브로
            점수를 시작하고, 리턴을 한 번 더 넘기며, 기본 점수를 이해하면 초급
            탈출의 기반은 만들어집니다. 화려한 기술보다 끊기지 않는 첫 3구를
            먼저 완성하세요.
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
            현재 내 레벨과 초급 탈출 우선순위를 확인해 보세요.
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
