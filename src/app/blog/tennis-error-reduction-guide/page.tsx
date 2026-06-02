import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "언포스드 에러 줄이기 | 경기 중 바로 쓰는 원인 분석 루틴";
const description =
  "테니스 언포스드 에러를 높이, 코스, 선택, 멘탈 오류로 나누고 경기 중 바로 줄이는 체크 루틴과 연습 기록법을 정리했습니다.";

const faqItems = [
  {
    question: "언포스드 에러는 정확히 무엇인가요?",
    answer:
      "상대의 강한 압박보다 내 판단, 준비, 임팩트 실수 때문에 포인트가 끝나는 오류를 말합니다. 다만 실제 경기에서는 강제 실수와 경계가 애매하므로 반복 패턴을 보는 것이 더 중요합니다.",
  },
  {
    question: "경기 중 언포스드 에러가 늘면 무엇부터 바꿔야 하나요?",
    answer:
      "코스보다 높이를 먼저 안정시키세요. 네트 위 1m 이상을 목표로 잡고, 다운더라인이나 짧은 공격 시도를 줄이면 즉시 안정성이 올라갑니다.",
  },
  {
    question: "공격력이 떨어지지 않게 에러를 줄일 수 있나요?",
    answer:
      "가능합니다. 모든 공을 안전하게 치는 것이 아니라, 공격할 공과 버틸 공의 기준을 정하면 됩니다. 준비된 공은 공격하고, 자세가 무너진 공은 깊게 보내는 식입니다.",
  },
  {
    question: "연습 때는 괜찮은데 경기에서만 실수하는 이유는 무엇인가요?",
    answer:
      "경기에서는 점수 압박, 상대 위치, 회복 시간, 이전 실수 기억이 판단을 흔듭니다. 그래서 기술 연습과 별도로 포인트 상황을 재현한 루틴 훈련이 필요합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "언포스드 에러",
    "테니스 실수 줄이기",
    "테니스 에러 교정",
    "테니스 경기 운영",
    "테니스 안정성",
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            경기 운영·실수 교정 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            언포스드 에러를 줄이는 핵심은 “더 조심해서 치기”가 아닙니다.
            실수를 높이, 코스, 선택, 멘탈 중 하나로 빠르게 분류하고 다음
            포인트에서 바꿀 행동을 하나만 정해야 합니다. 이 글은 경기 중
            바로 적용할 수 있는 진단 루틴에 집중합니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">3분 자가진단</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["높이 오류", "네트에 걸리는 공이 많으면 목표 코스를 버리고 네트 위 1m를 먼저 확보합니다."],
              ["코스 오류", "아웃이 많으면 라인 대신 코트 안쪽 1m를 목표로 잡습니다."],
              ["선택 오류", "불리한 자세에서 위너를 노렸다면 공격 기준을 다시 정합니다."],
              ["멘탈 오류", "중요 포인트에서 급해진다면 준비 동작과 호흡 시간을 고정합니다."],
            ].map(([label, text]) => (
              <div
                key={label}
                className="rounded-lg border border-white/70 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="mb-1 font-bold text-teal-800 dark:text-teal-200">
                  {label}
                </h3>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            기록을 남기고 싶다면{" "}
            <Link
              href="/utility/unforced-error-audit"
              className="font-semibold text-teal-800 underline dark:text-teal-200"
            >
              언포스드 에러 진단 도구
            </Link>
            로 실수 유형을 먼저 나눠보세요.
          </p>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 언포스드 에러는 하나의 실수가 아니다</h2>
          <p>
            테니스에서 실수는 모두 같아 보이지만 원인은 다릅니다. 쉬운 공을
            네트에 꽂는 실수, 무리한 다운더라인, 준비가 늦은 백핸드, 중요한
            포인트에서 급해진 더블폴트는 같은 “에러”라는 단어로 묶기 어렵습니다.
            국제테니스연맹의 용어 설명처럼 테니스에는 포핸드, 백핸드, 발리,
            더블폴트, 풋폴트처럼 포인트를 끝내는 다양한 상황이 있습니다. 실제
            교정에서는 용어를 외우는 것보다 내 실수가 어떤 조건에서 반복되는지
            보는 편이 훨씬 유용합니다.
          </p>
          <p>
            그래서 경기 중에는 “왜 또 틀렸지?”라고 묻기보다 “방금 실수는
            높이, 코스, 선택, 멘탈 중 어디에 가까운가?”라고 묻는 게 좋습니다.
            원인이 하나로 좁혀져야 다음 포인트에서 바꿀 행동도 하나로 줄어듭니다.
          </p>

          <h2>2. 경기 중에는 코스보다 높이를 먼저 고친다</h2>
          <p>
            연속으로 네트에 걸리기 시작하면 대부분은 스윙을 크게 바꾸려 합니다.
            하지만 경기 중에 스윙 전체를 고치면 타이밍이 더 흔들립니다. 먼저
            목표 높이를 바꾸세요. 네트 위 1m 이상을 통과시키고, 코스는 라인
            대신 코트 안쪽으로 좁힙니다. 이렇게 하면 공의 깊이가 살아나고 상대가
            쉽게 공격하지 못합니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              경기 중 즉시 적용할 안전 루틴
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <li>다음 세 포인트는 라인을 노리지 않는다.</li>
              <li>네트 위 1m와 코트 안쪽 1m를 동시에 목표로 잡는다.</li>
              <li>자세가 무너지면 공격하지 않고 깊게 보낸다.</li>
              <li>두 번 연속 같은 실수가 나오면 코스보다 준비 시간을 먼저 늘린다.</li>
            </ol>
          </aside>

          <h2>3. 공격할 공과 버틸 공을 분리한다</h2>
          <p>
            언포스드 에러를 줄인다는 말이 모든 공을 안전하게 치라는 뜻은
            아닙니다. 그러면 상대에게 주도권을 넘기게 됩니다. 중요한 것은 공격할
            공과 버틸 공의 기준입니다. 공이 허리 높이 이상이고, 발이 먼저
            도착했고, 라켓 면을 안정적으로 만들 수 있을 때는 공격해도 됩니다.
            반대로 몸이 열려 있거나 공이 낮거나 뒤로 밀린 상태라면 깊은 수비가
            더 좋은 선택입니다.
          </p>
          <p>
            특히 동호인 경기에서는 “좋은 공을 더 좋게 만들려는 욕심”이 실수를
            만듭니다. 이미 상대가 어려운 자세라면 라인 위너가 아니라 깊은 중앙
            공으로도 충분합니다. 공격의 목적을 위너가 아니라 다음 공을 쉽게
            만드는 것으로 바꾸면 에러가 줄어듭니다.
          </p>

          <h2>4. 반복 실수는 기록해야 줄어든다</h2>
          <p>
            경기 후 기억만으로 실수를 복기하면 큰 장면만 남습니다. 실제로는
            작은 반복이 승패를 갈랐을 가능성이 큽니다. 세트가 끝난 뒤 2분만
            써서 네트, 롱, 사이드 아웃, 더블폴트, 무리한 공격, 준비 지연을
            표시해 보세요. 다음 연습 주제가 바로 보입니다.
          </p>
          <p>
            예를 들어 백핸드 롱이 많다면 백핸드를 많이 치는 것보다 임팩트 전
            상체 열림, 그립 압력, 목표 높이를 확인해야 합니다. 더블폴트가 많다면
            서브 속도보다 토스 위치와 세컨드 서브 목표 코스를 먼저 고정합니다.
          </p>

          <h2>5. 멘탈 에러는 루틴으로만 줄어든다</h2>
          <p>
            중요한 포인트에서 나오는 실수는 실력이 갑자기 떨어져서가 아니라
            속도가 빨라져서 생기는 경우가 많습니다. 서브를 빨리 시작하고, 리턴
            위치를 늦게 잡고, 직전 실수를 머릿속에 둔 채 다음 포인트에 들어가면
            같은 에러가 반복됩니다. 이때 필요한 것은 긴 멘탈 훈련이 아니라 짧은
            루틴입니다.
          </p>
          <ul>
            <li>실수 직후 원인을 한 단어로만 분류한다.</li>
            <li>다음 포인트 목표를 하나만 정한다.</li>
            <li>호흡 한 번, 라켓 그립 재정렬, 시선 고정 순서를 반복한다.</li>
            <li>중요 포인트일수록 첫 공은 안전 높이로 시작한다.</li>
          </ul>

          <h2>6. 이 글과 훈련 가이드의 역할 구분</h2>
          <p>
            이 글은 경기 중 바로 줄이는 루틴에 초점을 둡니다. 자세 교정, 반복
            드릴, 주간 연습 계획까지 깊게 다루려면{" "}
            <Link href="/blog/tennis-unforced-error-reduction-guide">
              언포스드 에러 훈련 가이드
            </Link>
            를 함께 보면 좋습니다. 여기서는 경기 중 판단을 단순하게 만드는 것이
            목적입니다. 한 경기 안에서 바꿀 수 있는 것은 스윙 전체가 아니라
            목표 높이, 목표 코스, 공격 기준, 포인트 사이 루틴입니다.
          </p>

          <h2>참고한 기준</h2>
          <ul>
            <li>
              <a
                href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
                target="_blank"
                rel="noreferrer"
              >
                ITF Tennis Glossary
              </a>
            </li>
            <li>
              <a
                href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
                target="_blank"
                rel="noreferrer"
              >
                USTA Tips and Instruction
              </a>
            </li>
            <li>
              <Link href="/utility/unforced-error-audit">
                언포스드 에러 진단 도구
              </Link>
            </li>
          </ul>

          <h2>FAQ</h2>
          {faqItems.map((item) => (
            <section key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </section>
          ))}
        </section>
      </article>
    </main>
  );
}
