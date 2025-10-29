'use client';

import React, { useState } from 'react';
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
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

export default function UtilityPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const utilities = [
    {
      id: 'play-style-test',
      title: '테니스 플레이 스타일 진단',
      description: '7가지 플레이 스타일 중 당신의 고유한 테니스 성향을 발견하고 맞춤형 조언을 받으세요.',
      icon: Sparkles,
      href: '/utility/play-style-test',
      status: '완료',
      features: ['7가지 스타일', '맞춤형 조언', '프로 선수 비교', '훈련 루틴 추천'],
      gradient: 'from-purple-500 via-pink-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-purple-50 via-pink-50 to-red-50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
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
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      category: '실력 측정'
    },
    {
      id: 'string-tension',
      title: '스트링 텐션 계산기',
      description: '라켓, 스트링, 플레이 스타일에 따라 최적의 텐션을 계산해드립니다.',
      icon: Settings,
      href: '/utility/string-tension',
      status: '완료',
      features: ['맞춤형 계산', '장비별 조정', '전문가 추천'],
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
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
      gradient: 'from-red-500 via-orange-500 to-amber-500',
      bgColor: 'bg-gradient-to-br from-red-50 via-orange-50 to-amber-50',
      iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
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
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
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
      gradient: 'from-blue-500 via-indigo-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
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
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      bgColor: 'bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
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
      gradient: 'from-yellow-400 via-orange-400 to-amber-400',
      bgColor: 'bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50',
      iconBg: 'bg-gradient-to-br from-yellow-400 to-orange-400',
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
      gradient: 'from-pink-400 via-rose-400 to-red-400',
      bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
      iconBg: 'bg-gradient-to-br from-pink-400 to-rose-400',
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

  const filteredUtilities = selectedCategory === '전체' 
    ? utilities 
    : utilities.filter(u => u.category === selectedCategory);

  const completedUtilities = filteredUtilities.filter(u => u.status === '완료');
  const plannedUtilities = filteredUtilities.filter(u => u.status === '개발 예정');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/80 backdrop-blur-sm border border-blue-200 text-blue-700 px-6 py-2 mb-8 text-sm font-semibold shadow-lg">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              테니스 유틸리티
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
              테니스 실력 향상을 위한{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                스마트 도구
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
              과학적 분석과 데이터 기반 인사이트로 당신의 테니스 여정을 가속화하세요.<br />
              <span className="text-gray-600">전문가가 검증한 도구들로 더 정확하고 체계적인 훈련을 시작해보세요.</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-700 text-base font-medium">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span>{completedUtilities.length}개 완료</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span>{plannedUtilities.length}개 개발 예정</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>100% 무료 서비스</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white/50 backdrop-blur-sm border-y border-gray-200/50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">카테고리별 탐색</h2>
            <p className="text-gray-600 text-lg">원하는 분야의 도구를 빠르게 찾아보세요</p>
          </div>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Completed Utilities */}
      {completedUtilities.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  완료된
                </span>{' '}
                유틸리티
              </h2>
              <p className="text-xl text-gray-600">
                지금 바로 사용할 수 있는 검증된 도구들입니다
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {completedUtilities.map((utility, index) => {
                const IconComponent = utility.icon;
                return (
                  <Link key={utility.id} href={utility.href}>
                    <Card className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden relative">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${utility.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <CardContent className="p-8 flex flex-col h-full relative z-10">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <Badge className={`px-4 py-1.5 text-xs font-bold text-white shadow-md ${utility.iconBg}`}>
                            {utility.category}
                          </Badge>
                          <Badge className="bg-green-100 text-green-800 px-3 py-1.5 text-xs font-semibold shadow-sm">
                            <CheckCircle className="h-3 w-3 mr-1 inline" />
                            완료
                          </Badge>
                        </div>
                        
                        {/* Icon */}
                        <div className={`w-20 h-20 ${utility.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <IconComponent className="h-10 w-10 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 mb-4 leading-tight">
                            {utility.title}
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-6">
                            {utility.description}
                          </p>
                          
                          {/* Features */}
                          <div className="space-y-2">
                            {utility.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-700">
                                <div className={`w-1.5 h-1.5 rounded-full ${utility.iconBg} shadow-sm`}></div>
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* CTA */}
                        <div className="mt-8 pt-6 border-t border-gray-100">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 font-medium">무료 사용</span>
                            <div className="flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all duration-300">
                              <span>시작하기</span>
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
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
      )}

      {/* Planned Utilities */}
      {plannedUtilities.length > 0 && (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                  개발 예정
                </span>{' '}
                유틸리티
              </h2>
              <p className="text-xl text-gray-600">
                곧 출시될 새로운 기능들을 미리 확인해보세요
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plannedUtilities.map((utility, index) => {
                const IconComponent = utility.icon;
                return (
                  <Card key={utility.id} className="h-full bg-white/60 backdrop-blur-sm border-2 border-gray-200 shadow-lg opacity-90">
                    <CardContent className="p-8 flex flex-col h-full">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <Badge className={`px-4 py-1.5 text-xs font-bold text-white shadow-md ${utility.iconBg}`}>
                          {utility.category}
                        </Badge>
                        <Badge className="bg-orange-100 text-orange-800 px-3 py-1.5 text-xs font-semibold shadow-sm">
                          개발 예정
                        </Badge>
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-20 h-20 ${utility.iconBg} rounded-2xl flex items-center justify-center mb-6 shadow-lg opacity-60`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-700 mb-4 leading-tight">
                          {utility.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">
                          {utility.description}
                        </p>
                        
                        {/* Features */}
                        <div className="space-y-2">
                          {utility.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 text-sm text-gray-500">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Coming Soon */}
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <div className="text-center">
                          <span className="text-sm text-gray-500 font-semibold">
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
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <Card className="bg-white/95 backdrop-blur-md border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <Settings className="h-12 w-12 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                  지금 바로 시작해보세요!
                </h2>
                <p className="text-xl text-gray-700 mb-10 leading-relaxed font-medium">
                  완료된 유틸리티들을 활용하여 당신의 테니스 실력을 한 단계 올려보세요.<br />
                  <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      NTRP 실력 테스트
                    </Button>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <Shield className="h-5 w-5 mr-2" />
                      부상 위험 체크
                    </Button>
                  </Link>
                  <Link href="/utility/equipment-recommendation">
                    <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-blue-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
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
