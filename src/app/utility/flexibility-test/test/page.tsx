'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import {
  ArrowLeft,
  Activity,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  RotateCcw,
  Target,
  Award,
  ArrowRight,
  RefreshCw
} from 'lucide-react';


interface FlexibilityData {
  shoulderRotation: number;
  elbowFlexion: number;
  wristFlexion: number;
  wristExtension: number;
  waistRotation: number;
  hipFlexion: number;
}

interface TestResult {
  joint: string;
  score: number;
  status: 'excellent' | 'good' | 'fair' | 'poor';
  recommendation: string;
  exercises: string[];
}

export default function FlexibilityTestPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [flexibilityData, setFlexibilityData] = useState<FlexibilityData>({
    shoulderRotation: 0,
    elbowFlexion: 0,
    wristFlexion: 0,
    wristExtension: 0,
    waistRotation: 0,
    hipFlexion: 0
  });

  const [results, setResults] = useState<TestResult[]>([]);
  const [overallScore, setOverallScore] = useState(0);

  const testItems = [
    {
      key: 'shoulderRotation' as keyof FlexibilityData,
      title: '어깨 회전 범위',
      description: '팔을 앞으로 뻗은 상태에서 등 뒤로 얼마나 회전할 수 있나요?',
      unit: 'cm',
      instruction: '벽에 기대서 팔을 앞으로 뻗고, 반대쪽 손으로 등 뒤까지 닿는 거리를 측정하세요.',
      excellent: { min: 15, max: 25 },
      good: { min: 10, max: 15 },
      fair: { min: 5, max: 10 }
    },
    {
      key: 'elbowFlexion' as keyof FlexibilityData,
      title: '팔꿈치 굴곡 범위',
      description: '팔꿈치를 구부렸을 때의 각도를 측정하세요.',
      unit: '도',
      instruction: '팔을 앞으로 뻗고 팔꿈치를 90도로 구부렸을 때 추가로 더 구부릴 수 있는 각도를 측정하세요.',
      excellent: { min: 150, max: 180 },
      good: { min: 130, max: 150 },
      fair: { min: 110, max: 130 }
    },
    {
      key: 'wristFlexion' as keyof FlexibilityData,
      title: '손목 굴곡 범위',
      description: '손목을 아래로 굽힐 수 있는 범위를 측정하세요.',
      unit: '도',
      instruction: '팔을 곧게 펴고 손목을 아래로 최대한 굽힌 각도를 측정하세요.',
      excellent: { min: 70, max: 90 },
      good: { min: 50, max: 70 },
      fair: { min: 30, max: 50 }
    },
    {
      key: 'wristExtension' as keyof FlexibilityData,
      title: '손목 신전 범위',
      description: '손목을 위로 젖힐 수 있는 범위를 측정하세요.',
      unit: '도',
      instruction: '팔을 곧게 펴고 손목을 위로 최대한 젖힌 각도를 측정하세요.',
      excellent: { min: 60, max: 80 },
      good: { min: 40, max: 60 },
      fair: { min: 20, max: 40 }
    },
    {
      key: 'waistRotation' as keyof FlexibilityData,
      title: '허리 회전 범위',
      description: '허리의 회전 범위를 측정하세요.',
      unit: '도',
      instruction: '앉은 자세에서 상체를 고정한 상태로 허리를 회전할 수 있는 각도를 측정하세요.',
      excellent: { min: 60, max: 90 },
      good: { min: 40, max: 60 },
      fair: { min: 20, max: 40 }
    },
    {
      key: 'hipFlexion' as keyof FlexibilityData,
      title: '고관절 굴곡 범위',
      description: '다리를 앞으로 들어올릴 수 있는 범위를 측정하세요.',
      unit: '도',
      instruction: '누운 자세에서 한 다리를 들어올렸을 때 지면과 다리의 각도를 측정하세요.',
      excellent: { min: 80, max: 110 },
      good: { min: 60, max: 80 },
      fair: { min: 40, max: 60 }
    }
  ];

  const updateValue = (key: keyof FlexibilityData, value: number) => {
    setFlexibilityData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const calculateResult = (item: typeof testItems[0], value: number): TestResult => {
    const ranges = item.excellent;
    let status: 'excellent' | 'good' | 'fair' | 'poor' = 'poor';
    let recommendation = '';
    let exercises: string[] = [];

    if (value >= ranges.min && value <= ranges.max) {
      status = 'excellent';
      recommendation = '탁월한 유연성을 가지고 있습니다!';
      exercises = ['현재 수준 유지하기', '고급 스트레칭 연습'];
    } else if (value >= (ranges.min * 0.8) && value < ranges.min) {
      status = 'good';
      recommendation = '좋은 유연성을 가지고 있습니다.';
      exercises = ['기본 스트레칭 유지', '가벼운 유연성 운동'];
    } else if (value >= (ranges.min * 0.6) && value < (ranges.min * 0.8)) {
      status = 'fair';
      recommendation = '보통 수준의 유연성입니다. 개선이 필요합니다.';
      exercises = ['매일 스트레칭 하기', '요가나 필라테스 시작'];
    } else {
      status = 'poor';
      recommendation = '유연성 개선이 시급합니다.';
      exercises = ['전문가 상담 받기', '체계적인 스트레칭 프로그램', '정기적인 유연성 테스트'];
    }

    return {
      joint: item.title,
      score: value,
      status,
      recommendation,
      exercises
    };
  };

  const calculateOverallScore = () => {
    const allResults = testItems.map(item => calculateResult(item, flexibilityData[item.key]));
    setResults(allResults);

    const averageScore = allResults.reduce((sum, result) => {
      const scoreValue = result.status === 'excellent' ? 4 : result.status === 'good' ? 3 : result.status === 'fair' ? 2 : 1;
      return sum + scoreValue;
    }, 0) / allResults.length;

    setOverallScore(Math.round(averageScore * 25)); // 0-100 점수로 변환
  };

  const getOverallAssessment = () => {
    if (overallScore >= 80) return { level: '탁월', color: 'text-green-600', bg: 'bg-green-100' };
    if (overallScore >= 60) return { level: '좋음', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (overallScore >= 40) return { level: '보통', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { level: '개선 필요', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const resetTest = () => {
    setFlexibilityData({
      shoulderRotation: 0,
      elbowFlexion: 0,
      wristFlexion: 0,
      wristExtension: 0,
      waistRotation: 0,
      hipFlexion: 0
    });
    setResults([]);
    setOverallScore(0);
    setCurrentStep(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/utility/flexibility-test" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 mb-4">
            <ArrowLeft className="w-4 h-4" />
            유연성 테스트로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            테니스 유연성 테스트
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            각 관절의 가동범위를 측정하여 테니스에 최적화된 유연성을 평가합니다
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {['측정하기', '결과보기'].map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep > index + 1
                    ? 'bg-green-500 text-white'
                    : currentStep === index + 1
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {currentStep > index + 1 ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep === index + 1 ? 'text-teal-600' : 'text-gray-500'
                }`}>
                  {step}
                </span>
                {index < 1 && <div className="w-12 h-0.5 bg-gray-200 mx-4" />}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Input Form */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  유연성 측정하기
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  각 항목에 대해 측정값을 입력해주세요. 정확한 측정을 위해 도움닫기(앱이나 측정 도구)를 사용하세요.
                </p>
              </CardContent>
            </Card>

            {testItems.map((item, index) => (
              <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {item.description}
                    </p>
                    <div className="bg-teal-50 dark:bg-teal-950 p-3 rounded-lg">
                      <p className="text-sm text-teal-800 dark:text-teal-200">
                        <strong>측정 방법:</strong> {item.instruction}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Label htmlFor={item.key} className="text-sm font-medium">
                        측정값 ({item.unit})
                      </Label>
                      <Input
                        id={item.key}
                        type="number"
                        min="0"
                        max="200"
                        value={flexibilityData[item.key] || ''}
                        onChange={(e) => updateValue(item.key, parseFloat(e.target.value) || 0)}
                        className="mt-1"
                        placeholder={`예: ${item.excellent.min}`}
                      />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      기준 범위: {item.excellent.min}-{item.excellent.max}{item.unit}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <div className="flex justify-end">
              <Button
                onClick={() => {
                  calculateOverallScore();
                  setCurrentStep(2);
                }}
                className="bg-teal-500 hover:bg-teal-600"
              >
                결과 보기
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Results */}
        {currentStep === 2 && (
          <div className="space-y-6">
            {/* Overall Score */}
            <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="text-center py-8">
                <div className="mb-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-lg font-bold ${getOverallAssessment().bg} ${getOverallAssessment().color} mb-4`}>
                    <Award className="w-5 h-5" />
                    {getOverallAssessment().level}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {overallScore}점
                  </div>
                  <Progress value={overallScore} className="w-full max-w-xs mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-300">
                    테니스 유연성 종합 점수
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                세부 결과 및 추천
              </h2>

              {results.map((result, index) => (
                <Card key={index} className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                          {result.joint}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          측정값: {result.score}
                        </p>
                      </div>
                      <Badge className={
                        result.status === 'excellent' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                        result.status === 'good' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                        result.status === 'fair' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                      }>
                        {result.status === 'excellent' ? '탁월' :
                         result.status === 'good' ? '좋음' :
                         result.status === 'fair' ? '보통' : '개선 필요'}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <p className="text-gray-700 dark:text-gray-300 mb-3">
                        {result.recommendation}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        추천 운동:
                      </h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {result.exercises.map((exercise, idx) => (
                          <li key={idx}>{exercise}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={resetTest}>
                <RefreshCw className="w-4 h-4 mr-2" />
                다시 테스트하기
              </Button>
              <Link href="/utility/flexibility-test">
                <Button className="bg-teal-500 hover:bg-teal-600">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  유연성 향상 팁 보기
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
