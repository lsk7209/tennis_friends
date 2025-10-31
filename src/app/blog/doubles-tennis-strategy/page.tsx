'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Share2, Users, Target, Zap, Shield } from 'lucide-react';

export default function DoublesTennisStrategy() {
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
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-4 text-sm font-semibold">
              전략 & 전술
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              더블스 테니스 완벽 전략 가이드 🏓
            </h1>

            <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>2025-01-31</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>9분 읽기</span>
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
            <a href="#doubles-basics" className="block text-gray-700 hover:text-blue-600 transition-colors">
              1. 더블스 테니스의 기본 원칙
            </a>
            <a href="#positioning" className="block text-gray-700 hover:text-blue-600 transition-colors">
              2. 포지셔닝과 무브먼트
            </a>
            <a href="#communication" className="block text-gray-700 hover:text-blue-600 transition-colors">
              3. 파트너와의 커뮤니케이션
            </a>
            <a href="#serve-return" className="block text-gray-700 hover:text-blue-600 transition-colors">
              4. 서브와 리턴 전략
            </a>
            <a href="#net-play" className="block text-gray-700 hover:text-blue-600 transition-colors">
              5. 네트 플레이 마스터하기
            </a>
            <a href="#poaching" className="block text-gray-700 hover:text-blue-600 transition-colors">
              6. 포칭(Poaching) 기술
            </a>
            <a href="#tactics" className="block text-gray-700 hover:text-blue-600 transition-colors">
              7. 상황별 전술 적용
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 mb-4">
              "더블스는 싱글스보다 어렵다면서요?"<br />
              <strong className="text-gray-900">더블스는 전략의 스포츠</strong>입니다.<br />
              파트너와의 호흡, 포지셔닝, 커뮤니케이션으로 승부를 좌우합니다.<br />
              프로 선수들이 즐겨하는 더블스 전략의 모든 것을 공개합니다.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600">
              "더블스에서 이기는 것은 기술이 아닌 전략이다." — 더블스 전문 코치 박준혁
            </blockquote>
          </div>

          <div className="space-y-8">
            <section id="doubles-basics">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏓 1. 더블스 테니스의 기본 원칙</h2>
              <p className="text-gray-700 mb-4">
                더블스는 <strong className="text-gray-900">팀 스포츠</strong>입니다.<br />
                싱글스처럼 개인 기량만 좋다고 이길 수 없습니다.<br />
                파트너십과 전략적 사고가 승패를 결정합니다.
              </p>

              <div className="bg-white border border-gray-300 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">🎯 더블스의 핵심 요소</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-900 mb-2">협력 플레이</h4>
                    <p className="text-sm text-gray-600">파트너와의 호흡과 역할 분담</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">전술적 사고</h4>
                    <p className="text-sm text-gray-600">상대 약점 공략과 패턴 활용</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-900 mb-2">커뮤니케이션</h4>
                    <p className="text-sm text-gray-600">실시간 소통으로 전략 조율</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-900 mb-2">적응력</h4>
                    <p className="text-sm text-gray-600">상황 변화에 따른 전략 수정</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 text-sm">
                  💡 <strong>팁:</strong> 더블스에서는 "나"가 아닌 "우리"로 생각하세요.
                </p>
              </div>
            </section>

            <section id="positioning">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">📍 2. 포지셔닝과 무브먼트</h2>
              <p className="text-gray-700 mb-4">
                더블스의 승패는 <strong className="text-gray-900">포지셔닝에서 70% 결정</strong>됩니다.<br />
                올바른 위치 선점과 효율적인 무브먼트가 핵심입니다.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-blue-900 mb-3">🎾 베이스 포지션</h3>
                    <p className="text-blue-800 mb-2"><strong>서버:</strong> 베이스라인 뒤쪽 중앙</p>
                    <p className="text-blue-800 mb-2"><strong>리시버:</strong> 서비스 박스 중앙</p>
                    <p className="text-sm text-gray-600"><strong>목적:</strong> 모든 방향의 공에 대응 가능</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-green-900 mb-3">🏃 무브먼트 원칙</h3>
                    <ul className="text-green-800 space-y-1">
                      <li>• 측면 이동 시 작은 스텝으로 효율성 높이기</li>
                      <li>• 전후 이동 시 준비 자세 유지</li>
                      <li>• 파트너의 위치 고려하여 공간 분담</li>
                      <li>• 공의 궤적 예측하여 최적 위치 선점</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-purple-900 mb-3">🔄 포지션 로테이션</h3>
                    <p className="text-purple-800 mb-2"><strong>왼쪽 플레이어:</strong> 크로스코트 공 담당</p>
                    <p className="text-purple-800 mb-2"><strong>오른쪽 플레이어:</strong> 다운 더 라인 공 담당</p>
                    <p className="text-sm text-gray-600"><strong>전략:</strong> 상대의 강한 쪽 피하고 약한 쪽 공략</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="communication">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">💬 3. 파트너와의 커뮤니케이션</h2>
              <p className="text-gray-700 mb-4">
                더블스의 <strong className="text-gray-900">커뮤니케이션은 예술</strong>입니다.<br />
                말이 없어도 서로의 의도를 알아야 진정한 파트너십이 형성됩니다.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-green-900 mb-3">🗣️ 필수 커뮤니케이션</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <div className="font-medium">서브 전 의사소통</div>
                      <div className="text-sm text-gray-600">"어디로 서브할까?", "네트 갈래?"</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <div className="font-medium">포인트 중 상황 공유</div>
                      <div className="text-sm text-gray-600">"내가 처리할게", "네트 가!"</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-200 text-green-800 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <div className="font-medium">전술 변경 시사</div>
                      <div className="text-sm text-gray-600">"포칭 시도해보자", "높이 올려!"</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">🤫 비언어적 커뮤니케이션</h3>
                <ul className="space-y-2 text-blue-800">
                  <li><strong>눈맞춤:</strong> "이 공은 네가 처리해" 신호</li>
                  <li><strong>몸짓:</strong> 손가락으로 방향 가리키기</li>
                  <li><strong>포지션:</strong> 자연스러운 위치 이동으로 의사 표시</li>
                  <li><strong>라켓 포인팅:</strong> 다음 타깃 방향 가리키기</li>
                </ul>
              </div>
            </section>

            <section id="serve-return">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎾 4. 서브와 리턴 전략</h2>
              <p className="text-gray-700 mb-4">
                더블스 서브는 <strong className="text-gray-900">팀플레이의 시작</strong>입니다.<br />
                파트너의 위치와 강점을 고려한 전략적 서브가 필요합니다.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">🎯 서브 전략</h3>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• 첫 서브는 상대 약점 노리기</li>
                      <li>• 두 번째 서브는 안전하게</li>
                      <li>• 파트너 위치 고려해서 방향 결정</li>
                      <li>• 상대 리턴 스타일 파악 후 선택</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-green-900 mb-2">🔄 리턴 전략</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• 상대 서브 분석 후 대응</li>
                      <li>• 파트너와 역할 분담</li>
                      <li>• 공격적 리턴으로 주도권 선점</li>
                      <li>• 안전한 리턴으로 포인트 유지</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section id="net-play">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏐 5. 네트 플레이 마스터하기</h2>
              <p className="text-gray-700 mb-4">
                더블스의 <strong className="text-gray-900">네트 플레이는 예술</strong>입니다.<br />
                발리, 스매시, 로브 기술의 조합으로 상대를 압도하세요.
              </p>

              <div className="space-y-4">
                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">🎾 발리 기술</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-800">드라이브 발리</h4>
                      <p className="text-sm text-gray-600">공을 낮게 깔아 넣어 상대 압박</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">앵글 발리</h4>
                      <p className="text-sm text-gray-600">코너를 공략하는 각도 공격</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">드롭 발리</h4>
                      <p className="text-sm text-gray-600">공을 짧게 떨어트려 상대 당황</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-800">터치 발리</h4>
                      <p className="text-sm text-gray-600">부드러운 터치로 공 궤적 변경</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-300 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">💪 네트 포지션 전략</h3>
                  <ul className="space-y-2 text-green-800">
                    <li><strong>싱글 네트:</strong> 한 명만 네트로 올라가 상대 압박</li>
                    <li><strong>더블 네트:</strong> 두 명 모두 네트로 올라가 발리 전개</li>
                    <li><strong>원 네트:</strong> 한 명이 네트에 머무르며 지원</li>
                    <li><strong>런다운:</strong> 상대 스매시에 맞서기 위해 낮은 자세</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="poaching">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 6. 포칭(Poaching) 기술</h2>
              <p className="text-gray-700 mb-4">
                포칭은 더블스의 <strong className="text-gray-900">하이라이트 기술</strong>입니다.<br />
                상대의 공을 가로채는 전략으로 큰 점수를 벌 수 있습니다.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mb-4">
                <h3 className="font-semibold text-purple-900 mb-3">🎪 포칭 성공 조건</h3>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li>상대의 백핸드 약점을 파악했을 때</li>
                  <li>파트너의 공이 상대를 코너로 몰았을 때</li>
                  <li>상대가 네트에 집중하고 있을 때</li>
                  <li>포인트 승리가 가까워 긴장된 상황에서</li>
                  <li>상대의 리듬을 깨고 싶을 때</li>
                </ol>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-orange-900 mb-3">⚠️ 포칭 시 주의사항</h3>
                <ul className="space-y-2 text-orange-800">
                  <li><strong>타이밍:</strong> 상대가 공을 칠 준비 단계에서</li>
                  <li><strong>커뮤니케이션:</strong> 파트너에게 미리 신호</li>
                  <li><strong>리스크:</strong> 실패 시 큰 코트 공간 노출</li>
                  <li><strong>연습:</strong> 실제 경기에서 충분히 테스트</li>
                </ul>
              </div>
            </section>

            <section id="tactics">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🧠 7. 상황별 전술 적용</h2>
              <p className="text-gray-700 mb-4">
                상황에 따라 전략을 바꾸는 것이 <strong className="text-gray-900">프로의 방식</strong>입니다.<br />
                점수 상황, 상대 스타일, 코트 상태에 맞춰 전술을 조정하세요.
              </p>

              <div className="space-y-4">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">🔥 공격적 전술</h3>
                  <p className="text-red-800 mb-2"><strong>사용 시기:</strong> 상대가 수비적일 때, 리드할 때</p>
                  <ul className="text-sm space-y-1 text-red-800">
                    <li>• 네트로 올라가 압박</li>
                    <li>• 강한 서브로 주도권 선점</li>
                    <li>• 포칭으로 상대 혼란 유발</li>
                    <li>• 앵글 플레이로 코너 공략</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-3">🛡️ 수비적 전술</h3>
                  <p className="text-blue-800 mb-2"><strong>사용 시기:</strong> 상대가 강할 때, 추격할 때</p>
                  <ul className="text-sm space-y-1 text-blue-800">
                    <li>• 베이스라인에서 안정적 플레이</li>
                    <li>• 로브로 시간 벌기</li>
                    <li>• 상대 실수 유도</li>
                    <li>• 안전한 샷 선택</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">🔄 상황별 전략</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-green-800">득점 기회</h4>
                      <p className="text-sm text-gray-600">공격적으로 네트 공략</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">위기 상황</h4>
                      <p className="text-sm text-gray-600">안전한 플레이로 안정</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">상대 강점</h4>
                      <p className="text-sm text-gray-600">약점 집중 공략</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-800">피로 누적</h4>
                      <p className="text-sm text-gray-600">효율적 에너지 관리</p>
                    </div>
                  </div>
                </div>
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
                      <p className="text-sm text-gray-600 mt-1">발리, 포칭, 포지셔닝 등 네트 플레이 완전 가이드</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/opponent-analysis-strategy" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">상대를 읽는 5가지 전략적 분석법</p>
                      <p className="text-sm text-gray-600 mt-1">상대 약점 파악과 전략 수립</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-mental-techniques" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법</p>
                      <p className="text-sm text-gray-600 mt-1">집중력 유지와 멘탈 관리</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/concentration-during-matches" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">경기 중 흔들리는 집중력을 되찾는 6가지 방법</p>
                      <p className="text-sm text-gray-600 mt-1">집중력 회복과 유지 전략</p>
                    </div>
                  </div>
                </Link>
                <Link href="/blog/tennis-apparel-guide" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">👕</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">테니스 선수를 위한 완벽한 의류 가이드</p>
                      <p className="text-sm text-gray-600 mt-1">기능성 의류 선택과 관리</p>
                    </div>
                  </div>
                </Link>
                <Link href="/utility/match-analyzer" className="block p-6 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-200 group">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">경기 분석 도구</p>
                      <p className="text-sm text-gray-600 mt-1">데이터 기반 경기 분석 및 개선</p>
                    </div>
                  </div>
                </Link>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">🏁 마무리 — 더블스의 진정한 재미</h2>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  더블스는 테니스의 <strong className="text-gray-900">정수</strong>입니다.<br />
                  개인 기량보다 팀워크와 전략이 더 중요합니다.<br />
                  올바른 포지셔닝, 커뮤니케이션, 전술로 더블스의 마스터가 되어보세요.
                </p>
                <p className="text-sm text-gray-600">
                  ✨ 다음 읽기: <Link href="/blog/tennis-vocabulary-guide" className="text-blue-600 hover:underline">테니스 용어 사전 📚</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Share Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText('https://tennisfriends.kr/blog/doubles-tennis-strategy');
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
