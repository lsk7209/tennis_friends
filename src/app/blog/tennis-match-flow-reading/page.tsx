import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "테니스 경기 흐름 읽기 | 모멘텀·전환점·전술 변화";
const description =
  "테니스 경기 흐름을 읽는 모멘텀 신호, 전환점 판단, 전술 변화와 포인트 사이 루틴을 정리했습니다.";

const faqItems = [
  {
    question: "테니스 경기 흐름은 점수만 보면 되나요?",
    answer:
      "아닙니다. 점수는 결과이고, 흐름은 첫 서브 성공률, 리턴 깊이, 랠리 길이, 언포스드 에러 위치, 상대의 템포 변화 같은 반복 신호에서 먼저 보입니다.",
  },
  {
    question: "모멘텀이 상대에게 넘어갔을 때 바로 바꿔야 할 것은 무엇인가요?",
    answer:
      "전술 전체를 바꾸기보다 다음 포인트의 첫 공 목표를 하나로 줄이는 것이 좋습니다. 예를 들어 첫 서브를 몸쪽으로 넣기, 리턴을 중앙 깊게 보내기처럼 바로 실행 가능한 기준이 필요합니다.",
  },
  {
    question: "전술 변화는 몇 게임마다 해야 하나요?",
    answer:
      "정해진 주기보다 같은 패턴으로 2게임 이상 밀릴 때가 기준입니다. 먼저 코스, 그다음 깊이, 마지막으로 템포를 바꾸면 경기 운영이 산만해지지 않습니다.",
  },
  {
    question: "복식에서도 경기 흐름 읽기 기준이 같은가요?",
    answer:
      "큰 원칙은 같지만 복식은 리턴 방향, 첫 발리 성공률, 전위 움직임, 파트너와의 포지션 간격을 더 비중 있게 봐야 합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: ["테니스 경기 흐름", "모멘텀", "전환점", "전술 변화", "경기 운영"],
  alternates: { canonical: `${siteUrl}/blog/tennis-match-flow-reading` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-match-flow-reading`,
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
          { name: title, item: `${siteUrl}/blog/tennis-match-flow-reading` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 경기 운영 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            테니스 경기 흐름은 분위기나 감으로만 읽는 것이 아닙니다. 점수, 첫 서브 성공률,
            리턴 깊이, 랠리 길이, 상대의 템포 변화를 묶어 보면 모멘텀이 언제 넘어오는지와
            전술 변화를 언제 걸어야 하는지가 보입니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>경기 흐름은 스코어보다 반복 신호에서 먼저 흔들립니다.</li>
            <li>모멘텀을 되찾으려면 다음 포인트 목표를 하나로 줄여야 합니다.</li>
            <li>전환점은 브레이크 포인트뿐 아니라 0-30, 15-30, 4-4 같은 작은 구간에서도 옵니다.</li>
            <li>전술 변화는 코스, 깊이, 템포 순서로 바꾸는 편이 가장 안정적입니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 경기 흐름은 점수보다 패턴에서 보인다</h2>
          <p>
            초보자는 3-0으로 앞서면 흐름이 좋고, 1-4로 밀리면 흐름이 나쁘다고 판단하기 쉽습니다.
            하지만 실전에서는 점수보다 먼저 움직이는 신호가 있습니다. 내 첫 서브가 계속 네트에
            걸리는지, 리턴이 서비스 박스 안에 짧게 떨어지는지, 상대가 같은 코스로만 공격해도 내가
            늦게 반응하는지부터 봐야 합니다. 이런 신호는 스코어가 무너지기 전에 이미 나타납니다.
          </p>
          <p>
            경기 흐름을 잘 읽는 선수는 감정 표현보다 반복되는 장면을 기억합니다. 예를 들어
            "상대가 포핸드 크로스에서 세 번 연속 깊게 밀었다", "내 백핸드 리턴이 계속 중앙으로
            짧아졌다"처럼 장면을 언어로 붙이면 다음 선택이 분명해집니다. ITF의
            <a
              href="https://www.itftennis.com/en/about-us/organisation/tennis-glossary/"
              target="_blank"
              rel="noreferrer"
            >
              테니스 용어 자료
            </a>
            처럼 기본 개념을 확인해 두면 코트 위에서 상황을 더 정확히 이름 붙일 수 있습니다.
          </p>

          <h2>2. 모멘텀 신호를 숫자로 나눈다</h2>
          <p>
            모멘텀은 눈에 보이지 않지만 숫자로 쪼개면 관리할 수 있습니다. 가장 먼저 볼 것은 첫
            서브 성공률입니다. 첫 서브가 들어가지 않으면 상대는 리턴 위치를 앞으로 당기고, 내 두
            번째 공은 방어적으로 바뀝니다. 두 번째는 리턴 깊이입니다. 리턴이 짧아지는 순간 상대의
            첫 공격권이 늘어나고, 랠리 시작부터 수비 포지션에 묶입니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>신호</th>
                <th>흐름이 좋은 상태</th>
                <th>흐름이 넘어가는 상태</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>첫 서브</td>
                <td>상대가 리턴 위치를 쉽게 못 잡음</td>
                <td>세컨드 서브 랠리가 반복됨</td>
              </tr>
              <tr>
                <td>리턴 깊이</td>
                <td>베이스라인 근처로 상대를 밀어냄</td>
                <td>서비스 박스 근처에 짧게 떨어짐</td>
              </tr>
              <tr>
                <td>랠리 길이</td>
                <td>내가 원하는 길이로 조절함</td>
                <td>상대가 짧게 끊거나 길게 끌고 감</td>
              </tr>
              <tr>
                <td>언포스드 에러</td>
                <td>무리한 선택이 적음</td>
                <td>같은 코스에서 반복 실수</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 전환점은 미리 정해 두면 늦지 않는다</h2>
          <p>
            전환점은 매치 포인트 같은 극적인 순간에만 오지 않습니다. 리턴 게임에서 0-30을 만든
            순간, 내 서브 게임에서 15-30으로 밀린 순간, 세트 후반 4-4나 5-5에서 맞는 첫 포인트도
            모두 흐름을 바꿀 수 있는 구간입니다. 이때마다 새 전술을 즉흥적으로 만들면 판단이 늦고
            몸이 굳습니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              경기 중 전환점 체크리스트
            </h3>
            <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>0-30 또는 15-30에서 첫 공 목표가 정해져 있는가?</li>
              <li>브레이크 포인트에서 무리한 위너를 먼저 찾고 있지 않은가?</li>
              <li>듀스가 반복될 때 같은 패턴으로만 시작하고 있지 않은가?</li>
              <li>세트 4-4 이후 리턴 위치와 서브 코스를 의식적으로 바꾸고 있는가?</li>
              <li>연속 3실점 후 다음 포인트 목표를 하나로 줄였는가?</li>
            </ul>
          </aside>

          <h2>4. 흐름이 나쁠 때는 목표를 하나로 줄인다</h2>
          <p>
            흐름이 넘어갔을 때 가장 흔한 실수는 모든 것을 한꺼번에 고치려는 것입니다. 서브도
            세게 넣고, 코스도 바꾸고, 네트 대시도 시도하면 선택지가 많아져 오히려 실행이 늦습니다.
            이때는 다음 포인트에서 통제 가능한 목표 하나만 남겨야 합니다. "리턴을 중앙 깊게",
            "첫 서브는 몸쪽", "백핸드는 크로스로만"처럼 문장 하나로 줄이면 몸이 다시 움직입니다.
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
            에서도 기술을 상황별로 나누어 보는 접근이 많습니다. 경기 중에는 완벽한 해답보다
            바로 실행할 수 있는 단순한 기준이 더 중요합니다.
          </p>

          <h2>5. 전술 변화는 코스·깊이·템포 순서로 한다</h2>
          <p>
            전술 변화는 크게 세 층으로 나눌 수 있습니다. 첫째는 코스 변화입니다. 계속 크로스로만
            치다가 한 번 다운더라인을 섞거나, 상대 백핸드로만 몰다가 몸쪽으로 보내는 방식입니다.
            둘째는 깊이 변화입니다. 베이스라인 깊은 공과 짧은 각도를 섞으면 상대의 발 위치가
            흔들립니다. 셋째는 템포 변화입니다. 빠르게 몰아붙이다가 높은 루프볼이나 슬라이스로
            시간을 빼앗는 식입니다.
          </p>
          <p>
            순서를 지키는 이유는 단순합니다. 코스는 가장 작게 바꿀 수 있고, 깊이는 체력과 타점
            조절이 필요하며, 템포 변화는 리듬을 크게 건드립니다. 경기 흐름이 불안한데 처음부터
            템포까지 크게 바꾸면 내 실수가 더 늘 수 있습니다. 그래서 먼저 코스 하나를 바꾸고, 그
            다음 깊이, 마지막으로 템포를 조절하는 편이 안전합니다.
          </p>

          <h2>6. 포인트 사이 20초 루틴을 만든다</h2>
          <p>
            경기 흐름 읽기는 포인트가 진행되는 동안만 하는 일이 아닙니다. 포인트 사이 20초 안에
            숨을 고르고, 직전 포인트의 원인을 한 단어로 정리하고, 다음 포인트의 첫 공 목표를 정해야
            합니다. 이 루틴이 없으면 실점 직후 감정이 다음 포인트로 넘어옵니다.
          </p>
          <ul>
            <li>5초: 숨을 길게 내쉬고 시선을 라켓 줄이나 코트 바닥에 둔다.</li>
            <li>5초: 직전 포인트를 실수, 상대 압박, 선택 미스로만 분류한다.</li>
            <li>5초: 다음 첫 공의 코스와 높이를 정한다.</li>
            <li>5초: 스플릿 스텝 타이밍과 준비 자세를 확인한다.</li>
          </ul>

          <h2>마무리</h2>
          <p>
            테니스 경기 흐름 읽기의 핵심은 감을 믿는 것이 아니라 반복되는 신호를 붙잡는 것입니다.
            첫 서브, 리턴 깊이, 랠리 길이, 언포스드 에러, 세트 후반 점수대를 함께 보면 모멘텀은
            훨씬 빨리 보입니다. 흐름이 좋을 때는 강점을 반복하고, 흐름이 넘어갈 때는 목표를 하나로
            줄인 뒤 코스, 깊이, 템포 순서로 전술을 바꾸면 경기 운영이 안정됩니다.
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
            현재 경기 운영 수준과 실력 기준을 함께 확인해 보세요.
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
