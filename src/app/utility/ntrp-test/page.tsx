import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CheckCircle2, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "NTRP 실력 테스트",
  description: "질문 기반으로 현재 테니스 실력 구간을 점검하고 다음 훈련 방향을 확인합니다.",
  path: "/utility/ntrp-test",
  type: "website",
  tags: ["NTRP", "테니스 실력 테스트", "테니스 등급"],
});

const points = [
  "현재 실력을 감각이 아니라 질문 구조로 점검",
  "등급만 보여주는 것이 아니라 다음 훈련 방향 제안",
  "초보부터 중급 이상까지 빠르게 자기 위치 확인",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
          <CardHeader>
            <Badge className="w-fit bg-emerald-600 text-white">Popular Utility</Badge>
            <CardTitle className="mt-3 text-4xl">NTRP 실력 테스트</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              지금 내 테니스가 어느 구간에 있는지 빠르게 확인하고, 다음 연습에서 무엇을 우선해야 하는지 잡을 수 있습니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-xl border bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <p className="text-sm leading-6">{point}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/utility/ntrp-test/test">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  테스트 시작
                </Button>
              </Link>
              <Link href="/utility/training-planner">
                <Button variant="outline">
                  <Target className="mr-2 h-4 w-4" />
                  훈련 플래너 보기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">이럴 때 유용합니다</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>혼자 연습은 꾸준히 하는데 현재 위치가 애매할 때</p>
            <p>레슨이나 대회 준비 전에 객관적인 기준이 필요할 때</p>
            <p>다음 4주 훈련 목표를 정하기 전에 우선순위를 잡고 싶을 때</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
