'use client';

import React, { useState, useEffect } from 'react';
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
  Star,
  Calendar,
  RotateCcw,
  AlertTriangle,
  Lightbulb,
  Eye,
  FileText,
  Smartphone,
  Crosshair,
  Mic,
  Video,
  Camera,
  BarChart,
  PieChart,
  Gauge,
  Waves,
  Hand,
  PlayCircle,
  PauseCircle,
  SkipForward,
  SkipBack,
  Volume2,
  Settings2,
  Battery,
  Thermometer,
  Wind,
  Cloud,
  Sun,
  Moon,
  Castle,
  Diamond,
  Gem,
  Crown,
  Medal,
  Ribbon,
  Cpu,
  School,
  BookOpen,
  Monitor,
  MousePointer,
  Keyboard,
  HardDrive,
  Wifi,
  Laugh,
  Users,
  MapPin,
  Book,
  Activity,
  Heart,
  Dumbbell,
  TrendingUp as TrendingIcon,
  Clock,
  Award,
  Globe,
  Gamepad2,
  ChevronLeft,
  ChevronRight,
  Footprints,
  Flame,
  type LucideIcon
} from 'lucide-react';
import type { UtilityMetadata } from '@/lib/utilities';

// ============================================
// 유틸리티 메타데이터 관리 시스템
// ============================================
export const utilitiesMetadata: UtilityMetadata[] = [
  {
    id: 'play-style-test',
    title: '테니스 플레이 스타일 진단',
    description: '7가지 플레이 스타일 중 당신의 고유한 테니스 성향을 발견하고 맞춤형 조언을 받으세요.',
    icon: Sparkles,
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
    status: '완료',
    features: ['15개 질문', '정확한 분석', '개선 방향 제시', '통계 대시보드'],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    category: '실력 측정'
  },
  {
    id: 'utr-calculator',
    title: 'UTR 레이팅 계산기',
    description: '경기 결과를 입력하면 예상 UTR(Universal Tennis Rating)을 계산해드립니다.',
    icon: Calculator,
    status: '완료',
    features: ['경기 결과 분석', '전 세계 표준', '레벨 추정', '성장 추적'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    category: '실력 측정'
  },
  {
    id: 'shoe-recommender',
    title: 'AI 테니스화 추천기',
    description: '발 모양과 플레이 스타일을 분석하여 최적의 테니스화를 추천해드립니다.',
    icon: Footprints,
    status: '완료',
    features: ['발볼 분석', '스타일 매칭', '브랜드 비교', '최저가 확인'],
    gradient: 'from-orange-500 via-red-500 to-yellow-500',
    bgColor: 'bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    category: '장비 추천'
  },
  {
    id: 'calorie-calculator',
    title: '테니스 칼로리 계산기',
    description: '운동 강도와 시간을 고려하여 정확한 칼로리 소모량을 계산해드립니다.',
    icon: Flame,
    status: '완료',
    features: ['단/복식 구분', 'METs 기반', '운동 효과 분석', '다이어트'],
    gradient: 'from-green-500 via-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-yellow-500',
    category: '건강 관리'
  },
  {
    id: 'string-tension',
    title: '스트링 텐션 계산기',
    description: '라켓, 스트링, 플레이 스타일에 따라 최적의 텐션을 계산해드립니다.',
    icon: Settings,
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
    status: '완료',
    features: ['경기 분석', '전술 개선', '통계 시각화', '성과 추적'],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    category: '경기 분석'
  },
  {
    id: 'tennis-dictionary',
    title: '테니스 용어 사전',
    description: '200개 이상의 테니스 용어를 검색하고 자세한 설명을 확인하세요. 초보자도 쉽게 이해할 수 있는 쉬운 설명과 예시를 제공합니다.',
    icon: Book,
    status: '완료',
    features: ['용어 검색', '상세 설명', '예시 제공', '즐겨찾기'],
    gradient: 'from-emerald-500 via-green-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-500',
    category: '교육 도구'
  },
  {
    id: 'training-planner',
    title: '훈련 계획 수립',
    description: '개인 실력과 목표에 맞는 체계적인 훈련 계획을 세워보세요.',
    icon: Calculator,
    status: '완료',
    features: ['개인별 계획', '목표 설정', '진도 추적', '조정 가이드'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    bgColor: 'bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    category: '훈련 계획'
  },
  {
    id: 'court-booking',
    title: '코트 예약 시스템',
    description: '전국 테니스 코트를 실시간으로 예약하세요.',
    icon: Calendar,
    status: '완료',
    features: ['실시간 예약', '전국 코트', '편리한 결제', '예약 관리'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    category: '코트 예약'
  },
  {
    id: 'opponent-analyzer',
    title: '상대 분석 도구',
    description: '상대의 플레이 스타일을 분석하고 약점을 파악하세요.',
    icon: Users,
    status: '완료',
    features: ['스타일 분석', '약점 파악', '전략 추천', '경기 기록'],
    gradient: 'from-orange-500 via-red-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-orange-50 via-red-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    category: '경기 분석'
  },
  {
    id: 'tennis-diet',
    title: '테니스 다이어트 계산기',
    description: '테니스 선수 맞춤 영양 계산과 식단 추천을 받아보세요.',
    icon: Heart,
    status: '완료',
    features: ['영양 계산', '식단 추천', '칼로리 관리', '체중 목표'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    bgColor: 'bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
    category: '영양 관리'
  },
  {
    id: 'fitness-test',
    title: '체력 테스트',
    description: '테니스에 필요한 체력 요소들을 종합적으로 측정하세요.',
    icon: Activity,
    status: '완료',
    features: ['종합 체력 측정', '세부 데이터 분석', '개선 방향 제시', '진척도 추적'],
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
    category: '체력 관리'
  },
  {
    id: 'goal-setting',
    title: '목표 설정 도구',
    description: '단기 및 장기 목표를 설정하고 달성 계획을 세워보세요.',
    icon: Award,
    status: '완료',
    features: ['SMART 목표', '진척도 관리', '동기 부여', '성과 분석'],
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-lime-500 to-green-500',
    category: '목표 관리'
  },
  {
    id: 'nutrition-guide',
    title: '테니스 영양 가이드',
    description: '경기 전후와 훈련에 최적화된 영양 섭취 가이드를 제공합니다.',
    icon: Zap,
    status: '완료',
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
    status: '완료',
    features: ['집중력 향상', '스트레스 관리', '자신감 증진', '멘탈 강화'],
    gradient: 'from-pink-400 via-rose-400 to-red-400',
    bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-400',
    category: '멘탈 관리'
  },
  {
    id: 'court-conditions',
    title: '코트 상태 확인',
    description: '전국 테니스 코트의 실시간 상태를 확인하세요.',
    icon: MapPin,
    status: '완료',
    features: ['실시간 상태', '날씨 정보', '예약 현황', '시설 정보'],
    gradient: 'from-sky-500 via-blue-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-sky-500 to-blue-500',
    category: '코트 정보'
  },
  {
    id: 'weather-check',
    title: '날씨 적합성 체크',
    description: '테니스 플레이에 최적화된 날씨 조건을 분석합니다.',
    icon: Globe,
    status: '완료',
    features: ['날씨 분석', '플레이 적합도', '예상 영향', '대안 추천'],
    gradient: 'from-cyan-500 via-teal-500 to-green-500',
    bgColor: 'bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-500',
    category: '환경 분석'
  },
  {
    id: 'apparel-recommendation',
    title: '테니스 의류 추천',
    description: '플레이 스타일, 날씨, 예산에 맞는 최적의 테니스 의류를 추천해드립니다.',
    icon: Award,
    status: '완료',
    features: ['맞춤 추천', '날씨 기반', '브랜드 비교', '가격 정보'],
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50',
    iconBg: 'bg-gradient-to-br from-fuchsia-500 to-pink-500',
    category: '장비 추천'
  },
  {
    id: 'price-comparison',
    title: '테니스 용품 가격 비교',
    description: '다양한 온라인 스토어의 테니스 용품 가격을 비교하고 최저가로 구매하세요.',
    icon: TrendingIcon,
    status: '완료',
    features: ['가격 비교', '스토어 연동', '할인 정보', '배송비 계산'],
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-500',
    category: '쇼핑 도우미'
  },
  {
    id: 'coaching-match',
    title: '테니스 코칭 매칭',
    description: '당신의 목표와 스타일에 맞는 최고의 테니스 코치를 찾아보세요.',
    icon: Users,
    status: '완료',
    features: ['코치 매칭', '프로필 정보', '리뷰 시스템', '예약 연동'],
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    category: '코칭 서비스'
  },
  {
    id: 'match-recorder',
    title: '경기 기록 시스템',
    description: '개인 경기 결과를 기록하고 분석하세요.',
    icon: Trophy,
    status: '완료',
    features: ['경기 기록', '통계 분석', '성과 추적', '개선 포인트'],
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
    category: '경기 분석'
  },
  {
    id: 'string-pattern-analyzer',
    title: '스트링 패턴 분석기',
    description: '라켓의 스트링 패턴(16x19, 18x20 등)을 분석하고 플레이 스타일에 맞는 최적의 선택을 도와드립니다.',
    icon: Target,
    status: '완료',
    features: ['패턴 분석', '플레이 스타일 추천', '장단점 비교', '장력 가이드'],
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    category: '장비 분석'
  },
  {
    id: 'tournament-schedule',
    title: '대회 일정 관리',
    description: '전국 테니스 대회 일정을 확인하고 참가 신청하세요.',
    icon: Calendar,
    status: '완료',
    features: ['대회 일정', '참가 신청', '필터 검색', '상세 정보'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    category: '대회 관리'
  },
  {
    id: 'ranking-calculator',
    title: '랭킹 계산기',
    description: '경기 결과를 입력하여 랭킹 변화를 예측하고 목표 달성을 위한 전략을 세워보세요.',
    icon: TrendingUp,
    status: '완료',
    features: ['랭킹 예측', '포인트 계산', '전략 제안', '목표 설정'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500',
    category: '랭킹 관리'
  },
  {
    id: 'swing-analyzer',
    title: '스윙 분석 도구',
    description: '라켓 스윙 궤적을 분석하여 최적의 타격 포인트와 스윙 경로를 찾아드립니다.',
    icon: TrendingUp,
    status: '완료',
    features: ['스윙 궤적 분석', '타격 포인트 측정', '자세 교정', '비교 분석'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500',
    category: '기술 분석'
  },
  {
    id: 'serve-velocity-calculator',
    title: '서브 속도 계산기',
    description: '서브 속도를 측정하고 개선 방법을 제시합니다.',
    icon: Zap,
    status: '완료',
    features: ['속도 측정', '궤적 분석', '회전 분석', '개선 가이드'],
    gradient: 'from-orange-500 via-red-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-orange-50 via-red-50 to-rose-50',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    category: '기술 분석'
  },
  {
    id: 'forehand-stability-test',
    title: '포핸드 안정성 테스트',
    description: '포핸드 타격의 일관성과 정확도를 측정합니다.',
    icon: Target,
    status: '완료',
    features: ['안정성 측정', '정확도 분석', '약점 파악', '개선 전략'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
    category: '기술 분석'
  },
  {
    id: 'flexibility-test',
    title: '유연성 테스트',
    description: '테니스에 필요한 관절 가동범위를 측정하고 개선 방법을 제시합니다.',
    icon: Activity,
    status: '완료',
    features: ['관절 가동범위 측정', '개선 운동 추천', '진척도 추적', '부상 리스크 평가'],
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    bgColor: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
    category: '체력 관리'
  },
  {
    id: 'reaction-test',
    title: '반응 속도 테스트',
    description: '테니스 공에 대한 반응 속도를 측정합니다.',
    icon: Zap,
    status: '완료',
    features: ['반응 속도 측정', '순발력 훈련', '게임형 테스트', '개선 추적'],
    gradient: 'from-orange-500 via-red-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-orange-50 via-red-50 to-rose-50',
    iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
    category: '체력 관리'
  },
  {
    id: 'focus-training',
    title: '집중력 훈련',
    description: '테니스 경기 중 필요한 집중력을 향상시키는 다양한 훈련 프로그램입니다.',
    icon: Target,
    status: '완료',
    features: ['명상 훈련', '호흡법', '시각화', '집중력 측정'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500',
    category: '멘탈 관리'
  },
  // === 개발 예정 항목 ===
  {
    id: 'video-analyzer',
    title: '테니스 동영상 분석',
    description: '플레이 동영상을 업로드하여 AI가 자동으로 분석합니다.',
    icon: Gamepad2,
    status: '개발 예정',
    features: ['동영상 분석', '자세 교정', '기술 개선', '비교 분석'],
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-50 via-rose-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-red-500 to-rose-500',
    category: '기술 분석'
  },
  {
    id: 'stress-manager',
    title: '스트레스 관리',
    description: '경기 전후 스트레스 수준을 측정하고 관리 방법을 제시합니다.',
    icon: Heart,
    status: '개발 예정',
    features: ['스트레스 측정', '심박수 분석', '호흡 가이드', '릴렉스 기법'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    bgColor: 'bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
    category: '멘탈 관리'
  },
  {
    id: 'backhand-mastery-guide',
    title: '백핸드 마스터 가이드',
    description: '백핸드 기술의 모든 것을 배워보세요.',
    icon: RotateCcw,
    status: '개발 예정',
    features: ['기술 선택', '그립 가이드', '스윙 최적화', '드릴 추천'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    category: '기술 향상'
  },
  {
    id: 'volley-specialist-trainer',
    title: '발리 전문 트레이너',
    description: '네트 플레이의 핵심인 발리 기술을 집중적으로 훈련합니다.',
    icon: Gamepad2,
    status: '개발 예정',
    features: ['발리 기술 훈련', '상황별 전략', '실전 연습', '기술 향상'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    category: '기술 향상'
  },
  {
    id: 'mental-resilience-builder',
    title: '멘탈 회복력 빌더',
    description: '경기 중 흔들리는 멘탈을 강화합니다.',
    icon: Brain,
    status: '개발 예정',
    features: ['스트레스 관리', '집중력 강화', '마인드셋 구축', '회복력 향상'],
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    category: '멘탈 강화'
  },
  {
    id: 'tactical-decision-maker',
    title: '전술적 의사결정 도우미',
    description: '경기 상황에 따른 최적의 전술을 추천합니다.',
    icon: Lightbulb,
    status: '개발 예정',
    features: ['상황 분석', '전술 추천', '전략적 판단', '실시간 조언'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    category: '전술 분석'
  },
  {
    id: 'game-situation-advisor',
    title: '경기 상황 어드바이저',
    description: '현재 경기 상황을 분석하여 최적의 플레이를 제안합니다.',
    icon: BarChart3,
    status: '개발 예정',
    features: ['상황 분석', '최적 플레이 제안', '중요 순간 전략', '실시간 조언'],
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-lime-500 to-green-500',
    category: '전술 분석'
  },
  {
    id: 'tennis-academy-finder',
    title: '테니스 아카데미 파인더',
    description: '주변 지역의 테니스 아카데미를 찾아드립니다.',
    icon: School,
    status: '개발 예정',
    features: ['아카데미 검색', '코치 프로필', '수업료 비교', '커리큘럼 분석'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
    category: '교육 리소스'
  },
  {
    id: 'tennis-quiz-challenge',
    title: '테니스 퀴즈 챌린지',
    description: '테니스 지식을 테스트하는 재미있는 퀴즈 게임입니다.',
    icon: Brain,
    status: '개발 예정',
    features: ['지식 테스트', '재미있는 게임', '다양한 주제', 'IQ 향상'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    category: '엔터테인먼트'
  }
];

export default function UtilityPage() {
  const activeUtilities = utilitiesMetadata.filter(u => u.status === '완료');
  const plannedUtilities = utilitiesMetadata.filter(u => u.status === '개발 예정');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      {/* 헤더 섹션 */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 animate-spin-slow">
          <Settings size={300} />
        </div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight flex items-center justify-center gap-4">
            <span className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
              <Settings className="w-10 h-10 md:w-12 md:h-12 text-blue-300" />
            </span>
            테니스 유틸리티
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-light leading-relaxed">
            당신의 테니스 라이프를 더 스마트하게 만들어줄<br className="hidden md:block" />
            전문적인 분석 도구와 계산기들을 만나보세요.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-20">

        {/* 1. 사용 가능한 도구들 (Active) */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              지금 바로 사용하기
            </h2>
            <Badge className="bg-blue-600 ml-2 shadow-sm shadow-blue-500/30">{activeUtilities.length}</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeUtilities.map((utility) => {
              const Icon = utility.icon;
              return (
                <Link href={`/utility/${utility.id}`} key={utility.id} className="group block h-full">
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800 ring-1 ring-gray-100 dark:ring-gray-700 hover:ring-2 hover:ring-blue-500 hover:-translate-y-1">
                    <div className={`h-2 ${utility.iconBg} w-full`} />
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className={`p-3 rounded-xl ${utility.bgColor} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                          <Icon className={`w-8 h-8 ${utility.gradient.split(' ')[1].replace('via-', 'text-')}`} />
                        </div>
                        <Badge variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">
                          {utility.category}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {utility.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-5 line-clamp-2 text-sm leading-relaxed min-h-[40px]">
                        {utility.description}
                      </p>

                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700/50">
                        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                          시작하기 <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* 2. 개발 예정 도구들 (Roadmap) */}
        <section className="relative py-12">
          <div className="absolute inset-x-0 -top-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

          <div className="flex items-center gap-3 mb-8 mt-4 opacity-80">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                출시 예정 (Coming Soon)
              </h2>
              <p className="text-sm text-gray-500">투표가 많은 기능을 우선적으로 개발합니다</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 opacity-75 hover:opacity-100 transition-opacity duration-300">
            {plannedUtilities.map((utility) => {
              const Icon = utility.icon;
              return (
                <Card key={utility.id} className="border border-dashed border-gray-300 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/30 hover:bg-white dark:hover:bg-gray-800 transition-colors cursor-default">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg grayscale">
                        <Icon className="w-5 h-5 text-gray-400" />
                      </div>
                      <h3 className="font-semibold text-gray-700 dark:text-gray-300 truncate">
                        {utility.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-2 mb-3">
                      {utility.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-[10px] text-gray-400 border-gray-200">
                        {utility.category}
                      </Badge>
                      <span className="text-[10px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
                        준비 중
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">
              원하시는 기능이 없나요?
            </h3>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto relative z-10">
              테니스 프렌즈는 여러분의 의견으로 성장합니다.<br />
              필요한 계산기나 분석 도구가 있다면 언제든 알려주세요.
            </p>
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 rounded-full relative z-10">
              기능 제안하기
            </Button>
          </div>
        </section>

      </div>
    </div>
  );
}
