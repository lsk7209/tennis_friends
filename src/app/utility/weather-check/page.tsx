import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
"use client";

import { useMemo, useState } from 'react';
import { AlertTriangle, Calendar, CheckCircle2, Cloud, Droplets, Eye, MapPin, Thermometer, Wind } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const metadata: Metadata = generatePageMetadata({
  title: "날씨 확인",
  description: "테니스 경기에 적합한 날씨 조건을 확인합니다.",
  path: "/utility/weather-check",
  type: "website",
  tags: ["날씨", "야외 코트", "경기 조건"],
});

export default function WeatherCheckPage() {
  const [location, setLocation] = useState('서울');
  const [date, setDate] = useState('today');
  const [temperature, setTemperature] = useState(22);
  const [humidity, setHumidity] = useState(55);
  const [wind, setWind] = useState(6);
  const [rain, setRain] = useState(10);
  const [uv, setUv] = useState(4);
  const [visibility, setVisibility] = useState(12);

  const analysis = useMemo(() => {
    let score = 100;
    const warnings: string[] = [];
    const tips: string[] = [];

    if (temperature < 8) {
      score -= 35;
      warnings.push('기온이 낮아 몸이 굳기 쉽습니다.');
      tips.push('워밍업 시간을 길게 잡고 보온 레이어를 준비하세요.');
    } else if (temperature > 30) {
      score -= 30;
      warnings.push('고온 환경으로 체력 저하가 빠를 수 있습니다.');
      tips.push('한 세트마다 수분을 보충하고 그늘 휴식을 넣으세요.');
    } else {
      tips.push('기온은 비교적 안정적입니다.');
    }

    if (humidity > 80) {
      score -= 15;
      warnings.push('습도가 높아 땀 배출이 어렵습니다.');
      tips.push('흡습속건 의류와 수건을 챙기세요.');
    }

    if (wind > 14) {
      score -= 20;
      warnings.push('바람이 강해 볼 컨트롤이 어렵습니다.');
      tips.push('로브보다 낮은 탄도의 안전한 패턴을 쓰는 편이 좋습니다.');
    }

    if (rain > 40) {
      score -= 35;
      warnings.push('강수 확률이 높아 야외 경기 위험이 큽니다.');
      tips.push('실내 코트 대안이나 일정 조정을 먼저 확인하세요.');
    }

    if (uv > 7) {
      score -= 10;
      warnings.push('자외선 지수가 높습니다.');
      tips.push('모자, 선크림, 선글라스를 준비하세요.');
    }

    if (visibility < 6) {
      score -= 10;
      warnings.push('시야가 좋지 않아 볼 추적이 불편할 수 있습니다.');
    }

    let status = '좋음';
    if (score < 40) status = '주의';
    else if (score < 70) status = '보통';

    return { score: Math.max(0, score), status, warnings, tips };
  }, [humidity, rain, temperature, uv, visibility, wind]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-sky-600 to-blue-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">날씨 체크</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">테니스 치기 좋은 날씨인지 빠르게 판단하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-sky-50">
            야외 테니스는 기온보다도 바람, 습도, 강수 확률의 영향을 크게 받습니다. 간단한 수치를 넣으면
            오늘 경기 진행 여부와 준비 포인트를 빠르게 확인할 수 있습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-sky-600" />
                조건 입력
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label className="mb-2 block">지역</Label>
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="서울">서울</SelectItem>
                    <SelectItem value="경기">경기</SelectItem>
                    <SelectItem value="인천">인천</SelectItem>
                    <SelectItem value="부산">부산</SelectItem>
                    <SelectItem value="대구">대구</SelectItem>
                    <SelectItem value="광주">광주</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">날짜</Label>
                <Select value={date} onValueChange={setDate}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">오늘</SelectItem>
                    <SelectItem value="tomorrow">내일</SelectItem>
                    <SelectItem value="weekend">이번 주말</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label htmlFor="temp">기온</Label><Input id="temp" type="number" value={temperature} onChange={(e) => setTemperature(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="humidity">습도</Label><Input id="humidity" type="number" value={humidity} onChange={(e) => setHumidity(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="wind">바람</Label><Input id="wind" type="number" value={wind} onChange={(e) => setWind(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="rain">강수 확률</Label><Input id="rain" type="number" value={rain} onChange={(e) => setRain(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="uv">자외선</Label><Input id="uv" type="number" value={uv} onChange={(e) => setUv(Number(e.target.value) || 0)} /></div>
                <div><Label htmlFor="visibility">가시거리</Label><Input id="visibility" type="number" value={visibility} onChange={(e) => setVisibility(Number(e.target.value) || 0)} /></div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>분석 결과</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-sky-50 p-5">
                  <p className="text-sm text-sky-700">지역 / 날짜</p>
                  <p className="mt-2 text-xl font-bold text-sky-800">{location} · {date === 'today' ? '오늘' : date === 'tomorrow' ? '내일' : '이번 주말'}</p>
                </div>
                <div className="rounded-2xl bg-emerald-50 p-5">
                  <p className="text-sm text-emerald-700">적합 점수</p>
                  <p className="mt-2 text-2xl font-bold text-emerald-800">{analysis.score}점</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">판정</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">{analysis.status}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-sky-600" />
                  입력 요약
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">기온</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Thermometer className="h-4 w-4" />{temperature}도</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">습도</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Droplets className="h-4 w-4" />{humidity}%</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">바람</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Wind className="h-4 w-4" />{wind}km/h</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">강수 확률</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Cloud className="h-4 w-4" />{rain}%</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">자외선</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><AlertTriangle className="h-4 w-4" />{uv}</p></div>
                <div className="rounded-2xl bg-slate-50 p-4"><p className="text-sm text-slate-500">가시거리</p><p className="mt-2 flex items-center gap-2 font-semibold text-slate-900"><Eye className="h-4 w-4" />{visibility}km</p></div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                  추천 사항
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
                  <Calendar className="h-5 w-5 text-amber-600" />
                  주의 사항
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {analysis.warnings.length === 0 ? (
                  <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">특별한 위험 신호는 크지 않습니다. 기본 준비만 잘하면 됩니다.</div>
                ) : (
                  analysis.warnings.map((warning) => (
                    <div key={warning} className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                      {warning}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <div>
              <Button className="bg-sky-600 text-white hover:bg-sky-700">현재 조건 저장하기</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
