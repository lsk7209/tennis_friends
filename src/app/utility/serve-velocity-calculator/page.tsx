"use client";

import { useMemo, useState } from 'react';
import { BarChart3, Calculator, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export default function ServeVelocityCalculatorPage() {
  const [distance, setDistance] = useState(18.5);
  const [time, setTime] = useState(0.62);
  const [height, setHeight] = useState(2.6);
  const [angle, setAngle] = useState(6);
  const [showResult, setShowResult] = useState(false);

  const result = useMemo(() => {
    const speedMps = time > 0 ? distance / time : 0;
    const speedKmh = speedMps * 3.6;
    const adjustedSpeed = speedKmh + Math.max(0, height - 2.3) * 4 + angle * 0.8;

    let grade = '입문';
    if (adjustedSpeed >= 170) grade = '상급';
    else if (adjustedSpeed >= 140) grade = '중상급';
    else if (adjustedSpeed >= 110) grade = '중급';

    return {
      speedMps: Math.round(speedMps * 10) / 10,
      speedKmh: Math.round(speedKmh),
      adjustedSpeed: Math.round(adjustedSpeed),
      grade,
    };
  }, [angle, distance, height, time]);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-orange-500 to-red-500 px-8 py-10 text-white shadow-xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">서브 속도 추정 계산기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-orange-50">
            거리와 시간, 타점 높이, 발사 각도를 바탕으로 서브 속도를 간단히 추정합니다. 정확한 레이더 측정값은 아니고, 연습용 비교 지표로 보는 편이 맞습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-orange-600" />
                입력값
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="distance">비행 거리 (m)</Label>
                <Input id="distance" type="number" step="0.1" value={distance} onChange={(e) => setDistance(Number(e.target.value) || 0)} />
              </div>
              <div>
                <Label htmlFor="time">비행 시간 (초)</Label>
                <Input id="time" type="number" step="0.01" value={time} onChange={(e) => setTime(Number(e.target.value) || 0)} />
              </div>
              <div>
                <Label htmlFor="height">타점 높이 (m)</Label>
                <Input id="height" type="number" step="0.1" value={height} onChange={(e) => setHeight(Number(e.target.value) || 0)} />
              </div>
              <div>
                <Label htmlFor="angle">발사 각도 (도)</Label>
                <Input id="angle" type="number" step="1" value={angle} onChange={(e) => setAngle(Number(e.target.value) || 0)} />
              </div>
              <Button className="w-full bg-orange-500 text-white hover:bg-orange-600" onClick={() => setShowResult(true)}>
                <Zap className="mr-2 h-4 w-4" />
                속도 계산
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {showResult ? (
              <>
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">추정 속도</p><p className="mt-2 text-2xl font-bold text-orange-600">{result.speedKmh} km/h</p></CardContent></Card>
                  <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">기본 환산</p><p className="mt-2 text-2xl font-bold text-slate-900">{result.speedMps} m/s</p></CardContent></Card>
                  <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">서브 등급</p><p className="mt-2 text-2xl font-bold text-slate-900">{result.grade}</p></CardContent></Card>
                </div>

                <Card className="border-slate-200 bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-orange-600" />
                      해석
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm leading-6 text-slate-600">
                    <p>기본 계산 속도는 시간과 거리만으로 구한 값이고, 보정 속도는 타점 높이와 발사 각도를 약하게 반영한 값입니다.</p>
                    <p>같은 속도라도 코스 정확도와 세컨드 서브 안정성이 더 중요할 수 있으니, 숫자만으로 서브 품질을 판단하지 않는 편이 좋습니다.</p>
                  </CardContent>
                </Card>

                <Card className="border-slate-200 bg-slate-50">
                  <CardContent className="grid gap-4 p-6 md:grid-cols-3">
                    <div><div className="flex items-center gap-2 text-slate-900"><Target className="h-4 w-4 text-orange-600" />타점 높이</div><p className="mt-2 text-sm leading-6 text-slate-600">타점이 높을수록 같은 스피드에서도 더 공격적인 궤적을 만들기 쉽습니다.</p></div>
                    <div><div className="flex items-center gap-2 text-slate-900"><Zap className="h-4 w-4 text-orange-600" />발사 각도</div><p className="mt-2 text-sm leading-6 text-slate-600">각도가 너무 낮으면 네트 위험이 커지고, 너무 높으면 속도 손실이 큽니다.</p></div>
                    <div><div className="flex items-center gap-2 text-slate-900"><Calculator className="h-4 w-4 text-orange-600" />기록 습관</div><p className="mt-2 text-sm leading-6 text-slate-600">같은 세팅으로 반복 측정하면 폼 변화 추이를 보는 데 유용합니다.</p></div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="border-dashed border-slate-300 bg-white">
                <CardContent className="p-10 text-center text-slate-600">
                  왼쪽 입력값을 넣고 계산을 누르면 서브 속도 추정 결과가 표시됩니다.
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
