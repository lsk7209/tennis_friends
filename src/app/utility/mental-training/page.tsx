"use client";

import { useMemo, useState } from 'react';
import { AlertTriangle, Brain, CheckCircle2, Clock3, Sparkles, Wind } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

type Category = 'focus' | 'breathing' | 'confidence' | 'reset';

interface Drill {
  id: string;
  category: Category;
  title: string;
  duration: number;
  summary: string;
  steps: string[];
  cue: string;
}

const drills: Drill[] = [
  {
    id: 'between-point-reset',
    category: 'reset',
    title: '포인트 사이 리셋',
    duration: 2,
    summary: '실수 직후 감정을 끊고 다음 포인트 준비로 전환하는 루틴입니다.',
    steps: ['라켓 줄을 한 번 정리합니다.', '길게 내쉬며 어깨 힘을 풉니다.', '다음 한 포인트 목표를 한 문장으로 정합니다.'],
    cue: '다음 공 하나에만 집중',
  },
  {
    id: 'box-breathing',
    category: 'breathing',
    title: '4초 박스 호흡',
    duration: 4,
    summary: '긴장과 심박수를 낮춰 경기 흐름을 되찾는 가장 기본적인 호흡 훈련입니다.',
    steps: ['4초 들이마십니다.', '4초 멈춥니다.', '4초 내쉽니다.', '4초 멈춘 뒤 다시 반복합니다.'],
    cue: '호흡 길이가 리듬을 만든다',
  },
  {
    id: 'serve-visual',
    category: 'focus',
    title: '서브 전 이미지 트레이닝',
    duration: 3,
    summary: '공의 궤적과 첫 번째 타깃을 먼저 그려 두면 서브 정확도가 안정됩니다.',
    steps: ['토스 높이를 머릿속으로 그립니다.', '첫 바운드 지점을 정합니다.', '서브 후 첫 샷 방향까지 연결합니다.'],
    cue: '토스-임팩트-첫 샷을 한 흐름으로',
  },
  {
    id: 'confidence-script',
    category: 'confidence',
    title: '자신감 문장 고정',
    duration: 3,
    summary: '흔들릴 때마다 되풀이할 문장을 미리 정해 경기 중 자기 대화를 통제합니다.',
    steps: ['짧고 단정한 문장 하나를 고릅니다.', '서브 전과 체인지오버마다 반복합니다.', '결과가 아니라 행동 문장만 사용합니다.'],
    cue: '크게, 길게, 자신 있게',
  },
  {
    id: 'return-ready',
    category: 'focus',
    title: '리턴 준비 신호',
    duration: 2,
    summary: '리턴에서 시선과 발을 동시에 준비시키는 짧은 집중 훈련입니다.',
    steps: ['상대 토스 순간에 시선을 고정합니다.', '가볍게 스플릿 스텝을 준비합니다.', '리턴 목표를 코스 하나로 단순화합니다.'],
    cue: '먼저 보고, 짧게 반응',
  },
  {
    id: 'tiebreak-calm',
    category: 'confidence',
    title: '타이브레이크 침착 루틴',
    duration: 5,
    summary: '점수 압박이 높을수록 행동 루틴을 줄이고 확실한 패턴만 남기는 훈련입니다.',
    steps: ['첫 두 포인트 전략만 정합니다.', '과한 위닝샷 욕심을 버립니다.', '포인트 후 호흡과 시선 루틴을 반드시 반복합니다.'],
    cue: '공격보다 선택의 질',
  },
];

const categoryMeta: Record<Category, { label: string; color: string }> = {
  focus: { label: '집중', color: 'bg-sky-100 text-sky-700' },
  breathing: { label: '호흡', color: 'bg-emerald-100 text-emerald-700' },
  confidence: { label: '자신감', color: 'bg-amber-100 text-amber-700' },
  reset: { label: '리셋', color: 'bg-rose-100 text-rose-700' },
};

export default function MentalTrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedId, setSelectedId] = useState(drills[0].id);
  const [completed, setCompleted] = useState<string[]>([]);

  const visibleDrills = useMemo(() => {
    if (selectedCategory === 'all') {
      return drills;
    }
    return drills.filter((drill) => drill.category === selectedCategory);
  }, [selectedCategory]);

  const currentDrill = useMemo(
    () => visibleDrills.find((drill) => drill.id === selectedId) ?? visibleDrills[0] ?? drills[0],
    [selectedId, visibleDrills]
  );

  const completeCurrent = () => {
    if (!completed.includes(currentDrill.id)) {
      setCompleted([...completed, currentDrill.id]);
    }
  };

  const completionRate = Math.round((completed.length / drills.length) * 100);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f5f3ff_0%,_#ffffff_32%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-slate-900 px-8 py-10 text-white shadow-2xl">
          <div className="flex flex-wrap items-center gap-3">
            <Badge className="bg-white/10 text-white hover:bg-white/10">
              <Brain className="mr-2 h-4 w-4" />
              멘탈 트레이닝
            </Badge>
            <Badge className="bg-emerald-500/20 text-emerald-200 hover:bg-emerald-500/20">경기 전 2~5분 루틴</Badge>
          </div>
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">경기 집중력과 침착함을 만드는 훈련</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            테니스 멘탈은 추상적인 마음가짐보다 반복 가능한 행동 루틴으로 관리하는 편이 훨씬 효과적입니다.
            아래 훈련을 골라 짧게 실행하고, 자신에게 맞는 경기용 루틴으로 고정하세요.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white/90 shadow-sm">
            <CardHeader>
              <CardTitle className="text-slate-900">훈련 선택</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <p className="mb-3 text-sm font-medium text-slate-500">카테고리</p>
                <div className="flex flex-wrap gap-2">
                  <Button variant={selectedCategory === 'all' ? 'default' : 'outline'} size="sm" onClick={() => setSelectedCategory('all')}>
                    전체
                  </Button>
                  {(Object.keys(categoryMeta) as Category[]).map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {categoryMeta[category].label}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {visibleDrills.map((drill) => (
                  <button
                    key={drill.id}
                    type="button"
                    onClick={() => setSelectedId(drill.id)}
                    className={`w-full rounded-2xl border p-4 text-left transition ${
                      currentDrill.id === drill.id
                        ? 'border-violet-500 bg-violet-50'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-slate-900">{drill.title}</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">{drill.summary}</p>
                      </div>
                      {completed.includes(drill.id) && <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />}
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                      <Clock3 className="h-4 w-4" />
                      {drill.duration}분
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={categoryMeta[currentDrill.category].color}>{categoryMeta[currentDrill.category].label}</Badge>
                  <Badge variant="outline">{currentDrill.duration}분 루틴</Badge>
                </div>
                <CardTitle className="text-2xl text-slate-900">{currentDrill.title}</CardTitle>
                <p className="text-slate-600">{currentDrill.summary}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-medium text-slate-500">핵심 큐</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{currentDrill.cue}</p>
                </div>

                <div>
                  <h2 className="mb-3 text-lg font-semibold text-slate-900">실행 단계</h2>
                  <div className="space-y-3">
                    {currentDrill.steps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3 rounded-2xl border border-slate-200 p-4">
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold text-white">
                          {index + 1}
                        </div>
                        <p className="text-sm leading-6 text-slate-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button className="bg-violet-600 text-white hover:bg-violet-700" onClick={completeCurrent}>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    이 훈련 완료 표시
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedCategory('all')}>
                    다른 훈련 보기
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Sparkles className="h-5 w-5 text-violet-600" />
                  진행 상황
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>완료한 훈련</span>
                  <span>{completed.length}/{drills.length}</span>
                </div>
                <Progress value={completionRate} className="h-3" />
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">권장 빈도</p>
                    <p className="mt-2 font-semibold text-slate-900">주 3회 이상</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">실전 적용</p>
                    <p className="mt-2 font-semibold text-slate-900">서브 전 1문장 루틴</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">추천 조합</p>
                    <p className="mt-2 font-semibold text-slate-900">호흡 + 포인트 리셋</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardContent className="flex gap-3 p-5">
                <AlertTriangle className="mt-0.5 h-5 w-5 text-amber-600" />
                <div className="space-y-2 text-sm leading-6 text-amber-900">
                  <p className="font-semibold">사용 팁</p>
                  <p>멘탈 훈련은 길게 하는 것보다 경기 중 바로 꺼내 쓸 수 있는 문장과 행동으로 고정하는 편이 좋습니다.</p>
                  <p>특히 흔들리는 상황에서는 새로운 기술보다 이미 익숙한 루틴 하나를 반복하는 것이 더 안정적입니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
