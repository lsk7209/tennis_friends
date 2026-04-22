import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
    title: '테니스 시작하기 완벽 가이드 2026 — 비용, 준비물, 레슨, 용어 총정리',
    description: '테린이 탈출을 위한 A to Z. 라켓 구매 비용부터 레슨비, 필수 용어, 코트 매너, 그리고 1년 성장 로드맵까지. 테니스 입문의 모든 궁금증을 해결해 드립니다.',
    keywords: ['테니스 입문 비용', '테니스 레슨비', '테니스 준비물', '테니스 용어', '테니스 점수 계산', '테니스 에티켓', '테니스 라켓 추천'],
    alternates: {
        canonical: 'https://tennisfrens.com/blog/tennis-starting-complete-guide',
    },
    openGraph: {
        title: '테니스 시작하기 완벽 가이드 2026 — 비용, 준비물, 레슨, 용어 총정리',
        description: '테린이 탈출을 위한 A to Z. 라켓 구매 비용부터 레슨비, 필수 용어, 코트 매너, 그리고 1년 성장 로드맵까지.',
        url: 'https://tennisfrens.com/blog/tennis-starting-complete-guide',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 입문 백서 2026 — 비용부터 로드맵까지',
        description: '테린이 탈출을 위한 A to Z. 라켓 구매 비용부터 레슨비, 필수 용어, 코트 매너, 그리고 1년 성장 로드맵까지.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'why-tennis', text: '1. 왜 지금 테니스인가? (골프/헬스와 비교)', depth: 2 },
    { id: 'cost-analysis', text: '2. 현실적인 비용 분석 (레슨비 + 장비값)', depth: 2 },
    { id: 'preparation', text: '3. 필수 준비물 & 구매 팁', depth: 2 },
    { id: 'finding-lessons', text: '4. 좋은 레슨장과 코치님 찾는 법', depth: 2 },
    { id: 'dictionary', text: '5. 테린이 필수 용어 사전 (이것만 알면 통한다)', depth: 2 },
    { id: 'etiquette', text: '6. 코트 매너 & 에티켓 (비매너 소리 안 듣는 법)', depth: 2 },
    { id: 'roadmap', text: '7. 1년 성장 로드맵 (입문 ~ 게임까지)', depth: 2 },
    { id: 'conclusion', text: '결론 — 당신의 인생 취미가 될 것입니다', depth: 2 },
];

const faqs = [
    {
        q: '테니스 배우는데 총 비용이 얼마나 드나요?',
        a: '초기 장비(라켓, 신발 등)에 약 30~50만 원, 월 레슨비(주 2회 20분 기준) 약 20~25만 원 정도가 듭니다. 골프보다는 저렴하고 헬스보다는 비싼 편입니다.'
    },
    {
        q: '운동 신경이 꽝인데 할 수 있을까요?',
        a: '네, 가능합니다! 테니스는 감각도 중요하지만 "올바른 자세의 반복 숙달"이 핵심인 스포츠입니다. 꾸준히 레슨 받고 빈 스윙 연습을 하면 누구나 랠리가 가능합니다.'
    },
    {
        q: '라켓은 무조건 새 거 사야 하나요?',
        a: '아니요. 처음 1~2달은 레슨장에 있는 대여 라켓을 쓰시면서 본인에게 맞는 무게와 브랜드를 찾는 게 좋습니다. 그 후 당근마켓 등에서 상태 좋은 중고(10~15만원 선)로 시작하는 것도 현명한 방법입니다.'
    },
    {
        q: '게임은 언제부터 가능한가요?',
        a: '개인차가 크지만, 보통 레슨 3개월 차에 난타(랠리)가 되고, 6개월 정도 되면 서브를 넣고 게임 운영이 가능해집니다. 구력 1년까지는 "테린이"라고 불립니다.'
    }
];

export default function TennisStartingCompleteGuidePage() {
    const title = '테니스 시작하기 완벽 가이드 2026 — 비용, 준비물, 레슨, 용어 총정리';
    const excerpt = '테니스는 진입 장벽이 조금 높지만, 한번 빠지면 헤어나올 수 없는 매력적인 스포츠입니다. 라켓 구매부터 첫 게임까지, 여러분의 테니스 라이프 시작을 돕는 가장 완벽한 가이드북입니다.';

    return (
        <Article
            title={title}
            excerpt={excerpt}
            date="2026-01-26"
            slug="tennis-starting-complete-guide"
            author="TennisFriends"
            image="/images/blog/tennis-starting-complete-guide.png"
        >
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 p-6 rounded-lg mb-8 border border-emerald-100 dark:border-emerald-900">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                        입문자 필독
                    </Badge>
                    <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300">
                        비용 분석 포함
                    </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
                    "주말에 테니스 한 게임 칠까?"라는 말이 일상이 되는 삶. 상상만 해도 즐겁지 않으신가요? 하지만 막상 시작하려니 돈은 얼마나 드는지, 라켓은 뭘 사야 하는지, 용어는 왜 이렇게 어려운지 막막하실 겁니다. 걱정 마세요. <span className="font-bold text-emerald-600 dark:text-emerald-400">TennisFriends</span>가 여러분의 든든한 가이드가 되어드리겠습니다.
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="why-tennis" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-emerald-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    왜 지금 테니스인가? (타 스포츠 비교)
                </h2>
                <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 uppercase">
                            <tr>
                                <th className="px-6 py-3">구분</th>
                                <th className="px-6 py-3 text-emerald-600 font-bold">테니스 🎾</th>
                                <th className="px-6 py-3">골프 ⛳</th>
                                <th className="px-6 py-3">헬스(PT) 🏋️</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr>
                                <td className="px-6 py-4 font-medium">운동 효과</td>
                                <td className="px-6 py-4">유산소+무산소 (칼로리 폭발)</td>
                                <td className="px-6 py-4">유연성, 멘탈 (운동량 적음)</td>
                                <td className="px-6 py-4">근력 위주 (유산소 별도)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">비용 (월)</td>
                                <td className="px-6 py-4">20~30만원 (중간)</td>
                                <td className="px-6 py-4">50만원+ (비쌈)</td>
                                <td className="px-6 py-4">10~15만원 (저렴)</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">재미 요소</td>
                                <td className="px-6 py-4">타격감, 랠리, 승부욕</td>
                                <td className="px-6 py-4">자연, 친목, 비즈니스</td>
                                <td className="px-6 py-4">자기 관리, 몸 변화</td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 font-medium">진입 장벽</td>
                                <td className="px-6 py-4 bg-emerald-50 dark:bg-emerald-900/20 font-bold">높음 (최소 6개월 레슨 필요)</td>
                                <td className="px-6 py-4">매우 높음</td>
                                <td className="px-6 py-4">낮음</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="cost-analysis" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    현실적인 비용 분석 (서울 기준)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-blue-900">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300 flex items-center gap-2">💰 초기 장비 비용 (1회성)</h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li className="flex justify-between border-b pb-1 border-gray-100 dark:border-gray-700">
                                    <span>테니스 라켓 (신품)</span>
                                    <span className="font-bold">25~30만 원</span>
                                </li>
                                <li className="flex justify-between border-b pb-1 border-gray-100 dark:border-gray-700">
                                    <span>테니스화 (필수)</span>
                                    <span className="font-bold">10~15만 원</span>
                                </li>
                                <li className="flex justify-between border-b pb-1 border-gray-100 dark:border-gray-700">
                                    <span>운동복 (기능성)</span>
                                    <span className="font-bold">5~10만 원</span>
                                </li>
                                <li className="flex justify-between pt-2 text-lg font-bold text-blue-600">
                                    <span>합계</span>
                                    <span>약 40~55만 원</span>
                                </li>
                            </ul>
                            <p className="text-xs text-gray-500 mt-3">* 중고 라켓 구매 시 10~15만 원 절약 가능</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-white dark:bg-gray-800 border-2 border-green-100 dark:border-green-900">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300 flex items-center gap-2">🔄 월 유지 비용</h3>
                            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                                <li className="flex justify-between border-b pb-1 border-gray-100 dark:border-gray-700">
                                    <span>실내 레슨 (주 2회 20분)</span>
                                    <span className="font-bold">20~28만 원</span>
                                </li>
                                <li className="flex justify-between border-b pb-1 border-gray-100 dark:border-gray-700">
                                    <span>실내 연습장 대관 (선택)</span>
                                    <span className="font-bold">5~10만 원</span>
                                </li>
                                <li className="flex justify-between border-b pb-1 border-gray-100 dark:border-gray-700">
                                    <span>스트링 교체 (2달 1회)</span>
                                    <span className="font-bold">월 1.5만 원</span>
                                </li>
                                <li className="flex justify-between pt-2 text-lg font-bold text-green-600">
                                    <span>합계</span>
                                    <span>약 25~40만 원</span>
                                </li>
                            </ul>
                            <p className="text-xs text-gray-500 mt-3">* 6개월 이후 클럽 가입 시 회비 월 3~5만 원 추가</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="preparation" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    필수 준비물 & 구매 팁
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                        <div className="text-4xl mb-3">👟</div>
                        <h3 className="font-bold text-lg mb-2">1. 테니스화 (0순위)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">러닝화 절대 금지. 발목 보호를 위해 필수입니다.</p>
                        <Link href="/blog/tennis-shoes-selection-guide" className="text-indigo-500 font-bold text-sm hover:underline">추천 가이드 보기 →</Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                        <div className="text-4xl mb-3">🎾</div>
                        <h3 className="font-bold text-lg mb-2">2. 라켓 (1순위)</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">첫 라켓은 100빵, 300g(남)/270g(여) 오픈 패턴 추천.</p>
                        <Link href="/blog/tennis-racket-selection-guide" className="text-indigo-500 font-bold text-sm hover:underline">추천 가이드 보기 →</Link>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm">
                        <div className="text-4xl mb-3">👕</div>
                        <h3 className="font-bold text-lg mb-2">3. 의류 & 양말</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">주머니 있는 반바지(공 보관용), 두꺼운 스포츠 양말.</p>
                    </div>
                </div>
            </section>

            <section id="dictionary" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    테린이 필수 용어 사전 (Dictionary)
                </h2>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 divide-y divide-gray-200 dark:divide-gray-800">
                    <div className="py-3">
                        <span className="font-bold text-purple-600 w-24 inline-block">랠리 (Rally)</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">공을 주고받는 행위. "난타 친다"라고도 함.</span>
                    </div>
                    <div className="py-3">
                        <span className="font-bold text-purple-600 w-24 inline-block">듀스 (Deuce)</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">40:40 동점 상황. 연속으로 2점을 따야 게임을 가져감.</span>
                    </div>
                    <div className="py-3">
                        <span className="font-bold text-purple-600 w-24 inline-block">폴트 (Fault)</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">서브가 서비스 박스에 들어가지 않은 것. 2번 실패하면 '더블 폴트'로 실점.</span>
                    </div>
                    <div className="py-3">
                        <span className="font-bold text-purple-600 w-24 inline-block">렛 (Let)</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">서브가 네트를 맞고 들어갔거나, 경기 중 방해 요소 발생 시 플레이를 다시 하는 것.</span>
                    </div>
                    <div className="py-3">
                        <span className="font-bold text-purple-600 w-24 inline-block">러브 (Love)</span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm">0점을 의미. 프랑스어 'l'oeuf(달걀)'에서 유래했다는 설이 있음.</span>
                    </div>
                </div>
            </section>

            <section id="etiquette" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    코트 매너 & 에티켓 A to Z
                </h2>
                <Card className="bg-pink-50 dark:bg-pink-950/20 border-pink-100 dark:border-pink-900/50">
                    <CardContent className="p-6">
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <span className="text-2xl">🙏</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">코트 이동 시</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        다른 코트 뒤로 지나갈 때는 <strong>랠리가 끝날 때까지 기다렸다가</strong>, "지나가겠습니다" 하고 빠르게 이동합니다. 랠리 중에 뒤에서 움직이면 시야에 걸려 방해됩니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-2xl">🎾</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">공 돌려줄 때</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        옆 코트에서 공이 넘어왔다면, <strong>발로 차지 말고 손으로 주워서</strong> 랠리가 멈췄을 때 상대방이 받기 좋게 원바운드로 던져줍니다.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <span className="text-2xl">📢</span>
                                <div>
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">인/아웃 콜(Call)</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        내 코트에 떨어진 공의 판정 권한은 <strong>나에게</strong> 있습니다. 애매하면 상대에게 유리하게(IN) 선언해주거나, 렛(재경기)을 부르는 것이 매너입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="mt-4 text-center">
                    <Link href="/blog/tennis-etiquette-and-manners" className="inline-flex items-center text-pink-600 font-bold hover:underline">
                        매너가 사람을 만든다! 에티켓 가이드 전체 보기 ➜
                    </Link>
                </div>
            </section>

            <section id="roadmap" className="mb-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
                    1년 성장 로드맵 (Zero to Hero)
                </h2>

                <div className="relative border-l-4 border-teal-200 dark:border-teal-900 ml-6 space-y-10">
                    <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                        <h3 className="font-bold text-lg text-teal-700 dark:text-teal-300 mb-1">1개월 ~ 3개월: 인내의 시간</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            가장 지루하고 힘든 시기입니다. 코치님이 던져주는 공만 칩니다.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 p-3 rounded">
                            <li>포핸드/백핸드 자세 교정</li>
                            <li>정확한 타점 맞추기 연습</li>
                            <li>벽치기 10회 연속 도전</li>
                        </ul>
                    </div>

                    <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                        <h3 className="font-bold text-lg text-teal-700 dark:text-teal-300 mb-1">4개월 ~ 6개월: 테린이 입문</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            이제 코치님과 랠리가 조금씩 됩니다. 서브를 배우기 시작합니다.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 p-3 rounded">
                            <li>발리(Volley) 기본기 습득</li>
                            <li>서브 토스 및 스윙 연습</li>
                            <li>클럽 가입 또는 오픈채팅방 기웃거리기</li>
                        </ul>
                    </div>

                    <div className="relative pl-8">
                        <div className="absolute -left-3.5 top-0 w-6 h-6 bg-teal-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                        <h3 className="font-bold text-lg text-teal-700 dark:text-teal-300 mb-1">6개월 ~ 1년: 게임의 맛</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                            드디어 게임이 가능합니다! 하지만 엄청나게 털리고 다닙니다.
                        </p>
                        <ul className="list-disc list-inside text-sm text-gray-500 bg-gray-50 dark:bg-gray-800 p-3 rounded">
                            <li>첫 대회(테린이 대회) 출전 고민</li>
                            <li>복식 게임 룰 완벽 숙지</li>
                            <li>장비병 도짐 (라켓 교체, 의류 구매)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-gray-700 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
                    결론 — 당신의 인생 취미가 될 것입니다
                </h2>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl text-center">
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed font-medium text-lg">
                        테니스는 배우는 과정은 힘들지만, 네트를 넘어 상대 코트 구석에 공이 꽂힐 때의 쾌감은 그 무엇과도 바꿀 수 없습니다. <br /><br />
                        지금 바로 집 근처 테니스장에 전화를 걸어보세요.<br />
                        그 전화 한 통이 여러분의 평생 건강과 즐거움을 책임질 것입니다.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/blog/tennis-racket-selection-guide" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold transition shadow-lg">
                            🚀 라켓 고르러 가기
                        </Link>
                        <Link href="/blog/tennis-shoes-selection-guide" className="bg-white hover:bg-gray-50 text-emerald-600 px-6 py-3 rounded-full font-bold transition shadow-lg border border-emerald-200">
                            👟 신발 고르러 가기
                        </Link>
                    </div>
                </div>
            </section>

            <FAQ items={faqs} />
        </Article>
    );
}
