'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Share2, Clock, Calendar, ArrowRight } from 'lucide-react';
import { FadeIn, SlideUp, SlideDown, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function CourtTypeComparison() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://tennisfriends.kr/blog/court-type-comparison');
    alert('공유 링크가 복사되었습니다 📎');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-emerald-50 via-white to-sky-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <div className="text-center mb-8">
              <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 mb-4 text-sm font-semibold">
                🎾 가이드
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                하드코트 vs 클레이코트, 내 스타일에 맞는 코트는?
              </h1>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                테니스 실력보다 중요한 건, 나에게 맞는 코트를 아는 것입니다. 하드코트와 클레이코트의 차이, 그리고 당신의 스타일에 맞는 선택법을 코치가 알려드립니다.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>5분 읽기</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>2025.10.27</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  <span>공유하기</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-white border-gray-200 shadow-sm">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  📋 목차
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a href="#hard-court" className="text-gray-700 hover:text-emerald-600 transition-colors">
                      1. 하드코트 — 속도와 공격의 코트
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a href="#clay-court" className="text-gray-700 hover:text-emerald-600 transition-colors">
                      2. 클레이코트 — 인내와 전술의 코트
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a href="#style-selection" className="text-gray-700 hover:text-emerald-600 transition-colors">
                      3. 당신의 스타일로 선택하기
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors">
                      4. 자주 묻는 질문 (AEO)
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a href="#coach-story" className="text-gray-700 hover:text-emerald-600 transition-colors">
                      5. 코치의 이야기
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <a href="#related-content" className="text-gray-700 hover:text-emerald-600 transition-colors">
                      6. 함께 보면 좋은 콘텐츠
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <article className="prose prose-lg max-w-none">
            <FadeIn>
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  "나는 왜 클레이에서만 공이 자꾸 짧을까?"<br />
                  "하드코트에서는 잘 되던 스윙이 여기선 안 맞네…"<br />
                  이건 단순한 실력 문제가 아닙니다. <strong>코트의 특성</strong>이 다르기 때문이에요.<br />
                  오늘은 하드코트와 클레이코트의 차이, 그리고 당신에게 맞는 코트를 찾아드릴게요.
                </p>
                
                <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600 bg-emerald-50 py-4 rounded-r-lg">
                  "공은 같지만, 땅이 다르면 테니스는 완전히 다른 경기다." — 코치 민재
                </blockquote>
              </div>
            </FadeIn>

            <SlideUp>
              <div id="hard-court" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  🧱 1. 하드코트 — 속도와 공격의 코트
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  하드코트는 콘크리트 위에 얇은 아크릴층을 입힌 표면입니다. 반발력이 높아 <strong>공이 빠르고 바운드가 일정</strong>하죠.<br />
                  타이밍이 중요하고, 파워 히터에게 유리합니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-green-800 mb-2">✅ 장점</h3>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• 스피드 중심의 공격적인 플레이에 적합</li>
                        <li>• 슬라이스·플랫 구질에 강함</li>
                        <li>• 일정한 바운드로 초보자에게 익숙함</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-red-800 mb-2">❌ 단점</h3>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 충격이 커서 무릎·발목 피로 누적</li>
                        <li>• 여름철 열 반사 심함</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm">
                    💡 <strong className="text-gray-900">코치 팁:</strong> 하드코트에서는 스트링 텐션을 <strong>2lbs 낮춰</strong> 충격을 완화하세요.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    📍 <strong>GEO 예시:</strong> 서울 송파·용인·대전의 실내 하드코트는 주 2회 이상 플레이 시 50~52lbs가 적당합니다.
                  </p>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div id="clay-court" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  🌾 2. 클레이코트 — 인내와 전술의 코트
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  클레이코트(붉은 흙)는 공이 '묻히는' 느낌이 강합니다. 반발이 낮고, 바운드가 느려 <strong>랠리가 길어지는</strong> 특징이 있습니다.<br />
                  체력과 전략이 중요한 코트예요.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="bg-green-50 border-green-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-green-800 mb-2">✅ 장점</h3>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• 스핀·로브 플레이에 유리</li>
                        <li>• 관절 부담 적음</li>
                        <li>• 긴 랠리로 집중력 향상</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-red-50 border-red-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-red-800 mb-2">❌ 단점</h3>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• 공이 느려 파워형 선수는 답답함</li>
                        <li>• 습도에 따라 바운드 불안정</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                  <p className="text-gray-700 text-sm">
                    💬 <strong className="text-gray-900">코치 팁:</strong> 클레이에서는 텐션을 <strong>2lbs 높이고</strong>, 스핀량을 늘리는 그립을 써보세요.
                  </p>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    📍 <strong>GEO 예시:</strong> 제주·광주·부산 지역의 클레이코트는 습기가 많아 53~55lbs가 안정적입니다.
                  </p>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div id="style-selection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  ⚖️ 3. 당신의 스타일로 선택하기
                </h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">스타일</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">추천 코트</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">이유</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">파워형 (플랫, 강타 위주)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-emerald-600">하드코트</td>
                        <td className="border border-gray-300 px-4 py-2">반발력과 직선 궤적에 유리</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">안정형 (스핀, 긴 랠리 선호)</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-emerald-600">클레이코트</td>
                        <td className="border border-gray-300 px-4 py-2">여유로운 템포와 체력전 중심</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">초보자</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-emerald-600">하드코트</td>
                        <td className="border border-gray-300 px-4 py-2">예측 가능한 바운드, 빠른 학습</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">부상 이력자</td>
                        <td className="border border-gray-300 px-4 py-2 font-semibold text-emerald-600">클레이코트</td>
                        <td className="border border-gray-300 px-4 py-2">관절 부담 완화</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 text-sm">
                    🧠 <strong>요약:</strong> 당신의 코트는 스킬이 아니라 <strong>성향으로 결정</strong>됩니다.
                  </p>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div id="faq" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  ❓ 4. 자주 묻는 질문 (AEO)
                </h2>
                
                <div className="space-y-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">Q. 초보는 어떤 코트에서 연습하는 게 좋을까요?</h3>
                      <p className="text-blue-800">A. 하드코트가 좋습니다. 바운드가 일정하고, 감각을 익히기 쉽습니다.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-blue-900 mb-3">Q. 클레이코트에서 실수가 많은 이유는?</h3>
                      <p className="text-blue-800">A. 공의 반발이 늦어 타이밍이 늦기 때문입니다. 스윙 시작 타이밍을 0.3초 빨리 잡으세요.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div id="coach-story" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  💬 5. 코치의 이야기 — '땅이 당신의 스윙을 만든다'
                </h2>
                
                <Card className="bg-gradient-to-r from-emerald-50 to-sky-50 border-emerald-200">
                  <CardContent className="p-6">
                    <blockquote className="text-gray-700 leading-relaxed italic">
                      "한 제자가 있었습니다. 하드코트에서는 강타형이었는데, 클레이로 옮기자 자꾸 실수하더군요.<br />
                      그에게 '스윙 리듬을 바꾸지 말고, 한 박자 일찍 준비하라'고 했죠.<br />
                      한 달 후, 그는 클레이에서도 안정된 스트로크를 구사했습니다.<br />
                      환경에 적응한 순간, 그의 테니스는 완성됐습니다."
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </SlideUp>

            <SlideUp>
              <div id="related-content" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  🧩 6. 함께 보면 좋은 콘텐츠
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link href="/blog/string-tension-feel-guide">
                    <Card className="h-full bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                          스트링 텐션, 숫자보다 감각이 중요하다
                        </h3>
                        <p className="text-gray-600 text-sm">라켓 텐션은 숫자가 아닌 감각의 문제입니다.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/blog/string-replacement-guide">
                    <Card className="h-full bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                          처음 라켓 줄을 자를 때 꼭 알아야 할 3가지
                        </h3>
                        <p className="text-gray-600 text-sm">라켓 줄은 단순히 낡을 때 자르는 게 아닙니다.</p>
                      </CardContent>
                    </Card>
                  </Link>
                  
                  <Link href="/utility/injury-risk">
                    <Card className="h-full bg-white border-gray-200 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors mb-2">
                          테니스 부상 리스크 체크
                        </h3>
                        <p className="text-gray-600 text-sm">데이터 기반 부상 위험도 분석</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>
            </SlideUp>

            <SlideUp>
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  🏁 마무리 — 코트를 이해하면, 테니스가 달라진다
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  라켓보다, 그립보다, 코트가 당신의 플레이를 바꿉니다.<br />
                  <strong>하드에서 배우고, 클레이에서 완성하라.</strong><br />
                  당신의 발자국이 남는 곳이, 진짜 실력의 증거입니다.
                </p>
                
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                  <p className="text-emerald-800 text-sm">
                    ✨ <strong>다음 읽기:</strong> <Link href="/blog/racket-care-mistakes" className="underline hover:text-emerald-600">테니스 초보가 라켓을 망치는 5가지 관리 습관 😬</Link>
                  </p>
                </div>
                
                <div className="text-center">
                  <Button 
                    onClick={copyToClipboard}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    📤 링크 복사하기
                  </Button>
                </div>
              </div>
            </SlideUp>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <FadeIn>
            <Card className="bg-gradient-to-r from-emerald-50 to-sky-50 border-emerald-200 shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  더 나은 테니스를 위해
                </h2>
                <p className="text-gray-600 mb-6">
                  당신의 실력과 스타일에 맞는 맞춤형 가이드를 받아보세요
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      NTRP 실력 테스트
                    </Button>
                  </Link>
                  <Link href="/utility/string-tension">
                    <Button variant="outline" className="bg-white border-gray-300 hover:border-emerald-500 px-6 py-3">
                      <ArrowRight className="h-4 w-4 mr-2" />
                      스트링 텐션 계산기
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
