'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function ConcentrationDuringMatches() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
                <ArrowLeft className="h-4 w-4 mr-2" />
                블로그로 돌아가기
              </Button>
            </Link>
          </div>

          <div className="text-center">
            <Badge className="bg-indigo-100 text-indigo-800 px-4 py-2 mb-4 text-sm font-semibold">
              멘탈 트레이닝
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🧠 경기 중 흔들리는 집중력을 되찾는 6가지 방법
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-31</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>6분 읽기</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">📋 목차</h2>
          <div className="space-y-2">
            <a href="#breathing" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 호흡으로 마음을 안정시키기
            </a>
            <a href="#focus-points" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 집중 포인트 설정하기
            </a>
            <a href="#negative-thoughts" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 부정적 생각 차단하기
            </a>
            <a href="#routines" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 경기 중 루틴 만들기
            </a>
            <a href="#visualization" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 시각화 훈련
            </a>
            <a href="#recovery" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 실수 후 회복하기
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 자주 묻는 질문
            </a>
            <a href="#coach-story" className="block text-gray-700 hover:text-blue-600 transition-colors">
              8. 코치의 이야기
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "경기가 후반으로 갈수록 집중이 안 돼요."<br />
              "중요한 포인트에서 실수해요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">마음의 컨트롤</strong>에 있습니다.<br />
              테니스는 80%가 멘탈 게임입니다.
            </p>
            <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600">
              "집중력은 근육이 아니라 마음의 습관이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="breathing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🫁 1. 호흡으로 마음을 안정시키기</h2>
              <p className="text-gray-700 mb-4">
                긴장할 때 가장 효과적인 방법은 <strong className="text-gray-900">호흡 컨트롤</strong>입니다.<br />
                4초 들이마시고, 4초 참고, 4초 내쉬는 4-4-4 호흡법으로 마음을 진정시키세요.<br />
                이 호흡만으로도 집중력이 2배 향상됩니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 호흡 루틴:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>중요한 포인트 전 4초 호흡</li>
                  <li>실수 후 바로 4-4-4 호흡</li>
                  <li>세트 브레이크 때 심호흡</li>
                  <li>경기 전 워밍업으로 호흡 연습</li>
                </ol>
              </div>
            </section>

            <section id="focus-points">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 2. 집중 포인트 설정하기</h2>
              <p className="text-gray-700 mb-4">
                산만한 경기장에서 <strong className="text-gray-900">하나의 포인트에 집중</strong>하세요.<br />
                "공의 바운스 지점"이나 "라켓의 스윙 궤적" 같은 구체적인 포인트에 주의를 집중시키면<br />
                외부 소음과 압박이 사라집니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>팁:</strong> "공만 봐라. 다른 건 잊어라." 이 생각만으로도 집중력이 올라갑니다.
                </blockquote>
              </div>
            </section>

            <section id="negative-thoughts">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚫 3. 부정적 생각 차단하기</h2>
              <p className="text-gray-700 mb-4">
                "이걸 놓치면 지겠어" 같은 <strong className="text-gray-900">부정적 생각을 즉시 차단</strong>하세요.<br />
                대신 "다음 포인트에 집중하자"로 전환시키세요.<br />
                생각의 방향을 바꾸는 것만으로도 결과가 달라집니다.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">멘탈 코칭:</strong><br />
                  부정적 생각이 들면 "STOP"이라고 말하며 생각을 멈추고, "다음 공에 집중"으로 전환하세요.
                </p>
              </div>
            </section>

            <section id="routines">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 4. 경기 중 루틴 만들기</h2>
              <p className="text-gray-700 mb-4">
                매 포인트마다 같은 <strong className="text-gray-900">루틴을 반복</strong>하세요.<br />
                공을 튀기기, 호흡하기, 준비 자세 등 일관된 행동이 집중력을 유지시킵니다.<br />
                루틴이 습관이 되면 자동으로 집중 모드로 들어갑니다.
              </p>
            </section>

            <section id="visualization">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">👁️ 5. 시각화 훈련</h2>
              <p className="text-gray-700 mb-4">
                경기 전이나 브레이크 시간에 <strong className="text-gray-900">성공 장면을 상상</strong>하세요.<br />
                자신이 공을 완벽하게 치는 모습을 생생하게 그려보세요.<br />
                시각화는 실제 경기력 향상으로 이어집니다.
              </p>
            </section>

            <section id="recovery">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 6. 실수 후 회복하기</h2>
              <p className="text-gray-700 mb-4">
                실수 후 <strong className="text-gray-900">1초 안에 다음 포인트로 전환</strong>하세요.<br />
                과거의 실수는 바꿀 수 없으니 미래에 집중하세요.<br />
                "이번 포인트는 새롭다"는 마음가짐이 중요합니다.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 경기가 길어질수록 집중이 안 되는데 어떻게 하나요?</p>
                  <p className="text-gray-700">A. 세트 브레이크마다 1분간 호흡 연습을 하고, 물을 마시며 마음을 리셋하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 관중 소리가 방해가 될 때 어떻게 집중하나요?</p>
                  <p className="text-gray-700">A. 외부 소리를 "바다 소리"처럼 멀리 있는 소리로 상상하세요. 자신의 호흡 소리에 집중하세요.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "집중력은 길러지는 것이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 매번 후반에 무너졌죠. '집중이 안 돼요'라고 했어요.<br />
                  호흡법을 가르쳤어요. 3개월 후, 그 제자는 후반에 더 강해졌어요.<br />
                  집중력은 타고난 것이 아니라, 길러지는 습관입니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/tennis-mental-techniques" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법 🧠</p>
                </Link>
                <Link href="/blog/opponent-analysis-strategy" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-green-900">상대 분석 전략 🎯</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 집중력이 승패를 좌우한다</h2>
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스는 기술만큼 집중력이 중요합니다.<br />
                  호흡과 루틴으로 마음을 컨트롤하세요.<br />
                  <strong className="text-gray-900">오늘부터 한 포인트, 한 포인트에 집중해보세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/opponent-analysis-strategy" className="text-blue-600 hover:underline">상대 분석 전략 🎯</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/concentration-during-matches');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                📤 링크 복사하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
