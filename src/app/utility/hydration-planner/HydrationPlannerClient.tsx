"use client";

import { useMemo, useState } from "react";
import { Droplets, Gauge, ThermometerSun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const intensityAdjustments = {
  low: 0,
  medium: 120,
  high: 220,
} as const;

const sweatAdjustments = {
  low: 0,
  medium: 120,
  high: 240,
} as const;

export default function HydrationPlannerClient() {
  const [weightKg, setWeightKg] = useState("70");
  const [durationMinutes, setDurationMinutes] = useState("90");
  const [temperatureC, setTemperatureC] = useState("24");
  const [intensity, setIntensity] = useState<keyof typeof intensityAdjustments>("medium");
  const [sweatRate, setSweatRate] = useState<keyof typeof sweatAdjustments>("medium");

  const plan = useMemo(() => {
    const weight = Number(weightKg) || 0;
    const duration = Number(durationMinutes) || 0;
    const temp = Number(temperatureC) || 0;
    const hours = duration / 60;

    const before = Math.round(weight * 5);
    const hourlyBase = 420 + Math.max(0, temp - 18) * 18 + intensityAdjustments[intensity] + sweatAdjustments[sweatRate];
    const hourly = Math.min(1100, Math.max(400, Math.round(hourlyBase)));
    const during = Math.round(hourly * hours);
    const estimatedSweatLossL = Math.max(0.4, Number((hourly / 1000 * hours * 1.15).toFixed(1)));
    const after = Math.round(estimatedSweatLossL * 1250);
    const sodiumPerHour = Math.round(300 + Math.max(0, temp - 20) * 12 + sweatAdjustments[sweatRate] * 0.8);
    const risk =
      hourly >= 850 || temp >= 30 ? "높음" : hourly >= 650 || temp >= 25 ? "중간" : "보통";

    return {
      before,
      during,
      after,
      hourly,
      sodiumPerHour,
      estimatedSweatLossL,
      risk,
    };
  }, [durationMinutes, intensity, sweatRate, temperatureC, weightKg]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <CardHeader>
            <Badge className="w-fit bg-emerald-600 text-white">Recovery Utility</Badge>
            <CardTitle className="mt-3 text-3xl">테니스 수분 섭취 플래너</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              경기 전, 경기 중, 경기 후 필요한 수분과 전해질 양을 빠르게 계산합니다.
            </p>
          </CardHeader>
          <CardContent className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="weight">체중 (kg)</Label>
              <Input id="weight" type="number" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">플레이 시간 (분)</Label>
              <Input id="duration" type="number" value={durationMinutes} onChange={(e) => setDurationMinutes(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="temp">기온 (°C)</Label>
              <Input id="temp" type="number" value={temperatureC} onChange={(e) => setTemperatureC(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>운동 강도</Label>
              <div className="grid grid-cols-3 gap-2">
                {(["low", "medium", "high"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-md border px-3 py-2 text-sm ${intensity === value ? "border-emerald-600 bg-emerald-600 text-white" : "bg-white"}`}
                    onClick={() => setIntensity(value)}
                  >
                    {value === "low" ? "낮음" : value === "medium" ? "보통" : "높음"}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>땀 배출량 체감</Label>
              <div className="grid grid-cols-3 gap-2">
                {(["low", "medium", "high"] as const).map((value) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-md border px-3 py-2 text-sm ${sweatRate === value ? "border-cyan-600 bg-cyan-600 text-white" : "bg-white"}`}
                    onClick={() => setSweatRate(value)}
                  >
                    {value === "low" ? "적음" : value === "medium" ? "보통" : "많음"}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Droplets className="h-5 w-5 text-emerald-600" />
                권장 섭취량
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-sm text-muted-foreground">경기 전 2시간</p>
                <p className="mt-1 text-2xl font-bold">{plan.before}ml</p>
              </div>
              <div className="rounded-xl bg-cyan-50 p-4">
                <p className="text-sm text-muted-foreground">경기 중 총량</p>
                <p className="mt-1 text-2xl font-bold">{plan.during}ml</p>
              </div>
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-muted-foreground">경기 후 회복</p>
                <p className="mt-1 text-2xl font-bold">{plan.after}ml</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gauge className="h-5 w-5 text-cyan-700" />
                시간당 기준
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6">
              <p>권장 수분 섭취: <strong>{plan.hourly}ml / 시간</strong></p>
              <p>권장 나트륨: <strong>{plan.sodiumPerHour}mg / 시간</strong></p>
              <p>예상 땀 손실: <strong>{plan.estimatedSweatLossL}L</strong></p>
              <p>탈수 리스크: <strong>{plan.risk}</strong></p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <ThermometerSun className="h-5 w-5 text-orange-500" />
                적용 팁
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
              <p>15분마다 한 번씩 나눠 마시면 위 부담이 적습니다.</p>
              <p>기온 28도 이상이거나 땀이 많은 편이면 물만 마시지 말고 전해질 음료를 섞는 편이 좋습니다.</p>
              <p>연속 경기일에는 경기 후 30분 안에 수분과 탄수화물을 같이 보충하세요.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
