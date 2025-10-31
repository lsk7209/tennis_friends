"use client";

import React, { useState } from 'react';
import { Zap, Calculator, BarChart3, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ServeVelocityCalculatorPage() {
  const [serveData, setServeData] = useState({
    ballWeight: 57, // 그램
    airDensity: 1.225, // kg/m³ (표준 대기압)
    dragCoefficient: 0.47, // 테니스공 항력 계수
    ballRadius: 0.0335, // 미터
    launchAngle: 5, // 도
    launchSpeed: 40, // m/s
  });

  const [calculatedResult, setCalculatedResult] = useState(null);

  const calculateTrajectory = () => {
    // 간단한 물리학 계산 시뮬레이션
    const g = 9.81; // 중력 가속도
    const dt = 0.01; // 시간 간격
    let t = 0;
    let x = 0;
    let y = 2.5; // 네트 높이
    let vx = serveData.launchSpeed * Math.cos(serveData.launchAngle * Math.PI / 180);
    let vy = serveData.launchSpeed * Math.sin(serveData.launchAngle * Math.PI / 180);

    let maxHeight = y;
    let landingTime = 0;

    // 공 궤적 계산 (단순화된 버전)
    while (y > 0 && t < 5) {
      t += dt;
      const dragForce = 0.5 * serveData.dragCoefficient * serveData.airDensity * Math.PI * serveData.ballRadius * serveData.ballRadius * (vx * vx + vy * vy);
      const dragAccelX = -dragForce * vx / (serveData.ballWeight / 1000) / Math.sqrt(vx * vx + vy * vy);
      const dragAccelY = -dragForce * vy / (serveData.ballWeight / 1000) / Math.sqrt(vx * vx + vy * vy) - g;

      vx += dragAccelX * dt;
      vy += dragAccelY * dt;
      x += vx * dt;
      y += vy * dt;

      if (y > maxHeight) maxHeight = y;

      if (y <= 0) {
        landingTime = t;
        break;
      }
    }

    setCalculatedResult({
      distance: x,
      maxHeight: maxHeight,
      landingTime: landingTime,
      finalSpeed: Math.sqrt(vx * vx + vy * vy),
      spinEffect: '톱스핀',
      recommendations: [
        '발사 각도를 3-7도 사이로 유지하세요',
        '공의 회전을 더 많이 주어 안정성을 높이세요',
        '팔로우 스루를 충분히 하여 속도를 유지하세요'
      ]
    });
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-orange-50 via-red-50 to-rose-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              서브 속도 계산기
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              서브 속도를 측정하고 개선 방법을 제시합니다. 공의 궤적, 회전, 속도를 분석하여 서브 기술을 향상시키세요.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* 입력 섹션 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Calculator className="w-6 h-6 text-orange-500" />
              서브 데이터 입력
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  발사 속도 (m/s)
                </label>
                <input
                  type="range"
                  min="20"
                  max="60"
                  value={serveData.launchSpeed}
                  onChange={(e) => setServeData({...serveData, launchSpeed: Number(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 font-semibold text-orange-600">
                  {serveData.launchSpeed} m/s
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  발사 각도 (°)
                </label>
                <input
                  type="range"
                  min="0"
                  max="15"
                  value={serveData.launchAngle}
                  onChange={(e) => setServeData({...serveData, launchAngle: Number(e.target.value)})}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-center mt-2 font-semibold text-orange-600">
                  {serveData.launchAngle}°
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  공 무게 (g)
                </label>
                <select
                  value={serveData.ballWeight}
                  onChange={(e) => setServeData({...serveData, ballWeight: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="56.7">표준 테니스공 (56.7g)</option>
                  <option value="57">일반 테니스공 (57g)</option>
                  <option value="58">무거운 테니스공 (58g)</option>
                </select>
              </div>

              <Button
                onClick={calculateTrajectory}
                className="w-full bg-orange-600 hover:bg-orange-700"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                궤적 계산하기
              </Button>
            </div>
          </div>

          {/* 결과 섹션 */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-orange-500" />
              분석 결과
            </h2>

            {calculatedResult ? (
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {calculatedResult.distance.toFixed(1)}m
                    </div>
                    <div className="text-sm text-gray-600">비행 거리</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-red-600 mb-1">
                      {calculatedResult.maxHeight.toFixed(1)}m
                    </div>
                    <div className="text-sm text-gray-600">최고 높이</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {calculatedResult.finalSpeed.toFixed(1)}m/s
                    </div>
                    <div className="text-sm text-gray-600">착지 속도</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {calculatedResult.spinEffect}
                    </div>
                    <div className="text-sm text-gray-600">회전 효과</div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-500" />
                    개선 권장사항
                  </h3>
                  <ul className="space-y-3">
                    {calculatedResult.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-xs font-semibold text-orange-600">{index + 1}</span>
                        </div>
                        <span className="text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-12">
                <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">좌측에서 서브 데이터를 입력하고 계산해보세요</p>
              </div>
            )}
          </div>
        </div>

        {/* 추가 정보 */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">서브 속도 향상 팁</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">물리학적 요소</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 공의 초기 속도 증가</li>
                <li>• 최적의 발사 각도 유지</li>
                <li>• 공 회전으로 안정성 확보</li>
                <li>• 공기 저항 최소화</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">기술적 요소</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• 팔꿈치 높이 유지</li>
                <li>• 몸통 회전 활용</li>
                <li>• 타이밍 개선</li>
                <li>• 팔로우 스루 연장</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
