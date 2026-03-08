import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "워밍업 루틴 빌더",
  description:
    "경기 전과 훈련 전 상황에 맞춰 이동, 가동성, 임팩트 감각 루틴을 구성하는 테니스 워밍업 가이드입니다.",
  path: "/utility/warmup-routine-builder",
  type: "website",
  tags: ["테니스 워밍업", "경기 전 준비", "훈련 루틴"],
});

const routine = [
  {
    phase: "1단계",
    title: "몸 온도 올리기",
    detail: "가벼운 조깅, 스킵, 사이드 스텝으로 3~5분 정도 체온을 올립니다.",
  },
  {
    phase: "2단계",
    title: "가동성 열기",
    detail: "어깨 회전, 엉덩이 회전, 햄스트링 동작을 넣어 큰 관절부터 열어줍니다.",
  },
  {
    phase: "3단계",
    title: "테니스 움직임 연결",
    detail: "스플릿 스텝, 첫 발 반응, 짧은 스윙 그림자로 경기 동작에 가까워지게 만듭니다.",
  },
  {
    phase: "4단계",
    title: "임팩트 감각 맞추기",
    detail: "미니테니스, 짧은 랠리, 서브 모션 리허설로 손 감각과 리듬을 맞춥니다.",
  },
] as const;

const situations = [
  "아침 첫 경기라 몸이 무겁다면 가동성과 첫 발 반응 시간을 늘립니다.",
  "추운 날씨에는 정적 스트레칭보다 계속 움직이는 동작 위주가 좋습니다.",
  "서브 감각이 불안하면 마지막 단계에서 토스와 리듬 체크를 따로 넣습니다.",
] as const;

export default function WarmupRoutineBuilderPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">Training Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">워밍업 루틴 빌더</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          좋은 워밍업은 단순히 몸을 푸는 과정이 아니라 첫 게임의 집중력과 발 반응을 끌어올리는 준비 과정입니다.
          이 페이지는 훈련 전이나 경기 전에 바로 적용할 수 있는 기본 루틴을 정리합니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/cooldown-routine-builder"
            className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            쿨다운 루틴 보기
          </Link>
          <Link
            href="/utility/focus-training"
            className="rounded-full border border-rose-600 px-5 py-2.5 text-sm font-semibold text-rose-700"
          >
            집중 훈련과 연결
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {routine.map((step) => (
          <article key={step.phase} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-rose-700">{step.phase}</p>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{step.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">상황별 조정 팁</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {situations.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
