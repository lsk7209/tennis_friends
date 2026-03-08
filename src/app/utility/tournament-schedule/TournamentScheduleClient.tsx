'use client';

import { useMemo, useState } from "react";
import Link from "next/link";

type TournamentLevel = "beginner" | "intermediate" | "advanced";
type TournamentSurface = "hard" | "clay" | "grass";

type Tournament = {
  id: string;
  name: string;
  date: string;
  location: string;
  level: TournamentLevel;
  surface: TournamentSurface;
  format: string;
  fee: number;
  note: string;
};

const tournaments: Tournament[] = [
  {
    id: "seoul-spring",
    name: "서울 스프링 오픈",
    date: "2026-04-18",
    location: "서울",
    level: "advanced",
    surface: "hard",
    format: "단식",
    fee: 50000,
    note: "하드코트 경기 운영 경험이 많은 선수에게 적합합니다.",
  },
  {
    id: "busan-club",
    name: "부산 클럽 챌린지",
    date: "2026-05-03",
    location: "부산",
    level: "intermediate",
    surface: "clay",
    format: "단식",
    fee: 30000,
    note: "클레이 적응과 긴 랠리 운영을 점검하기 좋습니다.",
  },
  {
    id: "incheon-junior-open",
    name: "인천 주말 오픈",
    date: "2026-05-24",
    location: "인천",
    level: "beginner",
    surface: "hard",
    format: "단식",
    fee: 25000,
    note: "첫 공식 경기 경험을 쌓으려는 입문자에게 무난합니다.",
  },
  {
    id: "daegu-doubles",
    name: "대구 더블스 클래식",
    date: "2026-06-14",
    location: "대구",
    level: "advanced",
    surface: "grass",
    format: "복식",
    fee: 45000,
    note: "복식 포메이션과 네트 플레이를 점검하기 좋습니다.",
  },
  {
    id: "jeju-mixed",
    name: "제주 믹스드 페스티벌",
    date: "2026-07-05",
    location: "제주",
    level: "intermediate",
    surface: "hard",
    format: "혼합복식",
    fee: 55000,
    note: "여름 원정 경기 경험과 일정 관리 연습에 적합합니다.",
  },
] as const;

const levelLabels: Record<TournamentLevel, string> = {
  beginner: "입문",
  intermediate: "중급",
  advanced: "상급",
};

const surfaceLabels: Record<TournamentSurface, string> = {
  hard: "하드",
  clay: "클레이",
  grass: "잔디",
};

export default function TournamentScheduleClient() {
  const [location, setLocation] = useState("all");
  const [level, setLevel] = useState("all");

  const filtered = useMemo(() => {
    return tournaments.filter((tournament) => {
      if (location !== "all" && tournament.location !== location) {
        return false;
      }

      if (level !== "all" && tournament.level !== level) {
        return false;
      }

      return true;
    });
  }, [location, level]);

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Schedule Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">테니스 대회 일정 보드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          참가 가능한 대회를 빠르게 좁혀 보려면 지역과 수준부터 정리하는 편이 효율적입니다. 이 보드는 훈련
          계획과 연결해 어떤 대회를 목표로 잡을지 판단하는 용도로 구성했습니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/training-planner"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            훈련 플래너와 연결
          </Link>
          <Link
            href="/utility/tournament-budget-calculator"
            className="rounded-full border border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-700"
          >
            대회 예산 계산기 보기
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-gray-700">
            지역
            <select
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
            >
              <option value="all">전체</option>
              <option value="서울">서울</option>
              <option value="부산">부산</option>
              <option value="인천">인천</option>
              <option value="대구">대구</option>
              <option value="제주">제주</option>
            </select>
          </label>

          <label className="text-sm font-medium text-gray-700">
            수준
            <select
              value={level}
              onChange={(event) => setLevel(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
            >
              <option value="all">전체</option>
              <option value="beginner">입문</option>
              <option value="intermediate">중급</option>
              <option value="advanced">상급</option>
            </select>
          </label>
        </div>
      </section>

      <section className="grid gap-6">
        {filtered.map((tournament) => (
          <article key={tournament.id} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{tournament.name}</h2>
                <p className="mt-2 text-sm leading-6 text-gray-700">{tournament.note}</p>
              </div>
              <div className="rounded-2xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700">
                참가비 {tournament.fee.toLocaleString("ko-KR")}원
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-4">
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                일정
                <div className="mt-1 font-semibold text-gray-900">{tournament.date}</div>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                지역
                <div className="mt-1 font-semibold text-gray-900">{tournament.location}</div>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                수준
                <div className="mt-1 font-semibold text-gray-900">{levelLabels[tournament.level]}</div>
              </div>
              <div className="rounded-2xl bg-gray-50 p-4 text-sm text-gray-700">
                코트 / 형식
                <div className="mt-1 font-semibold text-gray-900">
                  {surfaceLabels[tournament.surface]} / {tournament.format}
                </div>
              </div>
            </div>
          </article>
        ))}

        {filtered.length === 0 ? (
          <article className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center text-sm leading-6 text-gray-700">
            조건에 맞는 대회가 없습니다. 지역 또는 수준 필터를 넓혀 다시 확인해 보세요.
          </article>
        ) : null}
      </section>
    </main>
  );
}
