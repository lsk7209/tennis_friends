import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
"use client";

import { useMemo, useState } from 'react';
import { Brain, CheckCircle2, Shield, Swords, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Style = 'aggressive' | 'defensive' | 'all-court' | 'net-rusher';
type Mental = 'stable' | 'average' | 'shaky';

export const metadata: Metadata = generatePageMetadata({
  title: "상대 분석기",
  description: "상대 플레이어의 스타일과 약점을 분석하여 맞춤 전략을 제안합니다.",
  path: "/utility/opponent-analyzer",
  type: "website",
  tags: ["상대 분석", "전술", "경기 전략"],
});

export default function OpponentAnalyzerPage() {
  const [name, setName] = useState('');
  const [style, setStyle] = useState<Style>('aggressive');
  const [strength, setStrength] = useState(3);
  const [weakness, setWeakness] = useState('백핸드');
  const [mental, setMental] = useState<Mental>('average');

  const analysis = useMemo(() => {
    const plan: string[] = [];
    const cautions: string[] = [];

    if (style === 'aggressive') {
      plan.push('리턴과 첫 두 샷에서 깊이를 먼저 확보해 상대의 선공 타이밍을 늦추세요.');
      plan.push('높은 볼이나 느린 볼 변화를 섞어 리듬을 끊는 편이 효과적입니다.');
    }
    if (style === 'defensive') {
      plan.push('코스를 자주 바꾸기보다 짧은 볼을 만들어 앞으로 끌어내는 전개가 좋습니다.');
      plan.push('무리한 위닝샷보다 패턴 누적으로 흔드는 편이 안정적입니다.');
    }
    if (style === 'all-court') {
      plan.push('한 가지 패턴만 고집하지 말고, 서브 후 첫 샷 방향을 다양하게 가져가세요.');
      plan.push('네트 접근 시도를 예상해 패싱샷 준비를 미리 해두는 편이 좋습니다.');
    }
    if (style === 'net-rusher') {
      plan.push('로브와 낮은 패싱샷을 번갈아 써서 네트 접근 타이밍을 흔드세요.');
      plan.push('서브 리턴을 안전하게 발 밑으로 보내면 첫 볼 실수가 늘어납니다.');
    }

    plan.push(`${weakness} 쪽으로 반복적으로 테스트해 실제 약점인지 초반에 먼저 확인하세요.`);

    if (mental === 'shaky') {
      plan.push('길어진 듀스 게임과 긴 랠리로 압박을 걸면 흔들릴 가능성이 큽니다.');
    }

    if (strength >= 4) {
      cautions.push('상대 강도가 높은 편이므로 무리한 하이리스크 샷 비중을 줄이는 편이 좋습니다.');
    }
    if (mental === 'stable') {
      cautions.push('멘탈이 안정적인 타입이면 초반에 흔들리지 않았다고 바로 플랜을 바꾸지 않는 편이 좋습니다.');
    }

    return { plan, cautions };
  }, [mental, strength, style, weakness]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f5f3ff_0%,_#ffffff_34%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-violet-600 to-indigo-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">상대 분석</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">상대 스타일에 맞는 경기 플랜 만들기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-violet-50">
            상대를 완벽히 아는 것보다, 초반 몇 게임 안에 어떤 패턴으로 테스트할지 정해 두는 편이 훨씬 중요합니다.
            기본 정보를 넣으면 실전용 플랜을 빠르게 정리해 줍니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>상대 정보</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="opponent-name">이름</Label>
                <Input id="opponent-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="예: 김민수" />
              </div>
              <div>
                <Label className="mb-2 block">플레이 스타일</Label>
                <Select value={style} onValueChange={(value: Style) => setStyle(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="aggressive">공격형 베이스라이너</SelectItem>
                    <SelectItem value="defensive">수비형 베이스라이너</SelectItem>
                    <SelectItem value="all-court">올코트 플레이어</SelectItem>
                    <SelectItem value="net-rusher">네트 러셔</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="strength">체감 강도 (1~5)</Label>
                <Input id="strength" type="number" min="1" max="5" value={strength} onChange={(e) => setStrength(Number(e.target.value) || 1)} />
              </div>
              <div>
                <Label htmlFor="weakness">의심 약점</Label>
                <Input id="weakness" value={weakness} onChange={(e) => setWeakness(e.target.value)} placeholder="예: 백핸드, 짧은 볼 처리" />
              </div>
              <div>
                <Label className="mb-2 block">멘탈 상태</Label>
                <Select value={mental} onValueChange={(value: Mental) => setMental(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="stable">안정적</SelectItem>
                    <SelectItem value="average">보통</SelectItem>
                    <SelectItem value="shaky">압박에 흔들림</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">상대</p><p className="mt-2 text-xl font-bold text-slate-900">{name || '미입력'}</p></CardContent></Card>
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">스타일</p><p className="mt-2 text-xl font-bold text-slate-900">{style}</p></CardContent></Card>
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">강도</p><p className="mt-2 text-xl font-bold text-slate-900">{strength}/5</p></CardContent></Card>
            </div>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-violet-600" />
                  추천 플랜
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysis.plan.map((item) => (
                  <div key={item} className="rounded-2xl bg-violet-50 p-4 text-sm leading-6 text-violet-950">
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-amber-600" />
                  주의 포인트
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysis.cautions.length === 0 ? (
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">특별히 큰 경고 포인트는 없습니다. 초반 테스트를 통해 플랜을 확인하세요.</div>
                ) : (
                  analysis.cautions.map((item) => (
                    <div key={item} className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-950">
                      {item}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="grid gap-4 p-6 md:grid-cols-3">
                <div>
                  <div className="flex items-center gap-2 text-slate-900"><Swords className="h-4 w-4 text-violet-600" />초반 테스트</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">첫 두 게임 안에 약점 방향과 리턴 위치를 먼저 확인하세요.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-900"><Brain className="h-4 w-4 text-violet-600" />포인트 설계</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">한 포인트 안에 너무 많은 선택을 넣기보다 2단계 패턴으로 단순화하는 편이 좋습니다.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-900"><CheckCircle2 className="h-4 w-4 text-violet-600" />플랜 유지</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">한두 포인트 실패만으로 전략을 바꾸지 말고 최소 두 게임은 확인하세요.</p>
                </div>
              </CardContent>
            </Card>

            <div>
              <Button className="bg-violet-600 text-white hover:bg-violet-700">현재 플랜 기억해두기</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
