"use client";

import { useMemo, useState } from "react";
import { MoonStar, TrendingUp, TriangleAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SleepReadinessCheckClient() {
  const [sleepHours, setSleepHours] = useState("7");
  const [sleepQuality, setSleepQuality] = useState("4");
  const [soreness, setSoreness] = useState("2");
  const [stress, setStress] = useState("2");
  const [lateCaffeine, setLateCaffeine] = useState(false);
  const [matchToday, setMatchToday] = useState(false);

  const result = useMemo(() => {
    const hours = Number(sleepHours) || 0;
    const quality = Number(sleepQuality) || 0;
    const body = Number(soreness) || 0;
    const mental = Number(stress) || 0;

    let score = 0;
    score += Math.min(40, Math.max(0, (hours - 4) * 10));
    score += quality * 8;
    score += (6 - body) * 5;
    score += (6 - mental) * 4;
    if (!lateCaffeine) score += 6;
    if (!matchToday) score += 4;
    score = Math.max(0, Math.min(100, score));

    const status = score >= 80 ? "강한 훈련 가능" : score >= 60 ? "중간 강도 권장" : "회복 중심 권장";
    const focus =
      score >= 80 ? "기술+포인트 플레이" : score >= 60 ? "기술 반복과 볼륨 조절" : "회복 러닝, 가벼운 타격, 일찍 취침";

    return { score, status, focus };
  }, [lateCaffeine, matchToday, sleepHours, sleepQuality, soreness, stress]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardHeader>
            <Badge className="w-fit bg-indigo-600 text-white">Recovery Utility</Badge>
            <CardTitle className="mt-3 text-3xl">테니스 수면 준비도 체크</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              오늘 몸 상태에 맞춰 훈련 강도를 조절할 수 있게 간단한 회복 점수를 계산합니다.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="sleepHours">수면 시간 (시간)</Label>
              <Input id="sleepHours" type="number" value={sleepHours} onChange={(e) => setSleepHours(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sleepQuality">수면 질 (1~5)</Label>
              <Input id="sleepQuality" type="number" min="1" max="5" value={sleepQuality} onChange={(e) => setSleepQuality(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="soreness">근육 피로도 (1~5)</Label>
              <Input id="soreness" type="number" min="1" max="5" value={soreness} onChange={(e) => setSoreness(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stress">스트레스 (1~5)</Label>
              <Input id="stress" type="number" min="1" max="5" value={stress} onChange={(e) => setStress(e.target.value)} />
            </div>
            <label className="flex items-center gap-3 rounded-xl border p-3 md:col-span-2">
              <Checkbox checked={lateCaffeine} onCheckedChange={(checked) => setLateCaffeine(Boolean(checked))} />
              <span className="text-sm">오후 늦게 카페인을 마셨다</span>
            </label>
            <label className="flex items-center gap-3 rounded-xl border p-3 md:col-span-2">
              <Checkbox checked={matchToday} onCheckedChange={(checked) => setMatchToday(Boolean(checked))} />
              <span className="text-sm">오늘 경기 일정이 있다</span>
            </label>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="bg-gradient-to-br from-indigo-50 to-slate-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <MoonStar className="h-5 w-5 text-indigo-600" />
                회복 점수
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{result.score}</p>
              <p className="mt-2 text-lg font-medium">{result.status}</p>
              <div className="mt-4 h-3 rounded-full bg-white">
                <div className="h-3 rounded-full bg-indigo-600" style={{ width: `${result.score}%` }} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                오늘 추천
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-6">
              <p><strong>권장 포커스:</strong> {result.focus}</p>
              <p><strong>취침 전 팁:</strong> 카페인이 있거나 스트레스가 높으면 화면 노출을 줄이고 취침 90분 전 루틴을 고정하세요.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <TriangleAlert className="h-5 w-5 text-amber-500" />
                체크 포인트
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
              <p>점수가 60 미만이면 고강도 서브 훈련보다 풋워크 볼륨을 낮추는 편이 안전합니다.</p>
              <p>2일 이상 낮은 점수가 이어지면 연속 피로 누적 가능성이 높습니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
