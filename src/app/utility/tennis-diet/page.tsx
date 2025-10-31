"use client"

import React, { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { Apple, Calculator, Target, Activity, Utensils, TrendingUp, Clock, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

// 메타데이터
export const metadata: Metadata = {
  title: '테니스 다이어트 계산기 - 영양 섭취량 계산 | TennisFriends',
  description: '테니스 선수를 위한 맞춤 다이어트 계산기. 신장, 체중, 운동 강도를 고려한 칼로리와 영양소 섭취량을 계산하고 식단을 추천합니다.',
  keywords: ['테니스 다이어트', '칼로리 계산기', '영양 섭취량', '테니스 식단', '운동 영양', '체력 관리'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/tennis-diet',
  },
  openGraph: {
    title: '테니스 다이어트 계산기 - 영양 섭취량 계산 | TennisFriends',
    description: '테니스 선수를 위한 맞춥 다이어트 계산기. 신장, 체중, 운동 강도를 고려한 칼로리와 영양소 섭취량을 계산합니다.',
    url: 'https://tennisfriends.co.kr/utility/tennis-diet',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 다이어트 계산기 - 영양 섭취량 계산 | TennisFriends',
    description: '테니스 선수를 위한 맞춤 다이어트 계산기.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface NutritionPlan {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  recommendation: string;
  mealPlan: string[];
}

interface PhysicalData {
  height: number;
  weight: number;
  age: number;
  gender: 'male' | 'female';
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  tennisFrequency: '1-2' | '3-4' | '5-6' | 'daily';
  goal: 'maintain' | 'lose' | 'gain';
}

const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9
};

const tennisCalories = {
  '1-2': 300,
  '3-4': 450,
  '5-6': 600,
  daily: 750
};

export default function TennisDietPage() {
  const [physicalData, setPhysicalData] = useState<PhysicalData>({
    height: 170,
    weight: 65,
    age: 25,
    gender: 'male',
    activityLevel: 'moderate',
    tennisFrequency: '3-4',
    goal: 'maintain'
  });

  const [showResults, setShowResults] = useState(false);

  const nutritionPlan = useMemo((): NutritionPlan | null => {
    if (!physicalData.height || !physicalData.weight || !physicalData.age) return null;

    // BMR 계산 (Harris-Benedict 공식)
    let bmr: number;
    if (physicalData.gender === 'male') {
      bmr = 88.362 + (13.397 * physicalData.weight) + (4.799 * physicalData.height) - (5.677 * physicalData.age);
    } else {
      bmr = 447.593 + (9.247 * physicalData.weight) + (3.098 * physicalData.height) - (4.330 * physicalData.age);
    }

    // TDEE 계산
    const tdee = bmr * activityMultipliers[physicalData.activityLevel];

    // 테니스 운동 칼로리 추가
    const tennisCal = tennisCalories[physicalData.tennisFrequency];

    // 목표에 따른 칼로리 조정
    let targetCalories = tdee + tennisCal;
    if (physicalData.goal === 'lose') {
      targetCalories -= 500; // 체중 감량
    } else if (physicalData.goal === 'gain') {
      targetCalories += 500; // 체중 증가
    }

    // 영양소 비율 계산 (테니스 선수 최적 비율)
    const proteinPercent = 0.25; // 25%
    const fatPercent = 0.25; // 25%
    const carbPercent = 0.50; // 50%

    const proteinGrams = Math.round((targetCalories * proteinPercent) / 4);
    const fatGrams = Math.round((targetCalories * fatPercent) / 9);
    const carbGrams = Math.round((targetCalories * carbPercent) / 4);

    // 식단 추천
    let recommendation = '';
    let mealPlan: string[] = [];

    if (physicalData.goal === 'maintain') {
      recommendation = '현재 체중을 유지하면서 테니스 퍼포먼스를 최적화하기 위한 균형 잡힌 식단을 추천합니다.';
      mealPlan = [
        '아침: 오트밀 + 바나나 + 계란 흰자 + 그릭 요거트',
        '점심: 현미밥 + 닭가슴살 + 채소 + 올리브 오일 드레싱',
        '간식: 견과류 + 과일',
        '저녁: 연어 + 구운 채소 + 현미밥',
        '운동 후: 프로틴 쉐이크 + 바나나'
      ];
    } else if (physicalData.goal === 'lose') {
      recommendation = '체중 감량을 위해 칼로리를 적절히 제한하면서 단백질 섭취를 늘려 근육량을 유지합니다.';
      mealPlan = [
        '아침: 그릭 요거트 + 베리 + 아몬드',
        '점심: 샐러드 + 닭가슴살 + 아보카도',
        '간식: 사과 + 아몬드 한 줌',
        '저녁: 구운 닭가슴살 + 브로콜리 + 현미밥 반공기',
        '운동 후: 프로틴 쉐이크 (저칼로리)'
      ];
    } else {
      recommendation = '체중 증가를 위해 건강한 칼로리를 추가하면서 근육 형성을 위한 단백질 섭취를 늘립니다.';
      mealPlan = [
        '아침: 오트밀 + 바나나 + 계란 + 아보카도 토스트',
        '점심: 현미밥 + 연어 + 채소 + 올리브 오일',
        '간식: 그릭 요거트 + 견과류 + 과일',
        '저녁: 스테이크 + 고구마 + 채소',
        '운동 후: 프로틴 쉐이크 + 바나나 + 땅콩버터'
      ];
    }

    return {
      calories: Math.round(targetCalories),
      protein: proteinGrams,
      carbs: carbGrams,
      fat: fatGrams,
      recommendation,
      mealPlan
    };
  }, [physicalData]);

  const calculateNutrition = () => {
    setShowResults(true);
  };

  const resetCalculator = () => {
    setShowResults(false);
    setPhysicalData({
      height: 170,
      weight: 65,
      age: 25,
      gender: 'male',
      activityLevel: 'moderate',
      tennisFrequency: '3-4',
      goal: 'maintain'
    });
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              테니스 다이어트 계산기
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              테니스 선수를 위한 맞춤 영양 계산기입니다.
              신체 정보와 운동량을 고려한 최적의 칼로리와 영양소 섭취량을 계산합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {!showResults ? (
          <div className="space-y-8">
            {/* 기본 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  기본 정보 입력
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="height">신장 (cm)</Label>
                      <Input
                        id="height"
                        type="number"
                        placeholder="170"
                        value={physicalData.height || ''}
                        onChange={(e) => setPhysicalData(prev => ({ ...prev, height: parseInt(e.target.value) || 0 }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="weight">체중 (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="65"
                        value={physicalData.weight || ''}
                        onChange={(e) => setPhysicalData(prev => ({ ...prev, weight: parseInt(e.target.value) || 0 }))}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="age">나이</Label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="25"
                        value={physicalData.age || ''}
                        onChange={(e) => setPhysicalData(prev => ({ ...prev, age: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>성별</Label>
                      <Select value={physicalData.gender} onValueChange={(value: 'male' | 'female') => setPhysicalData(prev => ({ ...prev, gender: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="성별을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">남성</SelectItem>
                          <SelectItem value="female">여성</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>일반 활동량</Label>
                      <Select value={physicalData.activityLevel} onValueChange={(value: PhysicalData['activityLevel']) => setPhysicalData(prev => ({ ...prev, activityLevel: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="활동량을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sedentary">좌식 생활 (운동 거의 없음)</SelectItem>
                          <SelectItem value="light">가벼운 활동 (주 1-3회 가벼운 운동)</SelectItem>
                          <SelectItem value="moderate">보통 활동 (주 3-5회 보통 운동)</SelectItem>
                          <SelectItem value="active">활발한 활동 (주 6회 이상 운동)</SelectItem>
                          <SelectItem value="very_active">매우 활발 (직업상 육체 노동)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>테니스 운동 빈도</Label>
                      <Select value={physicalData.tennisFrequency} onValueChange={(value: PhysicalData['tennisFrequency']) => setPhysicalData(prev => ({ ...prev, tennisFrequency: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="테니스 빈도를 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">주 1-2회</SelectItem>
                          <SelectItem value="3-4">주 3-4회</SelectItem>
                          <SelectItem value="5-6">주 5-6회</SelectItem>
                          <SelectItem value="daily">매일</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>목표</Label>
                      <Select value={physicalData.goal} onValueChange={(value: PhysicalData['goal']) => setPhysicalData(prev => ({ ...prev, goal: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="목표를 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="maintain">체중 유지</SelectItem>
                          <SelectItem value="lose">체중 감량</SelectItem>
                          <SelectItem value="gain">체중 증가</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                onClick={calculateNutrition}
                disabled={!physicalData.height || !physicalData.weight || !physicalData.age}
                size="lg"
                className="px-8 py-3 bg-green-600 hover:bg-green-700"
              >
                <Calculator className="w-5 h-5 mr-2" />
                영양 계산하기
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 결과 헤더 */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">맞춤 영양 플랜</h2>
                    <p className="text-gray-600">테니스 퍼포먼스를 위한 최적 식단</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-green-600">{nutritionPlan?.calories}</div>
                    <div className="text-sm text-gray-600">칼로리 (kcal)</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600">{nutritionPlan?.protein}g</div>
                    <div className="text-sm text-gray-600">단백질</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-yellow-600">{nutritionPlan?.carbs}g</div>
                    <div className="text-sm text-gray-600">탄수화물</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600">{nutritionPlan?.fat}g</div>
                    <div className="text-sm text-gray-600">지방</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 영양소 비율 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  영양소 비율 (테니스 선수 최적)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>탄수화물 (50%)</span>
                      <span className="font-medium">{nutritionPlan?.carbs}g</span>
                    </div>
                    <Progress value={50} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>단백질 (25%)</span>
                      <span className="font-medium">{nutritionPlan?.protein}g</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>지방 (25%)</span>
                      <span className="font-medium">{nutritionPlan?.fat}g</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 추천 이유 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  추천 이유
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{nutritionPlan?.recommendation}</p>
              </CardContent>
            </Card>

            {/* 식단 예시 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Utensils className="w-5 h-5" />
                  샘플 식단
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nutritionPlan?.mealPlan.map((meal, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-gray-700">{meal}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 추가 팁 */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">테니스 선수 영양 팁</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• 경기 2-3시간 전: 가벼운 탄수화물 + 단백질 (에너지 공급)</li>
                      <li>• 경기 중: 스포츠 드링크나 바나나 (수분과 당분 보충)</li>
                      <li>• 경기 후 30분 이내: 단백질 쉐이크 (근육 회복)</li>
                      <li>• 수분 섭취: 체중 1kg당 30-35ml (테니스 땀 많이 흘림)</li>
                      <li>• 카페인: 경기 전 200mg까지 OK (집중력 향상)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button onClick={resetCalculator} variant="outline" size="lg">
                다시 계산하기
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                식단 저장하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
