'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, Share2, AlertTriangle, Lightbulb, Target, Settings, Users } from 'lucide-react';

export default function CommonTennisRacketMistakes() {
  const blogData = {
    title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지 😱 (코치가 직접 교정해드립니다)",
    summary: "라켓은 단순한 장비가 아니라, 당신의 스윙을 기억하는 파트너입니다. 실수를 줄이고 몸에 맞는 라켓을 찾는 법, 코치가 직접 정리했습니다.",
    tags: ["테니스라켓", "라켓추천", "스트링텐션", "테니스장비", "NTRP"],
    slug: "common-tennis-racket-mistakes",
    category: "gear",
    meta_title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지 | 테니스프렌즈 블로그",
    meta_description: "테니스 초보와 아마추어가 라켓을 고를 때 가장 많이 하는 실수 5가지. 무게, 밸런스, 스트링 텐션 등 실전 기준으로 부상 없이 고르는 법을 정리했습니다.",
    created_at: "2025-01-25",
    updated_at: "2025-01-25",
    read_time: "8분",
    author: "테니스프렌즈 코치팀"
  };

  const mistakes = [
    {
      title: "가벼운 라켓이 편하다고 착각한다",
      icon: AlertTriangle,
      description: "가벼운 라켓은 처음엔 쉬워 보이지만, 임팩트 순간의 안정성이 떨어집니다. 팔 힘으로 버티려다 어깨와 팔꿈치에 피로가 쌓이죠.",
      tip: "여성·초보 285g 전후, 남성·중급자 295~305g 권장. '무게'보다 '리듬'을 기준으로 잡으세요.",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "밸런스는 눈에 안 보이니 무시한다",
      icon: Target,
      description: "라켓의 밸런스는 파워와 컨트롤을 나누는 경계선이에요. 헤드라이트는 손의 컨트롤, 헤드헤비는 공의 추진력.",
      tip: "초보는 중립형(320mm 전후)을 기준으로, 이후 자신의 플레이 스타일에 맞춰 조정하세요.",
      color: "bg-white border-gray-200"
    },
    {
      title: "스트링 텐션은 '기본값이면 괜찮겠지?'",
      icon: Settings,
      description: "55lbs는 '모두를 위한 평균값'이지 '당신을 위한 세팅'이 아닙니다. 스윙 속도, 체력, 공감각에 따라 텐션은 달라져야 해요.",
      tip: "초보 48~50lbs, 중급자 52~55lbs. 낮을수록 파워, 높을수록 컨트롤.",
      color: "bg-white border-gray-200"
    },
    {
      title: "그립 사이즈를 감으로 고른다",
      icon: Users,
      description: "라켓을 잡을 때 손가락 하나가 그립과 손바닥 사이에 들어가면 적당합니다. 너무 작으면 손목 통증, 너무 크면 스윙 타이밍이 느려집니다.",
      tip: "그립은 라켓보다 중요합니다. 손이 편해야 몸이 움직입니다.",
      color: "bg-white border-gray-200"
    },
    {
      title: "환경이 라켓을 바꾼다는 걸 모른다",
      icon: Lightbulb,
      description: "하드코트, 클레이, 실내와 야외. 환경이 바뀌면 라켓 반응도 달라집니다. 습도와 온도는 텐션을 무너뜨리고, 공의 반발력을 바꿔요.",
      tip: "여름엔 텐션을 2~3lbs 낮추고, 겨울엔 2lbs 높이세요. 작은 조정이 경기 결과를 바꿉니다.",
      color: "bg-white border-gray-200"
    }
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
      title: "테니스 엘보우, 예방이 최선입니다",
      href: "/blog/tennis-elbow-prevention",
      category: "건강 가이드"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://tennisfriends.co.kr/blog/common-tennis-racket-mistakes');
    alert('공유 링크가 복사되었습니다 📎');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4">
              장비 가이드
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
                <Tag className="h-4 w-4" />
                <span>{blogData.read_time} 읽기</span>
              </div>
              <div className="flex items-center gap-2">
                <span>작성자: <strong className="text-gray-900">{blogData.author}</strong></span>
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
              variant="outline" 
              className="bg-white border-gray-300 hover:border-orange-500 px-6 py-3 text-base font-semibold focus-ring"
              onClick={copyToClipboard}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎾 라켓 선택, 이렇게 시작하세요</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                라켓을 처음 잡았을 때, 그 설렘을 기억하시나요? 🎾 하지만 시간이 지날수록 
                '왜 공이 이렇게 안 맞지?' 하는 의문이 생깁니다. 대부분의 초보는 실력이 아니라 
                <strong className="text-gray-900">라켓 선택에서부터</strong> 방향이 엇나갑습니다.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                오늘은 코트 위에서 가장 많이 보는 다섯 가지 라켓 선택 실수, 그리고 코치들이 직접 제시하는 교정법을 알려드릴게요.
              </p>

              <hr className="border-gray-200 my-8" />

              {/* 실수들 */}
              <div className="space-y-8 mb-8">
                {mistakes.map((mistake, index) => {
                  const IconComponent = mistake.icon;
                  return (
                    <div key={index} className={`${mistake.color} border rounded-xl p-6`}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <IconComponent className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            ⚖️ {index + 1}. {mistake.title}
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {mistake.description}
                          </p>
                          <div className="bg-white border border-orange-200 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-orange-900 mb-1">코치의 교정법</p>
                                <p className="text-gray-700 text-sm leading-relaxed">{mistake.tip}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 관련 도구 링크 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">🛠️ 관련 도구</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/utility/string-tension">
                    <div className="bg-white border border-blue-300 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-blue-900 mb-1">스트링 텐션 계산기</h4>
                      <p className="text-blue-800 text-sm">맞춤형 텐션 추천</p>
                    </div>
                  </Link>
                  <Link href="/utility/ntrp-test">
                    <div className="bg-white border border-blue-300 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-blue-900 mb-1">NTRP 실력 테스트</h4>
                      <p className="text-blue-800 text-sm">나의 실력 확인</p>
                    </div>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <div className="bg-white border border-blue-300 rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-blue-900 mb-1">부상 리스크 체크</h4>
                      <p className="text-blue-800 text-sm">안전한 플레이</p>
                    </div>
                  </Link>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 코치 이야기 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">💬 코치의 현장 이야기</h3>
                <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                  "한 달 전, 한 제자가 어깨 통증으로 레슨을 중단했어요. 알고 보니 270g 라켓을 쓰고 있었죠. 
                  무게를 295g으로 바꾸자 통증이 사라졌어요. 기술보다 <strong className="text-gray-900">장비를 이해하는 순간</strong>, 
                  그 사람의 테니스가 달라집니다."
                </blockquote>
                <p className="text-gray-700 font-semibold">— 서울 테니스 아카데미 김코치</p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* FAQ 섹션 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">❓ 자주 묻는 질문</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 라켓 무게는 얼마나 차이나야 느껴지나요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 10g 이상 차이나면 확실히 느껴집니다. 하지만 중요한 건 무게보다 밸런스입니다. 
                    같은 무게라도 헤드라이트와 헤드헤비는 완전히 다른 느낌을 줍니다.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 스트링 텐션을 자주 바꿔도 괜찮을까요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 괜찮습니다. 단, 2~3lbs 이내에서 점진적으로 조정하세요. 급격한 변화는 팔에 부담을 줍니다. 
                    계절에 따라 조정하는 것도 좋은 방법입니다.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 서울 겨울철 실내코트에서는 어떻게 조정해야 하나요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 실내코트는 온도가 일정하고 바람이 없어서 텐션을 2lbs 높이는 것이 좋습니다. 
                    공의 반발력이 좋아지므로 컨트롤을 위해 조금 더 높은 텐션이 필요합니다.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 관련 글 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {relatedPosts.map((post, index) => (
                  <Link key={index} href={post.href}>
                    <div className="h-full bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-all duration-300 cursor-pointer group">
                      <Badge className="bg-orange-100 text-orange-800 px-2 py-1 text-xs mb-2">
                        {post.category}
                      </Badge>
                      <h4 className="font-bold text-gray-900 text-base group-hover:text-orange-600 transition-colors leading-tight">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 마무리 */}
              <div className="text-center bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 당신의 손이 답을 알고 있다</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  라켓은 장비가 아니라, 당신의 스윙을 기억하는 파트너입니다.<br />
                  누가 쓴 라켓인지보다 <strong className="text-gray-900">내 손이 편한가</strong>, 그게 전부예요.<br />
                  한 번쯤 라켓을 바꿨을 때의 느낌을 기록해두세요. 그것이 당신의 성장일지입니다.
                </p>
                <div className="text-orange-600 font-semibold">
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
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                🎾 실력 테스트 시작하기
              </Button>
            </Link>
            <Link href="/utility/string-tension">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-orange-500 px-8 py-3 text-lg font-semibold focus-ring">
                ⚙️ 스트링 계산기
              </Button>
            </Link>
            <Link href="/utility/injury-risk">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-orange-500 px-8 py-3 text-lg font-semibold focus-ring">
                🛡️ 부상 리스크 체크
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
