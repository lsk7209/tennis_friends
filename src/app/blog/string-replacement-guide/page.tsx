'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Tag, Share2, AlertTriangle, Lightbulb, Target, Settings, MapPin, Brain, Clock } from 'lucide-react';

export default function StringReplacementGuide() {
  const blogData = {
    title: "처음 라켓 줄을 자를 때 꼭 알아야 할 3가지 ⚙️ (코치가 말하는 교체 시점)",
    summary: "라켓 줄은 단순히 낡을 때 자르는 게 아닙니다. 텐션이 죽고, 반발이 줄어드는 순간이 진짜 교체 시점입니다. 코치가 직접 알려주는 3가지 실전 기준으로 확인하세요.",
    tags: ["테니스스트링", "스트링교체", "테니스라켓", "스트링텐션", "테니스장비"],
    slug: "string-replacement-guide",
    category: "gear",
    meta_title: "처음 라켓 줄을 자를 때 꼭 알아야 할 3가지 ⚙️ | 테니스프렌즈 블로그",
    meta_description: "테니스 라켓 스트링은 언제 교체해야 할까? 텐션 복원력, 손끝의 반발감, 경기 감각을 기준으로 교체 시기를 코치가 직접 알려드립니다.",
    created_at: "2025-01-25",
    updated_at: "2025-01-25",
    read_time: "6분",
    author: "테니스프렌즈 코치팀"
  };

  const replacementGuide = [
    {
      title: "텐션이 줄었는지 '소리'로 확인하라",
      icon: AlertTriangle,
      description: "라켓을 손가락으로 가볍게 튕겨보세요. 처음엔 '팡!' 하던 소리가 어느 날 '퉁…'으로 바뀌면, 이미 텐션이 절반 이하로 떨어진 상태입니다.",
      tip: "매주 플레이하는 기준으로 6~8주마다 교체하세요.",
      data: "스트링 장력은 2주 사용 시 평균 10~15% 감소",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "반발감이 줄면 경기력이 먼저 무너진다",
      icon: Target,
      description: "텐션이 떨어지면 공이 라켓에 머무는 시간이 길어집니다. 그 결과 타이밍이 늦고, 컨트롤이 흔들립니다.",
      tip: "'볼이 늦게 튕긴다'는 느낌이 들면, 그게 바로 교체 시그널입니다.",
      data: "라켓이 '밀리는 느낌'이 나면 이미 텐션 복원력을 잃은 상태",
      color: "bg-white border-gray-200"
    },
    {
      title: "손의 감각이 달라질 때가 진짜 교체 시점이다",
      icon: Brain,
      description: "라켓은 숫자보다 감각이 더 정확합니다. 공이 손에 '쫀득하게' 붙는 느낌이 사라지고, 단단하거나 묘하게 진동이 세게 느껴질 때, 줄이 피로해진 겁니다.",
      tip: "손끝의 감각이 '차가워졌다'면 줄의 탄성이 식은 겁니다.",
      data: "공이 손에 붙는 감각 변화가 가장 정확한 교체 신호",
      color: "bg-white border-gray-200"
    }
  ];

  const regionalSettings = [
    {
      location: "서울",
      period: "6주",
      reason: "실내 하드코트 기준",
      environment: "건조한 겨울 환경",
      color: "bg-gray-100"
    },
    {
      location: "부산",
      period: "4~5주",
      reason: "해안 습도 영향",
      environment: "습도 높은 해안 환경",
      color: "bg-blue-100"
    },
    {
      location: "제주",
      period: "5~6주",
      reason: "클레이코트 환경",
      environment: "클레이코트 특성",
      color: "bg-green-100"
    }
  ];

  const relatedPosts = [
    {
      title: "스트링 텐션, 숫자보다 감각이 중요하다",
      href: "/blog/string-tension-feel-guide",
      category: "장비 가이드"
    },
    {
      title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지",
      href: "/blog/common-tennis-racket-mistakes",
      category: "장비 가이드"
    },
    {
      title: "테니스 엘보우, 예방이 최선입니다",
      href: "/blog/tennis-elbow-prevention",
      category: "건강 가이드"
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText('https://tennisfriends.co.kr/blog/string-replacement-guide');
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🎾 줄은 소리보다 감각으로 먼저 끊어진다</h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "줄이 끊어지면 갈면 되죠?" 많은 초보가 이렇게 말하지만, 코치들은 고개를 젓습니다.
              </p>

              <p className="text-gray-700 mb-6 leading-relaxed">
                스트링은 <strong className="text-gray-900">끊어질 때가 아니라, 반발이 사라질 때 교체해야</strong> 합니다.
                오늘은 코치들이 실제로 권하는 '줄 교체 시점' 3가지를 알려드릴게요.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <blockquote className="text-gray-700 italic text-center">
                  "줄은 소리보다 감각으로 먼저 끊어진다." — 베테랑 코치의 말
                </blockquote>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 가이드 섹션들 */}
              <div className="space-y-8 mb-8">
                {replacementGuide.map((guide, index) => {
                  const IconComponent = guide.icon;
                  return (
                    <div key={index} className={`${guide.color} border rounded-xl p-6`}>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <IconComponent className="h-6 w-6 text-orange-600" />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            ⚙️ {index + 1}. {guide.title}
                          </h3>
                          <p className="text-gray-700 mb-4 leading-relaxed">
                            {guide.description}
                          </p>
                          <div className="bg-white border border-orange-200 rounded-lg p-4 mb-4">
                            <div className="flex items-start gap-2">
                              <Lightbulb className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-semibold text-orange-900 mb-1">코치의 팁</p>
                                <p className="text-gray-700 text-sm leading-relaxed">{guide.tip}</p>
                              </div>
                            </div>
                          </div>
                          <div className="bg-gray-100 border border-gray-200 rounded-lg p-3">
                            <div className="flex items-start gap-2">
                              <Settings className="h-4 w-4 text-gray-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-600 text-xs leading-relaxed">{guide.data}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 지역별 교체 주기 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">🌡️ 지역과 계절에 따른 교체 주기</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                한국의 기후는 라켓에 직접적인 영향을 줍니다. 서울의 겨울은 건조해 스트링이 빠르게 경화되고, 
                부산·제주는 습기로 텐션이 쉽게 떨어집니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {regionalSettings.map((setting, index) => (
                  <div key={index} className={`${setting.color} border border-gray-200 rounded-lg p-4`}>
                    <h4 className="font-bold text-gray-900 mb-2">{setting.location}</h4>
                    <div className="text-2xl font-bold text-orange-600 mb-2">{setting.period}</div>
                    <p className="text-gray-700 text-sm mb-1">{setting.reason}</p>
                    <p className="text-gray-600 text-xs">{setting.environment}</p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 관련 도구 링크 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">🛠️ 관련 도구</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link href="/utility/string-tension">
                    <div className="bg-white border border-orange-300 rounded-lg p-4 hover:border-orange-500 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-orange-900 mb-1">스트링 텐션 계산기</h4>
                      <p className="text-orange-800 text-sm">맞춤형 텐션 추천</p>
                    </div>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <div className="bg-white border border-orange-300 rounded-lg p-4 hover:border-orange-500 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-orange-900 mb-1">부상 리스크 체크</h4>
                      <p className="text-orange-800 text-sm">안전한 플레이</p>
                    </div>
                  </Link>
                  <Link href="/utility/ntrp-test">
                    <div className="bg-white border border-orange-300 rounded-lg p-4 hover:border-orange-500 transition-colors cursor-pointer">
                      <h4 className="font-semibold text-orange-900 mb-1">NTRP 실력 테스트</h4>
                      <p className="text-orange-800 text-sm">나의 실력 확인</p>
                    </div>
                  </Link>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* FAQ 섹션 */}
              <h3 className="text-xl font-bold text-gray-900 mb-6">❓ 자주 묻는 질문</h3>
              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 스트링이 끊어지지 않았는데도 갈아야 하나요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 네. 텐션 복원력이 50% 이하로 떨어지면, 공의 반발력과 방향성이 불안정해집니다.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 교체 주기는 사용 빈도에 따라 달라지나요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 그렇습니다. 주 3회 이상 플레이한다면 6주, 주 1회 이하라면 10주를 기준으로 잡으세요.
                  </p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Q. 겨울철에는 교체 주기를 단축해야 하나요?</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    A. 네. 겨울철 건조한 환경에서는 스트링이 빠르게 경화되므로 1-2주 정도 단축하는 것이 좋습니다.
                  </p>
                </div>
              </div>

              <hr className="border-gray-200 my-8" />

              {/* 코치 이야기 */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">💬 코치의 이야기 — "라켓은 당신보다 먼저 지칩니다."</h3>
                <blockquote className="text-gray-700 leading-relaxed italic mb-4">
                  "한 제자가 있었어요. 줄이 멀쩡하다고 교체를 미루더군요. 어느 날 경기 중 손목 통증을 호소했습니다. 
                  줄을 잘라보니, 내부 섬유가 갈라져 있었죠. 새 줄로 교체하자 통증이 사라졌습니다. 
                  장비를 아끼는 건 좋지만, 몸을 지키는 게 먼저입니다."
                </blockquote>
                <p className="text-orange-900 font-semibold">— 서울 테니스 아카데미 김코치</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 줄은 끊어지기 전에 교체하라</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  스트링은 눈에 보이지 않게 늙습니다.<br />
                  끊어지기 전, 손이 피로해지기 전, 경기감이 사라지기 전에 미리 바꿔주세요.<br />
                  <strong className="text-gray-900">줄 하나로 경기력이 바뀌는 순간, 당신의 테니스도 달라집니다.</strong>
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
            <Link href="/utility/string-tension">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                ⚙️ 스트링 계산기
              </Button>
            </Link>
            <Link href="/utility/ntrp-test">
              <Button variant="outline" className="bg-white border-gray-300 hover:border-orange-500 px-8 py-3 text-lg font-semibold focus-ring">
                🎾 실력 테스트
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
