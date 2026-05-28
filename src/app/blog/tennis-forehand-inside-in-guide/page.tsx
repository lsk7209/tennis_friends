import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "인사이드인 포핸드 | 코스 선택·타점·리스크 기준";
const description =
  "인사이드인 포핸드 성공률을 높이는 코스 선택, 앞쪽 타점, 풋워크, 실전 리스크 관리 기준을 정리했습니다.";

const faqItems = [
  {
    question: "인사이드인 포핸드와 인사이드아웃 포핸드는 무엇이 다른가요?",
    answer:
      "오른손잡이 기준으로 백핸드 코너에서 포핸드로 돌아서 상대 포핸드 쪽 라인 방향을 치면 인사이드인, 상대 백핸드 쪽 대각선 방향을 치면 인사이드아웃으로 이해하면 쉽습니다.",
  },
  {
    question: "인사이드인 포핸드는 언제 시도해야 하나요?",
    answer:
      "상대가 인사이드아웃 또는 크로스코트를 예상해 대각선으로 치우쳤고, 내가 균형 있게 공을 몸 앞에서 맞을 수 있을 때가 좋습니다.",
  },
  {
    question: "인사이드인 포핸드가 자꾸 사이드아웃되는 이유는 무엇인가요?",
    answer:
      "라인 자체를 목표로 잡거나 타점이 늦은 경우가 많습니다. 라인 안쪽 1m를 목표로 두고 앞쪽 타점에서 몸통 회전으로 방향을 만들어야 합니다.",
  },
  {
    question: "동호인 경기에서 위너로 써도 되나요?",
    answer:
      "가능하지만 매번 위너를 노리기보다 상대 이동 방향을 바꾸는 압박 샷으로 쓰는 편이 안전합니다. 성공 후 다음 공까지 준비해야 포인트로 연결됩니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "인사이드인 포핸드",
    "포핸드 코스",
    "포핸드 위너",
    "테니스 포핸드",
    "테니스 전술",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-forehand-inside-in-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-forehand-inside-in-guide`,
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
            item: `${siteUrl}/blog/tennis-forehand-inside-in-guide`,
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
            인사이드인 포핸드는 무조건 강하게 치는 위너 샷이 아닙니다. 백핸드
            쪽으로 돌아선 뒤 상대가 대각선을 예상하는 순간, 라인 안쪽 깊은 구역으로
            방향을 바꿔 코트 균형을 흔드는 전술 샷입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>인사이드인 포핸드는 라인 위가 아니라 라인 안쪽 1m를 노립니다.</li>
            <li>타점이 늦으면 위너보다 깊은 인사이드아웃이 더 안전합니다.</li>
            <li>상대가 대각선 수비를 예상할 때 방향 전환용으로 씁니다.</li>
            <li>샷 이후 열린 코트를 막을 회복 스텝까지가 한 동작입니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 인사이드인 포핸드는 방향 전환 전술이다</h2>
          <p>
            인사이드인 포핸드는 백핸드 쪽으로 온 공을 포핸드로 돌아서 라인 방향,
            즉 상대의 반대 코트로 보내는 샷입니다. 동호인 경기에서는 멋진 위너로
            기억되지만, 실제 가치는 상대의 수비 예상을 바꾸는 데 있습니다. 여러 번
            인사이드아웃이나 크로스로 밀어 놓은 뒤 한 번 인사이드인으로 바꾸면
            상대는 첫 스텝을 잘못 내딛기 쉽습니다.
          </p>
          <p>
            포핸드와 코트 방향 용어는 공식 자료를 기준으로 정리해 두면 좋습니다.
            기본 용어는
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어집
            </a>
            에서 확인할 수 있고, 스트로크 연습 자료는
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 팁과 인스트럭션
            </a>
            처럼 단계별 자료를 참고하면 좋습니다.
          </p>

          <h2>2. 인사이드인과 인사이드아웃을 구분한다</h2>
          <p>
            가장 흔한 혼동은 인사이드인과 인사이드아웃을 같은 샷으로 보는 것입니다.
            오른손잡이 기준으로 백핸드 코너에서 돌아섰을 때, 상대 백핸드 쪽 대각선
            깊은 코스로 보내면 인사이드아웃입니다. 같은 위치에서 라인 방향으로
            방향을 바꾸면 인사이드인입니다. 두 샷은 준비 동작은 비슷하지만 리스크와
            회복 위치가 다릅니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>인사이드아웃</th>
                <th>인사이드인</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>방향</td>
                <td>대각선 깊은 코스</td>
                <td>라인 방향 전환</td>
              </tr>
              <tr>
                <td>안정성</td>
                <td>코트 길이가 길어 비교적 안전</td>
                <td>네트와 라인 리스크가 큼</td>
              </tr>
              <tr>
                <td>효과</td>
                <td>상대를 코트 밖으로 밀어냄</td>
                <td>상대 첫 스텝을 반대로 유도</td>
              </tr>
              <tr>
                <td>회복</td>
                <td>대각선 랠리 대비</td>
                <td>열린 크로스코트 대비</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 좋은 기회는 상대 움직임에서 나온다</h2>
          <p>
            인사이드인 포핸드는 내가 공을 편하게 친다고 항상 좋은 선택이 아닙니다.
            상대가 인사이드아웃 방향을 예상해 대각선으로 치우쳤거나, 깊은 크로스
            랠리 뒤 균형이 무너진 순간이 좋은 기회입니다. 반대로 상대가 이미 라인
            쪽을 보고 있거나 내가 뒤로 밀린 상황이면 무리한 인사이드인은 바로
            사이드아웃이나 역습으로 이어집니다.
          </p>
          <p>
            기준은 공의 높이와 내 균형입니다. 허리 높이 근처에서 공을 몸 앞에서
            맞을 수 있고, 마지막 스텝이 안정적이라면 방향을 바꿀 수 있습니다. 공이
            낮거나 타점이 뒤에 있으면 먼저 깊은 인사이드아웃으로 랠리 우위를 만든
            뒤 다음 공을 기다리는 편이 낫습니다.
          </p>

          <h2>4. 목표는 라인 위가 아니라 안전 구역이다</h2>
          <p>
            인사이드인 포핸드는 라인 가까이 들어가면 멋있지만 성공률은 급격히
            떨어집니다. 연습 목표를 사이드라인 바로 위로 잡으면 실전에서는 손목이
            먼저 움직이고, 라켓 면이 열리거나 닫히며 실수가 늘어납니다. 목표는
            라인 안쪽 1m, 베이스라인 1m 안쪽의 직사각형 구역입니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              인사이드인 포핸드 체크포인트
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>상대가 대각선 수비를 예상하고 있는가?</li>
              <li>내 타점이 몸 앞에서 만들어졌는가?</li>
              <li>목표가 라인 안쪽 1m 안전 구역인가?</li>
              <li>팔보다 몸통 회전으로 방향을 만들었는가?</li>
              <li>샷 이후 열린 크로스코트를 막을 위치로 회복했는가?</li>
            </ol>
          </aside>

          <h2>5. 풋워크가 늦으면 방향 전환도 늦다</h2>
          <p>
            인사이드인 포핸드의 실수는 대부분 스윙보다 발에서 시작됩니다. 공을
            포핸드로 돌아서 치려면 마지막 두 걸음이 작고 빠르게 조정되어야 합니다.
            크게 한 번에 이동하면 타점이 몸에 붙고, 공을 라인 방향으로 밀 공간이
            사라집니다. 마지막 스텝을 작게 나누면 몸 앞 타점과 회전 공간이 생깁니다.
          </p>
          <p>
            오픈 스탠스만 고집할 필요도 없습니다. 시간이 충분하면 세미오픈 또는
            뉴트럴에 가까운 자세로 체중을 목표 방향에 싣는 것이 좋습니다. 시간이
            부족한 상황에서는 과감한 인사이드인보다 깊은 대각선 포핸드로 다음 공을
            만드는 편이 안정적입니다.
          </p>

          <h2>6. 20분 코스 전환 드릴</h2>
          <p>
            인사이드인 포핸드는 단독 기술보다 패턴으로 연습해야 실전에서 나옵니다.
            인사이드아웃을 여러 번 보여준 뒤 인사이드인을 섞어야 상대의 첫 스텝을
            속일 수 있기 때문입니다. 아래 루틴은 파트너 피드나 코치 피드로 진행하면
            효과가 좋습니다.
          </p>
          <ul>
            <li>5분: 백핸드 코너에서 포핸드로 돌아서는 풋워크만 반복</li>
            <li>5분: 인사이드아웃 2개 뒤 인사이드인 1개 패턴</li>
            <li>5분: 라인 안쪽 1m 목표 구역에 10개 중 6개 넣기</li>
            <li>5분: 인사이드인 후 열린 코트 회복, 다음 공 크로스 수비</li>
          </ul>

          <h2>마무리</h2>
          <p>
            인사이드인 포핸드는 포핸드가 강한 사람만 쓰는 샷이 아닙니다. 상대가
            대각선을 예상하는 순간을 읽고, 앞쪽 타점에서 라인 안쪽 안전 구역으로
            방향을 바꾸면 동호인 경기에서도 충분히 실전 무기가 됩니다. 위너보다
            방향 전환과 다음 공 준비를 기준으로 삼으면 성공률이 더 빨리 올라갑니다.
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
