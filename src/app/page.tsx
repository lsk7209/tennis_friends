'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import dynamic from 'next/dynamic';
import { homeBlogPosts } from '@/data/home-blog-posts';

// 애니메이션 컴포넌트는 클라이언트 사이드에서만 로드 (SSR 최적화)
const FadeIn = dynamic(() => import('@/components/ScrollAnimation').then(mod => mod.FadeIn), { ssr: false });
const SlideUp = dynamic(() => import('@/components/ScrollAnimation').then(mod => mod.SlideUp), { ssr: false });
const StaggeredAnimation = dynamic(() => import('@/components/ScrollAnimation').then(mod => mod.StaggeredAnimation), { ssr: false });
const StaggeredItem = dynamic(() => import('@/components/ScrollAnimation').then(mod => mod.StaggeredItem), { ssr: false });

export default function Home() {
  const blogPosts = homeBlogPosts;

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
                <Link href="/utility">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-bold rounded-2xl focus-ring shadow-lg hover:shadow-xl transition-all duration-300">
                    🎾 실력테스트 해보기
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

          <FadeIn delay={0.2}>
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">
                인기 검색어 & 추천 토픽
              </h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {[
                  { name: "테니스 라켓 추천", href: "/blog" },
                  { name: "NTRP 레벨 테스트", href: "/utility/ntrp-calculator" },
                  { name: "테니스 스트링 텐션", href: "/utility/string-tension-calculator" },
                  { name: "테니스 엘보 예방", href: "/utility/injury-risk-test" },
                  { name: "페더러 프로필", href: "/players/roger-federer" },
                  { name: "나달 클레이 코트", href: "/players/rafael-nadal" },
                  { name: "조코비치 그랜드슬램", href: "/players/novak-djokovic" },
                  { name: "시너 포핸드", href: "/players/jannik-sinner" },
                  { name: "알카라스 경기 일정", href: "/players/carlos-alcaraz" },
                  { name: "테니스 룰 퀴즈", href: "/tennis-rules-quiz" },
                  { name: "테니스 입문 가이드", href: "/blog" },
                  { name: "테니스화 추천", href: "/blog" },
                ].map((topic, index) => (
                  <Link key={index} href={topic.href}>
                    <Badge variant="secondary" className="bg-white hover:bg-blue-50 text-gray-600 hover:text-blue-600 border border-gray-200 px-4 py-2 text-sm transition-all cursor-pointer">
                      # {topic.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
