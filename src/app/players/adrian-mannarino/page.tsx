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
    title: '아드리안 만나리노 — 코트 위의 마법사 | 플레이스타일·명장면·최근 경기력',
    description: "아드리안 만나리노 (Adrian Mannarino) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석. 강점과 약점, 사용 장비(라켓, 신발), 최신 경기 성적 및 통계 정보를 제공합니다.",
    keywords: ['아드리안 만나리노', 'Adrian Mannarino', '테니스', 'ATP', '플레이스타일', '프랑스 테니스', '낮은 텐션', '왼손잡이'],
    alternates: {
        canonical: 'https://tennisfriends.co.kr/players/adrian-mannarino',
    },
    openGraph: {
        title: '아드리안 만나리노 — 코트 위의 마법사 | 플레이스타일·명장면·최근 경기력',
        description: '아드리안 만나리노의 독특한 스윙과 낮은 텐션, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
        url: 'https://tennisfriends.co.kr/players/adrian-mannarino',
        siteName: 'TennisFriends',
        locale: 'ko_KR',
        type: 'profile',
    },
    twitter: {
        card: 'summary_large_image',
        title: '아드리안 만나리노 — 코트 위의 마법사 | 플레이스타일·명장면·최근 경기력',
        description: '아드리안 만나리노의 독특한 스윙과 낮은 텐션, 강점, 대표 경기, 최근 흐름을 한 번에 정리한 선수 프로필.',
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
    { id: 'why-again-notable', text: '아드리안 만나리노, 왜 주목받는 선수인가?', depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'growth-story', text: '아드리안 만나리노는 어떻게 여기까지 왔을까?', depth: 2 },
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: '요즘 아드리안 만나리노의 경기력 흐름은 어떤가?', depth: 2 },
    { id: 'one-sentence-summary', text: '아드리안 만나리노, 한 문장으로 정리하면?', depth: 2 },
];

const faqs = [
    {
        q: '아드리안 만나리노의 경기 스타일은 어떤가요?',
        a: '매우 짧은 백스윙과 플랫한 구질, 그리고 예측 불가능한 샷 방향이 특징입니다. 상대의 힘을 이용하는 카운터 펀처 스타일입니다.',
    },
    {
        q: '만나리노의 최고 랭킹과 현재 랭킹은 어떻게 되나요?',
        a: '2024년 초, 35세의 나이에 커리어 하이인 17위를 기록했습니다. 나이를 거꾸로 먹는 듯한 활약을 보여주고 있습니다.',
    },
    {
        q: '만나리노의 강점은 무엇인가요?',
        a: '왼손잡이의 이점, 뛰어난 볼 컨트롤, 그리고 무엇보다 상대를 불편하게 만드는 독특한 리듬과 구질이 강점입니다.',
    },
    {
        q: '만나리노의 약점은 무엇인가요?',
        a: '서브와 스트로크의 파워가 부족하여, 힘으로 밀어붙이는 상대를 만나면 고전하는 경우가 있습니다.',
    },
    {
        q: '만나리노를 한 문장으로 설명하면?',
        a: '교과서적인 테니스를 거부하고 자신만의 독창적인 스타일로 정점에 오른 코트 위의 마법사입니다.',
    },
];

const keyTakeaways = [
    "10kg대의 극도로 낮은 라켓 텐션을 사용하는 독특한 장비 세팅",
    "짧은 백스윙과 예측 불가능한 샷으로 상대를 혼란에 빠뜨리는 스타일",
    "30대 중반에 커리어 하이를 기록하며 '회춘'한 베테랑의 저력"
];

export default function AdrianMannarinoPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
            <Article
                title="아드리안 만나리노"
                excerpt="독특한 스윙과 낮은 텐션으로 상대를 현혹시키는 테크니션"
                image="/images/players/adrian-mannarino.svg"
            >
                <ProfilePageSchema
                    name="아드리안 만나리노 — 코트 위의 마법사 | 플레이스타일·명장면·최근 경기력"
                    description="아드리안 만나리노 (Adrian Mannarino) 선수의 테니스 프로필, 랭킹, 플레이 스타일 분석."
                    image="/images/players/adrian-mannarino.svg"
                    mainEntity={{
                        '@type': 'Person',
                        name: 'Adrian Mannarino',
                        alternateName: '아드리안 만나리노',
                        description: '프랑스 출신의 테니스 선수. 독특한 스윙 폼과 낮은 텐션으로 유명함.',
                        image: '/images/players/adrian-mannarino.png',
                        jobTitle: 'Professional Tennis Player',
                        nationality: { '@type': 'Country', name: 'France' },
                        birthDate: '1988-06-29',
                        height: { '@type': 'QuantitativeValue', value: '180', unitText: 'cm' },
                        award: ['ATP Tour Titles (5)', 'Career High Ranking #17'],
                        sameAs: [
                            'https://en.wikipedia.org/wiki/Adrian_Mannarino',
                            'https://www.atptour.com/en/players/adrian-mannarino/me82/overview',
                            'https://www.instagram.com/adrianmannarino/'
                        ]
                    }}
                />
                <BreadcrumbSchema
                    items={[
                        { name: '홈', item: 'https://tennisfriends.co.kr' },
                        { name: '선수', item: 'https://tennisfriends.co.kr/players' },
                        { name: '아드리안 만나리노', item: 'https://tennisfriends.co.kr/players/adrian-mannarino' },
                    ]}
                />
                <FAQSchema faqs={faqs} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <KeyTakeaways items={keyTakeaways} />

                    <PlayerProfileCard
                        name="Adrian Mannarino"
                        country="France"
                        age={35}
                        height="180cm"
                        plays="Left-handed (Two-handed backhand)"
                        turnedPro={2004}
                        grandSlams={0}
                        ranking={20}
                    />

                    <div className="prose dark:prose-invert max-w-none">
                        <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
                            코트 위의 마법사. <strong className="text-purple-600 dark:text-purple-400">독창적인 스타일</strong>로 상대를 무력화시키는 지능적인 플레이어.
                        </p>

                        <TOC items={tocItems} />

                        <h2 id="why-again-notable" className="flex items-center gap-2 mt-12">
                            <Crown className="w-6 h-6 text-yellow-500" />
                            아드리안 만나리노, 왜 주목받는 선수인가?
                        </h2>
                        <blockquote className="not-prose my-6 p-4 bg-blue-50 dark:bg-blue-950/30 border-l-4 border-blue-500 rounded-r-lg">
                            <div className="flex items-start gap-3">
                                <Star className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <p className="text-base font-medium text-gray-800 dark:text-gray-200 mb-0">
                                    10kg대의 극도로 낮은 라켓 텐션을 사용하는 독특한 장비 세팅
                                </p>
                            </div>
                        </blockquote>
                        <p>아드리안 만나리노는 투어에서 가장 독특한 선수 중 한 명이다. 보통 선수들이 40-50파운드(약 18-23kg)의 텐션을 사용하는 반면, 그는 20파운드(약 9-11kg) 대의 극도로 낮은 텐션을 사용한다. 이는 마치 뜰채로 공을 잡았다가 던지는 듯한 효과를 내며, 상대방이 타이밍을 맞추기 어렵게 만든다. 또한 30대 중반에 커리어 하이를 찍으며 '나이는 숫자에 불과하다'는 것을 몸소 보여주고 있다.</p>

                        <h2 id="what-type-of-player" className="flex items-center gap-2 mt-12">
                            <Target className="w-6 h-6 text-red-500" />
                            이 선수는 어떤 유형의 플레이어인가?
                        </h2>
                        <p><strong>"지능형 카운터 펀처 (Intelligent Counter Puncher)"</strong></p>
                        <p>만나리노는 힘으로 상대를 제압하기보다는, 상대의 힘을 이용하고 코트 구석구석을 찌르는 정교한 샷으로 승부한다.</p>

                        <PlayerHexagonStats
                            playerName="아드리안 만나리노"
                            attributes={[
                                { name: '터치 (Touch)', score: 10, description: '공을 다루는 감각이 천재적이다. 드롭샷, 로브, 앵글 샷 등 다양한 기술을 자유자재로 구사한다.' },
                                { name: '예측 불가능성 (Unpredictability)', score: 9.5, description: '백스윙이 거의 없어 샷이 어디로 갈지 예측하기 힘들다.' },
                                { name: '꾸준함 (Consistency)', score: 8.5, description: '무리한 공격을 하지 않고 실수를 최소화하며 끈질기게 물고 늘어진다.' },
                                { name: '서브 (Serve)', score: 7.0, description: '파워는 약하지만 코스가 좋고 왼손잡이 특유의 회전이 까다롭다.' },
                                { name: '파워 (Power)', score: 6.5, description: '자신의 힘으로 위너를 만들어내는 능력은 다소 부족하다.' },
                            ]}
                        />

                        <p>그의 스윙은 매우 간결하다. 라켓을 뒤로 거의 빼지 않고 공이 오는 힘을 그대로 이용하여 툭 갖다 대는 듯한 폼이다. 하지만 공은 낮게 깔려서 빠르게 날아간다. 특히 잔디 코트나 빠른 하드 코트에서 그의 낮은 탄도와 플랫성 구질은 상대에게 악몽과도 같다.</p>

                        <h3 className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                            피지컬 능력
                        </h3>
                        <p>180cm, 79kg으로 테니스 선수치고는 평범한 체격이다. 하지만 유연성이 좋고 발놀림이 가벼워 코트 커버력이 뛰어나다. 체력 소모가 적은 효율적인 테니스를 구사하여 롱런하고 있다.</p>

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
                                35세에 커리어 하이 랭킹 17위 달성 · 2023년 3개 대회 우승 · <strong className="text-green-700 dark:text-green-400 text-base">회춘의 아이콘</strong>
                            </p>
                        </div>
                        <p>표정 변화가 거의 없다. 이기든 지든 무덤덤한 표정으로 경기에 임한다. 이는 상대에게 심리적인 압박감을 준다. 또한 자신의 스타일에 대한 확신이 있어 어떤 상대를 만나도 자신의 페이스를 잃지 않는다.</p>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="growth-story">아드리안 만나리노는 어떻게 여기까지 왔을까?</h2>
                        <p>프랑스 수아지-수-몽모랑시에서 태어난 만나리노는 5살 때 테니스를 시작했다. 오랫동안 50-100위권을 오가는 저니맨 생활을 했으나, 30대에 접어들면서 기량이 만개했다. 2023년에는 아스타나 오픈, 소피아 오픈 등에서 우승하며 최고의 한 해를 보냈다.</p>

                        <h2 id="what-proves-player">이 선수를 가장 잘 보여주는 경기는 무엇일까?</h2>
                        <p>2024년 호주 오픈 16강 진출 과정이다.</p>

                        <h3>2024년 호주 오픈</h3>
                        <div className="not-prose my-4 p-5 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800 shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100 mb-0">5세트의 제왕</p>
                            </div>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-0">
                                1, 2, 3회전 모두 5세트 접전을 치르며 승리했다. 특히 벤 쉘튼과의 3회전 경기는 노련미가 패기를 어떻게 제압하는지 보여준 명승부였다. 비록 16강에서 조코비치에게 패했지만, 그의 끈질긴 승부 근성은 팬들에게 깊은 인상을 남겼다.
                            </p>
                        </div>

                        <hr className="my-8 border-gray-200 dark:border-gray-800" />

                        <h2 id="what-attracts-fans">팬들은 이 선수의 어떤 점에 끌릴까?</h2>
                        <p>독특함 그 자체다. 스폰서 로고가 없는 민무늬 옷을 즐겨 입는 것도 그의 특징이다(최근에는 스폰서 계약을 맺기도 했다). 남들과 다른 길을 가면서도 성공할 수 있다는 것을 보여주는 그의 모습에 많은 팬들이 매력을 느낀다.</p>

                        <h2 id="recent-form">요즘 아드리안 만나리노의 경기력 흐름은 어떤가?</h2>
                        <p>2023년 말부터 2024년 초까지 최고의 폼을 보여주었다. 최근에는 체력적인 부담 등으로 다소 주춤하고 있지만, 여전히 까다로운 상대임은 분명하다.</p>

                        <h3>최근 성적</h3>
                        <p>잔디 시즌과 실내 하드 코트 시즌이 오면 다시 한번 그의 마법이 펼쳐질 것으로 기대된다.</p>

                        <h2 id="one-sentence-summary">아드리안 만나리노, 한 문장으로 정리하면?</h2>
                        <p>아드리안 만나리노는 교과서적인 테니스를 거부하고 자신만의 독창적인 스타일로 정점에 오른 코트 위의 마법사다.</p>
                    </div>

                    <FAQ items={faqs} />
                    <CTA />
                </div>
            </Article>
        </div>
    );
}
