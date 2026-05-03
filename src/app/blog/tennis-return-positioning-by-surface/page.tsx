import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfrens.com";

export const metadata: Metadata = {
  title: "코트별 리턴 포지션 가이드",
  description: "하드, 클레이, 잔디에서 리턴 위치를 어떻게 다르게 잡아야 하는지 설명합니다.",
  alternates: {
    canonical: `${siteUrl}/blog/tennis-return-positioning-by-surface`,
  },
  openGraph: {
    title: "코트별 리턴 포지션 가이드",
    description: "하드, 클레이, 잔디에서 리턴 위치를 어떻게 다르게 잡아야 하는지 설명합니다.",
    url: `${siteUrl}/blog/tennis-return-positioning-by-surface`,
    type: "article",
    siteName: "TennisFriends",
    locale: "ko_KR",
  },
};

const content = {
  "intro": "하드, 클레이, 잔디에서 리턴 위치를 어떻게 다르게 잡아야 하는지 설명합니다. 이 글은 특히 클레이와 잔디에서 같은 위치를 쓰는 장면에서 흔들리는 동호인 기준으로, 무엇을 먼저 정리해야 하는지와 어떻게 반복해야 하는지를 실전 언어로 설명합니다.",
  "summaryBox": "핵심은 표면별 준비 거리 조정입니다. 좋은 날의 감각이 아니라 반복 가능한 구조를 만들어야 경기에서도 유지됩니다.",
  "keyPoints": [
    "코트별 리턴 포지션 가이드의 차이는 화려함보다 재현 가능한 기준을 만드는 데서 납니다.",
    "대표 장면은 클레이와 잔디에서 같은 위치를 쓰는 장면입니다. 이때 선택 구조가 단순해야 범실이 줄어듭니다.",
    "리턴 인플레이 비율을 추적하면 감각이 아니라 실제 변화를 확인할 수 있습니다."
  ],
  "sections": [
    {
      "id": "principle",
      "title": "핵심 원리",
      "paragraphs": [
        "코트별 리턴 포지션 가이드를 잘하는 선수는 새로운 기술을 하나 더 갖춘 선수가 아니라, 흔들릴 때도 기준을 유지하는 선수입니다. 표면별 준비 거리 조정이 정리돼 있으면 점수와 상대 스타일이 바뀌어도 첫 판단이 무너지지 않습니다.",
        "중요한 것은 한 번 멋진 장면보다 여러 번 반복되는 구조입니다. 실전에서는 완벽한 해답보다 다시 꺼내기 쉬운 기준이 더 강합니다."
      ]
    },
    {
      "id": "application",
      "title": "실전 적용 장면",
      "paragraphs": [
        "클레이와 잔디에서 같은 위치를 쓰는 장면은 많은 동호인이 실제 경기에서 겪는 문제입니다. 이때는 스윙 전체를 바꾸기보다 준비 타이밍, 높이, 목표 구역 중 하나를 먼저 고정해야 합니다.",
        "특히 포인트 사이 생각이 길어지면 다음 선택도 느려집니다. 그래서 기준은 짧고 분명해야 하며, 한 포인트 안에서 한 번만 적용해도 효과가 나야 합니다."
      ]
    },
    {
      "id": "routine",
      "title": "권장 연습 루틴",
      "paragraphs": [
        "가장 효율적인 드릴은 반 걸음 단위 위치 조정 훈련입니다. 핵심은 보기 좋은 훈련이 아니라 핵심 감각이 무너지지 않도록 조건을 제한하는 것입니다.",
        "처음 10분은 기준 확인, 다음 15분은 반복량 확보, 마지막 10분은 점수 조건을 넣는 방식이 좋습니다. 이렇게 해야 연습 감각이 경기 장면으로 넘어갑니다."
      ]
    },
    {
      "id": "review",
      "title": "자주 나오는 실수와 점검 포인트",
      "paragraphs": [
        "가장 흔한 문제는 한 장면이 잘되거나 안됐다는 이유로 다음 선택까지 크게 바꾸는 것입니다. 그러면 리듬이 무너지고 오히려 실수 폭이 커집니다.",
        "그래서 리뷰 기준도 단순해야 합니다. 오늘은 리턴 인플레이 비율 하나만 본다고 정해두면, 다음 연습에서 무엇을 반복할지 빠르게 결정할 수 있습니다."
      ]
    }
  ],
  "checklist": [
    "오늘 연습 목표를 \"표면별 준비 거리 조정\" 한 문장으로 적었다.",
    "클레이와 잔디에서 같은 위치를 쓰는 장면을 가정한 상황 훈련을 넣었다.",
    "리턴 인플레이 비율을 확인할 기록 기준을 정했다.",
    "마지막 10분은 점수 조건을 걸고 실전 전환까지 확인했다."
  ],
  "faq": [] as Array<{ question: string; answer: string }>,
  "nextAction": "다음 세션에서는 반 걸음 단위 위치 조정 훈련을 20분만 실행하고, 끝난 뒤 리턴 인플레이 비율 하나만 기록해 보세요.",
  "utility": "/utility/return-position-calculator",
  "utilityLabel": "리턴 위치 계산기"
} as const;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Strategy</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">코트별 리턴 포지션 가이드</h1>
        <p className="mb-6 text-base leading-7 text-gray-600 dark:text-gray-300">하드, 클레이, 잔디에서 리턴 위치를 어떻게 다르게 잡아야 하는지 설명합니다.</p>

        <div className="mb-8 rounded-2xl bg-emerald-50 p-6 dark:bg-emerald-950/30">
          <h2 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">핵심 요약</h2>
          <p className="leading-7 text-gray-700 dark:text-gray-300">{content.intro}</p>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">{content.summaryBox}</p>
        </div>

        <section className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">이 글에서 먼저 가져갈 것</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {content.keyPoints.map((item) => (
              <li key={item} className="rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-800">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-10">
          {content.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="leading-7 text-gray-700 dark:text-gray-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 rounded-2xl border border-emerald-100 bg-white p-6 dark:border-emerald-900/40 dark:bg-gray-950">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">실전 체크리스트</h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {content.checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {content.faq.length > 0 && (
          <section className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">자주 묻는 질문</h2>
            <div className="space-y-4">
              {content.faq.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-100 p-5 dark:border-gray-800">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{item.question}</h3>
                <p className="leading-7 text-gray-700 dark:text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
        )}
        <div className="mt-10 rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">다음 액션</h2>
          <p className="mb-4 text-sm leading-6 text-gray-700 dark:text-gray-300">{content.nextAction}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={content.utility} className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              {content.utilityLabel}
            </Link>
            <Link href="/utility/training-planner" className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600">
              훈련 플래너
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
