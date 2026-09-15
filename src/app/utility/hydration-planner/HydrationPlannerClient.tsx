"use client";

import { useMemo, useState } from "react";
import { Droplets, Gauge, ThermometerSun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateHydration, UTILITY_ESTIMATE_VERSION } from "@/lib/utility-estimates";

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
    try {
      return { ...calculateHydration({ weightKg: Number(weightKg), durationMinutes: Number(durationMinutes), temperatureC: Number(temperatureC), intensityAdjustment: intensityAdjustments[intensity], sweatAdjustment: sweatAdjustments[sweatRate] }), error: null };
    } catch {
      return { before: 0, during: 0, after: 0, hourly: 0, sodiumPerHour: 0, estimatedSweatLossL: 0, risk: "-", error: "체중 20~300kg, 시간 15~480분, 기온 -10~50°C 범위로 입력하세요." };
    }
  }, [durationMinutes, intensity, sweatRate, temperatureC, weightKg]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50">
          <CardHeader>
            <Badge className="w-fit bg-emerald-600 text-white">Recovery Utility</Badge>
            <h1 className="mt-3 text-3xl font-semibold leading-none">
              테니스 수분 섭취 플래너
            </h1>
            <p className="text-sm leading-6 text-muted-foreground">
              경기 전, 경기 중, 경기 후 필요한 수분과 전해질 양을 빠르게 계산합니다.
            </p>
          </CardHeader>
          <CardContent className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="weight">체중 (kg)</Label>
              <Input id="weight" type="number" min="20" max="300" value={weightKg} onChange={(e) => setWeightKg(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="duration">플레이 시간 (분)</Label>
              <Input id="duration" type="number" min="15" max="480" value={durationMinutes} onChange={(e) => setDurationMinutes(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="temp">기온 (°C)</Label>
              <Input id="temp" type="number" min="-10" max="50" value={temperatureC} onChange={(e) => setTemperatureC(e.target.value)} />
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
              {plan.error && <p role="alert" className="sm:col-span-3 text-sm font-semibold text-red-700">{plan.error}</p>}
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
              <p className="text-muted-foreground">휴리스틱 모델 {UTILITY_ESTIMATE_VERSION}; 의료 진단이나 개인 땀 측정을 대체하지 않습니다.</p>
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
