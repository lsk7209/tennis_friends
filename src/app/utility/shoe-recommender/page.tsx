'use client';

import { useMemo, useState } from 'react';
import { CheckCircle2, Footprints, ShoppingBag, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Recommendation {
  brand: string;
  model: string;
  type: 'Speed' | 'Stability' | 'Balanced';
  features: string[];
  score: number;
  summary: string;
}

const baseRecommendations: Recommendation[] = [
  { brand: 'ASICS', model: 'Gel Resolution', type: 'Stability', features: ['발목 안정감', '내구성', '하드코트 대응'], score: 84, summary: '측면 움직임이 많고 안정감을 우선하는 플레이어에게 잘 맞습니다.' },
  { brand: 'ASICS', model: 'Solution Speed', type: 'Speed', features: ['가벼움', '빠른 방향 전환', '민첩성'], score: 82, summary: '빠른 스텝과 코트 커버를 중시하는 유형에 잘 맞습니다.' },
  { brand: 'Nike', model: 'Vapor', type: 'Balanced', features: ['반응성', '슬림한 착화감', '전천후'], score: 80, summary: '가벼운 느낌과 반응성을 같이 원하는 플레이어에게 적합합니다.' },
  { brand: 'Adidas', model: 'Barricade', type: 'Stability', features: ['강한 지지력', '마모 대응', '단단한 느낌'], score: 83, summary: '발목 지지와 내구성을 최우선으로 두는 플레이어에게 어울립니다.' },
];

export default function ShoeRecommenderPage() {
  const [footWidth, setFootWidth] = useState('standard');
  const [style, setStyle] = useState('all-court');
  const [priority, setPriority] = useState('stability');

  const recommendations = useMemo(() => {
    return baseRecommendations
      .map((item) => {
        let score = item.score;
        if (priority === 'stability' && item.type === 'Stability') score += 10;
        if (priority === 'speed' && item.type === 'Speed') score += 10;
        if (priority === 'balanced' && item.type === 'Balanced') score += 10;
        if (footWidth === 'wide' && item.brand === 'ASICS') score += 6;
        if (footWidth === 'narrow' && item.brand === 'Nike') score += 6;
        if (style === 'baseliner' && item.type === 'Stability') score += 4;
        if (style === 'serve-volley' && item.type === 'Speed') score += 4;
        return { ...item, score: Math.min(99, score) };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [footWidth, priority, style]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-orange-500 to-red-500 px-8 py-10 text-white shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            <Footprints className="h-4 w-4" />
            신발 추천
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">내 발과 플레이에 맞는 테니스화 고르기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-orange-50">
            테니스화는 브랜드보다도 발볼, 움직임 패턴, 우선순위가 더 중요합니다. 몇 가지 조건만 고르면 맞는 방향을 빠르게 좁힐 수 있습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>조건 선택</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">발볼</Label>
                <RadioGroup value={footWidth} onValueChange={setFootWidth} className="space-y-3">
                  <div className="flex items-center gap-2"><RadioGroupItem value="narrow" id="foot-narrow" /><Label htmlFor="foot-narrow">좁은 편</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="standard" id="foot-standard" /><Label htmlFor="foot-standard">보통</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="wide" id="foot-wide" /><Label htmlFor="foot-wide">넓은 편</Label></div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">플레이 스타일</Label>
                <RadioGroup value={style} onValueChange={setStyle} className="space-y-3">
                  <div className="flex items-center gap-2"><RadioGroupItem value="baseliner" id="style-baseliner" /><Label htmlFor="style-baseliner">베이스라이너</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="all-court" id="style-allcourt" /><Label htmlFor="style-allcourt">올코트</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="serve-volley" id="style-servevolley" /><Label htmlFor="style-servevolley">서브 앤 발리</Label></div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">우선순위</Label>
                <RadioGroup value={priority} onValueChange={setPriority} className="space-y-3">
                  <div className="flex items-center gap-2"><RadioGroupItem value="stability" id="priority-stability" /><Label htmlFor="priority-stability">안정감</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="speed" id="priority-speed" /><Label htmlFor="priority-speed">스피드</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="balanced" id="priority-balanced" /><Label htmlFor="priority-balanced">균형형</Label></div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {recommendations.map((shoe, index) => (
              <Card key={shoe.model} className={`border-slate-200 bg-white shadow-sm ${index === 0 ? 'ring-2 ring-orange-400' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-2xl font-semibold text-slate-900">{shoe.brand} {shoe.model}</h2>
                        {index === 0 && <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">추천 1순위</Badge>}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{shoe.summary}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500">매칭 점수</p>
                      <p className="text-2xl font-bold text-orange-600">{shoe.score}점</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant="outline">{shoe.type}</Badge>
                    {shoe.features.map((feature) => (
                      <Badge key={feature} className="bg-slate-100 text-slate-700 hover:bg-slate-100">{feature}</Badge>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button className="bg-orange-500 text-white hover:bg-orange-600">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      가격 비교 보기
                    </Button>
                    <Button variant="outline">
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      이 추천 기억하기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
