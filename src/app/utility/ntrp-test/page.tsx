'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart3, Target, TrendingUp, Clock, Users, Award, CheckCircle, ArrowRight, Sparkles, Zap, Shield } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function NtrpTestIntro() {
  const features = [
    {
      icon: BarChart3,
      title: '정확한 분석',
      description: '15개 질문으로 당신의 실제 테니스 실력을 정확히 측정합니다.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '개인화된 결과',
      description: 'NTRP 등급과 함께 개선 방향과 연습 방법을 제시합니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: '성장 추적',
      description: '정기적으로 테스트하여 실력 향상을 객관적으로 확인하세요.',
      gradient: 'from-purple-500 to-pink-500'
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
      gradient: 'from-gray-400 to-gray-600',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      level: '2.5-3.0',
      description: '초급자',
      detail: '기본 스트로크를 구사할 수 있음',
      gradient: 'from-blue-400 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      level: '3.5-4.0',
      description: '중급자',
      detail: '안정적인 스트로크와 서브',
      gradient: 'from-green-400 to-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      level: '4.5-5.0+',
      description: '상급자',
      detail: '고급 기술과 전술 마스터',
      gradient: 'from-purple-400 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    }
  ];

  const testStats = [
    { label: '테스트 완료', value: '15,000+', icon: CheckCircle, color: 'text-green-600' },
    { label: '평균 소요시간', value: '5분', icon: Clock, color: 'text-blue-600' },
    { label: '정확도', value: '95%', icon: Target, color: 'text-purple-600' },
    { label: '만족도', value: '4.8/5', icon: Award, color: 'text-orange-600' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                NTRP 실력 테스트 v2
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                나의 테니스 실력은{' '}
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  어느 정도
                </span>
                일까?
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                15개 질문으로 정확한 NTRP 등급을 확인하고,<br />
                <span className="text-gray-600">개인화된 개선 방향을 제시받으세요.</span>
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/ntrp-test/test">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    실력 테스트 시작하기
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/utility/string-tension">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-gray-900 font-bold rounded-xl hover:bg-white transition-all duration-300 border-2 border-gray-300 hover:border-green-500 px-10 py-6 text-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                    <Target className="h-5 w-5 mr-2" />
                    스트링 텐션 계산기
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-base font-medium">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>
                  <span>15,000+ 테스트 완료</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Shield className="h-4 w-4 text-green-600" />
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              왜 TennisFriends NTRP 테스트인가?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              과학적 분석과 전문가의 경험을 바탕으로 한 정확한 실력 측정
            </p>
          </div>
          
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              테스트의 장점
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              간단하고 정확한 테스트로 더 나은 테니스 경험을 만들어보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                      <IconComponent className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-base">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* NTRP Levels Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              NTRP 레벨 시스템
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              미국 테니스 협회가 개발한 표준화된 실력 평가 시스템
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ntrpLevels.map((level, index) => (
              <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${level.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className={`text-4xl font-extrabold bg-gradient-to-r ${level.gradient} bg-clip-text text-transparent mb-4`}>
                    {level.level}
                  </div>
                  <Badge className={`px-4 py-2 text-sm font-bold text-white shadow-md mb-4 bg-gradient-to-r ${level.gradient}`}>
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
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              테스트 통계
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              많은 사용자들이 신뢰하는 검증된 테스트입니다
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-10 w-10 ${stat.color}`} />
                    </div>
                    <div className="text-4xl font-extrabold text-gray-900 mb-2">{stat.value}</div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              간단한 3단계로 완성
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              복잡한 계산은 우리가, 당신은 질문에만 답하면 됩니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">질문에 답하기</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  15개의 간단한 질문에 솔직하게 답변하세요. 각 질문은 당신의 실제 실력을 측정하기 위해 설계되었습니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">결과 분석</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  과학적 알고리즘이 당신의 답변을 분석하여 정확한 NTRP 등급과 성격 유형을 도출합니다.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">개선 방향 확인</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  당신의 실력에 맞는 구체적인 개선 방향과 연습 방법을 확인하세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <BarChart3 className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  지금 바로 시작해보세요!
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  단 5분이면 당신의 정확한 테니스 실력을 확인할 수 있습니다.<br />
                  <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test/test">
                    <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      실력 테스트 시작하기
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/utility/string-tension">
                    <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-green-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
