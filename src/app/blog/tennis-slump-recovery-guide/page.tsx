import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();
const title = "테니스 슬럼프 극복 | 원인 진단·회복 루틴";
const description =
  "테니스 슬럼프 극복을 위한 원인 진단, 훈련량 조절, 멘탈 리셋, 2주 회복 루틴 기준을 정리했습니다.";

const faqItems = [
  {
    question: "테니스 슬럼프가 오면 훈련량을 줄여야 하나요?",
    answer:
      "피로 누적이나 통증이 있으면 줄이는 편이 좋습니다. 단순히 쉬기보다 강도는 낮추고 기본기, 리듬, 회복 수면을 먼저 정상화하세요.",
  },
  {
    question: "슬럼프와 실력 부족은 어떻게 구분하나요?",
    answer:
      "최근에 되던 샷이 갑자기 흔들리고, 불안과 조급함 때문에 같은 실수가 반복되면 슬럼프 가능성이 큽니다. 처음부터 안정적으로 못 하던 기술은 기본기 과제로 봐야 합니다.",
  },
  {
    question: "경기 중 슬럼프 느낌이 오면 무엇부터 해야 하나요?",
    answer:
      "전술을 복잡하게 바꾸기보다 목표를 하나로 줄이세요. 예를 들어 첫 서브 확률, 깊은 크로스 3개, 리턴 중앙 깊이처럼 바로 실행 가능한 기준이 좋습니다.",
  },
  {
    question: "얼마나 지나야 회복되나요?",
    answer:
      "원인에 따라 다르지만 2주 정도 기록과 루틴을 유지하면 패턴이 보입니다. 통증, 수면 문제, 강한 불안이 지속되면 전문가 도움을 받는 것이 안전합니다.",
  },
];

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "테니스 슬럼프",
    "슬럼프 극복",
    "테니스 멘탈",
    "테니스 회복 루틴",
    "경기력 회복",
  ],
  alternates: { canonical: `${siteUrl}/blog/tennis-slump-recovery-guide` },
  openGraph: {
    title,
    description,
    type: "article",
    locale: "ko_KR",
    siteName: "TennisFriends",
    url: `${siteUrl}/blog/tennis-slump-recovery-guide`,
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
          { name: title, item: `${siteUrl}/blog/tennis-slump-recovery-guide` },
        ]}
      />
      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
        <header className="mb-10">
          <p className="mb-3 text-sm font-semibold text-teal-700 dark:text-teal-300">
            테니스 멘탈·회복 가이드
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
            {title}
          </h1>
          <p className="article-summary text-lg leading-8 text-slate-700 dark:text-slate-300">
            테니스 슬럼프는 의지만 약해서 생기는 문제가 아닙니다. 피로, 통증,
            훈련량, 경기 압박, 기술 과제가 섞여 나타나는 신호이므로 기록으로
            원인을 나누고, 작은 성공 기준부터 다시 쌓아야 합니다.
          </p>
        </header>

        <section className="mb-10 rounded-lg border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/40">
          <h2 className="mb-3 text-xl font-bold">먼저 결론</h2>
          <ul className="space-y-2 text-slate-700 dark:text-slate-300">
            <li>슬럼프는 결과보다 원인 패턴을 먼저 기록해야 풀립니다.</li>
            <li>피로형, 기술형, 멘탈형, 전술형을 나눠야 처방이 달라집니다.</li>
            <li>회복 루틴은 강한 훈련보다 낮은 강도의 반복 성공으로 시작합니다.</li>
            <li>통증이나 강한 불안이 지속되면 코치·의료·심리 전문가 도움을 받습니다.</li>
          </ul>
        </section>

        <section className="prose prose-lg max-w-none dark:prose-invert">
          <h2>1. 슬럼프는 실력 저하가 아니라 신호다</h2>
          <p>
            테니스 슬럼프는 갑자기 실력이 사라진 상태가 아닙니다. 평소 되던 샷이
            흔들리고, 쉬운 공에서 조급해지고, 경기 전부터 결과가 걱정되는 상태가
            반복되는 신호입니다. 이때 무조건 더 많이 치면 해결될 것 같지만, 원인이
            피로라면 더 깊은 슬럼프로 들어갈 수 있습니다.
          </p>
          <p>
            운동 수행과 회복은 훈련, 수면, 스트레스, 통증 관리가 함께 움직입니다.
            회복과 스포츠 안전 정보는
            <a
              href="https://www.usta.com/en/home/improve/tips-and-instruction.html"
              target="_blank"
              rel="noreferrer"
            >
              USTA 팁과 인스트럭션
            </a>
            과
            <a
              href="https://www.cdc.gov/physical-activity-basics/guidelines/index.html"
              target="_blank"
              rel="noreferrer"
            >
              CDC 신체활동 가이드라인
            </a>
            처럼 기본 원칙 자료를 함께 참고할 수 있습니다.
          </p>

          <h2>2. 원인을 네 가지로 나눈다</h2>
          <p>
            슬럼프를 "멘탈 문제"로만 보면 해결이 늦어집니다. 실제로는 피로,
            기술, 멘탈, 전술이 섞인 경우가 많습니다. 먼저 최근 2주를 기준으로
            어떤 유형이 가장 강한지 분류하세요. 분류가 되면 훈련 방식도 달라집니다.
          </p>
          <table>
            <thead>
              <tr>
                <th>유형</th>
                <th>주요 신호</th>
                <th>우선 조치</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>피로형</td>
                <td>몸이 무겁고 반응이 늦음</td>
                <td>훈련 강도 30~50% 감소, 수면 회복</td>
              </tr>
              <tr>
                <td>기술형</td>
                <td>특정 샷에서 같은 실수 반복</td>
                <td>한 가지 기술만 낮은 속도로 재점검</td>
              </tr>
              <tr>
                <td>멘탈형</td>
                <td>쉬운 공에서 불안과 조급함</td>
                <td>점수보다 실행 목표 1개 설정</td>
              </tr>
              <tr>
                <td>전술형</td>
                <td>랠리는 되는데 경기에서 무너짐</td>
                <td>서브+1, 리턴 첫 공 패턴 단순화</td>
              </tr>
            </tbody>
          </table>

          <h2>3. 기록 없이는 원인도 반복된다</h2>
          <p>
            슬럼프를 벗어나려면 경기 결과보다 실행 기록이 필요합니다. 졌다는 사실만
            적으면 다음 경기에서도 같은 감정만 남습니다. 대신 "언제 흔들렸는지",
            "어떤 공에서 실수가 났는지", "그날 수면과 컨디션은 어땠는지"를 짧게
            적어야 패턴이 보입니다.
          </p>
          <aside className="not-prose my-6 rounded-lg border border-amber-200 bg-amber-50 p-5 dark:border-amber-800 dark:bg-amber-950/40">
            <h3 className="mb-2 text-lg font-bold text-amber-900 dark:text-amber-200">
              경기 후 3분 기록표
            </h3>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
              <li>오늘 가장 많이 나온 실수는 무엇인가?</li>
              <li>실수가 난 점수 상황은 언제였는가?</li>
              <li>몸 상태, 수면, 통증은 어땠는가?</li>
              <li>잘 된 패턴 한 가지는 무엇인가?</li>
              <li>다음 경기에서 지킬 실행 목표 한 가지는 무엇인가?</li>
            </ol>
          </aside>

          <h2>4. 회복 루틴은 강도를 낮추는 데서 시작한다</h2>
          <p>
            슬럼프 때 가장 위험한 선택은 더 강한 훈련으로 자신을 증명하려는 것입니다.
            이미 피로가 쌓인 상태라면 강한 랠리와 무리한 매치는 실수 기억만 더
            강화합니다. 첫 3~4일은 강도를 낮추고, 라켓 감각과 기본 리듬을 되찾는
            훈련으로 바꾸는 편이 좋습니다.
          </p>
          <ul>
            <li>첫 3일: 강한 매치보다 30분 기본 랠리와 스트레칭</li>
            <li>4~7일: 가장 흔한 실수 샷 하나만 낮은 속도로 교정</li>
            <li>8~10일: 서브+1, 리턴 첫 공처럼 단순한 경기 패턴 복구</li>
            <li>11~14일: 연습 경기에서 실행 목표 1개만 점검</li>
          </ul>

          <h2>5. 경기 중에는 목표를 하나로 줄인다</h2>
          <p>
            경기 중 슬럼프 느낌이 오면 머릿속이 복잡해집니다. 포핸드도 고치고,
            서브도 고치고, 전술도 바꾸려 하면 더 무너집니다. 이때는 목표를 하나로
            줄이는 것이 실전적입니다. 예를 들어 "리턴은 중앙 깊게", "백핸드는
            크로스만", "첫 서브 확률만 올리기"처럼 바로 실행 가능한 문장이 좋습니다.
          </p>
          <p>
            이 방식은 결과를 포기하라는 뜻이 아닙니다. 점수를 직접 통제할 수는
            없지만, 첫 공의 깊이와 코스 선택은 통제할 수 있습니다. 통제 가능한
            행동을 하나씩 되찾으면 불안이 줄고, 다음 포인트에서 몸이 다시 움직이기
            시작합니다.
          </p>

          <h2>6. 2주 회복 루틴</h2>
          <p>
            아래 루틴은 부상이나 의료 문제가 없는 동호인을 기준으로 한 회복 계획입니다.
            통증이 있거나 일상생활에도 영향을 주는 불안이 있다면 훈련 루틴보다
            전문가 상담이 먼저입니다.
          </p>
          <ul>
            <li>1~3일차: 휴식, 수면, 가벼운 스트레칭, 경기 기록 정리</li>
            <li>4~7일차: 50% 강도 랠리, 문제 샷 하나만 느리게 반복</li>
            <li>8~10일차: 서브+1 또는 리턴 첫 공 패턴 20분</li>
            <li>11~14일차: 연습 경기 1세트, 결과 대신 실행 목표 채점</li>
          </ul>

          <h2>마무리</h2>
          <p>
            테니스 슬럼프 극복의 핵심은 자신을 더 몰아붙이는 것이 아니라 원인을
            나누고 회복 가능한 순서로 다시 쌓는 것입니다. 피로를 줄이고, 기록을
            남기고, 작은 실행 목표를 지키면 경기력은 다시 올라옵니다. 슬럼프는
            약점이 아니라 다음 단계로 넘어가기 전 나타나는 점검 신호로 다루세요.
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
            현재 경기력과 실력 기준을 객관적으로 점검하세요.
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
