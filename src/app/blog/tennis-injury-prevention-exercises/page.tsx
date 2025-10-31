'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisInjuryPreventionExercises() {
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
            <Badge className="bg-lime-100 text-lime-800 px-4 py-2 mb-4 text-sm font-semibold">
              건강 & 부상 예방
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              💪 테니스 부상 예방을 위한 8가지 필수 운동
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-02-03</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7분 읽기</span>
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
            <a href="#core-strength" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 코어 근력 강화 운동
            </a>
            <a href="#shoulder-stability" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 어깨 안정화 운동
            </a>
            <a href="#wrist-flexibility" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 손목 유연성 운동
            </a>
            <a href="#hip-mobility" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 고관절 가동성 운동
            </a>
            <a href="#balance-training" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 균형 감각 훈련
            </a>
            <a href="#dynamic-stretching" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 동적 스트레칭 루틴
            </a>
            <a href="#recovery-methods" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 회복 촉진 방법
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
              "테니스 치다가 팔이 아파요."<br />
              "무릎이 자꾸 다쳐요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">예방 운동을 하지 않는 것</strong>입니다.<br />
              부상 예방이 최고의 치료입니다.
            </p>
            <blockquote className="border-l-4 border-lime-500 pl-4 italic text-gray-600">
              "부상은 갑자기 오지 않는다. 예방하지 않은 대가일 뿐이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="core-strength">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏃 1. 코어 근력 강화 운동</h2>
              <p className="text-gray-700 mb-4">
                테니스의 모든 동작은 <strong className="text-gray-900">코어에서 시작</strong>됩니다.<br />
                약한 코어는 팔꿈치와 어깨 부상의 원인이 됩니다.<br />
                매일 코어 운동으로 튼튼한 바탕을 만드세요.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 추천 운동:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>플랭크: 30초 × 3세트</li>
                  <li>러시안 트위스트: 15회 × 3세트</li>
                  <li>데드 버그: 10회 × 3세트</li>
                  <li>바이시클 크런치: 20회 × 3세트</li>
                </ul>
              </div>
            </section>

            <section id="shoulder-stability">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🤾 2. 어깨 안정화 운동</h2>
              <p className="text-gray-700 mb-4">
                테니스 엘보우의 70%는 <strong className="text-gray-900">어깨 불안정성</strong>에서 옵니다.<br />
                어깨 근육을 강화하면 팔꿈치 부상을 예방할 수 있습니다.<br />
                가벼운 덤벨이나 밴드를 사용하세요.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 어깨 운동:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>숄더 프레스: 12회 × 3세트</li>
                  <li>레터럴 레이즈: 15회 × 3세트</li>
                  <li>페이스 풀: 10회 × 3세트</li>
                  <li>월 슬라이드: 15회 × 3세트</li>
                </ul>
              </div>
            </section>

            <section id="wrist-flexibility">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🤏 3. 손목 유연성 운동</h2>
              <p className="text-gray-700 mb-4">
                손목 부상은 테니스 선수의 악몽입니다.<br />
                <strong className="text-gray-900">손목 스트레칭</strong>으로 유연성을 유지하세요.<br />
                발리 전 손목 워밍업은 필수입니다.
              </p>
            </section>

            <section id="hip-mobility">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🦵 4. 고관절 가동성 운동</h2>
              <p className="text-gray-700 mb-4">
                고관절이 뻣뻣하면 무릎과 허리 부상이 옵니다.<br />
                <strong className="text-gray-900">고관절 스트레칭</strong>으로 가동성을 높이세요.<br />
                테니스 동작의 기초가 됩니다.
              </p>
            </section>

            <section id="balance-training">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚖️ 5. 균형 감각 훈련</h2>
              <p className="text-gray-700 mb-4">
                테니스는 균형의 스포츠입니다.<br />
                <strong className="text-gray-900">싱글 레그 스탠드</strong>로 균형 감각을 키우세요.<br />
                부상 예방에 큰 도움이 됩니다.
              </p>
            </section>

            <section id="dynamic-stretching">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏃 6. 동적 스트레칭 루틴</h2>
              <p className="text-gray-700 mb-4">
                운동 전 <strong className="text-gray-900">동적 스트레칭</strong>으로 몸을 준비시키세요.<br />
                정적 스트레칭보다 동적 스트레칭이 효과적입니다.<br />
                10분 루틴으로 충분합니다.
              </p>
            </section>

            <section id="recovery-methods">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛀 7. 회복 촉진 방법</h2>
              <p className="text-gray-700 mb-4">
                운동 후 <strong className="text-gray-900">회복을 돕는 습관</strong>을 들이세요.<br />
                아이스 배스, 마사지, 충분한 수면이 중요합니다.<br />
                회복이 곧 예방입니다.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 운동 전후 언제 스트레칭을 해야 하나요?</p>
                  <p className="text-gray-700">A. 운동 전에는 동적 스트레칭, 운동 후에는 정적 스트레칭을 하세요. 동적 스트레칭은 5-10분, 정적 스트레칭은 10-15분이 적당합니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 이미 부상을 입었는데 운동해도 되나요?</p>
                  <p className="text-gray-700">A. 통증이 있는 부위는 피하고, 다른 부위를 강화하는 운동을 하세요. 전문가와 상담 후 시작하세요.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "부상은 선택이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 팔꿈치가 아파서 테니스를 못 쳤죠. '왜 아픈지 모르겠어요'라고 했어요.<br />
                  부상 예방 운동을 가르쳤어요. 2개월 후, 그 제자는 팔꿈치 통증 없이 테니스를 쳤어요.<br />
                  부상은 갑자기 오지 않습니다. 예방하지 않은 대가일 뿐입니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/tennis-elbow-prevention" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">테니스 엘보우, 예방이 최선입니다</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 예방이 최선의 치료다</h2>
              <div className="bg-gradient-to-r from-lime-50 to-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스 부상은 예방할 수 있습니다.<br />
                  매일 20분의 예방 운동으로 건강한 테니스 생활을 유지하세요.<br />
                  <strong className="text-gray-900">오늘부터 부상 예방 운동을 시작해보세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-stretching-routine" className="text-blue-600 hover:underline">테니스 스트레칭 루틴 💪</Link>
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/tennis-stretching-routine" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧘</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 스트레칭 루틴</p>
                      <p className="text-sm text-gray-600 mt-1">워밍업, 쿨다운, 일상 루틴 등 완벽 가이드</p>
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
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-injury-prevention-exercises');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-lime-600 hover:bg-lime-700 text-white"
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
