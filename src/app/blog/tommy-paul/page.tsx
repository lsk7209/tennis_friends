import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '토미 폴 선수 프로필과 스토리',
  description: '미국 하드코트의 전통을 현대적으로 번역하는 토미 폴의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '토미 폴', '선수 프로필', '스토리', '미국'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tommy-paul',
  },
  openGraph: {
    title: '토미 폴 선수 프로필과 스토리',
    description: '미국 하드코트의 전통을 현대적으로 번역하는 토미 폴의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
    url: 'https://www.tennisfrens.com/blog/tommy-paul',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '토미 폴 선수 프로필과 스토리',
    description: '미국 하드코트의 전통을 현대적으로 번역하는 토미 폴의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-junior-champion-routine-language', text: '성장 배경 — 주니어 챔피언이 배운 루틴의 언어', depth: 2 },
  { id: 'playing-style-speed-open-angle-finish', text: '경기 스타일 — 속도로 벌리고, 각으로 마무리', depth: 2 },
  { id: 'rhythm-selection-simple-procedure-erase-noise', text: '리듬과 선택 — 소음을 지우는 간결한 절차', depth: 2 },
  { id: 'surface-transition-hard-straight-grass-concise-clay', text: '표면별 전환 — 하드의 직선, 잔디의 간결, 점토의 인내', depth: 2 },
  { id: 'human-aspects-brightness-etiquette-team-first', text: '인간적인 면모 — 밝음, 예의, 그리고 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-us-hard-tradition-modern', text: '국적과 문화 — 미국 하드의 전통을 현대적으로', depth: 2 },
  { id: 'relationships-rivals-question-speed-answer-angle', text: '관계와 라이벌 — 질문은 속도, 답은 각도', depth: 2 },
  { id: 'famous-scenes-corner-opens-one-line-straight', text: '명장면 — 코너를 여는 한 줄의 직선', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-adjustment', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-second-serve-halfcourt-conclusion', text: '앞으로의 과제 — 두 번째 서브와 하프코트의 결말', depth: 2 },
  { id: 'fans-community-lasting-trust', text: '팬과 커뮤니티 — 오래 가는 신뢰', depth: 2 },
];

const faqs = [
  {
    q: '토미 폴의 경기 스타일은 어떤가요?',
    a: '가벼운 풋워크와 예리한 각, 과감한 전진이 특징입니다. 속도로 공간을 벌리고 각으로 문장을 닫으며, 첫 두 타구의 효율에서 출발해 하드코트의 시간을 단축해 흐름을 먼저 잡습니다.'
  },
  {
    q: '폴의 성장 배경은 어떤가요?',
    a: '미 동부의 빠른 하드에서 자란 그는 어린 시절부터 짧은 준비와 정확한 접점을 강조했습니다. 주니어 시절 굵직한 대회를 거치며 배운 것은 재능보다 루틴이었고, 일지에는 수면·회복·드릴 이행률이 먼저 적혔습니다.'
  },
  {
    q: '폴의 강점은 무엇인가요?',
    a: '속도와 각도가 최대 강점입니다. 가벼운 발과 예리한 각으로 흐름을 끊어먹으며, 과감한 전진으로 하프코트에서 발리·하프발리로 결말을 재촉합니다. 드롭과 슬라이스를 섞어 템포를 비틀고 각을 좁혀 속도를 끌어올립니다.'
  },
  {
    q: '폴의 인간적인 면모는 어떤가요?',
    a: '밝음, 예의, 팀 퍼스트가 특징입니다. 인터뷰는 짧고 경쾌하며, 잘된 날엔 동료와 스태프의 이름을 먼저 부릅니다. 강함을 과시하기보다 강함을 다루는 법에 집중하는 유형입니다.'
  },
  {
    q: '폴의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 코스 다양화와 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서의 전진 타이밍 반 박자 앞당김, 마무리 선택지를 고정하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function TommyPaulBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="토미 폴 — 속도와 각도로 조립하는 미국식 하드 테니스"
        excerpt="가벼운 발과 예리한 각, 과감한 전진으로 흐름을 끊어먹는 토미 폴의 성장, 스타일, 인간미와 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '토미 폴', '선수 프로필', '스토리', '미국'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 9월 24일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="tommy-paul-speed-angle-assemble-us-hard-tennis">토미 폴 — 속도와 각도로 조립하는 미국식 하드 테니스</h1>

            <p><strong>직답:</strong> 토미 폴(Tommy Paul)은 가벼운 풋워크와 예리한 각, 과감한 전진으로 하드코트의 시간을 단축해 흐름을 먼저 잡는 미국의 간판 선수다.</p>

            <h2 id="growth-background-junior-champion-routine-language">성장 배경 — 주니어 챔피언이 배운 루틴의 언어</h2>
            <p>미 동부의 빠른 하드에서 자란 그는 어린 시절부터 짧은 준비와 정확한 접점을 강조했다. 주니어 시절 굵직한 대회를 거치며 배운 것은 재능보다 루틴이었다. 일지에는 샷의 질보다 '수면·회복·드릴 이행률'이 먼저 적혔고, 원정 중에도 스트레칭 순서와 워밍업 시간을 거의 바꾸지 않았다. 작은 절차들이 쌓여 큰 관중 앞에서도 손의 감각을 잃지 않는 오늘의 침착함을 만든다.</p>

            <h2 id="playing-style-speed-open-angle-finish">경기 스타일 — 속도로 벌리고, 각으로 마무리</h2>
            <p>폴의 테니스는 '첫 두 타구의 효율'에서 출발한다. 서브는 와이드와 바디를 교차해 리턴 포지션을 묶고, 3구에서 포핸드 직선으로 빈 코너를 연다. 포핸드는 큰 회전보다 빠른 전진으로 깊이를 만들고, 백핸드는 면을 단단히 세워 실수를 관리한다. 짧은 볼이 보이면 하프코트에서 한 걸음 더 들어가 발리·하프발리로 결말을 재촉한다. 필요할 때 드롭과 슬라이스를 섞어 템포를 비틀고, 바로 다음 볼에서 각을 좁혀 속도를 한 번 더 끌어올린다. 요약하면 속도로 공간을 벌리고, 각으로 문장을 닫는 테니스다.</p>

            <h2 id="rhythm-selection-simple-procedure-erase-noise">리듬과 선택 — 소음을 지우는 간결한 절차</h2>
            <p>포인트 사이 폴의 루틴은 단순하다. 라켓 스트링을 정리하고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 밀려도 루틴의 길이를 바꾸지 않아 심박이 급히 치솟지 않는다. 타이브레이크 초반에는 네트를 넉넉히 넘기는 구질로 높이·길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 위험을 회피하지 않되, 근거 없는 도박은 하지 않는 태도가 특징이다.</p>

            <h2 id="surface-transition-hard-straight-grass-concise-clay">표면별 전환 — 하드의 직선, 잔디의 간결, 점토의 인내</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡는다. 잔디에선 토스를 낮추고 백스윙을 짧게 가져가 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 폭주를 제어한다. 점토에서는 회전을 더해 낙구를 안정시키고, 길어진 랠리 중간에 드롭으로 템포 차를 만든 뒤 전진 발리로 결말을 서두른다. 표면이 달라져도 원칙은 같다. 흐름을 먼저 안정시키고, 열린 순간에만 칼을 꺼낸다.</p>

            <h2 id="human-aspects-brightness-etiquette-team-first">인간적인 면모 — 밝음, 예의, 그리고 팀 퍼스트</h2>
            <p>폴의 인터뷰는 짧고 경쾌하다. 잘된 날엔 동료와 스태프의 이름을 먼저 부르고, 부족한 날엔 수정 항목을 한두 줄로 또박또박 말한다. 팬에게는 미소와 눈맞춤을, 경기장 스태프에게는 짧은 감사 인사를 잊지 않는다. 코트 밖에서는 코어·유연성 루틴을 생활화해 긴 시즌의 요동을 줄인다. 강함을 과시하기보다 강함을 다루는 법에 집중하는 유형이다.</p>

            <h2 id="nationality-culture-us-hard-tradition-modern">국적과 문화 — 미국 하드의 전통을 현대적으로</h2>
            <p>강서브·퍼스트볼 중심의 미국식 문법을 폴은 현대적으로 다듬었다. 무작정 힘으로 밀기보다 첫 두 타구의 구조로 득점 확률을 높이고, 리턴 게임에선 중앙 깊은 볼로 각을 지운 뒤 다음 스트로크에서 속도를 붙인다. 대표 팀 이벤트에서 보이는 매너와 에너지는 왜 그가 '팬 친화적 에이스'로 불리는지 설명한다.</p>

            <h2 id="relationships-rivals-question-speed-answer-angle">관계와 라이벌 — 질문은 속도, 답은 각도</h2>
            <p>동세대 강자들과의 승부에서 그는 속도로 질문을 던지고, 상대의 반응에서 각을 읽는다. 네트를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만들고, 강한 리턴러에겐 바디 서브 비중을 높여 스텝을 묶는다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 느낌으로 찌른다. 작은 수정이 후반으로 갈수록 큰 차이를 만든다.</p>

            <h2 id="famous-scenes-corner-opens-one-line-straight">명장면 — 코너를 여는 한 줄의 직선</h2>
            <p>브레이크 포인트. 와이드 서브로 코트를 벌린 뒤 돌아오는 짧은 리턴을 그는 한 발 안으로 파고들어 포핸드 직선을 박는다. 공이 사이드라인을 스치며 미끄러지는 순간 관중의 탄성이 터지고, 폴은 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟는다. 감정이 아니라 절차가 승부를 완성한다는 믿음이 응축된 장면이다.</p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>라켓 밸런스를 과하게 머리쪽으로 보내지 않아 스윙 회복이 빠르고, 스트링 텐션은 기온과 공의 반발에 맞춰 소폭 조정한다. 더운 날엔 텐션을 올려 반발을 제어하고, 실내에서는 텐션을 낮춰 체공 시간을 확보한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄인다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 바꾸는 철학이 일관된다.</p>

            <h2 id="future-challenges-second-serve-halfcourt-conclusion">앞으로의 과제 — 두 번째 서브와 하프코트의 결말</h2>
            <p>폴이 더 높이 도약하려면 세컨드 서브 코스의 다양화와 하프코트 마무리의 일관성이 관건이다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 마무리 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 속도와 각의 설득력 위에 결말의 안정이 얹히면, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 호명될 가능성이 크다.</p>

            <h2 id="fans-community-lasting-trust">팬과 커뮤니티 — 오래 가는 신뢰</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다. 기록은 표가 되지만, 태도는 기억이 된다. 폴의 이름이 세월을 건너 사랑받을 이유가 여기에 있다.</p>
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
                  <li><a href="https://en.wikipedia.org/wiki/Tommy_Paul_(tennis)" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
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