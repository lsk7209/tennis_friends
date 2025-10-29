'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Calendar, CheckCircle, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function TrainingPlannerIntro() {
  const features = [
    {
      icon: Calculator,
      title: '개인별 계획',
      description: '현재 실력과 목표에 맞는 맞춤형 훈련 계획을 생성합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Target,
      title: '목표 설정',
      description: '구체적이고 달성 가능한 목표를 설정하고 단계별로 접근합니다.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Calendar,
      title: '진도 추적',
      description: '주간별 훈련 계획과 진도 체크로 체계적인 실력 향상을 도모합니다.',
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '체계적 접근',
      description: '과학적 방법론에 기반한 체계적인 훈련 계획',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 전문가가 검증한 훈련 방법론 적용',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: '맞춤형 설계',
      description: '개인의 실력과 환경에 맞는 개별화된 계획',
      color: 'text-purple-600'
    }
  ];

  const trainingTypes = [
    {
      type: '기술 훈련',
      description: '기본 스트로크와 서브 기술을 집중적으로 연습',
      icon: '🎾',
      duration: '60-90분',
      focus: ['포핸드', '백핸드', '서브', '발리']
    },
    {
      type: '전술 훈련',
      description: '경기 상황에 맞는 전술과 포지셔닝을 연습',
      icon: '🧠',
      duration: '60-90분',
      focus: ['포지셔닝', '샷 선택', '경기 운영', '상대 분석']
    },
    {
      type: '체력 훈련',
      description: '테니스에 필요한 체력과 근력을 향상',
      icon: '💪',
      duration: '45-60분',
      focus: ['지구력', '스피드', '민첩성', '근력']
    },
    {
      type: '경기 연습',
      description: '실전 경기를 통한 경험과 적응력을 기름',
      icon: '🏆',
      duration: '90-120분',
      focus: ['실전 경험', '압박 상황', '멘탈 강화', '전략 실행']
    },
    {
      type: '회복 훈련',
      description: '몸의 회복과 유연성을 위한 가벼운 훈련',
      icon: '🧘',
      duration: '30-45분',
      focus: ['스트레칭', '유연성', '회복', '기본 동작']
    }
  ];

  const levels = [
    {
      level: '초보자',
      description: '테니스를 처음 시작하는 분들을 위한 기초 훈련',
      duration: '12주',
      focus: ['기본 동작', '라켓 컨트롤', '기본 규칙']
    },
    {
      level: '중급자',
      description: '기본기를 바탕으로 실력 향상을 목표로 하는 훈련',
      duration: '8주',
      focus: ['기술 정교화', '전술 이해', '체력 향상']
    },
    {
      level: '고급자',
      description: '고급 기술과 전술을 익히는 전문적인 훈련',
      duration: '6주',
      focus: ['고급 기술', '전술적 사고', '멘탈 강화']
    },
    {
      level: '전문가',
      description: '경기 최적화를 위한 세밀한 훈련 계획',
      duration: '4주',
      focus: ['경기 최적화', '세부 조정', '성과 극대화']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 mb-6 text-sm font-semibold">
                📅 훈련 계획 수립
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                체계적인{' '}
                <span className="text-indigo-600">훈련 계획</span>으로<br />
                실력을 한 단계 올리세요
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                개인 실력과 목표에 맞는 체계적인 훈련 계획을 세워보세요.<br />
                과학적 방법론과 전문가의 경험을 바탕으로 한 맞춤형 계획으로 확실한 실력 향상을 경험하세요.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/training-planner/test">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <Calculator className="h-5 w-5 mr-2" />
                    훈련 계획 만들기
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg focus-ring">
                    <Target className="h-5 w-5 mr-2" />
                    먼저 실력 테스트
                  </Button>
                </Link>
                <Link href="/utility/match-analyzer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg focus-ring">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    경기 분석하기
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>1,500+ 훈련 계획 생성</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span>전문가 검증된 방법론</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
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
                왜 TennisFriends 훈련 계획인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                    <Card className="h-full bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-indigo-600" />
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
                훈련 계획의 장점
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

      {/* Training Types Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                훈련 유형
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                5가지 훈련 유형을 균형있게 조합하여 최적의 훈련 계획을 구성합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingTypes.map((training, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-4">{training.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{training.type}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{training.description}</p>
                        <Badge className="bg-indigo-100 text-indigo-800 text-xs">
                          {training.duration}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 포커스:</h4>
                        {training.focus.map((focus, focusIndex) => (
                          <div key={focusIndex} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            <span>{focus}</span>
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

      {/* Levels Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                실력별 맞춤 계획
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                현재 실력에 맞는 최적의 훈련 계획을 제공합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {levels.map((level, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{level.level}</h3>
                          <p className="text-gray-600 leading-relaxed mb-4">{level.description}</p>
                        </div>
                        <Badge className="bg-indigo-100 text-indigo-800 text-sm">
                          {level.duration}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 포커스:</h4>
                        {level.focus.map((focus, focusIndex) => (
                          <div key={focusIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                            <span>{focus}</span>
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
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                간단한 3단계로 완성
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                복잡한 계획은 우리가, 당신은 정보만 입력하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">정보 입력</h3>
                  <p className="text-gray-600 leading-relaxed">
                    현재 실력, 목표, 가용 시간 등 기본 정보를 입력하세요. 
                    간단한 설문으로 쉽게 입력할 수 있습니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">계획 생성</h3>
                  <p className="text-gray-600 leading-relaxed">
                    과학적 알고리즘이 당신의 정보를 분석하여 
                    최적의 훈련 계획을 자동으로 생성합니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">계획 실행</h3>
                  <p className="text-gray-600 leading-relaxed">
                    주간별 상세 계획과 진도 체크로 
                    체계적이고 지속 가능한 실력 향상을 경험하세요.
                  </p>
                </div>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Calculator className="h-10 w-10 text-indigo-600" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      단 3분이면 당신만의 맞춤형 훈련 계획을 만들 수 있습니다.<br />
                      체계적인 계획과 전문가의 조언이 기다립니다.
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/training-planner/test">
                        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                          <Calculator className="h-5 w-5 mr-2" />
                          훈련 계획 만들기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg font-semibold focus-ring">
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
