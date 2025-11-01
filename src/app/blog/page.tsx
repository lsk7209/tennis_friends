'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, Plus } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950 dark:via-indigo-950 dark:to-purple-950">
      <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium mb-6">
            <FileText className="w-4 h-4" />
            테니스 블로그
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            테니스
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> 지식 & 팁</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            테니스 실력 향상을 위한 전문적인 가이드와 최신 정보를 제공합니다.
            초보자부터 프로 선수까지 모두가 즐길 수 있는 콘텐츠를 준비하고 있습니다.
        </p>
      </div>

        {/* Latest Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Newest Post: 초보자 30일 훈련 플랜 */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  최신 글
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                  초보자 가이드
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                테니스 초보자의 첫 30일 훈련 플랜 — 입문부터 경기 감각까지 4주 완성 로드맵
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                테니스는 하루에 배우지 못한다. 하지만 올바른 30일 루틴이면 '폼·타점·감각'이 완성된다. 초보를 위한 실전형 훈련 로드맵.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-09-17</span>
                  <span>•</span>
                  <span>12분</span>
                </div>
                <Link href="/blog/tennis-beginner-30day-training-plan">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  인기 글
                </Badge>
                <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                  초보 가이드
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                테니스 경기 점수 체계 완전 이해 — 게임·세트·타이브레이크까지 한 번에 정리
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                15-30-40-게임, 단순해 보이지만 복잡한 규칙 속에는 전략의 심리가 숨어 있다. 점수를 이해하면 경기 흐름이 보인다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-10-13</span>
                  <span>•</span>
                  <span>10분</span>
                </div>
                <Link href="/blog/tennis-scoring-system-guide">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                  인기 글
                </Badge>
                <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                  멘탈 마스터
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                테니스의 승패는 기술보다 멘탈 루틴에서 갈린다. 포인트 사이 20초를 어떻게 쓰느냐가 경기 전체를 바꾼다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-09-22</span>
                  <span>•</span>
                  <span>11분</span>
                </div>
                <Link href="/blog/tennis-mental-routine-5steps">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                  인기 글
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                  서브 마스터
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                서브 리듬의 과학 — 토스·회전·체중이동으로 완성하는 파워와 안정성
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                서브는 힘이 아니라 리듬의 예술이다. 토스의 높이, 체중이동, 회전축이 일치하면 첫 서브 성공률이 두 배로 오른다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-10-02</span>
                  <span>•</span>
                  <span>11분</span>
                </div>
                <Link href="/blog/tennis-serve-rhythm-science">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300">
                  인기 글
                </Badge>
                <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                  풋워크 마스터
          </Badge>
      </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                테니스 풋워크 밸런스, 빠름보다 '안정'이 먼저다
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                공을 쫓는 속도보다 중요한 건 중심을 잃지 않는 안정감이다. 프로 선수처럼 밸런스를 유지하는 하체 리듬과 스텝 훈련을 정리했다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-11-01</span>
                  <span>•</span>
                  <span>9분</span>
                </div>
                <Link href="/blog/tennis-footwork-balance-training-guide">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                  인기 글
                </Badge>
                <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300">
                  멘탈 마스터
                  </Badge>
                  </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                테니스 멘탈 루틴, 승부를 결정짓는 건 결국 마음이다
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                포핸드보다 어려운 게 멘탈이다. 경기 중 흔들리지 않고 집중력을 유지하는 루틴 5단계, 프로 선수들의 심리 컨트롤법을 해석한다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-11-01</span>
                  <span>•</span>
                  <span>8분</span>
                </div>
                <Link href="/blog/tennis-mental-routine-control-guide">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  추천 글
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                  포핸드 마스터
                </Badge>
                </div>
                
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                포핸드 임팩트, 0.1초가 승부를 가른다
                </h3>
                
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                포핸드는 테니스의 심장이다. 스윙 속도보다 중요한 건 임팩트 타이밍과 몸의 회전 리듬. 이 0.1초의 차이가 경기 전체를 바꾼다.
                </p>
                
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-11-01</span>
                  <span>•</span>
                  <span>8분</span>
                  </div>
                <Link href="/blog/tennis-forehand-impact-timing-guide">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                  인기 글
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                  서브 마스터
                </Badge>
                  </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                테니스 서브 완전 정복, 힘이 아닌 타이밍으로 승부하라
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                강한 서브는 팔힘이 아니라 리듬에서 나온다. 아마추어가 프로처럼 보이게 만드는 서브 타이밍과 스핀 컨트롤의 모든 것을 정리했다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-11-01</span>
                  <span>•</span>
                  <span>9분</span>
                </div>
                <Link href="/blog/tennis-serve-timing-and-spin-guide">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  추천 글
                </Badge>
                <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                  겨울 시즌
                    </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                겨울 테니스, 실내 코트에서 실력을 올리는 7가지 루틴
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                겨울엔 테니스 감이 떨어진다고요? 실내 코트에서도 스피드와 감각을 유지할 수 있는 루틴이 있습니다. 시즌 오프를 성장기로 만드는 법.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-11-01</span>
                  <span>•</span>
                  <span>8분</span>
                </div>
                <Link href="/blog/winter-indoor-tennis-training-routine">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
                  </Button>
                </Link>
                </div>
              </CardContent>
            </Card>

          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300">
                  건강 가이드
                </Badge>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  부상 예방
                </Badge>
      </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                부상 예방은 워밍업이 끝이 아니다
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                테니스 부상의 80%는 준비 부족 때문이다. 워밍업-가동성-쿨다운 루틴을 구조화하면 매 경기 부상 없이 성장할 수 있다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-10-27</span>
                  <span>•</span>
                  <span>10분</span>
                </div>
                <Link href="/blog/tennis-injury-prevention-full-guide">
                  <Button className="bg-blue-500 hover:bg-blue-600">
                    자세히 보기
          </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            준비 중인 콘텐츠
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              '테니스 기초 기술 가이드',
              '장비 선택 및 관리 팁',
              '훈련 프로그램 및 계획',
              '경기 전략 및 멘탈 트레이닝',
              '부상 예방 및 재활 가이드',
              '테니스 뉴스 및 트렌드'
            ].map((topic, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-75">
                <CardContent className="p-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                    {topic}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    곧 업데이트 예정입니다
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}