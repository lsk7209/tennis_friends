"use client";

import { useMemo, useState } from 'react';
import { Apple, Calculator, Clock3, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Goal = 'maintain' | 'lose' | 'gain';
type ActivityLevel = 'light' | 'moderate' | 'active';
type TennisDays = '1-2' | '3-4' | '5+';

export default function TennisDietPage() {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(65);
  const [age, setAge] = useState(30);
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activity, setActivity] = useState<ActivityLevel>('moderate');
  const [tennisDays, setTennisDays] = useState<TennisDays>('3-4');
  const [goal, setGoal] = useState<Goal>('maintain');

  const result = useMemo(() => {
    const bmr =
      gender === 'male'
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;

    const activityMap: Record<ActivityLevel, number> = {
      light: 1.35,
      moderate: 1.55,
      active: 1.75,
    };

    const tennisMap: Record<TennisDays, number> = {
      '1-2': 180,
      '3-4': 320,
      '5+': 480,
    };

    let calories = Math.round(bmr * activityMap[activity] + tennisMap[tennisDays]);
    if (goal === 'lose') calories -= 300;
    if (goal === 'gain') calories += 250;

    const carbs = Math.round((calories * 0.5) / 4);
    const protein = Math.round((calories * 0.25) / 4);
    const fat = Math.round((calories * 0.25) / 9);

    return { calories, carbs, protein, fat };
  }, [activity, age, gender, goal, height, tennisDays, weight]);

  const mealGuide = {
    maintain: [
      '아침: 오트밀, 바나나, 그릭요거트',
      '점심: 현미밥, 닭가슴살, 채소',
      '간식: 견과류와 과일',
      '저녁: 연어 또는 두부, 감자, 샐러드',
    ],
    lose: [
      '아침: 삶은 달걀, 그릭요거트, 베리',
      '점심: 샐러드 볼, 닭가슴살, 올리브오일',
      '간식: 사과와 아몬드',
      '저녁: 생선, 구운 채소, 소량의 탄수화물',
    ],
    gain: [
      '아침: 오트밀, 땅콩버터 토스트, 달걀',
      '점심: 밥, 소고기 또는 연어, 채소',
      '간식: 프로틴 쉐이크와 바나나',
      '저녁: 파스타 또는 감자, 단백질, 샐러드',
    ],
  }[goal];

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ecfdf5_0%,_#ffffff_34%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-green-600 to-emerald-500 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">영양 계산기</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">테니스 활동량에 맞는 식단 가이드</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-emerald-50">
            체중 조절과 경기력 유지는 같은 식단으로 해결되지 않습니다. 기본 정보와 테니스 빈도를 입력하면
            하루 권장 열량과 탄수화물, 단백질, 지방 비율을 빠르게 확인할 수 있습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[360px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-green-600" />
                입력 정보
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <Label htmlFor="height">키 (cm)</Label>
                <Input id="height" type="number" value={height} onChange={(event) => setHeight(Number(event.target.value) || 0)} />
              </div>
              <div>
                <Label htmlFor="weight">체중 (kg)</Label>
                <Input id="weight" type="number" value={weight} onChange={(event) => setWeight(Number(event.target.value) || 0)} />
              </div>
              <div>
                <Label htmlFor="age">나이</Label>
                <Input id="age" type="number" value={age} onChange={(event) => setAge(Number(event.target.value) || 0)} />
              </div>
              <div>
                <Label className="mb-2 block">성별</Label>
                <Select value={gender} onValueChange={(value: 'male' | 'female') => setGender(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">남성</SelectItem>
                    <SelectItem value="female">여성</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">일상 활동량</Label>
                <Select value={activity} onValueChange={(value: ActivityLevel) => setActivity(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">낮음</SelectItem>
                    <SelectItem value="moderate">보통</SelectItem>
                    <SelectItem value="active">높음</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">주간 테니스 빈도</Label>
                <Select value={tennisDays} onValueChange={(value: TennisDays) => setTennisDays(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-2">주 1~2회</SelectItem>
                    <SelectItem value="3-4">주 3~4회</SelectItem>
                    <SelectItem value="5+">주 5회 이상</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="mb-2 block">목표</Label>
                <Select value={goal} onValueChange={(value: Goal) => setGoal(value)}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintain">유지</SelectItem>
                    <SelectItem value="lose">감량</SelectItem>
                    <SelectItem value="gain">증량</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  계산 결과
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-4">
                <div className="rounded-2xl bg-green-50 p-5"><p className="text-sm text-green-700">하루 열량</p><p className="mt-2 text-2xl font-bold text-green-800">{result.calories}kcal</p></div>
                <div className="rounded-2xl bg-sky-50 p-5"><p className="text-sm text-sky-700">탄수화물</p><p className="mt-2 text-2xl font-bold text-sky-800">{result.carbs}g</p></div>
                <div className="rounded-2xl bg-amber-50 p-5"><p className="text-sm text-amber-700">단백질</p><p className="mt-2 text-2xl font-bold text-amber-800">{result.protein}g</p></div>
                <div className="rounded-2xl bg-rose-50 p-5"><p className="text-sm text-rose-700">지방</p><p className="mt-2 text-2xl font-bold text-rose-800">{result.fat}g</p></div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="h-5 w-5 text-green-600" />
                  영양 비율
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div><div className="mb-2 flex justify-between text-sm"><span>탄수화물 50%</span><span>{result.carbs}g</span></div><Progress value={50} className="h-3" /></div>
                <div><div className="mb-2 flex justify-between text-sm"><span>단백질 25%</span><span>{result.protein}g</span></div><Progress value={25} className="h-3" /></div>
                <div><div className="mb-2 flex justify-between text-sm"><span>지방 25%</span><span>{result.fat}g</span></div><Progress value={25} className="h-3" /></div>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock3 className="h-5 w-5 text-green-600" />
                  샘플 식단
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {mealGuide.map((meal) => (
                  <div key={meal} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                    {meal}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-6">
                <p className="font-semibold text-slate-900">사용 팁</p>
                <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                  <p>경기 2~3시간 전에는 소화가 잘되는 탄수화물과 적당한 단백질 조합이 안정적입니다.</p>
                  <p>경기 직후 30분 안에는 수분과 단백질을 먼저 보충하면 회복 체감이 확실히 좋아집니다.</p>
                  <p>장시간 야외 경기라면 식단보다도 수분과 전해질 관리가 먼저입니다.</p>
                </div>
                <div className="mt-5">
                  <Button className="bg-green-600 text-white hover:bg-green-700">현재 결과 기억해두기</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
