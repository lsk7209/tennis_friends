'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Progress } from '@/components/ui/progress';
import { Target, Zap, Shield, TrendingUp, CheckCircle, XCircle } from 'lucide-react';

interface StringPattern {
  pattern: string;
  mainStrings: number;
  crossStrings: number;
  density: 'loose' | 'medium' | 'dense';
  characteristics: string[];
  bestFor: string[];
  pros: string[];
  cons: string[];
  recommendedTension: string;
  score: number;
}

const stringPatterns: StringPattern[] = [
  {
    pattern: '16x19',
    mainStrings: 16,
    crossStrings: 19,
    density: 'medium',
    characteristics: ['균형 잡힌 퍼포먼스', '범용성 높음', '안정적인 컨트롤'],
    bestFor: ['중급자', '모든 플레이 스타일', '범용 라켓'],
    pros: ['파워와 컨트롤의 균형', '다양한 샷에 적합', '내구성 좋음'],
    cons: ['특별한 장점이 적음', '전문적인 요구사항에 부족할 수 있음'],
    recommendedTension: '52-58 lbs',
    score: 85
  },
  {
    pattern: '18x20',
    mainStrings: 18,
    crossStrings: 20,
    density: 'dense',
    characteristics: ['높은 컨트롤', '정교한 타격', '스핀 최적화'],
    bestFor: ['상급자', '베이스라인 플레이어', '컨트롤 지향'],
    pros: ['탁월한 컨트롤', '강력한 스핀', '정확한 타격'],
    cons: ['파워 부족', '유연성 떨어짐', '가격 높음'],
    recommendedTension: '55-62 lbs',
    score: 92
  },
  {
    pattern: '16x15',
    mainStrings: 16,
    crossStrings: 15,
    density: 'loose',
    characteristics: ['강력한 파워', '넓은 스위트 스팟', '편안한 타격감'],
    bestFor: ['초보자', '파워 플레이어', '편안함 우선'],
    pros: ['강력한 파워', '넓은 스위트 스팟', '편안한 타격감'],
    cons: ['컨트롤 부족', '정확도 떨어짐', '내구성 낮음'],
    recommendedTension: '48-54 lbs',
    score: 78
  },
  {
    pattern: '18x16',
    mainStrings: 18,
    crossStrings: 16,
    density: 'loose',
    characteristics: ['균형 잡힌 파워', '넓은 타격면', '다양한 용도'],
    bestFor: ['중급자', '범용 플레이어', '가격 고려'],
    pros: ['균형 잡힌 퍼포먼스', '넓은 타격면', '가격 적당'],
    cons: ['특별한 강점 없음', '상급자에게 부족할 수 있음'],
    recommendedTension: '50-56 lbs',
    score: 82
  },
  {
    pattern: '16x18',
    mainStrings: 16,
    crossStrings: 18,
    density: 'medium',
    characteristics: ['전통적인 느낌', '클래식 컨트롤', '역사적 디자인'],
    bestFor: ['클래식 선호', '전통적 플레이', '특별한 취향'],
    pros: ['전통적 느낌', '균형 잡힘', '특별한 경험'],
    cons: ['현대적 요구에 맞지 않음', '선택권 제한적'],
    recommendedTension: '50-56 lbs',
    score: 75
  }
];

export default function StringPatternAnalyzerPage() {
  const [selectedPattern, setSelectedPattern] = useState<string>('');
  const [skillLevel, setSkillLevel] = useState<string>('intermediate');
  const [playStyle, setPlayStyle] = useState<string>('balanced');
  const [budget, setBudget] = useState<string>('medium');

  const skillLevels = [
    { value: 'beginner', label: '초보자', description: '기초적인 타격 위주' },
    { value: 'intermediate', label: '중급자', description: '균형 잡힌 플레이' },
    { value: 'advanced', label: '상급자', description: '정교한 기술 요구' }
  ];

  const playStyles = [
    { value: 'power', label: '파워 지향', description: '강력한 타격 우선' },
    { value: 'control', label: '컨트롤 지향', description: '정확한 타격 우선' },
    { value: 'balanced', label: '균형 잡힘', description: '파워와 컨트롤 균형' },
    { value: 'spin', label: '스핀 지향', description: '회전력 강한 타격' }
  ];

  const budgetOptions = [
    { value: 'low', label: '저예산', description: '기본 기능 중심' },
    { value: 'medium', label: '중간 예산', description: '균형 잡힌 기능' },
    { value: 'high', label: '고예산', description: '최고급 기능' }
  ];

  const recommendations = useMemo(() => {
    if (!selectedPattern) return [];

    const selectedPatternData = stringPatterns.find(p => p.pattern === selectedPattern);
    if (!selectedPatternData) return [];

    let score = selectedPatternData.score;

    // 실력 레벨에 따른 조정
    if (skillLevel === 'beginner' && selectedPatternData.density === 'dense') {
      score -= 10; // 초보자에게는 조밀한 패턴이 어려움
    }
    if (skillLevel === 'advanced' && selectedPatternData.density === 'loose') {
      score -= 15; // 상급자에게는 느슨한 패턴이 부족함
    }

    // 플레이 스타일에 따른 조정
    if (playStyle === 'power' && selectedPatternData.density === 'loose') {
      score += 10; // 파워 플레이어에게 느슨한 패턴 유리
    }
    if (playStyle === 'control' && selectedPatternData.density === 'dense') {
      score += 10; // 컨트롤 플레이어에게 조밀한 패턴 유리
    }
    if (playStyle === 'spin' && selectedPatternData.density === 'dense') {
      score += 5; // 스핀 플레이어에게 조밀한 패턴 유리
    }

    // 예산에 따른 조정
    if (budget === 'low' && selectedPatternData.pattern === '18x20') {
      score -= 20; // 고가 패턴은 저예산에 불리
    }
    if (budget === 'high' && selectedPatternData.pattern === '16x15') {
      score -= 10; // 저가 패턴은 고예산에 부족
    }

    return [{
      ...selectedPatternData,
      adjustedScore: Math.max(0, Math.min(100, score))
    }];
  }, [selectedPattern, skillLevel, playStyle, budget]);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-600" />;
    if (score >= 80) return <TrendingUp className="w-5 h-5 text-blue-600" />;
    return <XCircle className="w-5 h-5 text-red-600" />;
  };

  const getDensityColor = (density: string) => {
    switch (density) {
      case 'loose': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-blue-100 text-blue-800';
      case 'dense': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">스트링 패턴 분석기</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          라켓의 스트링 패턴을 분석하고 플레이 스타일에 맞는 최적의 선택을 도와드립니다.
          16x19, 18x20 등 다양한 패턴의 특징을 비교해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="space-y-6">
          <Card className="bg-content-dark border-white/10">
            <CardHeader>
              <CardTitle className="text-text-light">패턴 선택</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label className="text-text-light font-medium mb-2 block">스트링 패턴</Label>
                  <Select value={selectedPattern} onValueChange={setSelectedPattern}>
                    <SelectTrigger className="bg-background-dark border-white/10">
                      <SelectValue placeholder="패턴을 선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {stringPatterns.map(pattern => (
                        <SelectItem key={pattern.pattern} value={pattern.pattern}>
                          {pattern.pattern} ({pattern.mainStrings}×{pattern.crossStrings})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-text-light font-medium mb-3 block">실력 레벨</Label>
                  <RadioGroup value={skillLevel} onValueChange={setSkillLevel}>
                    <div className="space-y-2">
                      {skillLevels.map(level => (
                        <div key={level.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={level.value} id={`skill-${level.value}`} />
                          <div>
                            <Label htmlFor={`skill-${level.value}`} className="text-text-muted cursor-pointer font-medium">
                              {level.label}
                            </Label>
                            <p className="text-xs text-text-muted">{level.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-text-light font-medium mb-3 block">플레이 스타일</Label>
                  <RadioGroup value={playStyle} onValueChange={setPlayStyle}>
                    <div className="space-y-2">
                      {playStyles.map(style => (
                        <div key={style.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={style.value} id={`style-${style.value}`} />
                          <div>
                            <Label htmlFor={`style-${style.value}`} className="text-text-muted cursor-pointer font-medium">
                              {style.label}
                            </Label>
                            <p className="text-xs text-text-muted">{style.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-text-light font-medium mb-3 block">예산 범위</Label>
                  <RadioGroup value={budget} onValueChange={setBudget}>
                    <div className="space-y-2">
                      {budgetOptions.map(option => (
                        <div key={option.value} className="flex items-center space-x-2">
                          <RadioGroupItem value={option.value} id={`budget-${option.value}`} />
                          <div>
                            <Label htmlFor={`budget-${option.value}`} className="text-text-muted cursor-pointer font-medium">
                              {option.label}
                            </Label>
                            <p className="text-xs text-text-muted">{option.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2">
          {recommendations.length > 0 ? (
            <div className="space-y-6">
              {recommendations.map((pattern) => (
                <Card key={pattern.pattern} className="bg-content-dark border-white/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-text-light text-2xl">
                          {pattern.pattern} 패턴 분석
                        </CardTitle>
                        <p className="text-text-muted mt-1">
                          메인 스트링 {pattern.mainStrings}개 × 크로스 스트링 {pattern.crossStrings}개
                        </p>
                      </div>
                      <Badge className={getDensityColor(pattern.density)}>
                        {pattern.density === 'loose' ? '느슨함' :
                         pattern.density === 'medium' ? '중간' : '조밀함'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Score */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        {getScoreIcon(pattern.adjustedScore)}
                        <span className={`text-2xl font-bold ${getScoreColor(pattern.adjustedScore)}`}>
                          {pattern.adjustedScore}점
                        </span>
                      </div>
                      <div className="flex-1">
                        <Progress value={pattern.adjustedScore} className="h-3" />
                      </div>
                      <span className="text-sm text-text-muted">
                        {pattern.adjustedScore >= 90 ? '최적' :
                         pattern.adjustedScore >= 80 ? '추천' :
                         pattern.adjustedScore >= 70 ? '보통' : '부적합'}
                      </span>
                    </div>

                    {/* Characteristics */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-light mb-3">패턴 특징</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {pattern.characteristics.map((char, index) => (
                          <div key={index} className="flex items-center gap-2 p-3 bg-background-dark rounded-lg">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm text-text-muted">{char}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Best For */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-light mb-3">추천 대상</h4>
                      <div className="flex flex-wrap gap-2">
                        {pattern.bestFor.map((target, index) => (
                          <Badge key={index} className="bg-primary/20 text-primary">
                            {target}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" />
                          장점
                        </h4>
                        <ul className="space-y-2">
                          {pattern.pros.map((pro, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-text-muted">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                          <XCircle className="w-5 h-5" />
                          단점
                        </h4>
                        <ul className="space-y-2">
                          {pattern.cons.map((con, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-text-muted">
                              <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="bg-background-dark p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-text-light mb-3">추천 사항</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-text-muted">권장 장력:</span>
                          <span className="text-primary font-medium ml-2">{pattern.recommendedTension}</span>
                        </div>
                        <div>
                          <span className="text-text-muted">적합도:</span>
                          <span className={`font-medium ml-2 ${getScoreColor(pattern.adjustedScore)}`}>
                            {pattern.adjustedScore >= 90 ? '매우 적합' :
                             pattern.adjustedScore >= 80 ? '적합' :
                             pattern.adjustedScore >= 70 ? '보통' : '부적합'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button className="flex-1 bg-primary text-background-dark hover:bg-primary/90">
                        <Target className="w-4 h-4 mr-2" />
                        유사 라켓 찾기
                      </Button>
                      <Button variant="outline" className="flex-1 border-white/10 hover:border-primary/50">
                        <Zap className="w-4 h-4 mr-2" />
                        스트링 추천
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-content-dark border-white/10">
              <CardContent className="p-12 text-center">
                <Target className="w-16 h-16 text-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-text-light mb-2">패턴을 선택하세요</h3>
                <p className="text-text-muted">
                  분석할 스트링 패턴을 선택하시면 개인화된 추천을 제공해드립니다.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Pattern Comparison */}
      <Card className="mt-12 bg-content-dark border-white/10">
        <CardHeader>
          <CardTitle className="text-text-light">스트링 패턴 비교표</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-text-light font-medium">패턴</th>
                  <th className="text-left py-3 px-4 text-text-light font-medium">밀도</th>
                  <th className="text-left py-3 px-4 text-text-light font-medium">추천 대상</th>
                  <th className="text-left py-3 px-4 text-text-light font-medium">장력 범위</th>
                  <th className="text-left py-3 px-4 text-text-light font-medium">평점</th>
                </tr>
              </thead>
              <tbody>
                {stringPatterns.map((pattern) => (
                  <tr key={pattern.pattern} className="border-b border-white/5 hover:bg-background-dark/50">
                    <td className="py-3 px-4 text-text-light font-medium">{pattern.pattern}</td>
                    <td className="py-3 px-4">
                      <Badge className={getDensityColor(pattern.density)}>
                        {pattern.density === 'loose' ? '느슨함' :
                         pattern.density === 'medium' ? '중간' : '조밀함'}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-text-muted">{pattern.bestFor[0]}</td>
                    <td className="py-3 px-4 text-text-muted">{pattern.recommendedTension}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${getScoreColor(pattern.score)}`}>
                          {pattern.score}점
                        </span>
                        {getScoreIcon(pattern.score)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

