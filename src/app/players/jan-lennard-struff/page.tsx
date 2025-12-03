import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import PlayerProfileCard from '@/components/players/PlayerProfileCard';
import PlayerHexagonStats from '@/components/players/PlayerHexagonStats';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import ProfilePageSchema from '@/components/seo/ProfilePageSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import KeyTakeaways from '@/components/blog/KeyTakeaways';
import { Metadata } from 'next';
import { Crown, Star, Target, Shield, Brain, Award } from 'lucide-react';

export const metadata: Metadata = {
    title: '얀-레나드 스트루프 — 독일의 썬더볼트 | 플레이스타일·명장면·최근 경기력',
    description: "얀-레나드 스트루프 (Jan-Lennard Struff) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['얀-레나드 스트루프', 'Jan-Lennard Struff', '테니스', 'ATP', '플레이스타일', '독일 테니스', '서브앤발리', '대기만성'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/jan-lennard-struff',
    },
    openGraph: {
        title: '얀-레나드 스트루프 — 독일의 썬더볼트 | 플레이스타일·명장면·최근 경기력',
        description: '얀-레나드 스트루프의 강력한 서브와 네트 플레이, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/jan-lennard-struff',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '얀-레나드 스트루프 — 독일의 썬더볼트 | 플레이스타일·명장면·최근 경기력',
        description: '얀-레나드 스트루프의 강력한 서브와 네트 플레이, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
    { id: 'why-again-notable', text: '얀-레나드 스트루프, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '얀-레나드 스트루프는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 얀-레나드 스트루프의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '얀-레나드 스트루프, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '얀-레나드 스트루프의 경기 스타일은 어떤가요?',
        a: '강력한 서브와 포핸드, 그리고 적극적인 네트 플레이를 구사하는 공격적인 올라운더입니다. 서브 앤 발리를 자주 시도합니다.',
    },
    {
        q: '스트루프의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2023년 마드리드 오픈 준우승 이후 최고 랭킹 21위까지 올랐습니다. 30대에 접어들어 전성기를 맞이했습니다.',
    },
    {
        q: '스트루프의 강점은 무엇인가요?',
        a: '묵직한 서브와 파워풀한 스트로크, 그리고 복식 경험에서 우러나오는 뛰어난 발리 능력이 강점입니다.',
    },
    {
        q: '스트루프의 약점은 무엇인가요?',
        a: '움직임이 다소 느린 편이며, 랠리가 길어질수록 범실이 나올 확률이 높습니다.',
    },
    {
        q: '스트루프를 한 문장으로 설명하면?',
        a: '포기를 모르는 끈기와 강력한 한 방으로 늦은 나이에 꽃을 피운 독일 테니스의 든든한 버팀목입니다.',
    },
];

const keyTakeaways = [
    "30대에 커리어 하이를 경신하며 전성기를 맞이한 대기만성형 선수",
    "강력한 서브와 과감한 네트 플레이를 앞세운 공격적인 스타일",
    "2024년 뮌헨 오픈 우승으로 생애 첫 투어 타이틀 획득"
];

export default function JanLennardStruffPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="얀-레나드 스트루프"
                excerpt="늦은 나이에 전성기를 맞이한 대기만성형 빅 서버"
                image="/images/players/jan-lennard-struff.svg"
            >
                <ProfilePageSchema
                    name="얀-레나드 스트루프 — 독일의 썬더볼트 | 플레이스타일·명장면·최근 경기력"
                    description="얀-레나드 스트루프 (Jan-Lennard Struff) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/jan-lennard-struff.svg"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Jan-Lennard Struff',
                        alternateName: '얀-레나드 스트루프',
                        description: '독일 출신의 테니스 선수. 강력한 서브와 발리가 특징.',
                        image: '/images/players/jan-lennard-struff.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'Germany' },
                        birthDate: '1990-04-25',
                        height: { '@type': 'QuantitativeValue', value: '193', unitText: 'cm' },
                        award: ['ATP Tour Title (Munich 2024)', 'Madrid Open Finalist (2023)'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Jan-Lennard_Struff',
                            'https://www.atptour.com/en/players/jan-lennard-struff/sl28/overview',
                            'https://www.instagram.com/jl_struff/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '얀-레나드 스트루프', item: 'https://tennisfriends.co.kr/players/jan-lennard-struff' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Jan-Lennard Struff"
                        country="Germany"
                        age={34}
                        height="193cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2009}
                        grandSlams={0}
                        ranking={35}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            독일의 썬더볼트. <strong className="text-blue-600 dark:text-blue-400">강력한 서브와 발리</strong>로 상대를 압박하는 베테랑 승부사.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            얀-레나드 스트루프, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    30대에 커리어 하이를 경신하며 전성기를 맞이한 대기만성형 선수
                                </p>
                            </div>
                        </blockquote>
                        <p>얀-레나드 스트루프는 33세의 나이에 생애 첫 ATP 투어 결승(마드리드 오픈)에 진출하고, 34세에 첫 우승(뮌헨 오픈)을 차지한 '인간 승리'의 아이콘이다. 오랜 기간 투어 생활을 하면서도 포기하지 않고 끊임없이 도전하여 결국 결실을 맺은 그의 스토리는 많은 팬들에게 감동을 주고 있다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"공격형 올라운더 (Aggressive All-Rounder)"</strong></p>
                        <p>스트루프는 강력한 서브를 바탕으로 네트 플레이를 즐기는 공격적인 스타일을 구사한다.</p>

                        <PlayerHexagonStats
                            playerName="얀-레나드 스트루프"
                            attributes={[
                                { name: '서브 (Serve)', score: 9.0, description: '그의 가장 큰 무기. 빠르고 묵직한 서브로 손쉽게 포인트를 따낸다.' },
                                { name: '발리 (Volley)', score: 9.0, description: '복식 랭킹 상위권 출신답게 네트 앞에서의 처리가 매우 능숙하다.' },
                                { name: '파워 (Power)', score: 9.0, description: '스트로크에 실리는 힘이 좋아 상대를 베이스라인 뒤로 밀어낸다.' },
                                { name: '움직임 (Movement)', score: 7.0, description: '큰 키로 인해 민첩성은 다소 떨어지지만, 긴 리치로 커버한다.' },
                                { name: '꾸준함 (Consistency)', score: 7.5, description: '기복이 있는 편이었으나, 최근에는 안정감이 많이 좋아졌다.' },
                            ]}
                        />

                        <p>그는 베이스라인 랠리를 오래 가져가기보다는, 기회가 오면 바로 네트로 대시하여 발리로 마무리하는 것을 선호한다. 서브 앤 발리 빈도가 높으며, 리턴 게임에서도 공격적인 리턴 후 네트 점령을 시도한다. 클레이 코트에서도 의외로 강한 면모를 보이는데, 이는 그의 킥 서브와 강력한 스트로크가 클레이에서도 통하기 때문이다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>193cm의 건장한 체격에서 뿜어져 나오는 파워가 일품이다. 나이가 들었음에도 체력 관리가 잘 되어 있어 3세트 접전에서도 지치지 않는 모습을 보여준다.</p>

                        <h3 className="flex items-center gap-2">
                            <Brain className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            멘탈 강점
                        </h3>
                        <div className="not-prose my-4 p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded-r-lg shadow-sm">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-4 h-4 text-green-700 dark:text-green-400" />
                                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-0">
                                    핵심 통계
                                </p>
                            </div>
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-0">
                                2023 마드리드 오픈 준우승 (럭키 루저 신화) · 2024 뮌헨 오픈 우승 · <strong className="text-green-700 dark:text-green-400 text-base">늦게 핀 꽃</strong>
                            </p>
                        </div>
                        <p>오랜 무관의 설움을 딛고 일어선 끈기가 돋보인다. "언젠가는 될 것"이라는 믿음을 가지고 묵묵히 훈련에 매진한 결과가 지금의 성적이다. 경기 중에도 좀처럼 흥분하지 않고 차분하게 자신의 플레이를 이어간다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">얀-레나드 스트루프는 어떻게 여기까지 왔을까?</h2>
                        <p>독일 바르슈타인에서 태어난 스트루프는 2009년 프로에 데뷔했다. 오랫동안 챌린저 투어와 ATP 투어를 오가며 중위권 선수로 활약했다. 복식에서는 꽤 좋은 성적을 냈지만, 단식에서는 우승과 인연이 없었다. 하지만 30대에 접어들어 기량이 만개하며 제2의 전성기를 맞이했다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2023년 마드리드 오픈 결승 진출 과정이다.</p>

                        <h3>2023년 마드리드 오픈</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">럭키 루저의 기적</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                예선 결승에서 패배했으나, 본선 기권자가 발생하여 '럭키 루저'로 본선에 합류했다. 이후 스테파노스 치치파스 등을 꺾고 결승까지 진출하는 기적을 썼다. 비록 결승에서 알카라스에게 패했지만, 그의 투혼은 전 세계 테니스 팬들에게 깊은 인상을 남겼다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>포기하지 않는 도전 정신과 성실함이 팬들의 마음을 움직인다. 또한 공격적인 플레이 스타일은 보는 재미를 더한다. 독일 팬들에게는 즈베레프와 함께 독일 테니스를 이끄는 든든한 형님으로 사랑받고 있다.</p>

                        <h2 id="recent-form">요즘 얀-레나드 스트루프의 경기력 흐름은 어떤가?</h2>
                        <p>2024년 뮌헨 오픈 우승으로 자신감이 최고조에 달했다. 홈 코트에서 생애 첫 타이틀을 따내며 기쁨의 눈물을 흘렸다.</p>

                        <h3>최근 성적</h3>
                        <p>여전히 강력한 서브와 발리를 앞세워 투어 무대에서 경쟁력을 보여주고 있다. 그랜드 슬램에서도 시드 배정을 받으며 꾸준한 활약을 예고하고 있다.</p>

                        <h2 id="one-sentence-summary">얀-레나드 스트루프, 한 문장으로 정리하면?</h2>
                        <p>얀-레나드 스트루프는 포기를 모르는 끈기와 강력한 한 방으로 늦은 나이에 꽃을 피운 독일 테니스의 썬더볼트다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
