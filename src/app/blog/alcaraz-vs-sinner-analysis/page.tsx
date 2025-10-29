'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Copy, Share2 } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function AlcarazVsSinnerAnalysis() {
  const blogData = {
    title: "알카라즈 vs 시너: 차세대 라이벌전 심층 분석 🎾",
    summary: "두 영건의 기술적, 전술적 차이를 비교하고 앞으로의 테니스계를 이끌어갈 이들의 미래를 전망합니다. 데이터로 분석하는 차세대 테니스의 모습을 만나보세요.",
    tags: ["경기분석", "알카라즈", "시너", "테니스미래", "데이터분석"],
    slug: "alcaraz-vs-sinner-analysis",
    category: "analysis",
    meta_title: "알카라즈 vs 시너: 차세대 라이벌전 심층 분석 | 테니스프렌즈",
    meta_description: "알카라즈와 시너의 기술적 차이점과 전술적 특징을 데이터로 분석합니다. 차세대 테니스의 방향을 제시합니다.",
    created_at: "2025-01-25",
    updated_at: "2025-01-25",
    read_time: "12분",
    author: "테니스프렌즈 분석팀"
  };

  const relatedPosts = [
    {
      title: "2024년 최고의 테니스 라켓 TOP 5",
      href: "/blog/best-tennis-rackets-2024",
      category: "장비 리뷰"
    },
    {
      title: "테니스 엘보우, 예방이 최선입니다",
      href: "/blog/tennis-elbow-prevention",
      category: "건강 & 피트니스"
    },
    {
      title: "스트링 텐션, 숫자보다 감각이 중요하다",
      href: "/blog/string-tension-feel-guide",
      category: "장비 가이드"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://tennisfriends.co.kr/blog/alcaraz-vs-sinner-analysis');
    alert('공유 링크가 복사되었습니다 📎');
  };

  return (
    <div className="min-h-screen bg-background-dark">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background-dark via-background-dark to-content-dark">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary px-4 py-2 mb-4">
              경기 분석
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
              <h2 className="text-2xl font-bold text-white mb-6">🎾 차세대 테니스의 두 거성</h2>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                카를로스 알카라즈와 얀니크 시너. 이 두 선수는 단순히 젊은 선수가 아닙니다. 그들은 <strong className="text-text-light">테니스의 미래</strong>를 보여주는 살아있는 증거입니다. 오늘은 데이터와 분석을 통해 이 두 선수의 차이점과 공통점을 깊이 있게 살펴보겠습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-background-dark border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-3">카를로스 알카라즈</h3>
                    <ul className="space-y-2 text-sm text-text-muted">
                      <li>• 나이: 21세 (2024년 기준)</li>
                      <li>• 최고 랭킹: 1위</li>
                      <li>• 그랜드슬램: 2회 우승</li>
                      <li>• 플레이 스타일: 올라운드</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-background-dark border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-3">얀니크 시너</h3>
                    <ul className="space-y-2 text-sm text-text-muted">
                      <li>• 나이: 23세 (2024년 기준)</li>
                      <li>• 최고 랭킹: 1위</li>
                      <li>• 그랜드슬램: 1회 우승</li>
                      <li>• 플레이 스타일: 파워 베이스라인</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <hr className="border-white/10 my-8" />

              <h3 className="text-xl font-bold text-white mb-4">⚡ 기술적 차이점 분석</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-text-light mb-3">포핸드 스트로크</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">알카라즈</p>
                      <p className="text-text-muted text-sm">상대적으로 짧은 백스윙, 빠른 준비, 다양한 각도 활용</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">시너</p>
                      <p className="text-text-muted text-sm">긴 백스윙, 강력한 파워, 일관된 깊이</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 backdrop-blur-sm">
                  <h4 className="font-bold text-text-light mb-3">백핸드 스트로크</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">알카라즈</p>
                      <p className="text-text-muted text-sm">양손 백핸드, 안정성과 정확성 중시</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary mb-2">시너</p>
                      <p className="text-text-muted text-sm">한손 백핸드, 공격적이고 다양한 각도</p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="border-white/10 my-8" />

              <h3 className="text-xl font-bold text-white mb-4">🧠 전술적 특징</h3>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                두 선수의 가장 큰 차이점은 <strong className="text-text-light">전술적 접근법</strong>에 있습니다. 알카라즈는 다양한 샷을 조합하여 상대를 혼란시키는 반면, 시너는 강력한 베이스라인 플레이로 상대를 압박합니다.
              </p>

              <div className="bg-content-dark border border-white/10 rounded-lg p-6 mb-8">
                <h4 className="font-bold text-text-light mb-4">데이터로 보는 승률 분석</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">73%</div>
                    <div className="text-sm text-text-muted">알카라즈 서브 승률</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">68%</div>
                    <div className="text-sm text-text-muted">시너 서브 승률</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">5-3</div>
                    <div className="text-sm text-text-muted">알카라즈 상대 전적</div>
                  </div>
                </div>
              </div>

              <hr className="border-white/10 my-8" />

              <h3 className="text-xl font-bold text-white mb-4">🔮 미래 전망</h3>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                이 두 선수의 경쟁은 앞으로 10년 이상 지속될 것으로 예상됩니다. 각각의 강점을 살려가며 테니스계를 이끌어갈 것입니다.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-text-light font-semibold">알카라즈의 성장 포인트</p>
                    <p className="text-text-muted text-sm">서브의 일관성 향상, 체력 관리</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-text-light font-semibold">시너의 성장 포인트</p>
                    <p className="text-text-muted text-sm">네트 플레이 다양화, 정신적 안정성</p>
                  </div>
                </div>
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
                <h3 className="text-2xl font-bold text-text-light mb-4">🏁 마무리 — 테니스의 새로운 시대</h3>
                <p className="text-text-muted leading-relaxed mb-4">
                  알카라즈와 시너는 단순한 라이벌이 아닙니다.<br />
                  그들은 테니스의 새로운 가능성을 보여주는 선구자들입니다.<br />
                  앞으로의 경기들이 더욱 기대됩니다.
                </p>
                <div className="text-primary font-semibold">
                  ✨ 다음 읽기: <Link href="/blog/best-tennis-rackets-2024" className="hover:underline">2024년 최고의 테니스 라켓 TOP 5 🏆</Link>
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
