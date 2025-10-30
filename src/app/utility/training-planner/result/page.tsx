'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, Calendar, Target, ArrowRight, RotateCcw, Share2, CheckCircle, Clock, Users, ArrowLeft } from 'lucide-react';
import { TrainingPlanResult, WeeklySchedule, TrainingSession, FocusArea, Milestone } from '@/lib/trainingPlanner';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

function TrainingPlannerResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<TrainingPlanResult | null>(null);
  const [selectedWeek, setSelectedWeek] = useState(1);
  
  useEffect(() => {
    // 로딩 시뮬레이션
    const timer = setTimeout(() => {
      const planName = searchParams.get('planName') || '';
      const duration = Number(searchParams.get('duration') || 0);
      const weeklySchedule = JSON.parse(searchParams.get('weeklySchedule') || '[]') as WeeklySchedule[];
      const focusAreas = JSON.parse(searchParams.get('focusAreas') || '[]') as FocusArea[];
      const progressMilestones = JSON.parse(searchParams.get('progressMilestones') || '[]') as Milestone[];
      const recommendations = JSON.parse(searchParams.get('recommendations') || '{}');
      const equipment = JSON.parse(searchParams.get('equipment') || '[]');
      const nextSteps = JSON.parse(searchParams.get('nextSteps') || '[]');
      
      setResult({
        planName,
        duration,
        weeklySchedule,
        focusAreas,
        progressMilestones,
        recommendations,
        equipment,
        nextSteps
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleRetake = () => {
    router.push('/utility/training-planner/test');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TennisFriends 훈련 계획',
        text: `나만의 맞춤형 훈련 계획이 완성되었습니다!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'technical': return '🎾';
      case 'tactical': return '🧠';
      case 'physical': return '💪';
      case 'match': return '🏆';
      case 'recovery': return '🧘';
      default: return '📅';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-indigo-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">계획 생성 중입니다...</h2>
          <p className="text-gray-600 text-lg">맞춤형 훈련 계획을 만들고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">오류가 발생했습니다</h2>
          <p className="text-gray-600 mb-4">계획을 불러올 수 없습니다.</p>
          <Button onClick={handleRetake} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
            다시 시도하기
          </Button>
        </div>
      </div>
    );
  }

  const currentWeekData = result.weeklySchedule.find(week => week.week === selectedWeek);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
            <Button 
              variant="outline" 
              onClick={handleShare}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30"
            >
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>
          
          <div className="text-center mb-8">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 mb-6 text-sm font-semibold shadow-lg">
              <Calendar className="h-4 w-4 mr-2 inline" />
              훈련 계획 완성
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              {result.planName}
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium">
              {result.duration}주간 체계적인 훈련 계획이 완성되었습니다
            </p>
          </div>
        </div>
      </section>

      {/* Plan Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg mb-8">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{result.duration}주</div>
                    <div className="text-gray-600">훈련 기간</div>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{result.weeklySchedule[0]?.sessions.length || 0}회</div>
                    <div className="text-gray-600">주간 세션</div>
                  </div>
                  
                  <div>
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-2">{result.focusAreas.length}개</div>
                    <div className="text-gray-600">집중 영역</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                주간 훈련 계획
              </h2>
              <p className="text-gray-600">
                주차별 상세한 훈련 계획을 확인하세요
              </p>
            </div>
          </SlideUp>
          
          {/* Week Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Array.from({ length: result.duration }, (_, i) => i + 1).map(week => (
              <Button
                key={week}
                variant={selectedWeek === week ? "default" : "outline"}
                onClick={() => setSelectedWeek(week)}
                className={`px-4 py-2 ${
                  selectedWeek === week 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-500'
                }`}
              >
                {week}주차
              </Button>
            ))}
          </div>
          
          {/* Current Week Details */}
          {currentWeekData && (
            <FadeIn>
              <Card className="bg-white border-gray-200 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {selectedWeek}주차: {currentWeekData.focus}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2">
                    {currentWeekData.goals.map((goal, index) => (
                      <Badge key={index} className="bg-indigo-100 text-indigo-800 text-xs">
                        {goal}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentWeekData.sessions.map((session, index) => (
                      <Card key={index} className="bg-gray-50 border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{getTypeIcon(session.type)}</span>
                              <div>
                                <h3 className="font-bold text-gray-900">{session.day}</h3>
                                <p className="text-sm text-gray-600">{session.title}</p>
                              </div>
                            </div>
                            <Badge className={getIntensityColor(session.intensity)}>
                              {session.intensity}
                            </Badge>
                          </div>
                          
                          <p className="text-sm text-gray-700 mb-3">{session.description}</p>
                          
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-900">주요 연습:</h4>
                            {session.exercises.map((exercise, exIndex) => (
                              <div key={exIndex} className="text-xs text-gray-600">
                                <div className="font-medium">{exercise.name}</div>
                                <div className="text-gray-500">{exercise.duration}분</div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                집중 영역
              </h2>
              <p className="text-gray-600">
                중점적으로 연습할 영역과 우선순위입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.focusAreas.map((area, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">{area.area}</h3>
                        <Badge className={getPriorityColor(area.priority)}>
                          {area.priority} 우선순위
                        </Badge>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 연습:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.exercises.map((exercise, exIndex) => (
                            <Badge key={exIndex} className="bg-gray-100 text-gray-800 text-xs">
                              {exercise}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        <strong>기간:</strong> {area.timeline}
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Progress Milestones */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                진도 마일스톤
              </h2>
              <p className="text-gray-600">
                훈련 과정에서 달성할 수 있는 주요 목표들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="space-y-6">
              {result.progressMilestones.map((milestone, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-indigo-600">{milestone.week}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                          <p className="text-gray-600 mb-3">{milestone.description}</p>
                          <div className="space-y-1">
                            {milestone.criteria.map((criterion, critIndex) => (
                              <div key={critIndex} className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                <span>{criterion}</span>
                              </div>
                            ))}
                          </div>
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

      {/* Recommendations */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                맞춤형 권장사항
              </h2>
              <p className="text-gray-600">
                효과적인 훈련을 위한 전문가의 조언입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">기술적 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.technical.map((rec, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-700">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">전술적 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.tactical.map((rec, index) => (
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
                <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">체력적 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.physical.map((rec, index) => (
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
                <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">멘탈 권장사항</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.mental.map((rec, index) => (
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

      {/* Equipment & Next Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Equipment */}
            <SlideUp>
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">필요 장비</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {result.equipment.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
            
            {/* Next Steps */}
            <SlideUp>
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">다음 단계</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {result.nextSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-700">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                다음 단계
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleRetake}
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 계획하기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  계획 공유하기
                </Button>
                <Link href="/utility/ntrp-test">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    실력 테스트 하기
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="section-padding bg-gray-50">
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
                <Link href="/utility/match-analyzer">
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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
              
              <StaggeredItem>
                <Link href="/utility/equipment-recommendation">
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">장비 추천 시스템</h3>
                      <p className="text-gray-600 text-sm">맞춤형 장비 추천</p>
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

export default function TrainingPlannerResult() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 로딩 중입니다...</p>
        </div>
      </div>
    }>
      <TrainingPlannerResultContent />
    </Suspense>
  );
}
