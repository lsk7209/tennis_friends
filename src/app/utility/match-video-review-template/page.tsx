"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ──────────────────────────── types ──────────────────────────── */

type CourtType = "하드" | "클레이" | "잔디" | "카펫";

interface Checkpoint {
  id: string;
  label: string;
  checked: boolean;
  note: string;
}

interface ReviewCategory {
  title: string;
  icon: string;
  checkpoints: Checkpoint[];
}

interface MatchInfo {
  opponent: string;
  date: string;
  score: string;
  court: CourtType | null;
}

/* ──────────────────────────── initial data ──────────────────────── */


function createCategories(): ReviewCategory[] {
  return [
    {
      title: "서브 & 리턴",
      icon: "🎯",
      checkpoints: [
        { id: "s1", label: "퍼스트 서브 성공률이 50% 이상이었다", checked: false, note: "" },
        { id: "s2", label: "세컨드 서브 이후 공격적 전개가 가능했다", checked: false, note: "" },
        { id: "s3", label: "서브 방향을 의도적으로 분배했다", checked: false, note: "" },
        { id: "s4", label: "리턴 시 적절한 포지션을 잡았다", checked: false, note: "" },
        { id: "s5", label: "중요 포인트에서 서브 패턴을 변화시켰다", checked: false, note: "" },
        { id: "s6", label: "더블 폴트 없이 안정적으로 넣었다", checked: false, note: "" },
      ],
    },
    {
      title: "랠리 전개",
      icon: "🔄",
      checkpoints: [
        { id: "r1", label: "주도권을 잡는 볼을 의식적으로 구사했다", checked: false, note: "" },
        { id: "r2", label: "반복되는 실수 패턴을 인지하고 수정했다", checked: false, note: "" },
        { id: "r3", label: "상대 약점을 공략하는 전술을 사용했다", checked: false, note: "" },
        { id: "r4", label: "긴 랠리에서 인내심을 유지했다", checked: false, note: "" },
        { id: "r5", label: "결정타 타이밍을 적절히 잡았다", checked: false, note: "" },
      ],
    },
    {
      title: "네트 플레이",
      icon: "🏐",
      checkpoints: [
        { id: "n1", label: "네트 접근 타이밍이 적절했다", checked: false, note: "" },
        { id: "n2", label: "발리 시 컨트롤이 안정적이었다", checked: false, note: "" },
        { id: "n3", label: "로브 대응이 빨랐다", checked: false, note: "" },
        { id: "n4", label: "네트 포지셔닝이 올바랐다", checked: false, note: "" },
      ],
    },
    {
      title: "멘탈 & 루틴",
      icon: "🧠",
      checkpoints: [
        { id: "m1", label: "실점 후 빠르게 리셋했다", checked: false, note: "" },
        { id: "m2", label: "포인트 사이 루틴을 일정하게 유지했다", checked: false, note: "" },
        { id: "m3", label: "위기 상황에서 침착한 판단을 했다", checked: false, note: "" },
        { id: "m4", label: "세트 후반까지 집중력을 유지했다", checked: false, note: "" },
        { id: "m5", label: "감정에 흔들리지 않고 플레이했다", checked: false, note: "" },
      ],
    },
  ];
}

/* ──────────────────────────── option button ──────────────────── */

function CourtButton({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: CourtType;
  selected: CourtType | null;
  onSelect: (v: CourtType) => void;
}) {
  const isActive = selected === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
        isActive
          ? "border-fuchsia-500 bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-700 hover:border-fuchsia-300 hover:bg-fuchsia-50"
      }`}
    >
      {label}
    </button>
  );
}

/* ──────────────────────────── main page ──────────────────────── */

export default function MatchVideoReviewTemplatePage() {
  const [matchInfo, setMatchInfo] = useState<MatchInfo>({
    opponent: "",
    date: "",
    score: "",
    court: null,
  });
  const [categories, setCategories] = useState<ReviewCategory[]>(createCategories);
  const [showSummary, setShowSummary] = useState(false);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<"info" | "review" | "summary">("info");

  const infoComplete = matchInfo.opponent.trim() !== "" && matchInfo.date !== "" && matchInfo.court !== null;

  const handleStartReview = useCallback(() => {
    if (!infoComplete) return;
    setStep("review");
  }, [infoComplete]);

  const toggleCheckpoint = useCallback((catIdx: number, cpIdx: number) => {
    setCategories((prev) => {
      const next = prev.map((cat, ci) =>
        ci === catIdx
          ? {
              ...cat,
              checkpoints: cat.checkpoints.map((cp, cpi) =>
                cpi === cpIdx ? { ...cp, checked: !cp.checked } : cp,
              ),
            }
          : cat,
      );
      return next;
    });
  }, []);

  const updateNote = useCallback((catIdx: number, cpIdx: number, note: string) => {
    setCategories((prev) => {
      const next = prev.map((cat, ci) =>
        ci === catIdx
          ? {
              ...cat,
              checkpoints: cat.checkpoints.map((cp, cpi) =>
                cpi === cpIdx ? { ...cp, note } : cp,
              ),
            }
          : cat,
      );
      return next;
    });
  }, []);

  const handleShowSummary = useCallback(() => {
    setShowSummary(true);
    setStep("summary");
  }, []);

  const handleBackToReview = useCallback(() => {
    setShowSummary(false);
    setStep("review");
  }, []);

  const handleReset = useCallback(() => {
    setMatchInfo({ opponent: "", date: "", score: "", court: null });
    setCategories(createCategories());
    setShowSummary(false);
    setCopied(false);
    setStep("info");
  }, []);

  // Calculate stats
  const totalChecked = categories.reduce(
    (sum, cat) => sum + cat.checkpoints.filter((cp) => cp.checked).length,
    0,
  );
  const totalCheckpoints = categories.reduce((sum, cat) => sum + cat.checkpoints.length, 0);
  const overallScore = Math.round((totalChecked / totalCheckpoints) * 100);

  const categoryStats = categories.map((cat) => ({
    title: cat.title,
    icon: cat.icon,
    checked: cat.checkpoints.filter((cp) => cp.checked).length,
    total: cat.checkpoints.length,
    notes: cat.checkpoints.filter((cp) => cp.note.trim() !== "").map((cp) => `- ${cp.label}: ${cp.note}`),
  }));

  // Copy to clipboard
  const handleCopy = useCallback(async () => {
    const lines: string[] = [
      "=== 경기 영상 복기 ===",
      "",
      `상대: ${matchInfo.opponent}`,
      `날짜: ${matchInfo.date}`,
      `스코어: ${matchInfo.score || "미입력"}`,
      `코트: ${matchInfo.court}`,
      `종합 점수: ${overallScore}% (${totalChecked}/${totalCheckpoints})`,
      "",
    ];

    for (const stat of categoryStats) {
      lines.push(`[${stat.icon} ${stat.title}] ${stat.checked}/${stat.total}`);
      const checkedItems = categories
        .find((c) => c.title === stat.title)
        ?.checkpoints.filter((cp) => cp.checked)
        .map((cp) => `  ✓ ${cp.label}`);
      if (checkedItems) lines.push(...checkedItems);
      if (stat.notes.length > 0) {
        lines.push("  메모:");
        lines.push(...stat.notes.map((n) => `  ${n}`));
      }
      lines.push("");
    }

    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
      const textarea = document.createElement("textarea");
      textarea.value = lines.join("\n");
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [matchInfo, overallScore, totalChecked, totalCheckpoints, categoryStats, categories]);

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      {/* ── Hero ── */}
      <section className="rounded-3xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
          Analysis Utility
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">경기 영상 복기 템플릿</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          경기 정보를 입력하고 4가지 카테고리의 체크포인트를 점검하세요. 서브, 랠리, 네트 플레이,
          멘탈까지 구조적으로 복기하면 다음 경기에서 바로 활용할 수 있습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/match-analyzer"
            className="rounded-full bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            경기 분석으로 이어서 보기
          </Link>
          <Link
            href="/utility/match-recorder"
            className="rounded-full border border-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-fuchsia-700"
          >
            경기 기록과 함께 쓰기
          </Link>
        </div>
      </section>

      {/* ── Step 1: Match Info ── */}
      {step === "info" && (
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">경기 정보</h2>
          <p className="mt-1 text-sm text-gray-500">복기할 경기의 기본 정보를 입력하세요.</p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-gray-800">상대 이름 *</label>
              <input
                type="text"
                value={matchInfo.opponent}
                onChange={(e) => setMatchInfo((p) => ({ ...p, opponent: e.target.value }))}
                placeholder="상대 선수 이름"
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">날짜 *</label>
              <input
                type="date"
                value={matchInfo.date}
                onChange={(e) => setMatchInfo((p) => ({ ...p, date: e.target.value }))}
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">스코어</label>
              <input
                type="text"
                value={matchInfo.score}
                onChange={(e) => setMatchInfo((p) => ({ ...p, score: e.target.value }))}
                placeholder="예: 6-4, 3-6, 7-5"
                className="mt-1.5 w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-fuchsia-400 focus:ring-2 focus:ring-fuchsia-100"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-800">코트 종류 *</label>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {(["하드", "클레이", "잔디", "카펫"] as CourtType[]).map((v) => (
                  <CourtButton
                    key={v}
                    label={v}
                    value={v}
                    selected={matchInfo.court}
                    onSelect={(ct) => setMatchInfo((p) => ({ ...p, court: ct }))}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            disabled={!infoComplete}
            onClick={handleStartReview}
            className={`mt-8 w-full rounded-2xl px-6 py-3.5 text-base font-bold transition-all ${
              infoComplete
                ? "bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg hover:from-fuchsia-600 hover:to-pink-600"
                : "cursor-not-allowed bg-gray-100 text-gray-400"
            }`}
          >
            복기 시작
          </button>
        </section>
      )}

      {/* ── Step 2: Review Checklist ── */}
      {step === "review" && (
        <>
          {/* Match info bar */}
          <section className="flex flex-wrap items-center gap-4 rounded-3xl border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-pink-50 p-5 shadow-sm">
            <span className="text-sm font-bold text-gray-800">vs {matchInfo.opponent}</span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-fuchsia-700 shadow-sm">
              {matchInfo.date}
            </span>
            {matchInfo.score && (
              <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-pink-700 shadow-sm">
                {matchInfo.score}
              </span>
            )}
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-600 shadow-sm">
              {matchInfo.court}코트
            </span>
            <span className="ml-auto text-sm font-bold text-fuchsia-700">
              {totalChecked}/{totalCheckpoints} 체크
            </span>
          </section>

          {/* Categories */}
          {categories.map((cat, catIdx) => (
            <section
              key={cat.title}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
                <span className="ml-auto rounded-full bg-fuchsia-50 px-3 py-1 text-xs font-bold text-fuchsia-700">
                  {cat.checkpoints.filter((cp) => cp.checked).length}/{cat.checkpoints.length}
                </span>
              </div>

              <div className="mt-4 space-y-3">
                {cat.checkpoints.map((cp, cpIdx) => (
                  <div
                    key={cp.id}
                    className={`rounded-2xl border p-4 transition-all ${
                      cp.checked ? "border-fuchsia-200 bg-fuchsia-50/50" : "border-gray-100 bg-gray-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        type="button"
                        onClick={() => toggleCheckpoint(catIdx, cpIdx)}
                        className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border-2 text-xs transition-all ${
                          cp.checked
                            ? "border-fuchsia-500 bg-fuchsia-500 text-white"
                            : "border-gray-300 bg-white text-transparent hover:border-fuchsia-300"
                        }`}
                      >
                        &#10003;
                      </button>
                      <span
                        className={`text-sm font-medium ${
                          cp.checked ? "text-gray-900" : "text-gray-600"
                        }`}
                      >
                        {cp.label}
                      </span>
                    </div>
                    <input
                      type="text"
                      value={cp.note}
                      onChange={(e) => updateNote(catIdx, cpIdx, e.target.value)}
                      placeholder="메모 (선택)"
                      className="mt-2 w-full rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 outline-none transition-colors placeholder:text-gray-400 focus:border-fuchsia-300 focus:ring-1 focus:ring-fuchsia-100"
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Action buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={() => setStep("info")}
              className="rounded-2xl border border-fuchsia-400 px-6 py-3 text-sm font-bold text-fuchsia-600 transition-colors hover:bg-fuchsia-50"
            >
              경기 정보 수정
            </button>
            <button
              type="button"
              onClick={handleShowSummary}
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-pink-600"
            >
              요약 보기
            </button>
          </div>
        </>
      )}

      {/* ── Step 3: Summary ── */}
      {step === "summary" && showSummary && (
        <>
          {/* Overall score */}
          <section className="rounded-3xl border border-fuchsia-200 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-8 text-center shadow-sm">
            <p className="text-sm font-semibold text-fuchsia-600">종합 점수</p>
            <p className="mt-2 text-6xl font-black text-gray-900">{overallScore}%</p>
            <p className="mt-2 text-sm text-gray-500">
              {totalChecked}/{totalCheckpoints} 항목 달성 | vs {matchInfo.opponent} | {matchInfo.date}
            </p>
            {matchInfo.score && (
              <p className="mt-1 text-lg font-bold text-fuchsia-700">{matchInfo.score}</p>
            )}
          </section>

          {/* Category breakdown */}
          <section className="grid gap-4 sm:grid-cols-2">
            {categoryStats.map((stat) => {
              const pct = Math.round((stat.checked / stat.total) * 100);
              return (
                <article
                  key={stat.title}
                  className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{stat.icon}</span>
                    <h3 className="text-lg font-bold text-gray-900">{stat.title}</h3>
                    <span className="ml-auto text-lg font-black text-fuchsia-600">{pct}%</span>
                  </div>
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-gray-500">
                    {stat.checked}/{stat.total} 항목 달성
                  </p>
                  {stat.notes.length > 0 && (
                    <div className="mt-3 space-y-1 border-t border-gray-100 pt-3">
                      <p className="text-xs font-semibold text-gray-600">메모</p>
                      {stat.notes.map((n, i) => (
                        <p key={i} className="text-xs leading-5 text-gray-500">
                          {n}
                        </p>
                      ))}
                    </div>
                  )}
                </article>
              );
            })}
          </section>

          {/* Action buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={handleBackToReview}
              className="rounded-2xl border border-fuchsia-400 px-6 py-3 text-sm font-bold text-fuchsia-600 transition-colors hover:bg-fuchsia-50"
            >
              체크리스트로 돌아가기
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className="rounded-2xl bg-gradient-to-r from-fuchsia-500 to-pink-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-fuchsia-600 hover:to-pink-600"
            >
              {copied ? "복사 완료!" : "리뷰 저장 (복사)"}
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-2xl border border-gray-300 px-6 py-3 text-sm font-bold text-gray-600 transition-colors hover:bg-gray-50"
            >
              새 리뷰
            </button>
          </div>
        </>
      )}
    </main>
  );
}
