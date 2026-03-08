'use client';

import Link from 'next/link';
import { Activity, CheckCircle2, Dumbbell, Heart, RotateCcw, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const items = [
  { title: '어깨 회전', description: '서브와 스매시에 직접 영향을 주는 가동 범위를 봅니다.' },
  { title: '흉추 회전', description: '몸통 회전이 부족하면 볼에 힘이 실리지 않고 어깨 부담이 커집니다.' },
  { title: '고관절 움직임', description: '하체 회전과 오픈 스탠스 안정감에 중요한 영역입니다.' },
  { title: '햄스트링 / 종아리', description: '짧은 볼 대처와 스플릿 스텝 착지 안정감에 영향을 줍니다.' },
];

export default function FlexibilityTestPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ecfeff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-teal-500 to-cyan-500 px-8 py-10 text-white shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            <Activity className="h-4 w-4" />
            유연성 테스트
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">테니스 움직임에 필요한 가동 범위 확인하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-cyan-50">
            유연성은 단순 스트레칭 수준이 아니라 서브, 회전, 이동 효율과 직접 연결됩니다. 이 테스트는 주요 관절과 부위의 가동 범위를 간단히 점검하는 데 초점을 둡니다.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/utility/flexibility-test/test">
              <Button size="lg" className="bg-white text-teal-600 hover:bg-cyan-50">
                <Activity className="mr-2 h-5 w-5" />
                테스트 시작
              </Button>
            </Link>
            <Link href="/utility/recovery-routine-generator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                회복 루틴 보기
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                  <Target className="h-5 w-5 text-teal-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] bg-slate-900 px-8 py-8 text-white shadow-xl">
          <h2 className="text-2xl font-semibold">이 테스트가 필요한 이유</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div><div className="flex items-center gap-2 text-slate-300"><Heart className="h-4 w-4" />부상 예방</div><p className="mt-2 text-sm leading-6 text-slate-300">가동 범위 부족은 어깨, 허리, 무릎 부담으로 바로 이어질 수 있습니다.</p></div>
            <div><div className="flex items-center gap-2 text-slate-300"><Dumbbell className="h-4 w-4" />퍼포먼스 향상</div><p className="mt-2 text-sm leading-6 text-slate-300">회전과 스텝 효율이 좋아지면 같은 힘으로도 더 좋은 볼을 만들 수 있습니다.</p></div>
            <div><div className="flex items-center gap-2 text-slate-300"><RotateCcw className="h-4 w-4" />회복 점검</div><p className="mt-2 text-sm leading-6 text-slate-300">강한 훈련 주간 뒤에 다시 보면 피로 누적 상태도 간접적으로 확인할 수 있습니다.</p></div>
          </div>
        </section>

        <section className="mt-10">
          <Card className="border-0 bg-teal-50 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-teal-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-semibold">추천 사용법</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-teal-900">대회 전보다는 평소 컨디션이 안정된 날에 측정하고, 4주 간격으로 다시 보는 편이 좋습니다.</p>
              </div>
              <Link href="/utility/flexibility-test/test">
                <Button className="bg-teal-500 text-white hover:bg-teal-600">테스트하러 가기</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
