'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Apple, Droplets, Clock, ArrowRight, RotateCcw, Share2, CheckCircle, Zap, Target } from 'lucide-react';
import { NutritionResult, Meal, Supplement, Timing } from '@/lib/nutritionGuide';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

function NutritionResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<NutritionResult | null>(null);
  const [selectedPhase, setSelectedPhase] = useState('preSession');
  
  useEffect(() => {
    // 로딩 시뮬레이션
    const timer = setTimeout(() => {
      const planName = searchParams.get('planName') || '';
      const totalCalories = Number(searchParams.get('totalCalories') || 0);
      const macronutrients = JSON.parse(searchParams.get('macronutrients') || '{}');
      const hydration = JSON.parse(searchParams.get('hydration') || '{}');
      const mealPlan = JSON.parse(searchParams.get('mealPlan') || '{}');
      const supplements = JSON.parse(searchParams.get('supplements') || '[]') as Supplement[];
      const timing = JSON.parse(searchParams.get('timing') || '[]') as Timing[];
      const recommendations = JSON.parse(searchParams.get('recommendations') || '{}');
      
      setResult({
        plan: mealPlan,
        totalHydration: hydration.total || '0ml',
        totalCalories: String(totalCalories),
        keyWords: recommendations.keyWords || [],
        avoidWords: recommendations.avoidWords || [],
        duration: searchParams.get('duration') || '',
        activityType: searchParams.get('activityType') || '',
        goal: searchParams.get('goal') || ''
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleRetake = () => {
    router.push('/utility/nutrition-guide/test');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TennisFriends 영양 계획',
        text: `나만의 맞춤형 영양 계획이 완성되었습니다!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case 'preSession': return '🌅';
      case 'duringSession': return '⚡';
      case 'postSession': return '🔄';
      case 'daily': return '🍽️';
      default: return '📅';
    }
  };

  const getPhaseTitle = (phase: string) => {
    switch (phase) {
      case 'preSession': return '세션 전';
      case 'duringSession': return '세션 중';
      case 'postSession': return '세션 후';
      case 'daily': return '일상 식단';
      default: return phase;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">계획 생성 중입니다...</h2>
          <p className="text-gray-600">맞춤형 영양 계획을 만들고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">오류가 발생했습니다</h2>
          <p className="text-gray-600 mb-4">계획을 불러올 수 없습니다.</p>
          <Button onClick={handleRetake}>다시 시도하기</Button>
        </div>
      </div>
    );
  }

  const currentPhaseMeals = (result.plan as any)?.[selectedPhase] as Meal[] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-semibold">
              🍎 영양 계획 완성
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {(result as any).planName || '맞춤형 영양 계획'}
            </h1>
            <p className="text-gray-600 text-lg">
              과학적 근거에 기반한 맞춤형 영양 계획이 완성되었습니다
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{result.totalCalories}</div>
                    <div className="text-gray-600">총 칼로리</div>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🍞</span>
                    </div>
                     <div className="text-2xl font-bold text-gray-900 mb-2">{(result as any).macronutrients?.carbohydrates?.grams || 0}g</div>
                    <div className="text-gray-600">탄수화물</div>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🥩</span>
                    </div>
                     <div className="text-2xl font-bold text-gray-900 mb-2">{(result as any).macronutrients?.protein?.grams || 0}g</div>
                    <div className="text-gray-600">단백질</div>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🥑</span>
                    </div>
                     <div className="text-2xl font-bold text-gray-900 mb-2">{(result as any).macronutrients?.fat?.grams || 0}g</div>
                    <div className="text-gray-600">지방</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Macronutrients Breakdown */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                영양소 구성
              </h2>
              <p className="text-gray-600">
                균형 잡힌 영양소 비율로 최적의 경기력을 지원합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🍞</span>
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                       {(result as any).macronutrients?.carbohydrates?.percentage || 0}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">탄수화물</h3>
                    <p className="text-gray-600 text-sm">{(result as any).macronutrients?.carbohydrates?.grams || 0}g</p>
                    <p className="text-gray-500 text-xs mt-2">에너지의 주요 공급원</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🥩</span>
                    </div>
                    <div className="text-3xl font-bold text-red-600 mb-2">
                       {(result as any).macronutrients?.protein?.percentage || 0}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">단백질</h3>
                    <p className="text-gray-600 text-sm">{(result as any).macronutrients?.protein?.grams || 0}g</p>
                    <p className="text-gray-500 text-xs mt-2">근육 회복과 성장</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🥑</span>
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                       {(result as any).macronutrients?.fat?.percentage || 0}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">지방</h3>
                    <p className="text-gray-600 text-sm">{(result as any).macronutrients?.fat?.grams || 0}g</p>
                    <p className="text-gray-500 text-xs mt-2">호르몬 생성과 항염</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Hydration Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                수분 보충 가이드
              </h2>
              <p className="text-gray-600">
                적절한 수분 보충으로 최적의 경기력을 유지하세요
              </p>
            </div>
          </SlideUp>
          
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Droplets className="h-10 w-10 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                       {(result as any).hydration?.waterIntake || result.totalHydration || '0'}ml
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">일일 수분 섭취량</h3>
                    <p className="text-gray-600 text-sm">체중과 활동량을 고려한 권장량</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">필요한 전해질</h3>
                    <div className="space-y-2">
                       {((result as any).hydration?.electrolyteNeeds || []).map((electrolyte: string, index: number) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{electrolyte}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Meal Plan Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                식단 계획
              </h2>
              <p className="text-gray-600">
                세션별 맞춤형 식단으로 최적의 영양 공급을 받으세요
              </p>
            </div>
          </SlideUp>
          
          {/* Phase Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['preSession', 'duringSession', 'postSession', 'daily'].map(phase => (
              <Button
                key={phase}
                variant={selectedPhase === phase ? "default" : "outline"}
                onClick={() => setSelectedPhase(phase)}
                className={`px-4 py-2 ${
                  selectedPhase === phase 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-500'
                }`}
              >
                {getPhaseIcon(phase)} {getPhaseTitle(phase)}
              </Button>
            ))}
          </div>
          
          {/* Current Phase Meals */}
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentPhaseMeals.map((meal, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{meal.name}</h3>
                           <p className="text-gray-600 text-sm mb-3">{(meal as any).description || meal.name}</p>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            {meal.calories} 칼로리
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">영양소 구성:</h4>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div className="text-center">
                            <div className="font-bold text-orange-600">{(meal as any).macronutrients?.carbs || 0}g</div>
                            <div className="text-gray-500">탄수화물</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-red-600">{(meal as any).macronutrients?.protein || 0}g</div>
                            <div className="text-gray-500">단백질</div>
                          </div>
                          <div className="text-center">
                            <div className="font-bold text-purple-600">{(meal as any).macronutrients?.fat || 0}g</div>
                            <div className="text-gray-500">지방</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 재료:</h4>
                        <div className="flex flex-wrap gap-1">
                           {((meal as any).ingredients || []).map((ingredient: string, ingIndex: number) => (
                            <Badge key={ingIndex} className="bg-gray-100 text-gray-800 text-xs">
                              {ingredient}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">섭취 시기:</h4>
                         <p className="text-sm text-gray-600">{(meal as any).timing || '적절한 시기'}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 효과:</h4>
                        <div className="space-y-1">
                           {((meal as any).benefits || []).map((benefit: string, benefitIndex: number) => (
                            <div key={benefitIndex} className="flex items-center gap-2 text-xs text-gray-600">
                              <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Supplements Section */}
       {(result as any).supplements?.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-6xl container-padding">
            <SlideUp>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  보충제 가이드
                </h2>
                <p className="text-gray-600">
                  필요에 따른 보충제로 영양 공급을 최적화하세요
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {((result as any).supplements || []).map((supplement: any, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{supplement.name}</h3>
                          <Badge className="bg-blue-100 text-blue-800 text-xs">
                            {supplement.dosage}
                          </Badge>
                        </div>
                        
                        <p className="text-gray-600 mb-4">{supplement.purpose}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">섭취 시기:</h4>
                          <p className="text-sm text-gray-600">{supplement.timing}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 효과:</h4>
                          <div className="space-y-1">
                             {(supplement.benefits || []).map((benefit: string, benefitIndex: number) => (
                              <div key={benefitIndex} className="flex items-center gap-2 text-xs text-gray-600">
                                <CheckCircle className="h-3 w-3 text-green-600" />
                                <span>{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {supplement.notes && (
                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                            <h4 className="text-sm font-semibold text-yellow-900 mb-1">주의사항:</h4>
                            <p className="text-xs text-yellow-800">{supplement.notes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Timing Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                영양 섭취 타이밍
              </h2>
              <p className="text-gray-600">
                올바른 타이밍으로 영양의 효과를 극대화하세요
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="space-y-4">
               {((result as any).timing || []).map((timing: any, index: number) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-900">{timing.phase}</h3>
                            <div className="flex gap-2">
                              <Badge className="bg-blue-100 text-blue-800 text-xs">
                                {timing.time}
                              </Badge>
                              <Badge className={getImportanceColor(timing.importance)}>
                                {timing.importance} 중요도
                              </Badge>
                            </div>
                          </div>
                          <p className="text-gray-600">{timing.recommendation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                맞춤형 권장사항
              </h2>
              <p className="text-gray-600">
                효과적인 영양 관리를 위한 전문가의 조언입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">일반 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                       {((result as any).recommendations?.general || []).map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">수분 보충 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                       {((result as any).recommendations?.hydration || []).map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">회복 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                       {((result as any).recommendations?.recovery || []).map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">성과 향상 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                       {((result as any).recommendations?.performance || []).map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                다음 단계
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleRetake}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-green-500 px-6 py-3"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  다시 계획하기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-green-500 px-6 py-3"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  계획 공유하기
                </Button>
                <Link href="/utility/training-planner">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    훈련 계획과 함께
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                관련 도구
              </h2>
              <p className="text-gray-600">
                더 나은 테니스 경험을 위한 다른 도구들도 확인해보세요.
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggeredItem>
                <Link href="/utility/training-planner">
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📅</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">훈련 계획 수립</h3>
                      <p className="text-gray-600 text-sm">체계적인 훈련 계획</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/match-analyzer">
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📊</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">경기 분석 도구</h3>
                      <p className="text-gray-600 text-sm">전술적 개선점 분석</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/injury-risk">
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">부상 위험 체크</h3>
                      <p className="text-gray-600 text-sm">안전한 플레이 가이드</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>
    </div>
  );
}

export default function NutritionGuideResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NutritionResultContent />
    </Suspense>
  );
}
