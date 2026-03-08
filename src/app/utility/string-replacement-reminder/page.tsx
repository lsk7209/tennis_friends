import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "스트링 교체 알림 가이드",
  description:
    "플레이 빈도와 타구 감각 변화에 맞춰 테니스 스트링 교체 시점을 판단하는 실전 가이드입니다.",
  path: "/utility/string-replacement-reminder",
  type: "website",
  tags: ["테니스 스트링", "스트링 교체 주기", "장비 관리"],
});

const playerTypes = [
  {
    label: "주 1회 이하 플레이어",
    recommendation: "2~3개월마다 점검",
    details: "스트링이 끊어지지 않아도 반발력과 감각이 둔해지면 교체하는 편이 좋습니다.",
  },
  {
    label: "주 2~3회 플레이어",
    recommendation: "4~6주마다 점검",
    details: "시합과 훈련을 병행하면 텐션 저하가 빨리 체감됩니다. 월 단위 체크를 추천합니다.",
  },
  {
    label: "주 4회 이상 플레이어",
    recommendation: "2~4주마다 점검",
    details: "강한 스핀이나 하드히팅이 많다면 끊어지기 전에도 성능 저하가 먼저 옵니다.",
  },
] as const;

const warningSigns = [
  "타구가 길게 뜨고 컨트롤이 흔들린다.",
  "스트링이 쉽게 밀리고 원래 자리로 잘 돌아오지 않는다.",
  "임팩트 때 둔탁한 느낌이 강해졌다.",
  "팔이나 손목에 평소보다 충격이 크게 느껴진다.",
] as const;

export default function StringReplacementReminderPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-blue-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Equipment Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">스트링 교체 알림 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          스트링은 끊어질 때까지 쓰는 소모품이 아닙니다. 텐션 저하와 타구 감각 변화를 기준으로 교체 주기를
          잡아야 스윙 리듬과 팔 컨디션을 안정적으로 유지할 수 있습니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/string-tension"
            className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            스트링 텐션 가이드 보기
          </Link>
          <Link
            href="/utility/equipment-maintenance-scheduler"
            className="rounded-full border border-sky-600 px-5 py-2.5 text-sm font-semibold text-sky-700"
          >
            장비 관리 스케줄러 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {playerTypes.map((type) => (
          <article key={type.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">{type.recommendation}</p>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{type.label}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{type.details}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">교체 전 확인할 질문</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
            <li>최근 한 달 동안 플레이 빈도가 늘었는가</li>
            <li>시합에서 평소보다 공이 길게 나가는가</li>
            <li>임팩트 감각이 무디거나 불쾌한 진동이 느껴지는가</li>
            <li>팔꿈치나 손목 피로가 전보다 커졌는가</li>
          </ul>
        </article>

        <article className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">교체 신호</h2>
          <div className="mt-4 grid gap-3">
            {warningSigns.map((sign) => (
              <div key={sign} className="rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700">
                {sign}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}
