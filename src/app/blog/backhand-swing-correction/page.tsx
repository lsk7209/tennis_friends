'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function BackhandSwingCorrection() {
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
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              테니스 레슨
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🎯 백핸드 스윙이 불안할 때, 이 3가지를 점검하라
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-26</span>
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
            <a href="#foot-position" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 발의 위치가 틀리면 스윙도 틀어진다
            </a>
            <a href="#rotation-timing" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 몸의 회전 타이밍을 맞춰라
            </a>
            <a href="#grip-pressure" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 그립 압력이 스윙을 망친다
            </a>
            <a href="#practice-routine" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 백핸드 안정화 훈련 루틴
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 자주 묻는 질문
            </a>
            <a href="#coach-story" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 코치의 이야기
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "백핸드가 자꾸 아웃이에요."<br />
              "임팩트가 불안해요."<br />
              하지만 문제는 대부분 라켓이 아니라 <strong className="text-gray-900">몸의 회전과 발의 위치</strong>입니다.<br />
              백핸드는 포핸드보다 더 정교한 타이밍이 필요한 기술입니다.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "백핸드는 몸의 회전으로 만드는 예술이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="foot-position">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🦵 1. 발의 위치가 틀리면 스윙도 틀어진다</h2>
              <p className="text-gray-700 mb-4">
                백핸드에서 가장 중요한 것은 <strong className="text-gray-900">발의 위치</strong>입니다.<br />
                오른손잡이 기준으로 왼발이 앞으로 나가면 몸이 열리고, 임팩트가 불안해집니다.<br />
                <strong className="text-gray-900">오른발이 앞으로, 왼발이 뒤로</strong> 위치해야 몸이 닫혀서 안정적인 스윙이 가능합니다.
              </p>
              
              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 교정 루틴:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>오른발을 앞으로 내밀고 2초간 버티기</li>
                  <li>회전은 어깨가 아닌 배꼽을 중심으로</li>
                  <li>임팩트 순간엔 복부 근육을 살짝 조이세요.</li>
                </ol>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  📎 <Link href="/utility/injury-check" className="text-blue-600 hover:underline">테니스 부상 리스크 체크</Link>
                </p>
              </div>
            </section>

            <section id="rotation-timing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 2. 몸의 회전 타이밍을 맞춰라</h2>
              <p className="text-gray-700 mb-4">
                초보자의 흔한 실수는 팔이 먼저 나가는 것입니다.<br />
                팔이 앞서면 라켓 면이 열리고, 공이 뜨거나 아웃됩니다.<br />
                스윙은 <strong className="text-gray-900">몸의 회전이 먼저, 팔의 스윙이 나중에</strong> 와야 합니다.
              </p>
              
              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>포인트:</strong> 몸이 30도 회전했을 때 라켓이 따라와야 합니다.
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">코치 조언:</strong><br />
                  백핸드 타이밍은 "몸이 먼저, 팔이 나중에"라는 생각을 하세요. 그게 안정적인 백핸드의 시작입니다.
                </p>
              </div>
            </section>

            <section id="grip-pressure">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">👁️ 3. 시선이 흔들리면 타점이 사라진다</h2>
              <p className="text-gray-700 mb-4">
                공을 끝까지 보지 않으면 타점이 앞뒤로 밀립니다.<br />
                하체가 흔들리면 시선이 흔들리고, 결국 <strong className="text-gray-900">타점 감각이 무너집니다.</strong>
              </p>
              
              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 훈련법:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>공이 바닥에 튀는 순간 → 라켓 준비</li>
                  <li>공이 라켓에 닿는 순간 → 시선 고정</li>
                  <li>스윙 후 팔이 올라간 뒤 → 시선 유지 1초</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  📎 <Link href="/utility/ntrp-test" className="text-blue-600 hover:underline">NTRP 자가 진단 테스트</Link>
                </p>
              </div>
            </section>

            <section id="practice-routine">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏋️ 4. 코어 강화가 백핸드 안정성의 핵심</h2>
              <p className="text-gray-700 mb-4">
                백핸드가 불안하면 근육이 아니라 코어 밸런스를 점검하세요.<br />
                매일 10분 루틴으로도 충분합니다.
              </p>
              
              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">💪 추천 루틴:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>사이드 플랭크 30초 × 3세트</li>
                  <li>런지 15회 × 3세트</li>
                  <li>트위스트 10회 × 2세트</li>
                </ol>
              </div>

              <div className="bg-white border border-gray-300 p-6 rounded-lg">
                <p className="text-blue-800">
                  📍 <strong className="text-blue-900">지역별 팁:</strong> 실내 테니스장(서울·용인·부산 기준)은 겨울철 체온이 낮아 복근 긴장이 약해지므로, 워밍업에 5분 추가하세요.
                </p>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 백핸드가 흔들릴 때 라켓을 바꿔야 하나요?</p>
                  <p className="text-gray-700">A. 아닙니다. 대부분은 발의 위치나 몸의 회전 부족 문제입니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 코어가 약한데 어떤 운동이 가장 효과적일까요?</p>
                  <p className="text-gray-700">A. 사이드 플랭크와 런지 운동이 기본입니다. 허리와 복부를 동시에 강화해 밸런스를 잡아줍니다.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "백핸드는 몸이 기억하는 리듬이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 라켓을 3번 바꿨지만 백핸드는 여전히 흔들렸죠. 결국 원인은 발의 위치였어요.<br />
                  2주간 체형 교정 후 백핸드가 달라졌습니다. 발이 먼저 준비되어야, 공이 원하는 대로 날아갑니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/forehand-body-balance" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">포핸드 스윙이 흔들릴 때, 라켓보다 몸을 먼저 봐라 💪</p>
                </Link>
                <Link href="/blog/string-tension-feel-guide" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-green-900">스트링 텐션, 숫자보다 감각이 중요하다 🎾</p>
                </Link>
                <Link href="/utility/ntrp-test" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-purple-900">NTRP 자가 진단 테스트</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 발이 먼저, 몸이 나중에</h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  백핸드는 손이 아니라 몸의 리듬으로 만들어집니다.<br />
                  라켓은 당신의 몸을 따라올 뿐이에요.<br />
                  <strong className="text-gray-900">발의 위치가 잡히면, 백핸드는 저절로 정답이 됩니다.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-mental-techniques" className="text-blue-600 hover:underline">테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법 🧠</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/backhand-swing-correction');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white"
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
