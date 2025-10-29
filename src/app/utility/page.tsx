'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BarChart3, 
  Settings, 
  Shield, 
  Trophy, 
  Calculator,
  Target,
  TrendingUp,
  Zap,
  Brain,
  Sparkles
} from 'lucide-react';

export default function UtilityPage() {
  const utilities = [
    {
      id: 'play-style-test',
      title: '테니스 플레이 스타일 진단',
      description: '7가지 플레이 스타일 중 당신의 고유한 테니스 성향을 발견하고 맞춤형 조언을 받으세요.',
      icon: Sparkles,
      href: '/utility/play-style-test',
      status: '완료',
      features: ['7가지 스타일', '맞춤형 조언', '프로 선수 비교', '훈련 루틴 추천'],
      color: 'bg-purple-100 text-purple-800',
      iconColor: 'text-purple-600',
      category: '성향 분석'
    },
    {
      id: 'ntrp-test',
      title: 'NTRP 실력 테스트',
      description: '15개 질문으로 정확한 테니스 실력을 측정하고 개선 방향을 제시받으세요.',
      icon: BarChart3,
      href: '/utility/ntrp-test',
      status: '완료',
      features: ['15개 질문', '정확한 분석', '개선 방향 제시', '통계 대시보드'],
      color: 'bg-blue-100 text-blue-800',
      iconColor: 'text-blue-600',
      category: '실력 측정'
    },
    {
      id: 'string-tension',
      title: '스트링 텐션 계산기',
      description: '라켓, 스트링, 플레이 스타일에 따라 최적의 텐션을 계산해드립니다.',
      icon: Settings,
      href: '/utility/string-tension',
      status: '완료',
      features: ['맞춤형 계산', '장비별 조정', '전문가 추천', '결과 저장'],
      color: 'bg-green-100 text-green-800',
      iconColor: 'text-green-600',
      category: '장비 설정'
    },
    {
      id: 'injury-risk',
      title: '부상 위험 예측',
      description: '데이터 기반 분석으로 부상 위험도를 체크하고 안전한 플레이를 위한 조언을 받으세요.',
      icon: Shield,
      href: '/utility/injury-risk',
      status: '완료',
      features: ['위험도 평가', '예방 가이드', '안전한 플레이', '개인별 맞춤'],
      color: 'bg-red-100 text-red-800',
      iconColor: 'text-red-600',
      category: '건강 관리'
    },
    {
      id: 'equipment-recommendation',
      title: '장비 추천 시스템',
      description: '플레이 스타일과 실력에 맞는 최적의 라켓과 스트링을 추천해드립니다.',
      icon: Target,
      href: '/utility/equipment-recommendation',
      status: '완료',
      features: ['맞춤 추천', '브랜드별 비교', '가격대별 옵션', '리뷰 연동'],
      color: 'bg-purple-100 text-purple-800',
      iconColor: 'text-purple-600',
      category: '장비 추천'
    },
    {
      id: 'match-analyzer',
      title: '경기 분석 도구',
      description: '경기 데이터를 분석하여 전술적 개선점을 찾아보세요. 서브, 리턴, 네트 플레이 등 세부 통계를 분석하여 경기력을 객관적으로 평가합니다.',
      icon: TrendingUp,
      href: '/utility/match-analyzer',
      status: '완료',
      features: ['경기 분석', '전술 개선', '통계 시각화', '성과 추적'],
      color: 'bg-blue-100 text-blue-800',
      iconColor: 'text-blue-600',
      category: '경기 분석'
    },
    {
      id: 'training-planner',
      title: '훈련 계획 수립',
      description: '개인 실력과 목표에 맞는 체계적인 훈련 계획을 세워보세요. 주간별 상세 계획과 진도 체크로 체계적이고 지속 가능한 실력 향상을 경험하세요.',
      icon: Calculator,
      href: '/utility/training-planner',
      status: '완료',
      features: ['개인별 계획', '목표 설정', '진도 추적', '조정 가이드'],
      color: 'bg-indigo-100 text-indigo-800',
      iconColor: 'text-indigo-600',
      category: '훈련 계획'
    },
    {
      id: 'nutrition-guide',
      title: '테니스 영양 가이드',
      description: '경기 전후와 훈련에 최적화된 영양 섭취 가이드를 제공합니다.',
      icon: Zap,
      href: '/utility/nutrition-guide',
      status: '개발 예정',
      features: ['영양 계획', '수분 보충', '에너지 관리', '회복 가이드'],
      color: 'bg-yellow-100 text-yellow-800',
      iconColor: 'text-yellow-600',
      category: '영양 관리'
    },
    {
      id: 'mental-training',
      title: '멘탈 트레이닝',
      description: '경기 중 집중력과 멘탈 강화를 위한 심리적 훈련 프로그램입니다.',
      icon: Brain,
      href: '/utility/mental-training',
      status: '개발 예정',
      features: ['집중력 향상', '스트레스 관리', '자신감 증진', '멘탈 강화'],
      color: 'bg-pink-100 text-pink-800',
      iconColor: 'text-pink-600',
      category: '멘탈 관리'
    },
  ];

  const categories = [
    { name: '전체', count: utilities.length },
    { name: '성향 분석', count: utilities.filter(u => u.category === '성향 분석').length },
    { name: '실력 측정', count: utilities.filter(u => u.category === '실력 측정').length },
    { name: '장비 설정', count: utilities.filter(u => u.category === '장비 설정').length },
    { name: '건강 관리', count: utilities.filter(u => u.category === '건강 관리').length },
    { name: '장비 추천', count: utilities.filter(u => u.category === '장비 추천').length },
    { name: '경기 분석', count: utilities.filter(u => u.category === '경기 분석').length },
    { name: '훈련 계획', count: utilities.filter(u => u.category === '훈련 계획').length },
    { name: '영양 관리', count: utilities.filter(u => u.category === '영양 관리').length },
    { name: '멘탈 관리', count: utilities.filter(u => u.category === '멘탈 관리').length },
  ];

  const completedUtilities = utilities.filter(u => u.status === '완료');
  const plannedUtilities = utilities.filter(u => u.status === '개발 예정');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-7xl container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6 text-sm font-semibold">
              🛠️ 테니스 유틸리티
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              테니스 실력 향상을 위한{' '}
              <span className="text-blue-600">스마트 도구</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              과학적 분석과 데이터 기반 인사이트로 당신의 테니스 여정을 가속화하세요.<br />
              전문가가 검증한 도구들로 더 정확하고 체계적인 훈련을 시작해보세요.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm mb-12">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{completedUtilities.length}개 완료</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>{plannedUtilities.length}개 개발 예정</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>100% 무료 서비스</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">카테고리별 탐색</h2>
            <p className="text-gray-600">원하는 분야의 도구를 빠르게 찾아보세요</p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm bg-white border-gray-300 hover:border-blue-500 transition-colors cursor-pointer"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Utilities */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">완료된</span> 유틸리티
            </h2>
            <p className="text-gray-600 text-lg">
              지금 바로 사용할 수 있는 검증된 도구들입니다
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedUtilities.map((utility, index) => {
              const IconComponent = utility.icon;
              return (
                <Link key={utility.id} href={utility.href}>
                  <Card className="h-full bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg group cursor-pointer">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={`px-3 py-1 text-xs font-semibold ${utility.color}`}>
                          {utility.category}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 px-2 py-1 text-xs">
                          완료
                        </Badge>
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-50 transition-colors">
                        <IconComponent className={`h-8 w-8 ${utility.iconColor}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                          {utility.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {utility.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-1">
                          {utility.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-500">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* CTA */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">무료 사용</span>
                          <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors text-sm group-hover:translate-x-1 transform duration-200">
                            시작하기 →
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Planned Utilities */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-7xl container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="text-orange-600">개발 예정</span> 유틸리티
            </h2>
            <p className="text-gray-600 text-lg">
              곧 출시될 새로운 기능들을 미리 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plannedUtilities.map((utility, index) => {
              const IconComponent = utility.icon;
              return (
                <Card key={utility.id} className="h-full bg-gray-50 border-gray-200 opacity-75">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`px-3 py-1 text-xs font-semibold ${utility.color}`}>
                        {utility.category}
                      </Badge>
                      <Badge className="bg-orange-100 text-orange-800 px-2 py-1 text-xs">
                        개발 예정
                      </Badge>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className={`h-8 w-8 ${utility.iconColor}`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-700 mb-3 leading-tight">
                        {utility.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {utility.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-1">
                        {utility.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Coming Soon */}
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <div className="text-center">
                        <span className="text-xs text-gray-400 font-medium">
                          곧 출시 예정
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 via-white to-green-50">
        <div className="container mx-auto max-w-4xl container-padding text-center">
          <Card className="bg-white border-gray-200 shadow-lg">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-10 w-10 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  지금 바로 시작해보세요!
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  완료된 유틸리티들을 활용하여 당신의 테니스 실력을 한 단계 올려보세요.<br />
                  과학적 분석과 전문가의 조언이 기다립니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      NTRP 실력 테스트
                    </Button>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold focus-ring">
                      <Shield className="h-5 w-5 mr-2" />
                      부상 위험 체크
                    </Button>
                  </Link>
                  <Link href="/utility/equipment-recommendation">
                    <Button variant="outline" className="bg-white border-gray-300 hover:border-blue-500 px-8 py-3 text-lg font-semibold focus-ring">
                      <Target className="h-5 w-5 mr-2" />
                      장비 추천 받기
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
