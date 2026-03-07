import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://tennisfrens.com";

export const metadata: Metadata = {
  title: "복식 네트 플레이어 가이드",
  description: "복식에서 네트 플레이어가 위치, 리액션, 마무리를 어떻게 가져가야 하는지 설명합니다.",
  alternates: {
    canonical: `${siteUrl}/blog/tennis-doubles-net-player-guide`,
  },
  openGraph: {
    title: "복식 네트 플레이어 가이드",
    description: "복식에서 네트 플레이어가 위치, 리액션, 마무리를 어떻게 가져가야 하는지 설명합니다.",
    url: `${siteUrl}/blog/tennis-doubles-net-player-guide`,
    type: "article",
    siteName: "TennisFriends",
    locale: "ko_KR",
  },
};

const sections = [
  {
    "id": "overview",
    "title": "핵심 요약",
    "body": "복식 네트 플레이어 가이드의 핵심은 한 가지 원칙으로 정리할 수 있습니다. 복식에서 네트 플레이어가 위치, 리액션, 마무리를 어떻게 가져가야 하는지 설명합니다. 이 글은 실제 경기와 연습에서 바로 적용할 수 있는 기준을 빠르게 정리하는 데 초점을 둡니다."
  },
  {
    "id": "common-mistakes",
    "title": "자주 나오는 실수",
    "body": "많은 동호인은 상황을 단순 기술 문제로만 해석하지만, 실제로는 준비 타이밍과 선택의 문제가 더 큽니다. 복식 네트 플레이어 가이드를 다룰 때는 무리한 스피드보다 안정적인 반복과 명확한 의사결정이 먼저입니다."
  },
  {
    "id": "practical-drills",
    "title": "실전 적용 방법",
    "body": "연습에서는 목표를 한 번에 여러 개 두지 않는 편이 효율적입니다. 한 세션에는 한 가지 패턴만 반복하고, 다음 세션에서 속도와 정확도를 올리는 식으로 접근해야 복식 네트 플레이어 가이드의 효과가 실제 경기력으로 연결됩니다."
  },
  {
    "id": "checklist",
    "title": "체크리스트",
    "body": "훈련 전 목표 설정, 훈련 중 반복 수 기록, 훈련 후 피드백 정리라는 세 단계를 유지하면 개선 속도가 빨라집니다. 이 구조를 통해 복식 네트 플레이어 가이드 관련 훈련을 단발성 팁이 아니라 누적형 시스템으로 바꿀 수 있습니다."
  }
] as const;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12">
      <article className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Doubles</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">복식 네트 플레이어 가이드</h1>
        <p className="mb-8 text-base leading-7 text-gray-600 dark:text-gray-300">복식에서 네트 플레이어가 위치, 리액션, 마무리를 어떻게 가져가야 하는지 설명합니다.</p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">{section.title}</h2>
              <p className="leading-7 text-gray-700 dark:text-gray-300">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">다음 액션</h2>
          <p className="mb-4 text-sm leading-6 text-gray-700 dark:text-gray-300">
            읽고 끝내지 말고, 오늘 훈련에서 한 가지 기준만 바로 적용해 보세요.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/utility/ntrp-test" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              NTRP 테스트
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
