'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function SeoulBestTennisCourts() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
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
              지역 정보
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🏟️ 서울 최고의 테니스장 TOP 7 추천
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-26</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10분 읽기</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "서울에서 좋은 테니스장이 어디 있나요?"<br />
              "가격도 합리적이고 시설도 좋은 곳을 찾고 있어요."<br />
              하지만 문제는 정보 부족이 아니라 <strong className="text-gray-900">자신의 수준과 목적을 모르는 것</strong>입니다.<br />
              서울에는 다양한 테니스장이 있습니다.
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
              "테니스장은 플레이어의 두 번째 집이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏆 1. 올림픽공원 테니스장 — 올림픽의 영광</h2>
              <p className="text-gray-700 mb-4">
                올림픽공원 테니스장은 <strong className="text-gray-900">올림픽 경기장</strong>으로 사용된 프리미엄 시설입니다.<br />
                클레이코트와 하드코트를 모두 갖추고 있어 다양한 경험을 할 수 있습니다.<br />
                전문적인 훈련을 원하는 플레이어에게 추천합니다.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-yellow-900 mb-3">💡 올림픽공원 테니스장 특징:</h3>
                <ul className="list-disc list-inside space-y-2 text-yellow-800">
                  <li><strong>장점:</strong> 올림픽급 시설, 다양한 코트 타입, 전문 코치</li>
                  <li><strong>단점:</strong> 높은 이용료, 예약 어려움</li>
                  <li><strong>추천 대상:</strong> 중급자 이상, 전문 훈련 희망자</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌳 2. 한강공원 테니스장 — 자연과 함께</h2>
              <p className="text-gray-700 mb-4">
                한강공원 테니스장은 <strong className="text-gray-900">자연 속에서 테니스</strong>를 즐길 수 있는 곳입니다.<br />
                한강의 아름다운 경치를 보며 플레이할 수 있어 스트레스 해소에 좋습니다.<br />
                가족 단위나 친구들과 함께 즐기기 좋습니다.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <blockquote className="text-green-800">
                  🎯 <strong>포인트:</strong> "자연 속에서 테니스"를 원한다면 한강공원이 최고입니다.
                </blockquote>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏢 3. 송파구민체육센터 — 접근성의 왕</h2>
              <p className="text-gray-700 mb-4">
                송파구민체육센터는 <strong className="text-gray-900">지하철 접근성</strong>이 뛰어난 곳입니다.<br />
                송파역에서 도보 5분 거리에 있어 교통이 편리합니다.<br />
                일상적인 테니스를 즐기고 싶은 분들에게 추천합니다.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">🧩 송파구민체육센터 특징:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li><strong>장점:</strong> 뛰어난 접근성, 합리적 가격, 깔끔한 시설</li>
                  <li><strong>단점:</strong> 예약 경쟁 심함, 주차 공간 부족</li>
                  <li><strong>추천 대상:</strong> 송파 거주민, 접근성 중시 플레이어</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 4. 잠실종합운동장 테니스장 — 종합 스포츠의 메카</h2>
              <p className="text-gray-700 mb-4">
                잠실종합운동장 테니스장은 <strong className="text-gray-900">다양한 스포츠 시설</strong>과 함께 있습니다.<br />
                테니스 외에도 수영, 헬스 등 다양한 운동을 할 수 있습니다.<br />
                종합적인 운동을 원하는 분들에게 추천합니다.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">💪 잠실종합운동장 특징:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>다양한 스포츠 시설 (수영, 헬스, 배드민턴)</li>
                  <li>전문 코치진과 레슨 프로그램</li>
                  <li>주차 시설 완비</li>
                  <li>식당과 편의시설 완비</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌸 5. 여의도한강공원 테니스장 — 비즈니스맨의 선택</h2>
              <p className="text-gray-700 mb-4">
                여의도한강공원 테니스장은 <strong className="text-gray-900">비즈니스맨들이 선호</strong>하는 곳입니다.<br />
                여의도 업무지구와 가까워 점심시간이나 퇴근 후 이용하기 좋습니다.<br />
                업무 스트레스 해소를 원하는 직장인들에게 추천합니다.
              </p>
              
              <div className="bg-pink-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-pink-900 mb-3">여의도한강공원 특징:</h3>
                <ul className="list-disc list-inside space-y-2 text-pink-800">
                  <li><strong>장점:</strong> 업무지구 접근성, 야경이 아름다움, 24시간 운영</li>
                  <li><strong>단점:</strong> 주말 혼잡, 높은 이용료</li>
                  <li><strong>추천 대상:</strong> 여의도 근무자, 야간 테니스 선호자</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏫 6. 서울대학교 테니스장 — 학원가의 히든젬</h2>
              <p className="text-gray-700 mb-4">
                서울대학교 테니스장은 <strong className="text-gray-900">학원가의 숨은 보석</strong>입니다.<br />
                대학 캠퍼스 내에 있어 조용하고 학구적인 분위기입니다.<br />
                학생이나 연구원들에게 추천합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏰 7. 경복궁 테니스장 — 역사와 함께</h2>
              <p className="text-gray-700 mb-4">
                경복궁 테니스장은 <strong className="text-gray-900">역사적 의미</strong>가 있는 곳입니다.<br />
                경복궁 근처에 위치해 한국의 전통과 현대 스포츠가 만나는 곳입니다.<br />
                관광과 테니스를 함께 즐기고 싶은 분들에게 추천합니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 서울에서 가장 저렴한 테니스장은 어디인가요?</p>
                  <p className="text-gray-700">A. 구민체육센터들이 가장 저렴합니다. 송파구민체육센터나 강남구민체육센터를 추천합니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 예약이 어려운 테니스장은 어떻게 이용하나요?</p>
                  <p className="text-gray-700">A. 평일 오전 시간대나 새벽 시간대를 이용하면 예약이 더 쉬워집니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "테니스장은 플레이어의 성격을 보여준다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 올림픽공원에서만 플레이했는데 실력이 급상승했죠.<br />
                  좋은 시설에서 플레이하면 실력도 빨리 늘어납니다. 테니스장 선택이 중요합니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 서울은 테니스 천국이다</h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  서울에는 다양한 테니스장이 있습니다.<br />
                  자신의 수준과 목적에 맞는 테니스장을 선택하세요.<br />
                  <strong className="text-gray-900">좋은 시설에서 플레이하면 실력도 빨리 늘어납니다.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/utility/play-style-test" className="text-blue-600 hover:underline">테니스 플레이 스타일 진단</Link>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/seoul-best-tennis-courts');
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