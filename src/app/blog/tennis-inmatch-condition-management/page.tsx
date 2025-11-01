import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴 | 후반에도 무너지지 않는 경기력의 비밀',
  description: '테니스는 체력보다 \'에너지 분배\'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.',
  keywords: ['테니스 컨디션', '체력 유지', '집중력', '경기 루틴', '에너지 관리', '수분 보충'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-inmatch-condition-management',
  },
  openGraph: {
    title: '테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴 | 후반에도 무너지지 않는 경기력의 비밀',
    description: '테니스는 체력보다 \'에너지 분배\'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-inmatch-condition-management',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴 | 후반에도 무너지지 않는 경기력의 비밀',
    description: '테니스는 체력보다 \'에너지 분배\'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'pre-match-energy-planning', text: '1. 경기 전 — 에너지 분배의 설계부터 시작하라', depth: 2 },
  { id: 'first-set-rhythm-breathing', text: '2. 경기 중 1세트 — 리듬 유지와 호흡 관리', depth: 2 },
  { id: 'second-set-energy-pace', text: '3. 경기 중 2세트 — 에너지 유지와 페이스 조절', depth: 2 },
  { id: 'third-set-focus-mental', text: '4. 경기 중 3세트 — 집중력 유지와 심리 루틴', depth: 2 },
  { id: 'geo-condition-strategy', text: '5. GEO별 컨디션 전략', depth: 2 },
  { id: 'common-mistakes', text: '6. 경기 중 자주 하는 실수 3가지', depth: 2 },
  { id: 'post-match-recovery', text: '7. 경기 후 10분 — 리커버리 루틴', depth: 2 },
  { id: 'conclusion-endurance-routine', text: '결론 — 끝까지 강한 사람은 체력이 아니라 루틴이다', depth: 2 },
];

const faqs = [
  {
    q: '경기 중 언제 물을 마셔야 하나요?',
    a: '매 2게임마다 200ml씩 소량 자주 섭취하세요. 한 번에 많이 마시면 속이 무거워집니다.'
  },
  {
    q: '세트 후반에 집중력이 떨어집니다.',
    a: '포인트 사이 호흡 루틴을 추가하세요. 3초 복식호흡만으로도 집중력이 회복됩니다.'
  },
  {
    q: '더운 날씨에는 어떻게 해야 하나요?',
    a: '경기 전후 전해질 음료를 섭취하고, 타월로 땀을 자주 닦아 체온 상승을 막으세요.'
  },
  {
    q: '경기 중 다리가 무거워질 때 대처법은?',
    a: '발 스텝 속도를 줄이고, 스윙 강도를 10% 낮추세요. 에너지 효율이 높아집니다.'
  },
  {
    q: 'GEO별 컨디션 관리가 중요한 이유는?',
    a: '기후와 습도에 따라 체온·수분 손실이 달라집니다. 환경별 루틴을 조정해야 합니다.'
  }
];

export default function TennisInmatchConditionManagementPage() {
  const title = '테니스 경기 중 컨디션 유지법 — 체력과 집중력을 끝까지 지키는 루틴 | 후반에도 무너지지 않는 경기력의 비밀';
  const excerpt = '테니스는 체력보다 \'에너지 분배\'의 싸움이다. 집중력과 리듬을 끝까지 유지하는 루틴이 승부를 결정한다.';

  return (
    <Article title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
            컨디션 관리
          </Badge>
          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300">
            에너지 유지
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 기술의 싸움이 아니라 '지속력의 싸움'입니다. 경기 중 컨디션을 유지하지 못하면, 아무리 좋은 샷도 무의미해집니다. 특히 아마추어 대회에서는 세트 후반 집중력 저하로 승부가 바뀌는 경우가 많습니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-hydration-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 수분 보충 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-basics/conditioning.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 컨디션 관리 가이드</a></li>
        </ul>
      </div>

      <section id="pre-match-energy-planning" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          경기 전 — 에너지 분배의 설계부터 시작하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          컨디션 유지의 절반은 '경기 전'에 결정됩니다.
        </p>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500 mb-6">
          <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">체력 관리 루틴 (전날~경기 전):</h3>
          <ul className="text-orange-700 dark:text-orange-300 space-y-1">
            <li>• 전날: 7시간 이상 숙면, 수분 2L 섭취.</li>
            <li>• 경기 3시간 전: 탄수화물·단백질 비율 3:1 식사.</li>
            <li>• 경기 직전: 바나나 1개, 물 300ml 섭취.</li>
          </ul>
        </div>

        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-500">
          <p className="text-amber-800 dark:text-amber-200 text-sm">
            <strong>💡 핵심:</strong> 경기 전 음식을 줄이는 게 아니라 '흡수 속도'를 조절하는 것입니다. 무거운 음식보다 가벼운 에너지원을 선택하세요.
          </p>
        </div>
      </section>

      <section id="first-set-rhythm-breathing" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-amber-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          경기 중 1세트 — 리듬 유지와 호흡 관리
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 체력 소모를 최소화하며, 리듬을 일정하게 유지.
        </p>

        <div className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-500 mb-6">
          <h3 className="font-bold text-amber-800 dark:text-amber-200 mb-3">루틴:</h3>
          <ul className="text-amber-700 dark:text-amber-300 space-y-1">
            <li>• 포인트 사이 호흡 루틴(3초 들이쉬고 3초 내쉬기).</li>
            <li>• 베이스라인 뒤에서 5초간 시선 고정(집중 리셋).</li>
            <li>• 포인트 후 물 1~2모금, 2게임마다 수분 200ml 보충.</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 프로 팁:</strong> 초반엔 '공격'보다 '호흡'에 집중하세요. 호흡 리듬이 깨지면 체력 소모가 급증합니다.
          </p>
        </div>
      </section>

      <section id="second-set-energy-pace" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          경기 중 2세트 — 에너지 유지와 페이스 조절
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          <strong>목표:</strong> 피로 누적을 방지하고, 상대 리듬을 이용해 휴식 확보.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">상황</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">행동</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">효과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">긴 랠리 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">서브 루틴 길게 가져가기</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">심박 안정, 근육 회복</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">상대 실수 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">천천히 준비</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">에너지 절약, 흐름 조절</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">게임 전환 시</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">물 + 타월 루틴</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">땀 제거, 시각 리셋</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 팁:</strong> 컨디션은 '속도'가 아니라 '리듬'에서 관리됩니다. 느린 루틴이 오히려 체력 회복을 돕습니다.
          </p>
        </div>
      </section>

      <section id="third-set-focus-mental" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          경기 중 3세트 — 집중력 유지와 심리 루틴
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기의 후반은 체력보다 '멘탈 에너지'가 승부를 좌우합니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">루틴:</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">실수 후 3초 루틴 (인식→호흡→리듬 워드)</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">포인트 전 "리듬" 단어 반복 — 뇌파 안정 효과.</strong>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
              <div>
                <strong className="text-blue-800 dark:text-blue-200">서브 전 눈 감고 1초 집중(시각적 리셋).</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>핵심 문장:</strong> '몸이 아닌 마음이 먼저 무너진다.' 집중력은 체력의 연장입니다.
          </p>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500 mt-4">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>보조 팁:</strong> 후반에 손이 떨리거나 다리가 무거워지면, 스윙 속도를 90%로 줄이세요. 정확도는 유지되며 에너지 효율이 올라갑니다.
          </p>
        </div>
      </section>

      <section id="geo-condition-strategy" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 컨디션 전략
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기 (하드코트):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">온도차 커서 땀 손실↑ → 경기 중 수분 자주 보충.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산 (습한 환경):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">땀 증발 느림 → 드라이 타월 필수.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구 (건조·고온):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">탈수 빠름 → 경기 전후 전해질 보충 음료 섭취.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주 (바람 많음):</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">바람으로 체온 저하 → 경기 전 워밍업 강화.</p>
          </div>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>📍 GEO 팁:</strong> 환경별 컨디션 유지 루틴은 경기 후 회복 속도에도 직접적인 영향을 줍니다.
          </p>
        </div>
      </section>

      <section id="common-mistakes" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          경기 중 자주 하는 실수 3가지
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">1️⃣ 수분 섭취를 미룸:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">갈증을 느끼면 이미 탈수 상태.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">2️⃣ 호흡 중단:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">포인트 중 숨 참으면 젖산 축적 가속.</p>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg">
            <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">3️⃣ 페이스 조절 실패:</h3>
            <p className="text-indigo-700 dark:text-indigo-300 text-sm">초반에 전력질주 → 후반 집중력 급락.</p>
          </div>
        </div>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <p className="text-indigo-800 dark:text-indigo-200 text-sm">
            <strong>정리:</strong> 경기력은 스윙이 아니라 '에너지 사용법'으로 결정됩니다.
          </p>
        </div>
      </section>

      <section id="post-match-recovery" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          경기 후 10분 — 리커버리 루틴
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기 직후가 다음 경기의 시작입니다.
        </p>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500 mb-6">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">루틴:</h3>
          <ul className="text-pink-700 dark:text-pink-300 space-y-1">
            <li>• 냉찜질 15분 (무릎·어깨 중심).</li>
            <li>• 물 500ml + 단백질 쉐이크.</li>
            <li>• 스트레칭 10분, 복식호흡 3분.</li>
          </ul>
        </div>

        <div className="bg-red-50 dark:bg-red-950 p-4 rounded-lg border-l-4 border-red-500">
          <p className="text-red-800 dark:text-red-200 text-sm">
            <strong>💡 보너스 팁:</strong> 경기 후 바로 스마트폰 보는 습관은 집중력 회복을 방해합니다. 10분은 '호흡의 여백'으로 남겨두세요.
          </p>
        </div>
      </section>

      <section id="conclusion-endurance-routine" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 끝까지 강한 사람은 체력이 아니라 루틴이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 '지속성의 경기'입니다. 체력은 줄어들지만 루틴은 쌓입니다. 3세트 후반까지 흔들리지 않는 선수의 비밀은 기술이 아니라 <strong>에너지 관리 습관</strong>입니다. 몸의 피로보다 마음의 리듬을 먼저 관리하세요. 그것이 진짜 컨디션 유지의 기술입니다.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-postmatch-recovery-routine">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  회복 루틴
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 후 회복 루틴 — 24시간 리커버리 사이클로 피로 없이 다음 경기 준비하기
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  경기 후 24시간 동안 피로를 최소화하고 근육을 회복시키는 루틴. 냉찜질·영양·수면·멘탈 리셋까지 완전 가이드.
                </p>
              </CardContent>
            </Card>
          </Link>
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  멘탈 관리
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  실수 후 3초 회복 루틴으로 멘탈을 회복하고 경기 흐름을 되찾는 법. 감정 제어·집중 루틴·GEO별 멘탈 관리 전략.
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
