const fs = require('fs');
const path = require('path');

const posts = [
    // --- Batch 1: Popular Players ---
    {
        slug: 'iga-swiatek',
        title: '이가 시비옹테크: 무결점의 테니스 여제',
        description: '강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크의 경기 스타일, 성장 과정, 그리고 그녀가 이룬 기록들을 분석합니다.',
        keywords: ['테니스', '이가 시비옹테크', 'Iga Swiatek', 'WTA', '선수 프로필'],
        category: 'Player'
    },
    {
        slug: 'aryna-sabalenka',
        title: '아리나 사발렌카: 파워 테니스의 정점',
        description: '폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 다룹니다.',
        keywords: ['테니스', '아리나 사발렌카', 'Aryna Sabalenka', 'WTA', '강서브'],
        category: 'Player'
    },
    {
        slug: 'coco-gauff',
        title: '코코 고프: 미국의 차세대 슈퍼스타',
        description: '10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 강력한 백핸드, 그리고 끊임없이 진화하는 그녀의 테니스 세계를 조명합니다.',
        keywords: ['테니스', '코코 고프', 'Coco Gauff', 'US 오픈', '신성'],
        category: 'Player'
    },
    {
        slug: 'elena-rybakina',
        title: '엘레나 리바키나: 차가운 아이스 퀸의 플레이',
        description: '감정을 드러내지 않는 포커페이스와 우아한 위너. 엘레나 리바키나의 간결한 스윙 메커니즘과 강력한 서브의 비결을 파헤칩니다.',
        keywords: ['테니스', '엘레나 리바키나', 'Elena Rybakina', 'Wimbledon', '서브 퀸'],
        category: 'Player'
    },
    {
        slug: 'nick-kyrgios',
        title: '닉 키리오스: 코트 위의 악동이자 천재',
        description: '예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤에 숨겨진 테니스 철학, 그리고 논란과 매력을 동시에 탐구합니다.',
        keywords: ['테니스', '닉 키리오스', 'Nick Kyrgios', '트릭샷', '악동'],
        category: 'Player'
    },
    {
        slug: 'alexander-bublik',
        title: '알렉산더 부블릭: 언더암 서브와 창의성',
        description: '테니스를 즐기는 방식이 남다른 알렉산더 부블릭. 언더암 서브, 변칙 플레이, 그리고 그가 추구하는 창의적인 테니스의 세계.',
        keywords: ['테니스', '알렉산더 부블릭', 'Alexander Bublik', '언더암 서브', '변칙'],
        category: 'Player'
    },
    {
        slug: 'felix-auger-aliassime',
        title: '펠릭스 오제-알리아심: 캐나다의 테니스 희망',
        description: '성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다.',
        keywords: ['테니스', '펠릭스 오제-알리아심', 'Felix Auger-Aliassime', '캐나다', '유망주'],
        category: 'Player'
    },
    {
        slug: 'denis-shapovalov',
        title: '데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만',
        description: '폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스.',
        keywords: ['테니스', '데니스 샤포발로프', 'Denis Shapovalov', '원핸드 백핸드', '왼손잡이'],
        category: 'Player'
    },
    {
        slug: 'ons-jabeur',
        title: '온스 자베르: 튀니지의 마법사',
        description: '다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르. 아랍 테니스의 역사를 쓰고 있는 그녀의 창의적인 전술을 분석합니다.',
        keywords: ['테니스', '온스 자베르', 'Ons Jabeur', '드롭샷', '튀니지'],
        category: 'Player'
    },
    {
        slug: 'emma-raducanu',
        title: '엠마 라두카누: 신데렐라 스토리 그 후',
        description: '예선 통과자 최초의 US 오픈 우승 기적. 엠마 라두카누의 스타일과 부상 극복, 그리고 다시 정상에 도전하는 여정을 다룹니다.',
        keywords: ['테니스', '엠마 라두카누', 'Emma Raducanu', 'US 오픈', '신데렐라'],
        category: 'Player'
    },

    // --- Batch 2: Tactics & Strategy ---
    {
        slug: 'tennis-strategy-beat-pusher',
        title: '일명 \'푸셔(Pusher)\'를 이기는 5가지 전략',
        description: '실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.',
        keywords: ['테니스 전술', '푸셔', 'Pusher', '연타', '멘탈 관리'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-strategy-vs-lefty',
        title: '왼손잡이 상대 공략법 (Lefty 대응 전술)',
        description: '반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.',
        keywords: ['테니스 전술', '왼손잡이', 'Lefty', '서브 리턴', '공략법'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-windy-condition-tips',
        title: '바람 부는 날 테니스 잘 치는 법',
        description: '불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.',
        keywords: ['테니스 팁', '바람', '날씨', '풋워크', '야외 테니스'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-drop-shot-mastery',
        title: '드롭샷 마스터하기: 타이밍과 위장술',
        description: '상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.',
        keywords: ['테니스 기술', '드롭샷', '전술', '터치', '슬라이스'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-lob-defense-offense',
        title: '로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브',
        description: '위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.',
        keywords: ['테니스 기술', '로브', 'Lob', '탑스핀 로브', '수비'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-overhead-smash-guide',
        title: '스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)',
        description: '가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.',
        keywords: ['테니스 기술', '스매싱', '오버헤드', 'Smash', '결정구'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-slice-backhand-mastery',
        title: '슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)',
        description: '낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.',
        keywords: ['테니스 기술', '슬라이스', '백핸드', 'Slice', '페이스 조절'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-return-of-serve-strategy',
        title: '서브 리턴 전략: 서버의 구질 읽는 법',
        description: '게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.',
        keywords: ['테니스 전술', '리턴', 'Return', '서브 공략', '브레이크'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-net-play-positioning',
        title: '네트 플레이의 정석: 어프로치 샷과 위치 선정',
        description: '발리는 손이 아닌 발로 합니다. 네트 점령을 위한 어프로치 샷의 선택과, 앵글을 차단하는 최적의 포지셔닝 가이드.',
        keywords: ['테니스 전술', '발리', '네트 플레이', '포지셔닝', '복식'],
        category: 'Strategy'
    },
    {
        slug: 'tennis-court-surfaces-explained',
        title: '클레이 코트 vs 하드 코트: 움직임과 전략의 차이',
        description: '바운드와 속도가 다른 코트 표면. 하드, 클레이, 잔디 코트 각각에 맞는 풋워크와 전술적 변화를 이해합니다.',
        keywords: ['테니스 상식', '코트 종류', '하드 코트', '클레이 코트', '전략'],
        category: 'Strategy'
    },

    // --- Batch 3: Equipment & Insight ---
    {
        slug: 'tennis-string-tension-guide',
        title: '스트링 텐션의 비밀: 높게? 낮게?',
        description: '텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.',
        keywords: ['테니스 장비', '스트링 텐션', '라켓 수리', '컨트롤', '파워'],
        category: 'Equipment'
    },
    {
        slug: 'tennis-hybrid-string-setup',
        title: '하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)',
        description: '선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.',
        keywords: ['테니스 장비', '하이브리드 스트링', '폴리', '인조쉽', '커스텀'],
        category: 'Equipment'
    },
    {
        slug: 'tennis-grip-size-selection',
        title: '그립 두께와 사이즈 선택의 중요성',
        description: '너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.',
        keywords: ['테니스 장비', '그립 사이즈', '라켓 그립', '부상 방지', '튜닝'],
        category: 'Equipment'
    },
    {
        slug: 'tennis-overgrip-guide',
        title: '오버그립 교체 주기와 종류(건식/습식) 추천',
        description: '손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.',
        keywords: ['테니스 장비', '오버그립', '그립 테이프', '손땀', '용품 추천'],
        category: 'Equipment'
    },
    {
        slug: 'tennis-dampener-effectiveness',
        title: '댐퍼(Dampener)의 효과: 진동 감소와 타구감',
        description: '작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.',
        keywords: ['테니스 장비', '댐퍼', '진동 방지', '엘보링', '타구음'],
        category: 'Equipment'
    },
    {
        slug: 'tennis-mental-closing-matches',
        title: '매치 포인트 공포증 극복하기 (Choking 방지)',
        description: '다 이긴 게임을 뒤집히는 \'초킹(Choking)\'. 긴장되는 순간에 팔이 굳는 현상을 극복하고 경기를 마무리하는 멘탈 루틴.',
        keywords: ['테니스 멘탈', '매치 포인트', '긴장', '초킹', '심리'],
        category: 'Lifestyle'
    },
    {
        slug: 'tennis-wrist-knee-pain-care',
        title: '테니스 엘보 외의 부상: 손목 및 무릎 통증 관리',
        description: 'TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.',
        keywords: ['테니스 건강', '부상 방지', '손목 통증', '무릎 재활', '스트레칭'],
        category: 'Lifestyle'
    },
    {
        slug: 'tennis-nutrition-pre-match',
        title: '경기 전 최고의 식단과 에너지 보충',
        description: '경기 2시간 전 무엇을 먹어야 할까요? 탄수화물 로딩부터 수분 보충, 경기 중 바나나 섭취의 과학적 이유.',
        keywords: ['테니스 건강', '식단', '에너지 젤', '수분 보충', '경기 준비'],
        category: 'Lifestyle'
    },
    {
        slug: 'history-of-tennis-scoring',
        title: '테니스 점수(0, 15, 30, 40)의 유래와 역사',
        description: '왜 1, 2, 3이 아닐까요? 러브(Love)는 어디서 왔을까요? 중세 프랑스 귀족 놀이에서 유래한 독특한 점수 체계의 비밀.',
        keywords: ['테니스 역사', '점수 룰', '15 30 40', 'Love', '상식'],
        category: 'Lifestyle'
    },
    {
        slug: 'tennis-bag-essentials-checklist',
        title: '테니스 가방(라켓백) 필수 아이템 체크리스트',
        description: '고수들의 가방에는 무엇이 들어있을까요? 그립 파우더, 여분 양말, 비상약 등 코트 나갈 때 꼭 챙겨야 할 준비물 리스트.',
        keywords: ['테니스 용품', '가방', '준비물', '체크리스트', '꿀팁'],
        category: 'Lifestyle'
    },
];

const template = (post) => `import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '${post.title}',
  description: '${post.description}',
  keywords: [${post.keywords.map(k => `'${k}'`).join(', ')}],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/${post.slug}',
  },
  openGraph: {
    title: '${post.title}',
    description: '${post.description}',
    url: 'https://tennisfriends.co.kr/blog/${post.slug}',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${post.title}',
    description: '${post.description}',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '핵심 포인트 1', depth: 2 },
  { id: 'key-point-2', text: '핵심 포인트 2', depth: 2 },
  { id: 'key-point-3', text: '핵심 포인트 3', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '${post.title} 관련 자주 묻는 질문 1',
    a: '이곳에 답변이 들어갑니다. 구체적이고 도움이 되는 정보를 제공하세요.'
  },
  {
    q: '${post.title} 관련 자주 묻는 질문 2',
    a: '이곳에 답변이 들어갑니다. 독자의 궁금증을 해결해 줄 수 있는 내용을 작성하세요.'
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            ${post.keywords.map(tag => `<Badge key="${tag}" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">${tag}</Badge>`).join('\n            ')}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            ${post.title}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            ${post.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">5분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="${post.slug}" date="2026-01-24" title="${post.title}" excerpt="${post.description}">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            
            <h2 id="introduction">들어가며</h2>
            <p>
              ${post.description} 이 글에서는 ${post.keywords[0]}에 대해 깊이 있게 알아봅니다.
              (이곳에 서론 내용을 작성해 주세요.)
            </p>

            <h2 id="key-point-1">핵심 포인트 1</h2>
            <p>
              첫 번째 중요한 내용은... (내용 작성)
            </p>

            <h2 id="key-point-2">핵심 포인트 2</h2>
            <p>
              두 번째 중요한 내용은... (내용 작성)
            </p>

            <h2 id="key-point-3">핵심 포인트 3</h2>
            <p>
              세 번째 중요한 내용은... (내용 작성)
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              지금까지 ${post.title}에 대해 알아보았습니다. 여러분의 테니스 라이프에 도움이 되기를 바랍니다.
            </p>

          </div>

          {/* Related Links */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                관련 자료
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    내부 링크
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/players" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">NTRP 자가 진단</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    추천 링크
                  </h4>
                  <ul className="space-y-3">
                     <li>
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">ATP 투어</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
`;

const baseDir = path.join(__dirname, '../src/app/blog');

console.log(`Starting to scaffold ${posts.length} blog posts into ${baseDir}...`);

posts.forEach(post => {
    const dirPath = path.join(baseDir, post.slug);
    const filePath = path.join(dirPath, 'page.tsx');

    // Create directory
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Created directory: ${post.slug}`);
    }

    // Create file
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, template(post), 'utf8');
        console.log(`✅ Created file: ${post.slug}/page.tsx`);
    } else {
        console.log(`⚠️  Skipped (already exists): ${post.slug}`);
    }
});

console.log('--- Scaffolding Complete ---');
