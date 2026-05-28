import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "세컨드 서브 킥·탑스핀 | 더블폴트 줄이는 기준";
const description =
  "세컨드 서브 킥·탑스핀 성공률을 높이는 토스, 스핀, 코스, 더블폴트 방지 드릴을 정리했습니다.";

const faqItems = [
  {
    question: "세컨드 서브는 킥서브와 탑스핀 중 무엇부터 배워야 하나요?",
    answer:
      "입문자는 탑스핀 세컨드 서브부터 안정화하는 편이 좋습니다. 토스와 위로 긁는 감각이 잡힌 뒤 킥서브의 옆 회전과 높은 바운드를 추가하세요.",
  },
  {
    question: "더블폴트가 많을 때 가장 먼저 고칠 것은 무엇인가요?",
    answer:
      "토스 위치입니다. 토스가 머리 뒤로 가거나 너무 낮으면 스윙이 급해지고 라켓 면이 흔들립니다. 같은 위치에 올리는 연습만으로도 성공률이 올라갑니다.",
  },
  {
    question: "세컨드 서브도 강하게 쳐야 하나요?",
    answer:
      "강도보다 회전과 깊이가 먼저입니다. 네트 위 여유를 확보하고 서비스박스 깊은 구역으로 보내면 속도가 빠르지 않아도 리턴 압박을 만들 수 있습니다.",
  },
  {
    question: "킥서브가 옆으로 튀지 않는 이유는 무엇인가요?",
    answer:
      "라켓이 공을 위로만 지나가거나 토스가 너무 앞에 있을 때 그렇습니다. 머리 위쪽 토스에서 공의 옆·뒤를 긁고, 팔로스루가 위로 빠지는 감각을 만들어야 합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "세컨드 서브",
    "킥서브",
    "탑스핀 서브",
    "더블폴트",
    "테니스 서브",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-second-serve-kick-topspin` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-second-serve-kick-topspin`,
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
            item: `${siteUrl}/blog/tennis-second-serve-kick-topspin`,
          },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 세컨드 서브 기술 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            세컨드 서브는 약하게 넣는 보험 샷이 아닙니다. 킥과 탑스핀으로
            네트 위 여유를 확보하고, 서비스박스 깊은 구역에 반복해서 넣어
            더블폴트를 줄이면서 리턴 압박을 만드는 시작 샷입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>세컨드 서브의 1순위는 속도가 아니라 회전과 반복성입니다.</li>
            <li>토스는 머리 위쪽, 임팩트는 위로 긁는 방향을 유지합니다.</li>
            <li>목표는 서비스라인 근처가 아니라 서비스박스 깊은 3분의 1입니다.</li>
            <li>더블폴트가 많다면 코스보다 토스와 리듬부터 고칩니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 세컨드 서브는 넣기만 하는 샷이 아니다</h2>
          <p>
            세컨드 서브를 약하게 밀어 넣으면 더블폴트는 줄어드는 것처럼 보이지만,
            상대가 한 걸음 안으로 들어와 리턴을 공격하기 쉬워집니다. 좋은 세컨드
            서브는 속도가 빠르지 않아도 공이 높게 튀거나 깊게 떨어져 상대의
            리턴 타점을 흔듭니다. 그래서 핵심은 강한 팔힘이 아니라 같은 토스,
            같은 리듬, 충분한 스핀입니다.
          </p>
          <p>
            서브는 테니스 규칙상 포인트를 시작하는 타구입니다. 공식 규칙과 기본
            용어는
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어집
            </a>
            에서 확인할 수 있고, 서브·스트로크 연습 자료는
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 팁과 인스트럭션
            </a>
            처럼 단계별 자료를 함께 보면 좋습니다.
          </p>

          <h2>2. 킥서브와 탑스핀 서브의 차이</h2>
          <p>
            두 서브 모두 공에 위쪽 회전을 걸어 안정성을 높이지만 목적이 조금
            다릅니다. 탑스핀 서브는 네트 위로 높게 지나간 공이 서비스박스 안으로
            빠르게 떨어지는 것이 핵심이고, 킥서브는 바운드 후 높게 튀거나 옆으로
            빠져 상대 리턴 타점을 밀어내는 것이 핵심입니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>탑스핀 세컨드 서브</th>
                <th>킥서브</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>목적</td>
                <td>안정적으로 깊게 넣기</td>
                <td>높은 바운드로 리턴 타점 밀기</td>
              </tr>
              <tr>
                <td>토스</td>
                <td>머리 위와 약간 앞쪽</td>
                <td>머리 위쪽, 약간 뒤쪽 느낌</td>
              </tr>
              <tr>
                <td>스윙 감각</td>
                <td>아래에서 위로 길게 긁기</td>
                <td>공의 뒤·옆을 위로 긁기</td>
              </tr>
              <tr>
                <td>우선순위</td>
                <td>더블폴트 감소</td>
                <td>리턴 압박과 코트 밖 이동</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 토스가 흔들리면 스핀도 흔들린다</h2>
          <p>
            더블폴트가 많은 사람은 스윙을 고치기 전에 토스부터 봐야 합니다.
            토스가 낮으면 서두르게 되고, 너무 앞이면 공을 아래로 찍게 되며,
            너무 뒤면 허리가 꺾이고 라켓 면이 열립니다. 세컨드 서브의 토스는
            첫 서브보다 조금 더 위로 남겨두는 느낌이 좋습니다. 그래야 라켓이
            공을 향해 올라가는 시간이 생깁니다.
          </p>
          <p>
            연습 때는 공을 치지 않고 토스만 20개 반복해도 효과가 있습니다.
            공이 떨어지는 위치가 앞발 주변의 같은 구역에 모이는지 확인하세요.
            토스가 안정되면 스윙을 빠르게 하지 않아도 회전이 걸리고, 네트 위
            여유를 확보하기 쉬워집니다.
          </p>

          <h2>4. 라켓은 앞으로 던지기보다 위로 지나간다</h2>
          <p>
            세컨드 서브에서 가장 흔한 실수는 공을 안전하게 넣으려고 팔을
            멈추는 것입니다. 팔을 멈추면 오히려 회전이 줄고 라켓 면만 흔들립니다.
            안정적인 세컨드 서브는 스윙을 줄이는 것이 아니라 방향을 바꾸는
            것입니다. 라켓 헤드가 공을 지나 앞으로만 나가는 것이 아니라, 공의
            뒤쪽을 지나 위로 빠져나가야 합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              세컨드 서브 체크포인트
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>토스가 머리 위 같은 구역에 올라갔는가?</li>
              <li>임팩트 전 무릎과 어깨가 급하게 무너지지 않았는가?</li>
              <li>라켓이 공을 위로 긁고 지나갔는가?</li>
              <li>목표가 서비스박스 깊은 3분의 1 구역인가?</li>
              <li>실패 후에도 같은 리듬으로 다음 서브를 준비했는가?</li>
            </ol>
          </aside>

          <h2>5. 코스는 넓게, 목표는 깊게 잡는다</h2>
          <p>
            세컨드 서브에서 라인 근처를 노리면 더블폴트가 늘어납니다. 특히
            동호인 경기에서는 정확한 코너보다 깊은 중앙, 깊은 바디, 백핸드 쪽
            안전 구역이 더 실용적입니다. 깊은 세컨드 서브는 상대가 앞으로
            들어오는 것을 막고, 첫 랠리를 중립 이상으로 시작하게 해줍니다.
          </p>
          <p>
            상대가 리턴을 강하게 치는 유형이면 바디 쪽 깊은 탑스핀 서브가
            효과적입니다. 상대가 백핸드 리턴이 약하다면 애드 코트에서 백핸드
            높은 타점으로 튀는 킥서브가 좋습니다. 중요한 것은 매번 다른 코스를
            노리는 것이 아니라, 내가 압박 속에서도 넣을 수 있는 기본 코스를
            먼저 만드는 것입니다.
          </p>

          <h2>6. 20분 더블폴트 감소 드릴</h2>
          <p>
            세컨드 서브 연습은 성공 개수보다 실패 패턴 기록이 중요합니다. 아래
            루틴을 할 때는 네트, 롱아웃, 와이드아웃을 따로 표시하세요. 실패
            원인을 나누면 무엇을 고쳐야 하는지 훨씬 빨리 보입니다.
          </p>
          <ul>
            <li>5분: 공을 치지 않고 같은 위치 토스 30개</li>
            <li>5분: 서비스박스 중앙 깊은 구역에 탑스핀 서브 20개</li>
            <li>5분: 애드 코트 백핸드 쪽 킥서브 15개</li>
            <li>5분: 0-30, 30-40 상황을 가정하고 세컨드 서브만 10개</li>
          </ul>

          <h2>마무리</h2>
          <p>
            세컨드 서브 킥·탑스핀은 어려운 고급 기술처럼 보이지만 출발점은
            단순합니다. 같은 토스, 위로 긁는 라켓 경로, 서비스박스 깊은 목표를
            반복하세요. 속도를 낮추는 것이 아니라 회전을 늘리는 방향으로 연습하면
            더블폴트는 줄고, 상대 리턴은 점점 불편해집니다.
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
            세컨드 서브 안정성이 내 레벨에 맞는지 확인하세요.
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
