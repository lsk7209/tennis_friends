import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, Shield, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "스트링 텐션 계산기",
  description: "라켓, 플레이 스타일, 타구 감각 기준으로 추천 스트링 텐션을 확인합니다.",
  path: "/utility/string-tension",
  type: "website",
  tags: ["스트링 텐션", "테니스 라켓", "테니스 장비"],
});

const reasons = [
  "너무 낮으면 공이 뜨고, 너무 높으면 팔 부담이 커질 수 있습니다.",
  "실력보다 타구 감각과 선호 플레이 스타일이 더 중요할 때도 많습니다.",
  "계절과 코트 환경에 따라 텐션 보정이 필요합니다.",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-sky-100 bg-gradient-to-br from-sky-50 via-white to-emerald-50">
          <CardHeader>
            <Badge className="w-fit bg-sky-600 text-white">Equipment Utility</Badge>
            <CardTitle className="mt-3 text-4xl">스트링 텐션 계산기</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              라켓 성향과 플레이 스타일이 같아도 텐션이 다르면 타구 느낌이 크게 달라집니다. 내게 맞는 시작점을 먼저 잡는 도구입니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-xl border bg-white p-4 text-sm leading-6">
                {reason}
              </div>
            ))}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/utility/string-tension/test">
                <Button className="bg-sky-600 hover:bg-sky-700">
                  <Calculator className="mr-2 h-4 w-4" />
                  계산 시작
                </Button>
              </Link>
              <Link href="/utility/equipment-recommendation">
                <Button variant="outline">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  장비 추천 보기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">이 계산기가 보는 기준</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-3 rounded-xl border p-4">
              <Target className="mt-0.5 h-5 w-5 text-sky-600" />
              <p className="text-sm leading-6">컨트롤형인지 파워형인지에 따른 시작 텐션</p>
            </div>
            <div className="flex gap-3 rounded-xl border p-4">
              <Shield className="mt-0.5 h-5 w-5 text-sky-600" />
              <p className="text-sm leading-6">팔 부담과 타구 안정감을 함께 고려한 보정</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
