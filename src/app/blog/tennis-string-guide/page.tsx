'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisStringGuide() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 py-12">
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
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-semibold">
              장비 가이드
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🧵 라켓 스트링 종류별 특징과 선택 가이드
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-26</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9분 읽기</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "어떤 스트링을 써야 할지 모르겠어요."<br />
              "폴리, 나일론, 자연거트... 차이가 뭔가요?"<br />
              하지만 문제는 복잡함이 아니라 <strong className="text-gray-900">자신의 플레이 스타일을 모르는 것</strong>입니다.<br />
              스트링은 플레이어의 성격을 반영합니다.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              "스트링은 플레이어의 두 번째 손이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 1. 폴리 스트링 — 파워와 스핀의 선택</h2>
              <p className="text-gray-700 mb-4">
                폴리는 <strong className="text-gray-900">강한 파워와 스핀</strong>을 원하는 플레이어에게 적합합니다.<br />
                내구성이 뛰어나지만 텐션 유지력이 떨어집니다.<br />
                주 3회 이상 플레이하는 중급자 이상에게 추천합니다.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-red-900 mb-3">💡 폴리 스트링 특징:</h3>
                <ul className="list-disc list-inside space-y-2 text-red-800">
                  <li><strong>장점:</strong> 강한 파워, 뛰어난 스핀, 내구성</li>
                  <li><strong>단점:</strong> 텐션 유지력 부족, 팔꿈치 부담</li>
                  <li><strong>추천 대상:</strong> 중급자 이상, 파워형 플레이어</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 2. 나일론 스트링 — 안정성과 컨트롤의 선택</h2>
              <p className="text-gray-700 mb-4">
                나일론은 <strong className="text-gray-900">안정성과 컨트롤</strong>을 중시하는 플레이어에게 적합합니다.<br />
                텐션 유지력이 좋고 부드러운 타구감을 제공합니다.<br />
                초보자와 컨트롤형 플레이어에게 추천합니다.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>포인트:</strong> "안정적인 플레이"를 원한다면 나일론이 답입니다.
                </blockquote>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌿 3. 자연거트 스트링 — 프리미엄의 선택</h2>
              <p className="text-gray-700 mb-4">
                자연거트는 <strong className="text-gray-900">최고의 타구감과 컨트롤</strong>을 제공합니다.<br />
                하지만 비싸고 내구성이 떨어집니다.<br />
                고급 플레이어와 타구감을 중시하는 플레이어에게 추천합니다.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 자연거트 특징:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li><strong>장점:</strong> 최고의 타구감, 뛰어난 컨트롤</li>
                  <li><strong>단점:</strong> 높은 가격, 낮은 내구성</li>
                  <li><strong>추천 대상:</strong> 고급자, 타구감 중시 플레이어</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔧 4. 하이브리드 스트링 — 두 마리 토끼</h2>
              <p className="text-gray-700 mb-4">
                하이브리드는 <strong className="text-gray-900">메인과 크로스에 다른 스트링</strong>을 사용합니다.<br />
                폴리 메인 + 나일론 크로스 조합이 가장 인기입니다.<br />
                파워와 컨트롤을 모두 원하는 플레이어에게 추천합니다.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">💪 하이브리드 조합:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>폴리 메인 + 나일론 크로스 (파워 + 컨트롤)</li>
                  <li>나일론 메인 + 폴리 크로스 (컨트롤 + 스핀)</li>
                  <li>자연거트 메인 + 나일론 크로스 (타구감 + 내구성)</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 5. 플레이 스타일별 스트링 선택 가이드</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li><strong>공격형 플레이어:</strong> 폴리 또는 하이브리드</li>
                  <li><strong>수비형 플레이어:</strong> 나일론 또는 자연거트</li>
                  <li><strong>올라운드 플레이어:</strong> 하이브리드</li>
                  <li><strong>초보자:</strong> 나일론 (안전한 선택)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 처음 스트링을 바꿀 때 어떤 걸 선택해야 하나요?</p>
                  <p className="text-gray-700">A. 나일론을 추천합니다. 안전하고 컨트롤하기 쉬워서 초보자에게 적합합니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 스트링을 언제 교체해야 하나요?</p>
                  <p className="text-gray-700">A. 주 3회 이상 플레이한다면 6-8주마다, 주 1회 이하라면 10주마다 교체하세요.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "스트링은 플레이어의 성격이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 폴리를 썼는데 자꾸 아웃이 나더군요.<br />
                  나일론으로 바꾸자 컨트롤이 훨씬 좋아졌습니다. 스트링은 플레이어의 성격을 반영합니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 스트링은 플레이어의 성격이다</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  스트링은 단순한 장비가 아닙니다.<br />
                  플레이어의 성격과 스타일을 반영하는 중요한 요소입니다.<br />
                  <strong className="text-gray-900">자신의 플레이 스타일에 맞는 스트링을 선택하세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/seoul-best-tennis-courts" className="text-blue-600 hover:underline">서울 최고의 테니스장 TOP 7 추천 🏟️</Link>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-string-guide');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-green-600 hover:bg-green-700 text-white"
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