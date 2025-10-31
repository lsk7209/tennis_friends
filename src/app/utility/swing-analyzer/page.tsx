"use client";

import React, { useState } from 'react';
import { TrendingUp, Video, Upload, Play, BarChart3, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SwingAnalyzerPage() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);

  const handleStartAnalysis = () => {
    setIsAnalyzing(true);
    // 시뮬레이션: 3초 후 분석 완료
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisResult({
        swingSpeed: 85,
        sweetSpotAccuracy: 78,
        consistency: 82,
        recommendations: [
          '스윙 궤적을 더 일직선으로 유지하세요',
          '타격 시점에서 팔꿈치를 더 고정시키세요',
          '팔로우 스루를 더 길게 유지하세요'
        ]
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-500 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              스윙 분석 도구
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              라켓 스윙 궤적을 분석하여 최적의 타격 포인트와 스윙 경로를 찾아드립니다.
              비디오 분석으로 자세 교정을 지원합니다.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {/* 분석 섹션 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Video className="w-6 h-6 text-purple-500" />
            스윙 분석
          </h2>

          {!analysisResult ? (
            <div className="text-center">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 mb-6">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">스윙 영상을 업로드하세요</p>
                <p className="text-sm text-gray-500">MP4, MOV, AVI 파일 지원 (최대 100MB)</p>
              </div>

              <div className="flex gap-4 justify-center mb-6">
                <Button
                  onClick={handleStartAnalysis}
                  disabled={isAnalyzing}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      분석 중...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      분석 시작
                    </>
                  )}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* 분석 결과 */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-purple-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">
                    {analysisResult.swingSpeed}km/h
                  </div>
                  <div className="text-sm text-gray-600">스윙 속도</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {analysisResult.sweetSpotAccuracy}%
                  </div>
                  <div className="text-sm text-gray-600">스위트 스팟 정확도</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {analysisResult.consistency}%
                  </div>
                  <div className="text-sm text-gray-600">일관성 점수</div>
                </div>
              </div>

              {/* 추천 사항 */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  개선 권장사항
                </h3>
                <ul className="space-y-3">
                  {analysisResult.recommendations.map((rec: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-purple-600">{index + 1}</span>
                      </div>
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 기능 설명 */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart3 className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-900">세부 분석</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• 스윙 궤적 분석</li>
              <li>• 타격 포인트 측정</li>
              <li>• 자세 교정</li>
              <li>• 비교 분석</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-purple-500" />
              <h3 className="text-xl font-semibold text-gray-900">개선 추적</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• 진척도 모니터링</li>
              <li>• 비교 분석</li>
              <li>• 맞춤 코칭</li>
              <li>• 성과 리포트</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
