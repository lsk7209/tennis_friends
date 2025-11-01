'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  Play,
  Square,
  RotateCcw,
  Trophy,
  Target,
  Clock,
  Zap,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Award,
  Timer
} from 'lucide-react';

// 메타데이터
export const metadata: Metadata = {
  title: '반응 속도 테스트하기 - 테니스 반응 속도 게임 | TennisFriends',
  description: '테니스 반응 속도를 게임처럼 재미있게 테스트하세요. 순발력 향상을 위한 인터랙티브한 훈련 도구입니다.',
  keywords: ['반응 속도 테스트', '테니스 게임', '순발력 훈련', '반응 시간 측정'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/reaction-test/test',
  },
};

type GameState = 'waiting' | 'ready' | 'active' | 'clicked' | 'result' | 'finished';

interface TestResult {
  reactionTime: number;
  timestamp: number;
  accuracy: boolean;
}

export default function ReactionTestGame() {
  const [gameState, setGameState] = useState<GameState>('waiting');
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTime, setReactionTime] = useState<number>(0);
  const [results, setResults] = useState<TestResult[]>([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [totalRounds] = useState(10);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isEarlyClick, setIsEarlyClick] = useState(false);

  const maxDelay = difficulty === 'easy' ? 3000 : difficulty === 'medium' ? 2000 : 1500;
  const minDelay = difficulty === 'easy' ? 1000 : difficulty === 'medium' ? 800 : 600;

  const startTest = useCallback(() => {
    setGameState('ready');
    setIsEarlyClick(false);
    const delay = Math.random() * (maxDelay - minDelay) + minDelay;

    setTimeout(() => {
      if (gameState === 'ready') {
        setStartTime(Date.now());
        setGameState('active');
      }
    }, delay);
  }, [gameState, maxDelay, minDelay]);

  const handleClick = useCallback(() => {
    if (gameState === 'ready') {
      // 너무 일찍 클릭한 경우
      setIsEarlyClick(true);
      setGameState('waiting');
      return;
    }

    if (gameState === 'active') {
      const endTime = Date.now();
      const time = endTime - startTime;
      setReactionTime(time);
      setGameState('clicked');

      const newResult: TestResult = {
        reactionTime: time,
        timestamp: endTime,
        accuracy: time < 1000 // 1초 이내 클릭은 정확하다고 간주
      };

      setResults(prev => [...prev, newResult]);
      setCurrentRound(prev => prev + 1);

      // 다음 라운드 자동 시작 (1초 후)
      setTimeout(() => {
        if (currentRound + 1 < totalRounds) {
          startTest();
        } else {
          setGameState('finished');
        }
      }, 1000);
    }
  }, [gameState, startTime, currentRound, totalRounds, startTest]);

  const resetGame = () => {
    setGameState('waiting');
    setStartTime(0);
    setReactionTime(0);
    setResults([]);
    setCurrentRound(0);
    setIsEarlyClick(false);
  };

  const startNewGame = (selectedDifficulty: 'easy' | 'medium' | 'hard') => {
    setDifficulty(selectedDifficulty);
    resetGame();
    setCurrentRound(0);
    setTimeout(() => startTest(), 500);
  };

  const getAverageReactionTime = () => {
    if (results.length === 0) return 0;
    const validResults = results.filter(r => r.accuracy);
    if (validResults.length === 0) return 0;
    return validResults.reduce((sum, r) => sum + r.reactionTime, 0) / validResults.length;
  };

  const getBestReactionTime = () => {
    const validResults = results.filter(r => r.accuracy);
    if (validResults.length === 0) return 0;
    return Math.min(...validResults.map(r => r.reactionTime));
  };

  const getReactionGrade = (time: number) => {
    if (time < 200) return { grade: 'S', color: 'text-purple-600', bg: 'bg-purple-100' };
    if (time < 300) return { grade: 'A', color: 'text-green-600', bg: 'bg-green-100' };
    if (time < 400) return { grade: 'B', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (time < 500) return { grade: 'C', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { grade: 'D', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const getDifficultyName = (diff: string) => {
    switch (diff) {
      case 'easy': return '쉬움';
      case 'medium': return '중간';
      case 'hard': return '어려움';
      default: return '쉬움';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 dark:from-orange-950 dark:via-red-950 dark:to-rose-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/utility/reaction-test" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            반응 속도 테스트로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            테니스 반응 속도 테스트
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            화면이 초록색으로 변할 때 최대한 빠르게 클릭하세요
          </p>
        </div>

        {/* Difficulty Selection */}
        {gameState === 'waiting' && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                난이도 선택
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                테스트 난이도를 선택하세요. 초보자는 쉬움부터 시작하는 것을 추천합니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button
                  onClick={() => startNewGame('easy')}
                  className="h-auto p-6 bg-green-500 hover:bg-green-600 text-white"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">쉬움</div>
                    <div className="text-sm">1-3초 대기</div>
                    <div className="text-xs mt-1">초보자 추천</div>
                  </div>
                </Button>
                <Button
                  onClick={() => startNewGame('medium')}
                  className="h-auto p-6 bg-yellow-500 hover:bg-yellow-600 text-white"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">중간</div>
                    <div className="text-sm">0.8-2초 대기</div>
                    <div className="text-xs mt-1">중급자 추천</div>
                  </div>
                </Button>
                <Button
                  onClick={() => startNewGame('hard')}
                  className="h-auto p-6 bg-red-500 hover:bg-red-600 text-white"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">어려움</div>
                    <div className="text-sm">0.6-1.5초 대기</div>
                    <div className="text-xs mt-1">상급자용</div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Game Area */}
        {(gameState === 'ready' || gameState === 'active' || gameState === 'clicked') && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 mb-8">
            <CardContent className="p-8">
              {/* Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    진행률 ({currentRound}/{totalRounds})
                  </span>
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                    {getDifficultyName(difficulty)} 모드
                  </Badge>
                </div>
                <Progress value={(currentRound / totalRounds) * 100} className="w-full" />
              </div>

              {/* Game Display */}
              <div className="text-center mb-8">
                <div
                  className={`w-64 h-64 mx-auto rounded-lg flex items-center justify-center text-2xl font-bold cursor-pointer transition-all duration-200 ${
                    gameState === 'ready'
                      ? 'bg-red-500 text-white animate-pulse'
                      : gameState === 'active'
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : gameState === 'clicked'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                  onClick={handleClick}
                >
                  {gameState === 'ready' && '기다리세요...'}
                  {gameState === 'active' && '지금 클릭!'}
                  {gameState === 'clicked' && `${reactionTime}ms`}
                </div>

                {isEarlyClick && (
                  <div className="mt-4 p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                    <p className="text-red-800 dark:text-red-200 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      너무 일찍 클릭했습니다! 화면이 초록색으로 변할 때까지 기다려주세요.
                    </p>
                  </div>
                )}

                {gameState === 'clicked' && !isEarlyClick && (
                  <div className="mt-4">
                    <Badge className={`${getReactionGrade(reactionTime).bg} ${getReactionGrade(reactionTime).color}`}>
                      {getReactionGrade(reactionTime).grade} 등급
                    </Badge>
                  </div>
                )}
              </div>

              {/* Instructions */}
              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg">
                <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">게임 방법</h3>
                <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                  <li>• 화면이 <strong>빨간색</strong>으로 바뀌면 준비하세요</li>
                  <li>• 화면이 <strong>초록색</strong>으로 변할 때 최대한 빠르게 클릭하세요</li>
                  <li>• 너무 일찍 클릭하면 다시 시작합니다</li>
                  <li>• 총 {totalRounds}라운드를 진행합니다</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {gameState === 'finished' && (
          <div className="space-y-6">
            {/* Summary */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  테스트 결과
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      {getAverageReactionTime().toFixed(0)}ms
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">평균 반응 시간</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      {getBestReactionTime()}ms
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">최고 기록</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {results.filter(r => r.accuracy).length}/{totalRounds}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">정확도</div>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">평가</h4>
                  <div className="space-y-2">
                    {getAverageReactionTime() < 300 && (
                      <p className="text-green-600 dark:text-green-400 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        탁월한 반응 속도! 테니스 프로 선수급입니다.
                      </p>
                    )}
                    {getAverageReactionTime() >= 300 && getAverageReactionTime() < 500 && (
                      <p className="text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        좋은 반응 속도! 꾸준한 훈련으로 더 향상시킬 수 있습니다.
                      </p>
                    )}
                    {getAverageReactionTime() >= 500 && (
                      <p className="text-orange-600 dark:text-orange-400 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        반응 속도 향상이 필요합니다. 정기적인 훈련을 추천합니다.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  상세 결과
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
                  {results.map((result, index) => (
                    <div key={index} className={`p-3 rounded-lg text-center ${
                      result.accuracy ? 'bg-green-50 dark:bg-green-950' : 'bg-red-50 dark:bg-red-950'
                    }`}>
                      <div className={`font-bold ${
                        result.accuracy ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {result.reactionTime}ms
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {index + 1}번째
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button onClick={resetGame} variant="outline">
                <RotateCcw className="w-4 h-4 mr-2" />
                다시 테스트하기
              </Button>
              <Link href="/utility/reaction-test">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  다른 모드 시도하기
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
