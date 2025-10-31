"use client";

import React, { useState } from 'react';
import { Target, TrendingUp, BarChart3, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ForehandStabilityTestPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [results, setResults] = useState({
    consistency: 0,
    accuracy: 0,
    power: 0,
    control: 0
  });
  const [isTestCompleted, setIsTestCompleted] = useState(false);

  const testSteps = [
    {
      title: '준비 단계',
      description: '테스트를 시작하기 전에 라켓을 준비하세요.',
      instruction: '라켓을 잡고 기본 자세를 취하세요.',
      action: '준비 완료'
    },
    {
      title: '일관성 테스트',
      description: '5번의 포핸드 타격으로 일관성을 측정합니다.',
      instruction: '코트 중앙에서 같은 지점으로 5번 타격하세요.',
      action: '테스트 시작',
      metric: 'consistency'
    },
    {
      title: '정확도 테스트',
      description: '타겟 지점을 향한 정확도를 측정합니다.',
      instruction: '코트 반대편 코너를 향해 타격하세요.',
      action: '테스트 시작',
      metric: 'accuracy'
    },
    {
      title: '파워 테스트',
      description: '타격의 강도와 속도를 측정합니다.',
      instruction: '최대한 강하게 타격하면서도 방향을 유지하세요.',
      action: '테스트 시작',
      metric: 'power'
    },
    {
      title: '컨트롤 테스트',
      description: '정교한 컨트롤 능력을 측정합니다.',
      instruction: '약한 타격으로 정확한 방향 제어를 보여주세요.',
      action: '테스트 시작',
      metric: 'control'
    }
  ];

  const handleTestAction = () => {
    if (currentStep === 0) {
      setCurrentStep(1);
      return;
    }

    // 시뮬레이션: 실제 테스트 대신 랜덤 결과 생성
    const step = testSteps[currentStep];
    if (step.metric) {
      const score = Math.floor(Math.random() * 40) + 60; // 60-100점
      setResults(prev => ({
        ...prev,
        [step.metric]: score
      }));
    }

    if (currentStep < testSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsTestCompleted(true);
    }
  };

  const getOverallScore = () => {
    const total = Object.values(results).reduce((sum, score) => sum + score, 0);
    return Math.round(total / Object.keys(results).length);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              포핸드 안정성 테스트
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              포핸드 타격의 일관성과 정확도를 측정합니다. 다양한 상황에서의 타격 성공률을 분석하여 약점을 찾아드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {!isTestCompleted ? (
            <>
              {/* 진행 상태 표시 */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">테스트 진행</h2>
                  <span className="text-sm text-gray-500">
                    {currentStep + 1} / {testSteps.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / testSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* 현재 단계 */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {testSteps[currentStep].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {testSteps[currentStep].description}
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 font-medium">
                    {testSteps[currentStep].instruction}
                  </p>
                </div>
                <Button
                  onClick={handleTestAction}
                  className="bg-green-600 hover:bg-green-700"
                >
                  {testSteps[currentStep].action}
                </Button>
              </div>

              {/* 현재까지 결과 미리보기 */}
              {Object.values(results).some(score => score > 0) && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">현재까지 결과</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(results).map(([key, score]) => (
                      score > 0 && (
                        <div key={key} className="text-center">
                          <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                            {score}점
                          </div>
                          <div className="text-sm text-gray-600 capitalize">
                            {key === 'consistency' ? '일관성' :
                             key === 'accuracy' ? '정확도' :
                             key === 'power' ? '파워' : '컨트롤'}
                          </div>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <>
              {/* 테스트 완료 결과 */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">테스트 완료!</h2>
                <p className="text-gray-600 mb-6">포핸드 안정성 분석 결과입니다.</p>
              </div>

              {/* 종합 점수 */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    {getOverallScore()}점
                  </div>
                  <div className="text-lg text-gray-700">포핸드 안정성 총점</div>
                </div>
              </div>

              {/* 세부 점수 */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {getScoreIcon(results.consistency)}
                    <h3 className="text-lg font-semibold text-gray-900">일관성</h3>
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${getScoreColor(results.consistency)}`}>
                    {results.consistency}점
                  </div>
                  <p className="text-sm text-gray-600">
                    동일한 타격의 반복성입니다. 높은 점수는 꾸준한 퍼포먼스를 의미합니다.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {getScoreIcon(results.accuracy)}
                    <h3 className="text-lg font-semibold text-gray-900">정확도</h3>
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${getScoreColor(results.accuracy)}`}>
                    {results.accuracy}점
                  </div>
                  <p className="text-sm text-gray-600">
                    목표 지점에 대한 타격 정확성입니다. 방향 제어 능력을 보여줍니다.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {getScoreIcon(results.power)}
                    <h3 className="text-lg font-semibold text-gray-900">파워</h3>
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${getScoreColor(results.power)}`}>
                    {results.power}점
                  </div>
                  <p className="text-sm text-gray-600">
                    타격의 강도와 속도입니다. 공격적인 플레이의 핵심 요소입니다.
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {getScoreIcon(results.control)}
                    <h3 className="text-lg font-semibold text-gray-900">컨트롤</h3>
                  </div>
                  <div className={`text-2xl font-bold mb-2 ${getScoreColor(results.control)}`}>
                    {results.control}점
                  </div>
                  <p className="text-sm text-gray-600">
                    섬세한 타격 컨트롤 능력입니다. 다양한 상황에서의 적응력을 보여줍니다.
                  </p>
                </div>
              </div>

              {/* 개선 권장사항 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  개선 권장사항
                </h3>
                <ul className="space-y-3">
                  {results.consistency < 80 && (
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-green-600">1</span>
                      </div>
                      <span className="text-gray-700">일관성 향상을 위해 같은 자세로 반복 타격 연습을 해보세요.</span>
                    </li>
                  )}
                  {results.accuracy < 80 && (
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-green-600">2</span>
                      </div>
                      <span className="text-gray-700">정확도 향상을 위해 타겟 연습을 집중적으로 해보세요.</span>
                    </li>
                  )}
                  {results.power < 80 && (
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-green-600">3</span>
                      </div>
                      <span className="text-gray-700">파워 향상을 위해 코어 근력 운동을 병행해보세요.</span>
                    </li>
                  )}
                  {results.control < 80 && (
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-green-600">4</span>
                      </div>
                      <span className="text-gray-700">컨트롤 향상을 위해 다양한 스핀 연습을 해보세요.</span>
                    </li>
                  )}
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-green-600">💡</span>
                    </div>
                    <span className="text-gray-700">정기적인 테스트로 개선 정도를 추적해보세요.</span>
                  </li>
                </ul>
              </div>

              {/* 재테스트 버튼 */}
              <div className="text-center mt-8">
                <Button
                  onClick={() => {
                    setCurrentStep(0);
                    setResults({ consistency: 0, accuracy: 0, power: 0, control: 0 });
                    setIsTestCompleted(false);
                  }}
                  variant="outline"
                  className="border-green-500 text-green-600 hover:bg-green-50"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  다시 테스트하기
                </Button>
              </div>
            </>
          )}
        </div>

        {/* 추가 정보 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">포핸드 안정성 테스트 이해하기</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">평가 요소</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>일관성:</strong> 동일한 타격의 반복성</li>
                <li>• <strong>정확도:</strong> 목표 지점에 대한 타격 정확성</li>
                <li>• <strong>파워:</strong> 타격의 강도와 속도</li>
                <li>• <strong>컨트롤:</strong> 섬세한 타격 컨트롤 능력</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">점수 해석</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>90-100점:</strong> 우수한 수준</li>
                <li>• <strong>70-89점:</strong> 보통 수준 (개선 필요)</li>
                <li>• <strong>60-69점:</strong> 개선이 필요한 수준</li>
                <li>• <strong>0-59점:</strong> 전문적인 코칭 권장</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
