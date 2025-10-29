'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, RotateCcw, Share2, ShoppingCart, Star, CheckCircle } from 'lucide-react';
import { EquipmentResult, RacketRecommendation, StringRecommendation } from '@/lib/equipmentRecommendation';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

function EquipmentRecommendationResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<EquipmentResult | null>(null);
  
  useEffect(() => {
    // 로딩 시뮬레이션
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

  const getPriceRangeColor = (range: string) => {
    switch (range) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'high': return 'bg-purple-100 text-purple-800';
      case 'premium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
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
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">분석 중입니다...</h2>
          <p className="text-gray-600">당신에게 최적화된 장비를 찾고 있습니다.</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">오류가 발생했습니다</h2>
          <p className="text-gray-600 mb-4">결과를 불러올 수 없습니다.</p>
          <Button onClick={handleRetake}>다시 시도하기</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <div className="text-center mb-8">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              🎾 장비 추천 완료
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              당신에게 최적화된 장비 추천
            </h1>
            <p className="text-gray-600 text-lg">
              플레이 스타일과 실력에 맞는 완벽한 조합을 찾았습니다
            </p>
          </div>
        </div>
      </section>

      {/* Budget Summary */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <FadeIn>
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 shadow-lg mb-8">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">예상 총 비용</h2>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {result.totalBudget.recommended.toLocaleString()}원
                </div>
                <p className="text-gray-600">
                  {result.totalBudget.min.toLocaleString()}원 ~ {result.totalBudget.max.toLocaleString()}원
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Racket Recommendations */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                추천 라켓 TOP 3
              </h2>
              <p className="text-gray-600">
                당신의 플레이 스타일에 최적화된 라켓들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {result.rackets.map((racket, index) => (
                <StaggeredItem key={racket.id}>
                  <Card className={`bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg ${index === 0 ? 'ring-2 ring-blue-500' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={`px-3 py-1 text-sm font-semibold ${getPriceRangeColor(racket.priceRange)}`}>
                          {racket.priceRange === 'low' ? '저예산' : 
                           racket.priceRange === 'medium' ? '중간가격' :
                           racket.priceRange === 'high' ? '고가' : '프리미엄'}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold">
                            <Star className="h-3 w-3 mr-1" />
                            BEST
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{racket.name}</CardTitle>
                      <p className="text-blue-600 font-semibold">{racket.brand}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {racket.price.toLocaleString()}원
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {racket.description}
                        </p>
                      </div>
                      
                      {/* Specifications */}
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">헤드 사이즈:</span>
                          <span className="font-medium">{racket.headSize}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">무게:</span>
                          <span className="font-medium">{racket.weight}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">밸런스:</span>
                          <span className="font-medium">{racket.balance}</span>
                        </div>
                      </div>
                      
                      {/* Performance Scores */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">성능 점수</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span>파워:</span>
                            <span className={`font-medium ${getPerformanceColor(racket.power)}`}>
                              {racket.power}/10
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>컨트롤:</span>
                            <span className={`font-medium ${getPerformanceColor(racket.control)}`}>
                              {racket.control}/10
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>스핀:</span>
                            <span className={`font-medium ${getPerformanceColor(racket.spin)}`}>
                              {racket.spin}/10
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>편안함:</span>
                            <span className={`font-medium ${getPerformanceColor(racket.comfort)}`}>
                              {racket.comfort}/10
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pros */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">장점</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {racket.pros.slice(0, 2).map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <ShoppingCart className="h-4 w-4 mr-2" />
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
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                추천 스트링 TOP 3
              </h2>
              <p className="text-gray-600">
                라켓과 완벽하게 어울리는 스트링들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {result.strings.map((string, index) => (
                <StaggeredItem key={string.id}>
                  <Card className={`bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg ${index === 0 ? 'ring-2 ring-blue-500' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-green-100 text-green-800 px-3 py-1 text-sm font-semibold">
                          {string.material}
                        </Badge>
                        {index === 0 && (
                          <Badge className="bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold">
                            <Star className="h-3 w-3 mr-1" />
                            BEST
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{string.name}</CardTitle>
                      <p className="text-blue-600 font-semibold">{string.brand}</p>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="mb-4">
                        <div className="text-2xl font-bold text-gray-900 mb-2">
                          {string.price.toLocaleString()}원
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {string.description}
                        </p>
                      </div>
                      
                      {/* Specifications */}
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">게이지:</span>
                          <span className="font-medium">{string.gauge}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">텐션:</span>
                          <span className="font-medium">{string.tension}</span>
                        </div>
                      </div>
                      
                      {/* Performance Scores */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">성능 점수</h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="flex justify-between">
                            <span>파워:</span>
                            <span className={`font-medium ${getPerformanceColor(string.power)}`}>
                              {string.power}/10
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>컨트롤:</span>
                            <span className={`font-medium ${getPerformanceColor(string.control)}`}>
                              {string.control}/10
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>스핀:</span>
                            <span className={`font-medium ${getPerformanceColor(string.spin)}`}>
                              {string.spin}/10
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>편안함:</span>
                            <span className={`font-medium ${getPerformanceColor(string.comfort)}`}>
                              {string.comfort}/10
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pros */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">장점</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {string.pros.slice(0, 2).map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-center gap-1">
                              <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <ShoppingCart className="h-4 w-4 mr-2" />
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
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                추천 액세서리
              </h2>
              <p className="text-gray-600">
                완벽한 테니스 경험을 위한 필수 액세서리들입니다
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🎾</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">그립</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {result.accessories.grip.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🛡️</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">오버그립</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {result.accessories.overgrip.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🔇</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">댐프너</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {result.accessories.dampener.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
              
              <StaggeredItem>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">🎒</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">라켓백</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {result.accessories.bag.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggeredItem>
            </div>
          </StaggeredAnimation>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl container-padding">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                다음 단계
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  onClick={handleRetake}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3"
                >
                  <RotateCcw className="h-4 w-4 mr-2" />
                  다시 추천받기
                </Button>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  결과 공유하기
                </Button>
                <Link href="/utility/ntrp-test">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    실력 테스트 하기
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Links Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-6xl container-padding">
          <SlideUp>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                관련 도구
              </h2>
              <p className="text-gray-600">
                더 나은 테니스 경험을 위한 다른 도구들도 확인해보세요.
              </p>
            </div>
          </SlideUp>
          
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StaggeredItem>
                <Link href="/utility/ntrp-test">
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎾</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">NTRP 실력 테스트</h3>
                      <p className="text-gray-600 text-sm">정확한 실력 측정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/string-tension">
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚙️</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">스트링 텐션 계산기</h3>
                      <p className="text-gray-600 text-sm">최적의 텐션 설정</p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggeredItem>
              
              <StaggeredItem>
                <Link href="/utility/injury-risk">
                  <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🛡️</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">부상 위험 체크</h3>
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
    <Suspense fallback={<div>Loading...</div>}>
      <EquipmentRecommendationResultContent />
    </Suspense>
  );
}
