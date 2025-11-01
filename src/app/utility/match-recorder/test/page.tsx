'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  ArrowLeft,
  Plus,
  Minus,
  Trophy,
  Calendar,
  Users,
  MapPin,
  Clock,
  Target,
  Save,
  CheckCircle,
  AlertCircle
} from 'lucide-react';


interface MatchData {
  date: string;
  opponent: string;
  courtType: string;
  matchType: string;
  sets: Array<{
    setNumber: number;
    myScore: number;
    opponentScore: number;
  }>;
  result: 'win' | 'loss';
  duration: string;
  weather: string;
  notes: string;
  improvementPoints: string[];
}

export default function MatchRecorderTest() {
  const [matchData, setMatchData] = useState<MatchData>({
    date: new Date().toISOString().split('T')[0],
    opponent: '',
    courtType: '',
    matchType: 'singles',
    sets: [
      { setNumber: 1, myScore: 0, opponentScore: 0 }
    ],
    result: 'win',
    duration: '',
    weather: '',
    notes: '',
    improvementPoints: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const improvementOptions = [
    '포핸드 정확도',
    '백핸드 컨트롤',
    '서브 정확도',
    '리턴 기술',
    '풋워크 속도',
    '체력 관리',
    '멘탈 집중력',
    '전술 적용',
    '코트 커버리지',
    '기타'
  ];

  const addSet = () => {
    const newSetNumber = matchData.sets.length + 1;
    setMatchData(prev => ({
      ...prev,
      sets: [...prev.sets, { setNumber: newSetNumber, myScore: 0, opponentScore: 0 }]
    }));
  };

  const removeSet = (setIndex: number) => {
    setMatchData(prev => ({
      ...prev,
      sets: prev.sets.filter((_, index) => index !== setIndex)
    }));
  };

  const updateSet = (setIndex: number, field: 'myScore' | 'opponentScore', value: number) => {
    setMatchData(prev => ({
      ...prev,
      sets: prev.sets.map((set, index) =>
        index === setIndex ? { ...set, [field]: value } : set
      )
    }));
  };

  const toggleImprovementPoint = (point: string) => {
    setMatchData(prev => ({
      ...prev,
      improvementPoints: prev.improvementPoints.includes(point)
        ? prev.improvementPoints.filter(p => p !== point)
        : [...prev.improvementPoints, point]
    }));
  };

  const calculateResult = () => {
    const wonSets = matchData.sets.filter(set => set.myScore > set.opponentScore).length;
    const lostSets = matchData.sets.filter(set => set.myScore < set.opponentScore).length;
    return wonSets > lostSets ? 'win' : 'loss';
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // 실제로는 여기서 데이터를 저장하는 API 호출
    const finalData = {
      ...matchData,
      result: calculateResult()
    };

    console.log('경기 기록 데이터:', finalData);

    // 저장 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setCurrentStep(4); // 완료 단계로 이동
  };

  const getScoreDisplay = () => {
    return matchData.sets
      .map(set => `${set.myScore}-${set.opponentScore}`)
      .join(', ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/utility/match-recorder" className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            경기 기록 시스템으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            테니스 경기 기록하기
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            경기를 체계적으로 기록하고 분석하여 실력 향상을 추적하세요
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {['기본 정보', '점수 기록', '세부 사항', '완료'].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep > index + 1
                    ? 'bg-green-500 text-white'
                    : currentStep === index + 1
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > index + 1 ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep === index + 1 ? 'text-amber-600' : 'text-gray-500'
                }`}>
                  {step}
                </span>
                {index < 3 && <div className="w-12 h-0.5 bg-gray-200 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Basic Information */}
        {currentStep === 1 && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                기본 정보 입력
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="date">경기 날짜</Label>
                  <Input
                    id="date"
                    type="date"
                    value={matchData.date}
                    onChange={(e) => setMatchData(prev => ({ ...prev, date: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="opponent">상대 이름</Label>
                  <Input
                    id="opponent"
                    placeholder="상대의 이름을 입력하세요"
                    value={matchData.opponent}
                    onChange={(e) => setMatchData(prev => ({ ...prev, opponent: e.target.value }))}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="courtType">코트 타입</Label>
                  <Select value={matchData.courtType} onValueChange={(value) => setMatchData(prev => ({ ...prev, courtType: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="코트 타입을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hard">하드 코트</SelectItem>
                      <SelectItem value="clay">클레이 코트</SelectItem>
                      <SelectItem value="grass">잔디 코트</SelectItem>
                      <SelectItem value="carpet">카펫 코트</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="matchType">경기 타입</Label>
                  <Select value={matchData.matchType} onValueChange={(value) => setMatchData(prev => ({ ...prev, matchType: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="경기 타입을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="singles">단식</SelectItem>
                      <SelectItem value="doubles">복식</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={() => setCurrentStep(2)} className="bg-amber-500 hover:bg-amber-600">
                  다음 단계
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Score Recording */}
        {currentStep === 2 && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                점수 기록
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {matchData.sets.map((set, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="font-medium text-gray-900 dark:text-white min-w-[60px]">
                      {set.setNumber}세트
                    </div>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm">내 점수</Label>
                      <Input
                        type="number"
                        min="0"
                        max="7"
                        value={set.myScore}
                        onChange={(e) => updateSet(index, 'myScore', parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                      />
                    </div>
                    <div className="text-2xl font-bold text-gray-400">-</div>
                    <div className="flex items-center gap-2">
                      <Label className="text-sm">상대 점수</Label>
                      <Input
                        type="number"
                        min="0"
                        max="7"
                        value={set.opponentScore}
                        onChange={(e) => updateSet(index, 'opponentScore', parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                      />
                    </div>
                    {matchData.sets.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeSet(index)}
                        className="ml-auto"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={addSet}>
                  <Plus className="w-4 h-4 mr-2" />
                  세트 추가
                </Button>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-medium">현재 점수:</span>
                  <span className="text-lg font-bold text-amber-600">{getScoreDisplay()}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-medium">예상 결과:</span>
                  <Badge className={calculateResult() === 'win' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                    {calculateResult() === 'win' ? '승리' : '패배'}
                  </Badge>
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  이전 단계
                </Button>
                <Button onClick={() => setCurrentStep(3)} className="bg-amber-500 hover:bg-amber-600">
                  다음 단계
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Additional Details */}
        {currentStep === 3 && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                세부 사항 및 개선 포인트
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="duration">경기 시간</Label>
                  <Input
                    id="duration"
                    placeholder="예: 1시간 30분"
                    value={matchData.duration}
                    onChange={(e) => setMatchData(prev => ({ ...prev, duration: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="weather">날씨</Label>
                  <Select value={matchData.weather} onValueChange={(value) => setMatchData(prev => ({ ...prev, weather: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="날씨를 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sunny">맑음</SelectItem>
                      <SelectItem value="cloudy">흐림</SelectItem>
                      <SelectItem value="rainy">비</SelectItem>
                      <SelectItem value="windy">바람</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">경기 메모</Label>
                <Textarea
                  id="notes"
                  placeholder="경기 중 기억하고 싶은 점이나 특이사항을 기록하세요"
                  value={matchData.notes}
                  onChange={(e) => setMatchData(prev => ({ ...prev, notes: e.target.value }))}
                  className="mt-1"
                  rows={4}
                />
              </div>

              <div>
                <Label>개선할 포인트 (중복 선택 가능)</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                  {improvementOptions.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <Checkbox
                        id={option}
                        checked={matchData.improvementPoints.includes(option)}
                        onCheckedChange={() => toggleImprovementPoint(option)}
                      />
                      <Label htmlFor={option} className="text-sm cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => setCurrentStep(2)}>
                  이전 단계
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting} className="bg-amber-500 hover:bg-amber-600">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      저장 중...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      경기 기록 저장
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Completion */}
        {currentStep === 4 && (
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                경기 기록이 완료되었습니다!
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                체계적인 경기 기록으로 실력 향상을 추적해보세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/utility/match-recorder/test">
                  <Button className="bg-amber-500 hover:bg-amber-600">
                    <Plus className="w-4 h-4 mr-2" />
                    새 경기 기록하기
                  </Button>
                </Link>
                <Link href="/utility">
                  <Button variant="outline">
                    다른 도구 둘러보기
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
