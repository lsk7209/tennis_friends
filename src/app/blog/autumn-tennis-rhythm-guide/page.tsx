import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '가을 테니스 리듬 되찾기 | 스윙·풋워크·지역별 전략 완벽 가이드',
  description: '가을 테니스 시즌에 흔들리는 리듬과 스윙 타이밍을 잡는 법. 지역별 코트 전략, 풋워크 훈련 루틴, 스트링 세팅 팁까지 한눈에 정리.',
  keywords: ['가을 테니스', '테니스 리듬', '풋워크', '스윙 타이밍', '코트 전략', '스트링 세팅'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/autumn-tennis-rhythm-guide',
  },
  openGraph: {
    title: '가을 테니스 리듬 되찾기 | 스윙·풋워크·지역별 전략 완벽 가이드',
    description: '가을 테니스 시즌에 흔들리는 리듬과 스윙 타이밍을 잡는 법. 지역별 코트 전략, 풋워크 훈련 루틴, 스트링 세팅 팁까지 한눈에 정리.',
    url: 'https://www.tennisfrens.com/blog/autumn-tennis-rhythm-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '가을 테니스 리듬 되찾기 | 스윙·풋워크·지역별 전략 완벽 가이드',
    description: '가을 테니스 시즌에 흔들리는 리듬과 스윙 타이밍을 잡는 법.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'autumn-ball-reaction', text: '가을에는 \'공의 반응\'부터 다르다', depth: 2 },
  { id: 'rhythm-footwork', text: '리듬을 만드는 건 스윙이 아니라 풋워크다', depth: 2 },
  { id: 'tempo-strategy', text: '템포 조절이 전략이다 — 리듬을 깨는 플레이', depth: 2 },
  { id: 'regional-court-strategy', text: '지역별 코트 전략 — 서울·부산·제주의 리듬은 다르다', depth: 2 },
  { id: 'autumn-equipment-setup', text: '가을 라켓 세팅과 장비 조정', depth: 2 },
  { id: 'daily-rhythm-recovery', text: '하루 30분 리듬 회복 루틴', depth: 2 },
  { id: 'rhythm-body-mind', text: '리듬이란 몸과 마음이 같은 박자를 타는 순간', depth: 2 },
  { id: 'autumn-tennis-checklist', text: '가을 테니스 체크리스트', depth: 2 },
];

const faqs = [
  {
    q: '가을 테니스에서 공이 무겁게 느껴지는 이유는?',
    a: '기온이 낮아지면 공 내부 압력이 줄고 공기 밀도가 높아져 반발력이 떨어집니다. 이 때문에 스윙 타이밍과 텐션 조정이 필요합니다.'
  },
  {
    q: '하루 중 언제 연습하는 게 가장 좋나요?',
    a: '오전 10시~오후 2시 사이가 가장 안정적입니다. 저녁에는 공이 무겁고 시야가 어두워 리듬 유지가 어렵습니다.'
  },
  {
    q: '리듬 감각을 빠르게 회복하는 방법은?',
    a: '하루 10분 스플릿 스텝과 미니 테니스만 꾸준히 해도 몸의 반응속도가 회복됩니다. \'박자\'를 느끼는 것이 핵심입니다.'
  },
  {
    q: '지역별 코트 전략이 다른 이유는?',
    a: '서울은 건조하고 빠르며, 부산·제주는 습도와 바람이 공의 속도에 영향을 줍니다. 지역 기후를 이해하는 것이 승부 전략의 출발점입니다.'
  },
  {
    q: '가을 테니스 실력 향상을 위한 핵심 키워드는?',
    a: '\'리듬\'입니다. 스윙보다 중요한 건 일정한 템포와 풋워크 감각입니다. 꾸준히 리듬 훈련을 반복하세요.'
  }
];

export default function AutumnTennisRhythmGuidePage() {
  const title = '가을 테니스, 리듬을 되찾는 순간 실력이 달라진다';
  const excerpt = '가을 바람이 불면 공의 감각도 달라진다. 테니스 실력은 힘이 아니라 리듬에서 나온다. 지금, 당신의 스윙과 풋워크를 조율할 완벽한 계절이다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
            테니스 실력 향상
          </Badge>
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            가을 시즌
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          요즘 서브 타이밍이 자꾸 늦고, 공이 무겁게 느껴지지 않나요? 가을에는 누구나 이런 감각 저하를 겪습니다. 여름의 빠른 템포에 익숙해진 몸이 온도와 공기의 변화에 적응하지 못하기 때문이죠. 하지만 바로 이 시기가 '리듬'을 다시 세팅할 최고의 기회입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-footwork-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 풋워크 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/technique/footwork-fundamentals.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 풋워크 기초 가이드</a></li>
        </ul>
      </div>

      <section id="autumn-ball-reaction" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          가을에는 '공의 반응'부터 다르다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          가을 공기는 밀도가 높아 공이 무겁고 반발력이 줄어듭니다. 낮엔 가볍게 튀다가 밤이 되면 공이 느려지죠. 이럴 때는 스윙을 세게 하기보다 <strong>리듬을 일정하게 유지하는 것</strong>이 중요합니다. 팔로스루를 끝까지 가져가고, 스윙 템포를 '빠르게-느리게'가 아닌 <strong>'일정하게'</strong> 유지해야 합니다. 서브 타이밍은 한 박자 빨리, 임팩트는 가볍게. 이 미묘한 차이가 경기 흐름을 바꿉니다.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>👉 실전 팁:</strong> 저녁 경기에서는 스트링 텐션을 1~2파운드 낮추면 반발력을 회복할 수 있습니다.
          </p>
        </div>
      </section>

      <section id="rhythm-footwork" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          리듬을 만드는 건 스윙이 아니라 풋워크다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          풋워크는 리듬의 시작입니다. 가을 코트에는 낙엽이 쌓이거나 미끄러운 구간이 많아 발의 중심이 흔들리기 쉽습니다. 이럴수록 발 앞쪽(볼)에 무게 중심을 두고, <strong>스플릿 스텝(split step)</strong>으로 반박자 먼저 반응하는 것이 핵심입니다.
        </p>

        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">하루 10분 스플릿 스텝 연습</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">라켓 없이 풋워크만으로 포지셔닝 훈련</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300">코치보다 <strong>"박자감"</strong>을 의식하며 스텝 밟기</span>
          </li>
        </ul>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>👉 실천:</strong> 미니 테니스 10분만으로도 몸의 타이밍이 달라집니다.
          </p>
        </div>
      </section>

      <section id="tempo-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          템포 조절이 전략이다 — 리듬을 깨는 플레이
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          가을은 대회 시즌이 많고, 경기 템포가 빨라집니다. 상대의 흐름을 무너뜨리는 건 '힘'이 아니라 '리듬의 변주'입니다. 공의 속도, 스핀, 높이를 한 랠리 안에서도 변화시켜보세요. 예를 들어, 상대가 베이스라인에 익숙하다면 의도적으로 슬라이스로 템포를 낮추거나 로브로 리듬을 끊을 수 있습니다.
        </p>

        <blockquote className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 dark:bg-blue-950 italic">
          <p className="text-blue-800 dark:text-blue-200">
            "한 포인트를 이기는 게 아니라, 상대의 리듬을 무너뜨리는 것." — 모든 시합의 기본 원칙입니다.
          </p>
        </blockquote>
      </section>

      <section id="regional-court-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          지역별 코트 전략 — 서울·부산·제주의 리듬은 다르다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          한국의 가을 코트는 지역별로 완전히 다릅니다.
        </p>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울 잠실 올림픽공원</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">하드코트, 낮은 바운스. 플랫 드라이브 연습 필수.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 스포원 테니스장</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">습도가 높고 공이 무겁게 느려짐. 랠리 중심의 인내형 플레이 유리.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대전 한밭체육관</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람이 강해 타점이 흔들림. 스윙을 짧게 끊는 연습 필요.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 한림체육공원</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">해풍 영향으로 공의 궤적이 흔들림. 스핀 볼 제어 연습 필수.</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>👉 GEO 팁:</strong> 지역 검색 강화 시대, '서울 가을 테니스 코트', '부산 테니스장 랠리 팁' 같은 키워드로 검색 유입을 확보하세요.
          </p>
        </div>
      </section>

      <section id="autumn-equipment-setup" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          가을 라켓 세팅과 장비 조정
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          가을은 라켓 세팅을 다시 점검할 때입니다. 여름에 늘어난 스트링은 반발력이 줄어듭니다. 폴리 스트링을 사용 중이라면 하이브리드로 교체하고, 텐션은 1~2파운드 낮추세요.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          또한 <strong>테니스화의 접지력</strong>은 부상 방지의 핵심입니다. 낙엽이 많은 코트에서는 작은 미끄러짐이 발목 부상으로 이어질 수 있으니, 새 신발은 꼭 '멀티코트용'으로 교체하는 것이 좋습니다.
        </p>
      </section>

      <section id="daily-rhythm-recovery" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          하루 30분 리듬 회복 루틴
        </h2>

        <blockquote className="border-l-4 border-red-500 pl-6 py-4 bg-red-50 dark:bg-red-950 italic mb-6">
          <p className="text-red-800 dark:text-red-200">
            💡 꾸준함이 곧 리듬이다.
          </p>
        </blockquote>

        <div className="space-y-4">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">① 워밍업 5분 — 풋워크와 점프 스텝</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">② 미니 테니스 10분 — 타점 감각 회복</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">③ 스트로크 10분 — 일정한 템포 유지</h3>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">④ 서브 5분 — 한 박자 빠른 임팩트</h3>
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mt-6 leading-relaxed">
          이 루틴만으로도 몸이 리듬을 기억합니다. 3일만 이어가도 "공이 다시 가벼워졌다"는 느낌을 받을 겁니다.
        </p>
      </section>

      <section id="rhythm-body-mind" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          리듬이란 몸과 마음이 같은 박자를 타는 순간
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 결국 박자의 경기입니다. 코치에게 기술을 배울 수는 있지만, <strong>리듬은 스스로 만들어야 합니다.</strong> 가을 바람이 불 때, 몸이 자연스럽게 음악을 타듯 스윙하는 그 순간—그게 바로 당신의 테니스가 성장하는 순간입니다.
        </p>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          지금 리듬을 되찾았다면, <Link href="/blog/winter-indoor-tennis-guide" className="text-blue-600 hover:text-blue-800 underline">겨울 실내 테니스 전략 가이드</Link>로 다음 시즌을 준비해보세요.
        </p>
      </section>

      <section id="autumn-tennis-checklist" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          가을 테니스 체크리스트
        </h2>

        <div className="bg-teal-50 dark:bg-teal-950 p-6 rounded-lg">
          <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-4">👉 가을 테니스 체크리스트</h3>
          <ul className="space-y-2 text-teal-700 dark:text-teal-300">
            <li>• 스트링 텐션: 기존보다 1~2파운드 낮게</li>
            <li>• 풋워크 중심: 전족(볼)에 무게 중심</li>
            <li>• 코트 전략: 서울=플랫, 부산=랠리, 제주=스핀</li>
            <li>• 장비 점검: 접지력 높은 테니스화 필수</li>
          </ul>
        </div>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-footwork-basics">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  테니스 레슨
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 풋워크 기초: 코트 지배의 핵심 이동 기술
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스에서 50%의 승패를 좌우하는 풋워크 기술. 스플릿 스텝, 크로스오버, 사이드 셔플의 올바른 방법과 연습법.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/guide/tennis-racket-selection">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  장비 가이드
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 라켓 선택법 완전 가이드
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  초보자부터 프로까지, 자신에게 맞는 완벽한 라켓을 찾는 방법.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
