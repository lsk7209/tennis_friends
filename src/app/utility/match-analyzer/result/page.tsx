'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { BarChart3, TrendingUp, Target, ArrowRight, RotateCcw, Share2, CheckCircle, AlertTriangle } from 'lucide-react';
import { MatchAnalysisResult } from '@/lib/matchAnalyzer';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

function MatchAnalyzerResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<MatchAnalysisResult | null>(null);
  
  useEffect(() => {
    // 로딩 시뮬레이션
    const timer = setTimeout(() => {
      const overallScore = Number(searchParams.get('overallScore') || 0);
      const grade = searchParams.get('grade') || 'C';
      const strengths = JSON.parse(searchParams.get('strengths') || '[]');
      const weaknesses = JSON.parse(searchParams.get('weaknesses') || '[]');
      const improvements = JSON.parse(searchParams.get('improvements') || '[]');
      const statistics = JSON.parse(searchParams.get('statistics') || '{}');
      const recommendations = JSON.parse(searchParams.get('recommendations') || '{}');
      const nextMatchGoals = JSON.parse(searchParams.get('nextMatchGoals') || '[]');
      
      setResult({
        overallScore,
        grade: grade as "A" | "B" | "C" | "D" | "F",
        strengths,
        weaknesses,
        improvements,
        statistics,
        recommendations,
        nextMatchGoals
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleRetake = () => {
    router.push('/utility/match-analyzer/test');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TennisFriends 경기 분석 결과',
        text: `나의 경기 분석 결과는 ${result?.grade}등급입니다!`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-blue-100 text-blue-800';
      case 'C': return 'bg-yellow-100 text-yellow-800';
      case 'D': return 'bg-orange-100 text-orange-800';
      case 'F': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getGradeDescription = (grade: string) => {
    switch (grade) {
      case 'A': return '우수한 경기력입니다!';
      case 'B': return '양호한 경기력입니다.';
      case 'C': return '평균적인 경기력입니다.';
      case 'D': return '개선이 필요한 경기력입니다.';
      case 'F': return '전반적인 개선이 필요합니다.';
      default: return '분석 결과입니다.';
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">분석 중입니다...</h2>
          <p className="text-gray-600">경기 데이터를 분석하고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">오류가 발생했습니다</h2>
          <p className="text-gray-600 mb-4">결과를 불러올 수 없습니다.</p>
          <Button onClick={handleRetake}>다시 시도하기</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              📊 경기 분석 완료
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              당신의 경기 분석 결과
            </h1>
            <p className="text-gray-600 text-lg">
              데이터 기반 분석으로 정확한 강점과 약점을 파악했습니다
            </p>
          </div>
        </div>
      </section>

      {/* Overall Score Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg mb-8">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-12 w-12 text-blue-600" />
                  </div>
                  <div className="text-6xl font-bold text-gray-900 mb-2">{result.overallScore}</div>
                  <div className="text-xl text-gray-600 mb-4">종합 점수</div>
                  <Badge className={`px-4 py-2 text-lg font-semibold ${getGradeColor(result.grade)}`}>
                    {result.grade}등급
                  </Badge>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  {getGradeDescription(result.grade)}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                주요 통계
              </h2>
              <p className="text-gray-600">
                경기에서 기록한 주요 지표들을 분석했습니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {result.statistics.servePercentage.toFixed(1)}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">서브 성공률</h3>
                    <p className="text-gray-600 text-sm">첫 서브 성공률</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {result.statistics.returnPercentage.toFixed(1)}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">리턴 성공률</h3>
                    <p className="text-gray-600 text-sm">상대 서브 리턴 성공률</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      {result.statistics.winnerErrorRatio.toFixed(2)}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">위너/에러 비율</h3>
                    <p className="text-gray-600 text-sm">공격성 지표</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {result.statistics.netPlaySuccess.toFixed(1)}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">네트 플레이 성공률</h3>
                    <p className="text-gray-600 text-sm">발리 및 스매시 성공률</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">
                      {result.statistics.breakPointConversion.toFixed(1)}%
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">브레이크 포인트 컨버전</h3>
                    <p className="text-gray-600 text-sm">중요 포인트 활용률</p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Strengths Section */}
      {result.strengths.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-6xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  강점 분석
                </h2>
                <p className="text-gray-600">
                  이번 경기에서 잘한 부분들입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.strengths.map((strength, index) => (
                  <StaggeredItem key={index}>
                    <Alert className="bg-green-50 border-green-200">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
                        {strength}
                      </AlertDescription>
                    </Alert>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Weaknesses Section */}
      {result.weaknesses.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto max-w-6xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  약점 분석
                </h2>
                <p className="text-gray-600">
                  개선이 필요한 부분들입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.weaknesses.map((weakness, index) => (
                  <StaggeredItem key={index}>
                    <Alert className="bg-orange-50 border-orange-200">
                      <AlertTriangle className="h-4 w-4 text-orange-600" />
                      <AlertDescription className="text-orange-800">
                        {weakness}
                      </AlertDescription>
                    </Alert>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Recommendations Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                맞춤형 개선 방안
              </h2>
              <p className="text-gray-600">
                분석 결과를 바탕으로 한 구체적인 개선 방안입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">기술적 개선</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.technical.map((rec, index) => (
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
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">전술적 개선</CardTitle>
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
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">멘탈 개선</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.mental.map((rec, index) => (
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
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">체력 개선</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.recommendations.physical.map((rec, index) => (
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

      {/* Next Match Goals Section */}
      {result.nextMatchGoals.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto max-w-6xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  다음 경기 목표
                </h2>
                <p className="text-gray-600">
                  개선된 경기력을 위한 구체적인 목표들입니다
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.nextMatchGoals.map((goal, index) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <Target className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <p className="text-blue-800 leading-relaxed">{goal}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Action Buttons Section */}
      <section className="section-padding bg-white">
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
                  className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  다시 분석하기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  결과 공유하기
                </Button>
                <Link href="/utility/ntrp-test">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                    <ArrowRight className="h-4 w-4 mr-2" />
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
                <Link href="/utility/ntrp-test">
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎾</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">NTRP 실력 테스트</h3>
                      <p className="text-gray-600 text-sm">정확한 실력 측정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/injury-risk">
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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

export default function MatchAnalyzerResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MatchAnalyzerResultContent />
    </Suspense>
  );
}
