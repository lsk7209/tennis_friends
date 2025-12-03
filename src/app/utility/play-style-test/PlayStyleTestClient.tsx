'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Brain, 
  Shield, 
  RotateCcw, 
  Sparkles, 
  Flame, 
  Target,
  ArrowRight,
  Users,
  Trophy,
  Star,
  CheckCircle,
  BarChart3
} from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

const playStyles = [
  {
    id: 1,
    name: "공격가형",
    emoji: "⚡",
    gradient: 'from-red-500 via-pink-500 to-rose-500',
    bgGradient: 'from-red-50 via-pink-50 to-rose-50',
    icon: Zap,
    description: "결단·파워·승부욕"
  },
  {
    id: 2,
    name: "전략가형", 
    emoji: "🧠",
    gradient: 'from-indigo-500 via-purple-500 to-blue-500',
    bgGradient: 'from-indigo-50 via-purple-50 to-blue-50',
    icon: Brain,
    description: "분석·패턴·냉정"
  },
  {
    id: 3,
    name: "수비형",
    emoji: "🛡️", 
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgGradient: 'from-green-50 via-emerald-50 to-teal-50',
    icon: Shield,
    description: "끈기·지구력·집중"
  },
  {
    id: 4,
    name: "올라운더형",
    emoji: "🌀",
    gradient: 'from-yellow-400 via-amber-400 to-orange-400',
    bgGradient: 'from-yellow-50 via-amber-50 to-orange-50',
    icon: RotateCcw,
    description: "균형·유연·적응력"
  },
  {
    id: 5,
    name: "본능형",
    emoji: "🔮",
    gradient: 'from-purple-500 via-pink-500 to-fuchsia-500',
    bgGradient: 'from-purple-50 via-pink-50 to-fuchsia-50',
    icon: Sparkles,
    description: "감각·즉흥·예측불가"
  },
  {
    id: 6,
    name: "파워 베이스라인형",
    emoji: "💥",
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    bgGradient: 'from-orange-50 via-red-50 to-pink-50',
    icon: Flame,
    description: "포핸드·속도·공격적 베이스라인"
  },
  {
    id: 7,
    name: "네트러시형",
    emoji: "🕊️",
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    bgGradient: 'from-cyan-50 via-blue-50 to-indigo-50',
    icon: Target,
    description: "전진·발리·결정력"
  }
];

const features = [
  {
    icon: Users,
    title: "7가지 플레이 유형",
    description: "공격가형부터 네트러시형까지, 당신의 테니스 DNA를 발견하세요",
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Brain,
    title: "14문항 심층 분석",
    description: "경기 태도, 판단, 심리, 리스크 대응을 종합적으로 분석합니다",
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Trophy,
    title: "프로 선수 비교",
    description: "당신과 닮은 프로 선수와 플레이 스타일을 비교해보세요",
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Star,
    title: "맞춤형 추천",
    description: "장비, 훈련 루틴, 전술까지 개인별 맞춤 가이드를 제공합니다",
    gradient: 'from-green-500 to-emerald-500'
  }
];

export default function PlayStyleTestIntro() {
  const [hoveredStyle, setHoveredStyle] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-indigo-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <Badge className="bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                테니스 성격 테스트
              </Badge>
              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
                당신의 테니스{' '}
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
                  플레이 스타일
                </span>
                은?
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
                누군가는 폭풍 공격형, 누군가는 분석형 두뇌파 🎾<br />
                <span className="text-gray-600">당신의 플레이 DNA는 어떤 유형일까요?</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/utility/play-style-test/test">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                    테스트 시작하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-bold rounded-xl bg-white/80 backdrop-blur-sm border-2 border-gray-300 hover:border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  샘플 결과 보기
                </Button>
              </div>
            </div>
          </FadeIn>

          {/* Play Styles Grid */}
          <StaggeredAnimation>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
              {playStyles.map((style, index) => {
                const IconComponent = style.icon;
                return (
                  <StaggeredItem key={style.id}>
                    <Card 
                      className={`h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden relative group ${
                        hoveredStyle === style.id ? 'scale-105' : ''
                      }`}
                      onMouseEnter={() => setHoveredStyle(style.id)}
                      onMouseLeave={() => setHoveredStyle(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${style.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <CardContent className="p-6 text-center relative z-10">
                        <div className={`w-20 h-20 bg-gradient-to-br ${style.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        <div className="text-4xl mb-3">{style.emoji}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                          {style.name}
                        </h3>
                        <p className="text-sm text-gray-600 font-medium">{style.description}</p>
                        {hoveredStyle === style.id && (
                          <div className="mt-4 text-xs text-gray-500 font-semibold animate-pulse">
                            클릭하여 자세히 보기 →
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </StaggeredItem>
                );
              })}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                왜 테니스 플레이 스타일 테스트인가요?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 전문가 인사이트로 당신의 고유한 플레이 스타일을 발견하세요
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card key={index} className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </SlideUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
              <CardContent className="p-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-16">
                  테스트 진행 방법
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold text-white shadow-xl">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">질문 답변</h3>
                    <p className="text-gray-600 text-base leading-relaxed">14개의 상황별 질문에 솔직하게 답변하세요</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold text-white shadow-xl">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">분석 처리</h3>
                    <p className="text-gray-600 text-base leading-relaxed">AI가 당신의 답변을 분석하여 플레이 스타일을 결정합니다</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-3xl font-extrabold text-white shadow-xl">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">결과 확인</h3>
                    <p className="text-gray-600 text-base leading-relaxed">상세한 분석 결과와 맞춤형 추천을 받아보세요</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Sparkles className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  지금 바로 테니스 플레이 스타일을 발견하세요!
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  5분이면 당신의 테니스 DNA를 알 수 있습니다<br />
                  <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                </p>
                <Link href="/utility/play-style-test/test">
                  <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    무료 테스트 시작하기
                    <ArrowRight className="ml-2 h-5 w-5" />
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
