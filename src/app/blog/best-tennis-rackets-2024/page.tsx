'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Copy, Share2, Star } from 'lucide-react';

export default function BestTennisRackets2024() {
  const blogData = {
    title: "2024년 최고의 테니스 라켓 TOP 5 🏆",
    summary: "초보자부터 상급자까지, 당신에게 꼭 맞는 인생 라켓을 찾을 수 있도록 상세한 리뷰와 추천 가이드를 제공합니다. 전문가가 직접 테스트한 결과를 바탕으로 합니다.",
    tags: ["테니스라켓", "장비리뷰", "2024", "추천", "테니스초보"],
    slug: "best-tennis-rackets-2024",
    category: "gear",
    meta_title: "2024년 최고의 테니스 라켓 TOP 5 | 테니스프렌즈",
    meta_description: "2024년 최고의 테니스 라켓 5선을 전문가가 직접 테스트하여 추천합니다. 초보자부터 상급자까지 모든 레벨에 맞는 라켓을 찾아보세요.",
    created_at: "2025-01-25",
    updated_at: "2025-01-25",
    read_time: "15분",
    author: "테니스프렌즈 장비팀"
  };

  const rackets = [
    {
      rank: 1,
      name: "Wilson Pro Staff 97",
      price: "₩450,000",
      level: "상급자",
      pros: ["정확한 컨트롤", "프리미엄 느낌", "안정적인 플레이"],
      cons: ["높은 가격", "초보자에게 어려움"],
      rating: 4.8,
      image: "🎾"
    },
    {
      rank: 2,
      name: "Babolat Pure Drive",
      price: "₩380,000",
      level: "중급자",
      pros: ["강력한 파워", "넓은 스윗스팟", "다양한 플레이어에게 적합"],
      cons: ["진동이 다소 큼", "텐션 조정 필요"],
      rating: 4.7,
      image: "🎾"
    },
    {
      rank: 3,
      name: "Head Speed Pro",
      price: "₩420,000",
      level: "중급자",
      pros: ["균형잡힌 성능", "안정적인 서브", "컨트롤과 파워의 조화"],
      cons: ["무게가 다소 무거움"],
      rating: 4.6,
      image: "🎾"
    },
    {
      rank: 4,
      name: "Yonex EZONE 98",
      price: "₩350,000",
      level: "초급자",
      pros: ["친화적인 플레이", "부드러운 느낌", "부상 예방"],
      cons: ["파워가 다소 부족"],
      rating: 4.5,
      image: "🎾"
    },
    {
      rank: 5,
      name: "Prince Textreme Tour",
      price: "₩320,000",
      level: "초급자",
      pros: ["합리적인 가격", "안정적인 성능", "내구성 우수"],
      cons: ["디자인이 단조로움"],
      rating: 4.4,
      image: "🎾"
    }
  ];

  const relatedPosts = [
    {
      title: "스트링 텐션, 숫자보다 감각이 중요하다",
      href: "/blog/string-tension-feel-guide",
      category: "장비 가이드"
    },
    {
      title: "알카라즈 vs 시너: 차세대 라이벌전 심층 분석",
      href: "/blog/alcaraz-vs-sinner-analysis",
      category: "경기 분석"
    },
    {
      title: "테니스 엘보우, 예방이 최선입니다",
      href: "/blog/tennis-elbow-prevention",
      category: "건강 & 피트니스"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://tennisfriends.co.kr/blog/best-tennis-rackets-2024');
    alert('공유 링크가 복사되었습니다 📎');
  };

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-dark via-background-dark to-content-dark">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary px-4 py-2 mb-4">
              장비 리뷰
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-text-light mb-6 leading-tight">
              {blogData.title}
            </h1>
            <p className="text-lg text-text-muted mb-8 leading-relaxed max-w-3xl mx-auto">
              {blogData.summary}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-text-muted mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{blogData.created_at}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{blogData.read_time} 읽기</span>
              </div>
              <div className="flex items-center gap-2">
                <span>작성자: {blogData.author}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {blogData.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs px-3 py-1 border-white/20 text-text-muted">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Share Button */}
            <Button 
              onClick={copyToClipboard}
              variant="outline" 
              className="bg-content-dark border-white/20 hover:border-primary/50 px-6 py-2 focus-ring"
            >
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background-dark">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="prose prose-lg max-w-none">
            <div className="bg-content-dark border border-white/10 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">🏆 2024년 최고의 테니스 라켓 TOP 5</h2>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                테니스 라켓 선택은 플레이어의 실력과 스타일에 따라 완전히 달라집니다. 우리 전문가 팀이 <strong className="text-text-light">3개월간 직접 테스트</strong>한 결과를 바탕으로 2024년 최고의 라켓들을 소개합니다.
              </p>

              <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 mb-8 backdrop-blur-sm">
                <h3 className="font-bold text-text-light mb-3 text-lg">📊 테스트 기준</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-text-muted">
                  <div>
                    <p className="font-semibold text-text-light mb-2">성능 평가</p>
                    <p>파워, 컨트롤, 안정성, 스핀</p>
                  </div>
                  <div>
                    <p className="font-semibold text-text-light mb-2">사용성 평가</p>
                    <p>편안함, 내구성, 가성비</p>
                  </div>
                </div>
              </div>

              {/* Racket Reviews */}
              <div className="space-y-8 mb-8">
                {rackets.map((racket, index) => (
                  <Card key={index} className="bg-background-dark border-white/10 hover:border-primary/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-2xl">
                            {racket.image}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-primary/20 text-primary text-sm font-bold">
                              #{racket.rank}
                            </Badge>
                            <h3 className="text-xl font-bold text-text-light">{racket.name}</h3>
                            <div className="flex items-center gap-1 ml-auto">
                              <Star className="h-4 w-4 fill-primary text-primary" />
                              <span className="text-sm font-semibold text-text-light">{racket.rating}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 mb-4 text-sm">
                            <span className="text-primary font-semibold">{racket.price}</span>
                            <Badge variant="outline" className="text-xs">
                              {racket.level}
                            </Badge>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold text-text-light mb-2 text-sm">장점</h4>
                              <ul className="space-y-1">
                                {racket.pros.map((pro, proIndex) => (
                                  <li key={proIndex} className="flex items-center gap-2 text-sm text-text-muted">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-text-light mb-2 text-sm">단점</h4>
                              <ul className="space-y-1">
                                {racket.cons.map((con, conIndex) => (
                                  <li key={conIndex} className="flex items-center gap-2 text-sm text-text-muted">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <hr className="border-white/10 my-8" />

              <h3 className="text-xl font-bold text-white mb-4">🎯 레벨별 추천</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-background-dark border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-primary mb-3">초급자</h4>
                    <p className="text-sm text-text-muted mb-4">테니스를 시작하는 분들</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-text-light">추천: Yonex EZONE 98</p>
                      <p className="text-sm font-semibold text-text-light">대안: Prince Textreme Tour</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background-dark border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-primary mb-3">중급자</h4>
                    <p className="text-sm text-text-muted mb-4">기본기를 갖춘 플레이어</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-text-light">추천: Babolat Pure Drive</p>
                      <p className="text-sm font-semibold text-text-light">대안: Head Speed Pro</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background-dark border-primary/20">
                  <CardContent className="p-6 text-center">
                    <h4 className="font-bold text-primary mb-3">상급자</h4>
                    <p className="text-sm text-text-muted mb-4">고급 기술을 구사하는 플레이어</p>
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-text-light">추천: Wilson Pro Staff 97</p>
                      <p className="text-sm font-semibold text-text-light">대안: Head Speed Pro</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <hr className="border-white/10 my-8" />

              <h3 className="text-xl font-bold text-white mb-4">💡 라켓 선택 가이드</h3>
              
              <div className="space-y-4 mb-8">
                <div className="bg-primary/5 border border-primary/30 rounded-lg p-4">
                  <h4 className="font-bold text-text-light mb-2">1. 체력과 스타일 고려</h4>
                  <p className="text-text-muted text-sm">파워형 플레이어는 무거운 라켓, 컨트롤형 플레이어는 가벼운 라켓을 선택하세요.</p>
                </div>
                
                <div className="bg-primary/5 border border-primary/30 rounded-lg p-4">
                  <h4 className="font-bold text-text-light mb-2">2. 예산 설정</h4>
                  <p className="text-text-muted text-sm">라켓은 장기 투자입니다. 예산 내에서 최고의 성능을 제공하는 모델을 선택하세요.</p>
                </div>
                
                <div className="bg-primary/5 border border-primary/30 rounded-lg p-4">
                  <h4 className="font-bold text-text-light mb-2">3. 직접 테스트</h4>
                  <p className="text-text-muted text-sm">가능하면 매장에서 직접 쳐보고 구매하세요. 온라인 구매 시는 리뷰를 충분히 검토하세요.</p>
                </div>
              </div>

              <div className="text-center my-8">
                <Link href="/utility/string-tension">
                  <Button className="btn-primary px-6 py-3 focus-ring">
                    📎 스트링 텐션 계산기로 최적 설정 찾기
                  </Button>
                </Link>
              </div>

              <hr className="border-white/10 my-8" />

              <h3 className="text-xl font-bold text-text-light mb-6">🧩 함께 보면 좋은 콘텐츠</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {relatedPosts.map((post, index) => (
                  <Link key={index} href={post.href}>
                    <Card className="h-full bg-content-dark border-white/10 hover:border-primary/50 transition-all duration-300 card-hover group cursor-pointer">
                      <CardContent className="p-4">
                        <Badge className="w-fit bg-primary/20 text-primary text-xs mb-2">
                          {post.category}
                        </Badge>
                        <h4 className="text-sm font-bold text-text-light group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <hr className="border-white/10 my-8" />

              <div className="text-center bg-gradient-to-r from-primary/10 to-emerald-400/10 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-text-light mb-4">🏁 마무리 — 당신에게 맞는 라켓을 찾으세요</h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  최고의 라켓은 당신의 플레이 스타일과 실력에 맞는 라켓입니다.<br />
                  이 가이드를 참고하여 자신만의 완벽한 라켓을 찾아보세요.<br />
                  좋은 라켓은 테니스 실력 향상의 첫 걸음입니다.
                </p>
                <div className="text-primary font-semibold">
                  ✨ 다음 읽기: <Link href="/blog/tennis-elbow-prevention" className="hover:underline">테니스 엘보우, 예방이 최선입니다 🛡️</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 via-background-dark to-primary/10">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-2xl font-bold text-text-light mb-4">
            당신의 테니스 실력을 한 단계 올려보세요
          </h2>
          <p className="text-text-muted mb-8">
            전문가가 검증한 도구들로 더 정확한 분석을 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/utility/ntrp-test">
              <Button className="btn-primary px-8 py-3 text-lg font-semibold focus-ring">
                🎾 실력 테스트 시작하기
              </Button>
            </Link>
            <Link href="/utility/string-tension">
              <Button variant="outline" className="bg-content-dark border-white/20 hover:border-primary/50 px-8 py-3 text-lg font-semibold focus-ring">
                ⚙️ 스트링 계산기
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
