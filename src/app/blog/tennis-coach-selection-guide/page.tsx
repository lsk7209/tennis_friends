import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "테니스 코치 선택 가이드 | 레벨·목적별 기준";
const description =
  "테니스 코치 선택 기준을 초보, 중급, 상급, 비용, 자격, 소통 방식으로 점검합니다.";

const faqItems = [
  {
    question: "초보자는 선수 출신 코치가 무조건 좋은가요?",
    answer:
      "아닙니다. 초보자는 선수 경력보다 설명력, 반복 교정, 안전한 기본기 지도 능력이 더 중요합니다.",
  },
  {
    question: "체험 레슨에서는 무엇을 봐야 하나요?",
    answer:
      "코치가 내 문제를 하나로 좁혀 설명하는지, 다음 연습 과제를 주는지, 질문에 구체적으로 답하는지를 보세요.",
  },
  {
    question: "개인 레슨과 그룹 레슨 중 무엇이 좋나요?",
    answer:
      "기본기 교정은 개인 레슨이 빠르고, 실전 감각과 비용 효율은 그룹 레슨이 좋습니다. 입문 첫 달은 개인 레슨 비중을 높이는 편이 안전합니다.",
  },
  {
    question: "코치를 바꿔야 하는 신호는 무엇인가요?",
    answer:
      "매번 같은 말만 반복하거나, 통증을 무시하거나, 목표 대비 훈련 계획이 없는 상태가 이어지면 교체를 검토하세요.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "테니스 코치 선택",
    "테니스 레슨",
    "테니스 코치",
    "레슨 팁",
    "생활스포츠지도사",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-coach-selection-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-coach-selection-guide`,
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
          { name: title, item: `${siteUrl}/blog/tennis-coach-selection-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-sky-700 dark:text-sky-300">
            테니스 레슨 선택 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            테니스 코치는 실력보다 목표 적합성으로 골라야 합니다. 초보자는
            설명력과 안전한 기본기, 중급자는 약점 분석, 상급자는 경기 전략과
            데이터 피드백을 기준으로 보세요.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-sky-200 bg-sky-50 p-5 dark:border-sky-800 dark:bg-sky-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>초보자는 자세를 쉽게 설명하고 통증 신호를 보는 코치가 좋습니다.</li>
            <li>중급자는 영상 피드백, 약점 분석, 실전 드릴이 있는지 확인합니다.</li>
            <li>상급자는 경기 운영, 패턴 설계, 대회 준비 경험을 봅니다.</li>
            <li>자격과 평판은 참고하되 체험 레슨의 피드백 품질로 최종 판단합니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 초보자는 설명력과 안전 기준이 먼저다</h2>
          <p>
            테니스를 처음 배우는 사람에게 가장 위험한 코치는 말을 많이 하는
            코치가 아니라, 어려운 말을 쉽게 바꾸지 못하는 코치입니다. 초보자는
            그립, 준비 자세, 타점, 스윙 궤도, 발 위치를 한 번에 모두 고칠 수
            없습니다. 좋은 코치는 오늘 고칠 한 가지를 정하고, 다음 레슨까지
            반복할 과제를 남깁니다.
          </p>
          <p>
            첫 달에는 강한 공을 치게 만드는 것보다 통증 없이 반복할 수 있는
            동작을 만드는 것이 중요합니다. 손목, 팔꿈치, 어깨 통증을 "원래
            처음엔 아픈 것"으로 넘기는 코치보다, 라켓 무게와 그립, 준비 동작을
            함께 점검하는 코치를 선택하세요.
          </p>

          <h2>2. 중급자는 약점 분석과 실전 연결을 본다</h2>
          <p>
            중급자에게 필요한 코칭은 "더 낮게, 더 빨리" 같은 일반 조언이
            아닙니다. 예를 들어 백핸드가 밀린다면 준비가 늦은 것인지, 타점이
            몸에 붙은 것인지, 공을 보는 시간이 짧은 것인지 원인을 나눠야
            합니다. 코치가 원인을 분리하지 못하면 레슨을 받아도 같은 실수가
            반복됩니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>레벨</th>
                <th>좋은 코칭 신호</th>
                <th>주의 신호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>초보</td>
                <td>한 번에 한 가지 과제만 제시</td>
                <td>용어가 많고 설명이 추상적</td>
              </tr>
              <tr>
                <td>중급</td>
                <td>영상·랠리 상황으로 약점 분석</td>
                <td>드릴은 많은데 경기 연결이 없음</td>
              </tr>
              <tr>
                <td>상급</td>
                <td>패턴, 상대 분석, 대회 루틴 설계</td>
                <td>폼 교정만 반복하고 전술 피드백이 없음</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 자격과 경력은 확인하되 과신하지 않는다</h2>
          <p>
            코치의 자격과 경력은 신뢰도를 보는 출발점입니다. 국가 체육지도자
            자격은
            <a href="https://sqms.kspo.or.kr/" target="_blank" rel="noreferrer">
              국민체육진흥공단 체육지도자 홈페이지
            </a>
            에서 제도와 자격 정보를 확인할 수 있습니다. 다만 자격증이 있다고
            모든 학습자에게 잘 맞는 것은 아니고, 선수 출신이라고 초보 설명력이
            자동으로 좋은 것도 아닙니다.
          </p>
          <p>
            반대로 자격만 없다고 무조건 배제할 필요도 없습니다. 성인 동호인
            지도 경험, 레슨 커리큘럼, 부상 예방 지식, 레슨 후 피드백 습관을
            함께 봐야 합니다. 중요한 것은 내 목표를 달성할 수 있는 구조를
            제시하는지입니다.
          </p>

          <h2>4. 비용은 시간당 단가보다 피드백 밀도로 비교한다</h2>
          <p>
            레슨비가 비싸도 20분 내내 공만 공급하면 효율이 낮습니다. 반대로
            짧은 레슨이라도 문제 진단, 교정 드릴, 개인 연습 과제가 명확하면
            만족도가 높습니다. 상담할 때는 "몇 분 수업인가요?"뿐 아니라
            "레슨 후 연습 과제를 주시나요?", "영상 피드백이 가능한가요?"를
            물어보세요.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              체험 레슨 체크리스트
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>오늘의 핵심 문제를 한 문장으로 설명했는가?</li>
              <li>내 몸 상태와 통증 여부를 먼저 물어봤는가?</li>
              <li>교정 전후 차이를 직접 느끼게 했는가?</li>
              <li>다음 레슨 전까지 할 개인 연습을 줬는가?</li>
              <li>질문했을 때 구체적인 이유와 기준을 답했는가?</li>
            </ol>
          </aside>

          <h2>5. 안전과 윤리 기준도 선택 조건이다</h2>
          <p>
            스포츠 지도에서는 기술만큼 안전한 관계가 중요합니다. 폭언, 과도한
            신체 접촉, 통증 무시, 사적인 연락 강요는 좋은 코칭이 아닙니다.
            체육계 인권침해와 스포츠 비리 신고·상담 경로는
            <a href="https://www.k-sec.or.kr/" target="_blank" rel="noreferrer">
              스포츠윤리센터
            </a>
            를 통해 확인할 수 있습니다. 특히 유소년 레슨은 보호자 관찰 가능
            여부와 촬영·피드백 방식까지 확인해야 합니다.
          </p>

          <h2>마무리</h2>
          <p>
            테니스 코치 선택은 가장 유명한 사람을 고르는 일이 아니라, 내 목표를
            가장 빨리 이해하고 안전하게 반복하게 해주는 사람을 찾는 일입니다.
            체험 레슨을 최소 1회 진행하고, 레벨별 기준표와 체크리스트를 놓고
            비교하면 후회할 확률을 크게 줄일 수 있습니다.
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
            코치를 고르기 전에 내 레벨을 먼저 확인하세요.
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
