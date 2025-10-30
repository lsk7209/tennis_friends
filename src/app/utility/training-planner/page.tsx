'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Calendar, CheckCircle, ArrowRight, Users, Award, TrendingUp, Sparkles, Shield } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function TrainingPlannerIntro() {
  const features = [
    {
      icon: Calculator,
      title: '개인별 계획',
      description: '현재 실력과 목표에 맞는 맞춤형 훈련 계획을 생성합니다.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: Target,
      title: '목표 설정',
      description: '구체적이고 달성 가능한 목표를 설정하고 단계별로 접근합니다.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: '진도 추적',
      description: '주간별 훈련 계획과 진도 체크로 체계적인 실력 향상을 도모합니다.',
      gradient: 'from-fuchsia-500 to-rose-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '체계적 접근',
      description: '과학적 방법론에 기반한 체계적인 훈련 계획',
      gradient: 'from-violet-400 to-purple-400'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 전문가가 검증한 훈련 방법론 적용',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Award,
      title: '맞춤형 설계',
      description: '개인의 실력과 환경에 맞는 개별화된 계획',
      gradient: 'from-pink-400 to-rose-400'
    }
  ];

  const trainingTypes = [
    {
      type: '기술 훈련',
      description: '기본 스트로크와 서브 기술을 집중적으로 연습',
      icon: '🎾',
      duration: '60-90분',
      gradient: 'from-blue-100 to-cyan-100'
    },
    {
      type: '전술 훈련',
      description: '경기 상황에 맞는 전술과 포지셔닝을 연습',
      icon: '🧠',
      duration: '60-90분',
      gradient: 'from-purple-100 to-pink-100'
    },
    {
      type: '체력 훈련',
      description: '테니스에 필요한 체력과 근력을 향상',
      icon: '💪',
      duration: '45-60분',
      gradient: 'from-orange-100 to-red-100'
    },
    {
      type: '경기 연습',
      description: '실전 경기를 통한 경험과 적응력을 기름',
      icon: '🏆',
      duration: '90-120분',
      gradient: 'from-yellow-100 to-amber-100'
    },
    {
      type: '회복 훈련',
      description: '몸의 회복과 유연성을 위한 가벼운 훈련',
      icon: '🧘',
      duration: '30-45분',
      gradient: 'from-green-100 to-emerald-100'
    }
  ];

  const levels = [
    {
      level: '초보자',
      description: '테니스를 처음 시작하는 분들을 위한 기초 훈련',
      duration: '12주',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      level: '중급자',
      description: '기본기를 바탕으로 실력 향상을 목표로 하는 훈련',
      duration: '8주',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      level: '고급자',
      description: '고급 기술과 전술을 익히는 전문적인 훈련',
      duration: '6주',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      level: '전문가',
      description: '경기 최적화를 위한 세밀한 훈련 계획',
      duration: '4주',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-fuchsia-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/80 backdrop-blur-sm border border-violet-200 text-violet-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <Calendar className="h-4 w-4 mr-2 inline" />
                훈련 계획 수립
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                체계적인{' '}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
                  훈련 계획
                </span>
                으로<br />
                실력을 한 단계 올리세요
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                개인 실력과 목표에 맞는 체계적인 훈련 계획을 세워보세요.<br />
                <span className="text-gray-600">과학적 방법론과 전문가의 경험을 바탕으로 한 맞춤형 계획으로 확실한 실력 향상을 경험하세요.</span>
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/training-planner/test">
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
                    <Calculator className="h-5 w-5 mr-2" />
                    훈련 계획 만들기
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-violet-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2">
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
                  <div className="w-3 h-3 bg-violet-600 rounded-full animate-pulse"></div>
                  <span>1,500+ 훈련 계획 생성</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Shield className="h-4 w-4 text-violet-600" />
                  <span>전문가 검증된 방법론</span>
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
                왜 TennisFriends 훈련 계획인가?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 전문가의 경험을 바탕으로 한 체계적인 훈련 계획
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
                훈련 계획의 장점
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                체계적인 계획으로 더 효율적이고 지속 가능한 실력 향상을 도모하세요
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

      {/* Training Types Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                훈련 유형
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                5가지 훈련 유형을 균형있게 조합하여 최적의 훈련 계획을 구성합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingTypes.map((training, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${training.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-6 relative z-10">
                      <div className="text-center mb-4">
                        <div className="text-5xl mb-4">{training.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">{training.type}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{training.description}</p>
                        <Badge className="bg-violet-100 text-violet-800 text-xs font-semibold">
                          {training.duration}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                실력별 맞춤 계획
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                현재 실력에 맞는 최적의 훈련 계획을 제공합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {levels.map((level, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                          <p className="text-gray-600 leading-relaxed mb-4">{level.description}</p>
                        </div>
                        <Badge className={`px-4 py-2 text-sm font-bold text-white shadow-md bg-gradient-to-r ${level.gradient}`}>
                          {level.duration}
                        </Badge>
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
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                간단한 3단계로 완성
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                복잡한 계획은 우리가, 당신은 정보만 입력하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">정보 입력</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      현재 실력, 목표, 가용 시간 등 기본 정보를 입력하세요. 
                      간단한 설문으로 쉽게 입력할 수 있습니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">계획 생성</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      과학적 알고리즘이 당신의 정보를 분석하여 
                      최적의 훈련 계획을 자동으로 생성합니다.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">계획 실행</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      주간별 상세 계획과 진도 체크로 
                      체계적이고 지속 가능한 실력 향상을 경험하세요.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 relative overflow-hidden">
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
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Calculator className="h-12 w-12 text-white" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                      단 3분이면 당신만의 맞춤형 훈련 계획을 만들 수 있습니다.<br />
                      <span className="text-gray-600">체계적인 계획과 전문가의 조언이 기다립니다.</span>
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/training-planner/test">
                        <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                          <Calculator className="h-5 w-5 mr-2" />
                          훈련 계획 만들기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-violet-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
