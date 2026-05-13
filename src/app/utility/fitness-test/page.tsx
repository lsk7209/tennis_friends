"use client";

import { useMemo, useState } from "react";
import {Activity, BarChart3, Gauge} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FitnessField = {
  id: string;
  label: string;
  unit: string;
  weight: number;
  placeholder: string;
};

const fields: FitnessField[] = [
  { id: "agility", label: "사이드 셔플 20초 횟수", unit: "회", weight: 18, placeholder: "예: 24" },
  { id: "sprint", label: "20m 스프린트", unit: "초", weight: 18, placeholder: "예: 4.3" },
  { id: "endurance", label: "연속 랠리 지속 시간", unit: "분", weight: 16, placeholder: "예: 18" },
  { id: "strength", label: "푸시업 1세트", unit: "회", weight: 16, placeholder: "예: 22" },
  { id: "power", label: "제자리 점프", unit: "cm", weight: 16, placeholder: "예: 38" },
  { id: "balance", label: "한 발 균형 유지", unit: "초", weight: 16, placeholder: "예: 35" },
];


function normalizeScore(id: string, value: number) {
  if (!value || value < 0) return 0;
  switch (id) {
    case "agility":
      return Math.min(100, Math.round((value / 30) * 100));
    case "sprint":
      return Math.min(100, Math.max(0, Math.round(((7 - value) / 3) * 100)));
    case "endurance":
      return Math.min(100, Math.round((value / 25) * 100));
    case "strength":
      return Math.min(100, Math.round((value / 35) * 100));
    case "power":
      return Math.min(100, Math.round((value / 55) * 100));
    case "balance":
      return Math.min(100, Math.round((value / 60) * 100));
    default:
      return 0;
  }
}

export default function Page() {
  const [values, setValues] = useState<Record<string, string>>({});

  const result = useMemo(() => {
    const entries = fields.map((field) => {
      const raw = Number(values[field.id]) || 0;
      const score = normalizeScore(field.id, raw);
      return { ...field, raw, score };
    });
    const totalWeight = entries.reduce((sum, item) => sum + item.weight, 0);
    const totalScore = Math.round(entries.reduce((sum, item) => sum + item.score * item.weight, 0) / totalWeight);
    const label = totalScore >= 80 ? "경기 체력이 좋은 편" : totalScore >= 60 ? "기본 체력은 확보" : "기초 체력 보강 권장";
    return { entries, totalScore, label };
  }, [values]);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="border-red-100 bg-gradient-to-br from-red-50 via-white to-orange-50">
          <CardHeader>
            <Badge className="w-fit bg-red-600 text-white">Physical Test</Badge>
            <h1 className="mt-3 text-4xl font-semibold leading-none">
              테니스 피트니스 테스트
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              민첩성, 스피드, 지구력, 근력, 파워, 균형을 간단히 입력해 현재 체력 상태를 점검합니다.
            </p>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {fields.map((field) => (
              <div key={field.id} className="space-y-2">
                <Label htmlFor={field.id}>{field.label} ({field.unit})</Label>
                <Input
                  id={field.id}
                  type="number"
                  step="0.1"
                  placeholder={field.placeholder}
                  value={values[field.id] ?? ""}
                  onChange={(e) => setValues((current) => ({ ...current, [field.id]: e.target.value }))}
                />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="bg-gradient-to-br from-slate-900 to-slate-700 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Gauge className="h-5 w-5" />
                종합 점수
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold">{result.totalScore}</p>
              <p className="mt-2 text-base text-slate-200">{result.label}</p>
              <div className="mt-4 h-3 rounded-full bg-white/20">
                <div className="h-3 rounded-full bg-red-400" style={{ width: `${result.totalScore}%` }} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <BarChart3 className="h-5 w-5 text-red-600" />
                세부 항목
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {result.entries.map((entry) => (
                <div key={entry.id}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span>{entry.label}</span>
                    <span>{entry.score}점</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-red-500" style={{ width: `${entry.score}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Activity className="h-5 w-5 text-emerald-600" />
                추천 액션
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-6 text-muted-foreground">
              <p>스프린트와 민첩성이 낮으면 짧은 풋워크 루틴을 주 2회 먼저 넣는 편이 좋습니다.</p>
              <p>지구력이 낮으면 경기형 랠리보다 인터벌 훈련과 회복 루틴을 함께 설계하세요.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
