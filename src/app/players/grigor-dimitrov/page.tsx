import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '그리고르 디미트로프 선수 프로필과 스토리',
  description: '원핸드 백핸드와 노련한 전술로 커리어의 두 번째 전성기를 만든 그리고르 디미트로프의 성장 배경, 경기 스타일, 인간적인 면모와 과제를 정리했습니다.',
  keywords: ['테니스', '그리고르 디미트로프', '선수 프로필', '스토리', '불가리아'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/grigor-dimitrov',
  },
  openGraph: {
    title: '그리고르 디미트로프 선수 프로필과 스토리',
    description: '원핸드 백핸드와 노련한 전술로 커리어의 두 번째 전성기를 만든 그리고르 디미트로프의 성장 배경, 경기 스타일, 인간적인 면모와 과제를 정리했습니다.',
    url: 'https://www.tennisfrens.com/players/grigor-dimitrov',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '그리고르 디미트로프 선수 프로필과 스토리',
    description: '원핸드 백핸드와 노련한 전술로 커리어의 두 번째 전성기를 만든 그리고르 디미트로프의 성장 배경, 경기 스타일, 인간적인 면모와 과제를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-small-club-big-dream', text: '성장 배경 — 작은 클럽에서 시작된 큰 꿈', depth: 2 },
  { id: 'playing-style-onehand-backhand-forward', text: '경기 스타일 — 원핸드 백핸드의 선, 전진의 용기', depth: 2 },
  { id: 'rhythm-selection-procedure-power-relax-risk', text: '리듬과 선택 — 위험을 누그러뜨리는 절차의 힘', depth: 2 },
  { id: 'experience-transition-maturity-through-ups-downs', text: '경험과 전환 — 부침을 지나 성숙으로', depth: 2 },
  { id: 'human-aspects-dignity-care-humor', text: '인간적인 면모 — 품위, 배려, 그리고 유머', depth: 2 },
  { id: 'nationality-culture-small-country-big-symbol', text: '국적과 문화 — 작은 나라의 큰 상징', depth: 2 },
  { id: 'relationships-rivals-mirror-like-reflect', text: '관계와 라이벌 — 거울처럼 비추는 경기', depth: 2 },
  { id: 'famous-scenes-backhand-down-line-opens-window', text: '명장면 — 백핸드 다운더라인이 여는 창', depth: 2 },
  { id: 'equipment-details-tension-contact-sense', text: '장비와 디테일 — 텐션과 접점의 감각', depth: 2 },
  { id: 'future-challenges-conclusion-simplicity-stronger', text: '앞으로의 과제 — 결말의 간결함을 더 단단하게', depth: 2 },
  { id: 'fans-community-lasting-trust', text: '팬과 커뮤니티 — 오래 가는 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '그리고르 디미트로프의 경기 스타일은 어떤가요?',
    a: '원핸드 백핸드의 미학과 노련한 전술 운용이 특징입니다. 선명한 곡선을 그리는 백핸드와 상황에 맞춘 포핸드, 하프코트 전진으로 효율을 위한 우아함을 보여주며, 성숙해진 멘탈로 커리어의 두 번째 절정을 만들고 있습니다.'
  },
  {
    q: '디미트로프의 성장 배경은 어떤가요?',
    a: '불가리아 소도시의 클럽 코트에서 자란 그는 낡은 볼과 울퉁불퉁한 바닥에 익숙했습니다. 타점의 오차를 줄이는 법과 발의 각도를 미세 조정하는 법을 일찍 배웠고, 청소년기 유럽 서킷을 돌며 다양한 표면을 경험했습니다.'
  },
  {
    q: '디미트로프의 강점은 무엇인가요?',
    a: '우아함과 근성이 최대 강점입니다. 원핸드 백핸드의 선명한 곡선과 전진의 용기, 절차의 힘으로 위험을 누그러뜨리며, 부침을 지나 성숙으로 도달한 멘탈이 큰 무대 후반 라운드에서 안정적인 경기를 만들어냅니다.'
  },
  {
    q: '디미트로프의 인간적인 면모는 어떤가요?',
    a: '품위, 배려, 유머가 특징입니다. 인터뷰에서 상대와 팀을 먼저 언급하며, 패배 뒤에도 책임을 자기 쪽으로 당기고, 코트 정리 요원과 볼퍼슨에게 먼저 고개를 숙입니다. 품위가 이미지가 아니라 습관임을 보여주는 선수입니다.'
  },
  {
    q: '디미트로프의 미래 전망은 어떻게 되나요?',
    a: '결말의 간결함을 더 단단하게 만드는 것이 과제입니다. 하프코트에서 한 박자 빠른 결말, 세컨드 서브 코스 다양화, 리턴 직후 3구에서의 과감한 전진 빈도를 높이면 긴 경기에서도 에너지 관리가 수월해질 것입니다.'
  },
];

export default function GrigorDimitrovBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="그리고르 디미트로프 — 우아함과 근성을 다시 정의한 리바이벌"
        excerpt="원핸드 백핸드의 미학과 노련한 전술, 성숙한 멘탈로 커리어의 두 번째 절정을 만드는 그리고르 디미트로프의 성장, 스타일, 인간적 면모를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '그리고르 디미트로프', '선수 프로필', '스토리', '불가리아'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 8월 27일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="grigor-dimitrov-elegance-tenacity-redefined-revival">그리고르 디미트로프 — 우아함과 근성을 다시 정의한 리바이벌</h1>

            <p><strong>직답:</strong> 그리고르 디미트로프(Grigor Dimitrov)는 원핸드 백핸드의 미학과 노련한 전술 운용, 성숙해진 멘탈로 커리어의 두 번째 절정을 만든 불가리아의 간판 선수다.</p>

            <h2 id="growth-background-small-club-big-dream">성장 배경 — 작은 클럽에서 시작된 큰 꿈</h2>
            <p>불가리아 소도시의 클럽 코트에서 자란 그는 낡은 볼과 울퉁불퉁한 바닥에 익숙했다. 그래서 일찍부터 타점의 오차를 줄이는 법, 발의 각도를 미세 조정하는 법을 배웠다. 청소년기 유럽 서킷을 돌며 다양한 표면을 경험했고, 이동이 잦은 환경에서도 루틴을 지키는 습관이 자리 잡았다. 하루 훈련이 끝나면 공책에 '잘 된 샷 3개'와 '고칠 점 3개'를 적었고, 이 간단한 기록이 오늘의 침착함을 만들었다.</p>

            <h2 id="playing-style-onehand-backhand-forward">경기 스타일 — 원핸드 백핸드의 선, 전진의 용기</h2>
            <p>디미트로프의 백핸드는 선명한 곡선을 그리며 코트 구석을 긁어낸다. 높은 타점에서도 손목의 긴장을 최소화해 라켓면을 오래 유지하고, 임팩트 뒤엔 가볍게 상체를 열어 각을 만든다. 포핸드는 회전량을 상황에 맞춰 조절해 크로스로 상대를 밖으로 밀어낸 뒤, 다운더라인으로 결말을 짓는다. 서브는 와이드와 바디의 비율을 바꿔 첫 두 타구의 구조를 설계하고, 짧은 볼이 보이면 하프코트에서 한 걸음 전진해 발리로 마무리한다. 화려함을 위한 장식이 아니라, 효율을 위한 우아함이 그의 핵심이다.</p>

            <h2 id="rhythm-selection-procedure-power-relax-risk">리듬과 선택 — 위험을 누그러뜨리는 절차의 힘</h2>
            <p>그는 포인트 사이의 절차를 엄격하게 반복한다. 라켓 스트링을 훑고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 흔들려도 루틴의 길이를 바꾸지 않아 심박이 급히 오르지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 리듬을 확인하고, 3~4포인트 구간에서만 라인을 얇게 쓴다. 이 '미세한 가감' 덕분에 긴 랠리에서도 실수의 폭이 좁다.</p>

            <h2 id="experience-transition-maturity-through-ups-downs">경험과 전환 — 부침을 지나 성숙으로</h2>
            <p>초기의 그는 재능으로 칭송받았지만, 기복과 부상, 과감함과 안정 사이의 줄타기가 숙제로 남았다. 최근 몇 시즌 동안 그는 루틴을 생활로 옮겼다. 회복과 수면·식단의 규칙을 먼저 지키고, 경기 플랜은 간결한 문장으로 묶었다. "서브로 공간, 백핸드로 각, 전진으로 결말." 큰 틀은 그대로 두고 디테일만 조정하는 방식이 장기전에서 힘을 냈고, 마침내 큰 무대 후반 라운드에서 안정적으로 자신의 테니스를 꺼내게 했다.</p>

            <h2 id="human-aspects-dignity-care-humor">인간적인 면모 — 품위, 배려, 그리고 유머</h2>
            <p>디미트로프의 인터뷰는 늘 상대와 팀을 먼저 언급한다. 패배 뒤에도 책임의 방향을 자기 쪽으로 당기고, 승리한 날엔 스태프와 팬에게 차례로 감사를 전한다. 코트 밖에서는 장난기 섞인 유머로 분위기를 풀지만, 경기장에서는 코트 정리 요원과 볼퍼슨에게 먼저 고개를 숙인다. 품위가 이미지가 아니라 습관임을 보여주는 선수다.</p>

            <h2 id="nationality-culture-small-country-big-symbol">국적과 문화 — 작은 나라의 큰 상징</h2>
            <p>불가리아의 스포츠는 자주 '끈기'와 '자부심'으로 설명된다. 디미트로프는 개인의 서사를 국가의 상징으로 확장했다. 국기를 달고 코트에 들어설 때 그는 '한 장면이 한 세대를 바꿀 수 있다'는 믿음을 잊지 않는다. 조용한 제스처와 꾸준한 결과는 어린 팬들의 롤모델로 이어졌다.</p>

            <h2 id="relationships-rivals-mirror-like-reflect">관계와 라이벌 — 거울처럼 비추는 경기</h2>
            <p>동시대 강자들과의 승부에서 그는 상대의 강점을 거울처럼 받아 적응한다. 강한 리턴러를 만나면 퍼스트 서브 확률을 끌어올리고 3구 패턴을 단순화한다. 네트를 서둘러 점령하는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만든다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 속도를 바꿔 같은 구역을 다른 느낌으로 찌른다. 승부가 길어질수록 '작은 수정'이 큰 차이를 만든다.</p>

            <h2 id="famous-scenes-backhand-down-line-opens-window">명장면 — 백핸드 다운더라인이 여는 창</h2>
            <p>브레이크 포인트, 랠리의 호흡이 잠시 멎는 순간. 그는 백핸드를 몸 가까이 끌어당겨 라인을 가른다. 공이 흰 선을 스치며 빠져나가면 관중의 탄성이 터지고, 그는 표정을 바꾸지 않은 채 네트를 향해 두 걸음 전진한다. 준비와 결단, 그리고 설명 가능한 과감함—그의 테니스가 가진 설득력이 한 장면에 응축된다.</p>

            <h2 id="equipment-details-tension-contact-sense">장비와 디테일 — 텐션과 접점의 감각</h2>
            <p>그는 라켓 텐션을 대회장 기온과 공의 반발에 맞춰 소폭 조정한다. 컨디션이 무거운 날에는 텐션을 낮춰 체공 시간을 확보하고, 실내에서는 텐션을 높여 접점의 흔들림을 줄인다. 신발은 측면 지지력이 강한 모델을 선호해 전진·후퇴의 잦은 전환에서도 발목의 안정성을 확보한다. 장비가 플레이를 지배하지 않도록, 플레이가 요구하는 만큼만 장비를 조정한다는 철학이 일관된다.</p>

            <h2 id="future-challenges-conclusion-simplicity-stronger">앞으로의 과제 — 결말의 간결함을 더 단단하게</h2>
            <p>그가 더 멀리 가기 위해 필요한 것은 하프코트에서의 '한 박자 빠른' 결말이다. 세컨드 서브 코스의 다양화, 리턴 직후 3구에서의 과감한 전진 빈도를 소폭 높인다면, 긴 경기에서도 에너지 관리가 훨씬 수월해진다. 이미 갖춘 우아함 위에 결말의 속도가 얹히면, 그의 이름은 큰 무대의 마지막 장면에 더 자주 호명될 것이다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 배움을 먼저 말한다. 기록은 표가 되지만, 태도는 기억이 된다. 디미트로프의 이름이 세월을 건너 사랑받을 이유가 여기에 있다.</p>
          </div>

          {/* Related Links */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              📚 관련 자료
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">내부 링크</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/players" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">🏆 선수 프로필</Link></li>
                  <li><Link href="/utility/ntrp-test" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">🎯 실력 테스트</Link></li>
                  <li><Link href="/utility/play-style-test" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">🎾 플레이 스타일 테스트</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">외부 자료</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">ATP 투어 공식 사이트</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Grigor_Dimitrov" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">위키피디아 프로필</a></li>
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