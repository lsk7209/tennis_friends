import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  tags: string[];
  content: string;
  author: string;
  summary: string;
  highlight: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 메타데이터 생성 함수
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // 해당 슬러그의 블로그 포스트 찾기
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return {
      title: '블로그를 찾을 수 없습니다 | TennisFriends',
      description: '요청하신 블로그 글을 찾을 수 없습니다.',
    };
  }

  return {
    title: `${post.title} | TennisFriends`,
    description: post.description,
    keywords: [...post.tags, '테니스', '블로그', '테니스 정보'],
    authors: [{ name: post.author || 'TennisFriends' }],
    creator: post.author || 'TennisFriends',
    publisher: 'TennisFriends',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `https://www.tennisfrens.com/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | TennisFriends`,
      description: post.description,
      url: `https://www.tennisfrens.com/blog/${slug}`,
      siteName: 'TennisFriends',
      locale: 'ko_KR',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'TennisFriends'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | TennisFriends`,
      description: post.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

const blogPosts: BlogPost[] = [
  {
    id: '14',
    title: '서울 최고의 테니스장 TOP 7 추천 🏟️',
    category: '지역 정보',
    description: '서울에서 좋은 테니스장이 어디 있나요? 가격도 합리적이고 시설도 좋은 곳을 찾고 있어요. 자신의 수준과 목적에 맞는 테니스장을 선택하세요.',
    date: '2025-01-26',
    readTime: '10분',
    slug: 'seoul-best-tennis-courts',
    tags: ['서울테니스장', '테니스장추천', '지역정보', '테니스시설'],
    author: 'TennisFriends 편집팀',
    summary: '서울 지역의 최고 테니스장 7곳을 가격, 시설, 접근성, 레벨별로 분석하여 추천합니다.',
    highlight: '서울에서 테니스를 즐기기 위한 최적의 장소를 찾아보세요. 초보자부터 상급자까지 모두 만족할 수 있는 테니스장을 소개합니다.',
    content: `
      <h2>서울 테니스장 선택 기준</h2>
      <p>서울에서 테니스장을 선택할 때는 가격, 시설, 접근성, 그리고 자신의 레벨에 맞는 코트를 고려해야 합니다.</p>
      
      <h2>TOP 7 테니스장 추천</h2>
      <h3>1. 올림픽공원 테니스장</h3>
      <p>올림픽 규격의 최고 시설과 합리적인 가격으로 많은 동호인들이 찾는 곳입니다.</p>
      
      <h3>2. 잠실 테니스장</h3>
      <p>지하철 접근성이 좋고 실내/야외 코트를 모두 갖춘 종합 테니스장입니다.</p>
      
      <h3>3. 한강공원 테니스장</h3>
      <p>한강을 바라보며 즐기는 야외 테니스의 매력을 느낄 수 있습니다.</p>
      
      <h2>레벨별 추천</h2>
      <p>초보자부터 상급자까지 각자의 레벨에 맞는 테니스장을 선택하는 것이 중요합니다.</p>
    `
  },
  {
    id: '13',
    title: '라켓 스트링 종류별 특징과 선택 가이드 🧵',
    category: '장비 가이드',
    description: '어떤 스트링을 써야 할지 모르겠어요? 폴리, 나일론, 자연거트... 차이가 뭔가요? 자신의 플레이 스타일에 맞는 스트링을 선택하세요.',
    date: '2025-01-26',
    readTime: '9분',
    slug: 'tennis-string-guide',
    tags: ['테니스스트링', '스트링선택', '장비가이드', '테니스장비'],
    author: 'TennisFriends 편집팀',
    summary: '테니스 스트링의 종류와 특징을 분석하고 자신의 플레이 스타일에 맞는 스트링 선택 가이드를 제공합니다.',
    highlight: '올바른 스트링 선택은 라켓의 성능을 극대화하고 부상을 예방하는 핵심 요소입니다.',
    content: `
      <h2>테니스 스트링의 종류</h2>
      <p>테니스 스트링은 크게 자연거트, 나일론, 폴리에스터, 케블라 등으로 나뉩니다.</p>
      
      <h2>각 스트링의 특징</h2>
      <h3>자연거트 (Natural Gut)</h3>
      <p>가장 부드러운 타구감과 뛰어난 파워를 제공하지만 비싸고 내구성이 떨어집니다.</p>
      
      <h3>나일론 (Nylon)</h3>
      <p>가성비가 좋고 내구성이 우수하여 초보자에게 추천됩니다.</p>
      
      <h3>폴리에스터 (Polyester)</h3>
      <p>강한 스핀과 컨트롤을 제공하지만 부상 위험이 있습니다.</p>
      
      <h2>플레이 스타일별 추천</h2>
      <p>자신의 플레이 스타일에 맞는 스트링을 선택하는 것이 중요합니다.</p>
    `
  },
  {
    id: '12',
    title: '테니스 부상 없는 겨울 훈련법 ❄️',
    category: '건강 & 피트니스',
    description: '겨울에 테니스하면 부상 위험이 높아요. 추운 날씨에 몸이 잘 안 풀려요. 하지만 문제는 날씨가 아니라 준비 운동과 훈련 방법입니다.',
    date: '2025-01-26',
    readTime: '8분',
    slug: 'winter-tennis-training',
    tags: ['겨울테니스', '부상예방', '테니스훈련', '건강관리'],
    author: 'TennisFriends 편집팀',
    summary: '겨울철 테니스 훈련 시 부상을 예방하고 효과적으로 실력을 향상시키는 방법을 제시합니다.',
    highlight: '겨울은 테니스 실력을 키우는 황금기입니다. 올바른 방법만 알면 부상 없이 실력을 크게 향상시킬 수 있습니다.',
    content: `
      <h2>겨울 테니스의 특징</h2>
      <p>겨울철에는 공기 밀도가 높아져 공이 더 빨리 날아가고, 근육이 경직되어 부상 위험이 높아집니다.</p>
      
      <h2>부상 예방 워밍업</h2>
      <h3>실내 워밍업</h3>
      <p>코트에 도착하기 전 실내에서 충분한 워밍업을 해야 합니다.</p>
      
      <h3>동적 스트레칭</h3>
      <p>정적 스트레칭보다 동적 스트레칭이 겨울철에 더 효과적입니다.</p>
      
      <h2>겨울 훈련 루틴</h2>
      <p>체계적인 훈련 계획을 세워 겨울을 활용하세요.</p>
    `
  },
  {
    id: '11',
    title: '테니스 경기 중 긴장감을 이기는 5가지 멘탈 기법 🧠',
    category: '멘탈 트레이닝',
    description: '경기 중에 손이 떨려요. 중요한 포인트에서 실수해요. 하지만 문제는 대부분 기술이 아니라 멘탈 컨트롤입니다. 테니스는 90% 멘탈 게임입니다.',
    date: '2025-01-26',
    readTime: '7분',
    slug: 'tennis-mental-techniques',
    tags: ['멘탈트레이닝', '테니스심리', '긴장감극복', '테니스멘탈'],
    author: 'TennisFriends 편집팀',
    summary: '테니스 경기에서 긴장감을 극복하고 최상의 컨디션을 유지하는 5가지 멘탈 기법을 소개합니다.',
    highlight: '테니스는 90% 멘탈 게임입니다. 기술보다 마음가짐이 승부를 좌우합니다.',
    content: `
      <h2>테니스와 멘탈의 관계</h2>
      <p>테니스는 기술과 멘탈이 모두 중요한 스포츠입니다. 특히 경기 중 긴장감은 실력 발휘를 방해하는 주요 요인입니다.</p>
      
      <h2>5가지 멘탈 기법</h2>
      <h3>1. 호흡 조절법</h3>
      <p>깊고 천천히 숨을 쉬며 마음을 진정시키는 방법입니다.</p>
      
      <h3>2. 긍정적 자기대화</h3>
      <p>자신에게 긍정적인 메시지를 전달하여 자신감을 높입니다.</p>
      
      <h3>3. 루틴 만들기</h3>
      <p>경기 전후 일정한 루틴을 만들어 안정감을 얻습니다.</p>
      
      <h2>실전 적용법</h2>
      <p>이론만으로는 부족합니다. 실제 경기에서 연습해야 합니다.</p>
    `
  },
  {
    id: '10',
    title: '백핸드 스윙이 불안할 때, 이 3가지를 점검하라 🎯',
    category: '테니스 레슨',
    description: '백핸드가 자꾸 아웃이에요. 임팩트가 불안해요. 하지만 문제는 대부분 라켓이 아니라 몸의 회전과 발의 위치입니다. 백핸드는 포핸드보다 더 정교한 타이밍이 필요한 기술입니다.',
    date: '2025-01-26',
    readTime: '6분',
    slug: 'backhand-swing-correction',
    tags: ['백핸드', '스윙교정', '테니스레슨', '테니스기초'],
    author: 'TennisFriends 편집팀',
    summary: '백핸드 스윙의 불안정함을 해결하기 위한 3가지 핵심 체크 포인트를 제시합니다.',
    highlight: '백핸드는 포핸드보다 정교한 타이밍이 필요한 기술입니다. 올바른 자세와 연습이 중요합니다.',
    content: `
      <h2>백핸드의 중요성</h2>
      <p>백핸드는 포핸드만큼 중요한 기본기입니다. 안정적인 백핸드는 경기력 향상의 핵심입니다.</p>
      
      <h2>3가지 체크 포인트</h2>
      <h3>1. 발의 위치</h3>
      <p>발의 위치가 틀리면 스윙도 틀어집니다. 올바른 스텐스를 확인하세요.</p>
      
      <h3>2. 몸의 회전</h3>
      <p>몸의 회전 타이밍을 맞추는 것이 중요합니다.</p>
      
      <h3>3. 그립 압력</h3>
      <p>그립을 너무 세게 잡으면 스윙이 경직됩니다.</p>
      
      <h2>연습 방법</h2>
      <p>체계적인 연습으로 안정적인 백핸드를 만들어보세요.</p>
    `
  },
  {
    id: '1',
    title: '라켓 무게 하나로 달라지는 경기 스타일 3가지 ⚖️',
    category: '장비 가이드',
    description: '라켓의 무게는 단순한 숫자가 아닙니다. 10g의 차이가 스윙 속도, 파워, 컨트롤을 모두 바꿉니다. 당신의 실력과 스타일에 맞는 무게를 찾아보세요.',
    date: '2025-01-25',
    readTime: '8분',
    slug: 'racket-weight-styles',
    tags: ['테니스라켓', '라켓무게', '테니스스타일', '테니스장비', 'NTRP'],
    author: 'TennisFriends 편집팀',
    summary: '라켓 무게에 따른 경기 스타일의 변화와 자신에게 맞는 무게 선택법을 제시합니다.',
    highlight: '라켓 무게는 단순한 숫자가 아닙니다. 10g의 차이가 전체적인 경기 스타일을 바꿉니다.',
    content: `
      <h2>라켓 무게의 중요성</h2>
      <p>라켓 무게는 스윙 속도, 파워, 컨트롤에 직접적인 영향을 미칩니다.</p>
      
      <h2>3가지 스타일</h2>
      <h3>285g - 스피드형</h3>
      <p>빠르고 가벼운 스윙을 원하는 플레이어에게 적합합니다.</p>
      
      <h3>295g - 올라운드형</h3>
      <p>파워와 컨트롤의 균형을 원하는 플레이어에게 추천합니다.</p>
      
      <h3>305g - 파워형</h3>
      <p>강력한 파워를 원하는 플레이어에게 적합합니다.</p>
      
      <h2>선택 가이드</h2>
      <p>자신의 체력과 플레이 스타일에 맞는 무게를 선택하세요.</p>
    `
  },
  {
    id: '2',
    title: '그립 교체, 너무 늦게 하면 손목 나간다! ⚠️',
    category: '장비 관리',
    description: '라켓보다 손이 먼저 무너집니다. 그립이 미끄러지면 스윙이 흔들리고, 결국 손목이 상합니다. 코치가 알려주는 그립 교체 주기와 올바른 관리법을 확인하세요.',
    date: '2025-01-25',
    readTime: '7분',
    slug: 'tennis-grip-replacement',
    tags: ['테니스그립', '그립교체', '손목부상', '테니스장비관리', '테니스초보'],
    author: 'TennisFriends 편집팀',
    summary: '그립 교체의 중요성과 올바른 교체 주기, 그리고 손목 부상 예방법을 제시합니다.',
    highlight: '라켓보다 손이 먼저 무너집니다. 그립 관리는 부상 예방의 핵심입니다.',
    content: `
      <h2>그립 교체의 중요성</h2>
      <p>그립이 미끄러지면 스윙이 불안정해지고 손목 부상의 원인이 됩니다.</p>
      
      <h2>교체 주기</h2>
      <h3>일반적인 교체 주기</h3>
      <p>월 1-2회 정도 교체하는 것이 적당합니다.</p>
      
      <h3>교체 신호</h3>
      <p>그립이 미끄러지거나 찢어지기 시작하면 교체해야 합니다.</p>
      
      <h2>올바른 교체법</h3>
      <p>정확한 방법으로 교체해야 그립의 성능을 최대화할 수 있습니다.</p>
    `
  },
  {
    id: '3',
    title: '포핸드 스윙이 흔들릴 때, 라켓보다 몸을 먼저 봐라 💪',
    category: '테니스 레슨',
    description: '라켓이 아니라 몸이 흔들리는 겁니다. 포핸드 스윙의 핵심은 손이 아니라 코어입니다. 코치가 알려주는 자세 교정 루틴으로 흔들림 없는 스윙을 만들어보세요.',
    date: '2025-01-25',
    readTime: '6분',
    slug: 'forehand-body-balance',
    tags: ['포핸드', '스윙자세', '테니스레슨', '테니스기초', '코어훈련'],
    author: 'TennisFriends 편집팀',
    summary: '포핸드 스윙의 불안정함을 해결하기 위한 몸의 균형과 코어 강화 방법을 제시합니다.',
    highlight: '라켓이 아니라 몸이 흔들리는 겁니다. 포핸드 스윙의 핵심은 코어입니다.',
    content: `
      <h2>포핸드 스윙의 핵심</h2>
      <p>포핸드 스윙에서 가장 중요한 것은 몸의 균형과 코어의 안정성입니다.</p>
      
      <h2>흔들림의 원인</h2>
      <h3>코어 약화</h3>
      <p>복부 근육이 약하면 스윙이 불안정해집니다.</p>
      
      <h3>발의 위치</h3>
      <p>발의 위치가 잘못되면 전체적인 균형이 무너집니다.</p>
      
      <h2>교정 루틴</h2>
      <p>체계적인 연습으로 안정적인 포핸드 스윙을 만들어보세요.</p>
    `
  },
  {
    id: '4',
    title: '테니스 초보가 라켓을 망치는 5가지 관리 습관 😬',
    category: '장비 가이드',
    description: '라켓은 당신의 손과 기억을 공유하는 도구입니다. 하지만 잘못된 습관 하나로 수명과 성능이 반토막 납니다.',
    date: '2025-01-25',
    readTime: '5분',
    slug: 'racket-care-mistakes',
    tags: ['테니스라켓', '테니스장비관리', '스트링보관', '라켓관리', '테니스초보'],
    author: 'TennisFriends 편집팀',
    summary: '테니스 초보자들이 자주 하는 라켓 관리 실수 5가지를 소개하고 올바른 관리법을 제시합니다.',
    highlight: '라켓은 당신의 손과 기억을 공유하는 도구입니다. 올바른 관리가 중요합니다.',
    content: `
      <h2>라켓 관리의 중요성</h2>
      <p>올바른 라켓 관리로 성능을 유지하고 수명을 연장할 수 있습니다.</p>
      
      <h2>5가지 관리 실수</h2>
      <h3>1. 잘못된 보관법</h3>
      <p>라켓을 잘못된 곳에 보관하면 변형될 수 있습니다.</p>
      
      <h3>2. 스트링 관리 소홀</h3>
      <p>스트링을 제대로 관리하지 않으면 성능이 떨어집니다.</p>
      
      <h2>올바른 관리법</h2>
      <p>체계적인 관리로 라켓의 성능을 최대화하세요.</p>
    `
  },
  {
    id: '5',
    title: '스트링 텐션, 숫자보다 감각이 중요하다',
    category: '장비 가이드',
    description: '라켓 텐션은 숫자가 아닌 감각의 문제입니다. 스윙 리듬과 타점 타이밍에 맞춰야 부상 없이 실력을 올릴 수 있습니다.',
    date: '2025-01-25',
    readTime: '7분',
    slug: 'string-tension-feel-guide',
    tags: ['스트링텐션', '테니스라켓', '테니스장비', '테니스초보'],
    author: 'TennisFriends 편집팀',
    summary: '스트링 텐션을 숫자가 아닌 감각으로 이해하고 자신에게 맞는 텐션을 찾는 방법을 제시합니다.',
    highlight: '라켓 텐션은 숫자가 아닌 감각의 문제입니다. 자신의 스윙에 맞는 텐션을 찾아야 합니다.',
    content: `
      <h2>스트링 텐션의 이해</h2>
      <p>스트링 텐션은 단순한 숫자가 아니라 자신의 스윙과 타점에 맞는 감각입니다.</p>
      
      <h2>감각적 접근법</h2>
      <h3>스윙 리듬</h3>
      <p>자신의 스윙 리듬에 맞는 텐션을 찾아야 합니다.</p>
      
      <h3>타점 타이밍</h3>
      <p>타점에서의 느낌이 가장 중요합니다.</p>
      
      <h2>텐션 찾기</h2>
      <p>체계적인 방법으로 자신에게 맞는 텐션을 찾아보세요.</p>
    `
  },
  {
    id: '6',
    title: '테니스 라켓 고를 때 가장 많이 하는 실수 5가지',
    category: '장비 가이드',
    description: '라켓은 단순한 장비가 아니라, 당신의 스윙을 기억하는 파트너입니다. 실수를 줄이고 몸에 맞는 라켓을 찾는 법을 정리했습니다.',
    date: '2025-01-25',
    readTime: '8분',
    slug: 'common-tennis-racket-mistakes',
    tags: ['테니스라켓', '라켓추천', '스트링텐션', '테니스장비'],
    author: 'TennisFriends 편집팀',
    summary: '라켓 선택 시 자주 하는 실수 5가지를 소개하고 올바른 선택 방법을 제시합니다.',
    highlight: '라켓은 당신의 스윙을 기억하는 파트너입니다. 올바른 선택이 중요합니다.',
    content: `
      <h2>라켓 선택의 중요성</h2>
      <p>올바른 라켓 선택은 실력 향상과 부상 예방의 핵심입니다.</p>
      
      <h2>5가지 실수</h2>
      <h3>1. 브랜드만 보고 선택</h3>
      <p>브랜드보다는 자신의 스타일에 맞는 라켓을 선택해야 합니다.</p>
      
      <h3>2. 가격만 고려</h3>
      <p>비싼 라켓이 항상 좋은 것은 아닙니다.</p>
      
      <h2>올바른 선택법</h2>
      <p>체계적인 방법으로 자신에게 맞는 라켓을 찾아보세요.</p>
    `
  },
  {
    id: '7',
    title: '알카라즈 vs 시너: 차세대 라이벌전 심층 분석',
    category: '경기 분석',
    description: '두 영건의 기술적, 전술적 차이를 비교하고 앞으로의 테니스계를 이끌어갈 이들의 미래를 전망합니다.',
    date: '2025-01-25',
    readTime: '12분',
    slug: 'alcaraz-vs-sinner-analysis',
    tags: ['경기분석', '프로테니스', '알카라즈', '시너'],
    author: 'TennisFriends 편집팀',
    summary: '알카라즈와 시너의 최근 경기를 바탕으로 두 선수의 기술적 특징과 전술적 차이점을 심층 분석합니다.',
    highlight: '알카라즈의 강력한 포핸드와 시너의 정교한 백핸드가 만나 펼치는 차세대 테니스의 새로운 패러다임을 확인할 수 있습니다.',
    content: `
      <h2>두 영건의 만남</h2>
      <p>2024년 테니스계를 뜨겁게 달구고 있는 두 젊은 천재, 카를로스 알카라즈와 야닉 시너의 경기는 단순한 경기를 넘어서 차세대 테니스의 방향을 제시하고 있습니다.</p>
      
      <h2>기술적 특징 비교</h2>
      <h3>알카라즈의 강점</h3>
      <ul>
        <li>강력한 포핸드 스트로크</li>
        <li>탁월한 네트 플레이</li>
        <li>다양한 스핀 활용</li>
        <li>놀라운 순간 속도</li>
      </ul>
      
      <h3>시너의 강점</h3>
      <ul>
        <li>정교한 백핸드</li>
        <li>일관성 있는 플레이</li>
        <li>뛰어난 멘탈</li>
        <li>효율적인 움직임</li>
      </ul>
      
      <h2>전술적 차이점</h2>
      <p>알카라즈는 공격적인 플레이를 통해 상대를 압박하는 반면, 시너는 안정적인 플레이로 상대의 실수를 유도하는 전술을 사용합니다.</p>
      
      <h2>미래 전망</h2>
      <p>두 선수 모두 아직 20대 초반의 젊은 나이로, 앞으로 10년 이상 테니스계를 이끌어갈 것으로 예상됩니다. 이들의 경쟁은 테니스 팬들에게 지속적인 즐거움을 선사할 것입니다.</p>
    `
  },
  {
    id: '8',
    title: '2024년 최고의 테니스 라켓 TOP 5',
    category: '장비 리뷰',
    description: '초보자부터 상급자까지, 당신에게 꼭 맞는 인생 라켓을 찾을 수 있도록 상세한 리뷰와 추천 가이드를 제공합니다.',
    date: '2024-10-20',
    readTime: '5분',
    slug: 'best-tennis-rackets-2024',
    tags: ['라켓리뷰', '장비추천', '2024신제품'],
    author: 'TennisFriends 편집팀',
    summary: '2024년 출시된 최고의 테니스 라켓들을 성능, 가격, 적합한 플레이어 레벨별로 분석하여 추천합니다.',
    highlight: '각 라켓의 특성을 정확히 파악하고 자신의 플레이 스타일에 맞는 라켓을 선택하는 것이 중요합니다.',
    content: `
      <h2>2024년 테니스 라켓 트렌드</h2>
      <p>올해는 특히 라켓 기술의 발전으로 인해 더욱 정교하고 강력한 라켓들이 출시되었습니다.</p>
      
      <h2>TOP 5 라켓 리뷰</h2>
      <h3>1. Wilson Pro Staff 97</h3>
      <p>고급 플레이어를 위한 정밀한 컨트롤과 파워를 제공하는 라켓입니다.</p>
      
      <h3>2. Babolat Pure Drive 2024</h3>
      <p>올라운드 플레이어에게 적합한 균형잡힌 성능을 제공합니다.</p>
      
      <h3>3. Head Speed Pro</h3>
      <p>빠른 스윙 스피드를 원하는 플레이어에게 최적화된 라켓입니다.</p>
      
      <h3>4. Yonex EZONE 98</h3>
      <p>편안한 타구감과 뛰어난 파워를 동시에 제공하는 라켓입니다.</p>
      
      <h3>5. Tecnifibre TFight 305</h3>
      <p>가성비가 뛰어난 중급자용 라켓으로 추천합니다.</p>
      
      <h2>라켓 선택 가이드</h2>
      <p>자신의 플레이 스타일과 레벨에 맞는 라켓을 선택하는 것이 가장 중요합니다.</p>
    `
  },
  {
    id: '9',
    title: '테니스 엘보우, 예방이 최선입니다',
    category: '건강 & 피트니스',
    description: '많은 동호인들이 겪는 테니스 엘보우의 원인과 증상, 그리고 효과적인 예방 스트레칭 방법을 소개합니다.',
    date: '2024-10-18',
    readTime: '6분',
    slug: 'tennis-elbow-prevention',
    tags: ['부상예방', '스트레칭', '테니스엘보우'],
    author: 'TennisFriends 편집팀',
    summary: '테니스 엘보우의 원인과 증상을 분석하고 효과적인 예방 및 치료 방법을 제시합니다.',
    highlight: '테니스 엘보우는 예방이 최선입니다. 올바른 자세와 스트레칭이 중요합니다.',
    content: `
      <h2>테니스 엘보우란?</h2>
      <p>테니스 엘보우는 팔꿈치 주변의 근육과 힘줄에 과도한 부하가 가해져 발생하는 질환입니다.</p>
      
      <h2>원인과 증상</h2>
      <h3>주요 원인</h3>
      <p>잘못된 스윙 자세와 과도한 연습이 주요 원인입니다.</p>
      
      <h3>증상</h3>
      <p>팔꿈치 통증과 손목 움직임 제한이 주요 증상입니다.</p>
      
      <h2>예방법</h2>
      <p>올바른 자세와 정기적인 스트레칭으로 예방할 수 있습니다.</p>
    `
  },
  {
    id: '10',
    title: '서울 지역 테니스 스트링 텐션, 완벽 가이드',
    category: '가이드',
    description: '서울 지역 테니스 동호인들을 위한 스트링 텐션 설정 가이드와 전문점 추천을 제공합니다.',
    date: '2024-10-15',
    readTime: '8분',
    slug: 'seoul-string-tension-guide',
    tags: ['스트링텐션', '가이드', '서울지역'],
    author: 'TennisFriends 편집팀',
    summary: '서울 지역의 기후와 환경을 고려한 스트링 텐션 설정 가이드와 전문점 정보를 제공합니다.',
    highlight: '서울의 기후와 환경에 맞는 스트링 텐션 설정이 중요합니다.',
    content: `
      <h2>서울 지역 특성</h2>
      <p>서울의 기후와 환경은 스트링 텐션 설정에 영향을 미칩니다.</p>
      
      <h2>텐션 설정 가이드</h2>
      <h3>계절별 조정</h3>
      <p>여름과 겨울의 온도 차이를 고려해야 합니다.</p>
      
      <h3>코트별 차이</h3>
      <p>실내와 야외 코트의 차이를 고려해야 합니다.</p>
      
      <h2>전문점 추천</h2>
      <p>서울 지역의 신뢰할 수 있는 스트링 전문점을 소개합니다.</p>
    `
  },
  {
    id: '11',
    title: 'NTRP 레벨별 연습 방법과 목표 설정',
    category: '연습법',
    description: '각 NTRP 레벨에 맞는 효과적인 연습 방법과 단계별 목표 설정 방법을 상세히 안내합니다.',
    date: '2024-10-12',
    readTime: '9분',
    slug: 'ntrp-level-practice-guide',
    tags: ['NTRP', '연습법', '목표설정'],
    author: 'TennisFriends 편집팀',
    summary: 'NTRP 레벨별로 적합한 연습 방법과 목표 설정 방법을 제시하여 체계적인 실력 향상을 돕습니다.',
    highlight: 'NTRP 레벨에 맞는 연습이 가장 효과적입니다. 체계적인 접근이 중요합니다.',
    content: `
      <h2>NTRP 시스템 이해</h2>
      <p>NTRP는 테니스 실력을 객관적으로 평가하는 시스템입니다.</p>
      
      <h2>레벨별 연습법</h2>
      <h3>초급 (1.0-2.5)</h3>
      <p>기본기 연습에 집중해야 합니다.</p>
      
      <h3>중급 (3.0-4.0)</h3>
      <p>전술과 전략을 배워야 합니다.</p>
      
      <h2>목표 설정</h2>
      <p>현실적이고 달성 가능한 목표를 설정하는 것이 중요합니다.</p>
    `
  },
  {
    id: '12',
    title: '테니스 코트 종류별 플레이 전략',
    category: '전략',
    description: '클레이, 하드, 그래스 코트의 특성을 이해하고 각 코트에 맞는 플레이 전략을 배워보세요.',
    date: '2024-10-10',
    readTime: '6분',
    slug: 'tennis-court-strategies',
    tags: ['코트전략', '클레이', '하드코트', '그래스'],
    author: 'TennisFriends 편집팀',
    summary: '테니스 코트 종류별 특성을 분석하고 각 코트에 최적화된 플레이 전략을 제시합니다.',
    highlight: '코트 종류에 따라 플레이 전략을 바꿔야 합니다. 적응력이 중요합니다.',
    content: `
      <h2>코트 종류의 특성</h2>
      <p>각 코트 종류는 공의 바운드와 속도에 영향을 미칩니다.</p>
      
      <h2>코트별 전략</h2>
      <h3>클레이 코트</h3>
      <p>인내심과 지구력이 중요한 코트입니다.</p>
      
      <h3>하드 코트</h3>
      <p>빠른 공격과 정확한 샷이 중요한 코트입니다.</p>
      
      <h3>그래스 코트</h3>
      <p>빠른 발놀림과 네트 플레이가 중요한 코트입니다.</p>
      
      <h2>적응 방법</h2>
      <p>각 코트에 빠르게 적응하는 방법을 배워보세요.</p>
    `
  }
];

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-text-light mb-4">포스트를 찾을 수 없습니다</h1>
        <Link href="/blog">
          <Button variant="outline" className="bg-content-dark border-white/10">
            블로그로 돌아가기
          </Button>
        </Link>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      {/* Back Button */}
      <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-text-light transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        블로그로 돌아가기
      </Link>

      {/* Article Header */}
      <article className="prose prose-invert max-w-none">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary/20 text-primary">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-sm text-text-muted">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-text-light mb-4">
            {post.title}
          </h1>
          
          <p className="text-lg text-text-muted mb-6">
            {post.description}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted">
              작성자: {post.author}
            </div>
            <Button variant="outline" size="sm" className="bg-content-dark border-white/10">
              <Share2 className="w-4 h-4 mr-2" />
              공유하기
            </Button>
          </div>
        </header>

        {/* Summary Box */}
        <div className="bg-content-dark border border-white/10 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-primary mb-3">요약</h2>
          <p className="text-text-light">{post.summary}</p>
        </div>

        {/* Highlight Box */}
        <div className="bg-primary/10 border-2 border-primary/80 rounded-lg p-6 mb-8">
          <p className="text-text-light font-medium">{post.highlight}</p>
        </div>

        {/* Table of Contents */}
        <details className="group rounded-lg border border-white/10 bg-content-dark mb-8">
          <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-bold text-text-light">
            <span>목차</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-open:rotate-90" />
          </summary>
          <div className="border-t border-white/10 p-4">
            <ul className="list-none space-y-2">
              <li><a href="#section1" className="font-medium hover:text-primary">두 영건의 만남</a></li>
              <li><a href="#section2" className="font-medium hover:text-primary">기술적 특징 비교</a></li>
              <li><a href="#section3" className="font-medium hover:text-primary">전술적 차이점</a></li>
              <li><a href="#section4" className="font-medium hover:text-primary">미래 전망</a></li>
            </ul>
          </div>
        </details>

        {/* Article Content */}
        <div 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-8">
          {post.tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-background-dark border-white/5">
              {tag}
            </Badge>
          ))}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-text-light mb-6">관련 글 더보기</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                <Card className="h-full bg-content-dark border-white/10 hover:border-primary/50 transition-all group cursor-pointer">
                  <CardContent className="p-4">
                    <Badge className="bg-primary/20 text-primary mb-2">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="font-bold text-text-light group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-text-muted text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <Card className="mt-16 bg-primary/10 border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-xl font-bold text-text-light mb-4">
            더 많은 테니스 정보가 필요하신가요?
          </h3>
          <p className="text-text-muted mb-6">
            TennisFriends의 다양한 도구와 정보를 확인해보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/utility/ntrp-test">
              <Button className="bg-primary text-background-dark">
                NTRP 실력 테스트
              </Button>
            </Link>
            <Link href="/utility/string-tension">
              <Button variant="outline" className="bg-content-dark border-white/10">
                스트링 텐션 계산기
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
