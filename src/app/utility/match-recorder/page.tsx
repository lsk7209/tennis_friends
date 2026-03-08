'use client';

import Link from 'next/link';
import { BarChart3, Calendar, CheckCircle2, MapPin, Plus, Target, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Plus className="h-5 w-5 text-amber-600" />,
    title: '경기 기록',
    description: '상대, 스코어, 코트 종류, 메모를 한 번에 남겨 다음 복기에 바로 활용할 수 있습니다.',
  },
  {
    icon: <BarChart3 className="h-5 w-5 text-sky-600" />,
    title: '패턴 복기',
    description: '어떤 유형의 상대에게 흔들렸는지, 어떤 코트에서 강했는지 정리하기 좋습니다.',
  },
  {
    icon: <Target className="h-5 w-5 text-emerald-600" />,
    title: '개선 포인트',
    description: '서브, 리턴, 멘탈처럼 경기 후 바로 남겨야 할 포인트를 습관화할 수 있습니다.',
  },
];

const examples = [
  { date: '2026-03-05', opponent: '김현우', score: '6-4, 6-3 승', court: '하드', note: '세컨드 서브 안정감이 좋았고, 포핸드 깊이가 유지됨' },
  { date: '2026-03-02', opponent: '박지훈', score: '4-6, 7-6, 5-7 패', court: '클레이', note: '긴 랠리 이후 체력 저하와 리턴 위치 흔들림' },
  { date: '2026-02-26', opponent: '이도윤', score: '6-1, 6-2 승', court: '실내 하드', note: '짧은 볼 처리와 네트 접근 타이밍이 잘 맞음' },
];

export default function MatchRecorderPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fffbeb_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-amber-500 to-yellow-400 px-8 py-10 text-white shadow-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            <Trophy className="h-4 w-4" />
            경기 기록
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">테니스 경기를 기록하고 다음 경기력으로 연결하기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-amber-50">
            경기 직후 3분만 투자해도 복기 품질이 달라집니다. 스코어만 남기지 말고, 잘 된 패턴과 흔들린 순간을 같이 기록해 두세요.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/utility/match-recorder/test">
              <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50">
                <Plus className="mr-2 h-5 w-5" />
                경기 기록 시작
              </Button>
            </Link>
            <Link href="/utility/match-analyzer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                분석 도구 보기
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-slate-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">{feature.icon}</div>
                <h2 className="text-lg font-semibold text-slate-900">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="mt-10 rounded-[28px] bg-slate-900 px-8 py-8 text-white shadow-xl">
          <h2 className="text-2xl font-semibold">기록에 남기면 좋은 항목</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div><p className="text-sm text-slate-300">상대</p><p className="mt-2 font-semibold">플레이 스타일, 손잡이, 강점</p></div>
            <div><p className="text-sm text-slate-300">환경</p><p className="mt-2 font-semibold">코트 종류, 날씨, 시간대</p></div>
            <div><p className="text-sm text-slate-300">내용</p><p className="mt-2 font-semibold">서브, 리턴, 랠리 패턴</p></div>
            <div><p className="text-sm text-slate-300">후속 액션</p><p className="mt-2 font-semibold">다음 연습에서 확인할 과제 1개</p></div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-amber-600" />
            <h2 className="text-2xl font-semibold text-slate-900">기록 예시</h2>
          </div>
          <div className="mt-6 space-y-4">
            {examples.map((match) => (
              <Card key={`${match.date}-${match.opponent}`} className="border-slate-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{match.date}</span>
                      <span className="flex items-center gap-1"><Users className="h-4 w-4" />vs {match.opponent}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{match.court}</span>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-sm font-medium ${match.score.includes('승') ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                      {match.score}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-slate-600"><span className="font-semibold text-slate-900">메모</span> {match.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <Card className="border-0 bg-amber-50 shadow-sm">
            <CardContent className="flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-2 text-amber-700">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="font-semibold">추천 습관</p>
                </div>
                <p className="mt-2 text-sm leading-6 text-amber-900">경기 직후 3줄 메모만 남겨도 다음 연습의 방향이 선명해집니다.</p>
              </div>
              <Link href="/utility/match-recorder/test">
                <Button className="bg-amber-500 text-white hover:bg-amber-600">지금 기록하러 가기</Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
