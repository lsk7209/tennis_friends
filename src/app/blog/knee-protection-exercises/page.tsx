'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function KneeProtectionExercises() {
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
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              건강 & 피트니스
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              테니스 무릎 보호를 위한 7가지 핵심 운동 🦵
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-28</span>
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
            <a href="#knee-importance" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 테니스에서 무릎이 중요한 이유
            </a>
            <a href="#common-injuries" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 테니스 무릎 부상의 종류
            </a>
            <a href="#prevention-exercises" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 무릎 강화 운동 7가지
            </a>
            <a href="#stability-training" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 균형과 안정성 훈련
            </a>
            <a href="#technique-adjustment" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 테니스 기술 수정 팁
            </a>
            <a href="#recovery-tips" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 무릎 관리 실전 팁
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "무릎이 아파서 코트에 서 있기 힘들어요."<br />
              테니스 선수들의 두 번째 고민거리입니다.<br />
              <strong className="text-gray-900">무릎은 테니스의 심장</strong>입니다.<br />
              건강한 무릎으로 자유로운 움직임을 유지하세요.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "강한 무릎이 있어야 진정한 테니스 플레이가 가능하다." — 코치 미나
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="knee-importance">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏃 1. 테니스에서 무릎이 중요한 이유</h2>
              <p className="text-gray-700 mb-4">
                테니스는 <strong className="text-gray-900">다이내믹한 스포츠</strong>입니다.<br />
                방향 전환, 점프, 스톱 앤 고 등 모든 동작에서 무릎이 핵심입니다.<br />
                무릎이 약하면 속도도, 정확성도 떨어집니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">📊 테니스 동작별 무릎 부하</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>방향 전환:</strong> 무릎에 3-5배 체중 부하</li>
                  <li><strong>점프 서브:</strong> 무릎에 순간 6-8배 부하</li>
                  <li><strong>스플릿 스텝:</strong> 반복적인 무릎 스트레스</li>
                  <li><strong>러닝:</strong> 지속적인 무릎 충격 흡수</li>
                </ul>
              </div>
            </section>

            <section id="common-injuries">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚨 2. 테니스 무릎 부상의 종류</h2>
              <p className="text-gray-700 mb-4">
                테니스 무릎 부상은 크게 <strong className="text-gray-900">급성과 만성</strong>으로 나뉩니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">급성 부상</h3>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• 십자인대 파열</li>
                      <li>• 반월상 연골 손상</li>
                      <li>• 무릎 염좌</li>
                      <li>• 타박상</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-orange-900 mb-2">만성 부상</h3>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• 점프膝 (점핑 니)</li>
                      <li>• 무릎 관절염</li>
                      <li>• 슬개건염</li>
                      <li>• 족저 근막염</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm">
                  💡 <strong>팁:</strong> 만성 부상의 90%는 예방 운동으로 막을 수 있습니다.
                </p>
              </div>
            </section>

            <section id="prevention-exercises">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🦵 3. 무릎 강화 운동 7가지</h2>
              <p className="text-gray-700 mb-4">
                무릎 강화는 <strong className="text-gray-900">주변 근육 강화</strong>가 핵심입니다.<br />
                대퇴사두근, 햄스트링, 종아리 근육을 균형 있게 강화하세요.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">1. 스쿼트 (Wall Sit)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 벽에 기대서 무릎 90도로 앉기</p>
                    <p className="text-sm text-gray-600"><strong>시간:</strong> 20-30초 × 3세트 | <strong>효과:</strong> 대퇴사두근 강화</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">2. 레그 익스텐션 (Leg Extension)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 앉아서 다리 펴기 (저항 밴드 사용)</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 15회 × 3세트 | <strong>효과:</strong> 전면 근육 강화</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">3. 레그 컬 (Leg Curl)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 누워서 다리 굽히기 (저항 밴드 사용)</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 15회 × 3세트 | <strong>효과:</strong> 후면 근육 강화</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">4. 캘프 레이즈 (Calf Raise)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 발끝으로 서서 종아리 근육 수축</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 20회 × 3세트 | <strong>효과:</strong> 종아리 강화</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">5. 스텝 업 (Step Up)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 계단이나 박스에 올라갔다 내려오기</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 10회 × 3세트 | <strong>효과:</strong> 기능적 강도 향상</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">6. 런지 워크 (Walking Lunge)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 걸으면서 번갈아 무릎 굽히기</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 10회 × 3세트 | <strong>효과:</strong> 균형과 안정성</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">7. 글루트 브릿지 (Glute Bridge)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 누워서 엉덩이 들어올리기</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 15회 × 3세트 | <strong>효과:</strong> 둔근 강화</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="stability-training">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚖️ 4. 균형과 안정성 훈련</h2>
              <p className="text-gray-700 mb-4">
                무릎 안정성은 <strong className="text-gray-900">균형 감각</strong>에서 시작됩니다.<br />
                발목과 무릎의 협응력을 키우세요.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">🎯 싱글 레그 스탠드</h3>
                <p className="text-purple-800 mb-2"><strong>방법:</strong> 한 발로 서서 균형 유지</p>
                <p className="text-sm text-gray-600 mb-4"><strong>시간:</strong> 30초 × 3세트 (양발)</p>

                <h3 className="font-semibold text-purple-900 mb-3">🎯 발란스 보드</h3>
                <p className="text-purple-800 mb-2"><strong>방법:</strong> 요가볼이나 밸런스 보드 위에서 서기</p>
                <p className="text-sm text-gray-600"><strong>시간:</strong> 1분 × 3세트</p>
              </div>
            </section>

            <section id="technique-adjustment">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 5. 테니스 기술 수정 팁</h2>
              <p className="text-gray-700 mb-4">
                무릎 부상을 예방하는 올바른 테니스 기술입니다.
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">💡 풋워크 개선</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>무릎을 살짝 굽힌 상태로 이동</li>
                    <li>발끝이 코트 바깥을 향하게 서기</li>
                    <li>무릎이 발끝을 넘지 않게 굽히기</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">💡 방향 전환 시</h3>
                  <ul className="space-y-2 text-green-800">
                    <li>무릎을 먼저 굽힌 후 회전</li>
                    <li>점프 대신 미끄러지듯 이동</li>
                    <li>착지 시 무릎 완충하기</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="recovery-tips">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🩹 6. 무릎 관리 실전 팁</h2>
              <p className="text-gray-700 mb-4">
                운동 후 관리가 부상의 50%를 결정합니다.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🧊 쿨다운 루틴</h3>
                <ol className="list-decimal list-inside space-y-2 text-green-800">
                  <li>가벼운 스트레칭 (햄스트링, 대퇴사두근)</li>
                  <li>얼음찜질 (15분, 통증 시)</li>
                  <li>무릎 압박 (탄력 붕대)</li>
                  <li>다리 올리기 (심장보다 높게)</li>
                  <li>충분한 휴식 취하기</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">⚠️ 주의사항</h3>
                <ul className="space-y-2 text-blue-800">
                  <li>통증이 느껴지면 즉시 중단</li>
                  <li>무릎이 마찰되는 소리가 나면 전문가 상담</li>
                  <li>체중 증가 시 무릎 부하 증가 주의</li>
                  <li>신발 쿠셔닝 상태 수시 점검</li>
                </ul>
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
                <Link href="/blog/tennis-shoes-selection-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👟</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 신발 선택 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">코트별 선택, 쿠셔닝, 안정성 등 모든 것</p>
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
                <Link href="/blog/tennis-elbow-prevention" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 엘보우 예방법</p>
                      <p className="text-sm text-gray-600 mt-1">원인 분석과 예방 운동, 생활 습관 개선</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/injury-check" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🏥</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 부상 리스크 계산기</p>
                      <p className="text-sm text-gray-600 mt-1">나의 부상 위험도를 파악하고 예방하세요</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 건강한 무릎으로 자유로운 플레이</h2>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스는 다리의 스포츠입니다.<br />
                  <strong className="text-gray-900">강한 무릎이 있어야 빠른 움직임이 가능합니다</strong>.<br />
                  오늘부터 시작하는 무릎 강화 운동이 평생 테니스의 즐거움을 지켜줄 거예요.
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-stretching-routine" className="text-blue-600 hover:underline">테니스 스트레칭 루틴 💪</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/knee-protection-exercises');
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
