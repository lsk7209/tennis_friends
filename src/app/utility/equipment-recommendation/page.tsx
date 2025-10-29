'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Zap, Star, Users, CheckCircle, ArrowRight, Award } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function EquipmentRecommendationIntro() {
  const features = [
    {
      icon: Target,
      title: '맞춤 추천',
      description: '플레이 스타일과 실력에 맞는 최적의 라켓과 스트링을 추천합니다.',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      icon: Star,
      title: '브랜드별 비교',
      description: 'Wilson, Babolat, Head, Yonex 등 주요 브랜드의 장비를 비교 분석합니다.',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      icon: Zap,
      title: '가격대별 옵션',
      description: '예산에 맞는 다양한 가격대의 장비 옵션을 제공합니다.',
      color: 'bg-green-100 text-green-800'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '개인별 맞춤',
      description: '나이, 실력, 플레이 스타일을 고려한 맞춤형 추천',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 전문가가 검증한 신뢰할 수 있는 추천',
      color: 'text-green-600'
    },
    {
      icon: Award,
      title: '리뷰 연동',
      description: '실제 사용자 리뷰와 평점을 반영한 추천',
      color: 'text-purple-600'
    }
  ];

  const brands = [
    { name: 'Wilson', logo: '🎾', description: '프로 선수들이 가장 많이 사용하는 브랜드' },
    { name: 'Babolat', logo: '🔥', description: '파워와 스핀에 특화된 프랑스 브랜드' },
    { name: 'Head', logo: '🎯', description: '컨트롤과 안정성을 중시하는 오스트리아 브랜드' },
    { name: 'Yonex', logo: '⚡', description: '혁신적인 기술로 주목받는 일본 브랜드' },
    { name: 'Prince', logo: '👑', description: '전통과 혁신을 결합한 미국 브랜드' },
    { name: 'Dunlop', logo: '🏆', description: '클래식한 디자인과 품질의 영국 브랜드' }
  ];

  const priceRanges = [
    { range: '저예산', min: 0, max: 100000, description: '초보자용 기본 장비', color: 'bg-green-100 text-green-800' },
    { range: '중간가격', min: 100000, max: 200000, description: '중급자용 성능 장비', color: 'bg-blue-100 text-blue-800' },
    { range: '고가', min: 200000, max: 300000, description: '고급자용 프리미엄 장비', color: 'bg-purple-100 text-purple-800' },
    { range: '프리미엄', min: 300000, max: 500000, description: '프로급 최고급 장비', color: 'bg-yellow-100 text-yellow-800' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6 text-sm font-semibold">
                🎾 장비 추천 시스템
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                나에게 맞는{' '}
                <span className="text-blue-600">완벽한 장비</span>를 찾아보세요
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                플레이 스타일과 실력에 맞는 최적의 라켓과 스트링을 추천해드립니다.<br />
                전문가가 검증한 데이터로 더 나은 선택을 하세요.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/equipment-recommendation/test">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <Target className="h-5 w-5 mr-2" />
                    장비 추천 받기
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg focus-ring">
                    <Zap className="h-5 w-5 mr-2" />
                    먼저 실력 테스트
                  </Button>
                </Link>
                <Link href="/utility/injury-risk">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg focus-ring">
                    <Star className="h-5 w-5 mr-2" />
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
                  <span>5,000+ 장비 추천 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>전문가 검증된 데이터</span>
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
                왜 TennisFriends 장비 추천인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 전문가의 경험을 바탕으로 한 정확한 장비 추천
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
                장비 추천의 장점
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                맞춤형 추천으로 더 나은 테니스 경험을 만들어보세요
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

      {/* Brands Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                주요 브랜드
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                세계적인 테니스 브랜드들의 장비를 비교 분석합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-4">{brand.logo}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{brand.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{brand.description}</p>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Price Ranges Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                가격대별 옵션
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                예산에 맞는 다양한 가격대의 장비를 추천해드립니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {priceRanges.map((range, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <Badge className={`px-3 py-1 text-sm font-semibold mb-3 ${range.color}`}>
                        {range.range}
                      </Badge>
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        {range.min.toLocaleString()}원 ~ {range.max.toLocaleString()}원
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{range.description}</p>
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
                복잡한 분석은 우리가, 당신은 질문에만 답하면 됩니다
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
                  <h3 className="text-xl font-bold text-gray-900 mb-3">정보 입력</h3>
                  <p className="text-gray-600 leading-relaxed">
                    플레이 스타일, 실력, 예산, 부상 이력 등 개인 정보를 입력하세요. 
                    모든 정보는 안전하게 보호됩니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">장비 분석</h3>
                  <p className="text-gray-600 leading-relaxed">
                    과학적 알고리즘이 당신의 정보를 분석하여 최적의 라켓과 스트링을 도출합니다.
                  </p>
                </div>
              </StaggeredItem>
              
              <StaggeredItem>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">맞춤형 추천</h3>
                  <p className="text-gray-600 leading-relaxed">
                    당신에게 최적화된 라켓, 스트링, 액세서리 추천과 구매 가이드를 확인하세요.
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
                      <Target className="h-10 w-10 text-blue-600" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      단 5분이면 당신에게 최적화된 장비를 추천받을 수 있습니다.<br />
                      과학적 분석과 전문가의 조언이 기다립니다.
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/utility/equipment-recommendation/test">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                          <Target className="h-5 w-5 mr-2" />
                          장비 추천 받기
                          <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                      </Link>
                      <Link href="/utility/ntrp-test">
                        <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-4 text-lg font-semibold focus-ring">
                          <Zap className="h-5 w-5 mr-2" />
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
