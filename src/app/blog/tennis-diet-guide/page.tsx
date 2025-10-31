'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function TennisDietGuide() {
  return (
    <div className="min-h-screen blog-page">
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
              영양 & 다이어트
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              테니스 선수를 위한 완벽한 다이어트 가이드 🥗
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-29</span>
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
            <a href="#tennis-nutrition-basics" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 테니스 선수의 영양학 기초
            </a>
            <a href="#energy-sources" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 경기력 향상을 위한 에너지원
            </a>
            <a href="#meal-timing" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 경기 전후 식사 타이밍
            </a>
            <a href="#hydration-guide" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 테니스 선수의 수분 보충 전략
            </a>
            <a href="#weight-management" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 체중 관리와 근육량 유지
            </a>
            <a href="#supplements" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 보충제 선택 가이드
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "테니스를 치고 나면 너무 배고파요. 하지만 살이 찔까봐 걱정돼요."<br />
              테니스 선수들의 흔한 고민입니다.<br />
              <strong className="text-gray-900">올바른 다이어트로 경기력을 높이고 건강도 챙기세요</strong>.<br />
              과학적 근거 기반의 테니스 다이어트 가이드를 소개합니다.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              "좋은 영양 섭취는 테니스 기술의 30%를 차지한다." — 영양사 김다희
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="tennis-nutrition-basics">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🥗 1. 테니스 선수의 영양학 기초</h2>
              <p className="text-gray-700 mb-4">
                테니스는 <strong className="text-gray-900">단기 고강도 운동</strong>과 <strong className="text-gray-900">지구력 운동</strong>이 결합된 스포츠입니다.<br />
                따라서 탄수화물, 단백질, 지방의 균형 잡힌 섭취가 필수적입니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">📊 테니스 선수의 일일 영양 권장량</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">60-70%</div>
                    <div className="text-sm text-gray-600">탄수화물</div>
                    <div className="text-xs text-gray-500">주 에너지원</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">15-20%</div>
                    <div className="text-sm text-gray-600">단백질</div>
                    <div className="text-xs text-gray-500">근육 회복</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">20-30%</div>
                    <div className="text-sm text-gray-600">지방</div>
                    <div className="text-xs text-gray-500">호르몬 조절</div>
                  </div>
                </div>
              </div>
            </section>

            <section id="energy-sources">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚡ 2. 경기력 향상을 위한 에너지원</h2>
              <p className="text-gray-700 mb-4">
                테니스는 <strong className="text-gray-900">글리코겐 저장량</strong>이 승패를 좌우합니다.<br />
                경기 중 혈당 유지와 빠른 회복을 위한 영양 전략이 중요합니다.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">🍚 탄수화물: 주 에너지원</h3>
                    <p className="text-blue-800 mb-2"><strong>권장 식품:</strong> 현미밥, 귀리, 고구마, 바나나</p>
                    <p className="text-sm text-gray-600"><strong>섭취 시기:</strong> 경기 2-3시간 전 • <strong>효과:</strong> 지속적인 에너지 공급</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-900 mb-3">🥩 단백질: 근육 회복</h3>
                    <p className="text-green-800 mb-2"><strong>권장 식품:</strong> 닭가슴살, 연어, 계란, 두부</p>
                    <p className="text-sm text-gray-600"><strong>섭취 시기:</strong> 경기 후 30분 이내 • <strong>효과:</strong> 근육 합성 촉진</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-purple-900 mb-3">🥑 건강한 지방: 호르몬 밸런스</h3>
                    <p className="text-purple-800 mb-2"><strong>권장 식품:</strong> 아보카도, 견과류, 올리브오일, 연어</p>
                    <p className="text-sm text-gray-600"><strong>섭취 시기:</strong> 매 끼니 소량 • <strong>효과:</strong> 염증 감소 및 회복력 향상</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="meal-timing">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⏰ 3. 경기 전후 식사 타이밍</h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-gray-900">타이밍이 80%를 좌우합니다</strong>.<br />
                잘못된 타이밍의 식사는 경기력 저하와 소화 불량을 유발합니다.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🌅 경기 전 식사 가이드</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3h</div>
                    <div>
                      <div className="font-medium">3시간 전: 큰 식사</div>
                      <div className="text-sm text-gray-600">탄수화물 + 단백질 + 채소 • 소화에 3시간 필요</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1h</div>
                    <div>
                      <div className="font-medium">1시간 전: 간식</div>
                      <div className="text-sm text-gray-600">바나나 + 견과류 • 빠른 에너지 공급</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">30m</div>
                    <div>
                      <div className="font-medium">30분 전: 최소 섭취</div>
                      <div className="text-sm text-gray-600">물만 • 소화 방해 최소화</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">🌙 경기 후 회복 식사</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">30m</div>
                    <div>
                      <div className="font-medium">30분 이내: 빠른 탄수화물</div>
                      <div className="text-sm text-gray-600">바나나 + 초콜릿 우유 • 글리코겐 보충</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-200 text-blue-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2h</div>
                    <div>
                      <div className="font-medium">2시간 후: 균형 식사</div>
                      <div className="text-sm text-gray-600">단백질 + 탄수화물 + 채소 • 근육 회복</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="hydration-guide">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💧 4. 테니스 선수의 수분 보충 전략</h2>
              <p className="text-gray-700 mb-4">
                테니스 선수는 땀으로 <strong className="text-gray-900">하루 2-3L의 수분</strong>을 잃습니다.<br />
                체중의 2%만 잃어도 경기력이 20% 저하됩니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">🏃 경기 중 수분 보충</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• 15-20분마다 150-200ml 섭취</li>
                      <li>• 이온 음료로 전해질 보충</li>
                      <li>• 체중 측정으로 손실량 파악</li>
                      <li>• 갈증 느끼기 전에 미리 마시기</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-green-900 mb-2">💪 회복을 위한 수분</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• 체중 1kg당 1.5L 보충</li>
                      <li>• 단백질 쉐이크에 물 추가</li>
                      <li>• 코코넛 워터로 칼륨 보충</li>
                      <li>• 카페인 음료 피하기</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="weight-management">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚖️ 5. 체중 관리와 근육량 유지</h2>
              <p className="text-gray-700 mb-4">
                테니스 선수의 이상적인 체중은 <strong className="text-gray-900">BMI 20-23</strong>입니다.<br />
                체중 감량 시에도 근육량을 유지하는 전략이 필요합니다.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-orange-900 mb-3">🎯 체중 감량 전략</h3>
                <ol className="list-decimal list-inside space-y-2 text-orange-800">
                  <li>하루 500kcal 적게 섭취 (주 0.5kg 감량)</li>
                  <li>단백질 섭취량 유지 (체중 kg당 1.6g)</li>
                  <li>저녁 식사 탄수화물 50% 감량</li>
                  <li>주 2-3회 근력 운동으로 근육 유지</li>
                  <li>충분한 수면 (호르몬 밸런스 유지)</li>
                </ol>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-3">💪 근육량 유지 방법</h3>
                <ul className="space-y-2 text-purple-800">
                  <li><strong>단백질 우선:</strong> 매 끼니 20-30g 단백질 섭취</li>
                  <li><strong>BCAA 보충:</strong> 운동 중 근육 분해 방지</li>
                  <li><strong>저항 운동:</strong> 주 2-3회 근력 트레이닝</li>
                  <li><strong>충분한 칼로리:</strong> 기초대사량의 1.2배 유지</li>
                </ul>
              </div>
            </section>

            <section id="supplements">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💊 6. 보충제 선택 가이드</h2>
              <p className="text-gray-700 mb-4">
                식단으로 충분히 섭취하기 어려운 영양소를 보충하세요.<br />
                <strong className="text-gray-900">과다 복용은 오히려 해롭습니다</strong>.
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">🔴 필수 보충제</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-red-800">프로틴 파우더</h4>
                      <p className="text-sm text-gray-600">근육 회복 및 합성 촉진</p>
                      <p className="text-xs text-gray-500">섭취: 1일 1-2회, 20-40g</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-800">멀티비타민</h4>
                      <p className="text-sm text-gray-600">기본 영양소 보충</p>
                      <p className="text-xs text-gray-500">섭취: 1일 1회, 식후</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">🔵 상황별 보충제</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-800">크레아틴</h4>
                      <p className="text-sm text-gray-600">근력과 파워 향상</p>
                      <p className="text-xs text-gray-500">섭취: 1일 3-5g, 지속적</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">베타알라닌</h4>
                      <p className="text-sm text-gray-600">근육 피로 지연</p>
                      <p className="text-xs text-gray-500">섭취: 1일 3-5g, 경기 전</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-yellow-800 text-sm">
                  ⚠️ <strong>주의:</strong> 개인 건강 상태에 따라 전문의와 상담 후 섭취하세요.
                </p>
              </div>
            </section>

            <section className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🧩 함께 보면 좋은 콘텐츠</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link href="/blog/tennis-injury-prevention-exercises" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 부상 예방을 위한 8가지 필수 운동</p>
                      <p className="text-sm text-gray-600 mt-1">코어 강화, 어깨 안정화, 손목 유연성 등</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-stretching-routine" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧘</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 전후 스트레칭 루틴 완벽 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">워밍업, 쿨다운, 일상 루틴 등 완벽 가이드</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/nutrition-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🥗</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 영양 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">경기 전후 최적화된 영양 섭취 가이드</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/shoulder-injury-prevention" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 어깨 부상 예방법</p>
                      <p className="text-sm text-gray-600 mt-1">회전근개 강화, 스트레칭, 올바른 기술</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/knee-protection-exercises" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🦵</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 무릎 보호를 위한 7가지 핵심 운동</p>
                      <p className="text-sm text-gray-600 mt-1">스쿼트, 레그 익스텐션, 캘프 레이즈 등</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/injury-risk" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏥</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">부상 위험 예측 계산기</p>
                      <p className="text-sm text-gray-600 mt-1">나의 부상 위험도를 파악하고 예방하세요</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 균형 잡힌 영양으로 최고의 경기력</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스 다이어트는 단순한 체중 감량이 아닙니다.<br />
                  <strong className="text-gray-900">과학적 영양 섭취로 경기력을 극대화하고 건강도 지키세요</strong>.<br />
                  올바른 식습관이 테니스 인생을 바꿀 수 있습니다.
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-apparel-guide" className="text-blue-600 hover:underline">테니스 의류 추천 가이드 👕</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/tennis-diet-guide');
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
