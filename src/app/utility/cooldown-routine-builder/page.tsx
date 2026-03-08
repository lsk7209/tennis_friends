import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "쿨다운 루틴 빌더",
  description:
    "훈련 뒤 피로를 줄이고 다음 세션 회복 속도를 높이기 위한 테니스 쿨다운 루틴 가이드입니다.",
  path: "/utility/cooldown-routine-builder",
  type: "website",
  tags: ["테니스 회복", "쿨다운 루틴", "훈련 후 스트레칭"],
});

const steps = [
  {
    title: "심박수 내리기",
    detail: "강한 랠리나 경기 뒤에는 바로 멈추지 말고 3분 정도 천천히 걷거나 가볍게 움직입니다.",
  },
  {
    title: "하체 중심 스트레칭",
    detail: "종아리, 햄스트링, 둔근, 고관절 주변을 중심으로 긴장을 풀어줍니다.",
  },
  {
    title: "어깨와 전완 정리",
    detail: "서브와 포핸드 사용량이 많았다면 어깨 회전근개와 전완 스트레칭을 꼭 넣습니다.",
  },
  {
    title: "수분과 기록",
    detail: "수분을 보충하고 몸 상태를 한 줄이라도 기록해 두면 다음 훈련 조절에 도움이 됩니다.",
  },
] as const;

const tips = [
  "시합 직후 다리가 무거우면 강한 스트레칭보다 가벼운 워킹부터 시작합니다.",
  "팔꿈치와 손목 피로가 큰 날은 전완 이완 시간을 조금 더 확보합니다.",
  "하드코트에서 오래 뛰었다면 발바닥과 종아리 케어를 우선합니다.",
] as const;

export default function CooldownRoutineBuilderPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">Recovery Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">쿨다운 루틴 빌더</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          쿨다운은 운동이 끝난 뒤의 부가 동작이 아니라 다음 세션 컨디션을 만드는 과정입니다. 경기나 훈련 강도에
          따라 최소한의 정리 루틴을 유지하면 피로 누적을 크게 줄일 수 있습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/recovery-routine-generator"
            className="rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            회복 루틴 보기
          </Link>
          <Link
            href="/utility/warmup-routine-builder"
            className="rounded-full border border-cyan-600 px-5 py-2.5 text-sm font-semibold text-cyan-700"
          >
            워밍업 루틴 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-cyan-700">Step {index + 1}</p>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{step.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{step.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">상황별 팁</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
