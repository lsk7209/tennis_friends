import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '야닉 시너 선수 프로필과 스토리',
  description: '이탈리아 출신 야닉 시너의 성장 배경, 경기 스타일, 루틴과 멘탈, 라이벌 구도를 깊이 있게 담았습니다.',
  keywords: ['테니스', '야닉 시너', '선수 프로필', '스토리', '이탈리아'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/jannik-sinner',
  },
  openGraph: {
    title: '야닉 시너 선수 프로필과 스토리',
    description: '이탈리아 출신 야닉 시너의 성장 배경, 경기 스타일, 루틴과 멘탈, 라이벌 구도를 깊이 있게 담았습니다.',
    url: 'https://www.tennisfrens.com/blog/jannik-sinner',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '야닉 시너 선수 프로필과 스토리',
    description: '이탈리아 출신 야닉 시너의 성장 배경, 경기 스타일, 루틴과 멘탈, 라이벌 구도를 깊이 있게 담았습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-alps-discipline-made-conciseness', text: '성장 배경 — 알프스의 규율이 만든 간결함', depth: 2 },
  { id: 'playing-style-short-backswing-long-straight', text: '경기 스타일 — 짧은 백스윙, 길게 미는 직선', depth: 2 },
  { id: 'rhythm-selection-emotion-low-standard-clear', text: '리듬과 선택 — 감정은 낮게, 기준은 선명하게', depth: 2 },
  { id: 'experience-transition-hard-straight-grass-concise-clay', text: '경험과 전환 — 하드의 직선, 잔디의 간결, 점토의 인내', depth: 2 },
  { id: 'human-aspects-restraint-focus-team-first', text: '인간적인 면모 — 절제, 집중, 그리고 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-artisan-country-learned-detail', text: '국적과 문화 — 장인의 나라에서 배운 디테일', depth: 2 },
  { id: 'relationships-rivals-speed-question-angle-answer', text: '관계와 라이벌 — 속도로 묻고, 각으로 답한다', depth: 2 },
  { id: 'famous-scenes-center-depth-twice-down-line-once', text: '명장면 — 중앙 깊이 두 번, 다운더라인 한 번', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-adjustment', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-net-ahead-one-beat-more', text: '앞으로의 과제 — 네트 앞에서 한 박자 더', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '야닉 시너의 경기 스타일은 어떤가요?',
    a: '빠른 준비와 직선적인 임팩트, 차가운 선택이 특징입니다. 짧은 백스윙으로 길게 미는 직선으로 상대를 압박하며, 높이보다 속도, 회전보다 길이로 큰 코트의 시간을 압축해 경기를 자신의 속도로 끌고 옵니다.'
  },
  {
    q: '시너의 성장 배경은 어떤가요?',
    a: '북이탈리아 산악지대에서 스키와 테니스를 함께 배웠습니다. 알프스의 규율이 만든 간결함으로, 동작을 줄이고 접점을 앞에 둔다는 원칙을 집요하게 주입받았고, 원정이 잦아도 일상의 질서를 잃지 않았습니다.'
  },
  {
    q: '시너의 강점은 무엇인가요?',
    a: '속도와 정확도가 최대 강점입니다. 빠른 준비와 직선적인 임팩트로 흐름을 압축하며, 차가운 선택으로 큰 코트의 시간을 단축합니다. 감정은 낮게 유지하되 기준은 선명하게 유지하는 능력이 뛰어납니다.'
  },
  {
    q: '시너의 인간적인 면모는 어떤가요?',
    a: '절제, 집중, 팀 퍼스트가 특징입니다. 인터뷰는 짧고 일관되며, 코치와 트레이너의 이름을 먼저 언급합니다. 강함을 과시하기보다 강함을 다루는 방식을 선택하는 유형입니다.'
  },
  {
    q: '시너의 미래 전망은 어떻게 되나요?',
    a: '네트 앞에서 한 박자 더가 과제입니다. 하프코트 마무리 빈도, 리턴 직후 3구에서의 전진 타이밍 반 박자 앞당김, 세컨드 서브 코스 다양화를 통해 긴 경기에서도 에너지 관리를 수월하게 할 수 있습니다.'
  },
];

export default function JannikSinnerBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="야닉 시너 — 속도와 정확도로 재정의한 '현대 표준'"
        excerpt="빠른 준비와 직선적인 임팩트, 차가운 선택으로 흐름을 압축하는 야닉 시너의 성장, 스타일, 인간적인 면모와 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '야닉 시너', '선수 프로필', '스토리', '이탈리아'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 8월 14일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="jannik-sinner-speed-accuracy-redefined-modern-standard">야닉 시너 — 속도와 정확도로 재정의한 '현대 표준'</h1>

            <p><strong>직답:</strong> 야닉 시너(Jannik Sinner)는 빠른 준비와 직선적인 임팩트, 차가운 선택으로 큰 코트의 시간을 압축해 경기를 자신의 속도로 끌고 오는 이탈리아의 간판입니다.</p>

            <h2 id="growth-background-alps-discipline-made-conciseness">성장 배경 — 알프스의 규율이 만든 간결함</h2>
            <p>북이탈리아 산악지대에서 스키와 테니스를 함께 배운 유년은 그에게 균형 감각과 모멘텀 관리의 언어를 선물했습니다. 미끄러짐과 제동, 재가속을 반복하는 스키의 감각은 테니스 풋워크로 번역되었고, 코치진은 '동작을 줄이고 접점을 앞에 둔다'는 단 하나의 원칙을 집요하게 주입했습니다. 원정이 잦아도 수면·식단·가벼운 코어 루틴을 고정하며 일상의 질서를 잃지 않았고, 훈련 일지에는 화려한 수치보다 "오늘의 수정 한 줄"이 먼저 적혔습니다.</p>

            <h2 id="playing-style-short-backswing-long-straight">경기 스타일 — 짧은 백스윙, 길게 미는 직선</h2>
            <p>시너의 볼은 높이보다 속도, 회전보다 길이로 상대를 압박합니다. 백핸드는 양손의 견고함으로 네트를 넉넉히 넘기면서도 라인을 얇게 긁어 코너를 찔러 넣고, 포핸드는 짧게 준비해 임팩트 구간을 길게 가져가 깊이를 확보합니다. 리턴에서는 한 발 안쪽에서 출발해 접점을 앞세우고, 세컨드 서브 리턴에선 과감히 전진해 랠리의 첫 톤을 본인 쪽으로 당깁니다. 네트 접근은 필요할 때만, 하프코트에 빈 공간이 열리면 한 걸음 더 들어가 간결한 발리로 문장을 닫습니다.</p>

            <h2 id="rhythm-selection-emotion-low-standard-clear">리듬과 선택 — 감정은 낮게, 기준은 선명하게</h2>
            <p>포인트 사이 루틴은 단출합니다. 라켓 스트링을 정리하고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 밀려도 루틴의 길이를 바꾸지 않아 심박의 급등을 막습니다. 타이브레이크 초반엔 높이·길이를 먼저 점검하고, 세 번째 포인트부터 라인을 얇게 쓰며 균형을 흔듭니다. 그는 위험을 피하지 않지만, 이유 없는 도박도 하지 않습니다. 선택의 기준은 "속도 유지, 접점 앞, 다음 볼 준비"라는 세 단어로 요약됩니다.</p>

            <h2 id="experience-transition-hard-straight-grass-concise-clay">경험과 전환 — 하드의 직선, 잔디의 간결, 점토의 인내</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡습니다. 잔디에선 토스를 낮추고 백스윙을 더 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 질주를 통제합니다. 점토에서는 회전을 조금 더해 낙구를 안정시키고, 네 번째나 다섯 번째 스트로크에서 드롭·슬라이스로 템포를 흔든 뒤 바로 직선으로 전환합니다. 표면이 달라져도 원칙은 동일합니다. 흐름을 먼저 안정시키고, 열린 틈에서만 칼을 뽑는다.</p>

            <h2 id="human-aspects-restraint-focus-team-first">인간적인 면모 — 절제, 집중, 그리고 팀 퍼스트</h2>
            <p>그의 인터뷰는 짧고 일관됩니다. 이긴 날은 준비가 맞았다고, 진 날은 수정이 필요하다고 담담히 말합니다. 코치와 트레이너의 이름을 먼저 언급하고, 경기장 스태프에게도 예의를 잃지 않습니다. 팬과의 소통은 차분하지만 따뜻하며, 사인을 기다리는 아이에게 눈높이를 맞추는 장면이 자주 포착됩니다. 강함을 과시하기보다 강함을 다루는 방식을 선택하는 유형입니다.</p>

            <h2 id="nationality-culture-artisan-country-learned-detail">국적과 문화 — 장인의 나라에서 배운 디테일</h2>
            <p>이탈리아의 장인 문화는 '작은 것이 전체를 완성한다'는 믿음을 강조합니다. 시너의 테니스에도 그 정신이 녹아 있습니다. 라켓 각도, 발의 방향, 토스의 높이 같은 미세 요소가 결과를 만든다는 확신이 그의 계획을 지탱합니다. 대표팀 이벤트에서 보이는 침착한 리더십은 개인을 넘어 공동체의 상징으로 확장됩니다.</p>

            <h2 id="relationships-rivals-speed-question-angle-answer">관계와 라이벌 — 속도로 묻고, 각으로 답한다</h2>
            <p>동시대 강자들과의 승부에서 시너는 속도로 질문합니다. 강한 톱스핀으로 밀어붙이는 상대에겐 라켓면을 더 닫아 플랫에 가깝게 맞서고, 네트를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만듭니다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 '같은 구역을 다른 속도'로 찌르는 방식으로 균형을 되찾습니다.</p>

            <h2 id="famous-scenes-center-depth-twice-down-line-once">명장면 — 중앙 깊이 두 번, 다운더라인 한 번</h2>
            <p>브레이크 포인트. 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 그는 백핸드를 몸 가까이 끌어당겨 라인으로 단호히 접습니다. 공이 흰 선을 스치며 미끄러질 때 관중의 숨이 잠시 멎고, 시너는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟습니다. 감정이 아니라 절차가 승부를 만든다는 믿음이 응축된 순간입니다.</p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>그는 라켓 밸런스를 과하게 머리쪽으로 보내지 않아 스윙 회복이 빠르고, 스트링 텐션은 기온과 공의 반발에 맞춰 소폭 조정합니다. 더운 날엔 텐션을 올려 반발을 제어하고, 실내에서는 텐션을 낮춰 체공 시간을 확보합니다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄입니다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 조정한다는 철학이 일관됩니다.</p>

            <h2 id="future-challenges-net-ahead-one-beat-more">앞으로의 과제 — 네트 앞에서 한 박자 더</h2>
            <p>그가 더 멀리 가기 위한 열쇠는 하프코트에서의 마무리 빈도입니다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 세컨드 서브 코스의 다양화를 통해 예측을 늦춘다면, 긴 경기에서도 에너지 관리가 쉬워질 것입니다. 이미 갖춘 속도와 정확성 위에 결말의 속도가 더해지면, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 호명될 가능성이 큽니다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성입니다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말합니다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성됩니다. 기록은 표가 되지만, 태도는 기억이 됩니다. 시너의 이름이 세월을 건너 사랑받을 이유가 바로 여기에 있습니다.</p>
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
                  <li><a href="https://en.wikipedia.org/wiki/Jannik_Sinner" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
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