'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function WinterTennisTraining() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
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
              건강 & 피트니스
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              ❄️ 테니스 부상 없는 겨울 훈련법
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-26</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8분 읽기</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "겨울에 테니스하면 부상 위험이 높아요."<br />
              "추운 날씨에 몸이 잘 안 풀려요."<br />
              하지만 문제는 날씨가 아니라 <strong className="text-gray-900">준비 운동과 훈련 방법</strong>입니다.<br />
              겨울에도 안전하게 테니스를 즐길 수 있습니다.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "겨울 테니스는 준비가 전부다." — 코치 승민
            </blockquote>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🔥 1. 워밍업을 2배로 늘려라</h2>
              <p className="text-gray-700 mb-4">
                겨울에는 몸이 차가워져 부상 위험이 높습니다.<br />
                <strong className="text-gray-900">기본 워밍업의 2배 시간</strong>을 투자하세요.<br />
                15분 워밍업 → 겨울엔 30분 워밍업이 필요합니다.
              </p>
              
              <div className="bg-red-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-red-900 mb-3">💡 겨울 워밍업 루틴:</h3>
                <ol className="list-decimal list-inside space-y-2 text-red-800">
                  <li>실내에서 10분 조깅 (체온 상승)</li>
                  <li>동적 스트레칭 10분 (관절 가동범위 확장)</li>
                  <li>라켓 없이 스윙 연습 10분 (근육 활성화)</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧥 2. 적절한 의류로 체온을 유지하라</h2>
              <p className="text-gray-700 mb-4">
                겨울 테니스의 핵심은 <strong className="text-gray-900">체온 관리</strong>입니다.<br />
                얇은 옷을 여러 겹 입어서 체온을 유지하세요.<br />
                한 겹씩 벗을 수 있도록 준비하세요.
              </p>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-4">
                <blockquote className="text-yellow-800">
                  🎯 <strong>포인트:</strong> "추위에 떨지 않을 정도"가 적절한 체온입니다.
                </blockquote>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏃 3. 겨울 전용 훈련 프로그램</h2>
              <p className="text-gray-700 mb-4">
                겨울에는 실외 훈련이 제한되므로 <strong className="text-gray-900">실내 훈련</strong>을 활용하세요.<br />
                체력, 기술, 멘탈을 모두 기를 수 있는 프로그램을 만드세요.
              </p>
              
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧩 겨울 훈련 프로그램:</h3>
                <ul className="list-disc list-inside space-y-2 text-green-800">
                  <li><strong>월요일:</strong> 체력 훈련 (런지, 스쿼트, 플랭크)</li>
                  <li><strong>수요일:</strong> 기술 훈련 (벽치기, 스윙 연습)</li>
                  <li><strong>금요일:</strong> 멘탈 훈련 (집중력, 호흡법)</li>
                  <li><strong>주말:</strong> 실외 테니스 (날씨가 좋을 때)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🍎 4. 겨울 영양 관리로 면역력 강화</h2>
              <p className="text-gray-700 mb-4">
                겨울에는 면역력이 떨어져 부상 회복이 늦어집니다.<br />
                <strong className="text-gray-900">비타민 C, 단백질, 수분</strong>을 충분히 섭취하세요.<br />
                운동 전후 영양 관리가 더욱 중요합니다.
              </p>
              
              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">💪 겨울 영양 가이드:</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>운동 전: 바나나 + 물 (에너지 보충)</li>
                  <li>운동 중: 이온음료 (수분 + 전해질)</li>
                  <li>운동 후: 단백질 + 비타민 C (회복 촉진)</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏠 5. 실내 대안 운동으로 실력 유지</h2>
              <p className="text-gray-700 mb-4">
                날씨가 나쁠 때는 <strong className="text-gray-900">실내 대안 운동</strong>을 하세요.<br />
                테니스와 유사한 움직임을 연습할 수 있는 운동들을 찾으세요.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-blue-900 mb-3">실내 대안 운동:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li><strong>배드민턴:</strong> 반응속도와 순발력 향상</li>
                  <li><strong>탁구:</strong> 집중력과 정확성 향상</li>
                  <li><strong>수영:</strong> 전신 근력과 지구력 향상</li>
                  <li><strong>요가:</strong> 유연성과 밸런스 향상</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">❓ 자주 묻는 질문</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 겨울에 테니스해도 괜찮나요?</p>
                  <p className="text-gray-700">A. 네, 적절한 준비와 의류만 있으면 안전합니다. 워밍업을 충분히 하고 체온을 유지하세요.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-semibold text-gray-900 mb-2">Q. 겨울 훈련으로 실력이 떨어지지 않을까요?</p>
                  <p className="text-gray-700">A. 오히려 겨울 훈련으로 체력과 기술을 기를 수 있습니다. 실내 대안 운동도 도움이 됩니다.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 코치의 이야기 — "겨울이 기회다"</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 italic">
                  "한 제자가 있었어요. 겨울에 테니스를 포기했더니 봄에 실력이 많이 떨어졌죠.<br />
                  다음 겨울부터는 실내 훈련을 시작했는데, 오히려 실력이 향상되었습니다. 겨울은 기회입니다."
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 겨울도 테니스의 계절이다</h2>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  겨울은 테니스를 포기하는 계절이 아닙니다.<br />
                  적절한 준비와 훈련으로 겨울도 테니스의 계절이 될 수 있습니다.<br />
                  <strong className="text-gray-900">워밍업, 의류, 영양 관리로 안전한 겨울 테니스를 즐기세요.</strong>
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-string-guide" className="text-blue-600 hover:underline">라켓 스트링 종류별 특징과 선택 가이드 🧵</Link>
                </p>
              </div>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/winter-tennis-training');
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