import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '벤 셸턴 선수 프로필과 스토리',
  description: '좌손 강서브와 대담한 전진으로 하드와 잔디를 흔드는 벤 셸턴의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '벤 셸턴', '선수 프로필', '스토리', '미국'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/ben-shelton',
  },
  openGraph: {
    title: '벤 셸턴 선수 프로필과 스토리',
    description: '좌손 강서브와 대담한 전진으로 하드와 잔디를 흔드는 벤 셸턴의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
    url: 'https://www.tennisfrens.com/blog/ben-shelton',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '벤 셸턴 선수 프로필과 스토리',
    description: '좌손 강서브와 대담한 전진으로 하드와 잔디를 흔드는 벤 셸턴의 성장 배경, 경기 스타일, 인간적인 면모와 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-track-court-speed-language', text: '성장 배경 — 트랙에서 코트로, 속도의 언어를 배우다', depth: 2 },
  { id: 'playing-style-left-hand-trajectory-outside-inside', text: '경기 스타일 — 왼손 궤적, 바깥에서 안으로 파고드는 힘', depth: 2 },
  { id: 'rhythm-selection-emotion-hot-procedure-cold', text: '리듬과 선택 — 감정은 뜨겁게, 절차는 차갑게', depth: 2 },
  { id: 'experience-transition-hard-grass-indoor-expansion', text: '경험과 전환 — 하드에서 잔디·실내로 확장하는 법', depth: 2 },
  { id: 'human-aspects-brightness-etiquette-team-first', text: '인간적인 면모 — 밝음, 예의, 그리고 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-us-hard-tradition-new-generation', text: '국적과 문화 — 미국 하드의 전통을 신세대의 속도로', depth: 2 },
  { id: 'relationships-rivals-question-speed-answer-angle', text: '관계와 라이벌 — 질문은 속도로, 답은 각도로', depth: 2 },
  { id: 'famous-scenes-ad-court-wide-empty-space', text: '명장면 — 애드코트 와이드, 그리고 빈 공간', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-adjustment', text: '장비와 디테일 — 텐션·밸런스·접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-second-sentence-completeness', text: '앞으로의 과제 — 두 번째 문장의 완성도', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '벤 셸턴의 경기 스타일은 어떤가요?',
    a: '좌손의 폭발적 서브와 대담한 전진, 카운터 본능이 특징입니다. 애드코트 와이드로 크게 휘어나가는 킥성 구질로 리턴러를 코트 밖으로 끌어내고, 첫 타에서 공간을 벌리고 두 번째에서 결말을 재촉하는 테니스로 큰 코트의 시간을 압축합니다.'
  },
  {
    q: '셸턴의 성장 배경은 어떤가요?',
    a: '트랙에서 코트로 전환한 그는 빠른 운동 DNA를 가지고 있습니다. 어릴 때부터 단거리 달리기와 점프 동작을 접했고, 대학 무대에서 체계적인 피지컬 트레이닝을 거치며 폭발→회복→재가속의 리듬을 몸에 새겼습니다. 화려한 기술보다 기본기의 견고함과 일상을 강조하는 아버지 코치의 지도 아래 자랐습니다.'
  },
  {
    q: '셸턴의 강점은 무엇인가요?',
    a: '폭발적 서브와 대담한 전진이 최대 강점입니다. 좌손 서브의 파괴력으로 첫 타에서 공간을 벌리고, 카운터 본능으로 흐름을 뒤집으며, 감각적인 드롭과 발리를 섞어 경기를 단숨에 뒤집습니다. 신세대의 속도로 큰 무대에서 존재감을 증명합니다.'
  },
  {
    q: '셸턴의 인간적인 면모는 어떤가요?',
    a: '밝음, 예의, 팀 퍼스트가 특징입니다. 인터뷰는 짧고 경쾌하며, 잘된 날엔 동료와 스태프의 이름을 먼저 부릅니다. 팬을 대할 때 미소와 눈맞춤을 잊지 않고, 강함을 과시하기보다 다루는 법을 배운 선수입니다.'
  },
  {
    q: '셸턴의 미래 전망은 어떻게 되나요?',
    a: '두 번째 문장의 완성도가 과제입니다. 세컨드 서브 코스 다양화, 리턴 직후 3구에서의 전진 타이밍 고정, 하프코트 마무리 선택지를 단순화하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다. 실수의 폭을 좁히는 기술이 더해지면 큰 무대의 마지막 장면에 더 자주 호명될 것입니다.'
  },
];

export default function BenSheltonBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="벤 셸턴 — 폭발적 서브와 대담한 전진이 만든 신세대의 속도"
        excerpt="좌손 서브의 파괴력과 대담한 전진, 감각적인 드롭과 발리를 섞어 흐름을 뒤집는 벤 셸턴의 성장, 스타일, 인간적인 면모와 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '벤 셸턴', '선수 프로필', '스토리', '미국'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 9월 18일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="ben-shelton-explosive-serve-bold-advance-new-generation-speed">벤 셸턴 — 폭발적 서브와 대담한 전진이 만든 신세대의 속도</h1>

            <p><strong>직답:</strong> 벤 셸턴(Ben Shelton)은 좌손의 폭발적 서브와 대담한 전진, 카운터 본능으로 큰 코트의 시간을 압축하며 경기를 단숨에 뒤집는 미국의 차세대 간판이다.</p>

            <h2 id="growth-background-track-court-speed-language">성장 배경 — 트랙에서 코트로, 속도의 언어를 배우다</h2>
            <p>그의 운동 DNA는 빠르다. 어릴 때부터 단거리 달리기와 점프 동작을 접했고, 대학 무대에서 체계적인 피지컬 트레이닝을 거치며 '폭발→회복→재가속'의 리듬을 몸에 새겼다. 코치였던 아버지는 화려한 기술보다 기본기의 견고함과 일상을 강조했다. 훈련 일지에는 샷의 질보다 루틴 이행률이 먼저 적혔고, 원정 중에도 수면·식단·가벼운 코어 루틴을 놓치지 않았다. 이 생활의 질서가 오늘의 '빠르되 무너지지 않는' 셸턴을 만든다.</p>

            <h2 id="playing-style-left-hand-trajectory-outside-inside">경기 스타일 — 왼손 궤적, 바깥에서 안으로 파고드는 힘</h2>
            <p>셸턴의 시그니처는 좌손 서브다. 애드코트 와이드로 크게 휘어나가는 킥성 구질은 리턴러를 코트 밖으로 끌어내고, 곧장 비는 공간으로 3구 포핸드가 꽂힌다. 바디 서브로 몸통을 묶은 뒤 짧게 떨어지는 공을 하프코트에서 전진 발리로 마무리하는 패턴도 날카롭다. 랠리에서는 포핸드를 직선에 가깝게 밀어 깊이를 확보하고, 백핸드는 면을 단단히 세워 실수를 관리한다. 상대가 뒤로 물러나면 드롭으로 템포를 끊고, 앞으로 달려들면 로브·패싱으로 속도를 되받아친다. 요약하면 첫 타에서 공간을 벌리고, 두 번째에서 결말을 재촉하는 테니스다.</p>

            <h2 id="rhythm-selection-emotion-hot-procedure-cold">리듬과 선택 — 감정은 뜨겁게, 절차는 차갑게</h2>
            <p>포인트 사이 그는 간단한 의식을 반복한다. 라켓 스트링을 한 번 훑고, 두 번의 깊은 호흡, 일정한 토스. 스코어가 불리해도 루틴의 길이를 바꾸지 않아 심박이 급하게 치솟지 않는다. 타이브레이크 초반엔 네트를 넉넉히 넘기는 구질로 높이·길이를 확인하고, 3~4포인트 구간에서만 라인을 얇게 써 승부수를 던진다. 관중의 소음은 에너지로 흡수하되, 선택의 기준은 숫자처럼 냉정하다. 리스크를 지더라도 이유가 선명한 선택만 택한다.</p>

            <h2 id="experience-transition-hard-grass-indoor-expansion">경험과 전환 — 하드에서 잔디·실내로 확장하는 법</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 승부한다. 잔디에선 토스를 낮추고 백스윙을 짧게 가져가 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 폭주를 제어한다. 실내 하드에서는 리턴 포지션을 반 발 앞당겨 시간 차를 줄이고, 세컨드 서브 리턴에선 과감히 전진해 상대의 루틴을 깨뜨린다. 점토에서는 회전을 늘려 낙구를 안정시키되, 무리한 하이라이트 샷보다 길이→각도→전진의 3단 구문으로 점수를 조립한다.</p>

            <h2 id="human-aspects-brightness-etiquette-team-first">인간적인 면모 — 밝음, 예의, 그리고 팀 퍼스트</h2>
            <p>셸턴의 인터뷰는 짧고 경쾌하다. 잘된 날엔 동료와 스태프의 이름을 먼저 부르고, 부족했던 날엔 수정 항목을 한두 줄로 또박또박 말한다. 팬을 대할 때는 미소와 눈맞춤을 잊지 않고, 경기장 스태프에게도 고개를 숙이는 제스처가 자연스럽다. 코트 밖에선 음악과 간단한 드릴로 마음을 가볍게 하며, SNS에서도 상대에 대한 존중을 유지한다. 강함을 과시하기보다 다루는 법을 배운 선수다.</p>

            <h2 id="nationality-culture-us-hard-tradition-new-generation">국적과 문화 — 미국 하드의 전통을 신세대의 속도로</h2>
            <p>강서브·퍼스트볼이 강조되는 미국 테니스의 전통을 셸턴은 최신 속도로 번역한다. 무작정 힘을 싣기보다 첫 두 타구의 구조로 득점 확률을 높이고, 리턴 게임에서는 중앙 깊은 볼로 각을 지운 뒤 다음 볼에서 속도를 끌어올린다. 대표팀 이벤트에서 보이는 매너와 에너지는 왜 그가 "스타성 있는 차세대 리더"로 불리는지 설명한다.</p>

            <h2 id="relationships-rivals-question-speed-answer-angle">관계와 라이벌 — 질문은 속도로, 답은 각도로</h2>
            <p>동시대 강자들과의 승부에서 셸턴은 속도로 질문한다. 강한 리턴러에겐 바디 서브 비중을 높여 스텝을 묶고, 네트를 서두르는 유형에겐 낮은 통과샷과 몸쪽 강타를 섞어 첫 시도를 주저하게 만든다. 같은 패턴이 두 번 허용되면, 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 느낌으로 찌른다. 이 작은 수정들이 후반으로 갈수록 큰 차이를 만든다.</p>

            <h2 id="famous-scenes-ad-court-wide-empty-space">명장면 — 애드코트 와이드, 그리고 빈 공간</h2>
            <p>브레이크 포인트. 애드코트에서 크게 휘는 좌손 와이드 서브가 코트를 벌리고, 리턴이 겨우 넘어오자 그는 한 발 안으로 파고들어 포핸드 직선을 꽂는다. 공이 사이드라인을 스치며 미끄러질 때 관중의 탄성이 터지고, 그는 표정을 바꾸지 않은 채 같은 속도로 베이스라인을 밟는다. 감정의 폭발 뒤에도 절차는 흔들리지 않는다—그의 테니스가 믿음을 주는 이유다.</p>

            <h2 id="equipment-details-tension-balance-contact-adjustment">장비와 디테일 — 텐션·밸런스·접점의 미세 조정</h2>
            <p>그는 라켓 밸런스를 과하게 머리쪽으로 보내지 않아 스윙 회복을 빠르게 하고, 스트링 텐션은 기온과 공의 반발에 맞춰 소폭 조정한다. 더운 날엔 텐션을 올려 반발을 제어하고, 실내에서는 텐션을 낮춰 체공 시간을 확보한다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서 발목의 흔들림을 줄인다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 장비를 바꾼다.</p>

            <h2 id="future-challenges-second-sentence-completeness">앞으로의 과제 — 두 번째 문장의 완성도</h2>
            <p>셸턴이 한 단계 더 도약하기 위해선 '두 번째 문장'의 완성도가 필요하다. 세컨드 서브 코스의 다양화, 리턴 직후 3구에서의 전진 타이밍 고정, 하프코트 마무리의 선택지를 한두 개로 단순화한다면, 긴 경기에서도 에너지 관리가 쉬워질 것이다. 이미 갖춘 폭발력 위에 실수의 폭을 좁히는 기술이 더해질 때, 그의 이름은 큰 무대의 마지막 장면에 더 자주 호명될 가능성이 크다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>그를 오래 응원하게 만드는 힘은 태도의 일관성이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 완성한다. 기록은 표가 되지만, 태도는 기억이 된다. 셸턴의 이름이 세월을 건너 사랑받을 이유가 바로 여기에 있다.</p>
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
                  <li><a href="https://en.wikipedia.org/wiki/Ben_Shelton" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">위키피디아 프로필</a></li>
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