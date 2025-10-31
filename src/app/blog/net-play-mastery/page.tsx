'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function NetPlayMastery() {
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
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-4 text-sm font-semibold">
              테니스 기술
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🏓 네트 플레이의 달인이 되는 6가지 전략
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-28</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8분 읽기</span>
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
            <a href="#net-positioning" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 네트 포지셔닝이 승패를 좌우한다
            </a>
            <a href="#volley-technique" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 발리 기술의 핵심 포인트
            </a>
            <a href="#split-step" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 스플릿 스텝으로 반응 속도 높이기
            </a>
            <a href="#net-approach" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 네트 접근 타이밍의 과학
            </a>
            <a href="#net-coverage" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 네트 커버리지 전략
            </a>
            <a href="#mental-game" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 네트 플레이의 멘탈 게임
            </a>
            <a href="#practice-drills" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 네트 플레이 훈련법
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
              "네트에 올라가면 뭔가 불안해요."<br />
              "발리가 자꾸 라인을 벗어나요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">포지셔닝과 타이밍</strong>에 있습니다.<br />
              네트 플레이는 테니스 경기의 심장부이자, 승리의 핵심입니다.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              "네트는 왕의 자리다. 하지만 왕이 되려면 준비가 필요하다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="net-positioning">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 1. 네트 포지셔닝이 승패를 좌우한다</h2>
              <p className="text-gray-700 mb-4">
                네트 플레이의 기본은 <strong className="text-gray-900">올바른 포지션</strong>입니다.<br />
                너무 네트에 붙으면 상대의 로브에 취약하고, 너무 뒤에 있으면 발리가 늦어집니다.<br />
                이상적인 포지션은 <strong className="text-gray-900">네트에서 1-2미터 뒤쪽</strong>입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 포지션 원칙:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>양발을 어깨 너비로 벌리고 무릎을 살짝 굽히기</li>
                  <li>무게 중심을 발바닥 앞쪽에 두기</li>
                  <li>시선은 상대의 몸통을 바라보기</li>
                  <li>라켓은 준비 자세에서 가슴 높이 유지</li>
                </ul>
              </div>
            </section>

            <section id="volley-technique">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 2. 발리 기술의 핵심 포인트</h2>
              <p className="text-gray-700 mb-4">
                발리는 <strong className="text-gray-900">손목의 스냅과 라켓 면의 각도</strong>가 핵심입니다.<br />
                공을 막는 것이 아니라, 공을 가볍게 받아치는 느낌으로 접근하세요.<br />
                라켓은 공이 오기 직전에 준비되어 있어야 합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>핵심:</strong> 발리에서는 팔을 완전히 펴고, 손목만으로 공의 방향을 조정하세요.
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">코치 조언:</strong><br />
                  초보자들은 공을 세게 치려고 하는 실수를 많이 합니다. 발리는 공을 가볍게 터치하는 기술입니다.
                </p>
              </div>
            </section>

            <section id="split-step">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚀 3. 스플릿 스텝으로 반응 속도 높이기</h2>
              <p className="text-gray-700 mb-4">
                네트 플레이의 핵심은 <strong className="text-gray-900">빠른 반응</strong>입니다.<br />
                스플릿 스텝은 상대가 공을 칠 때 동시에 발을 벌려 준비하는 기술입니다.<br />
                이 작은 움직임이 반응 시간을 0.3초 단축시킵니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 연습법:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>상대가 라켓으로 공을 치는 순간 감지하기</li>
                  <li>동시에 양발을 어깨 너비로 벌리기</li>
                  <li>무릎을 살짝 굽히고 무게 중심 낮추기</li>
                  <li>발리는 스플릿 스텝 직후 시작</li>
                </ul>
              </div>
            </section>

            <section id="net-approach">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⏰ 4. 네트 접근 타이밍의 과학</h2>
              <p className="text-gray-700 mb-4">
                네트로 올라가는 타이밍은 <strong className="text-gray-900">상대의 약점을 파악하는 전략</strong>입니다.<br />
                상대의 스트로크가 약하거나, 공이 짧게 올 때 접근하는 것이 이상적입니다.<br />
                너무 일찍 올라가면 로브에 취약하고, 너무 늦으면 기회를 놓칩니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">📊 타이밍 지표:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>상대의 백스윙이 시작될 때 판단 시작</li>
                  <li>공이 네트를 넘어가기 전에 이동 시작</li>
                  <li>네트에 도착할 때는 공이 아직 올라오는 중</li>
                  <li>안전하게 접근할 수 있는 공 70%만 선택</li>
                </ol>
              </div>
            </section>

            <section id="net-coverage">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🛡️ 5. 네트 커버리지 전략</h2>
              <p className="text-gray-700 mb-4">
                네트에 올라간 후에는 <strong className="text-gray-900">코트 전체를 커버할 수 있는 준비</strong>가 필요합니다.<br />
                발리는 양방향으로 가능해야 하고, 상대의 로브에 대비해야 합니다.<br />
                포지션을 유지하면서도 빠르게 이동할 수 있는 밸런스가 중요합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>전략:</strong> 네트에서는 수비가 아니라 공격을 준비하세요. 상대의 실수를 기다리지 말고 만들어내세요.
                </blockquote>
              </div>
            </section>

            <section id="mental-game">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧠 6. 네트 플레이의 멘탈 게임</h2>
              <p className="text-gray-700 mb-4">
                네트 플레이는 <strong className="text-gray-900">용기와 집중력</strong>의 영역입니다.<br />
                실수를 두려워하지 말고, 적극적으로 공격하세요.<br />
                "네트에 올라가는 순간 이미 반쯤 이긴 것이다"는 마음가짐이 중요합니다.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">멘탈 팁:</strong><br />
                  네트에서는 패닉이 아닌 평온함을 유지하세요. 당신이 주도권을 쥐고 있다는 사실을 기억하세요.
                </p>
              </div>
            </section>

            <section id="practice-drills">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏋️ 7. 네트 플레이 훈련법</h2>
              <p className="text-gray-700 mb-4">
                네트 플레이 실력을 키우는 효과적인 드릴을 소개합니다.<br />
                매일 20-30분씩 연습하면 큰 향상을 볼 수 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎾 스플릿 스텝 드릴</h3>
                    <p className="text-sm text-gray-600">코치가 공을 칠 때마다 스플릿 스텝 반복. 반응 속도 향상.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔄 크로스 발리</h3>
                    <p className="text-sm text-gray-600">양방향으로 번갈아 발리 연습. 양손잡이 발리 실력 기르기.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">📍 포지션 유지</h3>
                    <p className="text-sm text-gray-600">네트에서 10분간 포지션 유지하기. 밸런스 향상.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">⚡ 로브 대응</h3>
                    <p className="text-sm text-gray-600">상대의 로브에 대한 반응 훈련. 후방 커버리지 연습.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 압박 발리</h3>
                    <p className="text-sm text-gray-600">상대에게 압박감을 주는 발리 연습. 공격성 기르기.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 네트에서 로브가 올 때 어떻게 대응해야 하나요?</p>
                  <p className="text-gray-700">A. 뒤로 물러나면서 오버헤드를 준비하세요. 공이 최고점에 도달하기 전에 칠 수 있어야 합니다.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 발리가 자꾸 짧게 나가는데 어떻게 고치나요?</p>
                  <p className="text-gray-700">A. 팔을 더 길게 뻗어서 치세요. 손목 스냅을 이용해 공을 앞으로 밀어내는 느낌으로.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 네트 접근 타이밍을 어떻게 판단하나요?</p>
                  <p className="text-gray-700">A. 상대의 스트로크가 약해 보이거나 공이 짧게 올 때 접근하세요. 처음에는 안전한 타이밍부터 연습하세요.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "네트는 용기의 전장이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 네트에 올라가는 걸 무서워했죠. '로브가 올까 봐'라고 했어요.<br />
                  그래서 말했죠. '네트에 올라가는 순간, 당신이 경기를 주도하는 거야.'<br />
                  2주 후, 그 제자는 네트 플레이의 달인이 되었어요. 용기가 실력을 만든 거죠."
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/volley-technique-perfection" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">발리 기술 완성하기</p>
                      <p className="text-sm text-gray-600 mt-1">손목 스냅, 라켓 각도, 타이밍 등 발리 마스터하기</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/serve-technique-improvement" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎾</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">서브 기술 향상법</p>
                      <p className="text-sm text-gray-600 mt-1">공 던지기, 스탠스, 라켓 궤적 등 서브 완전 가이드</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/drop-shot-lob-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎾</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">드롭샷과 로브 활용법</p>
                      <p className="text-sm text-gray-600 mt-1">드롭샷 타이밍, 로브 기술, 전략적 활용</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/concentration-during-matches" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">경기 중 집중력 향상법</p>
                      <p className="text-sm text-gray-600 mt-1">호흡, 루틴, 멘탈 컨트롤로 집중력 유지하기</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/opponent-analysis-strategy" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">상대 분석 전략</p>
                      <p className="text-sm text-gray-600 mt-1">스트로크 패턴, 약점 포인트, 멘탈 파악하기</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/play-style-test" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎾</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">플레이 스타일 테스트</p>
                      <p className="text-sm text-gray-600 mt-1">나의 테니스 스타일과 특징 분석하기</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 네트는 당신의 왕국이다</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  네트 플레이는 단순한 기술이 아니라, 테니스의 철학입니다.<br />
                  네트에 올라가는 순간, 당신은 경기의 주인이 됩니다.<br />
                  <strong className="text-gray-900">오늘부터 네트에 올라가서 당신의 왕국을 지켜보세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/volley-technique-perfection" className="text-blue-600 hover:underline">발리 기술 완성하기 🎯</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/net-play-mastery');
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
