'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';

export default function ShoulderInjuryPrevention() {
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
              건강 & 피트니스
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              테니스 어깨 부상, 예방이 최선입니다 💪
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-27</span>
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
            <a href="#shoulder-anatomy" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 테니스에서 어깨가 다치는 이유
            </a>
            <a href="#common-causes" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 어깨 부상의 흔한 원인들
            </a>
            <a href="#prevention-exercises" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 어깨 강화 운동 6가지
            </a>
            <a href="#stretching-routine" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 테니스 전후 스트레칭 루틴
            </a>
            <a href="#technique-tips" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 올바른 테니스 기술로 예방하기
            </a>
            <a href="#recovery-methods" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 부상 시 회복 방법
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "어깨가 아파서 테니스를 못 치겠어요."<br />
              테니스 선수들의 가장 흔한 고민 중 하나입니다.<br />
              <strong className="text-gray-900">어깨 부상은 예방이 최선</strong>입니다.<br />
              오늘부터 시작하는 건강한 어깨 관리법을 알려드리겠습니다.
            </p>
            <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-600">
              "강한 어깨는 좋은 테니스 기술의 기초다." — 코치 재영
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="shoulder-anatomy">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏗️ 1. 테니스에서 어깨가 다치는 이유</h2>
              <p className="text-gray-700 mb-4">
                테니스는 어깨에 큰 부담을 주는 스포츠입니다.<br />
                서브, 포핸드, 백핸드 모두 <strong className="text-gray-900">회전근개(rotator cuff)</strong>를 사용합니다.<br />
                특히 서브 동작은 어깨에 200% 이상의 스트레스를 줍니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">📊 테니스 동작별 어깨 부하</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>서브:</strong> 최대 300% 회전근개 부하</li>
                  <li><strong>포핸드:</strong> 150-200% 회전근개 부하</li>
                  <li><strong>백핸드:</strong> 100-150% 회전근개 부하</li>
                  <li><strong>오버헤드:</strong> 250% 회전근개 부하</li>
                </ul>
              </div>
            </section>

            <section id="common-causes">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🚨 2. 어깨 부상의 흔한 원인들</h2>
              <p className="text-gray-700 mb-4">
                테니스 어깨 부상의 80%는 <strong className="text-gray-900">예방 가능한 원인</strong>에서 발생합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">❌ 잘못된 자세</h3>
                    <p className="text-sm text-red-800">팔꿈치가 낮은 서브 자세, 과도한 팔 사용</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">❌ 근력 불균형</h3>
                    <p className="text-sm text-red-800">전면 근육만 발달, 후면 근육 약화</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">❌ 과도한 연습</h3>
                    <p className="text-sm text-red-800">쉬는 날 없이 매일 연습, 회복 부족</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">❌ 스트레칭 부족</h3>
                    <p className="text-sm text-red-800">워밍업/쿨다운 생략, 유연성 부족</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="prevention-exercises">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💪 3. 어깨 강화 운동 6가지</h2>
              <p className="text-gray-700 mb-4">
                매일 10분, 주 3-4회 실시하세요.<br />
                처음에는 가벼운 무게부터 시작해 점진적으로 늘리세요.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">1. 외회전 근력 운동 (External Rotation)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 밴드나 덤벨을 들고 팔을 바깥으로 회전</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 15회 × 3세트 | <strong>효과:</strong> 회전근개 강화</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">2. 내회전 근력 운동 (Internal Rotation)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 밴드나 덤벨을 들고 팔을 안쪽으로 회전</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 15회 × 3세트 | <strong>효과:</strong> 균형 잡힌 근력</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">3. 측면 승모근 운동 (Lateral Raise)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 팔을 옆으로 들어올려 어깨 높이까지</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 12회 × 3세트 | <strong>효과:</strong> 안정성 향상</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">4. 전면 승모근 운동 (Front Raise)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 팔을 앞쪽으로 들어올려 어깨 높이까지</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 12회 × 3세트 | <strong>효과:</strong> 전면 근력 강화</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">5. 로테이션 운동 (Wall Angels)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 벽에 기대서 팔로 천사 모양 그리기</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 10회 × 3세트 | <strong>효과:</strong> 가동범위 확장</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">6. 아이소메트릭 홀드 (Isometric Hold)</h3>
                    <p className="text-blue-800 mb-2"><strong>방법:</strong> 팔을 90도 들고 10초 버티기</p>
                    <p className="text-sm text-gray-600"><strong>횟수:</strong> 10초 × 3세트 | <strong>효과:</strong> 근지구력 향상</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="stretching-routine">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧘 4. 테니스 전후 스트레칭 루틴</h2>
              <p className="text-gray-700 mb-4">
                <strong className="text-gray-900">워밍업 5분 + 쿨다운 5분</strong>으로 부상을 예방하세요.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🌅 테니스 전 워밍업 스트레칭</h3>
                <ol className="list-decimal list-inside space-y-2 text-green-800">
                  <li>어깨 굴리기 (시계방향/반시계방향 각 10회)</li>
                  <li>팔 교차 스트레칭 (양팔 20초씩)</li>
                  <li>가슴 열기 스트레칭 (20초)</li>
                  <li>어깨 후면 스트레칭 (20초)</li>
                  <li>가벼운 팔 흔들기 (30초)</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">🌙 테니스 후 쿨다운 스트레칭</h3>
                <ol className="list-decimal list-inside space-y-2 text-blue-800">
                  <li>어깨 굴리기 (천천히 10회)</li>
                  <li>어깨 후면 깊이 스트레칭 (30초)</li>
                  <li>가슴 스트레칭 (30초)</li>
                  <li>등 스트레칭 (30초)</li>
                  <li>목과 어깨 연결 스트레칭 (30초)</li>
                </ol>
              </div>
            </section>

            <section id="technique-tips">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 5. 올바른 테니스 기술로 예방하기</h2>
              <p className="text-gray-700 mb-4">
                잘못된 기술이 어깨 부상의 주원인입니다.
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">💡 서브 기술 팁</h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>팔꿈치를 어깨 높이로 유지</li>
                    <li>몸의 회전을 먼저, 팔은 따라가기</li>
                    <li>서브 후 팔을 완전히 휴식</li>
                  </ul>
                </div>

                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-3">💡 포핸드 기술 팁</h3>
                  <ul className="space-y-2 text-purple-800">
                    <li>라켓을 몸 가까이 유지</li>
                    <li>어깨가 아닌 몸통으로 회전</li>
                    <li>팔을 완전히 펴서 스트로크</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="recovery-methods">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🩹 6. 부상 시 회복 방법</h2>
              <p className="text-gray-700 mb-4">
                부상이 발생했다면 즉시 대처하세요.<br />
                <strong className="text-gray-900">RICE 원칙</strong>을 기억하세요.
              </p>

              <div className="bg-red-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-red-900 mb-3">🧊 RICE 치료법</h3>
                <dl className="space-y-2 text-red-800">
                  <dt className="font-semibold">Rest (휴식)</dt>
                  <dd>통증이 사라질 때까지 해당 동작 피하기</dd>

                  <dt className="font-semibold">Ice (얼음)</dt>
                  <dd>15-20분간 얼음찜질, 하루 3-4회</dd>

                  <dt className="font-semibold">Compression (압박)</dt>
                  <dd>부드러운 탄력 붕대로 가볍게 압박</dd>

                  <dt className="font-semibold">Elevation (거상)</dt>
                  <dd>어깨를 심장보다 높게 유지</dd>
                </dl>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-yellow-800">
                  ⚠️ <strong className="text-yellow-900">주의:</strong> 통증이 2주 이상 지속되면 전문의를 찾아가세요.
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
                <Link href="/blog/tennis-elbow-prevention" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 엘보우 예방법</p>
                      <p className="text-sm text-gray-600 mt-1">원인 분석과 예방 운동, 생활 습관 개선</p>
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
                <Link href="/blog/forehand-body-balance" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💪</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">포핸드 스윙 교정법</p>
                      <p className="text-sm text-gray-600 mt-1">몸 밸런스, 스윙 궤적, 임팩트 포인트</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 건강한 어깨로 즐기는 테니스</h2>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  테니스 어깨 부상은 피할 수 없는 운명이 아닙니다.<br />
                  올바른 예방 운동과 스트레칭으로 <strong className="text-gray-900">건강한 어깨를 유지하세요</strong>.<br />
                  오늘부터 시작하는 작은 습관이 평생 테니스의 즐거움을 지켜줄 거예요.
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-injury-prevention-exercises" className="text-blue-600 hover:underline">테니스 부상 예방을 위한 8가지 필수 운동 💪</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/shoulder-injury-prevention');
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
