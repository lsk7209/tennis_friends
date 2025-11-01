'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Trophy, Target, TrendingUp, Calendar, Users, Clock, MapPin, BarChart3, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

// 메타데이터
export const metadata: Metadata = {
  title: '경기 기록 시스템 - 테니스 경기 기록 및 분석 | TennisFriends',
  description: '테니스 경기 결과를 체계적으로 기록하고 분석하세요. 승패 기록, 세트별 점수, 주요 플레이를 관리하여 실력 향상을 추적합니다.',
  keywords: ['경기 기록', '테니스 기록', '경기 분석', '승패 기록', '테니스 통계'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/match-recorder',
  },
  openGraph: {
    title: '경기 기록 시스템 - 테니스 경기 기록 및 분석 | TennisFriends',
    description: '테니스 경기 결과를 체계적으로 기록하고 분석하세요. 승패 기록, 세트별 점수, 주요 플레이를 관리하여 실력 향상을 추적합니다.',
    url: 'https://tennisfriends.co.kr/utility/match-recorder',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '경기 기록 시스템 - 테니스 경기 기록 및 분석 | TennisFriends',
    description: '테니스 경기 결과를 체계적으로 기록하고 분석하세요.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MatchRecorderIntro() {
  const features = [
    {
      icon: Plus,
      title: '경기 기록',
      description: '상대 정보, 날짜, 코트 타입, 세트별 점수를 체계적으로 기록합니다.',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Target,
      title: '성과 추적',
      description: '승률, 평균 득점, 주요 플레이 패턴을 분석하여 실력 향상을 추적합니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: '통계 분석',
      description: '상대별 성적, 코트별 강점, 시간대별 퍼포먼스를 시각적으로 분석합니다.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: TrendingUp,
      title: '개선 포인트',
      description: '경기 후 개선할 점을 기록하고 추적하여 체계적인 발전을 이룹니다.',
      gradient: 'from-purple-500 to-indigo-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '체계적인 관리',
      description: '모든 경기를 한 곳에서 관리하고 언제든지 조회할 수 있습니다.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Users,
      title: '상대 분석',
      description: '자주 만나는 상대의 플레이 패턴과 약점을 파악하세요.',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Calendar,
      title: '경기 히스토리',
      description: '과거 경기 결과를 바탕으로 현재 실력을 객관적으로 평가합니다.',
      gradient: 'from-purple-400 to-pink-400'
    },
    {
      icon: Sparkles,
      title: '성장 추적',
      description: '장기적인 실력 향상을 그래프로 시각화하여 동기부여를 얻으세요.',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const sampleMatchData = [
    {
      date: '2024-11-01',
      opponent: '김철수',
      result: '6-3, 6-4 승',
      court: '하드',
      notes: '포핸드 컨트롤이 향상됨'
    },
    {
      date: '2024-10-28',
      opponent: '박영희',
      result: '4-6, 6-3, 6-2 승',
      court: '클레이',
      notes: '체력 관리가 중요함'
    },
    {
      date: '2024-10-25',
      opponent: '이민수',
      result: '3-6, 6-7 패',
      court: '하드',
      notes: '서브 리턴 개선 필요'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950">
      {/* Hero Section */}
      <FadeIn>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-white rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              경기 기록 시스템
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              테니스 경기
              <span className="bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent"> 기록 & 분석</span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              모든 경기를 체계적으로 기록하고 분석하세요. 승패 패턴, 상대별 성적, 개선 포인트를 추적하여
              과학적인 실력 향상을 이루세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/match-recorder/test">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-8 py-3 text-lg">
                  <Plus className="w-5 h-5 mr-2" />
                  경기 기록하기
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="border-amber-500 text-amber-700 dark:text-amber-300 hover:bg-amber-50 dark:hover:bg-amber-950 px-8 py-3 text-lg">
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
                체계적인 경기 관리를 위한 다양한 기능들
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                기대 효과
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                경기 기록이 가져다주는 실질적인 혜택들
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

      {/* Sample Data Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                기록 예시
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                이렇게 체계적으로 경기를 기록하고 분석할 수 있습니다
              </p>
            </div>
          </SlideUp>

          <div className="space-y-4">
            {sampleMatchData.map((match, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {match.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        vs {match.opponent}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {match.court}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge className={match.result.includes('승') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'}>
                        {match.result}
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>메모:</strong> {match.notes}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-amber-500 to-yellow-500 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                지금 바로 시작하세요
              </h3>
              <p className="text-amber-100 mb-6 text-lg">
                체계적인 경기 기록으로 테니스 실력을 한 단계 업그레이드하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/utility/match-recorder/test">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-50 px-8 py-3">
                    <Plus className="w-5 h-5 mr-2" />
                    첫 경기 기록하기
                  </Button>
                </Link>
                <Link href="/utility">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3">
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
