"use client"

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Target, TrendingUp, Shield, Zap, Users, BarChart3, CheckCircle, AlertTriangle, Brain, Swords } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

// 메타데이터
export const metadata: Metadata = {
  title: '상대 분석 도구 - 테니스 상대 전략 분석 | TennisFriends',
  description: '테니스 상대의 플레이 스타일을 분석하고 맞춤 전략을 제시합니다. 강점/약점 파악, 카운터 전략, 전술 조언을 통해 승률을 높이세요.',
  keywords: ['테니스 상대 분석', '플레이 스타일 분석', '테니스 전략', '상대 약점', '카운터 전략', '테니스 전술'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/utility/opponent-analyzer',
  },
  openGraph: {
    title: '상대 분석 도구 - 테니스 상대 전략 분석 | TennisFriends',
    description: '테니스 상대의 플레이 스타일을 분석하고 맞춤 전략을 제시합니다.',
    url: 'https://tennisfriends.co.kr/utility/opponent-analyzer',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '상대 분석 도구 - 테니스 상대 전략 분석 | TennisFriends',
    description: '테니스 상대의 플레이 스타일을 분석하고 맞춤 전략을 제시합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

interface OpponentProfile {
  name: string;
  playStyle: string;
  strength: number;
  weaknesses: string[];
  preferredShots: string[];
  serveType: string;
  returnStyle: string;
  movement: string;
  mental: string;
}

interface StrategyRecommendation {
  title: string;
  description: string;
  priority: '높음' | '중간' | '낮음';
  tactics: string[];
  riskLevel: '낮음' | '중간' | '높음';
}

const playStyleOptions = [
  { value: 'aggressive-baseliner', label: '공격적인 베이스라이너', icon: Swords },
  { value: 'defensive-baseliner', label: '수비적인 베이스라이너', icon: Shield },
  { value: 'all-court-player', label: '올코트 플레이어', icon: Target },
  { value: 'serve-volleyer', label: '서브&발리어', icon: Zap },
  { value: 'net-rusher', label: '네트 러셔', icon: TrendingUp },
  { value: 'counter-puncher', label: '카운터 펀처', icon: BarChart3 }
];

const shotPreferences = [
  '포핸드 드라이브', '포핸드 슬라이스', '백핸드 드라이브', '백핸드 슬라이스',
  '드롭 샷', '로빙', '발리', '스매시', '다운 더 라인', '크로스코트'
];

export default function OpponentAnalyzerPage() {
  const [opponent, setOpponent] = useState<OpponentProfile>({
    name: '',
    playStyle: '',
    strength: 3,
    weaknesses: [],
    preferredShots: [],
    serveType: '',
    returnStyle: '',
    movement: '',
    mental: ''
  });

  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [strategies, setStrategies] = useState<StrategyRecommendation[]>([]);

  const analyzeOpponent = () => {
    if (!opponent.name || !opponent.playStyle) return;

    // 상대 분석 로직
    const analysis: StrategyRecommendation[] = [];

    switch (opponent.playStyle) {
      case 'aggressive-baseliner':
        analysis.push({
          title: '베이스라인 랠리 피하기',
          description: '공격적인 베이스라이너는 강력한 타격으로 랠리를 장악하려 합니다.',
          priority: '높음',
          tactics: [
            '네트로 올라가서 발리로 공격',
            '짧은 리턴으로 상대의 리듬을 깨기',
            '슬라이스로 공의 회전을 이용해 상대 타격 방해'
          ],
          riskLevel: '중간'
        });
        break;

      case 'defensive-baseliner':
        analysis.push({
          title: '패턴 변화로 리듬 깨기',
          description: '수비적인 베이스라이너는 안정적인 랠리로 상대를 지치게 합니다.',
          priority: '높음',
          tactics: [
            '예측 불가능한 드롭 샷과 로빙 사용',
            '강약 조절로 상대의 타이밍 무너뜨리기',
            '패턴 없는 샷 선택으로 혼란 유발'
          ],
          riskLevel: '낮음'
        });
        break;

      case 'serve-volleyer':
        analysis.push({
          title: '서브 리턴 정확도 높이기',
          description: '서브&발리어는 강력한 서브로 네트를 장악하려 합니다.',
          priority: '높음',
          tactics: [
            '서브 리턴을 깊고 정확하게',
            '발리 타이밍을 늦춰 상대를 코트 뒤로 밀어내기',
            '슬라이스 리턴으로 공의 회전 활용'
          ],
          riskLevel: '낮음'
        });
        break;

      case 'net-rusher':
        analysis.push({
          title: '로빙으로 상대 물러나게 하기',
          description: '네트 러셔는 네트 플레이로 상대를 압박합니다.',
          priority: '높음',
          tactics: [
            '높은 로빙으로 상대를 베이스라인으로 밀어내기',
            '네트 근처에서 승부를 피하고 안정적 플레이 유지',
            '드롭 샷으로 상대의 위치를 역이용'
          ],
          riskLevel: '중간'
        });
        break;
    }

    // 공통 전략 추가
    analysis.push({
      title: '상대의 약점 공략',
      description: '분석된 상대의 약점을 집중적으로 공략하세요.',
      priority: '중간',
      tactics: opponent.weaknesses.map(weakness => `${weakness}쪽으로 공격 집중`),
      riskLevel: '중간'
    });

    analysis.push({
      title: '멘탈 전환 전략',
      description: '상대의 멘탈 상태를 고려한 전략적 플레이.',
      priority: '중간',
      tactics: [
        '강력한 서브로 상대의 자신감 흔들기',
        '중요한 포인트에서 변화구 사용',
        '안정적인 플레이로 상대의 조급함 유발'
      ],
      riskLevel: '낮음'
    });

    setStrategies(analysis);
    setAnalysisComplete(true);
  };

  const resetAnalysis = () => {
    setOpponent({
      name: '',
      playStyle: '',
      strength: 3,
      weaknesses: [],
      preferredShots: [],
      serveType: '',
      returnStyle: '',
      movement: '',
      mental: ''
    });
    setAnalysisComplete(false);
    setStrategies([]);
  };

  const toggleWeakness = (weakness: string) => {
    setOpponent(prev => ({
      ...prev,
      weaknesses: prev.weaknesses.includes(weakness)
        ? prev.weaknesses.filter(w => w !== weakness)
        : [...prev.weaknesses, weakness]
    }));
  };

  const toggleShot = (shot: string) => {
    setOpponent(prev => ({
      ...prev,
      preferredShots: prev.preferredShots.includes(shot)
        ? prev.preferredShots.filter(s => s !== shot)
        : [...prev.preferredShots, shot]
    }));
  };

  return (
    <div className="min-h-screen utility-page">
      {/* 헤더 */}
      <div className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              상대 분석 도구
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              테니스 상대의 플레이 스타일을 분석하고 맞춤 전략을 제시합니다.
              데이터 기반 분석으로 승률을 높이세요.
            </p>
          </div>
        </div>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="container mx-auto max-w-4xl px-4 py-12">
        {!analysisComplete ? (
          <div className="space-y-8">
            {/* 기본 정보 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  상대 정보 입력
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">상대 이름</Label>
                    <Input
                      id="name"
                      placeholder="상대의 이름을 입력하세요"
                      value={opponent.name}
                      onChange={(e) => setOpponent(prev => ({ ...prev, name: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>플레이 스타일</Label>
                    <Select value={opponent.playStyle} onValueChange={(value) => setOpponent(prev => ({ ...prev, playStyle: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="플레이 스타일을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {playStyleOptions.map(option => (
                          <SelectItem key={option.value} value={option.value}>
                            <div className="flex items-center gap-2">
                              <option.icon className="w-4 h-4" />
                              {option.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>상대 실력 수준 (1-5)</Label>
                  <div className="px-2">
                    <Slider
                      value={[opponent.strength]}
                      onValueChange={(value) => setOpponent(prev => ({ ...prev, strength: value[0] }))}
                      max={5}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>초급</span>
                      <span className="font-medium">레벨 {opponent.strength}</span>
                      <span>프로</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 상세 분석 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  상세 분석 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-base font-medium mb-2 block">약점 (중복 선택 가능)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {['포핸드', '백핸드', '서브', '발리', '이동속도', '집중력'].map(weakness => (
                          <Button
                            key={weakness}
                            variant={opponent.weaknesses.includes(weakness) ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => toggleWeakness(weakness)}
                            className={opponent.weaknesses.includes(weakness) ? 'bg-red-600 hover:bg-red-700' : ''}
                          >
                            {weakness}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium mb-2 block">선호하는 샷</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {shotPreferences.slice(0, 6).map(shot => (
                          <Button
                            key={shot}
                            variant={opponent.preferredShots.includes(shot) ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => toggleShot(shot)}
                          >
                            {shot}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="serve">서브 스타일</Label>
                      <Select value={opponent.serveType} onValueChange={(value) => setOpponent(prev => ({ ...prev, serveType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="서브 스타일을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="powerful">강력한 파워 서브</SelectItem>
                          <SelectItem value="accurate">정확한 컨트롤 서브</SelectItem>
                          <SelectItem value="varied">다양한 변화구 서브</SelectItem>
                          <SelectItem value="weak">약한 서브</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="return">리턴 스타일</Label>
                      <Select value={opponent.returnStyle} onValueChange={(value) => setOpponent(prev => ({ ...prev, returnStyle: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="리턴 스타일을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aggressive">공격적인 리턴</SelectItem>
                          <SelectItem value="defensive">수비적인 리턴</SelectItem>
                          <SelectItem value="safe">안전한 리턴</SelectItem>
                          <SelectItem value="weak">약한 리턴</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="movement">이동성</Label>
                      <Select value={opponent.movement} onValueChange={(value) => setOpponent(prev => ({ ...prev, movement: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="이동성을 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fast">빠른 이동</SelectItem>
                          <SelectItem value="average">평균 이동</SelectItem>
                          <SelectItem value="slow">느린 이동</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mental">멘탈 상태</Label>
                      <Select value={opponent.mental} onValueChange={(value) => setOpponent(prev => ({ ...prev, mental: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="멘탈 상태를 선택하세요" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strong">강한 멘탈</SelectItem>
                          <SelectItem value="average">평균 멘탈</SelectItem>
                          <SelectItem value="weak">약한 멘탈</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button
                onClick={analyzeOpponent}
                disabled={!opponent.name || !opponent.playStyle}
                size="lg"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700"
              >
                <Target className="w-5 h-5 mr-2" />
                상대 분석하기
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* 분석 결과 헤더 */}
            <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{opponent.name} 분석 완료</h2>
                    <p className="text-gray-600">맞춤 전략을 확인하세요</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{opponent.strength}</div>
                    <div className="text-sm text-gray-600">실력 레벨</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{playStyleOptions.find(s => s.value === opponent.playStyle)?.label}</div>
                    <div className="text-sm text-gray-600">플레이 스타일</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{strategies.length}</div>
                    <div className="text-sm text-gray-600">추천 전략</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 전략 추천 */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">추천 전략</h3>

              {strategies.map((strategy, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{strategy.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={strategy.priority === '높음' ? 'destructive' : strategy.priority === '중간' ? 'default' : 'secondary'}
                        >
                          {strategy.priority} 우선순위
                        </Badge>
                        <Badge variant="outline">
                          리스크: {strategy.riskLevel}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{strategy.description}</p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">전술:</h4>
                      <ul className="space-y-1">
                        {strategy.tactics.map((tactic, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                            {tactic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 추가 팁 */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">주의사항</h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• 분석 결과는 참고용이며, 실제 경기 상황에 따라 전략을 조정하세요.</li>
                      <li>• 상대의 컨디션과 코트 상태도 전략 수립에 영향을 미칩니다.</li>
                      <li>• 자신의 강점을 살리면서 상대의 약점을 공략하는 것이 중요합니다.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button onClick={resetAnalysis} variant="outline" size="lg">
                새로운 분석
              </Button>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                전략 저장하기
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
