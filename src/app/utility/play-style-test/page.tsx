import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Swords } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getSiteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "테니스 플레이 스타일 테스트 | TennisFriends",
  description: "질문 기반으로 내 플레이 성향을 파악하고 어울리는 훈련 방향을 확인합니다.",
  openGraph: {
    title: "테니스 플레이 스타일 테스트",
    description: "내 플레이 성향을 파악하고 어울리는 훈련 방향을 확인합니다.",
    type: "website",
    url: "https://tennisfrens.com/utility/play-style-test",
  },
};

const styles = ["공격 주도형", "안정 수비형", "패턴 운영형", "올코트 균형형"];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <BreadcrumbSchema items={[
        { name: '홈', item: getSiteUrl() },
        { name: '유틸리티', item: `${getSiteUrl()}/utility` },
        { name: '플레이 스타일 테스트', item: `${getSiteUrl()}/utility/play-style-test` }
      ]} />
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="border-pink-100 bg-gradient-to-br from-pink-50 via-white to-orange-50">
          <CardHeader>
            <Badge className="w-fit bg-pink-600 text-white">Play Style</Badge>
            <CardTitle className="mt-3 text-4xl">테니스 플레이 스타일 테스트</CardTitle>
            <p className="text-base leading-7 text-muted-foreground">
              같은 실력이라도 경기 운영은 완전히 다릅니다. 내 성향을 알면 맞는 훈련과 전술이 더 빨리 보입니다.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2">
              {styles.map((style) => (
                <div key={style} className="rounded-xl border bg-white p-4 text-sm font-medium">
                  {style}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/utility/play-style-test/test">
                <Button className="bg-pink-600 hover:bg-pink-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  테스트 시작
                </Button>
              </Link>
              <Link href="/utility/play-style-test/result">
                <Button variant="outline">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  결과 예시 보기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Swords className="h-5 w-5 text-pink-600" />
              테스트 후 확인할 것
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-6 text-muted-foreground">
            <p>내가 포인트를 따는 방식이 공격인지, 운영인지, 수비인지</p>
            <p>압박 상황에서 무너지는 패턴이 기술인지 판단인지</p>
            <p>다음 훈련에서 어떤 스타일을 더 살리고 무엇을 보완할지</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
