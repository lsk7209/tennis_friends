'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisStretchingRoutine() {
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
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2 mb-4 text-sm font-semibold">
              스트레칭 & 건강
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🧘 테니스 전후 스트레칭 루틴 완벽 가이드
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-02-04</span>
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
            <a href="#warm-up" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 운동 전 워밍업 스트레칭
            </a>
            <a href="#shoulder-stretch" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 어깨와 팔 스트레칭
            </a>
            <a href="#wrist-stretch" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 손목과 팔꿈치 스트레칭
            </a>
            <a href="#hip-stretch" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 고관절과 다리 스트레칭
            </a>
            <a href="#back-stretch" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 등과 코어 스트레칭
            </a>
            <a href="#cool-down" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 운동 후 쿨다운 스트레칭
            </a>
            <a href="#daily-routine" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 일상 루틴 스트레칭
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors">
              8. 자주 묻는 질문
            </a>
            <a href="#coach-story" className="block text-gray-700 hover:text-blue-600 transition-colors">
              9. 코치의 이야기
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "테니스 치고 나면 몸이 뻣뻣해요."<br />
              "부상이 자꾸 생겨요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">스트레칭을 하지 않는 것</strong>입니다.<br />
              스트레칭이 테니스의 기본입니다.
            </p>
            <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-600">
              "유연함이 없으면 테니스를 할 수 없다. 스트레칭이 곧 테니스다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="warm-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏃 1. 운동 전 워밍업 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                운동 전 스트레칭은 <strong className="text-gray-900">동적 스트레칭</strong>으로 해야 합니다.<br />
                가볍게 몸을 움직이며 혈액순환을 돕고 근육을 준비시키세요.<br />
                정적 스트레칭은 운동 후에 하는 것이 좋습니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 워밍업 루틴:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>어깨 회전: 10회씩 양방향</li>
                  <li>팔 흔들기: 20회씩 양팔</li>
                  <li>고관절 회전: 10회씩 양방향</li>
                  <li>무릎 올리기: 20회씩 양다리</li>
                </ol>
              </div>
            </section>

            <section id="shoulder-stretch">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🤾 2. 어깨와 팔 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                테니스에서 가장 중요한 부위인 <strong className="text-gray-900">어깨와 팔</strong>을 집중적으로 스트레칭하세요.<br />
                서브와 스트로크 동작의 핵심 근육들을 풀어주세요.<br />
                어깨 통증 예방에 필수적입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 어깨 스트레칭:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>크로스 바디 암 스트레치: 30초 × 2회</li>
                  <li>트라이셉스 스트레치: 30초 × 2회</li>
                  <li>오버헤드 트라이셉스: 30초 × 2회</li>
                  <li>숄더 스트레치: 30초 × 2회</li>
                </ul>
              </div>
            </section>

            <section id="wrist-stretch">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🤏 3. 손목과 팔꿈치 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                테니스 엘보우와 손목 부상의 주범인 <strong className="text-gray-900">전완근</strong>을 스트레칭하세요.<br />
                발리 동작 전 반드시 손목을 풀어주세요.<br />
                가벼운 통증이 느껴질 정도로 스트레칭하세요.
              </p>
            </section>

            <section id="hip-stretch">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🦵 4. 고관절과 다리 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                테니스의 왕복 달리기 동작을 위해 <strong className="text-gray-900">다리 근육</strong>을 스트레칭하세요.<br />
                햄스트링과 대퇴사두근을 집중적으로 풀어주세요.<br />
                무릎 부상 예방에 중요합니다.
              </p>
            </section>

            <section id="back-stretch">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌀 5. 등과 코어 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                테니스의 회전 동작을 위해 <strong className="text-gray-900">등과 코어</strong>를 스트레칭하세요.<br />
                척추의 유연성이 테니스 동작의 정확성을 높입니다.<br />
                허리 통증 예방에 필수적입니다.
              </p>
            </section>

            <section id="cool-down">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧊 6. 운동 후 쿨다운 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                운동 후 <strong className="text-gray-900">정적 스트레칭</strong>으로 근육을 진정시키세요.<br />
                심박수를 낮추고 회복을 촉진합니다.<br />
                각 스트레칭을 30-60초 유지하세요.
              </p>
            </section>

            <section id="daily-routine">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📅 7. 일상 루틴 스트레칭</h2>
              <p className="text-gray-700 mb-4">
                테니스 치는 날이 아니어도 <strong className="text-gray-900">매일 스트레칭</strong>을 하세요.<br />
                유연성을 유지하고 부상을 예방합니다.<br />
                10분 데일리 루틴으로 충분합니다.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 스트레칭할 때 통증이 느껴지면 어떻게 하나요?</p>
                  <p className="text-gray-700">A. 가벼운 불편함은 괜찮지만, 날카로운 통증이 느껴지면 즉시 멈추세요. 무리가 가지 않는 선에서 하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 얼마나 오래 스트레칭해야 효과가 나오나요?</p>
                  <p className="text-gray-700">A. 각 스트레칭을 30-60초 유지하고, 매일 꾸준히 하는 것이 중요합니다. 처음 2주가 관건입니다.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "스트레칭이 테니스의 시작과 끝이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 테니스 칠 때마다 몸이 아팠죠. '왜 아플까?'라고 했어요.<br />
                  스트레칭 루틴을 가르쳤어요. 그 후, 그 제자는 부상 없이 테니스를 즐기기 시작했어요.<br />
                  스트레칭 없이는 테니스를 할 수 없습니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/tennis-injury-prevention-exercises" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">테니스 부상 예방을 위한 8가지 필수 운동</p>
                </Link>
                <Link href="/blog/winter-tennis-training" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-green-900">테니스 부상 없는 겨울 훈련법 ❄️</p>
                </Link>
                <Link href="/utility/injury-check" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-purple-900">테니스 부상 리스크 계산기</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 스트레칭이 건강한 테니스의 비밀</h2>
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  스트레칭 없이는 제대로 된 테니스를 할 수 없습니다.<br />
                  매일 15분 스트레칭으로 몸을 건강하게 유지하세요.<br />
                  <strong className="text-gray-900">오늘부터 스트레칭 루틴을 시작해보세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-shoes-selection-guide" className="text-blue-600 hover:underline">테니스 신발 선택 가이드 👟</Link>
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/tennis-injury-prevention-exercises" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 부상 예방을 위한 8가지 필수 운동</p>
                      <p className="text-sm text-gray-600 mt-1">코어 강화, 어깨 안정화, 손목 유연성 등</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-elbow-prevention" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 엘보우 예방법</p>
                      <p className="text-sm text-gray-600 mt-1">원인 분석과 예방 운동, 생활 습관 개선</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/winter-tennis-training" className="block p-6 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">❄️</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 부상 없는 겨울 훈련법</p>
                      <p className="text-sm text-gray-600 mt-1">실내 코트 적응, 부상 예방, 컨디션 유지</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/injury-check" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏥</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 부상 리스크 계산기</p>
                      <p className="text-sm text-gray-600 mt-1">나의 부상 위험도를 파악하고 예방하세요</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/forehand-body-balance" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">포핸드 스윙 교정법</p>
                      <p className="text-sm text-gray-600 mt-1">몸 밸런스, 스윙 궤적, 임팩트 포인트</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-shoes-selection-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👟</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 신발 선택 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">코트별 선택, 쿠셔닝, 안정성 등 모든 것</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-stretching-routine');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
