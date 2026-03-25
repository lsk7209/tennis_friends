"use client";

import { useMemo, useState } from 'react';
import { CheckCircle2, Target, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface Pattern {
  name: string;
  density: 'open' | 'medium' | 'dense';
  bestFor: string[];
  pros: string[];
  cons: string[];
  tension: string;
  baseScore: number;
}

const patterns: Pattern[] = [
  { name: '16x19', density: 'medium', bestFor: ['균형형 플레이어', '범용 라켓'], pros: ['파워와 컨트롤 균형', '가장 무난한 선택'], cons: ['특정 성향에 극단적이지 않음'], tension: '52-58 lbs', baseScore: 86 },
  { name: '18x20', density: 'dense', bestFor: ['정확도 중시', '플랫 히터'], pros: ['컨트롤 우수', '탄도 안정감'], cons: ['스핀과 반발력이 낮게 느껴질 수 있음'], tension: '55-62 lbs', baseScore: 90 },
  { name: '16x18', density: 'open', bestFor: ['스핀 지향', '편한 타구감'], pros: ['반발력 좋음', '스핀 잠재력 높음'], cons: ['컨트롤이 흔들릴 수 있음'], tension: '50-56 lbs', baseScore: 80 },
  { name: '16x15', density: 'open', bestFor: ['파워 우선', '입문자'], pros: ['쉽게 공이 나감', '편한 타구감'], cons: ['내구성과 방향성이 아쉬울 수 있음'], tension: '48-54 lbs', baseScore: 76 },
];


export default function StringPatternAnalyzerPage() {
  const [pattern, setPattern] = useState('16x19');
  const [skill, setSkill] = useState('intermediate');
  const [style, setStyle] = useState('balanced');
  const [budget, setBudget] = useState('medium');

  const recommendation = useMemo(() => {
    const selected = patterns.find((item) => item.name === pattern);
    if (!selected) return null;

    let score = selected.baseScore;
    if (skill === 'beginner' && selected.density === 'dense') score -= 10;
    if (skill === 'advanced' && selected.density === 'dense') score += 5;
    if (style === 'control' && selected.density === 'dense') score += 8;
    if (style === 'spin' && selected.density === 'open') score += 8;
    if (style === 'power' && selected.density === 'open') score += 6;
    if (budget === 'low' && selected.name === '18x20') score -= 8;

    return { ...selected, score: Math.max(0, Math.min(100, score)) };
  }, [budget, pattern, skill, style]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f5f3ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-10 text-white shadow-xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">스트링 패턴이 내 플레이에 맞는지 확인하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-violet-50">
            같은 라켓이라도 스트링 패턴에 따라 타구감과 탄도가 꽤 달라집니다. 현재 패턴과 플레이 성향을 기준으로
            어떤 선택이 더 맞는지 빠르게 비교할 수 있습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>조건 선택</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-2 block">스트링 패턴</Label>
                <Select value={pattern} onValueChange={setPattern}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {patterns.map((item) => (
                      <SelectItem key={item.name} value={item.name}>{item.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="mb-3 block">실력 수준</Label>
                <RadioGroup value={skill} onValueChange={setSkill} className="space-y-3">
                  <div className="flex items-center gap-2"><RadioGroupItem value="beginner" id="skill-beginner" /><Label htmlFor="skill-beginner">입문</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="intermediate" id="skill-intermediate" /><Label htmlFor="skill-intermediate">중급</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="advanced" id="skill-advanced" /><Label htmlFor="skill-advanced">상급</Label></div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">플레이 성향</Label>
                <RadioGroup value={style} onValueChange={setStyle} className="space-y-3">
                  <div className="flex items-center gap-2"><RadioGroupItem value="balanced" id="style-balanced" /><Label htmlFor="style-balanced">균형형</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="control" id="style-control" /><Label htmlFor="style-control">컨트롤 우선</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="spin" id="style-spin" /><Label htmlFor="style-spin">스핀 우선</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="power" id="style-power" /><Label htmlFor="style-power">파워 우선</Label></div>
                </RadioGroup>
              </div>

              <div>
                <Label className="mb-3 block">예산 성향</Label>
                <RadioGroup value={budget} onValueChange={setBudget} className="space-y-3">
                  <div className="flex items-center gap-2"><RadioGroupItem value="low" id="budget-low" /><Label htmlFor="budget-low">가성비 우선</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="medium" id="budget-medium" /><Label htmlFor="budget-medium">균형형</Label></div>
                  <div className="flex items-center gap-2"><RadioGroupItem value="high" id="budget-high" /><Label htmlFor="budget-high">성능 우선</Label></div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {recommendation && (
            <div className="space-y-6">
              <Card className="border-slate-200 bg-white shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{recommendation.name}</CardTitle>
                      <p className="mt-1 text-sm text-slate-500">권장 텐션 {recommendation.tension}</p>
                    </div>
                    <Badge variant="outline">{recommendation.density}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-violet-600">{recommendation.score}점</span>
                    <Progress value={recommendation.score} className="h-3 flex-1" />
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-medium text-slate-500">잘 맞는 유형</p>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.bestFor.map((item) => (
                        <Badge key={item} className="bg-violet-100 text-violet-700 hover:bg-violet-100">{item}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-emerald-700">
                      <CheckCircle2 className="h-5 w-5" />
                      장점
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recommendation.pros.map((item) => (
                      <div key={item} className="rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">{item}</div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-rose-700">
                      <XCircle className="h-5 w-5" />
                      주의점
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recommendation.cons.map((item) => (
                      <div key={item} className="rounded-2xl bg-rose-50 p-4 text-sm leading-6 text-rose-900">{item}</div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <Card className="border-slate-200 bg-slate-50">
                <CardContent className="grid gap-4 p-6 md:grid-cols-3">
                  <div>
                    <div className="flex items-center gap-2 text-slate-900"><Target className="h-4 w-4 text-violet-600" />해석 팁</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">패턴은 스트링 종류와 텐션과 함께 봐야 실제 타구감이 더 정확합니다.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-slate-900"><CheckCircle2 className="h-4 w-4 text-violet-600" />입문자 기준</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">입문자는 극단적인 패턴보다 16x19 같은 범용형이 보통 더 무난합니다.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-slate-900"><Target className="h-4 w-4 text-violet-600" />성향 우선</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">스핀과 컨트롤 중 무엇을 더 우선하는지 먼저 정하면 선택이 쉬워집니다.</p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <Button className="bg-violet-600 text-white hover:bg-violet-700">이 추천 기억해두기</Button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
