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
  Pause,
  RotateCcw,
  Wind,
  Brain,
  Eye,
  Timer,
  CheckCircle,
  ArrowRight,
  Volume2,
  VolumeX,
  Target,
  Sparkles
} from 'lucide-react';

// 메타데이터
export const metadata: Metadata = {
  title: '집중력 훈련 세션 - 테니스 멘탈 트레이닝 | TennisFriends',
  description: '테니스 경기 중 필요한 집중력을 향상시키는 인터랙티브한 훈련 세션입니다.',
  keywords: ['집중력 훈련', '테니스 명상', '호흡법', '시각화', '멘탈 트레이닝'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/focus-training/test',
  },
};

type TrainingType = 'breathing' | 'meditation' | 'visualization';
type TrainingPhase = 'selection' | 'preparation' | 'active' | 'completed';

interface TrainingSession {
  type: TrainingType;
  duration: number;
  currentTime: number;
  isActive: boolean;
  isPaused: boolean;
  phase: TrainingPhase;
}

export default function FocusTrainingSession() {
  const [session, setSession] = useState<TrainingSession>({
    type: 'breathing',
    duration: 300, // 5분
    currentTime: 0,
    isActive: false,
    isPaused: false,
    phase: 'selection'
  });

  const [soundEnabled, setSoundEnabled] = useState(true);

  const trainingPrograms = [
    {
      type: 'breathing' as TrainingType,
      title: '호흡 집중 훈련',
      description: '4-4-4 호흡법으로 마음을 안정시키고 집중력을 높입니다.',
      duration: 300,
      icon: Wind,
      color: 'from-blue-500 to-cyan-500',
      instructions: [
        '편안한 자세로 앉거나 누워서 눈을 감습니다.',
        '코로 숨을 4초 동안 천천히 들이마십니다.',
        '숨을 4초 동안 참습니다.',
        '입으로 4초 동안 천천히 내쉬습니다.',
        '이 과정을 반복하며 호흡에만 집중하세요.'
      ]
    },
    {
      type: 'meditation' as TrainingType,
      title: '마인드풀니스 명상',
      description: '현재 순간에 집중하며 불필요한 생각을 제거하는 고급 훈련입니다.',
      duration: 600,
      icon: Brain,
      color: 'from-purple-500 to-indigo-500',
      instructions: [
        '편안한 자세로 앉아 등줄기를 곧게 세웁니다.',
        '호흡을 자연스럽게 유지하며 눈을 감습니다.',
        '생각이 떠오를 때마다 그것을 판단하지 말고 놓아줍니다.',
        '호흡과 현재 순간에만 집중하세요.',
        '마음이 산만해지면 호흡으로 돌아옵니다.'
      ]
    },
    {
      type: 'visualization' as TrainingType,
      title: '시각화 훈련',
      description: '완벽한 샷을 상상하며 자신감을 키우는 시각화 훈련입니다.',
      duration: 480,
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      instructions: [
        '편안한 자세로 앉아 눈을 감습니다.',
        '코트를 상상하고 자신을 선수로 만듭니다.',
        '완벽한 포핸드 스트로크를 상상합니다.',
        '상대의 강타에 성공적으로 대응하는 장면을 그립니다.',
        '승리의 순간을 생생하게 시각화합니다.'
      ]
    }
  ];

  const startTraining = useCallback((type: TrainingType) => {
    const program = trainingPrograms.find(p => p.type === type);
    if (!program) return;

    setSession({
      type,
      duration: program.duration,
      currentTime: 0,
      isActive: false,
      isPaused: false,
      phase: 'preparation'
    });

    // 3초 후 훈련 시작
    setTimeout(() => {
      setSession(prev => ({ ...prev, phase: 'active', isActive: true }));
    }, 3000);
  }, []);

  const togglePause = useCallback(() => {
    setSession(prev => ({
      ...prev,
      isPaused: !prev.isPaused
    }));
  }, []);

  const resetTraining = useCallback(() => {
    setSession(prev => ({
      ...prev,
      currentTime: 0,
      isActive: false,
      isPaused: false,
      phase: 'selection'
    }));
  }, []);

  // 타이머 로직
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (session.isActive && !session.isPaused && session.phase === 'active') {
      interval = setInterval(() => {
        setSession(prev => {
          const newTime = prev.currentTime + 1;
          if (newTime >= prev.duration) {
            return {
              ...prev,
              currentTime: prev.duration,
              isActive: false,
              phase: 'completed'
            };
          }
          return {
            ...prev,
            currentTime: newTime
          };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [session.isActive, session.isPaused, session.phase]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    return (session.currentTime / session.duration) * 100;
  };

  const getCurrentProgram = () => {
    return trainingPrograms.find(p => p.type === session.type);
  };

  const getBreathingGuide = () => {
    const elapsed = session.currentTime % 12; // 4+4+4 = 12초 주기

    if (elapsed < 4) return { phase: 'inhale', text: '코로 숨을 들이마시세요', color: 'text-blue-600' };
    if (elapsed < 8) return { phase: 'hold', text: '숨을 참으세요', color: 'text-purple-600' };
    return { phase: 'exhale', text: '입으로 천천히 내쉬세요', color: 'text-green-600' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 dark:from-purple-950 dark:via-indigo-950 dark:to-blue-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/utility/focus-training" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            집중력 훈련으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            집중력 훈련 세션
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            테니스 경기력을 향상시키는 멘탈 트레이닝 프로그램
          </p>
        </div>

        {/* Program Selection */}
        {session.phase === 'selection' && (
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  훈련 프로그램 선택
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  자신에게 맞는 집중력 훈련 프로그램을 선택하세요. 각 프로그램은 테니스 경기력을 향상시키는 데 특화되어 있습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {trainingPrograms.map((program) => (
                    <Card key={program.type} className="cursor-pointer hover:shadow-lg transition-all border-2 hover:border-purple-300" onClick={() => startTraining(program.type)}>
                      <CardContent className="p-6">
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${program.color} text-white mb-4`}>
                          <program.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {program.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                          {program.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                            {formatTime(program.duration)}
                          </Badge>
                          <ArrowRight className="w-4 h-4 text-purple-500" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Preparation Phase */}
        {session.phase === 'preparation' && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Timer className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                훈련 준비 중...
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                편안한 자세를 취하고 마음을 가다듬으세요.<br />
                3초 후 훈련이 시작됩니다.
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="outline" onClick={resetTraining}>
                  취소하기
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Active Training Phase */}
        {session.phase === 'active' && (
          <div className="space-y-6">
            {/* Progress and Controls */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {getCurrentProgram()?.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSoundEnabled(!soundEnabled)}
                    >
                      {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {formatTime(session.currentTime)}
                  </div>
                  <Progress value={getProgress()} className="w-full max-w-xs mx-auto" />
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {formatTime(session.duration)} 중 {Math.round(getProgress())}% 완료
                  </p>
                </div>

                <div className="flex justify-center gap-4">
                  <Button onClick={togglePause} variant="outline">
                    {session.isPaused ? <Play className="w-4 h-4 mr-2" /> : <Pause className="w-4 h-4 mr-2" />}
                    {session.isPaused ? '계속하기' : '일시정지'}
                  </Button>
                  <Button onClick={resetTraining} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    처음으로
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Training Instructions */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  훈련 가이드
                </CardTitle>
              </CardHeader>
              <CardContent>
                {session.type === 'breathing' && (
                  <div className="text-center">
                    <div className={`text-2xl font-bold mb-4 ${getBreathingGuide().color}`}>
                      {getBreathingGuide().text}
                    </div>
                    <div className="space-y-2 text-gray-600 dark:text-gray-300">
                      <p>• 코로 4초 들이마시기</p>
                      <p>• 4초 동안 숨 참기</p>
                      <p>• 입으로 4초 내쉬기</p>
                      <p>• 이 과정을 반복하며 호흡에만 집중</p>
                    </div>
                  </div>
                )}

                {session.type === 'meditation' && (
                  <div className="space-y-4">
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300">
                      "지금 이 순간에 집중하세요. 생각이 떠오를 때마다 그것을 판단하지 말고 놓아주세요."
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      {getCurrentProgram()?.instructions.map((instruction, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{instruction}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {session.type === 'visualization' && (
                  <div className="space-y-4">
                    <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-4">
                      "완벽한 테니스 경기를 상상하며 자신감을 키우세요."
                    </p>
                    <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">시각화 단계:</h4>
                      <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                        {getCurrentProgram()?.instructions.map((instruction, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <span className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                              {index + 1}
                            </span>
                            <span>{instruction}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {/* Completion Phase */}
        {session.phase === 'completed' && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                훈련 완료!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                집중력 훈련을 성공적으로 마쳤습니다.<br />
                이 훈련이 테니스 경기에서 도움이 되길 바랍니다.
              </p>

              <div className="bg-purple-50 dark:bg-purple-950 p-6 rounded-lg mb-6">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-3">
                  훈련 효과 극대화하기
                </h4>
                <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-2">
                  <li>• 매일 꾸준히 훈련하는 것이 중요합니다</li>
                  <li>• 경기 전 10-15분 명상으로 최상의 컨디션을 유지하세요</li>
                  <li>• 호흡법을 경기 중 긴장될 때 활용하세요</li>
                  <li>• 시각화로 자신감을 높이고 긍정적인 마인드를 유지하세요</li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetTraining} className="bg-purple-500 hover:bg-purple-600">
                  <RotateCcw className="w-4 h-4 mr-2" />
                  다른 훈련하기
                </Button>
                <Link href="/utility/focus-training">
                  <Button variant="outline">
                    <Sparkles className="w-4 h-4 mr-2" />
                    훈련 정보 보기
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
