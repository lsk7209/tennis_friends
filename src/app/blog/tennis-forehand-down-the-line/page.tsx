import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "포핸드 다운더라인 | 코스·타이밍·리스크 기준";
const description =
  "포핸드 다운더라인 성공률을 높이는 코스 선택, 타이밍, 리스크 관리와 실전 드릴을 정리했습니다.";

const faqItems = [
  {
    question: "포핸드 다운더라인은 언제 써야 하나요?",
    answer:
      "상대가 크로스 방향으로 치우쳤고, 내가 앞쪽 타점에서 균형을 잡은 공을 받을 때가 좋습니다. 밀린 상황에서는 깊은 크로스로 랠리를 회복하는 편이 안전합니다.",
  },
  {
    question: "크로스보다 다운더라인이 더 어려운 이유는 무엇인가요?",
    answer:
      "사용할 수 있는 코트 길이가 짧고 네트 높은 쪽을 지나기 때문입니다. 그래서 힘보다 타점, 라켓 면, 목표 여유를 먼저 관리해야 합니다.",
  },
  {
    question: "공이 자꾸 사이드아웃되는 이유는 무엇인가요?",
    answer:
      "목표를 라인 자체로 잡거나 손목으로 방향을 만들 때 자주 생깁니다. 라인 안쪽 1m를 목표로 두고 몸통 회전으로 라켓 경로를 유지하세요.",
  },
  {
    question: "동호인도 다운더라인을 공격 패턴으로 써도 되나요?",
    answer:
      "가능합니다. 다만 위너를 노리는 샷이 아니라 상대의 이동 방향을 바꾸는 전술 샷으로 써야 성공률이 올라갑니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "포핸드 다운더라인",
    "포핸드",
    "다운더라인",
    "테니스 포핸드",
    "테니스 전술",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-forehand-down-the-line` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-forehand-down-the-line`,
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
            item: `${siteUrl}/blog/tennis-forehand-down-the-line`,
          },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 포핸드 전술 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            포핸드 다운더라인은 라인을 맞히는 기술이 아니라, 상대의 이동 방향을
            바꾸고 다음 공을 쉽게 만드는 전술 샷입니다. 성공 기준은 라인 안쪽
            목표, 앞쪽 타점, 네트 위 여유, 샷 이후 회복 위치입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>목표는 사이드라인이 아니라 라인 안쪽 1m입니다.</li>
            <li>상대가 크로스로 움직인 뒤 멈추는 순간을 노립니다.</li>
            <li>늦은 타점에서는 위너보다 깊은 크로스 복구가 안전합니다.</li>
            <li>다운더라인 뒤에는 중앙보다 약간 오픈코트 쪽으로 회복합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 다운더라인은 라인 샷이 아니라 방향 전환 샷이다</h2>
          <p>
            포핸드 다운더라인을 처음 연습하면 대부분 라인 바로 위를 목표로
            잡습니다. 하지만 실전에서 라인은 목표가 아니라 위험 구역입니다.
            공이 조금만 밀려도 사이드아웃이 되고, 라켓 면이 닫히면 네트에
            걸립니다. 동호인 경기에서 성공률을 올리려면 라인 안쪽 1m, 베이스라인
            1m 안쪽을 동시에 만족하는 넓은 목표를 잡는 편이 낫습니다.
          </p>
          <p>
            ITF 용어 기준에서 다운더라인은 공을 사이드라인과 평행한 방향으로
            보내는 샷입니다. 공식 용어 확인은
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어집
            </a>
            을 참고할 수 있습니다. 기본 스트로크와 경기 적용 자료는
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 팁과 인스트럭션
            </a>
            처럼 단계별 연습 자료와 함께 보면 좋습니다.
          </p>

          <h2>2. 좋은 기회는 공보다 상대 위치에서 나온다</h2>
          <p>
            다운더라인은 내 공이 편하다는 이유만으로 선택하면 실패가 늘어납니다.
            가장 좋은 순간은 상대가 크로스 랠리를 예상해 대각선으로 움직였고,
            내가 균형을 잡은 상태에서 허리 높이 공을 앞에서 맞을 수 있을 때입니다.
            반대로 상대가 이미 라인 쪽을 지키고 있거나 내가 밀려서 치는 공이면
            같은 포핸드라도 깊은 크로스가 더 좋은 선택입니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>상황</th>
                <th>다운더라인 선택</th>
                <th>더 나은 대안</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>상대가 크로스로 크게 움직임</td>
                <td>라인 안쪽 깊은 코스</td>
                <td>성공 후 네트 접근 준비</td>
              </tr>
              <tr>
                <td>내 타점이 몸 뒤에 있음</td>
                <td>무리하면 사이드아웃</td>
                <td>높고 깊은 크로스 복구</td>
              </tr>
              <tr>
                <td>상대가 라인 쪽을 먼저 막음</td>
                <td>예측당하기 쉬움</td>
                <td>크로스 깊이 또는 중앙 바디샷</td>
              </tr>
              <tr>
                <td>짧은 공을 포핸드로 전진 타격</td>
                <td>공격 전환 가능</td>
                <td>다운더라인 뒤 전위 압박</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 타점은 몸 앞, 목표는 라인 안쪽이다</h2>
          <p>
            포핸드 다운더라인이 네트에 걸리는 가장 흔한 원인은 힘 부족이 아니라
            늦은 타점입니다. 공을 몸 옆이나 뒤에서 맞으면 라켓이 대각선으로
            빠져나가고, 다운더라인 방향을 손목으로 억지로 돌리게 됩니다. 이때
            라켓 면은 흔들리고 공은 네트나 사이드아웃으로 갑니다.
          </p>
          <p>
            기준은 간단합니다. 임팩트는 앞발보다 반 발 앞, 라켓 면은 목표 방향을
            향한 채 유지, 팔로스루는 라인 방향으로 짧게 끊지 말고 어깨 회전까지
            연결합니다. 완벽한 위너보다 상대 백핸드 뒤쪽 깊은 구역을 목표로 하면
            실수와 리스크를 동시에 줄일 수 있습니다.
          </p>

          <h2>4. 회전과 높이는 안전장치다</h2>
          <p>
            다운더라인을 빠르게만 치면 코트 안에 떨어질 시간이 부족합니다. 특히
            하드코트나 빠른 실내 코트에서는 공이 조금만 뜨거나 밀려도 아웃이
            됩니다. 그래서 동호인에게 필요한 다운더라인은 낮고 빠른 직선 샷보다
            약간의 탑스핀과 네트 위 여유를 가진 깊은 샷입니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              포핸드 다운더라인 체크포인트
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>상대가 크로스 방향으로 움직였는가?</li>
              <li>내 타점이 몸 앞에서 만들어졌는가?</li>
              <li>목표가 라인 위가 아니라 라인 안쪽 1m인가?</li>
              <li>공이 네트 위 0.8~1.2m를 통과할 여유가 있는가?</li>
              <li>샷 뒤 다음 공을 받을 회복 위치를 정했는가?</li>
            </ol>
          </aside>

          <h2>5. 리스크 관리는 샷 이후 위치까지 포함한다</h2>
          <p>
            다운더라인의 진짜 위험은 샷 자체보다 다음 공에서 나타납니다. 내가
            라인으로 쳤는데 상대가 받아넘기면, 대각선 오픈코트가 크게 열립니다.
            그래서 다운더라인을 친 뒤에는 단순히 중앙으로 돌아가는 것이 아니라,
            상대가 칠 수 있는 가장 쉬운 크로스 방향을 조금 더 의식해야 합니다.
          </p>
          <p>
            복식에서는 더 조심해야 합니다. 후위가 다운더라인을 무리하게 치면
            상대 전위에게 포칭 기회를 주거나, 내 전위가 방어하기 어려운 각도를
            만들 수 있습니다. 복식에서는 상대 전위 발 옆을 낮게 통과시키거나,
            확실히 빈 공간이 열렸을 때만 다운더라인을 공격 옵션으로 쓰는 편이
            안전합니다.
          </p>

          <h2>6. 20분 실전 드릴</h2>
          <p>
            포핸드 다운더라인은 한 번 성공한 감각보다 반복 가능한 기준이 중요합니다.
            아래 루틴은 파트너 랠리, 코치 피드, 볼머신 모두에 적용할 수 있습니다.
            목표는 위너 개수가 아니라 라인 안쪽 안전 구역에 들어간 비율입니다.
          </p>
          <ul>
            <li>5분: 크로스 랠리 3개 뒤 다운더라인 1개 전환</li>
            <li>5분: 라인 안쪽 1m 목표 구역에 10개 중 6개 넣기</li>
            <li>5분: 짧은 공 전진 타격 뒤 회복 스텝까지 연결</li>
            <li>5분: 다운더라인 성공 뒤 다음 공을 크로스로 마무리</li>
          </ul>

          <h2>마무리</h2>
          <p>
            포핸드 다운더라인은 화려한 한 방이 아니라 상대의 예측을 흔드는
            방향 전환 도구입니다. 라인 자체를 노리지 말고, 앞쪽 타점과 안전한
            목표 구역을 반복하세요. 그러면 무리한 위너가 줄고, 크로스 랠리에서
            만든 우위를 실제 포인트로 바꾸는 비율이 올라갑니다.
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
            포핸드 전술이 내 레벨에 맞는지 먼저 점검하세요.
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
