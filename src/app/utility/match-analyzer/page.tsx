'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, BarChart3, Target, Users, CheckCircle, ArrowRight, Award, Sparkles, Shield } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function MatchAnalyzerIntro() {
  const features = [
    {
      icon: BarChart3,
      title: '경기 분석',
      description: '서브, 리턴, 네트 플레이 등 세부 통계를 분석하여 경기력을 객관적으로 평가합니다.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '전술 개선',
      description: '약점을 파악하고 강점을 극대화할 수 있는 구체적인 전술적 조언을 제공합니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: '성과 추적',
      description: '경기별 성과를 기록하고 추적하여 지속적인 실력 향상을 도모합니다.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '데이터 기반 분석',
      description: '감각이 아닌 객관적 데이터로 정확한 분석',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 전문가가 검증한 분석 알고리즘',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Award,
      title: '맞춤형 조언',
      description: '개인별 약점과 강점에 맞는 구체적 개선 방안',
      gradient: 'from-purple-400 to-pink-400'
    }
  ];

  const analysisCategories = [
    {
      category: '서브 분석',
      description: '서브 성공률, 에이스, 더블폴트 등 서브 게임 분석',
      icon: '🎾',
      gradient: 'from-blue-100 to-cyan-100'
    },
    {
      category: '리턴 분석',
      description: '상대 서브에 대한 리턴 성공률과 품질 분석',
      icon: '⚡',
      gradient: 'from-green-100 to-emerald-100'
    },
    {
      category: '네트 플레이',
      description: '어프로치, 발리, 스매시 등 네트 플레이 분석',
      icon: '🕊️',
      gradient: 'from-purple-100 to-pink-100'
    },
    {
      category: '기본 스트로크',
      description: '포핸드, 백핸드의 위너와 에러 분석',
      icon: '💥',
      gradient: 'from-orange-100 to-red-100'
    },
    {
      category: '멘탈 게임',
      description: '브레이크 포인트, 타이브레이크 등 중요 포인트 분석',
      icon: '🧠',
      gradient: 'from-indigo-100 to-purple-100'
    },
    {
      category: '체력 관리',
      description: '경기 시간, 세트별 성과 변화 등 체력 관련 분석',
      icon: '💪',
      gradient: 'from-yellow-100 to-amber-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <BarChart3 className="h-4 w-4 mr-2 inline" />
                경기 분석 도구
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                데이터로 보는{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  나의 경기력
                </span>
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                경기 데이터를 분석하여 전술적 개선점을 찾아보세요.<br />
                <span className="text-gray-600">객관적 통계로 당신의 강점과 약점을 정확히 파악할 수 있습니다.</span>
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/match-analyzer/test">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    경기 분석 시작하기
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-blue-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                  <span>2,000+ 경기 분석 완료</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <span>전문가 검증된 분석</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
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
                왜 TennisFriends 경기 분석인가?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                경기 분석의 장점
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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

      {/* Analysis Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                분석 카테고리
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                6가지 주요 영역을 종합 분석하여 완벽한 경기력을 평가합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {analysisCategories.map((category, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-4">{category.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">{category.category}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
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
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                간단한 3단계로 완성
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                복잡한 분석은 우리가, 당신은 경기 데이터만 입력하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">경기 데이터 입력</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      서브, 리턴, 위너, 에러 등 경기 중 기록한 데이터를 입력하세요. 
                      간단한 폼으로 쉽게 입력할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">종합 분석</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      과학적 알고리즘이 당신의 경기 데이터를 분석하여 
                      강점과 약점을 객관적으로 평가합니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">맞춤형 리포트</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      분석 결과를 바탕으로 구체적인 개선 방안과 
                      다음 경기를 위한 목표를 제시합니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
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
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <BarChart3 className="h-12 w-12 text-white" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                      단 5분이면 당신의 경기력을 객관적으로 분석할 수 있습니다.<br />
                      <span className="text-gray-600">데이터 기반 분석과 전문가의 조언이 기다립니다.</span>
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/match-analyzer/test">
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                          <BarChart3 className="h-5 w-5 mr-2" />
                          경기 분석 시작하기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-blue-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
