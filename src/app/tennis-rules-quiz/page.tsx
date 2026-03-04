'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, BookOpen, Target, Trophy, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';
import QuizSchema from '@/components/seo/QuizSchema';
import FAQSection from '@/components/seo/FAQSection';
import { SITE_URL } from '@/lib/site';

export default function TennisRulesQuizIntro() {
  const tips = [
    "서브 토스를 잡고 다시 던지는 것은 반칙이 아닙니다. 타격 시도가 없다면 재토스 가능합니다.",
    "타이브레이크에서는 서버-리시버 순서가 중요합니다. 올바른 콜 관행을 따라야 합니다.",
    "풋폴트는 베이스라인뿐만 아니라 연장선을 침범해도 발생합니다.",
    "복식에서 리시버가 치지 못하고 파트너가 맞히면 서버 포인트입니다.",
    "네트포스트를 맞고 상대 코트로 들어간 공은 인입니다. 구조물은 인플레이입니다.",
    "리시버가 준비되지 않았음을 손들어 표시하면 렛으로 리플레이 가능합니다.",
    "코트 외벽(펜스 등)을 맞고 다시 코트로 들어온 볼은 아웃입니다.",
    "더블스에서 리시빙 포지션 변경은 게임 교대 시에만 가능합니다.",
    "스핀 서브 리턴 시에는 짧은 백스윙과 안정된 면으로 블록하는 것이 안전합니다.",
    "고의적 방해는 기준에 따라 포인트 박탈이 가능합니다."
  ];

  const today = new Date().getDate();
  const tipIndex = today % tips.length;
  const dailyTip = tips[tipIndex];

  const features = [
    {
      icon: Play,
      title: '즉시 해설',
      description: '각 문항마다 정답과 상세한 해설을 즉시 확인할 수 있습니다.',
      color: 'bg-emerald-100 text-emerald-800'
    },
    {
      icon: Target,
      title: '약점 분석',
      description: '카테고리별 오답을 분석하여 개인별 약점 영역을 파악합니다.',
      color: 'bg-sky-100 text-sky-800'
    },
    {
      icon: Trophy,
      title: '결과 카드 공유',
      description: '점수와 등급을 담은 결과 카드를 이미지나 PDF로 저장할 수 있습니다.',
      color: 'bg-amber-100 text-amber-800'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: '빠른 테스트',
      description: '12문항으로 단 5분이면 완료할 수 있습니다.',
      color: 'text-emerald-600'
    },
    {
      icon: Users,
      title: '실전 감각',
      description: '실제 경기에서 자주 발생하는 상황들을 중심으로 출제됩니다.',
      color: 'text-sky-600'
    },
    {
      icon: CheckCircle,
      title: '전문가 검증',
      description: '테니스 규칙 전문가들이 검증한 신뢰할 수 있는 문제들입니다.',
      color: 'text-amber-600'
    }
  ];

  const gradeLevels = [
    {
      grade: 'Rules Pro',
      range: '10-12점',
      description: '규칙 전문가',
      color: 'bg-purple-100 text-purple-800',
      detail: '테니스 규칙을 완벽하게 이해하고 있습니다!'
    },
    {
      grade: 'Match Ready',
      range: '7-9점',
      description: '경기 준비 완료',
      color: 'bg-green-100 text-green-800',
      detail: '실전 경기에 충분히 준비된 규칙 지식을 갖추고 있습니다.'
    },
    {
      grade: 'Learning',
      range: '4-6점',
      description: '학습 중',
      color: 'bg-yellow-100 text-yellow-800',
      detail: '기본 규칙은 알고 있지만 더 학습이 필요합니다.'
    },
    {
      grade: 'Beginner',
      range: '0-3점',
      description: '초보자',
      color: 'bg-red-100 text-red-800',
      detail: '기본 규칙부터 차근차근 학습해보세요.'
    }
  ];

  const siteUrl = SITE_URL;
  const quizUrl = `${siteUrl}/tennis-rules-quiz`;

  // FAQ items for AI snippet optimization
  const faqItems = [
    {
      question: '테니스 규칙 퀴즈는 무엇인가요?',
      answer: '테니스 규칙 퀴즈는 12문항의 랜덤 문제를 통해 테니스 규칙에 대한 이해도를 측정하는 도구입니다. 각 문항마다 정답과 상세한 해설을 즉시 확인할 수 있으며, 카테고리별 약점 분석도 제공합니다.',
    },
    {
      question: '퀴즈는 얼마나 걸리나요?',
      answer: '약 5분 정도 소요됩니다. 12문항의 문제를 풀고 결과를 확인하는 시간을 포함합니다.',
    },
    {
      question: '문제는 어떻게 출제되나요?',
      answer: '실제 경기에서 자주 발생하는 상황들을 중심으로 출제됩니다. 서브, 풋폴트, 점수 체계, 복식 규칙, 타이브레이크 등 다양한 카테고리에서 문제가 출제됩니다.',
    },
    {
      question: '등급은 어떻게 결정되나요?',
      answer: '12문항 중 맞힌 개수에 따라 결정됩니다. 10-12점은 Rules Pro, 7-9점은 Match Ready, 4-6점은 Learning, 0-3점은 Beginner 등급입니다.',
    },
    {
      question: '퀴즈는 무료인가요?',
      answer: '네, 100% 무료로 제공됩니다. 언제든지 반복해서 사용하여 규칙 실력을 향상시킬 수 있습니다.',
    },
  ];

  return (
    <>
      {/* Quiz Schema for SEO/AEO */}
      <QuizSchema
        name="테니스 규칙 퀴즈"
        description="12문항 랜덤 퀴즈로 실전 규칙 감각을 점검하고 약점을 분석해보세요. 각 문항마다 정답과 상세한 해설을 즉시 확인할 수 있습니다."
        url={quizUrl}
        numberOfQuestions={12}
        timeRequired="PT5M"
        educationalLevel="Beginner to Advanced"
        about="테니스 규칙 학습"
      />
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="section-padding bg-gradient-to-br from-emerald-50 via-white to-sky-50"
        aria-label="테니스 규칙 퀴즈 소개"
      >
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 mb-6 text-sm font-semibold">
                🎾 테니스 규칙 퀴즈
              </Badge>
            </FadeIn>
            
            <SlideUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                테니스 규칙,{' '}
                <span className="text-emerald-600">얼마나 알까요?</span>
              </h1>
            </SlideUp>
            
            <SlideUp delay={0.6}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                12문항 랜덤 퀴즈로 실전 규칙 감각을 점검하세요.<br />
                즉시 해설과 약점 분석으로 더 나은 테니스 플레이어가 되어보세요.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.8}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link href="/tennis-rules-quiz/quiz">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-xl focus-ring">
                    <Play className="h-5 w-5 mr-2" />
                    지금 시작하기
                  </Button>
                </Link>
                <Link href="/utility/injury-risk">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-emerald-500 px-8 py-4 text-lg focus-ring">
                    <Target className="h-5 w-5 mr-2" />
                    부상 위험도 체크
                  </Button>
                </Link>
                <Link href="/utility/string-tension">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-emerald-500 px-8 py-4 text-lg focus-ring">
                    <BookOpen className="h-5 w-5 mr-2" />
                    스트링 텐션 계산기
                  </Button>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 border-gray-300 hover:border-emerald-500 px-8 py-4 text-lg focus-ring">
                    <Trophy className="h-5 w-5 mr-2" />
                    NTRP 테스트
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={1.0}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>5,000+ 퀴즈 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>전문가 검증된 문제</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span>100% 무료 서비스</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="section-padding bg-white"
        aria-labelledby="features-heading"
      >
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                왜 TennisFriends 규칙 퀴즈인가?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 전문가의 경험을 바탕으로 한 정확한 규칙 학습
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <StaggeredItem key={index}>
                    <Card className="h-full bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6 text-center">
                        <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                          <IconComponent className="h-8 w-8 text-emerald-600" />
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
      <section 
        className="section-padding bg-gray-50"
        aria-labelledby="benefits-heading"
      >
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 id="benefits-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                퀴즈의 장점
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                간단하고 효과적인 학습으로 더 나은 테니스 경험을 만들어보세요
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

      {/* Grade Levels Section */}
      <section 
        className="section-padding bg-white"
        aria-labelledby="grade-levels-heading"
      >
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 id="grade-levels-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                등급 시스템
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                12문항 중 맞힌 개수에 따라 당신의 규칙 실력을 평가합니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {gradeLevels.map((level, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{level.range}</div>
                      <Badge className={`px-3 py-1 text-sm font-semibold mb-3 ${level.color}`}>
                        {level.description}
                      </Badge>
                      <p className="text-gray-600 text-sm leading-relaxed">{level.detail}</p>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Daily Tip Section */}
      <section 
        className="section-padding bg-gray-50"
        aria-labelledby="daily-tip-heading"
      >
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-gradient-to-r from-emerald-50 to-sky-50 border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="max-w-3xl mx-auto">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h2 id="daily-tip-heading" className="text-2xl font-bold text-gray-900 mb-4">
                    오늘의 TIP
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {dailyTip}
                  </p>
                  <div className="text-sm text-gray-500">
                    매일 새로운 테니스 규칙 팁을 확인하세요
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section - AI Snippet Optimization */}
      <section 
        className="section-padding bg-white"
        aria-labelledby="faq-heading"
      >
        <div className="container mx-auto max-w-4xl container-padding">
          <FAQSection 
            items={faqItems}
            id="faq"
            title="자주 묻는 질문"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="section-padding bg-gradient-to-r from-emerald-50 via-white to-sky-50"
        aria-label="퀴즈 시작하기"
      >
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12">
                <div className="max-w-3xl mx-auto">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Play className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    지금 바로 시작해보세요!
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    단 5분이면 당신의 테니스 규칙 실력을 확인할 수 있습니다.<br />
                    과학적 분석과 전문가의 조언이 기다립니다.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/tennis-rules-quiz/quiz">
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold focus-ring">
                        <Play className="h-5 w-5 mr-2" />
                        규칙 퀴즈 시작하기
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/utility/ntrp-test">
                      <Button variant="outline" className="bg-white border-gray-300 hover:border-emerald-500 px-8 py-4 text-lg font-semibold focus-ring">
                        <Trophy className="h-5 w-5 mr-2" />
                        먼저 실력 테스트
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </main>
    </>
  );
}
