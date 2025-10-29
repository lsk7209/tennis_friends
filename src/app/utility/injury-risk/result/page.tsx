'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, AlertTriangle, CheckCircle, ArrowRight, RotateCcw, Share2, Download } from 'lucide-react';
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
    // 로딩 시뮬레이션
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-red-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">분석 중입니다...</h2>
          <p className="text-gray-600">부상 위험도를 계산하고 있습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4 text-sm font-semibold">
              🛡️ 부상 위험도 분석 완료
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              당신의 부상 위험도는
            </h1>
          </div>
        </div>
      </section>

      {/* Risk Score Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg mb-8">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-12 w-12 text-red-600" />
                  </div>
                  <div className="text-6xl font-bold text-gray-900 mb-2">{riskScore}</div>
                  <div className="text-xl text-gray-600 mb-4">위험도 점수</div>
                  <Badge className={`px-4 py-2 text-lg font-semibold ${riskInfo.color}`}>
                    {riskInfo.label}
                  </Badge>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                  {riskInfo.description}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Risk Factors Section */}
      {riskFactors.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto max-w-4xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  주요 위험 요인
                </h2>
                <p className="text-gray-600">
                  다음 요인들이 부상 위험을 높이고 있습니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {riskFactors.map((factor: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Alert className="bg-red-50 border-red-200">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
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
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-4xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  예방 방법
                </h2>
                <p className="text-gray-600">
                  부상 위험을 줄이기 위한 구체적인 방법들입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {preventionTips.map((tip: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-green-800 leading-relaxed">{tip}</p>
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
        <section className="section-padding bg-gray-50">
          <div className="container mx-auto max-w-4xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  장비 추천
                </h2>
                <p className="text-gray-600">
                  부상 예방에 도움이 되는 장비들입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipmentRecommendations.map((equipment: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">!</span>
                          </div>
                          <p className="text-blue-800 leading-relaxed">{equipment}</p>
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
        <section className="section-padding bg-white">
          <div className="container mx-auto max-w-4xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  훈련 조정사항
                </h2>
                <p className="text-gray-600">
                  더 안전한 플레이를 위한 훈련 방법 조정사항입니다.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {trainingAdjustments.map((adjustment: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Card className="bg-purple-50 border-purple-200">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-white text-xs font-bold">⚡</span>
                          </div>
                          <p className="text-purple-800 leading-relaxed">{adjustment}</p>
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
        <section className="section-padding bg-red-50">
          <div className="container mx-auto max-w-4xl container-padding">
            <SlideUp>
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-red-900 mb-4">
                  주의해야 할 신호들
                </h2>
                <p className="text-red-700">
                  다음 증상이 나타나면 즉시 플레이를 중단하고 전문가와 상담하세요.
                </p>
              </div>
            </SlideUp>
            
            <StaggeredAnimation staggerDelay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSigns.map((sign: string, index: number) => (
                  <StaggeredItem key={index}>
                    <Alert className="bg-red-100 border-red-300">
                      <AlertTriangle className="h-4 w-4 text-red-600" />
                      <AlertDescription className="text-red-800">
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
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                다음 단계
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleRetake}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-red-500 px-6 py-3"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  다시 체크하기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-red-500 px-6 py-3"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  결과 공유하기
                </Button>
                <Link href="/utility/ntrp-test">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3">
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
        <div className="container mx-auto max-w-4xl container-padding">
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
                  <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
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
                <Link href="/utility/string-tension">
                  <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">스트링 텐션 계산기</h3>
                      <p className="text-gray-600 text-sm">최적의 텐션 설정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/tennis-rules-quiz">
                  <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📚</span>
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
    <Suspense fallback={<div>Loading...</div>}>
      <InjuryRiskResultContent />
    </Suspense>
  );
}
