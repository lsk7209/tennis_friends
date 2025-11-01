'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Target, TrendingUp, CheckCircle, ArrowRight, Sparkles, RotateCcw, Zap, Heart, Dumbbell } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function FlexibilityTestIntro() {
  const features = [
    {
      icon: Activity,
      title: '관절 가동범위 측정',
      description: '어깨, 팔꿈치, 손목, 허리, 고관절 등 테니스에 필요한 모든 관절의 유연성을 측정합니다.',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Target,
      title: '맞춤형 개선 운동',
      description: '측정 결과에 따른 개인별 맞춤 스트레칭과 유연성 향상 운동을 추천합니다.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      title: '진척도 추적',
      description: '정기적인 테스트로 유연성 향상 정도를 그래프로 시각화하여 추적합니다.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Heart,
      title: '부상 리스크 평가',
      description: '유연성 부족으로 인한 부상 위험도를 평가하고 예방 방법을 제시합니다.',
      gradient: 'from-rose-500 to-pink-500'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '부상 예방',
      description: '유연성 부족으로 인한 테니스 엘보우, 어깨 통증 등 부상을 예방합니다.',
      gradient: 'from-blue-400 to-cyan-400'
    },
    {
      icon: Zap,
      title: '퍼포먼스 향상',
      description: '향상된 유연성으로 더 넓은 스윙 궤적과 강력한 타격이 가능합니다.',
      gradient: 'from-green-400 to-emerald-400'
    },
    {
      icon: Dumbbell,
      title: '균형 잡힌 몸',
      description: '좌우 대칭성과 전반적인 몸의 균형을 유지하여 안정적인 플레이를 돕습니다.',
      gradient: 'from-purple-400 to-indigo-400'
    },
    {
      icon: Sparkles,
      title: '장기적 발전',
      description: '꾸준한 유연성 관리를 통해 테니스 실력의 장기적인 발전을 이룹니다.',
      gradient: 'from-orange-400 to-red-400'
    }
  ];

  const testItems = [
    {
      joint: '어깨 회전',
      description: '팔을 앞으로 뻗은 상태에서 뒤로 얼마나 회전할 수 있는지 측정',
      importance: '서브와 포핸드 타격에 필수적'
    },
    {
      joint: '팔꿈치 굴곡',
      description: '팔꿈치를 구부렸을 때의 가동범위 측정',
      importance: '백핸드 타격 시 중요'
    },
    {
      joint: '손목 가동범위',
      description: '손목의 상하좌우 움직임 범위 측정',
      importance: '라켓 컨트롤에 직접적 영향'
    },
    {
      joint: '허리 회전',
      description: '상체를 고정한 상태에서 허리의 회전 범위 측정',
      importance: '코어 파워 전달에 핵심적'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950">
      {/* Hero Section */}
      <FadeIn>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              유연성 테스트
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              테니스
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent"> 유연성</span>
              측정
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              테니스에 필요한 관절 가동범위를 과학적으로 측정하고 개인 맞춤형 개선 프로그램을 제공합니다.
              부상 예방과 퍼포먼스 향상을 동시에 이루세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/flexibility-test/test">
                <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white px-8 py-3 text-lg">
                  <Activity className="w-5 h-5 mr-2" />
                  유연성 테스트 시작
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="border-teal-500 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-950 px-8 py-3 text-lg">
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
                체계적인 유연성 평가와 개선을 위한 다양한 기능들
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

      {/* Test Items Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                측정 항목
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                테니스에 필요한 주요 관절의 유연성을 종합적으로 평가합니다
              </p>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testItems.map((item, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        {item.joint}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {item.description}
                      </p>
                      <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                        {item.importance}
                      </Badge>
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
                유연성 테스트가 가져다주는 실질적인 혜택들
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
          <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                지금 바로 시작하세요
              </h3>
              <p className="text-teal-100 mb-6 text-lg">
                유연성 테스트로 건강한 테니스 라이프를 시작하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/utility/flexibility-test/test">
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-3">
                    <Activity className="w-5 h-5 mr-2" />
                    유연성 테스트하기
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
