'use client';

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Target, TrendingUp, CheckCircle, ArrowRight, Sparkles, Play, Timer, Award, Gamepad2 } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

// 메타데이터
export const metadata: Metadata = {
  title: '반응 속도 테스트 - 테니스 반응 속도 측정 | TennisFriends',
  description: '테니스 공에 대한 반응 속도를 측정하고 순발력 향상을 위한 게임형 테스트를 제공합니다.',
  keywords: ['반응 속도 테스트', '순발력', '테니스 반응', '게임형 테스트', '반응 시간'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/reaction-test',
  },
  openGraph: {
    title: '반응 속도 테스트 - 테니스 반응 속도 측정 | TennisFriends',
    description: '테니스 공에 대한 반응 속도를 측정하고 순발력 향상을 위한 게임형 테스트를 제공합니다.',
    url: 'https://tennisfriends.co.kr/utility/reaction-test',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '반응 속도 테스트 - 테니스 반응 속도 측정 | TennisFriends',
    description: '테니스 공에 대한 반응 속도를 측정하고 순발력 향상을 위한 게임형 테스트를 제공합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ReactionTestIntro() {
  const features = [
    {
      icon: Zap,
      title: '반응 속도 측정',
      description: '시각적 신호에 대한 반응 시간을 정밀하게 측정합니다. 테니스 공에 대한 순발력을 평가합니다.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Target,
      title: '테니스 특화',
      description: '테니스 코트의 실제 상황을 고려한 다양한 반응 패턴으로 실전 감각을 향상시킵니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Gamepad2,
      title: '게임형 테스트',
      description: '지루할 수 있는 테스트를 게임처럼 재미있게 구성하여 동기부여를 높입니다.',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: TrendingUp,
      title: '개선 추적',
      description: '정기적인 테스트로 반응 속도 향상 정도를 그래프로 시각화하여 추적합니다.',
      gradient: 'from-blue-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '순발력 향상',
      description: '빠른 반응 속도로 상대의 강타에 효과적으로 대응할 수 있습니다.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Play,
      title: '실전 적용',
      description: '게임에서 배운 반응 패턴을 실제 테니스 코트에서 활용할 수 있습니다.',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Timer,
      title: '시간 절약',
      description: '짧은 시간에 효과적인 훈련으로 바쁜 일상 속에서 실력 향상을 이룹니다.',
      gradient: 'from-purple-400 to-indigo-400'
    },
    {
      icon: Award,
      title: '재미있는 훈련',
      description: '게임처럼 재미있는 방식으로 훈련하여 꾸준한 연습을 유지할 수 있습니다.',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const testModes = [
    {
      title: '기본 반응 테스트',
      description: '화면에 표시되는 신호에 최대한 빠르게 반응하는 기본 테스트',
      difficulty: '쉬움',
      time: '30초',
      color: 'bg-green-100 text-green-800'
    },
    {
      title: '랜덤 패턴 테스트',
      description: '예측할 수 없는 타이밍으로 실전 같은 긴장감을 제공',
      difficulty: '중간',
      time: '45초',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      title: '다중 신호 테스트',
      description: '여러 신호를 동시에 처리하는 고급 반응 능력 테스트',
      difficulty: '어려움',
      time: '60초',
      color: 'bg-red-100 text-red-800'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 dark:from-orange-950 dark:via-red-950 dark:to-rose-950">
      {/* Hero Section */}
      <FadeIn>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              반응 속도 테스트
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              테니스
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> 반응 속도</span>
              측정
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              테니스 공에 대한 반응 속도를 게임처럼 재미있게 측정하세요. 순발력 향상으로 상대의 강타에
              효과적으로 대응하고 실력을 한 단계 업그레이드하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/reaction-test/test">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg">
                  <Play className="w-5 h-5 mr-2" />
                  반응 속도 테스트 시작
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="border-orange-500 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-950 px-8 py-3 text-lg">
                  자세히 보기
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                주요 기능
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                과학적이고 재미있는 반응 속도 훈련을 위한 다양한 기능들
              </p>
            </div>
          </SlideUp>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <StaggeredItem key={index}>
                <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* Test Modes Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                테스트 모드
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                난이도별로 구성된 다양한 테스트 모드로 단계적 향상을 이루세요
              </p>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testModes.map((mode, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {mode.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {mode.description}
                      </p>
                      <div className="flex items-center gap-3">
                        <Badge className={mode.color}>
                          {mode.difficulty}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {mode.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                기대 효과
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                반응 속도 테스트가 가져다주는 실질적인 혜택들
              </p>
            </div>
          </SlideUp>

          <StaggeredAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <StaggeredItem key={index}>
                <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.gradient} text-white mb-4`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </StaggeredAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                지금 바로 시작하세요
              </h3>
              <p className="text-orange-100 mb-6 text-lg">
                게임처럼 재미있는 테스트로 테니스 반응 속도를 향상시키세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/utility/reaction-test/test">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-3">
                    <Zap className="w-5 h-5 mr-2" />
                    반응 속도 테스트하기
                  </Button>
                </Link>
                <Link href="/utility">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                    다른 도구 둘러보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
