'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Play } from 'lucide-react';

export default function FocusTrainingIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950 dark:via-indigo-950 dark:to-blue-950">
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            집중력 훈련
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            테니스
            <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent"> 멘탈 트레이닝</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            테니스 경기 중 필요한 집중력을 향상시키는 다양한 훈련 프로그램입니다.
            명상, 호흡법, 시각화 기법으로 경기력을 극대화하세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/utility/focus-training/test">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 text-lg">
                <Play className="w-5 h-5 mr-2" />
                집중력 훈련 시작
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-purple-500 to-indigo-500 border-0 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                지금 바로 시작하세요
              </h3>
              <p className="text-purple-100 mb-6 text-lg">
                멘탈 트레이닝으로 테니스 실력을 한 단계 업그레이드하세요
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}