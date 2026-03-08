import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "장비 관리 스케줄러",
  description:
    "라켓, 스트링, 오버그립, 테니스화의 점검 주기를 정리하는 장비 관리 스케줄 가이드입니다.",
  path: "/utility/equipment-maintenance-scheduler",
  type: "website",
  tags: ["테니스 장비 관리", "스트링 교체", "오버그립 관리"],
});

const schedules = [
  {
    label: "매 경기 후",
    tasks: ["그립 젖음 상태 확인", "라켓 프레임 크랙 여부 확인", "신발 밑창 이물질 제거"],
  },
  {
    label: "매주",
    tasks: ["스트링 텐션 체감 변화 기록", "오버그립 마모 체크", "가방 안 소모품 재정비"],
  },
  {
    label: "매월",
    tasks: ["신발 쿠셔닝 저하 점검", "라켓 밸런스 이상 여부 확인", "예비 스트링과 그립 재고 확인"],
  },
] as const;

const signals = [
  "스트링이 예전보다 쉽게 밀리거나 탄도가 높게 뜬다.",
  "오버그립이 미끄럽거나 손에 걸리는 부분이 생긴다.",
  "신발 바깥쪽 밑창 마모가 심해 급정지 때 불안하다.",
  "라켓 프레임에 미세한 균열이나 소리가 느껴진다.",
] as const;

export default function EquipmentMaintenanceSchedulerPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-lime-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Equipment Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">장비 관리 스케줄러</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          장비 관리는 경기력 유지와 부상 예방에 직접 연결됩니다. 이 페이지는 어떤 주기로 무엇을 확인해야
          하는지 빠르게 정리할 수 있도록 만든 기준표입니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/string-replacement-reminder"
            className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            스트링 교체 기준 보기
          </Link>
          <Link
            href="/utility/shoe-wear-tracker"
            className="rounded-full border border-amber-600 px-5 py-2.5 text-sm font-semibold text-amber-700"
          >
            신발 마모 체크 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {schedules.map((schedule) => (
          <article key={schedule.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{schedule.label}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
              {schedule.tasks.map((task) => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">바로 점검해야 하는 신호</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {signals.map((signal) => (
            <article key={signal} className="rounded-2xl bg-gray-50 p-4 text-sm leading-6 text-gray-700">
              {signal}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
