import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
"use client";

import { useMemo, useState } from 'react';
import { Calendar, CheckCircle2, Plus, Target, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type GoalCategory = '기술' | '체력' | '멘탈' | '경기' | '기타';

interface GoalItem {
  id: string;
  title: string;
  description: string;
  category: GoalCategory;
  current: number;
  target: number;
  unit: string;
  deadline: string;
}

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 목표 설정",
  description: "단계별 테니스 목표를 설정하고 달성 계획을 세웁니다.",
  path: "/utility/goal-setting",
  type: "website",
  tags: ["목표 설정", "성장 계획", "동기부여"],
});

export default function GoalSettingPage() {
  const [goals, setGoals] = useState<GoalItem[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<GoalCategory>('기술');
  const [current, setCurrent] = useState(0);
  const [target, setTarget] = useState(10);
  const [unit, setUnit] = useState('회');
  const [deadline, setDeadline] = useState('');

  const stats = useMemo(() => {
    const completed = goals.filter((goal) => goal.current >= goal.target).length;
    const rate = goals.length ? Math.round((completed / goals.length) * 100) : 0;
    return { completed, rate };
  }, [goals]);

  const addGoal = () => {
    if (!title.trim() || !deadline) return;
    setGoals((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, description, category, current, target, unit, deadline },
    ]);
    setTitle('');
    setDescription('');
    setCategory('기술');
    setCurrent(0);
    setTarget(10);
    setUnit('회');
    setDeadline('');
  };

  const updateProgress = (id: string, nextValue: number) => {
    setGoals((prev) => prev.map((goal) => (goal.id === id ? { ...goal, current: Math.min(nextValue, goal.target) } : goal)));
  };

  const removeGoal = (id: string) => {
    setGoals((prev) => prev.filter((goal) => goal.id !== id));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#eef2ff_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-indigo-600 to-violet-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">목표 설정</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">실행 가능한 테니스 목표를 만들기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-indigo-50">
            좋은 목표는 막연한 다짐보다 훨씬 구체적이어야 합니다. 현재 값, 목표 값, 기한을 함께 적어 두면
            연습 루틴과 경기 준비가 훨씬 선명해집니다.
          </p>
        </section>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">전체 목표</p><p className="mt-2 text-2xl font-bold text-slate-900">{goals.length}</p></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">완료 목표</p><p className="mt-2 text-2xl font-bold text-emerald-600">{stats.completed}</p></CardContent></Card>
          <Card className="border-slate-200 bg-white shadow-sm"><CardContent className="p-5"><p className="text-sm text-slate-500">완료율</p><p className="mt-2 text-2xl font-bold text-indigo-600">{stats.rate}%</p></CardContent></Card>
        </div>

        <section className="mt-8 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>새 목표 추가</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="goal-title">목표 제목</Label>
                <Input id="goal-title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="예: 세컨드 서브 성공률 60% 만들기" />
              </div>
              <div>
                <Label htmlFor="goal-desc">설명</Label>
                <Textarea id="goal-desc" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="왜 필요한지, 어떤 루틴으로 달성할지 적어두세요." rows={4} />
              </div>
              <div>
                <Label className="mb-2 block">카테고리</Label>
                <Select value={category} onValueChange={(value: GoalCategory) => setCategory(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="기술">기술</SelectItem>
                    <SelectItem value="체력">체력</SelectItem>
                    <SelectItem value="멘탈">멘탈</SelectItem>
                    <SelectItem value="경기">경기</SelectItem>
                    <SelectItem value="기타">기타</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <Label htmlFor="goal-current">현재</Label>
                  <Input id="goal-current" type="number" value={current} onChange={(event) => setCurrent(Number(event.target.value) || 0)} />
                </div>
                <div>
                  <Label htmlFor="goal-target">목표</Label>
                  <Input id="goal-target" type="number" value={target} onChange={(event) => setTarget(Number(event.target.value) || 0)} />
                </div>
                <div>
                  <Label htmlFor="goal-unit">단위</Label>
                  <Input id="goal-unit" value={unit} onChange={(event) => setUnit(event.target.value)} />
                </div>
              </div>
              <div>
                <Label htmlFor="goal-deadline">기한</Label>
                <Input id="goal-deadline" type="date" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
              </div>
              <Button onClick={addGoal} className="w-full bg-indigo-600 text-white hover:bg-indigo-700">
                <Plus className="mr-2 h-4 w-4" />
                목표 추가
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-6">
            {goals.length === 0 ? (
              <Card className="border-dashed border-slate-300 bg-white">
                <CardContent className="p-10 text-center text-slate-600">
                  아직 등록된 목표가 없습니다. 왼쪽 폼에서 첫 목표를 만들어 보세요.
                </CardContent>
              </Card>
            ) : (
              goals.map((goal) => {
                const progress = goal.target > 0 ? Math.min(Math.round((goal.current / goal.target) * 100), 100) : 0;
                const completed = goal.current >= goal.target;

                return (
                  <Card key={goal.id} className="border-slate-200 bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-xl font-semibold text-slate-900">{goal.title}</h2>
                            <Badge variant="outline">{goal.category}</Badge>
                            {completed && (
                              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                                <CheckCircle2 className="mr-1 h-3 w-3" />
                                완료
                              </Badge>
                            )}
                          </div>
                          <p className="mt-3 text-sm leading-6 text-slate-600">{goal.description || '설명이 없는 목표입니다.'}</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => removeGoal(goal.id)}>
                          <Trash2 className="h-4 w-4 text-rose-600" />
                        </Button>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="flex items-center justify-between text-sm text-slate-600">
                          <span>{goal.current} / {goal.target} {goal.unit}</span>
                          <span>{progress}%</span>
                        </div>
                        <Progress value={progress} className="h-3" />
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Calendar className="h-4 w-4" />
                            {goal.deadline}
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" onClick={() => updateProgress(goal.id, goal.current + 1)}>+1</Button>
                            <Button variant="outline" size="sm" onClick={() => updateProgress(goal.id, goal.current + 5)}>+5</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            )}

            <Card className="border-slate-200 bg-slate-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Target className="h-5 w-5 text-indigo-600" />
                  목표 작성 팁
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-900">숫자로 적기</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">좋은 목표는 서브 향상보다 세컨드 서브 성공률 60%처럼 숫자가 들어갑니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">기한 정하기</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">기한이 있어야 연습 빈도와 체크 시점을 잡을 수 있습니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">하나씩 좁히기</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">동시에 여러 기술을 고치려 하기보다 한 달에 한 가지씩 밀어 붙이는 편이 효과적입니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
