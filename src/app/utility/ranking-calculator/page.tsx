'use client';

import { useMemo, useState } from 'react';
import { Calculator, Plus, Target, Trophy, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Result = 'win' | 'loss';
type Level = 'local' | 'regional' | 'national';

interface Match {
  id: string;
  opponentRank: number;
  result: Result;
  level: Level;
}

export default function RankingCalculatorPage() {
  const [currentRank, setCurrentRank] = useState(800);
  const [currentPoints, setCurrentPoints] = useState(250);
  const [matches, setMatches] = useState<Match[]>([]);
  const [opponentRank, setOpponentRank] = useState(700);
  const [result, setResult] = useState<Result>('win');
  const [level, setLevel] = useState<Level>('local');

  const ranking = useMemo(() => {
    let points = currentPoints;
    let wins = 0;

    matches.forEach((match) => {
      const levelBonus = match.level === 'local' ? 1 : match.level === 'regional' ? 1.5 : 2;
      const diff = currentRank - match.opponentRank;

      if (match.result === 'win') {
        wins += 1;
        points += Math.max(15, Math.round((40 - diff / 20) * levelBonus));
      } else {
        points -= Math.max(5, Math.round((10 + diff / 40) * levelBonus));
      }
    });

    const predictedRank = Math.max(50, Math.round(currentRank - (points - currentPoints) / 3));
    const winRate = matches.length ? Math.round((wins / matches.length) * 100) : 0;
    const targetRank = predictedRank > 500 ? 500 : predictedRank > 300 ? 300 : 200;
    const needed = targetRank === predictedRank ? 0 : Math.max(0, (predictedRank - targetRank) * 3);

    return { points, predictedRank, winRate, needed, targetRank };
  }, [currentPoints, currentRank, matches]);

  const addMatch = () => {
    setMatches((prev) => [...prev, { id: crypto.randomUUID(), opponentRank, result, level }]);
  };

  const removeMatch = (id: string) => {
    setMatches((prev) => prev.filter((match) => match.id !== id));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fefce8_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-yellow-500 to-amber-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">랭킹 계산기</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">경기 결과로 예상 랭킹 흐름 보기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-yellow-50">
            현재 랭킹과 경기 결과를 간단히 입력하면 포인트 흐름과 다음 목표 랭킹까지의 간격을 빠르게 볼 수 있습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <div className="space-y-6">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>현재 상태</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="current-rank">현재 랭킹</Label>
                  <Input id="current-rank" type="number" value={currentRank} onChange={(e) => setCurrentRank(Number(e.target.value) || 0)} />
                </div>
                <div>
                  <Label htmlFor="current-points">현재 포인트</Label>
                  <Input id="current-points" type="number" value={currentPoints} onChange={(e) => setCurrentPoints(Number(e.target.value) || 0)} />
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>경기 추가</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="opponent-rank">상대 랭킹</Label>
                  <Input id="opponent-rank" type="number" value={opponentRank} onChange={(e) => setOpponentRank(Number(e.target.value) || 0)} />
                </div>
                <div>
                  <Label className="mb-2 block">결과</Label>
                  <Select value={result} onValueChange={(value: Result) => setResult(value)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="win">승</SelectItem>
                      <SelectItem value="loss">패</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">대회 등급</Label>
                  <Select value={level} onValueChange={(value: Level) => setLevel(value)}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="local">지역 대회</SelectItem>
                      <SelectItem value="regional">광역 대회</SelectItem>
                      <SelectItem value="national">전국 대회</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button onClick={addMatch} className="w-full bg-amber-500 text-white hover:bg-amber-600">
                  <Plus className="mr-2 h-4 w-4" />
                  경기 추가
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">예상 랭킹</p><p className="mt-2 text-2xl font-bold text-slate-900">{ranking.predictedRank}위</p></CardContent></Card>
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">총 포인트</p><p className="mt-2 text-2xl font-bold text-amber-600">{ranking.points}</p></CardContent></Card>
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">승률</p><p className="mt-2 text-2xl font-bold text-emerald-600">{ranking.winRate}%</p></CardContent></Card>
            </div>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-amber-600" />
                  다음 목표
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>{ranking.targetRank}위권 진입까지</span>
                  <span>{ranking.needed}포인트 필요</span>
                </div>
                <Progress value={ranking.needed === 0 ? 100 : Math.max(5, 100 - Math.min(ranking.needed / 5, 95))} className="h-3" />
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">현재</p><p className="mt-2 font-semibold text-slate-900">{currentRank}위</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">예상</p><p className="mt-2 font-semibold text-slate-900">{ranking.predictedRank}위</p></div>
                  <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">목표</p><p className="mt-2 font-semibold text-slate-900">{ranking.targetRank}위</p></div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-amber-600" />
                  경기 기록
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {matches.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-slate-600">
                    아직 추가된 경기가 없습니다.
                  </div>
                ) : (
                  matches.map((match) => (
                    <div key={match.id} className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="outline">상대 {match.opponentRank}위</Badge>
                        <Badge className={match.result === 'win' ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100' : 'bg-rose-100 text-rose-700 hover:bg-rose-100'}>
                          {match.result === 'win' ? '승' : '패'}
                        </Badge>
                        <Badge variant="outline">
                          {match.level === 'local' ? '지역 대회' : match.level === 'regional' ? '광역 대회' : '전국 대회'}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeMatch(match.id)}>
                        <Trash2 className="h-4 w-4 text-rose-600" />
                      </Button>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <p className="font-semibold text-slate-900">사용 팁</p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <p>상위 랭킹 선수에게 승리한 결과를 따로 기록해 두면 시즌 목표를 더 현실적으로 잡기 좋습니다.</p>
                  <p>포인트 계산은 실제 협회 규정과 다를 수 있으니, 흐름 확인용 시뮬레이터로 보는 편이 맞습니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
