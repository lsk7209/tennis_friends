'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Heart, Target, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function InjuryRiskIntro() {
  const features = [
    {
      icon: Shield,
      title: '위험도 평가',
      description: '개인별 플레이 환경과 이력을 종합 분석하여 정확한 부상 위험도를 측정합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Target,
      title: '예방 가이드',
      description: '위험 요인별 맞춤형 예방 방법과 운동 가이드를 제공합니다.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Heart,
      title: '안전한 플레이',
      description: '장기적으로 건강한 테니스 생활을 위한 실용적인 조언을 제공합니다.',
      color: 'bg-red-100 text-red-800'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '개인별 맞춤',
      description: '나이, 경험, 플레이 환경을 고려한 맞춤형 분석',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 의학 전문가가 검증한 과학적 분석',
      color: 'text-green-600'
    },
    {
      icon: AlertTriangle,
      title: '조기 경고',
      description: '부상 전 위험 신호를 미리 감지하고 대응',
      color: 'text-orange-600'
    }
  ];

  const riskFactors = [
    {
      factor: '나이',
      description: '연령대별 관절 건강 상태',
      icon: '👴'
    },
    {
      factor: '플레이 빈도',
      description: '과도한 사용으로 인한 과부하',
      icon: '📅'
    },
    {
      factor: '이전 부상',
      description: '재발 가능성과 취약 부위',
      icon: '🏥'
    },
    {
      factor: '장비 상태',
      description: '노화된 장비로 인한 부상 위험',
      icon: '🎾'
    },
    {
      factor: '코트 환경',
      description: '코트 타입과 날씨 조건',
      icon: '🏟️'
    },
    {
      factor: '준비 운동',
      description: '워밍업과 쿨다운 루틴',
      icon: '🤸'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-6 text-sm font-semibold">
                🛡️ 부상 위험 예측
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                안전한 테니스를 위한{' '}
                <span className="text-red-600">부상 예방</span>
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                데이터 기반 분석으로 부상 위험도를 체크하고<br />
                안전한 플레이를 위한 맞춤형 조언을 받아보세요.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/injury-risk/test">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <Shield className="h-5 w-5 mr-2" />
                    위험도 체크 시작하기
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-red-500 px-8 py-4 text-lg focus-ring">
                    <Target className="h-5 w-5 mr-2" />
                    먼저 실력 테스트
                  </Button>
                </Link>
                <Link href="/utility/string-tension">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-red-500 px-8 py-4 text-lg focus-ring">
                    <Heart className="h-5 w-5 mr-2" />
                    스트링 텐션 계산기
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>3,000+ 위험도 체크 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>전문가 검증된 알고리즘</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  <span>100% 무료 서비스</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                왜 TennisFriends 부상 예방인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 전문가의 경험을 바탕으로 한 정확한 부상 예방
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <StaggeredItem key={index}>
                    <Card className="h-full bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-red-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                );
              })}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                부상 예방의 장점
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                조기 발견과 예방으로 더 오래, 더 안전하게 테니스를 즐기세요
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <StaggeredItem key={index}>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </StaggeredItem>
                );
              })}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                부상 위험 요인
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                6가지 주요 요인을 종합 분석하여 정확한 위험도를 측정합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riskFactors.map((factor, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{factor.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{factor.factor}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{factor.description}</p>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                간단한 3단계로 완성
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                복잡한 계산은 우리가, 당신은 질문에만 답하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">정보 입력</h3>
                  <p className="text-gray-600 leading-relaxed">
                    나이, 플레이 환경, 이전 부상 이력 등 개인 정보를 입력하세요. 
                    모든 정보는 안전하게 보호됩니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">위험도 분석</h3>
                  <p className="text-gray-600 leading-relaxed">
                    과학적 알고리즘이 당신의 정보를 분석하여 정확한 부상 위험도를 도출합니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">맞춤형 가이드</h3>
                  <p className="text-gray-600 leading-relaxed">
                    위험 요인별 예방 방법과 안전한 플레이를 위한 구체적인 조언을 확인하세요.
                  </p>
                </div>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-red-50 via-white to-orange-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-10 w-10 text-red-600" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      단 3분이면 당신의 부상 위험도를 확인할 수 있습니다.<br />
                      과학적 분석과 전문가의 조언이 기다립니다.
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/injury-risk/test">
                        <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                          <Shield className="h-5 w-5 mr-2" />
                          위험도 체크 시작하기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-gray-300 hover:border-red-500 px-8 py-4 text-lg font-semibold focus-ring">
                          <Target className="h-5 w-5 mr-2" />
                          먼저 실력 테스트
                        </Button>
                      </Link>
                    </div>
                  </SlideUp>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}