'use client';

import { useMemo, useState } from 'react';
import { Cloud, Glasses, Shirt, Sun, Thermometer, Wind } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface ApparelItem {
  category: string;
  name: string;
  summary: string;
  price: string;
  tags: string[];
  weather: string[];
  levels: string[];
  icon: React.ReactNode;
}

const apparelItems: ApparelItem[] = [
  {
    category: '상의',
    name: '흡습속건 경기 셔츠',
    summary: '땀 배출이 빠르고 움직임이 편한 기본 경기용 상의입니다.',
    price: '4만~9만원',
    tags: ['통기성', '빠른 건조', '스트레치'],
    weather: ['sunny', 'hot', 'cloudy'],
    levels: ['beginner', 'intermediate', 'advanced'],
    icon: <Shirt className="w-5 h-5" />,
  },
  {
    category: '하의',
    name: '포켓 포함 쇼츠',
    summary: '공 보관이 편하고 발이 많이 움직이는 플레이에 잘 맞는 하의입니다.',
    price: '4만~8만원',
    tags: ['볼 포켓', '경량', '유연성'],
    weather: ['sunny', 'hot', 'windy'],
    levels: ['beginner', 'intermediate', 'advanced'],
    icon: <Shirt className="w-5 h-5" />,
  },
  {
    category: '신발',
    name: '하드코트 안정화 슈즈',
    summary: '옆 움직임이 많은 하드코트 플레이에서 발목 안정감이 좋은 모델입니다.',
    price: '11만~19만원',
    tags: ['안정감', '쿠셔닝', '내구성'],
    weather: ['sunny', 'cloudy', 'windy'],
    levels: ['intermediate', 'advanced'],
    icon: <Shirt className="w-5 h-5" />,
  },
  {
    category: '신발',
    name: '올코트 입문형 슈즈',
    summary: '첫 장비를 맞추는 단계에서 부담 없이 고르기 좋은 균형형 모델입니다.',
    price: '7만~12만원',
    tags: ['입문용', '편안함', '범용성'],
    weather: ['sunny', 'cloudy', 'windy'],
    levels: ['beginner'],
    icon: <Shirt className="w-5 h-5" />,
  },
  {
    category: '액세서리',
    name: '챙 넓은 캡 또는 바이저',
    summary: '햇빛이 강한 날 시야 확보와 땀 관리에 도움이 됩니다.',
    price: '2만~5만원',
    tags: ['자외선 차단', '시야 확보', '땀 흡수'],
    weather: ['sunny', 'hot'],
    levels: ['beginner', 'intermediate', 'advanced'],
    icon: <Sun className="w-5 h-5" />,
  },
  {
    category: '액세서리',
    name: '스포츠 선글라스',
    summary: '강한 햇빛과 눈부심이 심한 환경에서 눈 피로를 줄여 줍니다.',
    price: '6만~18만원',
    tags: ['눈부심 감소', 'UV 차단', '가벼운 착용감'],
    weather: ['sunny'],
    levels: ['intermediate', 'advanced'],
    icon: <Glasses className="w-5 h-5" />,
  },
];

const categories = ['상의', '하의', '신발', '액세서리'];

export default function ApparelRecommendationPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [weather, setWeather] = useState('sunny');
  const [level, setLevel] = useState('intermediate');
  const [budget, setBudget] = useState('medium');

  const filteredItems = useMemo(() => {
    return apparelItems.filter((item) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(item.category);
      const weatherMatch = item.weather.includes(weather);
      const levelMatch = item.levels.includes(level);

      if (!categoryMatch || !weatherMatch || !levelMatch) {
        return false;
      }

      if (budget === 'low') {
        return !item.price.includes('19만') && !item.price.includes('18만');
      }

      if (budget === 'high') {
        return item.category === '신발' || item.category === '액세서리';
      }

      return true;
    });
  }, [selectedCategories, weather, level, budget]);

  const toggleCategory = (category: string, checked: boolean) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((item) => item !== category)));
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_35%,_#f8fafc_100%)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-10 text-white shadow-xl">
          <Badge className="bg-white/15 text-white hover:bg-white/15">의류 추천</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">날씨와 경기 스타일에 맞는 테니스 의류 고르기</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-orange-50">
            브랜드보다 먼저 확인할 것은 코트 환경, 움직임, 땀 배출, 신발 안정감입니다. 조건을 고르면
            현재 상황에 맞는 의류와 액세서리를 빠르게 추릴 수 있습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader>
              <CardTitle>추천 조건</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium text-slate-500">카테고리</p>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center gap-2">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => toggleCategory(category, checked === true)}
                      />
                      <Label htmlFor={category}>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-500">날씨</p>
                <RadioGroup value={weather} onValueChange={setWeather} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="sunny" id="weather-sunny" />
                    <Label htmlFor="weather-sunny" className="flex items-center gap-2"><Sun className="w-4 h-4" />맑음</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="cloudy" id="weather-cloudy" />
                    <Label htmlFor="weather-cloudy" className="flex items-center gap-2"><Cloud className="w-4 h-4" />흐림</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="windy" id="weather-windy" />
                    <Label htmlFor="weather-windy" className="flex items-center gap-2"><Wind className="w-4 h-4" />바람 강함</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="hot" id="weather-hot" />
                    <Label htmlFor="weather-hot" className="flex items-center gap-2"><Thermometer className="w-4 h-4" />무더움</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-500">실력 수준</p>
                <RadioGroup value={level} onValueChange={setLevel} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="beginner" id="level-beginner" />
                    <Label htmlFor="level-beginner">입문</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="intermediate" id="level-intermediate" />
                    <Label htmlFor="level-intermediate">중급</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="advanced" id="level-advanced" />
                    <Label htmlFor="level-advanced">상급</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-500">예산</p>
                <RadioGroup value={budget} onValueChange={setBudget} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="low" id="budget-low" />
                    <Label htmlFor="budget-low">가성비 우선</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="medium" id="budget-medium" />
                    <Label htmlFor="budget-medium">균형형</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="high" id="budget-high" />
                    <Label htmlFor="budget-high">성능 우선</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900">추천 결과</h2>
              <Badge variant="outline">{filteredItems.length}개 항목</Badge>
            </div>

            {filteredItems.length === 0 ? (
              <Card className="border-dashed border-slate-300 bg-white">
                <CardContent className="p-10 text-center text-slate-600">
                  현재 조건에는 맞는 추천이 없습니다. 카테고리를 줄이거나 예산 조건을 넓혀 보세요.
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {filteredItems.map((item) => (
                  <Card key={item.name} className="border-slate-200 bg-white shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-100">{item.category}</Badge>
                          <h3 className="mt-3 text-lg font-semibold text-slate-900">{item.name}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{item.summary}</p>
                          <p className="mt-3 font-semibold text-orange-600">{item.price}</p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="mb-2 text-sm font-medium text-slate-500">핵심 포인트</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline">{tag}</Badge>
                          ))}
                        </div>
                      </div>

                      <Button className="mt-5 w-full bg-orange-500 text-white hover:bg-orange-600">
                        이 조건으로 기억해두기
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <Card className="border-slate-200 bg-slate-50">
              <CardHeader>
                <CardTitle>선택 팁</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="font-semibold text-slate-900">상의</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">더운 날에는 디자인보다 통기성과 땀 배출 속도를 먼저 보세요.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">신발</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">신발은 코트 타입과 발목 안정성이 우선이며, 입문자는 과한 스펙보다 편안함이 중요합니다.</p>
                </div>
                <div>
                  <p className="font-semibold text-slate-900">액세서리</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">햇빛이 강한 날은 모자와 선글라스만으로도 체감 집중력이 크게 달라집니다.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
