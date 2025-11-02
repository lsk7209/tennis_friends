import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '스테파노스 치치파스 선수 프로필과 스토리',
  description: '원핸드 백핸드와 전진 본능, 표면별 전개와 멘탈 루틴까지—스테파노스 치치파스의 플레이 철학과 과제를 정리했습니다.',
  keywords: ['테니스', '스테파노스 치치파스', '선수 프로필', '스토리', '그리스'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/stefanos-tsitsipas',
  },
  openGraph: {
    title: '스테파노스 치치파스 선수 프로필과 스토리',
    description: '원핸드 백핸드와 전진 본능, 표면별 전개와 멘탈 루틴까지—스테파노스 치치파스의 플레이 철학과 과제를 정리했습니다.',
    url: 'https://www.tennisfrens.com/blog/stefanos-tsitsipas',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '스테파노스 치치파스 선수 프로필과 스토리',
    description: '원핸드 백핸드와 전진 본능, 표면별 전개와 멘탈 루틴까지—스테파노스 치치파스의 플레이 철학과 과제를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-family-court-aegean-wind', text: '성장 배경 — 가족의 코트, 에게해의 바람', depth: 2 },
  { id: 'playing-style-big-forehand-clear-onehand-forward', text: '경기 스타일 — 큰 포핸드, 선명한 원핸드, 전진의 결말', depth: 2 },
  { id: 'rhythm-selection-procedure-beats-emotion', text: '리듬과 선택 — 절차가 감정을 이긴다', depth: 2 },
  { id: 'return-transition-first-shake-two-beats', text: '리턴과 전환 — 첫 흔들림을 만드는 두 박자', depth: 2 },
  { id: 'surface-development-clay-patience-hard-straight-grass', text: '표면별 전개 — 점토의 인내, 하드의 직선, 잔디의 간결', depth: 2 },
  { id: 'human-aspects-restraint-etiquette-team-first', text: '인간적인 면모 — 절제와 예의, 그리고 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-greece-symbol-engrave-court', text: '국적과 문화 — 그리스의 상징을 코트에 새기다', depth: 2 },
  { id: 'relationships-rivals-speed-generation-line-answer', text: '관계와 라이벌 — 속도의 세대에 선으로 답하다', depth: 2 },
  { id: 'famous-scenes-backhand-down-line-opens-window', text: '명장면 — 백핸드 다운더라인이 열어젖히는 창', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-adjustment', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-return-position-second-sentence', text: '앞으로의 과제 — 리턴 포지션과 두 번째 문장', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '스테파노스 치치파스의 경기 스타일은 어떤가요?',
    a: '우아한 원핸드 백핸드와 과감한 전진, 리듬감 있는 서브가 특징입니다. 큰 포핸드로 공간을 만들고 원핸드로 문장을 닫는 전진형 테니스로 흐름을 설계합니다.'
  },
  {
    q: '치치파스의 성장 배경은 어떤가요?',
    a: '가족의 코트에서 시작했습니다. 코치였던 부모와 형제와 함께한 반복 훈련으로 동작을 줄이고 접점을 앞에 둔다는 한 문장을 배웠고, 이동이 잦은 유소년 시절에도 일지를 쓰며 하루의 루틴을 고정했습니다.'
  },
  {
    q: '치치파스의 강점은 무엇인가요?',
    a: '원핸드의 선과 전진의 용기가 최대 강점입니다. 우아한 원핸드 백핸드의 선명한 각과 과감한 전진으로 코트의 흐름을 설계하며, 리듬 있는 서브로 주도권을 잡습니다.'
  },
  {
    q: '치치파스의 인간적인 면모는 어떤가요?',
    a: '절제와 예의, 팀 퍼스트가 특징입니다. 인터뷰에서 준비와 팀을 먼저 언급하며, 긴 일정 속에서도 회복·수면·식단의 루틴을 생활로 고정해 컨디션의 파고를 낮춥니다.'
  },
  {
    q: '치치파스의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 리턴 포지션의 고정과 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 긴 경기에서도 에너지 관리가 수월해질 것입니다.'
  },
];

export default function StefanosTsitsipasBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="스테파노스 치치파스 — 원핸드의 선, 전진의 용기"
        excerpt="우아한 원핸드 백핸드와 과감한 전진, 리듬 있는 서브로 코트의 흐름을 설계하는 스테파노스 치치파스의 배경과 철학, 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '스테파노스 치치파스', '선수 프로필', '스토리', '그리스'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 9월 9일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="stefanos-tsitsipas-onehand-line-forward-courage">스테파노스 치치파스 — 원핸드의 선, 전진의 용기</h1>

            <p><strong>직답:</strong> 스테파노스 치치파스(Stefanos Tsitsipas)는 우아한 원핸드 백핸드와 과감한 전진, 리듬감 있는 서브로 흐름을 설계하는 그리스의 간판입니다.</p>

            <h2 id="growth-background-family-court-aegean-wind">성장 배경 — 가족의 코트, 에게해의 바람</h2>
            <p>그의 테니스는 가족으로부터 시작됐습니다. 코치였던 부모와 형제와 함께한 반복 훈련은 '동작을 줄이고 접점을 앞에 둔다'는 한 문장으로 요약됩니다. 이동이 잦은 유소년 시절에도 일지를 쓰며 하루의 루틴을 고정했고, 실내와 야외를 오가는 환경에서 바운드의 차이를 몸으로 익혔습니다. 작은 습관들이 모여 오늘의 침착함과 전진 결단을 만들었습니다.</p>

            <h2 id="playing-style-big-forehand-clear-onehand-forward">경기 스타일 — 큰 포핸드, 선명한 원핸드, 전진의 결말</h2>
            <p>치치파스의 포핸드는 넓은 궤도와 빠른 채찍질로 코트를 벌립니다. 백핸드는 원핸드 특유의 선명한 각으로 코너를 얇게 긁어 다운더라인을 열고, 높은 타점에서도 상체 회전으로 면을 오래 유지해 깊이를 확보합니다. 서브는 와이드·바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 리턴이 오면 하프코트에서 한 걸음 전진해 발리로 결말을 재촉합니다. 요약하면 큰 포핸드로 공간을 만들고, 원핸드로 문장을 닫는 전진형 테니스입니다.</p>

            <h2 id="rhythm-selection-procedure-beats-emotion">리듬과 선택 — 절차가 감정을 이긴다</h2>
            <p>포인트 사이 그는 스트링을 훑고 두 번의 깊은 호흡으로 리듬을 고정합니다. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급등하지 않습니다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이·길이를 확인하고, 3~4포인트 구간에서 라인을 얇게 써 균형을 기울입니다. 위험을 회피하지 않지만 근거 없는 도박을 하지 않는 일관성이 특징입니다.</p>

            <h2 id="return-transition-first-shake-two-beats">리턴과 전환 — 첫 흔들림을 만드는 두 박자</h2>
            <p>퍼스트 서브 리턴은 한두 걸음 뒤에서 시작해 탄도와 길이를 맞추고, 세컨드 서브에는 전진해 접점을 앞세웁니다. 이어지는 첫 스트로크는 중앙 깊은 볼로 각을 닫아두고, 세 번째 스트로크에서 코너의 문을 열어 상대의 스텝을 묶습니다. 수비 국면에서는 낮은 슬라이스로 시간을 벌어 복귀 각을 만들고, 바로 직선 카운터로 흐름을 되찾습니다.</p>

            <h2 id="surface-development-clay-patience-hard-straight-grass">표면별 전개 — 점토의 인내, 하드의 직선, 잔디의 간결</h2>
            <p>점토에선 회전을 더해 낙구를 안정시키고 랠리의 길이를 받아들이되, 네 번째나 다섯 번째 스트로크에서 드롭·슬라이스를 섞어 템포를 흔듭니다. 하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡고, 리턴 게임에서는 중앙 깊은 볼로 각을 지워 다음 볼에서 속도를 끌어올립니다. 잔디에서는 토스를 낮추고 백스윙을 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제합니다. 환경이 달라져도 원칙은 같습니다. 먼저 안정, 틈에서 가속.</p>

            <h2 id="human-aspects-restraint-etiquette-team-first">인간적인 면모 — 절제와 예의, 그리고 팀 퍼스트</h2>
            <p>인터뷰에서 그는 준비와 팀을 먼저 언급합니다. 잘된 날에는 계획이 맞았다고, 부족한 날에는 수정 항목이 분명하다고 말합니다. 팬에겐 미소와 눈맞춤을, 코트 스태프에겐 짧은 감사를 잊지 않습니다. 긴 일정 속에서도 회복·수면·식단의 루틴을 생활로 고정해 컨디션의 파고를 낮춥니다.</p>

            <h2 id="nationality-culture-greece-symbol-engrave-court">국적과 문화 — 그리스의 상징을 코트에 새기다</h2>
            <p>국기를 달고 코트에 설 때 그는 개인을 넘어 공동체의 상징임을 의식합니다. 밝은 제스처와 당당한 전진, 경기 후의 예의 바른 인사는 왜 그가 '대표 선수'라는 명칭과 잘 어울리는지 설명합니다. 작은 품위가 모여 큰 신뢰가 됩니다.</p>

            <h2 id="relationships-rivals-speed-generation-line-answer">관계와 라이벌 — 속도의 세대에 선으로 답하다</h2>
            <p>폭발적인 속도로 초반을 장악하는 동세대와 맞붙을 때, 치치파스는 원핸드의 각과 전진 발리로 리듬을 끊습니다. 네트를 서두르는 상대에게는 낮은 통과샷과 깊은 로브를 교차해 첫 시도를 주저하게 만들고, 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 속도로 찌릅니다. 늦게 닫히는 각의 미학이 후반으로 갈수록 힘을 냅니다.</p>

            <h2 id="famous-scenes-backhand-down-line-opens-window">명장면 — 백핸드 다운더라인이 열어젖히는 창</h2>
            <p>브레이크 포인트, 중앙 깊은 볼 두 개로 상대 스텝을 뒤로 밀어낸 뒤 그는 백핸드를 몸 가까이 끌어당겨 라인으로 단호히 접습니다. 공이 흰 선을 스치며 빠져나가면 관중의 숨이 잠시 멎고, 그는 같은 속도로 베이스라인을 밟습니다. 감정이 아닌 절차가 승부를 만든다는 믿음이 응축된 순간입니다.</p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>대회장 기온·습도에 따라 스트링 텐션을 소폭 조정하고, 라켓 밸런스는 과도한 헤드 헤비를 피해 회복 시간을 단축합니다. 실내에선 텐션을 약간 올려 접점의 흔들림을 줄이고, 바람이 많은 야외에서는 텐션을 낮춰 체공 시간을 확보합니다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄입니다.</p>

            <h2 id="future-challenges-return-position-second-sentence">앞으로의 과제 — 리턴 포지션과 두 번째 문장</h2>
            <p>한 단계 더 도약하려면 세컨드 서브 리턴 포지션의 고정과 하프코트 마무리의 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 수월해질 것입니다. 이미 갖춘 포핸드와 원핸드의 설득력 위에 '두 번째 문장의 속도'가 얹히면, 그의 이름은 큰 무대의 마지막 장면에 더 자주 남을 가능성이 큽니다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성입니다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말합니다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성됩니다. 기록은 표가 되지만, 태도는 기억이 됩니다. 그래서 치치파스의 테니스는 결과를 넘어 설득으로 남습니다.</p>
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
                  <li><a href="https://en.wikipedia.org/wiki/Stefanos_Tsitsipas" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
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