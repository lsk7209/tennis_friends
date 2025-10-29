import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function Home() {
      const blogPosts = [
        {
          title: "서울 최고의 테니스장 TOP 7 추천 🏟️",
          category: "지역 정보",
          description: "서울에서 좋은 테니스장이 어디 있나요? 가격도 합리적이고 시설도 좋은 곳을 찾고 있어요. 자신의 수준과 목적에 맞는 테니스장을 선택하세요.",
          href: "/blog/seoul-best-tennis-courts",
          color: "bg-purple-100 text-purple-800",
          readTime: "10분",
          date: "2025-01-26"
        },
        {
          title: "라켓 스트링 종류별 특징과 선택 가이드 🧵",
          category: "장비 가이드",
          description: "어떤 스트링을 써야 할지 모르겠어요? 폴리, 나일론, 자연거트... 차이가 뭔가요? 자신의 플레이 스타일에 맞는 스트링을 선택하세요.",
          href: "/blog/tennis-string-guide",
          color: "bg-green-100 text-green-800",
          readTime: "9분",
          date: "2025-01-26"
        },
        {
          title: "테니스 부상 없는 겨울 훈련법 ❄️",
          category: "건강 & 피트니스",
          description: "겨울에 테니스하면 부상 위험이 높아요. 추운 날씨에 몸이 잘 안 풀려요. 하지만 문제는 날씨가 아니라 준비 운동과 훈련 방법입니다.",
          href: "/blog/winter-tennis-training",
          color: "bg-blue-100 text-blue-800",
          readTime: "8분",
          date: "2025-01-26"
        },
        {
          title: "테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법 🧠",
          category: "멘탈 트레이닝",
          description: "경기 중에 손이 떨려요. 중요한 포인트에서 실수해요. 하지만 문제는 대부분 기술이 아니라 멘탈 컨트롤입니다. 테니스는 90% 멘탈 게임입니다.",
          href: "/blog/tennis-mental-techniques",
          color: "bg-pink-100 text-pink-800",
          readTime: "7분",
          date: "2025-01-26"
        },
        {
          title: "백핸드 스윙이 불안할 때, 이 3가지를 점검하라 🎯",
          category: "테니스 레슨",
          description: "백핸드가 자꾸 아웃이에요. 임팩트가 불안해요. 하지만 문제는 대부분 라켓이 아니라 몸의 회전과 발의 위치입니다. 백핸드는 포핸드보다 더 정교한 타이밍이 필요한 기술입니다.",
          href: "/blog/backhand-swing-correction",
          color: "bg-yellow-100 text-yellow-800",
          readTime: "6분",
          date: "2025-01-26"
        },
        {
          title: "라켓 무게 하나로 달라지는 경기 스타일 3가지 ⚖️",
          category: "장비 가이드",
          description: "라켓의 무게는 단순한 숫자가 아닙니다. 10g의 차이가 스윙 속도, 파워, 컨트롤을 모두 바꿉니다. 당신의 실력과 스타일에 맞는 무게를 찾아보세요.",
          href: "/blog/racket-weight-styles",
          color: "bg-blue-100 text-blue-800",
          readTime: "8분",
          date: "2025-01-25"
        },
        {
          title: "그립 교체, 너무 늦게 하면 손목 나간다! ⚠️",
          category: "장비 관리",
          description: "라켓보다 손이 먼저 무너집니다. 그립이 미끄러지면 스윙이 흔들리고, 결국 손목이 상합니다. 코치가 알려주는 그립 교체 주기와 올바른 관리법을 확인하세요.",
          href: "/blog/tennis-grip-replacement",
          color: "bg-orange-100 text-orange-800",
          readTime: "7분",
          date: "2025-01-25"
        },
        {
          title: "포핸드 스윙이 흔들릴 때, 라켓보다 몸을 먼저 봐라 💪",
          category: "테니스 레슨",
          description: "라켓이 아니라 몸이 흔들리는 겁니다. 포핸드 스윙의 핵심은 손이 아니라 코어입니다. 코치가 알려주는 자세 교정 루틴으로 흔들림 없는 스윙을 만들어보세요.",
          href: "/blog/forehand-body-balance",
          color: "bg-green-100 text-green-800",
          readTime: "6분",
          date: "2025-01-25"
        },
        {
          title: "테니스 초보가 라켓을 망치는 5가지 관리 습관 😬",
          category: "장비 가이드",
          description: "라켓은 당신의 손과 기억을 공유하는 도구입니다. 하지만 잘못된 습관 하나로 수명과 성능이 반토막 납니다.",
          href: "/blog/racket-care-mistakes",
          color: "bg-orange-100 text-orange-800",
          readTime: "5분",
          date: "2025-01-25"
        },
        {
          title: "스트링 텐션, 숫자보다 감각이 중요하다",
          category: "장비 가이드",
          description: "라켓 텐션은 숫자가 아닌 감각의 문제입니다. 스윙 리듬과 타점 타이밍에 맞춰야 부상 없이 실력을 올릴 수 있습니다.",
          href: "/blog/string-tension-feel-guide",
          color: "bg-blue-100 text-blue-800",
          readTime: "7분",
          date: "2025-01-25"
        },
        {
          title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지",
          category: "장비 가이드",
          description: "라켓은 단순한 장비가 아니라, 당신의 스윙을 기억하는 파트너입니다. 실수를 줄이고 몸에 맞는 라켓을 찾는 법을 정리했습니다.",
          href: "/blog/common-tennis-racket-mistakes",
          color: "bg-orange-100 text-orange-800",
          readTime: "8분",
          date: "2025-01-25"
        },
        {
          title: "알카라즈 vs 시너: 차세대 라이벌전 심층 분석",
          category: "경기 분석",
          description: "두 영건의 기술적, 전술적 차이를 비교하고 앞으로의 테니스계를 이끌어갈 이들의 미래를 전망합니다.",
          href: "/blog/alcaraz-vs-sinner-analysis",
          color: "bg-primary/20 text-primary",
          readTime: "12분",
          date: "2025-01-25"
        },
        {
          title: "2024년 최고의 테니스 라켓 TOP 5",
          category: "장비 리뷰",
          description: "초보자부터 상급자까지, 당신에게 꼭 맞는 인생 라켓을 찾을 수 있도록 상세한 리뷰와 추천 가이드를 제공합니다.",
          href: "/blog/best-tennis-rackets-2024",
          color: "bg-primary/20 text-primary",
          readTime: "15분",
          date: "2025-01-25"
        },
        {
          title: "테니스 엘보우, 예방이 최선입니다",
          category: "건강 & 피트니스",
          description: "많은 동호인들이 겪는 테니스 엘보우의 원인과 증상, 그리고 효과적인 예방 스트레칭 방법을 소개합니다.",
          href: "/blog/tennis-elbow-prevention",
          color: "bg-primary/20 text-primary",
          readTime: "10분",
          date: "2025-01-25"
        }
      ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-7xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
                데이터로 똑똑하게,{' '}
                <span className="text-blue-600">
                  테니스를 즐겁게
                </span>
          </h1>
            </FadeIn>
            <SlideUp delay={0.4}>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                당신의 테니스 실력 향상을 위한 모든 것, TennisFriends와 함께 시작하세요. 
                과학적 분석과 전문가의 조언으로 더 나은 테니스 플레이어가 되어보세요.
              </p>
            </SlideUp>
            <SlideUp delay={0.6}>
              <div className="flex items-center justify-center mb-12">
                <Link href="/utility/ntrp-test">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl focus-ring shadow-lg hover:shadow-xl transition-all duration-300">
                    🎾 실력 테스트 시작하기
                  </Button>
                </Link>
              </div>
            </SlideUp>
            
            {/* Trust indicators */}
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>10,000+ 실력 테스트 완료</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>전문가 검증된 알고리즘</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>100% 무료 서비스</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Utility Cards Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                테니스 실력 향상을 위한{' '}
                <span className="text-blue-600">스마트 도구</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                과학적 분석과 데이터 기반 인사이트로 당신의 테니스 여정을 가속화하세요
              </p>
            </div>
          </SlideUp>
          <FadeIn delay={0.1}>
            <CTASection />
          </FadeIn>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-7xl container-padding">
          <SlideUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                최신 테니스 인사이트
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                전문가가 작성한 깊이 있는 분석과 실용적인 팁을 만나보세요
              </p>
            </div>
          </SlideUp>
          <StaggeredAnimation staggerDelay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <StaggeredItem key={index}>
                  <Link href={post.href}>
                    <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 card-hover group cursor-pointer shadow-sm hover:shadow-lg">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className={`w-fit ${post.color} px-3 py-1`}>
                            {post.category}
                          </Badge>
                          <div className="text-xs text-gray-500">
                            {index === 0 ? 'NEW' : index === 1 ? 'HOT' : 'TRENDING'}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-3 flex-grow leading-relaxed">
                          {post.description}
                        </p>
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 text-xs">{post.readTime}</span>
                              <span className="text-gray-500 text-xs">•</span>
                              <span className="text-gray-500 text-xs">{post.date}</span>
                            </div>
                            <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors text-sm group-hover:translate-x-1 transform duration-200">
                              자세히 보기 →
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </StaggeredItem>
              ))}
            </div>
          </StaggeredAnimation>
          
          <FadeIn delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/blog">
                <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold focus-ring">
                  모든 블로그 포스트 보기
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-7xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="max-w-3xl mx-auto">
                  <SlideUp delay={0.2}>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl">🎾</span>
                    </div>
                  </SlideUp>
                  <SlideUp delay={0.4}>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      "테니스는 혼자보다 함께 성장할 때 빛난다"
                    </h2>
                  </SlideUp>
                  <SlideUp delay={0.6}>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      TennisFriends 커뮤니티에서 당신의 열정을 공유하고, 
                      함께 성장하는 테니스 여정을 시작해보세요. 
                      데이터 기반의 객관적 피드백과 전문가의 조언이 기다립니다.
                    </p>
                  </SlideUp>
                  <SlideUp delay={0.8}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/about">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                          커뮤니티 알아보기
                        </Button>
                      </Link>
                      <Link href="/contact">
                        <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold focus-ring">
                          문의하기
                        </Button>
                      </Link>
                    </div>
                  </SlideUp>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
