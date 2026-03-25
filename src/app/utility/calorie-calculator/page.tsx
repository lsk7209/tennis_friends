import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
"use client";

import { useMemo, useState } from "react";
import { Flame, Scale, Timer } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const metsMap = {
  singles: { light: 6, moderate: 7.3, hard: 8.5 },
  doubles: { light: 4, moderate: 5.2, hard: 6.2 },
} as const;

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 칼로리 계산기",
  description: "테니스 경기 시간과 강도에 따른 칼로리 소모량을 계산합니다.",
  path: "/utility/calorie-calculator",
  type: "website",
  tags: ["칼로리", "테니스 운동량", "다이어트"],
});

export default function Page() {
  const [weight, setWeight] = useState("70");
  const [minutes, setMinutes] = useState("90");
  const [matchType, setMatchType] = useState<"singles" | "doubles">("singles");
  const [intensity, setIntensity] = useState<"light" | "moderate" | "hard">("moderate");

  const result = useMemo(() => {
    const weightKg = Number(weight) || 0;
    const durationHours = (Number(minutes) || 0) / 60;
    const mets = metsMap[matchType][intensity];
    const calories = Math.round(weightKg * durationHours * mets);
    return { calories, mets };
  }, [intensity, matchType, minutes, weight]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="border-orange-100 bg-gradient-to-br from-orange-50 via-white to-yellow-50">
          <CardHeader>
            <Badge className="w-fit bg-orange-600 text-white">Energy Utility</Badge>
            <CardTitle className="mt-3 text-4xl">테니스 칼로리 계산기</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              단식과 복식, 운동 강도, 플레이 시간 기준으로 예상 칼로리 소모량을 계산합니다.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="weight">체중 (kg)</Label>
              <Input id="weight" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="minutes">플레이 시간 (분)</Label>
              <Input id="minutes" type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>경기 유형</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  ["singles", "단식"],
                  ["doubles", "복식"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-md border px-3 py-2 text-sm ${matchType === value ? "border-orange-600 bg-orange-600 text-white" : "bg-white"}`}
                    onClick={() => setMatchType(value as "singles" | "doubles")}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>강도</Label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  ["light", "가볍게"],
                  ["moderate", "보통"],
                  ["hard", "강하게"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className={`rounded-md border px-3 py-2 text-sm ${intensity === value ? "border-yellow-500 bg-yellow-500 text-black" : "bg-white"}`}
                    onClick={() => setIntensity(value as "light" | "moderate" | "hard")}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="bg-gradient-to-br from-orange-600 to-yellow-500 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Flame className="h-5 w-5" />
                예상 칼로리 소모
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{result.calories}</p>
              <p className="mt-2 text-base">kcal</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">계산 기준</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
              <p className="flex items-center gap-2"><Scale className="h-4 w-4 text-orange-500" /> 체중: {weight || 0}kg</p>
              <p className="flex items-center gap-2"><Timer className="h-4 w-4 text-orange-500" /> 시간: {minutes || 0}분</p>
              <p>적용 METs: {result.mets}</p>
              <p>실제 소모량은 휴식 시간, 날씨, 랠리 길이에 따라 달라질 수 있습니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
