import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "바람 부는 날 테니스 전략 | 탑스핀·로브·서브 조정";
const description =
  "바람 부는 날 테니스에서 맞바람, 뒷바람, 옆바람별 샷 선택과 탑스핀, 로브, 서브 조정법을 정리했습니다.";

const faqItems = [
  {
    question: "바람 부는 날 테니스에서 가장 먼저 확인할 것은 무엇인가요?",
    answer:
      "첫 5분 동안 바람 방향과 세기를 확인해야 합니다. 베이스라인 양쪽에서 짧은 랠리, 로브, 서브 토스를 해보면 맞바람과 뒷바람 차이를 바로 느낄 수 있습니다.",
  },
  {
    question: "맞바람에서는 어떤 샷이 안전한가요?",
    answer:
      "맞바람에서는 공이 짧아지기 쉬우므로 평소보다 조금 더 깊게 보내고, 네트 위 여유를 확보한 탑스핀 크로스가 안전합니다.",
  },
  {
    question: "뒷바람에서는 로브를 쓰면 안 되나요?",
    answer:
      "완전히 금지는 아니지만 위험합니다. 뒷바람에서는 로브가 길어지기 쉬우므로 높이를 낮추고, 공격 로브보다 깊은 수비 로브 위주로 제한하는 편이 좋습니다.",
  },
  {
    question: "바람이 강할 때 서브는 어떻게 바꿔야 하나요?",
    answer:
      "강한 플랫 서브보다 스핀과 코스를 우선하세요. 토스를 낮게 고정하고, 맞바람에서는 깊이, 뒷바람에서는 파워 조절, 옆바람에서는 방향 보정을 먼저 생각합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "바람 부는 날 테니스",
    "테니스 바람 전략",
    "테니스 탑스핀",
    "테니스 로브",
    "테니스 서브 조정",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-windy-day-strategy` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-windy-day-strategy`,
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
          { name: title, item: `${siteUrl}/blog/tennis-windy-day-strategy` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-emerald-700 dark:text-emerald-300">
            야외 코트·바람 대응 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            바람 부는 날 테니스는 힘으로 이기는 경기가 아니라 궤적을
            낮추거나 높이고, 회전과 깊이를 조절하는 경기입니다. 바람 방향을
            먼저 읽으면 실수는 줄고 상대의 불안정한 타점을 더 자주 만들 수
            있습니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-800 dark:bg-emerald-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>경기 전 5분은 바람 방향과 세기를 확인하는 데 씁니다.</li>
            <li>맞바람에서는 깊이, 뒷바람에서는 파워 조절이 우선입니다.</li>
            <li>옆바람에서는 라인 근처보다 중앙 큰 목표를 잡습니다.</li>
            <li>서브는 강도보다 토스 안정, 스핀, 코스 선택이 중요합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 바람은 공의 길이와 높이를 동시에 바꾼다</h2>
          <p>
            바람 부는 날에는 공이 단순히 옆으로 밀리는 것만 문제가 아닙니다.
            맞바람은 공을 짧게 만들고, 뒷바람은 평소보다 길게 밀어내며,
            옆바람은 코스 판단을 흔듭니다. 그래서 같은 스윙을 해도 공의
            착지점이 매 포인트 달라질 수 있습니다.
          </p>
          <p>
            중요한 것은 바람을 없애려 하지 않는 것입니다. 바람은 양쪽 선수에게
            모두 영향을 주지만, 먼저 기준을 바꾸는 선수가 유리합니다. 코트에
            들어가면 베이스라인 양쪽에서 미니 랠리와 긴 랠리를 모두 해보고,
            공이 짧아지는 쪽과 길어지는 쪽을 몸으로 확인해야 합니다.
          </p>
          <p>
            야외 경기 환경과 기본 규칙은
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
            를 함께 참고하면 좋습니다. 바람 대응은 샷 이름보다 코트 상황을
            읽는 기준이 먼저입니다.
          </p>

          <h2>2. 바람 방향별로 목표 지점을 다르게 잡는다</h2>
          <p>
            바람이 있는 날에는 라인을 노리는 샷보다 큰 목표를 잡는 샷이
            이깁니다. 평소보다 50cm에서 1m 정도 안쪽을 목표로 두면 바람에
            흔들려도 실점 가능성이 낮아집니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>바람</th>
                <th>공의 변화</th>
                <th>안전한 선택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>맞바람</td>
                <td>공이 짧아지고 속도가 줄어듦</td>
                <td>깊은 탑스핀 크로스, 높은 네트 여유</td>
              </tr>
              <tr>
                <td>뒷바람</td>
                <td>공이 길어지고 베이스라인을 넘어감</td>
                <td>스윙 크기 축소, 스핀 추가, 중앙 목표</td>
              </tr>
              <tr>
                <td>옆바람</td>
                <td>코스가 좌우로 밀림</td>
                <td>라인 대신 중앙 1m 안쪽, 크로스 안정</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 탑스핀은 바람 속에서 공을 붙잡는 장치다</h2>
          <p>
            탑스핀은 바람 부는 날 가장 먼저 믿을 수 있는 도구입니다. 공에
            전진 회전을 주면 네트 위를 지나도 코트 안으로 떨어지는 힘이
            생깁니다. 맞바람에서는 공이 너무 짧아지지 않게 깊이를 보태고,
            뒷바람에서는 공이 날아가지 않도록 회전량을 늘립니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              바람 속 탑스핀 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>네트 위 여유를 평소보다 넉넉하게 둡니다.</li>
              <li>팔로만 감지 말고 하체 회전으로 깊이를 만듭니다.</li>
              <li>뒷바람에서는 스윙 속도보다 라켓면 각도를 먼저 조정합니다.</li>
              <li>옆바람에서는 라인샷보다 큰 크로스를 선택합니다.</li>
            </ul>
          </aside>
          <p>
            다만 탑스핀을 많이 건다고 해서 무조건 안전해지는 것은 아닙니다.
            맞바람에서 스핀만 늘리고 전진 힘이 부족하면 공이 서비스라인 앞에
            떨어집니다. 반대로 뒷바람에서는 스핀 없이 강하게 밀면 공이
            베이스라인을 넘어갑니다. 회전과 깊이를 같이 조절해야 합니다.
          </p>

          <h2>4. 로브는 바람 방향을 알 때만 공격 무기가 된다</h2>
          <p>
            로브는 바람 부는 날 가장 위험하면서도 가장 효과적인 샷입니다.
            맞바람에서는 깊게 올려도 공이 짧아질 수 있고, 뒷바람에서는 작은
            힘에도 길게 날아갑니다. 그래서 로브를 치기 전에는 반드시 지금 내가
            맞바람 쪽인지, 뒷바람 쪽인지 확인해야 합니다.
          </p>
          <ul>
            <li>맞바람 로브는 평소보다 깊고 높게 보내야 합니다.</li>
            <li>뒷바람 로브는 높이를 낮추고 수비용으로 제한합니다.</li>
            <li>옆바람 로브는 바람이 미는 방향 반대쪽으로 여유를 둡니다.</li>
            <li>복식에서는 상대 전위 머리 위보다 중앙 뒤쪽이 안전합니다.</li>
          </ul>
          <p>
            상대가 바람을 읽지 못하면 높은 공 하나만으로도 타점이 무너집니다.
            특히 맞바람을 맞는 상대에게 깊은 로브를 보내면 뒤로 물러나는
            발걸음과 공의 감속이 겹쳐 좋은 찬스가 만들어집니다.
          </p>

          <h2>5. 서브는 토스를 낮추고 코스를 넓게 쓴다</h2>
          <p>
            바람이 강할 때 서브에서 가장 먼저 무너지는 것은 토스입니다. 공이
            손을 떠난 뒤 바람을 오래 맞을수록 위치가 흔들립니다. 따라서 토스는
            평소보다 약간 낮고 몸 앞쪽으로 고정하고, 강한 플랫 서브보다 스핀과
            코스로 리턴을 어렵게 만드는 편이 안정적입니다.
          </p>
          <ol>
            <li>맞바람에서는 네트 위 여유를 두고 깊게 넣습니다.</li>
            <li>뒷바람에서는 파워를 줄이고 스핀으로 길이를 잡습니다.</li>
            <li>옆바람에서는 바람이 미는 방향을 예상해 시작 코스를 조정합니다.</li>
            <li>2서브는 에이스보다 상대 백핸드 쪽 높은 타점을 목표로 합니다.</li>
          </ol>

          <h2>6. 바람이 강할수록 전술은 단순해야 한다</h2>
          <p>
            바람이 강한 날에는 복잡한 패턴보다 반복 가능한 패턴이 좋습니다.
            라인샷, 드롭샷, 낮은 플랫 위너를 계속 시도하면 성공보다 실수가
            빨리 쌓입니다. 큰 크로스, 중앙 깊은 공, 높은 탑스핀, 상대 백쪽
            반복처럼 단순한 선택이 점수를 지킵니다.
          </p>
          <p>
            바람은 멘탈에도 영향을 줍니다. 좋은 샷이 갑자기 길어지거나 짧아질
            수 있기 때문에 실수 후 감정적으로 반응하기 쉽습니다. 하지만 같은
            조건은 상대에게도 적용됩니다. 내가 먼저 목표를 크게 잡고 실수를
            줄이면 상대가 더 급해집니다.
          </p>

          <h2>마무리</h2>
          <p>
            바람 부는 날 테니스 전략의 핵심은 바람을 이기려 하지 않고 활용하는
            것입니다. 맞바람에서는 깊이를 보태고, 뒷바람에서는 파워를 줄이고,
            옆바람에서는 코스를 크게 잡아야 합니다. 여기에 탑스핀, 안전한
            로브, 낮은 토스의 서브를 더하면 야외 코트에서도 경기력이 크게
            흔들리지 않습니다.
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

        <section className="mt-10 rounded-lg bg-emerald-700 p-6 text-white">
          <h2 className="mb-3 text-2xl font-bold">내 경기 스타일도 함께 점검하세요</h2>
          <p className="mb-4 text-emerald-50">
            바람 대응은 플레이 스타일에 따라 달라집니다. 수비형, 공격형, 복식형
            중 어떤 선택이 맞는지 먼저 확인해보세요.
          </p>
          <Link
            href="/utility/play-style-test"
            className="inline-flex rounded-md bg-white px-4 py-2 font-semibold text-emerald-800"
          >
            플레이 스타일 테스트 바로가기
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
