import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
    title: '테니스 레슨 비용 2026 | 실내·실외 가격 비교',
    description: '테니스 레슨 비용, 실내 테니스 가격, 개인·그룹 레슨비와 숨은 추가 비용을 월 예산별로 비교했습니다.',
    keywords: ['테니스 레슨 비용', '실내 테니스 가격', '테니스 레슨비', '테니스 강습료', '테니스 그룹 레슨', '테니스장 이용료', '테니스 비용'],
    alternates: {
        canonical: 'https://www.tennisfrens.com/blog/tennis-lesson-cost-guide',
    },
    openGraph: {
        title: '테니스 레슨 비용 2026 | 실내·실외 가격 비교',
        description: '테니스 레슨 비용과 실내 테니스 가격을 개인·그룹 레슨 기준으로 비교하고 예산 선택법을 정리했습니다.',
        url: 'https://www.tennisfrens.com/blog/tennis-lesson-cost-guide',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 레슨 비용 2026 | 실내·실외 가격 비교',
        description: '테니스 레슨 비용과 실내 테니스 가격을 개인·그룹 레슨 기준으로 비교했습니다.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'cost-overview', text: '1. 2026년 평균 레슨 비용 요약', depth: 2 },
    { id: 'indoor-cost', text: '2. 실내 테니스장 레슨비 (접근성 & 시설)', depth: 2 },
    { id: 'outdoor-cost', text: '3. 실외 테니스장 레슨비 (가성비 & 실전)', depth: 2 },
    { id: 'group-vs-private', text: '4. 1:1 개인레슨 vs 그룹레슨 가격 차이', depth: 2 },
    { id: 'hidden-costs', text: '5. 놓치기 쉬운 숨겨진 비용들', depth: 2 },
    { id: 'cost-saving-tips', text: '6. 레슨비 아끼는 현명한 팁', depth: 2 },
    { id: 'registration-check', text: '7. 등록 전 확인할 공식 기준', depth: 2 },
    { id: 'conclusion', text: '결론 — 나에게 맞는 예산 계획', depth: 2 },
];

const faqs = [
    {
        q: '레슨비는 보통 몇 개월 단위로 결제하나요?',
        a: '기본적으로 1개월 단위 결제가 많지만, 3개월 등록 시 5~10% 할인을 제공하는 곳이 많습니다. 처음이라면 1개월만 등록해보는 것을 추천합니다.'
    },
    {
        q: '카드 결제와 현금 결제 가격이 다른가요?',
        a: '일부 개인 코트나 동호회 레슨의 경우 현금 할인을 제시하기도 하지만, 정식 사업자 등록이 된 실내 테니스장은 대부분 동일합니다. 현금영수증 발행 여부를 꼭 확인하세요.'
    },
    {
        q: '레슨 빠지면 보강 해주나요?',
        a: '센터마다 규정이 다릅니다. 보통 당일 취소는 차감되고, 하루 전 통보 시 월 1회 정도 보강이나 연기를 해주는 경우가 일반적입니다. 등록 전 환불/보강 규정을 반드시 확인하세요.'
    },
    {
        q: '주 1회만 해도 실력이 늘까요?',
        a: '입문자에게 주 1회(월 4회)는 감을 익히기에 부족할 수 있습니다. 최소 주 2회 레슨을 권장하며, 주 1회 레슨 시에는 반드시 개인 연습(볼머신 등)을 병행해야 합니다.'
    },
    {
        q: '레슨비 외에 코트비도 따로 내야 하나요?',
        a: '실내 테니스장은 레슨비에 코트 이용료가 포함된 경우가 대부분입니다. 하지만 실외 레슨(특히 클럽/동호회 섭외 코치)의 경우 코트비(입장료)를 별도로 걷는 경우도 있으니 확인이 필요합니다.'
    }
];

export default function TennisLessonCostGuidePage() {
    const title = '테니스 레슨 비용 2026 | 실내·실외 가격 비교';
    const excerpt = '테니스 레슨비, 실내 테니스 가격, 개인·그룹 레슨 차이와 숨은 비용까지 월 예산 기준으로 정리했습니다.';

    return (
        <Article
            title={title}
            excerpt={excerpt}
            date="2026-01-24"
            slug="tennis-lesson-cost-guide"
            author="TennisFriends"
            image="/images/blog/tennis-racket-selection-guide.png"
        >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        비용 가이드
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
                        실내 테니스 가격
                    </Badge>
                </div>
                <p className="article-summary text-gray-700 dark:text-gray-300 leading-relaxed">
                    테니스 레슨 비용은 입문 기준 월 12만~30만 원대가 가장 흔합니다. 실내는 접근성과 볼머신이 강점이고, 실외는 코트비를 따로 계산하면 총액을 더 정확히 비교할 수 있습니다.
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="cost-overview" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    2026년 평균 레슨 비용 요약 (월 기준)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    서울 및 수도권 주요 지역 기준, <strong>주 2회(월 8회), 1회 20분</strong> 수업 기준 평균 비용입니다.
                </p>

                <div className="overflow-x-auto mb-6">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm md:text-base">
                        <thead>
                            <tr className="bg-gray-100 dark:bg-gray-800">
                                <th className="border border-gray-300 dark:border-gray-600 p-3">구분</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">실내 테니스장</th>
                                <th className="border border-gray-300 dark:border-gray-600 p-3">실외 테니스장</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold bg-blue-50 dark:bg-blue-900/20">1:1 개인레슨</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">24~30만 원</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">18~25만 원</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold bg-indigo-50 dark:bg-indigo-900/20">2:1 그룹레슨</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">15~20만 원 (1인당)</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">12~16만 원 (1인당)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 font-bold bg-purple-50 dark:bg-purple-900/20">쿠폰제 (1회권)</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">4~6만 원</td>
                                <td className="border border-gray-300 dark:border-gray-600 p-3 text-center">3~5만 원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-xs text-gray-500 mb-6 text-right">* 지역, 시설, 코치 경력, 코트 대관 포함 여부에 따라 ±5만 원 이상 차이 발생</p>
            </section>

            <section id="indoor-cost" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    실내 테니스장 레슨비 (높은 접근성과 시설)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">💰 비용 특징</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><strong>높은 임대료 반영:</strong> 역세권, 지하/지상 상가에 위치해 기본 단가가 높습니다.</li>
                            <li><strong>볼머신 포함:</strong> 대부분 레슨 직후 볼머신 20~30분 이용이 비용에 포함되어 있습니다.</li>
                            <li><strong>부대시설:</strong> 샤워실, 라커룸, 대여 라켓 등이 잘 갖춰져 있습니다.</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">👍 추천 대상</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>퇴근 후 바로 운동하고 싶은 직장인</li>
                            <li>자외선과 날씨 걱정 없이 운동하고 싶은 분</li>
                            <li>자세 교정과 기본기를 집중적으로 배우고 싶은 입문자</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="outdoor-cost" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    실외 테니스장 레슨비 (가성비 & 실전 감각)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 text-green-600 dark:text-green-400">💰 비용 특징</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li><strong>저렴한 단가:</strong> 시립/구립 코트 등을 이용하는 경우가 많아 상대적으로 저렴합니다.</li>
                            <li><strong>날씨 변수:</strong> 우천/폭설, 혹한기/혹서기에는 레슨이 취소될 수 있어 실제 레슨 횟수가 줄어들 수 있습니다.</li>
                            <li><strong>입장료 별도 가능성:</strong> 레슨비 외에 코트 입장료(2~4천 원)를 따로 내야 할 수도 있습니다.</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-bold mb-3 text-green-600 dark:text-green-400">👍 추천 대상</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
                            <li>탁 트인 공간에서 공이 날아가는 궤적을 보고 싶은 분</li>
                            <li>실전 게임 감각을 빠르게 익히고 싶은 중급자</li>
                            <li>가성비를 중요하게 생각하는 분</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="group-vs-private" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    1:1 개인레슨 vs 그룹레슨 가격 차이
                </h2>

                <div className="space-y-4">
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="md:w-1/3 font-bold text-purple-700 dark:text-purple-300 flex items-center">
                            👤 1:1 개인레슨 (Private)
                        </div>
                        <div className="md:w-2/3">
                            <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">약 24~30만 원 (월 8회)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">20분 내내 코치님이 나만 봐줍니다. 자세 교정 속도가 가장 빠릅니다. 비용 부담이 있지만 효율은 최고입니다.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="md:w-1/3 font-bold text-purple-700 dark:text-purple-300 flex items-center">
                            👥 2:1 그룹레슨 (Partner)
                        </div>
                        <div className="md:w-2/3">
                            <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">약 16~20만 원 (1인당, 월 8회)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">친구/연인과 함께 듣기 좋습니다. 20분을 나눠서 쓰거나, 번갈아 가며 지도를 받습니다. 서로 자세를 봐주며 배우는 재미가 있습니다.</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg">
                        <div className="md:w-1/3 font-bold text-purple-700 dark:text-purple-300 flex items-center">
                            👨‍👩‍👧‍👦 3:1 이상 (Group)
                        </div>
                        <div className="md:w-2/3">
                            <p className="font-bold text-gray-900 dark:text-gray-100 mb-1">약 10~15만 원 (1인당, 월 8회)</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">문화센터나 시립 코트에서 주로 진행합니다. 개인 지도 시간은 짧지만 가격이 매우 저렴합니다. 입문 체험용으로 좋습니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="hidden-costs" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    놓치기 쉬운 숨겨진 비용들
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    레슨비만 생각했다가 예상치 못한 지출이 생길 수 있습니다. 예산 짤 때 꼭 포함하세요.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                        <span className="font-bold block mb-1">👟 장비 구매비 (초기 1회)</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">라켓(20~30만 원), 테니스화(10~15만 원). 초기 30~50만 원의 투자가 필요합니다.</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                        <span className="font-bold block mb-1">👕 의류 (선택)</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">필수는 아니지만, 테니스 스커트/팬츠 등 전용 의류 욕심이 생기면 1벌당 5~10만 원이 듭니다.</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                        <span className="font-bold block mb-1">🚿 라커/샤워비 (센터별 상이)</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">월 1~2만 원의 라커룸 이용료를 따로 받는 곳도 있습니다.</span>
                    </li>
                    <li className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-red-400">
                        <span className="font-bold block mb-1">🎾 스트링 교체비 (유지비)</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">2~3개월마다 줄을 갈아줘야 합니다. 스트링 가격 + 공임비 포함 회당 2~4만 원 정도 듭니다.</span>
                    </li>
                </ul>
            </section>

            <section id="cost-saving-tips" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    레슨비 아끼는 현명한 팁
                </h2>
                <div className="bg-teal-50 dark:bg-teal-950/30 p-6 rounded-lg">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold text-xl">1.</span>
                            <div>
                                <strong className="text-gray-900 dark:text-white block mb-1">3개월 패키지 활용</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400">많은 센터가 3개월 등록 시 10% 할인이나 라켓 무료 증정 이벤트를 합니다. 단, 먹튀(폐업) 리스크 확인은 필수!</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold text-xl">2.</span>
                            <div>
                                <strong className="text-gray-900 dark:text-white block mb-1">지역화폐 & 제로페이</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400">거주 지역의 지역화폐(서울사랑상품권 등)를 사용하면 7~10% 할인 효과를 볼 수 있습니다.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold text-xl">3.</span>
                            <div>
                                <strong className="text-gray-900 dark:text-white block mb-1">오전/낮 시간 할인</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400">직장인이 몰리는 저녁(18~22시)을 피해, 오전이나 낮 시간에 등록하면 '해피아워' 할인을 받을 수 있는 곳이 많습니다.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-teal-600 dark:text-teal-400 font-bold text-xl">4.</span>
                            <div>
                                <strong className="text-gray-900 dark:text-white block mb-1">코트비 포함 여부 먼저 확인</strong>
                                <p className="text-sm text-gray-600 dark:text-gray-400">실외 레슨은 레슨비가 낮아 보여도 대관료, 조명료, 볼비가 별도일 수 있습니다. 월 총액으로 비교해야 실제 절약 효과가 보입니다.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="registration-check" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-sky-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
                    등록 전 확인할 공식 기준
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-sky-50 dark:bg-sky-950/30 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-3 text-sky-700 dark:text-sky-300">공공 코트 기준가 확인</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                            실외 레슨을 알아볼 때는 주변 공공 테니스장 대관료를 먼저 확인하세요. 예를 들어 서울 공공서비스예약과 구립 체육시설 안내를 보면 대관료, 이용 제한, 양도 금지 규정을 확인할 수 있습니다.
                        </p>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <a href="https://yeyak.seoul.go.kr/" target="_blank" rel="noreferrer" className="font-semibold text-sky-700 underline dark:text-sky-300">
                                서울 공공서비스예약
                            </a>
                            <a href="https://www.seocho.go.kr/sports/fmcs/50" target="_blank" rel="noreferrer" className="font-semibold text-sky-700 underline dark:text-sky-300">
                                서초구 내곡테니스장 안내
                            </a>
                        </div>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-950/30 p-6 rounded-lg">
                        <h3 className="text-lg font-bold mb-3 text-amber-700 dark:text-amber-300">등록 전 체크리스트</h3>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                            <li>레슨비에 코트비, 볼머신, 라커, 샤워가 포함되는지 확인</li>
                            <li>우천·부상·출장으로 빠질 때 보강 규정 확인</li>
                            <li>3개월 이상 선결제 전 환불 기준과 사업자 정보를 확인</li>
                            <li>입문자는 첫 달만 등록한 뒤 코치 피드백 방식과 동선을 평가</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
                    결론 — 나에게 맞는 예산 계획
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    자신의 상황에 맞춰 합리적인 예산을 계획해보세요.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-gray-50 dark:bg-gray-800 border-none">
                        <CardContent className="p-5 text-center">
                            <h4 className="font-bold text-lg mb-2">🐤 가성비 입문파</h4>
                            <p className="text-2xl font-bold text-blue-600 mb-2">월 20만 원↓</p>
                            <p className="text-sm text-gray-500">실내 그룹레슨 or 실외 레슨<br />+ 기본 장비</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-blue-50 dark:bg-blue-900/30 border-none ring-2 ring-blue-200 dark:ring-blue-800">
                        <CardContent className="p-5 text-center">
                            <h4 className="font-bold text-lg mb-2">🔥 열정 성장파</h4>
                            <p className="text-2xl font-bold text-blue-600 mb-2">월 35만 원↓</p>
                            <p className="text-sm text-gray-500">실내 1:1 레슨<br />+ 중급 장비 + 볼머신</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-50 dark:bg-gray-800 border-none">
                        <CardContent className="p-5 text-center">
                            <h4 className="font-bold text-lg mb-2">💎 럭셔리 취미파</h4>
                            <p className="text-2xl font-bold text-blue-600 mb-2">월 50만 원↑</p>
                            <p className="text-sm text-gray-500">주 3회 이상 레슨<br />+ 최신 장비/의류 풀세팅</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <FAQ items={faqs} />

            <div className="mt-12 p-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">테니스 시작할 준비 되셨나요?</h3>
                <p className="mb-6 text-gray-300">비용보다 더 중요한 건 '꾸준함'입니다.</p>
                <Link href="/blog/tennis-starting-complete-guide" className="inline-block bg-white text-gray-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition transform hover:scale-105">
                    👉 테니스 시작 가이드 보러가기
                </Link>
            </div>
        </Article>
    );
}
