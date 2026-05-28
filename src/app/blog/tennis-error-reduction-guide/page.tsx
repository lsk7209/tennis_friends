import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "언포스드 에러 줄이기 | 원인 분석·교정 루틴";
const description =
  "테니스 언포스드 에러를 줄이는 원인 분석, 기술·멘탈·전술 교정법과 경기 중 안정 루틴을 정리했습니다.";

const faqItems = [
  {
    question: "언포스드 에러는 무조건 나쁜 실수인가요?",
    answer:
      "모든 언포스드 에러가 같은 의미는 아닙니다. 공격 가능한 상황에서 의도적으로 감수한 실수와 준비가 안 된 상태에서 나온 반복 실수는 구분해야 합니다.",
  },
  {
    question: "경기 중 에러가 늘면 무엇부터 바꿔야 하나요?",
    answer:
      "스윙 전체를 바꾸기보다 목표 코스를 코트 안쪽으로 옮기고, 공 높이를 네트 위 1m 이상으로 확보하는 것이 먼저입니다.",
  },
  {
    question: "언포스드 에러를 줄이면 공격력이 떨어지지 않나요?",
    answer:
      "무조건 안전하게만 치면 공격력이 줄 수 있습니다. 핵심은 공격할 공과 버틸 공을 구분해 불필요한 실수만 줄이는 것입니다.",
  },
  {
    question: "연습 때는 괜찮은데 경기에서만 실수하는 이유는 무엇인가요?",
    answer:
      "경기에서는 점수 압박, 상대 위치, 회복 시간, 긴장으로 타점과 판단이 흔들립니다. 경기형 드릴과 포인트 사이 루틴이 필요합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: ["언포스드 에러", "테니스 실수 줄이기", "에러 교정", "테니스 안정성", "경기 운영"],
  alternates: { canonical: `${siteUrl}/blog/tennis-error-reduction-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-error-reduction-guide`,
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
          { name: title, item: `${siteUrl}/blog/tennis-error-reduction-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 안정성·경기 운영 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            언포스드 에러를 줄이는 핵심은 소극적으로 치는 것이 아닙니다. 실수의 원인을 코스,
            타점, 판단, 멘탈로 분류하고 공격할 공과 버틸 공을 구분해야 경기력은 유지하면서
            불필요한 실점만 줄일 수 있습니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>언포스드 에러는 기술 실수, 선택 실수, 멘탈 실수로 나눠야 줄어듭니다.</li>
            <li>경기 중에는 코스를 좁히고 네트 위 여유 높이를 먼저 확보합니다.</li>
            <li>같은 실수가 3번 반복되면 전술 문제가 아니라 교정 신호로 봐야 합니다.</li>
            <li>공격력을 잃지 않으려면 공격할 공과 버틸 공의 기준을 미리 정해야 합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 언포스드 에러는 하나의 실수가 아니다</h2>
          <p>
            언포스드 에러는 상대가 강하게 압박하지 않았는데 내가 만든 실점입니다. 하지만 모든
            에러를 같은 방식으로 고치면 안 됩니다. 쉬운 공을 네트에 넣은 실수, 무리한 다운더라인
            시도, 긴장해서 세컨드 서브를 더블폴트한 상황은 원인이 서로 다릅니다. 원인을 나누지
            않으면 연습도 막연해지고 경기 중 대처도 늦어집니다.
          </p>
          <p>
            경기 기록에서 unforced error와 winner 같은 개념은 프로 경기 통계에도 자주 쓰입니다.
            용어 기준을 확인하려면
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              ITF 테니스 용어 자료
            </a>
            를 참고할 수 있습니다. 중요한 것은 용어 자체보다 내 경기에서 같은 실수가 어디서 반복되는지
            알아내는 것입니다.
          </p>

          <h2>2. 에러 원인을 네 가지로 분류한다</h2>
          <p>
            실수를 줄이려면 먼저 분류표가 필요합니다. 경기 후 "오늘 너무 못 쳤다"라고만 적으면
            다음 연습이 바뀌지 않습니다. 어떤 실수가 많았는지 아래 기준으로 나누면 바로 교정 과제가
            보입니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>분류</th>
                <th>대표 장면</th>
                <th>우선 교정</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>타점 실수</td>
                <td>몸 옆이나 뒤에서 맞아 네트에 걸림</td>
                <td>스플릿 스텝과 준비 동작을 빠르게 한다.</td>
              </tr>
              <tr>
                <td>코스 실수</td>
                <td>라인을 노리다 사이드 아웃</td>
                <td>목표를 코트 안쪽 1m로 옮긴다.</td>
              </tr>
              <tr>
                <td>선택 실수</td>
                <td>수비 상황에서 위너를 무리하게 시도</td>
                <td>공격할 공과 버틸 공의 기준을 정한다.</td>
              </tr>
              <tr>
                <td>멘탈 실수</td>
                <td>중요 포인트에서 급해져 더블폴트</td>
                <td>포인트 사이 루틴으로 속도를 늦춘다.</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 경기 중에는 코스보다 높이를 먼저 안정시킨다</h2>
          <p>
            에러가 늘기 시작하면 많은 선수가 폼을 고치려 합니다. 하지만 경기 중에 스윙을 크게 바꾸면
            더 흔들릴 수 있습니다. 가장 먼저 해야 할 것은 네트 위 여유 높이를 확보하는 것입니다.
            공이 네트 위 1m 이상을 지나가게 만들고, 목표 코스를 라인에서 안쪽으로 옮기면 실수의
            절반은 빠르게 줄어듭니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              경기 중 에러 응급 처치
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>연속 2실수 후에는 다음 공을 크로스 깊게만 보낸다.</li>
              <li>라인 목표를 버리고 코트 안쪽 1m를 목표로 잡는다.</li>
              <li>네트 실수가 많으면 공 높이를 먼저 올린다.</li>
              <li>아웃 실수가 많으면 스윙 속도보다 라켓 면을 확인한다.</li>
              <li>더블폴트가 나오면 세컨드 서브 코스를 하나로 고정한다.</li>
            </ul>
          </aside>

          <h2>4. 공격할 공과 버틸 공을 구분한다</h2>
          <p>
            언포스드 에러를 줄인다고 모든 공을 안전하게만 치면 경기 주도권을 잃습니다. 그래서
            공격할 공과 버틸 공의 기준이 필요합니다. 서비스 박스 안쪽으로 짧게 떨어진 공, 상대가
            코트 밖으로 밀린 공, 내가 공 뒤에 충분히 들어간 공은 공격할 수 있습니다. 반대로 몸 옆으로
            밀린 공, 베이스라인 깊은 공, 상대가 중앙에서 기다리는 공은 버티는 공으로 봐야 합니다.
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
            처럼 기술을 상황별로 나눠 보는 접근은 동호인에게도 유용합니다. 같은 포핸드라도 공격
            포핸드와 수비 포핸드는 목표와 높이가 달라야 합니다.
          </p>

          <h2>5. 멘탈 에러는 포인트 사이 루틴으로 줄인다</h2>
          <p>
            중요한 포인트에서 나오는 실수는 기술이 갑자기 사라져서가 아니라 속도가 빨라져서 생기는
            경우가 많습니다. 서브를 빨리 시작하고, 리턴 위치를 대충 잡고, 직전 실수를 머릿속에
            남긴 채 다음 포인트에 들어가면 같은 에러가 반복됩니다. 이때 필요한 것은 복잡한 멘탈
            훈련보다 짧은 루틴입니다.
          </p>
          <ul>
            <li>숨을 길게 내쉬며 라켓 줄을 한 번 본다.</li>
            <li>직전 실수를 타점, 코스, 선택, 멘탈 중 하나로만 분류한다.</li>
            <li>다음 포인트의 첫 공 목표를 한 문장으로 정한다.</li>
            <li>준비 자세를 잡은 뒤 상대가 움직이기 전까지 시선을 고정한다.</li>
          </ul>

          <h2>6. 연습은 에러가 난 장면을 재현해야 한다</h2>
          <p>
            벽치기나 랠리 연습만으로는 경기 중 에러가 줄지 않을 때가 있습니다. 실제 실수는 점수,
            상대 위치, 회복 동작, 피로가 합쳐진 상황에서 나오기 때문입니다. 그래서 연습도 에러가
            나온 장면을 재현해야 합니다. 예를 들어 백핸드 다운더라인 아웃이 반복되었다면 단순히
            백핸드를 많이 치는 것이 아니라, 크로스 랠리 후 방향 전환을 시도하는 상황을 만들어야
            합니다.
          </p>
          <p>
            훈련 기록에는 성공률만 쓰지 말고 에러 종류를 같이 적으세요. 네트, 롱, 사이드 아웃,
            더블폴트, 선택 실수처럼 분류하면 다음 주 연습 주제가 선명해집니다. 반복 실수는 의지가
            부족해서가 아니라 아직 훈련 설계가 맞지 않는다는 신호일 수 있습니다.
          </p>

          <h2>마무리</h2>
          <p>
            언포스드 에러 줄이기의 목적은 소극적으로 버티는 선수가 되는 것이 아닙니다. 공격할 공은
            과감하게 치고, 버틸 공은 확률 높게 넘기는 기준을 갖추는 것입니다. 실수를 타점, 코스,
            선택, 멘탈로 분류하고 경기 중에는 높이와 목표 코스를 먼저 안정시키면 불필요한 실점은
            빠르게 줄어듭니다.
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
            내 경기 안정성과 실력 기준을 함께 점검해 보세요.
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
