import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "베이스라인 랠리 전략 | 깊이·방향·템포 변화";
const description =
  "테니스 베이스라인 랠리에서 깊이, 방향, 템포를 바꾸는 기준과 실전 패턴, 연습 드릴을 정리했습니다.";

const faqItems = [
  {
    question: "베이스라인 랠리는 무조건 오래 버티는 것이 좋은가요?",
    answer:
      "아닙니다. 오래 버티는 능력은 필요하지만 목적 없이 이어지는 랠리는 상대에게 리듬을 줍니다. 깊이, 방향, 템포 중 하나는 의도적으로 바꿔야 합니다.",
  },
  {
    question: "깊은 공을 치기 어려울 때는 무엇부터 고쳐야 하나요?",
    answer:
      "스윙을 세게 하기보다 네트 위 여유 높이와 앞쪽 타점을 먼저 확인하세요. 공 높이와 회전이 확보되면 깊이는 자연스럽게 안정됩니다.",
  },
  {
    question: "방향 전환은 언제 시도해야 하나요?",
    answer:
      "내가 균형을 잡고 있고 상대가 한쪽으로 밀렸을 때가 좋습니다. 몸이 늦었거나 상대가 중앙에 있으면 무리한 다운더라인보다 크로스 깊이가 안전합니다.",
  },
  {
    question: "템포 변화는 초보자도 써도 되나요?",
    answer:
      "가능합니다. 빠른 공만 의미하는 것이 아니라 높은 루프볼, 낮은 슬라이스, 짧은 각도처럼 상대 리듬을 끊는 선택도 템포 변화입니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: ["베이스라인 랠리", "테니스 랠리 전략", "깊이 조절", "방향 전환", "템포 변화"],
  alternates: { canonical: `${siteUrl}/blog/tennis-baseline-rally-strategy` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-baseline-rally-strategy`,
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
          { name: title, item: `${siteUrl}/blog/tennis-baseline-rally-strategy` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 랠리·전술 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            베이스라인 랠리는 오래 버티는 게임이 아니라 상대의 균형과 리듬을 무너뜨리는 과정입니다.
            깊이로 밀고, 방향으로 움직이고, 템포로 판단을 늦추면 같은 스트로크도 훨씬 공격적인
            전술이 됩니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>랠리 초반에는 깊이로 상대를 베이스라인 뒤에 묶습니다.</li>
            <li>방향 전환은 내 균형이 잡혔고 상대가 한쪽으로 밀렸을 때만 시도합니다.</li>
            <li>템포 변화는 빠르게 치는 것뿐 아니라 높이와 회전을 바꾸는 선택입니다.</li>
            <li>같은 패턴으로 3번 이상 밀리면 코스보다 높이와 깊이부터 재설정합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 베이스라인 랠리는 공간을 만드는 과정이다</h2>
          <p>
            많은 동호인이 베이스라인 랠리를 오래 버티는 능력으로만 봅니다. 하지만 랠리의 목적은
            공을 계속 넘기는 것이 아니라 다음 공격 공간을 만드는 것입니다. 깊은 공으로 상대를 뒤로
            밀고, 크로스 방향으로 코트를 넓히고, 템포를 바꿔 상대의 첫 발을 늦추는 과정이 모여
            찬스볼을 만듭니다.
          </p>
          <p>
            테니스에서 rally, baseline, topspin 같은 기본 용어는
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어 자료
            </a>
            를 참고하면 정리하기 쉽습니다. 용어를 알고 있으면 경기 후 "왜 밀렸는지"를 더 정확히
            기록할 수 있습니다.
          </p>

          <h2>2. 깊이는 랠리의 안전장치이자 공격 준비다</h2>
          <p>
            깊은 공은 상대를 뒤로 밀어 네트 가까운 공격 기회를 줄입니다. 동시에 내 다음 준비 시간을
            벌어 줍니다. 깊이를 만들려면 무조건 세게 치는 것이 아니라 네트 위 여유 높이, 충분한
            회전, 앞쪽 타점이 필요합니다. 공이 짧아지는 날에는 파워보다 높이와 회전을 먼저 조절해야
            합니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>상황</th>
                <th>좋은 선택</th>
                <th>피할 선택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>상대가 베이스라인 안쪽</td>
                <td>중앙 깊은 공으로 뒤로 밀기</td>
                <td>짧은 각도로 먼저 무리하기</td>
              </tr>
              <tr>
                <td>내 타점이 늦음</td>
                <td>높은 크로스로 시간 확보</td>
                <td>다운더라인 방향 전환</td>
              </tr>
              <tr>
                <td>상대가 한쪽으로 밀림</td>
                <td>반대 코트 1m 안쪽 공략</td>
                <td>라인 바로 위 위너 시도</td>
              </tr>
              <tr>
                <td>랠리 리듬이 반복됨</td>
                <td>루프볼이나 슬라이스로 템포 변화</td>
                <td>같은 속도·같은 높이 반복</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 방향 전환은 균형이 있을 때만 한다</h2>
          <p>
            베이스라인에서 가장 많은 실수는 늦은 타점에서 방향을 바꾸는 것입니다. 크로스 랠리 중
            몸이 공 뒤에 들어가지 못했는데 다운더라인을 시도하면 네트나 사이드 아웃이 나올 확률이
            높습니다. 방향 전환은 내가 균형을 잡고 있고 상대가 한쪽으로 밀렸을 때만 성공률이 높습니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              방향 전환 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>공 뒤에 들어가 앞쪽 타점으로 칠 수 있는가?</li>
              <li>상대가 코트 한쪽으로 2걸음 이상 밀렸는가?</li>
              <li>목표가 라인이 아니라 코트 안쪽 1m인가?</li>
              <li>실패해도 다음 공을 준비할 위치로 회복 가능한가?</li>
              <li>중요 포인트라면 위너보다 깊은 어프로치가 더 안전하지 않은가?</li>
            </ul>
          </aside>

          <h2>4. 템포 변화는 상대의 리듬을 끊는 기술이다</h2>
          <p>
            템포 변화는 갑자기 세게 치는 것만 뜻하지 않습니다. 높은 루프볼로 상대를 뒤로 밀거나,
            낮은 슬라이스로 타점을 낮추거나, 짧은 각도로 앞으로 끌어내는 것도 템포 변화입니다.
            같은 속도와 같은 높이의 공이 반복되면 상대는 점점 편해집니다. 반대로 높이와 회전을
            바꾸면 상대는 타점과 발 위치를 다시 계산해야 합니다.
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
            에서도 기술을 상황별로 나눠 훈련하는 접근을 확인할 수 있습니다. 랠리 전략도 샷 하나가
            아니라 상황에 맞는 선택의 조합으로 봐야 합니다.
          </p>

          <h2>5. 랠리 패턴은 3구 단위로 설계한다</h2>
          <p>
            베이스라인 랠리를 잘하려면 한 공만 생각하지 말고 3구 단위로 봐야 합니다. 첫 공은 깊게
            보내 상대를 밀고, 두 번째 공은 방향을 확인하고, 세 번째 공에서 템포나 코스를 바꿉니다.
            이 구조가 있으면 랠리 중 급하게 위너를 노리는 실수가 줄어듭니다.
          </p>
          <ul>
            <li>1구: 중앙 깊게 보내 상대의 공격 각도를 줄인다.</li>
            <li>2구: 상대가 밀린 쪽과 회복 속도를 확인한다.</li>
            <li>3구: 반대 코스, 높은 루프볼, 낮은 슬라이스 중 하나로 변화를 준다.</li>
            <li>찬스볼: 서비스라인 안쪽에서 코트 1m 안쪽 목표로 마무리한다.</li>
          </ul>

          <h2>6. 실전 드릴은 깊이-방향-템포 순서로 한다</h2>
          <p>
            연습에서는 한 번에 모든 것을 바꾸려 하지 않는 편이 좋습니다. 먼저 깊이를 안정시키고,
            그 다음 방향 전환을 붙이고, 마지막으로 템포 변화를 섞습니다. 이 순서를 지키면 랠리가
            산만해지지 않고 경기 중에도 바로 사용할 수 있는 패턴으로 남습니다.
          </p>
          <p>
            예를 들어 10분은 크로스 깊이만, 다음 10분은 크로스 3개 뒤 다운더라인 1개, 마지막 10분은
            같은 패턴에 루프볼이나 슬라이스를 섞어 보세요. 성공률을 기록하면 어떤 변화에서 실수가
            늘어나는지 명확히 보입니다.
          </p>

          <h2>마무리</h2>
          <p>
            베이스라인 랠리 전략의 핵심은 무작정 오래 버티는 것이 아니라 깊이, 방향, 템포를 순서 있게
            바꾸는 것입니다. 깊이로 시간을 벌고, 방향으로 상대를 움직이고, 템포로 리듬을 깨면 같은
            스트로크 실력으로도 더 많은 찬스볼을 만들 수 있습니다.
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
            내 랠리 안정성과 전술 성향을 함께 점검해 보세요.
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
