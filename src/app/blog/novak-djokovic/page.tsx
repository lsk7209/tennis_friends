import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '노박 조코비치 선수 프로필과 스토리',
  description: '리턴·밸런스·멘탈로 큰 순간을 뒤집는 노박 조코비치의 성장 배경, 경기 스타일, 루틴과 인간적인 면모, 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '노박 조코비치', '선수 프로필', '스토리', '세르비아'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/novak-djokovic',
  },
  openGraph: {
    title: '노박 조코비치 선수 프로필과 스토리',
    description: '리턴·밸런스·멘탈로 큰 순간을 뒤집는 노박 조코비치의 성장 배경, 경기 스타일, 루틴과 인간적인 면모, 라이벌 구도를 정리했습니다.',
    url: 'https://tennisfriends.co.kr/blog/novak-djokovic',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '노박 조코비치 선수 프로필과 스토리',
    description: '리턴·밸런스·멘탈로 큰 순간을 뒤집는 노박 조코비치의 성장 배경, 경기 스타일, 루틴과 인간적인 면모, 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-city-indoor-court-battlefield-memory', text: '성장 배경 — 도시의 실내 코트와 전장의 기억', depth: 2 },
  { id: 'playing-style-return-start-balance-suture', text: '경기 스타일 — 리턴으로 시작해 균형으로 봉합하다', depth: 2 },
  { id: 'rhythm-selection-emotion-low-procedure-constant', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'transition-technique-defense-attack-one-beat-ahead', text: '전환의 기술 — 방어에서 공격으로, 한 박자 앞서기', depth: 2 },
  { id: 'experience-crisis-management-scoreboard-movement-accuracy', text: '경험과 위기관리 — 점수판보다 동작의 정확도', depth: 2 },
  { id: 'human-aspects-discipline-care-language', text: '인간적인 면모 — 규율과 배려의 언어', depth: 2 },
  { id: 'nationality-culture-small-country-learned-pride', text: '국적과 문화 — 작은 나라에서 배운 큰 자부심', depth: 2 },
  { id: 'relationships-rivals-each-other-answer-steal-time', text: '관계와 라이벌 — 서로의 해답을 훔치는 시간', depth: 2 },
  { id: 'famous-scenes-return-twice-down-line-once', text: '명장면 — 리턴 두 번, 다운더라인 한 번', depth: 2 },
  { id: 'equipment-details-tension-contact-balance-adjustment', text: '장비와 디테일 — 텐션·접점·밸런스의 미세 조정', depth: 2 },
  { id: 'future-challenges-match-selection-conclusion-conciseness', text: '앞으로의 과제 — 경기 선택과 결말의 간결함', depth: 2 },
  { id: 'fans-community-lasting-trust', text: '팬과 커뮤니티 — 오래 가는 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '노박 조코비치의 경기 스타일은 어떤가요?',
    a: '리턴을 출발점으로 포인트를 다시 설계하는 것이 최대 강점입니다. 퍼스트 서브조차 깊고 낮게 되돌려 상대의 3구 패턴을 끊고, 균형과 호흡으로 큰 순간을 관리합니다.'
  },
  {
    q: '조코비치의 성장 배경은 어떤가요?',
    a: '베오그라드의 실내 코트에서 바운드의 균일함을 활용해 타점의 오차를 줄였습니다. 거친 환경은 집중력과 절제를 일찍 익히게 했고, 작은 질서들을 쌓아 큰 무대의 소음을 지우는 법을 배웠습니다.'
  },
  {
    q: '조코비치의 식단 관리는 어떻게 하나요?',
    a: '2011년 글루텐 프리 식단으로 전환한 것이 커리어의 전환점이 되었습니다. 밀가루를 끊고 식단을 정교하게 설계함으로써 회복력과 집중력을 극적으로 높였습니다.'
  },
  {
    q: '조코비치가 역대 최고(GOAT)로 평가받는 이유는?',
    a: '그랜드 슬램 24회 우승, 역대 최장 기간 세계 랭킹 1위, 모든 마스터스 대회를 2번씩 우승한 골든 마스터스 등 압도적인 기록이 그 증거입니다.'
  },
  {
    q: '그의 유연성은 어디서 나오나요?',
    a: '매일 거르지 않는 요가와 체계적인 스트레칭 루틴 덕분입니다. 이를 통해 40에 가까운 나이에도 코트 구석구석을 커버하는 수비력을 유지합니다.'
  },
  {
    q: '조코비치의 정신력 관리 비결은?',
    a: '명상과 시각화 훈련을 통해 압박감 속에서도 평정심을 유지합니다. 위기 상황에서 더 냉철해지는 절차 지향적 사고가 핵심입니다.'
  },
  {
    q: '사용하는 라켓의 특징은?',
    a: 'Head Speed Pro 모델을 사용합니다. 컨트롤과 안정성에 최적화된 세팅으로, 그의 정교한 샷 메이킹을 뒷받침합니다.'
  },
  {
    q: '조코비치의 라이벌 관계는 어떤가요?',
    a: '페더러, 나달과 함께 "Big 3" 시대를 형성했으며, 두 선수 모두에게 상대 전적에서 앞서 있습니다. 최근에는 알카라스, 시너 등 새로운 세대와 경쟁하고 있습니다.'
  },
  {
    q: '그의 2024년 최대 성과는 무엇인가요?',
    a: '파리 올림픽 금메달 획득입니다. 이로써 4개 메이저 대회와 올림픽 금메달을 모두 거머쥐는 "커리어 골든 슬램"을 완성했습니다.'
  },
  {
    q: '테니스 팬들에게 노박 조코비치는 어떤 의미인가요?',
    a: '단순한 기록을 넘어, 인간이 철저한 규율과 헌신으로 도달할 수 있는 한계가 어디인지를 보여주는 살아있는 전설로 기억됩니다.'
  },
];

export default function NovakDjokovicBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '노박 조코비치', '선수 프로필', '스토리', '세르비아'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            노박 조코비치
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            균형, 리턴, 멘탈로 완성한 '결정의 기술'
          </p>
          <p className="text-lg text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
            리턴을 출발점으로 포인트를 다시 설계하고, 루틴과 호흡으로 큰 순간을 관리하는 노박 조코비치의 성장, 철학, 인간적인 면모를 한 편으로.
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
              <span className="font-medium">2025년 9월 3일</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="novak-djokovic" date="2024-01-01" title="" excerpt="">
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
                <strong className="text-blue-700 dark:text-blue-300">직답:</strong> 노박 조코비치(Novak Djokovic)는 리턴을 출발점으로 포인트의 구조를 다시 짜고, 호흡과 루틴으로 큰 순간을 관리하는 결심의 기술자입니다. 그의 커리어는 단순한 승리의 기록이 아니라, 한 인간이 극한의 자기 절제와 규율을 통해 도달할 수 있는 '완벽'의 한계에 대한 증명입니다.
              </p>
            </div>

            <h2 id="growth-background-city-indoor-court-battlefield-memory">성장 배경 — 도시의 실내 코트와 전장의 기억</h2>
            <p>베오그라드의 실내 코트는 차갑고 규칙적이었습니다. 어린 시절, 나토의 공습을 피해 방공호와 코트를 오가던 경험은 그에게 테니스가 단순한 스포츠가 아닌 '생존'이자 '질서'임을 깨닫게 했습니다. 그는 바운드의 균일함을 활용해 타점의 오차를 줄였고, 코치진은 "동작을 단순화하고 접점을 앞에 둔다"는 한 문장을 반복했습니다. 유년기의 거친 환경은 집중력과 절제를 일찍 익히게 했고, 훈련 일지에는 수치보다 '오늘의 수정 한 줄'이 늘 먼저 적혔습니다. 작은 질서들을 쌓아 큰 무대의 소음을 지우는 법을 배운 그는, 관중의 야유조차 자신을 태우는 연료로 바꾸는 법을 압니다.</p>

            <h2 id="playing-style-return-start-balance-suture">경기 스타일 — 리턴으로 시작해 균형으로 봉합하다</h2>
            <p>조코비치의 최대 무기는 리턴입니다. 사실 테니스 역사상 그와 비견될 리턴 능력을 가진 선수는 없다고 해도 과언이 아닙니다. 상대의 퍼스트 서브조차 깊고 낮게 되돌려 3구 패턴을 끊고, 세컨드 서브에는 과감히 한 발 전진해 포인트의 주도권을 즉시 가져옵니다. 그의 포핸드는 짧은 준비와 긴 임팩트로 직선을 만들고, 백핸드는 양손의 견고함으로 코너를 얇게 긁어 각을 세웁니다. 수비에서는 요가와 스트레칭으로 다져진 극한의 유연성으로 불가능해 보이는 볼에 도달하며, 옆으로 밀려난 순간에도 스핀과 밸런스를 잃지 않은 채 카운터를 날립니다. 이는 단순한 피지컬의 결과가 아니라, 매 순간 자신의 무게 중심을 어디에 두어야 할지를 아는 '기하학적 지능'의 승리입니다.</p>

            <h2 id="rhythm-selection-emotion-low-procedure-constant">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>그의 포인트 사이 간격은 마치 신성한 의식처럼 단순하고 일정합니다. 라켓 스트링을 세밀하게 정리하고, 두 번의 깊은 호흡, 그리고 공을 튀기는 일정한 횟수. 스코어가 기울거나 판정에 불만이 생겨도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않습니다. 타이브레이크와 같은 고도의 집중력이 필요한 구간에서는 높이와 길이를 확인하는 가장 안전한 구질을 먼저 택하고, 상대가 지루함을 느끼는 찰나에 라인을 찌르는 다운더라인을 터뜨립니다. 위험을 회피하지 않되, 철저히 확률에 근거한 도박만을 허용하는 그의 선택은 5세트 경기에서 더 빛을 발합니다.</p>

            <h2 id="transition-technique-defense-attack-one-beat-ahead">전환의 기술 — 방어에서 공격으로, 한 박자 앞서기</h2>
            <p>그가 수비형 선수로 오해받는 이유는 단지 '끝까지 주워 올리기' 때문이 아닙니다. 낮은 슬라이스와 깊은 로브로 시간을 충분히 벌어 놓고, 코트 복귀 첫 스텝에서 이미 중앙을 선점해 다음 공격의 각을 만들어 둡니다. 코트 표면의 성질에 따른 대응도 정교합니다. 하드에서는 백스윙을 극도로 줄여 타점을 앞에 고정하고, 클레이에서는 회전량을 늘려 낙구를 안정시키며 드롭샷으로 상대의 템포를 빼앗습니다. 잔디에서는 리턴 포지션을 더 공격적으로 잡아 상대의 첫 임팩트 시간을 훔칩니다. 이러한 전환의 기술이야말로 조코비치가 모든 코트에서 압도적인 성적을 거두는 비결입니다.</p>

            <h2 id="experience-crisis-management-scoreboard-movement-accuracy">경험과 위기관리 — 점수판보다 동작의 정확도</h2>
            <p>조코비치는 위기 상황에서 결코 점수판을 보지 않습니다. 대신 토스의 높이, 임팩트 위치, 라켓면의 각도—오직 자신의 신체 동작에만 집중합니다. 브레이크 포인트 위기에서 중앙 깊은 공 두 개로 상대의 백핸드 쪽을 먼저 압박한 뒤, 열린 공간으로 백핸드 다운더라인을 가르는 그의 전술은 '알고도 못 막는' 교과서가 되었습니다. 관중의 소음이 커질수록 그의 동작은 역설적으로 더 정교해집니다. 감정의 파고를 절차 지향적 사고로 낮추고, 오직 눈앞의 공 하나에 모든 우주를 담는 집중력이 그를 24회 그랜드 슬램 우승자로 만들었습니다.</p>

            <h2 id="human-aspects-discipline-care-language">인간적인 면모 — 규율과 배려의 언어</h2>
            <p>코트 밖의 조코비치는 철저한 규율의 화신입니다. 2011년 글루텐 프리 식단으로의 전환은 그의 신체적 한계를 완전히 허물었습니다. "음식은 내 몸이라는 기계를 돌리는 연료"라는 생각으로 매 식단을 정밀하게 관리하며, 경기 전후의 명상과 회복 루틴에도 수많은 시간을 할애합니다. 이러한 지독한 관리는 후배 선수들에게 큰 영감을 주는 동시에, 시대를 관통하는 롱런의 토대가 되었습니다. 또한 인터뷰에서는 자신의 승리보다 팀의 헌신과 상대에 대한 예우를 먼저 언급하며, 경쟁은 시퍼런 칼날처럼, 인간관계는 따뜻한 온기처럼 대하는 성숙함을 보여줍니다.</p>

            <h2 id="nationality-culture-small-country-learned-pride">국적과 문화 — 작은 나라에서 배운 큰 자부심</h2>
            <p>세르비아라는 자국에 대한 그의 애정은 각별합니다. 그는 개인의 승리를 넘어, 시련을 겪은 조국의 희망이 되고자 하는 강력한 동기를 가졌습니다. 국기를 단 채 코트에 들어설 때, 그는 한 장면의 샷이 다음 세대 아이들의 꿈이 될 수 있음을 직시합니다. 2024년 파리 올림픽에서 그가 그토록 갈구하던 금메달을 딴 후 오열하던 모습은, 모든 기록을 가진 황제조차 국가라는 상징 앞에서는 한 명의 소년으로 돌아간다는 것을 보여준 가장 인간적인 장면이었습니다.</p>

            <h2 id="relationships-rivals-each-other-answer-steal-time">관계와 라이벌 — 서로의 해답을 훔치는 시간</h2>
            <p>로저 페더러의 완벽한 공격 테니스와 라파엘 나달의 지칠 줄 모르는 탑스핀은 조코비치를 단련시킨 최고의 스승들이었습니다. 페더러를 이기기 위해 리턴을 강화했고, 나달을 이기기 위해 체력과 수비력을 극한으로 끌어올렸습니다. 라이벌들이 제시한 문제지에 최선의 해답을 적어 내려가며 조코비치는 점점 더 무결점의 선수가 되었습니다. 이제는 알카라스, 시너와 같은 젊은 사자들의 도전을 받으며, 그는 자신의 테니스에 '간결함'과 '노련미'라는 새로운 무기를 더하고 있습니다. 시대별 라이벌들과의 문답은 테니스 역사의 가장 찬란한 기록으로 남을 것입니다.</p>

            <h2 id="famous-scenes-return-twice-down-line-once">명장면 — 리턴 두 번, 다운더라인 한 번</h2>
            <p>2011년 US 오픈 4강, 페더러의 매치 포인트에서 터뜨린 광속의 리턴 에이스는 조코비치라는 존재를 전 세계에 각인시킨 상징적인 장면입니다. 패배 직전의 순간에도 그는 라켓 스트링을 고르며 오직 다음 공의 궤적만을 시뮬레이션했습니다. 극단적인 압박 속에서 터져 나온 백핸드 크로스샷은 단순히 한 점이 아니라 승부의 추를 영구히 돌려놓는 결정적 순간이었습니다. 그의 테니스는 "포기하지 않는 자에게 기회는 오고, 준비된 자만이 그 기회를 예술로 승화시킨다"는 진리를 매 경기 몸소 보여줍니다.</p>

            <h2 id="equipment-details-tension-contact-balance-adjustment">장비와 디테일 — 텐션·접점·밸런스의 미세 조정</h2>
            <p>그는 장비를 자신의 신체 연장선으로 취급합니다. 스트링 텐션은 대회 도시의 해발고도와 기온, 습도에 맞춰 0.5파운드 단위로 조정하며, 경기 중에도 라켓의 반발력이 변하면 즉시 교체를 요청합니다. 라켓 밸런스는 빠른 스윙 스피드와 안정적인 임팩트를 위해 극도로 초정밀하게 세팅되어 있습니다. 신발 또한 측면 지지력과 미끄러짐의 정도를 감안해 커스텀 제작되며, 발목에 무리가 가지 않으면서도 최상의 접지력을 낼 수 있도록 돕습니다. 완벽한 도구가 완벽한 선수를 만드는 것이 아니라, 완벽한 선수가 도구의 가치를 완성한다는 것을 그는 장비에 대한 집착을 통해 증명합니다.</p>

            <h2 id="future-challenges-match-selection-conclusion-conciseness">앞으로의 과제 — 경기 선택과 결말의 간결함</h2>
            <p>불혹에 가까운 나이, 조코비치의 다음 과제는 기록의 추가가 아닙니다. 바로 '선택과 집중'입니다. 모든 대회에 출전하기보다 큰 무대에 에너지를 쏟아붓고, 포인트 상황에서 더 효율적인 루트를 찾는 지혜가 필요합니다. 이미 증명한 완벽한 수비 위에, 한 박자 빠른 공격적 마무리를 더해 랠리 시간을 줄이는 것이 장기적인 선수 생활의 핵심입니다. 골든 슬램이라는 마지막 정점을 찍은 그가, 이제 어떤 여유와 철학으로 자신의 테니스 인생 마지막 장을 써 내려갈지 전 세계가 주목하고 있습니다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>조코비치를 향한 팬들의 사랑은 기록에 대한 경외를 넘어 삶의 태도에 대한 존경으로 번지고 있습니다. 이기는 날에도 팀원들보다 앞서지 않고 감사를 전하며, 지는 날에도 자신의 준비 부족을 먼저 탓하는 그의 태도는 스포츠맨십의 정수입니다. "고통은 일시적이지만, 후회는 영원하다"는 그의 말처럼, 매 순간 후회 없는 준비를 다하는 그의 삶은 테니스장을 넘어 우리 모두에게 깊은 울림을 줍니다. 그의 이름은 영원히 기록되겠지만, 그가 남긴 땀방울의 농도는 팬들의 기억 속에 더 진하게 남을 것입니다.</p>
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
                      <a href="https://en.wikipedia.org/wiki/Novak_Djokovic" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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

                    <RelatedPosts 
            currentSlug="novak-djokovic" 
            category="
                {tag}
              " 
            tags={['테니스', '노박 조코비치', '선수 프로필', '스토리', '세르비아']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}