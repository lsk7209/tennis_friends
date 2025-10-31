'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisShoesSelectionGuide() {
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
            <Badge className="bg-rose-100 text-rose-800 px-4 py-2 mb-4 text-sm font-semibold">
              장비 가이드
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              👟 테니스 신발 선택의 모든 것
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-02-05</span>
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
            <a href="#court-type" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 코트 종류별 신발 선택
            </a>
            <a href="#fit-comfort" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 사이즈와 착화감 체크
            </a>
            <a href="#support-stability" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 지지력과 안정성 고려
            </a>
            <a href="#cushioning" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 쿠셔닝과 충격 흡수
            </a>
            <a href="#durability" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 내구성과 소재 품질
            </a>
            <a href="#price-range" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 가격대별 추천 모델
            </a>
            <a href="#maintenance" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 관리와 수명 연장
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
              "어떤 신발을 사야 할까요?"<br />
              "일반 운동화로 테니스 쳐도 되나요?"<br />
              하지만 진짜 문제는 <strong className="text-gray-900">코트에 맞지 않는 신발</strong>입니다.<br />
              올바른 신발이 테니스의 절반을 좌우합니다.
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-4 italic text-gray-600">
              "좋은 신발이 좋은 테니스의 시작이다. 발이 편해야 몸이 움직인다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="court-type">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 1. 코트 종류별 신발 선택</h2>
              <p className="text-gray-700 mb-4">
                코트 종류에 따라 신발이 달라집니다.<br />
                <strong className="text-gray-900">하드코트</strong>는 내구성 좋은 신발,<br />
                <strong className="text-gray-900">클레이코트</strong>는 미끄럼 방지 신발,<br />
                <strong className="text-gray-900">잔디코트</strong>는 가벼운 신발이 좋습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🏓 하드코트</h3>
                    <p className="text-sm text-gray-600">내구성 좋고 쿠셔닝 우수. 아식스, 뉴월런스 추천.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🟤 클레이코트</h3>
                    <p className="text-sm text-gray-600">미끄럼 방지 패턴. 발이 묻지 않게 가벼운 디자인.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🌱 잔디코트</h3>
                    <p className="text-sm text-gray-600">가볍고 유연한 디자인. 미끄럼 방지 스터드.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="fit-comfort">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📏 2. 사이즈와 착화감 체크</h2>
              <p className="text-gray-700 mb-4">
                테니스 신발은 <strong className="text-gray-900">반 사이즈 크게</strong> 신는 것이 좋습니다.<br />
                테니스 동작 시 발이 부을 수 있기 때문입니다.<br />
                매장에서 직접 신어보고 30분 정도 걸어보세요.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 착화감 체크 포인트:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>발가락이 닿지 않게 여유 공간 확보</li>
                  <li>발등이 너무 꽉 조이지 않기</li>
                  <li>발바닥 전체가 닿는 안정감</li>
                  <li>발목 지지대가 적당한 높이</li>
                </ul>
              </div>
            </section>

            <section id="support-stability">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🦵 3. 지지력과 안정성 고려</h2>
              <p className="text-gray-700 mb-4">
                테니스는 급격한 방향 전환이 많아 <strong className="text-gray-900">안정성</strong>이 중요합니다.<br />
                발목 지지대가 튼튼하고, 미드솔이 단단한 신발을 선택하세요.<br />
                특히 초보자라면 지지력이 좋은 신발이 안전합니다.
              </p>
            </section>

            <section id="cushioning">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛡️ 4. 쿠셔닝과 충격 흡수</h2>
              <p className="text-gray-700 mb-4">
                테니스의 점프와 착지 동작으로 인한 <strong className="text-gray-900">충격</strong>을 흡수해야 합니다.<br />
                쿠셔닝이 좋은 신발은 무릎과 발목 부상을 예방합니다.<br />
                하지만 너무 푹신하면 반응성이 떨어질 수 있습니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>팁:</strong> 쿠셔닝과 반응성의 균형이 중요합니다. 너무 푹신하지 않게 선택하세요.
                </blockquote>
              </div>
            </section>

            <section id="durability">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 5. 내구성과 소재 품질</h2>
              <p className="text-gray-700 mb-4">
                테니스 신발은 격렬한 운동으로 <strong className="text-gray-900">빠르게 마모</strong>됩니다.<br />
                고품질 메쉬 소재와 튼튼한 밑창을 선택하세요.<br />
                6개월-1년 정도 사용할 수 있는 내구성을 고려하세요.
              </p>
            </section>

            <section id="price-range">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 6. 가격대별 추천 모델</h2>
              <p className="text-gray-700 mb-4">
                예산에 맞게 신발을 선택하세요.<br />
                <strong className="text-gray-900">입문자</strong>는 10-20만원대,<br />
                <strong className="text-gray-900">중급자</strong>는 20-30만원대,<br />
                <strong className="text-gray-900">상급자</strong>는 30만원 이상 추천합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">입문자 추천</h3>
                    <p className="text-sm text-gray-600">아식스 젤-게임, 뉴월런스 860 등. 가성비 좋고 내구성 우수.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">프로급 추천</h3>
                    <p className="text-sm text-gray-600">윌슨 프로 스태프, 헤드 보아 등. 최고급 쿠셔닝과 지지력.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="maintenance">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧼 7. 관리와 수명 연장</h2>
              <p className="text-gray-700 mb-4">
                신발 관리로 수명을 연장하세요.<br />
                <strong className="text-gray-900">사용 후 먼지 털기, 통풍 건조, 정기 세척</strong>이 중요합니다.<br />
                습기가 차면 곰팡이가 생길 수 있습니다.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">관리 팁:</strong><br />
                  테니스 치고 난 후 즉시 신발을 벗기고 통풍이 잘 되는 곳에 놓아두세요. 습기가 차면 신발 수명이 급격히 단축됩니다.
                </p>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 일반 운동화로 테니스 쳐도 되나요?</p>
                  <p className="text-gray-700">A. 가능하지만 추천하지 않습니다. 테니스 전용 신발은 코트 특성에 맞게 설계되어 있어 안전하고 효율적입니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 신발을 언제 교체해야 하나요?</p>
                  <p className="text-gray-700">A. 쿠셔닝이 느껴지지 않거나, 밑창이 마모되었을 때 교체하세요. 보통 6-12개월 사용이 적당합니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 브랜드별로 어떤 특징이 있나요?</p>
                  <p className="text-gray-700">A. 아식스는 쿠셔닝, 뉴월런스는 안정성, 윌슨은 반응성, 헤드는 가벼움에 강점이 있습니다.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "신발이 테니스의 30%를 결정한다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 테니스 칠 때마다 발목이 아팠죠. '왜 아플까?'라고 했어요.<br />
                  신발을 바꿔줬어요. 발목 지지력이 약한 일반 운동화를 신고 있었어요.<br />
                  테니스 전용 신발로 바꾼 후, 그 제자는 부상 없이 테니스를 즐기기 시작했어요.<br />
                  신발이 틀리면 모든 것이 틀어집니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/best-tennis-rackets-2024" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">2024년 최고의 테니스 라켓 TOP 5</p>
                </Link>
                <Link href="/blog/tennis-string-guide" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-green-900">라켓 스트링 종류별 특징과 선택 가이드 🧵</p>
                </Link>
                <Link href="/utility/equipment-recommendation" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-purple-900">테니스 장비 추천 시스템</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 올바른 신발이 완벽한 테니스의 시작</h2>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  신발 하나로 테니스의 질이 달라집니다.<br />
                  코트와 발에 맞는 신발을 신고, 건강하고 즐거운 테니스를 즐기세요.<br />
                  <strong className="text-gray-900">오늘부터 올바른 테니스 신발을 찾아보세요.</strong>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-shoes-selection-guide');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-rose-600 hover:bg-rose-700 text-white"
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
