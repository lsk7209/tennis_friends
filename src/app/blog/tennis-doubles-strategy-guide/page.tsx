import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '복식 경기 전략 완전정복 — 포지셔닝·커뮤니케이션·네트 플레이의 모든 것 | 팀워크로 승부하는 테니스의 본질',
  description: '복식은 기술이 아니라 \'조화\'의 경기다. 포지션, 시선, 말 한마디가 승부를 결정한다. 네트 플레이와 소통의 리듬이 핵심이다.',
  keywords: ['테니스 복식', '복식 전략', '포지셔닝', '네트 플레이', '커뮤니케이션', '팀워크', '발리', '포인트 설계'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-doubles-strategy-guide',
  },
  openGraph: {
    title: '복식 경기 전략 완전정복 — 포지셔닝·커뮤니케이션·네트 플레이의 모든 것 | 팀워크로 승부하는 테니스의 본질',
    description: '복식은 기술이 아니라 \'조화\'의 경기다. 포지션, 시선, 말 한마디가 승부를 결정한다. 네트 플레이와 소통의 리듬이 핵심이다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-doubles-strategy-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '복식 경기 전략 완전정복 — 포지셔닝·커뮤니케이션·네트 플레이의 모든 것 | 팀워크로 승부하는 테니스의 본질',
    description: '복식은 기술이 아니라 \'조화\'의 경기다. 포지션, 시선, 말 한마디가 승부를 결정한다. 네트 플레이와 소통의 리듬이 핵심이다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'basic-positioning', text: '1. 기본 포지셔닝 — 라인과 각도를 지배하라', depth: 2 },
  { id: 'communication-system', text: '2. 커뮤니케이션 — \'시선 + 키워드\' 시스템', depth: 2 },
  { id: 'net-play', text: '3. 네트 플레이 — \'예측\'이 아닌 \'준비\'의 기술', depth: 2 },
  { id: 'doubles-serve-return', text: '4. 복식 서브 & 리턴 전략', depth: 2 },
  { id: 'geo-doubles-strategy', text: '5. GEO별 복식 운영 전략', depth: 2 },
  { id: 'doubles-training-routine', text: '6. 복식 전용 훈련 루틴 (20분)', depth: 2 },
  { id: 'conclusion-doubles-art', text: '결론 — 복식은 \'대화로 만드는 예술\'이다', depth: 2 },
];

const faqs = [
  {
    q: '복식에서 파트너와 호흡이 안 맞아요.',
    a: '미리 3단어 신호를 정하고 연습하세요. \'업·백·스위치\'만으로도 리듬이 맞습니다.'
  },
  {
    q: '네트 플레이가 두려워요.',
    a: '공격 타이밍을 예측하려 하지 말고, 네트 앞 1.5m에서 준비 자세를 유지하세요.'
  },
  {
    q: '상대가 로브를 자주 써요.',
    a: '네트에서 한 발 뒤로 물러서거나, 뒤 파트너에게 커버 신호를 보내세요.'
  },
  {
    q: '복식 서브는 세게 칠 필요 있나요?',
    a: '아니요. 정확한 위치가 더 중요합니다. 네트 플레이어가 움직이기 쉽게 중앙·사이드 위치를 조정하세요.'
  },
  {
    q: '파트너가 실수했을 때 어떻게 해야 하나요?',
    a: '즉시 \'괜찮아\' 한마디로 리듬을 지켜주세요. 분위기가 흐트러지면 전체 경기력이 떨어집니다.'
  }
];

export default function TennisDoublesStrategyGuidePage() {
  const title = '복식 경기 전략 완전정복 — 포지셔닝·커뮤니케이션·네트 플레이의 모든 것 | 팀워크로 승부하는 테니스의 본질';
  const excerpt = '복식은 기술이 아니라 \'조화\'의 경기다. 포지션, 시선, 말 한마디가 승부를 결정한다. 네트 플레이와 소통의 리듬이 핵심이다.';

  return (
    <Article slug="tennis-doubles-strategy-guide" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
            팀워크 가이드
          </Badge>
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
            복식 전략
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          복식 테니스는 단순히 '2명이 함께 치는 경기'가 아닙니다. 복식은 리듬, 위치, 시선, 그리고 말 한마디까지 모든 요소가 연결된 팀 스포츠입니다. 개인전과는 완전히 다른 전략적 구조를 이해해야 진정한 복식의 재미가 시작됩니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/doubles-strategy-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">복식 전략 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/doubles.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 복식 가이드</a></li>
        </ul>
      </div>

      <section id="basic-positioning" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          기본 포지셔닝 — 라인과 각도를 지배하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식의 핵심은 '공간 통제'입니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">유형</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">포지션</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">특징</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">아이 포지션</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">네트 플레이어가 중앙에서 시작</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리턴 예측 어려움, 공격적</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">사이드 바이 사이드</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">두 선수가 뒤에서 수비</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">안정적이지만 공격 전환 느림</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">업앤백</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">한 명 네트, 한 명 베이스라인</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">가장 일반적, 균형형</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>원칙:</strong> 볼이 코트 오른쪽에 있을 때는 파트너는 왼쪽으로 커버. 네트 플레이어는 항상 상대 타점보다 반 박자 앞에 서 있어야 합니다. 두 선수의 간격은 약 3m가 이상적.
            <br/><br/>
            복식은 코트를 반으로 나누는 것이 아니라, <strong>대각선으로 분할</strong>한다는 감각을 가져야 합니다.
          </p>
        </div>
      </section>

      <section id="communication-system" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          커뮤니케이션 — '시선 + 키워드' 시스템
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식의 70%는 소통입니다. 경기 중엔 긴 대화 대신 <strong>한 단어 신호</strong>로 의사를 전달해야 합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">상황</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">키워드</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">의미</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">리턴 전</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">"업"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">네트 전진 신호</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">리턴 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">"백"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">후진·수비 전환</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">랠리 중</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">"스위치"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">포지션 교대</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">포인트 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">"굿"</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">짧은 긍정 피드백</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-200 text-sm">
            <strong>💡 팁:</strong> 말보다 '시선'이 더 빠릅니다. 포인트 시작 전 눈빛으로 의도 교환을 연습하세요.
            <br/><br/>
            <strong>훈련법:</strong> 미니게임 중 3단어 이내만 사용하기. 언어를 줄일수록 호흡이 맞아갑니다.
          </p>
        </div>
      </section>

      <section id="net-play" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          네트 플레이 — '예측'이 아닌 '준비'의 기술
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          네트 플레이어의 역할은 단순히 발리하는 것이 아닙니다. 상대의 방향을 읽고, 포인트를 마무리할 타이밍을 잡는 '리듬 센서'입니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">기본 원칙:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• 공이 네트를 통과하는 순간, 라켓은 이미 준비되어 있어야 합니다.</li>
            <li>• 네트 앞 1.5m 위치에서 어깨를 낮추고, 중심은 발가락 쪽으로.</li>
            <li>• 무릎을 굽힌 상태로 45도 각도 유지.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>공격 타이밍:</strong> 상대가 백핸드로 수비하거나 체중이 뒤로 간 순간. 이때 전진하며 발리를 시도하면 득점 확률이 2배 이상 높습니다.
          </p>
        </div>
      </section>

      <section id="doubles-serve-return" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-yellow-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          복식 서브 & 리턴 전략
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식에서 서브는 '세게'보다 '위치'가 중요합니다.
        </p>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">서브 포인트 설계:</h3>
          <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• 상대의 약한 구역으로 서브.</li>
            <li>• 네트 플레이어가 미리 움직여 시선 압박.</li>
            <li>• 첫 리턴은 네트 플레이어 쪽이 아닌 반대 구석으로.</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg mb-6">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">리턴 팁:</h3>
          <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
            <li>• 리턴은 중앙으로 보내 네트 플레이어의 움직임을 제한.</li>
            <li>• 로브 리턴을 섞으면 상대 네트 플레이어가 뒤로 물러남.</li>
          </ul>
        </div>
      </section>

      <section id="geo-doubles-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 복식 운영 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">반발 빠름 → 발리 속도전, 포지션 짧게.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 무겁고 느림 → 랠리 길게, 체력분배 중심.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">공 가볍고 튐 → 서브 중심, 짧은 포인트 전개.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람 따라 포지션 조정, 로브와 슬라이스 병행.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>👉 GEO 팁:</strong> GEO 전략을 팀 단위로 공유하면, 경기 전부터 리듬 차이를 줄일 수 있습니다.
          </p>
        </div>
      </section>

      <section id="doubles-training-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          복식 전용 훈련 루틴 (20분)
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">1. 포지션 이동 드릴 (5분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">한 명이 공 치면, 파트너는 대각선 이동.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">2. 아이 포지션 반응 훈련 (5분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">네트 앞에서 좌우 반응속도 향상.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">3. 로브 대응 발리 (5분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">로브 타이밍 시 뒤로 이동하며 컨트롤.</p>
          </div>
          <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg">
            <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-2">4. 커뮤니케이션 루틴 (5분):</h3>
            <p className="text-pink-700 dark:text-pink-300 text-sm">포인트 후 짧은 대화 → 다음 포인트 예측.</p>
          </div>
        </div>
      </section>

      <section id="conclusion-doubles-art" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          결론 — 복식은 '대화로 만드는 예술'이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식에서 가장 강한 팀은 기술이 아닌 <strong>호흡이 맞는 팀</strong>입니다. 서로의 리듬을 읽고, 말보다 시선으로 소통하며, 작은 신호 하나로 코트를 지배하세요. 복식은 혼자가 아니라 '둘이 한 몸처럼 움직이는 리듬의 경기'입니다. 포지션은 기술로 배우지만, 팀워크는 감각으로 완성됩니다.
        </p>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-mental-routine-5steps">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 mb-2">
                  팀워크 멘탈
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  멘탈 루틴 5단계 — 시합 중 흔들리지 않는 집중력의 기술
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스의 승패는 기술보다 멘탈 루틴에서 갈린다. 포인트 사이 20초를 어떻게 쓰느냐가 경기 전체를 바꾼다.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}
