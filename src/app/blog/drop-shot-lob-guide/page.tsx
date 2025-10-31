'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function DropShotLobGuide() {
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
            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 mb-4 text-sm font-semibold">
              테니스 기술
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🎾 드롭샷과 로브의 마스터 전략
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-30</span>
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
            <a href="#drop-shot-basics" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 드롭샷의 기본 원리와 타이밍
            </a>
            <a href="#drop-shot-technique" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 드롭샷 기술 완성하기
            </a>
            <a href="#lob-basics" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 로브의 기본과 응용
            </a>
            <a href="#lob-technique" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 로브 기술 향상법
            </a>
            <a href="#when-to-use" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 드롭샷과 로브를 사용할 타이밍
            </a>
            <a href="#strategic-play" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 전략적 활용법
            </a>
            <a href="#practice-drills" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 실전 훈련 드릴
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
              "드롭샷이 항상 짧아요."<br />
              "로브가 네트에 걸려요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">타이밍과 기술의 균형</strong>에 있습니다.<br />
              드롭샷과 로브는 테니스의 전략적 무기입니다.
            </p>
            <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-600">
              "드롭샷은 속임수, 로브는 구원이다. 둘 다 타이밍의 예술이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="drop-shot-basics">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 1. 드롭샷의 기본 원리와 타이밍</h2>
              <p className="text-gray-700 mb-4">
                드롭샷은 <strong className="text-gray-900">상대를 네트 앞으로 유인하는 전략적 샷</strong>입니다.<br />
                공을 살짝 건드려 네트 바로 넘기는 기술로, 상대의 위치를 교란시킵니다.<br />
                타이밍이 생명인 기술입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 드롭샷 타이밍:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>상대가 베이스라인에 있을 때 사용</li>
                  <li>상대의 스트로크가 약해 보일 때</li>
                  <li>득점 기회를 만들고 싶을 때</li>
                  <li>상대의 리듬을 깨고 싶을 때</li>
                </ul>
              </div>
            </section>

            <section id="drop-shot-technique">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 2. 드롭샷 기술 완성하기</h2>
              <p className="text-gray-700 mb-4">
                드롭샷의 핵심은 <strong className="text-gray-900">공을 살짝 스치는 터치</strong>입니다.<br />
                세게 치지 말고, 공의 바운스를 최소화하는 느낌으로 접근하세요.<br />
                라켓 면은 살짝 열어서 공이 낮게 날아가게 합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>핵심:</strong> 드롭샷은 힘이 아니라 감각입니다. 공을 '쓰다듬는' 느낌으로 치세요.
                </blockquote>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  💬 <strong className="text-gray-900">코치 조언:</strong><br />
                  초보자들은 공을 너무 세게 치려고 합니다. 드롭샷은 공의 속도를 죽이는 기술입니다.
                </p>
              </div>
            </section>

            <section id="lob-basics">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏔️ 3. 로브의 기본과 응용</h2>
              <p className="text-gray-700 mb-4">
                로브는 <strong className="text-gray-900">상대를 네트 뒤로 물러나게 하는 방어 기술</strong>입니다.<br />
                높은 궤적으로 공을 넘겨 상대의 타이밍을 빼앗습니다.<br />
                공격과 방어 모두에 사용할 수 있는 다재다능한 샷입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 로브의 용도:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>네트에 올라온 상대를 물러나게 하기</li>
                  <li>시간 벌기 및 리듬 회복</li>
                  <li>상대의 공격을 무력화하기</li>
                  <li>상대의 위치를 바꾸기</li>
                </ul>
              </div>
            </section>

            <section id="lob-technique">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🌄 4. 로브 기술 향상법</h2>
              <p className="text-gray-700 mb-4">
                로브는 <strong className="text-gray-900">컨트롤과 타이밍의 조화</strong>가 중요합니다.<br />
                라켓을 뒤로 충분히 젖힌 후, 팔을 높이 들어 올리며 스윙하세요.<br />
                공이 높은 포물선을 그리며 날아가야 합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">📈 로브 기술:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>라켓을 머리 위로 충분히 젖히기</li>
                  <li>팔을 높이 들어 올려 큰 스윙</li>
                  <li>공의 아래쪽을 스치듯 치기</li>
                  <li>팔로우 스루는 완전히 마무리</li>
                </ol>
              </div>
            </section>

            <section id="when-to-use">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⏰ 5. 드롭샷과 로브를 사용할 타이밍</h2>
              <p className="text-gray-700 mb-4">
                잘못된 타이밍의 드롭샷과 로브는 <strong className="text-gray-900">역효과</strong>를 냅니다.<br />
                상대의 위치와 상황을 파악한 후에 사용하세요.<br />
                예측 가능한 패턴을 만들지 않도록 랜덤하게 사용하세요.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎾 드롭샷 타이밍</h3>
                    <p className="text-sm text-gray-600">상대가 뒤로 물러났을 때, 스트로크가 느렸을 때, 득점 기회를 만들고 싶을 때.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🏔️ 로브 타이밍</h3>
                    <p className="text-sm text-gray-600">상대가 네트에 가까이 왔을 때, 공격이 강할 때, 시간을 벌어야 할 때.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="strategic-play">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 6. 전략적 활용법</h2>
              <p className="text-gray-700 mb-4">
                드롭샷과 로브는 <strong className="text-gray-900">전술의 핵심 요소</strong>입니다.<br />
                단순한 기술이 아니라, 상대를 교란시키고 주도권을 잡는 전략입니다.<br />
                게임의 흐름을 바꾸는 강력한 무기가 됩니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>전략 팁:</strong> 드롭샷으로 상대를 네트 앞으로 끌어들이고, 로브로 다시 뒤로 물러나게 하세요. 이 패턴이 상대를 혼란스럽게 합니다.
                </blockquote>
              </div>
            </section>

            <section id="practice-drills">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏋️ 7. 실전 훈련 드릴</h2>
              <p className="text-gray-700 mb-4">
                드롭샷과 로브 실력을 키우는 효과적인 훈련법을 소개합니다.<br />
                매일 15-20분씩 연습하면 큰 향상을 볼 수 있습니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎾 드롭샷 타겟</h3>
                    <p className="text-sm text-gray-600">코트 특정 지점에 드롭샷 반복. 정확도 향상.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🏔️ 로브 높이</h3>
                    <p className="text-sm text-gray-600">공이 얼마나 높이 올라가는지 체크하며 연습.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🔄 번갈아 치기</h3>
                    <p className="text-sm text-gray-600">드롭샷과 로브 번갈아 연습. 타이밍 감각 기르기.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 포인트 연습</h3>
                    <p className="text-sm text-gray-600">실제 게임 상황에서 전략적으로 사용하기.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 드롭샷이 항상 짧게 나가는데 어떻게 고치나요?</p>
                  <p className="text-gray-700">A. 라켓 스피드를 늦추고 공의 아래쪽을 스치듯 치세요. 힘을 빼고 감각으로 접근하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 로브가 네트에 걸릴 때 어떻게 해야 하나요?</p>
                  <p className="text-gray-700">A. 공을 더 높이 치세요. 라켓을 더 뒤로 젖히고 팔로우 스루를 크게 하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 상대가 드롭샷에 강한데 어떻게 대응하나요?</p>
                  <p className="text-gray-700">A. 로브로 대응하거나, 드롭샷 빈도를 줄이고 일반 스트로크로 승부하세요.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "드롭샷과 로브는 전략의 춤이다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 드롭샷이 항상 실패했죠. '왜 안 될까?'라고 물었어요.<br />
                  가르쳐보니 공을 세게 치려고 했어요. '공을 쓰다듬어라'고 했죠.<br />
                  그 후, 드롭샷 하나로 경기를 뒤집었어요. 전략은 기술이 아니라, 마음의 문제입니다."
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/net-play-mastery" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏓</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">네트 플레이의 달인이 되는 6가지 전략</p>
                      <p className="text-sm text-gray-600 mt-1">발리, 포지셔닝, 타이밍 등 네트 플레이 완전 가이드</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/volley-technique-perfection" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">발리 기술 완성하기</p>
                      <p className="text-sm text-gray-600 mt-1">손목 스냅, 라켓 각도, 타이밍 등 발리 마스터하기</p>
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
                <Link href="/blog/mid-match-tactical-changes" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">경기 중 전술 변화</p>
                      <p className="text-sm text-gray-600 mt-1">타이밍, 패턴 변화, 페이스 조절 등 전략적 전환</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 전략적 샷의 달인 되기</h2>
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  드롭샷과 로브는 단순한 기술이 아니라, 전략의 무기입니다.<br />
                  상대를 교란시키고, 경기의 흐름을 바꾸는 강력한 도구입니다.<br />
                  <strong className="text-gray-900">오늘부터 드롭샷과 로브로 당신의 전략을 완성하세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/concentration-during-matches" className="text-blue-600 hover:underline">경기 중 집중력 향상법 🧠</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/drop-shot-lob-guide');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white"
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
