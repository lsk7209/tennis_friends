'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Target, TrendingUp, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function NtrpTestIntro() {
  const features = [
    {
      icon: BarChart3,
      title: '정확한 분석',
      description: '15개 질문으로 당신의 실제 테니스 실력을 정확히 측정합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Target,
      title: '개인화된 결과',
      description: 'NTRP 등급과 함께 개선 방향과 연습 방법을 제시합니다.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: TrendingUp,
      title: '성장 추적',
      description: '테스트 결과를 저장하고 시간에 따른 실력 향상을 확인하세요.',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '빠른 테스트',
      description: '단 5분이면 정확한 실력 평가를 받을 수 있습니다.',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '객관적 평가',
      description: '주관적 판단이 아닌 과학적 기준으로 실력을 측정합니다.',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: '전문가 검증',
      description: '테니스 전문가들이 검증한 신뢰할 수 있는 테스트입니다.',
      color: 'text-purple-600'
    }
  ];

  const ntrpLevels = [
    {
      level: '1.5-2.0',
      description: '초보자',
      detail: '기본 스트로크를 배우는 단계',
      color: 'bg-gray-100 text-gray-800'
    },
    {
      level: '2.5-3.0',
      description: '초급자',
      detail: '기본 스트로크를 구사할 수 있음',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      level: '3.5-4.0',
      description: '중급자',
      detail: '안정적인 스트로크와 서브',
      color: 'bg-green-100 text-green-800'
    },
    {
      level: '4.5-5.0+',
      description: '상급자',
      detail: '고급 기술과 전술 마스터',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const testStats = [
    { label: '테스트 완료', value: '15,000+', icon: CheckCircle },
    { label: '평균 소요시간', value: '5분', icon: Clock },
    { label: '정확도', value: '95%', icon: Target },
    { label: '만족도', value: '4.8/5', icon: Award }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6 text-sm font-semibold">
                🎾 NTRP 실력 테스트 v2
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                나의 테니스 실력은{' '}
                <span className="text-green-600">어느 정도</span>일까?
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                15개 질문으로 정확한 NTRP 등급을 확인하고,<br />
                개인화된 개선 방향을 제시받으세요.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/ntrp-test/test">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    실력 테스트 시작하기
                  </Button>
                </Link>
                <Link href="/utility/string-tension">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-green-500 px-8 py-4 text-lg focus-ring">
                    <Target className="h-5 w-5 mr-2" />
                    스트링 텐션 계산기
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>15,000+ 테스트 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>전문가 검증된 알고리즘</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              왜 TennisFriends NTRP 테스트인가?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              과학적 분석과 전문가의 경험을 바탕으로 한 정확한 실력 측정
            </p>
          </div>
          
          <StaggeredAnimation staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <StaggeredItem key={index}>
                    <Card className="h-full bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-green-600" />
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              테스트의 장점
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              간단하고 정확한 테스트로 더 나은 테니스 경험을 만들어보세요
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

      {/* NTRP Levels Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              NTRP 레벨 시스템
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              미국 테니스 협회가 개발한 표준화된 실력 평가 시스템
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ntrpLevels.map((level, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-2">{level.level}</div>
                  <Badge className={`px-3 py-1 text-sm font-semibold mb-3 ${level.color}`}>
                    {level.description}
                  </Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{level.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Test Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              테스트 통계
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              많은 사용자들이 신뢰하는 검증된 테스트입니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
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
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">질문에 답하기</h3>
              <p className="text-gray-600 leading-relaxed">
                15개의 간단한 질문에 솔직하게 답변하세요. 각 질문은 당신의 실제 실력을 측정하기 위해 설계되었습니다.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">결과 분석</h3>
              <p className="text-gray-600 leading-relaxed">
                과학적 알고리즘이 당신의 답변을 분석하여 정확한 NTRP 등급과 성격 유형을 도출합니다.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">개선 방향 확인</h3>
              <p className="text-gray-600 leading-relaxed">
                당신의 실력에 맞는 구체적인 개선 방향과 연습 방법을 확인하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-50 via-white to-blue-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  지금 바로 시작해보세요!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  단 5분이면 당신의 정확한 테니스 실력을 확인할 수 있습니다.<br />
                  과학적 분석과 전문가의 조언이 기다립니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test/test">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      실력 테스트 시작하기
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/utility/string-tension">
                    <Button variant="outline" className="bg-white border-gray-300 hover:border-green-500 px-8 py-4 text-lg font-semibold focus-ring">
                      <Target className="h-5 w-5 mr-2" />
                      스트링 텐션 계산기
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