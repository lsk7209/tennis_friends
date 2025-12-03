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
    title: '알렉세이 포피린 — 호주의 거인 | 플레이스타일·명장면·최근 경기력',
    description: "알렉세이 포피린 (Alexei Popyrin) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['알렉세이 포피린', 'Alexei Popyrin', '테니스', 'ATP', '플레이스타일', '호주 테니스', '마스터스 우승', '빅 서버'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/alexei-popyrin',
    },
    openGraph: {
        title: '알렉세이 포피린 — 호주의 거인 | 플레이스타일·명장면·최근 경기력',
        description: '알렉세이 포피린의 강력한 서브와 포핸드, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/alexei-popyrin',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '알렉세이 포피린 — 호주의 거인 | 플레이스타일·명장면·최근 경기력',
        description: '알렉세이 포피린의 강력한 서브와 포핸드, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '알렉세이 포피린, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '알렉세이 포피린은 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 알렉세이 포피린의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '알렉세이 포피린, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '알렉세이 포피린의 경기 스타일은 어떤가요?',
        a: '큰 키를 활용한 강력한 서브와 포핸드 위주의 공격적인 플레이를 펼칩니다. 전형적인 빅 서버 스타일입니다.',
    },
    {
        q: '포피린의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2024년 몬트리올 마스터스 우승으로 랭킹이 급상승하여 20위권에 진입했습니다. 커리어 하이를 기록 중입니다.',
    },
    {
        q: '포피린의 강점은 무엇인가요?',
        a: '시속 210km를 넘나드는 서브와 묵직한 포핸드 스트로크가 강점입니다. 최근에는 멘탈적인 부분도 크게 성장했습니다.',
    },
    {
        q: '포피린의 약점은 무엇인가요?',
        a: '큰 키로 인해 움직임이 다소 둔할 수 있으며, 백핸드 쪽에서의 수비가 상대적으로 불안합니다.',
    },
    {
        q: '포피린을 한 문장으로 설명하면?',
        a: '호주 테니스의 자존심을 세운 거인이자, 언제든지 탑 랭커를 잡을 수 있는 저력을 가진 선수입니다.',
    },
];

const keyTakeaways = [
    "2024년 몬트리올 마스터스 우승으로 증명된 잠재력 폭발",
    "196cm의 장신에서 뿜어져 나오는 강력한 서브와 포핸드",
    "레이튼 휴이트 이후 호주 테니스를 이끌어갈 재목으로 급부상"
];

export default function AlexeiPopyrinPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="알렉세이 포피린"
                excerpt="강력한 서브와 포핸드로 마스터스 1000 우승을 차지한 호주의 차세대 에이스"
                image="/images/players/alexei-popyrin.png"
            >
                <ProfilePageSchema
                    name="알렉세이 포피린 — 호주의 거인 | 플레이스타일·명장면·최근 경기력"
                    description="알렉세이 포피린 (Alexei Popyrin) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/alexei-popyrin.png"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Alexei Popyrin',
                        alternateName: '알렉세이 포피린',
                        description: '호주 출신의 테니스 선수. 2024년 몬트리올 마스터스 우승자.',
                        image: '/images/players/alexei-popyrin.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'Australia' },
                        birthDate: '1999-08-05',
                        height: { '@type': 'QuantitativeValue', value: '196', unitText: 'cm' },
                        award: ['ATP Masters 1000 Champion (Montreal 2024)', 'ATP Tour Titles (3)'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Alexei_Popyrin',
                            'https://www.atptour.com/en/players/alexei-popyrin/ph21/overview',
                            'https://www.instagram.com/alexeipopyrin/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '알렉세이 포피린', item: 'https://tennisfriends.co.kr/players/alexei-popyrin' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Alexei Popyrin"
                        country="Australia"
                        age={25}
                        height="196cm"
                        plays="Right-handed (Two-handed backhand)"
                        turnedPro={2017}
                        grandSlams={0}
                        ranking={23}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            호주의 거인. <strong className="text-blue-600 dark:text-blue-400">마스터스 1000 우승</strong>으로 자신의 가치를 증명한 빅 서버.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            알렉세이 포피린, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    2024년 몬트리올 마스터스 우승으로 세계를 놀라게 한 호주의 희망
                                </p>
                            </div>
                        </blockquote>
                        <p>알렉세이 포피린은 오랫동안 '유망주' 꼬리표를 달고 있었으나, 2024년 몬트리올 마스터스에서 안드레이 루블레프, 후베르트 후르카츠, 그리고 결승에서 안드레이 루블레프를 꺾고 우승하며 잠재력을 폭발시켰다. 196cm의 큰 키에서 나오는 서브와 포핸드는 이제 세계 최정상급 선수들도 두려워하는 무기가 되었다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"공격형 빅 서버 (Aggressive Big Server)"</strong></p>
                        <p>포피린은 서브로 게임을 지배하고, 짧은 랠리 안에 포인트를 끝내는 공격적인 스타일을 구사한다.</p>

                        <PlayerHexagonStats
                            playerName="알렉세이 포피린"
                            attributes={[
                                { name: '서브 (Serve)', score: 9.0, description: '그의 게임을 풀어가는 핵심. 에이스 생산 능력이 탁월하다.' },
                                { name: '포핸드 (Forehand)', score: 9.0, description: '강력한 탑스핀과 플랫 샷을 자유자재로 구사한다. 위너를 만들어내는 주무기.' },
                                { name: '멘탈 (Mental)', score: 8.5, description: '과거에는 기복이 있었으나, 최근 큰 경기에서 흔들리지 않는 모습을 보여주고 있다.' },
                                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적이지만 공격력은 포핸드에 비해 다소 떨어진다.' },
                                { name: '움직임 (Movement)', score: 7.5, description: '큰 키에 비해 나쁘지 않지만, 민첩성은 개선의 여지가 있다.' },
                            ]}
                        />

                        <p>그는 자신의 서브 게임을 확실하게 지키는 데 집중한다. 리턴 게임에서는 과감한 공격으로 브레이크 기회를 노린다. 특히 하드 코트에서 공의 바운드를 이용한 공격이 위력적이다. 네트 플레이 빈도도 점차 늘려가며 올라운더로서의 면모도 갖추고 있다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>196cm의 장신은 서브와 리치에서 큰 이점을 준다. 최근 체력 훈련을 강화하여 3세트 접전이나 5세트 경기에서도 지치지 않는 모습을 보여주고 있다.</p>

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
                                2024 몬트리올 마스터스 우승 · 탑 10 상대 승리 다수 · <strong className="text-green-700 dark:text-green-400 text-base">빅매치 킬러</strong>
                            </p>
                        </div>
                        <p>자신감이 넘친다. "나는 누구든 이길 수 있다"는 마인드셋을 가지고 경기에 임한다. 이는 그가 탑 랭커들을 상대로 주눅 들지 않고 자신의 플레이를 펼칠 수 있게 하는 원동력이다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">알렉세이 포피린은 어떻게 여기까지 왔을까?</h2>
                        <p>러시아계 호주인으로, 시드니에서 태어났다. 2017년 프랑스 오픈 주니어 단식 우승을 차지하며 일찌감치 재능을 인정받았다. 프로 데뷔 후 꾸준히 랭킹을 올렸으나, 확실한 한 방이 부족하다는 평가를 받기도 했다. 하지만 2024년 몬트리올 우승으로 그 평가를 완전히 뒤집었다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>단연 2024년 몬트리올 마스터스 결승전이다.</p>

                        <h3>2024년 몬트리올 마스터스 결승</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">인생 경기를 펼치다</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                안드레이 루블레프를 상대로 압도적인 경기력을 보여주며 2-0 승리를 거뒀다. 특히 중요한 순간마다 터진 포핸드 위너는 그가 더 이상 유망주가 아닌, 투어의 강자임을 선언하는 듯했다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>시원시원한 플레이 스타일과 코트 위에서의 파이팅 넘치는 모습이 매력적이다. 또한 다양한 언어(영어, 러시아어, 스페인어 등)를 구사하며 글로벌 팬들과 소통하는 모습도 인상적이다.</p>

                        <h2 id="recent-form">요즘 알렉세이 포피린의 경기력 흐름은 어떤가?</h2>
                        <p>커리어 최고의 시즌을 보내고 있다. 몬트리올 우승 이후 자신감이 크게 상승했으며, 그랜드 슬램에서도 더 높은 곳을 바라보고 있다.</p>

                        <h3>최근 성적</h3>
                        <p>US 오픈에서도 노박 조코비치를 꺾는 파란을 일으키며 상승세를 이어갔다. 이제는 꾸준함만 더한다면 탑 10 진입도 꿈이 아니다.</p>

                        <h2 id="one-sentence-summary">알렉세이 포피린, 한 문장으로 정리하면?</h2>
                        <p>알렉세이 포피린은 강력한 서브와 포핸드로 무장한 호주의 거인이자, 새로운 마스터스 챔피언이다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
