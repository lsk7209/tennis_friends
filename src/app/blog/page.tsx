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
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                  최신 글
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
                  인기 글
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
                <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
                  추천 글
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                  가을 시즌
                </Badge>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                가을 테니스, 리듬을 되찾는 순간 실력이 달라진다
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                가을 바람이 불면 공의 감각도 달라진다. 테니스 실력은 힘이 아니라 리듬에서 나온다. 지금, 당신의 스윙과 풋워크를 조율할 완벽한 계절이다.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span>2025-11-01</span>
                  <span>•</span>
                  <span>8분</span>
                </div>
                <Link href="/blog/autumn-tennis-rhythm-guide">
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