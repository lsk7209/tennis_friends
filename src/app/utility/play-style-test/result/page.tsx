'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Share2, 
  Trophy, 
  Target, 
  Zap,
  Brain,
  Shield,
  RotateCcw,
  Sparkles,
  Flame,
  Target as TargetIcon,
  Star,
  CheckCircle,
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { playStyleResults, getPlayStyleStats } from '@/lib/playStyleTest';
import { trackTestCompletion } from '@/components/Tracking';

const styleIcons = {
  1: Zap,
  2: Brain,
  3: Shield,
  4: RotateCcw,
  5: Sparkles,
  6: Flame,
  7: TargetIcon
};

const styleGradients = {
  1: 'from-red-500 via-pink-500 to-rose-500',
  2: 'from-indigo-500 via-purple-500 to-blue-500',
  3: 'from-green-500 via-emerald-500 to-teal-500',
  4: 'from-yellow-400 via-amber-400 to-orange-400',
  5: 'from-purple-500 via-pink-500 to-fuchsia-500',
  6: 'from-orange-500 via-red-500 to-pink-500',
  7: 'from-cyan-500 via-blue-500 to-indigo-500'
};

const bgGradients = {
  1: 'from-red-50 via-pink-50 to-rose-50',
  2: 'from-indigo-50 via-purple-50 to-blue-50',
  3: 'from-green-50 via-emerald-50 to-teal-50',
  4: 'from-yellow-50 via-amber-50 to-orange-50',
  5: 'from-purple-50 via-pink-50 to-fuchsia-50',
  6: 'from-orange-50 via-red-50 to-pink-50',
  7: 'from-cyan-50 via-blue-50 to-indigo-50'
};

function PlayStyleResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any>(null);
  const [stats, setStats] = useState<any[]>([]);
  // 클라이언트 사이드에서만 차트 렌더링 (SSR에서 컨테이너 크기 계산 문제 방지)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const styleId = parseInt(searchParams.get('style') || '1');
    const playStyleResult = playStyleResults.find(r => r.id === styleId) || playStyleResults[0];
    setResult(playStyleResult);
    setStats(getPlayStyleStats(playStyleResult));

    // 테스트 완료 추적
    if (styleId) {
      trackTestCompletion('play-style-test', {
        styleId: styleId,
        styleName: playStyleResult.name,
        description: playStyleResult.description
      });
    }
  }, [searchParams]);

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 분석 중입니다...</p>
        </div>
      </div>
    );
  }

  const StyleIcon = styleIcons[result.id as keyof typeof styleIcons];
  const gradient = styleGradients[result.id as keyof typeof styleGradients];
  const bgGradient = bgGradients[result.id as keyof typeof bgGradients];

  const chartData = stats.map(stat => ({
    subject: stat.name,
    A: stat.value,
    fullMark: stat.max
  }));

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `나의 테니스 플레이 스타일: ${result.emoji} ${result.name}`,
          text: `테니스프렌즈에서 테니스 플레이 스타일 테스트를 완료했습니다!`,
          url: window.location.href
        });
      } catch (error) {
        // 공유 취소됨 (프로덕션에서는 로그 제거)
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${bgGradient}`}>
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="flex items-center bg-white/80 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
            <Button 
              variant="outline" 
              onClick={handleShare}
              className="flex items-center bg-white/80 backdrop-blur-sm border-2 hover:bg-white transition-all duration-300"
            >
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>
        </div>
      </section>

      {/* Result Hero */}
      <section className="relative overflow-hidden py-12 md:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <Card className={`bg-gradient-to-br ${gradient} border-0 shadow-2xl overflow-hidden mb-12`}>
            <CardContent className="p-12 md:p-16 text-center text-white relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="text-9xl mb-6 animate-bounce">{result.emoji}</div>
                <div className={`w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  <StyleIcon className="h-12 w-12 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                  당신의 플레이 스타일은<br />
                  <span className="text-white drop-shadow-lg">{result.name}</span>입니다!
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto">
                  {result.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {result.keywords.map((keyword: string, index: number) => (
                    <Badge key={index} className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-4 py-2 text-sm font-semibold shadow-lg">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats & Analysis */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Stats Chart */}
            <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    플레이 스타일 분석
                  </h3>
                </div>
                <div className="h-80">
                  {isMounted ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={chartData}>
                      <PolarGrid stroke="#e5e7eb" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#374151', fontSize: 12 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 5]} tick={{ fill: '#9ca3af', fontSize: 10 }} />
                      <Radar
                        name="당신의 스타일"
                        dataKey="A"
                        stroke={`url(#gradient-${result.id})`}
                        fill={`url(#gradient-${result.id})`}
                        fillOpacity={0.4}
                        strokeWidth={2}
                      />
                      <defs>
                        <linearGradient id={`gradient-${result.id}`} x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </RadarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400">Loading chart...</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Strengths & Weaknesses */}
            <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    강점 & 약점
                  </h3>
                </div>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      강점
                    </h4>
                    <ul className="space-y-3">
                      {result.strengths.map((strength: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 group">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-base leading-relaxed flex-1">{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-orange-700 mb-4 flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      개선점
                    </h4>
                    <ul className="space-y-3">
                      {result.weaknesses.map((weakness: string, index: number) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700 group">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <span className="text-base leading-relaxed flex-1">{weakness}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Pro */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            <CardContent className="p-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  당신과 닮은 프로 선수
                </h3>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className={`w-32 h-32 bg-gradient-to-br ${gradient} rounded-3xl flex items-center justify-center shadow-xl text-6xl`}>
                  🏆
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-3xl font-extrabold text-gray-900 mb-3">
                    {result.similarPro.name}
                  </h4>
                  <p className="text-xl text-gray-600 mb-2">
                    {result.similarPro.country} • {result.similarPro.style}
                  </p>
                  <p className="text-gray-500 text-base">
                    당신과 같은 플레이 스타일을 가진 프로 선수입니다
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recommended Shots */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    추천 샷
                  </h3>
                </div>
                <ul className="space-y-4">
                  {result.recommendedShots.map((shot: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 group/item">
                      <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full group-hover/item:scale-150 transition-transform duration-300`}></div>
                      <span className="text-base leading-relaxed flex-1">{shot}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Recommended Training */}
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <Trophy className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    추천 훈련
                  </h3>
                </div>
                <ul className="space-y-4">
                  {result.recommendedTraining.map((training: string, index: number) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700 group/item">
                      <div className={`w-2 h-2 bg-gradient-to-r ${gradient} rounded-full group-hover/item:scale-150 transition-transform duration-300`}></div>
                      <span className="text-base leading-relaxed flex-1">{training}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Recommendations */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden relative group">
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            <CardContent className="p-12 relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  추천 장비
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">라켓</h4>
                  <ul className="space-y-2">
                    {result.equipment.racket.map((racket: string, index: number) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700 text-sm">
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${gradient} rounded-full`}></div>
                        {racket}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">스트링</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{result.equipment.string}</p>
                </div>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">신발</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{result.equipment.shoes}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quote */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className={`bg-gradient-to-br ${bgGradient} border-0 shadow-xl`}>
            <CardContent className="p-12 text-center">
              <div className="w-16 h-16 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="h-8 w-8 text-gray-700" />
              </div>
              <blockquote className="text-2xl md:text-3xl italic text-gray-900 mb-6 font-medium leading-relaxed max-w-3xl mx-auto">
                "{result.quote}"
              </blockquote>
              <p className="text-gray-600 text-lg">— {result.name}의 모토</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/play-style-test/test">
                <Button variant="outline" size="lg" className="bg-white border-2 border-gray-300 hover:border-purple-500 px-8 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 테스트하기
                </Button>
              </Link>
              <Link href="/utility">
                <Button size="lg" className={`bg-gradient-to-r ${gradient} hover:opacity-90 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`}>
                  다른 테스트 보기
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function PlayStyleResult() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 로딩 중입니다...</p>
        </div>
      </div>
    }>
      <PlayStyleResultContent />
    </Suspense>
  );
}
