"use client"

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Activity, Target, Zap, TrendingUp, Award, Clock, Play, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// 메타데이터
export const metadata: Metadata = {
  title: '테니스 체력 테스트 - 종합 체력 평가 | TennisFriends',
  description: '테니스 선수를 위한 종합 체력 테스트 도구. 순발력, 민첩성, 근력, 지구력 등 테니스에 필요한 모든 체력 요소를 측정하고 평가합니다.',
  keywords: ['테니스 체력 테스트', '순발력 테스트', '민첩성 테스트', '근력 테스트', '지구력 테스트', '테니스 체력 평가'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/fitness-test',
  },
  openGraph: {
    title: '테니스 체력 테스트 - 종합 체력 평가 | TennisFriends',
    description: '테니스 선수를 위한 종합 체력 테스트 도구. 순발력, 민첩성, 근력, 지구력 등 테니스에 필요한 모든 체력 요소를 측정합니다.',
    url: 'https://tennisfriends.co.kr/utility/fitness-test',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 체력 테스트 - 종합 체력 평가 | TennisFriends',
    description: '테니스 선수를 위한 종합 체력 테스트 도구.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface TestResult {
  agility: number;
  speed: number;
  endurance: number;
  strength: number;
  power: number;
  balance: number;
}

interface TestItem {
  id: string;
  name: string;
  description: string;
  unit: string;
  category: 'agility' | 'speed' | 'endurance' | 'strength' | 'power' | 'balance';
  instructions: string[];
  excellent: { min: number; max: number };
  good: { min: number; max: number };
  average: { min: number; max: number };
}

const testItems: TestItem[] = [
  {
    id: 'agility_t_test',
    name: 'T-테스트 (민첩성)',
    description: '코트 좌우 이동 능력을 측정하는 민첩성 테스트',
    unit: '초',
    category: 'agility',
    instructions: [
      '시작점에 서서 양발을 모으고 준비 자세를 취합니다.',
      '앞으로 전력 질주하여 T자 모양의 첫 번째 콘을 터치합니다.',
      '왼쪽으로 이동하여 왼쪽 콘을 터치합니다.',
      '오른쪽으로 이동하여 오른쪽 콘을 터치합니다.',
      '다시 왼쪽 콘을 터치하고, 마지막으로 시작점으로 돌아옵니다.',
      '시간을 측정합니다.'
    ],
    excellent: { min: 8.5, max: 9.5 },
    good: { min: 9.6, max: 11.0 },
    average: { min: 11.1, max: 13.0 }
  },
  {
    id: '40m_sprint',
    name: '40m 달리기 (속도)',
    description: '단거리 sprint 능력을 측정하는 속도 테스트',
    unit: '초',
    category: 'speed',
    instructions: [
      '40m 직선 코스를 준비합니다.',
      '시작점에서 준비 자세를 취합니다.',
      '출발 신호와 함께 전력 질주합니다.',
      '40m 지점을 통과할 때 시간을 측정합니다.'
    ],
    excellent: { min: 4.8, max: 5.2 },
    good: { min: 5.3, max: 5.8 },
    average: { min: 5.9, max: 6.5 }
  },
  {
    id: 'beep_test',
    name: 'Beep Test (지구력)',
    description: '점진적으로 속도가 빨라지는 달리기로 지구력을 측정',
    unit: '레벨',
    category: 'endurance',
    instructions: [
      '20m 간격으로 표시된 코스를 준비합니다.',
      '신호음이 울릴 때마다 20m 구간을 이동합니다.',
      '속도가 점진적으로 빨라집니다.',
      '더 이상 따라가지 못할 때까지 계속합니다.',
      '도달한 레벨을 기록합니다.'
    ],
    excellent: { min: 12, max: 15 },
    good: { min: 9, max: 11 },
    average: { min: 6, max: 8 }
  },
  {
    id: 'push_up_test',
    name: '팔굽혀펴기 (근력)',
    description: '상체 근력을 측정하는 팔굽혀펴기 테스트',
    unit: '개',
    category: 'strength',
    instructions: [
      '바닥에 엎드려 팔을 어깨 너비로 벌립니다.',
      '발끝으로 지지하고 몸을 일직선으로 유지합니다.',
      '팔을 굽혀 가슴이 바닥에 닿을락 말락 할 때까지 내립니다.',
      '다시 팔을 펴서 시작 자세로 돌아옵니다.',
      '1분 동안 최대한 많이 수행합니다.'
    ],
    excellent: { min: 40, max: 60 },
    good: { min: 25, max: 39 },
    average: { min: 15, max: 24 }
  },
  {
    id: 'vertical_jump',
    name: '수직 점프 (파워)',
    description: '폭발적인 하체 근력을 측정하는 수직 점프 테스트',
    unit: 'cm',
    category: 'power',
    instructions: [
      '벽에 서서 머리 위로 팔을 뻗어 점프 높이를 표시합니다.',
      '깊게 앉았다가 수직으로 점프합니다.',
      '벽에 닿는 최고 지점을 표시합니다.',
      '점프 전 표시와 점프 후 표시의 차이를 측정합니다.'
    ],
    excellent: { min: 65, max: 85 },
    good: { min: 50, max: 64 },
    average: { min: 35, max: 49 }
  },
  {
    id: 'balance_test',
    name: '균형 테스트 (발란스)',
    description: '한 발로 서서 균형을 유지하는 시간을 측정',
    unit: '초',
    category: 'balance',
    instructions: [
      '한 발로 서서 양팔을 옆으로 벌립니다.',
      '시선은 정면을 향하고 다른 발은 무릎 높이로 들어올립니다.',
      '최대한 오래 균형을 유지합니다.',
      '균형을 잃거나 발이 바닥에 닿으면 테스트를 중단합니다.',
      '시간을 측정합니다.'
    ],
    excellent: { min: 45, max: 60 },
    good: { min: 25, max: 44 },
    average: { min: 10, max: 24 }
  }
];

export default function FitnessTestPage() {
  const [results, setResults] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [currentTest, setCurrentTest] = useState<string>('');

  const handleResultChange = (testId: string, value: number) => {
    setResults(prev => ({
      ...prev,
      [testId]: value
    }));
  };

  const calculateScore = (test: TestItem, value: number): 'excellent' | 'good' | 'average' | 'poor' => {
    if (value >= test.excellent.min && value <= test.excellent.max) return 'excellent';
    if (value >= test.good.min && value <= test.good.max) return 'good';
    if (value >= test.average.min && value <= test.average.max) return 'average';
    return 'poor';
  };

  const getScoreColor = (score: string) => {
    switch (score) {
      case 'excellent': return 'text-green-600 bg-green-50 border-green-200';
      case 'good': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'average': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-red-600 bg-red-50 border-red-200';
    }
  };

  const getScoreText = (score: string) => {
    switch (score) {
      case 'excellent': return '우수';
      case 'good': return '양호';
      case 'average': return '보통';
      default: return '개선 필요';
    }
  };

  const calculateOverallScore = (): TestResult => {
    const scores = testItems.map(test => {
      const value = results[test.id];
      if (!value) return 0;
      const score = calculateScore(test, value);
      switch (score) {
        case 'excellent': return 100;
        case 'good': return 75;
        case 'average': return 50;
        default: return 25;
      }
    });

    return {
      agility: scores[0] || 0,
      speed: scores[1] || 0,
      endurance: scores[2] || 0,
      strength: scores[3] || 0,
      power: scores[4] || 0,
      balance: scores[5] || 0
    };
  };

  const startTest = () => {
    setShowResults(true);
  };

  const resetTests = () => {
    setResults({});
    setShowResults(false);
    setCurrentTest('');
  };

  const overallScores = calculateOverallScore();
  const averageScore = Object.values(overallScores).reduce((a, b) => a + b, 0) / Object.values(overallScores).length;

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mb-6">
              <Activity className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              테니스 체력 테스트
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              테니스 선수를 위한 종합 체력 평가 도구입니다.
              6가지 핵심 체력 요소를 측정하고 개인 맞춤 훈련 프로그램을 제안합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {!showResults ? (
          <div className="space-y-8">
            {/* 테스트 소개 */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">민첩성</h3>
                    <p className="text-sm text-gray-600">코트 이동 능력</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">속도</h3>
                    <p className="text-sm text-gray-600">순발력 & 스피드</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">지구력</h3>
                    <p className="text-sm text-gray-600">장시간 경기 체력</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">근력</h3>
                    <p className="text-sm text-gray-600">상체 & 코어 근력</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">파워</h3>
                    <p className="text-sm text-gray-600">폭발력 & 점프력</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">균형</h3>
                    <p className="text-sm text-gray-600">발란스 & 안정성</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 테스트 항목들 */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">전체</TabsTrigger>
                <TabsTrigger value="agility">민첩성</TabsTrigger>
                <TabsTrigger value="speed">속도</TabsTrigger>
                <TabsTrigger value="endurance">지구력</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {testItems.map(test => (
                  <Card key={test.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{test.name}</CardTitle>
                        <Badge variant="outline">{test.category.toUpperCase()}</Badge>
                      </div>
                      <p className="text-gray-600">{test.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor={test.id} className="text-base font-medium">
                            측정값 입력 ({test.unit})
                          </Label>
                          <Input
                            id={test.id}
                            type="number"
                            step="0.1"
                            placeholder={`측정값을 입력하세요`}
                            value={results[test.id] || ''}
                            onChange={(e) => handleResultChange(test.id, parseFloat(e.target.value) || 0)}
                            className="mt-1"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-base font-medium">평가 기준</Label>
                          <div className="space-y-1 text-sm">
                            <div className="flex justify-between">
                              <span>우수:</span>
                              <span className="text-green-600">{test.excellent.min}-{test.excellent.max} {test.unit}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>양호:</span>
                              <span className="text-blue-600">{test.good.min}-{test.good.max} {test.unit}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>보통:</span>
                              <span className="text-yellow-600">{test.average.min}-{test.average.max} {test.unit}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          테스트 방법
                        </h4>
                        <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                          {test.instructions.map((instruction, idx) => (
                            <li key={idx}>{instruction}</li>
                          ))}
                        </ol>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              {/* 다른 탭들도 유사하게 구현 */}
              <TabsContent value="agility">
                <Card>
                  <CardContent className="p-6 text-center text-gray-600">
                    민첩성 테스트 항목들 (T-테스트 등)
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="speed">
                <Card>
                  <CardContent className="p-6 text-center text-gray-600">
                    속도 테스트 항목들 (40m 달리기 등)
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="endurance">
                <Card>
                  <CardContent className="p-6 text-center text-gray-600">
                    지구력 테스트 항목들 (Beep Test 등)
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex justify-center">
              <Button
                onClick={startTest}
                size="lg"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700"
              >
                <Target className="w-5 h-5 mr-2" />
                체력 평가 시작
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 종합 결과 */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">체력 평가 결과</h2>
                    <p className="text-gray-600">테니스 선수로서의 종합 체력 수준</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  {Object.entries(overallScores).map(([key, score]) => (
                    <div key={key} className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">{Math.round(score)}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                      <Progress value={score} className="h-2 mt-2" />
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">
                    {Math.round(averageScore)}점
                  </div>
                  <Badge
                    className={`text-lg px-4 py-2 ${getScoreColor(
                      averageScore >= 80 ? 'excellent' :
                      averageScore >= 60 ? 'good' :
                      averageScore >= 40 ? 'average' : 'poor'
                    )}`}
                  >
                    {getScoreText(
                      averageScore >= 80 ? 'excellent' :
                      averageScore >= 60 ? 'good' :
                      averageScore >= 40 ? 'average' : 'poor'
                    )}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* 상세 결과 */}
            <div className="grid md:grid-cols-2 gap-6">
              {testItems.map(test => {
                const value = results[test.id];
                if (!value) return null;

                const score = calculateScore(test, value);
                return (
                  <Card key={test.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{test.name}</CardTitle>
                        <Badge className={getScoreColor(score)}>
                          {getScoreText(score)}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-gray-900 mb-2">
                        {value} {test.unit}
                      </div>
                      <Progress value={(value / test.excellent.max) * 100} className="h-2" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* 개선 권장사항 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  개선 권장사항
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(overallScores).map(([key, score]) => {
                    if (score >= 70) return null;
                    return (
                      <div key={key} className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-yellow-900 capitalize">{key} 향상 필요</h4>
                          <p className="text-yellow-800 text-sm">
                            {key === 'agility' && '사다리 드릴, 코니 드릴 등 민첩성 훈련을 권장합니다.'}
                            {key === 'speed' && '인터벌 트레이닝, 스프린트 훈련을 통해 속도를 향상시키세요.'}
                            {key === 'endurance' && '장거리 달리기, 서킷 트레이닝으로 지구력을 키우세요.'}
                            {key === 'strength' && '웨이트 트레이닝, 코어 운동을 통해 근력을 강화하세요.'}
                            {key === 'power' && '점프 트레이닝, 플라이오메트릭 운동을 추천합니다.'}
                            {key === 'balance' && '요가, 밸런스 보드 운동으로 균형 감각을 향상시키세요.'}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button onClick={resetTests} variant="outline" size="lg">
                다시 테스트하기
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                훈련 계획 저장
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
