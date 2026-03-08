import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "연습 드릴 구성 가이드",
  description:
    "포핸드, 백핸드, 리턴, 발밑 스텝 과제를 상황에 맞게 조합하는 테니스 연습 드릴 가이드입니다.",
  path: "/utility/practice-drill-generator",
  type: "website",
  tags: ["테니스 연습", "드릴 구성", "훈련 계획"],
});

const drillGroups = [
  {
    title: "기본기 유지",
    examples: ["크로스 랠리 20구 유지", "짧은 볼 처리 후 복귀", "백핸드 깊이 유지 드릴"],
  },
  {
    title: "실전 연결",
    examples: ["서브 플러스 원 패턴", "리턴 후 첫 랠리 방향 선택", "어프로치 후 첫 발리 연결"],
  },
  {
    title: "풋워크 강화",
    examples: ["좌우 이동 후 회복 스텝", "짧은 볼 진입과 후퇴", "오픈 스탠스에서 균형 회복"],
  },
] as const;

const setupRules = [
  "한 세션에 핵심 주제는 1개만 두고, 보조 드릴 1~2개를 붙입니다.",
  "난도가 올라갈수록 반복 횟수보다 정확한 성공 기준을 먼저 정합니다.",
  "드릴 끝에는 반드시 점수 상황이나 압박 요소를 조금 넣어 실전과 연결합니다.",
] as const;

export default function PracticeDrillGeneratorPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Training Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">연습 드릴 구성 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          좋은 드릴은 많이 하는 드릴이 아니라 현재 문제를 정확히 겨냥하는 드릴입니다. 이 페이지는 세션 목적에
          따라 어떤 연습을 묶어야 하는지 빠르게 정리하기 위한 기준표입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/training-planner"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            훈련 플래너와 연결
          </Link>
          <Link
            href="/utility/practice-wall-drill-planner"
            className="rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700"
          >
            벽치기 드릴 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {drillGroups.map((group) => (
          <article key={group.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{group.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
              {group.examples.map((example) => (
                <li key={example}>{example}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">드릴 설계 원칙</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {setupRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
