'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Target, Lightbulb, Users, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function ForehandBodyBalance() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-green-100 text-green-800">
              💪 테니스 레슨
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              포핸드 스윙이 흔들릴 때,<br />
              라켓보다 몸을 먼저 봐라
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              라켓이 아니라 몸이 흔들리는 겁니다. 포핸드 스윙의 핵심은 손이 아니라 코어입니다.<br />
              코치가 알려주는 자세 교정 루틴으로 흔들림 없는 스윙을 만들어보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/ntrp-test">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  NTRP 실력 테스트 →
                </Button>
              </Link>
              <Link href="/utility/injury-risk">
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-green-500 px-8 py-4 text-lg">
                  부상 위험 체크
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-50 border border-gray-200">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">📋 목차</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <a href="#center-balance" className="block text-gray-700 hover:text-green-600 transition-colors">
                      1. 중심이 무너지면 스윙도 무너진다
                    </a>
                    <a href="#rotation-timing" className="block text-gray-700 hover:text-green-600 transition-colors">
                      2. 팔 스윙보다 회전 타이밍을 맞춰라
                    </a>
                    <a href="#gaze-stability" className="block text-gray-700 hover:text-green-600 transition-colors">
                      3. 시선이 흔들리면 타점이 사라진다
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a href="#core-strength" className="block text-gray-700 hover:text-green-600 transition-colors">
                      4. 코어 강화가 포핸드 안정성의 핵심
                    </a>
                    <a href="#faq" className="block text-gray-700 hover:text-green-600 transition-colors">
                      5. 자주 묻는 질문
                    </a>
                    <a href="#coach-story" className="block text-gray-700 hover:text-green-600 transition-colors">
                      6. 코치의 이야기
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <blockquote className="text-xl font-medium text-gray-700 border-l-4 border-green-500 pl-6 italic">
              "팔로 치지 말고, 몸으로 던져라." — 코치 승민
            </blockquote>

            <div id="center-balance" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">⚖️ 1. 중심이 무너지면 스윙도 무너진다</h2>
              <p className="text-gray-700 mb-6">
                포핸드는 코어(복부·엉덩이)에서 시작됩니다. 하체가 불안하면 상체가 먼저 열리고, 임팩트가 늦습니다. 
                <strong>하체 → 코어 → 어깨 → 팔 → 라켓</strong> 순서가 기본이에요.
              </p>
              
              <Card className="bg-green-50 border-green-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2" />
                    교정 루틴
                  </h3>
                  <ol className="space-y-3 text-green-700">
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>왼발(오른손잡이 기준)을 고정하고, 2초간 버티기</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>회전은 어깨가 아닌 배꼽을 중심으로</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>임팩트 순간엔 복부 근육을 살짝 조이세요</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-800 font-medium">
                  📎 <Link href="/utility/injury-risk" className="text-blue-600 hover:text-blue-800 underline">테니스 부상 리스크 체크</Link>
                </p>
              </div>
            </div>

            <div id="rotation-timing" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🌀 2. 팔 스윙보다 회전 타이밍을 맞춰라</h2>
              <p className="text-gray-700 mb-6">
                초보자의 흔한 실수는 팔이 먼저 나가는 것입니다. 팔이 앞서면 라켓 면이 열리고, 공이 뜨거나 아웃됩니다. 
                스윙은 <strong>회전 타이밍의 예술</strong>이에요.
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <p className="text-yellow-800 font-medium">
                  🎯 <strong>포인트:</strong> 몸이 45도 회전했을 때 라켓이 따라와야 합니다.
                </p>
              </div>

              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-gray-700" />
                    코치 팁
                  </h3>
                  <p className="text-gray-700">
                    스윙 타이밍은 "팔이 아니라 허리"로 잡는다는 생각을 하세요. 그게 흔들림 없는 포핸드의 시작입니다.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div id="gaze-stability" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 3. 시선이 흔들리면 타점이 사라진다</h2>
              <p className="text-gray-700 mb-6">
                공을 끝까지 보지 않으면 타점이 앞뒤로 밀립니다. 하체가 흔들리면 시선이 흔들리고, 결국 <strong>타점 감각이 무너집니다.</strong>
              </p>
              
              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">🧩 훈련법</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span>공이 바닥에 튀는 순간 → 라켓 준비</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span>공이 라켓에 닿는 순간 → 시선 고정</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span>스윙 후 팔이 올라간 뒤 → 시선 유지 1초</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-medium">
                  📎 <Link href="/utility/ntrp-test" className="text-gray-900 hover:text-gray-700 underline">NTRP 자가 진단 테스트</Link>
                </p>
              </div>
            </div>

            <div id="core-strength" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🏋️ 4. 코어 강화가 포핸드 안정성의 핵심</h2>
              <p className="text-gray-700 mb-6">
                스윙이 불안하면 근육이 아니라 코어 밸런스를 점검하세요. 매일 10분 루틴으로도 충분합니다.
              </p>
              
              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">💪 추천 루틴</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>플랭크 30초 × 3세트</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>스쿼트 15회 × 3세트</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>트위스트 10회 × 2세트</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  <strong>📍 지역별 팁:</strong> 실내 테니스장(서울·용인·부산 기준)은 겨울철 체온이 낮아 복근 긴장이 약해지므로, 워밍업에 5분 추가하세요.
                </p>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ 자주 묻는 질문</h2>
              
              <div className="space-y-6">
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 스윙이 흔들릴 때 라켓을 바꿔야 하나요?</h3>
                    <p className="text-gray-700">A. 아닙니다. 대부분은 중심 불안정이나 하체 회전 부족 문제입니다.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 코어가 약한데 어떤 운동이 가장 효과적일까요?</h3>
                    <p className="text-gray-700">A. 플랭크와 브릿지 운동이 기본입니다. 허리와 복부를 동시에 강화해 밸런스를 잡아줍니다.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div id="coach-story" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">💬 코치의 이야기 — "스윙은 몸이 기억하는 리듬이다"</h2>
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <p className="text-green-700 text-lg leading-relaxed">
                    "한 제자가 있었어요. 라켓을 3번 바꿨지만 스윙은 여전히 흔들렸죠. 결국 원인은 코어였어요. 
                    2주간 체형 교정 후 스윙이 달라졌습니다. 라켓보다 몸이 먼저 준비되어야, 공이 원하는 대로 날아갑니다."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/racket-care-mistakes">
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">테니스 초보가 라켓을 망치는 5가지 관리 습관 😬</h3>
                      <p className="text-gray-600 text-sm">라켓 관리의 기본부터 고급까지</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/string-tension-feel-guide">
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">스트링 텐션, 숫자보다 감각이 중요하다 🎾</h3>
                      <p className="text-gray-600 text-sm">55lbs의 함정과 올바른 텐션 설정</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Card className="bg-white border-gray-200 hover:border-green-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">NTRP 자가 진단 테스트</h3>
                      <p className="text-gray-600 text-sm">정확한 실력 측정과 개선 방향</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🏁 마무리 — 라켓보다 몸을 믿어라</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                포핸드는 손이 아니라 몸의 리듬으로 만들어집니다. 라켓은 당신의 몸을 따라올 뿐이에요. 
                <strong>밸런스가 잡히면, 스윙은 저절로 정답이 됩니다.</strong>
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-800 font-medium">
                  ✨ 다음 읽기: <Link href="/blog/tennis-grip-replacement" className="text-blue-600 hover:text-blue-800 underline">그립 교체, 너무 늦게 하면 손목 나간다! ⚠️</Link>
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 친구에게 공유하기</h2>
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/forehand-body-balance');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                📤 링크 복사하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              더 나은 테니스 플레이어가 되어보세요!
            </h2>
            <p className="text-gray-600 mb-8">
              체계적인 분석과 전문가의 조언으로 당신의 테니스 실력을 한 단계 올려보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/ntrp-test">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                  NTRP 실력 테스트
                </Button>
              </Link>
              <Link href="/utility/injury-risk">
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-green-500 px-8 py-4 text-lg">
                  부상 위험 체크
                </Button>
              </Link>
              <Link href="/utility/play-style-test">
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-green-500 px-8 py-4 text-lg">
                  플레이 스타일 진단
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
