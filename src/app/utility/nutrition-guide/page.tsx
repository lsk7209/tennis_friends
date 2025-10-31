import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Apple, Droplets, Clock, CheckCircle, ArrowRight, Users, Award, TrendingUp } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

// 메타데이터
export const metadata: Metadata = {
  title: '테니스 영양 가이드 - 경기력 향상 영양 전략 | TennisFriends',
  description: '테니스 선수를 위한 종합 영양 가이드. 경기 전후 영양 섭취, 수분 보충, 에너지 관리, 회복 전략을 과학적으로 안내합니다.',
  keywords: ['테니스 영양', '테니스 식단', '경기 영양', '수분 보충', '에너지 관리', '영양 전략'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/nutrition-guide',
  },
  openGraph: {
    title: '테니스 영양 가이드 - 경기력 향상 영양 전략 | TennisFriends',
    description: '테니스 선수를 위한 종합 영양 가이드. 경기 전후 영양 섭취, 수분 보충, 에너지 관리, 회복 전략을 과학적으로 안내합니다.',
    url: 'https://tennisfriends.co.kr/utility/nutrition-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 영양 가이드 - 경기력 향상 영양 전략 | TennisFriends',
    description: '테니스 선수를 위한 종합 영양 가이드.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NutritionGuideIntro() {
  const features = [
    {
      icon: Apple,
      title: '영양 계획',
      description: '경기 전후와 훈련에 최적화된 맞춤형 영양 계획을 제공합니다.',
      color: 'bg-green-100 text-green-800'
    },
    {
      icon: Droplets,
      title: '수분 보충',
      description: '체중과 활동량을 고려한 정확한 수분 보충 가이드를 제공합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Zap,
      title: '에너지 관리',
      description: '지속적인 에너지 공급과 회복을 위한 탄수화물과 단백질 균형을 맞춥니다.',
      color: 'bg-yellow-100 text-yellow-800'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '과학적 근거',
      description: '스포츠 영양학 연구 결과를 바탕으로 한 검증된 방법론',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: '개인 맞춤',
      description: '체중, 활동량, 목표에 맞는 개별화된 영양 계획',
      color: 'text-blue-600'
    },
    {
      icon: Award,
      title: '성과 극대화',
      description: '최적의 영양 공급으로 경기력과 회복력을 향상',
      color: 'text-yellow-600'
    }
  ];

  const nutritionPhases = [
    {
      phase: '세션 전',
      description: '지속적인 에너지 공급을 위한 복합탄수화물 중심 식사',
      icon: '🌅',
      timing: '2-3시간 전',
      focus: ['복합탄수화물', '적당한 단백질', '소화 용이성']
    },
    {
      phase: '세션 중',
      description: '빠른 에너지 보충과 수분 공급으로 지구력 유지',
      icon: '⚡',
      timing: '세션 중간',
      focus: ['간단한 탄수화물', '수분 보충', '전해질 균형']
    },
    {
      phase: '세션 후',
      description: '근육 회복과 글리코겐 보충을 위한 단백질과 탄수화물',
      icon: '🔄',
      timing: '30분 이내',
      focus: ['고품질 단백질', '빠른 탄수화물', '항산화 성분']
    },
    {
      phase: '회복기',
      description: '전체적인 회복과 다음 경기를 위한 균형 잡힌 영양',
      icon: '💪',
      timing: '1-2시간 후',
      focus: ['균형 잡힌 식사', '충분한 수분', '미네랄 보충']
    }
  ];

  const mealTypes = [
    {
      type: '탄수화물',
      description: '에너지의 주요 공급원으로 복합탄수화물을 우선 선택',
      percentage: '50-65%',
      sources: ['현미', '오트밀', '과일', '야채', '통밀빵'],
      color: 'bg-orange-100 text-orange-800'
    },
    {
      type: '단백질',
      description: '근육 회복과 성장을 위한 고품질 단백질 공급',
      percentage: '15-25%',
      sources: ['닭가슴살', '연어', '계란', '콩류', '견과류'],
      color: 'bg-red-100 text-red-800'
    },
    {
      type: '지방',
      description: '호르몬 생성과 항염 효과를 위한 건강한 지방',
      percentage: '20-30%',
      sources: ['아보카도', '올리브오일', '견과류', '연어', '아몬드'],
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6 text-sm font-semibold">
                🍎 테니스 영양 가이드
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                영양으로 만드는{' '}
                <span className="text-green-600">최고의 경기력</span>
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                경기 전후와 훈련에 최적화된 영양 섭취 가이드를 제공합니다.<br />
                과학적 근거에 기반한 맞춤형 영양 계획으로 경기력과 회복력을 극대화하세요.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/nutrition-guide/test">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <Apple className="h-5 w-5 mr-2" />
                    영양 계획 만들기
                  </Button>
                </Link>
                <Link href="/utility/training-planner">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-green-500 px-8 py-4 text-lg focus-ring">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    훈련 계획과 함께
                  </Button>
                </Link>
                <Link href="/utility/match-analyzer">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-green-500 px-8 py-4 text-lg focus-ring">
                    <Zap className="h-5 w-5 mr-2" />
                    경기 분석하기
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>스포츠 영양학 기반</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>개인 맞춤형 계획</span>
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
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                왜 TennisFriends 영양 가이드인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                과학적 근거와 전문가의 경험을 바탕으로 한 체계적인 영양 관리
              </p>
            </div>
          </SlideUp>
          
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
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                영양 가이드의 장점
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                체계적인 영양 관리로 더 나은 경기력과 빠른 회복을 경험하세요
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

      {/* Nutrition Phases Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                영양 섭취 단계
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                4단계 영양 섭취로 최적의 경기력과 회복을 달성하세요
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionPhases.map((phase, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="text-4xl mb-4">{phase.icon}</div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{phase.description}</p>
                        <Badge className="bg-green-100 text-green-800 text-xs">
                          {phase.timing}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 포커스:</h4>
                        {phase.focus.map((focus, focusIndex) => (
                          <div key={focusIndex} className="flex items-center gap-2 text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
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

      {/* Macronutrients Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                주요 영양소
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                테니스 선수에게 필요한 3대 영양소의 균형 잡힌 섭취
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mealTypes.map((type, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{type.type}</h3>
                          <p className="text-gray-600 leading-relaxed mb-4">{type.description}</p>
                        </div>
                        <Badge className={type.color}>
                          {type.percentage}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">주요 공급원:</h4>
                        <div className="flex flex-wrap gap-2">
                          {type.sources.map((source, sourceIndex) => (
                            <Badge key={sourceIndex} className="bg-gray-100 text-gray-800 text-xs">
                              {source}
                            </Badge>
                          ))}
                        </div>
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
                복잡한 계산은 우리가, 당신은 정보만 입력하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">정보 입력</h3>
                  <p className="text-gray-600 leading-relaxed">
                    체중, 활동량, 목표, 식이 제한 등 기본 정보를 입력하세요. 
                    간단한 설문으로 쉽게 입력할 수 있습니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">계획 생성</h3>
                  <p className="text-gray-600 leading-relaxed">
                    스포츠 영양학 알고리즘이 당신의 정보를 분석하여 
                    최적의 영양 계획을 자동으로 생성합니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">계획 실행</h3>
                  <p className="text-gray-600 leading-relaxed">
                    세션별 상세한 식단과 타이밍 가이드로 
                    체계적이고 효과적인 영양 관리를 경험하세요.
                  </p>
                </div>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-green-50 via-white to-yellow-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Apple className="h-10 w-10 text-green-600" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      단 3분이면 당신만의 맞춤형 영양 계획을 만들 수 있습니다.<br />
                      과학적 근거와 전문가의 조언이 기다립니다.
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/nutrition-guide/test">
                        <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                          <Apple className="h-5 w-5 mr-2" />
                          영양 계획 만들기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/training-planner">
                        <Button variant="outline" className="bg-white border-gray-300 hover:border-green-500 px-8 py-4 text-lg font-semibold focus-ring">
                          <TrendingUp className="h-5 w-5 mr-2" />
                          훈련 계획과 함께
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
