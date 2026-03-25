import Link from 'next/link';
import { Button } from '@/components/ui/button';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { homeBlogPosts } from '@/data/home-blog-posts';
import type { Metadata } from 'next';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ClientAnimations';
import JsonLd from '@/components/JsonLd';
import FAQSection from '@/components/seo/FAQSection';
import { getSiteUrl } from '@/lib/site';

// 메인 페이지 SEO 메타데이터
export const metadata: Metadata = {
  title: 'TennisFriends - 테니스 실력 테스트 & 분석 도구 | NTRP 측정, 스트링 텐션 계산기',
  description: 'NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측, 플레이 스타일 진단 등 테니스 실력 향상을 위한 무료 도구 모음. 10,000명 이상이 이용한 전문가 검증 알고리즘으로 나의 테니스 레벨을 확인하세요.',
  keywords: ['테니스', 'NTRP 테스트', '테니스 실력 측정', '스트링 텐션 계산기', '테니스 부상 예방', '테니스 레벨 테스트', '테니스 라켓 추천', '테니스 훈련 계획'],
  openGraph: {
    title: 'TennisFriends - 테니스 실력 테스트 & 분석 도구',
    description: 'NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것. 무료로 시작하세요.',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  const blogPosts = homeBlogPosts;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "TennisFriends",
    url: getSiteUrl(),
    applicationCategory: "SportsApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10000",
      bestRating: "5",
      worstRating: "1",
    },
    description: "테니스 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 무료 도구 모음",
    inLanguage: "ko",
    featureList: [
      "NTRP 실력 테스트",
      "스트링 텐션 계산기",
      "부상 위험도 예측",
      "플레이 스타일 진단",
      "장비 추천 시스템",
      "훈련 계획 수립",
      "경기 분석 도구",
    ],
  };

  return (
    <div className="min-h-screen">
      <JsonLd data={reviewSchema} id="homepage-app-schema" />
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

          <FadeIn delay={0.15}>
            <div className="mt-16 pt-12 border-t border-gray-200">
              <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-wider mb-8">
                사용자 후기
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                {[
                  { stars: 5, text: 'NTRP 테스트로 제 실력을 정확히 알았어요! 지금은 3.5 목표로 훈련 중입니다.', author: '박○○', info: '서울, 30대' },
                  { stars: 5, text: '스트링 텐션 계산기 덕분에 라켓 세팅이 훨씬 편해졌어요. 팔도 덜 아프고요!', author: '김○○', info: '부산, 20대' },
                  { stars: 5, text: '플레이 스타일 진단 결과 보고 훈련 방향을 잡았습니다. 복식 궁합 테스트도 재밌어요.', author: '이○○', info: '대전, 40대' },
                ].map((review, i) => (
                  <Card key={i} className="bg-white border border-gray-200 shadow-sm">
                    <CardContent className="p-6">
                      <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(review.stars)}</div>
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{review.text}&rdquo;</p>
                      <div className="text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{review.author}</span> · {review.info}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="pt-8 border-t border-gray-200">
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
                  { name: "권순우 프로필", href: "/players/soonwoo-kwon" },
                  { name: "이덕희 ATP 도전", href: "/players/duckhee-lee" },
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

      {/* Popular Utilities Grid - Additional Internal Links */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl container-padding">
          <SlideUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                인기 테니스 도구 모음
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                61개 이상의 무료 테니스 분석 도구로 실력을 한 단계 끌어올리세요
              </p>
            </div>
          </SlideUp>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { name: "복식 궁합 테스트", href: "/utility/doubles-chemistry-test", emoji: "👥" },
              { name: "반응 속도 테스트", href: "/utility/reaction-test", emoji: "⚡" },
              { name: "유연성 테스트", href: "/utility/flexibility-test", emoji: "🤸" },
              { name: "칼로리 계산기", href: "/utility/calorie-calculator", emoji: "🔥" },
              { name: "테니스 용어 사전", href: "/utility/tennis-dictionary", emoji: "📖" },
              { name: "멘탈 트레이닝", href: "/utility/mental-training", emoji: "🧠" },
              { name: "상대 분석기", href: "/utility/opponent-analyzer", emoji: "🔍" },
              { name: "워밍업 루틴", href: "/utility/warmup-routine-builder", emoji: "🏃" },
              { name: "코트 컨디션 체크", href: "/utility/court-conditions", emoji: "🌤️" },
              { name: "랭킹 계산기", href: "/utility/ranking-calculator", emoji: "📈" },
              { name: "테니스화 추천", href: "/utility/shoe-recommender", emoji: "👟" },
              { name: "스윙 분석기", href: "/utility/swing-analyzer", emoji: "🎯" },
            ].map((tool, i) => (
              <Link key={i} href={tool.href}>
                <div className="p-4 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all text-center group">
                  <div className="text-2xl mb-2">{tool.emoji}</div>
                  <div className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">{tool.name}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/utility">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold">
                전체 도구 보기 (61개+)
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for Google Rich Snippets */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <FAQSection
            title="테니스 실력 향상 FAQ"
            items={[
              { question: "NTRP 테니스 등급이란 무엇인가요?", answer: "NTRP(National Tennis Rating Program)는 1.0부터 7.0까지의 숫자로 테니스 실력을 객관적으로 평가하는 국제 표준 등급 시스템입니다. 1.0은 완전 초보자, 3.0은 중급 동호인, 5.0 이상은 프로 수준입니다. TennisFriends의 무료 NTRP 테스트로 10개 질문에 답하면 나의 등급을 확인할 수 있습니다." },
              { question: "테니스 스트링 텐션은 어떻게 정해야 하나요?", answer: "스트링 텐션은 라켓 헤드 크기, 플레이 스타일, 선호하는 타구감에 따라 달라집니다. 일반적으로 파워를 원하면 낮은 텐션(48-52lbs), 컨트롤을 원하면 높은 텐션(54-60lbs)을 선택합니다. TennisFriends 스트링 텐션 계산기에서 5가지 요소를 입력하면 맞춤 텐션을 추천받을 수 있습니다." },
              { question: "테니스 엘보를 예방하려면 어떻게 해야 하나요?", answer: "테니스 엘보 예방의 핵심은 3가지입니다: 1) 올바른 그립 사이즈 선택, 2) 경기 전후 팔꿈치·전완근 스트레칭, 3) 라켓 진동 흡수력이 좋은 장비 사용. 또한 폴리에스터 스트링 대신 멀티필라멘트나 내추럴 거트를 사용하면 팔에 가해지는 충격을 줄일 수 있습니다." },
              { question: "테니스 초보자가 처음 사야 할 장비는 무엇인가요?", answer: "초보자에게 필요한 필수 장비는 라켓, 테니스화, 오버그립입니다. 라켓은 헤드 크기 100sq.in 이상의 가벼운 모델(270-285g)을 추천합니다. 테니스화는 일반 운동화와 달리 측면 지지력이 중요하므로 반드시 테니스 전용 신발을 구입하세요. 예산은 라켓 15-25만원, 신발 8-15만원 정도입니다." },
              { question: "복식 경기에서 가장 중요한 전략은 무엇인가요?", answer: "복식의 핵심은 커뮤니케이션과 포지셔닝입니다. 서브 시 I-포메이션이나 오스트레일리안 포메이션을 활용하고, 네트 플레이어는 항상 볼의 방향을 따라 이동해야 합니다. 파트너 간의 시선 교환과 사전 사인 시스템을 만들면 승률이 크게 올라갑니다." },
            ]}
          />
        </div>
      </section>
    </div>
  );
}
