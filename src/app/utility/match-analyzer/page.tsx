"use client";

import Link from 'next/link';
import { BarChart3, CheckCircle2, Shield, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const sections = [
  { title: '서브 / 리턴', description: '첫 두 샷에서 어떤 흐름으로 포인트가 갈렸는지 확인합니다.' },
  { title: '랠리 패턴', description: '어느 방향, 어떤 길이의 랠리에서 실수가 늘었는지 봅니다.' },
  { title: '중요 포인트', description: '브레이크 포인트, 타이브레이크, 듀스 게임의 선택을 따로 봅니다.' },
  { title: '체력 / 집중력', description: '후반으로 갈수록 샷 질이 떨어졌는지 흐름으로 확인합니다.' },
];


export default function MatchAnalyzerPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#eff6ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-500 px-8 py-10 text-white shadow-xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">경기 데이터를 보고 다음 승부 포인트 찾기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-50">
            경기력은 감각만으로 복기하면 놓치는 부분이 많습니다. 이 도구는 서브, 리턴, 랠리, 중요 포인트를 나눠
            경기를 구조적으로 다시 보는 흐름에 맞춰 구성했습니다.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/utility/match-analyzer/test">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <BarChart3 className="mr-2 h-5 w-5" />
                경기 분석 시작
              </Button>
            </Link>
            <Link href="/utility/match-recorder">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                경기 기록 보러 가기
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {sections.map((section) => (
            <Card key={section.title} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">{section.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{section.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] bg-slate-900 px-8 py-8 text-white shadow-xl">
          <h2 className="text-2xl font-semibold">분석이 필요한 이유</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div><div className="flex items-center gap-2 text-slate-300"><TrendingUp className="h-4 w-4" />패턴 파악</div><p className="mt-2 text-sm leading-6 text-slate-300">자주 지는 상황을 알아야 연습도 정확해집니다.</p></div>
            <div><div className="flex items-center gap-2 text-slate-300"><Users className="h-4 w-4" />상대 대응</div><p className="mt-2 text-sm leading-6 text-slate-300">유형별로 약했던 상대를 따로 보면 전술 수정이 빨라집니다.</p></div>
            <div><div className="flex items-center gap-2 text-slate-300"><Shield className="h-4 w-4" />실수 축소</div><p className="mt-2 text-sm leading-6 text-slate-300">무리한 선택과 반복 실수를 줄이는 것이 가장 빠른 개선입니다.</p></div>
          </div>
        </section>

        <section className="mt-10">
          <Card className="border-0 bg-blue-50 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-semibold">추천 사용법</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-blue-900">한 경기마다 개선 포인트를 1개만 정리하면 실제 연습 반영률이 높아집니다.</p>
              </div>
              <Link href="/utility/match-analyzer/test">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">분석하러 가기</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
