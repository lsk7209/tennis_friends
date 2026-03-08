import type { Metadata } from "next";
import Link from "next/link";
import { Apple, ArrowRight, Droplets, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 영양 가이드",
  description: "경기 전중후 영양과 수분 전략을 기준별로 정리하고 개인 계획 수립을 돕습니다.",
  path: "/utility/nutrition-guide",
  type: "website",
  tags: ["테니스 영양", "수분 보충", "경기 전 식사"],
});

const cards = [
  { icon: Apple, title: "경기 전", body: "탄수화물 중심 식사와 소화 부담을 줄이는 구성이 중요합니다." },
  { icon: Droplets, title: "경기 중", body: "수분과 전해질을 끊기지 않게 보충해야 집중력이 유지됩니다." },
  { icon: Zap, title: "경기 후", body: "회복 식사와 수면 전 보충 루틴이 다음 세션의 질을 바꿉니다." },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      {/* 의료 면책 고지 */}
      <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 mb-8">
        <div className="flex items-start gap-3">
          <Zap className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="font-bold text-amber-900 text-sm">영양 정보 안내</p>
            <p className="text-sm text-amber-800 mt-1">
              본 가이드는 일반적인 참고 정보이며, 개인별 영양 상담을 대체하지 않습니다.
              특정 질환이나 알레르기가 있는 경우 전문 영양사와 상담하세요.
            </p>
          </div>
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="border-green-100 bg-gradient-to-br from-green-50 via-white to-yellow-50">
          <CardHeader>
            <Badge className="w-fit bg-green-600 text-white">Nutrition Utility</Badge>
            <CardTitle className="mt-3 text-4xl">테니스 영양 가이드</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              경기력은 기술만으로 만들어지지 않습니다. 경기 전, 경기 중, 경기 후에 무엇을 먹고 마시는지가 집중력과 회복 속도를 바꿉니다.
            </p>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-3">
            <Link href="/utility/nutrition-guide/test">
              <Button className="bg-green-600 hover:bg-green-700">
                <Apple className="mr-2 h-4 w-4" />
                영양 계획 시작
              </Button>
            </Link>
            <Link href="/utility/hydration-planner">
              <Button variant="outline">
                <ArrowRight className="mr-2 h-4 w-4" />
                수분 플래너 보기
              </Button>
            </Link>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Card key={card.title}>
                <CardContent className="flex gap-3 p-5">
                  <Icon className="mt-0.5 h-5 w-5 text-green-600" />
                  <div>
                    <h2 className="font-semibold">{card.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{card.body}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
