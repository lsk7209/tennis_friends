'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function MidMatchTacticalChanges() {
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
            <Badge className="bg-cyan-100 text-cyan-800 px-4 py-2 mb-4 text-sm font-semibold">
              전략 전술
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🔄 경기 중 전술 변화의 타이밍과 방법
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-02-02</span>
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
            <a href="#timing" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 전술 변화의 적절한 타이밍
            </a>
            <a href="#pattern-change" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 패턴 변화 전략
            </a>
            <a href="#pace-control" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 페이스 조절의 기술
            </a>
            <a href="#position-shift" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 포지션 이동 전략
            </a>
            <a href="#shot-variation" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 샷 다양화 전술
            </a>
            <a href="#faq" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 자주 묻는 질문
            </a>
            <a href="#coach-story" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 코치의 이야기
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "항상 같은 전술로 져요."<br />
              "상대가 적응해버렸어요."<br />
              하지만 진짜 문제는 <strong className="text-gray-900">전술 변화의 타이밍</strong>을 모르는 것입니다.<br />
              유연한 전략 조정이 승리의 핵심입니다.
            </p>
            <blockquote className="border-l-4 border-cyan-500 pl-4 italic text-gray-600">
              "고정된 전략은 패배의 지름길이다. 변화가 승리를 만든다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="timing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⏰ 1. 전술 변화의 적절한 타이밍</h2>
              <p className="text-gray-700 mb-4">
                전술 변화를 할 때는 <strong className="text-gray-900">세트 중간이나 게임 포인트</strong>가 좋습니다.<br />
                너무 이르거나 늦으면 효과가 떨어집니다.<br />
                상대가 패턴을 파악하기 전에 변화하는 것이 핵심입니다.
              </p>
            </section>

            <section id="pattern-change">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔄 2. 패턴 변화 전략</h2>
              <p className="text-gray-700 mb-4">
                상대가 당신의 패턴을 파악했다면 <strong className="text-gray-900">180도 다른 패턴</strong>으로 바꾸세요.<br />
                공격적이었다면 방어적으로, 일방적이었다면 양방향 공격으로 전환하세요.<br />
                갑작스러운 변화가 상대를 혼란스럽게 합니다.
              </p>
            </section>

            <section id="pace-control">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ 3. 페이스 조절의 기술</h2>
              <p className="text-gray-700 mb-4">
                경기가 빨라지면 천천히, 느려지면 빠르게 <strong className="text-gray-900">페이스를 조절</strong>하세요.<br />
                상대의 리듬을 깨는 것이 승리의 핵심입니다.<br />
                드롭샷으로 속도를 늦추거나, 강력한 스트로크로 속도를 높이세요.
              </p>
            </section>

            <section id="position-shift">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 4. 포지션 이동 전략</h2>
              <p className="text-gray-700 mb-4">
                베이스라인에 고정되어 있다면 네트로 이동하고,<br />
                네트 플레이 중이라면 다시 뒤로 물러나세요.<br />
                <strong className="text-gray-900">포지션 변화만으로도 전략이 달라집니다.</strong>
              </p>
            </section>

            <section id="shot-variation">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 5. 샷 다양화 전술</h2>
              <p className="text-gray-700 mb-4">
                평범한 스트로크만 했다면 <strong className="text-gray-900">특별한 샷을 시도</strong>하세요.<br />
                드롭샷, 로브, 에이스 등 다양한 샷을 상황에 맞게 사용하세요.<br />
                샷의 다양성이 전술의 핵심입니다.
              </p>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 전술 변화를 할 때 상대가 눈치채면 어떻게 하나요?</p>
                  <p className="text-gray-700">A. 갑작스럽게 변화하기보다는 점진적으로 바꾸세요. 2-3포인트에 걸쳐 서서히 전환하세요.</p>
                </div>
              </div>
            </section>

            <section id="coach-story">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "유연함이 승리를 만든다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 항상 같은 패턴으로 졌죠. '전술을 바꿔야 해요'라고 했어요.<br />
                  경기 중 전술 변화를 가르쳤어요. 그 후, 그 제자는 강한 상대도 이기기 시작했어요.<br />
                  고정된 전략은 죽음입니다. 유연함이 생명입니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 전략적 유연함의 승리</h2>
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스는 고정된 게임이 아니라, 변화하는 게임입니다.<br />
                  상황에 맞게 전략을 조정하세요.<br />
                  <strong className="text-gray-900">오늘부터 유연한 전략으로 경기를 바꿔보세요.</strong>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/mid-match-tactical-changes');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
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
