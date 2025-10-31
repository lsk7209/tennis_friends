import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Settings, Zap, Shield, TrendingUp, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

// 메타데이터
export const metadata: Metadata = {
  title: '스트링 텐션 계산기 - 최적 텐션 추천 | TennisFriends',
  description: '스트링 텐션 계산기로 당신에게 맞는 최적 텐션을 찾아보세요. 라켓 무게, 플레이 스타일, 실력을 고려한 과학적 텐션 추천.',
  keywords: ['스트링 텐션', '텐션 계산기', '테니스 스트링', '라켓 텐션', '스트링 장력'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/string-tension',
  },
  openGraph: {
    title: '스트링 텐션 계산기 - 최적 텐션 추천 | TennisFriends',
    description: '스트링 텐션 계산기로 당신에게 맞는 최적 텐션을 찾아보세요. 라켓 무게, 플레이 스타일, 실력을 고려한 과학적 텐션 추천.',
    url: 'https://tennisfriends.co.kr/utility/string-tension',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '스트링 텐션 계산기 - 최적 텐션 추천 | TennisFriends',
    description: '스트링 텐션 계산기로 당신에게 맞는 최적 텐션을 찾아보세요.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StringTensionIntro() {
  const features = [
    {
      icon: Calculator,
      title: '정확한 계산',
      description: '라켓, 스트링, 플레이 스타일을 종합 분석하여 최적의 텐션을 추천합니다.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '맞춤형 추천',
      description: '당신의 NTRP 레벨과 환경에 맞는 개인화된 텐션 설정을 제공합니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Settings,
      title: '실전 가이드',
      description: '계절별, 지역별 환경을 고려한 실전적인 텐션 조정 팁을 제공합니다.',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '즉시 결과 확인',
      description: '6가지 간단한 질문으로 바로 최적 텐션을 확인하세요.',
      gradient: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: '부상 예방',
      description: '적절한 텐션으로 테니스 엘보우 등 부상을 예방할 수 있습니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: '실력 향상',
      description: '몸에 맞는 텐션으로 더 정확하고 강력한 샷을 구사하세요.',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-emerald-500/5 to-teal-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                스트링 텐션 계산기
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                나에게 딱 맞는{' '}
                <span className="bg-gradient-to-r from-blue-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  스트링 텐션
                </span>
                은?
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                라켓, 스트링, 플레이 스타일에 따라 적정 텐션은 달라집니다.<br />
                <span className="text-gray-600">간단한 테스트로 나에게 맞는 텐션을 알아보세요.</span>
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/utility/string-tension/test">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white w-full sm:w-auto px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Calculator className="h-5 w-5 mr-2" />
                    텐션 계산 시작하기
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-blue-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <Target className="h-5 w-5 mr-2" />
                    NTRP 실력 테스트
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-700 text-base font-medium">
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                  <span>5,000+ 텐션 계산 완료</span>
                </div>
                <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                  <Shield className="h-4 w-4 text-blue-600" />
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
              왜 TennisFriends 텐션 계산기인가?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              과학적 분석과 전문가의 경험을 바탕으로 한 정확한 텐션 추천
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
              텐션 계산의 장점
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              적절한 텐션 설정으로 더 나은 테니스 경험을 만들어보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <IconComponent className="h-10 w-10 text-white" />
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
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">라켓 정보 입력</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  라켓 헤드 크기, 스트링 종류, 플레이 스타일을 선택하세요.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">환경 설정</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  실내/실외 환경, 기온, 선호하는 타구감을 선택하세요.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold shadow-xl group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">결과 확인</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  당신에게 최적화된 텐션과 실전 팁을 확인하세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-emerald-600 to-teal-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  지금 바로 시작해보세요!
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  단 2분이면 당신에게 최적화된 스트링 텐션을 찾을 수 있습니다.<br />
                  <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/string-tension/test">
                    <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                      <Calculator className="h-5 w-5 mr-2" />
                      텐션 계산 시작하기
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
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
