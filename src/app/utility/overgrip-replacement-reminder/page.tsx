import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "오버그립 교체 알림 가이드",
  description:
    "땀, 미끄러움, 표면 마모 상태를 기준으로 오버그립 교체 시점을 판단하는 테니스 장비 관리 가이드입니다.",
  path: "/utility/overgrip-replacement-reminder",
  type: "website",
  tags: ["오버그립 교체", "테니스 그립 관리", "테니스 장비"],
});

const levels = [
  {
    label: "가벼운 플레이",
    rule: "주 1회 기준 2~3주",
    note: "실내 위주이거나 땀이 적은 편이면 조금 더 길게 사용할 수 있습니다.",
  },
  {
    label: "보통 플레이",
    rule: "주 2~3회 기준 1~2주",
    note: "미끄러움이 느껴지기 시작하면 교체 시기를 넘긴 경우가 많습니다.",
  },
  {
    label: "강한 플레이",
    rule: "주 4회 이상 기준 경기 전 수시 교체",
    note: "땀이 많거나 여름철 야외 경기라면 훨씬 자주 갈아야 손 감각이 안정됩니다.",
  },
] as const;

const signs = [
  "손에서 라켓이 미세하게 도는 느낌이 든다.",
  "그립 표면이 반질거리며 끈적임이 사라졌다.",
  "끝부분이 들뜨거나 찢어진 부분이 생겼다.",
  "서브나 강한 포핸드에서 손에 힘이 과하게 들어간다.",
] as const;

export default function OvergripReplacementReminderPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 via-white to-emerald-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-green-700">Equipment Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">오버그립 교체 알림 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          오버그립은 손 감각과 안정감에 직접 영향을 줍니다. 교체를 미루면 스윙이 미세하게 흔들리고 불필요한
          힘이 들어가기 쉬워집니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/grip-size-checker"
            className="rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            그립 사이즈 체크
          </Link>
          <Link
            href="/utility/equipment-maintenance-scheduler"
            className="rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-700"
          >
            장비 관리 스케줄러
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {levels.map((level) => (
          <article key={level.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-green-700">{level.rule}</p>
            <h2 className="mt-2 text-xl font-bold text-gray-900">{level.label}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{level.note}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">바꿔야 한다는 신호</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {signs.map((sign) => (
            <article key={sign} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
              {sign}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
