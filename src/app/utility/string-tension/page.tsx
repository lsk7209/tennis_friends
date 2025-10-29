'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Settings, Zap, Shield, TrendingUp } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function StringTensionIntro() {
  const features = [
    {
      icon: Calculator,
      title: '정확한 계산',
      description: '라켓, 스트링, 플레이 스타일을 종합 분석하여 최적의 텐션을 추천합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Target,
      title: '맞춤형 추천',
      description: '당신의 NTRP 레벨과 환경에 맞는 개인화된 텐션 설정을 제공합니다.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Settings,
      title: '실전 가이드',
      description: '계절별, 지역별 환경을 고려한 실전적인 텐션 조정 팁을 제공합니다.',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '즉시 결과 확인',
      description: '6가지 간단한 질문으로 바로 최적 텐션을 확인하세요.',
      color: 'text-yellow-600'
    },
    {
      icon: Shield,
      title: '부상 예방',
      description: '적절한 텐션으로 테니스 엘보우 등 부상을 예방할 수 있습니다.',
      color: 'text-green-600'
    },
    {
      icon: TrendingUp,
      title: '실력 향상',
      description: '몸에 맞는 텐션으로 더 정확하고 강력한 샷을 구사하세요.',
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6 text-sm font-semibold">
                🎾 스트링 텐션 계산기
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                나에게 딱 맞는{' '}
                <span className="text-blue-600">스트링 텐션</span>은?
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                라켓, 스트링, 플레이 스타일에 따라 적정 텐션은 달라집니다.<br />
                간단한 테스트로 나에게 맞는 텐션을 알아보세요.
              </p>
            </SlideUp>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/utility/string-tension/test">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                  <Calculator className="h-5 w-5 mr-2" />
                  텐션 계산 시작하기
                </Button>
              </Link>
              <Link href="/utility/ntrp-test">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                  <Target className="h-5 w-5 mr-2" />
                  NTRP 실력 테스트
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>5,000+ 텐션 계산 완료</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>전문가 검증된 알고리즘</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>100% 무료 서비스</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 TennisFriends 텐션 계산기인가?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              과학적 분석과 전문가의 경험을 바탕으로 한 정확한 텐션 추천
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              텐션 계산의 장점
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              적절한 텐션 설정으로 더 나은 테니스 경험을 만들어보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              간단한 3단계로 완성
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              복잡한 계산은 우리가, 당신은 질문에만 답하면 됩니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">라켓 정보 입력</h3>
              <p className="text-gray-600 leading-relaxed">
                라켓 헤드 크기, 스트링 종류, 플레이 스타일을 선택하세요.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">환경 설정</h3>
              <p className="text-gray-600 leading-relaxed">
                실내/실외 환경, 기온, 선호하는 타구감을 선택하세요.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">결과 확인</h3>
              <p className="text-gray-600 leading-relaxed">
                당신에게 최적화된 텐션과 실전 팁을 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calculator className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  지금 바로 시작해보세요!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  단 2분이면 당신에게 최적화된 스트링 텐션을 찾을 수 있습니다.<br />
                  과학적 분석과 전문가의 조언이 기다립니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/string-tension/test">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                      <Calculator className="h-5 w-5 mr-2" />
                      텐션 계산 시작하기
                    </Button>
                  </Link>
                  <Link href="/utility/ntrp-test">
                    <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold focus-ring">
                      <Target className="h-5 w-5 mr-2" />
                      먼저 실력 테스트
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}