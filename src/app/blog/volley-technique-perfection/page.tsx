'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function VolleyTechniquePerfection() {
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
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2 mb-4 text-sm font-semibold">
              테니스 기술
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🎯 발리 기술의 달인이 되는 7가지 비법
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-29</span>
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
            <a href="#ready-position" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 발리 준비 자세의 완벽한 폼
            </a>
            <a href="#wrist-snap" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 손목 스냅의 과학
            </a>
            <a href="#racquet-angle" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 라켓 면 각도의 비밀
            </a>
            <a href="#footwork" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 발리 전용 풋워크
            </a>
            <a href="#volley-types" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 다양한 발리 유형 마스터하기
            </a>
            <a href="#direction-control" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 방향 조절의 기술
            </a>
            <a href="#practice-methods" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 발리 실력 향상 훈련법
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
              "발리가 자꾸 라인을 벗어나요."<br />
              "공을 제대로 맞추지 못해요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">준비 자세와 손목 사용법</strong>에 있습니다.<br />
              발리는 네트 플레이의 핵심이자, 승리의 무기입니다.
            </p>
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600">
              "발리는 예술이다. 공을 막는 것이 아니라, 공을 노래하게 하는 것이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="ready-position">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 1. 발리 준비 자세의 완벽한 폼</h2>
              <p className="text-gray-700 mb-4">
                발리의 성공은 <strong className="text-gray-900">준비 자세에서 시작</strong>됩니다.<br />
                라켓을 가슴 높이로 들어 올리고, 팔꿈치를 몸에 붙이세요.<br />
                손목은 자연스럽게 젖혀서 라켓 면이 하늘을 향하게 합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 준비 자세 체크리스트:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>라켓 헤드를 어깨 높이로 유지</li>
                  <li>팔꿈치를 몸통에 밀착</li>
                  <li>비 지지 손은 자연스럽게 배 앞에</li>
                  <li>무게 중심을 발바닥 앞쪽에 두기</li>
                </ul>
              </div>
            </section>

            <section id="wrist-snap">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🤏 2. 손목 스냅의 과학</h2>
              <p className="text-gray-700 mb-4">
                발리의 핵심은 <strong className="text-gray-900">손목의 빠르고 정확한 스냅</strong>입니다.<br />
                공이 라켓에 닿는 순간, 손목을 앞으로 튕겨서 공을 밀어내세요.<br />
                이 움직임이 공의 방향과 속도를 결정합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>핵심:</strong> 손목 스냅은 0.1초의 예술입니다. 너무 일찍 하면 공이 뜨고, 늦으면 약해집니다.
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">코치 조언:</strong><br />
                  초보자들은 손목을 사용하지 않으려고 하는 실수를 많이 합니다. 손목이 발리의 엔진입니다.
                </p>
              </div>
            </section>

            <section id="racquet-angle">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📐 3. 라켓 면 각도의 비밀</h2>
              <p className="text-gray-700 mb-4">
                라켓 면의 각도가 <strong className="text-gray-900">공의 궤적을 결정</strong>합니다.<br />
                공을 앞으로 보내고 싶으면 라켓 면을 약간 열고,<br />
                공을 낮게 유지하고 싶으면 라켓 면을 약간 닫으세요.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 각도 조절법:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>공을 앞으로: 라켓 면 10-15도 열기</li>
                  <li>공을 낮게: 라켓 면 5-10도 닫기</li>
                  <li>크로스 방향: 몸을 틀어 라켓 면 각도 조정</li>
                  <li>다운 더 라인: 라켓 면을 공에 수직으로</li>
                </ul>
              </div>
            </section>

            <section id="footwork">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚶 4. 발리 전용 풋워크</h2>
              <p className="text-gray-700 mb-4">
                발리에서는 <strong className="text-gray-900">작고 빠른 발 움직임</strong>이 필수적입니다.<br />
                큰 스텝 대신, 작은 스텝으로 공의 위치에 맞춰 이동하세요.<br />
                발리 전용 풋워크는 반응 속도를 높여줍니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">🏃 발리 풋워크:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>기본 스탠스: 발을 어깨 너비로 벌리기</li>
                  <li>스플릿 스텝: 상대가 치는 순간 발 벌리기</li>
                  <li>크로스 오버: 측면 이동 시 앞발이 뒤발 넘기</li>
                  <li>리커버리: 발리 후 즉시 중앙으로 복귀</li>
                </ol>
              </div>
            </section>

            <section id="volley-types">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 5. 다양한 발리 유형 마스터하기</h2>
              <p className="text-gray-700 mb-4">
                상황에 따라 <strong className="text-gray-900">다른 발리 기술</strong>을 사용해야 합니다.<br />
                블로킹 발리, 펀치 발리, 드롭 발리 등 각각의 특징을 이해하세요.<br />
                같은 발리라도 상황에 맞는 선택이 승패를 좌우합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔒 블로킹 발리</h3>
                    <p className="text-sm text-gray-600">빠른 공에 대한 수비 발리. 라켓을 공 앞으로 내밀어 막기.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">👊 펀치 발리</h3>
                    <p className="text-sm text-gray-600">공격적인 발리. 손목 스냅으로 공을 강하게 밀어내기.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 드롭 발리</h3>
                    <p className="text-sm text-gray-600">공을 네트 바로 넘기기. 상대의 타이밍을 빼앗음.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔄 스윙 발리</h3>
                    <p className="text-sm text-gray-600">궤적을 크게 그리는 발리. 각도 만들기에 유용.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="direction-control">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 6. 방향 조절의 기술</h2>
              <p className="text-gray-700 mb-4">
                발리의 방향 조절은 <strong className="text-gray-900">몸의 회전과 라켓 면 각도</strong>의 조화입니다.<br />
                크로스 방향으로 보내고 싶으면 몸을 틀어 라켓 면을 조정하세요.<br />
                다운 더 라인 방향은 몸을 곧게 유지한 채 치세요.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>방향 원칙:</strong> 몸이 향하는 방향으로 공이 갑니다. 방향을 바꾸고 싶으면 몸부터 움직이세요.
                </blockquote>
              </div>
            </section>

            <section id="practice-methods">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏋️ 7. 발리 실력 향상 훈련법</h2>
              <p className="text-gray-700 mb-4">
                발리 실력을 키우는 효과적인 드릴을 소개합니다.<br />
                매일 20-30분씩 연습하면 큰 향상을 볼 수 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎾 미러 드릴</h3>
                    <p className="text-sm text-gray-600">코치의 발리를 따라하기. 폼 교정에 효과적.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🏃 풋워크 연습</h3>
                    <p className="text-sm text-gray-600">공 없이 스플릿 스텝만 반복. 반응 속도 향상.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 타겟 발리</h3>
                    <p className="text-sm text-gray-600">코트 특정 지점을 지정해 발리. 정확도 향상.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">⚡ 속도 발리</h3>
                    <p className="text-sm text-gray-600">빠른 리듬으로 발리 연습. 순발력 기르기.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔄 방향 전환</h3>
                    <p className="text-sm text-gray-600">크로스와 다운 더 라인 번갈아 연습.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 발리가 자꾸 짧게 나가는데 어떻게 고치나요?</p>
                  <p className="text-gray-700">A. 팔을 더 길게 뻗어서 치세요. 손목 스냅을 이용해 공을 앞으로 밀어내는 느낌으로 접근하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 발리할 때 팔이 피로한데 어떻게 해야 하나요?</p>
                  <p className="text-gray-700">A. 손목과 팔꿈치를 더 많이 사용하세요. 어깨에 무리가 가지 않도록 폼을 교정하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 크로스 발리가 안 되는데 팁이 있나요?</p>
                  <p className="text-gray-700">A. 몸을 공의 방향으로 틀고 라켓 면을 조정하세요. 처음에는 천천히 연습하세요.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "발리는 마음의 춤이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 발리가 항상 아웃됐죠. '왜 이렇게 안 맞을까?'라고 했어요.<br />
                  가르쳐보니 손목을 전혀 사용하지 않았어요. 손목 스냅 하나로 모든 게 달라졌습니다.<br />
                  발리는 기술이 아니라, 공과의 대화입니다. 공이 원하는 대로 안내하세요."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/blog/net-play-mastery" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-gray-900">네트 플레이의 달인이 되는 6가지 전략 🏓</p>
                </Link>
                <Link href="/blog/drop-shot-lob-guide" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-green-900">드롭샷과 로브 활용법 🎾</p>
                </Link>
                <Link href="/utility/equipment-recommendation" className="block p-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <p className="font-semibold text-purple-900">테니스 장비 추천 시스템</p>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 발리는 네트의 시이다</h2>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  발리는 단순한 기술이 아니라, 테니스의 예술입니다.<br />
                  공을 막는 것이 아니라, 공을 노래하게 하는 것입니다.<br />
                  <strong className="text-gray-900">오늘부터 발리로 당신의 시를 써보세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/drop-shot-lob-guide" className="text-blue-600 hover:underline">드롭샷과 로브 활용법 🎾</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/volley-technique-perfection');
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
