import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '카스페르 루드 선수 프로필과 스토리',
  description: '점토에서 빛나는 인내와 정밀한 구질 운영, 전술적 전진으로 성장한 카스페르 루드의 배경과 플레이 철학, 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '카스페르 루드', '선수 프로필', '스토리', '노르웨이'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/casper-ruud',
  },
  openGraph: {
    title: '카스페르 루드 선수 프로필과 스토리',
    description: '점토에서 빛나는 인내와 정밀한 구질 운영, 전술적 전진으로 성장한 카스페르 루드의 배경과 플레이 철학, 라이벌 구도를 정리했습니다.',
    url: 'https://www.tennisfrens.com/blog/casper-ruud',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카스페르 루드 선수 프로필과 스토리',
    description: '점토에서 빛나는 인내와 정밀한 구질 운영, 전술적 전진으로 성장한 카스페르 루드의 배경과 플레이 철학, 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-nordic-discipline-family-coaching', text: '성장 배경 — 북유럽의 규율과 가족 코칭', depth: 2 },
  { id: 'playing-style-length-angle-late-closing-forward', text: '경기 스타일 — 길이, 각, 그리고 늦게 닫히는 전진', depth: 2 },
  { id: 'return-positioning-departure-change-small-forward', text: '리턴과 포지셔닝 — 출발점을 바꾸는 작은 전진', depth: 2 },
  { id: 'clay-grammar-patience-weapon-stepwise-development', text: '점토에서의 문법 — 인내를 무기로 바꾸는 단계식 전개', depth: 2 },
  { id: 'hard-grass-expansion-concise-preparation-quick-conclusion', text: '하드·잔디로의 확장 — 간결한 준비, 빠른 결말', depth: 2 },
  { id: 'rhythm-selection-emotion-low-procedure-constant', text: '리듬과 선택 — 감정은 낮게, 절차는 일정하게', depth: 2 },
  { id: 'human-aspects-restraint-etiquette-team-first', text: '인간적인 면모 — 절제와 예의, 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-small-market-big-symbol', text: '국적과 문화 — 작은 시장에서 큰 상징으로', depth: 2 },
  { id: 'relationships-rivals-speed-generation-length-answer', text: '관계와 라이벌 — 속도의 세대에 길이로 답하다', depth: 2 },
  { id: 'famous-scenes-center-twice-line-once-refinement', text: '명장면 — 중앙 두 번, 라인 한 번의 정교함', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-adjustment', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-second-serve-halfcourt-conclusion', text: '앞으로의 과제 — 세컨드 서브와 하프코트의 결말', depth: 2 },
];

const faqs = [
  {
    q: '카스페르 루드의 경기 스타일은 어떤가요?',
    a: '긴 랠리를 기꺼이 받아들이는 인내와 정밀한 구질, 전술적 전진이 특징입니다. 길이의 누적에서 출발하며, 확률 높은 선택을 꾸준히 누적해 점토와 하드에서 안정적인 승률을 쌓습니다.'
  },
  {
    q: '루드의 성장 배경은 어떤가요?',
    a: '선수였던 아버지의 세심한 지도로 기초가 다져졌습니다. 북유럽의 규율과 가족 코칭으로 워밍업·스트레칭·첫 서브 루틴을 매일 같은 순서로 반복했고, 실내와 야외를 오가는 환경에서 바운드·바람·온도 변화에 민감해지는 감각을 길렀습니다.'
  },
  {
    q: '루드의 강점은 무엇인가요?',
    a: '인내와 정밀도가 최대 강점입니다. 긴 랠리를 두려워하지 않으며, 정밀한 구질과 전술적 전진으로 점토를 지배합니다. 화려함보다 확률 높은 선택을 꾸준히 누적하는 유형입니다.'
  },
  {
    q: '루드의 인간적인 면모는 어떤가요?',
    a: '절제와 예의, 팀 퍼스트가 특징입니다. 인터뷰에서 팀을 먼저 언급하며, 코트 밖에서는 회복·수면·식단의 루틴을 생활로 고정해 긴 시즌의 파고를 낮춥니다.'
  },
  {
    q: '루드의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 코스 다양화와 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function CasperRuudBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="카스페르 루드 — 인내와 정밀도로 짓는 점토의 문장"
        excerpt="긴 랠리를 두려워하지 않는 인내, 정밀한 구질과 전술적 전진으로 점토를 지배하는 카스페르 루드의 성장, 스타일, 인간적인 면모와 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '카스페르 루드', '선수 프로필', '스토리', '노르웨이'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 9월 29일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="casper-ruud-patience-precision-build-clay-sentence">카스페르 루드 — 인내와 정밀도로 짓는 점토의 문장</h1>

            <p><strong>직답:</strong> 카스페르 루드(Casper Ruud)는 긴 랠리를 기꺼이 받아들이는 인내와 정밀한 구질, 전술적 전진으로 점토와 하드에서 안정적인 승률을 쌓는 노르웨이의 간판이다.</p>

            <h2 id="growth-background-nordic-discipline-family-coaching">성장 배경 — 북유럽의 규율과 가족 코칭</h2>
            <p>선수였던 아버지의 세심한 지도로 기초가 다져졌다. 훈련 노트에는 화려한 지표보다 '오늘의 수정 한 줄'이 먼저 적혔고, 워밍업·스트레칭·첫 서브 루틴을 매일 같은 순서로 반복했다. 실내와 야외를 오가는 북유럽 환경은 바운드·바람·온도 변화에 민감해지는 감각을 길렀고, 루드는 "동작을 줄이고 접점을 앞에 둔다"는 원칙을 생활의 리듬으로 고정했다. 이 질서가 큰 관중과 긴 랠리 속에서도 표정을 흔들리지 않게 만든다.</p>

            <h2 id="playing-style-length-angle-late-closing-forward">경기 스타일 — 길이, 각, 그리고 늦게 닫히는 전진</h2>
            <p>루드의 테니스는 길이의 누적에서 출발한다. 포핸드는 회전과 직선의 비율을 상황에 맞게 조절해 코너 깊숙이 떨어뜨리고, 백핸드는 양손의 단단한 면으로 안전을 확보한 뒤 다운더라인으로 균형을 무너뜨린다. 서브는 와이드·바디를 교차해 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉한다. 수비 국면에서는 낮게 깔린 슬라이스로 타점을 내리고, 바로 다음 볼에서 크로스를 직선으로 접어 카운터를 꽂는다. 화려함보다 확률 높은 선택을 꾸준히 누적하는 유형이다.</p>

            <h2 id="return-positioning-departure-change-small-forward">리턴과 포지셔닝 — 출발점을 바꾸는 작은 전진</h2>
            <p>퍼스트 리턴은 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세운다. 리턴 이후 중앙 깊은 볼로 각을 닫아두고, 3구에서만 코너를 열어 작은 금을 만든다. 네트를 서두르는 상대에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만든다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌른다.</p>

            <h2 id="clay-grammar-patience-weapon-stepwise-development">점토에서의 문법 — 인내를 무기로 바꾸는 단계식 전개</h2>
            <p>점토에서 루드는 랠리 길이를 기꺼이 받아들인다. 회전을 더해 낙구를 안정시키고, 네 번째나 다섯 번째 스트로크에서 드롭·슬라이스를 섞어 템포를 비튼 뒤 곧바로 직선 전환으로 결말을 설계한다. 상대가 각을 열면 루드는 각보다 길이로 응수해 스텝을 뒤로 밀어낸 뒤, 한 박자 늦게 닫히는 다운더라인으로 균형을 꺾는다. 결과적으로 포인트는 길어 보이지만, 결정의 순간은 간결하다.</p>

            <h2 id="hard-grass-expansion-concise-preparation-quick-conclusion">하드·잔디로의 확장 — 간결한 준비, 빠른 결말</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴으로 주도권을 잡는다. 슬라이스 리턴을 섞어 랠리 속도를 조절하고, 짧은 볼이 보이면 전진 발리로 결말을 서두른다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 낮은 바운드에 무릎을 더 굽혀 접점을 유지한다. 표면이 달라져도 원칙은 같다. 먼저 안정, 틈에서 가속.</p>

            <h2 id="rhythm-selection-emotion-low-procedure-constant">리듬과 선택 — 감정은 낮게, 절차는 일정하게</h2>
            <p>포인트 사이 루틴은 단출하다. 라켓 스트링을 정리하고 두 번의 깊은 호흡, 일정한 토스. 스코어가 밀려도 루틴의 길이를 바꾸지 않아 심박의 급등을 막는다. 타이브레이크 초반엔 높이·길이를 확인하는 안전한 구질을 택하고, 3~4포인트 구간에서만 라인을 얇게 써 균형을 기울인다. 위험을 회피하지 않되 근거 없는 도박은 하지 않는 판단이 일관된다.</p>

            <h2 id="human-aspects-restraint-etiquette-team-first">인간적인 면모 — 절제와 예의, 팀 퍼스트</h2>
            <p>인터뷰에서 그는 팀을 먼저 언급한다. 이긴 날에는 준비가 맞았다고, 진 날에는 수정이 필요하다고 담담히 말한다. 팬과 코트 스태프에게 보내는 짧은 감사 인사가 자연스럽고, 어린 팬에게 눈높이를 맞추는 태도가 인상적이다. 코트 밖에서는 회복·수면·식단의 루틴을 생활로 고정해 긴 시즌의 파고를 낮춘다.</p>

            <h2 id="nationality-culture-small-market-big-symbol">국적과 문화 — 작은 시장에서 큰 상징으로</h2>
            <p>노르웨이의 테니스 인프라는 크지 않다. 루드는 개인의 서사를 공동체의 상징으로 확장하며 다음 세대를 위한 '가능성의 장면'을 만든다. 국기를 달고 코트에 들어설 때 그는 개인 기록을 넘어 국가 스포츠의 이정표를 의식한다.</p>

            <h2 id="relationships-rivals-speed-generation-length-answer">관계와 라이벌 — 속도의 세대에 길이로 답하다</h2>
            <p>폭발적인 가속으로 초반을 장악하는 동세대와 맞붙을 때, 루드는 중앙 깊은 볼과 각도 제한으로 속도를 상쇄한다. 네트를 서두르는 상대에겐 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 만들고, 같은 패턴이 반복되면 세 번째에는 타점·스윙 길이를 바꿔 다른 리듬을 강요한다. 작은 수정이 후반의 큰 차이를 만든다.</p>

            <h2 id="famous-scenes-center-twice-line-once-refinement">명장면 — 중앙 두 번, 라인 한 번의 정교함</h2>
            <p>브레이크 포인트. 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤, 루드는 백핸드를 몸 가까이 끌어당겨 라인으로 단호히 접는다. 공이 흰 선을 스치며 미끄러질 때 관중의 숨이 잠시 멎고, 그는 같은 속도로 베이스라인을 밟는다. 감정이 아닌 절차가 승부를 만든다는 믿음이 응축된 순간이다.</p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>대회장 기온·습도에 맞춰 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 회복 시간을 단축한다. 실내에서는 텐션을 약간 올려 접점의 흔들림을 줄이고, 바람이 많은 야외에서는 텐션을 낮춰 체공 시간을 확보한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목 흔들림을 줄인다.</p>

            <h2 id="future-challenges-second-serve-halfcourt-conclusion">앞으로의 과제 — 세컨드 서브와 하프코트의 결말</h2>
            <p>더 높이 도약하려면 세컨드 서브 코스의 다양화와 하프코트 마무리의 일관성이 관건이다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 인내와 정밀 위에 결말의 속도가 얹히면, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 남을 가능성이 크다.</p>
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
                  <li><a href="https://en.wikipedia.org/wiki/Casper_Ruud" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
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