"use client";

import { useMemo, useState } from "react";
import { Copy, RefreshCw, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import NaverCafeLink from "@/components/NaverCafeLink";
import UtilityResultLinks from "@/components/UtilityResultLinks";
import {
  formatRotationText,
  generateRotation,
  parsePlayerNames,
  ROTATION_LIMITS,
  ROTATION_MODEL_VERSION,
  type RotationResult,
} from "@/lib/doubles-rotation";

const DEFAULT_NAMES = ["민수", "서연", "지훈", "하은", "도윤", "수빈", "현우", "예린", "준호", "지아"].join("\n");
const INITIAL_SEED = 20260929;
const COPY_FEEDBACK_MS = 2000;

const NEXT_LINKS = [
  { href: "/utility/doubles-positioning-simulator", title: "복식 포지션 시뮬레이터", description: "서브·리턴 상황별로 두 사람이 어디에 서는지 확인합니다." },
  { href: "/utility/partner-compatibility-check", title: "파트너 궁합 체크", description: "함께 뛸 파트너와 플레이 성향이 맞는지 점검합니다." },
  { href: "/utility/warmup-routine-builder", title: "워밍업 루틴 빌더", description: "모임 시작 전 10분 워밍업 순서를 만듭니다." },
];

function RoundCard({ round }: { round: RotationResult["rounds"][number] }) {
  return (
    <Card className="border-slate-200 dark:border-slate-700 dark:bg-slate-900">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg text-slate-900 dark:text-white">{round.round}라운드</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {round.matches.map((match) => (
          <div key={match.court} className="rounded-md bg-slate-50 p-3 text-sm dark:bg-slate-800">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">코트 {match.court}</p>
            <p className="mt-1 font-medium text-slate-900 dark:text-slate-100">
              {match.teamA.join(" · ")} <span className="px-1 text-slate-400">vs</span> {match.teamB.join(" · ")}
            </p>
          </div>
        ))}
        {round.resting.length > 0 && (
          <p className="text-sm text-slate-600 dark:text-slate-300">휴식: {round.resting.join(", ")}</p>
        )}
      </CardContent>
    </Card>
  );
}

function PlayerSummaryTable({ result }: { result: RotationResult }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <caption className="sr-only">참가자별 경기 수, 휴식 수, 만난 파트너 수</caption>
        <thead>
          <tr className="border-b border-slate-200 text-left text-slate-600 dark:border-slate-700 dark:text-slate-300">
            <th scope="col" className="p-2">이름</th>
            <th scope="col" className="p-2 text-right">경기</th>
            <th scope="col" className="p-2 text-right">휴식</th>
            <th scope="col" className="p-2 text-right">다른 파트너</th>
          </tr>
        </thead>
        <tbody>
          {result.players.map((player) => (
            <tr key={player.name} className="border-b border-slate-100 last:border-0 dark:border-slate-800">
              <td className="p-2 font-medium text-slate-900 dark:text-slate-100">{player.name}</td>
              <td className="p-2 text-right">{player.games}</td>
              <td className="p-2 text-right">{player.rests}</td>
              <td className="p-2 text-right">{player.distinctPartners}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function DoublesRotationClient() {
  const [rawNames, setRawNames] = useState(DEFAULT_NAMES);
  const [courts, setCourts] = useState("2");
  const [rounds, setRounds] = useState("5");
  const [seed, setSeed] = useState(INITIAL_SEED);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle");

  const names = useMemo(() => parsePlayerNames(rawNames), [rawNames]);
  const outcome = useMemo(
    () => generateRotation({ names, courts: Number(courts), rounds: Number(rounds), seed }),
    [names, courts, rounds, seed],
  );
  const result = "error" in outcome ? null : outcome;

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(formatRotationText(result));
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.setTimeout(() => setCopyState("idle"), COPY_FEEDBACK_MS);
  };

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 text-slate-900 dark:text-slate-100">
        <header className="mb-8 max-w-3xl">
          <Badge className="bg-emerald-700 text-white">동호회 모임 도구</Badge>
          <h1 className="mt-3 text-3xl font-bold md:text-4xl">복식 로테이션·대진표 생성기</h1>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            참가자와 코트 수를 넣으면 라운드별 복식 조를 짭니다. 휴식은 고르게 돌리고, 같은 파트너가 반복되지 않게 배치합니다.
            입력한 이름은 이 브라우저 안에서만 계산되며 저장·전송되지 않습니다.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <Card className="h-fit border-slate-200 dark:border-slate-700 dark:bg-slate-900">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg text-slate-900 dark:text-white">
                <Users className="h-5 w-5" aria-hidden="true" /> 모임 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="rotation-names">참가자 이름 (줄바꿈 또는 쉼표로 구분)</Label>
                <textarea
                  id="rotation-names"
                  value={rawNames}
                  onChange={(event) => setRawNames(event.target.value)}
                  rows={8}
                  className="w-full rounded-md border border-slate-300 bg-white p-3 text-sm text-slate-900 focus-visible:outline-2 focus-visible:outline-emerald-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-100"
                  aria-describedby="rotation-names-count"
                />
                <p id="rotation-names-count" className="text-xs text-slate-500 dark:text-slate-400">
                  현재 {names.length}명 · {ROTATION_LIMITS.minPlayers}~{ROTATION_LIMITS.maxPlayers}명
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label htmlFor="rotation-courts">코트 수</Label>
                  <Input id="rotation-courts" type="number" inputMode="numeric" min={ROTATION_LIMITS.minCourts} max={ROTATION_LIMITS.maxCourts} step={1} value={courts} onChange={(event) => setCourts(event.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rotation-rounds">라운드 수</Label>
                  <Input id="rotation-rounds" type="number" inputMode="numeric" min={ROTATION_LIMITS.minRounds} max={ROTATION_LIMITS.maxRounds} step={1} value={rounds} onChange={(event) => setRounds(event.target.value)} />
                </div>
              </div>
              {"error" in outcome && (
                <p role="alert" className="text-sm font-semibold text-red-700 dark:text-red-400">{outcome.error}</p>
              )}
              <div className="flex flex-wrap gap-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setSeed((value) => value + 1)} disabled={!result}>
                  <RefreshCw aria-hidden="true" /> 다시 섞기
                </Button>
                <Button type="button" variant="outline" size="sm" onClick={handleCopy} disabled={!result}>
                  <Copy aria-hidden="true" /> 텍스트 복사
                </Button>
              </div>
              <p aria-live="polite" className="min-h-5 text-xs text-slate-600 dark:text-slate-300">
                {copyState === "copied" && "대진표를 복사했습니다. 단톡방이나 카페에 붙여 넣으세요."}
                {copyState === "failed" && "복사하지 못했습니다. 화면을 길게 눌러 직접 복사해 주세요."}
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {result && (
              <>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  코트 {result.courtsUsed}면 사용 · 라운드당 {result.courtsUsed * 4}명 경기
                  {result.repeatedPartnerPairs > 0
                    ? ` · 인원·라운드 조건상 파트너 반복 ${result.repeatedPartnerPairs}쌍`
                    : " · 파트너 반복 없음"}
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  {result.rounds.map((round) => <RoundCard key={round.round} round={round} />)}
                </div>
                <Card className="border-slate-200 dark:border-slate-700 dark:bg-slate-900">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-slate-900 dark:text-white">참가자별 요약</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <PlayerSummaryTable result={result} />
                  </CardContent>
                </Card>
              </>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-400">
              규칙: 휴식이 적고 경기가 많은 사람부터 쉬고, 파트너 반복을 가장 크게, 같은 상대 반복을 작게 감점해 배치합니다. 실력 균형은 고려하지 않습니다. · 모델 {ROTATION_MODEL_VERSION}
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-lg border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950">
          <h2 className="text-lg font-bold text-emerald-900 dark:text-emerald-100">모임 대진을 카페에서 공유하세요</h2>
          <p className="mt-2 text-sm text-emerald-900/80 dark:text-emerald-100/80">
            복사한 대진표를 TennisFriends 네이버 카페 게시판에 올려 모임 공지로 쓸 수 있습니다.
          </p>
          <Button asChild className="mt-4">
            <NaverCafeLink ctaLocation="doubles_rotation_result" linkText="네이버 카페 방문하기" aria-label="네이버 카페 테니스프렌즈 새 창에서 열기">
              네이버 카페 방문하기 →
            </NaverCafeLink>
          </Button>
        </section>
      </div>
      <UtilityResultLinks links={NEXT_LINKS} source="doubles-rotation" ctaLocation="doubles_rotation_next" />
    </>
  );
}
