'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, Heart, Target, Users, CheckCircle, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function InjuryRiskIntro() {
  const features = [
    {
      icon: Shield,
      title: '위험도 평가',
      description: '개인별 플레이 환경과 이력을 종합 분석하여 정확한 부상 위험도를 측정합니다.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '예방 가이드',
      description: '위험 요인별 맞춤형 예방 방법과 운동 가이드를 제공합니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: '안전한 플레이',
      description: '장기적으로 건강한 테니스 생활을 위한 실용적인 조언을 제공합니다.',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '개인별 맞춤',
      description: '나이, 경험, 플레이 환경을 고려한 맞춤형 분석',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 의학 전문가가 검증한 과학적 분석',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: AlertTriangle,
      title: '조기 경고',
      description: '부상 전 위험 신호를 미리 감지하고 대응',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const riskFactors = [
    {
      factor: '나이',
      description: '연령대별 관절 건강 상태',
      icon: '👴',
      gradient: 'from-red-100 to-orange-100'
    },
    {
      factor: '플레이 빈도',
      description: '과도한 사용으로 인한 과부하',
      icon: '📅',
      gradient: 'from-blue-100 to-cyan-100'
    },
    {
      factor: '이전 부상',
      description: '재발 가능성과 취약 부위',
      icon: '🏥',
      gradient: 'from-purple-100 to-pink-100'
    },
    {
      factor: '장비 상태',
      description: '노화된 장비로 인한 부상 위험',
      icon: '🎾',
      gradient: 'from-green-100 to-emerald-100'
    },
    {
      factor: '코트 환경',
      description: '코트 타입과 날씨 조건',
      icon: '🏟️',
      gradient: 'from-yellow-100 to-amber-100'
    },
    {
      factor: '준비 운동',
      description: '워밍업과 쿨다운 루틴',
      icon: '🤸',
      gradient: 'from-indigo-100 to-purple-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-amber-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/80 backdrop-blur-sm border border-red-200 text-red-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <Shield className="h-4 w-4 mr-2 inline" />
                부상 위험 예측
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                안전한 테니스를 위한{' '}
                <span className="bg-gradient-to-r from-red-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                  부상 예방
                </span>
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                데이터 기반 분석으로 부상 위험도를 체크하고<br />
                <span className="text-gray-600">안전한 플레이를 위한 맞춤형 조언을 받아보세요.</span>
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/injury-risk/test">
                  <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <Shield className="h-5 w-5 mr-2" />
                    위험도 체크 시작하기
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-red-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Target className="h-5 w-5 mr-2" />
                    먼저 실력 테스트
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-base font-medium">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                  <span>3,000+ 위험도 체크 완료</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Shield className="h-4 w-4 text-red-600" />
                  <span>전문가 검증된 알고리즘</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span>100% 무료 서비스</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                왜 TennisFriends 부상 예방인가?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                    <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      <CardContent className="p-8 text-center relative z-10">
                        <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                부상 예방의 장점
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                    <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-base">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                );
              })}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Risk Factors Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                부상 위험 요인
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                6가지 주요 요인을 종합 분석하여 정확한 위험도를 측정합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {riskFactors.map((factor, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${factor.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="text-5xl mb-4">{factor.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">{factor.factor}</h3>
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
      <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                간단한 3단계로 완성
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                복잡한 계산은 우리가, 당신은 질문에만 답하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">정보 입력</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      나이, 플레이 환경, 이전 부상 이력 등 개인 정보를 입력하세요. 
                      모든 정보는 안전하게 보호됩니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">위험도 분석</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      과학적 알고리즘이 당신의 정보를 분석하여 정확한 부상 위험도를 도출합니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-amber-500 to-yellow-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">맞춤형 가이드</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      위험 요인별 예방 방법과 안전한 플레이를 위한 구체적인 조언을 확인하세요.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <FadeIn>
            <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Shield className="h-12 w-12 text-white" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                      단 3분이면 당신의 부상 위험도를 확인할 수 있습니다.<br />
                      <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/injury-risk/test">
                        <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                          <Shield className="h-5 w-5 mr-2" />
                          위험도 체크 시작하기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-red-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
