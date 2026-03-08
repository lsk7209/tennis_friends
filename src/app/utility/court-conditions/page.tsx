"use client";

import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2, Cloud, Eye, MapPin, Thermometer, Wind } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Surface = 'hard' | 'clay' | 'grass' | 'indoor';
type Condition = 'excellent' | 'good' | 'fair' | 'poor';

export default function CourtConditionsPage() {
  const [surface, setSurface] = useState<Surface>('hard');
  const [condition, setCondition] = useState<Condition>('good');
  const [temperature, setTemperature] = useState(22);
  const [humidity, setHumidity] = useState(55);
  const [wind, setWind] = useState(5);
  const [lighting, setLighting] = useState('good');

  const analysis = useMemo(() => {
    let score = 100;
    const tips: string[] = [];
    const risks: string[] = [];

    if (condition === 'fair') {
      score -= 15;
      risks.push('코트 표면이 고르지 않아 풋워크 안정감이 떨어질 수 있습니다.');
    }
    if (condition === 'poor') {
      score -= 30;
      risks.push('코트 상태가 좋지 않아 미끄러짐과 발목 부담이 커질 수 있습니다.');
    }
    if (temperature < 8 || temperature > 30) {
      score -= 20;
      risks.push('기온 조건이 극단적이라 경기 집중력과 체력 유지가 어렵습니다.');
    }
    if (humidity > 80) {
      score -= 10;
      risks.push('습도가 높아 땀 관리와 그립 유지가 어려울 수 있습니다.');
    }
    if (wind > 14 && surface !== 'indoor') {
      score -= 20;
      risks.push('바람이 강해 토스와 높은 탄도의 샷이 흔들릴 수 있습니다.');
    }
    if (lighting === 'fair') {
      score -= 10;
      risks.push('조명이 애매해 야간 볼 추적이 불편할 수 있습니다.');
    }
    if (lighting === 'poor') {
      score -= 20;
      risks.push('조명이 부족해 안전한 플레이가 우선입니다.');
    }

    if (surface === 'clay') tips.push('클레이는 슬라이딩 여유를 감안해 스텝을 넓게 준비하세요.');
    if (surface === 'grass') tips.push('잔디에서는 낮고 빠른 바운드를 대비해 준비 자세를 낮추는 편이 좋습니다.');
    if (surface === 'hard') tips.push('하드코트는 무릎과 발목 부담이 크므로 워밍업을 길게 잡으세요.');
    if (surface === 'indoor') tips.push('실내 코트는 바람 변수는 적지만 리듬이 빨라질 수 있습니다.');
    if (score >= 70) tips.push('현재 조건에서는 평소 패턴을 유지해도 무리가 크지 않습니다.');
    else tips.push('무리한 위닝샷보다 안전한 전개와 풋워크 안정이 먼저입니다.');

    return { score: Math.max(0, score), tips, risks };
  }, [condition, humidity, lighting, surface, temperature, wind]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ecfdf5_0%,_#ffffff_34%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-emerald-600 to-green-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">코트 상태 체크</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">오늘 코트 환경에서 어떻게 플레이할지 판단하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">
            코트 표면과 날씨가 바뀌면 평소와 같은 전술이 잘 안 통할 수 있습니다. 간단한 환경 조건을 넣어 현재 플레이 적합도를 확인하세요.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-600" />
                환경 입력
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label className="mb-2 block">코트 종류</Label>
                <Select value={surface} onValueChange={(value: Surface) => setSurface(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hard">하드</SelectItem>
                    <SelectItem value="clay">클레이</SelectItem>
                    <SelectItem value="grass">잔디</SelectItem>
                    <SelectItem value="indoor">실내</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">표면 상태</Label>
                <Select value={condition} onValueChange={(value: Condition) => setCondition(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">매우 좋음</SelectItem>
                    <SelectItem value="good">좋음</SelectItem>
                    <SelectItem value="fair">보통</SelectItem>
                    <SelectItem value="poor">나쁨</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label htmlFor="temp">기온</Label><Input id="temp" type="number" value={temperature} onChange={(e) => setTemperature(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="humidity">습도</Label><Input id="humidity" type="number" value={humidity} onChange={(e) => setHumidity(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="wind">바람</Label><Input id="wind" type="number" value={wind} onChange={(e) => setWind(Number(e.target.value) || 0)} /></div>
                <div>
                  <Label className="mb-2 block">조명</Label>
                  <Select value={lighting} onValueChange={setLighting}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="excellent">매우 좋음</SelectItem>
                      <SelectItem value="good">좋음</SelectItem>
                      <SelectItem value="fair">보통</SelectItem>
                      <SelectItem value="poor">나쁨</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">적합 점수</p><p className="mt-2 text-2xl font-bold text-emerald-700">{analysis.score}점</p></CardContent></Card>
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">코트</p><p className="mt-2 text-2xl font-bold text-slate-900">{surface}</p></CardContent></Card>
              <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">표면 상태</p><p className="mt-2 text-2xl font-bold text-slate-900">{condition}</p></CardContent></Card>
            </div>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-emerald-600" />
                  환경 요약
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">기온</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Thermometer className="h-4 w-4" />{temperature}도</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">습도</p><p className="mt-2 font-semibold text-slate-900">{humidity}%</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">바람</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Wind className="h-4 w-4" />{wind}km/h</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">조명</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Eye className="h-4 w-4" />{lighting}</p></div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  추천 전략
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysis.tips.map((tip) => (
                  <div key={tip} className="rounded-2xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-900">
                    {tip}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  주의 사항
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysis.risks.length === 0 ? (
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">현재 조건에서 큰 위험 신호는 많지 않습니다.</div>
                ) : (
                  analysis.risks.map((risk) => (
                    <div key={risk} className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                      {risk}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <div>
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700">현재 조건 저장하기</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
