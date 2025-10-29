'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, Share2, AlertTriangle, Lightbulb, Target, Settings, MapPin, Brain } from 'lucide-react';

export default function StringTensionFeelGuide() {
  const blogData = {
    title: "스트링 텐션, 숫자보다 감각이 중요하다 🎾 (55lbs의 함정)",
    summary: "라켓 텐션은 숫자가 아닌 감각의 문제입니다. 스윙 리듬과 타점 타이밍에 맞춰야 부상 없이 실력을 올릴 수 있습니다. 코치가 직접 설명하는 '55lbs의 함정'을 함께 알아보세요.",
    tags: ["스트링텐션", "테니스라켓", "테니스장비", "테니스초보", "NTRP"],
    slug: "string-tension-feel-guide",
    category: "gear",
    meta_title: "스트링 텐션, 숫자보다 감각이 중요하다 🎾 (55lbs의 함정) | 테니스프렌즈 블로그",
    meta_description: "테니스 라켓 텐션은 숫자보다 감각이 중요합니다. 55lbs의 함정과 코치가 추천하는 이상적인 텐션 설정법, 초보자 실전 가이드를 정리했습니다.",
    created_at: "2025-01-25",
    updated_at: "2025-01-25",
    read_time: "7분",
    author: "테니스프렌즈 코치팀"
  };

  const tensionGuide = [
    {
      title: "55lbs의 함정 — 왜 대부분의 초보는 실패할까?",
      icon: AlertTriangle,
      description: "매장에서 추천하는 55lbs는 '모두를 위한 평균값'일 뿐, '나를 위한 맞춤값'이 아닙니다. 스윙이 느린 초보자가 55lbs로 세팅하면 공이 밀리고, 스윙이 빠른 사람은 컨트롤이 날아가죠.",
      tip: "스윙이 빠른 중급자 → 52~56lbs, 스윙이 느린 초보 → 45~50lbs",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "감각으로 읽는 텐션 — 손끝이 기억하는 데이터",
      icon: Brain,
      description: "텐션은 숫자로만 설명할 수 없습니다. 공이 맞는 순간의 '딱' 하는 느낌, 라켓이 손끝을 밀어주는 탄력, 그리고 타점의 진동이 바로 진짜 피드백입니다.",
      tip: "공이 맞는 순간 '둔탁'하지 않고 '쫀득'하게 느껴진다면 텐션이 몸에 맞는 겁니다.",
      color: "bg-white border-gray-200"
    },
    {
      title: "코트별로 텐션을 다르게 — 지역별 실전 가이드",
      icon: MapPin,
      description: "한국은 계절과 지역에 따라 코트 환경이 극단적으로 바뀝니다. 서울·부산·제주는 모두 기후·습도·온도가 달라, 텐션 세팅도 달라야 합니다.",
      tip: "서울 실내 하드코트: 53~55lbs, 부산 해안 실외코트: 49~52lbs, 제주 클레이코트: 46~50lbs",
      color: "bg-white border-gray-200"
    },
    {
      title: "감각을 훈련하는 3단계 루틴",
      icon: Target,
      description: "텐션은 계산이 아니라 '기억'입니다. 두 개의 라켓을 준비하고, 텐션을 2lbs씩 다르게 세팅한 후 같은 공으로 연속 10회 스윙해보세요.",
      tip: "느낌이 '가볍게 맞는 순간'을 기억하세요. 그게 당신의 최적 텐션입니다.",
      color: "bg-white border-gray-200"
    }
  ];

  const regionalSettings = [
    {
      location: "서울 실내 하드코트",
      tension: "53~55lbs",
      reason: "컨트롤 중시",
      color: "bg-gray-100"
    },
    {
      location: "부산 해안 실외코트",
      tension: "49~52lbs",
      reason: "습도 높아 반발력 보정",
      color: "bg-blue-100"
    },
    {
      location: "제주 클레이코트",
      tension: "46~50lbs",
      reason: "공이 묻히므로 파워 확보",
      color: "bg-green-100"
    }
  ];

  const relatedPosts = [
    {
      title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지",
      href: "/blog/common-tennis-racket-mistakes",
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
    navigator.clipboard.writeText('https://tennisfriends.co.kr/blog/string-tension-feel-guide');
    alert('공유 링크가 복사되었습니다 📎');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-4xl container-padding">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4">
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
              className="bg-white border-gray-300 hover:border-blue-500 px-6 py-3 text-base font-semibold focus-ring"
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎾 손의 언어를 배우는 라켓</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                처음 라켓을 잡을 때 가장 많이 듣는 말이 있습니다. "55파운드면 괜찮아요." 하지만 정말 괜찮을까요? 🤔
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                실제로 많은 초보자들이 <strong className="text-gray-900">숫자에 속고 손의 감각을 잃습니다.</strong> 
                라켓의 텐션은 수치가 아니라 스윙 리듬과 타점 타이밍에 맞춰야 진짜 내 것이 됩니다.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <blockquote className="text-gray-700 italic text-center">
                  "라켓은 손의 언어를 배운다." — 현직 코치의 말
                </blockquote>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 가이드 섹션들 */}
              <div className="space-y-8 mb-8">
                {tensionGuide.map((guide, index) => {
                  const IconComponent = guide.icon;
                  return (
                    <div key={index} className={`${guide.color} border rounded-xl p-6`}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <IconComponent className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            ⚙️ {index + 1}. {guide.title}
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {guide.description}
                          </p>
                          <div className="bg-white border border-blue-200 rounded-lg p-4">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-blue-900 mb-1">코치의 조언</p>
                                <p className="text-gray-700 text-sm leading-relaxed">{guide.tip}</p>
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

              {/* 지역별 텐션 설정 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">📍 지역별 추천 텐션 조정법</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {regionalSettings.map((setting, index) => (
                  <div key={index} className={`${setting.color} border border-gray-200 rounded-lg p-4`}>
                    <h4 className="font-bold text-gray-900 mb-2">{setting.location}</h4>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{setting.tension}</div>
                    <p className="text-gray-700 text-sm">{setting.reason}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                <div className="flex items-start gap-2">
                  <Settings className="h-5 w-5 text-gray-700 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">계절별 조정 팁</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      여름엔 2~3lbs 낮추고, 겨울엔 2lbs 높이세요. 작은 조정이 경기력 차이를 만듭니다.
                    </p>
                  </div>
                </div>
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

              {/* FAQ 섹션 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">❓ 자주 묻는 질문</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 텐션을 자주 바꿔도 괜찮을까요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 괜찮습니다. 단, 2~3lbs 단위로 점진적으로 조정해야 합니다. 급격한 변화는 팔꿈치에 부담을 줍니다.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 시즌별로 텐션을 조정해야 하나요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 네. 여름에는 2~3lbs 낮추고, 겨울엔 2lbs 높이세요. 날씨 변화가 스트링의 장력에 직접 영향을 줍니다.
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

              {/* 코치 이야기 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">💬 코치의 이야기 — 손끝이 가르쳐준 진짜 기준</h3>
                <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                  "한 제자가 있었어요. 늘 55lbs로 세팅했는데, 공이 자꾸 뜨더라고요. 텐션을 48lbs로 낮췄더니 스윙이 안정됐습니다. 
                  그때 그 제자가 했던 말이 아직도 기억나요. '이제 라켓이 아니라 손이 친다는 게 무슨 뜻인지 알겠어요.'"
                </blockquote>
                <p className="text-gray-700 font-semibold">— 서울 테니스 아카데미 김코치</p>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 관련 글 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {relatedPosts.map((post, index) => (
                  <Link key={index} href={post.href}>
                    <div className="h-full bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-all duration-300 cursor-pointer group">
                      <Badge className="bg-blue-100 text-blue-800 px-2 py-1 text-xs mb-2">
                        {post.category}
                      </Badge>
                      <h4 className="font-bold text-gray-900 text-base group-hover:text-blue-600 transition-colors leading-tight">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 마무리 */}
              <div className="text-center bg-gray-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 숫자가 아닌 손의 대화로 테니스를 하라</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  라켓의 텐션은 단순한 수치가 아닙니다. 당신의 스윙 리듬, 손의 기억, 타점의 타이밍이 모여 만들어낸 결과입니다.<br />
                  <strong className="text-gray-900">55lbs의 함정에서 벗어나, 손이 들려주는 이야기에 귀 기울이세요.</strong><br />
                  그게 진짜 성장의 시작입니다.
                </p>
                <div className="text-blue-600 font-semibold">
                  ✨ 다음 읽기: <Link href="/blog/common-tennis-racket-mistakes" className="hover:underline">테니스 라켓 고를 때 가장 많이 하는 실수 5가지 😱</Link>
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
            <Link href="/utility/string-tension">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                ⚙️ 스트링 계산기
              </Button>
            </Link>
            <Link href="/utility/ntrp-test">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold focus-ring">
                🎾 실력 테스트
              </Button>
            </Link>
            <Link href="/utility/injury-risk">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold focus-ring">
                🛡️ 부상 리스크 체크
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}