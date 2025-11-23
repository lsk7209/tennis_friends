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
  type LucideIcon
} from 'lucide-react';
import type { UtilityMetadata } from '@/lib/utilities';

// ============================================
// 유틸리티 메타데이터 관리 시스템
// ============================================
// 새로운 유틸리티를 추가하려면 아래 템플릿을 복사해서
// utilitiesMetadata 배열에 추가하세요.
//
// 📝 추가 방법:
// 1. 아래 템플릿을 복사
// 2. 필요한 정보 입력
// 3. 저장하면 자동으로 페이지에 반영됩니다
//
// 📋 템플릿:
/*
{
  id: 'utility-slug',           // URL slug (케밥케이스)
  title: '유틸리티 제목',         // 표시될 제목
  description: '유틸리티 설명',   // 상세 설명 (100자 이내 권장)
  icon: IconName,               // Lucide 아이콘 컴포넌트
  status: '완료' | '개발 예정',   // 개발 상태
  features: ['기능1', '기능2'],  // 주요 기능 목록
  gradient: 'from-color1 via-color2 to-color3', // Tailwind 그라데이션
  bgColor: 'bg-gradient-to-br from-color1 via-color2 to-color3',
  iconBg: 'bg-gradient-to-br from-color1 to-color2',
  category: '카테고리명'         // 카테고리 분류
}
*/
//
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
    id: 'training-planner',
    title: '훈련 계획 수립',
    description: '개인 실력과 목표에 맞는 체계적인 훈련 계획을 세워보세요. 주간별 상세 계획과 진도 체크로 체계적이고 지속 가능한 실력 향상을 경험하세요.',
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
    description: '전국 테니스 코트를 실시간으로 예약하세요. 실내외 코트, 시간대별 예약, 편리한 결제 시스템으로 언제 어디서나 테니스를 즐기세요.',
    icon: Calendar,
    status: '완료',
    features: ['실시간 예약', '전국 코트', '편리한 결제', '예약 관리'],
    gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    category: '코트 예약'
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
    id: 'opponent-analyzer',
    title: '상대 분석 도구',
    description: '상대의 플레이 스타일을 분석하고 약점을 파악하세요. 경기 데이터를 기반으로 한 전략적 분석으로 승률을 높이세요.',
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
    description: '테니스 선수 맞춤 영양 계산과 식단 추천을 받아보세요. 경기력 향상과 체중 관리를 위한 과학적 접근입니다.',
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
    description: '테니스에 필요한 체력 요소들을 종합적으로 측정하세요. 순발력, 지구력, 근력 등 세부 체력 데이터를 분석합니다.',
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
    description: '단기 및 장기 목표를 설정하고 달성 계획을 세워보세요. SMART 목표 설정과 진척도 관리를 지원합니다.',
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
    description: '전국 테니스 코트의 실시간 상태를 확인하세요. 날씨, 예약 현황, 시설 상태를 한눈에 파악할 수 있습니다.',
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
    description: '테니스 플레이에 최적화된 날씨 조건을 분석합니다. 바람, 온도, 습도 등 경기력에 영향을 미치는 요소들을 평가합니다.',
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
    description: '당신의 목표와 스타일에 맞는 최고의 테니스 코치를 찾아보세요. 전문 코치들과의 1:1 매칭 서비스입니다.',
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
    description: '개인 경기 결과를 기록하고 분석하세요. 승패 기록, 주요 플레이, 개선 포인트를 체계적으로 관리합니다.',
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
    description: '전국 테니스 대회 일정을 확인하고 참가 신청하세요. 실력과 지역에 맞는 대회를 찾아보세요.',
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
    id: 'video-analyzer',
    title: '테니스 동영상 분석',
    description: '플레이 동영상을 업로드하여 AI가 자동으로 분석합니다. 자세 교정, 기술 개선 포인트를 찾아드립니다.',
    icon: Gamepad2,
    status: '개발 예정',
    features: ['동영상 분석', '자세 교정', '기술 개선', '비교 분석'],
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-50 via-rose-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-red-500 to-rose-500',
    category: '기술 분석'
  },
  {
    id: 'flexibility-test',
    title: '유연성 테스트',
    description: '테니스에 필요한 관절 가동범위를 측정하고 개선 방법을 제시합니다. 부상 예방과 퍼포먼스 향상을 위한 필수 테스트입니다.',
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
    description: '테니스 공에 대한 반응 속도를 측정합니다. 순발력 향상을 위한 게임형 테스트로 재미있게 훈련할 수 있습니다.',
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
    description: '테니스 경기 중 필요한 집중력을 향상시키는 다양한 훈련 프로그램입니다. 명상, 호흡법, 시각화 기법을 활용합니다.',
    icon: Target,
    status: '완료',
    features: ['명상 훈련', '호흡법', '시각화', '집중력 측정'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500',
    category: '멘탈 관리'
  },
  {
    id: 'stress-manager',
    title: '스트레스 관리',
    description: '경기 전후 스트레스 수준을 측정하고 관리 방법을 제시합니다. 심박수 변이, 호흡 패턴 분석으로 최적의 스트레스 관리를 돕습니다.',
    icon: Heart,
    status: '개발 예정',
    features: ['스트레스 측정', '심박수 분석', '호흡 가이드', '릴렉스 기법'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    bgColor: 'bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
    category: '멘탈 관리'
  },
  {
    id: 'progress-tracker',
    title: '진척도 추적',
    description: '테니스 실력 향상의 진척도를 시각적으로 추적합니다. 목표 달성률, 기술 향상 그래프, 경기 결과 분석을 제공합니다.',
    icon: TrendingIcon,
    status: '개발 예정',
    features: ['진척도 그래프', '목표 달성률', '기술 향상 분석', '성과 리포트'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
    category: '목표 관리'
  },
  {
    id: 'schedule-manager',
    title: '테니스 일정 관리',
    description: '훈련, 경기, 휴식 일정을 최적화하여 관리합니다. 피로도 분석을 통한 과학적인 일정 배치를 추천합니다.',
    icon: Calendar,
    status: '개발 예정',
    features: ['일정 최적화', '피로도 분석', '휴식 추천', '알림 시스템'],
    gradient: 'from-blue-500 via-indigo-500 to-purple-500',
    bgColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    category: '일정 관리'
  },
  {
    id: 'swing-analyzer',
    title: '스윙 분석 도구',
    description: '라켓 스윙 궤적을 분석하여 최적의 타격 포인트와 스윙 경로를 찾아드립니다. 비디오 분석으로 자세 교정을 지원합니다.',
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
    description: '서브 속도를 측정하고 개선 방법을 제시합니다. 공의 궤적, 회전, 속도를 분석하여 서브 기술을 향상시키세요.',
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
    description: '포핸드 타격의 일관성과 정확도를 측정합니다. 다양한 상황에서의 타격 성공률을 분석하여 약점을 찾아드립니다.',
    icon: Target,
    status: '완료',
    features: ['안정성 측정', '정확도 분석', '약점 파악', '개선 전략'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
    category: '기술 분석'
  },
  {
    id: 'backhand-mastery-guide',
    title: '백핸드 마스터 가이드',
    description: '백핸드 기술의 모든 것을 배워보세요. 양손/한손 백핸드 선택, 그립 교환, 스윙 궤적 최적화까지 완벽 가이드입니다.',
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
    description: '네트 플레이의 핵심인 발리 기술을 집중적으로 훈련합니다. 다양한 발리 상황과 전략을 실전처럼 연습할 수 있습니다.',
    icon: Gamepad2,
    status: '개발 예정',
    features: ['발리 기술 훈련', '상황별 전략', '실전 연습', '기술 향상'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    category: '기술 향상'
  },
  {
    id: 'groundstroke-efficiency',
    title: '그라운드 스트로크 효율성',
    description: '베이스라인 플레이의 효율성을 분석합니다. 라켓 준비 시간, 스텝 이동, 타격 타이밍을 최적화하여 안정적인 플레이를 만듭니다.',
    icon: Activity,
    status: '개발 예정',
    features: ['효율성 분석', '타이밍 최적화', '스텝 개선', '안정성 향상'],
    gradient: 'from-amber-500 via-yellow-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
    category: '기술 향상'
  },
  {
    id: 'mental-resilience-builder',
    title: '멘탈 회복력 빌더',
    description: '경기 중 흔들리는 멘탈을 강화합니다. 스트레스 관리, 집중력 유지, 긍정적 마인드셋 구축을 위한 다양한 기법을 제공합니다.',
    icon: Brain,
    status: '개발 예정',
    features: ['스트레스 관리', '집중력 강화', '마인드셋 구축', '회복력 향상'],
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    category: '멘탈 강화'
  },
  {
    id: 'confidence-booster',
    title: '자신감 부스터',
    description: '테니스 실력 향상을 통한 자신감 증진 프로그램입니다. 작은 목표 달성부터 시작하여 점진적으로 자신감을 쌓아나갑니다.',
    icon: Trophy,
    status: '개발 예정',
    features: ['목표 설정', '작은 성공 축적', '자신감 강화', '동기 부여'],
    gradient: 'from-emerald-500 via-green-500 to-lime-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-green-500',
    category: '멘탈 강화'
  },
  {
    id: 'pressure-situation-simulator',
    title: '압박 상황 시뮬레이터',
    description: '대회와 같은 압박 상황을 시뮬레이션합니다. 긴장감을 조절하고 중요한 순간에 최선의 플레이를 할 수 있도록 훈련합니다.',
    icon: AlertTriangle,
    status: '개발 예정',
    features: ['압박 상황 시뮬레이션', '긴장감 조절', '중요 순간 대처', '멘탈 훈련'],
    gradient: 'from-red-500 via-orange-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-red-50 via-orange-50 to-amber-50',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
    category: '멘탈 강화'
  },
  {
    id: 'tactical-decision-maker',
    title: '전술적 의사결정 도우미',
    description: '경기 상황에 따른 최적의 전술을 추천합니다. 상대 스타일, 점수 상황, 코트 상태를 고려한 전략적 판단을 지원합니다.',
    icon: Lightbulb,
    status: '개발 예정',
    features: ['상황 분석', '전술 추천', '전략적 판단', '실시간 조언'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    category: '전술 분석'
  },
  {
    id: 'opponent-pattern-recognizer',
    title: '상대 패턴 인식기',
    description: '상대의 플레이 패턴을 분석하여 예측합니다. 서브 방향, 리턴 스타일, 약점을 자동으로 파악하여 전략 수립을 돕습니다.',
    icon: Eye,
    status: '개발 예정',
    features: ['패턴 분석', '예측 기능', '약점 파악', '전략 수립'],
    gradient: 'from-teal-500 via-cyan-500 to-blue-500',
    bgColor: 'bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50',
    iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
    category: '전술 분석'
  },
  {
    id: 'game-situation-advisor',
    title: '경기 상황 어드바이저',
    description: '현재 경기 상황을 분석하여 최적의 플레이를 제안합니다. 듀스 상황, 브레이크 포인트 등 중요한 순간에 전략적 조언을 제공합니다.',
    icon: BarChart3,
    status: '개발 예정',
    features: ['상황 분석', '최적 플레이 제안', '중요 순간 전략', '실시간 조언'],
    gradient: 'from-lime-500 via-green-500 to-emerald-500',
    bgColor: 'bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50',
    iconBg: 'bg-gradient-to-br from-lime-500 to-green-500',
    category: '전술 분석'
  },
  {
    id: 'racket-sweet-spot-finder',
    title: '라켓 스위트 스팟 파인더',
    description: '라켓의 최적 타격 지점을 찾아드립니다. 다양한 위치에서의 타격감을 측정하여 개인에게 맞는 스위트 스팟을 찾아줍니다.',
    icon: Crosshair,
    status: '개발 예정',
    features: ['타격 지점 측정', '스위트 스팟 찾기', '개인 맞춤', '타격감 분석'],
    gradient: 'from-slate-500 via-gray-500 to-zinc-500',
    bgColor: 'bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50',
    iconBg: 'bg-gradient-to-br from-slate-500 to-gray-500',
    category: '장비 최적화'
  },
  {
    id: 'string-performance-optimizer',
    title: '스트링 퍼포먼스 옵티마이저',
    description: '스트링 상태를 실시간으로 모니터링하고 최적의 장력과 교체 시기를 알려드립니다. 스트링 수명과 퍼포먼스를 극대화합니다.',
    icon: Gauge,
    status: '개발 예정',
    features: ['스트링 모니터링', '장력 측정', '교체 시기 알림', '퍼포먼스 분석'],
    gradient: 'from-neutral-500 via-stone-500 to-gray-500',
    bgColor: 'bg-gradient-to-br from-neutral-50 via-stone-50 to-gray-50',
    iconBg: 'bg-gradient-to-br from-neutral-500 to-stone-500',
    category: '장비 최적화'
  },
  {
    id: 'grip-comfort-analyzer',
    title: '그립 편안함 분석기',
    description: '그립 사이즈와 재질을 분석하여 최적의 편안함을 찾아드립니다. 손 크기, 그립 습관, 땀 발생량을 고려한 맞춤 추천입니다.',
    icon: Hand,
    status: '개발 예정',
    features: ['그립 사이즈 측정', '편안함 분석', '재질 추천', '맞춤 설정'],
    gradient: 'from-warm-gray-500 via-cool-gray-500 to-blue-gray-500',
    bgColor: 'bg-gradient-to-br from-warm-gray-50 via-cool-gray-50 to-blue-gray-50',
    iconBg: 'bg-gradient-to-br from-warm-gray-500 to-cool-gray-500',
    category: '장비 최적화'
  },
  {
    id: 'injury-prevention-scanner',
    title: '부상 예방 스캐너',
    description: '플레이 습관과 신체 상태를 스캔하여 잠재적 부상 위험을 사전에 파악합니다. 맞춤형 예방 운동과 스트레칭을 추천합니다.',
    icon: Shield,
    status: '개발 예정',
    features: ['습관 분석', '위험 파악', '예방 운동', '스트레칭 추천'],
    gradient: 'from-red-500 via-rose-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-red-50 via-rose-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-red-500 to-rose-500',
    category: '건강 모니터링'
  },
  {
    id: 'recovery-time-calculator',
    title: '회복 시간 계산기',
    description: '훈련 강도와 신체 상태에 따른 최적 회복 시간을 계산합니다. 과훈련 방지와 효율적인 회복을 위한 과학적 접근입니다.',
    icon: Clock,
    status: '개발 예정',
    features: ['훈련 강도 분석', '회복 시간 계산', '과훈련 방지', '효율적 회복'],
    gradient: 'from-blue-500 via-indigo-500 to-violet-500',
    bgColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
    category: '건강 모니터링'
  },
  {
    id: 'fatigue-level-monitor',
    title: '피로도 레벨 모니터',
    description: '훈련과 경기의 피로도를 실시간으로 모니터링합니다. 신체 신호와 퍼포먼스 데이터를 분석하여 최적의 휴식 시기를 알려드립니다.',
    icon: Battery,
    status: '개발 예정',
    features: ['피로도 모니터링', '신호 분석', '퍼포먼스 데이터', '휴식 추천'],
    gradient: 'from-yellow-500 via-amber-500 to-orange-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-amber-500',
    category: '건강 모니터링'
  },
  {
    id: 'training-intensity-optimizer',
    title: '훈련 강도 옵티마이저',
    description: '개인의 체력 상태와 목표에 맞는 최적 훈련 강도를 설정합니다. 점진적 과부하 원칙을 적용하여 안전하고 효과적인 훈련을 도와드립니다.',
    icon: TrendingUp,
    status: '개발 예정',
    features: ['강도 설정', '체력 상태 분석', '점진적 과부하', '효과적 훈련'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
    category: '훈련 최적화'
  },
  {
    id: 'skill-progress-predictor',
    title: '기술 향상 예측기',
    description: '현재 실력과 훈련량을 바탕으로 미래 실력 향상을 예측합니다. 목표 달성까지 필요한 시간과 방법을 과학적으로 계산합니다.',
    icon: Castle,
    status: '개발 예정',
    features: ['실력 예측', '훈련량 분석', '목표 달성 계산', '과학적 접근'],
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    bgColor: 'bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50',
    iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
    category: '훈련 최적화'
  },
  {
    id: 'adaptive-training-planner',
    title: '적응형 훈련 플래너',
    description: '실력 향상에 따라 자동으로 훈련 계획을 조정합니다. AI가 학습 패턴을 분석하여 개인에게 최적화된 훈련 루틴을 생성합니다.',
    icon: Cpu,
    status: '개발 예정',
    features: ['자동 조정', '패턴 분석', '개인 최적화', 'AI 생성'],
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
    bgColor: 'bg-gradient-to-br from-fuchsia-50 via-pink-50 to-rose-50',
    iconBg: 'bg-gradient-to-br from-fuchsia-500 to-pink-500',
    category: '훈련 최적화'
  },
  {
    id: 'social-tennis-matcher',
    title: '소셜 테니스 매처',
    description: '비슷한 실력의 테니스 친구들을 찾아드립니다. 지역별, 실력별, 관심사별로 매칭하여 함께 플레이할 수 있는 파트너를 연결합니다.',
    icon: Users,
    status: '개발 예정',
    features: ['실력 매칭', '지역별 검색', '관심사 매칭', '파트너 연결'],
    gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
    bgColor: 'bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50',
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
    category: '커뮤니티'
  },
  {
    id: 'tennis-event-finder',
    title: '테니스 이벤트 파인더',
    description: '주변 지역의 테니스 대회, 워크숍, 소셜 이벤트를 찾아드립니다. 참가 신청과 일정 관리를 한 곳에서 해결할 수 있습니다.',
    icon: Calendar,
    status: '개발 예정',
    features: ['이벤트 검색', '대회 정보', '참가 신청', '일정 관리'],
    gradient: 'from-cyan-500 via-teal-500 to-green-500',
    bgColor: 'bg-gradient-to-br from-cyan-50 via-teal-50 to-green-50',
    iconBg: 'bg-gradient-to-br from-cyan-500 to-teal-500',
    category: '커뮤니티'
  },
  {
    id: 'achievement-tracker',
    title: '업적 트래커',
    description: '테니스 여정의 다양한 업적을 추적합니다. 첫 서브 에이스, 연승 기록, 대회 우승 등 특별한 순간들을 기록하고 공유하세요.',
    icon: Award,
    status: '개발 예정',
    features: ['업적 추적', '기록 저장', '순위 시스템', '공유 기능'],
    gradient: 'from-gold-500 via-yellow-500 to-amber-500',
    bgColor: 'bg-gradient-to-br from-gold-50 via-yellow-50 to-amber-50',
    iconBg: 'bg-gradient-to-br from-gold-500 to-yellow-500',
    category: '커뮤니티'
  },
  {
    id: 'tennis-stats-comparator',
    title: '테니스 통계 비교기',
    description: '나의 통계를 프로 선수나 다른 플레이어와 비교해보세요. 객관적인 데이터로 자신의 위치를 파악하고 동기부여를 얻을 수 있습니다.',
    icon: BarChart3,
    status: '개발 예정',
    features: ['통계 비교', '프로 선수 비교', '데이터 분석', '동기 부여'],
    gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-blue-500',
    category: '데이터 분석'
  },
  {
    id: 'performance-heatmap',
    title: '퍼포먼스 히트맵',
    description: '코트 위에서의 타격 위치와 성공률을 시각화합니다. 강점과 약점을 한눈에 파악하여 전략적 개선을 할 수 있습니다.',
    icon: Globe,
    status: '개발 예정',
    features: ['타격 위치 시각화', '성공률 분석', '강점/약점 파악', '전략 개선'],
    gradient: 'from-red-500 via-orange-500 to-yellow-500',
    bgColor: 'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50',
    iconBg: 'bg-gradient-to-br from-red-500 to-orange-500',
    category: '데이터 분석'
  },
  {
    id: 'shot-trajectory-analyzer',
    title: '샷 궤적 분석기',
    description: '공의 궤적, 속도, 회전을 분석하여 최적의 샷을 찾아드립니다. 물리학적 데이터를 활용한 과학적인 샷 분석입니다.',
    icon: Zap,
    status: '개발 예정',
    features: ['궤적 분석', '속도 측정', '회전 분석', '최적 샷 찾기'],
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    category: '데이터 분석'
  },
  {
    id: 'tennis-academy-finder',
    title: '테니스 아카데미 파인더',
    description: '주변 지역의 테니스 아카데미를 찾아드립니다. 코치 프로필, 수업료, 커리큘럼을 비교하여 최적의 학습 환경을 선택하세요.',
    icon: School,
    status: '개발 예정',
    features: ['아카데미 검색', '코치 프로필', '수업료 비교', '커리큘럼 분석'],
    gradient: 'from-green-500 via-emerald-500 to-teal-500',
    bgColor: 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50',
    iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
    category: '교육 리소스'
  },
  {
    id: 'online-lesson-booking',
    title: '온라인 레슨 예약',
    description: '전문 코치와의 1:1 온라인 레슨을 예약하세요. 화상 통화로 편안한 환경에서 개인 맞춤 레슨을 받을 수 있습니다.',
    icon: Video,
    status: '개발 예정',
    features: ['온라인 예약', '전문 코치 매칭', '화상 레슨', '개인 맞춤'],
    gradient: 'from-purple-500 via-violet-500 to-indigo-500',
    bgColor: 'bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-500',
    category: '교육 리소스'
  },
  {
    id: 'drill-library',
    title: '드릴 라이브러리',
    description: '수백 가지 테니스 드릴을 검색하고 연습해보세요. 실력별, 기술별로 분류된 체계적인 드릴 컬렉션입니다.',
    icon: BookOpen,
    status: '개발 예정',
    features: ['드릴 검색', '실력별 분류', '기술별 정리', '연습 가이드'],
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    bgColor: 'bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50',
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-500',
    category: '교육 리소스'
  },
  {
    id: 'tennis-quiz-challenge',
    title: '테니스 퀴즈 챌린지',
    description: '테니스 지식을 테스트하는 재미있는 퀴즈 게임입니다. 규칙, 역사, 전략 등 다양한 분야의 문제를 풀며 테니스 IQ를 향상시키세요.',
    icon: Brain,
    status: '개발 예정',
    features: ['지식 테스트', '재미있는 게임', '다양한 주제', 'IQ 향상'],
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-pink-50 via-rose-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    category: '엔터테인먼트'
  },
  {
    id: 'virtual-tennis-simulator',
    title: '가상 테니스 시뮬레이터',
    description: '컴퓨터 그래픽으로 실제 테니스 경기를 시뮬레이션합니다. 전략 수립, 상황 판단 능력을 키우는 훈련 도구입니다.',
    icon: Gamepad2,
    status: '개발 예정',
    features: ['경기 시뮬레이션', '전략 수립', '상황 판단', '훈련 도구'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    bgColor: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50',
    iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
    category: '엔터테인먼트'
  },
  {
    id: 'tennis-meme-generator',
    title: '테니스 밈 생성기',
    description: '테니스 관련 재미있는 밈을 생성해보세요. 친구들과 공유하며 테니스 커뮤니티의 유머러스한 문화를 즐겨보세요.',
    icon: Laugh,
    status: '개발 예정',
    features: ['밈 생성', '재미있는 콘텐츠', '커뮤니티 공유', '유머 문화'],
    gradient: 'from-yellow-500 via-orange-500 to-red-500',
    bgColor: 'bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50',
    iconBg: 'bg-gradient-to-br from-yellow-500 to-orange-500',
    category: '엔터테인먼트'
  }
];

// 자동으로 href 경로를 생성하는 헬퍼 함수
const generateUtilityHref = (id: string) => `/utility/${id}`;

export default function UtilityPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [currentPage, setCurrentPage] = useState(1);
  const utilitiesPerPage = 12;

  // 메타데이터에 href 자동 추가
  const utilities = utilitiesMetadata.map(utility => ({
    ...utility,
    href: generateUtilityHref(utility.id)
  }));

  // 주요 카테고리 5개로 제한
  const categories = [
    { name: '전체', count: utilities.length },
    {
      name: '실력 평가',
      count: utilities.filter(u =>
        ['실력 측정', '성향 분석', '기술 분석', '기술 향상', '멘탈 강화'].includes(u.category)
      ).length
    },
    {
      name: '장비 추천',
      count: utilities.filter(u =>
        ['장비 추천', '장비 설정', '장비 최적화', '장비 분석', '쇼핑 도우미'].includes(u.category)
      ).length
    },
    {
      name: '훈련 계획',
      count: utilities.filter(u =>
        ['훈련 계획', '체력 관리', '목표 관리', '훈련 최적화'].includes(u.category)
      ).length
    },
    {
      name: '건강 관리',
      count: utilities.filter(u =>
        ['건강 관리', '건강 모니터링', '영양 관리', '멘탈 관리'].includes(u.category)
      ).length
    },
    {
      name: '경기 분석',
      count: utilities.filter(u =>
        ['경기 분석', '전술 분석', '데이터 분석', '코칭 서비스'].includes(u.category)
      ).length
    }
  ];

  const filteredUtilities = selectedCategory === '전체' 
    ? utilities 
    : selectedCategory === '실력 평가'
    ? utilities.filter(u =>
        ['실력 측정', '성향 분석', '기술 분석', '기술 향상', '멘탈 강화'].includes(u.category)
      )
    : selectedCategory === '장비 추천'
    ? utilities.filter(u =>
        ['장비 추천', '장비 설정', '장비 최적화', '장비 분석', '쇼핑 도우미'].includes(u.category)
      )
    : selectedCategory === '훈련 계획'
    ? utilities.filter(u =>
        ['훈련 계획', '체력 관리', '목표 관리', '훈련 최적화'].includes(u.category)
      )
    : selectedCategory === '건강 관리'
    ? utilities.filter(u =>
        ['건강 관리', '건강 모니터링', '영양 관리', '멘탈 관리'].includes(u.category)
      )
    : selectedCategory === '경기 분석'
    ? utilities.filter(u =>
        ['경기 분석', '전술 분석', '데이터 분석', '코칭 서비스'].includes(u.category)
      )
    : utilities;

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredUtilities.length / utilitiesPerPage);
  const startIndex = (currentPage - 1) * utilitiesPerPage;
  const endIndex = startIndex + utilitiesPerPage;
  const currentUtilities = filteredUtilities.slice(startIndex, endIndex);

  const completedUtilities = currentUtilities.filter(u => u.status === '완료');
  const plannedUtilities = currentUtilities.filter(u => u.status === '개발 예정');

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSelectedCategory('전체'); // 카테고리 변경 시 첫 페이지로 이동
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1); // 카테고리 변경 시 첫 페이지로 이동
  };

  return (
    <div className="min-h-screen utility-page">
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
      <section className="py-12 md:py-16 bg-white/50 backdrop-blur-sm border-y border-gray-200/50 sticky top-0 z-40">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">카테고리별 탐색</h2>
            <p className="text-gray-600 text-base md:text-lg">원하는 분야의 도구를 빠르게 찾아보세요</p>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-5 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 scale-105'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-400 hover:shadow-md active:scale-95'
                }`}
                aria-pressed={selectedCategory === category.name}
                aria-label={`${category.name} 카테고리 필터 (${category.count}개)`}
              >
                {category.name} <span className="opacity-80">({category.count})</span>
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
                const IconComponent = utility.icon as any;
                return (
                  <Card key={utility.id} className="h-full bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden relative">
                      {/* Gradient Background */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${utility.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      
                      <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
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
                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-100">
                          <div className="mb-3">
                            <Badge variant="outline" className="text-xs text-gray-500 font-medium border-gray-200 bg-gray-50">
                              무료 사용
                            </Badge>
                          </div>
                          <Link href={utility.href} className="block">
                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-base md:text-lg font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                              <span className="mr-2">시작하기</span>
                              <ArrowRight className="h-5 w-5" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-4 mt-16">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-white border-white/20 hover:border-blue-400"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                이전
              </Button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={
                      page === currentPage
                        ? "bg-blue-600 text-white"
                        : "bg-white border-white/20 hover:border-blue-400"
                    }
                  >
                    {page}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="bg-white border-white/20 hover:border-blue-400"
              >
                다음
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Page Info */}
            <div className="text-center mt-4 text-gray-600 text-sm">
              {startIndex + 1}-{Math.min(endIndex, filteredUtilities.length)} / {filteredUtilities.length} 개의 도구
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
                const IconComponent = utility.icon as any;
                return (
                  <Card key={utility.id} className="h-full bg-white/60 backdrop-blur-sm border-2 border-gray-200 shadow-lg opacity-90">
                    <CardContent className="p-6 md:p-8 flex flex-col h-full">
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
                        <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-200">
                          <div className="text-center">
                            <Badge variant="outline" className="text-xs text-gray-500 font-semibold border-gray-300 bg-gray-100/50">
                              곧 출시 예정
                            </Badge>
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
                  테니스 유틸리티들을 활용하여 당신의 테니스 실력을 한 단계 올려보세요.<br />
                  <span className="text-gray-600">과학적 분석과 전문가의 조언이 기다립니다.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/utility/ntrp-test">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      NTRP 실력 테스트
                    </Button>
                  </Link>
                  <Link href="/utility/injury-risk">
                    <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                      <Shield className="h-5 w-5 mr-2" />
                      부상 위험 체크
                    </Button>
                  </Link>
                  <Link href="/utility/equipment-recommendation">
                    <Button variant="outline" className="bg-white border-2 border-gray-300 hover:border-blue-500 px-10 py-6 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
