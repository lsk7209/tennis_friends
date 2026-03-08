"use client";

import Link from "next/link";
import { Calendar, CheckCircle2, ClipboardList } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  "현재 수준과 주간 가능 시간을 기준으로 계획 시작",
  "기술, 경기, 체력 중 이번 주 우선순위 선택",
  "실행 가능한 주간 루틴으로 정리하고 결과 점검",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
          <CardHeader>
            <Badge className="w-fit bg-violet-600 text-white">Planning Utility</Badge>
            <CardTitle className="mt-3 text-4xl">테니스 훈련 플래너</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              막연하게 많이 하는 연습보다, 이번 주에 실제로 실행 가능한 루틴을 만드는 것이 더 중요합니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-3 rounded-xl border bg-white p-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="text-sm leading-6">{step}</p>
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/utility/training-planner/test">
                <Button className="bg-violet-600 hover:bg-violet-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  플래너 시작
                </Button>
              </Link>
              <Link href="/utility/ntrp-test">
                <Button variant="outline">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  실력 테스트 먼저 보기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">플래너가 잡아주는 것</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex gap-3 rounded-xl border p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-600" />
              <p className="text-sm leading-6">지금 수준에서 과하지 않은 주간 볼륨</p>
            </div>
            <div className="flex gap-3 rounded-xl border p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-600" />
              <p className="text-sm leading-6">기술, 경기, 회복의 균형</p>
            </div>
            <div className="flex gap-3 rounded-xl border p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-600" />
              <p className="text-sm leading-6">이번 주 한 가지 핵심 목표에 집중하는 구조</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
