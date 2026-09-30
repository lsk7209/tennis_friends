import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, CheckCircle2, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = generatePageMetadata({
  title: "NTRP 테스트 | 테니스 실력 등급 자가 진단",
  description:
    "15문항 비공식 자가점검으로 NTRP 기준의 대략적인 실력 구간을 가늠해 보세요. 스트로크·서브·경기 경험 답변을 합산한 참고 결과이며 공식 등급이 아닙니다.",
  path: "/utility/ntrp-test",
  type: "website",
  tags: [
    "NTRP",
    "NTRP 뜻",
    "NTRP 등급",
    "테니스 실력 테스트",
    "테니스 등급",
    "테니스 레벨 측정",
    "NTRP 측정",
    "테니스 실력 진단",
  ],
});

const points = [
  "스트로크·서브·경기 경험 등 15개 질문에 스스로 답하는 방식",
  "참고 구간과 함께 일반적인 다음 연습 방향 제안",
  "로그인 없이 몇 분 안에 현재 위치를 가늠",
];

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <BreadcrumbSchema
        items={[
          { name: "홈", item: getSiteUrl() },
          { name: "유틸리티", item: `${getSiteUrl()}/utility` },
          {
            name: "NTRP 실력 테스트",
            item: `${getSiteUrl()}/utility/ntrp-test`,
          },
        ]}
      />
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-cyan-50">
          <CardHeader>
            <Badge className="w-fit bg-emerald-600 text-white">
              Popular Utility
            </Badge>
            <h1 className="mt-3 text-4xl font-semibold leading-none tracking-tight">
              NTRP 실력 테스트
            </h1>
            <p className="text-base leading-7 text-muted-foreground">
              지금 내 테니스가 어느 구간에 있는지 빠르게 확인하고, 다음 연습에서
              무엇을 우선해야 하는지 잡을 수 있습니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              {points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-xl border bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                  <p className="text-sm leading-6">{point}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700"><Link href="/utility/ntrp-test/test">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  테스트 시작
                </Link></Button>
              <Button asChild
                  variant="outline"
                  className="border-slate-300 text-slate-900 hover:border-emerald-600 hover:text-emerald-700"
                ><Link href="/utility/training-planner">
                  <Target className="mr-2 h-4 w-4" />
                  훈련 플래너 보기
                </Link></Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">이럴 때 유용합니다</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>혼자 연습은 꾸준히 하는데 현재 위치가 애매할 때</p>
            <p>레슨이나 동호회 모임 전에 대략적인 구간을 참고하고 싶을 때</p>
            <p>다음 4주 훈련 목표를 정하기 전에 우선순위를 잡고 싶을 때</p>
          </CardContent>
        </Card>
      </section>

      <section className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6 text-sm leading-7 text-emerald-950">
        <h2 className="mb-2 text-xl font-semibold">NTRP 뜻과 등급 기준</h2>
        <p>
          NTRP는 테니스 실력을 1.0부터 7.0까지 나누는 등급 기준입니다.
          이 테스트는 동호인이 자주 헷갈리는 초보, 입문, 중급, 상급 구간을
          질문형으로 정리해 참고 레벨과 다음 연습 방향을 함께 보여줍니다.
        </p>
      </section>

      <section className="mt-6 rounded-2xl border p-6 text-sm leading-7">
        <h2 className="mb-2 text-xl font-semibold">점수 계산 방식과 한계</h2>
        <ul className="list-disc space-y-1 pl-5">
          <li>15개 질문마다 고른 선택지 번호(1~5)를 그대로 더해 15~75점을 만듭니다.</li>
          <li>합계에 따라 1.5, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0+ 가운데 한 구간을 보여줍니다.</li>
          <li>플레이 성향(13번), 다른 운동(14번), 주변 평가(15번)처럼 기술 수준과 직접 관계가 적은 문항도 같은 비중으로 합산됩니다.</li>
          <li>스스로 답한 내용만 사용하므로 실제 경기력과 다를 수 있습니다. 공식 NTRP 등급은 USTA 등 공인 기관의 평가나 대회 기록으로 확인해야 합니다.</li>
        </ul>
      </section>
    </div>
  );
}
