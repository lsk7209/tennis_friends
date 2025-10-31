'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function OpponentAnalysisStrategy() {
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
            <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4 text-sm font-semibold">
              전략 분석
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🎯 상대를 읽는 5가지 전략적 분석법
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-02-01</span>
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
            <a href="#stroke-analysis" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 스트로크 패턴 분석하기
            </a>
            <a href="#weakness-spot" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 약점 포인트 찾아내기
            </a>
            <a href="#mental-state" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 멘탈 상태 파악하기
            </a>
            <a href="#positioning" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 포지셔닝 패턴 관찰
            </a>
            <a href="#adaptation" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 실시간 전략 조정
            </a>
            <a href="#practice" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 분석 훈련법
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
              "상대가 너무 강해요. 어떻게 해야 할까요?"<br />
              "항상 같은 패턴으로 져요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">상대를 분석하지 않는 것</strong>입니다.<br />
              상대를 읽는 자가 승리합니다.
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-600">
              "테니스는 상대를 이기는 게임이 아니라, 상대를 읽는 게임이다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="stroke-analysis">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 1. 스트로크 패턴 분석하기</h2>
              <p className="text-gray-700 mb-4">
                상대의 <strong className="text-gray-900">스트로크 패턴을 관찰</strong>하세요.<br />
                어느 방향으로 공을 치는지, 속도는 어떤지, 스핀은 어떻게 걸리는지 파악하세요.<br />
                이 분석이 승리의 핵심입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 분석 포인트:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>포핸드/백핸드 방향성</li>
                  <li>공의 속도와 스핀</li>
                  <li>약한 쪽과 강한 쪽</li>
                  <li>특정 상황 대응 패턴</li>
                </ul>
              </div>
            </section>

            <section id="weakness-spot">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 2. 약점 포인트 찾아내기</h2>
              <p className="text-gray-700 mb-4">
                모든 선수에게는 <strong className="text-gray-900">약점이 있습니다</strong>.<br />
                크로스 백핸드가 약한지, 로브 대응이 느린지, 네트 플레이가 취약한지 찾아내세요.<br />
                약점을 공략하는 것이 승리의 지름길입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>전략:</strong> 상대의 약점을 3번 연속 공략하면 승률이 올라갑니다.
                </blockquote>
              </div>
            </section>

            <section id="mental-state">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧠 3. 멘탈 상태 파악하기</h2>
              <p className="text-gray-700 mb-4">
                상대의 <strong className="text-gray-900">멘탈 상태를 관찰</strong>하세요.<br />
                긴장한 기색이 보이면 공격적으로, 자신감 있어 보이면 로브로 시간을 끌어보세요.<br />
                상대의 표정과 행동에서 힌트를 얻을 수 있습니다.
              </p>
            </section>

            <section id="positioning">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 4. 포지셔닝 패턴 관찰</h2>
              <p className="text-gray-700 mb-4">
                상대의 <strong className="text-gray-900">움직임 패턴을 분석</strong>하세요.<br />
                크로스 샷에 약한지, 다운 더 라인에 취약한지 파악하세요.<br />
                포지셔닝 분석이 전략의 핵심입니다.
              </p>
            </section>

            <section id="adaptation">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 5. 실시간 전략 조정</h2>
              <p className="text-gray-700 mb-4">
                경기가 진행되면서 <strong className="text-gray-900">전략을 조정</strong>하세요.<br />
                상대가 적응하면 새로운 패턴을 시도하세요.<br />
                유연한 전략 조정이 승리의 열쇠입니다.
              </p>
            </section>

            <section id="practice">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 6. 분석 훈련법</h2>
              <p className="text-gray-700 mb-4">
                상대 분석 능력을 키우는 훈련법을 소개합니다.<br />
                매일 연습하면 상대를 읽는 눈이 생깁니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">👁️ 관찰 훈련</h3>
                    <p className="text-sm text-gray-600">경기 관람하며 상대 패턴 분석 연습</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">📝 기록 분석</h3>
                    <p className="text-sm text-gray-600">자신의 경기 기록하며 패턴 찾기</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 경기가 바쁘면 상대를 분석하기 힘든데요?</p>
                  <p className="text-gray-700">A. 첫 10분 안에 상대의 기본 패턴을 파악하세요. 서브와 첫 몇 번의 랠리로 충분합니다.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "상대를 읽는 눈이 승리한다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 항상 강한 상대에게 졌죠. '왜 졌는지 모르겠어요'라고 했어요.<br />
                  상대 분석을 가르쳤어요. 3개월 후, 그 제자는 강한 상대도 이기기 시작했어요.<br />
                  테니스는 기술이 아니라, 상대를 읽는 게임입니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 상대를 읽는 전략적 플레이어 되기</h2>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스는 상대를 이기는 게임이 아니라, 상대를 읽는 게임입니다.<br />
                  상대의 패턴을 분석하고 약점을 공략하세요.<br />
                  <strong className="text-gray-900">오늘부터 상대를 분석하는 눈을 키워보세요.</strong>
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <Link href="/blog/tennis-mental-techniques" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법</p>
                      <p className="text-sm text-gray-600 mt-1">긴장감 극복, 멘탈 트레이닝, 경기 중 마음 컨트롤</p>
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
                <Link href="/blog/net-play-mastery" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏓</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">네트 플레이의 달인이 되는 6가지 전략</p>
                      <p className="text-sm text-gray-600 mt-1">발리, 포지셔닝, 타이밍 등 네트 플레이 완전 가이드</p>
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
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/opponent-analysis-strategy');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-red-600 hover:bg-red-700 text-white"
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
