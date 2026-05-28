import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "낮은 공 슬라이스 백핸드 | 어프로치·방어 기준";
const description =
  "낮은 공 슬라이스 백핸드 성공률을 높이는 라켓 면, 타점, 어프로치와 방어 전환 기준을 정리했습니다.";

const faqItems = [
  {
    question: "낮은 공은 슬라이스와 드라이브 중 무엇이 안전한가요?",
    answer:
      "무릎 아래 낮은 공은 슬라이스가 더 안전한 경우가 많습니다. 공 밑으로 라켓을 넣기 쉽고, 낮은 탄도로 상대 공격 타이밍을 늦출 수 있습니다.",
  },
  {
    question: "슬라이스 백핸드가 자꾸 뜨는 이유는 무엇인가요?",
    answer:
      "라켓 면을 너무 열거나 공을 아래로 찍는 경우가 많습니다. 라켓 면은 살짝 열고, 위에서 아래로 자르기보다 앞으로 길게 밀어야 낮게 갑니다.",
  },
  {
    question: "낮은 공 슬라이스를 어프로치로 써도 되나요?",
    answer:
      "상대가 뒤에 있고 내가 전진하면서 균형을 잡은 상황이면 좋습니다. 깊고 낮은 슬라이스 뒤에는 네트로 접근해 다음 발리를 준비하세요.",
  },
  {
    question: "수비 상황에서는 어디로 보내는 것이 좋나요?",
    answer:
      "위기 상황에서는 라인보다 중앙 깊은 구역이 안전합니다. 상대가 강하게 공격하기 어렵게 낮고 깊게 보내고, 바로 중앙 회복 스텝을 밟으세요.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "낮은 공 슬라이스 백핸드",
    "슬라이스 백핸드",
    "낮은 공 처리",
    "백핸드 어프로치",
    "테니스 백핸드",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-backhand-slice-low-ball` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-backhand-slice-low-ball`,
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
          {
            name: title,
            item: `${siteUrl}/blog/tennis-backhand-slice-low-ball`,
          },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 백핸드 슬라이스 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            낮은 공 슬라이스 백핸드는 겨우 넘기는 수비 샷이 아닙니다. 라켓 면을
            안정시키고 공을 낮고 깊게 보내면 어프로치로 압박하거나, 수비 상황에서
            시간을 벌어 랠리를 다시 중립으로 돌릴 수 있습니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>무릎 아래 낮은 공은 드라이브보다 슬라이스가 안전합니다.</li>
            <li>라켓 면은 크게 열지 말고, 공 밑에서 앞으로 길게 지나갑니다.</li>
            <li>어프로치는 깊고 낮게, 수비는 중앙 깊은 구역을 우선합니다.</li>
            <li>샷 이후에는 네트 접근 또는 중앙 회복 중 하나를 즉시 선택합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 낮은 공은 들어 올리는 샷이 아니다</h2>
          <p>
            낮은 공을 보면 많은 동호인이 손목으로 공을 퍼 올립니다. 하지만 이렇게
            치면 공이 높게 뜨고, 상대가 바로 공격할 수 있는 찬스볼이 됩니다. 낮은
            공 슬라이스 백핸드는 공을 위로 띄우는 기술이 아니라 라켓 면을 안정시켜
            낮은 궤도로 깊게 보내는 기술입니다.
          </p>
          <p>
            슬라이스는 공에 역회전을 주는 타구입니다. 공식 용어와 기본 규칙은
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어집
            </a>
            에서 확인할 수 있습니다. 백핸드와 슬라이스 연습 자료는
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 팁과 인스트럭션
            </a>
            처럼 기본 스트로크 자료를 함께 참고하면 좋습니다.
          </p>

          <h2>2. 어프로치와 방어는 목표가 다르다</h2>
          <p>
            같은 낮은 공 슬라이스라도 상황에 따라 목표가 달라집니다. 내가 코트
            안으로 들어가며 균형을 잡았다면 어프로치입니다. 이때는 상대가 낮은
            타점에서 공을 들게 만들어 다음 발리 기회를 잡아야 합니다. 반대로 내가
            밀려서 낮은 공을 받는 상황이면 방어입니다. 이때는 화려한 코스보다
            중앙 깊은 구역으로 보내 시간을 버는 것이 중요합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>상황</th>
                <th>목표</th>
                <th>다음 동작</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>짧은 낮은 공을 전진 처리</td>
                <td>깊고 낮은 어프로치</td>
                <td>네트 접근 후 첫 발리 준비</td>
              </tr>
              <tr>
                <td>베이스라인 뒤에서 밀림</td>
                <td>중앙 깊은 수비 슬라이스</td>
                <td>중앙 회복과 다음 공 대기</td>
              </tr>
              <tr>
                <td>상대가 네트로 접근</td>
                <td>발밑 낮은 패스 또는 로브 준비</td>
                <td>상대 발리 방향 읽기</td>
              </tr>
              <tr>
                <td>상대가 뒤로 물러남</td>
                <td>낮은 슬라이스로 전진 압박</td>
                <td>서비스라인 안쪽까지 접근</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 라켓 면은 살짝 열고, 길게 민다</h2>
          <p>
            낮은 공 슬라이스가 뜨는 이유는 라켓 면을 너무 많이 열기 때문입니다.
            라켓 면은 공을 띄우기 위해 여는 것이 아니라, 공 밑으로 들어가 역회전을
            만들기 위해 살짝 여는 정도면 충분합니다. 임팩트 뒤에는 라켓이 위로
            튀지 않고 목표 방향으로 길게 나가야 공이 낮게 깔립니다.
          </p>
          <p>
            손목 스냅으로 자르면 공은 짧고 불안정해집니다. 어깨와 팔 전체가
            하나의 판처럼 움직인다고 생각하세요. 공을 맞힌 뒤 라켓이 네트 방향으로
            30cm 더 지나가면 깊이가 생기고, 상대가 공격하기 어려운 낮은 공이
            만들어집니다.
          </p>

          <h2>4. 몸을 낮추되 허리를 접지 않는다</h2>
          <p>
            낮은 공을 처리할 때 허리만 접으면 시야가 흔들리고 라켓 면도 불안정해집니다.
            무릎을 굽혀 몸 전체를 낮추고, 등과 머리는 가능한 한 안정적으로 유지해야
            합니다. 특히 백핸드 슬라이스는 타점이 몸 옆으로 밀리기 쉬우므로, 마지막
            한 걸음을 작게 조정해 공을 몸 앞에서 맞추는 것이 좋습니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              낮은 공 슬라이스 체크포인트
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>허리보다 무릎으로 높이를 낮췄는가?</li>
              <li>라켓 면이 과하게 열리지 않았는가?</li>
              <li>임팩트가 몸 앞쪽에서 만들어졌는가?</li>
              <li>라켓이 목표 방향으로 길게 지나갔는가?</li>
              <li>샷 이후 네트 접근 또는 중앙 회복을 바로 선택했는가?</li>
            </ol>
          </aside>

          <h2>5. 어프로치 슬라이스는 깊이가 먼저다</h2>
          <p>
            어프로치 상황에서 낮은 공 슬라이스를 짧게 치면 상대에게 패싱샷 기회를
            줍니다. 목표는 멋진 각도가 아니라 베이스라인 근처 깊은 구역입니다.
            낮고 깊은 슬라이스는 상대가 공을 위로 들어 올리게 만들고, 네트로
            들어간 내가 첫 발리를 편하게 처리할 가능성을 높입니다.
          </p>
          <p>
            코스는 상대의 약점과 내 위치에 따라 다릅니다. 상대 백핸드가 약하면
            백핸드 깊은 구역으로 보내고, 상대가 한쪽으로 치우쳤다면 반대 코트의
            깊은 공간을 노립니다. 다만 이동 중 무리한 라인 공략보다 중앙 깊은
            어프로치가 실전 성공률은 더 높습니다.
          </p>

          <h2>6. 20분 낮은 공 대응 드릴</h2>
          <p>
            낮은 공 슬라이스는 감각형 샷이라 짧고 자주 반복하는 연습이 효과적입니다.
            아래 루틴은 파트너가 낮게 깔리는 공을 보내주거나, 코치 피드로 진행하면
            가장 좋습니다. 혼자 할 때는 벽 앞에서 낮은 목표선을 정하고 연습하세요.
          </p>
          <ul>
            <li>5분: 무릎을 낮추고 라켓 면 고정한 짧은 슬라이스</li>
            <li>5분: 중앙 깊은 구역으로 수비 슬라이스 20개</li>
            <li>5분: 짧은 낮은 공 어프로치 후 네트 접근</li>
            <li>5분: 어프로치 뒤 첫 발리까지 연결하는 2구 패턴</li>
          </ul>

          <h2>마무리</h2>
          <p>
            낮은 공 슬라이스 백핸드는 위기에서 빠져나오는 수비 기술이면서, 좋은
            상황에서는 네트로 들어가는 공격 전환 기술입니다. 라켓 면을 과하게
            열지 말고, 몸을 낮추고, 공을 낮고 깊게 보내세요. 그 기준이 잡히면
            낮은 공은 부담이 아니라 랠리 흐름을 바꾸는 기회가 됩니다.
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
            백핸드 안정성이 내 레벨 기준에서 충분한지 점검하세요.
          </p>
          <Link
            href="/utility/ntrp-test"
            className="font-semibold text-blue-700 underline dark:text-blue-300"
          >
            무료 NTRP 실력 테스트 →
          </Link>
        </div>
      </article>
    </main>
  );
}
