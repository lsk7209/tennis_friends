'use client';

import { useMemo, useState } from 'react';
import { ArrowLeft, ArrowRight, Calculator, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface MatchResult {
  opponentUTR: string;
  myGames: string;
  opponentGames: string;
}

export default function UTRCalculatorPage() {
  const [step, setStep] = useState<'intro' | 'input' | 'result'>('intro');
  const [matches, setMatches] = useState<MatchResult[]>([{ opponentUTR: '', myGames: '', opponentGames: '' }]);

  const calculatedUTR = useMemo(() => {
    let totalWeight = 0;
    let weightedSum = 0;

    matches.forEach((match) => {
      const opponentUTR = Number(match.opponentUTR);
      const myGames = Number(match.myGames);
      const opponentGames = Number(match.opponentGames);
      const totalGames = myGames + opponentGames;

      if (opponentUTR > 0 && totalGames > 0) {
        const winRatio = myGames / totalGames;
        const estimate = Math.max(1, Math.min(16, opponentUTR + (winRatio - 0.5) * 2));
        weightedSum += estimate * totalGames;
        totalWeight += totalGames;
      }
    });

    return totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 100) / 100 : null;
  }, [matches]);

  const addMatch = () => {
    if (matches.length < 10) {
      setMatches((prev) => [...prev, { opponentUTR: '', myGames: '', opponentGames: '' }]);
    }
  };

  const updateMatch = (index: number, field: keyof MatchResult, value: string) => {
    setMatches((prev) => prev.map((match, i) => (i === index ? { ...match, [field]: value } : match)));
  };

  const removeMatch = (index: number) => {
    if (matches.length > 1) {
      setMatches((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const level = calculatedUTR === null
    ? null
    : calculatedUTR >= 11
      ? '상위 경쟁자'
      : calculatedUTR >= 8
        ? '상급'
        : calculatedUTR >= 5
          ? '중급'
          : '입문';

  if (step === 'intro') {
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-violet-500 px-8 py-10 text-white shadow-xl">
              <Badge className="bg-white/15 text-white hover:bg-white/15">
                <Sparkles className="mr-2 h-4 w-4" />
                UTR 계산기
              </Badge>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">경기 결과로 예상 UTR 흐름 보기</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
                최근 경기 결과를 기반으로 현재 실력대가 어느 정도인지 대략적인 흐름을 확인할 수 있습니다.
                공식 수치가 아니라 추정용 도구로 보면 됩니다.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" onClick={() => setStep('input')}>
                  <Calculator className="mr-2 h-5 w-5" />
                  계산 시작
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-4">
              {[
                ['1-4', '입문'],
                ['5-7', '중급'],
                ['8-10', '상급'],
                ['11+', '경쟁 레벨'],
              ].map(([range, label]) => (
                <Card key={range} className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl font-bold text-blue-600">{range}</p>
                    <p className="mt-2 font-semibold text-slate-900">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (step === 'input') {
    return (
      <main className="min-h-screen bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_35%,_#f8fafc_100%)] py-12">
        <div className="mx-auto max-w-3xl px-4">
          <Button variant="ghost" onClick={() => setStep('intro')} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            돌아가기
          </Button>

          <Card className="border-slate-200 bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-slate-900">경기 결과 입력</h1>
                <p className="mt-2 text-slate-600">최근 경기 1~10개를 입력해 예상 UTR을 계산합니다.</p>
              </div>

              <div className="mt-8 space-y-5">
                {matches.map((match, index) => (
                  <Card key={index} className="border-slate-200 bg-slate-50">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">경기 {index + 1}</Badge>
                        {matches.length > 1 && (
                          <Button variant="ghost" size="sm" onClick={() => removeMatch(index)}>
                            삭제
                          </Button>
                        )}
                      </div>
                      <div className="mt-4 grid gap-4 md:grid-cols-3">
                        <div>
                          <Label htmlFor={`utr-${index}`}>상대 UTR</Label>
                          <Input id={`utr-${index}`} type="number" step="0.01" value={match.opponentUTR} onChange={(e) => updateMatch(index, 'opponentUTR', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor={`my-${index}`}>내 게임 수</Label>
                          <Input id={`my-${index}`} type="number" value={match.myGames} onChange={(e) => updateMatch(index, 'myGames', e.target.value)} />
                        </div>
                        <div>
                          <Label htmlFor={`opp-${index}`}>상대 게임 수</Label>
                          <Input id={`opp-${index}`} type="number" value={match.opponentGames} onChange={(e) => updateMatch(index, 'opponentGames', e.target.value)} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {matches.length < 10 && (
                  <Button variant="outline" className="w-full border-dashed" onClick={addMatch}>
                    경기 추가
                  </Button>
                )}

                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={() => setStep('result')}>
                  <Calculator className="mr-2 h-5 w-5" />
                  계산하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_35%,_#f8fafc_100%)] py-12">
      <div className="mx-auto max-w-3xl px-4">
        <Card className="overflow-hidden border-slate-200 bg-white shadow-2xl">
          <div className="bg-gradient-to-r from-blue-600 to-violet-500 p-8 text-center text-white">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-100">Estimated UTR</p>
            <div className="mt-3 text-6xl font-extrabold">{calculatedUTR ?? '-'}</div>
            {level && <Badge className="mt-4 bg-white/15 text-white hover:bg-white/15">{level}</Badge>}
          </div>

          <CardContent className="p-8">
            <div className="text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-emerald-500" />
              <h2 className="mt-4 text-2xl font-bold text-slate-900">계산 완료</h2>
              <p className="mt-2 text-slate-600">입력한 {matches.length}개 경기 결과를 바탕으로 대략적인 UTR을 추정했습니다.</p>
            </div>

            <div className="mt-8 rounded-2xl bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-slate-900">
                <Trophy className="h-5 w-5 text-amber-500" />
                <p className="font-semibold">참고</p>
              </div>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <p>이 값은 공식 UTR과 다를 수 있으며, 실력 흐름을 대략적으로 보는 용도로 적합합니다.</p>
                <p>상대 UTR 값이 정확할수록 결과도 더 현실적으로 나옵니다.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="flex-1" onClick={() => setStep('input')}>
                다시 계산
              </Button>
              <Button className="flex-1 bg-blue-600 text-white hover:bg-blue-700" onClick={() => setStep('intro')}>
                처음으로
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
