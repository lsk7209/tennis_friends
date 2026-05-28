import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "테니스 위너 늘리기 | 코스 공략·타이밍·찬스볼 기준";
const description =
  "테니스 위너를 늘리는 코스 공략, 타이밍, 찬스볼 판단, 리스크 관리와 실전 드릴을 정리했습니다.";

const faqItems = [
  {
    question: "테니스 위너를 늘리려면 파워를 먼저 키워야 하나요?",
    answer:
      "파워보다 먼저 필요한 것은 찬스볼 판단과 코스 선택입니다. 상대가 균형을 잃었거나 코트 밖으로 밀렸을 때 빈 공간을 정확히 노리는 편이 위너 확률을 더 빨리 높입니다.",
  },
  {
    question: "초보자도 위너를 노려도 되나요?",
    answer:
      "가능하지만 모든 공에서 노리면 실수가 늘어납니다. 서비스 박스 안쪽 짧은 공, 상대가 코트 밖에 있는 상황, 내 몸이 공 뒤에 들어간 상황에서만 제한적으로 시도하는 것이 좋습니다.",
  },
  {
    question: "위너와 언포스드 에러를 어떻게 구분해서 관리하나요?",
    answer:
      "위너 시도는 코스, 높이, 타점이 모두 준비된 상황에서 해야 합니다. 준비가 안 된 상태에서 강하게 친 실수는 공격적인 플레이가 아니라 리스크 관리 실패로 기록하는 편이 정확합니다.",
  },
  {
    question: "복식에서는 위너를 어디로 노리는 것이 좋나요?",
    answer:
      "복식은 사이드라인보다 두 선수 사이, 발밑, 전위 뒤 공간이 더 안전합니다. 단식처럼 넓은 빈 코트가 자주 나오지 않기 때문에 각도보다 타이밍이 중요합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: ["테니스 위너", "코스 공략", "찬스볼", "공격 타이밍", "테니스 전술"],
  alternates: { canonical: `${siteUrl}/blog/tennis-winner-production-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-winner-production-guide`,
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
          { name: title, item: `${siteUrl}/blog/tennis-winner-production-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 공격 전술 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            테니스 위너는 강하게 치는 공이 아니라 상대가 닿기 어려운 순간과 공간에 들어간 공입니다.
            파워보다 찬스볼 판단, 코스 공략, 앞쪽 타점, 리스크 관리가 먼저 정리되어야 실전 위너가
            늘어납니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>위너는 강도보다 빈 공간, 상대 균형, 내 타점이 맞을 때 나옵니다.</li>
            <li>서비스 박스 안쪽 짧은 공은 가장 명확한 공격 신호입니다.</li>
            <li>사이드라인 바로 위보다 코트 1m 안쪽 목표가 실전 성공률이 높습니다.</li>
            <li>위너 시도 후 실수는 코스, 타점, 선택 상황으로 나눠 기록해야 줄어듭니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 위너는 파워보다 상황 판단에서 시작된다</h2>
          <p>
            동호인 경기에서 위너가 적은 이유는 힘이 부족해서만이 아닙니다. 대부분은 위너를 노릴
            공과 버텨야 할 공을 구분하지 못해 실수가 먼저 늘어납니다. 상대가 균형을 유지하고 있고,
            내 발이 공 뒤에 들어가지 못했으며, 타점이 몸 옆으로 밀렸다면 그 공은 공격 신호가
            아닙니다. 이때 강하게 치면 위너가 아니라 언포스드 에러가 됩니다.
          </p>
          <p>
            반대로 상대가 코트 밖으로 밀렸거나, 짧은 공이 서비스 박스 안에 떨어졌거나, 상대가
            회복 동작 중이라면 강한 스윙이 아니어도 위너가 나올 수 있습니다. 테니스 기본 용어와
            상황 이름은
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어 자료
            </a>
            를 참고해 정리해 두면 경기 후 기록이 더 명확해집니다.
          </p>

          <h2>2. 위너를 노릴 수 있는 4가지 신호</h2>
          <p>
            위너 시도는 감정이 아니라 신호로 결정해야 합니다. 랠리 중 한 번 좋은 공을 쳤다고 바로
            끝내려 하면 네트나 사이드 아웃이 늘어납니다. 아래 네 가지 중 두 가지 이상이 동시에
            보일 때만 위너를 노리는 규칙을 세우면 성공률이 높아집니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>신호</th>
                <th>공격해도 되는 장면</th>
                <th>주의할 장면</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>공의 길이</td>
                <td>서비스 박스 안쪽 짧은 공</td>
                <td>베이스라인 깊은 공을 억지로 공격</td>
              </tr>
              <tr>
                <td>상대 위치</td>
                <td>상대가 한쪽 코트 밖으로 밀림</td>
                <td>상대가 중앙에서 균형을 유지</td>
              </tr>
              <tr>
                <td>내 타점</td>
                <td>공 앞에 들어가 몸 앞에서 맞힘</td>
                <td>몸 옆이나 뒤에서 늦게 맞힘</td>
              </tr>
              <tr>
                <td>랠리 흐름</td>
                <td>상대가 수비 자세로 떠넘김</td>
                <td>상대가 빠른 템포로 압박 중</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 코스 공략은 라인보다 1m 안쪽을 목표로 한다</h2>
          <p>
            위너를 만들 때 가장 위험한 착각은 라인에 붙여야 한다는 생각입니다. 프로 경기의 하이라이트는
            라인 위 샷이 많지만, 동호인 실전에서는 코트 안쪽 1m를 목표로 잡아도 상대가 늦으면 충분히
            위너가 됩니다. 라인 바로 위를 노리는 목표는 성공했을 때 멋있지만, 실패했을 때 포인트를
            바로 잃습니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              코스 선택 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>상대가 코트 밖에 있으면 빈 코트 1m 안쪽으로 보낸다.</li>
              <li>상대가 중앙에 있으면 몸쪽 깊은 공으로 다음 찬스를 만든다.</li>
              <li>짧은 공은 크로스보다 오픈 코트 또는 몸쪽 역방향을 우선 본다.</li>
              <li>복식에서는 사이드라인보다 두 선수 사이와 발밑을 먼저 노린다.</li>
              <li>긴장한 포인트에서는 위너보다 강한 어프로치로 전환한다.</li>
            </ul>
          </aside>

          <h2>4. 타이밍은 상대의 회복 동작을 본다</h2>
          <p>
            위너 타이밍은 공이 쉬워 보이는 순간이 아니라 상대가 아직 회복하지 못한 순간입니다.
            상대가 코트 밖에서 중앙으로 돌아오는 첫 두 걸음, 깊은 공을 막아낸 뒤 몸이 위로 뜨는
            순간, 슬라이스로 겨우 넘긴 뒤 다음 준비가 늦는 순간이 대표적입니다. 이때 한 박자 빠르게
            코스를 정하면 공의 속도가 아주 빠르지 않아도 상대는 닿기 어렵습니다.
          </p>
          <p>
            USTA의
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              테니스 팁과 훈련 자료
            </a>
            도 상황별 기술 선택을 강조합니다. 위너는 한 방의 기술이 아니라 이전 공으로 상대를
            움직이고 다음 공으로 빈 공간을 닫는 연속 동작입니다.
          </p>

          <h2>5. 위너 시도와 언포스드 에러를 같이 기록한다</h2>
          <p>
            위너를 늘리고 싶다면 성공한 장면만 기억하면 안 됩니다. 실패한 위너 시도를 코스 실수,
            타점 실수, 선택 실수로 나눠야 합니다. 코스 실수는 목표가 너무 바깥이었던 경우입니다.
            타점 실수는 공을 너무 늦게 맞혔거나 몸이 열리기 전에 친 경우입니다. 선택 실수는 공격할
            상황이 아닌데 공격한 경우입니다.
          </p>
          <p>
            기록 기준이 생기면 연습 방향도 분명해집니다. 코스 실수가 많으면 목표를 1m 안쪽으로
            옮기고, 타점 실수가 많으면 찬스볼 접근 풋워크를 연습합니다. 선택 실수가 많으면 경기 중
            위너 신호를 두 가지 이상 확인한 뒤 공격하는 규칙을 세우면 됩니다.
          </p>

          <h2>6. 실전 드릴은 찬스볼-어프로치-마무리 순서로 한다</h2>
          <p>
            위너 연습을 단순히 강하게 치는 훈련으로 만들면 경기에서 잘 이어지지 않습니다. 실제
            포인트는 깊은 공으로 상대를 밀고, 짧은 공을 만들고, 그 다음 마무리하는 순서로 진행됩니다.
            그래서 드릴도 찬스볼 판단, 어프로치, 마무리 샷을 연결해야 합니다.
          </p>
          <ul>
            <li>1단계: 크로스 깊은 공 3개로 상대를 뒤로 밀어낸다.</li>
            <li>2단계: 짧아진 공이 오면 서비스라인 안쪽으로 들어가 타점을 앞에 둔다.</li>
            <li>3단계: 빈 코트 1m 안쪽을 목표로 마무리한다.</li>
            <li>4단계: 실패하면 코스, 타점, 선택 중 하나로 원인을 기록한다.</li>
          </ul>

          <h2>마무리</h2>
          <p>
            테니스 위너를 늘리는 가장 빠른 방법은 파워를 증명하려는 마음을 줄이고 공격 가능한
            신호를 읽는 것입니다. 짧은 공, 상대의 위치, 내 앞쪽 타점, 상대의 회복 동작이 맞을 때
            코트 1m 안쪽 목표로 치면 위너는 자연스럽게 늘어납니다. 반대로 준비되지 않은 공을 강하게
            치는 습관을 기록으로 줄이면 공격적인 플레이와 불필요한 실수가 분리됩니다.
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
            현재 공격 성향과 경기 운영 기준을 함께 점검해 보세요.
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
