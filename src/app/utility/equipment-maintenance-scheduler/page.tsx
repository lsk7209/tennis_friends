"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ──────────────────────────── types ──────────────────────────── */

type StringType = "폴리" | "나일론" | "하이브리드";
type RacketCount = 1 | 2 | 3 | 4;

interface Equipment {
  rackets: RacketCount;
  stringType: StringType;
  overgrip: boolean;
  shoes: boolean;
}

interface ScheduleItem {
  item: string;
  cycle: string;
  detail: string;
  monthInterval: number;
  icon: string;
}

/* ──────────────────────────── schedule logic ──────────────────── */


function generateSchedule(equipment: Equipment, frequency: number): ScheduleItem[] {
  const items: ScheduleItem[] = [];

  // String replacement schedule
  const stringWeeks = equipment.stringType === "폴리"
    ? Math.max(2, Math.round(16 / frequency))
    : equipment.stringType === "나일론"
      ? Math.max(3, Math.round(24 / frequency))
      : Math.max(2, Math.round(20 / frequency)); // hybrid

  const stringLabel = equipment.stringType === "폴리"
    ? "폴리 스트링"
    : equipment.stringType === "나일론"
      ? "나일론 스트링"
      : "하이브리드 스트링";

  items.push({
    item: "스트링 교체",
    cycle: `약 ${stringWeeks}주마다`,
    detail: `${stringLabel} 기준, 주 ${frequency}회 사용 시. 라켓 ${equipment.rackets}개를 순환 사용하면 각 라켓당 약 ${Math.round(stringWeeks * equipment.rackets / 1)}주 간격.`,
    monthInterval: Math.round((stringWeeks / 4.3) * 10) / 10,
    icon: "🎸",
  });

  // Overgrip replacement
  if (equipment.overgrip) {
    const gripSessions = Math.max(2, Math.round(8 / Math.sqrt(frequency)));
    items.push({
      item: "오버그립 교체",
      cycle: `${gripSessions}회 플레이마다`,
      detail: `주 ${frequency}회 기준 약 ${Math.max(1, Math.round(gripSessions / frequency))}주에 한 번. 땀이 많거나 여름철에는 더 자주 교체하세요.`,
      monthInterval: Math.round((gripSessions / frequency / 4.3) * 10) / 10,
      icon: "🤚",
    });
  }

  // Shoe replacement
  if (equipment.shoes) {
    const shoeMonths = Math.max(3, Math.round(18 / frequency));
    items.push({
      item: "테니스화 교체",
      cycle: `약 ${shoeMonths}개월마다`,
      detail: `주 ${frequency}회 사용 시 밑창 마모 기준. 하드코트에서는 약 ${Math.max(2, shoeMonths - 2)}개월, 클레이에서는 ${shoeMonths + 1}개월 정도 가능합니다.`,
      monthInterval: shoeMonths,
      icon: "👟",
    });
  }

  // Racket inspection
  const racketMonths = Math.max(3, Math.round(12 / Math.sqrt(frequency)));
  items.push({
    item: "라켓 점검",
    cycle: `매 ${racketMonths}개월`,
    detail: `프레임 크랙, 그로밋 마모, 밸런스 변화 확인. 라켓 ${equipment.rackets}개 모두 동일하게 점검하세요.`,
    monthInterval: racketMonths,
    icon: "🎾",
  });

  return items;
}

/* ──────────────────────────── timeline ──────────────────────────── */

function generateTimeline(schedule: ScheduleItem[]): { month: number; events: string[] }[] {
  const timeline: { month: number; events: string[] }[] = [];

  for (let m = 1; m <= 12; m++) {
    const events: string[] = [];
    for (const item of schedule) {
      if (item.monthInterval > 0 && m % Math.max(1, Math.round(item.monthInterval)) === 0) {
        events.push(item.item);
      }
    }
    timeline.push({ month: m, events });
  }

  return timeline;
}

/* ──────────────────────────── option button ──────────────────── */

function OptionButton<T extends string | number>({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: T;
  selected: T | null;
  onSelect: (v: T) => void;
}) {
  const isActive = selected === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
        isActive
          ? "border-slate-500 bg-gradient-to-r from-slate-600 to-gray-700 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-700 hover:border-slate-400 hover:bg-slate-50"
      }`}
    >
      {label}
    </button>
  );
}

function ToggleButton({
  label,
  active,
  onToggle,
}: {
  label: string;
  active: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
        active
          ? "border-slate-500 bg-gradient-to-r from-slate-600 to-gray-700 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-700 hover:border-slate-400 hover:bg-slate-50"
      }`}
    >
      {active ? "✓ " : ""}{label}
    </button>
  );
}

/* ──────────────────────────── month names ──────────────────────── */

const MONTH_NAMES = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

/* ──────────────────────────── main page ──────────────────────── */

export default function EquipmentMaintenanceSchedulerPage() {
  const [racketCount, setRacketCount] = useState<RacketCount | null>(null);
  const [stringType, setStringType] = useState<StringType | null>(null);
  const [overgrip, setOvergrip] = useState(true);
  const [shoes, setShoes] = useState(true);
  const [frequency, setFrequency] = useState<number | null>(null);
  const [schedule, setSchedule] = useState<ScheduleItem[] | null>(null);

  const allSelected = racketCount !== null && stringType !== null && frequency !== null;

  const handleGenerate = useCallback(() => {
    if (!allSelected) return;
    const equip: Equipment = {
      rackets: racketCount,
      stringType: stringType,
      overgrip,
      shoes,
    };
    setSchedule(generateSchedule(equip, frequency));
  }, [racketCount, stringType, overgrip, shoes, frequency, allSelected]);

  const handleReset = useCallback(() => {
    setSchedule(null);
  }, []);

  const timeline = schedule ? generateTimeline(schedule) : [];

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      {/* ── Hero ── */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-gray-100 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
          Equipment Utility
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">장비 관리 스케줄러</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          보유 장비와 사용 빈도를 입력하면 스트링, 오버그립, 테니스화, 라켓 점검의 맞춤 교체 주기를
          자동으로 계산해드립니다. 장비 컨디션을 놓치지 마세요.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/string-replacement-reminder"
            className="rounded-full bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white"
          >
            스트링 교체 기준 보기
          </Link>
          <Link
            href="/utility/shoe-wear-tracker"
            className="rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-700"
          >
            신발 마모 체크 보기
          </Link>
        </div>
      </section>

      {/* ── Selection Form ── */}
      {!schedule && (
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">장비 설정</h2>
          <p className="mt-1 text-sm text-gray-500">보유 장비와 사용 빈도를 선택하세요.</p>

          {/* 라켓 수 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">🎾 라켓 수</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {([1, 2, 3, 4] as RacketCount[]).map((v) => (
                <OptionButton key={v} label={`${v}개`} value={v} selected={racketCount} onSelect={setRacketCount} />
              ))}
            </div>
          </div>

          {/* 스트링 종류 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">🎸 스트링 종류</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["폴리", "나일론", "하이브리드"] as StringType[]).map((v) => (
                <OptionButton key={v} label={v} value={v} selected={stringType} onSelect={setStringType} />
              ))}
            </div>
          </div>

          {/* 추가 장비 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">🧤 추가 장비</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <ToggleButton label="오버그립" active={overgrip} onToggle={() => setOvergrip(!overgrip)} />
              <ToggleButton label="테니스화" active={shoes} onToggle={() => setShoes(!shoes)} />
            </div>
          </div>

          {/* 사용 빈도 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">📅 주간 사용 빈도</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((v) => (
                <OptionButton key={v} label={`주 ${v}회`} value={v} selected={frequency} onSelect={setFrequency} />
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            type="button"
            disabled={!allSelected}
            onClick={handleGenerate}
            className={`mt-8 w-full rounded-2xl px-6 py-3.5 text-base font-bold transition-all ${
              allSelected
                ? "bg-gradient-to-r from-slate-700 to-gray-800 text-white shadow-lg hover:from-slate-800 hover:to-gray-900"
                : "cursor-not-allowed bg-gray-100 text-gray-400"
            }`}
          >
            스케줄 생성
          </button>
        </section>
      )}

      {/* ── Generated Schedule ── */}
      {schedule && (
        <>
          {/* Summary bar */}
          <section className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-50 to-gray-100 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-sm font-bold text-white">
                {schedule.length}
              </span>
              <span className="text-sm font-semibold text-gray-800">관리 항목</span>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              라켓 {racketCount}개
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              {stringType} 스트링
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
              주 {frequency}회
            </span>
          </section>

          {/* Schedule cards */}
          <section className="grid gap-4 sm:grid-cols-2">
            {schedule.map((item, idx) => (
              <article
                key={item.item}
                className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-slate-600 to-gray-700 text-sm font-bold text-white shadow">
                  {idx + 1}
                </span>
                <div className="ml-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{item.item}</h3>
                  </div>
                  <p className="mt-2 text-xl font-bold text-slate-700">{item.cycle}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.detail}</p>
                </div>
              </article>
            ))}
          </section>

          {/* 12-month timeline */}
          <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">12개월 관리 타임라인</h2>
            <p className="mt-1 text-sm text-gray-500">각 월에 예정된 관리 항목을 확인하세요.</p>
            <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {timeline.map((t) => (
                <div
                  key={t.month}
                  className={`rounded-2xl border p-3 text-center transition-all ${
                    t.events.length > 0
                      ? "border-slate-300 bg-gradient-to-b from-slate-50 to-gray-100 shadow-sm"
                      : "border-gray-100 bg-gray-50"
                  }`}
                >
                  <p className={`text-sm font-bold ${t.events.length > 0 ? "text-slate-800" : "text-gray-400"}`}>
                    {MONTH_NAMES[t.month - 1]}
                  </p>
                  {t.events.length > 0 ? (
                    <div className="mt-2 space-y-1">
                      {t.events.map((e) => (
                        <p key={e} className="rounded-lg bg-white px-1.5 py-0.5 text-[10px] font-semibold text-slate-700 shadow-sm">
                          {e}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-2 text-[10px] text-gray-300">-</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Maintenance tips */}
          <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">빠른 점검 체크리스트</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "스트링이 밀리거나 탄도가 높게 뜨면 즉시 교체",
                "오버그립이 미끄럽거나 표면이 갈라지면 교체",
                "신발 바깥쪽 밑창이 닳아 급정지가 불안하면 교체",
                "라켓 프레임에서 이상한 소리나 미세 균열 발견 시 점검",
                "비 온 뒤 장비는 반드시 건조 후 보관",
                "여름철에는 오버그립 교체 주기를 50% 단축",
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2 rounded-2xl bg-white p-3 text-sm text-gray-700 shadow-sm">
                  <span className="mt-0.5 text-slate-500">&#10003;</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reset button */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-2xl border border-slate-500 px-6 py-3 text-sm font-bold text-slate-700 transition-colors hover:bg-slate-50"
            >
              다시 설정하기
            </button>
            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-2xl bg-gradient-to-r from-slate-700 to-gray-800 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-slate-800 hover:to-gray-900"
            >
              같은 설정으로 재생성
            </button>
          </div>
        </>
      )}
    </main>
  );
}
