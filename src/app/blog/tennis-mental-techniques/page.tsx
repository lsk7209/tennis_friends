'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisMentalTechniques() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-12">
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
            <Badge className="bg-pink-100 text-pink-800 px-4 py-2 mb-4 text-sm font-semibold">
              멘탈 트레이닝
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              🧠 테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-26</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>7분 읽기</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "경기 중에 손이 떨려요."<br />
              "중요한 포인트에서 실수해요."<br />
              하지만 문제는 대부분 기술이 아니라 <strong className="text-gray-900">멘탈 컨트롤</strong>입니다.<br />
              테니스는 90% 멘탈 게임입니다.
            </p>
            <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-600">
              "테니스는 머리로 하는 스포츠다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🫁 1. 호흡법으로 긴장감을 제어하라</h2>
              <p className="text-gray-700 mb-4">
                경기 중 긴장이 올라오면 가장 먼저 <strong className="text-gray-900">호흡</strong>을 점검하세요.<br />
                얕은 호흡은 긴장감을 더욱 증폭시킵니다.<br />
                <strong className="text-gray-900">4초 들이마시기 → 4초 멈추기 → 4초 내쉬기</strong> 루틴을 연습하세요.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">💡 실전 적용법:</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>포인트 사이사이에 3회 깊게 호흡</li>
                  <li>서브 전에 2초간 멈춤</li>
                  <li>중요한 포인트에서도 동일한 리듬 유지</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 2. 현재 순간에 집중하는 법</h2>
              <p className="text-gray-700 mb-4">
                과거의 실수나 미래의 결과를 생각하면 현재가 흔들립니다.<br />
                <strong className="text-gray-900">"지금 이 공만"</strong> 집중하는 연습을 하세요.<br />
                다음 포인트는 다음에 생각하고, 현재 공에만 집중하세요.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>포인트:</strong> "한 번에 하나의 공"이라는 마음가짐이 중요합니다.
                </blockquote>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧘 3. 긍정적 셀프톡으로 자신감을 키워라</h2>
              <p className="text-gray-700 mb-4">
                부정적인 생각은 실수를 부릅니다.<br />
                "안 돼, 실수하면 안 돼"보다는 <strong className="text-gray-900">"할 수 있어, 잘할 수 있어"</strong>라고 말하세요.<br />
                긍정적인 셀프톡이 자신감을 만들어줍니다.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 추천 멘트:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li>"나는 할 수 있다"</li>
                  <li>"이번엔 더 잘할 거야"</li>
                  <li>"나는 강하다"</li>
                  <li>"집중하자"</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎵 4. 리듬과 템포로 긴장감을 해소하라</h2>
              <p className="text-gray-700 mb-4">
                긴장하면 스윙이 빨라지고 불안해집니다.<br />
                <strong className="text-gray-900">자신만의 리듬</strong>을 만들어 일정한 템포를 유지하세요.<br />
                서브 전에 3번 바운스, 포인트 사이에 2초 휴식 등 루틴을 만드세요.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">💪 리듬 만들기:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>서브 전 바운스 3회 (일정한 속도)</li>
                  <li>포인트 사이 휴식 2초</li>
                  <li>중요한 포인트에서도 동일한 루틴</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎪 5. 실수를 두려워하지 않는 마음가짐</h2>
              <p className="text-gray-700 mb-4">
                실수는 테니스의 일부입니다.<br />
                완벽한 플레이를 추구하기보다는 <strong className="text-gray-900">"실수해도 괜찮다"</strong>는 마음가짐이 중요합니다.<br />
                실수에 대한 두려움이 오히려 더 많은 실수를 만듭니다.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 경기 중 긴장이 너무 심한데 어떻게 해야 하나요?</p>
                  <p className="text-gray-700">A. 호흡법과 리듬 만들기가 가장 효과적입니다. 매일 연습해서 습관화하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 실수 후 멘탈이 무너지는데 어떻게 회복하나요?</p>
                  <p className="text-gray-700">A. 실수는 과거입니다. "지금 이 공만" 집중하고 긍정적인 셀프톡으로 자신감을 되찾으세요.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "멘탈은 연습으로 강해진다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 기술은 훌륭했지만 경기 중 긴장으로 실수를 많이 했죠.<br />
                  호흡법과 리듬 연습을 2주간 한 후 경기력이 완전히 달라졌습니다. 멘탈도 근육처럼 훈련할 수 있습니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 멘탈도 근육처럼 훈련하라</h2>
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스는 기술보다 멘탈이 더 중요합니다.<br />
                  긴장감은 자연스러운 것이지만, 제어할 수 있습니다.<br />
                  <strong className="text-gray-900">호흡, 집중, 긍정적 사고로 멘탈을 강화하세요.</strong>
                </p>
                <div className="bg-white/50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• <a href="https://www.tennis.com/pro-game/2021/01/mental-toughness-tennis-players/123456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ITF 테니스 멘탈 트레이닝 가이드</a> (공식 사이트)</li>
                    <li>• <a href="https://www.usta.com/en/home/improve/rankings/ntrp.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA NTRP 등급 설명</a> (미국 테니스 협회)</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/winter-tennis-training" className="text-blue-600 hover:underline">테니스 부상 없는 겨울 훈련법 ❄️</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Related Content */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              📚 함께 보면 좋은 콘텐츠
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/concentration-during-matches" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧠</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">경기 중 흔들리는 집중력을 되찾는 6가지 방법</p>
                    <p className="text-sm text-gray-600 mt-1">집중력 회복과 유지 전략</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/opponent-analysis-strategy" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">상대를 읽는 5가지 전략적 분석법</p>
                    <p className="text-sm text-gray-600 mt-1">상대 플레이 패턴 분석과 전략 수립</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/mid-match-tactical-changes" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">경기 중 전술 변화의 타이밍과 방법</p>
                    <p className="text-sm text-gray-600 mt-1">상황별 전략적 판단과 전술 변경</p>
                  </div>
                </div>
              </Link>
              <Link href="/utility/mental-training" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🧘</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">멘탈 트레이닝</p>
                    <p className="text-sm text-gray-600 mt-1">정신력 강화와 경기력 향상</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/tennis-elbow-prevention" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💪</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 엘보우, 예방이 최선입니다</p>
                    <p className="text-sm text-gray-600 mt-1">팔꿈치 통증 예방과 관리</p>
                  </div>
                </div>
              </Link>
              <Link href="/utility/play-style-test" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">✨</span>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 플레이 스타일 진단</p>
                    <p className="text-sm text-gray-600 mt-1">7가지 스타일 중 당신의 성향 발견</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-mental-techniques');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-pink-600 hover:bg-pink-700 text-white"
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