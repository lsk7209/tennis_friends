'use client';

import Link from 'next/link';
import { Award, CheckCircle2, Gamepad2, Play, Target, Timer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const modes = [
  {
    title: '기본 반응 테스트',
    description: '화면 신호가 바뀌는 순간 클릭해 기본 반응 속도를 확인합니다.',
    time: '30초',
    level: '입문',
  },
  {
    title: '랜덤 타이밍 테스트',
    description: '예측이 어려운 간격으로 신호가 바뀌어 실전과 가까운 긴장감을 만듭니다.',
    time: '45초',
    level: '중급',
  },
  {
    title: '멀티 신호 테스트',
    description: '여러 방향과 패턴을 동시에 처리해 코트에서의 판단 속도를 점검합니다.',
    time: '60초',
    level: '상급',
  },
];

export default function ReactionTestPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-10 text-white shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            <Zap className="h-4 w-4" />
            반응 속도 테스트
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">테니스에서 중요한 첫 반응을 점검하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-orange-50">
            좋은 준비 자세도 반응이 늦으면 늦습니다. 이 도구는 클릭 기반 테스트로 기본 반응 속도를 확인하고,
            반복 측정으로 변화 추이를 기록하는 데 초점을 둡니다.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/utility/reaction-test/test">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Play className="mr-2 h-5 w-5" />
                테스트 시작
              </Button>
            </Link>
            <Link href="/utility/focus-training">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                집중 훈련 보러 가기
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-6"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100"><Timer className="h-5 w-5 text-orange-600" /></div><h2 className="text-lg font-semibold text-slate-900">반응 시간 확인</h2><p className="mt-2 text-sm leading-6 text-slate-600">단순 평균이 아니라 여러 번의 반응 패턴을 보고 안정성을 확인합니다.</p></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-6"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100"><Target className="h-5 w-5 text-orange-600" /></div><h2 className="text-lg font-semibold text-slate-900">실전 감각 연결</h2><p className="mt-2 text-sm leading-6 text-slate-600">리턴 준비, 첫 스텝, 짧은 볼 대처처럼 실제 코트 상황과 연결해 해석할 수 있습니다.</p></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-6"><div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100"><Award className="h-5 w-5 text-orange-600" /></div><h2 className="text-lg font-semibold text-slate-900">반복 측정</h2><p className="mt-2 text-sm leading-6 text-slate-600">하루 컨디션 차이를 보기 좋고, 훈련 전후 비교에도 바로 쓸 수 있습니다.</p></CardContent></Card>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2">
            <Gamepad2 className="h-5 w-5 text-orange-600" />
            <h2 className="text-2xl font-semibold text-slate-900">테스트 모드</h2>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {modes.map((mode) => (
              <Card key={mode.title} className="border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-900">{mode.title}</h3>
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">{mode.level}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{mode.description}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                    <Timer className="h-4 w-4" />
                    {mode.time}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <Card className="border-0 bg-orange-50 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-orange-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-semibold">추천 루틴</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-orange-900">훈련 전 1회, 훈련 후 1회를 기록하면 집중력 변화와 피로 누적을 같이 보기 좋습니다.</p>
              </div>
              <Link href="/utility/reaction-test/test">
                <Button className="bg-orange-500 text-white hover:bg-orange-600">지금 테스트하기</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
