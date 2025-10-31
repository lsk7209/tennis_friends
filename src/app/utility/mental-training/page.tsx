"use client"

import React, { useState } from 'react';
import { Brain, Target, Heart, Eye, Wind, Zap, Clock, Play, Pause, RotateCcw, Star, CheckCircle, AlertTriangle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// 메타데이터는 layout.tsx에서 처리

interface Exercise {
  id: string;
  title: string;
  description: string;
  duration: number; // 분 단위
  category: 'focus' | 'stress' | 'visualization' | 'breathing' | 'confidence';
  difficulty: '초급' | '중급' | '고급';
  instructions: string[];
  benefits: string[];
}

const exercises: Exercise[] = [
  {
    id: 'focus_counting',
    title: '숫자 집중 훈련',
    description: '숫자를 세며 집중력을 키우는 기본 훈련입니다.',
    duration: 5,
    category: 'focus',
    difficulty: '초급',
    instructions: [
      '편안한 자세로 앉거나 서서 눈을 감습니다.',
      '천천히 숨을 들이쉬며 1부터 숫자를 세기 시작합니다.',
      '숫자를 셀 때마다 호흡에 집중합니다.',
      '생각이 산만해지면 1부터 다시 시작합니다.',
      '5분간 유지합니다.'
    ],
    benefits: ['집중력 향상', '마인드풀니스', '정신 안정']
  },
  {
    id: 'breathing_box',
    title: '박스 호흡법',
    description: '4-4-4-4 박스 호흡으로 스트레스를 줄이는 호흡법입니다.',
    duration: 4,
    category: 'breathing',
    difficulty: '초급',
    instructions: [
      '편안한 자세로 앉아 눈을 감습니다.',
      '코로 숨을 4초 동안 천천히 들이쉽니다.',
      '숨을 4초 동안 참습니다.',
      '입으로 4초 동안 천천히 내쉽니다.',
      '숨을 4초 동안 참습니다.',
      '이 과정을 4회 반복합니다.'
    ],
    benefits: ['스트레스 해소', '심장 박동 안정', '집중력 향상']
  },
  {
    id: 'visualization_match',
    title: '경기 시각화 훈련',
    description: '완벽한 경기를 머릿속으로 상상하며 자신감을 키웁니다.',
    duration: 10,
    category: 'visualization',
    difficulty: '중급',
    instructions: [
      '편안한 자세로 앉아 눈을 감습니다.',
      '코트를 상상합니다 - 라인, 네트, 공의 느낌.',
      '자신이 서브하는 장면을 생생하게 그려봅니다.',
      '완벽한 샷을 구사하는 모습을 시각화합니다.',
      '승리의 순간을 느껴봅니다.',
      '경기 종료 후 환호하는 자신을 상상합니다.'
    ],
    benefits: ['자신감 향상', '기술 향상', '스트레스 저항력']
  },
  {
    id: 'stress_ball_squeeze',
    title: '스트레스 볼 쥐기',
    description: '스트레스 볼을 쥐며 긴장을 풀고 집중력을 회복합니다.',
    duration: 3,
    category: 'stress',
    difficulty: '초급',
    instructions: [
      '스트레스 볼이나 공을 손에 쥡니다.',
      '천천히 공을 꽉 쥐며 5초간 유지합니다.',
      '힘을 빼며 공을 놓습니다.',
      '이 과정을 10회 반복합니다.',
      '손의 긴장을 느끼며 마음을 진정시킵니다.'
    ],
    benefits: ['긴장 해소', '집중력 회복', '근육 이완']
  },
  {
    id: 'confidence_affirmation',
    title: '자신감 강화 명언',
    description: '긍정적인 명언을 반복하며 자신감을 키웁니다.',
    duration: 5,
    category: 'confidence',
    difficulty: '초급',
    instructions: [
      '편안한 자세로 앉거나 서서 눈을 감습니다.',
      '다음 명언들을 천천히 큰 소리로 반복합니다.',
      '"나는 강하고 유능한 테니스 선수다"',
      '"나는 매 순간 최고의 플레이를 할 수 있다"',
      '"나는 압박 속에서도 침착함을 유지한다"',
      '"나는 끊임없이 성장하고 발전한다"',
      '각 명언을 3회씩 반복합니다.'
    ],
    benefits: ['자신감 향상', '긍정적 사고', '동기 부여']
  },
  {
    id: 'focus_anchor',
    title: '집중력 앵커링',
    description: '특정 동작을 집중력의 신호로 만드는 훈련입니다.',
    duration: 7,
    category: 'focus',
    difficulty: '중급',
    instructions: [
      '라켓을 손에 쥐고 편안한 자세를 취합니다.',
      '깊게 숨을 들이쉬며 "집중"이라고 마음속으로 말합니다.',
      '라켓의 그립을 살짝 조이거나 특정 동작을 합니다.',
      '이 순간의 느낌을 기억합니다.',
      '이 동작을 집중이 필요할 때마다 반복합니다.',
      '점차 실제 경기 상황에서 적용합니다.'
    ],
    benefits: ['집중력 유지', '습관 형성', '긴장 관리']
  },
  {
    id: '4_7_8_breathing',
    title: '4-7-8 진정 호흡법',
    description: '불안을 빠르게 진정시키는 전문 호흡법입니다.',
    duration: 4,
    category: 'breathing',
    difficulty: '중급',
    instructions: [
      '편안한 자세로 앉아 혀끝을 윗니 뒤쪽 잇몸에 대고 유지합니다.',
      '입술 사이로 숨을 천천히 내쉬며 "후우" 소리를 냅니다.',
      '입으로 숨을 4초 동안 들이쉽니다.',
      '숨을 7초 동안 참습니다.',
      '입으로 8초 동안 숨을 내쉬며 "후우" 소리를 냅니다.',
      '이 과정을 4회 반복합니다.'
    ],
    benefits: ['불안 해소', '수면 개선', '스트레스 감소']
  },
  {
    id: 'pressure_simulation',
    title: '압박 상황 시뮬레이션',
    description: '중요한 순간을 상상하며 압박감에 대처하는 법을 익힙니다.',
    duration: 12,
    category: 'confidence',
    difficulty: '고급',
    instructions: [
      '편안한 자세로 앉아 눈을 감습니다.',
      '결정적인 듀스 상황을 상상합니다.',
      '심장이 빨리 뛰고 손이 떨리는 느낌을 만듭니다.',
      '천천히 호흡하며 마음을 진정시킵니다.',
      '완벽한 샷을 구사하는 장면을 시각화합니다.',
      '승리의 기쁨을 느끼며 마무리합니다.',
      '이 과정을 여러 번 반복합니다.'
    ],
    benefits: ['압박 상황 대처', '멘탈 강화', '자신감 향상']
  }
];

const categoryLabels = {
  focus: '집중력',
  stress: '스트레스 관리',
  visualization: '시각화',
  breathing: '호흡법',
  confidence: '자신감'
};

const categoryColors = {
  focus: 'bg-blue-500',
  stress: 'bg-red-500',
  visualization: 'bg-purple-500',
  breathing: 'bg-green-500',
  confidence: 'bg-yellow-500'
};

export default function MentalTrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const startExercise = (exercise: Exercise) => {
    setCurrentExercise(exercise);
    setTimeLeft(exercise.duration * 60); // 초 단위로 변환
    setIsRunning(true);
  };

  const stopExercise = () => {
    setIsRunning(false);
    setCurrentExercise(null);
    setTimeLeft(0);
  };

  const completeExercise = () => {
    if (currentExercise) {
      setCompletedExercises(prev => new Set([...prev, currentExercise.id]));
      setIsRunning(false);
      setCurrentExercise(null);
      setTimeLeft(0);
    }
  };

  const resetExercise = () => {
    if (currentExercise) {
      setTimeLeft(currentExercise.duration * 60);
    }
  };

  const filteredExercises = selectedCategory === 'all'
    ? exercises
    : exercises.filter(exercise => exercise.category === selectedCategory);

  // 타이머 로직
  React.useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const completionRate = exercises.length > 0 ? Math.round((completedExercises.size / exercises.length) * 100) : 0;

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              테니스 멘탈 트레이닝
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              테니스 선수를 위한 종합 멘탈 트레이닝 프로그램입니다.
              집중력, 스트레스 관리, 자신감 향상을 위한 과학적 훈련 방법을 제공합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* 진행 상황 */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">트레이닝 진행률</h2>
              <Badge variant="outline">{completedExercises.size}/{exercises.length} 완료</Badge>
            </div>
            <Progress value={completionRate} className="h-3 mb-2" />
            <p className="text-sm text-gray-600">{completionRate}% 완료</p>
          </CardContent>
        </Card>

        <Tabs defaultValue="exercises" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="exercises">훈련 프로그램</TabsTrigger>
            <TabsTrigger value="running">실행 중</TabsTrigger>
            <TabsTrigger value="progress">진행 현황</TabsTrigger>
          </TabsList>

          <TabsContent value="exercises" className="space-y-6">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory('all')}
              >
                전체
              </Button>
              {Object.entries(categoryLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(key)}
                  className={selectedCategory === key ? `${categoryColors[key as keyof typeof categoryColors]} text-white hover:opacity-90` : ''}
                >
                  {label}
                </Button>
              ))}
            </div>

            {/* 훈련 목록 */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredExercises.map(exercise => (
                <Card key={exercise.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{exercise.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{categoryLabels[exercise.category]}</Badge>
                        <Badge
                          variant="outline"
                          className={
                            exercise.difficulty === '초급' ? 'border-green-500 text-green-700' :
                            exercise.difficulty === '중급' ? 'border-yellow-500 text-yellow-700' :
                            'border-red-500 text-red-700'
                          }
                        >
                          {exercise.difficulty}
                        </Badge>
                        {completedExercises.has(exercise.id) && (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600">{exercise.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {exercise.duration}분
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-gray-500">혜택:</div>
                          <div className="flex flex-wrap gap-1">
                            {exercise.benefits.slice(0, 2).map((benefit, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {benefit}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-sm mb-2">훈련 방법:</h4>
                        <ol className="text-sm text-gray-700 space-y-1">
                          {exercise.instructions.slice(0, 3).map((instruction, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-gray-400 mt-1">{idx + 1}.</span>
                              {instruction}
                            </li>
                          ))}
                          {exercise.instructions.length > 3 && (
                            <li className="text-gray-500 italic">...외 {exercise.instructions.length - 3}단계</li>
                          )}
                        </ol>
                      </div>

                      <Button
                        onClick={() => startExercise(exercise)}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                        disabled={isRunning}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        훈련 시작
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="running" className="space-y-6">
            {currentExercise && isRunning ? (
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-purple-600" />
                    {currentExercise.title} 실행 중
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-purple-600 mb-2">
                      {formatTime(timeLeft)}
                    </div>
                    <p className="text-gray-600">남은 시간</p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">훈련 단계:</h4>
                    <ol className="space-y-2">
                      {currentExercise.instructions.map((instruction, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {idx + 1}
                          </div>
                          <p className="text-gray-700">{instruction}</p>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="flex gap-4">
                    <Button onClick={resetExercise} variant="outline" className="flex-1">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      처음부터
                    </Button>
                    <Button onClick={stopExercise} variant="outline" className="flex-1">
                      <Pause className="w-4 h-4 mr-2" />
                      중지
                    </Button>
                    <Button onClick={completeExercise} className="flex-1 bg-green-600 hover:bg-green-700">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      완료
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">훈련 대기 중</h3>
                  <p className="text-gray-600">왼쪽 탭에서 훈련 프로그램을 선택하여 시작하세요.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  멘탈 트레이닝 성과
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4">카테고리별 완료율</h4>
                    <div className="space-y-3">
                      {Object.entries(categoryLabels).map(([key, label]) => {
                        const categoryExercises = exercises.filter(e => e.category === key);
                        const completedInCategory = categoryExercises.filter(e => completedExercises.has(e.id)).length;
                        const rate = categoryExercises.length > 0 ? Math.round((completedInCategory / categoryExercises.length) * 100) : 0;

                        return (
                          <div key={key} className="flex items-center justify-between">
                            <span className="text-sm">{label}</span>
                            <div className="flex items-center gap-2">
                              <Progress value={rate} className="w-20 h-2" />
                              <span className="text-sm font-medium w-12">{rate}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4">완료한 훈련</h4>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {Array.from(completedExercises).map(exerciseId => {
                        const exercise = exercises.find(e => e.id === exerciseId);
                        return exercise ? (
                          <div key={exerciseId} className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <div>
                              <div className="font-medium text-sm">{exercise.title}</div>
                              <div className="text-xs text-gray-600">{categoryLabels[exercise.category]}</div>
                            </div>
                          </div>
                        ) : null;
                      })}
                      {completedExercises.size === 0 && (
                        <p className="text-gray-500 text-sm">아직 완료한 훈련이 없습니다.</p>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 추천 사항 */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">멘탈 트레이닝 팁</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• 하루에 10-15분씩 꾸준히 실시하는 것이 효과적입니다.</li>
                      <li>• 경기 전 1-2시간 전에 가벼운 트레이닝으로 최적의 컨디션을 만드세요.</li>
                      <li>• 처음에는 쉬운 훈련부터 시작하여 점차 난이도를 높이세요.</li>
                      <li>• 트레이닝 후에는 느낀 점을 메모하여 발전 과정을 추적하세요.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
