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
  Star
} from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

const playStyles = [
  {
    id: 1,
    name: "공격가형",
    emoji: "⚡",
    color: "bg-red-50 border-red-200 text-red-800",
    icon: Zap,
    description: "결단·파워·승부욕"
  },
  {
    id: 2,
    name: "전략가형", 
    emoji: "🧠",
    color: "bg-indigo-50 border-indigo-200 text-indigo-800",
    icon: Brain,
    description: "분석·패턴·냉정"
  },
  {
    id: 3,
    name: "수비형",
    emoji: "🛡️", 
    color: "bg-green-50 border-green-200 text-green-800",
    icon: Shield,
    description: "끈기·지구력·집중"
  },
  {
    id: 4,
    name: "올라운더형",
    emoji: "🌀",
    color: "bg-yellow-50 border-yellow-200 text-yellow-800", 
    icon: RotateCcw,
    description: "균형·유연·적응력"
  },
  {
    id: 5,
    name: "본능형",
    emoji: "🔮",
    color: "bg-purple-50 border-purple-200 text-purple-800",
    icon: Sparkles,
    description: "감각·즉흥·예측불가"
  },
  {
    id: 6,
    name: "파워 베이스라인형",
    emoji: "💥",
    color: "bg-orange-50 border-orange-200 text-orange-800",
    icon: Flame,
    description: "포핸드·속도·공격적 베이스라인"
  },
  {
    id: 7,
    name: "네트러시형",
    emoji: "🕊️",
    color: "bg-cyan-50 border-cyan-200 text-cyan-800",
    icon: Target,
    description: "전진·발리·결정력"
  }
];

const features = [
  {
    icon: Users,
    title: "7가지 플레이 유형",
    description: "공격가형부터 네트러시형까지, 당신의 테니스 DNA를 발견하세요"
  },
  {
    icon: Brain,
    title: "14문항 심층 분석",
    description: "경기 태도, 판단, 심리, 리스크 대응을 종합적으로 분석합니다"
  },
  {
    icon: Trophy,
    title: "프로 선수 비교",
    description: "당신과 닮은 프로 선수와 플레이 스타일을 비교해보세요"
  },
  {
    icon: Star,
    title: "맞춤형 추천",
    description: "장비, 훈련 루틴, 전술까지 개인별 맞춤 가이드를 제공합니다"
  }
];

export default function PlayStyleTestIntro() {
  const [hoveredStyle, setHoveredStyle] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              🎾 테니스 성격 테스트
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              당신의 테니스 플레이 스타일은?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              누군가는 폭풍 공격형, 누군가는 분석형 두뇌파 🎾<br />
              당신의 플레이 DNA는 어떤 유형일까요?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/play-style-test/test">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  테스트 시작하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                샘플 결과 보기
              </Button>
            </div>
          </div>
        </FadeIn>

        {/* Play Styles Grid */}
        <StaggeredAnimation>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {playStyles.map((style, index) => (
               <StaggeredItem key={style.id}>
                <Card 
                  className={`transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${style.color}`}
                  onMouseEnter={() => setHoveredStyle(style.id)}
                  onMouseLeave={() => setHoveredStyle(null)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{style.emoji}</div>
                    <h3 className="text-lg font-bold mb-2">{style.name}</h3>
                    <p className="text-sm opacity-80">{style.description}</p>
                    {hoveredStyle === style.id && (
                      <div className="mt-4 text-xs opacity-60">
                        클릭하여 자세히 보기
                      </div>
                    )}
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </div>
        </StaggeredAnimation>

        {/* Features Section */}
        <SlideUp>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              왜 테니스 플레이 스타일 테스트인가요?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </SlideUp>

        {/* How It Works */}
        <FadeIn>
          <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              테스트 진행 방법
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">질문 답변</h3>
                <p className="text-gray-600">14개의 상황별 질문에 솔직하게 답변하세요</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">분석 처리</h3>
                <p className="text-gray-600">AI가 당신의 답변을 분석하여 플레이 스타일을 결정합니다</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">결과 확인</h3>
                <p className="text-gray-600">상세한 분석 결과와 맞춤형 추천을 받아보세요</p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">
                지금 바로 테니스 플레이 스타일을 발견하세요!
              </h2>
              <p className="text-xl mb-8 opacity-90">
                5분이면 당신의 테니스 DNA를 알 수 있습니다
              </p>
              <Link href="/utility/play-style-test/test">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  무료 테스트 시작하기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}