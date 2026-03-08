'use client';

import Link from 'next/link';
import { Brain, Play, Target, Wind, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const pillars = [
  {
    icon: <Target className="w-5 h-5 text-violet-600" />,
    title: '포인트 집중 루틴',
    description: '서브 전, 리턴 전, 체인지오버마다 같은 흐름을 반복해 집중력을 유지합니다.',
  },
  {
    icon: <Wind className="w-5 h-5 text-sky-600" />,
    title: '호흡 리셋',
    description: '실수 직후 호흡 패턴을 고정하면 다음 포인트에서 감정 흔들림을 줄일 수 있습니다.',
  },
  {
    icon: <Eye className="w-5 h-5 text-emerald-600" />,
    title: '시선 고정 훈련',
    description: '임팩트 직전과 리턴 준비 시 시선을 어디에 둘지 정하면 반응이 안정됩니다.',
  },
];

export default function FocusTrainingIntroPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#eef2ff,_#f8fafc_55%,_#ffffff)]">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-violet-600 px-4 py-2 text-sm font-medium text-white">
              <Brain className="w-4 h-4" />
              집중력 훈련
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              경기 중 흔들리지 않는
              <span className="block bg-gradient-to-r from-violet-600 to-sky-500 bg-clip-text text-transparent">
                테니스 집중 루틴
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              집중력은 타고나는 능력보다 반복 가능한 습관에 가깝습니다. 이 페이지는 포인트 사이 리셋,
              시선 고정, 호흡 패턴을 점검하고 본인에게 맞는 훈련 루틴을 찾도록 돕습니다.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/utility/focus-training/test">
                <Button size="lg" className="bg-violet-600 px-8 text-white hover:bg-violet-700">
                  <Play className="mr-2 w-5 h-5" />
                  집중력 테스트 시작
                </Button>
              </Link>
              <Link href="/utility/mental-training">
                <Button size="lg" variant="outline" className="px-8">
                  멘탈 훈련 도구 보기
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <Card key={pillar.title} className="border-slate-200 bg-white/80 shadow-sm backdrop-blur">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                    {pillar.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-10 border-0 bg-slate-900 text-white shadow-xl">
            <CardContent className="grid gap-6 p-8 md:grid-cols-3">
              <div>
                <p className="text-sm text-slate-300">추천 대상</p>
                <p className="mt-2 text-lg font-semibold">중요 포인트에서 급하게 서두르는 플레이어</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">활용 타이밍</p>
                <p className="mt-2 text-lg font-semibold">대회 전 10분, 연습 전 5분, 경기 후 복기</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">함께 쓰면 좋은 도구</p>
                <p className="mt-2 text-lg font-semibold">멘탈 트레이닝, 플레이 스타일 테스트</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
