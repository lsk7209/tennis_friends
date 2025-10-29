'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Scale, 
  Zap, 
  Target, 
  Shield, 
  Lightbulb,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Share2
} from 'lucide-react';
import { FadeIn, SlideUp, StaggeredAnimation, StaggeredItem } from '@/components/ScrollAnimation';

export default function RacketWeightStyles() {
  const weightStyles = [
    {
      weight: "285g",
      title: "빠르고 가벼운 '스피드형' 플레이어",
      emoji: "🪶",
      icon: Zap,
      color: "bg-blue-50 border-blue-200",
      features: [
        "빠른 스윙과 리턴에 유리",
        "타점이 흔들릴 수 있음", 
        "긴 랠리에서는 손목 피로 적음"
      ],
      description: "초보자와 여성 플레이어에게 추천되는 '경량형 라켓'입니다. 스윙 속도가 빠르고, 피로도가 적지만 반발력이 일정하지 않아 컨트롤이 어렵습니다."
    },
    {
      weight: "295g",
      title: "밸런스 중심의 '올라운드형'",
      emoji: "⚙️",
      icon: Target,
      color: "bg-green-50 border-green-200",
      features: [
        "파워형이 아닌 정확성 중심 플레이어에게 적합",
        "하드코트·실내코트 모두 대응 가능",
        "NTRP 3.0~4.0 플레이어에게 권장"
      ],
      description: "가장 많이 쓰이는 무게입니다. 힘과 컨트롤이 조화를 이루며, 초중급자에게 이상적이에요."
    },
    {
      weight: "305g",
      title: "묵직한 파워의 '공격형' 플레이어",
      emoji: "🧱",
      icon: Shield,
      color: "bg-orange-50 border-orange-200",
      features: [
        "무게감으로 공을 눌러치는 느낌",
        "플랫·하드히터에게 유리",
        "긴 경기에서 체력 소모 ↑"
      ],
      description: "무게가 올라가면 스윙이 느려지지만, 임팩트가 훨씬 안정적입니다. 하체 힘과 회전력이 좋은 중급 이상 플레이어에게 적합합니다."
    }
  ];

  const comparisonData = [
    {
      weight: "285g",
      style: "가볍고 빠름",
      pros: ["반응속도", "피로도↓"],
      cons: ["컨트롤 어려움"]
    },
    {
      weight: "295g", 
      style: "안정된 중간값",
      pros: ["파워·정확도 균형"],
      cons: ["개성 약함"]
    },
    {
      weight: "305g",
      style: "묵직하고 단단함", 
      pros: ["파워", "타구 안정성↑"],
      cons: ["피로도↑"]
    }
  ];

  const faqs = [
    {
      question: "무거운 라켓을 쓰면 공이 더 잘 나가나요?",
      answer: "초반엔 그렇지만, 컨트롤이 어렵습니다. 본인 체력에 맞는 무게가 최선입니다."
    },
    {
      question: "초보도 300g 이상 라켓을 써도 되나요?",
      answer: "가능은 하지만, 스윙 리듬이 무너질 수 있습니다. 285~295g부터 시작하세요."
    }
  ];

  const relatedPosts = [
    {
      title: "그립 교체, 너무 늦게 하면 손목 나간다! ⚠️",
      href: "/blog/tennis-grip-replacement",
      description: "라켓보다 손이 먼저 무너집니다"
    },
    {
      title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지 😱",
      href: "/blog/common-tennis-racket-mistakes", 
      description: "라켓은 단순한 장비가 아니라 파트너입니다"
    },
    {
      title: "스트링 텐션 계산기",
      href: "/utility/string-tension",
      description: "맞춤형 텐션 추천"
    }
  ];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "라켓 무게 하나로 달라지는 경기 스타일 3가지 ⚖️",
          text: "테니스프렌즈에서 라켓 무게별 스타일 가이드를 확인해보세요!",
          url: window.location.href
        });
      } catch (error) {
        console.log('공유 취소됨');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('공유 링크가 클립보드에 복사되었습니다!');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeIn>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                ⚖️ 장비 가이드
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                라켓 무게 하나로 달라지는 경기 스타일 3가지
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                "10g 차이가 그렇게 큰가요?" 네, 실제로 큽니다.<br />
                테니스 라켓의 무게는 단순한 스펙이 아니라, <strong className="text-gray-900">당신의 스윙 리듬과 경기 스타일을 결정짓는 기준</strong>입니다.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                <blockquote className="text-gray-700 italic text-center">
                  "라켓은 당신의 성향을 증폭시킨다." — 코치 현우
                </blockquote>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl py-12">
        {/* Weight Styles */}
        <StaggeredAnimation>
          <div className="space-y-12 mb-16">
            {weightStyles.map((style, index) => (
              <StaggeredItem key={index}>
                <Card className={`${style.color} shadow-lg`}>
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="text-6xl">{style.emoji}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h2 className="text-2xl font-bold text-gray-900">
                            {style.weight} — {style.title}
                          </h2>
                        </div>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {style.description}
                        </p>
                        <div className="space-y-3">
                          {style.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        {index === 1 && (
                          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                            <p className="text-gray-700">
                              <strong className="text-gray-900">라켓 밸런스 공식:</strong> 안정성 = (무게 × 스윙 타이밍) ÷ 피로도
                            </p>
                            <div className="mt-3">
                              <Link href="/utility/ntrp-test">
                                <Button variant="outline" size="sm">
                                  📎 NTRP 자가 진단 테스트
                                </Button>
                              </Link>
                            </div>
                          </div>
                        )}
                        {index === 0 && (
                          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                            <p className="text-gray-700">
                              <strong className="text-gray-900">📍 지역별 팁:</strong> 여름철 실외(서울·대구)는 공속이 빨라지므로 텐션을 2lbs 높이세요.
                            </p>
                          </div>
                        )}
                        {index === 2 && (
                          <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                            <p className="text-gray-700">
                              <strong className="text-gray-900">📍 지역별 팁:</strong> 부산·제주 해안 코트처럼 습한 지역은 반발력이 줄기 때문에 무거운 라켓이 안정적입니다.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggeredItem>
            ))}
          </div>
        </StaggeredAnimation>

        {/* Comparison Table */}
        <SlideUp>
          <Card className="bg-white border-gray-200 shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                📊 비교표 — 무게별 스타일 차이
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">무게</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">플레이 감각</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">장점</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">단점</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-3 px-4 font-semibold text-gray-900">{item.weight}</td>
                        <td className="py-3 px-4 text-gray-700">{item.style}</td>
                        <td className="py-3 px-4 text-gray-700">
                          {item.pros.map((pro, idx) => (
                            <span key={idx} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                              {pro}
                            </span>
                          ))}
                        </td>
                        <td className="py-3 px-4 text-gray-700">
                          {item.cons.map((con, idx) => (
                            <span key={idx} className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded mr-1 mb-1">
                              {con}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
                <p className="text-gray-700 text-center">
                  💬 <strong className="text-gray-900">요약:</strong> 라켓 무게는 성향의 문제입니다. 가볍다고 초보용, 무겁다고 상급용은 아닙니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </SlideUp>

        {/* FAQ Section */}
        <SlideUp>
          <Card className="bg-white border-gray-200 shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                ❓ 자주 묻는 질문
              </h3>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Q. {faq.question}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      A. {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </SlideUp>

        {/* Coach Story */}
        <SlideUp>
          <Card className="bg-gray-50 border-gray-200 shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                💬 코치의 이야기 — "라켓이 아니라 리듬이 무거운 거다"
              </h3>
              <blockquote className="text-gray-700 leading-relaxed italic text-center mb-4">
                "한 제자가 '라켓이 무거워서 공이 안 맞는다'고 했어요. 그런데 사실은 회전이 느렸던 거죠.<br />
                몸이 리듬을 못 따라간 겁니다. 무게를 바꾸기 전에, 스윙을 바꾸는 게 먼저입니다."
              </blockquote>
            </CardContent>
          </Card>
        </SlideUp>

        {/* Related Posts */}
        <SlideUp>
          <Card className="bg-white border-gray-200 shadow-lg mb-12">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                🧩 함께 보면 좋은 콘텐츠
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <Link key={index} href={post.href}>
                    <Card className="bg-gray-50 border-gray-200 hover:border-blue-300 transition-colors cursor-pointer">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                        <p className="text-gray-600 text-sm">{post.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </SlideUp>

        {/* Conclusion */}
        <SlideUp>
          <Card className="bg-gradient-to-r from-blue-500 to-green-500 text-white border-0 shadow-lg mb-12">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                🏁 마무리 — 무게는 단순한 수치가 아니다
              </h3>
              <p className="text-lg mb-6 opacity-90 leading-relaxed">
                라켓 무게는 당신의 스윙을 반영하는 거울입니다.<br />
                라켓이 무겁다고 느껴진다면, 실력이 늘고 있다는 증거일 수도 있습니다.<br />
                <strong>라켓이 아닌 몸의 리듬을 조정하세요. 그게 진짜 무게 조절입니다.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline" 
                  className="bg-white text-blue-600 hover:bg-gray-100"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  공유하기
                </Button>
                <Link href="/utility/play-style-test">
                  <Button variant="outline" className="bg-white text-green-600 hover:bg-gray-100">
                    ✨ 플레이 스타일 진단
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </SlideUp>
      </div>
    </div>
  );
}
