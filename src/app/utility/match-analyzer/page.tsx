'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart3, Target, Users, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function MatchAnalyzerIntro() {
  const features = [
    {
      icon: BarChart3,
      title: '경기 분석',
      description: '서브, 리턴, 네트 플레이 등 세부 통계를 분석하여 경기력을 객관적으로 평가합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Target,
      title: '전술 개선',
      description: '약점을 파악하고 강점을 극대화할 수 있는 구체적인 전술적 조언을 제공합니다.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: TrendingUp,
      title: '성과 추적',
      description: '경기별 성과를 기록하고 추적하여 지속적인 실력 향상을 도모합니다.',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '데이터 기반 분석',
      description: '감각이 아닌 객관적 데이터로 정확한 분석',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 전문가가 검증한 분석 알고리즘',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: '맞춤형 조언',
      description: '개인별 약점과 강점에 맞는 구체적 개선 방안',
      color: 'text-purple-600'
    }
  ];

  const analysisCategories = [
    {
      category: '서브 분석',
      description: '서브 성공률, 에이스, 더블폴트 등 서브 게임 분석',
      icon: '🎾',
      metrics: ['서브 성공률', '에이스 개수', '더블폴트', '서브 위치']
    },
    {
      category: '리턴 분석',
      description: '상대 서브에 대한 리턴 성공률과 품질 분석',
      icon: '⚡',
      metrics: ['리턴 성공률', '리턴 위너', '리턴 에러', '리턴 각도']
    },
    {
      category: '네트 플레이',
      description: '어프로치, 발리, 스매시 등 네트 플레이 분석',
      icon: '🕊️',
      metrics: ['어프로치 성공률', '발리 정확도', '스매시 성공률', '포지셔닝']
    },
    {
      category: '기본 스트로크',
      description: '포핸드, 백핸드의 위너와 에러 분석',
      icon: '💥',
      metrics: ['포핸드 위너', '백핸드 위너', '에러 비율', '샷 선택']
    },
    {
      category: '멘탈 게임',
      description: '브레이크 포인트, 타이브레이크 등 중요 포인트 분석',
      icon: '🧠',
      metrics: ['브레이크 포인트', '타이브레이크', '집중력', '압박 대응']
    },
    {
      category: '체력 관리',
      description: '경기 시간, 세트별 성과 변화 등 체력 관련 분석',
      icon: '💪',
      metrics: ['경기 시간', '세트별 성과', '지구력', '회복력']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6 text-sm font-semibold">
                📊 경기 분석 도구
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                데이터로 보는{' '}
                <span className="text-blue-600">나의 경기력</span>
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                경기 데이터를 분석하여 전술적 개선점을 찾아보세요.<br />
                객관적 통계로 당신의 강점과 약점을 정확히 파악할 수 있습니다.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/match-analyzer/test">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    경기 분석 시작하기
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg focus-ring">
                    <Target className="h-5 w-5 mr-2" />
                    먼저 실력 테스트
                  </Button>
                </Link>
                <Link href="/utility/injury-risk">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg focus-ring">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    부상 위험 체크
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>2,000+ 경기 분석 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>전문가 검증된 분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
                왜 TennisFriends 경기 분석인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 전문가의 경험을 바탕으로 한 정확한 경기 분석
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <StaggeredItem key={index}>
                    <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-blue-600" />
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
                경기 분석의 장점
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                객관적 데이터로 더 정확하고 체계적인 실력 향상을 도모하세요
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

      {/* Analysis Categories Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                분석 카테고리
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                6가지 주요 영역을 종합 분석하여 완벽한 경기력을 평가합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisCategories.map((category, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-4">{category.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{category.category}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{category.description}</p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 지표:</h4>
                        {category.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                            <span>{metric}</span>
                          </div>
                        ))}
                      </div>
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
                복잡한 분석은 우리가, 당신은 경기 데이터만 입력하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">경기 데이터 입력</h3>
                  <p className="text-gray-600 leading-relaxed">
                    서브, 리턴, 위너, 에러 등 경기 중 기록한 데이터를 입력하세요. 
                    간단한 폼으로 쉽게 입력할 수 있습니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">종합 분석</h3>
                  <p className="text-gray-600 leading-relaxed">
                    과학적 알고리즘이 당신의 경기 데이터를 분석하여 
                    강점과 약점을 객관적으로 평가합니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">맞춤형 리포트</h3>
                  <p className="text-gray-600 leading-relaxed">
                    분석 결과를 바탕으로 구체적인 개선 방안과 
                    다음 경기를 위한 목표를 제시합니다.
                  </p>
                </div>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BarChart3 className="h-10 w-10 text-blue-600" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      단 5분이면 당신의 경기력을 객관적으로 분석할 수 있습니다.<br />
                      데이터 기반 분석과 전문가의 조언이 기다립니다.
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/match-analyzer/test">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                          <BarChart3 className="h-5 w-5 mr-2" />
                          경기 분석 시작하기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold focus-ring">
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
