'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Target, Lightbulb, Users, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function TennisGripReplacement() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
        <div className="container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-orange-100 text-orange-800">
              ⚠️ 테니스 장비 관리
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              그립 교체, 너무 늦게 하면<br />
              손목 나간다!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              라켓보다 손이 먼저 무너집니다. 그립이 미끄러지면 스윙이 흔들리고, 결국 손목이 상합니다.<br />
              코치가 알려주는 그립 교체 주기와 올바른 관리법을 확인하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/injury-risk">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  부상 위험 체크 →
                </Button>
              </Link>
              <Link href="/utility/ntrp-test">
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-orange-500 px-8 py-4 text-lg">
                  NTRP 실력 테스트
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
                    <a href="#grip-slippery" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      1. 그립이 미끄러지면, 손목이 흔들린다
                    </a>
                    <a href="#replacement-cycle" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      2. 교체 주기 — "한 달 혹은 10시간" 법칙
                    </a>
                    <a href="#sweat-humidity" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      3. 땀·습도에 따라 다른 관리법
                    </a>
                  </div>
                  <div className="space-y-2">
                    <a href="#grip-types" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      4. 그립 종류별 특징 — 내 손에 맞는 소재 찾기
                    </a>
                    <a href="#replacement-routine" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      5. 교체 타이밍 놓치지 않는 루틴
                    </a>
                    <a href="#faq" className="block text-gray-700 hover:text-orange-600 transition-colors">
                      6. 자주 묻는 질문
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
            <blockquote className="text-xl font-medium text-gray-700 border-l-4 border-orange-500 pl-6 italic">
              "그립은 소모품이 아니라, 컨트롤 장치다." — 코치 준혁
            </blockquote>

            <div id="grip-slippery" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🖐️ 1. 그립이 미끄러지면, 손목이 흔들린다</h2>
              <p className="text-gray-700 mb-6">
                손과 라켓 사이의 마찰이 줄면, 임팩트 순간에 미세한 진동이 손목으로 전해집니다. 
                이게 누적되면 <strong>'테니스 엘보'로 이어집니다.</strong>
              </p>
              
              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Target className="w-5 h-5 mr-2 text-gray-700" />
                    체크포인트
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span>스윙 중 라켓이 미끄럽게 느껴진다</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span>스윙 후 손바닥에 마찰열이 느껴진다</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span>그립의 색이 바뀌었다</span>
                    </li>
                  </ul>
                  <p className="text-gray-900 font-semibold mt-4">
                    → <strong>지금이 바로 교체 시점</strong>입니다.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div id="replacement-cycle" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🔄 2. 교체 주기 — "한 달 혹은 10시간" 법칙</h2>
              <p className="text-gray-700 mb-6">
                그립은 생각보다 빨리 닳습니다. 
                땀이 많은 체질이라면 2~3주, 일반 체질은 4주가 적당해요.
              </p>
              
              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-gray-700" />
                    코치 추천 주기
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>주 3회 이상 플레이 → <strong>3주</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>주 1회 이하 → <strong>6주</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>여름철 실외 코트 → <strong>2주 내외</strong></span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-medium">
                  📎 <Link href="/utility/injury-risk" className="text-gray-900 hover:text-gray-700 underline">테니스 부상 리스크 체크</Link>
                </p>
              </div>
            </div>

            <div id="sweat-humidity" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🧴 3. 땀·습도에 따라 다른 관리법</h2>
              <p className="text-gray-700 mb-6">
                그립은 환경에 따라 수명 차이가 큽니다. 
                습도가 높은 날은 흡습이 빨라지고, 땀이 많을수록 표면이 쉽게 경화됩니다.
              </p>
              
              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">📍 지역별 관리 팁</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span><strong>서울 실내코트:</strong> 통풍 잘되는 라켓 백 사용</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span><strong>부산/여수 실외코트:</strong> 방습 파우치와 제습제 필수</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-gray-700 rounded-full mr-3 mt-2"></div>
                      <span><strong>제주:</strong> 염분에 의한 표면 경화 주의 — 2주 단위 교체 권장</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700">
                  💬 <strong>관리법:</strong> 사용 후 마른 수건으로 닦고, 공기 중에 10분 이상 건조시키세요.
                </p>
              </div>
            </div>

            <div id="grip-types" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🧠 4. 그립 종류별 특징 — 내 손에 맞는 소재 찾기</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">그립 종류</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">특징</th>
                      <th className="border border-gray-300 p-4 text-left font-semibold text-gray-900">추천 대상</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-900">PU 합성 오버그립</td>
                      <td className="border border-gray-300 p-4 text-gray-700">흡습성·탄력 균형</td>
                      <td className="border border-gray-300 p-4 text-gray-700">대부분의 초보·중급자</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold text-gray-900">타월 그립</td>
                      <td className="border border-gray-300 p-4 text-gray-700">흡수력 최고, 촉감 부드러움</td>
                      <td className="border border-gray-300 p-4 text-gray-700">땀 많은 플레이어</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-4 font-semibold text-gray-900">가죽 베이스그립</td>
                      <td className="border border-gray-300 p-4 text-gray-700">내구성·피드백 우수</td>
                      <td className="border border-gray-300 p-4 text-gray-700">상급자, 강타형</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-medium">
                  🎯 <strong className="text-gray-900">코치 팁:</strong> 그립은 "라켓보다 손에 맞는 걸 고르는 것"이 원칙입니다.
                </p>
              </div>
            </div>

            <div id="replacement-routine" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🧩 5. 교체 타이밍 놓치지 않는 루틴</h2>
              
              <Card className="bg-white border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">교체 체크리스트</h3>
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                      <span>라켓을 꺼낼 때, 그립 감촉을 체크하세요</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                      <span>끈적임·냄새·색 변화가 느껴지면 바로 교체</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-gray-700 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                      <span>라켓 백에 예비 오버그립을 2개 넣어두세요</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 font-medium">
                  📎 <Link href="/blog/racket-care-mistakes" className="text-gray-900 hover:text-gray-700 underline">라켓 관리 실수 5가지</Link>
                </p>
              </div>
            </div>

            <div id="faq" className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">❓ 자주 묻는 질문</h2>
              
              <div className="space-y-6">
                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 그립이 미끄러워도 매일 닦으면 괜찮을까요?</h3>
                    <p className="text-gray-700">A. 아닙니다. 마모된 표면은 닦아도 복원되지 않습니다. 재질이 경화되면 교체가 유일한 해법입니다.</p>
                  </CardContent>
                </Card>

                <Card className="bg-white border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Q. 베이스그립은 자주 바꾸지 않아도 되나요?</h3>
                    <p className="text-gray-700">A. 네, 1년에 한 번 정도로 충분합니다. 단, 타월그립·오버그립은 소모품입니다.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">💬 코치의 이야기 — "손은 라켓보다 먼저 피로해진다"</h2>
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-6">
                  <p className="text-orange-700 text-lg leading-relaxed">
                    "한 제자가 손목 통증으로 고생했어요. 라켓은 멀쩡했지만, 그립이 오래된 상태였죠. 
                    그립을 새로 감고 나서 통증이 사라졌습니다. 손이 편해야, 스윙도 편해집니다."
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/forehand-body-balance">
                  <Card className="bg-white border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">포핸드 스윙이 흔들릴 때, 라켓보다 몸을 먼저 봐라 💪</h3>
                      <p className="text-gray-600 text-sm">스윙 안정성을 위한 코어 중심 훈련법</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/blog/racket-care-mistakes">
                  <Card className="bg-white border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">테니스 초보가 라켓을 망치는 5가지 관리 습관 😬</h3>
                      <p className="text-gray-600 text-sm">라켓 관리의 기본부터 고급까지</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/utility/ntrp-test">
                  <Card className="bg-white border-gray-200 hover:border-orange-300 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">NTRP 자가 진단 테스트</h3>
                      <p className="text-gray-600 text-sm">정확한 실력 측정과 개선 방향</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🏁 마무리 — 손이 편해야, 스윙이 자유롭다</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                라켓은 손의 연장입니다. 
                손이 불편하면 테니스가 불안해집니다. 
                <strong>그립 하나 바꾸는 것</strong>, 그것이 실력과 부상을 가르는 작은 차이입니다.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-800 font-medium">
                  ✨ 다음 읽기: <Link href="/blog/racket-weight-styles" className="text-blue-600 hover:text-blue-800 underline">라켓 무게 하나로 달라지는 경기 스타일 3가지 ⚖️</Link>
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🔗 친구에게 공유하기</h2>
              <Button 
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-grip-replacement');
                  alert('공유 링크가 복사되었습니다 📎');
                }}
                className="bg-orange-600 hover:bg-orange-700 text-white"
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
              더 안전하고 효과적인 테니스 플레이어가 되어보세요!
            </h2>
            <p className="text-gray-600 mb-8">
              체계적인 장비 관리와 전문가의 조언으로 당신의 테니스 실력을 한 단계 올려보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/utility/injury-risk">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg">
                  부상 위험 체크
                </Button>
              </Link>
              <Link href="/utility/ntrp-test">
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-orange-500 px-8 py-4 text-lg">
                  NTRP 실력 테스트
                </Button>
              </Link>
              <Link href="/utility/play-style-test">
                <Button variant="outline" size="lg" className="border-gray-300 hover:border-orange-500 px-8 py-4 text-lg">
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
