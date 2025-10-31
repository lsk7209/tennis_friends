'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisApparelGuide() {
  return (
    <div className="min-h-screen blog-page">
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
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4 text-sm font-semibold">
              장비 & 패션
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              테니스 선수를 위한 완벽한 의류 가이드 👕
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-30</span>
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
            <a href="#apparel-importance" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 테니스 의류가 중요한 이유
            </a>
            <a href="#technical-clothing" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 기능성 의류의 기술
            </a>
            <a href="#court-specific" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 코트별 의류 선택
            </a>
            <a href="#seasonal-guide" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 계절별 착용 가이드
            </a>
            <a href="#brand-recommendations" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 추천 브랜드와 제품
            </a>
            <a href="#care-tips" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 의류 관리와 세탁법
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "테니스 칠 때 입을 옷을 어떻게 골라야 할까요?"<br />
              테니스 의류 선택은 <strong className="text-gray-900">경기력에 직접적인 영향을 미칩니다</strong>.<br />
              땀 배출, 체온 조절, 움직임 편의성까지 고려한 완벽 가이드를 소개합니다.
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
              "좋은 장비는 10%의 향상, 올바른 의류는 20%의 향상을 가져온다." — 코치 정민수
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="apparel-importance">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 1. 테니스 의류가 중요한 이유</h2>
              <p className="text-gray-700 mb-4">
                테니스는 <strong className="text-gray-900">극한의 땀 배출 스포츠</strong>입니다.<br />
                한 경기로 1-2L의 땀을 흘리며, 체온이 급격히 상승합니다.<br />
                올바른 의류 선택이 경기력과 건강을 좌우합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">📊 테니스 의류의 핵심 기능</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>흡습속건:</strong> 땀을 빠르게 배출하여 체온 유지</li>
                  <li><strong>UV 차단:</strong> 햇볕으로부터 피부 보호</li>
                  <li><strong>스트레치성:</strong> 자유로운 움직임 보장</li>
                  <li><strong>통기성:</strong> 열기 배출로 체온 조절</li>
                  <li><strong>내구성:</strong> 잦은 세탁과 마찰에 견딤</li>
                </ul>
              </div>
            </section>

            <section id="technical-clothing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧵 2. 기능성 의류의 기술</h2>
              <p className="text-gray-700 mb-4">
                현대 테니스 의류는 <strong className="text-gray-900">첨단 소재와 기술</strong>로 만들어집니다.<br />
                각 기능의 원리와 선택 기준을 알아보세요.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">💧 흡습속건 (Moisture Wicking)</h3>
                    <p className="text-blue-800 mb-2"><strong>기능:</strong> 땀을 표면으로 끌어올려 빠르게 증발</p>
                    <p className="text-sm text-gray-600"><strong>소재:</strong> 폴리에스터, 폴리프로필렌 • <strong>효과:</strong> 체온 저하 방지, 쾌적함 유지</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-900 mb-3">🌬️ 통기성 (Breathability)</h3>
                    <p className="text-green-800 mb-2"><strong>기능:</strong> 공기가 통과하여 열기 배출</p>
                    <p className="text-sm text-gray-600"><strong>소재:</strong> 메쉬 패브릭 • <strong>효과:</strong> 과열 방지, 체온 조절</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-purple-900 mb-3">🛡️ UV 차단 (UV Protection)</h3>
                    <p className="text-purple-800 mb-2"><strong>기능:</strong> 자외선으로부터 피부 보호</p>
                    <p className="text-sm text-gray-600"><strong>등급:</strong> UPF 30+ 이상 • <strong>효과:</strong> 피부암 예방, 햇볕 화상 방지</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-orange-900 mb-3">🔄 스트레치성 (Stretch)</h3>
                    <p className="text-orange-800 mb-2"><strong>기능:</strong> 신축성으로 자유로운 움직임</p>
                    <p className="text-sm text-gray-600"><strong>소재:</strong> 스판덱스, 라이크라 • <strong>효과:</strong> 부상 방지, 편안함</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="court-specific">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏓 3. 코트별 의류 선택</h2>
              <p className="text-gray-700 mb-4">
                각 코트 표면의 특성에 따라 최적의 의류가 다릅니다.<br />
                코트 타입별로 맞춤 추천을 받아보세요.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">하드코트 🏓</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 밝은 색상 (흰색, 연한 파랑)</li>
                      <li>• UV 차단 지수 높음</li>
                      <li>• 미끄럼 방지 밑창</li>
                      <li>• 가벼운 통기성 소재</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">클레이코트 🏐</h3>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• 어두운 색상 (빨강, 검정)</li>
                      <li>• 흙먼지 방지 디자인</li>
                      <li>• 쉽게 세탁 가능한 소재</li>
                      <li>• 긴 소매/바지 추천</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-green-900 mb-2">잔디코트 🌱</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• 전통적 화이트 색상</li>
                      <li>• 흙자국 방지 소재</li>
                      <li>• 긴 소매 필수</li>
                      <li>• 내구성 강한 소재</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">카펫코트 🏠</h3>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• 실내용 밝은 색상</li>
                      <li>• 흡습속건 기능 강화</li>
                      <li>• 단거리 이동 편의성</li>
                      <li>• 다양한 색상 선택</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="seasonal-guide">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌤️ 4. 계절별 착용 가이드</h2>
              <p className="text-gray-700 mb-4">
                계절에 따라 체감 온도와 땀 발생량이 다릅니다.<br />
                날씨 변화에 맞는 의류 선택으로 최적의 컨디션을 유지하세요.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">☀️ 여름 (25°C 이상)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-red-800">상의</h4>
                      <p className="text-sm text-gray-600">민소매 티셔츠, 메쉬 소재</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800">하의</h4>
                      <p className="text-sm text-gray-600">숏 팬츠, 통기성 좋은 소재</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800">액세서리</h4>
                      <p className="text-sm text-gray-600">선글라스, 모자 필수</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800">주의사항</h4>
                      <p className="text-sm text-gray-600">자외선 차단제 필수</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">❄️ 겨울 (10°C 이하)</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-800">상의</h4>
                      <p className="text-sm text-gray-600">긴팔 티셔츠, 집업 재킷</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">하의</h4>
                      <p className="text-sm text-gray-600">긴 바지, 보온 소재</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">액세서리</h4>
                      <p className="text-sm text-gray-600">장갑, 목도리 고려</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">주의사항</h4>
                      <p className="text-sm text-gray-600">워밍업 충분히 하기</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="brand-recommendations">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏆 5. 추천 브랜드와 제품</h2>
              <p className="text-gray-700 mb-4">
                검증된 브랜드의 제품을 선택하세요.<br />
                가격대별로 다양한 옵션이 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">Nike 테니스</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 혁신적인 Dri-FIT 기술</li>
                      <li>• 우수한 내구성</li>
                      <li>• 스포티한 디자인</li>
                      <li>• 가격: 중간 ~ 고가</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-green-900 mb-2">Adidas 테니스</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• CLIMACOOL 흡습속건</li>
                      <li>• 다양한 색상 라인업</li>
                      <li>• 가성비 좋은 제품군</li>
                      <li>• 가격: 중간</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-purple-900 mb-2">Lacoste 테니스</h3>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• 클래식한 디자인</li>
                      <li>• 고급 소재 사용</li>
                      <li>• 프리미엄 브랜드</li>
                      <li>• 가격: 고가</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-orange-900 mb-2">Wilson 테니스</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• 프로 선수 협찬 브랜드</li>
                      <li>• 기능성 중심 디자인</li>
                      <li>• 다양한 사이즈</li>
                      <li>• 가격: 중간</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  💡 <strong>팁:</strong> 처음 구매 시 매장 방문해서 착용감 테스트하세요.
                </p>
              </div>
            </section>

            <section id="care-tips">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧼 6. 의류 관리와 세탁법</h2>
              <p className="text-gray-700 mb-4">
                테니스 의류의 수명은 <strong className="text-gray-900">관리 방법에 달려있습니다</strong>.<br />
                올바른 세탁과 보관으로 장기간 사용하세요.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">✅ 올바른 세탁법</h3>
                <ol className="list-decimal list-inside space-y-2 text-green-800">
                  <li>세탁 전 라벨 확인 (드라이클리닝 금지 품목 주의)</li>
                  <li>찬물 세탁 (뜨거운 물은 소재 손상)</li>
                  <li>중성 세제 사용 (표백제 금지)</li>
                  <li>울코스로 세탁 (섬유 보호)</li>
                  <li>그늘에서 건조 (햇볕에 변색 방지)</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">📦 보관 방법</h3>
                <ul className="space-y-2 text-blue-800">
                  <li><strong>습기 제거:</strong> 세탁 후 완전히 건조시키기</li>
                  <li><strong>접어서 보관:</strong> 옷걸이에 걸지 말고 접어서</li>
                  <li><strong>냉장 보관:</strong> 장기간 보관 시 지퍼백 사용</li>
                  <li><strong>주기적 환기:</strong> 습기 차지 않도록 수시로 환기</li>
                  <li><strong>UV 차단:</strong> 햇빛이 닿지 않는 곳에 보관</li>
                </ul>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/tennis-shoes-selection-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👟</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 신발 선택의 모든 것</p>
                      <p className="text-sm text-gray-600 mt-1">쿠셔닝, 안정성, 그립력 등 완벽 가이드</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-diet-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🥗</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 선수를 위한 완벽한 다이어트 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">영양 섭취, 수분 보충, 체중 관리</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-stretching-routine" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧘</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 전후 스트레칭 루틴 완벽 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">워밍업, 쿨다운, 일상 루틴 등</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/equipment-recommendation" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎾</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">장비 추천 시스템</p>
                      <p className="text-sm text-gray-600 mt-1">플레이 스타일에 맞는 라켓과 스트링 추천</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-injury-prevention-exercises" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 부상 예방을 위한 8가지 필수 운동</p>
                      <p className="text-sm text-gray-600 mt-1">코어 강화, 어깨 안정화 등</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-shoes-selection-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👟</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 신발 선택 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">쿠셔닝, 안정성, 코트별 선택</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 올바른 의류로 최고의 경기력</h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스 의류는 단순한 옷이 아닙니다.<br />
                  <strong className="text-gray-900">기능성 의류로 땀을 컨트롤하고 체온을 조절하며 최고의 퍼포먼스를 발휘하세요</strong>.<br />
                  올바른 의류 선택이 테니스 인생을 바꿀 수 있습니다.
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-apparel-guide" className="text-blue-600 hover:underline">더블스 테니스 전략 완벽 가이드 🏓</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-apparel-guide');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white"
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
