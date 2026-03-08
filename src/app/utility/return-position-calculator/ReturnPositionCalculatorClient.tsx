"use client";

import { useMemo, useState } from "react";
import { Crosshair, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const speedOffsets = {
  slow: -0.2,
  medium: 0.5,
  fast: 1.2,
} as const;

const spinOffsets = {
  flat: 0.2,
  kick: 0.6,
  slice: -0.3,
} as const;

const surfaceOffsets = {
  clay: 0.5,
  hard: 0,
  grass: -0.5,
} as const;

const styleOffsets = {
  aggressive: -0.6,
  neutral: 0,
  block: 0.4,
} as const;

export default function ReturnPositionCalculatorClient() {
  const [serveSpeed, setServeSpeed] = useState<keyof typeof speedOffsets>("medium");
  const [serveType, setServeType] = useState<keyof typeof spinOffsets>("flat");
  const [surface, setSurface] = useState<keyof typeof surfaceOffsets>("hard");
  const [returnStyle, setReturnStyle] = useState<keyof typeof styleOffsets>("neutral");

  const recommendation = useMemo(() => {
    const meters = Number(
      (0.4 + speedOffsets[serveSpeed] + spinOffsets[serveType] + surfaceOffsets[surface] + styleOffsets[returnStyle]).toFixed(1),
    );
    const label =
      meters <= 0 ? "베이스라인 안쪽" : meters < 0.8 ? "베이스라인 근처" : "베이스라인 뒤";
    const splitStep =
      serveSpeed === "fast" ? "상대 토스 직후 예열하고 임팩트 직전에 스플릿스텝" : "서버 임팩트 직전에 스플릿스텝";
    const target =
      returnStyle === "aggressive" ? "깊은 중앙 또는 서버 백핸드" : returnStyle === "block" ? "크로스 안전 구역" : "가장 익숙한 중앙 높이";

    return { meters, label, splitStep, target };
  }, [returnStyle, serveSpeed, serveType, surface]);

  const renderButtons = <T extends string>(
    title: string,
    value: T,
    setValue: (value: T) => void,
    options: { value: T; label: string }[],
  ) => (
    <div className="space-y-2">
      <p className="text-sm font-medium">{title}</p>
      <div className="grid grid-cols-3 gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`rounded-md border px-3 py-2 text-sm ${value === option.value ? "border-sky-600 bg-sky-600 text-white" : "bg-white"}`}
            onClick={() => setValue(option.value)}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <Badge className="w-fit bg-sky-600 text-white">Return Utility</Badge>
            <CardTitle className="mt-3 text-3xl">테니스 리턴 위치 계산기</CardTitle>
            <p className="text-sm leading-6 text-muted-foreground">
              상대 서브 유형에 맞춰 베이스라인 기준 리턴 시작 위치를 잡습니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            {renderButtons("서브 속도", serveSpeed, setServeSpeed, [
              { value: "slow", label: "느림" },
              { value: "medium", label: "보통" },
              { value: "fast", label: "빠름" },
            ])}
            {renderButtons("서브 구질", serveType, setServeType, [
              { value: "flat", label: "플랫" },
              { value: "kick", label: "킥" },
              { value: "slice", label: "슬라이스" },
            ])}
            {renderButtons("코트", surface, setSurface, [
              { value: "clay", label: "클레이" },
              { value: "hard", label: "하드" },
              { value: "grass", label: "잔디" },
            ])}
            {renderButtons("리턴 성향", returnStyle, setReturnStyle, [
              { value: "aggressive", label: "공격형" },
              { value: "neutral", label: "중립형" },
              { value: "block", label: "블록형" },
            ])}
          </CardContent>
        </Card>

        <div className="grid gap-4">
          <Card className="bg-gradient-to-br from-sky-50 to-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Crosshair className="h-5 w-5 text-sky-600" />
                추천 위치
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">베이스라인 기준</p>
              <p className="text-4xl font-bold">
                {recommendation.meters <= 0
                  ? `${Math.abs(recommendation.meters).toFixed(1)}m 안쪽`
                  : `${recommendation.meters.toFixed(1)}m 뒤`}
              </p>
              <p className="text-base font-medium">{recommendation.label}에서 시작</p>
              <div className="h-3 rounded-full bg-white">
                <div
                  className="h-3 rounded-full bg-sky-600"
                  style={{ width: `${Math.max(10, Math.min(100, ((recommendation.meters + 1) / 3) * 100))}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <MoveRight className="h-5 w-5 text-slate-700" />
                실행 포인트
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-6">
              <p><strong>스플릿스텝:</strong> {recommendation.splitStep}</p>
              <p><strong>첫 목표:</strong> {recommendation.target}</p>
              <p><strong>보정 기준:</strong> 상대가 에이스를 연속으로 만들면 반 걸음 뒤로, 세컨드서브가 짧으면 한 걸음 앞으로 이동하세요.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
