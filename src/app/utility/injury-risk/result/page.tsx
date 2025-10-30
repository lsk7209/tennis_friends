'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, RotateCcw, Share2, Sparkles } from 'lucide-react';
import { getRiskLevelInfo } from '@/lib/injuryRiskCalc';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

function InjuryRiskResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  
  const riskScore = Number(searchParams.get('riskScore') || 0);
  const riskLevel = searchParams.get('riskLevel') || 'medium';
  const riskFactors = JSON.parse(searchParams.get('riskFactors') || '[]');
  const preventionTips = JSON.parse(searchParams.get('preventionTips') || '[]');
  const equipmentRecommendations = JSON.parse(searchParams.get('equipmentRecommendations') || '[]');
  const trainingAdjustments = JSON.parse(searchParams.get('trainingAdjustments') || '[]');
  const warningSigns = JSON.parse(searchParams.get('warningSigns') || '[]');

  const riskInfo = getRiskLevelInfo(riskLevel);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleRetake = () => {
    router.push('/utility/injury-risk/test');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TennisFriends 부상 위험도 체크 결과',
        text: `나의 테니스 부상 위험도는 ${riskInfo.label}입니다.`,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const getRiskGradient = (level: string) => {
    const gradients = {
      'low': 'from-green-500 to-emerald-500',
      'medium': 'from-yellow-500 to-orange-500',
      'high': 'from-red-500 to-orange-500',
      'very-high': 'from-red-600 to-red-800'
    };
    return gradients[level as keyof typeof gradients] || 'from-yellow-500 to-orange-500';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">분석 중입니다...</h2>
          <p className="text-gray-600">부상 위험도를 계산하고 있습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 relative z-10">
          <div className="text-center mb-8">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 mb-6 text-sm font-semibold shadow-lg">
              <Shield className="h-4 w-4 mr-2 inline" />
              부상 위험도 분석 완료
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              당신의 부상 위험도는
            </h1>
          </div>
        </div>
      </section>

      {/* Risk Score Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeIn>
            <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 mb-8">
              <CardContent className="p-12 text-center">
                <div className={`w-32 h-32 bg-gradient-to-br ${getRiskGradient(riskLevel)} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl`}>
                  <Shield className="h-16 w-16 text-white" />
                </div>
                <div className="text-7xl font-extrabold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">{riskScore}</div>
                <div className="text-xl text-gray-600 mb-6 font-medium">위험도 점수</div>
                <Badge className={`px-6 py-3 text-xl font-bold text-white shadow-lg bg-gradient-to-r ${getRiskGradient(riskLevel)}`}>
                  {riskInfo.label}
                </Badge>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mt-8">
                  {riskInfo.description}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Risk Factors Section */}
      {riskFactors.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-red-50">
          <div className="container mx-auto max-w-4xl px-4">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  주요 위험 요인
                </h2>
                <p className="text-gray-600 text-lg">
                  다음 요인들이 부상 위험을 높이고 있습니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {riskFactors.map((factor: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Alert className="bg-red-50 border-2 border-red-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <AlertDescription className="text-red-800 font-medium">
                        {factor}
                      </AlertDescription>
                    </Alert>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Prevention Tips Section */}
      {preventionTips.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  예방 방법
                </h2>
                <p className="text-gray-600 text-lg">
                  부상 위험을 줄이기 위한 구체적인 방법들입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preventionTips.map((tip: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                            <CheckCircle className="h-6 w-6 text-white" />
                          </div>
                          <p className="text-green-800 leading-relaxed font-medium flex-1">{tip}</p>
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

      {/* Equipment Recommendations Section */}
      {equipmentRecommendations.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container mx-auto max-w-4xl px-4">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  장비 추천
                </h2>
                <p className="text-gray-600 text-lg">
                  부상 예방에 도움이 되는 장비들입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipmentRecommendations.map((equipment: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mt-0.5 flex-shrink-0 shadow-md">
                            <span className="text-white text-lg font-bold">!</span>
                          </div>
                          <p className="text-blue-800 leading-relaxed font-medium flex-1">{equipment}</p>
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

      {/* Training Adjustments Section */}
      {trainingAdjustments.length > 0 && (
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-4xl px-4">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                  훈련 조정사항
                </h2>
                <p className="text-gray-600 text-lg">
                  더 안전한 플레이를 위한 훈련 방법 조정사항입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trainingAdjustments.map((adjustment: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mt-0.5 flex-shrink-0 shadow-md">
                            <span className="text-white text-lg">⚡</span>
                          </div>
                          <p className="text-purple-800 leading-relaxed font-medium flex-1">{adjustment}</p>
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

      {/* Warning Signs Section */}
      {warningSigns.length > 0 && (
        <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto max-w-4xl px-4">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold text-red-900 mb-4">
                  주의해야 할 신호들
                </h2>
                <p className="text-red-700 text-lg font-medium">
                  다음 증상이 나타나면 즉시 플레이를 중단하고 전문가와 상담하세요.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSigns.map((sign: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Alert className="bg-red-100 border-2 border-red-300 shadow-lg hover:shadow-xl transition-all duration-300">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <AlertDescription className="text-red-800 font-bold">
                        {sign}
                      </AlertDescription>
                    </Alert>
                  </StaggeredItem>
                ))}
              </div>
            </StaggeredAnimation>
          </div>
        </section>
      )}

      {/* Action Buttons Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                다음 단계
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleRetake}
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-red-500 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 체크하기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-red-500 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  결과 공유하기
                </Button>
                <Link href="/utility/ntrp-test">
                  <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
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
      <section className="py-12 md:py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="container mx-auto max-w-4xl px-4">
          <SlideUp>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                관련 도구
              </h2>
              <p className="text-gray-600 text-lg">
                더 나은 테니스 경험을 위한 다른 도구들도 확인해보세요.
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggeredItem>
                <Link href="/utility/ntrp-test">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-3xl">🎾</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">NTRP 실력 테스트</h3>
                      <p className="text-gray-600 text-sm">정확한 실력 측정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/string-tension">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-3xl">⚙️</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">스트링 텐션 계산기</h3>
                      <p className="text-gray-600 text-sm">최적의 텐션 설정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/tennis-rules-quiz">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-3xl">📚</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">테니스 규칙 퀴즈</h3>
                      <p className="text-gray-600 text-sm">규칙 이해도 체크</p>
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

export default function InjuryRiskResult() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 로딩 중입니다...</p>
        </div>
      </div>
    }>
      <InjuryRiskResultContent />
    </Suspense>
  );
}
