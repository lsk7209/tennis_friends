'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function ServeTechniqueImprovement() {
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
              테니스 기술
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🎾 서브가 흔들릴 때, 이 5가지 포인트를 점검하라
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-27</span>
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
            <a href="#ball-toss" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 공 던지기가 서브의 70%를 결정한다
            </a>
            <a href="#stance-balance" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 스탠스가 무너지면 서브도 무너진다
            </a>
            <a href="#racquet-path" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 라켓 궤적이 몸의 회전을 따르지 않는다
            </a>
            <a href="#timing-rhythm" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 타이밍이 리듬을 잃으면 정밀도가 떨어진다
            </a>
            <a href="#mental-focus" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 정신적 집중이 서브의 완성도를 높인다
            </a>
            <a href="#practice-drills" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 서브 향상 드릴 5가지
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
              "서브가 자꾸 더블 폴트 나와요."<br />
              "첫 서브가 안 들어가요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">공 던지기와 몸의 밸런스</strong>에 있습니다.<br />
              서브는 테니스의 시작이자, 경기의 승패를 좌우하는 핵심 기술입니다.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "좋은 서브는 경기의 60%를 장악한다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="ball-toss">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 1. 공 던지기가 서브의 70%를 결정한다</h2>
              <p className="text-gray-700 mb-4">
                서브의 성공률을 좌우하는 가장 중요한 요소는 <strong className="text-gray-900">공 던지기</strong>입니다.<br />
                공을 높이, 일정하게 던지지 못하면 라켓이 공을 제대로 맞추기 어렵습니다.<br />
                이상적인 공 던지기는 <strong className="text-gray-900">어깨 높이, 몸 앞쪽 30cm 지점</strong>입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 교정 루틴:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>공을 잡고 눈앞에 놓고 3초간 버티기</li>
                  <li>손목을 사용하지 말고 팔꿈치부터 던지기</li>
                  <li>공이 최고점에 도달할 때까지 팔을 곧게 펴기</li>
                  <li>매일 20회 반복 훈련</li>
                </ol>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <p className="text-sm text-gray-600">
                  📎 <Link href="/utility/ntrp-test" className="text-blue-600 hover:underline">NTRP 실력 테스트</Link>로 현재 수준 파악하기
                </p>
              </div>
            </section>

            <section id="stance-balance">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🦵 2. 스탠스가 무너지면 서브도 무너진다</h2>
              <p className="text-gray-700 mb-4">
                서브의 안정성은 <strong className="text-gray-900">발의 위치와 몸의 밸런스</strong>에서 시작됩니다.<br />
                플랫폼 스탠스는 양발을 어깨 너비로 벌리고, 무게중심을 발바닥 중앙에 두는 것이 중요합니다.<br />
                피니시 포지션에서도 몸의 균형을 유지해야 다음 샷을 준비할 수 있습니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>포인트:</strong> 서브 중 몸이 기울면 공의 방향이 틀어집니다. 수직으로 서서 균형을 유지하세요.
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">코치 조언:</strong><br />
                  초보자들은 몸을 숙이거나 앞으로 기울이는 실수를 많이 합니다. 허리를 곧게 펴고 턱을 당기세요.
                </p>
              </div>
            </section>

            <section id="racquet-path">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 3. 라켓 궤적이 몸의 회전을 따르지 않는다</h2>
              <p className="text-gray-700 mb-4">
                라켓의 스윙 궤적이 일직선이면 파워는 나와도 정확도가 떨어집니다.<br />
                효과적인 서브는 <strong className="text-gray-900">몸의 회전과 라켓의 원형 궤적</strong>이 조화를 이루어야 합니다.<br />
                라켓 헤드를 뒤로 젖힌 후 몸의 회전을 따라 앞으로 휘둘러야 공에 스핀이 걸리고 방향이 정확해집니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 훈련법:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>벽을 보고 서서 라켓으로 원을 그리기</li>
                  <li>천천히 몸을 회전시키며 라켓 따라가기</li>
                  <li>실제 공을 치기 전에 20회 공회전 연습</li>
                </ul>
              </div>
            </section>

            <section id="timing-rhythm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⏰ 4. 타이밍이 리듬을 잃으면 정밀도가 떨어진다</h2>
              <p className="text-gray-700 mb-4">
                서브의 타이밍은 <strong className="text-gray-900">호흡과 리듬</strong>의 문제입니다.<br />
                공을 던진 후 너무 서두르거나, 반대로 너무 늦게 치면 안정적인 임팩트가 불가능합니다.<br />
                공이 최고점에 도달하기 직전에 라켓이 공을 만나야 이상적인 타이밍입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">💪 타이밍 연습:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>숨을 들이마시며 라켓 뒤로 젖히기</li>
                  <li>공을 던지며 숨을 참기</li>
                  <li>공이 떨어질 때 숨을 내쉬며 스윙</li>
                </ol>
              </div>

              <div className="bg-white border border-gray-300 p-6 rounded-lg">
                <p className="text-blue-800">
                  📍 <strong className="text-blue-900">계절별 팁:</strong> 여름철 더운 날씨에는 호흡이 가빠져 타이밍이 빨라집니다. 의식적으로 천천히 호흡하세요.
                </p>
              </div>
            </section>

            <section id="mental-focus">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧠 5. 정신적 집중이 서브의 완성도를 높인다</h2>
              <p className="text-gray-700 mb-4">
                서브는 기술만큼 <strong className="text-gray-900">정신력</strong>의 영역입니다.<br />
                더블 폴트가 나올 때마다 자신감을 잃지 말고, 매 서브를 새로운 기회로 생각하세요.<br />
                시선은 공에 고정시키고, 부정적인 생각을 버리세요.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>멘탈 팁:</strong> "다음 서브는 반드시 들어간다"는 생각으로 시작하세요. 긍정적인 자기암시가 서브를 바꿉니다.
                </blockquote>
              </div>
            </section>

            <section id="practice-drills">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏋️ 6. 서브 향상 드릴 5가지</h2>
              <p className="text-gray-700 mb-4">
                서브 실력을 키우는 가장 효과적인 방법은 <strong className="text-gray-900">반복 훈련</strong>입니다.<br />
                아래 드릴을 매일 15-20분씩 연습하세요.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎾 공 던지기 마스터</h3>
                    <p className="text-sm text-gray-600">벽 앞에서 공 던지기 50회 반복. 높이와 위치 일정하게 유지.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔄 스윙 궤적 연습</h3>
                    <p className="text-sm text-gray-600">공 없이 라켓으로만 원형 스윙 30회. 몸의 회전과 동기화.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">⏰ 타이밍 드릴</h3>
                    <p className="text-sm text-gray-600">공 던진 후 2초 카운트 세며 스윙. 서두르지 말고 리듬 유지.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 타겟 서브</h3>
                    <p className="text-sm text-gray-600">코트 특정 지점을 지정해 서브 20회. 정확도 향상.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🧘 멘탈 서브</h3>
                    <p className="text-sm text-gray-600">눈 감고 심호흡하며 서브 10회. 정신 집중력 강화.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 서브가 항상 왼쪽으로 가는데 어떻게 고치나요?</p>
                  <p className="text-gray-700">A. 몸이 서브 방향으로 기울고 있는지 확인하세요. 수직으로 서서 라켓 면을 공에 수직으로 유지하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 첫 서브가 안 들어갈 때 어떻게 해야 하나요?</p>
                  <p className="text-gray-700">A. 무리하게 에이스를 노리지 말고, 일단 코트 안에 들어가게 하는 연습부터 하세요. 정확도가 우선입니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 서브 연습은 얼마나 해야 효과가 나오나요?</p>
                  <p className="text-gray-700">A. 매일 15-20분씩 일주일 정도 하면 기본기가 잡힙니다. 하지만 꾸준한 연습이 중요합니다.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "서브는 경기의 시작이자 끝이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 서브 때문에 경기를 망쳤죠. 공 던지기부터 다시 가르쳤습니다.<br />
                  3개월 후, 그 제자의 서브 성공률은 80%를 넘었어요. 서브 하나로 경기가 달라집니다.<br />
                  공 던지기가 서툴다면, 라켓을 만지지 말고 공 던지기부터 연습하세요."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/backhand-swing-correction" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">백핸드 스윙이 불안할 때, 이 3가지를 점검하라 🎯</p>
                </Link>
                <Link href="/blog/tennis-mental-techniques" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-green-900">테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법 🧠</p>
                </Link>
                <Link href="/utility/equipment-recommendation" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-purple-900">테니스 장비 추천 시스템</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 서브는 연습의 산물이다</h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  서브는 단순한 기술이 아니라, 당신의 테니스 실력을 보여주는 거울입니다.<br />
                  공 던지기부터 시작해 하나씩 개선하다 보면, 어느새 안정적인 서브가 완성됩니다.<br />
                  <strong className="text-gray-900">오늘부터 공 던지기 연습부터 시작하세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/net-play-mastery" className="text-blue-600 hover:underline">네트 플레이 마스터하기 🏓</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/serve-technique-improvement');
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
