"use client";

import Link from 'next/link';
import { BarChart3, CheckCircle2, Target, TrendingUp, Upload, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    title: '스윙 궤적 확인',
    description: '포핸드와 백핸드의 준비, 임팩트, 피니시 흐름을 단계별로 점검하는 데 초점을 둡니다.',
    icon: <TrendingUp className="h-5 w-5 text-violet-600" />,
  },
  {
    title: '임팩트 일관성 체크',
    description: '매번 맞는 타점이 들쭉날쭉한지, 스윙 타이밍이 안정적인지 복기하기 좋습니다.',
    icon: <Target className="h-5 w-5 text-violet-600" />,
  },
  {
    title: '영상 기반 복기',
    description: '느린 화면으로 봐야 보이는 문제를 메모와 함께 정리할 수 있습니다.',
    icon: <Video className="h-5 w-5 text-violet-600" />,
  },
];


export default function SwingAnalyzerPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f5f3ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-violet-600 to-indigo-500 px-8 py-10 text-white shadow-xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">스윙 영상을 보고 핵심 교정 포인트 찾기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-violet-50">
            스윙 문제는 감으로 느끼는 것보다 영상으로 보는 편이 훨씬 빠릅니다. 이 도구는 영상을 바탕으로 궤적,
            타점, 일관성을 복기하는 흐름에 맞춰 구성했습니다.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50">
              <Upload className="mr-2 h-5 w-5" />
              영상 업로드 준비
            </Button>
            <Link href="/utility/match-video-review-template">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                영상 리뷰 템플릿 보기
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">{item.icon}</div>
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] bg-slate-900 px-8 py-8 text-white shadow-xl">
          <h2 className="text-2xl font-semibold">복기할 때 우선 볼 것</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div><p className="text-sm text-slate-300">준비 자세</p><p className="mt-2 font-semibold">타점 전에 이미 늦고 있지 않은지</p></div>
            <div><p className="text-sm text-slate-300">라켓 경로</p><p className="mt-2 font-semibold">백스윙과 피니시가 매번 같은지</p></div>
            <div><p className="text-sm text-slate-300">타점</p><p className="mt-2 font-semibold">몸 앞에서 맞고 있는지</p></div>
            <div><p className="text-sm text-slate-300">하체 연결</p><p className="mt-2 font-semibold">발이 멈춘 상태에서 팔만 쓰지 않는지</p></div>
          </div>
        </section>

        <section className="mt-10">
          <Card className="border-0 bg-violet-50 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-violet-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-semibold">추천 루틴</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-violet-900">정면 1개, 측면 1개만 찍어도 교정 포인트가 훨씬 선명해집니다.</p>
              </div>
              <Link href="/utility/match-video-review-template">
                <Button className="bg-violet-600 text-white hover:bg-violet-700">복기 템플릿 보기</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
