import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '알렉산더 즈베레프 선수 프로필과 스토리',
  description: '장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 알렉산더 즈베레프의 성장 배경, 경기 스타일, 관계와 과제를 한 편으로.',
  keywords: ['테니스', '알렉산더 즈베레프', '선수 프로필', '스토리', '독일'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/alexander-zverev',
  },
  openGraph: {
    title: '알렉산더 즈베레프 선수 프로필과 스토리',
    description: '장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 알렉산더 즈베레프의 성장 배경, 경기 스타일, 관계와 과제를 한 편으로.',
    url: 'https://tennisfriends.co.kr/blog/alexander-zverev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '알렉산더 즈베레프 선수 프로필과 스토리',
    description: '장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 알렉산더 즈베레프의 성장 배경, 경기 스타일, 관계와 과제를 한 편으로.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-family-made-court-grammar', text: '성장 배경 — 가족이 만든 코트의 문법', depth: 2 },
  { id: 'playing-style-first-start-backhand-suture', text: '경기 스타일 — 퍼스트로 시작해 백핸드로 봉합', depth: 2 },
  { id: 'return-positioning-departure-delay-angle-erase', text: '리턴과 포지셔닝 — 출발점을 늦추고 각을 지우다', depth: 2 },
  { id: 'rhythm-selection-emotion-low-procedure-constant', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'surface-transition-hard-straight-clay-patience-grass', text: '표면별 전환 — 하드의 직선, 점토의 인내, 잔디의 간결', depth: 2 },
  { id: 'experience-transition-crisis-gained-equilibrium', text: '경험과 전환 — 위기를 지나 얻은 평형감', depth: 2 },
  { id: 'human-aspects-calm-humor-team-first', text: '인간적인 면모 — 차분함 속의 유머와 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-order-accuracy-aesthetics', text: '국적과 문화 — 질서와 정확의 미학', depth: 2 },
  { id: 'relationships-rivals-speed-generation-angle-answer', text: '관계와 라이벌 — 속도의 세대에 각도로 답하다', depth: 2 },
  { id: 'famous-scenes-backhand-down-line-opens-narrow-door', text: '명장면 — 백핸드 다운더라인이 여는 좁은 문', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-adjustment', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-second-serve-halfcourt-conclusion', text: '앞으로의 과제 — 세컨드 서브와 하프코트의 결말', depth: 2 },
  { id: 'fans-community-lasting-trust', text: '팬과 커뮤니티 — 오래 가는 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '알렉산더 즈베레프의 경기 스타일은 어떤가요?',
    a: '장신의 서브와 정확한 양손 백핸드, 차분한 포지셔닝이 특징입니다. 서브로 우위를 만들고 백핸드로 질서를 고정하며, 포인트의 속도를 통제합니다.'
  },
  {
    q: '즈베레프의 가족들은 모두 테니스를 하나요?',
    a: '네, 테니스 명문가입니다. 아버지는 소련 국가대표 출신 코치이며, 어머니 역시 프로 선수였습니다. 그의 형인 미샤 즈베레프 또한 ATP 투어에서 활약한 베테랑 선수입니다.'
  },
  {
    q: '즈베레프가 2022년에 당한 부상이 얼마나 심각했나요?',
    a: '프랑스 오픈 4강전에서 오른쪽 발목 외측 인대 3개가 완전히 파열되는 중상을 입었습니다. 하지만 7개월간의 혹독한 재활 끝에 성공적으로 복귀하여 다시 정상급 기량을 보여주고 있습니다.'
  },
  {
    q: '즈베레프의 주무기는 무엇인가요?',
    a: '강력한 첫 번째 서브와 함께 세계 최고 수준으로 평가받는 투핸드 백핸드가 핵심입니다. 특히 백핸드 다운더라인은 그의 가장 위력적인 결정구입니다.'
  },
  {
    q: '즈베레프는 어떤 라켓을 사용하나요?',
    a: 'Head Gravity Pro 모델을 사용합니다. 넓은 스위트 스폿과 안정적인 타구감이 특징이며, 즈베레프의 공격적인 베이스라인 플레이를 잘 뒷받침합니다.'
  },
  {
    q: '즈베레프의 올림픽 성적은?',
    a: '2021 도쿄 올림픽 남자 단식에서 금메달을 획득했습니다. 이는 독일 남자 테니스 역사상 1988년 보리스 베커 이후 최초의 단식 금메달입니다.'
  },
  {
    q: '즈베레프의 별명은 무엇인가요?',
    a: "주로 'Sascha(사샤)'라는 애칭으로 불립니다. 이는 알렉산더라는 이름의 러시아식 애칭으로, 그의 가족적 배경을 잘 보여줍니다."
  },
  {
    q: '즈베레프의 테니스 철학은 무엇인가요?',
    a: '일관성과 규율을 중시합니다. 매일 정해진 루틴을 반복하며, 기술적인 완숙미보다는 포인트 하나하나를 정교하게 쌓아가는 과정을 중요하게 여깁니다.'
  },
  {
    q: '즈베레프의 다음 목표는 무엇인가요?',
    a: '아직 달성하지 못한 그랜드 슬램 우승입니다. 수차례 결승과 4강에 진출하며 문을 두드려온 만큼, 조만간 메이저 트로피를 들어 올릴 것으로 기대받고 있습니다.'
  },
  {
    q: '독일 테니스에서 즈베레프의 위상은?',
    a: '보리스 베커, 슈테피 그라프 이후 독일 테니스를 세계 최정상급으로 유지하고 있는 독보적인 존재입니다. 국가 대항전에서도 핵심 주축으로 활약하며 국민적 사랑을 받고 있습니다.'
  },
];

export default function AlexanderZverevBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '알렉산더 즈베레프', '선수 프로필', '스토리', '독일'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            알렉산더 즈베레프
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            장벽 같은 서브, 칼같은 백핸드
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            장신의 서브와 정확한 양손 백핸드로 코트의 속도를 통제하는 알렉산더 즈베레프의 성장, 전술, 인간적인 면모와 과제를 정리했다.
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">12분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2025년 9월 12일</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="alexander-zverev" date="2024-01-01" title="" excerpt="">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100 dark:border-blue-900">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-0">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 align-middle" />
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 알렉산더 즈베레프(Alexander Zverev)는 2미터에 가까운 압도적인 신장에서 나오는 서브의 각도와 투핸드 백핸드의 견고함을 결합해 코트를 장악하는 '높이의 기술자'입니다. 그의 테니스는 단순한 파워를 넘어, 큰 부상을 극복하며 얻은 정신적 성숙함과 정교한 베이스라인 랠리로 완성된 현대 테니스의 정수입니다.
              </p>
            </div>

            <h2 id="genetic-environment-tennis-dynasty-pedigree">유전과 환경 — 테니스 가문의 혈통</h2>
            <p>즈베레프의 테니스는 그의 혈관 속에 흐르는 DNA와 같습니다. 소련 국가대표 출신인 부모님과 형 미샤 즈베레프까지, 온 가족이 테니스계의 최전선에서 활동한 배경은 그에게 기술적인 조기 교육뿐만 아니라 프로로서 갖춰야 할 엄격한 자세를 심어주었습니다. 어린 시절부터 성인 선수들과 부딪히며 배운 '코트 위에서의 생존법'은 그가 차세대 주자들 중 가장 일찍 탑 랭커로 진입할 수 있었던 비결입니다. 그의 스윙 메커니즘은 가문의 연구와 실전 경험이 응축된 결과물이며, 매 경기 그는 가족의 레거시를 어깨에 짊어진 채 코트에 나섭니다.</p>

            <h2 id="physical-advantage-height-serve-angle">신체적 이점 — 높이가 만드는 서브의 미학</h2>
            <p>198cm의 신장은 즈베레프에게 신이 내린 선물입니다. 가공할 만한 시속 220km의 광속 서브는 단순히 속도 때문이 아니라, 높은 타점에서 아래로 강하게 내리꽂는 '수직적 낙차' 때문에 상대에게 더 큰 위협이 됩니다. 첫 번째 서브 성공률이 투어 최상위권을 유지하는 날의 즈베레프는 난공불락의 요새와 같습니다. 서브 게임을 손쉽게 지켜내는 능력은 그가 리턴 게임에서 더 과감한 시도를 할 수 있게 돕는 든든한 토대가 됩니다.</p>

            <h2 id="backhand-mastery-double-handed-consistency-down-the-line">백핸드의 장인 — 투핸드의 견고함과 다운더라인</h2>
            <p>즈베레프의 가장 큰 기술적 자부심은 백핸드입니다. 많은 장신 선수들이 백핸드에서 유연성 부족으로 고전하는 것과 달리, 그는 깊게 앉아 하체의 회전을 라켓 끝까지 전달하는 능력이 탁월합니다. 코트 깊숙한 곳에서 예리하게 꺾여 들어가는 크로스 샷과, 상대의 예상을 깨고 라인을 가르는 백핸드 다운더라인은 현대 테니스에서 가장 아름답고 효율적인 샷 중 하나로 평가받습니다. 그의 백핸드 쪽으로 공을 보내는 것은 상대에게 공격의 기회가 아니라 오히려 카운터의 덫이 됩니다.</p>

            <h2 id="mental-evolution-injury-comeback-maturity">정신적 진화 — 부상을 딛고 일어선 성숙함</h2>
            <p>2022년 프랑스 오픈 4강전, 나달과의 혈투 중 당한 발목 부상은 그의 커리어에서 가장 어두운 순간이었습니다. 휠체어에 의지해 코트를 떠나야 했던 그 장면은 많은 팬을 안타깝게 했습니다. 하지만 긴 재활의 시간은 그를 기술적으로나 정신적으로 더욱 단단하게 만들었습니다. 조급함을 버리고 포인트 하나하나에 집중하는 법을 배웠으며, 부상 복귀 후 보여준 그의 일관된 성적은 단순히 재능의 결과가 아니라 극한의 노력을 통한 '인간 승리'의 기록입니다.</p>

            <h2 id="tactical-depth-all-court-transition-net-play">전술적 깊이 — 올코트 플레이어로의 전환</h2>
            <p>과거의 즈베레프가 강력한 서브와 베이스라인 스트로크에만 의존했다면, 현재의 그는 네트 플레이와 슬라이스를 적절히 섞는 영리함을 보여줍니다. 장신을 활용한 넓은 네트 점유율은 상대에게 압박을 주며, 짧아진 볼을 처리하는 정교한 발리는 그의 테니스를 더욱 다채롭게 만듭니다. 수비 상황에서도 단순히 공을 넘기는 것에 그치지 않고, 낮은 슬라이스로 상대의 리듬을 뺏으며 공격 기회를 엿보는 노련미가 돋보입니다.</p>

            <h2 id="rivalry-dynamics-generation-clash-next-gen-leader">라이벌 구도 — 세대 간 충돌의 중심</h2>
            <p>조코비치라는 거대한 벽과 알카라스, 시너라는 무서운 신예들 사이에서 즈베레프는 가교 역할을 하고 있습니다. 빅3의 노련함과 차세대 스타들의 폭발력을 동시에 상대하며 그는 자신만의 독보적인 위치를 구축했습니다. 특히 큰 대회에서 강한 면모를 보이는 그의 기질은 'ATP 파이널스 2회 우승'과 '도쿄 올림픽 금메달'이라는 화려한 경력으로 증명됩니다. 라이벌과의 승부에서 보여주는 그의 투지는 테니스 팬들에게 전율을 선사합니다.</p>

            <h2 id="human-story-discipline-behind-the-scenes-care">인간적인 스토리 — 규율 뒤에 숨겨진 배려</h2>
            <p>코트 위의 차가운 이미지와 달리, 즈베레프는 팀과 가족에게 매우 헌신적입니다. 자신의 승리를 코치진과 가족의 공으로 돌리는 겸손함을 지녔으며, 어려운 환경의 어린 유망주들을 돕는 자선 활동에도 적극적입니다. 철저한 자기 관리와 정해진 훈련 루틴을 단 하루도 빠뜨리지 않는 지독한 규율은 그가 왜 10년 가까이 세계 최정상의 자리를 유지할 수 있는지를 보여주는 증거입니다. </p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>대회장 기온·습도에 맞춰 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 회복 시간을 단축합니다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄입니다. 즈베레프는 <strong>Head Gravity Pro</strong> 모델을 사용하며, 장비가 플레이를 지배하지 않도록, 플레이가 요구하는 만큼만 조정한다는 태도가 일관됩니다.</p>

            <h2 id="national-pride-germany-boris-becker-legacy-pride">국적의 자부심 — 독일 테니스의 황금기를 잇다</h2>
            <p>보리스 베커 이후 독일 테니스의 역사를 새로 쓰고 있는 그는 국가 대항전인 데이비스 컵과 올림픽에서 무서운 집중력을 발휘합니다. 독일 국기를 가슴에 달고 뛸 때 그는 평소보다 더 강력한 동기부여를 얻는다고 말합니다. 도쿄 올림픽 당시 금메달을 거머쥔 후 보여준 눈물은 그가 얼마나 자신의 조국을 대표하는 것을 소중히 여기는지 보여준 감동적인 장면이었습니다.</p>

            <h2 id="training-philosophy-consistency-repetition-order">훈련 철학 — 일관성과 반복의 미학</h2>
            <p>그의 훈련 일지는 한 치의 오차도 없습니다. 기술 훈련만큼이나 체력 단련과 유연성 훈련에 많은 시간을 할애하며, 매일 똑같은 루틴을 반복하는 인내심이야말로 그의 진정한 재능입니다. "천재성은 영감보다 끈기에서 나온다"는 말처럼, 그는 화려한 위너 뒤에 숨겨진 수천 번의 연습 과정을 더 가치 있게 여깁니다.</p>

            <h2 id="future-challenges-second-serve-halfcourt-conclusion">앞으로의 과제 — 세컨드 서브와 하프코트의 결말</h2>
            <p>더 높이 도약하려면 세컨드 서브 코스 다양화와 하프코트 마무리의 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정하면 장기전에서도 에너지 관리가 한층 수월해질 것입니다. 부상을 이겨낸 그의 단단해진 발목처럼, 그의 테니스 인생도 더욱 단단하게 영글어가고 있습니다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>즈베레프의 팬들은 그의 끈기와 성실함을 사랑합니다. 패배 속에서도 배움을 찾고, 승리 속에서도 개선점을 찾는 그의 태도는 많은 이들에게 귀감이 됩니다. 팬들과의 소통에서도 진솔함을 잃지 않으며, 테니스가 주는 즐거움을 더 많은 사람과 나누고자 노력합니다. 그의 이름은 단순히 랭킹 상단에 기록되는 것을 넘어, 포기하지 않는 도전 정신의 상징으로 기억될 것입니다.</p>
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
                        <span className="font-medium">선수 프로필</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">실력 테스트</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/play-style-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎾</span>
                        <span className="font-medium">플레이 스타일 테스트</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    외부 자료
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">ATP 투어 공식 사이트</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://en.wikipedia.org/wiki/Alexander_Zverev" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">📖</span>
                        <span className="font-medium">위키피디아 프로필</span>
                        <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}

          {/* CTA */}

          {/* FAQ Section */}
          <FAQ items={faqs} />

          <CTA />
        </div>
      </Article>
    </div>
  );
}