import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "백핸드 크로스코트 | 각도·회전·깊이 기준";
const description =
  "백핸드 크로스코트 성공률을 높이는 각도, 회전, 깊이, 풋워크와 실전 드릴 기준을 정리했습니다.";

const faqItems = [
  {
    question: "백핸드 크로스코트가 자꾸 짧아지는 이유는 무엇인가요?",
    answer:
      "타점이 몸 뒤에 있거나 체중 이동이 멈추는 경우가 많습니다. 임팩트를 앞에서 만들고 목표를 서비스라인이 아니라 베이스라인 1m 안쪽으로 잡으세요.",
  },
  {
    question: "크로스코트는 세게 쳐야 하나요, 깊게 쳐야 하나요?",
    answer:
      "동호인 경기에서는 깊이가 먼저입니다. 깊은 크로스코트가 상대를 뒤로 밀고, 다음 공에서 각도나 다운더라인 선택지를 만듭니다.",
  },
  {
    question: "원핸드와 투핸드 백핸드의 크로스코트 기준이 다른가요?",
    answer:
      "타점과 회전량은 다르지만 공통 기준은 같습니다. 어깨 회전, 앞쪽 타점, 임팩트 후 회복 스텝이 먼저입니다.",
  },
  {
    question: "언제 짧은 앵글 크로스코트를 써야 하나요?",
    answer:
      "상대가 베이스라인 뒤로 물러섰고 내가 균형을 잡은 상황에서 쓰는 것이 좋습니다. 밀린 상황에서 억지로 각도를 만들면 사이드아웃이 많아집니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "백핸드 크로스코트",
    "백핸드",
    "크로스코트",
    "테니스 백핸드",
    "테니스 기술",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-backhand-crosscourt` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-backhand-crosscourt`,
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
          { name: title, item: `${siteUrl}/blog/tennis-backhand-crosscourt` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 백핸드 기술 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            백핸드 크로스코트는 세게 치는 샷보다 상대를 코트 밖으로 밀어내는
            안전한 연결 샷입니다. 성공 기준은 앞쪽 타점, 네트 위 여유, 베이스라인
            근처 깊이, 그리고 회복 스텝입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>중립 상황에서는 깊은 크로스코트가 최우선입니다.</li>
            <li>각도는 힘이 아니라 앞쪽 타점과 몸통 회전으로 만듭니다.</li>
            <li>회전은 네트 위 1~1.5m 여유를 확보하기 위한 안전장치입니다.</li>
            <li>샷 직후 코트 중앙으로 돌아오는 첫 스텝까지가 한 동작입니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 크로스코트가 안전한 이유</h2>
          <p>
            크로스코트는 대각선으로 치기 때문에 사용할 수 있는 코트 길이가
            길고, 네트 중앙을 통과하기 쉬워 실수 확률이 낮습니다. 그래서
            백핸드가 약한 동호인도 무리한 다운더라인보다 깊은 크로스코트를
            안정적으로 보내는 편이 포인트를 지키기 좋습니다.
          </p>
          <p>
            ITF 용어 기준에서도 크로스코트는 공이 상대 코트로 대각선 이동하는
            샷입니다. 공식 용어와 규칙 확인은
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어집
            </a>
            을 참고할 수 있습니다. 기술 연습 자료는
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 팁과 인스트럭션
            </a>
            처럼 기본 스트로크 자료를 함께 보면 좋습니다.
          </p>

          <h2>2. 각도는 손목이 아니라 타점이 만든다</h2>
          <p>
            백핸드 크로스코트가 자꾸 중앙으로 가는 이유는 손목을 못 써서가
            아니라 타점이 늦기 때문인 경우가 많습니다. 공을 몸 옆이나 뒤에서
            맞추면 라켓 면이 닫히고, 자연스럽게 중앙이나 네트로 갑니다. 공을
            몸 앞에서 맞추면 어깨 회전이 살아나고 대각선 방향으로 라켓이
            지나갈 공간이 생깁니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>문제</th>
                <th>원인</th>
                <th>교정 기준</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>공이 중앙으로 감</td>
                <td>타점이 늦고 몸통 회전이 멈춤</td>
                <td>앞발보다 반 발 앞에서 임팩트</td>
              </tr>
              <tr>
                <td>사이드아웃이 많음</td>
                <td>손목으로 각도를 억지로 만듦</td>
                <td>라켓 면을 고정하고 어깨 회전 사용</td>
              </tr>
              <tr>
                <td>공이 짧아짐</td>
                <td>스윙이 임팩트에서 끊김</td>
                <td>임팩트 뒤 목표 방향으로 30cm 더 밀기</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 회전은 공격보다 안정성을 위한 장치다</h2>
          <p>
            동호인 백핸드에서 회전은 위너를 만들기보다 네트와 아웃을 줄이는
            역할을 합니다. 탑스핀은 공을 네트 위로 높게 보내도 코트 안으로
            떨어지게 만들고, 슬라이스는 낮은 바운드로 상대의 공격 타이밍을
            늦춥니다. 중요한 것은 회전량보다 같은 궤적을 반복하는 능력입니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              백핸드 크로스코트 체크포인트
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>준비 때 어깨가 네트 옆을 향할 만큼 충분히 돌아갔는가?</li>
              <li>임팩트가 몸 앞에서 만들어졌는가?</li>
              <li>공이 네트 위 1~1.5m를 통과했는가?</li>
              <li>목표가 사이드라인이 아니라 크로스 깊은 3분의 1 구역인가?</li>
              <li>샷 뒤 첫 스텝이 중앙 회복 방향으로 나갔는가?</li>
            </ol>
          </aside>

          <h2>4. 깊이는 베이스라인 1m 안쪽을 목표로 한다</h2>
          <p>
            깊은 백핸드 크로스코트는 상대를 뒤로 밀어 다음 공을 쉽게 만듭니다.
            목표를 사이드라인 가까이에 두면 멋진 샷은 나오지만 실수도 늘어납니다.
            연습 때는 상대 코트의 대각선 깊은 3분의 1 구역, 특히 베이스라인
            1m 안쪽을 목표로 잡는 것이 좋습니다.
          </p>
          <p>
            깊이를 만들 때 팔로만 밀면 어깨와 팔꿈치 부담이 커집니다. 스플릿
            스텝, 유닛턴, 앞쪽 타점, 임팩트 후 회복이 이어져야 공이 길게
            갑니다. 특히 수비 상황에서는 낮고 빠른 샷보다 높고 깊은 크로스코트가
            더 안전한 선택입니다.
          </p>

          <h2>5. 20분 연습 루틴</h2>
          <p>
            백핸드 크로스코트는 한 번에 강하게 치는 연습보다 같은 깊이와 방향을
            반복하는 훈련이 효과적입니다. 아래 루틴은 파트너, 볼머신, 코치
            피드 모두에 적용할 수 있습니다.
          </p>
          <ul>
            <li>5분: 서비스라인 안쪽에서 짧은 백핸드 크로스 랠리</li>
            <li>5분: 베이스라인 1m 안쪽 목표로 깊은 크로스 20개</li>
            <li>5분: 깊은 크로스 2개 뒤 짧은 앵글 1개 패턴</li>
            <li>5분: 크로스 후 중앙 회복, 다음 공 준비까지 연결</li>
          </ul>

          <h2>마무리</h2>
          <p>
            백핸드 크로스코트는 화려한 결정구가 아니라 경기 운영의 기본
            안전망입니다. 타점을 앞에 두고, 네트 위 여유를 확보하고, 깊은
            목표를 반복하면 다운더라인이나 네트 접근 같은 공격 선택지도 자연스럽게
            열립니다.
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
            백핸드 안정성을 내 레벨 기준으로 점검하세요.
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
