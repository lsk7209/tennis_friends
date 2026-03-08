import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 시간 배분 플래너",
  description:
    "주간 가용 시간에 맞춰 레슨, 랠리, 체력, 회복 시간을 배분하는 테니스 시간 관리 가이드입니다.",
  path: "/utility/tennis-time-availability-planner",
  type: "website",
  tags: ["테니스 시간 관리", "주간 훈련 계획", "테니스 플래너"],
});

const weeklyPlans = [
  {
    hours: "주 3시간 이하",
    focus: "기본기 유지",
    items: [
      "기술 훈련 1회, 경기 또는 랠리 1회로 단순하게 구성합니다.",
      "짧은 시간일수록 서브, 리턴, 발밑 스텝처럼 효율 높은 과제에 집중합니다.",
      "회복 시간을 빼먹지 말고 최소 15분 스트레칭을 포함합니다.",
    ],
  },
  {
    hours: "주 4~6시간",
    focus: "균형형 루틴",
    items: [
      "기술 훈련 2회, 실전 1회, 체력 또는 회복 세션 1회를 추천합니다.",
      "평일 짧은 훈련과 주말 긴 세션을 섞으면 피로 누적을 줄일 수 있습니다.",
      "매주 한 가지 테마를 정해 반복하면 실전 전환 속도가 빨라집니다.",
    ],
  },
  {
    hours: "주 7시간 이상",
    focus: "성장 가속",
    items: [
      "기술, 전술, 체력, 회복을 모두 분리해 계획하는 편이 좋습니다.",
      "강한 세션 다음 날은 회복 또는 저강도 드릴로 강약을 조절합니다.",
      "경기 영상 복기나 기록 시간을 따로 확보하면 성장 속도가 빨라집니다.",
    ],
  },
] as const;

const checklist = [
  "이번 주 경기 일정이 있는가",
  "회복이 필요한 통증이나 피로가 있는가",
  "서브, 리턴, 랠리 중 가장 시급한 과제가 무엇인가",
  "혼자 훈련할지 파트너와 훈련할지 정해졌는가",
] as const;

export default function TennisTimeAvailabilityPlannerPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Planning Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">테니스 시간 배분 플래너</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          훈련 시간이 부족할수록 무엇을 뺄지보다 무엇을 남길지가 중요합니다. 이 페이지는 주간 가용 시간을
          기준으로 기술 훈련, 실전, 체력, 회복을 어떻게 나눌지 빠르게 정리할 수 있도록 만든 가이드입니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/training-planner"
            className="rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            훈련 플래너로 이어서 보기
          </Link>
          <Link
            href="/utility/match-recorder"
            className="rounded-full border border-emerald-600 px-5 py-2.5 text-sm font-semibold text-emerald-700"
          >
            경기 기록과 함께 쓰기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {weeklyPlans.map((plan) => (
          <article key={plan.hours} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-700">{plan.hours}</p>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{plan.focus}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
              {plan.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">주간 계획 세우는 순서</h2>
          <ol className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
            <li>1. 이번 주 가능한 총 시간을 먼저 숫자로 적습니다.</li>
            <li>2. 경기 일정이 있으면 경기 이틀 전 강한 훈련을 줄입니다.</li>
            <li>3. 가장 급한 기술 과제 하나만 정해 핵심 세션에 배치합니다.</li>
            <li>4. 회복 시간과 이동 시간을 포함해 실제 가능한 스케줄로 줄입니다.</li>
          </ol>
        </article>

        <aside className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">체크리스트</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </section>
    </main>
  );
}
