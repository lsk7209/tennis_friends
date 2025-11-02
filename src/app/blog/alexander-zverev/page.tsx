import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '알렉산더 즈베레프 선수 프로필과 스토리',
  description: '장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 알렉산더 즈베레프의 성장 배경, 경기 스타일, 관계와 과제를 한 편으로.',
  keywords: ['테니스', '알렉산더 즈베레프', '선수 프로필', '스토리', '독일'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/alexander-zverev',
  },
  openGraph: {
    title: '알렉산더 즈베레프 선수 프로필과 스토리',
    description: '장벽 같은 서브와 칼같은 양손 백핸드로 흐름을 제어하는 알렉산더 즈베레프의 성장 배경, 경기 스타일, 관계와 과제를 한 편으로.',
    url: 'https://www.tennisfrens.com/blog/alexander-zverev',
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
    q: '즈베레프의 성장 배경은 어떤가요?',
    a: '러시아계 테니스 가문에서 태어나 아버지의 기술 교정과 형 미샤의 전진 감각을 함께 흡수하며 기본기를 단단히 만들었습니다. 주니어부터 프로 초반까지 일정한 루틴을 지키는 습관이 몸에 배었습니다.'
  },
  {
    q: '즈베레프의 강점은 무엇인가요?',
    a: '장벽 같은 서브와 칼같은 양손 백핸드가 최대 강점입니다. 퍼스트 서브에서 시작해 백핸드로 봉합하며, 차분한 포지셔닝으로 흐름을 제어합니다.'
  },
  {
    q: '즈베레프의 인간적인 면모는 어떤가요?',
    a: '차분함 속의 유머와 팀 퍼스트가 특징입니다. 성과보다 준비 과정을 먼저 언급하며, 부족한 날엔 수정 항목을 또박또박 말합니다. 팀의 조언을 생활의 규칙으로 옮기는 성향이 강합니다.'
  },
  {
    q: '즈베레프의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 코스 다양화와 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 장기전에서도 에너지 관리가 수월해질 것입니다.'
  },
];

export default function AlexanderZverevBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="알렉산더 즈베레프 — 장벽 같은 서브, 칼같은 백핸드"
        excerpt="장신의 서브와 정확한 양손 백핸드로 코트의 속도를 통제하는 알렉산더 즈베레프의 성장, 전술, 인간적인 면모와 과제를 정리했다."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '알렉산더 즈베레프', '선수 프로필', '스토리', '독일'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 9월 12일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="alexander-zverev-barrier-serve-blade-backhand">알렉산더 즈베레프 — 장벽 같은 서브, 칼같은 백핸드</h1>

            <p><strong>직답:</strong> 알렉산더 즈베레프(Alexander Zverev)는 장신의 서브와 정확한 양손 백핸드, 차분한 포지셔닝으로 포인트의 속도를 통제하는 독일의 간판입니다.</p>

            <h2 id="growth-background-family-made-court-grammar">성장 배경 — 가족이 만든 코트의 문법</h2>
            <p>러시아계 테니스 가문에서 태어나 어린 시절부터 코트가 일상의 중심이었습니다. 아버지의 기술 교정, 형 미샤의 전진 감각을 함께 흡수하며 기본기의 틀을 단단히 만들었고, 훈련 일지에는 실수 유형과 다음날 수정 항목이 늘 먼저 적혔습니다. 주니어부터 프로 초반까지 일정한 루틴을 지키는 습관이 몸에 배며 큰 무대의 소음에도 호흡을 잃지 않는 선수가 되었습니다.</p>

            <h2 id="playing-style-first-start-backhand-suture">경기 스타일 — 퍼스트로 시작해 백핸드로 봉합</h2>
            <p>즈베레프의 포인트는 퍼스트 서브에서 시작합니다. 와이드·바디를 교차해 리턴러의 각을 묶고, 3구에서 양손 백핸드로 코너를 얇게 긁어 균형을 흔듭니다. 포핸드는 과장된 스핀보다 직선에 가까운 임팩트로 깊이를 확보하고, 랠리 템포를 너무 끌어올리지 않으면서 실수의 폭을 좁힙니다. 네트 접근은 선택적이며, 하프코트에서 빈 공간이 명확할 때만 한 걸음 전진해 간결하게 닫습니다. 요약하면 서브로 우위를 만들고 백핸드로 질서를 고정하는 테니스입니다.</p>

            <h2 id="return-positioning-departure-delay-angle-erase">리턴과 포지셔닝 — 출발점을 늦추고 각을 지우다</h2>
            <p>퍼스트 서브 리턴에서는 한두 걸음 뒤에서 출발해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세웁니다. 리턴 후 중앙 깊은 볼로 상대의 선택지를 줄인 뒤, 세 번째 스트로크에서만 다운더라인을 열어 작은 금을 냅니다. 상대가 서둘러 네트로 들어오면 낮은 통과샷과 로브를 교차해 첫 시도를 주저하게 만듭니다.</p>

            <h2 id="rhythm-selection-emotion-low-procedure-constant">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>포인트 사이 그는 라켓 스트링을 정리하고 두 번의 깊은 호흡으로 루틴을 고정합니다. 스코어가 밀려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않고, 타이브레이크 초반엔 네트를 넉넉히 넘기는 구질로 높이·길이를 확인합니다. 승부를 거는 구간은 3~4포인트 대이며, 그때만 라인을 얇게 씁니다. 위험을 회피하지 않되 근거 없는 도박은 하지 않는 판단이 일관됩니다.</p>

            <h2 id="surface-transition-hard-straight-clay-patience-grass">표면별 전환 — 하드의 직선, 점토의 인내, 잔디의 간결</h2>
            <p>하드에서는 퍼스트 확률과 3구 패턴으로 흐름을 설계합니다. 점토에서는 회전을 늘려 낙구를 안정시키고 랠리 길이를 받아들이되, 네 번째·다섯 번째 스트로크에서 백핸드 다운더라인으로 리듬을 꺾습니다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정하며, 슬라이스 리턴을 섞어 초반 속도를 통제합니다. 표면이 달라져도 '먼저 안정, 틈에서 가속'의 원칙은 변하지 않습니다.</p>

            <h2 id="experience-transition-crisis-gained-equilibrium">경험과 전환 — 위기를 지나 얻은 평형감</h2>
            <p>부상과 기복을 통과하는 과정에서 그는 루틴의 가치를 더 단단히 믿게 되었습니다. 회복·수면·식단을 일정으로 고정하고, 경기 플랜을 "퍼스트 성공률↑—3구 백핸드—하프코트 결말"의 세 문장으로 단순화했습니다. 큰 무대의 압박이 높을수록 동작을 줄이고 접점을 앞에 두는 기본으로 돌아가는 태도가 두드러집니다.</p>

            <h2 id="human-aspects-calm-humor-team-first">인간적인 면모 — 차분함 속의 유머와 팀 퍼스트</h2>
            <p>인터뷰에서 그는 성과보다 준비 과정을 먼저 언급하고, 부족한 날엔 수정 항목을 또박또박 말합니다. 팬에게는 눈맞춤과 짧은 감사 인사를 잊지 않으며, 볼퍼슨·코트 스태프를 향해서도 예의를 지킵니다. 팀의 조언을 생활의 규칙으로 옮기는 성향이 강해 장기 일정에서 흔들림이 적습니다.</p>

            <h2 id="nationality-culture-order-accuracy-aesthetics">국적과 문화 — 질서와 정확의 미학</h2>
            <p>독일 스포츠가 강조하는 정확·규율의 감각이 그의 플레이에도 배어 있습니다. 큰 제스처보다 작은 반복으로 구석을 두드리고, 확률이 높은 선택을 꾸준히 누적해 설득을 만듭니다. 국기를 달고 코트에 들어설 때 그는 개인의 승부를 공동체의 상징으로 확장하려 합니다.</p>

            <h2 id="relationships-rivals-speed-generation-angle-answer">관계와 라이벌 — 속도의 세대에 각도로 답하다</h2>
            <p>폭발적인 가속으로 초반을 장악하는 동세대와 맞붙을 때, 그는 리턴 포지션과 중앙 깊은 볼로 속도를 상쇄합니다. 네트를 서두르는 상대에겐 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 만들고, 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌릅니다.</p>

            <h2 id="famous-scenes-backhand-down-line-opens-narrow-door">명장면 — 백핸드 다운더라인이 여는 좁은 문</h2>
            <p>브레이크 포인트. 중앙 깊은 볼로 두 번 밀어낸 뒤, 즈베레프는 몸 가까이 끌어당긴 백핸드를 라인으로 단호히 접습니다. 공이 흰 선을 스치며 빠져나가면 관중의 숨이 잠시 멎고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟습니다. 감정이 아니라 절차가 승부를 만든다는 믿음이 응축된 순간입니다.</p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>대회장 기온·습도에 맞춰 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 회복 시간을 단축합니다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄입니다. 장비가 플레이를 지배하지 않도록, 플레이가 요구하는 만큼만 조정한다는 태도가 일관됩니다.</p>

            <h2 id="future-challenges-second-serve-halfcourt-conclusion">앞으로의 과제 — 세컨드 서브와 하프코트의 결말</h2>
            <p>더 높이 도약하려면 세컨드 서브 코스 다양화와 하프코트 마무리의 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정하면 장기전에서도 에너지 관리가 한층 수월해질 것입니다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성입니다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말합니다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성됩니다. 기록은 표가 되지만, 태도는 기억이 됩니다. 그래서 즈베레프의 테니스는 결과를 넘어 설득으로 남습니다.</p>
          </div>

          {/* Related Links */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              📚 관련 자료
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">내부 링크</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/players" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">🏆 선수 프로필</Link></li>
                  <li><Link href="/utility/ntrp-test" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">🎯 실력 테스트</Link></li>
                  <li><Link href="/utility/play-style-test" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">🎾 플레이 스타일 테스트</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">외부 자료</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">ATP 투어 공식 사이트</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Alexander_Zverev" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqs} />

          {/* CTA */}
          <CTA />
        </div>
      </Article>
    </div>
  );
}