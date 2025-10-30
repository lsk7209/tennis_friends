'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, RotateCcw, Share2, ShoppingCart, Star, CheckCircle, Target, Sparkles, ArrowLeft } from 'lucide-react';
import { EquipmentResult, RacketRecommendation, StringRecommendation } from '@/lib/equipmentRecommendation';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

function EquipmentRecommendationResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<EquipmentResult | null>(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const rackets = JSON.parse(searchParams.get('rackets') || '[]') as RacketRecommendation[];
      const strings = JSON.parse(searchParams.get('strings') || '[]') as StringRecommendation[];
      const accessories = JSON.parse(searchParams.get('accessories') || '{}');
      const totalBudget = JSON.parse(searchParams.get('totalBudget') || '{}');
      
      setResult({
        rackets,
        strings,
        accessories,
        totalBudget
      });
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  const handleRetake = () => {
    router.push('/utility/equipment-recommendation/test');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'TennisFriends 장비 추천 결과',
        text: '나에게 맞는 테니스 장비를 추천받았습니다!',
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  const getPriceRangeGradient = (range: string) => {
    switch (range) {
      case 'low': return 'from-green-500 to-emerald-500';
      case 'medium': return 'from-blue-500 to-cyan-500';
      case 'high': return 'from-purple-500 to-pink-500';
      case 'premium': return 'from-yellow-500 to-orange-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-blue-600';
    if (score >= 4) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-indigo-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">분석 중입니다...</h2>
          <p className="text-gray-600 text-lg">당신에게 최적화된 장비를 찾고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">오류가 발생했습니다</h2>
          <p className="text-gray-600 mb-4">결과를 불러올 수 없습니다.</p>
          <Button onClick={handleRetake} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
            다시 시도하기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <section className="relative overflow-hidden py-8 md:py-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="flex items-center justify-between mb-8">
            <Button 
              variant="outline" 
              onClick={() => router.back()}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              돌아가기
            </Button>
            <Button 
              variant="outline" 
              onClick={handleShare}
              className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30"
            >
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>
          
          <div className="text-center mb-8">
            <Badge className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-6 py-2 mb-6 text-sm font-semibold shadow-lg">
              <Target className="h-4 w-4 mr-2 inline" />
              장비 추천 완료
            </Badge>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
              당신에게 최적화된 장비 추천
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium">
              플레이 스타일과 실력에 맞는 완벽한 조합을 찾았습니다
            </p>
          </div>
        </div>
      </section>

      {/* Budget Summary */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeIn>
            <Card className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 mb-8">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <ShoppingCart className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">예상 총 비용</h2>
                <div className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {result.totalBudget.recommended.toLocaleString()}원
                </div>
                <p className="text-gray-600 text-xl">
                  {result.totalBudget.min.toLocaleString()}원 ~ {result.totalBudget.max.toLocaleString()}원
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Racket Recommendations */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto max-w-7xl px-4">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                추천 라켓 TOP 3
              </h2>
              <p className="text-gray-600 text-xl">
                당신의 플레이 스타일에 최적화된 라켓들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {result.rackets.map((racket, index) => (
                <StaggeredItem key={racket.id}>
                  <Card className={`bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer overflow-hidden relative ${
                    index === 0 ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${getPriceRangeGradient(racket.priceRange)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`px-4 py-2 text-sm font-bold text-white shadow-lg bg-gradient-to-r ${getPriceRangeGradient(racket.priceRange)}`}>
                          {racket.priceRange === 'low' ? '저예산' : 
                           racket.priceRange === 'medium' ? '중간가격' :
                           racket.priceRange === 'high' ? '고가' : '프리미엄'}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 text-sm font-bold shadow-lg">
                            <Star className="h-3 w-3 mr-1 fill-white" />
                            BEST
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-extrabold text-gray-900 mb-2">{racket.name}</CardTitle>
                      <p className="text-indigo-600 font-bold text-lg">{racket.brand}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0 relative z-10">
                      <div className="mb-6">
                        <div className="text-3xl font-extrabold text-gray-900 mb-3">
                          {racket.price.toLocaleString()}원
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                          {racket.description}
                        </p>
                      </div>
                      
                      {/* Specifications */}
                      <div className="space-y-3 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-gray-600">헤드 사이즈:</span>
                          <span className="text-gray-900 font-bold">{racket.headSize}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-gray-600">무게:</span>
                          <span className="text-gray-900 font-bold">{racket.weight}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-gray-600">밸런스:</span>
                          <span className="text-gray-900 font-bold">{racket.balance}</span>
                        </div>
                      </div>
                      
                      {/* Performance Scores */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-gray-900 mb-4">성능 점수</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: '파워', value: racket.power },
                            { label: '컨트롤', value: racket.control },
                            { label: '스핀', value: racket.spin },
                            { label: '편안함', value: racket.comfort }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 border-2 border-gray-100">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-gray-600">{item.label}</span>
                                <span className={`font-bold text-lg ${getPerformanceColor(item.value)}`}>
                                  {item.value}/10
                                </span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className={`h-full bg-gradient-to-r ${getPriceRangeGradient(racket.priceRange)} transition-all duration-1000`}
                                  style={{ width: `${(item.value / 10) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pros */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-gray-900 mb-3">장점</h4>
                        <ul className="space-y-2">
                          {racket.pros.slice(0, 2).map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className={`w-full bg-gradient-to-r ${getPriceRangeGradient(racket.priceRange)} hover:opacity-90 text-white px-6 py-4 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        구매하기
                      </Button>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* String Recommendations */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                추천 스트링 TOP 3
              </h2>
              <p className="text-gray-600 text-xl">
                라켓과 완벽하게 어울리는 스트링들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {result.strings.map((string, index) => (
                <StaggeredItem key={string.id}>
                  <Card className={`bg-white border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group cursor-pointer overflow-hidden relative ${
                    index === 0 ? 'ring-4 ring-green-400 ring-opacity-50' : ''
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardHeader className="pb-4 relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 text-sm font-bold shadow-lg">
                          {string.material}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 text-sm font-bold shadow-lg">
                            <Star className="h-3 w-3 mr-1 fill-white" />
                            BEST
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-extrabold text-gray-900 mb-2">{string.name}</CardTitle>
                      <p className="text-green-600 font-bold text-lg">{string.brand}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0 relative z-10">
                      <div className="mb-6">
                        <div className="text-3xl font-extrabold text-gray-900 mb-3">
                          {string.price.toLocaleString()}원
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                          {string.description}
                        </p>
                      </div>
                      
                      {/* Specifications */}
                      <div className="space-y-3 mb-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-gray-600">게이지:</span>
                          <span className="text-gray-900 font-bold">{string.gauge}</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-gray-600">텐션:</span>
                          <span className="text-gray-900 font-bold">{string.tension}</span>
                        </div>
                      </div>
                      
                      {/* Performance Scores */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-gray-900 mb-4">성능 점수</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { label: '파워', value: string.power },
                            { label: '컨트롤', value: string.control },
                            { label: '스핀', value: string.spin },
                            { label: '편안함', value: string.comfort }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-white rounded-lg p-3 border-2 border-gray-100">
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-gray-600">{item.label}</span>
                                <span className={`font-bold text-lg ${getPerformanceColor(item.value)}`}>
                                  {item.value}/10
                                </span>
                              </div>
                              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000"
                                  style={{ width: `${(item.value / 10) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pros */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-gray-900 mb-3">장점</h4>
                        <ul className="space-y-2">
                          {string.pros.slice(0, 2).map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        구매하기
                      </Button>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto max-w-7xl px-4">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                추천 액세서리
              </h2>
              <p className="text-gray-600 text-xl">
                완벽한 테니스 경험을 위한 필수 액세서리들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: '🎾', title: '그립', items: result.accessories.grip },
                { icon: '🛡️', title: '오버그립', items: result.accessories.overgrip },
                { icon: '🔇', title: '댐프너', items: result.accessories.dampener },
                { icon: '🎒', title: '라켓백', items: result.accessories.bag }
              ].map((category, index) => (
                <StaggeredItem key={index}>
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                다음 단계
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleRetake}
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <RotateCcw className="h-5 w-5 mr-2" />
                  다시 추천받기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-2 border-gray-300 hover:border-indigo-500 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  결과 공유하기
                </Button>
                <Link href="/utility/ntrp-test">
                  <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                    <ArrowRight className="h-5 w-5 mr-2" />
                    실력 테스트 하기
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto max-w-7xl px-4">
          <SlideUp>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                관련 도구
              </h2>
              <p className="text-gray-600 text-lg">
                더 나은 테니스 경험을 위한 다른 도구들도 확인해보세요.
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggeredItem>
                <Link href="/utility/ntrp-test">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-3xl">🎾</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">NTRP 실력 테스트</h3>
                      <p className="text-gray-600 text-sm">정확한 실력 측정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/string-tension">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-3xl">⚙️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">스트링 텐션 계산기</h3>
                      <p className="text-gray-600 text-sm">최적의 텐션 설정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/injury-risk">
                  <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                    <CardContent className="p-8 text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <span className="text-3xl">🛡️</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">부상 위험 체크</h3>
                      <p className="text-gray-600 text-sm">안전한 플레이 가이드</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>
    </div>
  );
}

export default function EquipmentRecommendationResult() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg font-medium">결과를 로딩 중입니다...</p>
        </div>
      </div>
    }>
      <EquipmentRecommendationResultContent />
    </Suspense>
  );
}
