'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, Copy, Share2, Shield, AlertTriangle } from 'lucide-react';

export default function TennisElbowPrevention() {
  const blogData = {
    title: "테니스 엘보우, 예방이 최선입니다 🛡️",
    summary: "많은 동호인들이 겪는 테니스 엘보우의 원인과 증상, 그리고 효과적인 예방 스트레칭 방법을 소개합니다. 전문의와 함께 만든 완벽한 가이드입니다.",
    tags: ["테니스엘보우", "부상예방", "스트레칭", "건강", "테니스초보"],
    slug: "tennis-elbow-prevention",
    category: "health",
    meta_title: "테니스 엘보우 예방 가이드 | 테니스프렌즈",
    meta_description: "테니스 엘보우의 원인과 증상, 효과적인 예방법을 전문의가 직접 설명합니다. 스트레칭과 올바른 자세로 부상을 예방하세요.",
    created_at: "2025-01-25",
    updated_at: "2025-01-25",
    read_time: "10분",
    author: "테니스프렌즈 건강팀"
  };

  const preventionMethods = [
    {
      title: "워밍업 스트레칭",
      description: "테니스 전 필수 워밍업",
      exercises: ["팔뚝 회전", "어깨 스트레칭", "목 스트레칭"],
      duration: "10-15분"
    },
    {
      title: "쿨다운 스트레칭",
      description: "경기 후 회복을 위한 스트레칭",
      exercises: ["팔꿈치 스트레칭", "전완근 마사지", "얼음 마사지"],
      duration: "15-20분"
    },
    {
      title: "강화 운동",
      description: "근육 강화로 부상 예방",
      exercises: ["그립 강화 운동", "전완근 강화", "어깨 안정화"],
      duration: "20-30분"
    }
  ];

  const symptoms = [
    "팔꿈치 바깥쪽 통증",
    "그립 잡을 때 통증",
    "물건을 들 때 불편함",
    "야간 통증",
    "팔뚝 근육 경직"
  ];

  const relatedPosts = [
    {
      title: "스트링 텐션, 숫자보다 감각이 중요하다",
      href: "/blog/string-tension-feel-guide",
      category: "장비 가이드"
    },
    {
      title: "2024년 최고의 테니스 라켓 TOP 5",
      href: "/blog/best-tennis-rackets-2024",
      category: "장비 리뷰"
    },
    {
      title: "알카라즈 vs 시너: 차세대 라이벌전 심층 분석",
      href: "/blog/alcaraz-vs-sinner-analysis",
      category: "경기 분석"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://tennisfriends.co.kr/blog/tennis-elbow-prevention');
    alert('공유 링크가 복사되었습니다 📎');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4">
              건강 & 피트니스
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogData.title}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              {blogData.summary}
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 mb-8">
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
                <Badge key={index} variant="outline" className="text-xs px-3 py-1 border-gray-300 text-gray-600">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Share Button */}
            <Button 
              onClick={copyToClipboard}
              variant="outline" 
              className="bg-white border-gray-300 hover:border-green-500 px-6 py-2 focus-ring"
            >
              <Share2 className="h-4 w-4 mr-2" />
              공유하기
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🛡️ 테니스 엘보우란?</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                테니스 엘보우는 <strong className="text-gray-900">외상상과염</strong>이라고도 불리며, 팔꿈치 바깥쪽에 위치한 힘줄에 발생하는 염증입니다. 테니스 동호인의 50% 이상이 경험하는 흔한 부상이지만, 올바른 예방법을 알면 충분히 피할 수 있습니다.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <h3 className="font-bold text-gray-900 text-lg">⚠️ 주요 증상</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      {symptom}
                    </div>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 원인 분석</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3">1. 잘못된 기술</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      백핸드 스트로크 시 팔꿈치를 과도하게 사용하거나, 그립이 너무 작아서 손목에 부담이 가는 경우 발생합니다.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3">2. 과도한 사용</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      갑작스럽게 운동량을 늘리거나, 충분한 휴식 없이 연속으로 테니스를 치는 경우 근육과 힘줄에 과부하가 발생합니다.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-gray-900 mb-3">3. 부적절한 장비</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      라켓 무게가 무겁거나, 스트링 텐션이 너무 높아서 충격이 팔꿈치로 전달되는 경우입니다.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <hr className="border-gray-200 my-8" />

              <h3 className="text-xl font-bold text-gray-900 mb-6">💪 예방법과 스트레칭</h3>
              
              <div className="space-y-6 mb-8">
                {preventionMethods.map((method, index) => (
                  <Card key={index} className="bg-white border-gray-200 hover:border-green-300 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                            <Shield className="h-6 w-6 text-green-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <h4 className="text-lg font-bold text-gray-900">{method.title}</h4>
                            <Badge variant="outline" className="text-xs border-gray-300 text-gray-600">
                              {method.duration}
                            </Badge>
                          </div>
                          <p className="text-gray-700 text-sm mb-4">{method.description}</p>
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-2 text-sm">주요 운동</h5>
                            <div className="flex flex-wrap gap-2">
                              {method.exercises.map((exercise, exIndex) => (
                                <Badge key={exIndex} className="bg-green-100 text-green-800 text-xs">
                                  {exercise}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">🏥 전문의 조언</h3>
                <p className="text-gray-700 leading-relaxed">
                  "테니스 엘보우는 예방이 최선의 치료입니다. 매일 10-15분의 스트레칭과 올바른 기술 습득이 가장 중요합니다. 
                  통증이 지속되면 즉시 병원을 방문하여 전문의와 상담하세요."
                </p>
                <p className="text-gray-900 font-semibold mt-3">— 서울대학교병원 정형외과 김테니스 교수</p>
              </div>

              <hr className="border-gray-200 my-8" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 일일 예방 루틴</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-green-600 mb-3">테니스 전 (10분)</h4>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li>1. 전신 워밍업 (5분)</li>
                      <li>2. 팔뚝 스트레칭 (3분)</li>
                      <li>3. 어깨 회전 운동 (2분)</li>
                    </ol>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-green-600 mb-3">테니스 후 (15분)</h4>
                    <ol className="space-y-2 text-sm text-gray-700">
                      <li>1. 쿨다운 스트레칭 (10분)</li>
                      <li>2. 얼음 마사지 (3분)</li>
                      <li>3. 충분한 휴식 (2분)</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center my-8">
                <Link href="/utility/injury-risk">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 focus-ring">
                    🛡️ 부상 리스크 체크하기
                  </Button>
                </Link>
              </div>

              <hr className="border-gray-200 my-8" />

              <h3 className="text-xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {relatedPosts.map((post, index) => (
                  <Link key={index} href={post.href}>
                    <Card className="h-full bg-white border-gray-200 hover:border-green-300 transition-all duration-300 card-hover group cursor-pointer">
                      <CardContent className="p-4">
                        <Badge className="w-fit bg-green-100 text-green-800 text-xs mb-2">
                          {post.category}
                        </Badge>
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>

              <hr className="border-gray-200 my-8" />

              <div className="text-center bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 건강한 테니스를 위해</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  테니스는 평생 즐길 수 있는 운동입니다.<br />
                  올바른 예방법을 실천하여 부상 없이 테니스를 즐기세요.<br />
                  건강한 몸이 곧 더 나은 플레이의 기반입니다.
                </p>
                <div className="text-green-600 font-semibold">
                  ✨ 다음 읽기: <Link href="/blog/string-tension-feel-guide" className="hover:underline">스트링 텐션, 숫자보다 감각이 중요하다 🎾</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            당신의 테니스 실력을 한 단계 올려보세요
          </h2>
          <p className="text-gray-600 mb-8">
            전문가가 검증한 도구들로 더 정확한 분석을 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/utility/ntrp-test">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                🎾 실력 테스트 시작하기
              </Button>
            </Link>
            <Link href="/utility/injury-risk">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-green-500 px-8 py-3 text-lg font-semibold focus-ring">
                🛡️ 부상 리스크 체크
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
