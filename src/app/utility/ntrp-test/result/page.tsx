'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Share2, 
  RotateCcw, 
  Star, 
  TrendingUp, 
  Target, 
  Users, 
  Award,
  Zap,
  Heart,
  MessageCircle,
  Instagram,
  Twitter,
  Facebook,
  Copy,
  CheckCircle,
  ArrowRight,
  Play,
  BookOpen,
  Calendar,
  Clock,
  Settings,
  Shield,
  BarChart3
} from 'lucide-react';
import { getNTRPLevel, charMap } from '@/lib/questions';

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const score = Number(searchParams.get('score') || 0);
  const q13 = decodeURIComponent(searchParams.get('q13') || '');
  
  const { level, desc } = getNTRPLevel(score);
  const character = charMap[q13] || '올라운더';
  const [copied, setCopied] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);

  // NTRP 레벨별 상세 정보
  const getLevelDetails = (level: string) => {
    const details: { [key: string]: any } = {
      '1.5': {
        color: 'from-blue-50 to-blue-100',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-800',
        bgColor: 'bg-blue-100',
        icon: '🌱',
        title: '테니스 입문자',
        description: '기본 스트로크를 배우는 단계',
        tips: ['기본 그립 익히기', '포핸드 스트로크 연습', '서브 기본 동작'],
        proPlayers: ['초보자 친화적 선수들'],
        nextLevel: '2.0',
        progress: 15
      },
      '2.0': {
        color: 'from-green-50 to-green-100',
        borderColor: 'border-green-200',
        textColor: 'text-green-800',
        bgColor: 'bg-green-100',
        icon: '🌿',
        title: '기본기 다지는 단계',
        description: '기본 스트로크를 구사할 수 있음',
        tips: ['백핸드 스트로크 연습', '서브 정확도 향상', '발리 기본 동작'],
        proPlayers: ['기본기 중시 선수들'],
        nextLevel: '2.5',
        progress: 30
      },
      '2.5': {
        color: 'from-yellow-50 to-yellow-100',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-800',
        bgColor: 'bg-yellow-100',
        icon: '🌻',
        title: '기본기 완성 단계',
        description: '기본 스트로크를 안정적으로 구사',
        tips: ['스핀 기술 익히기', '포지셔닝 연습', '경기 전략 기초'],
        proPlayers: ['기본기 탄탄한 선수들'],
        nextLevel: '3.0',
        progress: 45
      },
      '3.0': {
        color: 'from-orange-50 to-orange-100',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-800',
        bgColor: 'bg-orange-100',
        icon: '🔥',
        title: '중급자 입문',
        description: '안정적인 스트로크와 서브',
        tips: ['고급 스핀 기술', '네트 플레이', '멘탈 게임'],
        proPlayers: ['중급자 대표 선수들'],
        nextLevel: '3.5',
        progress: 60
      },
      '3.5': {
        color: 'from-red-50 to-red-100',
        borderColor: 'border-red-200',
        textColor: 'text-red-800',
        bgColor: 'bg-red-100',
        icon: '⚡',
        title: '중급자 완성',
        description: '고급 기술과 전술을 구사',
        tips: ['고급 전술', '멘탈 강화', '체력 관리'],
        proPlayers: ['고급 중급자 선수들'],
        nextLevel: '4.0',
        progress: 75
      },
      '4.0': {
        color: 'from-purple-50 to-purple-100',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-800',
        bgColor: 'bg-purple-100',
        icon: '👑',
        title: '상급자 입문',
        description: '고급 기술과 전술 마스터',
        tips: ['프로급 기술', '전문 전술', '경기 분석'],
        proPlayers: ['프로 선수들'],
        nextLevel: '4.5',
        progress: 90
      },
      '4.5': {
        color: 'from-indigo-50 to-indigo-100',
        borderColor: 'border-indigo-200',
        textColor: 'text-indigo-800',
        bgColor: 'bg-indigo-100',
        icon: '🏆',
        title: '상급자 완성',
        description: '프로급 기술과 전술 완성',
        tips: ['프로급 완성도', '경기 지배력', '리더십'],
        proPlayers: ['세계 랭킹 선수들'],
        nextLevel: '5.0+',
        progress: 95
      },
      '5.0+': {
        color: 'from-pink-50 to-pink-100',
        borderColor: 'border-pink-200',
        textColor: 'text-pink-800',
        bgColor: 'bg-pink-100',
        icon: '🌟',
        title: '전문가 레벨',
        description: '최고 수준의 기술과 전술',
        tips: ['최고 수준 유지', '멘토링', '코칭'],
        proPlayers: ['세계 최고 선수들'],
        nextLevel: '최고 수준',
        progress: 100
      }
    };
    return details[level] || details['3.0'];
  };

  const levelDetails = getLevelDetails(level);

  const copyToClipboard = () => {
    const url = `${window.location.origin}/utility/ntrp-test/result?score=${score}&q13=${encodeURIComponent(q13)}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToSocial = (platform: string) => {
    const url = `${window.location.origin}/utility/ntrp-test/result?score=${score}&q13=${encodeURIComponent(q13)}`;
    const text = `🎾 내 테니스 실력은 NTRP ${level} (${character} 스타일)이에요! TennisFriends에서 나의 실력을 확인해보세요!`;
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      instagram: `https://www.instagram.com/`, // Instagram은 URL 공유만 가능
    };
    
    if (platform === 'instagram') {
      // Instagram은 URL만 복사
      navigator.clipboard.writeText(`${text}\n\n${url}`);
      alert('인스타그램에 붙여넣기할 내용이 복사되었습니다! 📱');
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-12">
      <div className="container mx-auto max-w-6xl container-padding">
        {/* 메인 결과 카드 */}
        <Card id="result-card" className={`bg-gradient-to-br ${levelDetails.color} border-2 ${levelDetails.borderColor} shadow-2xl mb-8 transform hover:scale-105 transition-all duration-300`}>
          <CardContent className="p-8 text-center relative overflow-hidden">
            {/* 배경 장식 */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div className="text-8xl">{levelDetails.icon}</div>
            </div>
            <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
              <div className="text-6xl">🎾</div>
            </div>
            
            {/* 메인 결과 */}
            <div className="relative z-10">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-4xl">{levelDetails.icon}</div>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                축하합니다! 🎉
              </h1>
              
              <div className="text-7xl font-extrabold mb-4 animate-pulse">
                <span className={`${levelDetails.textColor}`}>{level}</span>
              </div>
              
              <h2 className={`text-2xl font-bold ${levelDetails.textColor} mb-4`}>
                {levelDetails.title}
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                {desc}
              </p>
              
              <div className="flex justify-center mb-8">
                <Badge className={`${levelDetails.bgColor} ${levelDetails.textColor} px-6 py-3 text-xl font-bold shadow-lg`}>
                  🎯 {character} 스타일
                </Badge>
              </div>

              {/* 통계 그리드 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">총 점수</h3>
                  <p className="text-3xl font-bold text-gray-900">{score}점</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <Star className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">레벨</h3>
                  <p className={`text-3xl font-bold ${levelDetails.textColor}`}>{level}</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <Target className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">스타일</h3>
                  <p className="text-lg font-bold text-gray-900">{character}</p>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-center mb-3">
                    <TrendingUp className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">진행률</h3>
                  <p className="text-3xl font-bold text-gray-900">{levelDetails.progress}%</p>
                </div>
              </div>

              {/* 액션 버튼들 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button 
                  onClick={() => router.push('/utility/ntrp-test')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 테스트하기
                </Button>
                <Button 
                  onClick={() => setShowShareModal(true)}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  결과 공유하기
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 상세 분석 섹션 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* 개선 방향 */}
          <Card className="bg-white border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">개선 방향</h3>
              </div>
              <div className="space-y-4">
                {levelDetails.tips.map((tip: string, index: number) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 font-medium">{tip}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">
                  💡 <strong>다음 레벨:</strong> NTRP {levelDetails.nextLevel}을 목표로 연습해보세요!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 프로 선수 비교 */}
          <Card className="bg-white border-2 border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">비슷한 스타일의 프로 선수</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">대표 선수</h4>
                      <p className="text-gray-600 text-sm">{levelDetails.proPlayers[0]}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    당신과 비슷한 플레이 스타일을 가진 선수들의 경기를 참고해보세요!
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-gray-900 mb-2">📺 추천 경기 영상</h4>
                  <p className="text-gray-600 text-sm">
                    유튜브에서 "{character} 스타일 테니스" 또는 "NTRP {level} 테니스"로 검색해보세요.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 소셜 공유 모달 */}
        {showShareModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <Card className="bg-white max-w-md w-full">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">결과 공유하기</h3>
                  <p className="text-gray-600">친구들과 내 테니스 실력을 공유해보세요!</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <Button 
                    onClick={() => shareToSocial('twitter')}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
                  >
                    <Twitter className="h-5 w-5 mr-2" />
                    트위터에 공유
                  </Button>
                  <Button 
                    onClick={() => shareToSocial('facebook')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    페이스북에 공유
                  </Button>
                  <Button 
                    onClick={() => shareToSocial('instagram')}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    인스타그램에 공유
                  </Button>
                  <Button 
                    onClick={copyToClipboard}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3"
                  >
                    {copied ? <CheckCircle className="h-5 w-5 mr-2" /> : <Copy className="h-5 w-5 mr-2" />}
                    {copied ? '복사됨!' : '링크 복사'}
                  </Button>
                </div>
                
                <Button 
                  onClick={() => setShowShareModal(false)}
                  variant="outline" 
                  className="w-full"
                >
                  닫기
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* 추천 콘텐츠 섹션 */}
        <Card className="bg-gradient-to-r from-blue-50 via-white to-green-50 border-2 border-blue-200 shadow-lg mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🎯 당신을 위한 맞춤 추천</h3>
              <p className="text-lg text-gray-600">NTRP {level} 레벨에 최적화된 도구와 콘텐츠를 확인해보세요</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Link href="/utility/string-tension">
                <Card className="h-full bg-white border-2 border-gray-200 hover:border-blue-500 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                      <Settings className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">스트링 텐션</h4>
                    <p className="text-sm text-gray-600">최적의 텐션 찾기</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/utility/injury-risk">
                <Card className="h-full bg-white border-2 border-gray-200 hover:border-red-500 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                      <Shield className="h-8 w-8 text-red-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">부상 예방</h4>
                    <p className="text-sm text-gray-600">안전한 플레이 체크</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/utility/play-style-test">
                <Card className="h-full bg-white border-2 border-gray-200 hover:border-purple-500 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                      <Zap className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">플레이 스타일</h4>
                    <p className="text-sm text-gray-600">7가지 스타일 진단</p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link href="/blog">
                <Card className="h-full bg-white border-2 border-gray-200 hover:border-green-500 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                      <BookOpen className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">테니스 가이드</h4>
                    <p className="text-sm text-gray-600">전문가 팁 & 조언</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 바이럴 요소 - 챌린지 섹션 */}
        <Card className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 border-2 border-pink-200 shadow-lg mb-8">
          <CardContent className="p-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">🏆 TennisFriends 챌린지</h3>
              <p className="text-lg text-gray-600 mb-8">
                친구들과 함께 테니스 실력을 비교하고 성장해보세요!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="font-bold text-gray-900 mb-2">친구 초대</h4>
                  <p className="text-sm text-gray-600">친구들과 함께 테스트하고 결과를 비교해보세요</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">📈</div>
                  <h4 className="font-bold text-gray-900 mb-2">실력 추적</h4>
                  <p className="text-sm text-gray-600">정기적으로 테스트하여 실력 향상을 확인하세요</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="font-bold text-gray-900 mb-2">목표 설정</h4>
                  <p className="text-sm text-gray-600">다음 레벨을 목표로 체계적으로 연습하세요</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setShowShareModal(true)}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  친구들에게 공유하기
                </Button>
                <Link href="/utility/ntrp-test/stats">
                  <Button 
                    variant="outline" 
                    className="bg-white border-2 border-gray-300 hover:border-purple-500 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <BarChart3 className="h-5 w-5 mr-2" />
                    전체 통계 보기
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 최종 CTA */}
        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl">
          <CardContent className="p-12 text-center">
            <h3 className="text-4xl font-bold mb-4">🎾 더 많은 테니스 도구를 만나보세요!</h3>
            <p className="text-xl mb-8 opacity-90">
              TennisFriends와 함께 당신의 테니스 여정을 한 단계 더 발전시켜보세요
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  모든 유틸리티 보기
                </Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                  <BookOpen className="h-5 w-5 mr-2" />
                  테니스 가이드 읽기
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
