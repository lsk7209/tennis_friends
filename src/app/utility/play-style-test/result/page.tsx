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
  AlertCircle
} from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { playStyleResults, getPlayStyleStats } from '@/lib/playStyleTest';

const styleIcons = {
  1: Zap,
  2: Brain,
  3: Shield,
  4: RotateCcw,
  5: Sparkles,
  6: Flame,
  7: TargetIcon
};

const colorClasses = {
  1: 'bg-red-50 border-red-200 text-red-800',
  2: 'bg-indigo-50 border-indigo-200 text-indigo-800',
  3: 'bg-green-50 border-green-200 text-green-800',
  4: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  5: 'bg-purple-50 border-purple-200 text-purple-800',
  6: 'bg-orange-50 border-orange-200 text-orange-800',
  7: 'bg-cyan-50 border-cyan-200 text-cyan-800'
};

function PlayStyleResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [result, setResult] = useState<any>(null);
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    const styleId = parseInt(searchParams.get('style') || '1');
    const playStyleResult = playStyleResults.find(r => r.id === styleId) || playStyleResults[0];
    setResult(playStyleResult);
    setStats(getPlayStyleStats(playStyleResult));
  }, [searchParams]);

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">결과를 분석 중입니다...</p>
        </div>
      </div>
    );
  }

  const StyleIcon = styleIcons[result.id as keyof typeof styleIcons];
  const colorClass = colorClasses[result.id as keyof typeof colorClasses];

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
        console.log('공유 취소됨');
      }
    } else {
      // 클립보드에 복사
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="outline" 
            onClick={() => router.back()}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            돌아가기
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>
        </div>

        {/* Result Hero */}
        <Card className={`${colorClass} mb-8 shadow-lg`}>
          <CardContent className="p-8 text-center">
            <div className="text-8xl mb-4">{result.emoji}</div>
            <h1 className="text-4xl font-bold mb-4">
              당신의 플레이 스타일은 {result.name}입니다!
            </h1>
            <p className="text-xl mb-6 opacity-80">
              {result.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {result.keywords.map((keyword: string, index: number) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {keyword}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stats Chart */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                플레이 스타일 분석
              </h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={90} domain={[0, 5]} />
                    <Radar
                      name="당신의 스타일"
                      dataKey="A"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.3}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Strengths & Weaknesses */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-green-600" />
                강점 & 약점
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    강점
                  </h4>
                  <ul className="space-y-2">
                    {result.strengths.map((strength: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-orange-700 mb-3 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    개선점
                  </h4>
                  <ul className="space-y-2">
                    {result.weaknesses.map((weakness: string, index: number) => (
                      <li key={index} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Similar Pro */}
        <Card className="bg-white border-gray-200 shadow-lg mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Star className="h-5 w-5 mr-2 text-green-600" />
              당신과 닮은 프로 선수
            </h3>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏆</div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {result.similarPro.name}
                </h4>
                <p className="text-lg text-gray-600 mb-2">
                  {result.similarPro.country} • {result.similarPro.style}
                </p>
                <p className="text-gray-500">
                  당신과 같은 플레이 스타일을 가진 프로 선수입니다
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Recommended Shots */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-600" />
                추천 샷
              </h3>
              <ul className="space-y-3">
                {result.recommendedShots.map((shot: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {shot}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Recommended Training */}
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Trophy className="h-5 w-5 mr-2 text-green-600" />
                추천 훈련
              </h3>
              <ul className="space-y-3">
                {result.recommendedTraining.map((training: string, index: number) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {training}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Equipment Recommendations */}
        <Card className="bg-white border-gray-200 shadow-lg mt-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-5 w-5 mr-2 text-green-600" />
              추천 장비
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">라켓</h4>
                <ul className="space-y-2">
                  {result.equipment.racket.map((racket: string, index: number) => (
                    <li key={index} className="text-gray-700 text-sm">
                      • {racket}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">스트링</h4>
                <p className="text-gray-700 text-sm">{result.equipment.string}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">신발</h4>
                <p className="text-gray-700 text-sm">{result.equipment.shoes}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quote */}
        <Card className="bg-gray-50 border-gray-200 mt-8">
          <CardContent className="p-6 text-center">
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "{result.quote}"
            </blockquote>
            <p className="text-gray-500">— {result.name}의 모토</p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/utility/play-style-test/test">
              <Button variant="outline" size="lg">
                다시 테스트하기
              </Button>
            </Link>
            <Link href="/utility">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                다른 테스트 보기
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlayStyleResult() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PlayStyleResultContent />
    </Suspense>
  );
}