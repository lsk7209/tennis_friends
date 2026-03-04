/* eslint-disable react/no-unescaped-entities */
import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata = {
    title: '테니스 엘보 예방과 재활 가이드 — 통증 없이 운동하는 법 (스트레칭, 보호대)',
    description: '테니스 동호인의 50%가 겪는다는 테니스 엘보. 팔꿈치 바깥쪽 통증의 원인부터 재활 운동, 라켓/스트링 세팅 변경 팁까지 완벽하게 정리했습니다.',
    keywords: ['테니스 엘보', '테니스 엘보 증상', '테니스 엘보 스트레칭', '테니스 엘보 보호대', '테니스 팔꿈치 통증', '테니스 재활'],
    alternates: {
        canonical: `${SITE_URL}/blog/tennis-elbow-prevention-guide`,
    },
    openGraph: {
        title: '테니스 엘보 예방과 재활 가이드 — 통증 없이 운동하는 법',
        description: '지긋지긋한 팔꿈치 통증 탈출! 원인 분석과 장비 세팅 솔루션.',
        url: `${SITE_URL}/blog/tennis-elbow-prevention-guide`,
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: '테니스 엘보 예방과 재활 가이드 — 통증 없이 운동하는 법',
        description: '지긋지긋한 팔꿈치 통증 탈출! 원인 분석과 장비 세팅 솔루션.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'what-is-tennis-elbow', text: '1. 테니스 엘보란? (증상 자가진단)', depth: 2 },
    { id: 'causes', text: '2. 왜 생길까? (잘못된 자세 vs 장비)', depth: 2 },
    { id: 'equipment-solution', text: '3. 장비로 해결하기 (라켓, 스트링, 댐퍼)', depth: 2 },
    { id: 'rehab-exercise', text: '4. 예방 및 재활 운동 (스트레칭)', depth: 2 },
    { id: 'band-selection', text: '5. 보호대 선택 가이드', depth: 2 },
    { id: 'conclusion', text: '결론 — 아프면 쉬는 게 정답', depth: 2 },
];

const faqs = [
    {
        q: '엘보가 왔는데 테니스 계속 쳐도 되나요?',
        a: '절대 안 됩니다. 통증이 느껴지면 즉시 중단하고 최소 2~3주간 휴식(Ice & Rest)해야 합니다. 참고 치면 만성 염증으로 악화되어 1년을 쉬어야 할 수도 있습니다.'
    },
    {
        q: '엘보에는 어떤 스트링이 좋은가요?',
        a: '충격 흡수가 좋은 "멀티필라멘트(인조쉽)" 계열을 추천합니다. 폴리 줄을 쓰더라도 텐션을 40파운드 초반대로 대폭 낮추면 팔꿈치 부담이 줄어듭니다.'
    },
    {
        q: '백핸드 칠 때 더 아픈데 이유가 뭔가요?',
        a: '원핸드 백핸드 구사 시 타점을 늦게 잡거나 손목 힘으로만 치면 충격이 고스란히 엘보(외측상과)로 전달됩니다. 자세 교정이 시급합니다.'
    },
    {
        q: '병원 치료는 꼭 받아야 하나요?',
        a: '초기에는 휴식과 스트레칭으로 호전되지만, 컵을 들거나 문고리를 돌릴 때도 아프다면 정형외과에서 물리치료나 체외충격파 치료를 받는 것이 좋습니다.'
    }
];

export default function TennisElbowPreventionGuidePage() {
    const title = '테니스 엘보 예방과 재활 가이드 — 통증 없이 운동하는 법 (스트레칭, 보호대)';
    const excerpt = '찌릿한 팔꿈치 통증 때문에 라켓을 놓을까 고민 중이신가요? 테니스 엘보의 원인을 파헤치고, 다시 코트로 돌아오기 위한 확실한 솔루션을 드립니다.';

    return (
        <Article
            title={title}
            excerpt={excerpt}
            date="2026-01-28"
            slug="tennis-elbow-prevention-guide"
            author="TennisFriends"
            image="/images/blog/tennis-elbow-prevention-guide.png"
        >
            <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950 dark:to-pink-950 p-6 rounded-lg mb-8">
                <div className="flex items-center gap-2 mb-3">
                    <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                        부상 주의
                    </Badge>
                    <Badge className="bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300">
                        재활 꿀팁
                    </Badge>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    "악!" 임팩트 순간 팔꿈치에 전해지는 찌릿한 통증. 테니스인이라면 누구나 두려워하는 그 이름, **테니스 엘보(Tennis Elbow)**입니다. 한 번 오면 쉽게 낫지 않는 이 불청객을 어떻게 예방하고 관리해야 할까요?
                </p>
            </div>

            <TOC items={tocItems} />

            <section id="what-is-tennis-elbow" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    테니스 엘보란? (증상 자가진단)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                    정식 명칭은 '외측상과염'. 팔꿈치 바깥쪽 뼈에 붙은 힘줄이 과도한 힘이나 반복적인 충격으로 미세 파열되어 염증이 생긴 상태입니다.
                </p>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border-l-4 border-red-400">
                    <h4 className="font-bold mb-3 text-red-600 dark:text-red-400">🚨 자가진단 체크리스트</h4>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>□ 팔꿈치 바깥쪽을 누르면 심하게 아프다.</li>
                        <li>□ 주먹을 쥐거나 비트는 동작(걸레 짜기 등)이 힘들다.</li>
                        <li>□ 물건을 들어 올릴 때 팔꿈치가 시큰거린다.</li>
                        <li>□ 테니스 백핸드 스트로크 시 통증이 심해진다.</li>
                    </ul>
                </div>
            </section>

            <section id="causes" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-orange-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    왜 생길까? (잘못된 자세 vs 장비)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <div className="text-4xl mb-3 text-center">🙅‍♂️</div>
                            <h3 className="text-lg font-bold mb-2 text-center">잘못된 자세</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                가장 큰 원인입니다. 몸통 회전(코어)을 쓰지 않고 <strong>"팔로만 치는 스윙"</strong>이 주범입니다. 특히 입문자들이 공을 세게 치려고 손목을 무리하게 꺾거나, 타점이 늦었을 때 억지로 넘기려다 다칩니다.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-gray-800">
                        <CardContent className="p-5">
                            <div className="text-4xl mb-3 text-center">🔨</div>
                            <h3 className="text-lg font-bold mb-2 text-center">장비 문제</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                자세가 좋아도 장비가 안 맞으면 옵니다.
                            </p>
                            <ul className="list-disc list-inside mt-2 text-xs text-gray-500">
                                <li>너무 딱딱한 라켓 (강성 높음)</li>
                                <li>너무 높은 텐션 (50lbs 이상)</li>
                                <li>오래되어 탄성 잃은 스트링</li>
                                <li>손에 맞지 않는 그립 사이즈 (너무 작거나 큼)</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="equipment-solution" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    장비로 해결하기 (라켓, 스트링, 댐퍼)
                </h2>

                <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🏸</div>
                        <div>
                            <h3 className="font-bold text-blue-700 dark:text-blue-300">1. 부드러운 라켓으로 교체</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                강성(Stiffness/RA)이 낮은 라켓을 찾으세요. 윌슨 클래시(Clash), 헤드 붐(Boom), 프로케넥스 등이 팔이 편하기로 유명합니다. 무게도 너무 가볍기보다는 적당한 무게(290~300g)가 충격을 흡수해줍니다.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🧶</div>
                        <div>
                            <h3 className="font-bold text-blue-700 dark:text-blue-300">2. 스트링 & 텐션 낮추기</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                가장 저렴하고 효과적인 방법입니다. 딱딱한 폴리 대신 **멀티필라멘트**로 바꾸고, 텐션을 40~44lbs까지 과감하게 낮추세요. 공이 펑펑 날린다면 스윙을 더 부드럽게 가져가면 됩니다.
                            </p>
                            <div className="mt-2 text-xs">
                                <Link href="/blog/tennis-string-guide" className="text-blue-600 underline">👉 스트링 가이드 자세히 보기</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">🔇</div>
                        <div>
                            <h3 className="font-bold text-blue-700 dark:text-blue-300">3. 댐퍼는 글쎄?</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                진동 감쇠기(댐퍼)는 타구음(소리)을 잡아줄 뿐, 팔로 전달되는 실제 충격량을 유의미하게 줄여주지는 못한다는 연구 결과가 많습니다. 심리적 위안 효과는 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="rehab-exercise" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                    예방 및 재활 운동 (스트레칭)
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    운동 전후 5분 투자가 6개월 병원비를 아껴줍니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden">
                        <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl mb-2">🖐️</div>
                            <span className="text-gray-500 font-medium">손목 신전 스트레칭 등 이미지 업데이트 예정</span>
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-bold mb-2">1. 손목 신전 스트레칭</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                팔을 앞으로 쭉 뻗고 손등을 반대 손으로 몸 쪽으로 당겨줍니다. 팔꿈치 바깥쪽이 당기는 느낌이 들어야 합니다. (15초 유지 x 3회)
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-gray-800 overflow-hidden">
                        <div className="h-40 bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-400">
                            <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-3xl mb-2">✊</div>
                            <span className="text-gray-500 font-medium">악력 운동 이미지 업데이트 예정</span>
                        </div>
                        <CardContent className="p-4">
                            <h3 className="font-bold mb-2">2. 전완근 강화 운동</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                말랑한 고무공을 쥐었다 폈다 하거나, 가벼운 아령(1~2kg)으로 손목을 위아래로 까딱거리는 운동(손목 컬)을 꾸준히 해주세요. 근육이 충격을 대신 흡수해줍니다.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section id="band-selection" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
                    보호대 선택 가이드
                </h2>
                <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg">
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 dark:text-purple-400 font-bold">• 밴드형 (스트랩):</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                팔꿈치 바로 아래 근육을 꽉 압박해 힘줄로 가는 진동을 차단합니다. 가장 대중적이고 효과적입니다. (추천: 잠스트, 나이키)
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-purple-600 dark:text-purple-400 font-bold">• 슬리브형 (토시):</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                전체적인 보온과 압박을 해줍니다. 예방용으로는 좋지만, 통증이 이미 있다면 밴드형이 낫습니다.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>

            <section id="conclusion" className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <span className="bg-gray-800 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
                    결론 — 아프면 쉬는 게 정답
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    테니스는 평생 할 수 있는 운동입니다. 당장 코트에 나가고 싶은 마음은 알지만, 통증을 무시하면 영영 라켓을 못 잡을 수도 있습니다. 충분한 휴식과 장비 점검, 그리고 올바른 자세 교정이 엘보 탈출의 유일한 지름길입니다.
                </p>

                <div className="mt-8 text-center">
                    <Link href="/blog/tennis-lesson-cost-guide" className="inline-block bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-bold py-3 px-8 rounded-full transition">
                        제대로 된 레슨 찾기
                    </Link>
                </div>
            </section>

            <FAQ items={faqs} />
        </Article>
    );
}
