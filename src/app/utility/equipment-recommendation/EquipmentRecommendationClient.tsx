'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {Target, Zap, Star, Users, CheckCircle, ArrowRight, Award, Shield} from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function EquipmentRecommendationIntro() {
  const features = [
    {
      icon: Target,
      title: '맞춤 추천',
      description: '플레이 스타일과 실력에 맞는 최적의 라켓과 스트링을 추천합니다.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Star,
      title: '브랜드별 비교',
      description: 'Wilson, Babolat, Head, Yonex 등 주요 브랜드의 장비를 비교 분석합니다.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Zap,
      title: '가격대별 옵션',
      description: '예산에 맞는 다양한 가격대의 장비 옵션을 제공합니다.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '개인별 맞춤',
      description: '나이, 실력, 플레이 스타일을 고려한 맞춤형 추천',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Users,
      title: '전문가 검증',
      description: '테니스 전문가가 검증한 신뢰할 수 있는 추천',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Award,
      title: '리뷰 연동',
      description: '실제 사용자 리뷰와 평점을 반영한 추천',
      gradient: 'from-purple-400 to-pink-400'
    }
  ];

  const brands = [
    { name: 'Wilson', logo: '🎾', description: '프로 선수들이 가장 많이 사용하는 브랜드', gradient: 'from-red-100 to-orange-100' },
    { name: 'Babolat', logo: '🔥', description: '파워와 스핀에 특화된 프랑스 브랜드', gradient: 'from-blue-100 to-cyan-100' },
    { name: 'Head', logo: '🎯', description: '컨트롤과 안정성을 중시하는 오스트리아 브랜드', gradient: 'from-purple-100 to-pink-100' },
    { name: 'Yonex', logo: '⚡', description: '혁신적인 기술로 주목받는 일본 브랜드', gradient: 'from-green-100 to-emerald-100' },
    { name: 'Prince', logo: '👑', description: '전통과 혁신을 결합한 미국 브랜드', gradient: 'from-yellow-100 to-amber-100' },
    { name: 'Dunlop', logo: '🏆', description: '클래식한 디자인과 품질의 영국 브랜드', gradient: 'from-indigo-100 to-purple-100' }
  ];

  const priceRanges = [
    { range: '저예산', min: 0, max: 100000, description: '초보자용 기본 장비', gradient: 'from-green-500 to-emerald-500' },
    { range: '중간가격', min: 100000, max: 200000, description: '중급자용 성능 장비', gradient: 'from-blue-500 to-cyan-500' },
    { range: '고가', min: 200000, max: 300000, description: '고급자용 프리미엄 장비', gradient: 'from-purple-500 to-pink-500' },
    { range: '프리미엄', min: 300000, max: 500000, description: '프로급 최고급 장비', gradient: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/80 backdrop-blur-sm border border-indigo-200 text-indigo-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <Target className="h-4 w-4 mr-2 inline" />
                장비 추천 시스템
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                나에게 맞는{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  완벽한 장비
                </span>
                를 찾아보세요
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                플레이 스타일과 실력에 맞는 최적의 라켓과 스트링을 추천해드립니다.<br />
                <span className="text-gray-600">전문가가 검증한 데이터로 더 나은 선택을 하세요.</span>
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/equipment-recommendation/test">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <Target className="h-5 w-5 mr-2" />
                    장비 추천 받기
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-indigo-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <Zap className="h-5 w-5 mr-2" />
                    먼저 실력 테스트
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-base font-medium">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-indigo-600 rounded-full animate-pulse"></div>
                  <span>5,000+ 장비 추천 완료</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Shield className="h-4 w-4 text-indigo-600" />
                  <span>전문가 검증된 데이터</span>
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
                왜 TennisFriends 장비 추천인가?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
                장비 추천의 장점
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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

      {/* Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                주요 브랜드
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                세계적인 테니스 브랜드들의 장비를 비교 분석합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${brand.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <CardContent className="p-6 text-center relative z-10">
                      <div className="text-5xl mb-4">{brand.logo}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800">{brand.name}</h3>
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
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                가격대별 옵션
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                예산에 맞는 다양한 가격대의 장비를 추천해드립니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {priceRanges.map((range, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <Badge className={`px-4 py-2 text-sm font-bold text-white shadow-md mb-4 bg-gradient-to-r ${range.gradient}`}>
                        {range.range}
                      </Badge>
                      <div className="text-xl font-bold text-gray-900 mb-2">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                간단한 3단계로 완성
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                복잡한 분석은 우리가, 당신은 질문에만 답하면 됩니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggeredItem>
                <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">정보 입력</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      플레이 스타일, 실력, 예산, 부상 이력 등 개인 정보를 입력하세요. 
                      모든 정보는 안전하게 보호됩니다.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">장비 분석</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      과학적 알고리즘이 당신의 정보를 분석하여 최적의 라켓과 스트링을 도출합니다.
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">맞춤형 추천</h3>
                    <p className="text-gray-600 leading-relaxed text-base">
                      당신에게 최적화된 라켓, 스트링, 액세서리 추천과 구매 가이드를 확인하세요.
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <FadeIn>
            <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                      <Target className="h-12 w-12 text-white" />
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                      지금 바로 시작해보세요!
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                      단 5분이면 당신에게 최적화된 장비를 추천받을 수 있습니다.<br />
                      <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex justify-center">
                      <Link href="/utility/equipment-recommendation/test">
                        <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                          <Target className="h-5 w-5 mr-2" />
                          장비 추천 받기
                          <ArrowRight className="h-5 w-5 ml-2" />
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
