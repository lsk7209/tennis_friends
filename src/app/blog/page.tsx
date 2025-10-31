'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: '30',
    title: '테니스 풋워크 기초: 코트 지배의 핵심 이동 기술',
    category: '테니스 레슨',
    description: '테니스에서 50%의 승패를 좌우하는 풋워크 기술. 스플릿 스텝, 크로스오버, 사이드 셔플의 올바른 방법과 연습법을 배우고 코트 전체를 자유자재로 누비세요.',
    date: '2025-01-28',
    readTime: '9분',
    slug: 'tennis-footwork-basics',
    tags: ['풋워크', '이동기술', '테니스기초', '코트지배']
  },
  {
    id: '31',
    title: '코트별 테니스 전략 완벽 가이드: 클레이 vs 하드 vs 잔디',
    category: '테니스 레슨',
    description: '코트 표면에 따른 전략 차이로 승률을 높이세요. 클레이 코트의 토핑 전략, 하드 코트의 강력한 타격, 잔디 코트의 네트 플레이까지 코트별 최적 전략을 마스터하세요.',
    date: '2025-01-28',
    readTime: '10분',
    slug: 'tennis-court-strategies',
    tags: ['코트전략', '클레이', '하드코트', '잔디코트']
  },
  {
    id: '32',
    title: '테니스 코어 강화 가이드: 안정된 타격의 기반',
    category: '건강 & 피트니스',
    description: '테니스에서 80%의 힘을 좌우하는 코어 근육. 플랭크, 러시안 트위스트, 데드버그로 코어를 강화하고 안정된 타격과 빠른 회전을 실현하세요.',
    date: '2025-01-28',
    readTime: '8분',
    slug: 'tennis-core-strength',
    tags: ['코어강화', '안정된타격', '회전력', '테니스체력']
  },
  {
    id: '33',
    title: '테니스 압박 상황 멘탈 전략: 승리의 20%를 차지하는 정신력',
    category: '멘탈 트레이닝',
    description: '매치 포인트, 타이브레이크, 역전 상황에서 흔들리지 않는 멘탈. 호흡법, 루틴, 긍정적 사고로 압박을 기회로 전환하세요.',
    date: '2025-01-28',
    readTime: '9분',
    slug: 'tennis-pressure-situations',
    tags: ['압박상황', '멘탈전략', '정신력', '경기심리']
  },
  {
    id: '34',
    title: '테니스 스트링 장력 완벽 가이드: 파워 vs 컨트롤의 균형',
    category: '장비 가이드',
    description: '스트링 장력이 테니스 타격의 60%를 좌우합니다. 낮은 장력의 파워, 높은 장력의 컨트롤. 플레이 스타일에 맞는 최적 장력을 찾아보세요.',
    date: '2025-01-28',
    readTime: '8분',
    slug: 'tennis-string-tension',
    tags: ['스트링장력', '파워컨트롤', '장비선택', '테니스장비']
  },
  {
    id: '35',
    title: '테니스 초보자 완벽 가이드: 30일 만에 즐기는 테니스',
    category: '테니스 레슨',
    description: '테니스 처음 시작하는 분들을 위한 단계별 가이드. 장비 준비부터 기본 기술, 코트 에티켓까지. 재미있고 안전하게 테니스에 입문하세요!',
    date: '2025-01-28',
    readTime: '11분',
    slug: 'tennis-beginner-guide',
    tags: ['초보자가이드', '테니스입문', '기본기술', '안전연습']
  },
  {
    id: '36',
    title: '테니스 워밍업 완벽 가이드: 부상 예방과 경기력 향상',
    category: '건강 & 피트니스',
    description: '경기 전 워밍업이 승패의 30%를 좌우합니다. 15분 워밍업 루틴으로 근육 준비, 관절 가동성 향상, 멘탈 집중을 동시에 달성하세요.',
    date: '2025-01-28',
    readTime: '10분',
    slug: 'tennis-warmup-routine',
    tags: ['워밍업', '부상예방', '경기력향상', '준비운동']
  },
  {
    id: '37',
    title: '테니스 실수 피하기: 초보자의 80% 실수를 바로잡는 방법',
    category: '테니스 레슨',
    description: '왜 공이 네트에 걸릴까? 왜 포핸드가 안 맞을까? 초보자들이 가장 많이 하는 실수 15가지와 즉시 고칠 수 있는 방법들.',
    date: '2025-01-28',
    readTime: '9분',
    slug: 'tennis-common-mistakes',
    tags: ['실수교정', '초보자실수', '기술개선', '테니스기초']
  },
  {
    id: '38',
    title: '테니스 유연성 트레이닝: 부상 예방과 타격 향상의 핵심',
    category: '건강 & 피트니스',
    description: '테니스에서 유연성이 부족하면 타격 범위가 좁아지고 부상 위험이 높아집니다. 매일 10분 스트레칭으로 어깨, 허리, 다리의 유연성을 기르세요.',
    date: '2025-01-28',
    readTime: '8분',
    slug: 'tennis-flexibility-training',
    tags: ['유연성', '스트레칭', '부상예방', '타격향상']
  },
  {
    id: '39',
    title: '테니스 심판 규칙 완벽 가이드: 공정하고 즐거운 경기를 위해',
    category: '테니스 레슨',
    description: '테니스 심판의 역할과 주요 규칙을 알아보세요. 풋폴트, 더블 바운스, 시간 초과부터 행위 위반까지 경기 진행을 원활하게 하는 방법들.',
    date: '2025-01-28',
    readTime: '10분',
    slug: 'tennis-umpire-rules',
    tags: ['심판규칙', '경기진행', '공정성', '테니스규칙']
  },
  {
    id: '40',
    title: '테니스 포핸드 마스터 가이드: 포핸드 기술 완벽 정복',
    category: '테니스 레슨',
    description: '테니스 타격의 70%를 차지하는 포핸드. 기본자세부터 고급기술까지 단계별로 배우고 안정적이고 강력한 포핸드를 만들어 보세요.',
    date: '2025-01-29',
    readTime: '11분',
    slug: 'tennis-forehand-master-guide',
    tags: ['포핸드', '타격기술', '테니스기초', '마스터가이드']
  },
  {
    id: '41',
    title: '테니스 백핸드 마스터 가이드: 약점을 강점으로 전환',
    category: '테니스 레슨',
    description: '백핸드가 약한 선수는 절대 성장할 수 없습니다. 양손/한손 백핸드 기술 완벽 가이드로 안정적이고 강력한 백핸드를 만들어 보세요.',
    date: '2025-01-29',
    readTime: '10분',
    slug: 'tennis-backhand-master-guide',
    tags: ['백핸드', '양손백핸드', '한손백핸드', '기술향상']
  },
  {
    id: '42',
    title: '테니스 서브 마스터 가이드: 서브 기술 완벽 정복',
    category: '테니스 레슨',
    description: '경기의 시작이자 득점의 핵심인 서브. 기본자세부터 고급기술까지 단계별 가이드로 안정적이고 강력한 서브를 만들어 보세요.',
    date: '2025-01-29',
    readTime: '10분',
    slug: 'tennis-serve-master-guide',
    tags: ['서브', '서브기술', '퍼스트서브', '세컨드서브']
  },
  {
    id: '43',
    title: '테니스 발리 마스터클래스: 발리 기술 완성',
    category: '테니스 레슨',
    description: '네트 플레이의 핵심인 발리. 반사 신경과 정확성을 기르는 발리 기술 완성 가이드로 상대를 압도하는 네트 플레이를 만들어 보세요.',
    date: '2025-01-29',
    readTime: '9분',
    slug: 'tennis-volley-masterclass',
    tags: ['발리', '네트플레이', '반사신경', '정확성']
  },
  {
    id: '44',
    title: '테니스 체력 컨디셔닝: 경기력 유지의 핵심',
    category: '건강 & 피트니스',
    description: '테니스 경기는 체력전입니다. 2시간 이상 지속되는 경기에서 최고의 퍼포먼스를 유지하는 체력 컨디셔닝 프로그램을 소개합니다.',
    date: '2025-01-29',
    readTime: '10분',
    slug: 'tennis-fitness-conditioning-final',
    tags: ['체력컨디셔닝', '지구력', '근력훈련', '테니스체력']
  },
  {
    id: '45',
    title: '테니스 전략 기초: 승리의 80%를 차지하는 전략',
    category: '테니스 레슨',
    description: '기술이 20%라면 전략은 80%입니다. 상대 분석부터 포인트 운영까지 체계적인 전략으로 매 경기를 승리로 이끌어보세요.',
    date: '2025-01-30',
    readTime: '11분',
    slug: 'tennis-strategy-basics',
    tags: ['테니스전략', '상대분석', '포인트운영', '승리전략']
  },
  {
    id: '50',
    title: '테니스 장비 유지보수 완벽 가이드: 장비 수명 연장과 성능 유지',
    category: '장비 관리',
    description: '테니스 장비의 올바른 관리법으로 수명을 늘리고 최고의 성능을 유지하세요. 라켓, 스트링, 신발, 의류별 세심한 관리 방법을 배우세요.',
    date: '2025-01-31',
    readTime: '9분',
    slug: 'tennis-equipment-maintenance',
    tags: ['장비관리', '유지보수', '장비수명', '테니스장비']
  },
  {
    id: '15',
    title: '서브가 흔들릴 때, 이 5가지 포인트를 점검하라 🎾',
    category: '테니스 레슨',
    description: '서브가 자꾸 아웃으로 가나요? 방향이 안 맞고 속도가 떨어지나요? 서브의 핵심 포인트 5가지를 점검하며 안정적인 서브를 만들어보세요.',
    date: '2025-01-27',
    readTime: '8분',
    slug: 'serve-technique-improvement',
    tags: ['서브기술', '서브개선', '테니스레슨', '테니스기초']
  },
  {
    id: '16',
    title: '네트 플레이의 달인이 되는 6가지 전략 🏓',
    category: '테니스 레슨',
    description: '네트 플레이가 약해서 늘 뒤로 밀리나요? 네트 플레이의 달인이 되는 전략 6가지를 배워보세요. 발리, 스매시, 드롭샷을 자유자재로 구사하는 방법입니다.',
    date: '2025-01-27',
    readTime: '9분',
    slug: 'net-play-mastery',
    tags: ['네트플레이', '발리', '스매시', '테니스전략']
  },
  {
    id: '17',
    title: '발리 기술 완성하기 🎯',
    category: '테니스 레슨',
    description: '발리가 자꾸 네트에 걸리나요? 발리 기술의 핵심 포인트들을 단계별로 배워보세요. 컨티넨탈 그립부터 팔로우 스루까지 완벽한 발리 기술을 익히세요.',
    date: '2025-01-27',
    readTime: '7분',
    slug: 'volley-technique-perfection',
    tags: ['발리기술', '컨티넨탈그립', '테니스레슨', '네트플레이']
  },
  {
    id: '18',
    title: '드롭샷과 로브 활용법 🎾',
    category: '테니스 레슨',
    description: '상대를 네트로 끌어들이는 드롭샷과 로브 기술을 마스터해보세요. 타이밍, 회전, 궤적 제어가 핵심입니다. 실전에서 효과적으로 활용하는 방법을 배우세요.',
    date: '2025-01-27',
    readTime: '8분',
    slug: 'drop-shot-lob-guide',
    tags: ['드롭샷', '로브', '테니스기술', '전술']
  },
  {
    id: '19',
    title: '경기 중 흔들리는 집중력을 되찾는 6가지 방법 🧠',
    category: '멘탈 트레이닝',
    description: '경기 중 집중력이 떨어지나요? 중요한 포인트에서 실수하게 되나요? 집중력을 되찾는 6가지 방법을 배워보세요. 브레이킹 포인트에서도 침착함을 유지하세요.',
    date: '2025-01-27',
    readTime: '7분',
    slug: 'concentration-during-matches',
    tags: ['집중력', '멘탈트레이닝', '경기심리', '테니스멘탈']
  },
  {
    id: '20',
    title: '상대를 읽는 5가지 전략적 분석법 🎯',
    category: '경기 분석',
    description: '상대의 플레이 패턴을 읽어내는 법을 배워보세요. 서브 방향, 포핸드/백핸드 약점, 피로도 등을 분석하여 전략을 세우는 방법입니다.',
    date: '2025-01-27',
    readTime: '9분',
    slug: 'opponent-analysis-strategy',
    tags: ['상대분석', '경기전략', '테니스전술', '경기분석']
  },
  {
    id: '21',
    title: '경기 중 전술 변화의 타이밍과 방법 🔄',
    category: '테니스 레슨',
    description: '경기가 안 풀릴 때 어떻게 전술을 바꿔야 하나요? 전술 변화의 타이밍과 구체적인 방법을 배워보세요. 상황별 전략적 판단을 익히세요.',
    date: '2025-01-27',
    readTime: '8분',
    slug: 'mid-match-tactical-changes',
    tags: ['전술변화', '경기전략', '테니스전술', '상황판단']
  },
  {
    id: '22',
    title: '테니스 부상 예방을 위한 8가지 필수 운동 💪',
    category: '건강 & 피트니스',
    description: '테니스 부상을 예방하는 필수 운동 8가지를 소개합니다. 어깨, 팔꿈치, 무릎, 허리 부상을 예방하는 효과적인 스트레칭과 근력 운동입니다.',
    date: '2025-01-27',
    readTime: '10분',
    slug: 'tennis-injury-prevention-exercises',
    tags: ['부상예방', '테니스운동', '스트레칭', '근력운동']
  },
  {
    id: '23',
    title: '테니스 전후 스트레칭 루틴 완벽 가이드 🧘',
    category: '건강 & 피트니스',
    description: '테니스 전후 스트레칭의 중요성과 올바른 방법을 배워보세요. 동적 스트레칭과 정적 스트레칭을 구분하여 효과적인 루틴을 만들어보세요.',
    date: '2025-01-27',
    readTime: '9분',
    slug: 'tennis-stretching-routine',
    tags: ['스트레칭', '워밍업', '쿨다운', '테니스건강']
  },
  {
    id: '24',
    title: '테니스 신발 선택의 모든 것 👟',
    category: '장비 가이드',
    description: '테니스 신발을 고를 때 고려해야 할 모든 것들을 알려드립니다. 쿠션감, 그립력, 내구성, 그리고 자신의 플레이 스타일에 맞는 신발 선택법입니다.',
    date: '2025-01-27',
    readTime: '8분',
    slug: 'tennis-shoes-selection-guide',
    tags: ['테니스신발', '장비선택', '쿠션감', '그립력']
  },
  {
    id: '25',
    title: '테니스 어깨 부상, 예방이 최선입니다 💪',
    category: '건강 & 피트니스',
    description: '테니스에서 가장 흔한 부상인 어깨 부상의 원인과 예방법을 배워보세요. 로테이션 커프 손상부터 충돌 증후군까지, 어깨를 건강하게 유지하는 방법입니다.',
    date: '2025-01-27',
    readTime: '7분',
    slug: 'shoulder-injury-prevention',
    tags: ['어깨부상', '로테이션커프', '부상예방', '테니스건강']
  },
  {
    id: '26',
    title: '테니스 무릎 보호를 위한 7가지 핵심 운동 🦵',
    category: '건강 & 피트니스',
    description: '무릎 부상을 예방하고 강화하는 7가지 핵심 운동을 소개합니다. 점핑, 방향 전환, 착지 시 무릎에 가해지는 부하를 줄이는 방법입니다.',
    date: '2025-01-27',
    readTime: '8분',
    slug: 'knee-protection-exercises',
    tags: ['무릎부상', '무릎보호', '코어운동', '테니스건강']
  },
  {
    id: '27',
    title: '테니스 선수를 위한 완벽한 다이어트 가이드 🥗',
    category: '건강 & 피트니스',
    description: '테니스 선수의 경기력 향상과 체중 관리를 위한 영양 가이드를 제공합니다. 경기 전후 식단, 수분 보충, 보충제 선택까지 완벽하게 다룹니다.',
    date: '2025-01-27',
    readTime: '12분',
    slug: 'tennis-diet-guide',
    tags: ['테니스다이어트', '영양관리', '체중조절', '보충제']
  },
  {
    id: '28',
    title: '테니스 선수를 위한 완벽한 의류 가이드 👕',
    category: '장비 가이드',
    description: '테니스 의류 선택의 모든 것을 알려드립니다. 기능성 소재, 디자인, 계절별 선택, 그리고 프로 선수들의 선택까지. 최고의 퍼포먼스를 위한 의류 가이드입니다.',
    date: '2025-01-27',
    readTime: '10분',
    slug: 'tennis-apparel-guide',
    tags: ['테니스의류', '기능성소재', '디자인', '계절별선택']
  },
  {
    id: '29',
    title: '더블스 테니스 완벽 전략 가이드 🏓',
    category: '테니스 레슨',
    description: '더블스 테니스의 모든 것을 배워보세요. 포지셔닝, 커뮤니케이션, 서브/리턴 전략, 네트 플레이, 포인트 종료까지 완벽한 더블스 전략입니다.',
    date: '2025-01-27',
    readTime: '11분',
    slug: 'doubles-tennis-strategy',
    tags: ['더블스테니스', '포지셔닝', '커뮤니케이션', '전략']
  },
  {
    id: '14',
    title: '서울 최고의 테니스장 TOP 7 추천 🏟️',
    category: '지역 정보',
    description: '서울에서 좋은 테니스장이 어디 있나요? 가격도 합리적이고 시설도 좋은 곳을 찾고 있어요. 자신의 수준과 목적에 맞는 테니스장을 선택하세요.',
    date: '2025-01-26',
    readTime: '10분',
    slug: 'seoul-best-tennis-courts',
    tags: ['서울테니스장', '테니스장추천', '지역정보', '테니스시설']
  },
  {
    id: '13',
    title: '라켓 스트링 종류별 특징과 선택 가이드 🧵',
    category: '장비 가이드',
    description: '어떤 스트링을 써야 할지 모르겠어요? 폴리, 나일론, 자연거트... 차이가 뭔가요? 자신의 플레이 스타일에 맞는 스트링을 선택하세요.',
    date: '2025-01-26',
    readTime: '9분',
    slug: 'tennis-string-guide',
    tags: ['테니스스트링', '스트링선택', '장비가이드', '테니스장비']
  },
  {
    id: '12',
    title: '테니스 부상 없는 겨울 훈련법 ❄️',
    category: '건강 & 피트니스',
    description: '겨울에 테니스하면 부상 위험이 높아요. 추운 날씨에 몸이 잘 안 풀려요. 하지만 문제는 날씨가 아니라 준비 운동과 훈련 방법입니다.',
    date: '2025-01-26',
    readTime: '8분',
    slug: 'winter-tennis-training',
    tags: ['겨울테니스', '부상예방', '테니스훈련', '건강관리']
  },
  {
    id: '11',
    title: '테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법 🧠',
    category: '멘탈 트레이닝',
    description: '경기 중에 손이 떨려요. 중요한 포인트에서 실수해요. 하지만 문제는 대부분 기술이 아니라 멘탈 컨트롤입니다. 테니스는 90% 멘탈 게임입니다.',
    date: '2025-01-26',
    readTime: '7분',
    slug: 'tennis-mental-techniques',
    tags: ['멘탈트레이닝', '테니스심리', '긴장감극복', '테니스멘탈']
  },
  {
    id: '10',
    title: '백핸드 스윙이 불안할 때, 이 3가지를 점검하라 🎯',
    category: '테니스 레슨',
    description: '백핸드가 자꾸 아웃이에요. 임팩트가 불안해요. 하지만 문제는 대부분 라켓이 아니라 몸의 회전과 발의 위치입니다. 백핸드는 포핸드보다 더 정교한 타이밍이 필요한 기술입니다.',
    date: '2025-01-26',
    readTime: '6분',
    slug: 'backhand-swing-correction',
    tags: ['백핸드', '스윙교정', '테니스레슨', '테니스기초']
  },
  {
    id: '1',
    title: '라켓 무게 하나로 달라지는 경기 스타일 3가지 ⚖️',
    category: '장비 가이드',
    description: '라켓의 무게는 단순한 숫자가 아닙니다. 10g의 차이가 스윙 속도, 파워, 컨트롤을 모두 바꿉니다. 당신의 실력과 스타일에 맞는 무게를 찾아보세요.',
    date: '2025-01-25',
    readTime: '8분',
    slug: 'racket-weight-styles',
    tags: ['테니스라켓', '라켓무게', '테니스스타일', '테니스장비', 'NTRP']
  },
  {
    id: '2',
    title: '그립 교체, 너무 늦게 하면 손목 나간다! ⚠️',
    category: '장비 관리',
    description: '라켓보다 손이 먼저 무너집니다. 그립이 미끄러지면 스윙이 흔들리고, 결국 손목이 상합니다. 코치가 알려주는 그립 교체 주기와 올바른 관리법을 확인하세요.',
    date: '2025-01-25',
    readTime: '7분',
    slug: 'tennis-grip-replacement',
    tags: ['테니스그립', '그립교체', '손목부상', '테니스장비관리', '테니스초보']
  },
  {
    id: '2',
    title: '포핸드 스윙이 흔들릴 때, 라켓보다 몸을 먼저 봐라 💪',
    category: '테니스 레슨',
    description: '라켓이 아니라 몸이 흔들리는 겁니다. 포핸드 스윙의 핵심은 손이 아니라 코어입니다. 코치가 알려주는 자세 교정 루틴으로 흔들림 없는 스윙을 만들어보세요.',
    date: '2025-01-25',
    readTime: '6분',
    slug: 'forehand-body-balance',
    tags: ['포핸드', '스윙자세', '테니스레슨', '테니스기초', '코어훈련']
  },
  {
    id: '2',
    title: '테니스 초보가 라켓을 망치는 5가지 관리 습관 😬',
    category: '장비 가이드',
    description: '라켓은 당신의 손과 기억을 공유하는 도구입니다. 하지만 잘못된 습관 하나로 수명과 성능이 반토막 납니다.',
    date: '2025-01-25',
    readTime: '5분',
    slug: 'racket-care-mistakes',
    tags: ['테니스라켓', '테니스장비관리', '스트링보관', '라켓관리', '테니스초보']
  },
  {
    id: '2',
    title: '스트링 텐션, 숫자보다 감각이 중요하다',
    category: '장비 가이드',
    description: '라켓 텐션은 숫자가 아닌 감각의 문제입니다. 스윙 리듬과 타점 타이밍에 맞춰야 부상 없이 실력을 올릴 수 있습니다.',
    date: '2025-01-25',
    readTime: '7분',
    slug: 'string-tension-feel-guide',
    tags: ['스트링텐션', '테니스라켓', '테니스장비', '테니스초보']
  },
  {
    id: '2',
    title: '테니스 라켓 고를 때 가장 많이 하는 실수 5가지',
    category: '장비 가이드',
    description: '라켓은 단순한 장비가 아니라, 당신의 스윙을 기억하는 파트너입니다. 실수를 줄이고 몸에 맞는 라켓을 찾는 법을 정리했습니다.',
    date: '2025-01-25',
    readTime: '8분',
    slug: 'common-tennis-racket-mistakes',
    tags: ['테니스라켓', '라켓추천', '스트링텐션', '테니스장비']
  },
  {
    id: '2',
    title: '알카라즈 vs 시너: 차세대 라이벌전 심층 분석',
    category: '경기 분석',
    description: '두 영건의 기술적, 전술적 차이를 비교하고 앞으로의 테니스계를 이끌어갈 이들의 미래를 전망합니다.',
    date: '2025-01-25',
    readTime: '12분',
    slug: 'alcaraz-vs-sinner-analysis',
    tags: ['경기분석', '프로테니스', '알카라즈', '시너']
  },
  {
    id: '2',
    title: '2024년 최고의 테니스 라켓 TOP 5',
    category: '장비 리뷰',
    description: '초보자부터 상급자까지, 당신에게 꼭 맞는 인생 라켓을 찾을 수 있도록 상세한 리뷰와 추천 가이드를 제공합니다.',
    date: '2024-10-20',
    readTime: '5분',
    slug: 'best-tennis-rackets-2024',
    tags: ['라켓리뷰', '장비추천', '2024신제품']
  },
  {
    id: '3',
    title: '테니스 엘보우, 예방이 최선입니다',
    category: '건강 & 피트니스',
    description: '많은 동호인들이 겪는 테니스 엘보우의 원인과 증상, 그리고 효과적인 예방 스트레칭 방법을 소개합니다.',
    date: '2024-10-18',
    readTime: '6분',
    slug: 'tennis-elbow-prevention',
    tags: ['부상예방', '스트레칭', '테니스엘보우']
  },
  {
    id: '4',
    title: '서울 지역 테니스 스트링 텐션, 완벽 가이드',
    category: '가이드',
    description: '서울 지역 테니스 동호인들을 위한 스트링 텐션 설정 가이드와 전문점 추천을 제공합니다.',
    date: '2024-10-15',
    readTime: '8분',
    slug: 'seoul-string-tension-guide',
    tags: ['스트링텐션', '가이드', '서울지역']
  },
  {
    id: '5',
    title: 'NTRP 레벨별 연습 방법과 목표 설정',
    category: '연습법',
    description: '각 NTRP 레벨에 맞는 효과적인 연습 방법과 단계별 목표 설정 방법을 상세히 안내합니다.',
    date: '2024-10-12',
    readTime: '9분',
    slug: 'ntrp-level-practice-guide',
    tags: ['NTRP', '연습법', '목표설정']
  },
  {
    id: '6',
    title: '테니스 코트 종류별 플레이 전략',
    category: '전략',
    description: '클레이, 하드, 그래스 코트의 특성을 이해하고 각 코트에 맞는 플레이 전략을 배워보세요.',
    date: '2024-10-10',
    readTime: '6분',
    slug: 'tennis-court-strategies',
    tags: ['코트전략', '클레이', '하드코트', '그래스']
  }
];

// 카테고리 통합 매핑 (4~5개로 축소)
const mapCategory = (cat: string): '레슨/전략' | '장비' | '건강' | '분석' | '지역' => {
  const c = cat.toLowerCase();
  if (c.includes('레슨') || c.includes('연습') || c.includes('전략') || c.includes('멘탈')) return '레슨/전략';
  if (c.includes('장비') || c.includes('리뷰') || c.includes('가이드')) return '장비';
  if (c.includes('건강')) return '건강';
  if (c.includes('분석')) return '분석';
  if (c.includes('지역')) return '지역';
  return '레슨/전략';
};

const categories = (() => {
  const groups: { name: string; count: number }[] = [
    { name: '전체', count: blogPosts.length },
    { name: '레슨/전략', count: 0 },
    { name: '장비', count: 0 },
    { name: '건강', count: 0 },
    { name: '분석', count: 0 },
    { name: '지역', count: 0 }
  ];
  blogPosts.forEach(p => {
    const k = mapCategory(p.category);
    const idx = groups.findIndex(g => g.name === k);
    if (idx > -1) groups[idx].count += 1;
  });
  return groups;
})();

export default function BlogPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  
  // 페이지네이션 계산
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, endIndex);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-text-light mb-4">테니스 블로그</h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto">
          테니스 실력 향상을 위한 전문적인 정보와 팁을 제공합니다. 
          최신 경기 분석부터 장비 리뷰까지, 모든 것을 한 곳에서 확인하세요.
        </p>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category, index) => (
          <Badge 
            key={index} 
            variant="outline" 
            className="px-4 py-2 text-sm bg-content-dark border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
          >
            {category.name} ({category.count})
          </Badge>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="h-full bg-content-dark border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/20 text-primary">
                    {mapCategory(post.category)}
                  </Badge>
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-light group-hover:text-primary transition-colors mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-text-muted text-sm line-clamp-3 flex-grow mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-text-muted text-sm">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    자세히 보기
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-3">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-background-dark border-white/5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-12">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-content-dark border-white/10 hover:border-primary/50"
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
                    ? "bg-primary text-background-dark"
                    : "bg-content-dark border-white/10 hover:border-primary/50"
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
            className="bg-content-dark border-white/10 hover:border-primary/50"
          >
            다음
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      )}

      {/* Page Info */}
      <div className="text-center mt-6 text-text-muted text-sm">
        {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} / {blogPosts.length} 개의 글
      </div>

      {/* Newsletter Signup */}
      <Card className="mt-16 bg-content-dark border-white/10">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-text-light mb-4">
            최신 테니스 정보를 받아보세요
          </h3>
          <p className="text-text-muted mb-6">
            새로운 블로그 포스트와 테니스 팁을 이메일로 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="이메일 주소를 입력하세요"
              className="flex-1 px-4 py-2 bg-background-dark border border-white/10 rounded-lg text-text-light placeholder-text-muted focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary text-background-dark px-6">
              구독하기
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
