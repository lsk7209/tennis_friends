import { PlayerData } from '@/types/player';

export const PLAYERS_DB: Record<string, PlayerData> = {
    // --- Existing Male Players (53) ---
    'carlos-alcaraz': {
        name: '카를로스 알카라스', nameEn: 'Carlos Alcaraz', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/carlos-alcaraz.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '카를로스 알카라스는 스페인의 테니스 신동으로, 폭발적인 스피드와 강력한 포핸드로 코트를 지배합니다. 어린 나이에 그랜드슬램을 제패하며 차세대 테니스 황제로 불립니다.',
        detailedProfile: {
            oneLineSummary: '나달의 투지, 페더러의 공격, 조코비치의 수비를 모두 가진 "완성형 하이브리드" 천재.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👑 최연소 세계 1위의 신화</div>
                    <p>카를로스 알카라스는 <strong>만 19세 4개월의 나이로 ATP 세계 랭킹 1위</strong>에 등극하며 테니스 역사를 새로 썼습니다. 이는 1973년 랭킹 시스템 도입 이래 최연소 기록입니다.</p>
                </div>
                <p>단순히 '나달의 후계자'가 아닙니다. <span class="text-red-500 font-bold">빅3의 장점만을 흡수한 괴물</span>이라는 평가를 받습니다. 강력한 스트로크 싸움을 하다가도 기습적인 드롭샷으로 허를 찌르고, 네트 플레이까지 완벽하게 소화하는 올라운드 플레이어로 전 세계 팬들을 열광시키고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더 (Aggressive All-Rounder)"</strong></p>
                <p>알카라스는 약점이 없는 것이 특징입니다. 베이스라인에서 강력한 파워로 상대를 압도하다가도, 순식간에 네트로 대시하여 포인트를 끝냅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 알카라스의 3가지 "슈퍼 파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>마구(Magic) 드롭샷:</strong> 투어 역사상 최고의 드롭샷 구사 능력을 가졌습니다. 상대가 뒤로 물러나면 여지없이 네트 바로 앞에 공을 '툭' 떨어뜨려 얼어붙게 만듭니다.</li>
                        <li><strong>우사인 볼트급 스피드:</strong> "도저히 잡을 수 없는 공"을 기어코 쫓아가서 위너로 만듭니다. 그의 코트 커버 능력은 상대에게 '어디로 쳐야 하나'라는 절망감을 줍니다.</li>
                        <li><strong>대포알 포핸드:</strong> 몸 전체의 탄력을 이용해 때리는 포핸드는 스피드와 회전량 모두 압도적입니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '코트 끝에서 끝까지 순식간에 이동하는 순간적인 미친 스피드.' },
                { name: '포핸드 (Forehand)', score: 10, description: '어떤 위치에서도 위너를 만들어내는 파괴력.' },
                { name: '창의성 (Creativity)', score: 10, description: '드롭샷, 로브 등 예측 불가능한 샷 셀렉션.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '중요한 포인트에서 더 과감해지는 강심장.' },
                { name: '네트 플레이 (Net)', score: 9.5, description: '발리와 스매싱 결정력이 매우 높음.' },
                { name: '서브 (Serve)', score: 9, description: '다양한 구질과 코스 공략이 뛰어남.' }
            ],
            growthStory: `
                <p>스페인 무르시아 출신으로, 4살 때 아버지에게 테니스 라켓을 선물 받으며 입문했습니다. 그의 재능을 알아본 <strong>후안 카를로스 페레로(전 세계 1위)</strong>가 코치를 자처하며 키워냈습니다.</p>
                <blockquote>
                    "그는 10대 때 이미 완성된 선수였다. 나는 그저 길을 안내했을 뿐이다." - 후안 카를로스 페레로
                </blockquote>
                <p>2022 US 오픈 우승으로 자신의 시대를 활짝 열었고, 2023 윔블던 결승에서 조코비치를 꺾으며 <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-1 rounded">잔디 코트의 새로운 지배자</span>가 되었습니다. 2024년 롤랑가로스까지 제패하며 모든 코트(하드, 잔디, 클레이)에서 메이저 타이틀을 딴 최연소 선수가 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 결승 vs 노박 조코비치',
                date: '2023. 07. 16',
                description: '테니스 황제 대관식. 윔블던 5연패를 노리던 조코비치를 상대로 4시간 42분의 혈투 끝에 세트 스코어 3-2로 승리했습니다. 특히 5세트에서의 집중력과 체력은 그가 왜 차세대 황제인지를 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😁 미소 짓는 암살자 (Smiling Assassin)</div>
                    <p>알카라스는 경기 도중 엄청난 슈퍼 플레이를 성공시키거나, 반대로 상대에게 멋진 샷을 맞았을 때도 활짝 웃습니다. 테니스 자체를 진심으로 즐기는 그의 순수한 열정은 보는 사람까지 기분 좋게 만듭니다.</p>
                </div>
                <p>승리 후 카메라에 렌즈에 <strong>"Brain, Heart, Balls(머리, 가슴, 배짱)"</strong>이라는 문구를 적는 세러머니가 유명한데, 이는 그의 할아버지가 강조한 테니스 철학이라고 합니다.</p>
            `,
            recentForm: `
                <p><strong>"부상만 없다면 천하무적"</strong></p>
                <p>잔부상이 간혹 발목을 잡지만, 건강하게 출전하는 대회에서는 <span class="underline decoration-wavy decoration-red-500 underline-offset-4">항상 우승 후보 0순위</span>입니다. 2024년 롤랑가로스와 윔블던을 연속 제패하는 '채널 슬램'을 달성하며 전성기를 구가하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '카를로스 알카라스의 "가장 어린 세계 1위" 기록은 정확히 언제인가요?',
                    answer: '알카라스는 2022년 9월 12일, 만 19세 4개월의 나이로 ATP 단식 세계 랭킹 1위에 올랐습니다. 이는 레이튼 휴이트(호주)가 가지고 있던 종전 기록(20세 8개월)을 1년 넘게 앞당긴 대기록입니다.'
                },
                {
                    question: '알카라스와 라파엘 나달의 관계는 어떤가요?',
                    answer: '둘은 같은 스페인 출신으로 깊은 유대감을 가지고 있습니다. 나달은 알카라스의 우상이었고, 알카라스는 "나달의 후계자"로 불렸습니다. 2024 파리 올림픽에서는 두 선수가 복식 파트너("나달카라스")로 함께 출전하여 전 세계 테니스 팬들에게 감동을 선사했습니다.'
                },
                {
                    question: '알카라스가 자주 사용하는 "드롭샷"은 왜 강력한가요?',
                    answer: '보통 드롭샷은 폼에서 티가 나기 마련인데, 알카라스는 강력한 포핸드를 칠 것 같은 자세에서 마지막 순간에 힘을 빼고 툭 놓습니다. 상대 선수는 베이스라인 뒤로 물러나 있다가 완전히 속수무책으로 당하게 됩니다. 이 기술은 상대의 체력을 뺏고 멘탈을 흔드는 데 치명적입니다.'
                }
            ]
        }
    },
    'jannik-sinner': {
        name: '야닉 시너', nameEn: 'Jannik Sinner', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/jannik-sinner.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아 최초의 로저스 컵 우승자이자 차세대 빅3 후보. 강력한 베이스라인 스트로크와 기복 없는 멘탈이 강점입니다. 스키 선수 출신다운 유연한 움직임이 돋보입니다.',
        detailedProfile: {
            oneLineSummary: '알프스의 스키 소년에서 세계 1위로. 가장 깨끗한 타구음을 가진 "볼 스트라이킹의 정점".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 이탈리아 테니스 역사의 창조자</div>
                    <p>야닉 시너는 <strong>이탈리아 남자 테니스 역사상 최초로 ATP 랭킹 1위에 등극한 영웅</strong>입니다. 2024 호주 오픈에서 조코비치의 연승 기록을 깨고 생애 첫 메이저 우승을 차지하며, 명실공히 '시너의 시대'가 도래했음을 알렸습니다.</p>
                </div>
                <p>그는 카를로스 알카라스와 함께 향후 10년을 지배할 가장 강력한 라이벌리를 형성하고 있습니다. 흔들리지 않는 평정심과 냉철한 경기 운영으로 <span class="text-orange-600 font-bold">'The Fox(여우)'</span>라는 별명을 가지고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 + 밸런스의 정석"</strong></p>
                <p>시너의 가장 큰 무기는 <strong>투어에서 가장 빠르고 묵직한 그라운드 스트로크</strong>입니다. 공을 때리는 임팩트 소리가 '펑'이 아닌 '짝' 소리가 날 정도로 정타율이 비현실적으로 높습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🦊 시너의 3가지 "절대 무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비급 펀치력:</strong> 포핸드와 백핸드 양쪽 날개 모두에서 대포알 같은 위닝샷을 때려냅니다. 스핀 양은 적지만 속도가 워낙 빨라 상대가 반응조차 못 합니다.</li>
                        <li><strong>스키 밸런스:</strong> 13세까지 촉망받는 스키 선수였습니다. 덕분에 급격한 방향 전환이나 미끄러운 코트에서도 중심을 잃지 않는 독보적인 하체 밸런스를 자랑합니다.</li>
                        <li><strong>리셋 버튼:</strong> 실수를 하거나 위기에 몰려도, 무표정한 얼굴로 금세 평정심을 되찾습니다. 멘탈 기복이 거의 없어 '로봇' 같다는 평가도 받습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '폭발적인 스피드와 파워를 겸비한 무기.' },
                { name: '백핸드 (Backhand)', score: 10, description: '투어 전체를 통틀어 가장 안정적이고 강력한 백핸드.' },
                { name: '스피드 (Speed)', score: 9, description: '긴 팔다리와 유연한 고관절을 이용한 수비.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '나이답지 않은 냉철함과 침착한 승부사 기질.' },
                { name: '서브 (Serve)', score: 9, description: '폼 교정 후 비약적으로 발전하여 확실한 무기가 됨.' },
                { name: '체력 (Stamina)', score: 9, description: '5세트 접전도 표정 변화 없이 버텨내는 강인함.' }
            ],
            growthStory: `
                <p>이탈리아 북부 오스트리아 국경 근처의 산악 마을에서 태어났습니다. 어릴 적에는 테니스보다 <strong>스키 챔피언</strong>으로 더 유명했습니다.</p>
                <blockquote>
                    "스키는 한 번의 실수가 부상이나 탈락으로 이어지지만, 테니스는 실수를 해도 다음 포인트가 있다. 그래서 테니스를 택했다."
                </blockquote>
                <p>13세에 테니스로 전향하는 과감한 결단을 내렸고, 리카르도 피아티 코치의 지도를 받으며 급성장했습니다. 2019년 넥스트 제너레이션 파이널스 우승으로 혜성처럼 등장한 그는, 2024년 마침내 <span class="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100 px-1 rounded">그랜드슬램 챔피언이자 세계 1위</span>의 자리에 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 결승 vs 다닐 메드베데프',
                date: '2024. 01. 28',
                description: '그의 첫 그랜드슬램 우승 경기이자, 역대급 명승부. 처음 겪는 메이저 결승의 압박감 속에 세트 스코어 0-2로 뒤졌으나, 포기하지 않고 <strong>3-2로 대역전승</strong>을 거뒀습니다. 그의 챔피언 DNA를 전 세계에 각인시킨 순간입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥕 당근 소년단 (The Carota Boys)</div>
                    <p>시너는 경기 도중 힘을 내기 위해 당근을 통째로 씹어 먹는 모습이 포착되어 화제가 되었습니다. 이를 계기로 당근 코스튬을 입고 그를 응원하는 <strong>'Carota Boys(카로타 보이즈)'</strong>라는 공식 팬클럽이 생겼습니다.</p>
                </div>
                <p>또한 그는 명품 브랜드 <strong>구찌(Gucci)</strong>의 글로벌 앰버서더로 활동하며, 테니스 코트에 명품 보스턴백을 메고 들어오는 등 패션 아이콘으로서의 면모도 과시하고 있습니다.</p>
            `,
            recentForm: `
                <p><strong>"Sinner's Era (시너의 시대)"</strong></p>
                <p>2024 시즌은 '시너의 해'라고 해도 과언이 아닙니다. 호주 오픈 우승을 시작으로 로테르담, 마이애미, 할레, 신시내티 오픈 등 굵직한 대회를 휩쓸고 있습니다. 특히 도핑 논란이 있었음에도 흔들리지 않고 <span class="underline decoration-2 decoration-orange-400 underline-offset-2">US 오픈까지 제패</span>하며 실력으로 모든 것을 증명했습니다.</p>
            `,
            faq: [
                {
                    question: '야닉 시너는 왜 스키 선수에서 테니스 선수로 전향했나요?',
                    answer: '시너는 8세 때 이탈리아 스키 챔피언이었을 정도로 재능이 뛰어났습니다. 하지만 스키는 단 한 번의 실수로 경기가 끝나는 반면, 테니스는 경기 중 문제를 해결하고 역전할 기회가 있다는 점에 매력을 느껴 13세에 종목을 변경했습니다. 스키를 통해 다져진 하체 밸런스와 유연성은 지금 그의 가장 큰 무기가 되었습니다.'
                },
                {
                    question: '야닉 시너 응원단이 "당근(Carrot)" 옷을 입는 이유는 무엇인가요?',
                    answer: '2019년 비엔나 오픈 경기 도중, 벤치에서 바나나 대신 생당근을 아작아작 씹어 먹는 시너의 모습이 중계 카메라에 잡혔습니다. 이 독특하고 귀여운 모습에 반한 팬들이 자발적으로 당근 코스튬을 입고 응원하기 시작했고, 이제는 그를 상징하는 시그니처가 되었습니다.'
                },
                {
                    question: '야닉 시너가 이탈리아 테니스 역사에서 가지는 의미는?',
                    answer: '시너는 이탈리아 남자 테니스 역사상 최초의 세계 랭킹 1위이자, 1976년 이후 48년 만에 그랜드슬램 단식 우승을 차지한 남자 선수입니다. 축구에 열광하던 이탈리아에 테니스 붐을 일으킨 국민 영웅 대접을 받고 있습니다.'
                }
            ]
        }
    },
    'novak-djokovic': {
        name: '노박 조코비치', nameEn: 'Novak Djokovic', country: 'Serbia', countryFlag: '🇷🇸', image: '/images/players/novak-djokovic.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '테니스 역사상 가장 위대한 선수(GOAT). 무결점의 테크닉과 불굴의 정신력, 그리고 압도적인 유연성으로 그랜드슬램 최다 우승 기록을 보유하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '테니스 150년 역사를 통틀어 가장 위대한 정복자, 숫자로 증명된 유일무이한 "GOAT".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐐 반박 불가능한 역대 최강 (The GOAT)</div>
                    <p>노박 조코비치를 설명하는 데는 긴 말이 필요 없습니다. <strong>그랜드슬램 최다 우승(24회), 마스터스 1000 최다 우승(40회), ATP 파이널스 최다 우승(7회), 역대 최장기간 세계 랭킹 1위(428주 이상)</strong> 등 테니스의 거의 모든 주요 기록을 보유하고 있습니다.</p>
                </div>
                <p>페더러의 우아함과 나달의 투지 사이에서, 조코비치는 <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-1 rounded font-bold">'완벽함(Perfection)'</span>이라는 단어로 정의됩니다. 어떤 상황에서도 무너지지 않는 강철 같은 멘탈과, 신체 능력을 극한으로 끌어올린 유연성은 그를 난공불락의 요새로 만들었습니다. 2024 파리 올림픽 금메달을 추가하며 마침내 <strong>커리어 골든 슬램</strong>을 완성했습니다.</p>
            `,
            playStyle: `
                <p><strong>"육각형의 정점 (Complete Player)"</strong></p>
                <p>조코비치는 뚜렷한 약점이 없는 '무결점 플레이어'입니다. 공격과 수비의 완벽한 조화, 정교한 리턴, 그리고 코트 구석구석을 찌르는 정밀함은 타의 추종을 불허합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🧱 조코비치의 3가지 "절대 방어" 기술</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>신이 내린 리턴 (God-mode Return):</strong> 역사상 최고의 리터너로 꼽힙니다. 240km/h의 광속 서브조차 발 밑으로 떨어뜨려 공격권 자체를 무력화시킵니다.</li>
                        <li><strong>고무 인간 (Elastic Man):</strong> 발목이 꺾일 듯한 각도에서도 미끄러지며(Sliding) 공을 받아냅니다. 스파이더맨을 연상시키는 이 유연성은 수비 범위를 비현실적으로 넓혀줍니다.</li>
                        <li><strong>락 다운 모드 (Lock-down Mode):</strong> 중요한 순간이 오면 실수를 아예 하지 않는 로봇 모드로 변신합니다. 타이브레이크 승률 역대 1위가 이를 증명합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '리턴 (Return)', score: 10, description: '역사상 최고의 리턴 능력 (만점 그 이상).' },
                { name: '백핸드 (Backhand)', score: 10, description: '수비와 공격 모두 완벽한 투어 최고의 투핸드.' },
                { name: '멘탈 (Mental)', score: 10, description: '관중 2만 명이 야유해도 흔들리지 않는 강심장.' },
                { name: '체력 (Stamina)', score: 10, description: '글루텐 프리로 완성된, 5시간을 뛰어도 지치지 않는 신체.' },
                { name: '수비 (Defense)', score: 10, description: '코트의 모든 공을 받아내는 통곡의 벽.' },
                { name: '서브 (Serve)', score: 9.5, description: '나이가 들수록 더욱 정교하고 강력해진 에이스 제조기.' }
            ],
            growthStory: `
                <p>세르비아 베오그라드에서 태어난 조코비치는 어린 시절 <span class="text-red-600 font-bold">전쟁의 공포(나토 공습)</span> 속에서 테니스를 배웠습니다. 방공호에서 대피하며 키운 생존 본능은 훗날 코트 위에서 누구에게도 지지 않는 불굴의 정신력이 되었습니다.</p>
                <blockquote>
                    "나는 전쟁통에서 자랐다. 죽음의 공포보다 더 두려운 것은 테니스 코트에 없다."
                </blockquote>
                <p>2010년, 원인을 알 수 없는 체력 저하로 고생하던 그는 글루텐 알레르기 진단을 받고 <span class="underline decoration-wavy decoration-green-500 underline-offset-4">식단을 완전히 바꿨습니다</span>. 그 후 2011년 시즌 43연승이라는 대기록과 함께 '페더러-나달'의 양강 체제를 깨뜨리며 1인 독재 시대를 열었습니다.</p>
            `,
            signatureMatch: {
                title: '2019 윔블던 결승 vs 로저 페더러',
                date: '2019. 07. 14',
                description: '테니스 역사상 가장 위대한 결승전 중 하나. 페더러의 우승을 바라는 관중들의 일방적인 응원 속에서, 조코비치는 <strong>매치 포인트 위기(15-40)를 두 번이나 극복</strong>하고 마지막 세트 타이브레이크 끝에 기적 같은 역전승을 거뒀습니다. 멘탈이 기술을 이긴 대표적인 경기입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🃏 유쾌한 장난꾸러기 "Djoker"</div>
                    <p>조코비치의 별명 '조커(Djoker)'는 그의 이름과 유머러스한 성격을 합친 말입니다. 동료 선수들의 폼을 흉내 내거나, 볼키즈와 장난을 치는 등 코트 밖에서는 쇼맨십이 넘칩니다.</p>
                </div>
                <p>또한 그는 <strong>5개 국어(세르비아어, 영어, 이탈리아어, 독일어, 프랑스어)</strong>를 유창하게 구사하는 지성인이기도 합니다. 팬들을 위해 우승 소감을 현지 언어로 준비하는 그의 노력은 많은 존경을 받고 있습니다. 때로 백신 문제 등으로 논란의 중심에 서기도 하지만, 자신의 신념을 굽히지 않는 솔직함 또한 그의 매력입니다.</p>
            `,
            recentForm: `
                <p><strong>"나이는 숫자에 불과하다"</strong></p>
                <p>30대 후반의 나이에도 여전히 세계 최정상급 기량을 유지하고 있습니다. 2023년 메이저 3승을 휩쓸었고, 2024년에는 마지막 퍼즐이었던 <span class="text-yellow-600 font-bold">올림픽 금메달</span>까지 목에 걸며 커리어의 정점을 찍었습니다. 이제는 기록 경쟁을 넘어 '자신과의 싸움'을 하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '노박 조코비치는 왜 "GOAT(역대 최고)"라고 불리나요?',
                    answer: '조코비치는 테니스 역사상 가장 중요한 기록들을 모두 보유하고 있기 때문입니다. 그랜드슬램 최다 우승(24회), 마스터스 1000 최다 우승(40회), ATP 파이널스 최다 우승(7회), 그리고 세계 랭킹 1위 유지 기간(428주) 등 모든 지표에서 경쟁자들을 압도합니다.'
                },
                {
                    question: '조코비치의 "글루텐 프리" 식단은 무엇인가요?',
                    answer: '조코비치는 밀가루 등에 포함된 글루텐을 섭취하면 체력이 급격히 떨어지는 체질입니다. 2010년 이를 발견한 후 빵, 피자, 파스타 등을 끊는 철저한 식단 관리를 시작했고, 이후 체력과 집중력이 비약적으로 상승하여 지금의 무적 모드를 완성했습니다. 그의 저서 "이기는 식단" 베스트셀러가 되기도 했습니다.'
                },
                {
                    question: '조코비치가 달성한 "커리어 골든 슬램"이란 무엇인가요?',
                    answer: '4대 메이저 대회(호주 오픈, 롤랑가로스, 윔블던, US 오픈) 우승과 올림픽 금메달을 모두 획득하는 것을 말합니다. 남자 단식 역사상 안드레 애거시, 라파엘 나달에 이어 조코비치가 역대 3번째로 이 위업을 달성했습니다 (2024 파리 올림픽).'
                }
            ]
        }
    },
    'daniil-medvedev': {
        name: '다닐 메드베데프', nameEn: 'Daniil Medvedev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/daniil-medvedev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 체스 마스터. 198cm의 장신에서 나오는 강력한 서브와 투어 최고의 수비력, 그리고 상대를 질식시키는 지능적인 경기 운영으로 빅3의 독주를 막아선 차세대 황제입니다.',
        detailedProfile: {
            oneLineSummary: '상대를 질식시키는 "코트 위의 체스 마스터", 빅3 시대를 끝낸 가장 지능적인 승부사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 빅3의 독주를 멈춰 세운 난공불락의 벽</div>
                    <p>다닐 메드베데프는 2021년 <strong>US 오픈 결승에서 노박 조코비치를 3-0으로 완파</strong>하며, 조코비치의 '캘린더 그랜드슬램' 대기록 달성을 저지한 주인공입니다. 이는 2000년대 이후 테니스 역사상 가장 충격적인 결승전 중 하나로 꼽힙니다.</p>
                </div>
                <p>그는 단순히 공을 세게 치는 것이 아니라, <span class="px-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 font-bold">'코트 위의 체스 마스터'</span>라는 별명처럼 상대의 수를 미리 읽고 가장 까다로운 코스로 공을 보내 실수를 유발합니다. 198cm의 큰 키에도 불구하고 투어 최고의 수비 범위와 유연성을 자랑하며, 2022년에는 조코비치, 페더러, 나달, 머레이 이외의 선수로는 18년 만에 세계 랭킹 1위에 등극했습니다.</p>
            `,
            playStyle: `
                <p><strong>"비정통적 수비형 카운터 펀처 (Unorthodox Counter Puncher)"</strong></p>
                <p>메드베데프의 테니스는 교과서와는 거리가 멉니다. 하지만 그 **비정통성(Unorthodox)**이 바로 그의 가장 큰 무기입니다. 베이스라인에서 5m 이상 뒤로 물러나 수비하다가, 기회가 오면 긴 팔을 이용해 채찍 같은 플랫 샷을 날립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🐙 메드베데프의 3가지 "사기 유닛" 기술</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>딥 리턴 포지션 (Deep Return Position):</strong> 중계 화면 밖으로 나갈 정도로 뒤에서 리턴을 준비합니다. 이는 서브가 강한 선수들에게 시각적 압박을 주며, 물리적으로도 공을 끝까지 보고 칠 수 있게 해줍니다.</li>
                        <li><strong>문어 (The Octopus):</strong> 긴 팔다리로 코트 구석구석을 커버하는 능력 덕분에 붙은 별명입니다. 도저히 닿을 수 없을 것 같은 공을 받아넘겨 상대를 지치게 만듭니다.</li>
                        <li><strong>초저공 플랫 스트로크:</strong> 현대 테니스의 주류인 탑스핀 대신, 네트를 스치듯 낮게 깔리는 '레이저 샷'을 구사합니다. 바운드 후 깔려서 오기 때문에 상대가 공격 타이밍을 잡기 매우 어렵습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 10, description: '투어 역사상 가장 넓은 수비 범위를 자랑하는 통곡의 벽.' },
                { name: '전술 (Tactics)', score: 10, description: '상대의 멘탈과 전략을 완전히 무너뜨리는 두뇌 플레이.' },
                { name: '서브 (Serve)', score: 9.5, description: '200km/h를 쉽게 넘기는 플랫 서브와 예측 불가능한 세컨 서브.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 밸런스가 완벽한, 그의 가장 믿을 수 있는 무기.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '폼은 특이하지만 타점 잡기가 까다롭고 실수 유발이 높음.' },
                { name: '멘탈 (Mental)', score: 9, description: '관중의 야유조차 에너지로 바꾸는 강철 멘탈 (가끔 폭주함).' }
            ],
            growthStory: `
                <p>러시아 모스크바에서 태어난 메드베데프는 어릴 적부터 승부욕이 남달랐습니다. <span class="font-semibold text-blue-700 dark:text-blue-400">수학 영재 학교(Lyceum of Physics and Mathematics)</span>를 다녔을 정도로 명석한 두뇌를 자랑하는데, 이는 그의 지능적인 플레이 스타일의 바탕이 되었습니다.</p>
                <blockquote>
                    "나는 재능이 없었다. 그래서 머리를 써야만 했다."
                </blockquote>
                <p>더 큰 무대에서 성장하기 위해 프랑스로 건너가 <strong>질 세바라(Gilles Cervara)</strong> 코치를 만난 것이 인생의 전환점이 되었습니다. 세바라 코치는 메드베데프의 독특한 폼을 고치려 하기보다 <span class="underline decoration-wavy decoration-blue-400 underline-offset-4">장점으로 승화시켰고</span>, 멘탈적인 성숙을 도왔습니다. 그 결과 2019년부터 기량이 만개하여 US 오픈 결승에 진출했고, 결국 <span class="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">세계 1위의 자리</span>까지 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2021 US 오픈 결승 vs 노박 조코비치',
                date: '2021. 09. 12',
                description: '테니스 역사를 바꾼 경기. 당시 조코비치는 한 해 4개 메이저를 모두 우승하는 "캘린더 그랜드슬램" 달성을 눈앞에 두고 있었습니다. 하지만 메드베데프는 전 세계의 예상을 뒤엎고 <strong>세트 스코어 3-0 (6-4, 6-4, 6-4) 완승</strong>을 거뒀습니다. 서브와 스트로크, 멘탈 모든 면에서 "무결점" 조코비치를 압도한 완벽한 승리였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😈 미워할 수 없는 "솔직한 빌런"</div>
                    <p>메드베데프는 테니스 코트 위에서 가장 솔직한 선수입니다. 관중과 싸우고, 심판에게 따지지만, 경기 후 인터뷰에서는 누구보다 유쾌하고 논리정연하게 자신의 감정을 설명합니다.</p>
                </div>
                <p>그의 매력 포인트는 바로 <strong>'반전 매력'</strong>입니다. 코트 위에서는 냉철한 승부사지만, 코트 밖에서는 딸 바보 아빠이자 게임을 좋아하는 평범한 청년의 모습을 보여줍니다. 넷플릭스 다큐멘터리 '브레이크 포인트'를 통해 보여준 그의 지적이고 유머러스한 면모는 전 세계 수많은 팬들을 '입덕'시켰습니다.</p>
            `,
            recentForm: `
                <p><strong>"하드 코트의 지배자, 다시 정상을 노리다"</strong></p>
                <p>2023-2024 시즌에도 여전히 <span class="font-bold text-indigo-600 dark:text-indigo-400">강력한 우승 후보</span>입니다. 특히 2024년 호주 오픈에서 결승에 진출하며 하드 코트에서만큼은 누구에게도 지지 않는 경쟁력을 과시했습니다. 최근에는 자신의 약점이었던 클레이 코트와 잔디 코트에서도 성적을 내며 <span class="underline decoration-2 decoration-green-400 underline-offset-2">'올라운더'로 진화</span>하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '다닐 메드베데프는 언제, 얼마나 오랫동안 세계 랭킹 1위를 유지했나요?',
                    answer: '다닐 메드베데프는 2022년 2월 28일, 노박 조코비치를 제치고 생애 최초로 ATP 세계 랭킹 1위에 등극했습니다. 이는 2004년 이후 18년 동안 지속된 이른바 "빅4(페더러, 나달, 조코비치, 머레이)"의 독주 체제를 깬 역사적인 사건이었습니다. 그는 총 16주 동안 1위 자리를 유지하며 차세대 황제의 자격을 증명했습니다.'
                },
                {
                    question: '다닐 메드베데프가 경기에서 실제로 사용하는 라켓 모델은 무엇인가요?',
                    answer: '메드베데프는 프랑스의 라켓 브랜드인 테크니화이버(Tecnifibre)의 "T-Fight 305 Isoflex" 모델을 사용합니다. 이 라켓은 컨트롤과 안정성에 특화되어 있어, 그의 플랫성 스트로크와 정교한 코스 공략을 완벽하게 뒷받침합니다. 그는 이 브랜드와 장기 계약을 맺고 있는 대표적인 메인 모델입니다.'
                },
                {
                    question: '다닐 메드베데프의 실제 키는 몇 cm이고, 플레이에 어떤 장점이 있나요?',
                    answer: '공식 프로필상 다닐 메드베데프의 키는 198cm (6피트 6인치)입니다. 테니스 선수 중에서도 장신에 속하지만, 큰 키에 비해 믿을 수 없을 정도로 유연한 움직임과 코트 커버 능력을 보여줍니다. 높은 타점에서 내리꽂는 서브와 긴 팔다리(윙스팬)를 이용한 "문어 수비"는 그의 신체 조건을 100% 활용한 결과입니다.'
                },
                {
                    question: '다닐 메드베데프는 메이저 대회(그랜드슬램)에서 우승한 적이 있나요?',
                    answer: '네, 메드베데프는 2021년 US 오픈 남자 단식 챔피언입니다. 결승에서 노박 조코비치를 세트 스코어 3-0으로 완파하며 생애 첫 메이저 타이틀을 획득했습니다. 이 외에도 호주 오픈 준우승 3회(2021, 2022, 2024), US 오픈 준우승 2회(2019, 2023)를 기록하는 등 하드 코트 메이저 대회에서 특히 강력한 모습을 보여주고 있습니다.'
                }
            ]
        }
    },
    'alexander-zverev': {
        name: '알렉산더 즈베레프', nameEn: 'Alexander Zverev', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/alexander-zverev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '큰 키에서 나오는 강력한 서브와 세계 최고 수준의 투핸드 백핸드를 보유했습니다. 올림픽 금메달리스트이자 꾸준히 정상권을 지키는 독일의 에이스입니다.',
        detailedProfile: {
            oneLineSummary: '지옥에서 돌아온 "불굴의 사자", 올림픽 금메달리스트이자 가장 완벽한 백핸드의 소유자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 올림픽 금메달리스트 & 인간 승리의 아이콘</div>
                    <p>알렉산더 즈베레프는 2021 도쿄 올림픽에서 노박 조코비치의 골든 슬램을 저지하고 <strong>금메달</strong>을 목에 걸며 전성기를 맞이했습니다.</p>
                </div>
                <p>2022 롤랑가로스 4강전에서 입은 끔찍한 발목 부상으로 선수 생명이 위태로웠으나, 1년도 채 되지 않아 투어 최상위권으로 복귀하는 기적을 보여주었습니다. 또한 <strong>제1형 당뇨병</strong>을 앓고 있음에도 불구하고 경기 중 인슐린 주사를 맞아가며 세계 정상급 기량을 유지하는 그의 모습은 수많은 당뇨 환우들에게 희망이 되고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 + 공격적 베이스라이너"</strong></p>
                <p>198cm의 큰 키에서 뿜어져 나오는 220km/h 대의 강서브와, 투어 최고 수준의 양손 백핸드가 그의 확실한 무기입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🛡️ 즈베레프의 3가지 "철벽" 기술</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>레이저 백핸드:</strong> 즈베레프의 백핸드는 공격과 수비 모든 면에서 완벽에 가깝습니다. 특히 크로스 코트 깊숙이 찌르는 앵글 샷은 알고도 못 막는 필살기입니다.</li>
                        <li><strong>스카이스크래퍼 서브:</strong> 2미터에 가까운 타점에서 내리꽂는 서브는 속도와 각도 모두 위협적입니다. 첫 서브가 터지는 날에는 브레이크가 거의 불가능합니다.</li>
                        <li><strong>무한 체력:</strong> 장신 선수임에도 불구하고 5세트 접전을 즐길 만큼 체력이 뛰어납니다. 긴 랠리 싸움에서 좀처럼 지치지 않습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 10, description: '투어 최고의 양손 백핸드 중 하나 (월드 클래스).' },
                { name: '서브 (Serve)', score: 9.5, description: '압도적인 타점과 스피드 (단, 세컨 서브 기복 있음).' },
                { name: '체력 (Stamina)', score: 9.5, description: '부상 복귀 후 더욱 강해진 피지컬 괴물.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '강력하지만 가끔 빗맞는 경우가 있음.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '부상을 이겨내며 멘탈 또한 한 단계 성숙함.' },
                { name: '네트 플레이 (Net)', score: 8, description: '장신을 이용한 커버 범위가 넓음.' }
            ],
            growthStory: `
                <p>구소련 테니스 선수 출신 부모님 밑에서 자란 '테니스 금수저'입니다. 형 미샤 즈베레프 역시 프로 선수로 활약한 테니스 가문 출신입니다.</p>
                <p>주니어 시절부터 세계 1위를 달리며 엘리트 코스를 밟았고, 20세에 마스터스 1000 우승을 차지하며 일찌감치 차세대 주자로 낙점받았습니다. 그랜드슬램 결승 문턱에서 번번이 좌절하는 아픔도 겪었지만, 부상을 극복하고 돌아온 지금은 그 어느 때보다 우승에 근접해 있습니다.</p>
            `,
            signatureMatch: {
                title: '2021 도쿄 올림픽 4강 vs 노박 조코비치',
                date: '2021. 07. 30',
                description: '그 누구도 막을 수 없을 것 같았던 조코비치의 골든 슬램 꿈을 무너뜨린 경기입니다. 세트 스코어 0-1로 뒤지던 상황에서 믿을 수 없는 경기력으로 2-1 역전승을 거두며 <span class="text-yellow-500 font-bold">독일 테니스의 영웅</span>으로 등극했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐕 사자 머리의 "샤샤(Sascha)"</div>
                    <p>즈베레프의 애칭은 '샤샤'입니다. 흡사 사자의 갈기 같은 금발 머리와 훤칠한 외모 덕분에 여성 팬이 매우 많습니다. 코트장 밖에서는 반려견 '뢰빅'을 끔찍이 아끼는 애견인으로도 유명합니다.</p>
                </div>
                <p>팬 서비스가 좋기로 유명하며, 승리 후 카메라 렌즈에 하트나 감사의 메시지를 적는 것을 즐깁니다.</p>
            `,
            recentForm: `
                <p><strong>"완벽한 부활, 다시 정상을 향해"</strong></p>
                <p>부상 복귀 후 랭킹 10위권 밖으로 밀려났었으나, 무서운 속도로 랭킹 포인트를 쌓으며 다시 <span class="bg-blue-100 dark:bg-blue-900 px-1 rounded font-bold">Top 4</span>에 안착했습니다. 로마 마스터스 우승 등을 통해 클레이 코트에서도 강한 면모를 보이고 있어 언제든 메이저 우승이 가능한 상태입니다.</p>
            `,
            faq: [
                {
                    question: '알렉산더 즈베레프는 당뇨병을 앓고 있나요?',
                    answer: '네, 즈베레프는 3살 때부터 "제1형 당뇨병"을 앓고 있습니다. 경기 도중 벤치에서 혈당을 체크하고 인슐린 주사를 놓는 모습이 종종 포착됩니다. 그는 당뇨병 환자도 세계 최고의 운동선수가 될 수 있다는 것을 보여주기 위해 "알렉산더 즈베레프 재단"을 설립하여 당뇨 환우들을 돕고 있습니다.'
                },
                {
                    question: '즈베레프의 발목 부상은 어느 정도였나요?',
                    answer: '2022 롤랑가로스 나달과의 4강전에서 입은 부상은 오른쪽 발목 인대 3개가 모두 파열되는 심각한 부상이었습니다. 선수 생명이 끝날 수도 있다는 우려가 있었지만, 7개월간의 혹독한 재활 끝에 복귀하여 다시 세계 랭킹 2위까지 오르는 기적을 썼습니다.'
                },
                {
                    question: '즈베레프가 올림픽에서 획득한 메달은 무엇인가요?',
                    answer: '2020 도쿄 올림픽(2021년 개최) 남자 단식 "금메달"입니다. 4강에서 조코비치를 꺾고, 결승에서 카렌 하차노프를 완파하며 독일 남자 테니스 역사상 1992년 보리스 베커(복식) 이후 첫 금메달을 조국에 안겼습니다.'
                }
            ]
        }
    },
    'andrey-rublev': {
        name: '안드레이 루블레프', nameEn: 'Andrey Rublev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/andrey-rublev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. "Bweh"라는 기합 소리와 함께 매 포인트 전력을 다하는 파워풀한 공격 테니스를 구사합니다.',
        detailedProfile: {
            oneLineSummary: '영혼을 실어 치는 포핸드, 코트 위의 "인간 대포"이자 가장 순수한 열정의 아이콘.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "Bweh!" 기합 소리의 주인</div>
                    <p>안드레이 루블레프는 샷을 칠 때마다 내지르는 특유의 <strong>"Bweh(붸! or 뽜!)"</strong> 기합 소리로 유명합니다. 이는 그가 매 샷에 얼마나 많은 에너지를 쏟아붓는지를 보여주는 상징과도 같습니다.</p>
                </div>
                <p>투어 내에서 가장 강력한 포핸드를 보유한 선수 중 한 명으로, <span class="text-red-600 font-bold">ATP 500 시리즈의 제왕</span>이라 불릴 만큼 꾸준한 성적을 자랑합니다. 코트 위에서는 자신의 무릎을 라켓으로 내리칠 정도로 격정적이지만, 경기 후에는 세상에서 가장 착하고 수줍은 소년으로 돌아가는 '반전 매력'의 소유자입니다.</p>
            `,
            playStyle: `
                <p><strong>"전력 투구 공격 테니스 (Full Power Aggression)"</strong></p>
                <p>루블레프의 테니스는 복잡하지 않습니다. <strong>"공이 오면, 부러질 듯 세게 친다."</strong> 이 단순한 전략을 세계 최고 수준으로 수행합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💣 루블레프의 3가지 "파괴 본능"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>기관총 포핸드:</strong> 쉴 새 없이 몰아치는 빠른 템포의 포핸드는 마치 기관총과 같습니다. 특히 인사이드-아웃 포핸드는 코트 구석을 정확히 찌르며 상대를 무너뜨립니다.</li>
                        <li><strong>좀비 체력:</strong> 매 포인트 100%의 힘을 쓰면서도 경기 내내 지치지 않는 엄청난 에너지 레벨을 유지합니다.</li>
                        <li><strong>직진 본능:</strong> 드롭샷이나 로브 같은 변칙 기술보다는, 정직하고 강력한 스트로크 대결을 선호합니다. 이는 상대에게 엄청난 압박감을 줍니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 10, description: '투어 최강의 파괴력과 스피드 (핵폭탄급).' },
                { name: '파워 (Power)', score: 9.5, description: '체구에 비해 믿을 수 없는 볼 스피드 생성.' },
                { name: '스피드 (Speed)', score: 9, description: '빠른 발로 포핸드 칠 공간을 부지런히 만들어냄.' },
                { name: '서브 (Serve)', score: 8.5, description: '강력하지만 코스 예측이 비교적 쉬운 편.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이지만 포핸드만큼 위협적이지 않음.' },
                { name: '멘탈 (Mental)', score: 7, description: '자책이 심하고 감정 조절이 안 될 때가 있음.' }
            ],
            growthStory: `
                <p>러시아 모스크바에서 복싱 선수 출신 아버지와 테니스 코치 어머니 사이에서 태어났습니다. 테니스 레전드인 <strong>마라트 사핀</strong>을 동경하며 자랐고, 주니어 세계 랭킹 1위를 기록하며 일찍부터 재능을 인정받았습니다.</p>
                <p>프로 전향 후 꾸준히 Top 10을 유지하며 상위권에 자리 잡았으나, 메이저 대회 8강의 벽을 넘지 못해 '8강 징크스'에 시달리기도 했습니다. 하지만 2023년 몬테카를로 마스터스 우승으로 큰 경기에서도 통할 수 있음을 증명하며 한 단계 더 도약했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 몬테카를로 마스터스 결승 vs 홀게르 루네',
                date: '2023. 04. 16',
                description: '생애 첫 마스터스 1000 시리즈 우승을 차지한 감동적인 경기. 3세트 1-4로 뒤지고 있던 절망적인 상황에서 포기하지 않고 끈질기게 따라붙어 대역전승을 거뒀습니다. 우승 직후 코트에 쓰러져 펑펑 우는 모습은 많은 팬들의 눈시울을 붉혔습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 코트 밖의 "순둥이"</div>
                    <p>경기 중에는 라켓을 부수고 소리를 지르는 '광전사' 같지만, 코트 밖에서는 팬들에게 한없이 친절하고 수줍음 많은 성격입니다. 원디렉션 멤버를 닮은 외모와 특유의 순수한 웃음소리 덕분에 아이돌급 인기를 누리고 있습니다.</p>
                </div>
                <p>다닐 메드베데프와는 절친한 사이이며, 메드베데프 딸의 대부(Godfather)이기도 합니다.</p>
            `,
            recentForm: `
                <p><strong>"마스터스 챔피언으로 진화"</strong></p>
                <p>기복 없이 매 시즌 ATP 파이널스에 진출할 만큼 꾸준한 성적을 내고 있습니다. 2024년 <strong>마드리드 오픈 우승</strong>을 차지하며 클레이 코트에서도 강한 면모를 보였습니다. 이제 남은 과제는 그랜드슬램 4강 이상의 성적을 내는 것입니다.</p>
            `,
            faq: [
                {
                    question: '루블레프의 "Bweh" 소리는 무엇인가요?',
                    answer: '루블레프가 공을 칠 때 내는 특유의 기합 소리입니다. 의도적으로 내는 것은 아니고 힘을 쓸 때 자연스럽게 나오는 소리라고 하는데, 팬들 사이에서는 그를 상징하는 시그니처 사운드가 되어 "Bweh"라는 밈(Meme)이 탄생했습니다.'
                },
                {
                    question: '루블레프의 "8강 징크스"란 무엇인가요?',
                    answer: '루블레프는 그랜드슬램 대회에서 유독 8강(Quarterfinals)의 벽을 넘지 못하는 것으로 유명합니다. 무려 10번이나 8강에 진출했지만 모두 패배하여 4강 진출에 실패했습니다. 이는 실력보다는 심리적인 부담감이 원인으로 지목되고 있습니다.'
                },
                {
                    question: '루블레프와 메드베데프는 얼마나 친한가요?',
                    answer: '둘은 어릴 때부터 함께 테니스를 치며 자란 러시아 국가대표 절친입니다. 루블레프는 메드베데프의 첫째 딸 알리사의 대부(Godfather)가 되어주었을 정도로 가족 같은 사이입니다.'
                }
            ]
        }
    },
    'stefanos-tsitsipas': {
        name: '스테파노스 치치파스', nameEn: 'Stefanos Tsitsipas', country: 'Greece', countryFlag: '🇬🇷', image: '/images/players/stefanos-tsitsipas.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '그리스의 테니스 신. 우아한 원핸드 백핸드와 공격적인 포핸드, 그리고 네트 플레이까지 갖춘 올라운드 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '그리스 조각상 같은 외모와 우아한 원핸드 백핸드, 스타성을 겸비한 "그리스의 신".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏛️ 원핸드 백핸드의 자존심 </div>
                    <p>스테파노스 치치파스는 현대 테니스에서 멸종 위기에 처한 <strong>'원핸드 백핸드'</strong>의 명맥을 잇는 대표적인 스타입니다. 로저 페더러를 연상시키는 우아한 폼과 공격적인 네트 플레이로 '가장 아름다운 테니스를 하는 선수' 중 한 명으로 꼽힙니다.</p>
                </div>
                <p>193cm의 큰 키와 긴 머리카락, 조각 같은 외모로 <strong>'그리스의 신(Greek God)'</strong>이라는 별명을 가지고 있습니다. 코트 안에서는 파워풀한 올라운더이며, 코트 밖에서는 철학적인 생각을 즐기는 유튜브 크리에이터로서 독특한 매력을 발산합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올코트 플레이어 (Aggressive All-Court Player)"</strong></p>
                <p>강력한 포핸드를 바탕으로 네트 점령을 즐기는 호쾌한 스타일입니다. 베이스라인에 머물기보다, 기회가 오면 앞으로 전진하여 발리로 끝내는 것을 선호합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔱 치치파스의 3가지 "신성한 무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 톱스핀 포핸드:</strong> 치치파스의 주득점원입니다. 높은 타점에서 감아치는 묵직한 포핸드는 특히 클레이 코트에서 엄청난 바운드를 만들어내며 상대를 괴롭힙니다.</li>
                        <li><strong>네트 러시:</strong> 복식을 병행하며 다져진 발리 감각이 일품입니다. 서브 앤 발리나 어프로치 샷 후 네트 대시는 그의 트레이드마크입니다.</li>
                        <li><strong>예술적인 백핸드:</strong> 그의 원핸드 백핸드는 보는 이들의 탄성을 자아냅니다. 다운더라인 백핸드 위너가 터지는 날에는 그 누구도 그를 막을 수 없습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '가장 강력하고 믿을 수 있는 주무기.' },
                { name: '서브 (Serve)', score: 9, description: '190cm가 넘는 키에서 나오는 위력적인 서브.' },
                { name: '네트 플레이 (Net)', score: 9, description: '과감한 대시와 부드러운 터치 (복식 랭커급).' },
                { name: '체력 (Stamina)', score: 8.5, description: '5세트 접전도 버텨내지만 후반 집중력이 아쉬움.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '중요한 순간에 흔들리거나 부모님 코칭 이슈가 있음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '아름답지만 타점이 높거나 빠른 공에 취약함.' }
            ],
            growthStory: `
                <p>그리스인 아버지와 러시아 테니스 선수 출신 어머니(율리아 살니코바) 사이에서 태어났습니다. 3살 때부터 라켓을 잡았으며, 어릴 적 바다에서 익사할 뻔한 위기를 겪은 뒤 "테니스를 칠 수 있는 매 순간이 신의 축복"이라는 마인드를 갖게 되었다고 합니다.</p>
                <p>2018년 넥스트 제너레이션 파이널스 우승을 시작으로, 2019년 ATP 파이널스 최연소 우승을 차지하며 세계적인 스타로 발돋움했습니다. 2021년 롤랑가로스 결승에 진출하며 그리스 테니스 역사를 새로 썼습니다.</p>
            `,
            signatureMatch: {
                title: '2019 호주 오픈 16강 vs 로저 페더러',
                date: '2019. 01. 20',
                description: '치치파스의 이름을 전 세계에 알린 경기. 자신의 우상인 "테니스 황제" 페더러를 상대로 4세트 타이브레이크 접전 끝에 3-1 역전승을 거두며 세대교체의 신호탄을 쏘아 올렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📹 "테니스 철학자"이자 유튜버</div>
                    <p>치치파스는 유튜브 채널을 직접 운영하며 여행 브이로그와 자신의 철학이 담긴 영상을 올리는 것으로 유명합니다. 팬들은 그의 영상미와 독특한 감성에 열광합니다.</p>
                </div>
                <p>동료 선수인 파울라 바도사와의 공개 연애(커플명: Tsitsidosa)로도 화제를 모았으며, 테니스계의 '비주얼 커플'로 많은 사랑과 관심을 받고 있습니다.</p>
            `,
            recentForm: `
                <p><strong>"부활을 꿈꾸는 그리스 신"</strong></p>
                <p>한동안 부상과 폼 저하로 랭킹 10위권 밖으로 밀려나기도 했으나, 2024년 <strong>몬테카를로 마스터스 우승</strong>으로 화려하게 부활했습니다. 자신이 가장 좋아하는 클레이 코트 시즌에 특히 강한 모습을 보이며 다시금 메이저 우승에 도전하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '치치파스는 왜 "원핸드 백핸드"를 사용하나요?',
                    answer: '치치파스는 8살 때 코치와 상의 끝에 원핸드 백핸드를 선택했습니다. 그는 "원핸드 백핸드가 투핸드보다 더 자연스럽고 아름답게 느껴졌다"고 말했습니다. 그의 우상인 로저 페더러와 피트 샘프라스의 영향도 컸다고 합니다.'
                },
                {
                    question: '치치파스의 어머니도 테니스 선수였나요?',
                    answer: '네, 그의 어머니 율리아 살니코바(Julia Salnikova)는 소련 국가대표 테니스 선수 출신입니다. 그녀 역시 원핸드 백핸드를 구사했으며, 치치파스의 테니스 재능은 어머니로부터 물려받았다고 해도 과언이 아닙니다. 할아버지인 세르게이 살니코프는 올림픽 금메달을 딴 소련의 전설적인 축구 선수였습니다.'
                },
                {
                    question: '치치파스의 유튜브 채널에는 어떤 영상이 올라오나요?',
                    answer: '그는 테니스 훈련 영상보다는 주로 여행 브이로그, 드론 촬영 영상, 그리고 자신의 인생 철학을 담은 독백 형식의 영상을 올립니다. 영상 편집 실력이 수준급이며, 테니스 선수가 아닌 "크리에이터 스테파노스"로서의 면모를 볼 수 있습니다.'
                }
            ]
        }
    },
    'casper-ruud': {
        name: '카스페르 루드', nameEn: 'Casper Ruud', country: 'Norway', countryFlag: '🇳🇴', image: '/images/players/casper-ruud.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '노르웨이 테니스의 새 역사를 쓰고 있는 선수. 나달 아카데미 출신답게 클레이 코트에서 특히 강하며, 엄청난 회전량의 포핸드 탑스핀이 주무기입니다.',
        detailedProfile: {
            oneLineSummary: '나달의 수제자이자 성실함의 아이콘, 클레이 코트 위의 "북유럽 신사".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤴 노르웨이의 국민 영웅</div>
                    <p>카스페르 루드는 테니스 불모지였던 노르웨이에서 혜성처럼 등장한 슈퍼스타입니다. 노르웨이 역사상 최초의 ATP 투어 우승, 그랜드슬램 결승 진출, 세계 랭킹 2위 등 <strong>조국의 모든 테니스 기록을 혼자서 경신</strong>하고 있습니다.</p>
                </div>
                <p>라파엘 나달 아카데미 출신답게 나달을 연상시키는 <strong>헤비 탑스핀 포핸드</strong>를 구사하며, 투어에서 가장 매너 좋은 선수에게 수여하는 '스테판 에드베리 스포츠맨십 상'을 수상할 정도로 인성 또한 훌륭한 "무결점 신사"입니다.</p>
            `,
            playStyle: `
                <p><strong>"클레이 스페셜리스트 + 베이스라이너"</strong></p>
                <p>루드의 가장 큰 무기는 단연 <strong>포핸드</strong>입니다. 나달 다음으로 많은 분당 회전수(RPM)를 기록할 정도로 공이 묵직하게 튀어 올라 상대를 괴롭힙니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🌪️ 루드의 3가지 "승리 공식"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 탑스핀 포핸드:</strong> 그의 트레이드마크입니다. 높은 탄도로 베이스라인 깊숙이 떨어지는 공은 상대방을 뒤로 밀어내며 공격 기회를 만듭니다.</li>
                        <li><strong>강철 체력:</strong> 클레이 코트 특성상 긴 랠리가 많은데, 루드는 5세트 내내 지치지 않는 엄청난 지구력을 자랑합니다.</li>
                        <li><strong>자신감 있는 서브:</strong> 스피드만 빠른 것이 아니라, 킥 서브를 적절히 섞어 상대를 코트 밖으로 밀어내는 지능적인 서브 게임을 운영합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 10, description: '나달의 향기가 느껴지는 강력한 헤비 탑스핀.' },
                { name: '체력 (Stamina)', score: 9.5, description: '5세트 랠리 싸움에서 절대 밀리지 않는 강철 체력.' },
                { name: '멘탈 (Mental)', score: 9, description: '심판에게 항의조차 잘 하지 않는 침착함의 대명사.' },
                { name: '스피드 (Speed)', score: 8.5, description: '클레이 코트에서의 풋워크는 최상급.' },
                { name: '서브 (Serve)', score: 8.5, description: '파워보다는 높은 성공률과 코스 선택이 돋보임.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이지만 결정력은 포핸드에 비해 평범함.' }
            ],
            growthStory: `
                <p>전직 프로 테니스 선수(최고 랭킹 39위)였던 아버지 크리스티안 루드의 지도를 받으며 '테니스 DNA'를 물려받았습니다. 더 큰 성장을 위해 스페인 마요르카의 <strong>라파엘 나달 아카데미</strong>로 유학을 떠났고, 그곳에서 나달과 함께 훈련하며 기량이 급성장했습니다.</p>
                <p>초기에는 "클레이 코트에서만 잘한다"는 편견이 있었으나, 2022 US 오픈(하드 코트) 준우승을 차지하며 코트를 가리지 않는 올라운드 플레이어로서의 가능성을 입증했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 프랑스 오픈 4강 vs 마린 칠리치',
                date: '2022. 06. 03',
                description: '노르웨이 선수 최초로 그랜드슬램 결승 진출을 확정 지은 역사적인 경기. 베테랑 칠리치의 강력한 공격을 끈질긴 수비와 포핸드 역습으로 무력화시키며 3-1 역전승을 거두고, 자신의 우상 나달과 결승에서 만날 자격을 얻었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⛳ 골프를 사랑하는 테니스 선수</div>
                    <p>루드는 투어 내에서 소문난 '골프광'입니다. "은퇴 후에는 프로 골퍼가 되고 싶다"고 농담할 정도로 골프 실력이 수준급이며, 인스타그램 계정을 따로 운영할 정도입니다.</p>
                </div>
                <p>잘생긴 외모와 젠틀한 매너 덕분에 여성 팬이 많으며, 넷플릭스 다큐멘터리에서도 성실하고 가정적인 모습으로 호감도를 높였습니다.</p>
            `,
            recentForm: `
                <p><strong>"클레이의 제왕을 향해"</strong></p>
                <p>2022, 2023 프랑스 오픈 2년 연속 준우승을 차지하며 '나달 옆자리'를 위협하는 클레이 강자로 자리 잡았습니다. 2024년 바르셀로나 오픈에서 생애 가장 큰 타이틀(ATP 500)을 획득하며 커리어 하이를 경신했고, 늘 메이저 우승 후보로 거론됩니다.</p>
            `,
            faq: [
                {
                    question: '카스페르 루드는 라파엘 나달 아카데미 출신인가요?',
                    answer: '네, 루드는 2018년부터 스페인 마요르카에 있는 "라파엘 나달 아카데미"에서 훈련하고 있습니다. 나달과 자주 연습 경기를 하며 그의 강력한 탑스핀과 멘탈 관리법을 전수받았고, 이를 통해 세계적인 선수로 성장할 수 있었습니다.'
                },
                {
                    question: '루드는 왜 클레이 코트에서 강한가요?',
                    answer: '그의 주무기인 "헤비 탑스핀 포핸드"가 클레이 코트와 완벽한 궁합을 자랑하기 때문입니다. 클레이 코트는 공이 바닥에 닿은 후 높이 튀어 오르는데, 루드의 회전 많은 공은 상대의 어깨 높이까지 튀어 올라 리턴하기 매우 어렵게 만듭니다.'
                },
                {
                    question: '루드의 아버지도 유명한 선수였나요?',
                    answer: '네, 아버지 크리스티안 루드는 1990년대에 활동한 노르웨이 테니스의 전설입니다. 세계 랭킹 39위까지 올랐던 훌륭한 선수였지만, 아들인 카스페르가 그 모든 기록을 넘어서며 "청출어람"의 표본이 되었습니다. 현재는 아들의 코치로 함께 투어를 다니고 있습니다.'
                }
            ]
        }
    },
    'alex-de-minaur': {
        name: '알렉스 드 미노', nameEn: 'Alex de Minaur', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alex-de-minaur.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '스피드 데몬(Speed Demon)이라는 별명처럼 투어에서 가장 빠른 발을 가진 선수로 평가받으며, 끈질긴 수비와 카운터 펀치로 상대를 지치게 만듭니다.',
        detailedProfile: {
            oneLineSummary: '그랜드슬램 우승 후보들을 사냥하는 "거인 킬러", 코트 위에서 가장 빠른 사나이.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏎️ "스피드 데몬(Speed Demon)"</div>
                    <p>알렉스 드 미노의 트레이드마크는 <strong>타의 추종을 불허하는 스피드</strong>입니다. 도저히 잡을 수 없을 것 같은 공을 기어코 쫓아가 받아넘기는 그의 플레이는 상대방에게 "벽을 상대하는 것 같다"는 절망감을 줍니다.</p>
                </div>
                <p>183cm, 69kg의 왜소한 체격에도 불구하고 조코비치, 나달, 알카라스 등 거물급 선수들을 차례로 격파하며 <strong>'거인 킬러(Giant Killer)'</strong>로서 명성을 떨치고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"최고의 수비형 카운터 펀처"</strong></p>
                <p>드 미노의 테니스는 '발'로 합니다. 탁월한 코트 커버리지를 바탕으로 상대의 실수를 유도하고, 기습적인 카운터 샷으로 득점합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">😈 드 미노의 3가지 "악마적 능력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>미친 발빠름:</strong> 농담이 아니라 정말 투어에서 제일 빠릅니다. 드롭샷 수비, 좌우 커버 모든 면에서 만점입니다.</li>
                        <li><strong>플랫 샷:</strong> 네트를 스치듯 낮게 깔리는 플랫성 스트로크는 바운드 후에도 낮게 깔려, 키 큰 선수들이 치기 매우 까다롭습니다.</li>
                        <li><strong>리턴 에이스:</strong> 빠른 반사 신경으로 서브를 예측하고, 리턴부터 공격적으로 밀어붙여 상대의 서브 게임을 브레이크합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: 'ATP 투어 공식 "가장 빠른 선수" 중 한 명.' },
                { name: '체력 (Stamina)', score: 9.5, description: '5세트 내내 전력 질주가 가능한 무한 동력.' },
                { name: '멘탈 (Mental)', score: 9, description: '절대 포기하지 않는 끈질긴 승부 근성.' },
                { name: '리턴 (Return)', score: 9, description: '상대의 서브 게임을 가장 잘 깨는 선수 중 하나.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고한 수비의 핵심.' },
                { name: '파워 (Power)', score: 7, description: '스피드로 커버하지만 결정적인 한 방 파워는 아쉬움.' }
            ],
            growthStory: `
                <p>우루과이인 아버지와 스페인인 어머니 사이에서 호주 시드니에서 태어났습니다. 어릴 적 스페인으로 이주하여 클레이와 하드 코트를 모두 경험하며 자랐습니다.</p>
                <p>주니어 시절 왜소한 체격 때문에 "프로에서 성공하기 힘들 것"이라는 편견이 있었지만, 호주의 전설 <strong>레이튼 휴이트</strong>가 그의 재능을 알아보고 멘토를 자처하며 급성장했습니다. 휴이트의 투지와 끈기를 그대로 물려받아 '리틀 휴이트'로 불리기도 합니다.</p>
            `,
            signatureMatch: {
                title: '2023 유나이티드 컵 vs 라파엘 나달',
                date: '2023. 01. 02',
                description: '자신의 홈 그라운드인 호주에서 "클레이의 황제" 나달을 꺾은 인생 경기. 1세트를 내주었지만 포기하지 않고 끈질기게 물고 늘어져 2-1 역전승을 거두며 전 세계에 자신의 이름을 각인시켰습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💕 테니스계의 공식 커플</div>
                    <p>영국의 미녀 테니스 스타 <strong>케이티 볼터(Katie Boulter)</strong>와 공개 연애 중입니다. 윔블던 등 주요 대회에서 서로의 경기를 응원하는 모습이 자주 포착되며 팬들의 부러움을 사고 있습니다.</p>
                </div>
                <p>경기 중에는 표정 변화 없는 '악마(Demon)' 같지만, 팬 서비스가 매우 좋고 인터뷰에서는 늘 겸손한 태도를 보여 '호감형 선수'로 통합니다.</p>
            `,
            recentForm: `
                <p><strong>"Top 10의 자격 증명"</strong></p>
                <p>2024년 들어 더욱 공격적인 테니스를 장착하며 커리어 하이(세계 랭킹 10위 진입)를 경신했습니다. 프랑스 오픈 8강, 윔블던 8강 등 메이저 대회에서도 꾸준히 성적을 내며 '반짝 스타'가 아님을 증명했습니다.</p>
            `,
            faq: [
                {
                    question: '알렉스 드 미노의 별명 "Demon"은 무슨 뜻인가요?',
                    answer: '그의 성 "de Minaur"의 발음이 "Demon(악마)"과 비슷해서 붙여진 별명입니다. 또한 코트 위에서 지치지 않고 상대를 끈질기게 괴롭히는 플레이 스타일과도 잘 어울려 팬들이 애칭으로 부르고 있습니다.'
                },
                {
                    question: '드 미노와 케이티 볼터는 언제부터 사귀었나요?',
                    answer: '두 선수는 2020년부터 교제를 시작한 것으로 알려져 있습니다. 드 미노가 우승 후 카메라 렌즈에 볼터의 이니셜 "KT"를 적는 등 남다른 애정을 과시하며 테니스계의 대표적인 장수 커플로 사랑받고 있습니다.'
                },
                {
                    question: '드 미노는 호주 선수인가요 스페인 선수인가요?',
                    answer: '국적은 "호주(Australia)"입니다. 하지만 스페인 마드리드에서 오랜 기간 거주하며 훈련했기 때문에 스페인어에도 능통하고 클레이 코트에도 익숙합니다. 데이비스 컵 등 국가대항전에는 항상 호주 대표로 출전하여 엄청난 애국심을 보여줍니다.'
                }
            ]
        }
    },
    'taylor-fritz': {
        name: '테일러 프리츠', nameEn: 'Taylor Fritz', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/taylor-fritz.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국 남자 테니스의 에이스. 강력한 서브와 파워풀한 포핸드를 앞세운 전형적인 공격형 스타일로, 홈 그라운드인 미국 대회에서 특히 강합니다.',
        detailedProfile: {
            oneLineSummary: '미국 테니스의 자존심이자 에이스, 강력한 서브와 포핸드로 무장한 "미스터 아메리카".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 미국 테니스의 부활을 이끄는 에이스</div>
                    <p>앤디 로딕 이후 끊겼던 '미국 남자 테니스 챔피언'의 계보를 잇는 선두주자입니다. 2022년 인디언 웰스 결승에서 부상을 안고도 라파엘 나달을 꺾으며 우승, 미국 팬들에게 강렬한 희망을 선사했습니다.</p>
                </div>
                <p>큰 키와 수려한 외모, 그리고 넷플릭스 다큐멘터리 '브레이크 포인트'의 주역으로 활약하며 대중적인 인지도가 매우 높습니다. 그의 경기는 항상 홈 관중의 열광적인 응원과 함께합니다.</p>
            `,
            playStyle: `
                <p><strong>"전형적인 아메리칸 하드 히터"</strong></p>
                <p>강력한 서브와 포핸드 한 방으로 경기를 끝내는 화끈한 스타일입니다. 과거에는 수비가 약점이었으나, 최근에는 백핸드 랠리와 수비력도 크게 향상되었습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔨 프리츠의 3가지 "스매싱 포인트"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>레이저 포핸드:</strong> 플랫하게 쫙 깔려 나가는 포핸드 위너는 그의 트레이드마크입니다. 타점이 잡히면 주저 없이 때립니다.</li>
                        <li><strong>캐논 서브:</strong> 시속 220km를 넘나드는 서브는 위기 순간마다 에이스를 만들어냅니다.</li>
                        <li><strong>백핸드 크로스:</strong> 랠리 싸움에서 버티는 힘이 좋아졌으며, 상대의 실수를 유도하는 견고함을 갖췄습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '미국 선수 특유의 파워풀한 포핸드.' },
                { name: '서브 (Serve)', score: 9.5, description: '투어 최상위권의 서브 능력.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '부상을 참고 뛰는 투혼과 집중력.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '약점에서 준수한 무기로 성장.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '아직은 발전이 필요한 부분.' },
                { name: '스피드 (Speed)', score: 8, description: '체격에 비해 나쁘지 않은 기동력.' }
            ],
            growthStory: `
                <p>전 테니스 선수였던 어머니(캐시 메이, 전 세계 10위)의 영향으로 자연스럽게 테니스를 접했습니다. 주니어 시절부터 미국 내 랭킹 1위를 다투며 엘리트 코스를 밟았습니다.</p>
                <p>2015년 US 오픈 주니어 우승 이후 프로에 데뷔했으나, 잠시 정체기를 겪기도 했습니다. 하지만 2022년 인디언 웰스 우승을 기점으로 기량이 만개하여 Top 5까지 진입했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 인디언 웰스 마스터스 결승 vs 라파엘 나달',
                date: '2022. 03. 20',
                description: '발목 부상 때문에 코치진이 기권을 권유했으나, "이 경기를 뛰지 않으면 평생 후회할 것 같다"며 출전을 강행했습니다. 결국 전승 행진을 달리던 나달을 2-0으로 꺾고 우승하며 영화 같은 스토리를 완성했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📸 최고의 "인플루언서 커플"</div>
                    <p>그의 여자친구 <strong>모건 리들(Morgan Riddle)</strong>은 유명한 패션 인플루언서로, 테니스 투어의 비하인드 스토리를 SNS에 공유하며 젊은 층을 테니스로 끌어들이는 데 큰 공을 세우고 있습니다. 프리츠와 함께 '테니스계의 바비 & 켄'으로 불립니다.</p>
                </div>
                <p>넷플릭스 다큐멘터리에서 보여준 솔직한 모습과 게임(e스포츠)을 좋아하는 '너드' 같은 반전 매력도 인기 요인입니다.</p>
            `,
            recentForm: `
                <p><strong>"메이저 우승을 향한 도전"</strong></p>
                <p>하드 코트에서는 그 누구와 붙어도 이길 수 있는 경쟁력을 갖췄습니다. 2024년 호주 오픈 8강 진출 등 메이저 대회에서 꾸준히 성적을 내고 있으며, 이제는 우승 트로피를 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '프리츠는 인디언 웰스 결승 때 정말 부상이었나요?',
                    answer: '네, 사실입니다. 결승 당일 아침 발목 통증이 너무 심해 걷기조차 힘들었다고 합니다. 코치진은 기권을 강력히 권했지만 프리츠가 고집을 부려 진통제를 맞고 출전했고, 기적 같은 승리를 거뒀습니다.'
                },
                {
                    question: '프리츠의 여자친구는 누구인가요?',
                    answer: '그의 여자친구는 모건 리들(Morgan Riddle)입니다. 틱톡과 유튜브에서 테니스 패션과 투어 라이프를 소개하는 콘텐츠로 유명하며, 테니스를 잘 모르는 젊은 세대에게 테니스를 알리는 홍보대사 역할을 톡톡히 하고 있습니다.'
                },
                {
                    question: '프리츠는 게임을 좋아하나요?',
                    answer: '네, 그는 소문난 "게이머"입니다. 훈련이 없을 때는 리그 오브 레전드, 포트나이트 등 비디오 게임을 즐기며 스트레스를 푼다고 합니다. 심지어 대회 중에도 게임 장비를 챙겨 다닐 정도입니다.'
                }
            ]
        }
    },
    'hubert-hurkacz': {
        name: '후베르트 후르카츠', nameEn: 'Hubert Hurkacz', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/hubert-hurkacz.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폴란드의 서브 몬스터. 큰 키에서 내리꽂는 에이스급 서브와 부드러운 발리 터치, 그리고 겸손한 성품으로 사랑받는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 신사, 강력한 서브와 부드러운 터치를 겸비한 폴란드의 "Hubi".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤖 "서브 봇"이자 페더러를 은퇴시킨 남자</div>
                    <p>투어에서 가장 많은 서브 에이스를 기록하는 선수 중 한 명입니다. 특히 2021년 윔블던 8강에서 '잔디의 황제' <strong>로저 페더러</strong>를 상대로 3-0 완승(마지막 세트는 6-0 베이글 스코어)을 거두며 페더러의 윔블던 마지막 상대로 역사에 남았습니다.</p>
                </div>
                <p>196cm의 거구지만 믿기 힘들 정도로 유연한 다이빙 발리를 선보이며, 항상 미소를 잃지 않는 선한 인성으로 동료들 사이에서 평판이 매우 좋습니다.</p>
            `,
            playStyle: `
                <p><strong>"올라운드 서버 (All-round Server)"</strong></p>
                <p>단순히 서브만 좋은 것이 아닙니다. 베이스라인 랠리, 넷 플레이, 수비력까지 모든 면에서 육각형에 가까운 능력을 보여줍니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💎 후르카츠의 3가지 "히든 젬"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>정밀 타격 서브:</strong> 속도도 빠르지만 코너를 찌르는 정확도가 예술입니다. 브레이크 포인트 위기 때마다 에이스로 삭제해 버립니다.</li>
                        <li><strong>다이빙 발리:</strong> 잔디 코트에서 몸을 날려 공을 받아내는 다이빙 발리는 그의 시그니처 무브입니다.</li>
                        <li><strong>부드러운 터치:</strong> 거구의 선수들이 흔히 갖지 못한 섬세한 손목 감각을 지녀 드롭샷이나 앵글 발리도 능수능란합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '현존하는 최고의 서버 중 한 명.' },
                { name: '발리 (Volley)', score: 9, description: '부드럽고 정교한 손기술.' },
                { name: '멘탈 (Mental)', score: 9, description: '화내는 모습을 보기 힘든 평정심.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고함.' },
                { name: '포핸드 (Forehand)', score: 8, description: '가끔 흔들릴 때가 있는 편.' },
                { name: '스피드 (Speed)', score: 8, description: '큰 키를 커버하는 좋은 움직임.' }
            ],
            growthStory: `
                <p>폴란드 브로츠와프 출신으로, 어머니가 주니어 테니스 챔피언 출신입니다. 체조 선수였던 할아버지의 유전자를 물려받아 큰 키에도 유연한 신체를 가졌습니다.</p>
                <p>조용히 성장하다가 2021년 마이애미 오픈(마스터스 1000) 우승으로 깜짝 스타가 되었고, 이후 꾸준히 Top 10을 유지하며 이가 시비옹테크와 함께 폴란드 테니스의 황금기를 이끌고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2021 마이애미 오픈 결승 vs 야닉 시너',
                date: '2021. 04. 04',
                description: '생애 첫 마스터스 우승의 감격적인 순간. 절친한 후배이자 라이벌인 시너를 상대로 노련한 경기 운영을 보여주며 2-0 승리를 거뒀습니다. 이 우승으로 그는 세계적인 강자로 인정받게 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😇 투어 대표 "선한 영향력"</div>
                    <p>심판 판정에 항의할 때조차 공손한 말투를 쓸 정도로 매너가 좋습니다. 경기 승리 후에는 카메라 렌즈에 "고마워요(Thank you)"라고 적는 등 겸손함이 몸에 배어 있습니다.</p>
                </div>
                <p>야닉 시너와는 투어 최고의 절친 사이로, 둘이 복식조로 출전하거나 함께 훈련하는 영상은 팬들에게 '힐링 콘텐츠'로 통합니다.</p>
            `,
            recentForm: `
                <p><strong>"잔디와 하드의 강자"</strong></p>
                <p>빠른 코트에서 특히 강점을 보입니다. 2023년 상하이 마스터스 우승 등 여전한 기량을 과시하고 있으며, 서브 감각조절이 잘 되는 날에는 그 누구도 그를 막을 수 없습니다. 꾸준함이 그의 최대 무기입니다.</p>
            `,
            faq: [
                {
                    question: '후르카츠는 왜 서브가 강한가요?',
                    answer: '196cm의 큰 키에서 나오는 높은 타점과 유연한 신체 능력을 완벽하게 활용하기 때문입니다. 특히 눈을 감고도 코스를 맞출 수 있을 정도로 정교한 토스 메카니즘을 가지고 있어, 상대가 서브 방향을 예측하기 매우 어렵습니다.'
                },
                {
                    question: '후르카츠와 시너는 얼마나 친한가요?',
                    answer: '둘은 나이 차이(후르카츠가 4살 형)와 국경을 뛰어넘은 절친입니다. 함께 복식 경기에 자주 출전하며, 인터뷰에서도 서로를 "가장 친한 친구"라고 언급합니다. 팬들은 그들을 합쳐서 "Hubinner"라고 부르기도 합니다.'
                },
                {
                    question: '페더러를 이겼을 때 기분이 어땠나요?',
                    answer: '그는 경기 후 인터뷰에서 "어릴 적 우상이었던 페더러와 윔블던 센터 코트에서 경기하는 것만으로도 꿈만 같았는데, 승리까지 해서 믿을 수 없다"며 기쁨보다 존경심을 먼저 표했습니다. 이는 그의 겸손한 성품을 잘 보여줍니다.'
                }
            ]
        }
    },
    'holger-rune': {
        name: '홀게르 루네', nameEn: 'Holger Rune', country: 'Denmark', countryFlag: '🇩🇰', image: '/images/players/holger-rune.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '덴마크의 악동이자 슈퍼 루키. 폭발적인 에너지와 다재다능한 기술, 그리고 거침없는 승부욕으로 단숨에 톱 랭커로 도약했습니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 악동이자 천재, 승부욕으로 무장한 덴마크의 "다이너마이트".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧨 "덴마크 다이너마이트"의 폭발력</div>
                    <p>홀게르 루네는 2022 파리 마스터스 결승에서 '테니스 황제' <strong>노박 조코비치</strong>를 꺾고 19세의 나이로 우승을 차지하며 전 세계를 충격에 빠뜨렸습니다. 이 대회에서만 5명의 Top 10 선수를 연달아 격파하는 도장 깨기를 보여주었습니다.</p>
                </div>
                <p>거침없는 언행과 불같은 성격으로 '악동' 이미지가 있지만, 그 이면에는 누구보다 테니스에 진심인 열정과 승부욕이 숨어 있습니다. 알카라스, 시너와 함께 남자 테니스의 미래를 이끌 차세대 '빅3' 후보로 꼽힙니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더 (Aggressive All-Rounder)"</strong></p>
                <p>루네는 빠른 발과 강력한 샷을 바탕으로 상대를 끊임없이 압박합니다. 베이스라인 뒤에 머물기보다는 기회가 생기면 과감하게 네트로 대시하는 플레이를 즐깁니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 루네의 3가지 "폭주 모드"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드 다운더라인:</strong> 그의 필살기입니다. 투어 통틀어 가장 위협적인 백핸드 중 하나로 평가받으며, 언제 어디서든 위너를 꽂아 넣습니다.</li>
                        <li><strong>예측 불허 드롭샷:</strong> 강력한 스트로크 대결 중에 갑자기 툭 떨어뜨리는 드롭샷은 상대의 타이밍을 완벽하게 뺏습니다.</li>
                        <li><strong>쇼맨십 에너지:</strong> 관중의 호응을 유도하고 분위기를 자신의 것으로 가져오는 능력이 탁월합니다. 미친 듯이 뛰어다니며 에너지를 발산합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 10, description: '조코비치급의 완벽한 백핸드.' },
                { name: '스피드 (Speed)', score: 9, description: '폭발적인 순간 스피드와 민첩성.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '지기 싫어하는 엄청난 승부욕(가끔 과열됨).' },
                { name: '창의성 (Creativity)', score: 9, description: '드롭샷, 넷 플레이 등 다양한 옵션 보유.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '강력하지만 가끔 기복이 있음.' },
                { name: '서브 (Serve)', score: 8, description: '계속 발전하고 있는 무기.' }
            ],
            growthStory: `
                <p>덴마크 코펜하겐 출신으로, 누나를 따라 6살 때 테니스를 시작했습니다. 어릴 때부터 '세계 1위'가 되겠다는 목표가 확고했습니다. 심지어 어릴 때 자신의 방에 나달과 페더러의 사진을 붙여놓고 그들을 이기는 상상을 했다고 합니다.</p>
                <p>주니어 세계 1위를 거쳐 프로 데뷔 후에도 빠르게 랭킹을 올렸습니다. 2022년 프랑스 오픈 8강, 파리 마스터스 우승 등으로 단숨에 Top 10에 진입했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 파리 마스터스 결승 vs 노박 조코비치',
                date: '2022. 11. 06',
                description: '루네의 이름을 전 세계에 알린 인생 경기. 디펜딩 챔피언 조코비치를 상대로 3세트 접전 끝에 2-1 역전승을 거뒀습니다. 마지막 게임에서 무려 6번의 브레이크 포인트를 막아내며 우승을 확정 짓는 장면은 대회의 하이라이트였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧢 거꾸로 쓴 모자와 반바지</div>
                    <p>항상 모자를 거꾸로 쓰고, 짧은 반바지를 걷어 올리며 열정적으로 뛰는 모습은 그의 트레이드마크입니다. 젊고 반항적인 이미지 덕분에 10대, 20대 팬들에게 인기가 많습니다.</p>
                </div>
                <p>SNS를 통해 자신의 훈련 영상이나 일상을 자주 공유하며 팬들과 활발하게 소통합니다.</p>
            `,
            recentForm: `
                <p><strong>"성장통과 재도약"</strong></p>
                <p>최근 잦은 코치진 교체(베커, 무라토글루 등)로 다소 불안정한 모습을 보였으나, 2024년 들어 다시 안정을 찾고 있습니다. 여전히 최고의 재능을 가진 선수임에는 의심의 여지가 없으며, 멘탈적인 성숙이 더해진다면 언제든 메이저 우승을 노릴 수 있습니다.</p>
            `,
            faq: [
                {
                    question: '루네는 왜 "배드 보이"라고 불리나요?',
                    answer: '경기 중 심판 판정에 거칠게 항의하거나 감정을 여과 없이 표출하는 모습, 그리고 과거 라커룸에서의 작은 언쟁 등으로 인해 그런 이미지가 생겼습니다. 하지만 이는 승리에 대한 집착과 열정의 표현이기도 하여, 호불호가 갈리지만 확실한 스타성을 보여줍니다.'
                },
                {
                    question: '루네의 코치는 누구인가요?',
                    answer: '루네는 패트릭 무라토글루, 보리스 베커 등 전설적인 코치들과 함께 일했습니다. 코치진 교체가 잦은 편인데, 이는 자신에게 가장 잘 맞는 최적의 지도 방식을 찾기 위한 과정이라고 밝힌 바 있습니다.'
                },
                {
                    question: '루네의 백핸드는 왜 특별한가요?',
                    answer: '그의 투핸드 백핸드는 매우 플랫하고 정확하며, 타이밍이 빠릅니다. 특히 다운더라인으로 꽂아 넣는 백핸드는 예측이 거의 불가능해 상대방이 꼼짝없이 당하는 경우가 많습니다. 조코비치 이후 최고의 백핸드라는 평가도 있습니다.'
                }
            ]
        }
    },
    'grigor-dimitrov': {
        name: '그리고르 디미트로프', nameEn: 'Grigor Dimitrov', country: 'Bulgaria', countryFlag: '🇧🇬', image: '/images/players/grigor-dimitrov.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '베이비 페더러라는 별명처럼 가장 아름다운 폼을 가진 선수 중 하나. 유려한 원핸드 백핸드와 다채로운 기술로 제2의 전성기를 맞이했습니다.',
        detailedProfile: {
            oneLineSummary: '제2의 전성기를 맞이한 "베이비 페더러", 가장 우아하고 기술적인 원핸드 백핸더.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦢 코트 위의 "우아한 백조"</div>
                    <p>로저 페더러를 연상시키는 부드러운 폼과 우아한 <strong>원핸드 백핸드</strong> 덕분에 '베이비 페더러'라는 별명으로 불렸습니다. 30대에 접어들어 신체 능력과 경험이 조화를 이루며 '회춘 모드'를 발동, 다시 Top 10에 복귀하여 제2의 전성기를 누리고 있습니다.</p>
                </div>
                <p>투어에서 가장 잘생긴 선수 중 한 명으로 꼽히며, 코트 안팎에서의 매너와 스타일리시한 외모로 많은 팬을 보유하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"올라운드 테크니션 (All-round Technician)"</strong></p>
                <p>코트 위의 모든 기술을 최상급으로 구사할 수 있습니다. 강력한 서브, 날카로운 슬라이스, 파워풀한 탑스핀, 그리고 섬세한 발리까지 모든 샷이 교과서적입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 디미트로프의 3가지 "예술적 터치"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>명품 원핸드 백핸드:</strong> 그의 상징입니다. 직선으로 뻗어나가는 다운더라인과 낮게 깔리는 슬라이스를 자유자재로 구사하여 상대의 타이밍을 뺏습니다.</li>
                        <li><strong>곡예사 수비:</strong> 유연한 신체를 이용해 믿기 힘든 수비 장면을 연출하곤 합니다. 다이빙 샷이나 스플릿 스텝은 하나의 예술 동작 같습니다.</li>
                        <li><strong>강력한 서브:</strong> 부드러운 폼에서 나오는 시속 210km 이상의 서브는 그의 숨겨진 필살기입니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '테크닉 (Technique)', score: 10, description: '모든 샷을 완벽한 폼으로 구사.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '가장 아름답고 위협적인 원핸드 백핸드.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '유연성과 탄력이 최상급.' },
                { name: '서브 (Serve)', score: 8.5, description: '기복이 있지만 터지면 막을 수 없음.' },
                { name: '멘탈 (Mental)', score: 8, description: '경험이 쌓이며 위기관리 능력이 좋아짐.' },
                { name: '체력 (Stamina)', score: 8.5, description: '나이가 무색할 만큼 철저한 자기관리.' }
            ],
            growthStory: `
                <p>불가리아 하스코보 출신으로, 주니어 시절부터 '천재'로 불렸습니다. 2008년 윔블던, US 오픈 주니어 우승을 휩쓸며 혜성처럼 등장했습니다.</p>
                <p>2017년 ATP 파이널스 우승으로 세계 3위까지 올랐으나 이후 부진과 부상으로 랭킹이 하락했습니다. 하지만 포기하지 않고 폼을 교정하고 체력을 보완하여 2023-2024 시즌 화려하게 부활했습니다.</p>
            `,
            signatureMatch: {
                title: '2017 ATP 파이널스 결승 vs 다비드 고팽',
                date: '2017. 11. 19',
                description: '디미트로프 커리어의 정점. 왕중왕전인 파이널스에서 전승 우승을 차지하며 세계 3위를 확정 지었습니다. 이 대회 우승으로 그는 "Big 3" 다음가는 실력자임을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🕴️ 테니스계의 "패션 아이콘"</div>
                    <p>나이키 등 주요 브랜드의 모델로 활동할 만큼 뛰어난 패션 감각과 외모를 자랑합니다. 마리아 샤라포바 등 유명 스타들과의 연애로도 화제를 모았지만, 지금은 테니스에 집중하며 '멋있게 늙어가는 선수'의 표본이 되었습니다.</p>
                </div>
                <p>인터뷰할 때의 중저음 목소리와 젠틀한 매너는 여심을 저격하는 포인트입니다.</p>
            `,
            recentForm: `
                <p><strong>"회춘한 베테랑"</strong></p>
                <p>2024년 마이애미 오픈에서 알카라스, 즈베레프 등 젊은 강자들을 연파하고 결승에 오르는 기염을 토했습니다. 전성기 못지않은 몸놀림과 더욱 노련해진 경기 운영으로 투어의 다크호스로 군림하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '디미트로프는 왜 "베이비 페더러"라고 불리나요?',
                    answer: '프로 데뷔 초기, 서브 준비 동작부터 포핸드, 그리고 원핸드 백핸드까지 로저 페더러의 폼과 매우 흡사했습니다. 페더러의 우아함을 빼닮았다는 의미에서 "베이비 페더러"라는 별명이 붙었지만, 이제는 자신만의 스타일을 확립했습니다.'
                },
                {
                    question: '디미트로프의 원핸드 백핸드는 장점인가요?',
                    answer: '현대 테니스에서 원핸드 백핸드는 높은 공 처리에 불리하여 사라지는 추세지만, 디미트로프는 이를 완벽한 슬라이스와 타이밍으로 극복했습니다. 오히려 예측하기 힘든 샷 앵글과 다양성을 만들어내는 그의 가장 강력한 무기입니다.'
                },
                {
                    question: '디미트로프는 결혼했나요?',
                    answer: '아직 결혼하지 않았습니다. 과거 마리아 샤라포바, 니콜 셰르징거 등 유명인들과 교제하며 화제를 모았으나, 현재는 공식적으로 알려진 연인은 없으며 테니스 커리어에 집중하고 있습니다.'
                }
            ]
        }
    },
    'ben-shelton': {
        name: '벤 쉘튼', nameEn: 'Ben Shelton', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/ben-shelton.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '미국 대학 테니스 출신의 괴물 신인. 230km/h를 넘나드는 왼손 폭탄 서브와 다이내믹한 플레이, 그리고 전화기 세리머니로 스타성을 입증했습니다.',
        detailedProfile: {
            oneLineSummary: '240km/h 서브를 꽂아 넣는 미국의 "슈퍼 루키", 코트 위의 에너자이저.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📞 "전화를 받아라(Hang up the phone)!"</div>
                    <p>벤 쉘튼은 2023 US 오픈 4강 신화를 쓰며 전 세계에 이름을 알렸습니다. 승리 후 수화기를 내려놓는 듯한 <strong>'전화기 세리머니'</strong>는 그의 시그니처가 되었고, 조코비치가 이를 따라 할 정도로 큰 화제가 되었습니다.</p>
                </div>
                <p>미국 대학(NCAA) 챔피언 출신으로, 프로 데뷔 1년 만에 Top 20에 진입한 괴물 신인입니다. 왼손잡이 특유의 각도 큰 서브와 폭발적인 포핸드는 보는 이들에게 짜릿한 쾌감을 줍니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 & 하드 히터 (Big Server & Hard Hitter)"</strong></p>
                <p>쉘튼의 테니스는 '화력' 그 자체입니다. 엄청난 피지컬에서 나오는 서브와 포핸드는 그 어떤 수비도 뚫어버립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💣 쉘튼의 3가지 "다이너마이트 화력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>왼손 폭탄 서브:</strong> 최고 시속 241km의 서브를 구사합니다. 왼손잡이 슬라이스 서브는 코트 밖으로 도망가는 궤적을 그려 리턴하기 불가능에 가깝습니다.</li>
                        <li><strong>점프 스매싱:</strong> 미식축구 선수 출신다운 엄청난 점프력으로 코트 어디서든 스매싱을 꽂아 넣습니다.</li>
                        <li><strong>포핸드 위너:</strong> 라켓을 채찍처럼 휘두르는 빠른 스윙 스피드로 베이스라인 뒤에서도 위너를 만들어냅니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9.5, description: '투어 최고 수준의 구속과 파워 (왼손 이점).' },
                { name: '포핸드 (Forehand)', score: 9, description: '맞으면 터지는 듯한 타격감.' },
                { name: '파워 (Power)', score: 10, description: '압도적인 힘 그 자체.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '폭발적인 점프력과 스피드.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '큰 무대를 즐기는 강심장.' },
                { name: '리턴 (Return)', score: 7, description: '아직은 다듬어야 할 부분.' }
            ],
            growthStory: `
                <p>전 프로 테니스 선수이자 대학 코치인 브라이언 쉘튼의 아들입니다. 어릴 때는 미식축구(쿼터백)에 더 관심이 많았으나, 12세 때 "아빠처럼 되고 싶지 않다"며 테니스를 시작했습니다(반전).</p>
                <p>플로리다 대학 시절 NCAA 단식 우승으로 대학 무대를 평정한 뒤 프로로 전향했습니다. 놀랍게도 2023년 호주 오픈 출전 전까지는 미국 밖을 나가본 적도 없는 '토종 미국인'이었으나, 첫 해외 원정에서 8강에 오르는 기적을 썼습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 8강 vs 프란시스 티아포',
                date: '2023. 09. 06',
                description: '미국 테니스의 신구 대결. 선배 티아포를 상대로 압도적인 화력을 뽐내며 3-1 승리를 거두고 4강에 진출했습니다. 이 경기 승리 후 보여준 전화기 세리머니는 대회의 하이라이트였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😁 미소가 아름다운 "스마일 맨"</div>
                    <p>경기 중 실수를 해도 씩 웃어넘기는 긍정적인 태도가 매력적입니다. 인터뷰에서도 항상 유쾌하고 자신감 넘치는 모습을 보여주며, MZ세대 테니스 팬들의 절대적인 지지를 받고 있습니다.</p>
                </div>
                <p>그의 폭발적인 플레이 스타일은 하이라이트 필름 제조기라 불릴 만큼 볼거리가 풍성합니다.</p>
            `,
            recentForm: `
                <p><strong>"다듬어지는 원석"</strong></p>
                <p>2023년 재팬 오픈에서 생애 첫 투어 우승을 차지하며 상승세를 탔습니다. 2024년 텍사스 오픈 등에서 우승하며 클레이 코트에서도 우승할 수 있음을 증명했습니다. 경험만 더 쌓인다면 무서운 괴물이 될 것입니다.</p>
            `,
            faq: [
                {
                    question: '벤 쉘튼의 서브 속도는 얼마나 빠른가요?',
                    answer: '그는 2023 US 오픈에서 시속 149마일(약 240km)의 서브를 기록했습니다. 이는 대회 최고 기록 중 하나였으며, 단순히 빠르기만 한 것이 아니라 왼손잡이 특유의 회전이 걸려 있어 받기가 매우 까다롭습니다.'
                },
                {
                    question: '전화기 세리머니의 진짜 의미는 무엇인가요?',
                    answer: '쉘튼은 친구이자 육상 선수인 그랜트 할로웨이의 세리머니를 따라 한 것이라고 밝혔습니다. "내가 연결되었다(I\'m dialed in)", 즉 "완전히 집중했다"는 의미입니다. 조코비치와의 4강전 후 조코비치가 이를 패러디하여 화제가 되기도 했습니다.'
                },
                {
                    question: '쉘튼은 대학을 졸업했나요?',
                    answer: '아니요, 플로리다 대학교 재학 중 프로로 전향했습니다. 하지만 현재도 온라인으로 경영학 수업을 들으며 학업을 병행하고 있다고 합니다. 그의 아버지 브라이언 쉘튼이 대학 감독이었던 만큼 학업의 중요성을 강조했다고 합니다.'
                }
            ]
        }
    },
    'tommy-paul': {
        name: '토미 폴', nameEn: 'Tommy Paul', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/tommy-paul.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '빠른 발과 뛰어난 운동 신경을 가진 미국의 톱 랭커. 수비에서 공격으로 전환하는 능력이 탁월하며, 그랜드슬램 4강에 오르는 등 꾸준한 상승세입니다.',
        detailedProfile: {
            oneLineSummary: '빠른 발과 조코비치도 인정한 운동신경, "육각형 플레이어"의 정석.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👟 "발이 보이지 않는 스피드"</div>
                    <p>토미 폴은 폭발적인 파워보다는 탁월한 밸런스와 빠른 발을 이용한 <strong>올라운드 플레이</strong>로 승부합니다. 2023년 호주 오픈에서 미국 남자 선수로는 14년 만에 4강에 진출하며 자신의 시대를 알렸습니다.</p>
                </div>
                <p>코트 위에서는 냉정하지만 밖에서는 자유분방한 성격의 소유자입니다. 자신만의 의류 브랜드를 런칭하는 등 힙한 감성으로 팬들의 사랑을 받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 카운터 펀처 (Aggressive Counter Puncher)"</strong></p>
                <p>수비력이 뛰어나지만 수비에만 치중하지 않습니다. 기회가 오면 지체 없이 네트로 대시하거나 포핸드로 공격 전환을 시도합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🏃‍♂️ 토미 폴의 3가지 "무한 동력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>미친 풋워크:</strong> 투어 최상위권의 스텝을 자랑합니다. 어떤 공이든 쫓아가 받아내는 능력은 조코비치조차 혀를 내두를 정도입니다.</li>
                        <li><strong>역크로스 포핸드:</strong> 코트 중앙으로 돌아서서 치는 역크로스 포핸드는 그의 주득점원이며, 상대의 백핸드 쪽을 집요하게 공략합니다.</li>
                        <li><strong>빠른 공수 전환:</strong> 수비를 하다가도 상대의 짧은 공을 놓치지 않고 바로 공격으로 태세 전환하는 속도가 매우 빠릅니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버리지가 매우 넓음.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '타고난 신체 밸런스.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '정확하고 날카로운 역크로스.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적인 연결 중심.' },
                { name: '네트 플레이 (Net)', score: 8.5, description: '복식 경험이 풍부해 발리가 좋음.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워보다는 코스 공략 위주.' }
            ],
            growthStory: `
                <p>주니어 시절 롤랑가로스 주니어 우승과 US 오픈 주니어 준우승을 차지하며 일찌감치 유망주로 꼽혔습니다. 테일러 프리츠, 라일리 오펠카와 함께 '미국 테니스 황금세대'의 일원입니다.</p>
                <p>한동안 부상과 정체기를 겪었으나, 꾸준히 랭킹을 끌어올려 2023년에 생애 첫 Top 20, 그리고 Top 15 진입에 성공했습니다. 대기만성형으로 전성기를 맞이하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 8강 vs 벤 쉘튼',
                date: '2023. 01. 25',
                description: '미국 테니스의 현재와 미래의 대결. 쉘튼의 강력한 서브와 파워를 노련한 경기 운영과 빠른 발로 무력화시키며 3-1 승리를 거두고 생애 첫 메이저 4강에 올랐습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👕 "힙한 동네 형" 바이브</div>
                    <p>경기 중에도 모자를 거꾸로 쓰거나 편안한 표정을 짓는 등 특유의 여유로움이 매력입니다. SNS를 통해 보여주는 일상은 마치 '힙한 미국 대학생' 같은 느낌을 주어 친근함을 더합니다.</p>
                </div>
                <p>자신과 친구들의 라이프스타일을 담은 의류 브랜드를 운영할 정도로 패션에 관심이 많습니다.</p>
            `,
            recentForm: `
                <p><strong>"꾸준함의 대명사"</strong></p>
                <p>2024년 댈러스 오픈 우승, 델레이 비치 준우승 등 시즌 초반부터 좋은 흐름을 이어가고 있습니다. 퀸즈 클럽 우승으로 잔디 코트 타이틀까지 추가하며 '올코트 플레이어'임을 입증했습니다.</p>
            `,
            faq: [
                {
                    question: '토미 폴은 주니어 시절 얼마나 잘했나요?',
                    answer: '그는 2015년 프랑스 오픈 주니어 우승자 출신입니다. 결승에서 테일러 프리츠를 꺾고 우승을 차지했는데, 이는 그가 클레이 코트에서도 뛰어난 실력을 갖췄음을 증명하는 기록입니다.'
                },
                {
                    question: '토미 폴의 플레이 스타일은 누구와 비슷한가요?',
                    answer: '많은 전문가들이 그의 플레이를 보며 앤디 로딕과 레이튼 휴이트를 섞어놓은 것 같다고 평가합니다. 로딕의 모자 스타일과 휴이트의 끈질긴 발놀림을 모두 갖추고 있기 때문입니다.'
                },
                {
                    question: '토미 폴은 올림픽에 나간 적이 있나요?',
                    answer: '네, 2021년 도쿄 올림픽과 2024년 파리 올림픽에 미국 국가대표로 출전했습니다. 특히 파리 올림픽에서는 복식 동메달(프리츠와 파트너)을 획득하며 국위를 선양했습니다.'
                }
            ]
        }
    },
    'frances-tiafoe': {
        name: '프란시스 티아포', nameEn: 'Frances Tiafoe', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/frances-tiafoe.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '빅 포(Big Foe). 독특한 포핸드 폼과 쇼맨십, 그리고 관중과 호흡하는 에너지 넘치는 플레이로 US 오픈 4강 신화를 쓴 미국의 스타입니다.',
        detailedProfile: {
            oneLineSummary: '관중을 미치게 만드는 "Big Foe", 독특한 폼과 쇼맨십으로 무장한 엔터테이너.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 "아메리칸 드림"의 주인공</div>
                    <p>시에라리온 이민자 가정 출신으로, 아버지가 관리인으로 일하던 테니스 센터 창고에서 잠을 자며 라켓을 잡기 시작한 이야기는 한 편의 영화 같습니다. 2022년 US 오픈에서 나달을 꺾고 흑인 남성 선수로는 아서 애시 이후 16년 만에 4강에 오르며 미국의 새로운 영웅으로 떠올랐습니다.</p>
                </div>
                <p>경기 중 관중의 호응을 유도하고 화려한 세리머니를 펼치는 등 투어 최고의 <strong>쇼맨십</strong>을 자랑합니다.</p>
            `,
            playStyle: `
                <p><strong>"창의적 공격형 올라운더"</strong></p>
                <p>티아포의 테니스는 변칙적이고 자유롭습니다. 정석적인 폼보다는 자신만의 감각과 리듬으로 상대를 공략합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🤡 티아포의 3가지 "서커스 샷"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>채찍 포핸드:</strong> 테이크백이 매우 짧고 독특하지만, 임팩트 순간 채찍처럼 휘두르는 포핸드는 타이밍을 뺏기 좋고 스핀이 많이 걸립니다.</li>
                        <li><strong>재치 있는 발리:</strong> 복식 경기에서도 두각을 나타낼 만큼 손맛이 좋고 네트 앞에서의 센스가 탁월합니다. 노룩(No-look) 샷도 종종 보여줍니다.</li>
                        <li><strong>변칙 서브:</strong> 토스 높이나 위치를 조절하며 상대의 리턴 타이밍을 뺏는 지능적인 서브를 구사합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '쇼맨십 (Showmanship)', score: 10, description: '관중을 조련하는 마에스트로.' },
                { name: '포핸드 (Forehand)', score: 9, description: '독특하지만 파괴적인 샷.' },
                { name: '네트 플레이 (Net)', score: 9, description: '감각적인 터치 발리.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '탄력과 유연성이 뛰어남.' },
                { name: '서브 (Serve)', score: 8, description: '평균 이상이지만 기복이 있음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적으로 버티는 역할.' }
            ],
            growthStory: `
                <p>메릴랜드주 칼리지파크의 테니스 센터에서 5살 때부터 형과 함께 테니스를 쳤습니다. 어려운 가정 형편 속에서도 재능을 인정받아 코치들의 후원을 받으며 성장했습니다. 그의 성공 스토리는 많은 흑인 아이들에게 테니스에 대한 꿈을 심어주고 있습니다.</p>
                <p>2018년 델레이 비치 우승으로 첫 투어 타이틀을 따냈고, 2022년 US 오픈 4강으로 커리어 하이를 찍으며 세계적인 선수로 발돋움했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 US 오픈 16강 vs 라파엘 나달',
                date: '2022. 09. 05',
                description: '티아포의 인생 경기. 그랜드슬램 22회 우승자인 나달을 상대로 3-1 승리를 거두며 전 세계를 충격에 빠뜨렸습니다. 강력한 스트로크와 흔들리지 않는 멘탈로 나달을 압도했고, 경기 후 인터뷰에서 눈물을 흘리며 "세상을 다 가진 기분"이라고 말했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏀 NBA 스타들도 사랑하는 선수</div>
                    <p>르브론 제임스, 브래들리 빌 등 NBA 슈퍼스타들이 그의 경기를 보러 올 정도로 스포츠계 마당발입니다. 농구 유니폼을 입고 연습하거나 농구 세리머니를 하는 등 테니스와 농구 문화를 잇는 아이콘입니다.</p>
                </div>
                <p>항상 웃는 얼굴과 긍정적인 에너지로 'Big Foe'라는 애칭으로 불리며 사랑받고 있습니다.</p>
            `,
            recentForm: `
                <p><strong>"Top 10 재진입을 노리는 강자"</strong></p>
                <p>2023년 슈투트가르트와 휴스턴 우승으로 잔디와 클레이 코트에서도 경쟁력을 증명했습니다. 2024년 신시내티오픈 결승까지 오르며 다시 한번 상승세를 타고 있습니다.</p>
            `,
            faq: [
                {
                    question: '티아포의 별명 "Big Foe"는 무슨 뜻인가요?',
                    answer: '그의 성 "Tiafoe"의 뒷부분 발음과 "Foe(적, 상대)"를 합친 라임입니다. "거대한 적"이라는 뜻처럼 코트 위에서 상대하기 힘든 선수가 되겠다는 자신감의 표현이자, 친구들이 부르는 애칭입니다.'
                },
                {
                    question: '티아포는 부모님이 어느 나라 분인가요?',
                    answer: '부모님 두 분 모두 아프리카의 시에라리온 출신 이민자입니다. 내전을 피해 미국으로 건너와 힘든 시기를 겪었지만, 아들을 훌륭한 테니스 선수로 키워낸 감동적인 사연의 주인공들입니다.'
                },
                {
                    question: '티아포가 좋아하는 농구 팀은 어디인가요?',
                    answer: '그는 워싱턴 D.C. 인근 출신이라 워싱턴 위저즈의 열렬한 팬입니다. NBA 경기장을 자주 찾으며, 르브론 제임스를 자신의 롤 모델로 꼽기도 했습니다.'
                }
            ]
        }
    },
    'ugo-humbert': {
        name: '우고 움베르', nameEn: 'Ugo Humbert', country: 'France', countryFlag: '🇫🇷', image: '/images/players/ugo-humbert.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '프랑스의 현재이자 미래. 왼손잡이 특유의 각도 깊은 서브와 빠른 템포의 공격적인 테니스로 실내 하드 코트에서 특히 강한 면모를 보입니다.',
        detailedProfile: {
            oneLineSummary: '피아노 치는 테니스 선수, 실내 하드 코트의 절대 강자 "The Commander".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎹 "피아니스트 테니스 선수"</div>
                    <p>우고 움베르는 수준급의 피아노 실력을 갖춘 것으로 유명합니다. 코트 위에서의 플레이도 마치 건반을 두드리듯 리듬감 있고 박자가 빠릅니다. <strong>실내 하드 코트</strong>에서 승률이 매우 높아 '인도어 킹(Indoor King)'이라는 별명도 가지고 있습니다.</p>
                </div>
                <p>프랑스 테니스의 계보를 잇는 왼손잡이 에이스로, 공격적인 성향과 화끈한 위너로 팬들을 즐겁게 합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올코트 플레이어 (Aggressive All-Courter)"</strong></p>
                <p>베이스라인에 붙어서 공을 라이징으로 처리하는 능력이 탁월합니다. 상대에게 시간을 주지 않고 몰아붙이는 속전속결 스타일입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎼 움베르의 3가지 "빠른 박자"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>라이징 샷:</strong> 공이 바운드되자마자 치는 타이밍이 기가 막힙니다. 상대는 준비할 틈도 없이 당하게 됩니다.</li>
                        <li><strong>왼손 슬라이스 서브:</strong> 듀스 코트에서 와이드로 빠져나가는 왼손잡이 특유의 서브는 그의 가장 확실한 득점 루트입니다.</li>
                        <li><strong>플랫 포핸드:</strong> 낮고 빠르게 깔리는 포핸드는 실내 코트에서 위력이 배가됩니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '공격성 (Aggression)', score: 9.5, description: '물러서지 않고 먼저 때리는 스타일.' },
                { name: '서브 (Serve)', score: 9, description: '코스 선택이 탁월한 왼손 서브.' },
                { name: '리턴 (Return)', score: 8.5, description: '빠른 반사신경으로 공격적인 리턴.' },
                { name: '멘탈 (Mental)', score: 8, description: '분위기를 타면 무서우나 기복이 있음.' },
                { name: '수비 (Defense)', score: 7.5, description: '공격에 비해 수비 전환은 아쉬움.' },
                { name: '네트 플레이 (Net)', score: 8.5, description: '과감하게 들어와서 끝내는 결정력.' }
            ],
            growthStory: `
                <p>프랑스 메츠 출신으로 5살 때 테니스를 시작했습니다. 12세 때 잠시 부상으로 위기가 있었으나, 프랑스 테니스 협회의 체계적인 육성 시스템 속에서 성장했습니다.</p>
                <p>2020년 첫 투어 우승을 차지한 이후 꾸준히 랭킹을 올려 2024년 두바이 오픈 우승으로 Top 15 진입에 성공, 프랑스 넘버원 자리를 굳건히 했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 두바이 챔피언십 결승 vs 알렉산더 부블릭',
                date: '2024. 03. 02',
                description: 'ATP 500 대회 결승에서 부블릭을 2-0으로 완파하고 우승을 차지했습니다. 특히 준결승에서 메드베데프를 꺾는 파란을 일으키며 자신의 커리어 하이 시즌을 알린 대회였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "프랑스 신사"</div>
                    <p>코트 밖에서는 조용하고 예술적인 감수성을 지닌 '모범생' 이미지입니다. 피아노 연주 영상을 SNS에 올리며 팬들과 소통하는 등 부드러운 매력을 발산합니다.</p>
                </div>
                <p>하지만 경기장에서는 관중의 엄청난 응원을 등에 업고 폭발적인 에너지를 뿜어내는 반전 매력이 있습니다.</p>
            `,
            recentForm: `
                <p><strong>"커리어 하이 경신 중"</strong></p>
                <p>2024년은 움베르에게 최고의 해입니다. 마르세유와 두바이에서 연속 우승을 차지하며 하드 코트 강자로서의 입지를 다졌습니다. 이제는 마스터스 이상의 큰 무대 우승을 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '움베르는 정말 피아노를 잘 치나요?',
                    answer: '네, 수준급입니다. 어릴 때부터 피아노를 배웠으며, 투어 중에도 호텔 로비 등에 피아노가 있으면 연주하곤 합니다. 음악적인 리듬감이 테니스 플레이에도 긍정적인 영향을 준다고 믿습니다.'
                },
                {
                    question: '왜 실내 코트에서 강한가요?',
                    answer: '바람의 영향이 없고 공이 일정하게 튀는 실내 코트는 그의 빠르고 낮은 플랫 샷이 위력을 발휘하기 가장 좋은 환경입니다. 실제로 그의 투어 우승 대부분이 실내 하드 코트 대회에서 나왔습니다.'
                },
                {
                    question: '움베르의 코치는 누구인가요?',
                    answer: '그는 제레미 샤르디(전 프랑스 테니스 선수)의 지도를 받고 있습니다. 샤르디의 경험과 전략이 더해지면서 움베르의 경기 운영 능력이 한 단계 성장했다는 평가를 받습니다.'
                }
            ]
        }
    },
    'sebastian-baez': {
        name: '세바스티안 바에즈', nameEn: 'Sebastian Baez', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/sebastian-baez.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '작은 고추가 맵다. 단신이지만 엄청난 활동량과 끈질긴 랠리 능력, 그리고 강력한 포핸드로 클레이 코트에서 무서운 저력을 보여주는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '170cm의 "작은 거인", 지치지 않는 체력과 포핸드로 상대를 제압하는 클레이 전사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐜 "작은 거인"의 반란</div>
                    <p>170cm라는 테니스 선수치고 매우 작은 키에도 불구하고, 자신보다 20~30cm 큰 선수들을 압도합니다. 디에고 슈와르츠만의 뒤를 잇는 아르헨티나의 단신 에이스로, <strong>불굴의 투지</strong>와 엄청난 발놀림이 트레이드마크입니다.</p>
                </div>
                <p>클레이 코트에서 특히 강하며, 2023-2024 시즌에만 투어 4회 우승을 쓸어 담으며 '우승 청부사'로 떠올랐습니다.</p>
            `,
            playStyle: `
                <p><strong>"그라운드 스트로크 스페셜리스트"</strong></p>
                <p>전형적인 클레이 코트 스타일입니다. 베이스라인 뒤에서 톱스핀이 많이 걸린 포핸드로 상대를 좌우로 흔들고, 기회를 엿보다가 강력한 다운더라인으로 끝냅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 바에즈의 3가지 "무한 동력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>전광석화 풋워크:</strong> 키가 작은 대신 누구보다 빠릅니다. 코트 커버리지가 워낙 좋아 수비 상황을 공격으로 바꿔버립니다.</li>
                        <li><strong>헤비 탑스핀 포핸드:</strong> 작은 체구에서 나온다고 믿기 힘든 묵직한 포핸드를 구사합니다. 바운드 후 높게 튀어 올라 상대를 괴롭힙니다.</li>
                        <li><strong>강철 멘탈:</strong> 포인트마다 "Vamos!"를 외치며스스로를 채찍질하고, 어떤 상황에서도 포기하지 않는 끈기를 보여줍니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 10, description: '지치지 않는 에너자이저.' },
                { name: '스피드 (Speed)', score: 9.5, description: '투어에서 가장 빠른 발 중 하나.' },
                { name: '포핸드 (Forehand)', score: 9, description: '클레이에서 가장 위력적인 무기.' },
                { name: '멘탈 (Mental)', score: 9, description: '끝까지 물고 늘어지는 근성.' },
                { name: '서브 (Serve)', score: 6.5, description: '신체 조건상 약점이 될 수밖에 없음.' },
                { name: '네트 플레이 (Net)', score: 7, description: '주로 베이스라인 플레이를 선호함.' }
            ],
            growthStory: `
                <p>아르헨티나 부에노스아이레스 출신으로 2살 때 라켓을 잡았습니다. 유년 시절 코치였던 칸테로와의 인연을 지금까지 이어오고 있습니다.</p>
                <p>주니어 세계 랭킹 1위 출신으로 일찍이 재능을 인정받았으며, 프로 데뷔 후에도 챌린저 투어를 빠르게 평정하고 ATP 투어에 안착했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 리우 오픈 500 결승 vs 마리아노 나보네',
                date: '2024. 02. 25',
                description: '자신의 커리어 중 가장 큰 타이틀(ATP 500)을 획득한 경기. 같은 아르헨티나 동료를 상대로 압도적인 경기력을 보여주며 2-0 완승을 거뒀습니다. 이 우승으로 남미 클레이 시즌의 최강자로 등극했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "Vamos!" 파이팅 맨</div>
                    <p>경기 내내 파이팅 넘치는 모습으로 관중에게 에너지를 전달합니다. 카메라 렌즈에 "나 왜 이렇게 잘해?(Why not me?)" 같은 문구를 적으며 자신감을 표현하기도 합니다.</p>
                </div>
                <p>단신 선수들에게 '할 수 있다'는 희망을 주는 롤 모델이기도 합니다.</p>
            `,
            recentForm: `
                <p><strong>"클레이의 왕자"</strong></p>
                <p>2024년 초반 리우 오픈과 산티아고 오픈을 연속 제패하며 10연승 이상을 달렸습니다. 클레이 코트 시즌에는 그 누구도 만나고 싶어 하지 않는 까다로운 상대입니다.</p>
            `,
            faq: [
                {
                    question: '바에즈의 키는 정말 170cm인가요?',
                    answer: '네, 프로필상 170cm(5피트 7인치)로 투어 최단신 그룹에 속합니다. 하지만 이를 극복하기 위해 엄청난 하체 훈련과 풋워크 연습을 소화했다고 합니다.'
                },
                {
                    question: '바에즈는 델 포트로와 관련이 있나요?',
                    answer: '후안 마르틴 델 포트로는 바에즈의 멘토이자 우상입니다. 델 포트로가 은퇴 전 바에즈와 함께 훈련하며 많은 조언을 해주었고, 아르헨티나 테니스의 계보를 잇도록 격려했다고 합니다.'
                },
                {
                    question: '하드 코트에서는 약한가요?',
                    answer: '과거에는 클레이 전문이라는 인식이 강했으나, 2023년 윈스턴-세일럼 오픈(하드 코트)에서 우승하며 하드 코트 경쟁력도 입증했습니다. 점점 올라운드 플레이어로 진화하고 있습니다.'
                }
            ]
        }
    },
    'lorenzo-musetti': {
        name: '로렌조 무세티', nameEn: 'Lorenzo Musetti', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/lorenzo-musetti.png', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '이탈리아의 예술가. 화려한 원핸드 백핸드와 창의적인 샷 메이킹으로 보는 이들을 매료시키는 스타일리시한 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 예술가, 낭만적인 원핸드 백핸드와 창의성으로 승부하는 테크니션.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "다 빈치의 후예" 테니스 예술가</div>
                    <p>로렌조 무세티는 아름다운 <strong>원핸드 백핸드</strong>와 마법 같은 샷 메이킹으로 '코트 위의 예술가'라 불립니다. 승패를 떠나 플레이 스타일 자체가 아름다워, 로저 페더러의 우아함을 그리워하는 팬들에게 큰 사랑을 받고 있습니다.</p>
                </div>
                <p>2024년 윔블던 4강, 파리 올림픽 동메달을 획득하며 야닉 시너와 함께 이탈리아 테니스의 부흥기를 이끄는 핵심 멤버로 성장했습니다.</p>
            `,
            playStyle: `
                <p><strong>"올코트 크리에이터 (All-court Creator)"</strong></p>
                <p>정형화된 플레이를 거부합니다. 베이스라인 뒤에서 엄청난 양의 스핀을 건 샷을 날리다가도, 기습적인 드롭샷이나 네트 대시로 득점합니다. 창의성이 그의 무기입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🪄 무세티의 3가지 "매직 핸드"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>클래식 원핸드 백핸드:</strong> 가스케, 바브린카의 뒤를 잇는 명품 백핸드입니다. 다운더라인 위너가 터질 때의 쾌감은 최고입니다.</li>
                        <li><strong>예술적인 드롭샷:</strong> 손목 감각(Touch)이 타의 추종을 불허합니다. 상대가 예측하지 못한 타이밍에 공을 네트 앞에 툭 떨어뜨립니다.</li>
                        <li><strong>다양한 스핀:</strong> 슬라이스, 롭, 앵글 샷 등 회전을 자유자재로 다루며 상대를 혼란에 빠뜨립니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '예측 불가능한 샷 셀렉션.' },
                { name: '테크닉 (Technique)', score: 9.5, description: '모든 구질을 자유자재로 구사.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '원핸드 백핸드의 로망 그 자체.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '감정 기복이 경기력에 영향을 줌.' },
                { name: '서브 (Serve)', score: 8, description: '코스는 좋으나 파워는 평범함.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '회전량이 많아 까다로움.' }
            ],
            growthStory: `
                <p>이탈리아 카라라 출신으로, 어릴 때부터 나이답지 않은 노련한 플레이로 주목받았습니다. 2019년 호주 오픈 주니어 우승을 차지하며 세계 주니어 1위에 올랐습니다.</p>
                <p>프로 데뷔 후 클레이 코트에서 강점을 보이다가, 2024년 잔디 코트(윔블던 4강)에서의 맹활약으로 모든 코트에서 통하는 선수임을 증명했습니다. 어린 나이에 아빠가 된 후 책임감이 더해져 멘탈이 강해졌다는 평입니다.</p>
            `,
            signatureMatch: {
                title: '2024 파리 올림픽 동메달 결정전 vs 펠릭스 오제-알리아심',
                date: '2024. 08. 04',
                description: '이탈리아 테니스 역사상 100년 만의 올림픽 메달을 안긴 경기. 3세트 접전 끝에 승리하며 조국에 동메달을 바쳤습니다. 승리가 확정된 순간 코트에 누워 보여준 기쁨은 전 세계에 감동을 주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "아빠가 된 소년"</div>
                    <p>2024년 초 득남하여 아버지가 되었습니다. "아들을 위해 이긴다"는 인터뷰는 많은 팬들의 심금을 울렸고, 책임감 있는 가장의 모습이 더해져 호감도가 급상승했습니다.</p>
                </div>
                <p>잘생긴 이탈리아 미남형 얼굴에 스타일리시한 플레이가 더해져 화보 같은 장면을 자주 연출합니다.</p>
            `,
            recentForm: `
                <p><strong>"커리어 하이 시즌"</strong></p>
                <p>2024년 중반부터 기량이 만개했습니다. 특히 잔디 시즌 퀸즈 클럽 준우승, 윔블던 4강에 이어 올림픽 메달까지 획득하며 최고의 상승세를 타고 있습니다.</p>
            `,
            faq: [
                {
                    question: '무세티는 왜 원핸드 백핸드를 치나요?',
                    answer: '어릴 때 코치가 "너는 투핸드보다 원핸드가 더 자연스럽다"고 권유하여 바꾸게 되었습니다. 지금은 그의 가장 큰 자부심이자 정체성이 되었습니다.'
                },
                {
                    question: '무세티 문신의 의미는 무엇인가요?',
                    answer: '그의 팔에는 심장 박동 그래프 안에 테니스 라켓이 들어있는 문신이 있습니다. "테니스는 내 심장이다"라는 의미로, 테니스에 대한 그의 열정을 보여줍니다.'
                },
                {
                    question: '야닉 시너와 라이벌 관계인가요?',
                    answer: '선의의 경쟁자이자 동료입니다. 시너가 좀 더 앞서 나가고 있지만, 무세티 역시 자극을 받아 성장하고 있습니다. 두 선수는 이탈리아 테니스의 부흥을 이끄는 쌍두마차로 불립니다.'
                }
            ]
        }
    },

    'cameron-norrie': {
        name: '카메론 노리', nameEn: 'Cameron Norrie', country: 'United Kingdom', countryFlag: '🇬🇧', image: '/images/players/cameron-norrie.png', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '영국의 철인. 지치지 않는 체력과 독특한 플랫 백핸드, 그리고 엄청난 회전량의 포핸드를 섞어 상대를 까다롭게 만드는 왼손잡이 전략가입니다.',
        detailedProfile: {
            oneLineSummary: '지칠 줄 모르는 "영국의 철인", 가장 까다로운 왼손잡이 전략가.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔋 무한 배터리 "노리 머신"</div>
                    <p>카메론 노리는 투어에서 가장 체력이 좋은 선수 중 한 명입니다. 화려함보다는 <strong>지독한 꾸준함</strong>으로 상대를 질식시키는 플레이가 일품입니다. 평범해 보이지만 막상 상대해보면 공이 너무 까다로워 선수들이 기피하는 상대 1순위입니다.</p>
                </div>
                <p>뉴질랜드에서 자라 영국으로 귀화한 독특한 이력을 가졌으며, 인디언 웰스 우승으로 마스터스 챔피언 타이틀을 보유한 숨은 실력자입니다.</p>
            `,
            playStyle: `
                <p><strong>"지능형 카운터 펀처 (Intelligent Counter Puncher)"</strong></p>
                <p>상대의 힘을 역이용하고, 코트의 기하학적인 각도를 활용해 상대를 끊임없이 뛰어다니게 만듭니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🛠️ 노리의 3가지 "작업 도구"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>플랫 백핸드:</strong> 남들과 다르게 백핸드 테이크백이 매우 짧고 공을 밀어치듯 때립니다. 이로 인해 공 궤적이 낮고 빨라 타이밍을 맞추기 어렵습니다.</li>
                        <li><strong>헤비 스핀 포핸드:</strong> 백핸드와 정반대로 포핸드는 엄청난 양의 스핀을 걸어 높게 튀어 오르게 합니다. 이 극단적인 구질 차이가 상대를 혼란스럽게 합니다.</li>
                        <li><strong>강철 체력:</strong> 5세트 접전이 되어도 지친 기색이 없습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 10, description: '타의 추종을 불허하는 심장.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '어떤 상황에서도 평정심 유지.' },
                { name: '전술 (Tactics)', score: 9, description: '상대 약점을 파고드는 지능 플레이.' },
                { name: '리턴 (Return)', score: 8.5, description: '안정적이고 끈질긴 리턴.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워보다는 코스 공략 위주.' },
                { name: '파워 (Power)', score: 7, description: '한 방보다는 연타 능력.' }
            ],
            growthStory: `
                <p>남아공에서 태어나 뉴질랜드에서 자랐고, 테니스 커리어를 위해 16세 때 영국으로 건너왔습니다. 이후 미국 TCU 대학에서 대학 테니스를 경험하며 기량을 닦았습니다.</p>
                <p>프로 데뷔 후 매년 조금씩 성장하여 2021년 인디언 웰스 우승, 2022년 윔블던 4강이라는 성과를 거두며 영국 테니스의 에이스로 자리 잡았습니다.</p>
            `,
            signatureMatch: {
                title: '2021 인디언 웰스 결승 vs 니콜로즈 바실라쉬빌리',
                date: '2021. 10. 17',
                description: '노리의 인생 역전 드라마. 첫 세트를 내주고도 끈질기게 따라붙어 역전 우승을 차지했습니다. 이 우승으로 "그랜드슬램 다음으로 큰 대회"인 마스터스 1000 시리즈 챔피언이 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💂 "성실함의 아이콘"</div>
                    <p>화려한 스타성은 없지만, 묵묵히 자신의 길을 가는 성실함이 매력입니다. 인터뷰에서도 항상 겸손하고 침착한 모습을 보여주며, "노력은 배신하지 않는다"는 것을 몸소 증명하는 선수입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"꾸준함의 대명사"</strong></p>
                <p>Top 20 내외를 꾸준히 유지하며 언제나 제 몫을 해내는 선수입니다. 클레이, 하드, 잔디를 가리지 않고 일정 수준 이상의 성적을 내는 '올 코터'입니다.</p>
            `,
            faq: [
                {
                    question: '노리는 영국 선수인가요, 뉴질랜드 선수인가요?',
                    answer: '현재는 영국 국적(GBR)으로 뛰고 있습니다. 부모님은 영국인(스코틀랜드, 웨일스)이며, 남아공에서 태어나 뉴질랜드에서 자랐습니다. 주니어 시절에는 뉴질랜드 대표였으나 2013년에 영국으로 테니스 국적을 옮겼습니다.'
                },
                {
                    question: '백핸드 폼이 왜 특이한가요?',
                    answer: '백핸드 테이크백이 거의 없이 바로 공을 밀어 치는 독특한 메커니즘을 가지고 있습니다. 이는 상대가 샷의 방향을 예측하기 어렵게 만들고, 빠른 템포로 공을 돌려보내는 장점이 있습니다.'
                },
                {
                    question: '노리의 대학 경력이 도움이 되었나요?',
                    answer: '네, 그는 미국 TCU(텍사스 크리스천 대학교)에서 대학 테니스를 경험했습니다. 이 기간 동안 많은 실전 경험을 쌓고 정신적으로 성숙해진 것이 프로 생활에 큰 밑거름이 되었다고 밝혔습니다.'
                }
            ]
        }
    },
    'tallon-griekspoor': {
        name: '탈론 크리에크스푸르', nameEn: 'Tallon Griekspoor', country: 'Netherlands', countryFlag: '🇳🇱', image: '/images/players/tallon-griekspoor.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '네덜란드 테니스의 에이스. 네덜란드 역대 최다 우승 기록을 갱신하고 있으며, 강력한 서브와 포핸드를 앞세운 공격적인 플레이가 특징입니다.',
        detailedProfile: {
            oneLineSummary: '네덜란드 테니스의 자존심, 홈 코트에서 무적에 가까운 "플라잉 더치맨".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇳🇱 "오렌지 군단의 에이스"</div>
                    <p>리하르트 크라이첵, 로빈 하세의 뒤를 잇는 네덜란드 테니스의 간판스타입니다. 특히 <strong>홈(네덜란드)에서 열리는 대회</strong>에서 유독 강한 모습을 보여주며 '홈 강자'의 면모를 과시합니다.</p>
                </div>
                <p>2023년 한 해에만 투어 2승을 거두며 세계 랭킹 20위권에 진입, 커리어 하이를 찍고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>큰 키에서 나오는 강력한 서브와 시원한 포핸드가 주무기입니다. 수비보다는 공격으로 주도권을 잡는 스타일입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🍊 탈론의 3가지 "오렌지 파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>강력한 서브:</strong> 첫 서브 성공률과 득점률이 매우 높습니다. 그의 서비스 게임을 브레이크하는 것은 쉽지 않습니다.</li>
                        <li><strong>포핸드 역크로스:</strong> 찬스 볼이 오면 주저 없이 포핸드로 돌아서서 역크로스 위너를 꽂습니다.</li>
                        <li><strong>홈 버프:</strong> 네덜란드 관중들의 응원을 받으면 경기력이 120% 상승하는 독특한 특징이 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '매우 강력하고 안정적임.' },
                { name: '포핸드 (Forehand)', score: 9, description: '결정구 능력이 탁월함.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '다혈질적인 면이 있어 감정 조절 필요.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '기복이 있지만 준수한 편.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적인 랠리 가능.' },
                { name: '움직임 (Movement)', score: 8, description: '큰 키에 비해 준수한 스피드.' }
            ],
            growthStory: `
                <p>테니스 가족(형들도 테니스 선수)에서 자라 자연스럽게 라켓을 잡았습니다. 챌린저 무대에서 '챌린저의 왕'이라 불릴 만큼 압도적인 성적(단일 시즌 8회 우승)을 거두고 ATP 투어에 입성했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 로즈말렌 오픈 결승 vs 조던 톰슨',
                date: '2023. 06. 18',
                description: '홈인 네덜란드 잔디 코트에서 열린 대회. 결승에서 접전 끝에 우승을 차지하며 자국 팬들을 열광시켰습니다. 이 우승으로 그는 하드, 잔디 코트 모두에서 우승 타이틀을 보유하게 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "사자후" 세리머니</div>
                    <p>중요한 포인트를 따거나 승리했을 때 포효하는 모습이 사자를 연상시킵니다. 열정적인 제스처와 파이팅으로 경기장 분위기를 뜨겁게 만듭니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 20 안착을 노린다"</strong></p>
                <p>꾸준히 시드권(32위 이내)을 유지하며 그랜드슬램 3회전 이상을 노리고 있습니다. 강자들과 대등한 경기를 펼치며 '자이언트 킬러'의 본능을 보여주고 있습니다.</p>
            `,
            faq: [
                {
                    question: '이름 발음이 어렵습니다.',
                    answer: '네덜란드어 발음이라 까다롭습니다. 한국에서는 "탈론 그릭스푸어" 또는 "크리에크스푸르"로 표기는 하지만, 현지 발음은 "크리크스푸어"에 가깝습니다.'
                },
                {
                    question: '챌린저 투어 기록은 무엇인가요?',
                    answer: '그는 2021년 한 해 동안 챌린저 대회에서 무려 8번이나 우승하며 단일 시즌 최다 우승 기록을 세웠습니다. 이는 그가 ATP 투어 레벨로 올라갈 준비가 완벽히 되었음을 증명하는 사건이었습니다.'
                },
                {
                    question: '형제가 모두 테니스 선수인가요?',
                    answer: '네, 쌍둥이 형제인 스콧과 형 케빈 모두 테니스 선수 활동을 했습니다. 테니스 집안의 DNA를 물려받았습니다.'
                }
            ]
        }
    },
    'nicolas-jarry': {
        name: '니콜라스 자리', nameEn: 'Nicolas Jarry', country: 'Chile', countryFlag: '🇨🇱', image: '/images/players/nicolas-jarry.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '칠레의 거인. 2미터에 가까운 키에서 뿜어져 나오는 압도적인 서브와 포핸드는 투어에서 가장 상대하기 까다로운 무기 중 하나입니다.',
        detailedProfile: {
            oneLineSummary: '201cm의 "칠레산 거인", 내려꽂는 서브와 포핸드로 상대를 부숴버리는 파괴자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏔️ 안데스산맥 같은 "높이의 테니스"</div>
                    <p>니콜라스 자리는 201cm의 장신에서 나오는 타점 높은 서브와 포핸드로 상대를 압도합니다. 도핑 징계로 랭킹이 소멸되었다가 다시 Top 20까지 올라온 <strong>불굴의 의지</strong>의 아이콘이기도 합니다.</p>
                </div>
                <p>2024년 로마 마스터스 결승에 오르며 칠레 테니스의 영웅 곤잘레스와 마수의 계보를 잇고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"초공격적 빅 서버 (Ultra-Aggressive Big Server)"</strong></p>
                <p>랠리를 길게 가져가는 것을 좋아하지 않습니다. 서브 앤 포핸드 한두 방으로 포인트를 끝내는 '원투 펀치'가 주무기입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔨 자리의 3가지 "해머 샷"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>고공 폭격 서브:</strong> 높은 타점에서 내리꽂는 서브는 속도와 각도 모두 위협적입니다. 세컨드 서브도 킥 서브로 높게 튀어 올라 리턴하기 힘듭니다.</li>
                        <li><strong>체중 실린 포핸드:</strong> 긴 팔을 이용해 휘두르는 포핸드는 묵직한 돌덩이 같습니다. 제대로 맞으면 수비가 불가능합니다.</li>
                        <li><strong>네트 장악:</strong> 큰 키와 긴 리치를 활용해 네트 앞을 가로막으면 상대는 패싱 샷을 칠 공간이 없어집니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '투어 최정상급 높이와 위력.' },
                { name: '파워 (Power)', score: 10, description: '피지컬에서 나오는 순수 파워.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '한 방 해결 능력 최고.' },
                { name: '멘탈 (Mental)', score: 8, description: '어려움을 극복하며 강해짐.' },
                { name: '이동 (Movement)', score: 6.5, description: '장신이라 순발력은 다소 부족.' },
                { name: '리턴 (Return)', score: 7, description: '공격적인 리턴을 시도하나 에러 존재.' }
            ],
            growthStory: `
                <p>칠레의 테니스 명문가에서 태어났습니다. 할아버지가 윔블던 챔피언 출신입니다. 2019년 첫 투어 우승 후 도핑 위반(오염된 보충제)으로 11개월 자격 정지를 당하며 랭킹이 사라졌습니다.</p>
                <p>그러나 바닥부터 다시 시작하여 챌린저를 거쳐 ATP 투어에 복귀, 2023년 제네바, 산티아고 우승으로 완벽하게 부활했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 로마 마스터스 4강 vs 토미 폴',
                date: '2024. 05. 17',
                description: '생애 첫 마스터스 1000 결승 진출을 확정 지은 경기. 3세트 접전 끝에 승리하며 포효했습니다. 이 대회에서 즈베레프, 치치파스 등을 연이어 격파하며 "자이언트 킬러"의 명성을 떨쳤습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👨‍👩‍👦 "가족의 힘"</div>
                    <p>투어를 다닐 때 항상 아내, 어린 두 아들과 함께합니다. 승리 후 코트 위에서 아이들을 안아주는 모습이 자주 포착되어 '가정적인 아빠'의 이미지를 보여줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"커리어 하이 시즌"</strong></p>
                <p>2024년 로마 마스터스 준우승으로 세계 랭킹 10위권 진입을 눈앞에 뒀습니다. 클레이뿐만 아니라 하드 코트에서도 강력함을 증명하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '도핑 징계는 어떻게 된 건가요?',
                    answer: '2020년 소변 검사에서 금지 약물 성분이 검출되었으나, 고의성이 없었고 브라질의 제약사에서 만든 오염된 비타민 보충제 때문임이 입증되었습니다. 징계 기간이 11개월로 줄었지만 랭킹 포인트가 모두 소멸되어 바닥부터 다시 시작해야 했습니다.'
                },
                {
                    question: '할아버지가 유명한 선수인가요?',
                    answer: '네, 그의 외할아버지 하이메 필롤(Jaime Fillol)은 세계 랭킹 14위까지 올랐던 칠레의 레전드이며, 데이비스컵 결승까지 진출시켰습니다. 자리 역시 할아버지의 DNA를 물려받았습니다.'
                },
                {
                    question: '가장 좋아하는 코트는 어디인가요?',
                    answer: '남미 선수답게 클레이 코트를 가장 선호합니다. 공이 높게 튀어 오르는 클레이 코트는 그의 높은 타점 공격을 더욱 위력적으로 만들어줍니다.'
                }
            ]
        }
    },
    'alejandro-davidovich-fokina': {
        name: '알레한드로 다비도비치 포키나', nameEn: 'Alejandro Davidovich Fokina', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/alejandro-davidovich-fokina.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '다이빙 샷의 장인. 코트 위에서 몸을 아끼지 않는 허슬 플레이와 팬들을 열광시키는 쇼맨십으로 유명한 스페인의 재능입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위를 날아다니는 "다이빙 샷"의 달인, 예측 불가능한 스페인의 야생마.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐬 "코트 위의 돌고래"</div>
                    <p>다른 선수들은 포기할 공을 몸을 날려 받아내는 <strong>다이빙 샷</strong>이 그의 트레이드마크입니다. 클레이 코트뿐만 아니라 하드 심지어 잔디 코트에서도 다이빙을 서슴지 않는 열정을 보여줍니다. "Foki"라는 애칭으로 불리며 팬들에게 즐거움을 선사합니다.</p>
                </div>
                <p>주니어 윔블던 챔피언 출신으로, 2022년 몬테카를로 마스터스에서 조코비치를 꺾고 결승에 오르며 잠재력을 폭발시켰습니다.</p>
            `,
            playStyle: `
                <p><strong>"창의적 공격형 베이스라이너"</strong></p>
                <p>정형화되지 않은, 날것 그대로의 테니스를 구사합니다. 드롭샷을 매우 자주 시도하며, 언더암 서브도 기습적으로 사용합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎭 포키의 3가지 "서프라이즈"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>무한 드롭샷:</strong> 투어에서 드롭샷을 가장 사랑하는 선수 중 한 명입니다. 상대가 베이스라인 뒤로 물러나면 여지없이 짧은 공을 놓습니다.</li>
                        <li><strong>곡예사 수비:</strong> 몸을 사리지 않는 다이빙과 슬라이딩으로 믿을 수 없는 수비 장면을 만들어냅니다. 하이라이트 필름 제조기입니다.</li>
                        <li><strong>감정 표현:</strong> 기쁠 때나 화날 때나 감정을 숨기지 않습니다. 라켓을 던지거나 포효하는 등 다혈질적인 면모도 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 9.5, description: '뻔한 샷을 거부함.' },
                { name: '운동신경 (Athleticism)', score: 9.5, description: '다이빙 샷이 가능한 유연성.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '다운더라인이 매우 날카로움.' },
                { name: '멘탈 (Mental)', score: 6.5, description: '감정 기복이 심해 자멸하기도 함.' },
                { name: '서브 (Serve)', score: 7.5, description: '평균적인 수준.' },
                { name: '체력 (Stamina)', score: 8, description: '마라톤 매치를 자주 함.' }
            ],
            growthStory: `
                <p>스페인 말라가에서 러시아인 아버지와 스웨덴인 어머니 사이에서 태어났습니다. 2017년 윔블던 주니어 우승을 차지하며 스페인 테니스의 유망주로 떠올랐습니다.</p>
                <p>프로 전향 후 꾸준히 성장하여 2022년 몬테카를로 준우승으로 세계적인 주목을 받았습니다. 동물 애호가로도 유명하며 유기견 입양 캠페인 'Adoptas.org'를 운영하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2022 몬테카를로 마스터스 2회전 vs 노박 조코비치',
                date: '2022. 04. 12',
                description: '그의 이름을 전 세계에 알린 경기. 세계 1위 조코비치를 상대로 끊임없는 드롭샷과 변칙 플레이로 괴롭힌 끝에 2-1 승리를 거뒀습니다. 이 승리를 발판으로 결승까지 진출하는 기염을 토했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐶 "동물 사랑꾼"</div>
                    <p>유기 동물을 돕는 재단(Adoptas.org)을 직접 설립하여 운영할 정도로 동물을 사랑합니다. 코트 밖에서의 따뜻한 마음씨가 팬들에게 큰 감동을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"안정감을 찾는 중"</strong></p>
                <p>폭발력은 입증되었으나 기복을 줄이는 것이 과제입니다. 2023년 캐나다 마스터스 4강 등 굵직한 성적을 내고 있으며, 멘탈만 잡히면 탑 10도 가능한 재능입니다.</p>
            `,
            faq: [
                {
                    question: '왜 하드 코트에서도 다이빙을 하나요?',
                    answer: '그는 "공을 살리기 위해서라면 본능적으로 몸이 먼저 반응한다"고 말합니다. 부상의 위험이 있지만, 그의 트레이드마크가 된 플레이 스타일입니다.'
                },
                {
                    question: '국적은 스페인인데 이름이 러시아식인가요?',
                    answer: '아버지가 러시아 출신 복서였고, 어머니도 러시아계 스웨덴인입니다. 부모님이 스페인에 정착하여 그를 낳았기 때문에 스페인 국적을 가지게 되었습니다.'
                },
                {
                    question: '언더암 서브를 자주 하나요?',
                    answer: '네, 닉 키리오스, 알렉산더 부블릭과 함께 투어에서 언더암 서브를 가장 잘 활용하는 선수 중 한 명입니다. 상대의 리턴 위치가 멀리 떨어져 있을 때 기습적으로 구사합니다.'
                }
            ]
        }
    },
    'alex-michelsen': {
        name: '알렉스 미첼슨', nameEn: 'Alex Michelsen', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/alex-michelsen.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국 테니스의 최신성. 190cm가 넘는 키에서 나오는 안정적인 서비스 게임과 나이답지 않은 침착한 경기 운영이 돋보이는 유망주입니다.',
        detailedProfile: {
            oneLineSummary: '미국 테니스의 미래, 193cm의 큰 키와 정교한 백핸드를 겸비한 "지능형 거인".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎓 "대학 대신 프로를 선택한 승부사"</div>
                    <p>원래 조지아 대학 진학 예정이었으나, 2023년 뉴포트 대회 준우승을 계기로 전격 프로 전향을 선언했습니다. 데뷔하자마자 10대(Teenager) 돌풍을 일으키며, 미국의 앤디 로딕, 테일러 프리츠를 잇는 차세대 에이스로 주목받고 있습니다.</p>
                </div>
                <p>2004년생으로 매우 젊지만, 베테랑처럼 침착한 경기 운영이 돋보입니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 & 베이스라이너 (Big Server & Baseliner)"</strong></p>
                <p>큰 키(193cm)를 활용한 강력한 서브와 안정적인 양손 백핸드가 강점입니다. 특히 백핸드 다운더라인은 그의 필살기입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🧠 미첼슨의 3가지 "스마트 웨폰"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>정밀한 백핸드:</strong> 보통 키가 큰 선수는 움직임이 둔하거나 백핸드가 약한 경우가 많은데, 미첼슨은 백핸드 수비와 공격 모두 수준급입니다.</li>
                        <li><strong>플랫 서브:</strong> 간결한 폼에서 나오는 플랫 서브는 속도가 빠르고 묵직합니다.</li>
                        <li><strong>리턴 능력:</strong> 상대의 서브를 한 발 앞에서 차단하는 리턴 능력이 뛰어나 브레이크 기회를 잘 만듭니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 8.5, description: '큰 키에서 나오는 타점 높은 서브.' },
                { name: '백핸드 (Backhand)', score: 9, description: '가장 자신 있는 샷.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '나이답지 않은 침착함.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '아직은 다소 기복이 있음.' },
                { name: '이동 (Movement)', score: 8, description: '장신치고는 민첩함.' },
                { name: '경험 (Experience)', score: 7, description: '아직 성장 중인 신예.' }
            ],
            growthStory: `
                <p>캘리포니아 출신으로 부모님이 모두 대학 테니스 선수였습니다. 어릴 때부터 체계적인 훈련을 받았고, 2023년 윔블던 주니어 복식 우승을 차지했습니다.</p>
                <p>프로 전향 직후 챌린저 우승과 ATP 투어 준우승을 기록하며 세계 랭킹 100위 안에 최단기간 진입한 선수 중 하나가 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2023 뉴포트 오픈 준결승 vs 존 이스너',
                date: '2023. 07. 22',
                description: '미국 테니스의 전설이자 서브 킹인 이스너를 상대로 승리하며 결승에 진출했습니다. 이 경기는 세대교체를 상징하는 매치로 회자됩니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏄‍♂️ "캘리포니아 쿨 가이"</div>
                    <p>경기 중 감정 변화가 크지 않고 항상 쿨한 표정을 유지합니다. 승리 후에도 담담하게 기뻐하는 모습이 오히려 팬들에게 신선한 매력으로 다가옵니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"무서운 10대"</strong></p>
                <p>2024년에도 꾸준히 투어 본선에서 활약하며 경험을 쌓고 있습니다. 피지컬이 완성되면 더욱 무서운 선수가 될 것입니다.</p>
            `,
            faq: [
                {
                    question: '대학에 가지 않은 것을 후회하나요?',
                    answer: '그는 "전혀 후회하지 않는다"고 확신에 차서 말했습니다. 투어 생활이 힘들지만 세계 최고의 선수들과 경쟁하는 것이 훨씬 즐겁다고 합니다.'
                },
                {
                    question: '가장 존경하는 선수는 누구인가요?',
                    answer: '어릴 때부터 로저 페더러를 동경했다고 합니다. 하지만 플레이 스타일은 노박 조코비치의 견고함을 닮고 싶어 합니다.'
                },
                {
                    question: '왜 백핸드가 강점인가요?',
                    answer: '양손 백핸드를 칠 때 체중 이동이 매우 자연스럽습니다. 이는 어릴 때부터 백핸드 위주로 훈련한 결과이며, 현대 테니스에서 필수적인 백핸드 랠리 싸움에서 우위를 점하게 해줍니다.'
                }
            ]
        }
    },
    'arthur-landercknech': {
        name: '아르튀르 랑데르크네슈', nameEn: 'Arthur Rinderknech', country: 'France', countryFlag: '🇫🇷', image: '/images/players/arthur-landercknech.png', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: '미국 대학 테니스(Texas A&M)를 평정하고 프로에 온 늦깍이 스타. 강력한 서브와 포핸드를 앞세운 공격적인 테니스를 구사합니다.',
        detailedProfile: {
            oneLineSummary: '미국 대학을 평정한 뒤 돌아온 프랑스 늦깎이 스타, 큰 키에서 뿜어져 나오는 파워 테니스.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎓 "대학 테니스(NCAA)의 전설"</div>
                    <p>프랑스 선수로는 드물게 미국 텍사스 A&M 대학으로 유학을 떠나 주장의 역할까지 맡으며 대학 무대를 평정했습니다. 졸업 후 프로에 데뷔한 늦깎이 선수지만, 성숙한 멘탈과 완성된 피지컬로 빠르게 투어에 안착했습니다.</p>
                </div>
                <p>어머니도 프로 테니스 선수였던 '테니스 금수저' 집안 출신입니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀한 서브 앤 포핸드"</strong></p>
                <p>196cm의 장신에서 나오는 강력한 서브가 주무기입니다. 짧게 넘어온 리턴을 강력한 포핸드로 마무리하는 패턴을 선호합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🤠 아르튀르의 3가지 "텍사스 스타일"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>대포알 서브:</strong> 큰 키를 이용한 플랫 서브는 에이스를 양산합니다. 그의 서비스 게임을 지키는 가장 큰 힘입니다.</li>
                        <li><strong>공격적인 리턴:</strong> 상대의 세컨드 서브를 베이스라인 안쪽에서 받아쳐 바로 주도권을 가져옵니다.</li>
                        <li><strong>두둑한 배짱:</strong> 대학 시절 수많은 단체전 경험 덕분에 타이브레이크나 접전 상황에서 쉽게 흔들리지 않습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '확실한 득점원.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '위력적이고 무거움.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '풍부한 경험에서 나오는 여유.' },
                { name: '백핸드 (Backhand)', score: 7, description: '안정적이나 공격 옵션은 적음.' },
                { name: '이동 (Movement)', score: 7.5, description: '장신치고 준수함.' },
                { name: '네트 (Net)', score: 8, description: '복식 경험이 많아 발리가 좋음.' }
            ],
            growthStory: `
                <p>프랑스 생가생 출신으로, 어머니가 전 WTA 선수였습니다. 주니어 시절 큰 두각을 나타내지 못하자 미국 유학을 선택했고, 이것이 신의 한 수가 되었습니다. 대학 졸업 후 25세가 다 되어서야 Top 100에 진입했지만, 이후 꾸준한 상승세를 보여주고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2022 애들레이드 인터내셔널 2 결승 진출',
                date: '2022. 01. 15',
                description: '생애 첫 ATP 투어 결승 진출. 비록 우승은 놓쳤지만, 이 대회 활약으로 세계 랭킹 50위권에 안정적으로 진입했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎸 "록스타 비주얼"</div>
                    <p>긴 머리와 수염, 그리고 196cm의 큰 키는 마치 록 밴드의 보컬을 연상시킵니다. 코트 위에서의 카리스마 넘치는 모습이 남성 팬들에게 인기가 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"믿고 쓰는 프랑스 용병"</strong></p>
                <p>데이비스컵 등 국가대항전에서 프랑스 대표로 자주 선발되며, 투어에서도 꾸준히 2~3회전에 진출하는 안정적인 실력을 보여주고 있습니다.</p>
            `,
            faq: [
                {
                    question: '미국 영주권이 있나요?',
                    answer: '아니요, 프랑스 국적입니다. 하지만 텍사스에서 4년간 대학 생활을 했기 때문에 영어에 능통하고 미국 문화에 익숙합니다. 그래서 미국 대회에서 홈 선수 같은 응원을 받기도 합니다.'
                },
                {
                    question: '이름 철자가 왜 복잡한가요?',
                    answer: '성은 독일계 이름인 Rinderknech(린더크네슈)입니다. 발음하기 어려워 팬들은 보통 "Arthur"라고 부릅니다. *참고: 기존 데이터의 오타(Landercknech)는 수정되었습니다.*'
                },
                {
                    question: '주무기는 무엇인가요?',
                    answer: '단연 서브입니다. 큰 키에서 내려꽂는 서브는 속도와 각도가 훌륭하여, 자신의 서비스 게임을 쉽게 지켜나가는 원동력이 됩니다.'
                }
            ]
        }
    },
    'brandon-nakashima': {
        name: '브랜든 나카시마', nameEn: 'Brandon Nakashima', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/brandon-nakashima.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '기계 같은 정밀함. 감정을 드러내지 않는 포커페이스와 기복 없는 백핸드 스트로크로 넥스트젠 파이널스 우승을 차지한 실력파입니다.',
        detailedProfile: {
            oneLineSummary: '감정을 드러내지 않는 "포커페이스", 기계처럼 정교한 백핸드 스트로크의 소유자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤖 "아이스 맨 (Ice Man)"</div>
                    <p>브랜든 나카시마는 경기 중 어떤 상황에서도 표정 변화가 없습니다. 이기고 있어도, 지고 있어도 침착함을 유지하는 그의 <strong>강철 멘탈</strong>은 상대에게 큰 압박감을 줍니다. 2022년 넥스트젠 ATP 파이널스에서 전승 우승을 차지하며 차세대 스타임을 증명했습니다.</p>
                </div>
                <p>일본계 미국인 아버지와 베트남계 어머니 사이에서 태어난 아시아계 미국인으로, 아시아 팬들에게도 많은 관심을 받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"정밀 기계 같은 베이스라이너"</strong></p>
                <p>화려한 위너보다는 실수를 하지 않는 안정적인 플레이를 추구합니다. 특히 양손 백핸드는 투어 전체에서도 손꼽히는 정확도를 자랑합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🧊 나카시마의 3가지 "쿨링 포인트"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>레이저 백핸드:</strong> 직선으로 뻗어나가는 백핸드 다운더라인은 그의 시그니처 샷입니다. 에러가 거의 없고 코스를 완벽하게 찌릅니다.</li>
                        <li><strong>안정적인 리턴:</strong> 무리하게 공격하기보다는 상대 발 밑으로 정확하게 보내 랠리를 유도합니다.</li>
                        <li><strong>평정심:</strong> 심판 판정에 항의하거나 라켓을 던지는 모습을 거의 볼 수 없습니다. 항상 차분하게 다음 포인트를 준비합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 9.5, description: '기계처럼 정확함.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '흔들리지 않는 편안함.' },
                { name: '안정성 (Consistency)', score: 9, description: '언포스드 에러가 적음.' },
                { name: '서브 (Serve)', score: 8, description: '파워보다는 코스 위주.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '백핸드에 비해서는 평범함.' },
                { name: '운동신경 (Athleticism)', score: 8, description: '효율적인 움직임.' }
            ],
            growthStory: `
                <p>캘리포니아 샌디에이고 출신입니다. 3살 때 공원에서 테니스를 시작했습니다. 버지니아 대학교(UVA)에 진학하여 1학년임에도 ACC 올해의 신인상을 수상할 만큼 압도적인 실력을 보여준 뒤 프로로 전향했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 넥스트젠 ATP 파이널스 결승 vs 이리 레헤츠카',
                date: '2022. 11. 12',
                description: '21세 이하 최강자를 가리는 대회. 라운드 로빈부터 결승까지 단 한 경기도 패하지 않고 전승 우승을 달성했습니다. 이 우승으로 그는 확실한 "넥스트젠"의 리더로 인정받았습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧘‍♂️ "수도승 같은 절제미"</div>
                    <p>묵묵히 테니스에만 집중하는 모습이 진지한 팬들에게 어필합니다. "테니스는 멘탈 게임"이라는 것을 가장 잘 보여주는 선수 모델입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"조용한 강자"</strong></p>
                <p>2023년 잠시 주춤했으나 2024년 들어 다시 랭킹을 회복하고 있습니다. 화려하지 않지만 언제나 3회전, 16강에 오를 수 있는 저력을 가지고 있습니다.</p>
            `,
            faq: [
                {
                    question: '나카시마는 일본어를 할 줄 아나요?',
                    answer: '일본계 아버지를 뒀지만, 일본어를 유창하게 하지는 못한다고 합니다. 하지만 자신의 뿌리에 대해 자부심을 가지고 있으며, 일본 음식과 문화를 좋아한다고 밝혔습니다.'
                },
                {
                    question: '별명이 왜 "기계"인가요?',
                    answer: '플레이 스타일과 표정이 마치 프로그래밍된 로봇이나 기계처럼 오차 없이 정확하고 감정이 없기 때문에 붙여진 별명입니다. 긍정적인 의미의 별명입니다.'
                },
                {
                    question: '대학 생활은 얼마나 했나요?',
                    answer: '버지니아 대학교(UVA)를 1학기만 다니고 바로 프로로 전향했습니다. 짧은 기간임에도 대학 무대를 평정하고 더 큰 무대에 도전했습니다.'
                }
            ]
        }
    },
    'corentin-moutet': {
        name: '코랑탱 무테', nameEn: 'Corentin Moutet', country: 'France', countryFlag: '🇫🇷', image: '/images/players/corentin-moutet.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '프랑스의 왼손잡이 마법사. 작은 체구지만 뛰어난 손감각과 드롭샷, 발리 등 다양한 기술로 상대를 괴롭히는 창의적인 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 "마법사", 상상 초월의 손감각과 창의력으로 상대를 농락하는 왼손잡이.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧙‍♂️ "예측 불허의 마법사"</div>
                    <p>코랑탱 무테는 테니스를 '점수 따기 게임'이 아닌 '창의력 대결'로 생각하는 듯합니다. 언더암 서브, 트위너(다리 사이 샷), 드롭샷 등 상상할 수 있는 모든 변칙 기술을 구사합니다. 작은 체구(175cm)를 극복하기 위해 개발한 그만의 독창적인 스타일은 관중들에게 항상 놀라움을 선사합니다.</p>
                </div>
                <p>피아노를 치고 랩을 하는 등 예술적인 재능도 뛰어나며, 코트 위에서의 다혈질적인 모습조차 하나의 캐릭터로 자리 잡았습니다.</p>
            `,
            playStyle: `
                <p><strong>"창의적 올라운더 (Creative All-Rounder)"</strong></p>
                <p>정석적인 랠리는 거의 찾아보기 힘듭니다. 상대의 힘을 이용하고, 공의 스피드보다는 회전과 코스를 조절하여 상대를 괴롭힙니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎩 무테의 3가지 "마술 쇼"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>신들린 드롭샷:</strong> 그의 드롭샷은 타의 추종을 불허합니다. 포핸드, 백핸드 가리지 않고 예상치 못한 순간에 툭 떨어뜨려 상대를 네트 앞으로 불러냅니다.</li>
                        <li><strong>왼손 스핀:</strong> 나달을 연상시키는 엄청난 회전량의 포핸드 톱스핀으로 상대를 베이스라인 밖으로 밀어냅니다.</li>
                        <li><strong>발리 센스:</strong> 네트 앞에서의 반응 속도와 손놀림이 매우 뛰어납니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '투어에서 가장 독창적임.' },
                { name: '터치 (Touch)', score: 10, description: '손끝 감각은 천재적.' },
                { name: '이동 (Movement)', score: 9, description: '매우 빠르고 민첩함.' },
                { name: '멘탈 (Mental)', score: 6, description: '쉽게 흥분하고 무너지는 경향.' },
                { name: '서브 (Serve)', score: 6.5, description: '키의 한계로 파워는 부족.' },
                { name: '파워 (Power)', score: 7, description: '힘보다는 기술로 승부.' }
            ],
            growthStory: `
                <p>파리 근교 뇌이쉬르센 출신으로 3살 때 테니스를 시작했습니다. 어릴 때부터 남들과 똑같은 테니스를 치는 것을 싫어했다고 합니다.</p>
                <p>주니어 시절부터 뛰어난 재능으로 주목받았으며, 2022년 US 오픈 16강에 오르며 그랜드슬램에서도 경쟁력이 있음을 증명했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 롤랑가로스 16강 진출',
                date: '2024. 06. 02',
                description: '홈 그라운드인 프랑스 오픈에서 열광적인 응원을 등에 업고 16강에 진출했습니다. 특히 야간 경기에서 보여준 쇼맨십과 투지는 파리 관중들을 미치게 만들었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 "래퍼 테니스 선수"</div>
                    <p>실제로 랩 앨범을 발매했을 정도로 음악에 진심입니다. 코트 위에서의 감정 표현이 풍부해서 호불호가 갈리지만, 지루할 틈을 주지 않는 엔터테이너임은 분명합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클레이 코트의 복병"</strong></p>
                <p>2024년 칠레 오픈 4강, 롤랑가로스 16강 등 특히 클레이 코트에서 좋은 성적을 내고 있습니다. Top 50 진입을 목표로 달리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '가장 좋아하는 샷은 무엇인가요?',
                    answer: '드롭샷입니다. 그는 "상대가 뛰어오는 모습을 보는 것이 즐겁다"고 농담처럼 말할 정도로 드롭샷 성애자입니다. 성공률 또한 매우 높습니다.'
                },
                {
                    question: '음악 활동도 병행하나요?',
                    answer: '네, 훈련이 없을 때는 작곡을 하고 가사를 씁니다. 자신의 유튜브에 뮤직비디오를 올리기도 하며, 음악이 테니스 스트레스를 해소하는 탈출구라고 합니다.'
                },
                {
                    question: '왜 한손 백핸드를 치다가 양손으로 바꿨나요?',
                    answer: '아니요, 그는 원래 두 손 백핸드를 칩니다. 하지만 종종 슬라이스를 칠 때나 수비 상황에서는 한 손을 놓으며 변칙적인 샷을 구사하여 헷갈리게 만듭니다.'
                }
            ]
        }
    },
    'flavio-cobolli': {
        name: '플라비오 코볼리', nameEn: 'Flavio Cobolli', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/flavio-cobolli.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 떠오르는 샛별. AS 로마 유스 출신의 축구 선수 경력을 가지고 있어 발놀림이 뛰어나며, 파이팅 넘치는 플레이가 인상적입니다.',
        detailedProfile: {
            oneLineSummary: 'AS 로마 유스 축구 선수 출신의 "테니스계 토티", 지치지 않는 체력의 이탈리안 전사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⚽ "축구 선수의 심장을 가진 테니스 선수"</div>
                    <p>이탈리아 명문 축구 클럽 <strong>AS 로마 유스팀</strong> 출신이라는 독특한 이력을 가지고 있습니다. 축구로 다져진 탄탄한 하체와 지치지 않는 체력, 그리고 이탈리아 특유의 열정이 코트 위에서 폭발합니다. 친구인 에도아르도 보브(축구 선수)와의 우정도 유명합니다.</p>
                </div>
                <p>2024년 랭킹이 급상승하며 이탈리아 테니스 황금세대의 새로운 주역으로 떠올랐습니다.</p>
            `,
            playStyle: `
                <p><strong>"지능적인 베이스라이너 (Intelligent Baseliner)"</strong></p>
                <p>엄청난 활동량을 바탕으로 끈질기게 수비하다가, 기회가 오면 강력한 포핸드로 역습을 가합니다. 경기 운영 능력이 나이에 비해 성숙합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🐺 코볼리의 3가지 "로마의 투지"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>철벽 수비:</strong> 축구 선수 출신답게 발이 매우 빠르고 스텝이 좋습니다. 코트 구석구석을 누비며 모든 공을 받아냅니다.</li>
                        <li><strong>포핸드 역습:</strong> 수비만 하는 것이 아닙니다. 상대의 공이 짧아지면 즉시 포핸드로 강력한 위너를 만들어냅니다.</li>
                        <li><strong>파이팅:</strong> 포인트 하나하나에 혼신의 힘을 다하며, 관중의 호응을 유도하는 능력이 탁월합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 9.5, description: '축구로 다져진 강철 체력.' },
                { name: '이동 (Movement)', score: 9.5, description: '풋워크가 매우 가벼움.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '주 득점원.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '포기하지 않는 투지.' },
                { name: '서브 (Serve)', score: 7.5, description: '준수하지만 아주 강력하진 않음.' },
                { name: '경험 (Experience)', score: 7, description: '이제 막 투어에 안착함.' }
            ],
            growthStory: `
                <p>피렌체에서 태어났으나 로마에서 자랐습니다. 아버지가 전 프로 테니스 선수였지만, 어릴 때는 축구를 더 좋아했습니다. 하지만 13세 때 테니스로 진로를 바꿨고, 프랑스 오픈 주니어 복식 우승을 차지하며 재능을 증명했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 3회전 진출',
                date: '2024. 01. 17',
                description: '예선을 거쳐 본선에 올라와 3회전까지 진출하는 돌풍을 일으켰습니다. 특히 2회전에서 파벨 코토프를 꺾으며 전 세계 팬들에게 자신의 이름을 각인시켰습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐺 "로마의 아들"</div>
                    <p>몸에 AS 로마의 상징인 늑대 문신이 있습니다. AS 로마 축구팀의 열렬한 팬이며, 로마 팬들 역시 그를 전폭적으로 지지합니다. 테니스계의 다니엘레 데 로시 같은 존재가 되고 싶어 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 진입 돌풍"</strong></p>
                <p>2023년 말 넥스트젠 파이널스 출전에 이어 2024년에는 투어 대회에서 꾸준히 성적을 내며 세계 랭킹 30위권을 넘보고 있습니다. 성장세가 매우 가파릅니다.</p>
            `,
            faq: [
                {
                    question: '축구를 계속했다면 성공했을까요?',
                    answer: '그는 AS 로마 유스팀에서 오른쪽 윙백으로 뛰었습니다. 당시 코치들은 그가 프로 축구 선수가 될 재능이 충분했다고 평가합니다. 본인도 가끔 축구가 그립다고 하지만 테니스 선택을 후회하지 않는다고 합니다.'
                },
                {
                    question: '가장 좋아하는 선수는 누구인가요?',
                    answer: '노박 조코비치를 롤 모델로 삼고 있습니다. 그의 정신력과 수비 능력을 배우고 싶어 합니다.'
                },
                {
                    question: '별명은 무엇인가요?',
                    answer: '"Cobo"라고 불립니다. 이탈리아어권에서 흔한 애칭이며, 팬들도 경기장에서 "Forza Cobo!"라고 외칩니다.'
                }
            ]
        }
    },
    'francisco-cerundolo': {
        name: '프란시스코 세룬돌로', nameEn: 'Francisco Cerundolo', country: 'Argentina', countryFlag: '🇦🇷', image: '/images/players/francisco-cerundolo.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '아르헨티나 No.1. 남미 특유의 클레이 코트 강점은 물론 하드 코트에서도 강력한 포핸드 위너를 쏟아내는 전천후 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '아르헨티나의 "포핸드 머신", 남미 선수는 클레이에만 강하다는 편견을 깬 올라운더.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇦🇷 "탱고보다 강렬한 포핸드"</div>
                    <p>후안 마르틴 델 포트로 이후 아르헨티나 최고의 포핸드를 가졌다는 평가를 받습니다. 동생인 후안 마누엘 세룬돌로와 함께 '형제 테니스 선수'로도 유명합니다. 남미 선수로는 드물게 잔디 코트(이스트본)에서도 우승하며 <strong>모든 코트에서 통하는 실력</strong>을 입증했습니다.</p>
                </div>
                <p>25세의 나이에 아르헨티나 에이스로 등극하며 남미 테니스의 자존심을 지키고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더 (Aggressive All-Rounder)"</strong></p>
                <p>베이스라인에서 물러나지 않고 적극적으로 공격을 시도합니다. 특히 포핸드 쪽으로 공이 오면 위너를 낼 확률이 매우 높습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🥩 세룬돌로의 3가지 "맛있는 샷"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>인사이드-아웃 포핸드:</strong> 그의 전매특허입니다. 코트 중앙에서 바깥쪽으로 휘어져 나가는 궤적은 상대가 쫓아가기 힘듭니다.</li>
                        <li><strong>드롭샷:</strong> 강력한 포핸드를 의식해 뒤로 물러난 상대를 드롭샷으로 요리합니다. 힘과 기교를 겸비했습니다.</li>
                        <li><strong>하드 코트 적응력:</strong> 클레이 코트 베이스지만, 빠른 템포의 하드 코트 테니스도 완벽하게 소화합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '투어 최상급 파괴력.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '침착하고 끈기 있음.' },
                { name: '적응력 (Adaptability)', score: 9, description: '잔디/하드/클레이 모두 우승 경험.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적인 받침대 역할.' },
                { name: '서브 (Serve)', score: 8, description: '평균 이상의 위력.' },
                { name: '이동 (Movement)', score: 8, description: '준수한 풋워크.' }
            ],
            growthStory: `
                <p>부에노스아이레스의 스포츠 가족(부모님 모두 테니스 코치)에서 태어났습니다. 미국 사우스캐롤라이나 대학에서 잠시 공부하다가 프로에 전념하기 위해 돌아왔습니다.</p>
                <p>2022년 마이애미 마스터스 4강에 오르며 혜성처럼 등장했고, 이후 바스타드 우승으로 첫 투어 타이틀을 획득했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 이스트본 인터내셔널 결승 vs 토미 폴',
                date: '2023. 07. 01',
                description: '아르헨티나 선수로는 28년 만에 잔디 코트 대회 우승을 차지한 역사적인 경기. "남미 선수는 잔디에 약하다"는 편견을 깨부수고 윔블던 직전 대회 챔피언에 올랐습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📚 "공부하는 선수"</div>
                    <p>프로 선수 생활을 하면서도 부에노스아이레스 대학에서 경제학을 공부하고 있습니다(온라인 수강). 은퇴 후에는 기업가가 되고 싶다는 야망을 가진 지적인 선수입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"아르헨티나 1옵션"</strong></p>
                <p>Top 20~30위권을 꾸준히 유지하며 아르헨티나 테니스를 이끌고 있습니다. 그랜드슬램 16강 이상의 성적을 목표로 하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '동생도 테니스 선수인가요?',
                    answer: '네, 3살 어린 동생 후안 마누엘 세룬돌로 역시 투어 선수입니다. 동생은 2021년 코르도바 오픈에서 우승하며 형보다 먼저 투어 타이틀을 땄지만, 랭킹은 현재 형이 더 높습니다.'
                },
                {
                    question: '델 포트로와 비슷한가요?',
                    answer: '강력한 포핸드가 주무기라는 점은 비슷하지만, 세룬돌로가 좀 더 기동력이 좋고 다양한 코트 커버 능력을 보여줍니다. 물론 파괴력 면에서는 델 포트로가 전설적입니다.'
                },
                {
                    question: '왜 경제학을 공부하나요?',
                    answer: '테니스, 운동 말고 다른 삶에 대해서도 배우고 싶어서라고 합니다. 학업은 그에게 테니스 스트레스에서 벗어나게 해주는 또 다른 즐거움이라고 합니다.'
                }
            ]
        }
    },
    'jakub-mensik': {
        name: '야쿠프 멘시크', nameEn: 'Jakub Mensik', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jakub-mensik.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '체코의 10대 돌풍. 193cm의 큰 키와 강력한 서브, 그리고 나달을 꺾는 등 대담한 플레이로 투어에 신선한 충격을 주고 있습니다.',
        detailedProfile: {
            oneLineSummary: '193cm의 피지컬과 2005년생의 패기, 조코비치도 인정한 체코의 "차세대 서브 킹".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 "체코 테니스의 황금알"</div>
                    <p>야쿠프 멘시크는 2024년 <strong>도하 오픈에서 앤디 머레이, 안드레이 루블레프, 가엘 몽피스를 연파하고 결승에 진출</strong>하며 전 세계를 경악하게 했습니다. 18세의 나이에 보여준 이 퍼포먼스는 그가 단순한 유망주가 아닌, 당장 투어를 위협할 실력자임을 증명했습니다. 노박 조코비치 또한 그의 재능을 극찬했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"빅 서버 & 파워 베이스라이너"</strong></p>
                <p>193cm의 장신을 100% 활용합니다. 시속 220km를 넘나드는 대포알 서브는 그의 가장 큰 무기이며, 리턴이 짧게 오면 강력한 포핸드로 마무리합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 멘시크의 3가지 "성장 동력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>서브 에이스:</strong> 중요한 순간마다 터지는 서브 에이스는 경기 흐름을 단숨에 가져옵니다.</li>
                        <li><strong>두려움 없는 공격:</strong> 상대가 누구든 주눅 들지 않고 자신의 스윙을 다 합니다. 잃을 게 없다는 10대의 패기가 무섭습니다.</li>
                        <li><strong>빠른 학습 능력:</strong> 투어 레벨의 경기를 치를수록 경기 운영 능력이 눈에 띄게 발전하고 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '이미 투어 상위권 레벨.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '파괴력이 뛰어남.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '겁 없는 10대의 자신감.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적이나 개선 여지 있음.' },
                { name: '이동 (Movement)', score: 7.5, description: '키에 비해 나쁘지 않음.' },
                { name: '경험 (Experience)', score: 6.5, description: '아직은 경험치를 쌓는 중.' }
            ],
            growthStory: `
                <p>2022년 호주 오픈 주니어 준우승으로 두각을 나타냈습니다. 이후 챌린저 무대를 빠르게 거쳐 2024년 본격적으로 ATP 투어에 합류했습니다. 신체 조건이 워낙 좋아 "제2의 베르디흐"가 아닌, 그를 능가할 재목으로 평가받습니다.</p>
            `,
            signatureMatch: {
                title: '2024 카타르 도하 오픈 4강 vs 가엘 몽피스',
                date: '2024. 02. 23',
                description: '베테랑 몽피스를 상대로 3세트 접전 끝에 승리하며 생애 첫 ATP 투어 결승에 진출했습니다. 이 승리로 그는 2005년생 이후 출생자 중 최초로 ATP 투어 결승에 오른 선수가 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📱 "Z세대 아이콘"</div>
                    <p>SNS를 즐겨 하고 팬들과 소통하는 것을 좋아하는 전형적인 Z세대입니다. 경기 후 카메라 렌즈에 재치 있는 문구를 적는 쇼맨십도 갖추고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 진입 목표"</strong></p>
                <p>랭킹이 수직 상승하여 100위권 안에 안착했습니다. 부상 없이 시즌을 치른다면 연말에는 50위권 진입도 충분히 가능해 보입니다.</p>
            `,
            faq: [
                {
                    question: '키가 계속 크고 있나요?',
                    answer: '현재 프로필상 193cm이지만, 아직 성장기라 조금 더 클 수도 있다고 합니다. 큰 키는 서브에 유리하지만, 무릎 부상 등 관리가 필요합니다.'
                },
                {
                    question: '조코비치와 어떤 관계인가요?',
                    answer: '멘시크는 조코비치를 우상으로 꼽으며, 조코비치 역시 그를 베오그라드 테니스 센터로 초대해 함께 훈련하며 조언을 아끼지 않았습니다. 멘시크의 성장에 조코비치의 멘토링이 큰 역할을 했습니다.'
                }
            ]
        }
    },
    'jaume-munar': {
        name: '자우메 무나르', nameEn: 'Jaume Munar', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/jaume-munar.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '라파엘 나달 아카데미 수석 졸업생. 전형적인 스페인 클레이 코트 스페셜리스트로, 끈질긴 수비와 안정적인 스트로크가 강점입니다.',
        detailedProfile: {
            oneLineSummary: '라파엘 나달 아카데미가 배출한 "클레이의 정석", 끈질긴 수비로 상대를 질식시키는 스페인 전사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏫 "나달 아카데미의 수석 제자"</div>
                    <p>자우메 무나르는 라파엘 나달 아카데미 출신 선수들 중 가장 성공적으로 프로에 안착한 케이스 중 하나입니다. 나달과 수없이 연습 경기를 치르며, 스페인 선수 특유의 <strong>결코 포기하지 않는 수비 DNA</strong>를 완벽하게 흡수했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"클레이 코트 그라인더 (Clay Court Grinder)"</strong></p>
                <p>베이스라인 뒤에서 끈질기게 공을 받아넘기며 상대의 실수를 유도합니다. 화려한 공격보다는 탄탄한 방패로 승부합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🛡️ 무나르의 3가지 "철벽 방어"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>무한 랠리:</strong> 실수를 거의 하지 않습니다. 상대가 지쳐서 에러를 할 때까지 공을 넘깁니다.</li>
                        <li><strong>드롭샷:</strong> 베이스라인 싸움만 하는 것이 아니라, 기습적인 드롭샷으로 상대를 앞뒤로 흔듭니다.</li>
                        <li><strong>투지:</strong> 나달처럼 매 포인트 주먹을 불끈 쥐며 파이팅을 외칩니다. 멘탈적으로 매우 단단합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 9, description: '쉽게 뚫리지 않는 벽.' },
                { name: '체력 (Stamina)', score: 9, description: '클레이 전문다운 지구력.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '포기를 모름.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '회전량이 많음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적임.' },
                { name: '서브 (Serve)', score: 6.5, description: '위력적이지는 않음.' }
            ],
            growthStory: `
                <p>스페인 마요르카(나달의 고향) 근처 출신입니다. 어릴 때부터 나달을 우상으로 삼았고, 그의 아카데미에서 체계적인 훈련을 받았습니다. 넥스트젠 파이널스 4강에 오르며 가능성을 보였고, 현재는 투어의 든든한 허리 역할을 하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2022 인디언 웰스 2회전 vs 파블로 카레뇨 부스타',
                date: '2022. 03. 13',
                description: '같은 스페인 선배이자 Top 20 랭커인 카레뇨 부스타를 상대로 2시간 30분이 넘는 혈투 끝에 역전승을 거뒀습니다. 끈기와 체력에서 승리한 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💪 "리틀 나달"의 열정</div>
                    <p>경기 스타일뿐만 아니라 제스처나 루틴에서도 나달의 향기가 느껴집니다. 클래식한 스페인 테니스를 좋아하는 팬들에게 사랑받습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클레이 시즌을 노린다"</strong></p>
                <p>매년 클레이 시즌(4월~6월)에 랭킹 포인트를 싹쓸이합니다. 남미 골든 스윙과 유럽 클레이 대회에서 항상 우승 후보를 괴롭히는 다크호스입니다.</p>
            `,
            faq: [
                {
                    question: '나달과 실제로 친한가요?',
                    answer: '네, 매우 가깝습니다. 나달은 무나르를 아끼는 후배로 생각하며, 복식 경기에 함께 출전하기도 했습니다. 무나르에게 나달은 영원한 멘토입니다.'
                },
                {
                    question: '하드 코트 성적은 어떤가요?',
                    answer: '여전히 클레이 코트 성적이 훨씬 좋지만, 하드 코트에서도 점차 경쟁력을 갖추고 있습니다. 발이 빨라 하드 코트 수비도 나쁘지 않습니다.'
                }
            ]
        }
    },
    'jiri-lehecka': {
        name: '이리 레헤츠카', nameEn: 'Jiri Lehecka', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/jiri-lehecka.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '체코 테니스의 부활을 알리는 신호탄. 토마스 베르디흐를 연상시키는 깔끔하고 강력한 플랫성 스트로크로 빠르게 랭킹을 끌어올렸습니다.',
        detailedProfile: {
            oneLineSummary: '토마스 베르디흐의 후계자, 가장 깔끔하고 강력한 스트로크 폼을 가진 체코의 "쿨 가이".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💎 "가장 아름다운 폼의 소유자"</div>
                    <p>이리 레헤츠카의 샷 폼은 군더더기 없이 깔끔합니다. 2023년 호주 오픈 8강, 2024년 마드리드 마스터스 4강(나달을 꺾으며 진출) 등 굵직한 성적을 내며 체코 남자 테니스의 새로운 에이스로 등극했습니다.</p>
                </div>
                <p>전 세계 4위 토마스 베르디흐가 그의 멘토이자 코치 역할을 하며 챔피언의 노하우를 전수하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"모던 오펜시브 베이스라이너"</strong></p>
                <p>플랫성 구질의 강력한 스트로크로 상대를 좌우로 흔듭니다. 힘을 들이지 않는 듯한 부드러운 스윙에서 엄청난 파워가 나옵니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚔️ 레헤츠카의 3가지 "크리스털 블레이드"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>양손 백핸드:</strong> 투어에서 손꼽히는 명품 백핸드입니다. 크로스, 다운더라인 자유자재로 구사하며 에러가 적습니다.</li>
                        <li><strong>포핸드 위너:</strong> 찬스 공을 놓치지 않고 코트 구석으로 찔러 넣는 결정력이 탁월합니다.</li>
                        <li><strong>네트 플레이:</strong> 복식 경험을 바탕으로 한 발리 능력도 준수하여, 마무리 짓는 능력이 좋습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 9.5, description: '매우 교과서적이고 강력함.' },
                { name: '포핸드 (Forehand)', score: 9, description: '부드러운 스윙에서 나오는 파워.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '냉정하고 차분함.' },
                { name: '서브 (Serve)', score: 8.5, description: '코스 공략이 좋음.' },
                { name: '이동 (Movement)', score: 8, description: '균형 잡힌 풋워크.' },
                { name: '경험 (Experience)', score: 8, description: '큰 경기 경험 축적 중.' }
            ],
            growthStory: `
                <p>수영과 육상 선수 출신의 부모님에게서 뛰어난 운동 신경을 물려받았습니다. 등산과 하이킹을 즐기며 하체를 단련했습니다. 2022년 넥스트젠 파이널스 준우승으로 주목받기 시작했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 마드리드 오픈 16강 vs 라파엘 나달',
                date: '2024. 05. 01',
                description: '클레이 황제 나달의 마드리드 고별전이 될 수도 있었던 경기. 레헤츠카는 전혀 주눅 들지 않고 압도적인 경기력을 보여주며 2-0 완승을 거뒀습니다. 나달조차 "놀라운 레벨"이라며 칭찬했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏔️ "아웃도어 보이"</div>
                    <p>테니스 코트 밖에서는 등산, 스키 등 아웃도어 스포츠를 즐기는 건강한 청년입니다. 과묵하고 진중한 성격이 팬들에게 신뢰감을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 20 안착"</strong></p>
                <p>부상으로 잠시 공백기가 있었으나 복귀 후 여전한 클래스를 보여주고 있습니다. 그랜드슬램 4강을 목표로 하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '베르디흐와 어떤 사이인가요?',
                    answer: '같은 체코 출신 대선배인 베르디흐는 레헤츠카의 우상이자 멘토입니다. 베르디흐는 레헤츠카의 팀에 합류하여 기술적인 조언뿐만 아니라 투어 생활의 노하우를 전수해주고 있습니다.'
                },
                {
                    question: '가장 좋아하는 코트는?',
                    answer: '그는 하드 코트를 가장 선호하지만, 나달을 꺾었듯이 클레이 코트에서도 강력한 모습을 보여줍니다. 전천후 플레이어로 성장하고 있습니다.'
                }
            ]
        }
    },
    'joao-fonseca': {
        name: '주앙 폰세카', nameEn: 'Joao Fonseca', country: 'Brazil', countryFlag: '🇧🇷', image: '/images/players/joao-fonseca.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '브라질의 슈퍼 원더키드. 2006년생으로 넥스트젠의 선두주자이며, 리오 오픈에서 최연소 8강에 오르는 등 폭발적인 잠재력을 보여주고 있습니다.',
        detailedProfile: {
            oneLineSummary: '브라질이 기다려온 "Next 쿠에르텐", 2006년생이라는 게 믿기지 않는 파워 히터.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇷 "브라질의 새로운 희망"</div>
                    <p>주앙 폰세카는 <strong>2023 US 오픈 주니어 챔피언</strong> 출신으로, 전 세계가 주목하는 최고의 유망주 중 한 명입니다. 2024년 리오 오픈(ATP 500)에서 17세의 나이로 8강에 오르는 파란을 일으키며, 브라질 테니스 전설 구스타보 쿠에르텐의 후계자로 지목받았습니다.</p>
                </div>
                <p>원래 미국 대학(UVA) 진학을 고려했으나, 투어에서의 성공 가능성을 확인하고 <strong>과감하게 프로 전향</strong>을 선언했습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>야닉 시너를 연상시키는 시원시원한 스트로크가 특징입니다. 어린 나이임에도 공을 때리는 파워가 성인 선수들에게 전혀 밀리지 않습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🐆 폰세카의 3가지 "재규어 본능"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>킬러 포핸드:</strong> 그의 포핸드는 이미 투어급 무기입니다. 찬스 볼을 놓치지 않고 위너로 연결하는 결정력이 탁월합니다.</li>
                        <li><strong>빠른 템포:</strong> 공을 기다리지 않고 앞에서 잡아채는 타이밍이 좋습니다. 이는 상대의 시간을 뺏는 효과가 있습니다.</li>
                        <li><strong>스타성:</strong> 홈 관중의 열광적인 응원을 부담스러워하기보다 즐기는 스타 기질을 타고났습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9, description: '나이 대비 최상급 파워.' },
                { name: '잠재력 (Potential)', score: 10, description: '세계를 정복할 재능.' },
                { name: '스타성 (Star Power)', score: 9.5, description: '차세대 슈퍼스타 예약.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이고 공격적임.' },
                { name: '서브 (Serve)', score: 8, description: '아직 더 발전 가능함.' },
                { name: '체력 (Stamina)', score: 7.5, description: '프로 무대 적응 중.' }
            ],
            growthStory: `
                <p>리오데자네이루 출신으로, 축구를 사랑하는 브라질 소년이었지만 테니스에 더 큰 재능을 보였습니다. 2023년 주니어 세계 랭킹 1위를 달성했고, 프로 무대에서도 거침없는 행보를 이어가고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2024 리오 오픈 1회전 vs 아르튀르 필스',
                date: '2024. 02. 20',
                description: '자신의 ATP 투어 첫 승리. 차세대 스타인 필스를 상대로 2-0 (6-0, 6-4) 완승을 거두며 충격적인 데뷔전을 치렀습니다. 1세트 베이글 스코어는 전 세계에 그의 이름을 알리는 계기가 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🕺 "쌈바 리듬의 테니스"</div>
                    <p>브라질 특유의 흥과 에너지가 넘칩니다. 잘생긴 외모와 시원한 플레이 스타일로 벌써부터 수많은 팬을 보유하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"프로 무대 적응 완료"</strong></p>
                <p>챌린저 대회와 투어 대회를 병행하며 빠르게 랭킹 포인트를 쌓고 있습니다. 2006년생 동갑내기 중 가장 앞서 나가는 선수입니다.</p>
            `,
            faq: [
                {
                    question: '대학 진학은 포기했나요?',
                    answer: '네, 원래 2024년 가을에 버지니아 대학(UVA)에 입학하기로 약속되어 있었으나, 리오 오픈에서의 활약 이후 프로 전향(상금 수령)을 공식 발표했습니다. 테니스에 전념하기 위한 결단이었습니다.'
                },
                {
                    question: '롤 모델은 누구인가요?',
                    answer: '역시나 야닉 시너와 카를로스 알카라스입니다. 그들의 공격적인 플레이 스타일을 배우고 싶어 합니다.'
                }
            ]
        }
    },
    'karen-khachanov': {
        name: '카렌 하차노프', nameEn: 'Karen Khachanov', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/karen-khachanov.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '파리의 마스터스 챔피언. 198cm의 장신에서 나오는 강력한 서브와 두꺼운 그립의 포핸드로 상대를 힘으로 압박하는 파워 히터입니다.',
        detailedProfile: {
            oneLineSummary: '파리를 정복했던 "러시안 탱크", 강력한 웨스턴 포핸드와 빅 서브로 무장한 올림픽 은메달리스트.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥈 "올림픽 은메달리스트 & 마스터스 챔피언"</div>
                    <p>카렌 하차노프는 2018 파리 마스터스 결승에서 <strong>노박 조코비치</strong>를 꺾고 우승하며 세계를 놀라게 했습니다. 또한 2020 도쿄 올림픽에서 은메달을 획득하며 러시아 테니스의 자존심을 지켰습니다. 큰 체구와 묵직한 구질로 상대를 힘으로 짓누르는 플레이가 일품입니다.</p>
                </div>
                <p>안드레이 루블레프, 다닐 메드베데프와 함께 '러시아 삼총사'로 불리며 투어를 이끌고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"어그레시브 베이스라이너 (Power Baseliner)"</strong></p>
                <p>두꺼운 웨스턴 그립을 잡고 치는 포핸드는 엄청난 톱스핀과 파워를 겸비하고 있습니다. 198cm의 키에서 뿜어져 나오는 서브 또한 위력적입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🚜 하차노프의 3가지 "중장비 기술"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 포핸드:</strong> 그의 포핸드는 묵직함(Heavy) 그 자체입니다. 바운드 후 높게 튀어 오르며 상대를 베이스라인 뒤로 밀어냅니다.</li>
                        <li><strong>백핸드 다운더라인:</strong> 포핸드뿐만 아니라 양손 백핸드도 매우 강력합니다. 특히 다운더라인 위너는 그의 위기 탈출 넘버원 옵션입니다.</li>
                        <li><strong>서브 파워:</strong> 첫 서브가 들어가는 날에는 브레이크가 거의 불가능할 정도로 압도적인 서브 게임을 운영합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '투어에서 가장 무거운 구질 중 하나.' },
                { name: '서브 (Serve)', score: 9, description: '타점과 파워 모두 최상급.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 강력함.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 경기에 강한 편.' },
                { name: '이동 (Movement)', score: 7.5, description: '장신치고는 준수함.' },
                { name: '네트 (Net)', score: 7.5, description: '점차 발전하고 있음.' }
            ],
            growthStory: `
                <p>모스크바 출신으로 3세 때 테니스를 시작했습니다. 의사 집안에서 자랐지만 테니스에 대한 열정으로 프로 선수가 되었습니다. 2018년 파리 마스터스 우승으로 정점에 올랐으며, 이후 약간의 슬럼프도 있었지만 꾸준히 Top 20을 유지하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2018 파리 마스터스 결승 vs 노박 조코비치',
                date: '2018. 11. 04',
                description: '그의 커리어 하이라이트. 당시 무적의 포스를 뽐내던 조코비치를 상대로 스트로크 싸움에서 완벽하게 압도하며 2-0 승리를 거뒀습니다. 하차노프의 잠재력이 폭발한 경기입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐻 "팬더 혹은 곰"</div>
                    <p>커다란 덩치와 덥수룩한 수염 때문에 곰을 연상시킨다는 팬들이 많습니다. 외모와 달리 코트 밖에서는 매우 가정적이며(아이 아빠), 동료들과 장난치는 것을 좋아하는 유쾌한 성격입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"메이저 4강의 단골손님"</strong></p>
                <p>US 오픈과 호주 오픈 4강에 진출하며 그랜드슬램에서도 강한 면모를 보여주고 있습니다. 다시 한번 마스터스급 타이틀을 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '그립이 특이하지 않나요?',
                    answer: '네, 그는 포핸드를 칠 때 그립을 매우 두껍게 잡는 "익스트림 웨스턴 그립"을 사용합니다. 이 덕분에 엄청난 톱스핀을 만들 수 있지만, 낮은 공을 처리하는 데는 다소 불리할 수 있습니다.'
                },
                {
                    question: '미국 국적인가요?',
                    answer: '아니요, 러시아 국적입니다. 아르메니아계 혈통을 가지고 있어 아르메니아 팬들의 응원도 많이 받습니다. 이름인 "Khachanov"는 아르메니아 성씨입니다.'
                }
            ]
        }
    },
    'linner-tien': {
        name: '리너 티엔', nameEn: 'Learner Tien', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/linner-tien.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '미국 테니스의 숨은 보석. 10대 때 두 번이나 US 오픈 주니어 챔피언에 올랐으며, 왼손잡이 특유의 까다로운 구질과 지능적인 플레이가 강점입니다.',
        detailedProfile: {
            oneLineSummary: '이름처럼 배우는 속도가 빠른 "Learner", US 오픈 주니어를 두 번이나 제패한 왼손 천재.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "칼라마주(Kalamazoo)의 제왕"</div>
                    <p>리너 티엔은 미국 최고 권위의 주니어 대회인 <strong>칼라마주 챔피언십(U18)을 두 번(2022, 2023)이나 우승</strong>했습니다. 이는 마이클 창 이후 30여 년 만의 대기록입니다. 우승 특전으로 US 오픈 본선 와일드카드를 획득하며 일찍부터 성인 무대를 경험했습니다.</p>
                </div>
                <p>USC(남가주 대학)에 진학했다가 1학기 만에 프로 전향을 선언하고 투어에 뛰어들었습니다.</p>
            `,
            playStyle: `
                <p><strong>"지능적인 카운터 펀처 (Intelligent Counter Puncher)"</strong></p>
                <p>힘으로 찍어 누르기보다는 코스를 요리조리 공략하는 두뇌 플레이가 돋보입니다. 왼손잡이의 이점을 살린 서브와 포핸드가 까다롭습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🧠 티엔의 3가지 "IQ 테니스"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>체스 같은 경기 운영:</strong> 상대의 약점을 빠르게 파악하고 집요하게 물고 늘어집니다. 공의 길이를 조절하며 상대를 흔듭니다.</li>
                        <li><strong>왼손 포핸드:</strong> 왼손잡이 특유의 각도 깊은 포핸드 크로스는 오른손잡이 선수들의 백핸드를 괴롭힙니다.</li>
                        <li><strong>침착함:</strong> 어떤 상황에서도 흥분하지 않고 냉정하게 다음 플레이를 설계합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '지능 (IQ)', score: 9.5, description: '경기를 읽는 눈이 탁월함.' },
                { name: '멘탈 (Mental)', score: 9, description: '나이답지 않은 성숙함.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '왼손 이점 활용.' },
                { name: '체력 (Stamina)', score: 8.5, description: '끈질긴 랠리 가능.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워보다는 코스.' },
                { name: '파워 (Power)', score: 7, description: '아직 피지컬 보완 필요.' }
            ],
            growthStory: `
                <p>캘리포니아 어바인 출신입니다. 베트남인 부모님 밑에서 자랐으며, 수학을 좋아하는 등 학업 성적도 우수했습니다. 'Learner(학습자)'라는 독특한 이름은 어머니가 지어주셨는데, 평생 배우는 자세를 가지라는 뜻이라고 합니다.</p>
            `,
            signatureMatch: {
                title: '2023 윈스턴-세일럼 오픈 1회전',
                date: '2024. 08. 21',
                description: 'ATP 투어 첫 승리를 거둔 경기. 예선을 거쳐 본선에 올라와 톱 100 선수를 꺾으며 성인 무대에서의 가능성을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎒 "공부 잘하는 모범생 이미지"</div>
                    <p>안경을 낀 지적인 외모(평소에)와 차분한 인터뷰 태도가 매력 포인트입니다. 이름값을 하듯 스펀지처럼 경험을 흡수하며 성장하는 모습이 팬들의 기대를 모으고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"연승 행진"</strong></p>
                <p>ITF 대회와 챌린저 대회에서 20연승 이상을 기록하는 등 하위 레벨을 빠르게 평정하고 있습니다. 100위권 진입이 코앞입니다.</p>
            `,
            faq: [
                {
                    question: '이름이 진짜 "Learner"인가요?',
                    answer: '네, 본명입니다. 부모님이 "인생은 끊임없는 배움의 과정"이라는 철학을 담아 지어주셨다고 합니다. 테니스 선수로서도 정말 배우는 속도가 빠릅니다.'
                },
                {
                    question: '대학은 그만뒀나요?',
                    answer: '네, 명문 USC에 입학했지만 한 학기 만에 중퇴하고 프로 전향을 선택했습니다. 기회가 왔을 때 잡아야 한다는 판단이었고, 현재까지는 성공적인 선택으로 보입니다.'
                }
            ]
        }
    },
    'luciano-darderi': {
        name: '루치아노 다르데리', nameEn: 'Luciano Darderi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/luciano-darderi.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 클레이 스페셜리스트. 아르헨티나 태생으로 남미 스타일의 끈질긴 랠리와 파워 넘치는 포핸드를 구사하며 급성장하고 있는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '아르헨티나의 심장을 가진 이탈리아 전사, 예선부터 우승까지 기적을 쓴 "클레이 스페셜리스트".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "코르도바의 기적"</div>
                    <p>루치아노 다르데리는 2024년 <strong>코르도바 오픈에서 예선 통과자(Qualifier) 신분으로 우승</strong>을 차지하는 기적을 썼습니다. 이는 ATP 투어 역사상 드문 기록이며, 이 우승 한 방으로 랭킹이 136위에서 76위로 수직 상승했습니다.</p>
                </div>
                <p>아르헨티나에서 태어났지만 이탈리아 국적을 선택한 선수로, 남미의 끈질김과 유럽의 기술을 겸비했습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀 클레이 코트 플레이어"</strong></p>
                <p>전형적인 클레이 코트 강자입니다. 베이스라인 뒤에서 머물며 엄청난 회전량의 톱스핀 포핸드로 상대를 무너뜨립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🐂 다르데리의 3가지 "황소 힘"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 톱스핀:</strong> 그의 포핸드는 나달을 연상시킬 정도로 회전이 많이 걸립니다. 공이 바닥에 닿은 후 높게 튀어 올라 상대의 어깨를 괴롭힙니다.</li>
                        <li><strong>무한 체력:</strong> 흙바닥에서 3~4시간을 뛰어도 지치지 않습니다. 랠리가 길어질수록 유리해집니다.</li>
                        <li><strong>강한 서브:</strong> 클레이 스페셜리스트치고는 서브도 강력하여 프리 포인트를 잘 따냅니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 9.5, description: '지치지 않는 에너자이저.' },
                { name: '포핸드 (Forehand)', score: 9, description: '클레이에서 특히 위력적.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '우승을 통해 자신감 상승.' },
                { name: '수비 (Defense)', score: 8.5, description: '끈질기게 따라붙음.' },
                { name: '서브 (Serve)', score: 8, description: '준수한 편.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적인 랠리용.' }
            ],
            growthStory: `
                <p>아르헨티나 비야 헤셀에서 태어났습니다. 아버지가 테니스 코치였으며, 어릴 때 이탈리아로 건너와 시민권을 얻었습니다. 챌린저 무대에서 꾸준히 실력을 쌓다가 2024년 투어 레벨에서 대박을 터뜨렸습니다.</p>
            `,
            signatureMatch: {
                title: '2024 코르도바 오픈 결승 vs 파쿤도 바그니스',
                date: '2024. 02. 12',
                description: '예선부터 시작해 결승까지 파죽지세로 올라와 우승 트로피를 들어 올린 인생 경기. 우승 확정 후 코트에 드러누워 우는 모습은 감동적이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇮🇹 "새로운 아주리 군단"</div>
                    <p>시너, 아르날디, 코볼리 등과 함께 이탈리아 테니스의 황금기를 이끄는 영건입니다. 장발의 헤어스타일과 야성미 넘치는 외모로 주목받고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 진입"</strong></p>
                <p>코르도바 우승 이후에도 꾸준히 성적을 내며 세계 랭킹 40위권까지 진입했습니다. 이제는 챌린저가 아닌 투어 대회의 주전 선수로 자리 잡았습니다.</p>
            `,
            faq: [
                {
                    question: '국적이 이탈리아인가요, 아르헨티나인가요?',
                    answer: '현재 이탈리아 국적으로 뛰고 있습니다. 하지만 태어난 곳은 아르헨티나이며 가족들도 아르헨티나에 연고가 있어 두 나라의 정체성을 모두 가지고 있습니다. 데이비스컵 등 국가대항전은 이탈리아 대표로 출전합니다.'
                },
                {
                    question: '하드 코트는 잘 치나요?',
                    answer: '아직은 클레이 코트 성적이 압도적으로 좋습니다. 하지만 서브가 좋기 때문에 경험이 쌓이면 하드 코트에서도 충분히 통할 잠재력이 있습니다.'
                }
            ]
        }
    },
    'tomas-machac': {
        name: '토마스 마하츠', nameEn: 'Tomas Machac', country: 'Czech Republic', countryFlag: '🇨🇿', image: '/images/players/tomas-machac.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '조코비치를 꺾은 사나이. 체코의 유망주로, 매우 공격적인 리턴과 빠른 템포의 스트로크로 상대를 압박하는 스타일입니다.',
        detailedProfile: {
            oneLineSummary: '조코비치를 무너뜨린 체코의 "자이언트 킬러", 짧은 바지와 빠른 템포의 승부사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🩳 "짧은 바지의 반란"</div>
                    <p>80년대 전설들을 연상시키는 <strong>매우 짧은 경기복 바지</strong>가 그의 시그니처 스타일입니다. 하지만 실력은 더욱 인상적입니다. 2024년 제네바 오픈에서 세계 1위 노박 조코비치를 꺾는 대이변을 일으키며 전 세계 테니스 팬들에게 자신의 이름을 각인시켰습니다.</p>
                </div>
                <p>여자 테니스 스타 카테리나 시니아코바의 연인(현재는 결별설 있음)으로도 잘 알려져 있으며, 혼합 복식 금메달을 합작하기도 했습니다.</p>
            `,
            playStyle: `
                <p><strong>"초고속 템포 어택커"</strong></p>
                <p>베이스라인에 딱 붙어서 라이징 볼을 처리하는 능력이 탁월합니다. 박자가 너무 빨라서 상대가 수비할 시간을 주지 않습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 마하츠의 3가지 "스피드 본능"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>라이징 샷:</strong> 공이 튀어 오르자마자 때리는 타이밍이 예술입니다. 마치 탁구처럼 빠른 템포로 랠리를 주도합니다.</li>
                        <li><strong>공격적인 리턴:</strong> 상대의 서브를 물러서지 않고 받아쳐 리턴 에이스나 다름없는 샷을 만듭니다.</li>
                        <li><strong>민첩한 풋워크:</strong> 빠른 템포를 유지하려면 발이 빨라야 하는데, 마하츠는 코트 커버리지가 매우 좋습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '템포 (Tempo)', score: 9.5, description: '상대의 시간을 뺏는 빠른 박자.' },
                { name: '리턴 (Return)', score: 9, description: '매우 공격적인 리턴 스타일.' },
                { name: '이동 (Movement)', score: 9, description: '전후좌우 스텝이 경쾌함.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '다운더라인 위너가 일품.' },
                { name: '서브 (Serve)', score: 7.5, description: '키에 비해 평범한 편.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 경기에서도 주눅 들지 않음.' }
            ],
            growthStory: `
                <p>체코 베로운 출신으로, 여느 체코 선수들처럼 탄탄한 기본기를 갖췄습니다. 챌린저 투어를 빠르게 졸업하고 2024년 마이애미 마스터스 8강, 제네바 오픈 결승 진출 등으로 기량이 급성장했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 제네바 오픈 4강 vs 노박 조코비치',
                date: '2024. 05. 24',
                description: '그의 인생 경기. 세계 최강 조코비치를 상대로 전혀 밀리지 않는 스트로크 대결을 펼친 끝에 2-1 승리를 거뒀습니다. 이 승리는 그가 탑 랭커가 될 자질이 있음을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💖 "올림픽 금메달 커플"</div>
                    <p>2024년 파리 올림픽 혼합 복식에서 당시 연인이었던 시니아코바와 짝을 이뤄 금메달을 획득했습니다. 시상식에서의 묘한 기류(결별 후 재결합설)는 전 세계 팬들의 흥미를 자극했습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"거물 사냥꾼"</strong></p>
                <p>2024년 조코비치, 알카라스 등 톱 랭커들을 상대로 명승부를 펼치며 다크호스로 떠올랐습니다. 언제든 상위 랭커를 잡을 수 있는 저력을 갖추고 있습니다.</p>
            `,
            faq: [
                {
                    question: '바지를 왜 짧게 입나요?',
                    answer: '특별한 이유는 밝히지 않았지만, 본인이 편해서라고 합니다. 긴 바지가 움직임에 방해가 된다고 느끼는 듯하며, 이제는 그의 상징이 되었습니다.'
                },
                {
                    question: '시니아코바와 사귀나요?',
                    answer: '수년 동안 체코의 대표적인 테니스 커플이었습니다. 올림픽 직전에 결별 소식이 들렸으나, 금메달을 합작한 후 다정한 모습을 보여 재결합설이 돌고 있습니다.'
                },
                {
                    question: '체코 테니스가 강한 이유가 있나요?',
                    answer: '체코는 전통적으로 테니스 강국입니다. 나브라틸로바, 렌들, 베르디흐, 크비토바 등 전설들이 많으며, 체계적인 유소년 시스템과 훌륭한 코치진이 마하츠 같은 유망주를 계속 배출하고 있습니다.'
                }
            ]
        }
    },
    'valentin-vacherot': {
        name: '발랑탱 바슈로', nameEn: 'Valentin Vacherot', country: 'Monaco', countryFlag: '🇲🇨', image: '/images/players/valentin-vacherot.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '모나코의 자존심. 챌린저 투어를 제패하며 ATP 무대에 도전장을 내민 늦깍이 유망주로, 침착한 경기 운영이 돋보입니다.',
        detailedProfile: {
            oneLineSummary: '모나코 국적의 희귀한 테니스 스타, 챌린저 무대를 정복하고 올라온 늦깎이 실력파.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇲🇨 "모나코의 유일한 희망"</div>
                    <p>수많은 테니스 스타들이 세금 혜택 때문에 모나코에 거주하지만, 진짜 <strong>모나코 국적</strong>을 가진 선수는 매우 드뭅니다. 바슈로는 모나코 태생으로 데이비스컵에서 조국을 대표하는 자존심입니다. 2024년 초반 챌린저 대회 3회 연속 우승이라는 놀라운 기록을 세웠습니다.</p>
                </div>
                <p>미국 텍사스 A&M 대학 동문인 아르튀르 랑데르크네슈의 성공을 뒤따르고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"안정적인 올라운더"</strong></p>
                <p>큰 키(193cm)에서 나오는 서브와 탄탄한 스트로크가 강점입니다. 무리한 공격보다는 실수를 줄이는 확률 높은 테니스를 구사합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🛡️ 바슈로의 3가지 "모나코 방패"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>일관성:</strong> 기복이 적습니다. 챌린저 투어에서 보여준 꾸준함은 그의 멘탈이 얼마나 안정적인지 증명합니다.</li>
                        <li><strong>서비스 게임:</strong> 장신을 활용한 서브 포인트가 많아 브레이크 당할 확률이 낮습니다.</li>
                        <li><strong>체력:</strong> 늦은 나이에 전성기가 온 만큼, 몸 관리에 철저하며 3세트 경기에서도 지치지 않습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 8, description: '안정적인 득점 수단.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '연속 우승을 가능케 한 집중력.' },
                { name: '체력 (Stamina)', score: 8.5, description: '빡빡한 일정을 소화하는 내구성.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '준수한 결정력.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '약점이 되지 않을 정도의 수비력.' },
                { name: '경험 (Experience)', score: 6.5, description: 'ATP 투어 경험은 아직 부족.' }
            ],
            growthStory: `
                <p>모나코 몬테카를로에서 태어났습니다. 미국 텍사스 A&M 대학에서 대학 테니스를 경험하며 멘탈과 피지컬을 완성했습니다. 25세가 넘어서야 잠재력이 폭발한 대기만성형 선수입니다.</p>
            `,
            signatureMatch: {
                title: '2024 챌린저 투어 3연속 우승',
                date: '2024. 02',
                description: '태국과 인도에서 열린 챌린저 대회에서 3주 연속 우승 트로피를 들어 올렸습니다. 이 기간 동안 보여준 무적의 모습은 그를 단숨에 Top 100 랭킹으로 이끌었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤴 "모나코 왕자의 응원"</div>
                    <p>그는 모나코 왕실의 전폭적인 지지를 받고 있습니다. 몬테카를로 마스터스에 출전할 때면 모나코 국왕 알베르 2세가 직접 관람하며 응원하기도 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 100 안착"</strong></p>
                <p>챌린저 투어(2부 리그)를 평정하고 ATP 투어(1부 리그)에 도전하고 있습니다. 예선을 거치지 않고 본선에 직행하는 레벨로 올라섰습니다.</p>
            `,
            faq: [
                {
                    question: '모나코 선수는 세금을 안 내나요?',
                    answer: '네, 모나코는 개인 소득세가 없는 것으로 유명합니다. 이것이 많은 스포츠 스타들이 모나코에 거주하는 이유입니다. 하지만 바슈로는 세금 때문이 아니라 진짜 모나코 사람입니다.'
                },
                {
                    question: '사촌도 테니스 선수인가요?',
                    answer: '네, 그의 사촌 벤야민 발레레(Benjamin Balleret) 역시 전 모나코 국가대표 테니스 선수였으며, 현재 바슈로의 코치 역할을 맡고 있습니다.'
                },
                {
                    question: '대학 시절 성적은 어땠나요?',
                    answer: '텍사스 A&M 대학 시절 팀을 SEC 챔피언십 우승으로 이끌며 에이스로 활약했습니다. 대학 테니스 경험이 늦은 나이의 성장에 큰 도움이 되었습니다.'
                }
            ]
        }
    },
    'alexei-popyrin': {
        name: '알렉세이 포피린', nameEn: 'Alexei Popyrin', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/alexei-popyrin.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 거포. 196cm의 장신에서 뿜어져 나오는 서브와 포핸드가 강력하며, 마스터스 1000 우승(몬트리올)으로 잠재력을 폭발시켰습니다.',
        detailedProfile: {
            oneLineSummary: '2024 몬트리올 마스터스 챔피언, 196cm의 높이에서 뿜어져 나오는 호주의 "화력발전소".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "마스터스 챔피언의 탄생"</div>
                    <p>2024년 몬트리올 마스터스에서 루블레프, 후르카츠, 코르다 등 쟁쟁한 강자들을 연파하고 우승을 차지하는 파란을 일으켰습니다. 레이튼 휴이트 이후 21년 만에 마스터스 시리즈를 제패한 호주 선수로 역사에 이름을 남겼습니다.</p>
                </div>
                <p>러시아 이민자 가정 출신으로 스페인과 프랑스에서 테니스를 배워, 호주의 파워와 유럽의 클레이 기술을 모두 갖췄습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅맨의 교과서 (Modern Big Man)"</strong></p>
                <p>강력한 서브는 기본, 베이스라인에서의 움직임도 거구에 비해 매우 가볍습니다. 포핸드로 경기를 지배하는 스타일입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 포피린의 3가지 "빅 뱅"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>폭발적인 포핸드:</strong> 찬스 볼이 오면 주저 없이 라켓을 휘둘러 위너를 만듭니다. 그의 포핸드 스피드는 투어 최상위권입니다.</li>
                        <li><strong>클러치 서브:</strong> 위기 상황일수록 서브가 더 강력해집니다. 브레이크 포인트에서 서브 에이스로 탈출하는 능력이 탁월합니다.</li>
                        <li><strong>공격적 멘탈:</strong> "나는 누구든 이길 수 있다"는 자신감이 코트 위에서 보입니다. 물러서지 않고 맞불을 놓는 담대함이 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '위너 생산 능력이 탁월함.' },
                { name: '서브 (Serve)', score: 9, description: '확실한 무기.' },
                { name: '포핸드 (Forehand)', score: 9, description: '가장 강력한 득점원.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '큰 무대 체질.' },
                { name: '이동 (Movement)', score: 7.5, description: '키에 비해 나쁘지 않음.' },
                { name: '수비 (Defense)', score: 7, description: '공격에 비해 수비는 평범.' }
            ],
            growthStory: `
                <p>시드니에서 러시아 이민자 부모 밑에서 태어났습니다. 8세 때 두바이로 이주했고, 이후 스페인 알리칸테 등에서 훈련하며 다국적 경험을 쌓았습니다. 2017년 프랑스 오픈 주니어 우승자로 일찍이 재능을 인정받았습니다.</p>
            `,
            signatureMatch: {
                title: '2024 몬트리올 마스터스 결승 vs 안드레이 루블레프',
                date: '2024. 08. 12',
                description: '그의 커리어 하이라이트. 세계 랭킹 6위 루블레프를 상대로 압도적인 화력 쇼를 펼치며 2-0 완승을 거뒀습니다. 호주 테니스의 부활을 알리는 신호탄이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌏 "글로벌 시티즌"</div>
                    <p>영어, 러시아어, 스페인어 등 3개 국어에 능통하며, 세계 여러 곳에서 거주한 경험 덕분에 다양한 팬들과 소통이 가능합니다. 인터뷰할 때의 자신감 넘치는 태도도 매력적입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 30의 벽을 깨다"</strong></p>
                <p>마스터스 우승으로 랭킹이 수직 상승하여 시드 배정권(32위 이내)에 진입했습니다. 이제는 그랜드슬램 2주 차(16강 이상) 진출을 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '러시아 선수인가요 호주 선수인가요?',
                    answer: '부모님은 러시아인이지만 본인은 호주 시드니에서 태어나고 자란 호주 국적(AUS) 선수입니다. 하지만 러시아어도 유창하게 구사합니다.'
                },
                {
                    question: '볼보이 출신인가요?',
                    answer: '네, 흥미롭게도 2009년 두바이 오픈 경기에서 앤디 머레이의 경기에 볼보이로 참가한 적이 있습니다. 훗날 프로가 되어 머레이와 대결하기도 했습니다.'
                },
                {
                    question: '클레이 코트를 잘 하나요?',
                    answer: '보통 호주 선수들은 하드나 잔디를 선호하지만, 포피린은 스페인 유학파 출신이라 클레이 코트에서도 매우 잘 칩니다. 주니어 프랑스 오픈 우승 경력도 있습니다.'
                }
            ]
        }
    },
    'jan-lennard-struff': {
        name: '얀-레나드 스트루프', nameEn: 'Jan-Lennard Struff', country: 'Germany', countryFlag: '🇩🇪', image: '/images/players/jan-lennard-struff.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '독일의 대기만성형 스타. 공격적인 서브 앤 발리와 강력한 포핸드로 상대를 몰아붙이는 스타일로, 30대의 나이에 커리어 하이를 경신 중입니다.',
        detailedProfile: {
            oneLineSummary: '34세에 첫 우승을 차지한 "대기만성의 아이콘", 독일 전차 군단 같은 파워 테니스.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍺 "독일 맥주 같은 숙성된 맛"</div>
                    <p>얀-레나드 스트루프는 34세의 나이(2024년)에 홈인 뮌헨 오픈에서 생애 첫 투어 우승을 차지했습니다. 프로 데뷔 15년, 200번이 넘는 대회 출전 끝에 얻은 값진 우승이었습니다. 포기하지 않고 묵묵히 도전하는 <strong>베테랑의 품격</strong>을 보여주었습니다.</p>
                </div>
                <p>강력한 서브와 공격적인 네트 플레이로 '상남자 테니스'를 구사하여 보는 맛이 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"서브 앤 발리어 & 파워 히터"</strong></p>
                <p>요즘 트렌드와 다르게 네트 플레이를 매우 즐깁니다. 강력한 서브 후 과감하게 전진하여 발리로 끝내는 클래식한 매력이 있습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🚜 스트루프의 3가지 "독일 엔진"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>닥공(닥치고 공격):</strong> 수비보다는 공격을 최우선으로 합니다. 리턴 게임에서도 세컨드 서브를 두들겨 패는 스타일입니다.</li>
                        <li><strong>헤비 서브:</strong> 193cm의 키에서 나오는 서브는 묵직하고 빠릅니다. 특히 킥 서브가 높게 튀어 상대의 어깨를 지치게 만듭니다.</li>
                        <li><strong>서브 앤 발리:</strong> 클레이 코트에서도 서브 앤 발리를 시도할 정도로 네트 플레이에 자신감이 있습니다. 복식 랭킹도 높습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '가장 강력한 무기.' },
                { name: '파워 (Power)', score: 9, description: '모든 샷에 힘이 실려 있음.' },
                { name: '네트 (Net)', score: 9, description: '복식으로 다져진 발리 실력.' },
                { name: '멘탈 (Mental)', score: 8, description: '오랜 경험에서 나오는 노련미.' },
                { name: '이동 (Movement)', score: 6.5, description: '큰 체구로 인해 민첩성은 다소 떨어짐.' },
                { name: '수비 (Defense)', score: 6.5, description: '수비보다는 공격으로 푸는 스타일.' }
            ],
            growthStory: `
                <p>독일 바르슈타인 출신입니다. 주니어 시절에는 크게 주목받지 못했지만, 퓨처스와 챌린저를 거치며 차근차근 계단을 밟아 올라왔습니다.</p>
                <p>2023년 마드리드 마스터스에서 '럭키 루저(예선 탈락 후 기권자 발생으로 본선 합류)'로 결승까지 진출하는 기적을 쓰며 전 세계를 놀라게 했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 뮌헨 오픈 결승 vs 테일러 프리츠',
                date: '2024. 04. 21',
                description: '33세 11개월의 나이에 감격적인 첫 투어 우승. 비가 오는 악조건 속에서도 미국의 에이스 프리츠를 2-0으로 완파하고 홈 관중들 앞에서 트로피를 들어 올렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👔 "젠틀맨 자이언트"</div>
                    <p>코트 위에서는 파이터지만, 밖에서는 매우 예의 바르고 친절한 것으로 유명합니다. 동료 선수들이 뽑은 '가장 착한 선수' 중 한 명입니다. 두 아이의 아빠로서 책임감 있는 모습도 보여줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>30대 중반에 커리어 하이 랭킹(20위권)을 찍으며 회춘하고 있습니다. 나이는 숫자에 불과하다는 것을 증명하며 꾸준한 활약을 이어가는 중입니다.</p>
            `,
            faq: [
                {
                    question: '럭키 루저 신화가 무엇인가요?',
                    answer: '2023년 마드리드 마스터스 예선 결승에서 졌지만, 본선 기권자가 생겨 합류했습니다. 그리고는 거침없이 결승까지 진출하여 카를로스 알카라스와 대결했습니다. 이는 마스터스 역사상 최초의 럭키 루저 결승 진출 기록입니다.'
                },
                {
                    question: '보루시아 도르트문트 팬인가요?',
                    answer: '네, 열렬한 축구 팬이며 도르트문트를 응원합니다. 경기장에도 자주 모습을 드러냅니다.'
                },
                {
                    question: '복식도 잘하나요?',
                    answer: '네, 복식 타이틀을 4개나 보유하고 있으며, 도쿄 올림픽 복식 8강에도 진출했습니다. 그의 발리 능력은 복식 경험에서 나왔습니다.'
                }
            ]
        }
    },
    'adrian-mannarino': {
        name: '아드리안 만나리노', nameEn: 'Adrian Mannarino', country: 'France', countryFlag: '🇫🇷', image: '/images/players/adrian-mannarino.svg', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '테니스계의 힙스터. 매우 낮은 텐션의 라켓을 사용하여 공을 툭툭 건드리는 듯한 독특한 스윙으로 상대의 리듬을 뺏는 왼손잡이 베테랑입니다.',
        detailedProfile: {
            oneLineSummary: '라켓 텐션 10kg대의 기인, 힘을 쓰지 않고도 상대를 무너뜨리는 "테니스 도사".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧶 "초저텐션의 마술사"</div>
                    <p>만나리노는 투어 선수 중 가장 낮은 라켓 텐션(10~15kg 정도)을 사용하는 것으로 유명합니다. 이 헐렁한 줄로 공을 '툭' 갖다 대는 것 같은데, 공은 기가 막히게 코트 구석으로 깔려 들어갑니다. 스폰서 로고 하나 없는 티셔츠를 입고 나와서 톱 랭커들을 농락하는 모습은 그야말로 <strong>재야의 고수</strong> 같습니다.</p>
                </div>
                <p>30대 중반의 나이에 커리어 하이를 경신하며 '회춘'하고 있는 독특한 이력의 소유자입니다.</p>
            `,
            playStyle: `
                <p><strong>"변칙적인 카운터 펀처"</strong></p>
                <p>그의 테니스에는 '스핀'이 거의 없습니다. 타점이 매우 빠르고 궤적이 낮아 상대가 힘을 싣기 어렵게 만듭니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔮 만나리노의 3가지 "미스터리"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>콤팩트 스윙:</strong> 백스윙이 거의 없습니다. 상대의 힘을 그대로 이용해 반 박자 빠르게 돌려보냅니다.</li>
                        <li><strong>플랫 샷:</strong> 네트를 스치듯 넘어가는 낮게 깔리는 공은 바운드 후에도 튀어 오르지 않아 상대를 미치게 합니다.</li>
                        <li><strong>무심한 표정:</strong> 이기든 지든 표정 변화가 없습니다. 심지어 자신이 몇 번 시드인지, 상대가 누구인지도 모르고 경기에 임하는 경우가 많습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '손감각 (Touch)', score: 10, description: '라켓을 손처럼 다루는 천재적인 감각.' },
                { name: '전술 (Tactics)', score: 9.5, description: '상대의 약점을 파고드는 지능적인 플레이.' },
                { name: '백핸드 (Backhand)', score: 9, description: '매우 간결하고 정확함.' },
                { name: '이동 (Movement)', score: 8, description: '부드럽고 효율적인 풋워크.' },
                { name: '서브 (Serve)', score: 7.5, description: '빠르진 않지만 코스가 까다로운 왼손 서브.' },
                { name: '파워 (Power)', score: 6, description: '자신의 힘보다는 상대의 힘을 이용함.' }
            ],
            growthStory: `
                <p>프랑스 수아지수몽모랑시 출신입니다. 5세 때 테니스를 시작했습니다. 화려한 엘리트 코스보다는 챌린저 무대에서 산전수전을 겪으며 독자적인 스타일을 완성했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 아스타나 오픈 결승 vs 세바스찬 코르다',
                date: '2023. 10. 03',
                description: '35세의 나이에 ATP 250 투어 우승을 차지했습니다. 젊은 피 코르다를 상대로 노련미가 무엇인지 보여주며 대역전승을 거뒀습니다. 이 우승으로 프랑스 선수 중 최고령 우승 기록을 세웠습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👕 "노 스폰서 간지"</div>
                    <p>유명 스포츠 브랜드의 의류 후원 없이 그냥 샵에서 산 것 같은 민무늬 티셔츠를 입고 경기하는 모습이 오히려 쿨하다는 반응을 얻고 있습니다. (최근에는 일부 후원을 받기도 합니다.)</p>
                </div>
            `,
            recentForm: `
                <p><strong>"나이를 거꾸로 먹는 남자"</strong></p>
                <p>2024년 호주 오픈 16강에 오르며 건재함을 과시했습니다. 특히 벤 쉘튼 등 미국의 강서버들을 잇달아 제압하며 '미국 킬러'의 면모를 보여주었습니다.</p>
            `,
            faq: [
                {
                    question: '왜 라켓 줄을 헐렁하게 매나요?',
                    answer: '손목과 팔에 무리를 주지 않으면서도 적은 힘으로 공을 멀리 보내기 위해서입니다. 하지만 컨트롤이 매우 어렵기 때문에 일반 동호인은 따라 하기 힘듭니다.'
                },
                {
                    question: '왜 스폰서가 없나요?',
                    answer: '본인이 까다로운 것인지, 브랜드들이 그의 독특함을 감당 못 하는 것인지 모르겠지만, 그는 옷에 신경 쓰지 않고 오직 테니스에만 집중합니다.'
                },
                {
                    question: '상대 분석을 안 하나요?',
                    answer: '네, 그는 경기 직전까지 대진표를 보지 않는 것으로 유명합니다. 상대가 누구든 자신의 테니스를 하는 것에만 집중한다는 철학입니다.'
                }
            ]
        }
    },
    'matteo-arnaldi': {
        name: '마테오 아르날디', nameEn: 'Matteo Arnaldi', country: 'Italy', countryFlag: '🇮🇹', image: '/images/players/matteo-arnaldi.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 지치지 않는 엔진. 데이비스컵 우승의 주역으로, 빠른 발과 끈질긴 수비, 그리고 결정적인 순간에 터지는 위너가 강점입니다.',
        detailedProfile: {
            oneLineSummary: '이탈리아의 "슈퍼 루키", 지치지 않는 체력과 빠른 발로 모든 공을 받아내는 끈기의 아이콘.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇮🇹 "데이비스컵 우승의 숨은 주역"</div>
                    <p>2023년 이탈리아가 47년 만에 데이비스컵 우승컵을 들어 올릴 때, 결정적인 역할을 해낸 선수가 바로 마테오 아르날디입니다. 투어에서 가장 빠른 선수 중 한 명으로, 상대가 위너라고 생각한 공을 걷어 올리는 <strong>미친 수비력</strong>은 보는 이들의 입을 다물지 못하게 합니다.</p>
                </div>
                <p>2024년 프랑스 오픈 16강까지 진출하며 클레이뿐만 아니라 큰 무대에서도 통하는 실력을 입증했습니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 & 체력왕"</strong></p>
                <p>조코비치나 시너처럼 베이스라인에서 물러나지 않고 빠른 박자로 받아치거나, 나달처럼 끈질기게 수비하여 상대 실수를 유도하는 두 가지 스타일을 모두 구사할 수 있습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🏃‍♂️ 아르날디의 3가지 "무한 동력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>스피드:</strong> 코트 커버리지가 환상적입니다. 좌우 앞뒤 모든 공을 쫓아가 랠리를 이어갑니다.</li>
                        <li><strong>탑스핀:</strong> 포핸드에 많은 회전을 주어 상대가 공격하기 까다로운 구질을 만듭니다.</li>
                        <li><strong>강심장:</strong> 중요한 포인트에서 더 공격적으로 변합니다. 특히 2023 데이비스컵 결승전 마지막 경기에서 보여준 담력은 전설적이었습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '이동 (Movement)', score: 9.5, description: '투어 최상급 스피드.' },
                { name: '체력 (Stamina)', score: 9.5, description: '지치는 기색이 없음.' },
                { name: '멘탈 (Mental)', score: 9, description: '국가대표 대항전에서 증명됨.' },
                { name: '포핸드 (Forehand)', score: 8, description: '안정적인 탑스핀.' },
                { name: '백핸드 (Backhand)', score: 8, description: '수비와 공격 밸런스가 좋음.' },
                { name: '서브 (Serve)', score: 7, description: '아직 개선이 필요한 부분.' }
            ],
            growthStory: `
                <p>이탈리아 산레모 출신으로 14세 때까지 수영과 스키를 병행했던 만능 스포츠맨입니다. 테니스에 집중하기로 한 후 빠르게 성장하여 2023년 넥스트젠 파이널스에 진출하며 차세대 스타 대열에 합류했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 데이비스컵 결승 1단식 vs 알렉세이 포피린',
                date: '2023. 11. 26',
                description: '이탈리아의 우승이 걸린 운명의 첫 단식. 벼랑 끝 승부에서 2-1 역전승을 거두며 이탈리아 우승의 발판을 마련했습니다. 이 경기로 그는 이탈리아의 국민 영웅이 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏎️ "F1 드라이버의 열정"</div>
                    <p>마치 레이싱 선수처럼 빠른 스피드를 자랑합니다. 실제로 F1 팬이기도 하며, 경기장 밖에서는 패션을 즐기는 이탈리아 남자 특유의 매력을 발산합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 30 진입 가시권"</strong></p>
                <p>2024년 롤랑가로스 16강, 마이애미 오픈 16강 등 굵직한 성과를 내며 꾸준히 랭킹을 올리고 있습니다. 머지않아 시드 배정권에 안착할 것으로 보입니다.</p>
            `,
            faq: [
                {
                    question: '별명은 무엇인가요?',
                    answer: '팬들은 그를 "Arna"라고 부릅니다. 이탈리아어권에서 흔한 줄임말입니다.'
                },
                {
                    question: '가장 좋아하는 코트는 어디인가요?',
                    answer: '하드 코트를 가장 좋아한다고 밝혔습니다. 빠른 발을 살리기 좋고, 공의 바운드가 일정하기 때문입니다. 하지만 클레이 코트 성적도 매우 좋습니다.'
                },
                {
                    question: '여자친구도 유명인인가요?',
                    answer: '네, 호주 출신의 미아 사비오와 교제 중입니다. 그녀는 항상 아르날디의 경기장에 동행하며 열정적으로 응원하는 모습이 카메라에 자주 잡힙니다.'
                }
            ]
        }
    },
    'jordan-thompson': {
        name: '조던 톰슨', nameEn: 'Jordan Thompson', country: 'Australia', countryFlag: '🇦🇺', image: '/images/players/jordan-thompson.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 콧수염 파이터. 투박하지만 실속 있는 플레이, 특히 훌륭한 넷 플레이와 더블즈 실력을 겸비한 전천후 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '콧수염이 매력적인 호주의 "쌈닭", 단식과 복식 모두 잘하는 전천후 테크니션.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥸 "콧수염(Mustache)의 상징"</div>
                    <p>조던 톰슨의 트레이드마크는 짙은 콧수염과 뒤로 눌러쓴 모자입니다. 투박해 보이는 외모와 달리 코트 위에서는 누구보다 섬세한 터치와 끈질긴 승부 근성을 보여줍니다. 2024년 로스카보스 오픈에서 생애 첫 투어 우승(단식)을 차지하고, US 오픈 복식 우승까지 거머쥐며 최고의 한 해를 보냈습니다.</p>
                </div>
                <p>나달도 껄끄러워할 만큼 끈적한 플레이 스타일을 가진 선수로 유명합니다.</p>
            `,
            playStyle: `
                <p><strong>"올코트 플레이어 & 복식 스페셜리스트"</strong></p>
                <p>베이스라인 랠리도 잘하지만, 기회만 되면 네트로 대시하여 발리로 끝내는 플레이를 선호합니다. 복식 세계 랭킹 상위권자답게 네트 앞에서의 반응 속도가 탁월합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🦘 톰슨의 3가지 "호주산 무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>슬라이스:</strong> 낮게 깔리는 백핸드 슬라이스로 상대의 리듬을 뺏고 실수를 유도합니다.</li>
                        <li><strong>발리:</strong> 복식 그랜드슬램 챔피언다운 완벽한 발리 기술을 가지고 있습니다.</li>
                        <li><strong>투지:</strong> "끝날 때까지 끝난 게 아니다"라는 말을 몸소 실천합니다. 어떤 상황에서도 포기하지 않고 끈질기게 물고 늘어집니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '네트 (Net)', score: 9.5, description: '복식 그랜드슬램 챔피언 레벨.' },
                { name: '멘탈 (Mental)', score: 9, description: '엄청난 승부욕의 소유자.' },
                { name: '수비 (Defense)', score: 8.5, description: '끈질기게 받아넘김.' },
                { name: '체력 (Stamina)', score: 8.5, description: '장기전도 마다하지 않음.' },
                { name: '서브 (Serve)', score: 7.5, description: '정교한 코스 공략.' },
                { name: '파워 (Power)', score: 7, description: '힘보다는 기술과 끈기.' }
            ],
            growthStory: `
                <p>시드니 출신으로 아버지도 테니스 코치였습니다. 레이튼 휴이트를 롤 모델로 삼아 끈질긴 플레이 스타일을 익혔습니다. 오랜 기간 챌린저와 투어를 오가는 '저니맨'이었으나, 30세에 가까운 나이에 기량이 만개했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 로스카보스 오픈 결승 vs 캐스퍼 루드',
                date: '2024. 02. 24',
                description: '30세의 나이에 생애 첫 ATP 투어 단식 우승. 준결승에서 즈베레프를 3시간 40분의 혈투 끝에 꺾고, 결승에서 루드마저 제압하며 "인생은 30부터"임을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧢 "동네 형 같은 친근함"</div>
                    <p>화려한 스타성보다는 묵묵히 자기 할 일을 하는 모습이 매력적입니다. 경기 중 혼잣말을 하거나 투덜거리는 모습조차 인간적으로 보여 팬들에게 인기가 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"커리어 하이 시즌"</strong></p>
                <p>2024년 단식 첫 우승과 US 오픈 복식 우승을 동시에 달성하며 생애 최고의 전성기를 보내고 있습니다. 단식 랭킹도 30위권 안쪽으로 진입했습니다.</p>
            `,
            faq: [
                {
                    question: '왜 콧수염을 기르나요?',
                    answer: '처음에는 대회 기간인 "Movember(남성 건강 인식의 달)" 캠페인을 위해 길렀는데, 주변 반응이 좋고 성적도 잘 나와서 계속 유지하고 있다고 합니다.'
                },
                {
                    question: '복식이 주전공인가요?',
                    answer: '아니요, 단식과 복식 모두 비중 있게 출전합니다. 보통 단식 선수들이 체력 안배를 위해 복식을 포기하는 것과 달리, 톰슨은 두 종목 모두에서 성적을 내는 강철 체력을 자랑합니다.'
                },
                {
                    question: '나달을 이긴 적이 있나요?',
                    answer: '네, 2024년 브리즈번 인터내셔널 8강에서 3시간이 넘는 접전 끝에 나달에게 역전승을 거뒀습니다. 나달의 복귀전을 망친 장본인이기도 합니다.'
                }
            ]
        }
    },
    'zhizhen-zhang': {
        name: '장지전', nameEn: 'Zhizhen Zhang', country: 'China', countryFlag: '🇨🇳', image: '/images/players/zhizhen-zhang.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국 남자 테니스의 역사. 중국 선수 최초로 마스터스 8강, 세계 랭킹 50위 진입 등 아시아 테니스의 새로운 역사를 쓰고 있는 파워 히터입니다.',
        detailedProfile: {
            oneLineSummary: '중국 테니스의 역사를 새로 쓰는 "만리장성", 대륙을 대표하는 파워 히터.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇳 "기록 제조기 (History Maker)"</div>
                    <p>장지전은 중국 남자 테니스의 <strong>최초 기록</strong>은 거의 다 가지고 있습니다. 중국 선수 최초 세계 랭킹 50위 진입, 마스터스 8강 진출, 그랜드슬램 시드 배정 등 그가 가는 길이 곧 중국 테니스의 역사입니다. 아시안 게임 금메달리스트로 아시아 최강자의 자리를 굳건히 하고 있습니다.</p>
                </div>
                <p>193cm의 훌륭한 신체 조건에서 나오는 시원시원한 플레이는 아시아 선수는 피지컬이 약하다는 편견을 깼습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너"</strong></p>
                <p>서브와 포핸드 모두 강력합니다. 특히 짧은 백스윙에서 나오는 임팩트가 매우 강해 공의 속도가 빠릅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🐉 장지전의 3가지 "대륙의 힘"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>플랫 성 타구:</strong> 공을 두껍게 맞춰서 낮고 빠르게 보냅니다. 하드 코트에서 특히 위력이 배가됩니다.</li>
                        <li><strong>강력한 서브:</strong> 200km/h를 쉽게 넘기는 서브로 자신의 게임을 편하게 풀어갑니다.</li>
                        <li><strong>멘탈 강화:</strong> 과거에는 유리 멘탈이라는 평을 들었으나, 최근에는 5세트 접전에서도 승리하는 등 뒷심이 강해졌습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '아시아 톱 클래스 피지컬.' },
                { name: '서브 (Serve)', score: 8.5, description: '확실한 득점원.' },
                { name: '멘탈 (Mental)', score: 8, description: '경험이 쌓이며 단단해짐.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '묵직한 한 방.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이고 공격적임.' },
                { name: '이동 (Movement)', score: 7.5, description: '장신치고는 준수함.' }
            ],
            growthStory: `
                <p>상하이 출신으로 아버지가 축구 선수, 어머니가 사격 선수인 스포츠 집안에서 태어났습니다. 4살 때 수영을 시작했으나 코치의 권유로 테니스로 전향했습니다. 크로아티아 등 유럽에서 장기간 훈련하며 선진 테니스를 습득했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 마드리드 마스터스 8강 진출',
                date: '2023. 05. 02',
                description: '클레이 코트에서 열린 마스터스 대회에서 샤포발로프, 노리, 프리츠 등 톱 랭커들을 연파하며 8강에 올랐습니다. 중국 남자 테니스의 잠재력을 전 세계에 알린 사건이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 "솔직한 인터뷰"</div>
                    <p>인터뷰에서 자신의 감정을 솔직하게 표현하고 농담도 잘 던집니다. "호텔 비를 벌기 위해 이겨야 한다"는 식의 현실적인 코멘트가 팬들에게 웃음을 주었습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"아시아 No.1 경쟁"</strong></p>
                <p>일본의 니시오카, 한국의 권순우 등을 제치고 현재 아시아 랭킹 1위를 다투고 있습니다. 파리 올림픽 혼합 복식 은메달을 따며 큰 무대에서도 통함을 증명했습니다.</p>
            `,
            faq: [
                {
                    question: '이름을 어떻게 부르나요?',
                    answer: '중국어 발음은 "장즈전"에 가깝지만, 영어권에서는 "ZZZ(Triple Z)"라는 애칭으로 불리기도 합니다. 전광판에 이름이 Z.ZHANG으로 표기되기 때문입니다.'
                },
                {
                    question: '부모님도 유명한가요?',
                    answer: '아버지가 중국 프로축구 상하이 선화의 수비수 출신인 장웨이화입니다. 아버지의 운동신경을 물려받아 193cm의 장신이 되었습니다.'
                },
                {
                    question: '유럽에서 훈련했나요?',
                    answer: '네, 10대 시절부터 프랑스, 스페인, 크로아티아를 돌며 테니스 유학을 했습니다. 현재는 류비치치(페더러의 전 코치) 아카데미 소속 코치와 함께하고 있습니다.'
                }
            ]
        }
    },
    'giovanni-mpetshi-perricard': {
        name: '지오반니 음페치 페리카르', nameEn: 'Giovanni Mpetshi Perricard', country: 'France', countryFlag: '🇫🇷', image: '/images/players/giovanni-mpetshi-perricard.svg', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: '프랑스의 203cm 거인 유망주. 엄청난 높이에서 내리꽂는 서브와 강력한 원핸드 백핸드로 챌린저 투어를 폭격하고 있는 무서운 신예입니다.',
        detailedProfile: {
            oneLineSummary: '203cm의 "프랑스산 고층 빌딩", 내려꽂는 서브와 한 손 백핸드의 로망을 가진 괴물 신인.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗼 "에펠탑 같은 높이"</div>
                    <p>키 <strong>203cm</strong>, 몸무게 100kg의 압도적인 피지컬을 자랑합니다. 존 이스너, 펠릭스 오제 알리아심 카를로비치를 잇는 새로운 '서브 킹'의 유력 후보입니다. 어린 나이임에도 불구하고 보기 드문 <strong>원핸드 백핸드</strong>를 구사하여 클래식한 매력까지 갖췄습니다.</p>
                </div>
                <p>2024년 홈인 리옹 오픈에서 와일드카드로 출전해 깜짝 우승을 차지하며 신데렐라 스토리를 썼습니다.</p>
            `,
            playStyle: `
                <p><strong>"초대형 빅 서버"</strong></p>
                <p>그의 경기는 서브로 시작해서 서브로 끝난다고 해도 과언이 아닙니다. 세컨드 서브조차 200km/h를 넘나듭니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💣 지오반니의 3가지 "폭격"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>스카이 서브:</strong> 2미터가 넘는 타점에서 내리꽂는 서브는 각도가 말이 안 됩니다. 받아도 라켓이 밀립니다.</li>
                        <li><strong>원핸드 백핸드 강타:</strong> 보통 키 큰 선수는 양손 백핸드를 치는데, 그는 한 손으로 강력하게 때려버립니다. 스탄 바브린카를 연상시킵니다.</li>
                        <li><strong>포핸드 위너:</strong> 서브 후 리턴된 공을 바로 포핸드로 끝내는 원투 펀치가 주 패턴입니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '투어 전체에서 손꼽히는 위력.' },
                { name: '파워 (Power)', score: 9.5, description: '타고난 장사.' },
                { name: '백핸드 (Backhand)', score: 8, description: '희소성 있는 원핸드 강타.' },
                { name: '멘탈 (Mental)', score: 8, description: '신인답지 않은 담대함.' },
                { name: '이동 (Movement)', score: 6, description: '초장신의 약점, 민첩성은 부족.' },
                { name: '리턴 (Return)', score: 6.5, description: '상대 서브 대처 능력은 개선 필요.' }
            ],
            growthStory: `
                <p>프랑스 리옹 출신입니다. 어릴 때부터 또래보다 머리 하나가 더 컸습니다. 프랑스 테니스 협회의 집중 관리를 받으며 성장했고, 2021년 프랑스 오픈 주니어 복식 우승을 차지했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 리옹 오픈 결승 vs 토마스 에체베리',
                date: '2024. 05. 25',
                description: '자신의 고향에서 열린 대회. 세계 랭킹 100위 밖의 와일드카드로 출전해 결승까지 올라 우승 트로피를 들어 올렸습니다. 2004년생의 패기를 보여준 대회였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "베이비 자이언트"</div>
                    <p>거대한 덩치와는 다르게 얼굴은 아직 앳된 소년의 모습입니다. 순박한 미소와 무시무시한 플레이의 갭 차이가 팬들을 사로잡습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"윔블던 돌풍"</strong></p>
                <p>2024년 윔블던에서 '럭키 루저'로 본선에 합류해 16강까지 진출했습니다(세바스찬 코르다, 니시오카 격파). 잔디 코트에서 그의 서브는 핵무기급입니다.</p>
            `,
            faq: [
                {
                    question: '이름이 어느 나라 식인가요?',
                    answer: 'Mpetshi(음페치)는 콩고 민주 공화국 계열의 성입니다. 아버지가 콩고 출신 축구 선수였습니다. 프랑스는 이민자 출신 스포츠 스타가 많습니다.'
                },
                {
                    question: '원핸드 백핸드는 누구한테 배웠나요?',
                    answer: '처음에는 양손을 쳤으나, 코치들이 그의 긴 팔과 힘을 보고 원핸드로 전향을 권유했다고 합니다. 지금은 그의 상징이 되었습니다.'
                },
                {
                    question: '서브 최고 속도는?',
                    answer: '이미 240km/h에 육박하는 서브를 기록한 바 있습니다. 기술이 더 다듬어지면 세계 신기록(263km/h)에도 도전할 만한 잠재력이 있습니다.'
                }
            ]
        }
    },

    // --- New Male Players (30) ---
    'rafael-nadal': {
        name: '라파엘 나달', nameEn: 'Rafael Nadal', country: 'Spain', countryFlag: '🇪🇸', image: '/images/players/rafael-nadal.png', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '클레이 황제, 라파엘 나달. 흙신이라는 별명답게 롤랑가로스 최다 우승 기록을 보유하고 있으며, 강력한 탑스핀 포핸드와 불굴의 정신력으로 테니스 역사를 새로 썼습니다.',
        detailedProfile: {
            oneLineSummary: '불멸의 "클레이 황제", 테니스 역사상 가장 위대한 투사.',
            whyNotable: `
                <p><strong>"흙신(The King of Clay)"</strong></p>
                <p>라파엘 나달은 특정 코트에서 인류 역사상 가장 압도적인 지배력을 보여준 선수입니다. <strong>롤랑가로스(프랑스 오픈) 14회 우승</strong>이라는 전무후무한 대기록은 앞으로도 깨지기 힘든 불멸의 기록으로 평가받습니다.</p>
                <p>하지만 그를 단순히 클레이 코트 전문가로만 부르는 것은 실례입니다. 커리어 골든 슬램(4대 메이저 + 올림픽 금메달)을 달성한 역대 최연소 선수이며, 부상으로 인한 숱한 위기 속에서도 오뚝이처럼 다시 일어서는 불굴의 정신력은 전 세계 스포츠 팬들에게 깊은 울림을 주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"헤비 탑스핀 베이스라이너 (Heavy Topspin Baseliner)"</strong></p>
                <p>나달의 테니스는 '물리학적 파괴력'으로 정의됩니다. 분당 회전수(RPM) 3,500을 넘나드는 그의 왼손 포핸드는 상대의 머리 위로 튀어 오르며 수비를 불가능하게 만듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 그의 트레이드마크인 '라소(Lasso)' 스윙에서 나오는 헤비 탑스핀은 상대 코트 깊숙이 떨어져 엄청난 높이로 튀어 오릅니다.</li>
                    <li><strong>수비:</strong> '나달 존'이라 불리는 베이스라인 밖에서의 수비 능력은 타의 추종을 불허합니다. 포기하지 않고 끝까지 쫓아가 위너로 되치기합니다.</li>
                    <li><strong>멘탈:</strong> "한 포인트, 한 포인트를 내 인생의 마지막 포인트처럼 칩니다."라는 그의 말처럼, 경기 시작부터 끝까지 집중력을 잃지 않습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '멘탈 (Mental)', score: 10, description: '스포츠 역사상 가장 강인한 정신력.' },
                { name: '포핸드 (Forehand)', score: 10, description: '역사상 가장 위력적인 왼손 포핸드.' },
                { name: '체력 (Stamina)', score: 10, description: '지치지 않는 무한한 엔진.' },
                { name: '수비 (Defense)', score: 10, description: '클레이 코트에서는 뚫을 수 없는 벽.' },
                { name: '스피드 (Speed)', score: 9.5, description: '전성기 시절의 코트 커버리지는 신계.' },
                { name: '네트 플레이 (Net)', score: 9, description: '과소평가되었지만 매우 뛰어난 발리 감각.' }
            ],
            growthStory: `
                <p>스페인 마요르카 출신으로, 원래 오른손잡이였으나 토니 나달 코치(삼촌)의 권유로 왼손잡이 테니스를 시작했습니다. 이는 테니스 역사상 가장 성공적인 전략적 선택 중 하나였습니다.</p>
                <p>2005년 첫 롤랑가로스 우승 이후 10년 넘게 세계 정상을 지켰습니다. 고질적인 무릎 부상과 발 부상(뮐러-와이즈 증후군)에도 불구하고, 끝내 재활에 성공하여 2022년 호주 오픈과 프랑스 오픈을 제패하는 기적을 보여주었습니다.</p>
            `,
            signatureMatch: {
                title: '2008 윔블던 결승 vs 로저 페더러',
                date: '2008. 07. 06',
                description: '테니스 역사상 가장 위대한 경기로 꼽히는 명승부. 페더러의 안방인 잔디 코트에서 4시간 48분의 혈투 끝에 세트 스코어 3-2로 승리하며, 나달이 더 이상 클레이만의 강자가 아님을 전 세계에 선포했습니다.'
            },
            recentForm: `
                <p><strong>"라스트 댄스"</strong></p>
                <p>2024년은 나달의 마지막 시즌이 될 가능성이 높습니다. 부상에서 복귀하여 클레이 시즌과 올림픽에 모든 것을 걸고 있으며, 그의 마지막 투혼을 보는 것만으로도 팬들에게는 큰 선물입니다.</p>
            `
        }
    },
    'andy-murray': {
        name: '앤디 머레이', nameEn: 'Andy Murray', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '영국의 테니스 영웅, 앤디 머레이. 놀라운 수비력과 전술적인 플레이로 BIG 4의 일원으로 활약했으며, 윔블던 우승으로 영국 테니스의 한을 풀었습니다.',
        detailedProfile: {
            oneLineSummary: '영국 테니스의 77년 한을 푼 영웅, 불가능을 가능으로 만든 "인조인간(Bionic Man)".',
            whyNotable: `
                <p><strong>"Big 4의 일원이자 불굴의 영웅"</strong></p>
                <p>앤디 머레이는 페더러, 나달, 조코비치라는 역사상 가장 위대한 세 명의 괴물들과 동시대에 경쟁하며 세계 1위까지 올랐던 유일한 인간입니다. 2013년 윔블던 우승으로 프레드 페리 이후 77년 만에 영국인 윔블던 챔피언이 되며 국민 영웅으로 등극했습니다.</p>
                <p>고관절 금속 이식 수술이라는 선수 생명이 끝날 위기를 겪고도, 피나는 재활 끝에 코트로 돌아와 다시 승리를 쌓아가는 그의 모습은 전 세계에 감동을 주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"수비형 카운터 펀처 + 전술가 (Tactician)"</strong></p>
                <p>머레이는 투어 최고의 <strong>테니스 IQ</strong>를 가진 선수 중 한 명입니다. 상대의 강공을 끈질기게 받아넘기며 실수를 유도하고, 빈틈이 보이면 날카로운 카운터 샷이나 정교한 롭(Lob)으로 득점합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 조코비치와 함께 투어 최고의 리터너로 꼽힙니다. 아무리 빠른 서브도 반사적으로 받아냅니다.</li>
                    <li><strong>백핸드:</strong> 매우 안정적이고 강력한 투핸드 백핸드를 가지고 있으며, 다운더라인 공격이 일품입니다.</li>
                    <li><strong>롭(Lob):</strong> 네트 앞에 나온 상대를 키 넘기는 탑스핀 롭은 그의 시그니처 무기입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '전술 (Tactics)', score: 10, description: '상대의 약점을 집요하게 파고드는 천재적인 두뇌.' },
                { name: '리턴 (Return)', score: 10, description: '서브 에이스를 허용하지 않는 철벽 리턴.' },
                { name: '수비 (Defense)', score: 10, description: '미친 활동량으로 모든 공을 건져냄.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 모두 완벽한 백핸드.' },
                { name: '멘탈 (Mental)', score: 9, description: '코트 위에서 불평이 많지만 끝까지 포기하지 않음.' },
                { name: '서브 (Serve)', score: 8, description: '첫 서브는 강력하나 두 번째 서브가 약점.' }
            ],
            growthStory: `
                <p>스코틀랜드 던블레인 출신으로, 테니스 코치인 어머니 주디 머레이의 지도를 받으며 자랐습니다. 1996년 던블레인 초등학교 총기 난사 사건의 생존자라는 아픈 과거를 가지고 있습니다.</p>
                <p>주니어 시절부터 두각을 나타냈으며, 스페인 유학을 통해 클레이 코트 능력을 보완했습니다. 4번의 그랜드슬램 준우승 끝에 2012년 US 오픈에서 첫 메이저 타이틀을 따내며 '무관의 제왕' 설움을 씻어냈습니다.</p>
            `,
            signatureMatch: {
                title: '2013 윔블던 결승 vs 노박 조코비치',
                date: '2013. 07. 07',
                description: '영국 전체가 숨죽여 지켜본 경기. 세계 1위 조코비치를 상대로 세트 스코어 3-0 완승을 거두며, 영국인들의 77년 숙원이었던 윔블던 우승 트로피를 들어 올렸습니다.'
            },
            recentForm: `
                <p><strong>"아름다운 황혼기"</strong></p>
                <p>인공 고관절 수술 후 예전만 한 기량은 아니지만, 여전히 투어 레벨에서 승리할 수 있는 경쟁력을 보여주었습니다. 2024년 파리 올림픽을 끝으로 은퇴를 선언하며 전설적인 커리어의 마침표를 찍었습니다.</p>
            `
        }
    },
    'stan-wawrinka': {
        name: '스탄 바브린카', nameEn: 'Stan Wawrinka', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'male',
        plays: 'Right-handed', backhand: 'One-handed',
        longBio: '대기만성형 스타, 스탄 바브린카. "Stanimal"이라는 별명처럼 폭발적인 파워와 예술적인 원핸드 백핸드로 그랜드슬램 3회 우승을 달성했습니다.',
        detailedProfile: {
            oneLineSummary: '예술적인 원핸드 백핸드와 묵직한 파워로 Big 4의 아성을 무너뜨린 "Stanimal".',
            whyNotable: `
                <p><strong>"Big 4 시대의 유일한 대항마"</strong></p>
                <p>스탄 바브린카는 페더러, 나달, 조코비치, 머레이가 지배하던 시대에 그들의 독주를 저지하고 3개의 그랜드슬램 타이틀을 획득한 유일한 선수입니다. 특히 결승전 승률 100%(3전 3승)라는 놀라운 집중력으로 큰 경기 강자의 면모를 보여주었습니다.</p>
                <p>그의 원핸드 백핸드는 테니스 역사상 가장 강력하고 아름다운 샷 중 하나로 꼽히며, 'Stan the Man', 'Stanimal' 등의 애칭으로 전 세계 팬들의 사랑을 받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>바브린카의 플레이는 '묵직함' 그 자체입니다. 엄청난 상체 근력에서 나오는 파워풀한 그라운드스트로크는 상대를 베이스라인 뒤로 밀어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>원핸드 백핸드:</strong> 그의 상징과도 같은 기술. 엄청난 라켓 스피드로 다운더라인 위너를 밥 먹듯이 만들어냅니다.</li>
                    <li><strong>포핸드:</strong> 백핸드에 가려져 있지만, 포핸드 역시 투어 최상위권의 파워와 회전을 자랑합니다.</li>
                    <li><strong>서브:</strong> 최고 시속 230km에 육박하는 강력한 첫 서브는 그의 공격적인 게임을 뒷받침합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '투어 역사상 가장 무거운 공을 치는 선수 중 하나.' },
                { name: '백핸드 (Backhand)', score: 10, description: '타의 추종을 불허하는 역대 최고의 원핸드 백핸드.' },
                { name: '서브 (Serve)', score: 9, description: '클러치 상황에서 터지는 강력한 에이스.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '큰 경기에 강한 강심장, 하지만 기복이 있음.' },
                { name: '체력 (Stamina)', score: 9, description: '5세트 접전에서도 지치지 않는 "Stanimal".' },
                { name: '스피드 (Speed)', score: 7.5, description: '빠른 발보다는 묵직한 풋워크를 가짐.' }
            ],
            growthStory: `
                <p>스위스 로잔 근교의 농장에서 자랐습니다. 어린 시절에는 같은 국적의 '황제' 로저 페더러의 그늘에 가려져 있었지만, 꾸준한 노력으로 자신만의 입지를 다졌습니다.</p>
                <p>20대 후반의 늦은 나이에 전성기를 맞이한 대기만성형 선수입니다. 2014년 호주 오픈에서 나달을 꺾고 첫 메이저 우승을 차지하며 전설의 시작을 알렸고, 자신의 팔뚝에 새긴 사뮈엘 베케트의 명언처럼 "실패하라, 더 잘 실패하라(Fail better)"는 정신으로 끊임없이 도전했습니다.</p>
            `,
            signatureMatch: {
                title: '2015 롤랑가로스 결승 vs 노박 조코비치',
                date: '2015. 06. 07',
                description: '커리어 그랜드슬램을 노리던 천하무적 조코비치를 상대로 믿을 수 없는 위너들을 쏟아내며 3-1 역전승을 거두었습니다. 바브린카의 "인생 경기"로 회자됩니다.'
            },
            recentForm: `
                <p><strong>"마지막 불꽃"</strong></p>
                <p>30대 후반의 나이와 무릎 수술의 여파로 전성기 기량은 아니지만, 여전히 현역 선수로 활동하며 테니스에 대한 열정을 보여주고 있습니다. 가끔씩 번뜩이는 샷으로 팬들에게 옛 향수를 불러일으키고 있습니다.</p>
            `
        }
    },
    'kei-nishikori': {
        name: '니시코리 케이', nameEn: 'Kei Nishikori', country: 'Japan', countryFlag: '🇯🇵', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '아시아 남자 테니스의 자존심. 빠른 발과 뛰어난 리턴 능력, 그리고 시그니처인 "Air-K" 점프 샷으로 유명합니다.',
        detailedProfile: {
            oneLineSummary: '아시아 남자 테니스 역대 최고 순위(4위), 불리한 신체 조건을 극복한 "샷 메이킹의 마법사".',
            whyNotable: `
                <p><strong>"아시아 테니스의 선구자"</strong></p>
                <p>니시코리 케이는 2014년 US 오픈 준우승을 차지하며 아시아 남자 선수 최초로 그랜드슬램 결승에 진출했습니다. 서양 선수들에 비해 왜소한 체격(178cm)임에도 불구하고, 5세트 승률 역대 1위(현역 기준)라는 놀라운 정신력과 체력으로 세계 4위까지 올랐습니다.</p>
                <p>그의 성공은 수많은 아시아 테니스 키즈들에게 "할 수 있다"는 희망을 심어주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 + 샷 메이커"</strong></p>
                <p>니시코리는 베이스라인에 바짝 붙어서 라이징 볼을 처리하는 능력이 탁월합니다. 박자를 뺏는 빠른 템포의 스트로크로 상대를 좌우로 흔듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투어 전체에서도 손꼽히는 명품 투핸드 백핸드. 다운더라인 공격은 그의 가장 강력한 무기입니다.</li>
                    <li><strong>Air-K:</strong> 기회가 오면 공중으로 점프하며 포핸드 위너를 꽂아 넣는 '에어 케이'는 그의 트레이드마크입니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브를 베이스라인 안쪽에서 받아치며 공격적인 포지션을 선점합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '코트 위를 날아다니는 듯한 민첩성.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '조코비치, 머레이와 비견되는 백핸드 마스터.' },
                { name: '리턴 (Return)', score: 9, description: '공격적인 리턴으로 상대를 압박.' },
                { name: '멘탈 (Mental)', score: 9, description: '5세트의 사나이. 끝까지 포기하지 않음.' },
                { name: '파워 (Power)', score: 7.5, description: '체격의 한계로 인해 절대적인 파워는 부족.' },
                { name: '서브 (Serve)', score: 7, description: '그의 유일한 아킬레스건.' }
            ],
            growthStory: `
                <p>일본 시마네현 출신으로, 14세 때 소니 회장의 후원으로 미국 플로리다의 닉 볼리티에리 아카데미로 유학을 떠났습니다.</p>
                <p>'프로젝트 45'(이전 일본 최고 랭킹 46위를 넘어서겠다는 목표)를 훨씬 뛰어넘어 세계 4위까지 오르며 아시아 테니스의 역사를 새로 썼습니다. 잦은 부상으로 "유리몸"이라는 비판도 받지만, 챌린저 대회부터 다시 시작하여 재기를 꿈꾸는 그의 도전은 현재진행형입니다.</p>
            `,
            signatureMatch: {
                title: '2014 US 오픈 4강 vs 노박 조코비치',
                date: '2014. 09. 06',
                description: '테니스계를 충격에 빠뜨린 이변. 당대 최강 조코비치를 상대로 30도가 넘는 폭염 속에서 4세트 승리를 거두며 아시아 남자 선수 최초로 그랜드슬램 결승에 진출했습니다.'
            },
            recentForm: `
                <p><strong>"끝없는 도전"</strong></p>
                <p>큰 부상으로 인해 랭킹이 많이 떨어졌지만, 2024년 몬트리올 마스터스 8강에 오르는 등 여전한 클래스를 보여주고 있습니다. 그의 마지막 목표는 다시 한번 메이저 대회에서 경쟁력을 증명하는 것입니다.</p>
            `
        }
    },
    'soonwoo-kwon': {
        name: '권순우', nameEn: 'Soonwoo Kwon', country: 'Korea', countryFlag: '🇰🇷', image: '/images/players/soonwoo-kwon.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대한민국 테니스의 새로운 역사를 쓴 "코리안 썬더". 이형택 이후 18년 만에 ATP 투어 우승을 차지했으며, 한국 선수 최초로 ATP 투어 2회 우승이라는 금자탑을 쌓은 명실상부한 한국 테니스의 에이스입니다.',
        detailedProfile: {
            oneLineSummary: '한국 테니스 최초 ATP 투어 2회 우승! 체격의 열세를 스피드와 "닥공"으로 극복한 불굴의 파이터.',
            whyNotable: `
                <p><strong>"한국 테니스의 역사를 새로 쓴 에이스"</strong></p>
                <p>권순우는 이형택 이후 오랫동안 침체기였던 한국 테니스에 혜성처럼 등장한 희망입니다. 2021년 아스타나 오픈 우승으로 18년 만에 한국인 ATP 투어 챔피언이 되었고, 2023년에는 애들레이드 인터내셔널 2에서 '러키 루저(Lucky Loser)'로 본선에 올라 우승까지 차지하는 기적을 쓰며 <strong>한국인 최초 ATP 투어 멀티 타이틀(2승)</strong> 보유자가 되었습니다.</p>
                <p>세계적인 선수들에 비해 왜소한 체격(180cm, 72kg)이지만, 한 박자 빠른 타이밍과 물러서지 않는 공격적인 플레이로 서양의 거구들을 쓰러뜨리는 모습은 짜릿한 쾌감을 선사합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 속사포 (Aggressive Shotmaker)"</strong></p>
                <p>권순우의 테니스는 '빠름'과 '닥공(닥치고 공격)'으로 요약됩니다. 상대가 준비할 시간을 주지 않는 빠른 템포의 스트로크와 기민한 발놀림이 그의 전매특허입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 체중을 온전히 실어 때리는 포핸드는 체격 대비 놀라운 파워를 냅니다. 특히 라이징 볼을 공략해 박자를 뺏는 샷이 일품입니다.</li>
                    <li><strong>드롭샷:</strong> 빠른 발을 이용해 코트 안으로 들어가 구사하는 드롭샷은 성공률이 매우 높습니다.</li>
                    <li><strong>스피드:</strong> 투어 내에서도 수준급인 풋워크로 코트 구석구석을 커버하며, 수비 후 역습 전환이 매우 빠릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9, description: '체격을 뛰어넘는 파워와 박자 뺏기.' },
                { name: '스피드 (Speed)', score: 9, description: '투어 상위권의 민첩한 풋워크.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '러키 루저 우승 신화를 쓴 강심장.' },
                { name: '전술 (Tactics)', score: 8.5, description: '다양한 구질로 상대를 흔드는 영리함.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이고 견고한 연결.' },
                { name: '서브 (Serve)', score: 7, description: '신체 조건상 절대적 위력은 다소 부족.' }
            ],
            growthStory: `
                <p>경상북도 상주 출신으로 초등학교 4학년 때 테니스를 시작했습니다. 고교 시절부터 두각을 나타냈으며, 건국대학교 재학 중 퓨처스 대회를 휩쓸며 프로 무대에 뛰어들었습니다.</p>
                <p>당진시청에 입단 후 체계적인 지원 속에 급성장했습니다. 챌린저 무대를 평정하고 ATP 투어에 도전하여, 실패를 두려워하지 않는 도전 정신으로 마침내 세계 52위(커리어 하이)에 오르는 기염을 토했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 애들레이드 인터내셔널 2 결승 vs 로베르토 바우티스타 아굿',
                date: '2023. 01. 14',
                description: '한국 테니스 역사의 명장면. 예선에서 탈락했으나 기권자 발생으로 본선에 합류(러키 루저)한 뒤 우승까지 차지하는 영화 같은 스토리를 완성했습니다. 결승에서 베테랑 바우티스타 아굿을 상대로 3세트 접전 끝에 승리하며 한국인 최초 투어 2회 우승을 달성했습니다.'
            },
            recentForm: `
                <p><strong>"부활을 위한 숨고르기"</strong></p>
                <p>어깨 부상 등으로 잠시 공백기가 있었고 랭킹이 하락했지만, 보호 랭킹(PR) 제도를 활용해 다시 투어 무대를 두드리고 있습니다. 여전히 공격적인 본능은 살아있으며, 건강만 회복한다면 언제든 다시 투어급 경쟁력을 보여줄 수 있는 선수입니다.</p>
            `
        }
    },
    'christopher-eubanks': {
        name: '크리스토퍼 유뱅크스', nameEn: 'Christopher Eubanks', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '201cm의 장신에서 뿜어져 나오는 강력한 서브와 시원한 포핸드, 그리고 우아한 원핸드 백핸드가 특징입니다. 2023 윔블던 8강 돌풍의 주인공입니다.',
        detailedProfile: {
            oneLineSummary: '201cm의 장신에서 나오는 우아한 원핸드 백핸드, 윔블던이 사랑한 "빅 지라프".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦒 "테니스계의 기린(The Giraffe)"</div>
                    <p>2미터가 넘는 키에 마른 몸매, 그리고 긴 팔다리로 코트를 누비는 모습 때문에 <strong>"기린"</strong>이라는 별명을 얻었습니다. 2023년 윔블던에서 세계적인 선수들을 연달아 꺾고 8강에 진출하는 이변을 일으키며 전 세계 팬들에게 강력한 인상을 남겼습니다. 미국 테니스 방송 해설가로도 활동할 만큼 입담도 좋습니다.</p>
                </div>
                <p>장신 선수로는 드물게 <strong>원핸드 백핸드</strong>를 구사하는데, 높은 타점에서 때리는 그의 백핸드 위너는 그야말로 예술 작품입니다.</p>
            `,
            playStyle: `
                <p><strong>"서브 앤 포핸드 + 원핸드 백핸드"</strong></p>
                <p>큰 키를 이용한 서브는 각도가 예리하고 탄력이 좋습니다. 여기에 시원시원한 포핸드와 우아한 백핸드가 더해져 공격적인 테니스를 구사합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 유뱅크스의 3가지 "매력 포인트"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>서브:</strong> 최고 220km/h에 달하는 서브는 그의 가장 큰 무기입니다. 잔디 코트에서 특히 위력적입니다.</li>
                        <li><strong>원핸드 백핸드:</strong> 보통 키 큰 선수는 안정적인 투핸드를 선호하지만, 그는 호쾌한 원핸드로 위너를 만들어냅니다.</li>
                        <li><strong>스마일:</strong> 경기 중에 실수를 해도 웃어넘기는 여유와 긍정적인 태도가 팬들을 즐겁게 합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '높은 타점에서 내리꽂는 강서브.' },
                { name: '파워 (Power)', score: 8.5, description: '긴 팔다리에서 나오는 시원한 스윙.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '희소성 있는 장신 원핸드.' },
                { name: '멘탈 (Mental)', score: 8, description: '긍정적이고 여유로움.' },
                { name: '이동 (Movement)', score: 7, description: '큰 키에 비해 민첩하지만 끈질긴 편은 아님.' },
                { name: '수비 (Defense)', score: 6.5, description: '공격이 막히면 어려워함.' }
            ],
            growthStory: `
                <p>미국 애틀랜타 출신으로, 조지아 공대(Georgia Tech)에서 대학 테니스 선수로 활약했습니다. 학업과 운동을 병행한 '공부하는 운동선수'의 모범 사례입니다. 대학 졸업 후 프로에 데뷔하여 챌린저를 거쳐 늦은 나이에 기량이 만개했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 16강 vs 스테파노스 치치파스',
                date: '2023. 07. 10',
                description: '그의 인생을 바꾼 경기. 세계 랭킹 5위 치치파스를 상대로 풀세트 접전 끝에 승리하며 생애 첫 메이저 8강에 진출했습니다. "꿈만 같다"며 울먹이는 인터뷰는 많은 이들을 감동시켰습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎙️ "해설하는 선수"</div>
                    <p>테니스 채널(Tennis Channel)의 해설가로도 활동 중입니다. 현역 선수가 해설을 병행하는 것은 드문데, 그의 분석은 매우 정확하고 통찰력이 있어 팬들에게 인기가 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"잔디 코트의 강자"</strong></p>
                <p>2023년 마요르카 챔피언십 우승, 윔블던 8강 등 잔디 코트에서 유독 강한 모습을 보입니다. 2024년 윔블던 이후 랭킹 방어에 다소 어려움을 겪고 있지만, 여전히 까다로운 상대입니다.</p>
            `,
            faq: [
                {
                    question: '키가 정말 큰데 농구는 안 했나요?',
                    answer: '아버지가 침례교 목사이자 테니스광이었습니다. 자연스럽게 어릴 때부터 테니스를 접했고, 농구보다 테니스에 더 흥미를 느꼈다고 합니다. 물론 농구 실력도 수준급이라고 합니다.'
                },
                {
                    question: '제이미 폭스와 친한가요?',
                    answer: '네, 할리우드 배우 제이미 폭스와 매우 절친한 사이입니다. 제이미 폭스가 유뱅크스의 경기를 직접 관람하고 응원하는 모습이 자주 목격됩니다.'
                },
                {
                    question: '왜 원핸드 백핸드를 치나요?',
                    answer: '어릴 때 로저 페더러를 동경하여 따라 했다고 합니다. 코치들이 바꾸라고 권유했지만 고집을 꺾지 않았고, 지금은 그의 트레이드마크가 되었습니다.'
                }
            ]
        }
    },
    'emil-ruusuvuori': {
        name: '에밀 루수부오리', nameEn: 'Emil Ruusuvuori', country: 'Finland', countryFlag: '🇫🇮', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '핀란드를 대표하는 테니스 에이스. 군더더기 없는 깔끔한 폼에서 나오는 강력한 그라운드 스트로크가 주무기인 베이스라이너입니다.',
        detailedProfile: {
            oneLineSummary: '얼음 나라 핀란드에서 온 "아이스맨", 군더더기 없는 교과서적인 폼의 정석.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❄️ "핀란드의 테니스 영웅"</div>
                    <p>야르코 니에미넨 은퇴 이후 명맥이 끊겼던 핀란드 테니스의 부활을 이끈 에이스입니다. 북유럽 선수 특유의 <strong>차분하고 냉철한(Ice-cold)</strong> 경기 운영이 돋보입니다. 어떤 상황에서도 표정 변화가 거의 없어 "포커페이스"로 불립니다.</p>
                </div>
                <p>매우 교과서적이고 깔끔한 폼을 가지고 있어 테니스 동호인들이 롤 모델로 삼기에 가장 좋은 선수 중 한 명입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>모든 샷이 간결하고 타점이 빠릅니다. 큰 힘을 들이지 않는 것 같은데 공은 묵직하고 깊게 깔려 들어갑니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇮 루수부오리의 3가지 "북유럽 스타일"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>클린 히팅:</strong> 공을 라켓 정중앙(스윗 스팟)에 맞추는 능력이 탁월합니다. 빗맞은 공이 거의 없습니다.</li>
                        <li><strong>양손 백핸드:</strong> 흔들림 없는 백핸드는 그의 가장 믿을 수 있는 무기입니다. 랠리 싸움에서 좀처럼 밀리지 않습니다.</li>
                        <li><strong>템포 조절:</strong> 무리하게 강타를 날리기보다는, 반 박자 빠른 템포로 상대를 압박하여 스스로 무너지게 만듭니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '기본기 (Basics)', score: 9.5, description: '교과서 그 자체인 폼.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '매우 안정적이고 견고함.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '깔끔하고 군더더기 없음.' },
                { name: '멘탈 (Mental)', score: 8, description: '감정 기복이 적고 차분함.' },
                { name: '이동 (Movement)', score: 7.5, description: '준수한 코트 커버리지.' },
                { name: '서브 (Serve)', score: 7.5, description: '평균 이상의 위력.' }
            ],
            growthStory: `
                <p>핀란드 헬싱키 출신으로 5세 때 배드민턴을 치다가 테니스 코치의 눈에 띄어 라켓을 잡았습니다. 2017년 ITF 주니어 마스터스 우승을 차지하며 유망주로 떠올랐고, 꾸준히 랭킹을 올려 핀란드 역대 최고 랭킹 2위 기록을 세웠습니다.</p>
            `,
            signatureMatch: {
                title: '2023 마이애미 오픈 8강 진출',
                date: '2023. 03',
                description: '마스터스 1000 시리즈 8강에 오르며 자신의 최고 성적을 기록했습니다. 특히 2회전에서 세계 랭킹 10위권의 바우티스타 아굿을 압도하는 모습은 인상적이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥁 "헤비메탈 드러머?"</div>
                    <p>취미로 드럼을 연주합니다. 핀란드가 헤비메탈 강국이라 그런지 음악적 취향이 꽤 하드하다고 합니다. 차분한 외모와는 다른 반전 매력입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 안착"</strong></p>
                <p>큰 부상 없이 꾸준히 투어 대회를 소화하며 40~50위권을 유지하고 있습니다. 폭발적인 한 방은 없지만, 누구를 만나도 쉽게 지지 않는 저력을 보여줍니다.</p>
            `,
            faq: [
                {
                    question: '핀란드에 테니스 선수가 많나요?',
                    answer: '핀란드는 아이스하키나 스키가 인기 있는 나라라 테니스 불모지에 가깝습니다. 그래서 루수부오리의 활약이 핀란드 내에서는 더욱 특별하게 여겨집니다.'
                },
                {
                    question: '자주 하는 훈련 방식은?',
                    answer: '눈이 많이 오는 핀란드 환경상 실내 코트 훈련을 많이 했습니다. 그래서인지 바람이나 태양의 영향을 받지 않는 실내 대회에서 성적이 더 좋은 편입니다.'
                },
                {
                    question: '군대는 다녀왔나요?',
                    answer: '네, 핀란드는 징병제 국가입니다. 루수부오리도 스포츠 부대로 입대하여 군 복무를 마쳤습니다. 군 생활 중에도 훈련을 병행할 수 있었다고 합니다.'
                }
            ]
        }
    },
    'miomir-kecmanovic': {
        name: '미오미르 케크마노비치', nameEn: 'Miomir Kecmanovic', country: 'Serbia', countryFlag: '🇷🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '세르비아 테니스의 계보를 잇는 선수. 탄탄한 기본기와 끈질긴 수비력, 그리고 기복 없는 플레이로 투어에서 꾸준한 성적을 내고 있습니다.',
        detailedProfile: {
            oneLineSummary: '조코비치 키즈의 선두주자, 탄탄한 기본기로 무장한 세르비아의 "육각형 미드필더".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇸 "제2의 팁사레비치"</div>
                    <p>노박 조코비치라는 거대한 산이 있는 세르비아에서 차세대 에이스로 주목받는 선수입니다. 주니어 세계 1위 출신으로 엘리트 코스를 밟았습니다. 특별히 못하는 샷이 없는 <strong>올라운드 플레이어</strong>로, 기복 없이 꾸준한 경기력을 보여주는 것이 가장 큰 장점입니다.</p>
                </div>
                <p>2022년 한 해에만 투어 4강 이상을 여러 차례 기록하며 잠재력을 폭발시켰습니다.</p>
            `,
            playStyle: `
                <p><strong>"안정적인 베이스라이너"</strong></p>
                <p>무리한 공격보다는 상대를 코트 구석으로 몰아넣고 실수를 유도하는 확률 높은 테니스를 구사합니다. 포핸드 역크로스 샷이 주 득점원입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🛡️ 케크마노비치의 3가지 "철벽"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>포핸드 역크로스:</strong> 베이스라인 중앙에서 바깥쪽으로 빠져나가며 치는 인사이드-아웃 포핸드가 매우 정교하고 강력합니다.</li>
                        <li><strong>리턴:</strong> 상대의 서브를 안전하게, 그러나 깊숙하게 돌려보내 랠리전으로 끌고 갑니다.</li>
                        <li><strong>체력:</strong> 5세트 경기에서도 지치지 않는 강철 체력을 가지고 있어, 랠리가 길어질수록 유리합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '기본기 (Basics)', score: 9, description: '모든 샷이 평균 이상.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '결정구로 사용하는 확실한 무기.' },
                { name: '체력 (Stamina)', score: 9, description: '랠리를 좋아함.' },
                { name: '이동 (Movement)', score: 8, description: '빠르고 안정적인 스텝.' },
                { name: '서브 (Serve)', score: 7, description: '키에 비해 평범한 편.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '위기 관리 능력이 다소 아쉬움.' }
            ],
            growthStory: `
                <p>세르비아 베오그라드 출신으로 6세 때 테니스를 시작했습니다. 13세 때 미국 플로리다의 IMG 아카데미로 유학을 떠나 선진 시스템을 경험했습니다. 2016년 오렌지 보울 우승, 주니어 랭킹 1위 등 화려한 주니어 시절을 보냈습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 16강 진출',
                date: '2024. 01',
                description: '토미 폴, 얀-레나드 스트루프 등 강자들을 꺾고 그랜드슬램 16강에 올랐습니다. 특히 2회전에서 매치 포인트를 막아내고 역전승한 경기는 그의 끈기를 보여주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤝 "조코비치의 든든한 후배"</div>
                    <p>세르비아 국가대표팀에서 조코비치와 함께 뛰며 많은 것을 배우고 있습니다. 조코비치 역시 그를 매우 아끼며 조언을 아끼지 않는다고 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"꾸준함의 대명사"</strong></p>
                <p>화려한 우승은 적지만, 매 대회 1-2회전 탈락 없이 꾸준히 포인트를 쌓으며 40~50위권을 안정적으로 방어하고 있습니다. 한 단계 도약을 위해서는 결정적인 한 방이 필요해 보입니다.</p>
            `,
            faq: [
                {
                    question: '미국 영주권자인가요?',
                    answer: '어릴 때부터 미국에서 훈련받았고 거주하고 있지만, 국적은 세르비아를 유지하고 있으며 국가대표로도 뜁니다. 영어는 원어민 수준으로 구사합니다.'
                },
                {
                    question: '코치는 누구인가요?',
                    answer: '과거 나달의 라이벌이었던 다비드 날반디안이 코치로 합류한 적이 있어 화제가 되었습니다. 날반디안의 지도로 공격적인 성향이 많이 가미되었습니다.'
                },
                {
                    question: '별명은 무엇인가요?',
                    answer: '"Miša(미샤)"라는 애칭으로 불립니다. 세르비아 이름의 전형적인 애칭입니다.'
                }
            ]
        }
    },
    'roman-safiullin': {
        name: '로만 사피울린', nameEn: 'Roman Safiullin', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아의 숨은 강자. 호주 오픈 주니어 챔피언 출신으로, 부상을 딛고 일어나 2023 윔블던 8강에 오르며 강력한 파워 히터의 면모를 과시했습니다.',
        detailedProfile: {
            oneLineSummary: '부상을 딛고 일어선 주니어 챔피언 출신, 윔블던 8강으로 증명한 "러시안 파워".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐻 "잠자는 곰의 각성"</div>
                    <p>주니어 시절 메드베데프, 루블레프보다 더 기대받던 유망주였으나, 잦은 부상으로 오랫동안 빛을 보지 못했습니다. 하지만 2023년 윔블던에서 샤포발로프 등을 꺾고 8강에 오르며 마침내 잠재력을 폭발시켰습니다. 묵직한 베이스라인 플레이는 <strong>러시아 테니스의 정석</strong>을 보여줍니다.</p>
                </div>
                <p>ATP 컵에서 메드베데프와 함께 러시아를 4강으로 이끄는 활약을 펼치며 "비밀병기"라는 별명을 얻기도 했습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀한 올라운더"</strong></p>
                <p>화려한 기교보다는 힘과 정확성을 겸비한 샷으로 상대를 압박합니다. 서브와 그라운드스트로크 모두 묵직합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇺 사피울린의 3가지 "러시안 룰렛"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>강력한 샷:</strong> 포핸드와 백핸드 모두 위너를 낼 수 있는 파워를 갖추고 있습니다. 특히 하드 코트에서 공 속도가 매우 빠릅니다.</li>
                        <li><strong>리턴:</strong> 상대의 강서브를 밀리지 않고 그대로 받아쳐 공격 주도권을 가져옵니다.</li>
                        <li><strong>집중력:</strong> 랠리가 길어져도 서두르지 않고 침착하게 기회를 엿보는 멘탈이 강점입니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '양쪽 날개 모두 묵직함.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '어려움을 극복하며 단단해짐.' },
                { name: '서브 (Serve)', score: 8, description: '안정적인 득점 수단.' },
                { name: '백핸드 (Backhand)', score: 8, description: '실수가 적고 견고함.' },
                { name: '이동 (Movement)', score: 7.5, description: '준수한 코트 커버리지.' },
                { name: '네트 (Net)', score: 7, description: '네트 플레이 빈도는 높지 않음.' }
            ],
            growthStory: `
                <p>러시아 포돌스크 출신으로, 2015년 호주 오픈 주니어 단식 우승을 차지하며 세계적인 유망주로 주목받았습니다. 하지만 프로 데뷔 후 어깨 부상 등으로 긴 슬럼프를 겪었으나, 포기하지 않고 재기에 성공한 인간 승리의 주인공입니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 16강 vs 데니스 샤포발로프',
                date: '2023. 07. 09',
                description: '부상에서 돌아온 그가 메이저 대회에서 거둔 최고의 승리. 왼손잡이 강타자 샤포발로프를 상대로 3-1 역전승을 거두며 생애 첫 그랜드슬램 8강 진출의 쾌거를 이뤘습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤫 "조용한 강자"</div>
                    <p>코트 위에서 불필요한 제스처나 감정 표현을 거의 하지 않습니다. 묵묵히 자신의 플레이만 하는 모습이 오히려 카리스마 있게 느껴진다는 평입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 40 안착"</strong></p>
                <p>2023년 말 파리 마스터스에서 알카라스를 꺾는 대이변을 연출하며 기량이 만개했음을 알렸습니다. 2024년에도 꾸준히 투어 상위권 성적을 유지하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '메드베데프와 친한가요?',
                    answer: '네, 러시아 동갑내기 친구이자 국가대표 동료입니다. 주니어 시절부터 함께 경쟁하며 자랐고, ATP 컵에서 환상의 호흡을 보여주었습니다.'
                },
                {
                    question: '결혼했나요?',
                    answer: '네, 오랜 여자친구와 결혼하여 가정을 꾸렸습니다. 아내가 경기장에 자주 동행하며 내조하는 것으로 알려져 있습니다.'
                },
                {
                    question: '가장 좋아하는 샷은?',
                    answer: '양손 백핸드 다운더라인을 즐겨 칩니다. 위기 상황에서 분위기를 반전시키는 그의 필살기입니다.'
                }
            ]
        }
    },
    'laslo-djere': {
        name: '라슬로 제레', nameEn: 'Laslo Djere', country: 'Serbia', countryFlag: '🇷🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '불굴의 의지를 가진 선수. 개인적인 아픔을 극복하고 투어 우승을 차지한 인간 승리의 드라마를 썼으며, 클레이 코트에서 특히 끈질긴 모습을 보여줍니다.',
        detailedProfile: {
            oneLineSummary: '부모님을 잃은 슬픔을 테니스로 극복한 "인간 승리의 아이콘", 클레이 코트의 숨은 강자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😢 "눈물의 우승 스피치"</div>
                    <p>2019년 리우 오픈에서 생애 첫 우승을 차지한 후, 암으로 세상을 떠난 부모님께 바치는 눈물의 스피치는 전 세계 테니스 팬들을 울렸습니다. 엄청난 개인적인 비극을 딛고 프로 선수로서 성공한 그의 스토리는 많은 이들에게 깊은 감동과 용기를 줍니다.</p>
                </div>
                <p>클레이 코트에서 특히 강한 면모를 보이며, 조코비치 다음으로 세르비아 테니스를 이끄는 주축 멤버입니다.</p>
            `,
            playStyle: `
                <p><strong>"클레이 코트 스페셜리스트"</strong></p>
                <p>전형적인 클레이 코트 플레이어답게 엄청난 스핀양과 끈질긴 랠리 능력을 자랑합니다. 베이스라인에서 물러서지 않고 상대를 지치게 만듭니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🧱 제레의 3가지 "벽"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>탑스핀 포핸드:</strong> 공이 바운드 후 높게 튀어 오르는 헤비 탑스핀을 구사하여 상대를 베이스라인 뒤로 밀어냅니다.</li>
                        <li><strong>체력:</strong> 장기전 승부에 매우 강합니다. 뜨거운 햇볕 아래서도 끝까지 뛰어다니는 강인한 체력을 가졌습니다.</li>
                        <li><strong>멘탈:</strong> 삶의 역경을 이겨낸 멘탈은 코트 위에서도 빛납니다. 쉽게 무너지지 않는 끈기가 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 9.5, description: '진흙탕 싸움의 승자.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '인생의 무게를 견뎌낸 정신력.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '클레이에서 위력적인 탑스핀.' },
                { name: '수비 (Defense)', score: 8.5, description: '어떤 공이든 받아넘김.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적인 연결 위주.' },
                { name: '서브 (Serve)', score: 7, description: '파워보다는 코스 공략.' }
            ],
            growthStory: `
                <p>세르비아 센타 출신입니다. 20대 초반에 부모님을 모두 암으로 잃는 감당하기 힘든 시련을 겪었습니다. 하지만 테니스에 매진하며 슬픔을 이겨냈고, ATP 500 시리즈 우승까지 거머쥐며 하늘에 계신 부모님을 자랑스럽게 했습니다.</p>
            `,
            signatureMatch: {
                title: '2019 리우 오픈 결승 vs 펠릭스 오제 알리아심',
                date: '2019. 02. 24',
                description: '그의 첫 투어 우승이자 인생 경기. 떠오르는 신예 알리아심을 상대로 2-0 완승을 거두며 우승컵을 들어 올렸습니다. 우승 확정 후 라켓을 떨어뜨리고 하늘을 보며 눈물을 흘리는 장면은 명장면으로 남았습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">빵 굽는 테니스 선수?</div>
                    <p>취미로 베이킹을 즐긴다고 합니다. 코트 위에서의 진지한 모습과 달리, 앞치마를 두르고 빵을 굽는 가정적인 모습이 반전 매력을 선사합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클레이의 제왕"</strong></p>
                <p>2023년 함부르크 오픈 준우승 등 클레이 코트 대회에서 꾸준히 좋은 성적을 내고 있습니다. 하드 코트 성적만 보완한다면 랭킹 상승 여력은 충분합니다.</p>
            `,
            faq: [
                {
                    question: '가족 관계는 어떻게 되나요?',
                    answer: '여동생이 한 명 있습니다. 부모님이 돌아가신 후 여동생이 그의 가장 큰 버팀목이자 가족이라고 합니다.'
                },
                {
                    question: '조코비치와 대결한 적 있나요?',
                    answer: '네, 2022년 세르비아 오픈 2회전에서 조코비치를 만나 3세트 타이브레이크까지 가는 명승부를 펼쳤습니다. 조코비치도 "거의 질 뻔했다"며 혀를 내둘렀습니다.'
                },
                {
                    question: '주로 어떤 코트에서 잘하나요?',
                    answer: '압도적으로 클레이 코트 성적이 좋습니다. 투어 우승 2회 모두 클레이 코트(리우, 사르데냐)에서 기록했습니다.'
                }
            ]
        }
    },
    'daniel-evans': {
        name: '다니엘 에반스', nameEn: 'Daniel Evans', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '영국의 테크니션. 작은 체구지만 정교한 슬라이스와 뛰어난 네트 플레이, 그리고 창의적인 경기 운영으로 상대를 혼란에 빠뜨리는 지능적인 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '175cm의 "작은 거인", 현란한 슬라이스와 천재적인 감각으로 상대를 가지고 노는 테크니션.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🃏 "코트 위의 트릭스터"</div>
                    <p>요즘 테니스에서 보기 드문 <strong>다양성</strong>을 가진 선수입니다. 일정한 리듬으로 치는 현대 테니스 선수들에게 에반스의 불규칙한 슬라이스와 템포 변화는 쥐약과도 같습니다. 세계 1위였던 조코비치도 2021 몬테카를로 마스터스에서 에반스의 변칙 플레이에 말려 패배했습니다.</p>
                </div>
                <p>과거의 방황(약물 검사 양성으로 인한 자격 정지)을 딛고 돌아와 영국 랭킹 1위까지 올랐던 '돌아온 탕아' 스토리도 흥미롭습니다.</p>
            `,
            playStyle: `
                <p><strong>"올코트 플레이어 & 슬라이스 마스터"</strong></p>
                <p>힘으로 맞붙기보다는 머리를 씁니다. 백핸드 슬라이스로 상대를 낮은 위치로 끌어내린 뒤, 기습적인 네트 대시로 마무리하는 패턴이 일품입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎩 에반스의 3가지 "마법"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드 슬라이스:</strong> 투어 전체에서 가장 낮은 탄도로 깔리는 슬라이스를 구사합니다. 상대 무릎 높이 아래로 공이오니 공격하기가 매우 까다롭습니다.</li>
                        <li><strong>발리:</strong> 복식 경기도 많이 뛰는 만큼 네트 플레이가 매우 자연스럽고 센스 있습니다.</li>
                        <li><strong>변칙 운영:</strong> 서브 앤 발리, 칩 앤 차지 등 클래식한 전술을 현대적으로 해석하여 상대를 교란합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '손감각 (Touch)', score: 10, description: '라켓 컨트롤 능력은 천재적.' },
                { name: '전술 (Tactics)', score: 9.5, description: '상대를 함정에 빠뜨리는 설계.' },
                { name: '네트 (Net)', score: 9, description: '발리 타이밍과 코스 선택이 탁월.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '슬라이스는 최상급, 드라이브는 평범.' },
                { name: '이동 (Movement)', score: 8, description: '빠르고 민첩함.' },
                { name: '파워 (Power)', score: 6, description: '파워보다는 기술로 승부.' }
            ],
            growthStory: `
                <p>영국 버밍엄 출신으로 주니어 시절부터 '악동' 기질이 있었으나 재능만큼은 확실했습니다. 2017년 코카인 양성 반응으로 1년 자격 정지를 당하며 선수 생명이 끝날 뻔했으나, 밑바닥부터 다시 시작하여 Top 30까지 올라온 집념의 사나이입니다.</p>
            `,
            signatureMatch: {
                title: '2021 몬테카를로 마스터스 16강 vs 노박 조코비치',
                date: '2021. 04. 15',
                description: '세계 1위 조코비치를 상대로 클레이 코트에서 거둔 충격적인 승리. 에반스의 끊임없는 슬라이스와 변칙 플레이에 조코비치가 리듬을 완전히 잃고 무너졌습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "솔직한 입담"</div>
                    <p>인터뷰에서 가식 없이 자신의 생각(심지어 동료 선수 비판까지)을 쏟아내는 것으로 유명합니다. 호불호가 갈리지만, 솔직해서 좋다는 팬들도 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"베테랑의 품격"</strong></p>
                <p>30대 중반의 나이에도 여전히 투어에서 경쟁력을 보여주고 있습니다. 특히 2023년 워싱턴 오픈에서 우승하며 건재함을 과시했습니다. 단식과 복식을 병행하며 체력적 부담이 있지만 테니스를 즐기는 모습입니다.</p>
            `,
            faq: [
                {
                    question: '키가 작은데 불리하지 않나요?',
                    answer: '요즘 테니스 추세가 장신화되어 불리한 점은 분명 있습니다. 특히 서브 파워에서 밀립니다. 하지만 에반스는 빠른 발과 낮은 무게중심을 이용한 수비, 그리고 뛰어난 손감각으로 이를 극복했습니다.'
                },
                {
                    question: '슬라이스만 치나요?',
                    answer: '백핸드 드라이브도 칠 수 있지만, 전략적으로 슬라이스를 90% 이상 사용합니다. 이는 상대에게 낮은 공을 강요하고 자신의 다음 샷을 준비할 시간을 벌기 위함입니다.'
                },
                {
                    question: '축구를 좋아하나요?',
                    answer: '네, 애스턴 빌라 FC의 광적인 팬으로 유명합니다. 훈련이나 경기 중에도 축구 소식을 챙겨볼 정도입니다.'
                }
            ]
        }
    },
    'roberto-carballes-baena': {
        name: '로베르토 카르바예스 바에나', nameEn: 'Roberto Carballes Baena', country: 'Spain', countryFlag: '🇪🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '전형적인 스페인 클레이 코트 스페셜리스트. 지치지 않는 체력과 끈질긴 랠리 능력으로 상대를 진이 빠지게 만드는 "늪 테니스"의 구사자입니다.',
        detailedProfile: {
            oneLineSummary: '스페인산 "지치지 않는 모터", 상대를 질식시키는 클레이 코트의 마라토너.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏃 "그라나다의 터미네이터"</div>
                    <p>스페인 선수 특유의 <strong>무한 체력</strong>을 바탕으로 한 끈질긴 수비가 트레이드마크입니다. 5세트 경기를 해도 지친 기색이 없으며, 상대가 혀를 내두를 정도로 공을 다 건져냅니다. 전형적인 흙신(클레이 스페셜리스트) 스타일로, 클레이 대회에서는 톱 랭커들도 피하고 싶어 하는 난적입니다.</p>
                </div>
                <p>화려한 위너보다는 실수를 하지 않는 플레이로 승리를 쟁취하는 실리적인 테니스를 구사합니다.</p>
            `,
            playStyle: `
                <p><strong>"전형적인 디펜시브 베이스라이너"</strong></p>
                <p>베이스라인 뒤쪽에서 많은 양의 탑스핀을 걸어 공을 높고 깊게 보냅니다. 상대가 공격하다 지쳐 실수하길 기다립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇪🇸 RCB의 3가지 "생존 법칙"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 탑스핀:</strong> 나달을 연상시키는 엄청난 회전량의 포핸드로 상대를 코트 밖으로 밀어냅니다.</li>
                        <li><strong>수비 범위:</strong> 포기하지 않는 발놀림으로 코트 구석구석을 커버합니다.</li>
                        <li><strong>인내심:</strong> 무리하게 공격하지 않고, 20번이고 30번이고 랠리를 이어가는 끈기가 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 9.5, description: '지치는 법을 모름.' },
                { name: '수비 (Defense)', score: 9, description: '벽치기 하듯 돌아오는 공.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '끈질기고 집요함.' },
                { name: '포핸드 (Forehand)', score: 8, description: '회전량이 많은 안정적인 샷.' },
                { name: '서브 (Serve)', score: 6.5, description: '위협적이진 않음.' },
                { name: '네트 (Net)', score: 6, description: '네트 대시는 드뭄.' }
            ],
            growthStory: `
                <p>스페인 테네리페 출신으로, 3살 때 테니스를 시작했습니다. 클레이 코트가 많은 스페인 환경에서 자연스럽게 랠리 위주의 플레이를 익혔습니다. 2011년 롤랑가로스 주니어 복식 우승을 차지했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 마라케시 오픈 우승',
                date: '2023. 04. 09',
                description: '알렉산더 뮐러를 꺾고 통산 2번째 투어 우승을 차지했습니다. 역시나 클레이 코트 대회였으며, 대회 내내 엄청난 체력을 과시하며 "클레이 강자"임을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📚 "공부하는 엘리트"</div>
                    <p>테니스 선수 생활을 하면서 대학 학위(스포츠 경영 등)를 취득하려 노력하는 등 지적인 면모도 갖추고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>30대에 접어들어 오히려 랭킹이 상승하는 모습을 보이며 50위권을 유지하고 있습니다. 경험이 쌓이면서 경기 운영이 더욱 노련해졌습니다.</p>
            `,
            faq: [
                {
                    question: '이름이 왜 이렇게 긴가요?',
                    answer: '스페인 문화권은 아버지 성(카르바예스)과 어머니 성(바에나)을 모두 사용하기 때문입니다. 보통 줄여서 "카르바예스"라고 부릅니다.'
                },
                {
                    question: '나달과 경기한 적 있나요?',
                    answer: '네, 하지만 나달은 그의 우상이자 넘을 수 없는 벽이었습니다. 같은 스타일이지만 모든 면에서 상위 호환인 나달에게는 힘을 쓰지 못했습니다.'
                },
                {
                    question: '하드 코트 성적은 어떤가요?',
                    answer: '클레이에 비하면 약하지만, 최근에는 하드 코트에서도 끈질긴 수비로 성적을 내고 있습니다. US 오픈에서 홀거 루네를 꺾는 이변을 일으키기도 했습니다.'
                }
            ]
        }
    },
    'nuno-borges': {
        name: '누노 보르헤스', nameEn: 'Nuno Borges', country: 'Portugal', countryFlag: '🇵🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '포르투갈 테니스의 희망. 미국 대학 테니스(NCAA) 준우승 출신으로, 탄탄한 기본기와 공격적인 포핸드를 바탕으로 투어 무대에 성공적으로 안착했습니다.',
        detailedProfile: {
            oneLineSummary: '미국 대학 무대를 평정하고 온 포르투갈의 자존심, 똑똑하고 공격적인 플레이어.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇵🇹 "포르투갈의 역사"</div>
                    <p>주앙 소자를 잇는 포르투갈 테니스의 간판입니다. 2024년 호주 오픈 16강에 진출하며 포르투갈 남자 선수 최초의 그랜드슬램 16강 기록을 세웠습니다. 미국 미시시피 주립대 에이스 출신으로, 학업과 운동을 성공적으로 병행한 엘리트 코스를 밟았습니다.</p>
                </div>
                <p>대학 무대에서 다져진 탄탄한 기본기와 멘탈이 프로 무대에서의 빠른 적응 비결입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 올라운더"</strong></p>
                <p>큰 키는 아니지만 다부진 체격에서 나오는 파워풀한 샷이 인상적입니다. 특히 포핸드로 경기를 주도하는 능력이 탁월합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎓 보르헤스의 3가지 "A 학점"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>포핸드:</strong> 짧은 볼이 오면 놓치지 않고 위너로 연결하는 결정력이 좋습니다.</li>
                        <li><strong>스피드:</strong> 빠른 발을 이용해 코트를 넓게 쓰며, 수비에서 공격으로 전환하는 속도가 빠릅니다.</li>
                        <li><strong>적응력:</strong> 하드, 클레이, 잔디 등 모든 코트 표면에서 고른 기량을 보여줍니다. 대학 시절 다양한 환경에서 경기한 경험 덕분입니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9, description: '가장 자신 있는 무기.' },
                { name: '기본기 (Basics)', score: 9, description: '대학 무대에서 완성된 탄탄함.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '침착하고 영리함.' },
                { name: '이동 (Movement)', score: 8, description: '민첩한 풋워크.' },
                { name: '서브 (Serve)', score: 7.5, description: '준수한 편.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적인 연결.' }
            ],
            growthStory: `
                <p>포르투갈 마이아 출신입니다. 어릴 때부터 두각을 나타냈으나 프로 직행 대신 미국 유학(미시시피 주립대)을 선택했습니다. NCAA(전미 대학 체육 협회) 단식 준우승, 복식 우승 등을 차지하며 대학 최고의 선수로 군림했고, 2021년 최우수 선수상을 받기도 했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 3회전 vs 그리고르 디미트로프',
                date: '2024. 01. 20',
                description: '상승세였던 디미트로프를 3-1로 꺾는 대이변을 연출하며 16강에 올랐습니다. 그의 커리어 중 가장 큰 승리이자 포르투갈 테니스의 경사였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧠 "스마트한 승부사"</div>
                    <p>키네시오 테라피(운동 치료학) 학위를 가지고 있습니다. 자신의 몸에 대해 누구보다 잘 알기 때문에 부상 관리와 컨디션 조절에 능합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"가파른 상승세"</strong></p>
                <p>챌린저 무대를 졸업하고 투어 무대에 성공적으로 안착했습니다. 2024년 바스타드 오픈(Enea Open)에서 나달을 꺾고 우승하며 생애 첫 ATP 투어 타이틀을 획득, 주가를 한껏 올렸습니다.</p>
            `,
            faq: [
                {
                    question: '대학을 다닌 게 도움이 됐나요?',
                    answer: '그는 대학 진학이 "최고의 선택"이었다고 말합니다. 팀 스포츠로서의 테니스를 배우고, 멘탈과 피지컬을 체계적으로 다질 수 있었던 시간이었다고 합니다.'
                },
                {
                    question: '포르투갈 최고의 선수인가요?',
                    answer: '현재 랭킹과 기세로 보면 단연 No.1입니다. 선배 주앙 소자의 기록들을 하나씩 갈아치우고 있습니다.'
                },
                {
                    question: '나달을 이겼다고요?',
                    answer: '네! 2024년 스웨덴 바스타드 결승에서 클레이 황제 나달을 2-0으로 완파하고 우승했습니다. 테니스 역사에 남을 만한 장면이었습니다.'
                }
            ]
        }
    },
    'mackenzie-mcdonald': {
        name: '매켄지 맥도날드', nameEn: 'Mackenzie McDonald', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '빠른 발과 박자 빠른 스트로크가 강점인 선수 "Mackie". 2023 호주 오픈에서 라파엘 나달을 꺾는 이변을 연출한 바 있는 실력파입니다.',
        detailedProfile: {
            oneLineSummary: '나달을 꺾은 "자이언트 킬러", 작은 체구를 엄청난 스피드와 타이밍으로 극복한 테크니션.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ "작은 고추가 맵다"</div>
                    <p>178cm로 투어 선수 중 단신에 속하지만, 누구보다 빠른 발과 <strong>한 박자 빠른 스트로크</strong>로 상대를 혼란에 빠뜨립니다. 2023 호주 오픈 2회전에서 디펜딩 챔피언 라파엘 나달을 3-0으로 완파하며 전 세계의 주목을 받았습니다. 미국 대학 테니스(NCAA) 단식/복식 통합 챔피언 출신의 엘리트입니다.</p>
                </div>
                <p>큰 스윙보다는 콤팩트한 스윙으로 공의 힘을 이용하는 지능적인 플레이를 합니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 & 플랫 히터"</strong></p>
                <p>공을 띄우기보다는 낮고 빠르게 깔아서 친 뒤 네트로 대시하는 플레이를 즐깁니다. 투어 최상위권의 스피드를 활용한 수비 범위도 넓습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🍔 매키의 3가지 "스피드"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>라이징 샷:</strong> 공이 튀어 오르자마자 타격하여 상대의 시간을 뺏습니다. 니시코리와 비슷한 스타일입니다.</li>
                        <li><strong>풋워크:</strong> 잔발을 부지런히 움직여 항상 최적의 타점을 잡아냅니다.</li>
                        <li><strong>네트 대시:</strong> 스트로크 대결을 하다가도 기습적으로 네트 앞에 나타나 발리로 마무리합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버 능력 탁월.' },
                { name: '타이밍 (Timing)', score: 9.5, description: '박자를 뺏는 샷 감각.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '플랫성으로 낮게 깔리는 샷.' },
                { name: '멘탈 (Mental)', score: 8, description: '차분하고 냉정함.' },
                { name: '파워 (Power)', score: 6.5, description: '체격적 한계로 파워는 부족.' },
                { name: '서브 (Serve)', score: 6.5, description: '코스 공략 위주.' }
            ],
            growthStory: `
                <p>미국 캘리포니아 출신으로 중국계와 스코틀랜드계 혼혈입니다. UCLA 재학 시절 NCAA 단식과 복식을 모두 제패하며 대학 무대를 평정했습니다. 심각한 햄스트링 부상으로 걷지 못할 뻔한 위기도 있었으나, 재활에 성공하여 투어에 복귀했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 2회전 vs 라파엘 나달',
                date: '2023. 01. 18',
                description: '부상 투혼을 발휘한 나달을 상대로 냉정하고 완벽한 경기를 펼쳐 3-0 승리를 거뒀습니다. 나달에게 호주 오픈 2회전 탈락이라는 쓴맛을 안긴 충격적인 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😀 "긍정의 아이콘"</div>
                    <p>항상 밝은 표정과 매너 있는 태도로 동료 선수들 사이에서 인기가 많습니다. 큰 부상을 극복한 스토리도 많은 이들에게 귀감이 됩니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"꾸준한 활약"</strong></p>
                <p>Top 50 안팎을 오가며 꾸준히 투어 대회를 소화하고 있습니다. 하드 코트 시즌에 특히 강한 면모를 보입니다.</p>
            `,
            faq: [
                {
                    question: '동양인인가요?',
                    answer: '어머니가 중국계 미국인이고, 아버지가 스코틀랜드계 미국인입니다. 외할아버지가 테니스를 좋아해서 자연스럽게 테니스를 접했다고 합니다.'
                },
                {
                    question: '별명이 왜 Mackie인가요?',
                    answer: '이름 Mackenzie(매켄지)의 애칭입니다. 미국에서는 흔히 부르는 줄임말입니다.'
                },
                {
                    question: '대학을 졸업했나요?',
                    answer: 'UCLA를 다니다가 프로로 전향했지만, 학업에 대한 의지가 강해 틈틈이 공부하여 정치학 학위를 취득할 예정이라고 합니다.'
                }
            ]
        }
    },
    'max-purcell': {
        name: '맥스 퍼셀', nameEn: 'Max Purcell', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식을 모두 잘하는 호주의 테크니션. 윔블던 복식 챔피언 출신으로, 독특한 슬라이스와 서브 앤 발리 등 클래식한 변칙 플레이를 구사합니다.',
        detailedProfile: {
            oneLineSummary: '복식 챔피언에서 단식 강자로, 클래식 테니스를 현대적으로 재해석한 "변칙 플레이 마스터".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "복식 제패 후 단식 도전"</div>
                    <p>2022년 윔블던 복식 우승을 차지한 <strong>복식 세계 1위 출신</strong>입니다. 보통 복식 전문 선수는 단식에서 성공하기 어렵다는 편견을 깨고, 단식 랭킹 40위권에 진입하며 '두 마리 토끼'를 다 잡았습니다. 끊임없는 서브 앤 발리와 슬라이스는 베이스라이너들에게 악몽과도 같습니다.</p>
                </div>
                <p>긴 장발(머리를 묶거나 헤어밴드를 착용)과 복고풍 스타일로 코트 위에서 독보적인 존재감을 뽐냅니다.</p>
            `,
            playStyle: `
                <p><strong>"클래식 서브 앤 발리어"</strong></p>
                <p>현대 테니스에서 보기 드문 스타일입니다. 기회만 되면 네트로 뛰어들고, 베이스라인 대결에서도 탑스핀보다는 슬라이스를 주로 사용합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🕶️ 퍼셀의 3가지 "올드 스쿨"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>서브 앤 발리:</strong> 퍼스트, 세컨드 서브를 가리지 않고 네트로 대시합니다. 발리 감각은 투어 최상위권입니다.</li>
                        <li><strong>슬라이스 남발:</strong> 양손 백핸드를 칠 수 있음에도, 90% 이상 슬라이스로만 경기를 풀어갑니다. 상대의 리듬을 완전히 망가뜨립니다.</li>
                        <li><strong>변칙 서브:</strong> 스피드보다는 극단적인 킥 서브나 슬라이스 서브로 상대를 코트 밖으로 몰아냅니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '네트 (Net)', score: 10, description: '복식 세계 1위다운 완벽한 발리.' },
                { name: '손감각 (Touch)', score: 9.5, description: '섬세한 드롭샷과 로브.' },
                { name: '전술 (Tactics)', score: 9, description: '상대를 짜증 나게 하는 전략.' },
                { name: '서브 (Serve)', score: 8, description: '다양한 구질.' },
                { name: '체력 (Stamina)', score: 8, description: '복식과 단식을 병행하는 강철 체력.' },
                { name: '스트로크 (Stroke)', score: 6.5, description: '강력한 한 방은 부족함.' }
            ],
            growthStory: `
                <p>호주 시드니 출신입니다. 주니어 시절부터 복식에 재능을 보였으며, 매튜 에브덴과 짝을 이뤄 윔블던 우승을 차지했습니다. 이후 "단식에서도 통한다는 것을 보여주겠다"며 챌린저 대회를 휩쓸었고, 투어 무대에 성공적으로 안착했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 신시내티 마스터스 8강 진출',
                date: '2023. 08. 17',
                description: '예선을 거쳐 본선에 올라 루드, 바브린카 등 강적들을 꺾고 8강에 올랐습니다. 특히 세계 7위 캐스퍼 루드를 상대로 보여준 서브 앤 발리 전략은 그야말로 완벽했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎸 "록스타 비주얼"</div>
                    <p>치렁치렁한 장발에 콧수염, 그리고 80년대 테니스 선수를 연상시키는 짧은 바지와 헐렁한 티셔츠는 그만의 시그니처 스타일입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"단식 경쟁력 입증"</strong></p>
                <p>복식 랭킹을 포기하면서까지 단식에 집중한 결과가 나오고 있습니다. 2024년 이스트본 인터내셔널 준우승을 차지하며 잔디 코트 강자임을 다시 한번 증명했습니다.</p>
            `,
            faq: [
                {
                    question: '왜 머리를 기르나요?',
                    answer: '특별한 이유는 없지만, 본인의 스타일을 즐기는 듯합니다. 경기 중에는 머리가 방해되지 않게 헤어밴드를 하거나 묶습니다.'
                },
                {
                    question: '복식은 이제 안 하나요?',
                    answer: '아닙니다. 여전히 조던 톰슨 등과 짝을 이뤄 복식 대회에 출전합니다. 2024년 US 오픈 복식 우승을 차지하기도 했습니다.'
                },
                {
                    question: '슬라이스만 쳐서 이길 수 있나요?',
                    answer: '현대 테니스 선수들은 강한 탑스핀 공에 익숙해서, 퍼셀처럼 낮게 깔리고 회전이 없는 공을 오히려 어려워합니다. 틈새시장을 공략한 영리한 전략입니다.'
                }
            ]
        }
    },
    'dominik-koepfer': {
        name: '도미닉 쾨퍼', nameEn: 'Dominik Koepfer', country: 'Germany', countryFlag: '🇩🇪', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '독일의 파이터. 미국 대학 테니스 출신으로, 끈질긴 랠리와 포기하지 않는 투지로 상대를 끝까지 물고 늘어지는 플레이 스타일을 가졌습니다.',
        detailedProfile: {
            oneLineSummary: '포기를 모르는 "독일산 불독", 대학 테니스 출신으로 투어에 도전한 인간 승리의 파이터.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐕 "테니스계의 핏불(Pitbull)"</div>
                    <p>한번 물면 놓지 않는 끈질긴 승부 근성 때문에 <strong>"핏불"</strong>이라는 별명을 얻었습니다. 뛰어난 재능보다는 엄청난 훈련량과 투지로 승부하는 선수입니다. 대학 시절까지는 무명이었으나, 프로 데뷔 후 US 오픈 16강에 오르는 등 드라마틱한 성장세를 보여주었습니다.</p>
                </div>
                <p>왼손잡이 특유의 각도 깊은 샷과 지치지 않는 체력으로 상대를 진흙탕 승부로 끌고 들어갑니다.</p>
            `,
            playStyle: `
                <p><strong>"어그레시브 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>왼손잡이의 이점을 살려 코트를 넓게 씁니다. 베이스라인 뒤에 머물지 않고 기회가 오면 과감하게 때립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇩🇪 쾨퍼의 3가지 "근성"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>헤비 탑스핀:</strong> 나달처럼 라켓을 머리 위로 감아올리는 팔로스로우로 공에 엄청난 회전을 줍니다.</li>
                        <li><strong>백핸드 다운더라인:</strong> 구석에 몰린 상황에서도 허를 찌르는 백핸드 직선타로 반전을 만들어냅니다.</li>
                        <li><strong>포효:</strong> 득점할 때마다 큰 소리로 파이팅을 외치며 스스로의 기세를 올리고 상대를 압박합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '투지 (Spirit)', score: 9.5, description: '절대 포기하지 않는 끈기.' },
                { name: '체력 (Stamina)', score: 9, description: '대학 시절 다져진 강철 체력.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '왼손잡이 특유의 까다로운 회전.' },
                { name: '백핸드 (Backhand)', score: 8, description: '안정적이고 견고함.' },
                { name: '서브 (Serve)', score: 7.5, description: '코스 공략이 좋음.' },
                { name: '멘탈 (Mental)', score: 7, description: '가끔 감정을 주체하지 못함.' }
            ],
            growthStory: `
                <p>독일 퓌르트바겐 출신입니다. 어릴 때는 스키 선수로도 활동했습니다. 툴레인 대학교(Tulane University)로 유학을 떠나 대학 리그에서 실력을 쌓았고, 졸업 후 프로에 데뷔했습니다. 아무런 지원 없이 혼자 투어 생활을 시작해 자수성가한 케이스입니다.</p>
            `,
            signatureMatch: {
                title: '2019 US 오픈 16강 진출',
                date: '2019. 09',
                description: '예선을 거쳐 본선에 올라 16강까지 진출하는 돌풍을 일으켰습니다. 16강에서 메드베데프를 상대로 세트를 따내는 등 대등한 경기를 펼쳐 전 세계에 이름을 알렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "사자후"</div>
                    <p>경기 중 감정을 격하게 표출하는 편입니다. 라켓을 던지거나 소리를 지르는 모습이 다소 거칠어 보일 수 있지만, 그만큼 승부욕이 강하다는 증거이기도 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상 복귀와 재도약"</strong></p>
                <p>팔 부상으로 잠시 주춤했으나 2024년 캔버라 챌린저 우승을 시작으로 다시 랭킹을 끌어올리고 있습니다. 호주 오픈 1회전에서 즈베레프와 접전을 펼치며 건재함을 알렸습니다.</p>
            `,
            faq: [
                {
                    question: '대학 출신 선수가 많은가요?',
                    answer: '미국은 많지만 유럽 선수가 미국 대학을 거쳐 프로에 오는 경우는 드뭅니다. 쾨퍼와 노리, 보르헤스 등이 대표적인 성공 사례입니다.'
                },
                {
                    question: '왼손잡이인가요?',
                    answer: '네, 왼손잡이입니다. 그래서 나달을 롤 모델로 삼고 있으며, 플레이 스타일도 비슷한 면이 있습니다.'
                },
                {
                    question: '독일 랭킹 몇 위인가요?',
                    answer: '즈베레프, 스트루프에 이어 독일 No.3~4 자리를 지키고 있습니다. 데이비스컵 국가대표로도 꾸준히 선발됩니다.'
                }
            ]
        }
    },
    'aleksandar-vukic': {
        name: '알렉산더 부키치', nameEn: 'Aleksandar Vukic', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 또 다른 유망주. 188cm의 키에서 나오는 강력한 서브와 포핸드가 주무기이며, 공격적인 스타일로 랭킹 상승세를 타고 있습니다.',
        detailedProfile: {
            oneLineSummary: '강력한 서브와 포핸드로 무장한 호주의 "공격 본능", 챌린저를 평정하고 투어에 안착한 늦깍이 유망주.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦘 "시드니의 대포"</div>
                    <p>큰 키(188cm)와 탄탄한 체격에서 뿜어져 나오는 <strong>파워풀한 테니스</strong>를 구사합니다. 미국 일리노이 대학(University of Illinois)에서 대학 테니스 스타로 활약한 뒤 프로에 데뷔했습니다. 2023년 애틀랜타 오픈에서 준우승을 차지하며 투어 무대에서의 경쟁력을 입증했습니다.</p>
                </div>
                <p>전형적인 하드히터 스타일로, 공이 라켓에 맞는 소리부터가 다릅니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 빅 서버"</strong></p>
                <p>서브와 포핸드라는 확실한 무기를 가지고 있습니다. 수비보다는 공격으로 경기를 끝내는 것을 선호합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇦🇺 부키치의 3가지 "파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>강서브:</strong> 210km/h를 상회하는 플랫 서브는 그의 가장 큰 득점원입니다.</li>
                        <li><strong>포핸드 역크로스:</strong> 찬스볼이 오면 지체 없이 돌아서서 강력한 인사이드-아웃 포핸드를 꽂아 넣습니다.</li>
                        <li><strong>공격적인 리턴:</strong> 세컨드 서브를 공략하여 바로 리턴 에이스를 노리거나 3구 공격 기회를 만듭니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '타고난 힘이 좋음.' },
                { name: '서브 (Serve)', score: 9, description: '강력하고 묵직함.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '결정구.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '경험이 더 필요함.' },
                { name: '이동 (Movement)', score: 7.5, description: '공격적인 스텝.' },
                { name: '백핸드 (Backhand)', score: 7, description: '안정적이나 위협적이지 않음.' }
            ],
            growthStory: `
                <p>호주 시드니 출신으로 몬테네그로와 보스니아 혈통을 가지고 있습니다. 테니스와 학업을 병행하기 위해 미국 일리노이 대학에 진학했고, 3번의 올-아메리칸(All-American)에 선정되는 등 대학 최고의 선수로 활약했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 애틀랜타 오픈 결승 진출',
                date: '2023. 07. 30',
                description: '예선 통과자인 샹쥔청, 그리고 유뱅크스, 엄베르 등을 연파하고 생애 첫 투어 결승에 올랐습니다. 비록 프리츠에게 패했지만, 자신의 이름을 확실히 각인시킨 대회였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎓 "브레인 & 파워"</div>
                    <p>금융학을 전공한 엘리트입니다. 코트 위에서도 침착하게 경기를 풀어나가는 모습이 인상적입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"투어 레벨 안착"</strong></p>
                <p>Top 100 진입 후 꾸준히 투어 대회를 뛰며 경험을 쌓고 있습니다. 2024년에도 챌린저와 투어를 병행하며 랭킹을 끌어올리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '가족 배경이 독특한가요?',
                    answer: '부모님이 발칸 반도(몬테네그로, 보스니아) 출신으로 전쟁을 피해 호주로 이민을 왔습니다. 그래서 동유럽 선수 특유의 강인함도 가지고 있습니다.'
                },
                {
                    question: '대학 테니스가 도움이 됐나요?',
                    answer: '네, 그는 대학에서 팀워크와 멘탈을 배웠다고 항상 강조합니다. 대학 시절 코치가 그를 "가장 성실한 선수"라고 평가했습니다.'
                },
                {
                    question: '가장 좋아하는 코트는?',
                    answer: '강서브와 공격적인 플레이가 유리한 하드 코트를 가장 선호합니다.'
                }
            ]
        }
    },
    'yoshihito-nishioka': {
        name: '요시히토 니시오카', nameEn: 'Yoshihito Nishioka', country: 'Japan', countryFlag: '🇯🇵', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '일본의 왼손잡이 테크니션. 작은 신장의 약점을 엄청난 스피드와 지능적인 경기 운영, 그리고 끈질긴 수비로 극복하며 투어 타이틀을 획득했습니다.',
        detailedProfile: {
            oneLineSummary: '170cm의 콤플렉스를 극복한 "일본 테니스의 작은 거인", 스피드와 전략으로 거인들을 쓰러뜨리는 지능형 파이터.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧠 "코트 위의 체스 마스터"</div>
                    <p>신장 170cm는 투어 최단신 선수가 살아남기 힘든 조건입니다. 하지만 니시오카는 상대의 수를 미리 읽는 <strong>예측 능력</strong>과 코트 전체를 누비는 <strong>스피드</strong>로 이를 극복했습니다. 니시코리 케이 이후 일본 테니스를 지탱하는 대들보이며, 2022년 서울 코리아 오픈 우승으로 한국 팬들에게도 친숙합니다.</p>
                </div>
                <p>파워가 부족해도 타이밍과 코스 공략만으로 승리할 수 있다는 것을 증명하는 교과서 같은 선수입니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 & 배드민턴 풋워크"</strong></p>
                <p>빠른 발을 이용해 상대의 공격을 끈질기게 받아넘기다가, 상대의 밸런스가 무너진 틈을 타 역습을 가합니다. 문볼(Moonball)을 섞어 템포를 조절하는 능력도 탁월합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇯🇵 니시오카의 3가지 "생존 무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>예측력:</strong> 상대 폼만 보고 공의 방향을 읽어 미리 움직입니다. 수비 범위가 넓어 보이는 이유입니다.</li>
                        <li><strong>탑스핀 로브:</strong> 네트 앞에 나온 장신 선수들의 키를 넘기는 로브 샷은 그의 전매특허입니다.</li>
                        <li><strong>왼손 포핸드:</strong> 각도 깊은 왼손 포핸드로 상대를 코트 밖으로 끌어냅니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '이동 (Movement)', score: 9.5, description: '투어 최고 수준의 민첩성.' },
                { name: '전술 (Tactics)', score: 9.5, description: '상대 약점을 파고드는 스마트함.' },
                { name: '멘탈 (Mental)', score: 8, description: '승부욕이 강함.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적인 수비 중심.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '코스 공략이 좋음.' },
                { name: '서브 (Serve)', score: 6, description: '신체적 한계로 위력이 약함.' }
            ],
            growthStory: `
                <p>일본 미에현 출신으로, 아버지가 테니스 코치였습니다. 어릴 때부터 체격적인 불리함을 극복하기 위해 빠른 발과 전술 훈련에 집중했습니다. 2014년 아시안 게임 금메달로 병역 혜택을 받았고, 프로 무대에서도 꾸준히 성적을 내고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2022 유진투자증권 코리아 오픈 결승',
                date: '2022. 10. 02',
                description: '데니스 샤포발로프를 상대로 2-0 완승을 거두며 통산 2번째 투어 우승을 차지했습니다. 파워 히터인 샤포발로프를 끈질긴 수비로 자멸하게 만든, 니시오카 스타일의 정점을 보여준 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📺 "유튜버 요시"</div>
                    <p>유튜브 채널을 활발하게 운영하며 투어 선수들의 비하인드 스토리나 라 locker room 모습 등을 공개합니다. 팬들과의 소통에 적극적입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"아시아 No.1 경쟁"</strong></p>
                <p>2024년 애틀랜타 오픈 우승을 차지하며 투어 3승째를 기록했습니다. 30대 가까운 나이에도 여전히 기량이 발전하고 있음을 증명했습니다.</p>
            `,
            faq: [
                {
                    question: '키가 정말 170cm인가요?',
                    answer: '프로필상 170cm이지만, 실제로는 조금 더 작다는 이야기도 있습니다. 거구들이 즐비한 테니스 코트에서 그가 서 있는 것만으로도 눈에 띕니다.'
                },
                {
                    question: '니시코리와 비교하면 어떤가요?',
                    answer: '니시코리가 공격적인 재능이 더 뛰어나다면, 니시오카는 수비와 활동량으로 승부하는 스타일입니다. 둘 다 일본 테니스의 영웅입니다.'
                },
                {
                    question: '형도 선수인가요?',
                    answer: '네, 형 니시오카 야스오도 테니스 선수 출신 코치입니다. 테니스 가족입니다.'
                }
            ]
        }
    },
    'alexander-shevchenko': {
        name: '알렉산더 셰브첸코', nameEn: 'Alexander Shevchenko', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '카자흐스탄을 대표하는 신예. 빠른 발과 공격적인 베이스라인 플레이로 투어 무대에서 빠르게 경쟁력을 입증하고 있는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '러시아에서 카자흐스탄으로 귀화한 야심가, 가파른 성장세로 Top 50에 진입한 차세대 에이스.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "수직 상승의 아이콘"</div>
                    <p>2022년까지만 해도 챌린저 무대에 머물렀으나, 2023년 한 해 동안 랭킹을 100계단 이상 끌어올리며 Top 50에 진입했습니다. 원래 러시아 국적이었으나 2024년부터 카자흐스탄 국적으로 뛰고 있습니다. 무서운 기세로 성장하고 있어 앞으로가 더 기대되는 선수입니다.</p>
                </div>
                <p>공격적인 성향과 빠른 템포가 매력적이며, 어떤 상대를 만나도 주눅 들지 않는 배짱이 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"어그레시브 베이스라이너"</strong></p>
                <p>베이스라인 가까이 붙어서 빠르게 공을 처리합니다. 플랫성 구질의 강력한 스트로크로 상대를 좌우로 흔듭니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇰🇿 셰브첸코의 3가지 "스피드 업"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>양손 백핸드:</strong> 그의 주무기입니다. 크로스, 다운더라인을 자유자재로 구사하며 위너를 만들어냅니다.</li>
                        <li><strong>템포:</strong> 공을 기다리지 않고 다가가서 칩니다. 상대가 준비할 시간을 뺏는 속도전이 강점입니다.</li>
                        <li><strong>발놀림:</strong> 전형적인 하드 코트 플레이어답게 빠르고 경쾌한 스텝을 자랑합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 9, description: '가장 강력한 무기.' },
                { name: '공격성 (Aggression)', score: 8.5, description: '먼저 때리는 스타일.' },
                { name: '이동 (Movement)', score: 8.5, description: '빠르고 민첩함.' },
                { name: '포핸드 (Forehand)', score: 8, description: '기복이 조금 있음.' },
                { name: '서브 (Serve)', score: 7.5, description: '개선되고 있음.' },
                { name: '경험 (Experience)', score: 7, description: '투어 경험 축적 중.' }
            ],
            growthStory: `
                <p>러시아 로스토프나도누 출신입니다. 9살 때 오스트리아로 이주하여 귄터 브레스닉(팀의 전 코치) 아카데미에서 훈련했습니다. 오랜 기간 오스트리아에서 지내 독일어에 능통합니다. 2024년 더 많은 기회를 얻기 위해 카자흐스탄으로 국적을 변경했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 마드리드 마스터스 3회전 vs 다닐 메드베데프',
                date: '2023. 05. 01',
                description: '비록 풀세트 접전 끝에 패했지만, 세계적인 강자 메드베데프를 상대로 전혀 밀리지 않는 경기력을 보여주며 자신의 이름을 알린 경기입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎮 "게임광"</div>
                    <p>PS5 게임을 매우 좋아해서 인터뷰에서도 자주 언급합니다. FIFA나 Call of Duty 같은 게임을 즐기며 스트레스를 푼다고 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"적응기 & 도약"</strong></p>
                <p>투어 레벨에 적응하며 랭킹 50위권을 유지하고 있습니다. 2023년 메츠 오픈에서 생애 첫 투어 결승에 진출하며 가능성을 보여주었습니다.</p>
            `,
            faq: [
                {
                    question: '유명한 축구 선수와 관련 있나요?',
                    answer: '우크라이나의 전설적인 축구 선수 안드리 셰브첸코와 성이 같지만, 친척 관계는 아닙니다.'
                },
                {
                    question: '여자친구도 테니스 선수인가요?',
                    answer: '네, WTA 투어 선수인 아나스타샤 포타포바와 결혼했습니다. 테니스계의 또 다른 스타 커플입니다.'
                },
                {
                    question: '어떤 코치를 선호하나요?',
                    answer: '오스트리아에서 오랫동안 훈련받아 체계적이고 규율 잡힌 훈련 방식을 선호합니다.'
                }
            ]
        }
    },
    'rinky-hijikata': {
        name: '린키 히지카타', nameEn: 'Rinky Hijikata', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 파이터. 2023 US 오픈 16강 진출로 이름을 알렸으며, 빠른 발과 넘치는 투지, 그리고 관중을 사로잡는 세리머니가 인상적입니다.',
        detailedProfile: {
            oneLineSummary: '레이튼 휴이트의 재림, 작은 체구를 투지와 스피드로 극복하는 호주의 "리틀 파이터".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥊 "링 위의 복서처럼"</div>
                    <p>그의 경기를 보면 마치 복싱 선수가 링 위에서 싸우는 듯한 느낌을 받습니다. 매 포인트마다 주먹을 불끈 쥐고 "C'mon!"을 외치는 파이팅 넘치는 모습이 인상적입니다. 2023년 US 오픈에서 와일드카드로 출전해 16강까지 오르는 기적을 쓰며 스타덤에 올랐습니다.</p>
                </div>
                <p>2023 호주 오픈 복식 우승을 차지할 만큼 네트 플레이와 감각도 뛰어납니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 & 올코트 플레이어"</strong></p>
                <p>체격 조건(178cm)이 좋지 않아 강한 파워보다는 빠른 발과 정교한 컨트롤로 승부합니다. 수비하다가 기습적으로 네트로 대시하는 플레이를 즐깁니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇦🇺 히지카타의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>스피드:</strong> 코트 커버리지가 매우 넓습니다. 웬만한 공은 다 받아넘겨 상대를 질리게 만듭니다.</li>
                        <li><strong>투지:</strong> 지고 있어도 절대 포기하지 않는 끈기가 상대에게 큰 압박감을 줍니다.</li>
                        <li><strong>복식 감각:</strong> 단식 선수지만 복식 우승 경험이 있어 발리와 네트 플레이가 매우 자연스럽습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '투지 (Spirit)', score: 10, description: '휴이트를 연상시키는 파이팅.' },
                { name: '이동 (Movement)', score: 9, description: '매우 빠름.' },
                { name: '네트 (Net)', score: 8.5, description: '그랜드슬램 복식 우승자의 품격.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '강한 승부욕.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '안정적인 연결.' },
                { name: '파워 (Power)', score: 6.5, description: '체격적 한계.' }
            ],
            growthStory: `
                <p>호주 시드니 출신으로 일본인 부모님 사이에서 태어났습니다. 미국 노스캐롤라이나 대학교(UNC)에서 2년간 대학 선수로 뛰며 실력을 갈고닦았습니다. 대학 최고의 선수 중 한 명이었으며, 프로 전향 후 빠르게 랭킹을 끌어올렸습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 16강 진출',
                date: '2023. 09',
                description: '와일드카드로 출전해 파벨 코토프, 장지전 등을 연파하고 16강에 진출했습니다. 그의 이름을 전 세계에 알린 인생 토너먼트입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📢 "관중 조련사"</div>
                    <p>관중들의 호응을 유도하며 경기장 분위기를 자신의 것으로 만드는 능력이 탁월합니다. 홈인 호주 오픈에서는 아이돌급 인기를 누립니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 70 안착"</strong></p>
                <p>단식 랭킹 70위권에 진입하며 투어 대회 본선에 직행하고 있습니다. 하드 코트에서 특히 강한 면모를 보입니다.</p>
            `,
            faq: [
                {
                    question: '일본어를 할 줄 아나요?',
                    answer: '부모님이 모두 일본인이라 일본어를 이해할 수는 있지만, 말하는 건 영어만큼 편하지 않다고 합니다. 호주 문화에 더 익숙합니다.'
                },
                {
                    question: '이름 Rinky는 본명인가요?',
                    answer: '아니요, 본명은 Rinky Hijikata(린키 히지카타)가 맞습니다. 특이한 이름이라 한번 들으면 잊기 힘듭니다. (부모님이 지어주신 일본 이름은 린키입니다.)'
                },
                {
                    question: '롤 모델은 누구인가요?',
                    answer: '호주 테니스의 전설 레이튼 휴이트입니다. 작은 체구로 세계 1위에 오른 그의 투지를 본받고 싶어 합니다. 실제로 플레이 스타일도 비슷합니다.'
                }
            ]
        }
    },
    'botic-van-de-zandschulp': {
        name: '보틱 반 더 잔츠슐프', nameEn: 'Botic van de Zandschulp', country: 'Netherlands', countryFlag: '🇳🇱', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '네덜란드의 실력파. 2021 US 오픈 8강 돌풍의 주역으로, 무표정한 얼굴에서 뿜어져 나오는 묵직하고 강력한 스트로크가 일품입니다.',
        detailedProfile: {
            oneLineSummary: '네덜란드 남자 테니스의 부활을 이끈 "무표정의 암살자", 묵직한 스트로크로 상대를 제압하는 베이스라이너.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😐 "돌부처"</div>
                    <p>경기 내내 표정 변화가 거의 없어 <strong>'돌부처'</strong> 혹은 '포커페이스'로 불립니다. 2021년 US 오픈에서 예선 통과자 최초로 8강에 진출하는 역사를 쓰며 세계적인 주목을 받았습니다. 네덜란드 남자 선수로는 2004년 윔블던 8강 솅 샬켄 이후 17년 만의 메이저 8강 기록이었습니다.</p>
                </div>
                <p>알카라스를 2024 US 오픈 2회전에서 3-0으로 셧아웃시키며 '거인 사냥꾼'의 면모를 보여주었습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀 베이스라이너"</strong></p>
                <p>화려하진 않지만 묵직하고 정직한 구질의 공을 칩니다. 특히 베이스라인 깊숙이 떨어지는 스트로크는 상대가 공격하기 어렵게 만듭니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇳🇱 보틱의 3가지 "묵직함"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>플랫 서브:</strong> 200km/h 초반대의 플랫 서브는 코너를 정확히 찌릅니다.</li>
                        <li><strong>포핸드:</strong> 탄탄한 하체에서 나오는 포핸드는 회전보다는 스피드와 무게감으로 압박합니다.</li>
                        <li><strong>리시브:</strong> 상대의 서브를 무리하게 공격하기보다 안전하고 깊게 넘겨 랠리를 시작하는 능력이 탁월합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '멘탈 (Mental)', score: 9, description: '흔들리지 않는 평정심.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '묵직한 구질.' },
                { name: '서브 (Serve)', score: 8, description: '안정적인 득점원.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '실수가 적음.' },
                { name: '이동 (Movement)', score: 7.5, description: '키에 비해 나쁘지 않음.' },
                { name: '네트 (Net)', score: 7, description: '필요할 때만 대시.' }
            ],
            growthStory: `
                <p>네덜란드 바게닝겐 출신입니다. 챌린저 대회에서 꾸준히 실력을 쌓아 20대 중반에 빛을 본 '대기만성형' 선수입니다. 2021 US 오픈 돌풍 이후 네덜란드 테니스의 간판으로 자리 잡았습니다.</p>
            `,
            signatureMatch: {
                title: '2024 US 오픈 2회전 vs 카를로스 알카라스',
                date: '2024. 08. 30',
                description: '강력한 우승 후보이자 세계 3위 알카라스를 3-0으로 완파하는 대이변을 연출했습니다. 보틱의 인생 경기이자, 2024년 테니스계 최대 이변 중 하나로 꼽힙니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "오렌지 군단의 에이스"</div>
                    <p>축구 강국 네덜란드에서 보기 드문 테니스 스타라 자국 내 인기가 높습니다. 데이비스컵 국가대표로도 헌신적인 활약을 펼치고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"기복과 반등"</strong></p>
                <p>US 오픈 8강 이후 기대만큼의 성적을 내지 못하고 부상과 슬럼프로 은퇴까지 고민했으나, 알카라스를 꺾는 등 다시금 반등의 계기를 마련했습니다.</p>
            `,
            faq: [
                {
                    question: '이름 발음이 어렵네요.',
                    answer: '네덜란드어라 발음이 까다롭습니다. 보통 "반 더 잔츠슐프"라고 부르며, 현지 발음은 "반 더 잔슐프"에 가깝습니다.'
                },
                {
                    question: '은퇴를 고려했었나요?',
                    answer: '네, 2024년 성적 부진과 부상으로 테니스를 그만둘까 진지하게 고민했다고 인터뷰에서 밝혔습니다. 하지만 알카라스전 승리로 다시 동기부여를 얻은 듯합니다.'
                },
                {
                    question: '가장 좋아하는 샷은?',
                    answer: '포핸드 역크로스를 즐겨 구사합니다. 베이스라인 중앙에서 상대를 바깥으로 몰아내는 샷이 일품입니다.'
                }
            ]
        }
    },
    'yannick-hanfmann': {
        name: '야닉 한프만', nameEn: 'Yannick Hanfmann', country: 'Germany', countryFlag: '🇩🇪', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '인간 승리의 드라마. 태어날 때부터 청각 장애가 있었지만 이를 극복하고 프로 테니스 선수가 되었으며, 묵직한 서브와 파워풀한 샷을 구사합니다.',
        detailedProfile: {
            oneLineSummary: '청각 장애라는 한계를 뛰어넘은 "침묵의 파이터", 묵직한 서브와 포핸드로 코트를 울리는 인간 승리.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👂 "듣지 못해도 칠 수 있다"</div>
                    <p>선천적으로 청각 장애가 있어 보청기를 착용하더라도 공이 라켓에 맞는 소리나 심판의 콜을 듣기 어렵습니다. 테니스에서 타구음은 타이밍을 잡는 데 매우 중요한 요소인데, 한프만은 이를 <strong>시각적 집중력</strong>으로 극복했습니다. 그의 투어 무대 도전은 그 자체로 많은 이들에게 희망을 줍니다.</p>
                </div>
                <p>미국 서던 캘리포니아 대학(USC)에서 대학 테니스 선수로 활약하며 전미 우승을 이끌기도 했습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 & 하드 히터"</strong></p>
                <p>193cm의 큰 키에서 뿜어져 나오는 서브와 포핸드가 주무기입니다. 소리를 잘 듣지 못하기 때문에 시각 정보를 바탕으로 한 예측 플레이가 발달했습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇩🇪 한프만의 3가지 "집중력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>서브:</strong> 큰 신장을 이용한 시속 220km대의 서브는 매우 위협적입니다. 특히 킥 서브가 높게 튀어 오릅니다.</li>
                        <li><strong>포핸드:</strong> 타점이 높고 스윙이 커서 공에 실리는 힘이 묵직합니다. 클레이 코트에서 특히 위력이 배가됩니다.</li>
                        <li><strong>눈:</strong> 귀 대신 눈으로 모든 것을 파악합니다. 상대의 라켓 면, 임팩트 순간을 놓치지 않고 포착하여 반응합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '큰 키를 활용한 강서브.' },
                { name: '집중력 (Focus)', score: 9.5, description: '시각적 집중력이 타의 추종을 불허함.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '묵직한 파워.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '장애를 극복한 강인함.' },
                { name: '이동 (Movement)', score: 7, description: '장신이라 민첩성은 다소 부족.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '안정적인 편.' }
            ],
            growthStory: `
                <p>독일 카를스루에 출신입니다. 난청으로 인해 테니스 선수로서의 성공을 의심받기도 했지만, 미국 USC에 진학하여 대학 무대를 평정하며 실력을 입증했습니다. 늦은 나이에 프로에 데뷔했지만 꾸준히 랭킹을 올리고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 로마 마스터스 8강 진출',
                date: '2023. 05. 16',
                description: '예선부터 시작해 프리츠, 루블레프 등 Top 10 선수들을 연파하며 8강에 오르는 파란을 일으켰습니다. 클레이 코트에서 세계 정상급 선수들과 대등하게 싸울 수 있음을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❤️ "희망의 메신저"</div>
                    <p>장애를 가진 많은 사람들에게 "할 수 있다"는 메시지를 전달합니다. 그의 경기는 승패를 떠나 감동을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"커리어 하이 시즌"</strong></p>
                <p>2023년 커리어 하이 랭킹(45위)을 기록하며 전성기를 맞이했습니다. 클레이 코트뿐만 아니라 잔디 코트(마요르카 4강)에서도 좋은 성적을 내며 올라운더로 진화하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '경기 중에 보청기를 끼나요?',
                    answer: '네, 보청기를 착용하지만 여전히 소리를 완벽하게 듣지는 못합니다. 특히 관중 소음이 심하면 더욱 어렵다고 합니다.'
                },
                {
                    question: '심판 콜은 어떻게 듣나요?',
                    answer: '심판이나 상대 선수의 제스처를 보고 판단하는 경우가 많습니다. 그래서 항상 상대를 주시합니다.'
                },
                {
                    question: '가장 좋아하는 표면은?',
                    answer: '클레이 코트를 가장 선호합니다. 공이 조금 느리게 오고 높게 튀어 오르는 특성이 그의 파워풀한 스윙과 잘 맞습니다.'
                }
            ]
        }
    },
    'pavel-kotov': {
        name: '파벨 코토프', nameEn: 'Pavel Kotov', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아의 공격형 플레이어. 감정을 숨기지 않는 스타일과 강력한 그라운드 스트로크로 투어에서 존재감을 드러내고 있는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 "앵그리 버드", 불같은 성격과 그보다 더 뜨거운 포핸드를 가진 러시아의 야생마.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😡 "감정 표현의 끝판왕"</div>
                    <p>경기 중에 화를 참지 못하고 라켓을 던지거나 소리를 지르는 등 다혈질적인 모습으로 유명합니다. 때로는 비신사적인 행동으로 구설수에 오르기도 하지만, 그만큼 승부에 대한 집착이 강합니다. 어머니가 코치로 함께 투어를 다니는 것으로도 잘 알려져 있습니다.</p>
                </div>
                <p>거침없는 플레이 스타일과 예측불허의 행동으로 팬들의 시선을 사로잡는 '빌런' 같은 매력이 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"하드 히터 & 어그레시브"</strong></p>
                <p>공을 세게 치는 것을 좋아합니다. 랠리 도중에도 기회가 오면 주저 없이 풀스윙으로 위너를 노립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇺 코토프의 3가지 "스매시"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>강력한 포핸드:</strong> 체중을 실어 때리는 포핸드는 파괴력이 상당합니다.</li>
                        <li><strong>백핸드 다운더라인:</strong> 의외로 섬세한 백핸드 컨트롤을 가지고 있어, 다운더라인 공격 성공률이 높습니다.</li>
                        <li><strong>어머니 코칭:</strong> 관중석에 있는 어머니와 끊임없이 대화(때로는 언쟁)하며 멘탈을 잡습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '러시아 특유의 힘.' },
                { name: '공격성 (Aggression)', score: 9, description: '수비보다는 공격.' },
                { name: '백핸드 (Backhand)', score: 8, description: '위협적인 무기.' },
                { name: '서브 (Serve)', score: 7.5, description: '준수한 편.' },
                { name: '멘탈 (Mental)', score: 6, description: '감정 조절이 최대 약점.' },
                { name: '이동 (Movement)', score: 7, description: '보통 수준.' }
            ],
            growthStory: `
                <p>러시아 모스크바 출신입니다. 어릴 때부터 테니스를 시작했으며, 어머니가 코치를 맡아 그림자처럼 따라다닙니다. 챌린저 우승을 거쳐 2023년 스톡홀름 오픈 준우승을 차지하며 투어 레벨 선수로 발돋움했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 스톡홀름 오픈 준우승',
                date: '2023. 10. 22',
                description: '예선을 거쳐 결승까지 진출하는 파란을 일으켰습니다. 결승에서 몽피스와 풀세트 접전 끝에 패했지만, 그의 생애 첫 투어 결승이자 최고의 성과였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👩‍👦 "마마보이?"</div>
                    <p>어머니가 코치라는 점이 독특합니다. 경기 중 어머니에게 소리를 지르기도 하지만, 경기 후에는 항상 어머니에게 감사를 표하는 애증의 관계(?)를 보여줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 진입 도전"</strong></p>
                <p>꾸준히 투어 대회 본선에 오르며 랭킹을 50위권까지 끌어올렸습니다. 감정 조절만 잘한다면 더 높은 곳으로 갈 수 있는 잠재력이 있습니다.</p>
            `,
            faq: [
                {
                    question: '어머니가 진짜 코치인가요?',
                    answer: '네, 릴리아 Kotova 씨가 코치를 맡고 있습니다. 전문적인 테니스 지식은 부족할 수 있지만, 아들의 심리 상태를 누구보다 잘 알기 때문에 멘탈 코치 역할도 겸하고 있습니다.'
                },
                {
                    question: '가장 좋아하는 샷은?',
                    answer: '백핸드 다운더라인입니다. 결정적인 순간에 포인트용으로 자주 사용합니다.'
                },
                {
                    question: '결혼했나요?',
                    answer: '아직 미혼이며, 여자친구 유무는 공개되지 않았습니다. 현재는 어머니와 함께 투어 생활에 집중하고 있습니다.'
                }
            ]
        }
    },
    'aslan-karatsev': {
        name: '아슬란 카라체프', nameEn: 'Aslan Karatsev', country: 'Russia', countryFlag: '🇷🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아의 비밀병기. 2021 호주 오픈 4강 신화를 쓰며 혜성처럼 등장했습니다. 탄탄한 종아리 근육에서 나오는 폭발적인 스트로크는 투어 최고 수준입니다.',
        detailedProfile: {
            oneLineSummary: '혜성처럼 등장해 세계를 놀라게 한 "러시아산 비밀병기", 탄탄한 종아리에서 뿜어져 나오는 폭발적인 화력.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">☄️ "신데렐라 맨"</div>
                    <p>2021년 호주 오픈에서 예선 통과자(Qualifier) 신분으로 4강까지 진출하는 기적을 썼습니다. 이는 오픈 시대(1968년 이후) 최초의 기록입니다. 무명 시절 챌린저 대회를 전전했으나, 20대 후반에 잠재력이 폭발하며 단숨에 스타덤에 올랐습니다. "종아리 미남"으로 불릴 만큼 엄청난 하체 근육이 화제가 되기도 했습니다.</p>
                </div>
                <p>일단 터지면 조코비치도 막기 힘든 폭발력을 가진, 투어에서 가장 위험한 선수 중 한 명입니다.</p>
            `,
            playStyle: `
                <p><strong>"베이스라인 폭격기"</strong></p>
                <p>군더더기 없는 짧은 테이크백에서 나오는 번개 같은 스트로크가 특징입니다. 공이 바운드되자마자 치는 타이밍이 매우 빠릅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 아슬란의 3가지 "폭발력"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>종아리 파워:</strong> 탄탄한 하체에서 나오는 힘으로 공을 강하게 눌러 칩니다. 공의 무게감이 다릅니다.</li>
                        <li><strong>양손 리턴:</strong> 샷의 준비 동작이 짧아 리턴 에이스를 자주 만들어냅니다. 그의 리턴 게임은 상대에게 큰 공포입니다.</li>
                        <li><strong>라이징 샷:</strong> 공이 튀어 오르는 정점에서 타격하여 상대의 시간을 뺏습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '맞으면 터지는 화력.' },
                { name: '리턴 (Return)', score: 9, description: '공격적인 리턴.' },
                { name: '포핸드 (Forehand)', score: 9, description: '위력적인 결정구.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '빠르고 정확함.' },
                { name: '이동 (Movement)', score: 8, description: '탄탄한 하체.' },
                { name: '기복 (Consistency)', score: 6, description: '컨디션에 따른 기복이 심함.' }
            ],
            growthStory: `
                <p>러시아 블라디캅카스 출신입니다. 이스라엘, 독일, 스페인 등 여러 나라를 떠돌며 훈련비가 없어 어려움을 겪었습니다. 포기하지 않고 버틴 끝에 27세라는 늦은 나이에 전성기를 맞이했습니다.</p>
            `,
            signatureMatch: {
                title: '2021 호주 오픈 4강 신화',
                date: '2021. 02',
                description: '예선부터 시작해 슈와르츠만, 오제 알리아심, 디미트로프 등 쟁쟁한 선수들을 모두 꺾고 4강에 올랐습니다. 비록 우승자 조코비치에게 졌지만, 전 세계 테니스 팬들에게 "아슬란 카라체프"라는 이름을 확실히 각인시켰습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦵 "The Calves (종아리)"</div>
                    <p>그의 엄청난 종아리 근육은 팬들 사이에서 밈(meme)이 될 정도로 유명합니다. "테니스 역사상 최고의 종아리"라는 농담 반 진담 반의 찬사를 받습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상과 재활"</strong></p>
                <p>2024년 1월 브리즈번 인터내셔널 경기 도중 심각한 무릎 부상을 당해 수술을 받았습니다. 현재 복귀를 위해 재활에 매진하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '종아리 운동 비결이 뭔가요?',
                    answer: '특별히 종아리만 운동하는 건 아니라고 합니다. 타고난 유전자가 큰 역할을 한 것 같지만, 어릴 때부터 모래사장에서 뛰는 훈련을 많이 했다고 합니다.'
                },
                {
                    question: '왜 늦게 떴나요?',
                    answer: '부상과 재정적인 어려움 때문입니다. 스폰서 없이 투어를 다니느라 좋은 코치를 쓸 수 없었고, 무릎 부상으로 6개월 이상 쉬기도 했습니다.'
                },
                {
                    question: '조코비치를 이긴 적 있나요?',
                    answer: '네! 2021년 세르비아 오픈 4강에서 홈 코트의 조코비치를 꺾는 파란을 일으키며 결승에 진출했습니다.'
                }
            ]
        }
    },
    'fabian-marozsan': {
        name: '파비안 마로잔', nameEn: 'Fabian Marozsan', country: 'Hungary', countryFlag: '🇭🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '헝가리의 드롭샷 장인. 로마 마스터스에서 알카라스를 꺾는 대이변을 연출하며 세계를 놀라게 했으며, 예측 불가능한 샷 메이킹이 강점입니다.',
        detailedProfile: {
            oneLineSummary: '알카라스를 멈춰 세운 "드롭샷 아티스트", 예측 불가능한 샷으로 상대를 현혹하는 헝가리의 마법사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧙‍♂️ "자이언트 킬러의 등장"</div>
                    <p>2023년 로마 마스터스에서 당시 세계 랭킹 2위(사실상 1위 폼)였던 <strong>카를로스 알카라스</strong>를 32강에서 2-0으로 완파하며 전 세계를 충격에 빠뜨렸습니다. 당시 랭킹 135위였던 마로잔은 알카라스조차 읽지 못하는 완벽한 <strong>드롭샷</strong>과 공격적인 플레이로 '인생 경기'를 펼쳤습니다.</p>
                </div>
                <p>이후에도 꾸준히 상위 랭커들을 위협하며, 단순한 이변이 아닌 실력임을 증명하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"올라운드 테크니션"</strong></p>
                <p>부드러운 스윙에서 나오는 강력한 스트로크와 천재적인 터치 감각을 겸비했습니다. 특히 드롭샷은 타의 추종을 불허합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇺 마로잔의 3가지 "마법"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>드롭샷:</strong> 예비 동작 없이 기습적으로 놓는 드롭샷은 성공률이 매우 높습니다. 알카라스조차 혀를 내둘렀을 정도입니다.</li>
                        <li><strong>포핸드 강타:</strong> 부드러운 폼에서 갑자기 터져 나오는 플랫성 포핸드 위너가 일품입니다.</li>
                        <li><strong>포커페이스:</strong> 경기 내내 표정 변화가 거의 없어, 상대가 그의 심리를 읽기 어렵습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '손감각 (Touch)', score: 10, description: '예술적인 드롭샷.' },
                { name: '포핸드 (Forehand)', score: 9, description: '숨겨진 파괴력.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '강심장.' },
                { name: '백핸드 (Backhand)', score: 8, description: '견고함.' },
                { name: '이동 (Movement)', score: 7.5, description: '준수함.' },
                { name: '서브 (Serve)', score: 7, description: '평범한 편.' }
            ],
            growthStory: `
                <p>헝가리 부다페스트 출신입니다. 5살 때부터 테니스를 시작했습니다. 주로 챌린저투어에서 활동하다가 로마 마스터스를 계기로 급부상했습니다. 푸초비치의 뒤를 잇는 헝가리 테니스의 희망으로 떠올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2023 로마 마스터스 32강 vs 카를로스 알카라스',
                date: '2023. 05. 15',
                description: '테니스 역사상 가장 충격적인 업셋 중 하나. 알카라스의 모든 공격을 받아치고, 허를 찌르는 드롭샷으로 알카라스를 무너뜨렸습니다. 마로잔이라는 이름을 전 세계에 알린 경기입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "코트 위의 예술가"</div>
                    <p>파워만 난무하는 현대 테니스에서, 섬세하고 창의적인 샷으로 득점하는 그의 플레이는 보는 이들에게 신선한 즐거움을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 안착"</strong></p>
                <p>상하이 마스터스 8강, 마이애미 오픈 8강 등 빅 토너먼트에서 강한 면모를 보이며 랭킹 30위권까지 진입했습니다. 이제는 다크호스가 아닌 강자로 분류됩니다.</p>
            `,
            faq: [
                {
                    question: '알카라스가 부상이었나요?',
                    answer: '아니요, 알카라스는 당시 절정의 컨디션이었습니다. 경기 후 알카라스도 "마로잔의 플레이가 너무 완벽해서 할 수 있는 게 없었다"고 패배를 인정했습니다.'
                },
                {
                    question: '별명이 있나요?',
                    answer: '팬들은 그를 "페이비(Fabi)"라고 부릅니다. 헝가리에서는 이미 국민 영웅 대접을 받고 있습니다.'
                },
                {
                    question: '가장 좋아하는 샷은?',
                    answer: '당연히 드롭샷입니다. 본인도 드롭샷 놓는 순간을 가장 즐긴다고 합니다.'
                }
            ]
        }
    },
    'sumit-nagal': {
        name: '수밋 나갈', nameEn: 'Sumit Nagal', country: 'India', countryFlag: '🇮🇳', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '인도 테니스의 희망. 빠른 발과 강한 포핸드 회전력을 바탕으로 투어 무대에서 아시아 선수의 저력을 보여주고 있습니다.',
        detailedProfile: {
            oneLineSummary: '인도 테니스의 부활을 꿈꾸는 "흙신", 작은 체구에서 뿜어져 나오는 강한 탑스핀 포핸드.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇮🇳 "인도의 자존심"</div>
                    <p>린더 페스, 마헤시 부파티 등 복식 전설들을 배출한 인도가 오랜만에 배출한 단식 유망주입니다. 2019 US 오픈 1회전에서 로저 페더러를 상대로 첫 세트를 따내며 전 세계를 놀라게 했습니다. 2024년 호주 오픈 2회전에 진출하며 인도 테니스의 역사를 새로 쓰고 있습니다.</p>
                </div>
                <p>열악한 지원 환경 속에서도 세계 무대에 도전하는 그의 스토리는 인도 국민들에게 큰 감동을 줍니다.</p>
            `,
            playStyle: `
                <p><strong>"클레이 코트 스페셜리스트"</strong></p>
                <p>전형적인 클레이 코트 스타일입니다. 라켓 헤드 스피드를 빠르게 하여 공에 많은 회전을 줍니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🌶️ 나갈의 3가지 "매운맛"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>포핸드 탑스핀:</strong> 나달을 연상시키는 헤비 탑스핀 포핸드로 상대를 베이스라인 뒤로 밀어냅니다.</li>
                        <li><strong>인사이드-아웃:</strong> 돌아서서 치는 포핸드 역크로스는 그의 가장 강력한 결정구입니다.</li>
                        <li><strong>풋워크:</strong> 빠른 발을 이용해 클레이 코트에서 넓은 수비 범위를 자랑합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9, description: '클레이에서 특히 위력적.' },
                { name: '이동 (Movement)', score: 8.5, description: '빠르고 민첩함.' },
                { name: '멘탈 (Mental)', score: 8, description: '어려운 환경이 만든 강인함.' },
                { name: '체력 (Stamina)', score: 8, description: '랠리를 오래 버팀.' },
                { name: '백핸드 (Backhand)', score: 7, description: '안정적인 연결 중심.' },
                { name: '서브 (Serve)', score: 6.5, description: '신체적 한계.' }
            ],
            growthStory: `
                <p>인도 자자르 출신입니다. 10살 때 마헤시 부파티가 운영하는 아카데미에 선발되어 테니스를 본격적으로 시작했습니다. 재정적인 어려움으로 투어를 중단할 위기도 있었으나, 크라우드 펀딩과 기업 후원으로 극복했습니다.</p>
            `,
            signatureMatch: {
                title: '2019 US 오픈 1회전 vs 로저 페더러',
                date: '2019. 08. 27',
                description: '비록 1-3으로 패했지만, \'테니스 황제\' 페더러를 상대로 1세트를 6-4로 따내는 기염을 토했습니다. 페더러조차 "그의 포핸드는 인상적이었다"고 칭찬했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🙏 "헝그리 정신"</div>
                    <p>통장 잔고가 바닥날 정도로 어려운 상황에서도 포기하지 않고 꿈을 좇는 그의 모습은 많은 이들의 귀감이 됩니다. 인도 크리켓 스타 비라트 코일리가 그를 후원하기도 했습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 100 안착"</strong></p>
                <p>2024년 몬테카를로 마스터스 본선 진출 등 투어 레벨에서 경쟁력을 입증하며 인도 테니스의 간판으로 활약하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '나달과 관련 있나요?',
                    answer: '아니요, 이름이 비슷해서(Nagal vs Nadal) 생긴 오해입니다. 하지만 플레이 스타일은 나달처럼 클레이 코트와 탑스핀을 선호합니다.'
                },
                {
                    question: '인도에서 테니스가 인기 있나요?',
                    answer: '크리켓에 비하면 인기가 적지만, 나갈의 활약으로 다시 주목받고 있습니다. 그는 "인도 테니스의 부흥"을 목표로 뛰고 있습니다.'
                },
                {
                    question: '가장 큰 어려움은 무엇인가요?',
                    answer: '비자 문제와 재정 문제입니다. 투어를 다니는 비용이 만만치 않아 항상 스폰서를 구해야 하는 현실적인 어려움이 있습니다.'
                }
            ]
        }
    },
    'taro-daniel': {
        name: '타로 다니엘', nameEn: 'Taro Daniel', country: 'Japan', countryFlag: '🇯🇵', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '일본의 혼혈 베테랑. 191cm의 큰 키와 안정적인 스트로크를 겸비했으며, 조코비치를 꺾은 경험이 있는 저력 있는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '일본의 정교함과 서구의 피지컬을 겸비한 "하이브리드 플레이어", 조코비치를 꺾은 베테랑의 저력.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸🇯🇵 "코스모폴리탄"</div>
                    <p>미국인 아버지와 일본인 어머니 사이에서 태어나 미국, 일본, 스페인 등 다양한 문화 속에서 성장했습니다. 191cm의 큰 키는 일본 선수로는 보기 드문 신체 조건입니다. 2018년 인디언 웰스 마스터스에서 당시 부상 복귀 중이던 <strong>노박 조코비치</strong>를 꺾는 대이변을 연출하며 이름을 알렸습니다.</p>
                </div>
                <p>유창한 영어와 스페인어 실력, 그리고 긍정적인 성격으로 투어 내 마당발로 통합니다.</p>
            `,
            playStyle: `
                <p><strong>"안정적인 베이스라이너"</strong></p>
                <p>큰 키에 비해 서브 의존도가 높지 않고, 스페인에서 훈련받은 영향으로 랠리를 오래 끌고 가는 것을 선호합니다. 실수가 적고 견고합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🗼 타로의 3가지 "밸런스"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 양손 백핸드가 매우 안정적이며, 앵글 샷을 잘 구사합니다.</li>
                        <li><strong>지구력:</strong> 긴 랠리를 마다하지 않는 체력과 인내심을 가지고 있습니다.</li>
                        <li><strong>서브:</strong> 큰 키에서 내리꽂는 서브는 파워보다는 코스와 회전에 집중합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 8.5, description: '가장 믿을 수 있는 샷.' },
                { name: '체력 (Stamina)', score: 8.5, description: '지치지 않음.' },
                { name: '서브 (Serve)', score: 8, description: '키에 비해 평범하지만 준수함.' },
                { name: '멘탈 (Mental)', score: 8, description: '긍정적인 마인드.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '안정적.' },
                { name: '파워 (Power)', score: 7, description: '피지컬에 비해 파워 플레이는 적음.' }
            ],
            growthStory: `
                <p>미국 뉴욕에서 태어났지만 일본에서 자랐고, 14살 때 스페인 발렌시아로 옮겨 테니스를 배웠습니다. 덕분에 일본의 성실함과 스페인의 클레이 코트 전술을 모두 갖췄습니다.</p>
            `,
            signatureMatch: {
                title: '2018 인디언 웰스 2회전 vs 노박 조코비치',
                date: '2018. 03. 11',
                description: '조코비치를 상대로 2-1 승리를 거뒀습니다. 조코비치가 부상 복귀전이었다고는 하나, 타로 다니엘의 끈질긴 플레이가 빛을 발한 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎸 "이색 취미"</div>
                    <p>레드 제플린, 너바나 등 록 음악을 좋아하며 드럼 연주가 취미입니다. SNS에 코믹한 영상을 올리는 등 유쾌한 성격입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>2023-2024 시즌에 30대의 나이로 다시 Top 100에 진입하고 투어 결승(오클랜드)에 오르는 등 노련미가 무르익었습니다.</p>
            `,
            faq: [
                {
                    question: '어느 나라 말을 쓰나요?',
                    answer: '영어, 일본어, 스페인어 3개 국어를 원어민 수준으로 구사합니다. 인터뷰할 때 통역이 필요 없습니다.'
                },
                {
                    question: '일본 대표인가요?',
                    answer: '네, 데이비스컵과 올림픽에 일본 국가대표로 출전합니다. 니시코리, 니시오카와 함께 일본 테니스를 이끌고 있습니다.'
                },
                {
                    question: '키가 큰데 서브가 약한가요?',
                    answer: '약하다기보다는 확률 높은 서브를 선호합니다. 최근에는 서브 속도를 높이기 위해 폼을 교정하고 있습니다.'
                }
            ]
        }
    },
    'roberto-bautista-agut': {
        name: '로베르토 바우티스타 아굿', nameEn: 'Roberto Bautista Agut', country: 'Spain', countryFlag: '🇪🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '스페인의 철벽 "RBA". 엄청난 체력과 기복 없는 플레이, 그리고 강인한 멘탈로 톱 랭커들도 꺼려하는 아주 끈질기고 까다로운 승부사입니다.',
        detailedProfile: {
            oneLineSummary: '무결점의 꾸준함, 지치지 않는 체력과 강철 같은 멘탈로 상대를 질식시키는 "스페인산 벽".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧱 "통곡의 벽"</div>
                    <p>어떤 공이든 다 받아넘긴다고 해서 <strong>"벽"</strong> 같다는 평가를 받습니다. 화려한 위너보다는 실수를 하지 않는 플레이로 상대를 지치게 만듭니다. 2019년 윔블던 4강에 오르며 커리어 하이를 찍었고, Top 20에서 오랫동안 머물렀습니다. 조코비치가 "가장 상대하기 까다로운 선수 중 한 명"이라고 언급할 정도입니다.</p>
                </div>
                <p>말 훈련장에서 훈련한 적이 있을 정도로 '말'을 좋아하며, 코트 위에서도 말처럼 지치지 않고 뜁니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처의 정석"</strong></p>
                <p>플랫성 구질의 스트로크를 구사하며, 템포를 빠르게 가져갑니다. 수비만 하는 것이 아니라 기회가 오면 정확한 샷으로 득점합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇪🇸 RBA의 3가지 "견고함"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>플랫 포핸드:</strong> 스페인 선수치고는 드물게 탑스핀보다는 낮게 깔리는 플랫 샷을 주무기로 합니다.</li>
                        <li><strong>강철 체력:</strong> 5세트 접전이 되어도 체력 저하가 거의 없습니다. 오히려 시간이 갈수록 더 강해집니다.</li>
                        <li><strong>멘탈:</strong> 표정 변화 없이 묵묵히 자신의 플레이를 합니다. 부모님이 돌아가신 직후에도 대회에 출전해 우승을 차지하는 등 믿기 힘든 정신력을 보여주었습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '꾸준함 (Consistency)', score: 10, description: '기계 같은 정확성.' },
                { name: '체력 (Stamina)', score: 10, description: '무한 동력.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '강인한 정신력.' },
                { name: '이동 (Movement)', score: 9, description: '부지런한 발.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '정교한 플랫.' },
                { name: '서브 (Serve)', score: 7.5, description: '안정적이나 파괴력 부족.' }
            ],
            growthStory: `
                <p>스페인 카스테욘 데 라 플라나 출신입니다. 원래 축구 선수로도 재능이 있어 비야레알 CF 유스 팀에서 뛰었으나 테니스를 선택했습니다. 축구로 다져진 하체와 체력이 그의 큰 자산입니다.</p>
            `,
            signatureMatch: {
                title: '2019 윔블던 4강 진출',
                date: '2019. 07',
                description: '그랜드슬램 첫 4강 진출. 준결승에서 조코비치를 상대로 끈질긴 승부를 펼쳤습니다. 비록 패했지만, 잔디 코트에서도 그의 플랫 샷이 통한다는 것을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐴 "말 애호가"</div>
                    <p>7마리의 말을 키우고 있는 승마 애호가입니다. 은퇴 후 목장을 운영하는 것이 꿈이라고 할 정도로 말에 대한 사랑이 각별합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클래스는 영원하다"</strong></p>
                <p>30대 중반의 나이에도 여전히 경쟁력을 유지하고 있습니다. 부상으로 잠시 주춤했지만 다시 랭킹을 끌어올리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '축구를 계속했다면 어땠을까요?',
                    answer: '비야레알 CF 유스 출신이라 성공했을 가능성이 높습니다. 하지만 개인 종목인 테니스의 성취감이 더 좋았다고 합니다.'
                },
                {
                    question: '조코비치에게 강한가요?',
                    answer: '상대 전적은 밀리지만, 조코비치를 하드 코트에서 3번이나 이긴 적이 있습니다. 조코비치도 그를 매우 경계합니다.'
                },
                {
                    question: '결혼식 날 경기를 했다고요?',
                    answer: '2019 윔블던 4강에 가는 바람에 친구들과의 총각 파티(Ibiza)를 취소해야 했습니다. 하지만 4강 진출이 최고의 선물이었다고 합니다.'
                }
            ]
        }
    },
    'marton-fucsovics': {
        name: '마르톤 푸초비치', nameEn: 'Marton Fucsovics', country: 'Hungary', countryFlag: '🇭🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '헝가리의 아이언맨. 투어에서 가장 완벽한 근육질 몸매를 자랑하며, 그 힘에서 나오는 파워풀한 서브와 스트로크가 주무기입니다.',
        detailedProfile: {
            oneLineSummary: '조각 같은 근육질 몸매에서 나오는 파워 테니스, 헝가리 테니스의 역사를 새로 쓰는 "아이언맨".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💪 "테니스계의 헐크"</div>
                    <p>상의 탈의 사진이 올라올 때마다 화제가 될 정도로, 투어 선수 중 가장 <strong>완벽한 근육질 몸매</strong>를 가지고 있습니다. 단순한 관상용 근육이 아니라, 그 힘을 바탕으로 폭발적인 파워를 냅니다. 주니어 윔블던 우승자 출신으로, 헝가리 남자 테니스의 에이스로서 오랜 기간 활약하고 있습니다.</p>
                </div>
                <p>힘으로 밀어붙이는 플레이뿐만 아니라 슬라이스와 드롭샷 등 기술적인 면도 꾸준히 발전했습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워 올라운더"</strong></p>
                <p>강력한 신체 능력을 바탕으로 베이스라인 대결을 즐깁니다. 어떤 공이 와도 밀리지 않고 강하게 받아칠 수 있습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇺 푸초비치의 3가지 "힘"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>피지컬:</strong> 탄탄한 근육에서 나오는 파워는 상대에게 위압감을 줍니다. 부상도 잘 당하지 않는 '금강불괴'입니다.</li>
                        <li><strong>포핸드:</strong> 짧은 볼을 때리는 포핸드 어프로치 샷의 위력이 대단합니다.</li>
                        <li><strong>슬라이스:</strong> 백핸드 슬라이스를 낮게 깔아 상대의 타이밍을 뺏는 노련미도 갖췄습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '압도적인 피지컬.' },
                { name: '체력 (Stamina)', score: 9, description: '지치지 않음.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '주무기.' },
                { name: '서브 (Serve)', score: 8, description: '묵직함.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '가끔 급해짐.' },
                { name: '전술 (Tactics)', score: 7.5, description: '점차 노련해짐.' }
            ],
            growthStory: `
                <p>헝가리 니레지하러 출신입니다. 2010년 윔블던 주니어 단식 우승을 차지하며 세계 1위가 되었습니다. 프로 전향 후 적응에 시간이 걸렸지만, 꾸준한 노력으로 Top 50에 안착했습니다.</p>
            `,
            signatureMatch: {
                title: '2021 윔블던 8강 진출',
                date: '2021. 07',
                description: '헝가리 남자 선수로는 1948년 이후 73년 만에 윔블던 8강에 오르는 역사를 썼습니다. 루블레프, 슈와르츠만 등을 꺾으며 잔디 코트에서의 강점을 보여주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📸 "보디빌더?"</div>
                    <p>경기 후 상의를 갈아입는 장면이 중계될 때마다 탄성을 자아냅니다. 다니엘 메드베데프가 그의 근육을 보고 "질투 난다"고 농담했을 정도입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"꾸준함의 대명사"</strong></p>
                <p>매년 투어 우승이나 상위 라운드 진출을 기록하며 헝가리 테니스를 지탱하고 있습니다. 2024년 부쿠레슈티 오픈(Tiriac Open) 우승으로 통산 2번째 타이틀을 획득했습니다.</p>
            `,
            faq: [
                {
                    question: '근육 운동을 얼마나 하나요?',
                    answer: '테니스 훈련 외에도 웨이트 트레이닝에 많은 시간을 투자합니다. 하지만 유연성을 잃지 않기 위해 스트레칭도 소홀히 하지 않는다고 합니다.'
                },
                {
                    question: '주니어 1위 출신인가요?',
                    answer: '네, 2010년 주니어 랭킹 1위였습니다. 당시 기대만큼 빠르게 성장하지는 못했지만, 늦게나마 꽃을 피웠습니다.'
                },
                {
                    question: '헝가리 테니스 영웅인가요?',
                    answer: '그렇습니다. 마로잔이 등장하기 전까지 혼자서 헝가리 테니스를 이끌었습니다. 데이비스컵에서도 항상 에이스 역할을 합니다.'
                }
            ]
        }
    },
    'borna-coric': {
        name: '보르나 초리치', nameEn: 'Borna Coric', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '크로아티아의 전사. "Baby Djokovic"이라 불릴 정도로 뛰어난 백핸드와 수비력을 가졌으며, 마스터스 1000 우승(신시내티) 경험이 있는 강자입니다.',
        detailedProfile: {
            oneLineSummary: '어깨 수술을 딛고 마스터스 챔피언으로 부활한 "크로아티아의 전사", 조코비치를 닮은 완벽한 백핸드.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "베이비 조코비치"에서 "마스터"로</div>
                    <p>데뷔 초부터 플레이 스타일과 외모가 노박 조코비치와 비슷해 <strong>"베이비 조코비치"</strong>로 불렸습니다. 페더러, 나달, 머레이를 모두 이겨본 몇 안 되는 선수 중 한 명입니다. 긴 부상 공백 후 복귀한 2022년 신시내티 마스터스에서 세계 152위의 랭킹으로 우승을 차지하는 기적을 일으켰습니다.</p>
                </div>
                <p>오른쪽 어깨 수술이라는 치명적인 부상을 극복하고 다시 정상급 기량을 되찾은 의지의 아이콘입니다.</p>
            `,
            playStyle: `
                <p><strong>"디펜시브 베이스라이너 (Defensive Baseliner)"</strong></p>
                <p>조코비치처럼 탄탄한 수비와 정교한 백핸드가 강점입니다. 끈질기게 공을 넘기다가 상대의 빈틈을 찌릅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇷 초리치의 3가지 "방패"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 투어 전체를 통틀어 가장 완벽한 양손 백핸드 중 하나를 구사합니다. 실수 없고 공격적입니다.</li>
                        <li><strong>반사 신경:</strong> 수비 상황에서 공을 건져내는 능력이 탁월합니다.</li>
                        <li><strong>서브:</strong> 어깨 수술 후 서브 폼을 교정하여 더 간결하고 효율적인 서브를 구사합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 10, description: '월드 클래스.' },
                { name: '수비 (Defense)', score: 9.5, description: '조코비치급 벽.' },
                { name: '멘탈 (Mental)', score: 9, description: '강한 승부욕.' },
                { name: '이동 (Movement)', score: 9, description: '민첩함.' },
                { name: '서브 (Serve)', score: 8, description: '준수함.' },
                { name: '포핸드 (Forehand)', score: 7.5, description: '안정적이나 파괴력은 다소 부족.' }
            ],
            growthStory: `
                <p>크로아티아 자그레브 출신입니다. 2013년 US 오픈 주니어 우승을 차지하며 두각을 나타냈습니다. 17세에 나달을 꺾으며 '천재 소년'으로 불렸습니다.</p>
            `,
            signatureMatch: {
                title: '2022 신시내티 마스터스 결승 vs 스테파노스 치치파스',
                date: '2022. 08. 21',
                description: '부상 복귀 후 랭킹 152위로 출전해 나달, 알리아심, 노리 등을 꺾고 결승에서 치치파스마저 제압하며 우승했습니다. ATP 마스터스 1000 역사상 최저 랭킹 우승 기록입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥊 "복싱 팬"</div>
                    <p>마이크 타이슨의 열렬한 팬입니다. 그의 공격적인 테니스 스타일과 강인한 멘탈은 복싱에서 영감을 받았다고 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"완벽한 부활"</strong></p>
                <p>부상 우려를 씻어내고 Top 20~30위권을 꾸준히 유지하고 있습니다. 클레이, 하드 코트를 가리지 않고 고른 성적을 냅니다.</p>
            `,
            faq: [
                {
                    question: '조코비치와 정말 비슷한가요?',
                    answer: '네, 백핸드 폼과 유연한 수비 동작이 매우 흡사합니다. 실제로 조코비치를 상대로 투어에서 승리한 경험도 있습니다.'
                },
                {
                    question: '어깨 수술은 괜찮나요?',
                    answer: '2021년 수술 후 재활에 성공하여 현재는 통증 없이 경기하고 있습니다. 서브 동작을 조금 더 부드럽게 바꿨습니다.'
                },
                {
                    question: '여자친구는 누구인가요?',
                    answer: 'WTA 선수인 도나 베키치와 사귀었으나 헤어졌고, 현재는 사생활을 비공개로 하고 있습니다.'
                }
            ]
        }
    },
    'gael-monfils': {
        name: '가엘 몽피스', nameEn: 'Gael Monfils', country: 'France', countryFlag: '🇫🇷', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 쇼맨 "La Monf". 믿을 수 없는 운동신경과 화려한 플레이로 관중들을 열광시키는 테니스계 최고의 엔터테이너입니다.',
        detailedProfile: {
            oneLineSummary: '중력을 거스르는 점프와 믿을 수 없는 샷, 테니스 역사상 최고의 "슈퍼 히어로" 엔터테이너.',
            whyNotable: `
                <p><strong>"La Monf, 코트 위의 예술가"</strong></p>
                <p>가엘 몽피스는 승패를 떠나 가장 보고 싶은 경기를 하는 선수입니다. 슬라이딩하며 치는 샷, 360도 회전 스매싱 등 묘기에 가까운 플레이로 관중들을 매료시킵니다.</p>
                <p>단순한 쇼맨이 아니라 세계 랭킹 6위까지 올랐던 실력파이며, 30대 후반의 나이에도 여전히 투어 우승을 차지하는 등 자기 관리 또한 철저한 "살아있는 전설"입니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 + 아크로바틱 디펜더"</strong></p>
                <p>엄청난 스피드와 탄력을 바탕으로 불가능해 보이는 공을 건져냅니다. 수비 위주의 플레이를 하다가 기습적으로 터뜨리는 강력한 포핸드는 그의 전매특허입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>운동신경:</strong> NBA 선수를 연상시키는 점프력과 유연성은 타의 추종을 불허합니다.</li>
                    <li><strong>포핸드:</strong> 시속 190km가 넘는 포핸드 위너를 칠 수 있는 파워를 감추고 있습니다.</li>
                    <li><strong>쇼맨십:</strong> 관중의 호응을 유도하고 즐기는 스타성은 경기 분위기를 순식간에 반전시킵니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '순간 스피드와 점프력은 역대 최고 수준.' },
                { name: '엔터테인먼트 (Showmanship)', score: 10, description: '관중을 미치게 만드는 스타성.' },
                { name: '수비 (Defense)', score: 9.5, description: '코트 어디서든 공을 넘겨보냄.' },
                { name: '서브 (Serve)', score: 9, description: '최고 235km/h에 달하는 강서브 보유.' },
                { name: '집중력 (Focus)', score: 7, description: '분위기에 휩쓸려 경기를 내줄 때가 있음.' },
                { name: '전술 (Tactics)', score: 7.5, description: '본능에 의존하는 경향이 강함.' }
            ],
            growthStory: `
                <p>프랑스 파리 출신으로 아버지는 과들루프, 어머니는 마르티니크 출신입니다. 주니어 시절 3개 그랜드슬램을 석권하며 '천재' 소리를 들었습니다.</p>
                <p>프로 데뷔 후 잦은 부상으로 기대만큼의 성적을 못 냈다는 평도 있지만, 20년 가까이 Top 100을 유지하며 롱런하고 있습니다. 동료 선수 엘리나 스비톨리나와 결혼하여 '테니스 부부'로도 유명합니다.</p>
            `,
            signatureMatch: {
                title: '2014 US 오픈 8강 vs 로저 페더러',
                date: '2014. 09. 05',
                description: '비록 2-3으로 역전패했지만, 몽피스의 재능이 폭발한 경기. 페더러를 벼랑 끝까지 몰아붙이며 매치 포인트까지 잡았던, US 오픈 역사상 가장 재미있는 경기 중 하나로 꼽힙니다.'
            },
            recentForm: `
                <p><strong>"즐기는 베테랑"</strong></p>
                <p>2023년 스톡홀름 오픈 우승으로 12년 연속 투어 결승 진출 기록을 세웠습니다. 승패에 연연하기보다 테니스 자체를 즐기며 황혼기를 불태우고 있습니다.</p>
            `
        }
    },
    'matteo-berrettini': {
        name: '마테오 베레티니', nameEn: 'Matteo Berrettini', country: 'Italy', countryFlag: '🇮🇹', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 "망치(The Hammer)". 모델 같은 외모와 그에 걸맞은 파괴적인 포핸드, 강력한 서브로 윔블던 준우승을 차지한 스타 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '파괴적인 서브와 포핸드라는 "두 개의 망치"를 휘무르는 이탈리아의 다비드상.',
            whyNotable: `
                <p><strong>"이탈리아 테니스의 르네상스를 연 주역"</strong></p>
                <p>마테오 베레티니는 이탈리아 남자 선수 최초로 윔블던 결승(2021)에 진출하며 자국 테니스의 부흥을 이끌었습니다. 'The Hammer'라는 별명처럼 강력한 힘을 앞세운 플레이는 잔디 코트에서 특히 위력을 발휘합니다.</p>
                <p>그의 잘생긴 외모와 보스 같은 카리스마는 패션계에서도 주목받아, 휴고 보스(Hugo Boss)의 글로벌 앰버서더로도 활동하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 + 포핸드 몬스터"</strong></p>
                <p>전형적인 '원투 펀치' 스타일입니다. 서브로 상대를 무너뜨리고, 포핸드로 마무리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 시속 220km를 넘나드는 대포알 서브는 투어에서 가장 위력적인 무기 중 하나입니다.</li>
                    <li><strong>포핸드:</strong> 엄청난 라켓 헤드 스피드에서 나오는 탑스핀 포핸드는 '망치'처럼 무겁고 강력합니다.</li>
                    <li><strong>백핸드:</strong> 상대적으로 약점으로 꼽히지만, 정교한 슬라이스로 이를 보완하며 템포 조절을 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '브레이크가 거의 불가능한 수준의 서브 게임.' },
                { name: '포핸드 (Forehand)', score: 10, description: '걸리면 끝나는 필살기.' },
                { name: '파워 (Power)', score: 9.5, description: '순수 힘 대결에서는 밀리는 법이 없음.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '중요한 순간 서브로 위기를 탈출하는 대담함.' },
                { name: '체력 (Stamina)', score: 7.5, description: '잦은 부상이 발목을 잡음.' },
                { name: '백핸드 (Backhand)', score: 7, description: '슬라이스는 좋으나 공격력은 부족.' }
            ],
            growthStory: `
                <p>이탈리아 로마 출신으로, 전직 테니스 선수였던 부모님의 영향을 받았습니다. 늦게 꽃을 피운 편으로, 2019년 US 오픈 4강에 오르며 세계적인 주목을 받기 시작했습니다.</p>
                <p>이후 윔블던 준우승, 호주 오픈 4강 등 메이저 대회에서 꾸준히 성적을 냈으나, 복근과 손목 부상으로 긴 재활의 시간을 보내기도 했습니다. 최근 우승을 차지하며 부활의 신호탄을 쏘아 올렸습니다.</p>
            `,
            signatureMatch: {
                title: '2021 윔블던 결승 vs 노박 조코비치',
                date: '2021. 07. 11',
                description: '이탈리아 역사상 첫 윔블던 결승. 비록 조코비치의 벽에 막혀 준우승에 그쳤지만, 첫 세트를 따내며 디펜딩 챔피언을 긴장시켰던 명승부였습니다.'
            },
            recentForm: `
                <p><strong>"부활하는 거인"</strong></p>
                <p>2024년, 긴 부상 공백을 깨고 복귀하여 마라케시 오픈 우승을 차지했습니다. 여전한 서브 파워를 과시하며 잔디 시즌에서의 활약을 예고하고 있습니다.</p>
            `
        }
    },
    'felix-auger-aliassime': {
        name: '펠릭스 오제 알리아심', nameEn: 'Felix Auger-Aliassime', country: 'Canada', countryFlag: '🇨🇦', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '캐나다의 차세대 리더. 완벽한 신체 조건과 성실함, 그리고 폭발적인 재능을 겸비한 "FA2". 토니 나달의 지도를 받으며 계속 성장 중입니다.',
        detailedProfile: {
            oneLineSummary: '나달의 스승 토니 나달이 선택한 재능, 완벽한 피지컬과 성실함으로 무장한 캐나다의 영건.',
            whyNotable: `
                <p><strong>"준비된 슈퍼스타"</strong></p>
                <p>펠릭스 오제 알리아심은 주니어 시절부터 '완성형 선수'로 평가받았습니다. ATP 투어 결승에서 8연패를 당하는 불운의 징크스도 있었지만, 이를 극복하고 2022년 한 해에만 4승을 쓸어 담으며 알을 깨고 나왔습니다.</p>
                <p>라파엘 나달을 키워낸 '토니 나달'이 코치로 합류했다는 사실만으로도 그의 잠재력이 얼마나 큰지 알 수 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"다재다능한 올라운더 (Athletic All-Rounder)"</strong></p>
                <p>큰 키(193cm)와 유연함, 스피드를 모두 갖춘 완벽한 피지컬에서 나오는 테니스를 구사합니다. 특별한 약점이 없는 것이 강점입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 매우 부드러운 폼에서 나오는 강서브는 정확도와 파워를 모두 겸비했습니다.</li>
                    <li><strong>포핸드:</strong> 타점을 앞에서 잡아 채는 공격적인 포핸드로 경기를 주도합니다.</li>
                    <li><strong>움직임:</strong> 큰 키에도 불구하고 풋워크가 매우 가볍고 빠릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '피지컬 (Physicality)', score: 9.5, description: '현대 테니스에 최적화된 신체 조건.' },
                { name: '서브 (Serve)', score: 9, description: '에이스 생산 능력이 탁월함.' },
                { name: '포핸드 (Forehand)', score: 9, description: '공격의 시발점이자 마무리 무기.' },
                { name: '스피드 (Speed)', score: 9, description: '코트 커버리지가 매우 좋음.' },
                { name: '멘탈 (Mental)', score: 8, description: '결승전 징크스는 극복했으나 기복이 있음.' },
                { name: '백핸드 (Backhand)', score: 8, description: '견고하지만 결정력은 포핸드보다 낮음.' }
            ],
            growthStory: `
                <p>캐나다 몬트리올 출신으로 아버지는 토고, 어머니는 캐나다인입니다. 14세에 챌린저 투어 본선 승리를 거두며 최연소 기록을 갈아치웠습니다.</p>
                <p>데뷔 초 '결승전 전패'라는 꼬리표가 따라다녔으나, 끊임없는 노력과 멘탈 관리로 2022년 로테르담 오픈에서 첫 우승을 차지하며 징크스를 깼습니다. 캐나다 국가대표로서 데이비스 컵 우승을 이끌기도 했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 US 오픈 2라운드 vs 잭 드레이퍼',
                date: '2022. 09. 01',
                description: '그의 잠재력이 폭발했던 시기. 압도적인 기량으로 상대를 제압하며 생애 첫 그랜드슬램 4강(2021 US 오픈)에 이어 꾸준한 메이저 경쟁력을 증명했습니다.'
            },
            recentForm: `
                <p><strong>"재도약 준비"</strong></p>
                <p>2023년 부상 등으로 잠시 주춤하며 랭킹이 떨어졌지만, 2024년 마드리드 마스터스 결승에 진출하며 다시 폼을 끌어올리고 있습니다. 언제든 Top 5에 복귀할 수 있는 저력을 가진 선수입니다.</p>
            `
        }
    },

    'denis-shapovalov': {
        name: '데니스 샤포발로프', nameEn: 'Denis Shapovalov', country: 'Canada', countryFlag: '🇨🇦', gender: 'male',
        plays: 'Left-handed', backhand: 'One-handed',
        longBio: '코트 위의 야생마 "El Shapo". 폭발적인 점프 원핸드 백핸드와 다이나믹한 플레이로 팬들의 사랑을 받는 공격형 테니스의 진수입니다.',
        detailedProfile: {
            oneLineSummary: '하늘을 나는 듯한 점프 원핸드 백핸드, 긁히는 날에는 누구도 막을 수 없는 "El Shapo".',
            whyNotable: `
                <p><strong>"가장 화려한 원핸드 백핸드의 소유자"</strong></p>
                <p>데니스 샤포발로프는 현역 선수 중 가장 다이나믹한 폼을 가진 선수 중 하나입니다. 특히 베이스라인에서 도움닫기 후 공중으로 날아올라 때리는 '점핑 원핸드 백핸드'는 그의 트레이드마크이자 테니스 하이라이트 필름의 단골 소재입니다.</p>
                <p>랩 음악을 만들어 발표할 정도로 끼가 넘치며, 코트 위에서도 감정을 숨기지 않는 열정적인 모습으로 'El Shapo'라는 애칭으로 불립니다.</p>
            `,
            playStyle: `
                <p><strong>"하이 리스크 하이 리턴 (Aggressive All-Court)"</strong></p>
                <p>샤포발로프의 사전에는 '수비'가 없습니다. 서브부터 리턴, 스트로크까지 모든 샷을 풀스윙으로 때려 위너를 노립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 왼손잡이 특유의 슬라이스 서브와 강력한 플랫 서브를 섞어 구사합니다.</li>
                    <li><strong>원핸드 백핸드:</strong> 타점이 매우 높고 공격적입니다. 다운더라인 위너가 터지는 날은 승리를 장담합니다.</li>
                    <li><strong>포핸드:</strong> 백핸드 못지않게 강력한 파워를 자랑하며, 회전량이 많아 바운드 후 크게 튀어 오릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '모든 샷을 전력으로 때리는 파괴력.' },
                { name: '스타성 (Star Quality)', score: 10, description: '화려한 플레이로 관중을 사로잡음.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '예술에 가까운 점프 원핸드 백핸드.' },
                { name: '서브 (Serve)', score: 9, description: '왼손잡이 이점을 살린 까다로운 서브.' },
                { name: '안정성 (Consistency)', score: 5, description: '위너만큼 에러도 많이 쏟아냄.' },
                { name: '멘탈 (Mental)', score: 6, description: '경기가 안 풀릴 때 스스로 무너지는 경향.' }
            ],
            growthStory: `
                <p>이스라엘 텔아비브에서 태어나 캐나다로 이주했습니다. 어머니가 직접 테니스 코치로서 그를 지도했습니다. 2017년 몬트리올 마스터스에서 라파엘 나달을 꺾으며 혜성처럼 등장, '넥스트 제너레이션'의 선두주자로 주목받았습니다.</p>
                <p>이후 윔블던 4강(2021)에 오르며 가능성을 증명했지만, 잦은 기복과 부상을 줄이는 것이 과제입니다.</p>
            `,
            signatureMatch: {
                title: '2017 몬트리올 마스터스 16강 vs 라파엘 나달',
                date: '2017. 08. 11',
                description: "전 세계에 자신의 이름을 알린 경기. 18세의 와일드카드 선수가 홈 관중 앞에서 '흙신' 나달을 상대로 믿을 수 없는 위너들을 쏟아내며 역전승을 거둔, 캐나다 테니스 역사상 가장 짜릿한 순간 중 하나입니다."
            },
            recentForm: `
                <p><strong>"절치부심"</strong></p>
                <p>2023년 무릎 부상으로 랭킹이 100위권 밖으로 밀려났으나, 2024년 복귀 후 다시 랭킹을 끌어올리고 있습니다. 여전한 폭발력을 보여주며 재기를 노리고 있습니다.</p>
            `
        }
    },
    'alexander-bublik': {
        name: '알렉산더 버블릭', nameEn: 'Alexander Bublik', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 악동이자 천재. 언더암 서브, 트위너 등 예측할 수 없는 변칙 플레이로 상대를 혼란에 빠뜨리는 "Trickster"입니다.',
        detailedProfile: {
            oneLineSummary: '언더암 서브와 묘기 샷의 달인, 테니스를 가장 창의적으로(혹은 이상하게) 치는 "The Trickster".',
            whyNotable: `
                <p><strong>"지루한 테니스는 거부한다"</strong></p>
                <p>알렉산더 버블릭은 투어에서 가장 독특한 캐릭터입니다. "테니스가 싫다"고 공공연하게 말하면서도(상금을 위해 뛴다고 농담 반 진담 반으로 말함), 코트 위에서는 누구보다 천재적인 감각으로 묘기 샷을 선보입니다.</p>
                <p>불리한 상황에서 갑자기 언더암 서브를 넣거나, 라켓 손잡이로 공을 치는 등 기상천외한 플레이로 관중들을 웃게 만들고 상대를 당황시킵니다.</p>
            `,
            playStyle: `
                <p><strong>"예측 불가능한 변칙 플레이어"</strong></p>
                <p>정석적인 랠리를 싫어합니다. 드롭샷, 로브, 슬라이스 등 온갖 기술을 섞어 상자의 리듬을 깨는 데 주력합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 최상위권의 서브 파워를 가졌습니다. 세컨드 서브에서도 시속 220km를 때리는 도박적인 플레이를 즐깁니다.</li>
                    <li><strong>터치:</strong> 드롭샷 감각은 천부적입니다.</li>
                    <li><strong>변칙:</strong> 언더암 서브 빈도가 투어에서 가장 높으며, 성공률도 꽤 높습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '상상 그 이상의 플레이를 보여줌.' },
                { name: '서브 (Serve)', score: 9.5, description: '에이스와 더블 폴트 모두 많음.' },
                { name: '터치 (Touch)', score: 9.5, description: '드롭샷과 발리 감각이 매우 뛰어남.' },
                { name: '파워 (Power)', score: 8.5, description: '마음먹고 치면 매우 강력함.' },
                { name: '멘탈 (Mental)', score: 5, description: '경기가 안 풀리면 라켓을 부수거나 대충 침.' },
                { name: '성실함 (Effort)', score: 4, description: '최선을 다하지 않는 것처럼 보일 때가 있음.' }
            ],
            growthStory: `
                <p>러시아 가치나 출신이나, 지원을 받기 위해 카자흐스탄으로 국적을 옮겼습니다. 주니어 시절부터 재능은 인정받았으나, 자유분방한 성격 탓에 코치들과 마찰이 잦았습니다.</p>
                <p>하지만 2022년 몽펠리에 오픈에서 즈베레프를 꺾고 첫 우승을 차지하며 재능을 증명했고, 2023년 할레 오픈(잔디)에서도 루블레프를 꺾고 우승하며 큰 무대에서도 통하는 실력자임을 보여주었습니다.</p>
            `,
            signatureMatch: {
                title: '2023 할레 오픈 결승 vs 안드레이 루블레프',
                date: '2023. 06. 25',
                description: '버블릭의 재능이 만개한 대회. 결승전에서 강력한 우승 후보 루블레프를 상대로 서브와 변칙 플레이를 적절히 섞어가며 승리, 생애 첫 ATP 500 시리즈 타이틀을 획득했습니다.'
            },
            recentForm: `
                <p><strong>"커리어 하이"</strong></p>
                <p>2024년 몽펠리에 오픈 우승, 두바이 챔피언십 결승 진출 등 시즌 초반 커리어 최고의 성적을 거두며 랭킹 20위권 내에 안착했습니다.</p>
            `
        }
    },
    'jack-draper': {
        name: '잭 드레이퍼', nameEn: 'Jack Draper', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'male',
        plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '영국 테니스의 새로운 희망. 앤디 머레이의 뒤를 이을 재목으로 평가받으며, 강력한 왼손 서브와 묵직한 포핸드가 강점인 라이징 스타입니다.',
        detailedProfile: {
            oneLineSummary: '앤디 머레이가 지목한 영국의 후계자, 왼손에서 뿜어져 나오는 묵직한 파워.',
            whyNotable: `
                <p><strong>"영국 테니스의 차세대 기수"</strong></p>
                <p>잭 드레이퍼는 어린 시절부터 영국 테니스계의 기대를 한 몸에 받아온 엘리트 유망주입니다. 193cm의 훌륭한 신체 조건과 왼손잡이라는 이점, 그리고 침착한 멘탈까지 갖춰 차기 Grand Slam 챔피언 후보로 거론됩니다.</p>
                <p>우상인 앤디 머레이의 멘토링을 받으며 빠르게 성장하고 있어, 영국 팬들의 사랑을 독차지하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀한 왼손잡이 베이스라이너"</strong></p>
                <p>나달을 연상시키는 묵직한 왼손 포핸드가 주무기입니다. 하지만 나달보다는 좀 더 플랫하고 공격적인 성향을 띱니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 왼손잡이 특유의 슬라이스 서브가 코트 밖으로 빠져나가며 상대를 괴롭힙니다.</li>
                    <li><strong>포핸드:</strong> 매우 강한 파워를 실어 때리는 포핸드 역크로스 샷이 일품입니다.</li>
                    <li><strong>피지컬:</strong> 어린 나이임에도 완성된 근육질 몸매를 가지고 있어 힘 대결에서 밀리지 않습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '타고난 힘이 장사.' },
                { name: '서브 (Serve)', score: 9, description: '왼손잡이 이점이 더해져 매우 까다로움.' },
                { name: '포핸드 (Forehand)', score: 9, description: '경기를 주도하는 확실한 무기.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '어린 나이답지 않게 차분함.' },
                { name: '체력 (Stamina)', score: 7, description: '잦은 부상이 성장의 걸림돌.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '준수하지만 발전이 필요함.' }
            ],
            growthStory: `
                <p>영국 런던 근교 서튼 출신으로, 아버지는 영국 테니스 협회(LTA) CEO를 지낸 로저 드레이퍼, 어머니는 주니어 테니스 챔피언 출신입니다.</p>
                <p>2018년 윔블던 주니어 준우승으로 두각을 나타냈고, 2022년 넥스트 제너레이션 파이널스에 진출하며 세계 무대에 이름을 알렸습니다. 2024년 슈투트가르트 오픈에서 베레티니를 꺾고 생애 첫 투어 우승을 차지했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 슈투트가르트 오픈 결승 vs 마테오 베레티니',
                date: '2024. 06. 16',
                description: '잔디 코트 강자 베레티니를 상대로 접전 끝에 2-1 승리를 거두며 생애 첫 ATP 투어 타이틀을 획득했습니다. 영국 남자 테니스의 자존심을 세운 날입니다.'
            },
            recentForm: `
                <p><strong>"잠재력 폭발"</strong></p>
                <p>첫 우승의 기세를 몰아 랭킹을 급격히 끌어올리고 있습니다. 부상만 없다면 Top 10 진입도 머지않아 보이는 상승세입니다.</p>
            `
        }
    },
    'arthur-fils': {
        name: '아서 필스', nameEn: 'Arthur Fils', country: 'France', countryFlag: '🇫🇷', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '프랑스 테니스의 미래. 폭발적인 피지컬과 두려움 없는 공격 테니스로 최연소 Top 50에 진입한 괴물 신인입니다.',
        detailedProfile: {
            oneLineSummary: '프랑스가 기다려온 대형 유망주, 터질듯한 피지컬과 파워로 무장한 "Next Tsonga".',
            whyNotable: `
                <p><strong>"제2의 총가(Tsonga)"</strong></p>
                <p>아서 필스는 조-윌프리드 총가를 연상시키는 강력한 피지컬과 파워풀한 플레이 스타일 때문에 '제2의 총가'로 불립니다. 2004년생이라는 어린 나이에 ATP 투어 우승(2023 리옹)을 차지하며 프랑스 테니스의 차세대 에이스로 낙점받았습니다.</p>
                <p>웃음 많고 에너지 넘치는 성격으로 스타성까지 겸비했습니다.</p>
            `,
            playStyle: `
                <p><strong>"피지컬 몬스터 + 파워 히터"</strong></p>
                <p>허벅지 근육이 매우 발달해 있어 폭발적인 하체 힘에서 나오는 스트로크가 압권입니다. 베이스라인 안쪽으로 파고들며 공격하는 것을 선호합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 엄청난 스피드의 포핸드 위너를 뿜어냅니다. 그의 가장 큰 득점원입니다.</li>
                    <li><strong>스피드:</strong> 육중한 체격에 비해 발이 매우 빠르고 움직임이 민첩합니다.</li>
                    <li><strong>서브:</strong> 아직 완성형은 아니지만 최고 220km에 달하는 잠재력을 가졌습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '통뼈에서 나오는 묵직한 힘.' },
                { name: '피지컬 (Physicality)', score: 9.5, description: '성인 무대에서도 밀리지 않는 완성된 몸.' },
                { name: '포핸드 (Forehand)', score: 9, description: '아주 강력한 무기.' },
                { name: '스피드 (Speed)', score: 9, description: '빠르고 탄력적인 움직임.' },
                { name: '경험 (Experience)', score: 6, description: '아직 경기 운영의 노련함은 부족.' },
                { name: '백핸드 (Backhand)', score: 7.5, description: '준수하지만 포핸드만큼 위협적이진 않음.' }
            ],
            growthStory: `
                <p>프랑스 파리 근교 콩드-쉬르-노로에서 태어났습니다. 2020년 오렌지 보울(세계적인 주니어 대회) 우승으로 일찌감치 두각을 나타냈습니다.</p>
                <p>2023년 홈에서 열린 리옹 오픈에서 우승하며 10대의 나이에 투어 타이틀을 거머쥐었고, 넥스트 제너레이션 파이널스 준우승을 차지하며 세계 무대에 자신의 이름을 각인시켰습니다.</p>
            `,
            signatureMatch: {
                title: '2023 리옹 오픈 결승 vs 프란시스코 세룬돌로',
                date: '2023. 05. 27',
                description: '생애 첫 투어 우승. 홈 팬들의 열광적인 응원 속에 클레이 강자 세룬돌로를 꺾으며 최연소 프랑스 우승 기록을 세웠습니다.'
            },
            recentForm: `
                <p><strong>"무서운 속도로 성장 중"</strong></p>
                <p>매 대회마다 성장하는 모습을 보여주고 있습니다. 특히 클레이와 하드 코트를 가리지 않고 좋은 성적을 내며 올라운더로서의 가능성을 보여줍니다.</p>
            `
        }
    },
    'sebastian-korda': {
        name: '세바스찬 코다', nameEn: 'Sebastian Korda', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/sebastian-korda.png', gender: 'male',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '스포츠 명문 코다 가문의 막내. 아버지 페트르 코다의 재능을 물려받아 부드러운 스윙과 정교한 기술을 구사하는 올라운드 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '아버지(테니스 챔피언)와 어머니(올림픽 테니스 선수)의 DNA를 물려받은 "테니스 금수저"이자 실력파.',
            whyNotable: `
                <p><strong>"로열 패밀리의 완성작"</strong></p>
                <p>아버지는 1998 호주 오픈 챔피언 페트르 코다, 어머니는 올림픽 테니스 선수 레지나 라이크르토바, 두 누나(넬리, 제시카)는 LPGA 골프 세계 랭킹 1위를 다투는 스타입니다. 그야말로 '스포츠 로열 패밀리'의 막내입니다.</p>
                <p>하지만 단순히 배경만 화려한 것이 아닙니다. 2018 호주 오픈 주니어 우승을 차지하며 아버지의 발자취를 따라가고 있으며, 투어에서도 매끄러운 폼과 뛰어난 재능으로 인정받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"클래식한 올라운더"</strong></p>
                <p>현대 테니스에서 보기 드물게 부드럽고 우아한 폼을 가지고 있습니다. 힘으로 윽박지르기보다는 타이밍과 코스로 승부합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투머들이 뽑은 '가장 부드러운 투핸드 백핸드' 중 하나입니다. 수비와 공격 모두 완벽합니다.</li>
                    <li><strong>발리:</strong> 네트 플레이를 두려워하지 않으며, 터치 감각이 매우 좋습니다.</li>
                    <li><strong>리턴:</strong> 베이스라인 안으로 들어와서 공격적으로 리턴하는 것을 즐깁니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '테크닉 (Technique)', score: 9.5, description: '교과서적이고 군더더기 없는 폼.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '그의 가장 큰 장점.' },
                { name: '네트 플레이 (Net)', score: 9, description: '복식 경기에서도 강점 발휘.' },
                { name: '전술 (Tactics)', score: 8.5, description: '영리하게 경기를 풀어감.' },
                { name: '파워 (Power)', score: 8, description: '아직 피지컬이 완성되지 않아 파워는 평범.' },
                { name: '체력 (Stamina)', score: 7.5, description: '5세트 경기에서 체력 저하가 눈에 띔.' }
            ],
            growthStory: `
                <p>미국 플로리다에서 자랐습니다. 원래 아이스하키를 했으나 9세 때 아버지와 함께 US 오픈을 관람한 후 테니스로 전향했습니다.</p>
                <p>2021년 파르마 오픈에서 첫 우승을 차지했고, 2023 호주 오픈에서 8강에 오르며 메이저 경쟁력을 입증했습니다. 안드레 애거시의 지도를 받으며 계속 성장하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 3라운드 vs 다닐 메드베데프',
                date: '2023. 01. 20',
                description: '전년도 준우승자이자 우승 후보 메드베데프를 3-0 셧아웃으로 잡아낸 이변의 경기. 완벽한 경기력으로 팬들에게 자신의 이름을 확실하게 각인시켰습니다.'
            },
            recentForm: `
                <p><strong>"꾸준한 상승세"</strong></p>
                <p>손목 부상에서 회복한 후 다시 랭킹을 끌어올리고 있습니다. 2024년 윔블던 등 잔디 시즌에서도 좋은 모습을 보여주며 올라운더로서의 면모를 과시했습니다.</p>
            `
        }
    },
    'iga-swiatek': {
        name: '이가 시비옹테크', nameEn: 'Iga Swiatek', country: 'Poland', countryFlag: '🇵🇱', image: '/images/players/iga-swiatek.png', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폴란드 최초의 그랜드슬램 단식 우승자이자 현 여자 테니스 세계 랭킹 1위. "흙신" 라파엘 나달을 연상시키는 강력한 탑스핀 포핸드와 압도적인 활동량으로 클레이 코트에서 절대적인 강세를 보입니다. 37연승이라는 21세기 최다 연승 기록을 보유하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '나달의 후계자라 불리는 "클레이 여제", 압도적인 포핸드와 멘탈로 투어를 지배하다.',
            whyNotable: `
                <p><strong>"21세기 여자 테니스의 새로운 지배자"</strong></p>
                <p>이가 시비옹테크는 단순한 랭킹 1위가 아닙니다. 그녀는 세레나 윌리엄스, 애슐리 바티 은퇴 이후 춘추전국시대였던 여자 테니스를 평정하고 독주 체제를 구축했습니다. 특히 <strong>2022년 37연승</strong> 기록은 21세기 최장 연승 기록으로, 그녀의 압도적인 기량을 증명합니다.</p>
                <p>무엇보다 클레이 코트에서의 그녀는 '난공불락'입니다. 롤랑가로스(프랑스 오픈)에서 보여주는 퍼포먼스는 라파엘 나달의 전성기를 떠올리게 하며, 실제로 나달을 우상으로 삼아 비슷한 스타일의 헤비 탑스핀을 구사합니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner) + 헤비 탑스핀"</strong></p>
                <p>시비옹테크의 가장 큰 무기는 <strong>남자 선수들에 버금가는 RPM(회전수)의 포핸드</strong>입니다. 그녀의 포핸드는 높게 튀어 오르며 상대를 베이스라인 뒤로 밀어냅니다. 여기에 투어 최고 수준의 풋워크가 더해져, 수비 상황에서도 순식간에 공격으로 전환하는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 평균 3000 RPM 이상의 탑스핀을 생성하며, 이는 WTA 평균을 훨씬 웃도는 수치입니다.</li>
                    <li><strong>리턴:</strong> 상대의 세컨드 서브를 무자비하게 공략하여 브레이크를 만들어냅니다.</li>
                    <li><strong>멘탈:</strong> 스포츠 심리학자와 동행하며 멘탈을 관리할 정도로 심리적인 부분에 집중하며, 경기 중 흔들리지 않는 평정심을 유지합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 10, description: 'WTA 최고 수준의 탑스핀과 파워.' },
                { name: '백핸드 (Backhand)', score: 9, description: '직선과 대각선 모두 정교하게 찌르는 안정적인 무기.' },
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버리지가 뛰어나며 슬라이딩 능력이 발군.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '중요한 포인트에서 더 강해지는 강심장.' },
                { name: '서브 (Serve)', score: 7.5, description: '유일한 약점으로 꼽히지만, 킥 서브를 활용해 보완 중.' },
                { name: '전술 (Tactics)', score: 9, description: '상대의 약점을 파고드는 지능적인 플레이.' }
            ],
            growthStory: `
                <p>폴란드 바르샤바 출신인 그녀는 조정 선수였던 아버지의 영향으로 운동을 시작했습니다. 주니어 시절부터 두각을 나타내며 2018년 윔블던 주니어 단식 우승을 차지했습니다.</p>
                <p>세계 무대에 이름을 알린 것은 <strong>2020년 프랑스 오픈</strong>이었습니다. 당시 시드조차 받지 못한 19세의 나이로 출전해, 단 한 세트도 내주지 않는 '무실세트 우승'이라는 기적을 썼습니다. 이는 1992년 모니카 셀레스 이후 최연소 챔피언 기록이자, 폴란드 테니스 역사상 최초의 그랜드슬램 단식 우승이었습니다.</p>
            `,
            signatureMatch: {
                title: '2020 프랑스 오픈 결승 vs 소피아 케닌',
                date: '2020. 10. 10',
                description: '그녀의 전설이 시작된 경기. 호주 오픈 우승자였던 케닌을 상대로 6-4, 6-1 완승을 거두며 세계 테니스계에 충격을 안겼습니다. 이 경기에서 보여준 공격적인 위너와 드롭샷은 그녀의 트레이드마크가 되었습니다.'
            },
            recentForm: `
                <p><strong>"여왕의 독주"</strong></p>
                <p>2024년에도 그녀는 여전히 강력합니다. 시즌 초반부터 꾸준히 우승 트로피를 수집하고 있으며, 특히 클레이 시즌이 다가올수록 그녀의 경기력은 정점에 달합니다. 서브에서의 기복만 줄인다면 당분간 그녀의 독주를 막기는 어려워 보입니다.</p>
            `
        }
    },
    'aryna-sabalenka': {
        name: '아리나 사발렌카', nameEn: 'Aryna Sabalenka', country: 'Belarus', countryFlag: '🇧🇾', image: '/images/players/aryna-sabalenka.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 파워 테니스의 대명사. 폭발적인 서브와 포핸드로 공격적인 플레이를 구사하며 하드 코트 그랜드슬램에서 눈부신 성과를 거두었습니다.',
        detailedProfile: {
            oneLineSummary: '코트 위를 지배하는 압도적인 "호랑이", 파워 테니스의 새로운 표준.',
            whyNotable: `
                <p><strong>"여자 테니스 최고의 파워 히터"</strong></p>
                <p>아리나 사발렌카는 현역 여자 선수 중 가장 강력한 그라운드 스트로크 파워를 보유한 선수 중 한 명입니다. 그녀의 포효하는 듯한 기합 소리만큼이나 공의 위력도 압도적이며, 특히 하드 코트에서 그녀를 막을 수 있는 선수는 손에 꼽습니다.</p>
                <p>과거에는 멘탈과 서브 난조(더블 폴트)로 인해 스스로 무너지는 경우가 많았으나, 2023년을 기점으로 이를 완벽하게 극복하고 호주 오픈 2연패를 달성하며 명실상부한 '하드 코트의 여왕'으로 등극했습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner) + 빅 서브"</strong></p>
                <p>사발렌카의 테니스는 '공격, 공격, 또 공격'입니다. 평균 시속 190km에 육박하는 강력한 퍼스트 서브와, 남자 선수와 비교해도 뒤지지 않는 묵직한 포핸드가 그녀의 주무기입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 한때 게임당 10개가 넘는 더블 폴트를 범하며 '입스(Yips)' 위기까지 겪었으나, 폼 교정 후 이제는 투어에서 가장 위협적인 서브를 구사합니다.</li>
                    <li><strong>스트로크:</strong> 플랫하고 낮게 깔리는 샷보다는 상대를 힘으로 밀어내는 묵직한 샷을 구사합니다.</li>
                    <li><strong>멘탈:</strong> 감정 기복이 심했던 과거와 달리, 이제는 경기 중에도 미소를 잃지 않는 여유와 침착함을 보여줍니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: 'WTA 투어 최강의 스트로크 파워.' },
                { name: '서브 (Serve)', score: 9.5, description: '약점에서 강점으로 완벽하게 진화한 무기.' },
                { name: '포핸드 (Forehand)', score: 10, description: '상대를 베이스라인 밖으로 밀어내는 압도적인 힘.' },
                { name: '멘탈 (Mental)', score: 9, description: '약점을 극복하고 메이저 우승을 일궈낸 집념.' },
                { name: '스피드 (Speed)', score: 8.5, description: '큰 키에 비해 준수한 코트 커버 능력.' },
                { name: '네트 플레이 (Net Play)', score: 8, description: '복식 경험을 바탕으로 한 준수한 발리 능력.' }
            ],
            growthStory: `
                <p>벨라루스 민스크 출신의 사발렌카는 공격적인 스타일로 일찍부터 주목받았으나, 불안정한 제구력이 발목을 잡았습니다. 특히 2022년에는 서브 입스(Yips)로 인해 극심한 슬럼프를 겪었습다.</p>
                <p>그러나 그녀는 생체 역학 전문가와 멘탈 코치의 도움을 받아 서브 폼을 완전히 뜯어고쳤고, 이는 그녀의 커리어를 뒤바꾼 신의 한 수가 되었습니다. 단점을 극복하고 세계 1위까지 올랐던 그녀의 스토리는 '극복의 아이콘'으로 불리기에 충분합니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 결승 vs 정친원',
                date: '2024. 01. 27',
                description: '대회 내내 단 한 세트도 내주지 않는 완벽한 경기력으로 우승을 차지했습니다. 결승전에서도 압도적인 파워로 상대를 제압하며 호주 오픈 2연패를 달성, 하드 코트 여제로서의 위상을 공고히 했습니다.'
            },
            recentForm: `
                <p><strong>"파죽지세"</strong></p>
                <p>호주 오픈 우승 이후에도 꾸준히 상위권 성적을 유지하고 있습니다. 이가 시비옹테크, 엘레나 리바키나와 함께 'WTA 빅3'를 구축하며 매 대회 강력한 우승 후보로 거론됩니다.</p>
            `
        }
    },
    'coco-gauff': {
        name: '코코 가우프', nameEn: 'Coco Gauff', country: 'United States', countryFlag: '🇺🇸', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '미국의 천재 테니스 소녀에서 슈퍼스타로. 10대 시절부터 세계적인 주목을 받았으며, 놀라운 운동신경과 강력한 백핸드를 보유하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '10대 천재 소녀에서 미국의 아이콘으로. 폭발적인 운동신경으로 코트를 지배하는 슈퍼스타.',
            whyNotable: `
                <p><strong>"세레나 윌리엄스의 뒤를 잇는 미국의 희망"</strong></p>
                <p>코코 가우프는 2019년, 불과 15세의 나이로 윔블던 본선에 진출해 비너스 윌리엄스를 꺾으며 전 세계적인 신드롬을 일으켰습니다. 그 후 끊임없는 성장 끝에 2023 US 오픈에서 생애 첫 그랜드슬램 우승을 차지하며, 단순한 유망주가 아닌 진정한 챔피언임을 증명했습니다.</p>
                <p>경기력뿐만 아니라 사회 문제에 적극적으로 목소리를 내는 성숙한 태도로, 코트 밖에서도 많은 사람들의 롤모델이 되고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"올코트 플레이어 + 압도적인 스피드"</strong></p>
                <p>가우프의 가장 큰 무기는 육상 선수를 능가하는 **폭발적인 스피드**입니다. 어떤 공이든 쫓아가 받아내는 수비력은 상대의 실수를 유발합니다. 복식 세계 랭킹 1위 경험이 말해주듯, 네트 플레이에도 매우 능합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 투어 전체를 통틀어 가장 강력하고 안정적인 백핸드를 가지고 있습니다. 위기 상황에서 믿고 치는 주무기입니다.</li>
                    <li><strong>서브:</strong> 최고 시속 200km가 넘는 강서브를 가지고 있지만, 가끔 더블 폴트로 흔들리는 점은 개선되고 있습니다.</li>
                    <li><strong>포핸드:</strong> 과거 약점으로 지적받았으나, 탑스핀을 많이 거는 스타일로 안정감을 높였습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '타의 추종을 불허하는 코트 커버 능력.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 모두 완벽한 월드클래스 백핸드.' },
                { name: '네트 플레이 (Net)', score: 9, description: '복식 세계 1위 출신다운 감각적인 발리.' },
                { name: '서브 (Serve)', score: 9, description: '파워는 최상급, 정확도는 발전 중.' },
                { name: '포핸드 (Forehand)', score: 8, description: '안정성은 좋아졌으나 결정력은 백핸드에 비해 낮음.' },
                { name: '멘탈 (Mental)', score: 9, description: '어린 나이가 믿기지 않는 침착함과 투지.' }
            ],
            growthStory: `
                <p>운동선수 출신 부모님의 DNA를 물려받은 가우프는 7세 때부터 테니스를 시작했습니다. 프랑스 무라토글루 아카데미에서 훈련하며 재능을 꽃피웠고, 주니어 시절부터 '차세대 여제'로 지목받았습니다.</p>
                <p>너무 어린 나이에 받은 스포트라이트가 부담이 될 법도 했지만, 그녀는 착실하게 단계를 밟아 성장했습니다. 브래드 길버트 코치를 영입한 후 더욱 공격적인 테니스를 장착하며 마침내 메이저 퀸의 자리에 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 결승 vs 아리나 사발렌카',
                date: '2023. 09. 10',
                description: '홈 관중들의 열광적인 응원을 등에 업고, 강력한 파워의 사발렌카를 상대로 짜릿한 2-1 역전승을 거뒀습니다. 그녀의 엄청난 수비력이 빛을 발한 경기이자, 미국의 새로운 테니스 아이콘 탄생을 알린 역사적인 순간입니다.'
            },
            recentForm: `
                <p><strong>"진화는 계속된다"</strong></p>
                <p>US 오픈 우승 이후에도 꾸준히 4강 이상의 성적을 내고 있습니다. 특히 서브 메커니즘을 수정하며 약점을 지워나가고 있어, 앞으로 얼마나 더 성장할지 기대되는 선수입니다.</p>
            `
        }
    },
    'elena-rybakina': {
        name: '엘레나 리바키나', nameEn: 'Elena Rybakina', country: 'Kazakhstan', countryFlag: '🇰🇿', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '차가운 평정심을 가진 "아이스 퀸". 강력하고 정교한 서브와 플랫한 스트로크로 윔블던 우승을 차지한 강타자입니다.',
        detailedProfile: {
            oneLineSummary: '얼음장처럼 차갑지만 불같이 뜨거운 샷, 윔블던을 정복한 "아이스 퀸".',
            whyNotable: `
                <p><strong>"무표정의 암살자"</strong></p>
                <p>엘레나 리바키나는 2022년 윔블던에서 우승하며 카자흐스탄 역사상 최초의 그랜드슬램 단식 챔피언이 되었습니다. 경기 중 어떤 상황에서도 표정 변화가 거의 없어 '아이스 퀸(Ice Queen)'이라는 별명을 가지고 있습니다.</p>
                <p>184cm의 큰 키에서 내리꽂는 서브와 군더더기 없는 깔끔한 스트로크는 '교과서적'이라는 평가를 받으며, 현재 여자 테니스계에서 가장 강력한 '빅3'(시비옹테크, 사발렌카, 리바키나)의 한 축을 담당하고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 (Big Server) + 공격적 베이스라이너"</strong></p>
                <p>리바키나의 테니스는 '간결함'과 '파워'로 요약됩니다. 쓸데없는 동작 없이 간결한 스윙으로 엄청난 파워를 만들어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> WTA 투어 '에이스 퀸'입니다. 단순히 빠르기만 한 것이 아니라 코스 선택이 탁월하여 브레이크가 매우 어렵습니다.</li>
                    <li><strong>원투 펀치:</strong> 강한 서브 후 3구 공격으로 포인트를 끝내는 패턴이 주무기입니다.</li>
                    <li><strong>멘탈:</strong> 기쁠 때나 슬플 때나 평정심을 유지하는 포커페이스는 상대에게 큰 압박감을 줍니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '현역 여자 선수 중 최고의 서브 능력.' },
                { name: '파워 (Power)', score: 9.5, description: '부드러운 스윙에서 나오는 묵직한 파워.' },
                { name: '멘탈 (Mental)', score: 9, description: '감정을 드러내지 않는 침착함이 강점.' },
                { name: '백핸드 (Backhand)', score: 9, description: '다운더라인 샷이 일품인 안정적인 백핸드.' },
                { name: '스피드 (Speed)', score: 8, description: '큰 키에 비해 준수한 움직임.' },
                { name: '넷 플레이 (Net Play)', score: 8.5, description: '공격적인 발리 능력도 갖추고 있음.' }
            ],
            growthStory: `
                <p>러시아 모스크바에서 태어났지만, 더 나은 지원을 받기 위해 2018년 카자흐스탄으로 국적을 변경했습니다. 이는 그녀의 테니스 인생을 바꾼 결정적인 선택이었습니다.</p>
                <p>카자흐스탄 테니스 연맹의 전폭적인 지원 속에 빠르게 성장한 그녀는, 23세의 나이에 테니스 성지 윔블던을 정복하며 세계 정상급 선수로 도약했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 결승 vs 온스 자베르',
                date: '2022. 07. 09',
                description: '첫 세트를 내주며 불안하게 출발했으나, 이후 특유의 침착함과 강력한 서브로 경기를 지배하며 2-1 역전승을 거뒀습니다. 우승 확정 순간에도 담담한 표정으로 화제가 되었던 그녀의 대표 경기입니다.'
            },
            recentForm: `
                <p><strong>"건강하면 최강"</strong></p>
                <p>잦은 질병과 부상이 발목을 잡을 때가 있지만, 컨디션이 온전할 때는 랭킹 1위 시비옹테크조차 두려워하는 가장 강력한 우승 후보입니다. 2024년에도 브리즈번, 아부다비 등에서 우승하며 건재함을 과시했습니다.</p>
            `
        }
    },
    'jessica-pegula': {
        name: '제시카 페굴라', nameEn: 'Jessica Pegula', country: 'United States', countryFlag: '🇺🇸', image: '/images/players/jessica-pegula.png', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '꾸준함의 대명사. 화려하진 않지만 탄탄한 기본기와 영리한 경기 운영으로 투어 상위권을 꾸준히 유지하는 탑 플레이어입니다. 한국계 어머니를 둔 것으로도 유명합니다.',
        detailedProfile: {
            oneLineSummary: '화려하지 않지만 가장 단단한, 투어에서 가장 신뢰할 수 있는 "꾸준함의 아이콘".',
            whyNotable: `
                <p><strong>"편견을 실력으로 깬 노력파"</strong></p>
                <p>제시카 페굴라는 NFL 버팔로 빌스 구단주의 딸로, 엄청난 재벌가 상속녀라는 배경 때문에 데뷔 초에는 '취미로 테니스 친다'는 편견에 시달렸습니다. 하지만 그녀는 묵묵히 밑바닥 챌린저 투어부터 시작해 세계 랭킹 3위까지 오르며 오직 실력으로 자신을 증명했습니다.</p>
                <p>어머니가 한국계 입양아인 킴 페굴라(Kim Pegula)라 한국 팬들에게는 '하프 코리안'으로도 친숙하며, 실제로 김치와 한국 문화를 사랑하는 모습을 자주 보여줍니다.</p>
            `,
            playStyle: `
                <p><strong>"지능형 카운터 펀처 + 플랫 히터"</strong></p>
                <p>페굴라의 테니스는 '군더더기 없음' 그 자체입니다. 낮고 빠르게 깔리는 플랫성 스트로크로 상대의 시간을 빼앗고, 상대의 힘을 이용하는 카운터 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>안정성:</strong> 그녀의 가장 큰 무기입니다. 에러가 거의 없는 기계적인 스트로크로 상대를 질리게 만듭니다.</li>
                    <li><strong>리턴:</strong> 베이스라인에 바짝 붙어서 라이징 볼을 처리하는 리턴 능력은 투어 최상급입니다.</li>
                    <li><strong>복식:</strong> 고프와 함께 복식 세계 랭킹 1위를 찍을 만큼 네트 플레이와 경기 운영 능력이 뛰어납니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '안정성 (Consistency)', score: 10, description: '에러를 거의 하지 않는 정교함.' },
                { name: '리턴 (Return)', score: 9.5, description: '상대의 서브를 무력화시키는 빠른 박자.' },
                { name: '전술 (Tactics)', score: 9.5, description: '상대의 약점을 파고드는 영리함.' },
                { name: '멘탈 (Mental)', score: 9, description: '재벌가라는 배경을 잊게 만드는 헝그리 정신.' },
                { name: '백핸드 (Backhand)', score: 9, description: '낮게 깔리는 플랫 백핸드가 일품.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워보다는 코스 위주, 다소 평범함.' }
            ],
            growthStory: `
                <p>부유한 환경이었지만 테니스 선수로서의 길은 순탄치 않았습니다. 잦은 고관절과 무릎 부상으로 20대 중반까지 빛을 보지 못했습니다.</p>
                <p>하지만 포기하지 않고 재활에 성공한 뒤, 2021년 호주 오픈 8강 진출을 기점으로 잠재력이 폭발했습니다. 27세라는 늦은 나이에 전성기를 맞이한 '대기만성'의 표본입니다.</p>
            `,
            signatureMatch: {
                title: '2023 몬트리올(캐나다 오픈) 결승 vs 류드밀라 삼소노바',
                date: '2023. 08. 14',
                description: '이전까지 4강에서 자주 미끄러졌던 징크스를 깨고 WTA 1000 시리즈 우승을 차진한 경기. 6-1, 6-0 이라는 압도적인 스코어로 상대를 제압하며 자신의 커리어 하이를 찍었습니다.'
            },
            recentForm: `
                <p><strong>"Top 5의 수문장"</strong></p>
                <p>슬램 우승은 아직 없지만, 마스터스급 대회에서는 꾸준히 결승에 오르며 랭킹 포인트를 쌓고 있습니다. 가장 기복 없는 경기력을 보여주는 선수 중 한 명입니다.</p>
            `
        }
    },
    'ons-jabeur': {
        name: '온스 자베르', nameEn: 'Ons Jabeur', country: 'Tunisia', countryFlag: '🇹🇳', gender: 'female',
        plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 마법사. 예측 불가능한 드롭샷과 창의적인 플레이 스타일로 팬들에게 즐거움을 선사하는 튀니지의 영웅입니다.',
        detailedProfile: {
            oneLineSummary: '아프리카의 자존심이자 코트 위의 마법사, 예측 불가능한 "행복 테니스"의 전도사.',
            whyNotable: `
                <p><strong>"아랍 여성 스포츠의 역사를 새로 쓰는 선구자"</strong></p>
                <p>온스 자베르는 아랍 및 북아프리카 선수 최초로 그랜드슬램 결승(윔블던, US 오픈)에 진출한 살아있는 역사입니다. 그녀의 성공은 단순한 개인의 성취를 넘어, 아랍권 여성들에게 "우리도 할 수 있다"는 희망의 메시지가 되었습니다.</p>
                <p>팬들에게 항상 웃음을 잃지 않는 유쾌한 성격으로 '행복부 장관(Minister of Happiness)'이라는 별명을 가지고 있으며, 투어에서 가장 사랑받는 선수 중 한 명입니다.</p>
            `,
            playStyle: `
                <p><strong>"창의적 올라운더 (Creative All-Rounder)"</strong></p>
                <p>자베르의 테니스는 '보는 맛'이 있습니다. 기계적인 랠리 대신, 끊임없이 구질을 변화시키고 허를 찌르는 드롭샷으로 상대를 흔들어 놓습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 타의 추종을 불허하는 드롭샷 장인입니다. 베이스라인 깊숙이 공을 보내다 예고 없이 툭 떨어뜨리는 샷은 알고도 당할 수밖에 없습니다.</li>
                    <li><strong>슬라이스:</strong> 포핸드, 백핸드 가리지 않고 자유자재로 슬라이스를 구사해 상대의 리듬을 완전히 뺏습니다.</li>
                    <li><strong>변칙:</strong> 정석적인 플레이보다는 본능적이고 감각적인 샷을 즐겨, '코트 위의 마법사'로 불립니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '상상할 수 없는 샷을 현실로 만드는 능력.' },
                { name: '드롭샷 (Drop Shot)', score: 10, description: '투어 최고의 터치 감각.' },
                { name: '포핸드 (Forehand)', score: 9, description: '파워보다는 각도와 코스가 일품.' },
                { name: '서브 (Serve)', score: 8.5, description: '키에 비해 꽤 강력하고 다양한 서브.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 경기 결승에서 부담감을 느끼는 편.' },
                { name: '체력 (Stamina)', score: 8, description: '긴 랠리보다는 빠른 승부를 선호.' }
            ],
            growthStory: `
                <p>튀니지의 작은 마을에서 3세 때 테니스를 시작했습니다. 열악한 인프라 속에서도 꿈을 키운 그녀는, 주니어 시절 프랑스 오픈 우승을 차지하며 재능을 알렸습니다.</p>
                <p>프로 초반에는 스폰서가 없어 힘든 시기를 겪었지만, 포기하지 않고 랭킹을 끌어올려 탑 텐에 진입했습니다. 이제는 튀니지의 국민 영웅이자 전 세계 테니스 팬들의 사랑을 받는 스타가 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 4강 vs 타티아나 마리아',
                date: '2022. 07. 07',
                description: '아랍/아프리카 선수 최초의 그랜드슬램 결승 진출을 확정 지은 역사적인 경기. 절친한 친구인 마리아와의 대결에서 승리한 후, 네트 앞에서 긴 포옹을 나누는 장면은 윔블던 역사상 가장 아름다운 스포츠맨십으로 기억됩니다.'
            },
            recentForm: `
                <p><strong>"마지막 퍼즐, 슬램 우승"</strong></p>
                <p>메이저 대회 준우승만 3번(윔블던 2회, US 오픈 1회)을 기록하며 우승 문턱에서 아쉬움을 삼켰습니다. 무릎 부상으로 잠시 주춤했지만, 여전히 클레이와 잔디 코트에서 가장 위협적인 선수입니다.</p>
            `
        }
    },
    'qinwen-zheng': {
        name: '정 친원', nameEn: 'Qinwen Zheng', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국의 새로운 에이스 "Queen Wen". 2024 호주 오픈 준우승자이자 2024 파리 올림픽 금메달리스트로, 리나의 뒤를 이어 아시아 테니스를 이끌어갈 강력한 서브와 포핸드의 소유자입니다.',
        detailedProfile: {
            oneLineSummary: '아시아 최초 올림픽 단식 금메달리스트, 대륙의 기상을 품은 "Queen Wen".',
            whyNotable: `
                <p><strong>"아시아 테니스의 새 역사를 쓴 금메달리스트"</strong></p>
                <p>정 친원은 2024 파리 올림픽에서 아시아 선수 최초로 테니스 단식 금메달을 획득하며 전설 리나(Li Na)를 넘어섰습니다. 'Queen Wen'이라는 별명처럼 코트 위에서 당당하고 카리스마 넘치는 모습을 보여주며, 중국을 넘어 전 세계적인 스타로 발돋움했습니다.</p>
                <p>2024 호주 오픈 준우승까지 차지하며 메이저 대회 경쟁력도 입증했습니다.</p>
            `,
            playStyle: `
                <p><strong>"파워풀한 공격형 베이스라이너"</strong></p>
                <p>강력한 신체 조건에서 나오는 파워가 압도적입니다. 서브와 포핸드 모두 남자 선수 못지않은 스피드와 회전을 보여줍니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> WTA 투어에서 에이스 1, 2위를 다툴 만큼 강력합니다. 첫 서브가 터지는 날에는 게임을 쉽게 풀어갑니다.</li>
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 걸린 포핸드는 바운드 후 높게 튀어 올라 상대를 괴롭힙니다.</li>
                    <li><strong>멘탈:</strong> 올림픽 4강에서 세계 1위 시비옹테크를 꺾었을 때 보여준 집중력과 투지는 그녀가 큰 경기에 강한 '강심장'임을 증명했습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9.5, description: '투어 최정상급 에이스 생산 능력.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '묵직하고 파괴력 있는 탑스핀 포핸드.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '중요한 순간에 흔들리지 않는 대담함.' },
                { name: '체력 (Stamina)', score: 9, description: '3세트 접전에도 지치지 않는 체력.' },
                { name: '스피드 (Speed)', score: 8.5, description: '큰 키에 비해 준수한 기동력.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이며 포핸드를 잘 받쳐줌.' }
            ],
            growthStory: `
                <p>중국 후베이성 출신으로 7세 때 테니스를 시작했습니다. 리나의 경기를 보고 테니스 선수의 꿈을 키웠으며, 리나의 전 코치였던 카를로스 로드리게스의 지도를 받기도 했습니다.</p>
                <p>스페인 바르셀로나로 유학을 떠나 기량을 갈고닦았으며, 2022년 WTA 신인상을 수상하며 혜성처럼 등장했습니다. 이후 매년 급성장하여 이제는 그랜드슬램 우승 후보 0순위로 꼽힙니다.</p>
            `,
            signatureMatch: {
                title: '2024 파리 올림픽 결승 vs 도나 베키치',
                date: '2024. 08. 03',
                description: '아시아 테니스 역사상 최고의 순간. 결승전 중압감을 이겨내고 2-0 완승을 거두며 시상대 가장 높은 곳에 섰습니다. 중국 전역을 열광의 도가니로 빠뜨린 역사적인 경기입니다.'
            },
            recentForm: `
                <p><strong>"세계 최정상급 레벨"</strong></p>
                <p>올림픽 금메달 이후 자신감이 절정에 달했습니다. 서브와 스트로크의 완성도가 더욱 높아졌으며, 이제는 어떤 상대를 만나도 주눅 들지 않고 자신의 플레이를 펼칩니다.</p>
            `
        }
    },
    'marketa-vondrousova': {
        name: '마르케타 본드로우소바', nameEn: 'Marketa Vondrousova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '2023 윔블던 챔피언. 왼손잡이 특유의 각도 깊은 서브와 정교한 드롭샷, 그리고 창의적인 플레이로 상대를 무너뜨리는 테크니션입니다.',
        detailedProfile: {
            oneLineSummary: '언시드(Unseeded)의 기적을 쓴 윔블던 챔피언, 상대의 타이밍을 뺏는 "왼손 마법사".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "역사를 쓴 언시드 챔피언"</div>
                    <p>2023년 윔블던에서 시드 배정을 받지 못한 선수 최초로 여자 단식 우승을 차지하는 기염을 토했습니다. 손목 수술로 인해 랭킹이 떨어졌던 그녀는, 아무도 예상하지 못한 순간에 가장 화려하게 부활했습니다.</p>
                </div>
                <p>온몸을 뒤덮은 타투와 쿨한 성격으로도 유명하며, 힘으로만 승부하는 현대 테니스에서 '감각'과 '터치'로도 정상에 설 수 있음을 증명했습니다.</p>
            `,
            playStyle: `
                <p><strong>"교활한 왼손잡이 (Crafty Lefty)"</strong></p>
                <p>상대가 가장 싫어하는 스타일입니다. 강타보다는 루프가 큰 탑스핀, 낮은 슬라이스, 그리고 기습적인 드롭샷을 섞어 상대를 혼란에 빠뜨립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 마르케타의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>드롭샷:</strong> 투어 최고 수준입니다. 예비 동작 없이 툭 떨어뜨리는 드롭샷은 알고도 당합니다.</li>
                        <li><strong>왼손 서브:</strong> 코트 밖으로 많이 휘어져 나가는 슬라이스 서브는 리턴하기 매우 까다롭습니다.</li>
                        <li><strong>움직임:</strong> 예측력이 좋아 코트 커버 범위가 넓고, 수비 후 역습에 능합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '터치 (Touch)', score: 10, description: '손목 감각은 타고남.' },
                { name: '창의성 (Creativity)', score: 9.5, description: '정형화되지 않은 플레이.' },
                { name: '수비 (Defense)', score: 9, description: '끈질기게 받아넘김.' },
                { name: '서브 (Serve)', score: 8.5, description: '다양한 구질로 승부.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '결승전에서 보여준 침착함.' },
                { name: '파워 (Power)', score: 6.5, description: '파워 히터는 아님.' }
            ],
            growthStory: `
                <p>체코 소콜로프 출신입니다. 주니어 시절 세계 1위를 기록할 만큼 재능은 확실했습니다. 2019년 19세의 나이로 프랑스 오픈 준우승을 차지하며 주목받았지만, 이후 잦은 손목 부상으로 투어를 떠나 있어야 했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 결승 vs 온스 자베르',
                date: '2023. 07. 15',
                description: '모두가 자베르의 우승을 예상했지만, 본드로우소바는 냉정하고 침착했습니다. 자베르의 범실을 유도하고 결정적인 순간 드롭샷과 로브로 포인트를 따내며 2-0 완승을 거뒀습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "타투 매니아"</div>
                    <p>팔과 다리에 의미 있는 타투를 많이 새겼습니다. "타투는 나 자신을 표현하는 예술"이라고 말하며, 그녀의 자유분방한 플레이 스타일과도 잘 어울립니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 10 안착"</strong></p>
                <p>윔블던 우승 이후 꾸준히 상위권을 유지하고 있습니다. 다만 그랜드슬램 우승자로서의 부담감을 이겨내고 꾸준함을 증명하는 것이 과제입니다.</p>
            `,
            faq: [
                {
                    question: '왜 타투를 많이 하나요?',
                    answer: '16살 때부터 타투를 시작했고, 중요한 순간이나 기억하고 싶은 것들을 몸에 새긴다고 합니다. "No Rain, No Flowers"라는 문구가 유명합니다.'
                },
                {
                    question: '남편도 테니스 선수인가요?',
                    answer: '아니요, 남편 스테판 시메크는 IT 전문가입니다. 2022년 결혼했고, 본드로우소바가 부상으로 쉴 때 큰 힘이 되어주었다고 합니다.'
                },
                {
                    question: '왜 고양이 집사로 유명한가요?',
                    answer: '고양이 "Frankie"를 키우는데, 윔블던 기간 동안 고양이 돌보미를 고용해야 했다고 인터뷰에서 밝혀 화제가 되었습니다.'
                }
            ]
        }
    },
    'maria-sakkari': {
        name: '마리아 사카리', nameEn: 'Maria Sakkari', country: 'Greece', countryFlag: '🇬🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '그리스의 스파르탄. 투어 최고 수준의 근육질 몸매에서 나오는 파워풀한 테니스와 쉽게 포기하지 않는 강인한 멘탈이 트레이드마크입니다.',
        detailedProfile: {
            oneLineSummary: '그리스 신화 속 전사 같은 피지컬, 지칠 줄 모르는 "스파르탄 우먼".',
            whyNotable: `
                <p><strong>"가장 강력한 피지컬을 가진 선수"</strong></p>
                <p>마리아 사카리는 WTA 투어에서 가장 뛰어난 체력을 가진 선수 중 한 명으로 꼽힙니다. '스파르탄(Spartan)'이라는 별명답게 근육질의 탄탄한 몸매와 지치지 않는 활동량으로 코트를 누빕니다. 치치파스와 함께 그리스 테니스의 황금기를 이끄는 국가대표 아이콘입니다.</p>
                <p>넷플릭스 '브레이크 포인트'에서도 비중 있게 다뤄질 만큼 스타성을 인정받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>사카리의 테니스는 '힘'과 '활동량'으로 정의됩니다. 베이스라인 뒤에서 강력한 탑스핀 포핸드로 상대를 밀어붙이고, 어떤 공이든 쫓아가 받아내는 수비력으로 질식시킵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>피지컬:</strong> 크로스핏 선수에 버금가는 근력과 체력으로 3세트 접전에서 더욱 강한 모습을 보입니다.</li>
                    <li><strong>포핸드:</strong> 남성 선수들처럼 무겁고 강하게 감기는 탑스핀 포핸드가 주무기입니다.</li>
                    <li><strong>서브:</strong> 키는 크지 않지만(172cm), 뛰어난 근력에서 나오는 킥 서브가 위력적입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '피지컬 (Physicality)', score: 10, description: 'WTA 최고의 근력과 체력.' },
                { name: '파워 (Power)', score: 9, description: '밀리지 않는 묵직한 스트로크.' },
                { name: '스피드 (Speed)', score: 9, description: '코트 커버리지가 매우 넓음.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '준결승 등 큰 무대 징크스가 있음.' },
                { name: '서브 (Serve)', score: 8, description: '킥 서브 활용도가 좋음.' },
                { name: '네트 플레이 (Net)', score: 7.5, description: '빈도가 높지 않지만 준수함.' }
            ],
            growthStory: `
                <p>테니스 선수였던 어머니의 영향으로 테니스를 시작했습니다. 18세에 바르셀로나로 유학을 떠나 체계적인 훈련을 받았으며, 2017년부터 꾸준히 랭킹을 끌어올려 그리스 여자 선수 최초로 Top 10에 진입했습니다.</p>
                <p>수많은 4강 탈락의 아픔을 겪었지만, 2023년 과달라하라 오픈(WTA 1000) 우승으로 그간의 설움을 씻어냈습니다.</p>
            `,
            signatureMatch: {
                title: '2021 프랑스 오픈 16강 vs 소피아 케닌',
                date: '2021. 06. 07',
                description: '전년도 준우승자이자 세계 4위인 케닌을 상대로 압도적인 파워를 뽐내며 2-0 완승을 거뒀습니다. 이 승리로 생애 첫 그랜드슬램 8강을 넘어 4강까지 진출하는 쾌거를 이뤘습니다.'
            },
            recentForm: `
                <p><strong>"Top 10의 터줏대감"</strong></p>
                <p>기복 없는 플레이로 꾸준히 상위권을 유지하고 있습니다. 새로운 코치 데이비드 윗과 함께 공격적인 플레이를 다듬으며 다시 한번 메이저 우승에 도전하고 있습니다.</p>
            `
        }
    },
    'jelena-ostapenko': {
        name: '옐레나 오스타펜코', nameEn: 'Jelena Ostapenko', country: 'Latvia', countryFlag: '🇱🇻', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 폭주기관차. 모든 공을 위너로 만들겠다는 듯한 공격적인 풀스윙 샷을 구사하며, 컨디션이 좋은 날에는 누구도 막을 수 없는 파괴력을 보여줍니다. 2017 롤랑가로스 챔피언.',
        detailedProfile: {
            oneLineSummary: '모 아니면 도, 들어가는 날은 아무도 막을 수 없는 "코트 위의 폭주기관차".',
            whyNotable: `
                <p><strong>"가장 예측 불가능한 선수"</strong></p>
                <p>옐레나 오스타펜코는 투어에서 가장 화끈한 공격 테니스를 구사합니다. 2017년 롤랑가로스에서 시드도 받지 못한 20세의 나이로 우승하며 세계를 놀라게 했습니다. 실수가 쏟아지다가도, 긁히는 날에는 세계 1위도 압도적인 스코어로 이겨버리는 도깨비 같은 매력의 소유자입니다.</p>
                <p>솔직하고 거침없는 성격과 화려한 패션으로도 많은 화제(와 논란)를 몰고 다닙니다.</p>
            `,
            playStyle: `
                <p><strong>"극단적인 공격형 (High Risk High Reward)"</strong></p>
                <p>수비는 생각하지 않습니다. 리턴부터 위너를 노리고 풀스윙을 날립니다. 볼 스도가 남자 선수들 평균보다 빠를 때도 있을 정도로 강력합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스트로크:</strong> 포핸드, 백핸드 모두 플랫하게 때리며, 라인 근처를 집요하게 노립니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브가 약하면 지체 없이 위너성 리턴을 날립니다.</li>
                    <li><strong>기복:</strong> 컨디션에 따라 위너 50개, 에러 50개를 기록하기도 하는 극단적인 경기를 보여줍니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '남자 선수에 버금가는 샷 스피드.' },
                { name: '공격성 (Aggression)', score: 10, description: '무조건 공격 앞으로.' },
                { name: '서브 (Serve)', score: 7, description: '더블 폴트가 잦음.' },
                { name: '안정성 (Consistency)', score: 4, description: '극심한 기복이 약점.' },
                { name: '멘탈 (Mental)', score: 6, description: '감정 기복이 심함.' },
                { name: '수비 (Defense)', score: 5, description: '수비보다는 공격으로 해결하려 함.' }
            ],
            growthStory: `
                <p>라트비아 리가 출신으로, 어머니의 지도로 5세 때 테니스를 시작했습니다. 어릴 때 볼룸 댄스를 배운 덕분에 풋워크가 의외로 좋습니다.</p>
                <p>2017년 프랑스 오픈 깜짝 우승으로 스타덤에 올랐습니다. 이후 기복 논란에 시달렸지만, 복식에서도 그랜드슬램 타이틀을 따내며 다재다능함을 증명했습니다.</p>
            `,
            signatureMatch: {
                title: '2017 프랑스 오픈 결승 vs 시모나 할렙',
                date: '2017. 06. 10',
                description: '그녀의 인생을 바꿀 경기. 당시 최강의 수비력을 자랑하던 할렙을 상대로, 무려 54개의 위너(할렙 8개)를 쏟아부으며 2-1 역전승을 거뒀습니다. "공격이 최선의 수비"임을 증명한 명승부였습니다.'
            },
            recentForm: `
                <p><strong>"여전한 파괴력"</strong></p>
                <p>2024년 초반 2개 대회에서 우승하며 부활을 알렸습니다. 여전히 기복은 있지만, 긁히는 날의 오스타펜코는 투어에서 가장 두려운 존재입니다.</p>
            `
        }
    },
    'naomi-osaka': {
        name: '나오미 오사카', nameEn: 'Naomi Osaka', country: 'Japan', countryFlag: '🇯🇵', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '4번의 그랜드슬램 우승에 빛나는 하드 코트의 여왕. 압도적인 서브와 포핸드 파워를 갖췄으며, 코트 밖에서는 사회적 목소리를 내는 영향력 있는 아이콘입니다.',
        detailedProfile: {
            oneLineSummary: '아시아 최초 세계 랭킹 1위, 4번의 그랜드슬램을 정복한 "하드 코트의 여왕".',
            whyNotable: `
                <p><strong>"테니스의 아이콘이자 시대의 아이콘"</strong></p>
                <p>나오미 오사카는 단순히 테니스를 잘 치는 선수를 넘어섰습니다. 남녀 통틀어 아시아 국적 선수 최초로 세계 랭킹 1위에 올랐으며, 4번의 메이저 타이틀(US 오픈 2회, 호주 오픈 2회)을 따내며 하드 코트를 지배했습니다.</p>
                <p>또한 블라임 라이브스 매터(BLM) 운동 지지, 멘탈 헬스 이슈 공론화 등 코트 밖에서도 사회적 영향력을 행사하는 글로벌 아이콘입니다.</p>
            `,
            playStyle: `
                <p><strong>"파워 베이스라이너 (Power Baseliner)"</strong></p>
                <p>세레나 윌리엄스를 연상케 하는 압도적인 파워 테니스를 구사합니다. 특히 서브와 3구 공격으로 포인트를 끝내는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 선수 중 최고 수준의 서브 스피드(시속 200km 육박)를 자랑하며, 위기 상황에서 에이스로 탈출하는 능력이 뛰어납니다.</li>
                    <li><strong>포핸드:</strong> 타점이 빠르고 묵직한 포핸드 위너는 그녀의 전매특허입니다.</li>
                    <li><strong>집중력:</strong> 빅 포인트에서의 집중력이 매우 좋아, 브레이크 위기 관리 능력이 탁월합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '투어 최정상급 스트로크 파워.' },
                { name: '서브 (Serve)', score: 9.5, description: '중요한 순간에 터지는 강서브.' },
                { name: '멘탈 (Mental)', score: 8, description: '큰 경기에 강하지만, 최근 멘탈 이슈 겪음.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '경기를 끝낼 수 있는 결정구.' },
                { name: '수비 (Defense)', score: 7.5, description: '공격에 비해 수비 커버리지는 평범.' },
                { name: '클레이/잔디 (Surface)', score: 6, description: '하드 코트 외에서는 성적이 저조함.' }
            ],
            growthStory: `
                <p>아이티 출신 아버지와 일본인 어머니 사이에서 태어났습니다. 3세 때 미국으로 이주해 테니스를 시작했습니다.</p>
                <p>2018년 인디언 웰스 우승으로 두각을 나타내더니, 같은 해 US 오픈에서 세레나 윌리엄스를 꺾고 우승하며 여제의 탄생을 알렸습니다. 이후 단기간에 4개의 메이저 타이틀을 휩쓸었습니다.</p>
            `,
            signatureMatch: {
                title: '2018 US 오픈 결승 vs 세레나 윌리엄스',
                date: '2018. 09. 08',
                description: '테니스 역사상 가장 드라마틱하고 논란이 많았던 결승전. 심판 판정 항의로 분위기가 뒤숭숭한 상황에서도, 20세의 오사카는 흔들리지 않고 자신의 우상인 세레나를 2-0으로 완파하며 생애 첫 메이저 우승을 차지했습니다.'
            },
            recentForm: `
                <p><strong>"엄마가 되어 돌아온 챔피언"</strong></p>
                <p>출산 후 2024년 복귀했습니다. 예전의 압도적인 기량은 아직 돌아오지 않았지만, 2024 프랑스 오픈에서 시비옹테크를 매치 포인트까지 몰아붙이는 등 클래스는 살아있음을 증명했습니다.</p>
            `
        }
    },
    'caroline-wozniacki': {
        name: '캐롤라인 보즈니아키', nameEn: 'Caroline Wozniacki', country: 'Denmark', countryFlag: '🇩🇰', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '덴마크의 철벽. 은퇴 후 두 아이의 엄마가 되어 복귀한 "슈퍼맘"으로, 전성기 시절의 견고한 수비력과 경기 운영 능력을 여전히 과시하고 있습니다.',
        detailedProfile: {
            oneLineSummary: '돌아온 "덴마크의 벽", 두 아이의 엄마가 되어 다시 코트에 선 그랜드슬램 챔피언.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧱 "뚫리지 않는 방패"</div>
                    <p>전성기 시절 '월 (The Wall)'이라고 불릴 정도로 완벽한 수비력을 자랑했습니다. 상대가 지쳐서 실수를 할 때까지 공을 넘기는 끈기는 타의 추종을 불허합니다. 2018년 호주 오픈에서 생애 첫 그랜드슬램 우승을 차지하며 '무관의 제왕'이라는 꼬리표를 뗐습니다.</p>
                </div>
                <p>2020년 류마티스 관절염과 가족 계획으로 은퇴했으나, 2023년 두 아이의 엄마가 되어 전격 복귀했습니다. "엄마도 할 수 있다"는 것을 보여주는 위대한 도전 중입니다.</p>
            `,
            playStyle: `
                <p><strong>"디펜시브 베이스라이너 (Defensive Baseliner)"</strong></p>
                <p>화려한 위너보다는 에러 없는 플레이를 추구합니다. 코트 구석구석을 찌르는 백핸드와 마라톤 선수급의 체력이 강점입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇩🇰 보즈니아키의 3가지 "철벽"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 투어에서 가장 안정적이고 정확한 백핸드를 가졌습니다. 다운더라인 공격은 그녀의 주 득점원입니다.</li>
                        <li><strong>체력:</strong> 3시간이 넘는 경기에서도 지치지 않고 뛰어다닙니다.</li>
                        <li><strong>카운터:</strong> 수비하다가 상대의 힘을 이용해 역습하는 능력이 뛰어납니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 10, description: '전성기 시절은 통곡의 벽.' },
                { name: '체력 (Stamina)', score: 10, description: '마라톤 완주 경험도 있음.' },
                { name: '안정성 (Consistency)', score: 10, description: '에러를 거의 하지 않음.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '세계 최고 수준.' },
                { name: '멘탈 (Mental)', score: 9, description: '절대 포기하지 않는 근성.' },
                { name: '파워 (Power)', score: 6.5, description: '스스로 강한 공을 만들지는 못함.' }
            ],
            growthStory: `
                <p>덴마크 오덴세 출신으로, 폴란드 출신 이민자 가정에서 태어났습니다. 아버지 표트르 보즈니아키가 코치를 맡아 그녀를 세계 1위로 키워냈습니다.</p>
            `,
            signatureMatch: {
                title: '2018 호주 오픈 결승 vs 시모나 할렙',
                date: '2018. 01. 27',
                description: '세계 1, 2위의 대결이자 "창과 방패"가 아닌 "방패와 방패"의 대결. 무더위 속에서 3시간 가까운 혈투 끝에 승리하며 눈물의 첫 메이저 우승을 달성했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👩‍👧‍👦 "슈퍼맘"</div>
                    <p>경기장에 두 아이(올리비아, 제임스)와 함께 나타나는 모습은 많은 워킹맘들에게 영감을 줍니다. "아이들에게 엄마가 꿈을 위해 노력하는 모습을 보여주고 싶다"고 말합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클래스는 영원하다"</strong></p>
                <p>복귀 후 2023 US 오픈 16강에 오르는 등 여전한 경쟁력을 과시하고 있습니다. 전성기만큼의 스피드는 아니지만, 노련미로 이를 커버합니다.</p>
            `,
            faq: [
                {
                    question: '왜 은퇴했다가 돌아왔나요?',
                    answer: '2020년 류마티스 관절염 진단과 출산으로 은퇴했지만, 몸 상태가 좋아지고 테니스에 대한 열정이 다시 생겨 복귀를 결심했습니다.'
                },
                {
                    question: '남편은 누구인가요?',
                    answer: '전 NBA 선수 데이비드 리(David Lee)입니다. 골든스테이트 워리어스 우승 멤버로 유명합니다.'
                },
                {
                    question: '절친은 누구인가요?',
                    answer: '세레나 윌리엄스와 매우 친합니다. 라이벌이었지만 코트 밖에서는 자매 같은 사이입니다.'
                }
            ]
        }
    },
    'angelique-kerber': {
        name: '안젤리크 케르버', nameEn: 'Angelique Kerber', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '독일의 레전드. 놀라운 각도의 카운터 샷과 끈질긴 수비로 그랜드슬램 3회 우승을 달성한 왼손잡이 전략가입니다. 파리 올림픽을 끝으로 은퇴를 선언했습니다.',
        detailedProfile: {
            oneLineSummary: '세레나 윌리엄스를 꺾은 왼손잡이 전사, 독일 테니스의 자존심 "엔지".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇩🇪 "독일 테니스의 여제"</div>
                    <p>슈테피 그라프 이후 독일 여자 테니스의 부흥을 이끈 선수입니다. 2016년 호주 오픈과 US 오픈을 우승하고 세계 1위에 올랐으며, 같은 해 리우 올림픽 은메달까지 획득했습니다. 2018년 윔블던에서는 '테니스 여제' 세레나 윌리엄스를 꺾고 우승하며 커리어 그랜드슬램에 프랑스 오픈 하나만을 남겨두었습니다.</p>
                </div>
                <p>2024년 파리 올림픽을 끝으로 현역 은퇴를 선언하며 전설로 남았습니다.</p>
            `,
            playStyle: `
                <p><strong>"최고의 카운터 펀처"</strong></p>
                <p>케르버의 수비는 단순히 공을 넘기는 것이 아닙니다. 상대의 힘을 이용해 더 빠르고 날카로운 각도로 되돌려 보냅니다. 특히 낮은 자세에서 나오는 샷은 일품입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">📐 케르버의 3가지 "각도"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>스쿼트 샷:</strong> 무릎이 땅에 닿을 정도로 낮게 앉아서 치는 샷은 그녀의 시그니처입니다.</li>
                        <li><strong>포핸드 다운더라인:</strong> 수비 상황에서 기습적으로 터지는 왼손 포핸드 역크로스와 다운더라인은 상대의 의표를 찌릅니다.</li>
                        <li><strong>체력:</strong> 코트 구석구석을 누비는 엄청난 활동량으로 상대를 질리게 만듭니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 10, description: '어떤 공이든 받아치며 각도를 만듦.' },
                { name: '카운터 (Counter)', score: 10, description: '수비에서 공격 전환이 세계 최고.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '독일 전차 같은 뚝심.' },
                { name: '체력 (Stamina)', score: 9, description: '지치지 않는 체력.' },
                { name: '포핸드 (Forehand)', score: 9, description: '왼손잡이 특유의 날카로움.' },
                { name: '서브 (Serve)', score: 7, description: '약한 서브가 유일한 단점.' }
            ],
            growthStory: `
                <p>독일 브레멘에서 태어났지만 폴란드 혈통입니다. 슈테피 그라프를 동경하며 자랐고, 늦은 나이에 전성기를 맞이한 대기만성형 스타입니다.</p>
            `,
            signatureMatch: {
                title: '2016 호주 오픈 결승 vs 세레나 윌리엄스',
                date: '2016. 01. 30',
                description: '생애 첫 그랜드슬램 결승에서 당시 무적이었던 세레나를 꺾는 대이변을 연출했습니다. 끈질긴 수비와 과감한 드롭샷으로 세레나를 좌절시켰습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👋 "아름다운 이별"</div>
                    <p>2024 파리 올림픽 8강전에서 정친원과 3시간이 넘는 혈투 끝에 패배하며 은퇴했습니다. 끝까지 포기하지 않는 모습은 팬들에게 깊은 울림을 주었습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"화려한 라스트 댄스"</strong></p>
                <p>출산 후 복귀하여 2024년 유나이티드 컵 우승을 이끌고 올림픽 8강에 오르는 등 마지막까지 정상급 기량을 보여주었습니다.</p>
            `,
            faq: [
                {
                    question: '완전히 은퇴했나요?',
                    answer: '네, 2024 파리 올림픽을 마지막으로 프로 무대에서 은퇴를 선언했습니다. 이제는 엄마로서의 삶과 새로운 도전에 집중할 예정이라고 합니다.'
                },
                {
                    question: '왜 왼손잡이인가요?',
                    answer: '원래는 오른손잡이인데 테니스만 왼손으로 칩니다. 어릴 때 코치의 권유로 바꿨다고 합니다.'
                },
                {
                    question: '폴란드와 관련이 있나요?',
                    answer: '네, 할아버지가 폴란드에 지은 테니스 센터("Angie Kerber Academy")가 있으며, 폴란드에서 훈련하는 것을 좋아했습니다.'
                }
            ]
        }
    },
    'elina-svitolina': {
        name: '엘리나 스비톨리나', nameEn: 'Elina Svitolina', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나의 정신적 지주. 출산 후 복귀하여 윔블던 4강에 오르는 등 제2의 전성기를 보내고 있으며, 빠른 발과 안정적인 스트로크가 강점입니다.',
        detailedProfile: {
            oneLineSummary: '전쟁의 아픔을 딛고 코트에 선 "우크라이나의 영웅", 꺾이지 않는 불굴의 정신력.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 "조국을 위해 뛰는 전사"</div>
                    <p>러시아의 우크라이나 침공 이후, 스비톨리나는 단순한 테니스 선수가 아닌 우크라이나의 저항 정신을 상징하는 인물이 되었습니다. 경기 수익금을 기부하고, 러시아/벨라루스 선수와의 악수를 거부하는 등 코트 안팎에서 조국을 위한 메시지를 전하고 있습니다.</p>
                </div>
                <p>출산 후 3개월 만에 훈련을 재개, 2023년 윔블던 4강에 오르며 "엄마는 강하다"는 것을 증명했습니다. 동료 선수 가엘 몽피스의 아내로도 유명합니다.</p>
            `,
            playStyle: `
                <p><strong>"빠른 발을 가진 카운터 펀처"</strong></p>
                <p>엄청난 스피드로 코트를 누비며 모든 공을 받아냅니다. 안정적인 스트로크를 바탕으로 상대의 실수를 유발하는 플레이를 선호합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ 스비톨리나의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>풋워크:</strong> 투어에서 가장 빠른 발을 가진 선수 중 하나입니다. 수비 범위가 넓어 상대가 위너를 치기 어렵게 만듭니다.</li>
                        <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 가장 강력한 공격 옵션입니다.</li>
                        <li><strong>리턴:</strong> 상대의 서브를 안정적으로 받아넘겨 랠리 주도권을 가져옵니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '이동 (Movement)', score: 10, description: '코트 커버 능력 최상.' },
                { name: '수비 (Defense)', score: 9.5, description: '끈질긴 수비.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '조국을 위한 사명감.' },
                { name: '안정성 (Consistency)', score: 9, description: '기복 없는 플레이.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '주 득점원.' },
                { name: '파워 (Power)', score: 7, description: '결정력은 다소 부족.' }
            ],
            growthStory: `
                <p>우크라이나 오데사 출신입니다. 어릴 때부터 재능을 인정받았으며, 꾸준히 랭킹을 올려 세계 3위까지 기록했습니다. 메이저 우승은 없지만 WTA 파이널스 우승(2018) 경험이 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 8강 vs 이가 시비옹테크',
                date: '2023. 07. 11',
                description: '와일드카드로 출전해 세계 1위 시비옹테크를 꺾는 파란을 일으켰습니다. 출산 9개월 만에 이룬 쾌거에 전 세계가 감동했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💑 "테니스 커플"</div>
                    <p>프랑스의 가엘 몽피스와 결혼하여 딸 'Skai'를 낳았습니다. 두 사람의 SNS(G.E.M.S Life)는 팬들에게 큰 인기를 끌고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>엄마가 된 후 멘탈이 더 강해졌다는 평가를 받습니다. 부상 관리만 잘한다면 메이저 우승도 노려볼 만한 기량을 보여주고 있습니다.</p>
            `,
            faq: [
                {
                    question: '왜 악수를 안 하나요?',
                    answer: '조국 우크라이나를 침공한 러시아와 그 조력국인 벨라루스 선수와는 악수하지 않겠다는 원칙을 지키고 있습니다. 이는 개인적인 감정이 아닌 국가적인 입장을 대변하는 행동입니다.'
                },
                {
                    question: '남편 몽피스와 복식도 하나요?',
                    answer: '이벤트 경기 등에서 가끔 함께 뛰지만, 공식 대회 혼합 복식에는 자주 나오지 않습니다. 서로의 경기를 응원하는 모습이 자주 포착됩니다.'
                },
                {
                    question: '가장 큰 목표는 무엇인가요?',
                    answer: '그랜드슬램 우승과 우크라이나의 평화입니다. 그녀는 "우크라이나에 승리를 바치고 싶다"고 항상 말합니다.'
                }
            ]
        }
    },
    'victoria-azarenka': {
        name: '빅토리아 아자렌카', nameEn: 'Victoria Azarenka', country: 'Belarus', countryFlag: '🇧🇾', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '하드 코트의 강자. 호주 오픈 2회 우승자로서 강력한 리턴과 베이스라인 플레이로 오랫동안 정상권을 지키고 있는 베테랑 파워 히터입니다.',
        detailedProfile: {
            oneLineSummary: '샤라포바의 뒤를 이은 "괴성 키드"에서 존경받는 베테랑 "슈퍼맘"으로, 호주 오픈 2회 챔피언.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👑 "하드 코트의 여왕"</div>
                    <p>2012년, 2013년 호주 오픈을 연달아 제패하며 세계 1위에 올랐던 스타입니다. 세레나 윌리엄스와의 라이벌리(비록 상대 전적은 밀리지만)는 2010년대 여자 테니스의 가장 큰 볼거리 중 하나였습니다.</p>
                </div>
                <p>양육권 분쟁 등 개인적인 아픔을 겪고도 코트로 돌아와 다시 Top 10에 진입한 강인한 어머니이자 선수입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>특유의 기합 소리(Shouting)와 함께 매 샷을 강하게 때립니다. 리턴 게임 능력이 탁월하여 '브레이크 머신'으로 불립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇾 비카의 3가지 "파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 투어 역사상 가장 강력한 투핸드 백핸드 중 하나로 꼽힙니다. 크로스와 다운더라인을 자유자재로 구사합니다.</li>
                        <li><strong>리턴:</strong> 베이스라인 안쪽에서 라이징 볼을 때려 상대의 서브 게임을 무력화시킵니다.</li>
                        <li><strong>투지:</strong> 불리한 상황에서도 절대 포기하지 않는 승부욕은 타의 추종을 불허합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '리턴 (Return)', score: 10, description: '투어 최정상급 리턴 능력.' },
                { name: '백핸드 (Backhand)', score: 10, description: '가장 믿을 수 있는 무기.' },
                { name: '멘탈 (Mental)', score: 9, description: '산전수전 다 겪은 베테랑의 노련함.' },
                { name: '파워 (Power)', score: 9, description: '여전히 강력한 스트로크.' },
                { name: '체력 (Stamina)', score: 8, description: '나이가 들었지만 관리가 잘됨.' },
                { name: '서브 (Serve)', score: 7.5, description: '더블 폴트 기복이 있음.' }
            ],
            growthStory: `
                <p>벨라루스 민스크 출신입니다. 15세 때 미국으로 건너가 훈련했습니다. 2005년 프로 데뷔 후 빠르게 성장하여 2012년 세계 1위에 등극했습니다.</p>
            `,
            signatureMatch: {
                title: '2013 호주 오픈 결승 vs 리나',
                date: '2013. 01. 26',
                description: '리나와의 혈투 끝에 우승을 차지하며 호주 오픈 2연패를 달성했습니다. 부상 타임아웃 논란 등 우여곡절이 있었지만 실력으로 잠재웠던 대회입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👦 "아들 바보"</div>
                    <p>아들 레오(Leo)와 함께 투어를 다니는 모습으로 유명합니다. 경기 후 인터뷰에서 아들 이야기를 할 때 가장 환하게 웃습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"롱런하는 레전드"</strong></p>
                <p>30대 중반의 나이에도 2024년 마이애미 오픈 4강에 오르는 등 여전한 경쟁력을 보여주고 있습니다. 특히 하드 코트에서는 언제든 우승 후보입니다.</p>
            `,
            faq: [
                {
                    question: '기합 소리가 왜 큰가요?',
                    answer: '어릴 때부터 호흡을 내뱉으며 힘을 쓰는 습관이 들어서 그렇습니다. 샤라포바와 함께 가장 큰 기합 소리를 내는 선수로 유명했습니다.'
                },
                {
                    question: '샤라포바와 라이벌인가요?',
                    answer: '같은 동구권 출신에 금발, 기합 소리 등 공통점이 많아 자주 비교되었습니다. 둘 사이의 신경전도 꽤 치열했습니다.'
                },
                {
                    question: '은퇴 계획이 있나요?',
                    answer: '아직 구체적인 계획은 밝히지 않았습니다. "아들이 내가 경기하는 모습을 기억할 때까지 뛰고 싶다"고 말한 바 있습니다.'
                }
            ]
        }
    },
    'karolina-pliskova': {
        name: '카롤리나 플리스코바', nameEn: 'Karolina Pliskova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '서브 퀸. 투어에서 가장 많은 에이스를 기록하는 선수 중 한 명으로, 큰 키에서 내리꽂는 서브와 강력한 플랫 스트로크가 주무기입니다.',
        detailedProfile: {
            oneLineSummary: 'WTA 투어의 "에이스 머신", 시크한 표정으로 펑펑 터뜨리는 강서브와 플랫 샷.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "서브 퀸 (Ace Queen)"</div>
                    <p>WTA 투어에서 해마다 에이스 개수 1위를 다투는 최고의 서버입니다. 186cm의 장신에서 뿜어져 나오는 서브는 남자 선수 못지않은 위력을 가집니다. 세계 랭킹 1위까지 올랐으나 아직 그랜드슬램 우승이 없어 '무관의 제왕'이라는 꼬리표를 떼는 것이 목표입니다.</p>
                </div>
                <p>경기 중 감정 변화가 거의 없어 '얼음공주(Ice Princess)'라고도 불립니다.</p>
            `,
            playStyle: `
                <p><strong>"빅 서버 + 원투 펀치"</strong></p>
                <p>긴 랠리보다는 짧고 굵은 승부를 선호합니다. 강력한 서브와 이어진 포핸드 결정구로 포인트를 끝냅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 플리스코바의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>서브:</strong> 그녀의 알파이자 오메가. 퍼스트 서브 성공률이 높은 날은 브레이크가 거의 불가능합니다.</li>
                        <li><strong>플랫 스트로크:</strong> 회전이 거의 없는 플랫성 타구는 낮고 빠르게 깔려 상대가 타이밍을 맞추기 어렵습니다.</li>
                        <li><strong>냉정함:</strong> 어떤 상황에서도 당황하지 않고 자신의 플레이를 유지하는 포커페이스가 강점입니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: 'WTA 최고 수준.' },
                { name: '파워 (Power)', score: 9.5, description: '플랫 샷의 묵직함.' },
                { name: '멘탈 (Mental)', score: 9, description: '감정 기복이 적음.' },
                { name: '포핸드 (Forehand)', score: 9, description: '강력한 결정구.' },
                { name: '이동 (Movement)', score: 6.5, description: '큰 키로 인해 움직임이 둔한 편.' },
                { name: '수비 (Defense)', score: 6, description: '수비보다는 공격.' }
            ],
            growthStory: `
                <p>체코 로우니 출신으로, 쌍둥이 언니 크리스티나 플리스코바와 함께 자매 테니스 선수로 유명합니다. 2016년 US 오픈 준우승을 차지하며 세계적인 선수로 도약했습니다.</p>
            `,
            signatureMatch: {
                title: '2016 US 오픈 4강 vs 세레나 윌리엄스',
                date: '2016. 09. 08',
                description: '당시 세계 1위 세레나를 2-0으로 완파하는 파란을 일으키며 생애 첫 메이저 결승에 진출했습니다. 그녀의 서브와 포핸드가 빛을 발한 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👯‍♀️ "쌍둥이 자매"</div>
                    <p>언니 크리스티나도 투어 선수(왼손잡이)라, 자매가 복식조를 이뤄 출전하기도 합니다. 문신 위치로 두 사람을 구분한다고 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"재기를 노리는 베테랑"</strong></p>
                <p>2024년 트란실바니아 오픈 우승으로 4년 만에 투어 타이틀을 추가하며 부활의 신호탄을 쏘아 올렸습니다. 여전히 서브는 위력적입니다.</p>
            `,
            faq: [
                {
                    question: '언니와 헷갈리지 않나요?',
                    answer: '매우 닮았지만, 카롤리나는 오른손잡이, 크리스티나는 왼손잡이라 라켓 든 손을 보면 알 수 있습니다. 문신 위치도 다릅니다.'
                },
                {
                    question: '왜 그랜드슬램 우승이 없나요?',
                    answer: '결승에 2번(2016 US 오픈, 2021 윔블던) 진출했지만 아쉽게 준우승에 머물렀습니다. 발이 느린 약점이 큰 무대에서 발목을 잡곤 했습니다.'
                },
                {
                    question: '별명은 무엇인가요?',
                    answer: '"Plisko"라고 불리며, 에이스를 많이 터뜨려 "Ace Queen"이라는 호칭도 가지고 있습니다.'
                }
            ]
        }
    },
    'sloane-stephens': {
        name: '슬론 스티븐스', nameEn: 'Sloane Stephens', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2017 US 오픈 챔피언. 부드러운 움직임과 강력한 포핸드, 그리고 뛰어난 수비력을 겸비한 올라운드 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '물 흐르듯 유연한 움직임과 강력한 포핸드, 미국의 자존심 "슬론".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 "US 오픈의 여왕"</div>
                    <p>2017년 발 부상에서 복귀한 지 두 달 만에, 랭킹 83위로 US 오픈 우승을 차지하는 기적을 썼습니다. 당시 4강에서 비너스 윌리엄스를, 결승에서 매디슨 키스를 꺾었습니다. 엄청난 운동신경과 유연함을 바탕으로 '힘 안 들이고 치는 듯한' 부드러운 스윙이 특징입니다.</p>
                </div>
                <p>미국 축구 국가대표 조지 알티도어와 결혼한 '스포츠 스타 커플'로도 유명합니다.</p>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 + 올라운더"</strong></p>
                <p>스티븐스의 테니스는 '우아함'입니다. 무리해서 공격하기보다는, 부드러운 풋워크로 코트를 커버하다가 기회가 오면 강력한 포핸드로 끝냅니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 슬론의 3가지 "리듬"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>움직임:</strong> 코트 위를 미끄러지듯 이동하는 그녀의 풋워크는 투어 최고 수준입니다.</li>
                        <li><strong>포핸드:</strong> 백스윙이 크지만 임팩트 순간의 가속력이 엄청나 위력적인 탑스핀을 만들어냅니다.</li>
                        <li><strong>수비:</strong> 웬만한 공은 다 받아넘기는 '늪 테니스'를 구사할 수 있습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '이동 (Movement)', score: 10, description: '가장 우아하고 빠른 발.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '주 득점원.' },
                { name: '수비 (Defense)', score: 9.5, description: '철벽 수비.' },
                { name: '멘탈 (Mental)', score: 7, description: '기복이 심하고 의욕 없어 보일 때가 있음.' },
                { name: '서브 (Serve)', score: 7.5, description: '평범함.' },
                { name: '네트 플레이 (Net)', score: 8, description: '감각이 좋음.' }
            ],
            growthStory: `
                <p>미국 플로리다 출신으로, NFL 선수 출신 아버지와 수영 선수 출신 어머니의 유전자를 물려받았습니다. 2013년 호주 오픈 4강에 오르며 혜성처럼 등장했습니다.</p>
            `,
            signatureMatch: {
                title: '2017 US 오픈 결승 vs 매디슨 키스',
                date: '2017. 09. 09',
                description: '절친 매디슨 키스를 상대로 단 6개의 에러(키스는 30개)만 기록하는 완벽한 경기력으로 2-0 완승을 거뒀습니다. 그녀의 수비력과 침착함이 돋보인 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 "솔직한 입담"</div>
                    <p>인터뷰에서 거침없고 유머러스한 입담을 자랑합니다. 경기 중 보여주는 다양한 표정 변화(Face emotion)도 팬들에게 즐거움을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클레이 강자"</strong></p>
                <p>최근에는 클레이 코트에서 좋은 성적을 내고 있습니다. 2024년 루앙 오픈 우승으로 여전한 실력을 증명했습니다.</p>
            `,
            faq: [
                {
                    question: '왜 기복이 심한가요?',
                    answer: '동기 부여가 잘 안 될 때는 무기력한 모습을 보이기도 합니다. 하지만 큰 무대나 중요한 경기에서는 집중력을 발휘합니다.'
                },
                {
                    question: '가족이 스포츠 선수인가요?',
                    answer: '네, 아버지는 NFL 러닝백 존 스티븐스였고, 남편은 미국 축구 국가대표 공격수 조지 알티도어입니다.'
                },
                {
                    question: '재단 활동을 하나요?',
                    answer: '"Sloane Stephens Foundation"을 설립해 빈곤층 아동들의 교육과 테니스를 지원하고 있습니다.'
                }
            ]
        }
    },
    'madison-keys': {
        name: '매디슨 키스', nameEn: 'Madison Keys', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: 'WTA 투어 최고의 파워 히터 중 한 명. 묵직한 서브와 포핸드로 상대를 힘으로 압박하는 공격적인 스타일을 구사합니다.',
        detailedProfile: {
            oneLineSummary: 'WTA 최고 수준의 "헤비볼 히터", 들어가는 날은 아무도 막을 수 없는 파괴력.',
            whyNotable: `
                <p><strong>"가장 묵직한 공을 치는 선수"</strong></p>
                <p>매디슨 키스의 샷은 단순한 스피드를 넘어 '무게감'이 다릅니다. 남자 선수들에 버금가는 샷 평속을 기록할 정도로 압도적인 파워를 자랑합니다. 2017 US 오픈 결승에 오르며 미국 여자 테니스의 중심축으로 자리 잡았습니다.</p>
                <p>코트 밖에서는 동료 선수들을 살뜰히 챙기고 자선 활동에 앞장서는 따뜻한 리더십의 소유자입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>복잡한 전술보다는 압도적인 힘으로 밀어붙이는 스타일입니다. 서브와 포핸드 한 방으로 포인트를 끝내는 것을 선호합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 그녀의 트레이드마크. 엄청난 스윙 스피드에서 나오는 포핸드 위너는 총알같이 빠릅니다.</li>
                    <li><strong>서브:</strong> 킥 서브와 플랫 서브 모두 강력하며, 서브 게임을 쉽게 지키는 편입니다.</li>
                    <li><strong>잔디 코트:</strong> 낮게 깔리는 빠른 공을 좋아해 잔디 코트에서 특히 강합니다(이스트본 2회 우승).</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '투어에서 가장 무거운 공을 침.' },
                { name: '서브 (Serve)', score: 9.5, description: '강력한 서브권.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '결정력만큼은 최상급.' },
                { name: '안정성 (Consistency)', score: 6, description: '홈런(에러)이 많은 편.' },
                { name: '움직임 (Movement)', score: 7, description: '직선 움직임은 좋으나 좌우 수비는 약함.' },
                { name: '멘탈 (Mental)', score: 8, description: '긍정적이지만 중요할 때 흔들림.' }
            ],
            growthStory: `
                <p>어릴 때부터 '천재 소녀'로 불리며 14세에 프로에 데뷔했습니다. 린제이 데이븐포트 등 레전드들의 지도를 받으며 성장했습니다.</p>
                <p>2017년 US 오픈 준우승으로 잠재력을 폭발시켰고, 모든 그랜드슬램 대회에서 4강 이상의 성적을 거둔 몇 안 되는 선수 중 하나입니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 8강 vs 마르케타 본드로우소바',
                date: '2023. 09. 06',
                description: '홈 팬들 앞에서 윔블던 챔피언 본드로우소바를 2-0으로 완파한 경기. 강력한 파워로 상대의 수비벽을 완전히 무너뜨리며 4강 진출에 성공했습니다.'
            },
            recentForm: `
                <p><strong>"여전한 우승 후보"</strong></p>
                <p>투어 생활 10년이 넘은 베테랑이 되었지만 파워는 여전합니다. 2024년 스트라스부르, 이스트본 등에서 우승 및 4강에 오르며 꾸준함을 과시하고 있습니다.</p>
            `
        }
    },
    'daria-kasatkina': {
        name: '다리아 카사트키나', nameEn: 'Daria Kasatkina', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 예술가. 파워보다는 다양한 스핀과 각도, 창의적인 샷 메이킹으로 승부하는 지능적인 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '파워 테니스 시대의 "반란군", 현란한 스핀과 전술로 상대를 무너뜨리는 테크니션.',
            whyNotable: `
                <p><strong>"코트 안팎의 진정한 자유로운 영혼"</strong></p>
                <p>다리아 카사트키나는 힘으로만 승부하는 현대 테니스에서 독보적인 '다양성'을 보여주는 선수입니다. 특히 인기 테니스 브이로그 'What The Vlog'를 운영하며 투어 생활의 비하인드 스토리를 팬들에게 솔직하게 공개해 큰 사랑을 받고 있습니다.</p>
                <p>또한 쉽지 않은 상황에서도 자신의 정체성과 목소리를 당당하게 내는 용기 있는 선수로 존경받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"지능형 카운터 펀처 + 스핀 마스터"</strong></p>
                <p>파워는 약하지만, 남자 선수급의 회전량을 가진 포핸드와 정교한 슬라이스, 드롭샷으로 상대를 요리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 라파엘 나달을 연상시키는 헤비 탑스핀 포핸드를 구사합니다. 공이 높게 튀어 올라 상대의 타점을 흔듭니다.</li>
                    <li><strong>점프 백핸드:</strong> 리턴이나 수비 상황에서 껑충 뛰어오르며 치는 백핸드 샷은 그녀의 시그니처입니다.</li>
                    <li><strong>전술:</strong> 상대의 약점을 파고드는 집요함과 코트의 길목을 차단하는 센수가 탁월합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '다양성 (Variety)', score: 10, description: '타의 추종을 불허하는 샷 셀렉션.' },
                { name: '스핀 (Spin)', score: 10, description: '엄청난 RPM의 포핸드.' },
                { name: '센스 (IQ)', score: 9.5, description: '상대의 수를 읽는 능력이 뛰어남.' },
                { name: '스피드 (Speed)', score: 9, description: '클레이 코트에서의 움직임이 특히 좋음.' },
                { name: '파워 (Power)', score: 5, description: '서브와 스트로크 파워는 약한 편.' },
                { name: '서브 (Serve)', score: 5, description: '느린 서브가 최대 약점.' }
            ],
            growthStory: `
                <p>러시아 톨리아티 출신으로, 형의 권유로 테니스를 시작했습니다. 2014년 프랑스 오픈 주니어 우승을 차지하며 유망주로 떠올랐습니다.</p>
                <p>성인 무대에서도 2018년 인디언 웰스 준우승, 2022년 프랑스 오픈 4강에 오르며 꾸준히 상위권을 유지하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2018 인디언 웰스 4강 vs 비너스 윌리엄스',
                date: '2018. 03. 17',
                description: '전설 비너스를 상대로 명승부를 펼쳤습니다. 3세트 타이브레이크 접전 끝에 승리하며, 파워 히터를 상대로 어떻게 싸워야 하는지를 보여준 교과서적인 경기였습니다.'
            },
            recentForm: `
                <p><strong>"꾸준함의 힘"</strong></p>
                <p>2024년에도 여러 대회에서 결승에 오르며 Top 15 안팎의 랭킹을 유지하고 있습니다. 특히 잔디와 하드 코트에서도 결승에 진출하며 '올라운더'로서의 면모를 과시하고 있습니다.</p>
            `
        }
    },
    'beatriz-haddad-maia': {
        name: '베아트리스 하다드 마이아', nameEn: 'Beatriz Haddad Maia', country: 'Brazil', countryFlag: '🇧🇷', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '남미 여자 테니스의 자존심. 왼손잡이 특유의 까다로운 서브와 강력한 포핸드, 그리고 매 포인트 최선을 다하는 파이팅이 돋보입니다.',
        detailedProfile: {
            oneLineSummary: '브라질의 열정을 품은 왼손잡이 파워 히터, 도핑 징계를 딛고 일어선 "불굴의 오뚝이".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇷 "남미의 여왕"</div>
                    <p>마리아 부에노 이후 브라질 여자 테니스 역사상 최고의 선수입니다. 2023년 프랑스 오픈 4강에 진출하며 브라질 테니스의 르네상스를 알렸습니다. 185cm의 큰 키와 왼손잡이라는 이점, 그리고 남미 특유의 열정적인 플레이로 팬들을 사로잡습니다.</p>
                </div>
                <p>도핑 양성 반응(보충제 오염 주장)으로 10개월 자격 정지를 당해 랭킹이 소멸되었으나, 밑바닥부터 다시 시작해 Top 10까지 올라온 인간 승리의 주인공입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 왼손잡이 베이스라이너"</strong></p>
                <p>나달을 연상시키는 헤비 탑스핀 포핸드와 강력한 서브가 주무기입니다. 리듬을 타면 멈출 수 없는 폭발력을 가졌습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 비아의 3가지 "열정"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>왼손 포핸드:</strong> 코트 밖으로 빠져나가는 궤적의 포핸드는 상대가 수비하기 매우 까다롭습니다.</li>
                        <li><strong>서브:</strong> 큰 키에서 나오는 왼손 슬라이스 서브는 중요한 순간 득점원입니다.</li>
                        <li><strong>파이팅:</strong> 경기 내내 "Vamos!"를 외치며 스스로를 독려하고 상대를 압박합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '묵직한 스트로크.' },
                { name: '서브 (Serve)', score: 9, description: '왼손 이점 활용.' },
                { name: '멘탈 (Mental)', score: 9, description: '어려움을 극복한 내공.' },
                { name: '포핸드 (Forehand)', score: 9, description: '강력한 무기.' },
                { name: '이동 (Movement)', score: 7.5, description: '키에 비해 민첩함.' },
                { name: '네트 (Net)', score: 8, description: '복식 경험으로 발리도 좋음.' }
            ],
            growthStory: `
                <p>브라질 상파울루 출신입니다. 어머니와 할머니 모두 테니스 선수였던 테니스 집안입니다. 2019년 도핑 징계라는 시련을 겪었지만, 2022년 영국 잔디 시즌 2연속 우승(노팅엄, 버밍엄)으로 화려하게 부활했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 프랑스 오픈 4강 진출',
                date: '2023. 06. 07',
                description: '개막전부터 4강까지 4경기 연속 3세트 접전을 펼치며 "철의 여인"임을 증명했습니다. 8강에서 온스 자베르를 꺾고 브라질 여자 선수로는 1968년 이후 처음으로 메이저 4강에 올랐습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">📢 "최고의 응원단"</div>
                    <p>그녀가 가는 곳마다 노란 유니폼을 입은 브라질 팬들이 몰려와 축구장을 방불케 하는 응원전을 펼칩니다. 하다드 마이아는 그 에너지의 원천입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 10 안착"</strong></p>
                <p>단식뿐만 아니라 복식에서도 좋은 성적을 내며 다재다능함을 뽐내고 있습니다. 하드, 클레이, 잔디 모든 코트에서 경쟁력이 있습니다.</p>
            `,
            faq: [
                {
                    question: '도핑 징계는 어떻게 된 건가요?',
                    answer: '오염된 비타민 보충제를 섭취한 것이 인정되어 징계가 감경되었습니다. 억울할 수 있는 상황이었지만 변명 없이 징계를 받아들이고 다시 일어섰습니다.'
                },
                {
                    question: '왜 왼손잡이인가요?',
                    answer: '원래 왼손잡이입니다. 여자 테니스에서 장신 왼손잡이는 매우 드물고 강력한 무기입니다.'
                },
                {
                    question: '별명은 무엇인가요?',
                    answer: '브라질에서는 "Bia(비아)"라는 애칭으로 불립니다.'
                }
            ]
        }
    },
    'danielle-collins': {
        name: '다니엘 콜린스', nameEn: 'Danielle Collins', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: 'Danimal. 엄청난 승부욕과 공격적인 베이스라인 플레이로 2022 호주 오픈 준우승을 차지했습니다. 2024년을 끝으로 은퇴를 예고한 그녀의 마지막 불꽃을 주목하세요.',
        detailedProfile: {
            oneLineSummary: '코트를 찢을 듯한 포효와 파워, 은퇴를 앞두고 불타오르는 "Danimal".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "Danimal (다니말)"</div>
                    <p>Danielle + Animal의 합성어로, 코트 위에서 야수처럼 포효하고 싸운다고 해서 붙여진 별명입니다. 대학 테니스(NCAA) 챔피언 출신으로 프로에 늦게 데뷔했지만, 2022년 호주 오픈 준우승까지 오르며 성공 신화를 썼습니다.</p>
                </div>
                <p>2024년 시즌을 끝으로 은퇴하겠다고 선언한 후, 마이애미 오픈 우승 등 믿을 수 없는 성적을 거두며 "은퇴 번복해라"는 팬들의 성원을 받고 있습니다.</p>
            `,
            playStyle: `
                <p><strong>"초공격적 베이스라이너 (Aggressive Ball Striker)"</strong></p>
                <p>콜린스의 테니스에 '후퇴'는 없습니다. 어떤 공이 와도 물러서지 않고 라이징 볼을 강타해 위너를 만들어냅니다. 특히 백핸드 파워는 투어 최정상급입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 콜린스의 3가지 "맹공"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>백핸드:</strong> 그녀의 가장 강력한 무기. 크로스 앵글이 깊고 빠릅니다.</li>
                        <li><strong>리턴:</strong> 상대의 세컨드 서브는 무조건 공격 대상입니다.</li>
                        <li><strong>포효:</strong> "Come On!"을 외치며 상대의 기선을 제압하고 자신의 에너지를 끌어올립니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: '남자 선수급의 임팩트.' },
                { name: '공격성 (Aggression)', score: 10, description: '닥공(닥치고 공격).' },
                { name: '멘탈 (Mental)', score: 9.5, description: '불타오르는 승부욕.' },
                { name: '백핸드 (Backhand)', score: 10, description: '투어 최고의 백핸드 중 하나.' },
                { name: '서브 (Serve)', score: 8, description: '준수함.' },
                { name: '수비 (Defense)', score: 7, description: '수비보다는 맞불 작전.' }
            ],
            growthStory: `
                <p>미국 플로리다 출신입니다. 바로 프로에 가지 않고 버지니아 대학교(UVA)에 진학해 NCAA 단식 2회 우승을 차지했습니다. 대학 졸업 후 프로에 데뷔한 특이한 케이스입니다.</p>
            `,
            signatureMatch: {
                title: '2024 마이애미 오픈 결승 vs 엘레나 리바키나',
                date: '2024. 03. 31',
                description: '은퇴 시즌에 홈에서 열린 마스터스 대회 우승. 리바키나를 상대로 기적 같은 2-0 승리를 거두며 생애 첫 WTA 1000 타이틀을 획득했습니다. 그녀의 커리어 최고의 순간이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "사이다 발언"</div>
                    <p>인터뷰나 경기 중에 할 말은 하는 성격입니다. 심판이나 상대 선수에게도 거침없이 자신의 의견을 표현하는 '걸크러시' 매력이 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"가장 아름다운 은퇴 투어"</strong></p>
                <p>은퇴를 앞두고 부담감을 내려놓아서인지 최고의 기량을 보여주고 있습니다. "지금이 내 인생 최고의 테니스"라고 말할 정도입니다.</p>
            `,
            faq: [
                {
                    question: '정말 은퇴하나요?',
                    answer: '네, 류마티스 관절염과 자궁내막증 등 건강 문제로 가족을 꾸리고 싶어 2024년을 끝으로 은퇴한다고 밝혔습니다. 팬들은 아쉬워하고 있습니다.'
                },
                {
                    question: '대학 출신이 왜 드문가요?',
                    answer: '보통 테니스 선수들은 10대 때 프로에 데뷔합니다. 대학을 마치고 Top 10까지 간 경우는 매우 드문 성공 사례입니다.'
                },
                {
                    question: '별명이 왜 Danimal인가요?',
                    answer: 'Danielle과 Animal을 합친 말로, 코트 위에서의 야수 같은 본능적인 플레이 스타일 때문에 붙여졌습니다. 본인도 이 별명을 좋아합니다.'
                }
            ]
        }
    },
    'barbora-krejcikova': {
        name: '바르보라 크레이치코바', nameEn: 'Barbora Krejcikova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식을 모두 제패한 진정한 챔피언. 2021 롤랑가로스, 2024 윔블던 단식 우승자이자 골든 슬래머로, 우아하고 기술적인 플레이가 일품입니다.',
        detailedProfile: {
            oneLineSummary: '단식과 복식을 모두 정복한 "토탈 패키지", 롤랑가로스와 윔블던의 여왕.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "단/복식 모두 전설"</div>
                    <p>현역 선수 중 드물게 단식과 복식 모두에서 세계 1위와 그랜드슬램 우승을 경험한 선수입니다. 2021년 프랑스 오픈(클레이)과 2024년 윔블던(잔디) 단식 우승으로 코트를 가리지 않는 실력을 증명했습니다. 1998년 윔블던 챔피언 야나 노보트나의 제자로도 유명합니다.</p>
                </div>
                <p>복잡한 기술 없이 우아하고 클래식한 폼으로 테니스를 쳐서 "테니스의 정석"을 보여주는 선수입니다.</p>
            `,
            playStyle: `
                <p><strong>"클래식 올라운더 (Classic All-Rounder)"</strong></p>
                <p>크레이치코바의 테니스는 '부드러움'입니다. 힘들이지 않고 타이밍과 코스 선택만으로 상대를 제압합니다. 복식 세계 1위다운 네트 플레이가 일품입니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 바르보라의 3가지 "우아함"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>다양성:</strong> 슬라이스, 드롭샷, 로브, 발리 등 테니스의 모든 기술을 완벽하게 구사합니다.</li>
                        <li><strong>전술:</strong> 상대의 위치를 보고 빈 곳으로 공을 보내는 전술적 움직임이 탁월합니다.</li>
                        <li><strong>멘탈:</strong> 위기 상황에서도 표정 변화 없이 침착하게 자신의 플레이를 합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 10, description: '완벽한 폼과 테크닉.' },
                { name: '네트 (Net)', score: 10, description: '복식 레전드다운 발리 실력.' },
                { name: '전술 (Tactics)', score: 10, description: '코트의 사령관.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '강철 같은 심장.' },
                { name: '서브 (Serve)', score: 8.5, description: '코스가 좋음.' },
                { name: '파워 (Power)', score: 8, description: '파워 히터는 아니지만 충분히 강함.' }
            ],
            growthStory: `
                <p>체코 브르노 출신입니다. 주니어 시절 세계 3위까지 올랐으나, 성인 무대에서는 복식 전문 선수로 먼저 이름을 알렸습니다. 늦은 나이에 단식에 집중하며 잠재력을 폭발시켰습니다.</p>
            `,
            signatureMatch: {
                title: '2024 윔블던 결승 vs 자스민 파올리니',
                date: '2024. 07. 13',
                description: '모두의 예상을 깨고 결승에 진출, 파올리니를 2-1로 꺾고 생애 두 번째 메이저 단식 우승을 차지했습니다. 우승 후 하늘에 계신 스승 야나 노보트나를 향해 트로피를 들어 올린 장면은 감동적이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🕯️ "스승을 향한 헌사"</div>
                    <p>암으로 세상을 떠난 스승 야나 노보트나에 대한 그리움을 자주 표현합니다. 그녀의 우승은 스승과의 약속을 지키기 위한 여정이기도 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"최전성기"</strong></p>
                <p>윔블던 우승으로 다시 Top 10에 복귀했습니다. 단식과 복식을 병행하는 강행군 속에서도 최고의 성과를 내고 있습니다.</p>
            `,
            faq: [
                {
                    question: '단식과 복식 중 무엇이 더 중요한가요?',
                    answer: '이제는 단식에 더 비중을 두고 있습니다. 하지만 복식 경기가 단식 경기력 향상(특히 발리, 리턴)에 큰 도움이 된다고 말합니다.'
                },
                {
                    question: '야나 노보트나와 어떤 사이인가요?',
                    answer: '주니어 시절 크레이치코바가 직접 찾아가 지도를 부탁했고, 노보트나가 세상을 떠날 때까지 멘토이자 코치로 함께했습니다.'
                },
                {
                    question: '골든 슬램이 뭔가요?',
                    answer: '4대 메이저 대회와 올림픽 금메달을 모두 따는 것을 말합니다. 크레이치코바는 복식에서 이 위업을 달성했습니다(커리어 골든 슬램).'
                }
            ]
        }
    },
    'petra-kvitova': {
        name: '페트라 크비토바', nameEn: 'Petra Kvitova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '윔블던 2회 우승자. 강력한 왼손 서브와 포핸드를 앞세운 시원시원한 공격 테니스의 대명사입니다. 강도 피습 사건으로 왼손 신경이 끊어지는 부상을 당했으나 기적적으로 재활에 성공했습니다.',
        detailedProfile: {
            oneLineSummary: '윔블던의 여왕, 강도 사고를 이겨낸 기적의 왼손잡이 "P3tra".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "체코의 사자"</div>
                    <p>2011, 2014년 윔블던을 제패했습니다. 2016년 자택에 침입한 강도에게 칼로 왼손(주무기)을 찔려 신경이 손상되는 선수 생명 위기를 겪었습니다. 하지만 불굴의 의지로 재활하여 다시 Top 10에 복귀, 2019 호주 오픈 준우승까지 이뤄냈습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워 어그레시브 (Power Aggressive)"</strong></p>
                <p>빠른 잔디 코트에서 가장 위력적인 선수입니다. 3구 안에 끝내는 속전속결 스타일입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>왼손 서브:</strong> 슬라이스 서브가 밖으로 빠져나가 상대가 리턴하기 매우 어렵습니다.</li>
                    <li><strong>포핸드:</strong> 타점이 낮고 스윙이 빨라 상대가 반응하기 힘듭니다.</li>
                    <li><strong>기복:</strong> 컨디션이 좋은 날은 무적이지만, 안 좋은 날은 에러가 쏟아집니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '시원함.' },
                { name: '서브 (Serve)', score: 9.5, description: '왼손 이점.' },
                { name: '멘탈 (Mental)', score: 9, description: '인간 승리.' },
                { name: '이동 (Movement)', score: 6, description: '다소 느림.' },
                { name: '잔디 (Grass)', score: 10, description: '여왕.' },
                { name: '안정성 (Stability)', score: 5, description: '롤러코스터.' }
            ],
            growthStory: `
                <p>체코 빌로베츠 출신입니다. 아버지에게 테니스를 배웠습니다. 마르티나 나브라틸로바를 동경하며 자란 왼손잡이 소녀였습니다.</p>
            `,
            signatureMatch: {
                title: '2011 윔블던 결승 vs 마리아 샤라포바',
                date: '2011. 07. 02',
                description: '스타 탄생. 21세의 나이로 당대 최고 인기 스타 샤라포바를 2-0(6-3, 6-4)으로 압도하며 생애 첫 메이저 우승을 차지했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👏 "Pojd!"</div>
                    <p>득점 후 "Pojd!"(체코어로 '가자!'라는 뜻, 영어의 Come on)라고 외치는 것이 시그니처입니다. 팬들은 그녀의 시원한 플레이와 인간적인 스토리를 사랑합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"엄마가 된 챔피언"</strong></p>
                <p>2023년 마이애미 오픈 우승으로 Top 10에 복귀하며 노익장을 과시했습니다. 2024년 초 임신 소식을 알리며 잠시 투어를 떠났으나, 복귀 의지를 밝혔습니다.</p>
            `,
            faq: [
                {
                    question: '현재 근황?',
                    answer: '2024년 여름 첫 아이를 출산하여 엄마가 되었습니다. 육아에 전념 중입니다.'
                }
            ]
        }
    },
    'belinda-bencic': {
        name: '벨린다 벤치치', nameEn: 'Belinda Bencic', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '도쿄 올림픽 금메달리스트. 빠른 타이밍에 공을 처리하여 상대의 시간을 빼앗는 플레이가 장기이며, 마르티나 힝기스를 잇는 스위스의 스타입니다.',
        detailedProfile: {
            oneLineSummary: '도쿄 올림픽 금메달리스트, 천재적인 타이밍으로 상대의 시간을 뺏는 "스위스 요정".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥇 "올림픽 챔피언"</div>
                    <p>2020 도쿄 올림픽에서 단식 금메달과 복식 은메달을 동시에 목에 걸며 스위스 테니스의 영웅이 되었습니다. 마르티나 힝기스와 로저 페더러의 계보를 잇는 스위스의 차세대 에이스입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"라이징 샷 메이커"</strong></p>
                <p>공이 바운드되자마자 치는 빠른 타이밍의 스트로크가 주무기입니다. 힘들이지 않고 상대의 힘을 이용해 코스를 공략하는 지능적인 플레이를 합니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇭 벤치치의 3가지 "스위스 시계"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>타이밍:</strong> 다른 선수들보다 한 박자 빠르게 공을 처리하여 상대에게 준비할 시간을 주지 않습니다.</li>
                        <li><strong>백핸드 다운더라인:</strong> 그녀의 트레이드마크 샷으로, 랠리 도중 갑자기 방향을 틀어 위너를 만들어냅니다.</li>
                        <li><strong>테니스 IQ:</strong> 힝기스의 지도를 받아 코트 전체를 읽는 눈이 매우 좋습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '타이밍 (Timing)', score: 10, description: '타의 추종을 불허함.' },
                { name: '전술 (Tactics)', score: 9.5, description: '똑똑한 플레이.' },
                { name: '백핸드 (Backhand)', score: 9, description: '매우 날카로움.' },
                { name: '멘탈 (Mental)', score: 8, description: '가끔 감정 기복 있음.' },
                { name: '파워 (Power)', score: 7.5, description: '힘보다는 기술.' },
                { name: '서브 (Serve)', score: 7.5, description: '준수한 편.' }
            ],
            growthStory: `
                <p>슬로바키아계 이민자 가정에서 태어났습니다. 4살 때부터 힝기스의 어머니인 멜라니 몰리터에게 지도를 받으며 '제2의 힝기스'로 키워졌습니다. 주니어 세계 1위를 거쳐 프로 무대에서도 성공적으로 안착했습니다.</p>
            `,
            signatureMatch: {
                title: '2020 도쿄 올림픽 단식 결승',
                date: '2021. 07. 31',
                description: '생애 최고의 순간. 마르케타 본드로소바를 2-1로 꺾고 조국 스위스에 메이저 대회 여자 단식 첫 금메달을 안겼습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "미소 천사"</div>
                    <p>코트 밖에서는 항상 밝게 웃는 모습으로 팬들을 대합니다. 동료 선수들과도 두루두루 친하게 지내는 '인싸'입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"엄마가 되어 돌아온다"</strong></p>
                <p>2023년 말 임신 소식을 알리고 출산 휴가에 들어갔습니다. 2024년 4월 딸을 출산했으며, 투어 복귀를 준비하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '힝기스와 어떤 관계인가요?',
                    answer: '스승과 제자이자, 절친한 언니 동생 사이입니다. 힝기스의 어머니에게 테니스를 배웠고, 힝기스와 복식 조를 이뤄 우승하기도 했습니다.'
                }
            ]
        }
    },
    'bianca-andreescu': {
        name: '비앙카 안드레스쿠', nameEn: 'Bianca Andreescu', country: 'Canada', countryFlag: '🇨🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2019 US 오픈 챔피언. 세레나 윌리엄스를 꺾고 우승한 저력의 선수로, 강력한 파워와 다양한 구질을 섞어 쓰는 능력이 탁월합니다.',
        detailedProfile: {
            oneLineSummary: '10대 때 세레나를 꺾고 US 오픈을 제패한 "캐나다의 여전사", 부상을 딛고 돌아온 챔피언.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "She is the Champion"</div>
                    <p>2019년, 19세의 나이로 <strong>US 오픈 결승에서 '여제' 세레나 윌리엄스를 꺾고 우승</strong>하는 대이변을 연출했습니다. 캐나다인 최초의 그랜드슬램 단식 우승자입니다. 파워와 기술, 멘탈을 모두 갖춘 완성형 선수로 평가받습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"다재다능한 파워 히터 (Versatile Power)"</strong></p>
                <p>단순히 세게 치는 것뿐만 아니라, 문볼(높게 뜨는 공), 드롭샷, 슬라이스 등 다양한 구질을 섞어 상대를 혼란에 빠뜨립니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🎭 안드레스쿠의 3가지 "무기"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>변칙 플레이:</strong> 강타를 때리다가 갑자기 루프성 공을 보내거나 드롭샷을 놓는 등 리듬을 자꾸 바꿉니다.</li>
                        <li><strong>강력한 포핸드:</strong> 묵직한 톱스핀이 걸린 포핸드는 그녀의 주 득점원입니다.</li>
                        <li><strong>드라마 퀸:</strong> 위기 상황에서 더욱 집중력을 발휘하여 역전승을 자주 만들어냅니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '다양성 (Variety)', score: 10, description: '모든 기술 구사 가능.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '큰 경기에 강함.' },
                { name: '파워 (Power)', score: 9, description: '묵직한 한 방.' },
                { name: '포핸드 (Forehand)', score: 9, description: '강력함.' },
                { name: '체력 (Fitness)', score: 6, description: '잦은 부상이 발목을 잡음.' },
                { name: '이동 (Movement)', score: 8, description: '준수함.' }
            ],
            growthStory: `
                <p>루마니아 이민자 가정에서 태어났습니다. 어릴 때 루마니아에서 테니스를 시작했고, 다시 캐나다로 돌아와 본격적으로 선수 생활을 했습니다. 2019년 랭킹 150위권 밖에서 시작해 연말 Top 5까지 오르는 기적을 썼습니다.</p>
            `,
            signatureMatch: {
                title: '2019 US 오픈 결승 vs 세레나 윌리엄스',
                date: '2019. 09. 07',
                description: '전설을 넘어서다. 세레나의 홈인 뉴욕에서, 2만 관중의 일방적인 응원을 뚫고 2-0 완승을 거뒀습니다. 그녀의 담대한 배짱이 빛난 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐶 "코코와 함께"</div>
                    <p>반려견 '코코'와 항상 함께 다닙니다. 경기장에도 데리고 올 정도로 각별한 애정을 보이며, 팬들에게도 코코는 유명 인사입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상과의 전쟁"</strong></p>
                <p>우승 이후 계속되는 부상으로 긴 재활을 거쳤습니다. 최근 다시 투어에 복귀하여 예전의 기량을 찾기 위해 노력하고 있습니다. 건강만 하다면 언제든 우승권에 있는 선수입니다.</p>
            `,
            faq: [
                {
                    question: '명상은 왜 하나요?',
                    answer: '경기 전이나 도중에 눈을 감고 명상을 하는 루틴이 있습니다. 멘탈 관리를 위해 시각화 훈련을 중요하게 생각한다고 합니다.'
                }
            ]
        }
    },
    'emma-raducanu': {
        name: '엠마 라두카누', nameEn: 'Emma Raducanu', country: 'United Kingdom', countryFlag: '🇬🇧', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '기적의 아이콘. 2021 US 오픈에서 예선 통과자 최초로 무실세트 우승이라는 신화를 썼습니다. 깔끔한 기술과 스타성을 겸비한 영국의 희망입니다.',
        detailedProfile: {
            oneLineSummary: '예선 통과자 신화의 주인공, 전 세계가 주목하는 "영국의 신데렐라".',
            whyNotable: `
                <p><strong>"테니스 역사상 가장 위대한 신데렐라 스토리"</strong></p>
                <p>2021년 18세의 나이로 US 오픈에 예선부터 참가해, 단 한 세트도 내주지 않고(20세트 연속 승리) 우승을 차지했습니다. 예선 통과자의 메이저 우승은 테니스 역사상 전무후무한 기록입니다. 이 우승 하나로 그녀는 단숨에 전 세계적인 슈퍼스타가 되었습니다.</p>
                <p>뛰어난 실력뿐만 아니라 지적인 인터뷰 스킬, 다문화적 배경(루마니아/중국 혼혈, 영국 국적)으로 글로벌 브랜드들의 러브콜을 받는 아이콘입니다.</p>
            `,
            playStyle: `
                <p><strong>"지능적인 베이스라이너 (Aggressive Counter Puncher)"</strong></p>
                <p>라두카누의 테니스는 '깨끗함' 그 자체입니다. 무리해서 세게 치기보다는 상대의 힘을 이용해 코스 깊숙이 찔러 넣는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 그녀의 우승 원동력이었던 리턴 능력은 투어 최상급입니다. 베이스라인 안쪽으로 들어와 라이징 볼을 공략합니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 시그니처 샷으로, 위기 상황에서 흐름을 바꿉니다.</li>
                    <li><strong>움직임:</strong> 물 흐르듯 유연한 코트 커버 능력을 갖췄습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 9.5, description: '교과서적인 깔끔한 폼.' },
                { name: '리턴 (Return)', score: 9.5, description: '공격적인 리턴이 일품.' },
                { name: '스타성 (Star Power)', score: 10, description: '전 세계가 주목하는 흥행 보증수표.' },
                { name: '백핸드 (Backhand)', score: 9, description: '가장 자신 있는 무기.' },
                { name: '체력 (Fitness)', score: 7, description: '잦은 부상이 발목을 잡음.' },
                { name: '서브 (Serve)', score: 7.5, description: '정확도는 좋으나 파워 보강 필요.' }
            ],
            growthStory: `
                <p>캐나다 토론토에서 태어나 2세 때 영국으로 이주했습니다. 학업과 운동을 병행하며 모범생으로 자랐고, 수학과 경제학 A레벨을 받을 정도로 머리가 좋습니다.</p>
                <p>2021년 윔블던 16강 진출로 가능성을 보여주더니, 곧이어 열린 US 오픈에서 테니스 역사를 새로 쓰며 여왕의 자리에 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2021 US 오픈 결승 vs 레일라 페르난데스',
                date: '2021. 09. 11',
                description: '10대들의 결승전으로 전 세계의 이목이 집중된 경기. 긴장되는 순간에도 침착하게 자신의 플레이를 펼치며 2-0 완승을 거뒀습니다. 우승 직후 보여준 환한 미소는 그녀의 트레이드마크가 되었습니다.'
            },
            recentForm: `
                <p><strong>"재도약을 위한 숨 고르기"</strong></p>
                <p>우승 이후 잦은 코치 교체와 손목/발목 부상 수술로 힘든 시간을 보냈습니다. 2024년 복귀 후 점차 경기 감각을 끌어올리고 있으며, 건강한 몸 상태를 유지한다면 언제든 다시 정상에 오를 수 있는 잠재력을 가졌습니다.</p>
            `,
            fanAppeal: `
                <p><strong>"테니스판 엠마 왓슨"</strong></p>
                <p>지적이고 우아한 이미지와 코트 위에서의 승부사 기질이 공존하는 반전 매력의 소유자입니다. 디올, 티파니, 포르쉐 등 럭셔리 브랜드의 앰버서더로 활동하며 패션 아이콘으로도 사랑받고 있습니다.</p>
            `
        }
    },
    'leylah-fernandez': {
        name: '레일라 페르난데스', nameEn: 'Leylah Fernandez', country: 'Canada', countryFlag: '🇨🇦', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '작은 고추가 맵다. 왜소한 체격에도 불구하고 빠른 발과 영리한 플레이, 그리고 지치지 않는 투지로 2021 US 오픈 준우승을 차지했습니다.',
        detailedProfile: {
            oneLineSummary: '작은 거인, 코트 위의 파이터 "레일라".',
            whyNotable: `
                <p><strong>"자이언트 킬러 (Giant Killer)"</strong></p>
                <p>168cm의 단신이지만, 자신보다 훨씬 크고 힘센 선수들을 잇달아 무너뜨리는 '다윗과 골리앗'의 승부를 보여줍니다. 2021년 US 오픈 결승 진출 과정에서 오사카, 케르버, 스비톨리나, 사발렌카 등 최정상급 선수들을 연파하며 전 세계에 이름을 각인시켰습니다.</p>
                <p>관중의 호응을 유도하고 매 포인트 포효하는 엄청난 파이팅 스피릿이 트레이드마크입니다.</p>
            `,
            playStyle: `
                <p><strong>"공격적인 카운터 펀처 + 빠른 템포"</strong></p>
                <p>상대의 힘에 밀리지 않기 위해 베이스라인에 딱 붙어서 라이징 볼을 처리합니다. 박자를 뺏는 빠른 타이밍의 스트로크가 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>왼손잡이 이점:</strong> 까다로운 왼손 앵글 샷과 서브로 상대를 코트 밖으로 밀어냅니다.</li>
                    <li><strong>타이밍:</strong> 공이 정점에 오르기 전에 치는 빠른 타이밍으로 상대의 준비 시간을 뺏습니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 그랜드슬램 준우승 경험이 있을 정도로 발리 센스가 뛰어납니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '투지 (Fighting Spirit)', score: 10, description: '절대 포기하지 않는 악바리 근성.' },
                { name: '스피드 (Speed)', score: 9, description: '빠른 발로 코트 전체를 커버.' },
                { name: '타이밍 (Timing)', score: 9.5, description: '박자를 뺏는 탁월한 감각.' },
                { name: '멘탈 (Mental)', score: 9, description: '큰 무대에서도 주눅 들지 않음.' },
                { name: '파워 (Power)', score: 7, description: '체격적 한계로 파워는 다소 부족.' },
                { name: '서브 (Serve)', score: 7.5, description: '슬라이스 서브를 잘 활용함.' }
            ],
            growthStory: `
                <p>에콰도르 출신 축구 선수 아버지와 필리핀계 캐나다인 어머니 사이에서 태어났습니다. 어릴 때 '너무 작아서 테니스 선수로 성공할 수 없다'는 말을 들었지만, 이를 악물고 노력해 보란 듯이 세계적인 선수로 성장했습니다.</p>
                <p>가족의 헌신적인 뒷바라지가 있었으며, 동생 비앙카 페르난데스도 테니스 선수로 활동 중입니다.</p>
            `,
            signatureMatch: {
                title: '2021 US 오픈 4강 vs 아리나 사발렌카',
                date: '2021. 09. 10',
                description: '힘 대 기술의 대결. 당시 세계 2위 사발렌카의 무시무시한 파워에 맞서, 한 박자 빠른 공격과 끈질긴 수비로 2-1 승리를 거뒀습니다. 결승 진출을 확정 짓고 코트에 주저앉아 눈물 흘리는 모습은 명장면이었습니다.'
            },
            recentForm: `
                <p><strong>"복식과 단식 병행"</strong></p>
                <p>단식 랭킹은 30위권에 머물러 있지만, 빌리 진 킹 컵에서 캐나다의 첫 우승을 이끄는 등 국가대항전에서 특히 강한 모습을 보입니다. 2024년에도 꾸준히 상승세를 타고 있습니다.</p>
            `,
            fanAppeal: `
                <p><strong>"웃음과 눈물의 아이콘"</strong></p>
                <p>경기 중에는 매서운 눈빛으로 싸우지만, 인터뷰할 때는 해맑은 미소로 팬들을 무장해제 시킵니다. 다양한 문화적 배경 덕분에 남미와 아시아 팬들에게도 큰 사랑을 받고 있습니다.</p>
            `
        }
    },
    'mirra-andreeva': {
        name: '미라 안드레예바', nameEn: 'Mirra Andreeva', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: 'WTA의 슈퍼 틴에이저. 16세의 나이에 윔블던 16강, 롤랑가로스 4강(2024)에 오르며 천재성을 입증한, 여자 테니스의 차세대 지배자 후보입니다.',
        detailedProfile: {
            oneLineSummary: 'WTA를 뒤흔든 17세 천재 소녀, "제2의 마르티나 힝기스".',
            whyNotable: `
                <p><strong>"10대의 반란을 이끄는 선두주자"</strong></p>
                <p>2023년 15세의 나이로 마드리드 오픈 16강에 오르며 혜성처럼 등장했습니다. 이후 윔블던 16강, 2024년 롤랑가로스 4강까지 진출하며 '반짝 돌풍'이 아님을 증명했습니다.</p>
                <p>어린 나이가 믿기지 않는 노련한 경기 운영과 센스는 전설 마르티나 힝기스를 연상시키며, 차기 세계 1위 후보로 손색이 없습니다.</p>
            `,
            playStyle: `
                <p><strong>"천재적인 카운터 펀처 (Smart Counter Puncher)"</strong></p>
                <p>힘으로 제압하기보다는 상대의 힘을 역이용하고, 코트의 빈 곳을 정확히 찌르는 지능적인 테니스를 구사합니다. 공을 다루는 손목 감각이 타고났습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 안드레예바의 가장 강력한 무기입니다. 다운더라인 백핸드는 이미 투어 상위권 수준입니다.</li>
                    <li><strong>경기 운영:</strong> 상대의 움직임을 미리 읽고 대처하는 능력이 돋보입니다. 드롭샷과 로브를 적재적소에 섞어 씁니다.</li>
                    <li><strong>멘탈:</strong> 지고 있는 상황에서도 쉽게 무너지지 않는 투지를 보여주지만, 가끔 감정을 주체하지 못하는 모습은 숙제입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '센스 (Tennis IQ)', score: 10, description: '타고난 길목 차단과 코스 선택.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '날카롭고 정확한 최고 무기.' },
                { name: '수비 (Defense)', score: 9, description: '끈질기게 따라가서 받아냄.' },
                { name: '잠재력 (Potential)', score: 10, description: '10년 이상 투어를 지배할 재목.' },
                { name: '경험 (Experience)', score: 4, description: '아직 투어 경험이 부족함.' },
                { name: '서브 (Serve)', score: 7, description: '파워와 다양성을 키워야 함.' }
            ],
            growthStory: `
                <p>러시아 크라스노야르스크 출신으로, 언니 에리카 안드레예바와 함께 자매 테니스 선수로 유명합니다. 프랑스 칸의 엘리트 테니스 센터에서 훈련하며 빠르게 성장했습니다.</p>
                <p>주니어 무대를 평정하고 프로에 데뷔하자마자 탑 랭커들을 연파하며 '무서운 10대'의 등장을 알렸습니다.</p>
            `,
            signatureMatch: {
                title: '2024 롤랑가로스 8강 vs 아리나 사발렌카',
                date: '2024. 06. 05',
                description: '세계를 놀라게 한 경기. 몸 상태가 좋지 않았던 사발렌카를 상대로 영리하게 코트를 넓게 사용하며 2-1 역전승을 거두고, 생애 첫 메이저 4강에 진출했습니다. 최연소 그랜드슬램 4강 기록(1997년 힝기스 이후)을 세웠습니다.'
            },
            recentForm: `
                <p><strong>"거침없는 상승세"</strong></p>
                <p>WTA 500 대회 등 투어 레벨에서도 꾸준히 성적을 내고 있습니다. 파워가 붙고 경험이 쌓인다면 2-3년 안에 메이저 우승도 가능하다는 평가입니다.</p>
            `
        }
    },
    'linda-noskova': {
        name: '린다 노스코바', nameEn: 'Linda Noskova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '체코의 10대 돌풍 주역. 2024 호주 오픈에서 세계 1위 시비옹테크를 꺾으며 파란을 일으킨 선수로, 강력한 포핸드와 침착한 경기 운영이 강점입니다.',
        detailedProfile: {
            oneLineSummary: '세계 1위를 무너뜨린 체코의 10대 돌풍, 강력한 포핸드를 가진 "자이언트 킬러".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "시비옹테크를 멈춰 세운 소녀"</div>
                    <p>2024년 호주 오픈 3회전에서 당시 무적의 포스를 자랑하던 <strong>세계 랭킹 1위 이가 시비옹테크를 2-1로 제압</strong>하며 전 세계를 깜짝 놀라게 했습니다. 19세의 나이에 메이저 8강에 오르며 체코 테니스의 황금세대를 이끌고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>군더더기 없는 깔끔한 폼에서 나오는 강력한 스트로크가 장점입니다. 특히 포핸드는 투어 최상급 파괴력을 가졌습니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇿 노스코바의 3가지 "체코 파워"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>포핸드 위너:</strong> 찬스 볼이 오면 주저 없이 코너로 찔러 넣어 득점합니다.</li>
                        <li><strong>침착함:</strong> 10대답지 않게 경기 내내 표정 변화가 거의 없습니다. 중요한 순간에도 흔들리지 않는 강심장을 가졌습니다.</li>
                        <li><strong>양손 백핸드:</strong> 백핸드 또한 매우 견고하여 랠리 싸움에서 밀리지 않습니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '포핸드 (Forehand)', score: 9.5, description: '주무기.' },
                { name: '멘탈 (Mental)', score: 9, description: '나이에 비해 매우 성숙함.' },
                { name: '파워 (Power)', score: 9, description: '묵직한 구질.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적.' },
                { name: '서브 (Serve)', score: 8, description: '준수함.' },
                { name: '이동 (Movement)', score: 8, description: '나쁘지 않음.' }
            ],
            growthStory: `
                <p>체코의 작은 마을에서 태어났습니다. 2021년 프랑스 오픈 주니어 챔피언 출신으로, 엘리트 코스를 밟으며 성장했습니다. 성인 무대 데뷔 직후부터 빠른 속도로 랭킹을 올리고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 3회전 vs 이가 시비옹테크',
                date: '2024. 01. 20',
                description: '그녀의 인생을 바꾼 경기. 1세트를 내주고도 포기하지 않고 끈질기게 따라붙어 역전승을 일궈냈습니다. 여제를 무너뜨린 그녀의 포핸드는 압권이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧊 "아이스 프린세스"</div>
                    <p>경기 중 감정을 거의 드러내지 않는 차가운 매력이 있습니다. 하지만 경기 후에는 수줍은 미소를 보여주는 반전 매력의 소유자입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 20 진입 목표"</strong></p>
                <p>호주 오픈 8강 이후에도 꾸준히 성적을 내며 세계 랭킹 20위권 진입을 눈앞에 두고 있습니다. 차세대 그랜드슬램 우승 후보 중 한 명입니다.</p>
            `,
            faq: [
                {
                    question: '체코에는 왜 테니스 잘하는 선수가 많나요?',
                    answer: '체코는 전통적으로 테니스 인프라와 코칭 시스템이 매우 잘 갖춰져 있습니다. 나브라틸로바, 크비토바 등 전설적인 선배들을 보며 자라는 문화도 큰 몫을 합니다.'
                }
            ]
        }
    },
    'marta-kostyuk': {
        name: '마르타 코스튜크', nameEn: 'Marta Kostyuk', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나의 차세대 에이스. 주니어 시절부터 두각을 나타냈으며, 공격적인 플레이와 감정을 솔직하게 드러내는 스타성으로 주목받고 있습니다.',
        detailedProfile: {
            oneLineSummary: '우크라이나의 자존심, 코트 위에서 가장 뜨거운 열정을 보여주는 "파이터".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 "조국을 위해 뛰는 전사"</div>
                    <p>전쟁 중인 우크라이나를 알리기 위해 누구보다 열심히 뛰는 선수입니다. 2024년 호주 오픈 8강, 샌디에이고 오픈 준우승, 슈투트가르트 오픈 준우승 등 커리어 하이 시즌을 보내며 세계 Top 20에 진입했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"올라운드 어그레시버"</strong></p>
                <p>코트 어디서든 공격할 수 있는 능력을 갖췄습니다. 네트 플레이를 즐기며, 아크로바틱한 점프 스매시 등 화려한 플레이를 보여줍니다.</p>
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 코스튜크의 3가지 "열정"</div>
                    <ul class="list-disc pl-5 my-0 space-y-2">
                        <li><strong>유연성:</strong> 체조 선수였던 어머니의 영향으로 유연성이 뛰어나 어려운 공도 잘 받아냅니다.</li>
                        <li><strong>다양성:</strong> 드롭샷, 로브, 발리 등 기술적인 샷을 자유자재로 구사하여 상대를 괴롭힙니다.</li>
                        <li><strong>파이팅:</strong> 매 포인트 간절하게 소리치며 자신을 독려합니다. 그녀의 에너지는 관중을 압도합니다.</li>
                    </ul>
                </div>
            `,
            hexagonStats: [
                { name: '운동신경 (Athleticism)', score: 9.5, description: '탄력이 매우 좋음.' },
                { name: '멘탈 (Mental)', score: 9, description: '애국심으로 무장.' },
                { name: '기술 (Technique)', score: 9, description: '다양한 샷 구사.' },
                { name: '공격성 (Aggression)', score: 9, description: '물러서지 않음.' },
                { name: '서브 (Serve)', score: 7.5, description: '기복이 좀 있음.' },
                { name: '안정성 (Stability)', score: 7, description: '감정에 따라 흔들림.' }
            ],
            growthStory: `
                <p>키이우 출신입니다. 어머니 탈리나 베이코는 전직 프로 테니스 선수였습니다. 어릴 때부터 '천재 소녀'로 불리며 2017 호주 오픈 주니어 우승을 차지했습니다. 프로 전향 후 꾸준히 성장하여 우크라이나 테니스의 간판이 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2024 슈투트가르트 오픈 4강 vs 코코 고프',
                date: '2024. 04. 20',
                description: '혈투 끝의 승리. 세계 랭킹 3위 코코 고프를 상대로 엄청난 체력전 끝에 승리하며 결승에 진출했습니다. 그녀의 투지가 빛난 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "패션 아이콘"</div>
                    <p>윌슨(Wilson)에서 그녀를 위해 특별 제작한 웨딩드레스 스타일의 테니스 의상을 입고 나와 큰 화제가 되었습니다. 뛰어난 패션 감각과 스타성으로 많은 팔로워를 보유하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"커리어 하이"</strong></p>
                <p>2024년 최고의 시즌을 보내고 있습니다. 그랜드슬램에서도 상위 라운드에 꾸준히 진출하며 세계 20위권 내에 안정적으로 안착했습니다.</p>
            `,
            faq: [
                {
                    question: '러시아 선수와 악수를 안 하나요?',
                    answer: '네, 러시아의 우크라이나 침공 이후 러시아 및 벨라루스 선수들과 경기 후 악수를 하지 않고 있습니다. 전쟁 반대의 메시지를 전하기 위해서입니다.'
                }
            ]
        }
    },

    // --- Added Male Players (Roadmap Completion) ---
    'shang-juncheng': {
        name: '상 쥔청', nameEn: 'Shang Juncheng', country: 'China', countryFlag: '🇨🇳', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '중국의 10대 슈퍼 루키. "Jerry"라는 애칭으로 불리며, 중국 남자 선수 최초로 ATP 투어 우승(2024 청두)을 차지한 역사적인 인물입니다.',
        detailedProfile: {
            oneLineSummary: '중국 남자 테니스의 역사를 새로 쓰는 10대 "원더 키드".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇳 "만리장성을 넘은 소년"</div>
                    <p>상 쥔청(제리)은 중국 남자 테니스 역사상 <strong>최초로 ATP 투어 타이틀(2024 청두 오픈)</strong>을 획득한 선수입니다. 2005년생의 어린 나이에 이미 세계 50위권에 진입하며 아시아 테니스의 차세대 간판으로 떠올랐습니다.</p>
                </div>
                <p>전직 축구 선수 아버지와 탁구 세계 챔피언 어머니의 스포츠 DNA를 물려받아, 탁월한 운동 신경과 빠른 발을 자랑합니다.</p>
            `,
            playStyle: `
                <p><strong>"총알 탄 사나이 (Speedy Lefty)"</strong></p>
                <p>왼손잡이 특유의 각도 깊은 포핸드와, 코트 구석구석을 누비는 엄청난 스피드가 장점입니다. 체구는 크지 않지만 다부진 체격에서 나오는 임팩트가 강합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 투어 최상위권의 발 빠름을 자랑합니다. 웬만한 공은 다 건져냅니다.</li>
                    <li><strong>포핸드:</strong> 왼손잡이의 이점을 살려 상대를 코트 밖으로 몰아내는 크로스 코트 샷이 일품입니다.</li>
                    <li><strong>멘탈:</strong> 어린 나이답지 않게 경기 중 평정심을 잘 유지하며, 위기 상황에서도 과감한 샷을 날립니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '코트 커버리지가 환상적임.' },
                { name: '잠재력 (Potential)', score: 10, description: '아시아 최초 Top 10 진입 가능성.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '날카롭고 정확함.' },
                { name: '서브 (Serve)', score: 7.5, description: '파워 보강이 필요한 부분.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '침착하고 대담함.' },
                { name: '체력 (Stamina)', score: 8.5, description: '지치지 않는 엔진.' }
            ],
            growthStory: `
                <p>베이징 출신으로 5세 때 테니스를 시작했습니다. 미국 플로리다의 IMG 아카데미에서 훈련하며 주니어 세계 랭킹 1위까지 올랐습니다.</p>
                <p>프로 전향 후 무서운 속도로 랭킹을 끌어올렸고, 2024년 청두 오픈 결승에서 로렌초 무세티를 꺾고 우승하며 중국 테니스의 새 시대를 열었습니다.</p>
            `,
            signatureMatch: {
                title: '2024 청두 오픈 결승 vs 로렌초 무세티',
                date: '2024. 09. 24',
                description: '역사를 쓴 날. 이탈리아의 강호 무세티를 상대로 2-0 완승을 거두며 생애 첫 ATP 투어 우승 트로피를 들어 올렸습니다. 홈 관중들의 열광적인 응원 속에 중국 테니스의 영웅이 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐭 "Jerry"</div>
                    <p>어릴 때 즐겨 보던 '톰과 제리'에서 따온 닉네임 "Jerry"로 불립니다. 귀여운 외모와 항상 웃는 얼굴, 그리고 예의 바른 인터뷰 태도로 전 세계 팬들에게 사랑받고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"거침없는 하이킥"</strong></p>
                <p>US 오픈 3회전 진출 등 메이저 대회에서도 성적을 내기 시작했습니다. 아직 신체적으로 성장 중이기에 파워만 더 붙으면 더욱 위협적인 선수가 될 것입니다.</p>
            `,
            faq: [
                {
                    question: '상 쥔청의 별명은 무엇인가요?',
                    answer: '그의 영어 이름이자 애칭인 "제리(Jerry)"입니다. 어릴 때 좋아했던 만화 캐릭터에서 따왔다고 합니다.'
                },
                {
                    question: '상 쥔청은 왼손잡이인가요?',
                    answer: '네, 왼손잡이(Left-handed)입니다. 특히 포핸드 크로스 샷에서 왼손잡이의 이점을 잘 활용합니다.'
                },
                {
                    question: '상 쥔청의 부모님은 누구인가요?',
                    answer: '아버지는 전 중국 국가대표 축구 선수 상 이(Shang Yi)이고, 어머니는 탁구 세계 챔피언 출신인 우 나(Wu Na)입니다.'
                }
            ]
        }
    },
    'duje-ajdukovic': {
        name: '두예 아이두코비치', nameEn: 'Duje Ajdukovic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '크로아티아의 숨은 진주. 2024년 투어 무대에서 혜성처럼 등장해 나달과 대등한 경기를 펼치는 등 강력한 인상을 남긴 유망주입니다.',
        detailedProfile: {
            oneLineSummary: '크로아티아의 숨은 진주, 강력한 백핸드를 장착한 차세대 주자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇷 "포스트 칠리치?"</div>
                    <p>2024년 바스타드 오픈(ATP 250)에서 예선을 거쳐 4강까지 진출하는 파란을 일으켰습니다. 특히 4강에서 '흙신' <strong>라파엘 나달</strong>을 상대로 첫 세트를 따내고 풀세트 접전을 벌이며 전 세계 테니스 팬들에게 자신의 이름을 각인시켰습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>크로아티아 선수들 특유의 탄탄한 기본기에 공격성을 더했습니다. 베이스라인 뒤로 물러나기보다는 앞에서 공을 처리하려 합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그의 가장 큰 무기입니다. 투핸드 백핸드로 뿜어내는 다운더라인 위너는 일품입니다.</li>
                    <li><strong>플랫 성 타구:</strong> 공을 두껍게 맞추어 낮고 빠르게 보내는 스트로크를 구사합니다.</li>
                    <li><strong>서브:</strong> 188cm의 키에서 나오는 서브도 준수하여 게임을 쉽게 풀어갑니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 9, description: '가장 자신 있는 득점 루트.' },
                { name: '공격성 (Aggression)', score: 8.5, description: '물러서지 않는 대담함.' },
                { name: '서브 (Serve)', score: 8, description: '안정적인 무기.' },
                { name: '잠재력 (Potential)', score: 8.5, description: '경험이 쌓이면 무서워질 선수.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '큰 경기 경험이 더 필요함.' },
                { name: '네트 (Net)', score: 7, description: '아직은 다듬어야 할 부분.' }
            ],
            growthStory: `
                <p>스플리트 출신으로 5세 때 테니스를 시작했습니다. 주로 챌린저 투어에서 활동하며 실력을 쌓았고, 2024년을 기점으로 ATP 투어 레벨로 도약하고 있습니다.</p>
                <p>이반 류비치치, 마린 칠리치 등 크로아티아 레전드들의 계보를 이을 재목으로 평가받습니다.</p>
            `,
            signatureMatch: {
                title: '2024 바스타드 오픈 4강 vs 라파엘 나달',
                date: '2024. 07. 20',
                description: '비록 패배했지만 빛난 경기. 나달을 상대로 첫 세트를 6-4로 가져오며 "이 선수는 누구인가?"라는 궁금증을 자아냈습니다. 3세트까지 가는 혈투 끝에 패했지만, 경기 후 나달에게 찬사를 받았습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "패기 넘치는 언더독"</div>
                    <p>자신보다 훨씬 유명한 톱 랭커들을 상대로도 전혀 주눅 들지 않고 닥공(닥치고 공격)을 펼치는 모습이 팬들에게 쾌감을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 100 안착 도전"</strong></p>
                <p>챌린저와 투어를 오가며 랭킹을 끌어올리고 있습니다. 기복을 줄이는 것이 과제이지만, 폭발력만큼은 증명되었습니다.</p>
            `,
            faq: [
                {
                    question: '두예 아이두코비치는 어느 나라 선수인가요?',
                    answer: '크로아티아(Croatia) 국적의 선수입니다. 스플리트 출신입니다.'
                },
                {
                    question: '아이두코비치의 주무기는 무엇인가요?',
                    answer: '강력하고 정확한 투핸드 백핸드입니다. 특히 백핸드 다운더라인 샷이 위협적입니다.'
                }
            ]
        }
    },
    'dominic-thiem': {
        name: '도미니크 팀', nameEn: 'Dominic Thiem', country: 'Austria', countryFlag: '🇦🇹', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '클레이 코트의 황태자이자 US 오픈 챔피언. 빅3의 아성을 무너뜨린 파워 테니스의 일인자였으나, 손목 부상으로 아쉽게 2024년 은퇴를 선언했습니다.',
        detailedProfile: {
            oneLineSummary: '\'빅3\'의 아성을 무너뜨렸던 "클레이의 황태자", 부상을 딛고 작별을 고한 챔피언.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👑 "빅3의 진정한 대항마"</div>
                    <p>도미니크 팀은 페더러, 나달, 조코비치가 지배하던 시절, 그들과 정면으로 맞서 그랜드슬램(2020 US 오픈)을 쟁취한 몇 안 되는 선수입니다.</p>
                    <p>차기 '클레이의 제왕'으로 불릴 만큼 클레이 코트에서 강력했으며, 롤랑가로스 준우승만 두 번 차지했습니다. 2024년, 손목 부상의 여파로 아쉬운 은퇴를 결정했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워 베이스라이너 (Power Baseliner)"</strong></p>
                <p>베이스라인 뒤쪽에서 온몸의 힘을 실어 때리는 풀 스윙 샷이 트레이드마크입니다. 그의 공은 엄청난 회전량과 묵직함을 동시에 가집니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>원핸드 백핸드:</strong> 테니스 역사상 가장 파괴적인 원핸드 백핸드 중 하나입니다. 한 손으로 치면서도 양손 백핸드 이상의 파워를 냅니다.</li>
                    <li><strong>헤비 탑스핀:</strong> 나달 다음으로 강력한 탑스핀을 구사하여 상대를 코트 뒤로 밀어냅니다.</li>
                    <li><strong>활동량:</strong> 전성기 시절에는 지치지 않는 체력과 풋워크로 코트 전체를 커버했습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '투어 최고 수준의 스트로크 파워.' },
                { name: '스핀 (Spin)', score: 10, description: '공이 바운드 후 폭발적으로 튀어 오름.' },
                { name: '체력 (Stamina)', score: 9, description: '전성기 시절 강철 체력.' },
                { name: '백핸드 (Backhand)', score: 9.5, description: '가장 아름답고 강력한 무기.' },
                { name: '서브 (Serve)', score: 8.5, description: '킥 서브가 위력적.' },
                { name: '부상 (Injury)', score: 3, description: '손목 부상이 커리어의 발목을 잡음.' }
            ],
            growthStory: `
                <p>오스트리아의 테니스 가족에서 태어났습니다. 귄터 브레스닉 코치의 지도 하에 어린 시절 양손 백핸드에서 원핸드 백핸드로 전향했는데, 이것이 신의 한 수가 되었습니다.</p>
                <p>꾸준한 성장으로 세계 랭킹 3위까지 올랐으나, 2021년 마요르카 오픈에서 입은 손목 부상이 장기화되며 기량을 회복하지 못하고 은퇴를 결심하게 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2020 US 오픈 결승 vs 알렉산더 즈베레프',
                date: '2020. 09. 13',
                description: '인생 최고의 순간. 첫 두 세트를 먼저 내주고 패색이 짙었으나, 기적적인 대역전극을 펼치며 3-2로 승리했습니다. 오픈 시대 이후 US 오픈 결승에서 0-2를 뒤집은 최초의 기록이며, 그의 유일한 그랜드슬램 타이틀이 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👋 "굿바이 도미"</div>
                    <p>코트 위에서의 성실함과 코트 밖에서의 겸손함, 그리고 환경 문제에 대한 관심 등으로 많은 팬들의 사랑을 받았습니다. 그의 은퇴 소식에 전 세계 팬들이 아쉬움과 응원을 보내고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"라스트 댄스"</strong></p>
                <p>2024년 시즌을 끝으로 은퇴를 선언했습니다. 고국 오스트리아 비엔나 오픈 등에서 고별전을 치르며 팬들과 마지막 인사를 나누었습니다. 비록 몸은 예전 같지 않지만, 그의 샷은 여전히 아름답습니다.</p>
            `,
            faq: [
                {
                    question: '도미니크 팀은 왜 은퇴하나요?',
                    answer: '2021년에 입은 오른쪽 손목 부상이 완치되지 않아 예전의 강력한 포핸드를 구사하기 어려워졌고, 이로 인한 동기 부여 저하가 주된 이유입니다.'
                },
                {
                    question: '도미니크 팀의 그랜드슬램 우승 기록은?',
                    answer: '네, 2020년 US 오픈에서 우승하며 생애 첫 그랜드슬램 타이틀을 획득했습니다.'
                },
                {
                    question: '도미니크 팀의 별명은?',
                    answer: '\'Dominator(지배자)\' 또는 \'Prince of Clay(클레이의 황태자)\'라고 불립니다.'
                }
            ]
        }
    },
    'fabio-fognini': {
        name: '파비오 포니니', nameEn: 'Fabio Fognini', country: 'Italy', countryFlag: '🇮🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 악동이자 천재. 코트 위를 산책하듯 걷다가 갑자기 터뜨리는 레이저 같은 위너가 일품이며, 몬테카를로 마스터스 우승자입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 악동이자 예술가, 기분 내키면 누구도 못 말리는 "Mr. Unpredictable".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎭 "게으른 천재?"</div>
                    <p>파비오 포니니는 테니스 역사상 가장 예측 불가능한 선수 중 하나입니다. 경기 중 무심한 듯 걸어 다니다가도, 천재적인 손감각으로 믿을 수 없는 위너를 만들어냅니다.</p>
                    <p>2019년 몬테카를로 마스터스 4강에서 <strong>나달을 압살</strong>하고 우승을 차지했을 때, 그는 '신이 내린 재능'을 보여주었습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 / 샷 메이커"</strong></p>
                <p>빠른 발을 가지고 있지만 굳이 많이 뛰지 않습니다. 대신 반 박자 빠른 타이밍과 천부적인 손목 감각으로 공의 방향만 살짝 바꿔 상대를 무력화시킵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>손목 감각:</strong> 투어 최고 수준입니다. 힘들이지 않고 툭 치는 것 같은데 공은 총알처럼 날아갑니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드는 그의 시그니처 샷입니다. 예측하기 힘든 타이밍에 터져 나옵니다.</li>
                    <li><strong>멘탈:</strong> 그의 최대 약점이자 매력입니다. 심판과의 언쟁, 라켓 투척은 일상이며, 기분이 좋지 않으면 경기를 포기하는 듯한 모습도 보입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '재능 (Talent)', score: 10, description: '노력으로 만들 수 없는 천재성.' },
                { name: '스피드 (Speed)', score: 8, description: '전성기 땐 매우 빨랐음.' },
                { name: '멘탈 (Mental)', score: 4, description: '스스로 무너지는 경우가 많음.' },
                { name: '기술 (Technique)', score: 9.5, description: '모든 샷을 자유자재로 구사.' },
                { name: '서브 (Serve)', score: 6.5, description: '키(178cm)의 한계로 평범함.' },
                { name: '쇼맨십 (Showmanship)', score: 10, description: '관중을 들었다 놨다 함.' }
            ],
            growthStory: `
                <p>이탈리아 산레모 출신입니다. 축구를 매우 좋아했지만 테니스를 선택했습니다. 2015년 호주 오픈 복식 우승을 차지하는 등 복식에서도 뛰어난 활약을 펼쳤습니다. 2019년 32세의 나이에 생애 첫 마스터스 우승과 Top 10 진입을 동시에 이뤄냈습니다.</p>
            `,
            signatureMatch: {
                title: '2019 몬테카를로 마스터스 4강 vs 라파엘 나달',
                date: '2019. 04. 20',
                description: '클레이의 황제 나달을 그의 안방에서 농락한 경기. 바람이 많이 부는 악조건 속에서도 포니니는 신들린듯한 샷 감각으로 나달을 6-4, 6-2로 완파했습니다. 나달이 클레이 코트에서 당한 가장 충격적인 패배 중 하나로 꼽힙니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💋 "플라비아의 남편"</div>
                    <p>US 오픈 챔피언 출신인 플라비아 페네타의 남편으로도 유명합니다. 아내가 관중석에 있으면 조금 더 얌전해진다는 소문이 있습니다. 코트 위의 악동 이미지와 달리 가정적인 아빠의 모습도 보여줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"황혼기의 불꽃"</strong></p>
                <p>랭킹은 많이 떨어졌지만 여전히 투어 무대에서 경쟁력을 보여주고 있습니다. 컨디션이 좋은 날에는 톱 랭커들도 긴장하게 만드는 도깨비 같은 선수입니다.</p>
            `,
            faq: [
                {
                    question: '포니니의 아내는 누구인가요?',
                    answer: '2015 US 오픈 여자 단식 우승자인 이탈리아의 플라비아 페네타(Flavia Pennetta)입니다.'
                },
                {
                    question: '포니니는 왜 악동이라고 불리나요?',
                    answer: '심판에게 거친 항의를 하거나, 경기 중 욕설, 라켓 부수기 등 돌출 행동을 자주 해서 벌금을 많이 내기로 유명하기 때문입니다.'
                }
            ]
        }
    },
    'reilly-opelka': {
        name: '라일리 오펠카', nameEn: 'Reilly Opelka', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '211cm의 초장신 서브 봇. 2층에서 내려꽂는 듯한 압도적인 서브와 강력한 포핸드로 상대를 무력화시키는 파워 테니스의 정점입니다.',
        detailedProfile: {
            oneLineSummary: '211cm의 거인이 뿜어내는 "서브 폭격기", 2층에서 내려꽂는 파워 테니스.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗼 "걸어 다니는 전봇대"</div>
                    <p>공식 신장 <strong>211cm(6피트 11인치)</strong>로, 이보 카를로비치와 함께 ATP 투어 역사상 최장신 선수입니다. 그의 라켓에서 뿜어져 나오는 서브는 알고도 못 막는 수준이며, 높은 타점에서 내리꽂는 샷은 상대에게 공포를 줍니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"빅 서버 (Big Server)"</strong></p>
                <p>전형적인 '서브 앤 포핸드' 스타일입니다. 랠리를 오래 끌고 가는 것은 그에게 불리하므로, 3구 안에 포인트를 끝내려 합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 220km/h를 가볍게 넘기는 속도뿐만 아니라, 타점이 워낙 높아 각도가 예리합니다. 킥 서브는 사람 키보다 훨씬 높게 튀어 오릅니다.</li>
                    <li><strong>포핸드:</strong> 서브 후 짧게 넘어온 공을 마무리하는 결정력이 좋습니다.</li>
                    <li><strong>움직임:</strong> 큰 키 탓에 좌우 움직임은 둔한 편이나, 긴 리치로 어느 정도 커버합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '언터쳐블. 게임의 지배자.' },
                { name: '파워 (Power)', score: 10, description: '순수 힘은 최강.' },
                { name: '스피드 (Speed)', score: 5, description: '약점이 명확함.' },
                { name: '리턴 (Return)', score: 5, description: '브레이크하기 힘들어함.' },
                { name: '네트 (Net)', score: 7, description: '서브 후 대쉬가 위협적.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '타이브레이크 집중력이 좋음.' }
            ],
            growthStory: `
                <p>미국 플로리다 출신입니다. 어릴 때부터 남다른 발육으로 농구를 할 뻔했으나 테니스를 선택했습니다. 2015년 윔블던 주니어 우승을 차지하며 일찌감치 차세대 거포로 주목받았습니다.</p>
                <p>고관절 수술 등으로 긴 공백기가 있었으나, 2024년 복귀하여 다시 코트 위에 섰습니다.</p>
            `,
            signatureMatch: {
                title: '2021 토론토 마스터스 결승 진출',
                date: '2021. 08. 15',
                description: '그의 잠재력이 폭발한 대회. 키리오스, 칠리치, 바우티스타 아굿, 치치파스 등 쟁쟁한 선수들을 모두 제압하고 결승에 올랐습니다. 비록 메드베데프에게 패했지만, 마스터스 결승 무대를 밟으며 자신의 가치를 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "패션과 예술을 사랑하는 거인"</div>
                    <p>투어 내에서도 독특한 패션 센스와 예술에 대한 지식으로 유명합니다. 인터뷰에서 테니스보다 갤러리 방문 이야기를 더 좋아할 때도 있습니다. 솔직하고 거침없는 입담도 그의 매력입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"돌아온 거인"</strong></p>
                <p>2년 가까운 공백을 깨고 2024년 투어에 복귀했습니다. 아직 랭킹은 낮지만, 그의 서브가 살아있는 한 언제든지 상위 랭커를 위협할 수 있는 존재입니다.</p>
            `,
            faq: [
                {
                    question: '오펠카의 키는 정확히 얼마인가요?',
                    answer: '211cm (6피트 11인치)입니다. 이는 ATP 투어 역사상 최장신 기록(이보 카를로비치와 동률)입니다.'
                },
                {
                    question: '오펠카의 서브 속도는 얼마나 되나요?',
                    answer: '최고 시속 230km 이상을 기록하며, 평균 첫 서브 속도도 210km/h를 상회합니다.'
                }
            ]
        }
    },
    'marin-cilic': {
        name: '마린 칠리치', nameEn: 'Marin Cilic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2014 US 오픈 챔피언. 빅3 시대에 그랜드슬램을 차지한 몇 안 되는 선수로, 강력한 서브와 플랫성 포핸드로 한 시대를 풍미한 크로아티아의 영웅입니다.',
        detailedProfile: {
            oneLineSummary: '빅3 시대에 그랜드슬램을 쟁취한 크로아티아의 영웅.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "빅3의 틈새를 뚫은 챔피언"</div>
                    <p>마린 칠리치는 페더러, 나달, 조코비치가 독식하던 2010년대에 <strong>2014 US 오픈 우승</strong>을 차지하며 '인간계 최강'의 면모를 보여주었습니다. 호주 오픈(2018)과 윔블던(2017)에서도 결승에 오르며 모든 코트에서 강한 올라운더임을 증명했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>198cm의 큰 키를 활용한 타점 높은 스트로크가 강점입니다. 스핀보다는 플랫하게 깔리는 공을 구사하여 상대의 시간을 빼앗습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 그의 테니스에서 가장 중요한 기반입니다. 컨디션 좋은 날은 에이스를 양산합니다.</li>
                    <li><strong>포핸드:</strong> 쭉 뻗어나가는 플랫 포핸드는 코트 깊숙이 꽂히며 위너를 만들어냅니다.</li>
                    <li><strong>멘탈:</strong> 중요한 순간에 흔들리는 '새가슴' 논란도 있었으나, 베테랑이 되며 많이 극복했습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '전성기 시절 최상급.' },
                { name: '포핸드 (Forehand)', score: 9, description: '강력한 무기.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적이고 견고함.' },
                { name: '경험 (Experience)', score: 10, description: '그랜드슬램 우승자의 연륜.' },
                { name: '스피드 (Speed)', score: 7, description: '키에 비해 나쁘지 않음.' },
                { name: '체력 (Stamina)', score: 8, description: '5세트 접전도 즐김.' }
            ],
            growthStory: `
                <p>크로아티아 메주고리예 출신으로, 고란 이바니세비치 코치의 지도를 받으며 서브와 공격력을 다듬었습니다. 2014년 US 오픈 4강에서 페더러, 결승에서 니시코리를 꺾고 우승하며 크로아티아의 국민 영웅이 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2014 US 오픈 결승 vs 니시코리 케이',
                date: '2014. 09. 08',
                description: '생애 최고의 날. 아시아 최초로 메이저 결승에 오른 니시코리를 상대로 압도적인 경기력을 보여주며 3-0 완승을 거뒀습니다. 서브와 스트로크 모든 면에서 완벽했던 경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "미스터 나이스 가이"</div>
                    <p>코트 밖에서는 매우 신사적이고 매너가 좋아 동료 선수들 사이에서 평판이 좋습니다. 자선 재단을 설립하여 아이들을 돕는 활동도 활발히 하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"베테랑의 품격"</strong></p>
                <p>무릎 수술 등으로 긴 재활을 거쳤으나, 2024년 항저우 오픈에서 우승을 차지하며 "클래스는 영원하다"는 것을 증명했습니다. 역대 최저 랭킹(777위) 우승 기록을 세우며 인간 승리의 드라마를 썼습니다.</p>
            `,
            faq: [
                {
                    question: '마린 칠리치의 국적은?',
                    answer: '크로아티아(Croatia)입니다.'
                },
                {
                    question: '칠리치의 주요 우승 기록은?',
                    answer: '가장 큰 우승은 2014년 US 오픈입니다. 그 외에도 2016년 신시내티 마스터스 우승 등 통산 20회 이상의 투어 우승 기록이 있습니다.'
                }
            ]
        }
    },
    'milos-raonic': {
        name: '밀로스 라오니치', nameEn: 'Milos Raonic', country: 'Canada', countryFlag: '🇨🇦', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '캐나다의 미사일맨. 윔블던 결승에 진출했던 최초의 캐나다 남성 선수로, 스마트한 경기 운영과 강력한 서브의 조화가 돋보입니다.',
        detailedProfile: {
            oneLineSummary: '"캐나다산 미사일", 스마트한 경기 운영과 강력한 서브의 조화.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍁 "캐나다 테니스의 개척자"</div>
                    <p>밀로스 라오니치는 캐나다 남자 선수 최초로 그랜드슬램(2016 윔블던) 결승에 진출하며 캐나다 테니스의 황금기를 연 선구자입니다. 항상 냉철하고 분석적인 태도로 경기에 임해 '교수님' 같은 느낌을 주기도 합니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"서브 앤 포핸드 (Serve & Forehand)"</strong></p>
                <p>전형적인 빅 서버이지만, 단순히 힘으로만 밀어붙이지 않고 다양한 구질과 코스를 활용하는 스마트한 플레이를 합니다. 네트 플레이도 수준급입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 역사상 최고 수준의 서브를 가졌습니다. 속도뿐만 아니라 코너를 찌르는 정확도가 예술입니다.</li>
                    <li><strong>인사이드-아웃 포핸드:</strong> 서브 후 돌아서서 치는 역크로스 포핸드는 그의 주요 득점원입니다.</li>
                    <li><strong>유리 몸:</strong> 잦은 부상이 항상 그의 발목을 잡았습니다. 건강할 때의 라오니치는 Top 5 레벨입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '설명이 필요 없는 월드 클래스.' },
                { name: '포핸드 (Forehand)', score: 9, description: '파괴력 발군.' },
                { name: '네트 (Net)', score: 8, description: '발리 감각이 좋음.' },
                { name: '스피드 (Speed)', score: 6, description: '큰 덩치치고는 기민함.' },
                { name: '내구성을 (Durability)', score: 4, description: '부상이 너무 많음.' },
                { name: '지능 (IQ)', score: 9, description: '철저한 분석과 전략.' }
            ],
            growthStory: `
                <p>몬테네그로에서 태어나 3세 때 캐나다로 이민 왔습니다. 수학에 재능이 있어 대학 진학을 고려했으나 프로 테니스 선수의 길을 택했습니다. 2010년대 중반 세계 랭킹 3위까지 오르며 전성기를 구가했습니다.</p>
            `,
            signatureMatch: {
                title: '2016 윔블던 4강 vs 로저 페더러',
                date: '2016. 07. 08',
                description: '황제 페더러를 윔블던 센터 코트에서 꺾은 역사적인 날. 5세트 접전 끝에 페더러의 꿈을 저지하고 결승에 진출했습니다. 그의 서브와 멘탈이 빛을 발한 최고의 명승부였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😐 "무표정의 미학"</div>
                    <p>경기 중 감정 표현이 거의 없고, 한쪽 팔에만 착용하는 암 슬리브가 트레이드마크입니다. 냉철한 승부사의 모습이 매력적입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"간헐적 출전"</strong></p>
                <p>은퇴설이 돌았으나 2023-2024년 틈틈이 대회에 출전하고 있습니다. 몸 상태가 온전치 않아 연속 출전은 어렵지만, 나오면 여전히 위협적인 서브를 보여줍니다.</p>
            `,
            faq: [
                {
                    question: '라오니치의 최고 랭킹은?',
                    answer: '세계 랭킹 3위(2016년)까지 올랐었습니다.'
                },
                {
                    question: '라오니치는 은퇴했나요?',
                    answer: '아직 공식 은퇴하지 않았습니다. 부상 관리 차원에서 선택적으로 대회에 출전하고 있습니다.'
                }
            ]
        }
    },
    'nick-kyrgios': {
        name: '닉 키리오스', nameEn: 'Nick Kyrgios', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 악동이자 천재. 흥행 보증수표이자 트러블 메이커로, 맘만 먹으면 누구도 막을 수 없는 압도적인 재능을 가졌습니다.',
        detailedProfile: {
            oneLineSummary: '테니스 코트가 좁은 "악마의 재능", 흥행 보증수표이자 트러블 메이커.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎟️ "박스 오피스 (Box Office)"</div>
                    <p>닉 키리오스는 현존하는 테니스 선수 중 가장 스타성이 뛰어난 인물입니다. 그의 경기에는 항상 드라마, 논란, 그리고 마법 같은 샷이 공존합니다. 2022년 윔블던 준우승을 차지하며 재능을 증명했습니다.</p>
                    <p>나달, 페더러, 조코비치를 상대로 첫 맞대결에서 모두 승리를 거둔 유일한 선수이기도 합니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"예측 불허 (Unpredictable)"</strong></p>
                <p>교과서적인 폼과는 거리가 멀지만, 천부적인 감각으로 공을 때려 넣습니다. 서브 모션은 간결하지만 위력은 투어 최고입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 빠르고 정확하며 읽기 어렵습니다. 중요할 때 터지는 세컨드 서브 에이스는 그의 전매특허입니다.</li>
                    <li><strong>트릭 샷:</strong> 다리 사이로 치는 트위너, 노 룩(No-look) 샷, 언더암 서브 등 관중을 즐겁게 하는 쇼맨십 플레이를 즐깁니다.</li>
                    <li><strong>멘탈:</strong> 관중, 심판, 상대 선수, 심지어 자신의 박스(코치진)와도 싸웁니다. 멘탈이 나가는 순간 경기를 던지기도 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '재능 (Talent)', score: 10, description: '신이 내린 손목 감각.' },
                { name: '서브 (Serve)', score: 10, description: '역대급 서브 능력.' },
                { name: '멘탈 (Mental)', score: 3, description: '시한폭탄.' },
                { name: '파워 (Power)', score: 9, description: '가볍게 쳐도 묵직함.' },
                { name: '쇼맨십 (Showmanship)', score: 10, description: '엔터테이너.' },
                { name: '체력 (Stamina)', score: 6, description: '긴 랠리를 싫어함.' }
            ],
            growthStory: `
                <p>호주 캔버라 출신으로 그리스계 아버지와 말레이시아계 어머니 사이에서 태어났습니다. 농구를 더 좋아했지만 테니스에 더 재능이 있어 선수가 되었습니다. 주니어 시절부터 악동으로 유명했지만 실력만큼은 진짜였습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 8강 vs 크리스티안 가린',
                date: '2022. 07. 06',
                description: '그토록 원하던 그랜드슬램 4강 진출. 평소와 달리(비교적) 진지하고 집중력 있는 모습으로 3-0 완승을 거뒀습니다. 이후 나달의 기권으로 결승까지 직행했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 "솔직함의 미학"</div>
                    <p>가식 없는 인터뷰와 거침없는 행동이 팬들에게 카타르시스를 줍니다. 팟캐스트 진행이나 해설가로서도 재능을 보이며 '입담'을 과시하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"장기 휴업 중"</strong></p>
                <p>무릎 부상 등으로 2023년부터 투어 활동을 거의 중단했습니다. 재활에 매진하고 있으며, 2025년 호주 오픈 복귀를 목표로 하고 있습니다. 팬들은 코트 위의 그를 간절히 기다립니다.</p>
            `,
            faq: [
                {
                    question: '키리오스는 왜 언더암 서브를 하나요?',
                    answer: '상대가 베이스라인 뒤로 너무 물러나 있을 때 허를 찌르기 위해서, 또는 상대의 멘탈을 흔들기 위한 전략으로 사용합니다.'
                },
                {
                    question: '키리오스의 그랜드슬램 최고 성적은?',
                    answer: '2022년 윔블던 준우승(단식)과 2022년 호주 오픈 우승(복식, 파트너: 코키나키스)입니다.'
                }
            ]
        }
    },
    'richard-gasquet': {
        name: '리샤르 가스케', nameEn: 'Richard Gasquet', country: 'France', countryFlag: '🇫🇷', gender: 'male', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '예술적인 원핸드 백핸드의 소유자. "Baby Federer"로 불리던 천재 소년 출신으로, 테니스 역사상 가장 아름다운 백핸드 폼을 가진 선수 중 하나입니다.',
        detailedProfile: {
            oneLineSummary: '"테니스 역사상 가장 우아한 원핸드 백핸드", 프랑스의 영원한 천재.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🖌️ "백핸드의 예술가"</div>
                    <p>리샤르 가스케의 원핸드 백핸드는 테니스 교본 그 자체이자 예술 작품으로 평가받습니다. 9세 때 '테니스 매거진' 표지에 등장하며 '제2의 페더러'로 기대를 한몸에 받았습니다.</p>
                    <p>이후 꾸준히 투어 생활을 하며 통산 600승(현역 4번째)을 달성한 리빙 레전드입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"올라운드 테크니션"</strong></p>
                <p>코트 뒤 멀리서 랠리 하는 것을 선호하며, 화려한 기술로 포인트를 만들어냅니다. 그의 백핸드는 파워와 각도, 아름다움을 모두 갖췄습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>원핸드 백핸드:</strong> 그의 정체성입니다. 높은 타점에서 감아치는 탑스핀 백핸드와 낮게 깔리는 슬라이스 모두 일품입니다.</li>
                    <li><strong>그립 교체:</strong> 그립 테이프를 경기 중 수시로(거의 매 게임마다) 교체하는 독특한 루틴이 있습니다.</li>
                    <li><strong>약점:</strong> 포핸드가 백핸드에 비해 평범하고, 서브 파워가 약한 편입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 10, description: '역사상 가장 아름다운 샷.' },
                { name: '기술 (Technique)', score: 9.5, description: '완벽한 폼.' },
                { name: '경험 (Experience)', score: 10, description: '산전수전 다 겪음.' },
                { name: '체력 (Stamina)', score: 6, description: '나이에 따른 저하.' },
                { name: '포핸드 (Forehand)', score: 7, description: '안정적이나 위협적이지 않음.' },
                { name: '서브 (Serve)', score: 7, description: '코스는 좋으나 힘이 부족.' }
            ],
            growthStory: `
                <p>프랑스 베지에 출신으로, 부모님이 모두 테니스 코치입니다. 4세 때부터 테니스를 시작해 천재 소년으로 명성을 떨쳤습니다. 화려했던 주니어 시절에 비해 프로 커리어는 아쉽다는 평도 있지만, 20년 가까이 롱런하며 사랑받고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2015 윔블던 8강 vs 스탄 바브린카',
                date: '2015. 07. 08',
                description: '원핸드 백핸드의 명수들끼리의 맞대결. 풀세트 혈투 끝에 11-9(마지막 세트)로 승리하며 생애 두 번째 윔블던 4강에 올랐습니다. 클래식 테니스의 정수를 보여준 명경기였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "무슈(Monsieur) 가스케"</div>
                    <p>프랑스 팬들에게 그는 자존심과도 같습니다. 승리 후 포효하는 제스처("Allez!")와 특유의 클래식한 플레이 스타일은 낭만을 자극합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"라스트 챕터"</strong></p>
                <p>2025년 롤랑가로스를 끝으로 은퇴를 예고했습니다. 챌린저 투어를 병행하며 마지막 불꽃을 태우고 있습니다. 그가 떠나면 '원핸드 백핸드'의 시대가 저물어감을 느끼게 될 것입니다.</p>
            `,
            faq: [
                {
                    question: '가스케는 언제 은퇴하나요?',
                    answer: '2025년 프랑스 오픈(롤랑가로스)을 마지막으로 은퇴하겠다고 발표했습니다.'
                },
                {
                    question: '가스케의 백핸드가 특별한 이유는?',
                    answer: '엄청난 유연성과 스윙 스피드, 그리고 타점 등 모든 메커니즘이 완벽에 가까워 \'교과서\'로 불리기 때문입니다.'
                }
            ]
        }
    },
    'diego-schwartzman': {
        name: '디에고 슈와르츠만', nameEn: 'Diego Schwartzman', country: 'Argentina', countryFlag: '🇦🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '"El Peque" (작은 거인). 170cm의 단신이라는 신체적 한계를 극복하고 Top 10에 오른 인간 승리의 아이콘으로, 투어 최고의 리턴 능력을 가졌습니다.',
        detailedProfile: {
            oneLineSummary: '170cm의 "작은 거인", 투어를 누비는 가장 빠른 발과 뜨거운 심장.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐜 "엘 페케 (El Peque)"</div>
                    <p>스페인어로 '꼬마'라는 뜻의 별명을 가진 그는 공식 신장 170cm(실제로는 더 작다는 설이 있음)로 현대 테니스의 거인들과 싸워 이겼습니다. 나달을 클레이 코트에서 꺾고, 그랜드슬램 4강(2020 롤랑가로스)까지 오른 그의 여정은 기적과도 같습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 / 리턴 스페셜리스트"</strong></p>
                <p>작은 키를 엄청난 스피드와 예측 능력으로 극복합니다. 상대의 강력한 서브를 받아치는 리턴 능력은 조코비치 다음가는 수준으로 평가받았습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴:</strong> 브레이크 머신입니다. 서브 게임보다 리턴 게임을 더 잘할 때도 있습니다.</li>
                    <li><strong>발:</strong> 코트 위에서 가장 빠른 선수 중 한 명입니다. 어떤 공이든 쫓아가서 넘깁니다.</li>
                    <li><strong>약점:</strong> 서브입니다. 파워와 각도를 만들기 어려워 자신의 서브 게임을 지키는 것이 항상 챌린지입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '리턴 (Return)', score: 10, description: '투어 최정상급.' },
                { name: '스피드 (Speed)', score: 10, description: '다람쥐 같은 민첩성.' },
                { name: '서브 (Serve)', score: 4, description: '신체적 한계.' },
                { name: '멘탈 (Mental)', score: 9, description: '포기하지 않는 그릿(Grit).' },
                { name: '체력 (Stamina)', score: 9, description: '지칠 줄 모름.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '플랫하고 견고함.' }
            ],
            growthStory: `
                <p>아르헨티나 부에노스아이레스의 유대인 가정에서 태어났습니다. 어릴 때 의사로부터 "키가 170cm를 넘지 않을 것"이라는 말을 듣고 절망했으나, 어머니의 헌신적인 뒷받침으로 테니스를 포기하지 않았습니다.</p>
                <p>경제적 어려움 속에서도 꿈을 키워 세계적인 선수로 성공했습니다.</p>
            `,
            signatureMatch: {
                title: '2020 로마 마스터스 8강 vs 라파엘 나달',
                date: '2020. 09. 19',
                description: '클레이의 신 나달을 상대로 생애 첫 승리를 거둔 날. 나달의 샷을 끈질기게 받아내며 2-0 완승을 거뒀고, 결국 이 대회 준우승을 차지하며 Top 10 진입의 발판을 마련했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❤️ "모두의 친구"</div>
                    <p>특유의 친화력과 밝은 성격으로 동료 선수들과 팬들에게 인기가 많습니다. 코트 위에서의 투지 넘치는 모습은 "할 수 있다"는 희망을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"마지막 인사"</strong></p>
                <p>급격한 기량 저하로 2025년 2월 자국 대회(부에노스아이레스)를 끝으로 은퇴를 예고했습니다. 와일드카드로 대회에 참가하며 팬들과 작별 인사를 나누고 있습니다.</p>
            `,
            faq: [
                {
                    question: '슈와르츠만의 키는 몇인가요?',
                    answer: '프로필상 170cm(5피트 7인치)이지만, 본인은 인터뷰에서 그것보다 조금 더 작을 수 있다고 유머러스하게 밝힌 바 있습니다.'
                },
                {
                    question: '슈와르츠만은 언제 은퇴하나요?',
                    answer: '2025년 2월, 고국 아르헨티나에서 열리는 아르헨티나 오픈을 끝으로 공식 은퇴할 예정입니다.'
                }
            ]
        }
    },
    'david-goffin': {
        name: '다비드 고핀', nameEn: 'David Goffin', country: 'Belgium', countryFlag: '🇧🇪', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '벨기에의 테크니션. 왜소한 체격이지만 박자 빠른 스트로크와 뛰어난 코트 커버력으로 상대를 제압하는, 지능적이고 우아한 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '작은 고추가 맵다, "벨기에 테크니션"의 스마트하고 빠른 테니스.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇪 "최초의 벨기에 Top 10"</div>
                    <p>다비드 고핀은 힘으로 밀어붙이는 현대 테니스에서 180cm, 70kg의 비교적 왜소한 체격(테니스 선수 기준)으로 세계 랭킹 7위까지 오른 <strong>'기술 테니스'의 정점</strong>입니다. 2017년 ATP 파이널스에서 나달과 페더러를 모두 꺾고 준우승을 차지하며 전 세계를 놀라게 했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 / 베이스라인 테크니션"</strong></p>
                <p>상대의 힘을 역이용하는 능력이 탁월합니다. 공이 바운드되자마자 치는 라이징 샷으로 상대의 시간을 빼앗고, 정교한 코스 공략으로 위너를 만들어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>풋워크:</strong> 투어에서 가장 가벼운 발놀림을 가졌습니다. 코트 커버 범위가 매우 넓습니다.</li>
                    <li><strong>백핸드:</strong> 그의 주무기입니다. 크로스와 다운더라인을 자유자재로 구사하며 에러가 거의 없습니다.</li>
                    <li><strong>약점:</strong> 서브 파워가 부족하여 자신의 서브 게임에서 압도적인 모습을 보여주기 힘듭니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 9.5, description: '깃털처럼 가벼운 움직임.' },
                { name: '기술 (Technique)', score: 9.5, description: '정교함의 끝판왕.' },
                { name: '리턴 (Return)', score: 9, description: '서브 게임 브레이크 능력이 탁월.' },
                { name: '백핸드 (Backhand)', score: 9, description: '안정적이고 날카로움.' },
                { name: '파워 (Power)', score: 6, description: '신체 조건의 한계.' },
                { name: '서브 (Serve)', score: 6.5, description: '코스 공략 위주.' }
            ],
            growthStory: `
                <p>벨기에 리에주 근교인 로쿠르에서 태어났습니다. 6세 때 아버지를 따라 테니스를 시작했습니다. 주니어 시절에는 큰 주목을 받지 못했으나, 프로 데뷔 후 끈질긴 노력으로 재능을 꽃피웠습니다. 2012년 롤랑가로스 16강에서 우상인 페더러와 대결하며 이름을 알렸습니다.</p>
            `,
            signatureMatch: {
                title: '2017 ATP 파이널스 4강 vs 로저 페더러',
                date: '2017. 11. 18',
                description: '가장 존경하는 우상을 넘어선 날. 페더러를 상대로 6전 전패를 기록 중이었으나, 이 중요한 무대에서 2-1 역전승을 거뒀습니다. 빠르고 공격적인 테니스로 페더러를 당황하게 만들었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "동안의 암살자"</div>
                    <p>순해 보이는 인상과 동안 외모로 여성 팬들에게 인기가 많습니다. 하지만 라켓을 잡으면 냉철한 승부사로 돌변하는 반전 매력이 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"클래스는 영원하다"</strong></p>
                <p>부상과 부진으로 랭킹이 100위권 밖으로 밀려났었지만, 챌린저 우승 등을 통해 다시 Top 100에 진입했습니다. 여전히 그의 아름다운 테니스를 보고 싶어 하는 팬들이 많습니다.</p>
            `,
            faq: [
                {
                    question: '고핀의 키는 얼마인가요?',
                    answer: '프로필상 180cm(5피트 11인치)입니다. 현대 테니스 선수들의 평균 신장에 비하면 작은 편에 속합니다.'
                },
                {
                    question: '고핀의 플레이 스타일은?',
                    answer: '빠른 발과 박자 빠른 스트로크를 앞세운 베이스라이너입니다. 힘보다는 정확도와 타이밍으로 승부합니다.'
                }
            ]
        }
    },
    'thanasi-kokkinakis': {
        name: '타나시 코키나키스', nameEn: 'Thanasi Kokkinakis', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '호주의 재능. 키리오스와 절친이자 복식 파트너로, 강력한 서브와 포핸드, 그리고 스타성을 겸비한 선수입니다.',
        detailedProfile: {
            oneLineSummary: '부상의 늪에서 돌아온 "호주의 재능", 닉 키리오스의 영혼의 단짝.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤝 "키리오스와의 브로맨스"</div>
                    <p>어릴 때부터 친구인 닉 키리오스와 함께 '스페셜 K' 듀오로 불립니다. 2022년 호주 오픈 복식에서 와일드카드로 출전해 우승까지 차지하는 영화 같은 스토리를 썼습니다.</p>
                    <p>수많은 부상으로 은퇴 위기까지 갔으나 포기하지 않고 2022년 고향 애들레이드에서 생애 첫 단식 우승을 차지했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 올라운더"</strong></p>
                <p>전형적인 호주 스타일의 시원시원한 테니스를 구사합니다. 큰 키에서 나오는 서브와 포핸드 원투 펀치가 주무기입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 걸린 포핸드는 파워와 회전량 모두 뛰어납니다. 상대를 압도하는 결정구입니다.</li>
                    <li><strong>서브:</strong> 210km/h를 넘나드는 서브는 그의 게임을 쉽게 풀어주는 열쇠입니다.</li>
                    <li><strong>유리 몸:</strong> 어깨, 가슴, 무릎 등 성한 곳이 없을 정도로 부상이 잦았습니다. 건강만 하다면 Top 20 실력입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '강력한 무기.' },
                { name: '포핸드 (Forehand)', score: 9, description: '헤비 탑스핀.' },
                { name: '재능 (Talent)', score: 9, description: '페더러도 인정한 재능.' },
                { name: '내구성을 (Durability)', score: 3, description: '부상이 너무 많음.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '부상을 견뎌낸 인내심.' },
                { name: '스타성 (Star Quality)', score: 9, description: '호주 팬들의 아이돌.' }
            ],
            growthStory: `
                <p>호주 애들레이드 출신으로 그리스 이민자 가정에서 태어났습니다. 주니어 시절 키리오스와 함께 호주 테니스의 미래로 불렸습니다. 프로 데뷔 초반 페더러를 위협할 정도로 성장했으나, 2015년 말부터 시작된 연쇄 부상으로 약 5년을 재활로 보냈습니다.</p>
            `,
            signatureMatch: {
                title: '2018 마이애미 오픈 2회전 vs 로저 페더러',
                date: '2018. 03. 24',
                description: '세계를 충격에 빠뜨린 날. 세계 랭킹 175위였던 코키나키스가 당신 세계 1위 페더러를 2-1로 제압했습니다. 그의 잠재력이 만개한 경기이자, 테니스 역사상 가장 큰 이변 중 하나입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😎 "코트 위의 훈남"</div>
                    <p>잘생긴 외모와 훤칠한 키, 그리고 유머 감각으로 인기가 매우 많습니다. 키리오스와 함께일 때 보여주는 장난기 넘치는 모습은 팬들에게 즐거움을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"건강한 시즌"</strong></p>
                <p>2023-2024년 큰 부상 없이 시즌을 소화하며 랭킹을 다시 100위권 안으로, 그리고 더 높이 끌어올리고 있습니다. 꾸준함이 그에게는 가장 큰 승리입니다.</p>
            `,
            faq: [
                {
                    question: '코키나키스와 키리오스는 어떤 사이인가요?',
                    answer: '어릴 때부터 함께 자란 절친이자 라이벌, 그리고 최고의 복식 파트너입니다. 2022 호주 오픈 복식 우승을 합작했습니다.'
                },
                {
                    question: '코키나키스의 국적은?',
                    answer: '호주(Australia)입니다. 혈통은 그리스계입니다.'
                }
            ]
        }
    },
    'hugo-gaston': {
        name: '위고 가스통', nameEn: 'Hugo Gaston', country: 'France', countryFlag: '🇫🇷', gender: 'male', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '프랑스의 드롭샷 마스터. 작은 체구지만 독창적이고 변칙적인 플레이로 거인들을 농락하며 관중들을 매료시키는 아티스트입니다.',
        detailedProfile: {
            oneLineSummary: '거인들을 농락하는 173cm의 "드롭샷 킹", 코트 위의 마법사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🪄 "드롭샷의 장인"</div>
                    <p>위고 가스통은 현대 테니스에서 가장 독창적인 선수 중 하나입니다. 파워 대결 대신, 타이밍을 뺏는 <strong>무한 드롭샷</strong>과 로브, 슬라이스로 상대를 미치게 만듭니다.</p>
                    <p>2020년 롤랑가로스 16강에서 우승 후보 도미니크 팀을 상대로 드롭샷만 수십 개를 성공시키며 풀세트 접전을 벌여 스타덤에 올랐습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"트릭스터 (Trickster)"</strong></p>
                <p>왼손잡이의 이점과 천부적인 손목 감각을 활용합니다. 상대가 베이스라인 뒤에 있으면 드롭샷, 네트로 들어오면 로브를 올리는 패턴이 주무기입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 타의 추종을 불허합니다. 폼이 포핸드와 똑같아 예측하기 불가능에 가깝습니다.</li>
                    <li><strong>무브먼트:</strong> 작은 키를 이용한 민첩한 움직임으로 코트 구석구석을 커버합니다.</li>
                    <li><strong>서브:</strong> 키의 한계로 서브는 약점이지만, 슬라이스 서브 등으로 코스를 잘 찌릅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '창의성 (Creativity)', score: 10, description: '예측 불가능한 플레이.' },
                { name: '터치 (Touch)', score: 10, description: '마법 같은 손목 감각.' },
                { name: '스피드 (Speed)', score: 9, description: '다람쥐 같은 움직임.' },
                { name: '파워 (Power)', score: 4, description: '힘 대결은 피함.' },
                { name: '서브 (Serve)', score: 5, description: '약한 편.' },
                { name: '멘탈 (Mental)', score: 8, description: '홈 관중의 응원을 즐김.' }
            ],
            growthStory: `
                <p>프랑스 툴루즈 출신입니다. 2018년 유스 올림픽 금메달리스트이며, 호주 오픈 주니어 복식 우승을 차지했습니다. 프로 데뷔 후 피지컬의 열세를 지능적인 플레이로 극복하며 투어에 생존했습니다.</p>
            `,
            signatureMatch: {
                title: '2020 롤랑가로스 3회전 vs 스탄 바브린카',
                date: '2020. 10. 02',
                description: '세계를 놀라게 한 경기. 그랜드슬램 챔피언 바브린카를 상대로 드롭샷과 변칙 공격을 퍼부어 3-2로 승리했습니다. 프랑스 팬들은 열광했고, 가스통은 하루아침에 국민 영웅이 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "파리의 연인"</div>
                    <p>프랑스 오픈(롤랑가로스)에서 특히 강한 모습을 보입니다. 홈 관중들의 열광적인 응원을 유도하며 경기장 분위기를 주도하는 쇼맨십이 있습니다. 그의 경기는 지루할 틈이 없습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 100 생존기"</strong></p>
                <p>파워 테니스가 지배하는 투어에서 자신만의 스타일로 꾸준히 생존하고 있습니다. 2024년 앤트워프 오픈 등에서 좋은 모습을 보이며 경쟁력을 유지 중입니다.</p>
            `,
            faq: [
                {
                    question: '가스통의 키는 얼마인가요?',
                    answer: '프로필상 173cm(5피트 8인치)입니다. 남자 투어 선수 중 최단신 그룹에 속합니다.'
                },
                {
                    question: '가스통의 주무기는 무엇인가요?',
                    answer: '단연 드롭샷입니다. 상대의 허를 찌르는 드롭샷 성공률은 세계 최고 수준입니다.'
                }
            ]
        }
    },
    'luca-nardi': {
        name: '루카 나르디', nameEn: 'Luca Nardi', country: 'Italy', countryFlag: '🇮🇹', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 숨은 진주. 조코비치를 꺾는 이변을 연출하며 세계적인 주목을 받았으며, 부드러운 손감각과 공격 본능을 가진 유망주입니다.',
        detailedProfile: {
            oneLineSummary: '자신의 우상 조코비치를 꺾은 "럭키 루저"의 기적, 이탈리아의 조용한 암살자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍀 "기적의 승리"</div>
                    <p>2024년 인디언 웰스 마스터스에서 예선 탈락했으나, 결원이 생겨 본선에 합류('럭키 루저')했습니다. 그리고 32강에서 <strong>세계 1위 노박 조코비치</strong>를 2-1로 꺾는 테니스 역사상급 이변을 연출했습니다.</p>
                    <p>자신의 방에 조코비치 포스터를 붙여놓고 자란 '성덕(성공한 덕후)' 스토리가 화제가 되었습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"샷 메이커 (Shot Maker)"</strong></p>
                <p>힘을 빼고 부드럽게 치는데 공이 빠르게 나가는 천부적인 재능을 가졌습니다. 어떤 상황에서도 무리하지 않고 침착하게 자신이 원하는 곳으로 공을 보냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 짧은 백스윙에서 나오는 빠른 스윙 스피드로 위너를 양산합니다.</li>
                    <li><strong>템포:</strong> 공을 라이징 타이밍에 잡아쳐서 상대에게 시간을 주지 않습니다.</li>
                    <li><strong>멘탈:</strong> 조코비치라는 거함 앞에서도 주눅 들지 않는 강심장을 보여주었습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '침착함 (Composure)', score: 9.5, description: '나이답지 않은 평정심.' },
                { name: '포핸드 (Forehand)', score: 8.5, description: '간결하고 강력함.' },
                { name: '잠재력 (Potential)', score: 9, description: '이탈리아의 황금세대 주역.' },
                { name: '서브 (Serve)', score: 7.5, description: '개선이 필요함.' },
                { name: '이동 (Movement)', score: 8, description: '부드러운 풋워크.' },
                { name: '경험 (Experience)', score: 4, description: '이제 막 시작한 투어 생활.' }
            ],
            growthStory: `
                <p>이탈리아 페사로 출신입니다. 7세 때 형을 따라 테니스를 시작했습니다. 시너, 아르날디, 무세티 등과 함께 이탈리아 테니스 르네상스를 이끄는 유망주 중 한 명입니다. 조코비치를 꺾은 후 전 세계의 주목을 받으며 랭킹이 수직 상승했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 인디언 웰스 32강 vs 노박 조코비치',
                date: '2024. 03. 12',
                description: '인생을 바꾼 경기. 랭킹 123위였던 나르디가 "GOAT" 조코비치를 상대로 공격적인 테니스를 구사하며 승리했습니다. 조코비치조차 경기 후 "그는 승리할 자격이 있다"며 인정했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👦 "수줍은 소년"</div>
                    <p>경기장에서는 냉정하지만, 밖에서는 수줍음 많고 예의 바른 소년입니다. 조코비치를 이기고도 믿을 수 없다는 듯 얼굴을 감싸 쥐는 모습이 팬들에게 깊은 인상을 남겼습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 100 안착"</strong></p>
                <p>조코비치 전 승리 이후 챌린저 대회(나폴리 컵) 우승 등을 추가하며 Top 100에 안정적으로 진입했습니다. 이제는 반짝 스타가 아닌 꾸준한 투어 선수로 자리 잡아가고 있습니다.</p>
            `,
            faq: [
                {
                    question: '나르디가 조코비치를 이길 때 랭킹은?',
                    answer: '당시 세계 랭킹 123위였습니다. 이는 조코비치가 그랜드슬램이나 마스터스 급 대회에서 패한 선수 중 가장 낮은 랭킹 기록 중 하나입니다.'
                },
                {
                    question: '나르디의 우상은 누구인가요?',
                    answer: '아이러니하게도 그가 꺾은 노박 조코비치입니다. 8살 때부터 그의 포스터를 방에 붙여 놓았다고 합니다.'
                }
            ]
        }
    },
    'dino-prizmic': {
        name: '디노 프리즈미치', nameEn: 'Dino Prizmic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '크로아티아의 강철 멘탈. 주니어 롤랑가로스 챔피언 출신으로, 어떤 상황에서도 포기하지 않는 투지와 끈질긴 랠리가 강점입니다.',
        detailedProfile: {
            oneLineSummary: '2024 호주오픈에서 조코비치를 진땀 빼게 한 18세, 크로아티아의 "전사".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🛡️ "조코비치를 4시간 동안 괴롭힌 소년"</div>
                    <p>2024년 호주 오픈 1회전에서 <strong>노박 조코비치</strong>를 만나 4시간 1분의 혈투를 벌였습니다. 비록 패배했지만, 한 세트를 따내고 조코비치를 지치게 만드는 엄청난 체력과 수비력을 보여주며 '차세대 스타'로 눈도장을 찍었습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"올라운드 디펜더 (Grinder)"</strong></p>
                <p>크로아티아 선배인 보르나 초리치나 조코비치를 연상시키는 끈질긴 플레이 스타일입니다. 절대 포기하지 않고 모든 공을 받아치며 상대 실수를 유도합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>체력:</strong> 10대라고는 믿기지 않는 강철 체력을 가졌습니다. 5세트 경기도 거뜬합니다.</li>
                    <li><strong>백핸드:</strong> 매우 견고합니다. 수비 상황에서도 공격으로 전환하는 능력이 좋습니다.</li>
                    <li><strong>투지:</strong> 부상을 당해도 테이핑을 하고 뛸 정도로 승부욕이 강합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 9.5, description: '무한 동력.' },
                { name: '수비 (Defense)', score: 9, description: '질식 수비.' },
                { name: '멘탈 (Mental)', score: 9, description: '절대 포기하지 않음.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적임.' },
                { name: '서브 (Serve)', score: 7, description: '파워 보강 중.' },
                { name: '경험 (Experience)', score: 5, description: '성장하는 중.' }
            ],
            growthStory: `
                <p>크로아티아 스플리트 출신입니다. 2023년 프랑스 오픈 주니어 단식 우승을 차지하며 주니어 무대를 평정했습니다. 성인 무대 적응기도 없이 곧바로 챌린저와 투어 레벨에서 경쟁력을 보여주었습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 1회전 vs 노박 조코비치',
                date: '2024. 01. 14',
                description: '세계 최강자를 상대로 보여준 투혼. 2세트를 7-6으로 가져오며 경기장을 열광시켰습니다. 경기 후 조코비치는 "거울을 보는 것 같았다. 엄청난 잠재력을 가진 선수"라며 극찬했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇷 "크로아티아의 희망"</div>
                    <p>이반 류비치치, 마린 칠리치, 보르나 초리치의 계보를 잇는 확실한 후계자입니다. 다리에 쥐가 나도 뛰는 그의 열정에 팬들은 감동합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상 그리고 재도약"</strong></p>
                <p>호주 오픈 이후 부상으로 잠시 주춤했으나, 하반기부터 다시 투어에 복귀하여 랭킹 상승을 노리고 있습니다. 아직 2005년생으로 시간은 그의 편입니다.</p>
            `,
            faq: [
                {
                    question: '프리즈미치의 주니어 성적은?',
                    answer: '2023년 프랑스 오픈(롤랑가로스) 주니어 남자 단식 챔피언입니다.'
                },
                {
                    question: '조코비치가 프리즈미치에 대해 뭐라고 했나요?',
                    answer: '"나 자신과 경기하는 것 같았다. 그는 훌륭한 멘탈과 피지컬을 가졌고, 밝은 미래가 있다"고 칭찬했습니다.'
                }
            ]
        }
    },
    'coleman-wong': {
        name: '콜먼 웡', nameEn: 'Coleman Wong', country: 'Hong Kong', countryFlag: '🇭🇰', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '홍콩 테니스의 역사. 나달 아카데미에서 훈련받은 유망주로, 191cm의 좋은 신체 조건과 공격적인 테니스로 아시아 테니스의 미래를 밝히고 있습니다.',
        detailedProfile: {
            oneLineSummary: '홍콩 테니스 역사상 최초의 기록들을 써 내려가는 "아시아의 거포".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇭🇰 "홍콩의 자존심"</div>
                    <p>콜먼 웡(Wong Chak-lam)은 홍콩 테니스 역사상 가장 높은 랭킹에 오른 선수입니다. 2024년 마이애미 오픈 본선에 진출하는 등 홍콩 선수 최초의 기록들을 갈아치우고 있습니다.</p>
                    <p>스페인 마요르카의 <strong>라파엘 나달 아카데미</strong>에서 훈련하며 세계적인 수준으로 성장했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 빅 히터 (Big Hitter)"</strong></p>
                <p>191cm의 훌륭한 신체 조건에서 나오는 파워가 강점입니다. 아시아 선수로는 드물게 서브와 포핸드 한 방으로 경기를 주도하는 스타일입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>피지컬:</strong> 서양 선수들에게 밀리지 않는 큰 키와 힘을 갖췄습니다.</li>
                    <li><strong>포핸드:</strong> 찬스가 오면 주저 없이 때리는 공격적인 포핸드를 구사합니다.</li>
                    <li><strong>서브:</strong> 최고 220km/h에 육박하는 강서브를 장착했습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '탈아시아급 피지컬.' },
                { name: '서브 (Serve)', score: 8.5, description: '강력한 무기.' },
                { name: '잠재력 (Potential)', score: 9, description: '아시아 No.1을 노림.' },
                { name: '경험 (Experience)', score: 6, description: '투어 적응 중.' },
                { name: '이동 (Movement)', score: 7.5, description: '키에 비해 민첩함.' },
                { name: '백핸드 (Backhand)', score: 8, description: '견고함.' }
            ],
            growthStory: `
                <p>홍콩에서 태어나 5세 때 테니스를 시작했습니다. US 오픈 주니어 복식 우승(2021), 호주 오픈 주니어 복식 우승(2022)을 차지하며 주니어 무대를 휩쓸었습니다. 나달 아카데미 장학생으로 선발되어 체계적인 훈련을 받았습니다.</p>
            `,
            signatureMatch: {
                title: '2024 마이애미 오픈 예선 결승',
                date: '2024. 03. 19',
                description: '홍콩 선수 최초로 마스터스 1000 본선 진출을 확정 지은 경기. 인도의 수미트 나갈을 꺾으며 새 역사를 썼습니다. 본선 1회전에서도 좋은 경기력을 보여주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌟 "차세대 아시아 스타"</div>
                    <p>권순우, 상 쥔청, 모치즈키 신타로와 함께 아시아 남자 테니스를 이끌어갈 기대주입니다. 훤칠한 외모와 영어 인터뷰 실력으로 글로벌 팬들에게도 어필하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"성장통과 도약"</strong></p>
                <p>챌린저 투어에서 꾸준히 4강, 결승에 오르며 랭킹을 100위권 근처까지 끌어올렸습니다. 경험만 더 쌓이면 ATP 투어 단골손님이 될 것입니다.</p>
            `,
            faq: [
                {
                    question: '콜먼 웡은 어디서 훈련하나요?',
                    answer: '스페인 마요르카에 있는 라파엘 나달 아카데미(Rafa Nadal Academy)에서 훈련하고 있습니다.'
                },
                {
                    question: '콜먼 웡의 주니어 성적은?',
                    answer: '그랜드슬램 주니어 복식 우승 2회(2021 US 오픈, 2022 호주 오픈)를 달성한 복식 강자이기도 했습니다.'
                }
            ]
        }
    },

    // --- Added Female Players (Batch 2 - Enriched) ---
    'dayana-yastremska': {
        name: '다야나 야스트렘스카', nameEn: 'Dayana Yastremska', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '폭발적인 공격력을 자랑하는 우크라이나의 파워 히터. 2024 호주 오픈에서 예선 통과자 신분으로 4강까지 진출하는 돌풍을 일으키며 세계를 놀라게 했습니다.',
        detailedProfile: {
            oneLineSummary: '예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌪️ "예선에서 4강까지"</div>
                    <p>2024년 호주 오픈에서 예선 3경기를 거쳐 본선에 올라, 윔블던 챔피언 본드루소바, 아자렌카 등을 잇달아 격파하고 <strong>4강(준결승)</strong>까지 진출하는 기적을 썼습니다. 오픈 시대 이후 예선 통과자가 호주 오픈 4강에 오른 것은 1978년 이후 처음입니다.</p>
                </div>
                <p>전쟁 중인 조국 우크라이나에 승전보를 전하기 위해 뛴다는 인터뷰로 많은 이들의 심금을 울렸습니다.</p>
            `,
            playStyle: `
                <p><strong>"초공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>수비보다는 공격입니다. 공이 오면 무조건 세게 때려버리는 스타일입니다. "모 아니면 도" 식의 플레이지만, 긁히는 날에는 누구도 막을 수 없습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드/백핸드:</strong> 양쪽 모두에서 강력한 플랫성 위너를 터뜨립니다. 랠리를 짧게 가져갑니다.</li>
                    <li><strong>리턴:</strong> 상대 서브를 바로 공격하여 득점으로 연결하는 능력이 뛰어납니다.</li>
                    <li><strong>기복:</strong> 공격 아니면 에러입니다. 범실이 많은 날은 자멸하기도 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 10, description: 'WTA 최고 수준의 화력.' },
                { name: '공격성 (Aggression)', score: 10, description: '후진 기어 없음.' },
                { name: '멘탈 (Mental)', score: 8, description: '조국을 위한 투지.' },
                { name: '안정성 (Consistency)', score: 5, description: '에러가 많음.' },
                { name: '서브 (Serve)', score: 7.5, description: '준수한 편.' },
                { name: '이동 (Movement)', score: 8, description: '빠르고 탄력적.' }
            ],
            growthStory: `
                <p>우크라이나 오데사 출신입니다. 어린 시절부터 공격적인 테니스로 두각을 나타냈으며, 10대 때 이미 투어 3회 우승을 차지했습니다. 잠시 도핑 논란(무혐의 처분)과 부진이 있었으나, 2024년 화려하게 부활했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 8강 vs 린다 노스코바',
                date: '2024. 01. 24',
                description: '4강 신화를 완성한 경기. 시비옹테크를 꺾고 올라온 노스코바를 상대로 압도적인 파워를 보여주며 2-0 완승을 거뒀습니다. 승리 후 카메라 렌즈에 "I am proud of my people from Ukraine"라고 적었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💙💛 "우크라이나의 전사"</div>
                    <p>코트 위에서는 파이터, 코트 밖에서는 가수로도 활동한 다재다능한 스타입니다. 전쟁으로 고통받는 자국민들을 대변하는 메시지를 끊임없이 전하며 평화의 아이콘이 되었습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"제2의 전성기"</strong></p>
                <p>호주 오픈 4강 이후 랭킹이 30위권 안으로 복귀했습니다. 특유의 몰아치기 능력이 살아나, 언제든 상위 랭커를 잡을 수 있는 다크호스로 평가받습니다.</p>
            `,
            faq: [
                {
                    question: '야스트렘스카의 최고 성적은?',
                    answer: '그랜드슬램 4강(2024 호주 오픈)이며, 투어 대회 단식 우승 3회를 기록했습니다.'
                },
                {
                    question: '그녀는 가수로도 활동하나요?',
                    answer: '네, 2020년 코로나 팬데믹 기간에 "Favorite Track"이라는 곡을 발표하며 가수로 데뷔하기도 했습니다.'
                }
            ]
        }
    },
    'anna-kalinskaya': {
        name: '안나 칼린스카야', nameEn: 'Anna Kalinskaya', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '군더더기 없는 깔끔한 스트로크가 특징인 선수. 최근 두바이 챔피언십 결승 진출 등 투어 무대에서 기량이 만개하며 다크호스로 떠올랐습니다.',
        detailedProfile: {
            oneLineSummary: '차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❄️ "늦깍이 전성기"</div>
                    <p>만년 유망주였으나 2024년 두바이 챔피언십(WTA 1000)에서 세계 1위 시비옹테크, 3위 고프, 9위 오스타펜코를 연파하고 결승에 오르며 기량이 만개했습니다.</p>
                    <p>또한 남자 세계 1위 <strong>야닉 시너</strong>와의 연인 관계가 알려지며 테니스계 최고의 '슈퍼 커플'로 화제를 모으고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 카운터 펀처"</strong></p>
                <p>감정을 드러내지 않는 포커페이스로 상대의 공을 기계처럼 받아칩니다. 공의 힘을 이용해 각도를 벌리는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>타이밍:</strong> 공을 라이징 볼로 처리하여 박자가 매우 빠릅니다. 상대가 준비할 시간을 주지 않습니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드 공격이 일품입니다.</li>
                    <li><strong>멘탈:</strong> 예전에는 기복이 있었으나, 최근에는 위기 상황에서도 흔들리지 않는 침착함을 갖췄습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '타이밍 (Timing)', score: 9.5, description: '완벽한 임팩트.' },
                { name: '백핸드 (Backhand)', score: 9, description: '날카로운 무기.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '얼음처럼 차가움.' },
                { name: '수비 (Defense)', score: 8.5, description: '견고한 벽.' },
                { name: '서브 (Serve)', score: 7.5, description: '평균적임.' },
                { name: '미모 (Visual)', score: 10, description: '투어 대표 미녀.' }
            ],
            growthStory: `
                <p>러시아 모스크바 출신입니다. 부모님이 전직 배드민턴 선수들이라 라켓을 다루는 감각을 물려받았습니다. 주니어 시절 복식 그랜드슬램을 우승했으나, 성인 무대 적응에 시간이 걸렸습니다. 25세가 된 2024년에 마침내 Top 20에 진입했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 두바이 챔피언십 4강 vs 이가 시비옹테크',
                date: '2024. 02. 23',
                description: '세계 1위를 무너뜨린 인생 경기. 무적 포스를 뽐내던 시비옹테크를 상대로 한 치의 물러섬도 없는 맞불 작전을 펼쳐 2-0(6-4, 6-4) 완승을 거뒀습니다. 시비옹테크가 쩔쩔맬 정도로 완벽한 경기력이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👸 "테니스 여신"</div>
                    <p>뛰어난 실력만큼이나 수려한 외모로 많은 팬을 보유하고 있습니다. 시너와 함께 훈련하거나 경기장을 찾는 모습이 자주 포착되어 팬들의 부러움을 사고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 10 진입 목표"</strong></p>
                <p>두바이 준우승 이후 베를린 오픈 준우승 등 꾸준히 상위권 성적을 내고 있습니다. 지금의 기세라면 메이저 대회 4강 이상도 충분히 가능해 보입니다.</p>
            `,
            faq: [
                {
                    question: '칼린스카야의 남자친구는 누구인가요?',
                    answer: '현재 ATP 세계 랭킹 1위인 이탈리아의 야닉 시너(Jannik Sinner)입니다.'
                },
                {
                    question: '칼린스카야의 별명은?',
                    answer: '특별한 별명은 없으나, 팬들 사이에서는 미모와 차가운 경기 스타일 때문에 \'얼음공주\' 등으로 불리기도 합니다.'
                }
            ]
        }
    },
    'jasmine-paolini': {
        name: '자스민 파올리니', nameEn: 'Jasmine Paolini', country: 'Italy', countryFlag: '🇮🇹', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '작은 거인. 163cm의 단신이지만 빠른 발과 지칠 줄 모르는 체력으로 2024년 롤랑가로스와 윔블던 결승에 진출하며 세계 톱 랭커로 도약했습니다.',
        detailedProfile: {
            oneLineSummary: '163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇮🇹 "이탈리아의 요정, 세계를 놀라게 하다"</div>
                    <p>2024년은 자스민 파올리니의 해였습니다. 누구도 기대하지 않았던 그녀가 <strong>롤랑가로스(프랑스 오픈)와 윔블던 결승에 연속으로 진출</strong>하는 대이변을 일으켰습니다. 163cm의 작은 키로 파워 히터들을 쓰러뜨리는 모습은 전 세계에 감동을 주었습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"에너자이저 / 카운터 펀처"</strong></p>
                <p>코트 위를 쉴 새 없이 뛰어다닙니다. 상대가 강하게 치면 그 힘을 이용해 더 빠르게 되돌려 보냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 투어에서 가장 빠른 선수 중 한 명입니다. 어떤 공이든 쫓아갑니다.</li>
                    <li><strong>포핸드:</strong> 키에 비해 엄청난 회전량의 헤비 탑스핀을 구사합니다. 나달을 연상시킵니다.</li>
                    <li><strong>에너지:</strong> 항상 긍정적인 에너지를 뿜어내며, 지치지 않는 체력으로 상대를 질리게 만듭니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스피드 (Speed)', score: 10, description: '전광석화.' },
                { name: '체력 (Stamina)', score: 10, description: '무한 체력.' },
                { name: '포핸드 (Forehand)', score: 9, description: '작지만 매운맛.' },
                { name: '서브 (Serve)', score: 6, description: '신체적 한계는 있음.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '항상 웃으며 싸움.' },
                { name: '네트 (Net)', score: 8, description: '복식 경험으로 다져진 발리.' }
            ],
            growthStory: `
                <p>이탈리아 토스카나 지방에서 이탈리아인 아버지와 가나-폴란드 혼혈 어머니 사이에서 태어났습니다. 늦은 나이(28세)에 전성기를 맞이한 대기만성형 선수입니다. 2024년 두바이 챔피언십 우승으로 자신감을 얻어 메이저 결승까지 질주했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 윔블던 4강 vs 돈나 베키치',
                date: '2024. 07. 11',
                description: '윔블던 역사에 남을 명승부. 2시간 51분의 혈투 끝에 2-1 역전승을 거뒀습니다. 마지막 순간까지 포기하지 않고 뛰어다닌 파올리니의 투지가 빛났으며, 이탈리아 여류 선수 최초로 윔블던 결승에 진출했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "해피 바이러스"</div>
                    <p>항상 밝은 미소와 긍정적인 태도로 인터뷰하여 '스마일 퀸'으로 불립니다. 그녀의 경기를 보면 기분이 좋아진다는 팬들이 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 5 안착"</strong></p>
                <p>단식뿐만 아니라 복식에서도 롤랑가로스 결승, 올림픽 금메달(에라니와 합작)을 차지하며 세계 최고의 선수 중 한 명으로 우뚝 섰습니다.</p>
            `,
            faq: [
                {
                    question: '파올리니의 키는?',
                    answer: '163cm(5피트 4인치)입니다. 현대 테니스에서 매우 단신에 속하지만, 스피드와 기술로 이를 완벽하게 극복했습니다.'
                },
                {
                    question: '파올리니의 국적 배경은?',
                    answer: '국적은 이탈리아입니다. 어머니가 가나와 폴란드 혈통을 가지고 있어 다양한 문화적 배경을 지니고 있습니다.'
                }
            ]
        }
    },
    'sorana-cirstea': {
        name: '소라나 크르스테아', nameEn: 'Sorana Cirstea', country: 'Romania', countryFlag: '🇷🇴', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '루마니아의 베테랑. 공격적인 베이스라인 플레이를 구사하며, 투어 경력 내내 꾸준히 상위권을 위협하는 저력을 보여줍니다.',
        detailedProfile: {
            oneLineSummary: '30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇴 "루마니아의 자존심"</div>
                    <p>시모나 할렙과 함께 루마니아 테니스를 이끌어온 베테랑입니다. 2008년 18세의 나이로 투어에 데뷔해 15년 넘게 Top 100을 유지하는 자기관리의 끝판왕입니다.</p>
                    <p>특히 2023년 마이애미 오픈에서 4강에 오르며 10년 만에 마스터스 준결승 무대를 밟는 등, 나이가 들수록 더 노련하고 매서운 테니스를 보여주고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>수비를 하기보다는 먼저 공격해서 랠리를 끝내려고 합니다. 플랫성 구질의 포핸드와 백핸드가 네트 위를 낮게 깔고 지나갑니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 파워가 실린 포핸드 스트로크가 주무기입니다. 좌우 코너를 찌르는 각도가 예리합니다.</li>
                    <li><strong>템포:</strong> 빠른 박자로 공을 처리하여 상대의 시간을 빼앗습니다.</li>
                    <li><strong>기복:</strong> 공격적인 스타일 탓에 컨디션이 안 좋은 날에는 에러가 많아지는 경향이 있습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 8.5, description: '묵직한 스트로크.' },
                { name: '경험 (Experience)', score: 10, description: '투어 15년차 베테랑.' },
                { name: '공격성 (Aggression)', score: 9, description: '선공 필승.' },
                { name: '서브 (Serve)', score: 7.5, description: '준수함.' },
                { name: '수비 (Defense)', score: 6, description: '공격에 비해 약함.' },
                { name: '멘탈 (Mental)', score: 8, description: '산전수전 다 겪음.' }
            ],
            growthStory: `
                <p>루마니아 흐레슈트에서 태어났습니다. 4살 때 어머니의 권유로 테니스를 시작했습니다. 슈테피 그래프를 동경하며 자랐고, 어릴 때부터 공격적인 테니스를 선호했습니다. 2009년 롤랑가로스 8강에 오르며 혜성처럼 등장했고, 긴 슬럼프를 겪기도 했지만 30대에 들어 제2의 전성기를 구가하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 3회전 vs 엘레나 리바키나',
                date: '2023. 09. 02',
                description: '거함을 침몰시킨 경기. 윔블던 챔피언이자 강력한 우승 후보였던 리바키나를 상대로 3세트 접전 끝에 2-1 승리를 거뒀습니다. 베테랑의 노련미가 파워를 이길 수 있음을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 "쿨한 언니"</div>
                    <p>시원시원한 이목구비와 플레이 스타일로 많은 팬을 보유하고 있습니다. 인터뷰에서도 솔직하고 당당한 화법을 구사하여 "걸크러쉬" 매력을 발산합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"여전한 경쟁력"</strong></p>
                <p>Top 30 안팎의 랭킹을 유지하며 메이저 대회 시드 배정을 받고 있습니다. 언제든 상위 랭커를 잡을 수 있는 '지뢰밭' 같은 선수입니다.</p>
            `,
            faq: [
                {
                    question: '크르스테아는 결혼했나요?',
                    answer: '아직 미혼입니다. 테니스 선수인 산티아고 히랄도(콜롬비아)와 3년간 교제했었으며, 현재는 테니스에 집중하고 있습니다.'
                },
                {
                    question: '그녀의 취미는 무엇인가요?',
                    answer: '독서와 쇼핑을 즐깁니다. 또한 6개 국어(루마니아어, 영어, 스페인어, 프랑스어 등)를 구사하는 능력자이기도 합니다.'
                }
            ]
        }
    },
    'anastasia-potapova': {
        name: '아나스타샤 포타포바', nameEn: 'Anastasia Potapova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '주니어 세계 1위 출신의 재능. 강한 승부욕과 파이팅 넘치는 플레이로 코트 위에서 존재감을 발휘하는 영건입니다.',
        detailedProfile: {
            oneLineSummary: '주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "불꽃 같은 승부욕"</div>
                    <p>2016 윔블던 주니어 챔피언 출신입니다. 경기 중 감정을 숨기지 않고 표출하는 맹수 같은 스타일입니다. 이길 때나 질 때나 관중의 시선을 사로잡는 스타성이 있습니다.</p>
                    <p>동료 테니스 선수 알렉산더 쉐브첸코와 결혼하여 '테니스 부부' 대열에 합류했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워풀한 베이스라이너"</strong></p>
                <p>체구는 크지 않지만 온몸의 회전을 이용해 묵직한 공을 때립니다. 특히 다운더라인 공격을 즐겨 사용합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 가장 자신 있어 하는 샷입니다. 크로스와 다운더라인을 자유자재로 구사합니다.</li>
                    <li><strong>공격성:</strong> 수세에 몰려도 과감하게 카운터를 날리는 배짱이 있습니다.</li>
                    <li><strong>서브:</strong> 더블 폴트가 종종 나오지만, 에이스를 노리는 공격적인 서브를 넣습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 8.5, description: '작은 고추가 맵다.' },
                { name: '멘탈 (Mental)', score: 7, description: '감정 기복이 심함.' },
                { name: '기술 (Technique)', score: 8.5, description: '교과서적인 폼.' },
                { name: '이동 (Movement)', score: 8, description: '빠른 발.' },
                { name: '백핸드 (Backhand)', score: 9, description: '해결사.' },
                { name: '서브 (Serve)', score: 7, description: '개선 중.' }
            ],
            growthStory: `
                <p>러시아 사라토프 출신입니다. 할머니가 농구 코치 출신이라 운동신경을 물려받았습니다. 주니어 시절부터 '차라포바'의 후계자로 불리며 엘리트 코스를 밟았습니다. 성인 무대 초반 부상으로 고전했으나, 2023년부터 린츠 오픈 우승 등 투어 타이틀을 수집하며 잠재력을 터뜨리고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 린츠 오픈 결승',
                date: '2023. 02. 12',
                description: '통산 두 번째 투어 우승. 페트라 마르티치를 상대로 압도적인 경기력을 보여주며 6-3, 6-1로 완승했습니다. 이 우승으로 랭킹이 Top 30에 진입했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💅 "코트 위의 패셔니스타"</div>
                    <p>항상 화려한 의상과 메이크업으로 경기에 나섭니다. SNS에서도 활발하게 활동하며 팬들과 소통하는 신세대 스타입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"결혼 후 안정감"</strong></p>
                <p>2023년 말 결혼 이후 심리적으로 안정을 찾았다는 평가입니다. 2024년에도 인디언 웰스 8강 등 굵직한 성적을 내며 Top 20 진입을 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '포타포바의 남편은 누구인가요?',
                    answer: '카자흐스탄 국적의 ATP 선수 알렉산더 쉐브첸코입니다. 2023년 12월에 결혼식을 올렸습니다.'
                },
                {
                    question: '그녀의 코치는 누구인가요?',
                    answer: '오랫동안 이고르 안드레예프(전 러시아 국가대표)의 지도를 받았습니다. 현재는 투어 생활을 하며 남편과 서로 코칭을 돕기도 합니다.'
                }
            ]
        }
    },
    'ekaterina-alexandrova': {
        name: '에카테리나 알렉산드로바', nameEn: 'Ekaterina Alexandrova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '낮고 빠른 플랫성 타구가 일품인 선수. 특히 실내 코트에서 강한 면모를 보이며, 리듬을 탔을 때는 톱 랭커들도 막기 힘든 공격력을 뽐냅니다.',
        detailedProfile: {
            oneLineSummary: '코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ "속사포 테니스"</div>
                    <p>공을 잡고 생각할 틈을 주지 않습니다. 리턴부터 공격적이며, 랠리 중에도 템포를 극한으로 끌어올려 상대방을 질식시킵니다. 특히 잔디 코트나 실내 하드 코트처럼 공이 빠르게 깔리는 환경에서 극강의 모습을 보여줍니다.</p>
                    <p>2022년, 2023년 코리아 오픈(서울)에서 연속으로 결승에 진출(22년 우승, 23년 준우승)하여 한국 팬들에게 매우 친숙한 선수입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"플랫 히터 (Flat Hitter)"</strong></p>
                <p>스핀을 거의 걸지 않고 플랫하게 때립니다. 네트 위를 스치듯 지나가는 공은 바운드 후에도 낮게 깔려 상대가 받아치기 어렵습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 최상위권의 서브 능력을 가졌습니다. 스피드와 코스 모두 훌륭합니다.</li>
                    <li><strong>리턴:</strong> 상대 서브가 약하면 바로 위너로 연결합니다.</li>
                    <li><strong>약점:</strong> 클레이 코트처럼 공이 느리고 높게 튀는 환경에서는 위력이 반감됩니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '에이스 제조기.' },
                { name: '파워 (Power)', score: 9, description: '묵직하고 빠름.' },
                { name: '스피드 (Speed)', score: 7, description: '평범함.' },
                { name: '일관성 (Consistency)', score: 6, description: '기복이 있음.' },
                { name: '특수성 (Specialty)', score: 10, description: '실내/잔디 강자.' },
                { name: '멘탈 (Mental)', score: 7, description: '표정 변화 없음.' }
            ],
            growthStory: `
                <p>러시아 첼랴빈스크 출신이지만, 테니스 훈련을 위해 일찍이 체코 프라하로 이주하여 오랫동안 거주했습니다. 이 때문에 플레이 스타일이 체코 선수들(크비토바, 플리스코바)과 유사한 점이 많습니다.</p>
            `,
            signatureMatch: {
                title: '2022 코리아 오픈 결승 vs 옐레나 오스타펜코',
                date: '2022. 09. 25',
                description: '한국 팬들에게 강렬한 인상을 남긴 경기. 톱 시드 오스타펜코를 상대로 한 수 위의 파워와 정교함을 보여주며 2-0(7-6, 6-0)으로 완파하고 우승컵을 들어 올렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧊 "아이스 퀸"</div>
                    <p>경기 중 표정 변화가 거의 없습니다. 위너를 쳐도, 실수를 해도 무덤덤한 표정으로 다음 포인트를 준비하는 모습이 카리스마 있습니다. 하지만 시상식에서는 수줍은 미소를 보여주는 반전 매력이 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 20의 터줏대감"</strong></p>
                <p>2024년 마이애미 오픈 4강에 오르며 커리어 하이를 위협하고 있습니다. 시비옹테크와 페굴라를 연달아 꺾는 등 '거물 킬러'의 본능을 유감없이 발휘 중입니다.</p>
            `,
            faq: [
                {
                    question: '알렉산드로바는 왜 한국 주소를 쓰나요?',
                    answer: '실제 주소는 아니지만, 코리아 오픈에서의 좋은 기억 때문인지 한국 팬들에게 애정이 깊습니다. 팬들은 "명예 한국인"이라고 부르기도 합니다.'
                },
                {
                    question: '그녀의 서브 최고 속도는?',
                    answer: '시속 190km 이상을 기록하기도 하며, WTA 투어에서 에이스 개수 상위권에 항상 이름을 올립니다.'
                }
            ]
        }
    },
    'liudmila-samsonova': {
        name: '류드밀라 삼소노바', nameEn: 'Liudmila Samsonova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 서브와 포핸드를 앞세운 공격형 플레이어. 하드 코트에서 특히 위력적이며, WTA 투어 타이틀을 여러 차례 차지한 실력자입니다.',
        detailedProfile: {
            oneLineSummary: '이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "붐-붐(Boom-Boom) 테니스"</div>
                    <p>WTA 투어에서 가장 강력한 <strong>'원투 펀치(서브+포핸드)'</strong>를 가진 선수 중 한 명입니다. 컨디션이 좋은 날에는 누구도 그녀의 공을 건드리지 못할 정도로 압도적인 화력을 뿜어냅니다.</p>
                    <p>2022년 도쿄, 클리블랜드, 워싱턴 대회 등을 휩쓸며 단기간에 랭킹을 수직 상승시킨 '우승 청부사' 기질이 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적 올라운더"</strong></p>
                <p>큰 키(182cm)에서 내리꽂는 서브가 일품입니다. 베이스라인 뒤로 물러나지 않고 앞에서 공을 처리하며 경기를 주도합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 엄청난 스피드와 회전이 걸린 포핸드 위너를 양산합니다.</li>
                    <li><strong>드롭샷:</strong> 파워만 있는 것이 아니라, 허를 찌르는 드롭샷으로 상대를 묶어두는 센스도 갖췄습니다.</li>
                    <li><strong>기복:</strong> 강력한 무기가 있지만, 정교함이 떨어지는 날엔 에러가 쏟아집니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '투어 최상급.' },
                { name: '서브 (Serve)', score: 9, description: '가장 큰 무기.' },
                { name: '포핸드 (Forehand)', score: 9, description: '파괴적임.' },
                { name: '이동 (Movement)', score: 7, description: '키에 비해 민첩.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '결승전에 강함.' },
                { name: '안정성 (Consistency)', score: 6.5, description: '기복이 숙제.' }
            ],
            growthStory: `
                <p>러시아에서 태어났지만, 아버지를 따라 1살 때 이탈리아로 이주하여 성장했습니다. 한때 이탈리아 국적 취득을 고려하기도 했으나 러시아 국적으로 활동 중입니다. 이탈리아어에 능통하며, 플레이 스타일도 이탈리아 선수들처럼 창의적인 면이 섞여 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 몬트리올 마스터스 4강 vs 엘레나 리바키나',
                date: '2023. 08. 13',
                description: '진정한 파워 대결. 리바키나를 상대로 힘에서 전혀 밀리지 않고 오히려 압도하며 역전승을 거뒀습니다. 이 승리로 생애 첫 WTA 1000 결승에 진출했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎧 "헤드폰 소녀"</div>
                    <p>경기장에 입장할 때 항상 큰 헤드폰을 끼고 비트가 강한 음악을 들으며 집중하는 모습이 트레이드마크입니다. 시크해 보이지만 팬 서비스는 다정한 편입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 15 안착"</strong></p>
                <p>2023년 하반기 폭발적인 상승세 이후 2024년에는 다소 주춤했지만, 여전히 Top 20 안쪽을 유지하고 있습니다. 잔디 코트 시즌에 특히 강해 다가올 윔블던에서의 활약이 기대됩니다.</p>
            `,
            faq: [
                {
                    question: '삼소노바는 이탈리아어 가능한가요?',
                    answer: '네, 원어민 수준입니다. 인터뷰도 이탈리아어로 유창하게 진행하곤 합니다.'
                },
                {
                    question: '그녀의 별명은?',
                    answer: '팬들은 줄여서 "루다(Liuda)"라고 부릅니다.'
                }
            ]
        }
    },
    'veronika-kudermetova': {
        name: '베로니카 쿠데르메토바', nameEn: 'Veronika Kudermetova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '단식과 복식 모두 세계 수준인 올라운더. 안정적인 스트로크와 네트 플레이 능력을 겸비하여 어떤 상황에서도 견고한 경기를 펼칩니다.',
        detailedProfile: {
            oneLineSummary: '단식과 복식 모두 Top 10을 찍어본 "완성형 올라운더", 러시아의 조용한 실력자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👥 "복식 여제에서 단식 강자로"</div>
                    <p>엘레나 베스니나와 함께 2020 도쿄 올림픽 복식 4위를 기록하고, 2022년 WTA 파이널스 복식 우승을 차지하는 등 복식 스페셜리스트로 먼저 이름을 알렸습니다. 하지만 이후 탄탄한 기본기를 바탕으로 단식에서도 Top 10(최고 9위)에 오르며 '투 잡' 모두 성공한 케이스입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"안정적인 올라운드 플레이"</strong></p>
                <p>약점이 없는 육각형 선수입니다. 강력한 서브와 스트로크, 그리고 복식 경험에서 나오는 발리 능력까지 갖췄습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 에이스를 많이 기록하는 편이며, 첫 서브 성공률도 높습니다.</li>
                    <li><strong>네트 플레이:</strong> 기회가 오면 주저 없이 네트로 대시하여 포인트를 마무리합니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드가 매우 정확합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '밸런스 (Balance)', score: 9.5, description: '빈틈이 없음.' },
                { name: '네트 (Net)', score: 9, description: '복식 최상급 스킬.' },
                { name: '서브 (Serve)', score: 8.5, description: '강력함.' },
                { name: '파워 (Power)', score: 8, description: '평균 이상.' },
                { name: '멘탈 (Mental)', score: 7, description: '가끔 흔들림.' },
                { name: '체력 (Stamina)', score: 8.5, description: '단/복식 병행 가능.' }
            ],
            growthStory: `
                <p>러시아 카잔 출신의 스포츠 가족(아버지가 아이스하키 챔피언)에서 태어났습니다. 8살 때 테니스를 시작했으며, 남편인 세르게이 데메킨이 전담 코치를 맡고 있습니다. 부부의 호흡으로 꾸준히 성적을 내고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2022 롤랑가로스 8강 vs 파울라 바도사',
                date: '2022. 05. 30',
                description: '메이저 대회 첫 8강 진출. 3회전에서 바도사가 기권하긴 했으나, 그전까지 보여준 완벽한 경기 운영은 그녀가 클레이 코트에서도 강하다는 것을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👜 "아르마니 모델"</div>
                    <p>엠포리오 아르마니(EA7)의 후원을 받는 대표적인 선수로, 모델 같은 비율과 우아한 경기복 핏을 자랑합니다. 코트 위에서 가장 스타일리시한 선수 중 한 명입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"숨 고르기"</strong></p>
                <p>2023년 도쿄 오픈 우승 이후 2024년에는 다소 랭킹이 하락(Top 30~40)했으나, 기본기가 워낙 탄탄하여 언제든지 치고 올라올 수 있는 저력이 있습니다.</p>
            `,
            faq: [
                {
                    question: '쿠데르메토바의 남편은 누구?',
                    answer: '그녀의 코치인 세르게이 데메킨입니다. 데메킨은 과거 즈보나레바 등을 지도했던 유명 코치이자 모델 출신입니다.'
                },
                {
                    question: '가장 좋아하는 샷은?',
                    answer: '서브와 발리 콤비네이션을 즐깁니다. 현대 여자 테니스에서 보기 드문 클래식한 전술을 구사합니다.'
                }
            ]
        }
    },
    'elise-mertens': {
        name: '엘리스 메르텐스', nameEn: 'Elise Mertens', country: 'Belgium', countryFlag: '🇧🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '벨기에 테니스의 계보를 잇는 선수. 기복 없는 꾸준함과 뛰어난 수비력이 강점이며, 복식에서는 세계 랭킹 1위를 기록한 바 있습니다.',
        detailedProfile: {
            oneLineSummary: '복식 세계 1위 출신의 테니스 지능 천재, 벨기에의 "무결점 플레이어".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇧🇪 "클리스터스와 에넹의 후예"</div>
                    <p>벨기에 테니스 황금세대의 명맥을 잇는 선수입니다. 특히 <strong>복식(Doubles)에서는 세계 랭킹 1위</strong>를 찍고 그랜드슬램 4회 우승(호주 2회, 윔블던 1회, US 1회)을 달성한 '레전드'입니다.</p>
                    <p>단식에서도 2018 호주 오픈 4강에 오르는 등 꾸준히 Top 30을 유지하는 투어의 성실한 모범생입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"카운터 펀처 & 올라운더"</strong></p>
                <p>화려한 위너보다는 실수를 하지 않는 테니스를 합니다. 코트 전체를 넓게 쓰며 상대의 빈틈을 찌르는 영리한 플레이가 돋보입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>수비:</strong> 끈질깁니다. 상대가 지칠 때까지 공을 받아냅니다.</li>
                    <li><strong>양손 백핸드:</strong> 매우 안정적이며, 앵글 샷을 잘 구사합니다.</li>
                    <li><strong>서브:</strong> 어깨 회전이 큰 독특한 폼을 가지고 있으며, 코스 공략이 좋습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '전술 (Tactics)', score: 10, description: '테니스 IQ 높음.' },
                { name: '복식 (Doubles)', score: 10, description: '세계 최강.' },
                { name: '수비 (Defense)', score: 9, description: '물샐틈 없음.' },
                { name: '안정성 (Consistency)', score: 9, description: '에러 기계가 고장남.' },
                { name: '파워 (Power)', score: 6.5, description: '결정력 부족.' },
                { name: '서브 (Serve)', score: 7, description: '평균적.' }
            ],
            growthStory: `
                <p>벨기에 뢰번 출신입니다. 킴 클리스터스 아카데미에서 훈련하며 대선배의 멘토링을 받았습니다. 가정 학습(홈스쿨링)을 병행하며 테니스에 매진했고, 성인이 되자마자 투어에 안착했습니다.</p>
            `,
            signatureMatch: {
                title: '2018 호주 오픈 8강 vs 엘리나 스비톨리나',
                date: '2018. 01. 23',
                description: '세계 무대에 이름을 알린 경기. 당시 Top 5였던 스비톨리나를 상대로 6-4, 6-0 베이글 스코어를 기록하며 완승했습니다. 메이저 4강 진출의 쾌거를 이뤘습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐶 "동물 애호가"</div>
                    <p>집에 4마리의 개와 많은 새를 키울 정도로 동물을 사랑합니다. 또한 킴 클리스터스와 자주 비교되며 벨기에 팬들의 전폭적인 지지를 받고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"복식은 최강, 단식은 꾸준"</strong></p>
                <p>2024년 호주 오픈 복식 우승(셰쑤웨이와 파트너)을 차지하며 여전한 클래스를 과시했습니다. 단식에서도 30위를 굳건히 지키고 있습니다.</p>
            `,
            faq: [
                {
                    question: '메르텐스의 훈련지는?',
                    answer: '벨기에의 "킴 클리스터스 아카데미" 출신이며, 클리스터스가 롤모델이자 멘토입니다.'
                },
                {
                    question: '그녀의 복식 파트너는?',
                    answer: '사바렌카, 셰쑤웨이, 쟝 슈아이 등 다양한 선수들과 호흡을 맞춰 우승을 합작했습니다. "누구와 짝을 이뤄도 우승하는" 능력이 있습니다.'
                }
            ]
        }
    },
    'donna-vekic': {
        name: '돈나 베키치', nameEn: 'Donna Vekic', country: 'Croatia', countryFlag: '🇭🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 서브와 포핸드를 겸비한 크로아티아의 스타. 2024 파리 올림픽 은메달리스트로, 오랜 부상을 딛고 제2의 전성기를 맞이했습니다.',
        detailedProfile: {
            oneLineSummary: '2024 파리 올림픽 은메달리스트, 사업가이자 테니스 스타인 크로아티아의 "슈퍼우먼".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥈 "파리의 기적, 올림픽 은메달"</div>
                    <p>2024 파리 올림픽 결승에 진출하여 은메달을 목에 걸었습니다. 윔블던 4강(2024)에 이어 올림픽 메달까지 획득하며 커리어 최고의 해를 보냈습니다. 끊임없는 부상과 은퇴 고민을 이겨내고 거둔 성과라 더욱 값졌습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"빅 히터 (Big Hitter)"</strong></p>
                <p>시원시원한 공격 테니스를 구사합니다. 특히 강력한 서브와 포핸드로 상대를 압박하는 스타일입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어에서 손꼽히는 강서브를 보유했습니다. 중요한 포인트에서 에이스를 터뜨립니다.</li>
                    <li><strong>포핸드:</strong> 역크로스 포핸드가 주무기입니다.</li>
                    <li><strong>드롭샷:</strong> 힘으로 밀어붙이다가 기습적으로 놓는 드롭샷이 일품입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 9, description: '주무기.' },
                { name: '파워 (Power)', score: 9, description: '묵직함.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '성숙해짐.' },
                { name: '이동 (Movement)', score: 7, description: '무릎 부상 여파.' },
                { name: '수비 (Defense)', score: 7, description: '공격이 최선의 수비.' },
                { name: '사업수완 (Business)', score: 10, description: '향초 브랜드 CEO.' }
            ],
            growthStory: `
                <p>크로아티아 오시예크 출신입니다. 16세에 투어 결승에 오르며 '천재 소녀'로 주목받았으나, 무릎 수술 등으로 긴 슬럼프를 겪었습니다. 은퇴까지 고려했으나 불굴의 의지로 재활에 성공, 2023-2024년 화려하게 부활했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 윔블던 8강 vs 룰루 선',
                date: '2024. 07. 09',
                description: '커리어 첫 윔블던 4강 진출. 예선 통과자 돌풍을 일으킨 룰루 선을 잠재우고 승리했습니다. 비가 오락가락하는 악조건 속에서도 집중력을 잃지 않았습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🕯️ "향기 나는 CEO"</div>
                    <p>고급 향초 브랜드 'DNNA'를 런칭하여 성공시킨 사업가이기도 합니다. 테니스와 비즈니스 두 마리 토끼를 모두 잡은 능력자이자, 화려한 외모로 많은 팬을 거느리고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"커리어 정점"</strong></p>
                <p>올림픽 은메달과 윔블던 4강으로 세계 랭킹이 다시 Top 20에 진입했습니다. 이제는 그랜드슬램 우승을 정조준하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '베키치의 브랜드는 무엇인가요?',
                    answer: '천연 밀랍으로 만든 럭셔리 향초 브랜드 "DNNA"의 설립자이자 CEO입니다. 수익금 일부를 벌 보존에 기부합니다.'
                },
                {
                    question: '파리 올림픽 결승 상대는?',
                    answer: '중국의 정친원과 맞붙어 아쉽게 패배했지만, 크로아티아 테니스 역사에 남을 명승부였습니다.'
                }
            ]
        }
    },
    'marie-bouzkova': {
        name: '마리 부즈코바', nameEn: 'Marie Bouzkova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 에너자이저. 끈질긴 수비와 지치지 않는 체력으로 상대를 지치게 만들며, 항상 미소를 잃지 않는 스포츠맨십으로 사랑받습니다.',
        detailedProfile: {
            oneLineSummary: '결코 포기하지 않는 체코의 "스마일 에너자이저", 수비 테니스의 진수.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "WTA 스포츠맨십 상의 단골"</div>
                    <p>동료 선수들이 뽑은 '가장 매너 좋은 선수'(Karen Krantzcke Sportsmanship Award) 상을 수상할 정도로 인성이 훌륭합니다. 경기 중에도 미소를 잃지 않으며, 심판 판정에도 정중하게 대응하는 모습이 귀감이 됩니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"끈질긴 수비형 카운터 펀처"</strong></p>
                <p>어떤 공이든 다 받아넘깁니다. 상대가 "이제 끝났다"고 생각한 순간에 공이 다시 넘어옵니다. 긴 랠리를 유도하여 상대의 체력과 멘탈을 무너뜨립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>체력:</strong> 마라토너급 체력을 자랑합니다. 3시간 경기도 거뜬합니다.</li>
                    <li><strong>백핸드:</strong> 매우 안정적이고 플랫하게 깔립니다.</li>
                    <li><strong>전략:</strong> 상대의 힘을 이용하는 능력이 탁월하며, 실수 유발이 주특기입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 10, description: '통곡의 벽.' },
                { name: '체력 (Stamina)', score: 10, description: '무한 동력.' },
                { name: '매너 (Manner)', score: 10, description: '천사표.' },
                { name: '파워 (Power)', score: 5, description: '스스로 끝내는 힘 부족.' },
                { name: '서브 (Serve)', score: 6, description: '약한 편.' },
                { name: '멘탈 (Mental)', score: 9, description: '긍정의 힘.' }
            ],
            growthStory: `
                <p>체코 프라하 출신입니다. 10대 때 미국 플로리다의 볼리티에리 아카데미에서 2년간 훈련했습니다. 2014 US 오픈 주니어 우승자 출신이며, 성인 무대에서는 2022년 윔블던 8강에 오르며 잠재력을 터뜨렸습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 16강 vs 카롤린 가르시아',
                date: '2022. 07. 03',
                description: '최고의 수비력을 보여준 경기. 당시 8연승 중이던 가르시아의 맹공을 온몸으로 막아내며 2-0 승리를 거뒀습니다. 잔디 코트에서도 수비 테니스가 통할 수 있음을 보여주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥤 "물병 세레머니"</div>
                    <p>경기 중 휴식 시간마다 꼼꼼하게 메모를 확인하고, 거대한 물병을 항상 지니고 다녀 팬들에게 소소한 재미를 줍니다. 특유의 밝은 에너지가 매력 포인트입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"꾸준한 중상위권"</strong></p>
                <p>Top 30~40위권을 꾸준히 유지하고 있습니다. 폭발적인 한 방은 없지만, 누구를 만나도 쉽게 지지 않는 까다로운 상대로 자리 잡았습니다.</p>
            `,
            faq: [
                {
                    question: '부즈코바가 영어를 잘하는 이유는?',
                    answer: '어린 시절 미국 플로리다에서 유학 생활을 하여 원어민 수준의 영어를 구사합니다. 스페인어도 유창합니다.'
                },
                {
                    question: '그녀의 전공은?',
                    answer: '인디애나 대학교 이스트(Indiana University East)에서 경영학 학위를 취득한 주경야독형 선수입니다.'
                }
            ]
        }
    },
    'katerina-siniakova': {
        name: '카테리나 시니아코바', nameEn: 'Katerina Siniakova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '현역 최고의 복식 여제 중 한 명. 그랜드슬램 복식 전관왕(골든 슬램)을 달성했으며, 단식에서도 특유의 투지와 네트 플레이로 경쟁력을 보여줍니다.',
        detailedProfile: {
            oneLineSummary: '복식 커리어 골든 슬램 달성, 단식까지 섭렵한 체코의 "파마머리 전사".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "복식의 살아있는 전설"</div>
                    <p>바르보라 크레이치코바와 짝을 이뤄 4대 그랜드슬램과 올림픽 금메달(2020 도쿄)을 모두 휩쓴 <strong>'커리어 골든 슬램'</strong> 달성자입니다. 2024 파리 올림픽에서는 혼합 복식 금메달까지 추가하며 복식 테니스의 신(God)으로 등극했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"네트 플레이의 달인"</strong></p>
                <p>단식에서도 복식처럼 플레이합니다. 기회만 되면 네트로 대시하여 발리로 끊어냅니다. 코트 커버 범위가 넓고 반응 속도가 동물적입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>발리:</strong> 투어 전체를 통틀어 가장 발리를 잘하는 선수 중 한 명입니다.</li>
                    <li><strong>투지:</strong> 공 하나하나에 목숨을 건 듯 소리를 지르며 뜁니다. 승부욕이 엄청납니다.</li>
                    <li><strong>무브먼트:</strong> 예측 불가능한 공도 몸을 날려 받아냅니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '복식 (Doubles)', score: 10, description: 'GOAT 레벨.' },
                { name: '네트 (Net)', score: 10, description: '환상적임.' },
                { name: '투지 (Spirit)', score: 9.5, description: '전사 그 자체.' },
                { name: '체력 (Stamina)', score: 9, description: '단/복식 모두 소화.' },
                { name: '서브 (Serve)', score: 6.5, description: '약점.' },
                { name: '멘탈 (Mental)', score: 7, description: '자책이 심함.' }
            ],
            growthStory: `
                <p>체코 흐라데츠크랄로베 출신입니다. 러시아인 아버지와 체코인 어머니 사이에서 태어났습니다. 주니어 시절부터 크레이치코바와 호흡을 맞춰 세계를 제패했으며, 성인이 되어서도 그 파트너십을 이어가 전설을 썼습니다. (2024년 잠시 결별 후 각자의 길을 걷고 있습니다.)</p>
            `,
            signatureMatch: {
                title: '2024 프랑스 오픈 복식 결승',
                date: '2024. 06. 09',
                description: '코코 가우프와 짝을 이뤄 우승한 경기. 크레이치코바가 아닌 새로운 파트너와도 메이저 우승을 차지하며, 자신이 "복식의 치트키"임을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "사자머리"</div>
                    <p>풍성한 뽀글머리(파마머리)가 트레이드마크입니다. 코트 위에서 감정을 격렬하게 표현하는 모습이 마치 사자가 포효하는 것 같아 인상적입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"단식 랭킹 상승세"</strong></p>
                <p>복식에 가려져 있었지만, 최근 단식에서도 투어 우승(2023 바트홈부르크, 난창)을 차지하며 Top 30~40위권을 유지하고 있습니다. 이제는 단식 선수로서의 명성도 쌓아가고 있습니다.</p>
            `,
            faq: [
                {
                    question: '시니아코바의 복식 파트너는?',
                    answer: '오랫동안 바르보라 크레이치코바와 짝이었으나, 2024년부터는 코코 가우프, 타일러 타운센드 등 다양한 선수와 호흡을 맞추고 있습니다.'
                },
                {
                    question: '그녀의 남자 친구는?',
                    answer: '동료 테니스 선수인 토마스 마하치(Tomas Machac)와 공개 연애 중이며, 파리 올림픽 혼합 복식에서 함께 금메달을 따 영화 같은 스토리를 만들었습니다.'
                }
            ]
        }
    },
    'caroline-garcia': {
        name: '카롤린 가르시아', nameEn: 'Caroline Garcia', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '공격적인 리턴 포지스("Fly with Caro")과 다이내믹한 플레이가 특징입니다. WTA 파이널스 우승 경험이 있는 프랑스의 에이스입니다.',
        detailedProfile: {
            oneLineSummary: 'WTA 파이널스 챔피언, 코트 안쪽으로 파고드는 "닥공(닥치고 공격)" 테니스의 선봉장.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">✈️ "Fly With Caro"</div>
                    <p>득점 후 양팔을 벌리고 비행기처럼 뛰는 세레머니가 그녀의 트레이드마크입니다. 2022년 하반기 신들린듯한 경기력으로 신시내티 우승, US 오픈 4강, 그리고 왕중왕전인 <strong>WTA 파이널스 우승</strong>까지 차지하며 세계 4위로 시즌을 마감한 저력이 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"울트라 어그레시브 (Ultra Aggressive)"</strong></p>
                <p>베이스라인 안쪽 깊숙이 들어가서 리턴을 받아칩니다. 상대 서브가 바운드 되자마자 때려버리기 때문에 상대가 반응할 시간이 없습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>리턴 포지션:</strong> 투어에서 가장 앞에서 리턴을 받는 선수입니다.</li>
                    <li><strong>서브:</strong> 에이스 능력이 탁월합니다. 킥 서브와 플랫 서브를 적절히 섞습니다.</li>
                    <li><strong>기복:</strong> 공격 성공률이 떨어지는 날에는 허무하게 무너지는 경우도 있습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '공격성 (Aggression)', score: 10, description: '타의 추종을 불허함.' },
                { name: '서브 (Serve)', score: 9, description: '톱 클래스.' },
                { name: '운동신경 (Athleticism)', score: 9, description: '탄력이 좋음.' },
                { name: '멘탈 (Mental)', score: 7, description: '감정 변화가 큼.' },
                { name: '수비 (Defense)', score: 6, description: '공격 실패 시 취약.' },
                { name: '복식 (Doubles)', score: 9, description: '프랑스 오픈 챔피언.' }
            ],
            growthStory: `
                <p>프랑스 생제르맹앙레 출신입니다. 아버지의 지도로 테니스를 배웠으며, 주니어 시절부터 앤디 머레이가 "미래의 세계 1위"라고 지목했을 정도로 재능을 인정받았습니다. 단식과 복식(크리스티나 믈라데노비치와 파트너) 모두에서 그랜드슬램 타이틀(복식)을 따냈습니다.</p>
            `,
            signatureMatch: {
                title: '2022 WTA 파이널스 결승 vs 아리나 사바렌카',
                date: '2022. 11. 07',
                description: '커리어의 정점. 파워 히터 사바렌카를 상대로 서브와 리턴에서 모두 압도하며 2-0(7-6, 6-4) 승리를 거두고 우승 상금과 명예를 모두 거머쥐었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "프랑스의 자존심"</div>
                    <p>모레스모, 피르스 이후 프랑스 여자 테니스를 이끄는 에이스입니다. 홈 관중의 열광적인 응원을 받으며, 열정적인 경기 매너로 팬들을 사로잡습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"재도약 준비"</strong></p>
                <p>2023-2024년에는 다소 기복 있는 모습을 보이며 Top 20 밖으로 밀려났지만, 언제든지 우승할 수 있는 폭발력을 가지고 있습니다.</p>
            `,
            faq: [
                {
                    question: '그녀의 코치는?',
                    answer: '오랫동안 아버지 루이 폴 가르시아가 코치를 맡았으나, 2021년부터는 외부 코치진과 협업하며 변화를 시도하고 있습니다.'
                },
                {
                    question: '가르시아의 팟캐스트?',
                    answer: '"Tennis Insider Club"이라는 팟캐스트를 동료 선수와 함께 진행하며 테니스계의 비하인드 스토리를 전하고 있습니다.'
                }
            ]
        }
    },
    'anhelina-kalinina': {
        name: '안헬리나 칼리니나', nameEn: 'Anhelina Kalinina', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '우크라이나 테니스의 주축. 클레이 코트에서 강점을 보이며, 탄탄한 기본기를 바탕으로 로마 마스터스 결승에 오르는 저력을 보여주었습니다.',
        detailedProfile: {
            oneLineSummary: '로마 마스터스 준우승의 주인공, 우크라이나의 "굳건한 멘탈".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇦 "전쟁 속에 피어난 희망"</div>
                    <p>조국의 어려운 상황 속에서도 2023 로마 마스터스(WTA 1000) 결승에 진출하며 우크라이나 국민들에게 큰 위로와 희망을 주었습니다. 경기장 밖에서도 적극적으로 목소리를 내며 평화를 호소하는 소신 있는 선수입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"클레이 코트 스페셜리스트 & 카운터 펀처"</strong></p>
                <p>안정적인 스트로크를 바탕으로 긴 랠리를 즐깁니다. 무리한 공격보다는 상대의 실수를 유도하고, 기회가 왔을 때 정확한 샷으로 득점합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 매우 견고하며, 앵글 샷을 잘 구사합니다.</li>
                    <li><strong>인내심:</strong> 어떤 상황에서도 쉽게 포기하지 않는 끈기가 강점입니다.</li>
                    <li><strong>체력:</strong> 3시간이 넘는 혈투도 마다하지 않는 강철 체력을 가졌습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '체력 (Stamina)', score: 9.5, description: '장기전 강자.' },
                { name: '멘탈 (Mental)', score: 9, description: '애국심 버프.' },
                { name: '수비 (Defense)', score: 8.5, description: '끈질김.' },
                { name: '파워 (Power)', score: 6.5, description: '평범함.' },
                { name: '서브 (Serve)', score: 6, description: '약한 편.' },
                { name: '클레이 (Clay)', score: 9, description: '주무대.' }
            ],
            growthStory: `
                <p>우크라이나 노바 카호프카 출신입니다. 주니어 시절  US 오픈 주니어 준우승을 차지했습니다. 프로 데뷔 후 오랫동안 빛을 보지 못하다가 20대 중반인 2022년부터 급성장하여 세계 랭킹 25위권에 진입했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 로마 마스터스 4강 vs 베로니카 쿠데르메토바',
                date: '2023. 05. 20',
                description: '감동의 명승부. 3시간 가까운 접전 끝에 2-1 승리를 거두고 생애 첫 WTA 1000 시리즈 결승에 올랐습니다. 승리 후 눈물을 흘리며 조국에 영광을 돌렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💪 "투혼의 아이콘"</div>
                    <p>부상을 당해도 테이핑을 감고 끝까지 뛰는 투혼을 자주 보여줍니다. 그녀의 경기는 단순한 스포츠 그 이상의 감동을 줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상 회복과 재도약"</strong></p>
                <p>크고 작은 부상으로 약간의 부침이 있지만, 여전히 Top 30~50위권을 유지하며 투어의 허리 역할을 하고 있습니다. 2024년 스트라스부르, 루앙 등에서 준수한 성적을 냈습니다.</p>
            `,
            faq: [
                {
                    question: '그녀의 가족은 어디에 있나요?',
                    answer: '부모님과 오빠는 여전히 우크라이나에 머물고 있으며, 칼린스카야는 상금을 보내 가족들을 지원하고 있습니다.'
                },
                {
                    question: '가장 좋아하는 코트는?',
                    answer: '클레이 코트를 가장 선호합니다. 공의 바운드가 높고 랠리가 길어지는 환경에서 강점을 발휘합니다.'
                }
            ]
        }
    },
    'lesia-tsurenko': {
        name: '레시아 추렌코', nameEn: 'Lesia Tsurenko', country: 'Ukraine', countryFlag: '🇺🇦', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '투어 경험이 풍부한 베테랑. 부상을 자주 겪으면서도 오뚝이처럼 다시 일어서는 정신력의 소유자로, 카운터 펀치 능력이 뛰어납니다.',
        detailedProfile: {
            oneLineSummary: '부상을 딛고 일어서는 "오뚝이", 우크라이나의 백전노장.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🩹 "부상 병동? NO, 불사조!"</div>
                    <p>커리어 내내 수많은 부상에 시달렸지만, 그때마다 다시 재활에 성공하여 코트로 돌아오는 불굴의 의지를 가진 선수입니다. 30대 중반의 나이에도 여전히 Top 100 안에서 경쟁력을 발휘하며, 2023 윔블던 16강에 오르는 등 '클래스는 영원하다'를 증명하고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"지능적인 베이스라이너"</strong></p>
                <p>화려한 파워보다는 정교한 코스 공략과 안정적인 랠리로 승부합니다. 상대의 힘을 역이용하는 능력이 뛰어납니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그녀의 가장 믿음직한 무기입니다. 다운더라인 백핸드가 날카롭습니다.</li>
                    <li><strong>수비:</strong> 코트 커버력이 좋고, 어려운 공도 끈질기게 받아넘깁니다.</li>
                    <li><strong>서브:</strong> 강하지는 않지만 코스 선택이 다양합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '경험 (Experience)', score: 10, description: '산전수전.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '포기하지 않음.' },
                { name: '수비 (Defense)', score: 8, description: '탄탄함.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '주무기.' },
                { name: '체력 (Stamina)', score: 6, description: '부상 변수.' },
                { name: '파워 (Power)', score: 6, description: '약한 편.' }
            ],
            growthStory: `
                <p>우크라이나 볼로디미레츠 출신입니다. 아버지도 전력 발전소에서 일하는 등 평범한 가정에서 자랐으나, 테니스에 재능을 보여 프로의 길로 들어섰습니다. 4개의 WTA 투어 타이틀(아카풀코 등)을 보유하고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2023 윔블던 3회전 vs 아나 보그단',
                date: '2023. 07. 07',
                description: '그랜드슬램 역사상 최장 타이 브레이크(38점). 3시간 40분의 혈투 끝에 마지막 세트 타이브레이크를 20-18로 이기며 승리했습니다. 두 선수 모두 탈진할 정도의 명승부였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧘 "침착함의 미학"</div>
                    <p>경기 중 좀처럼 흥분하지 않고 차분하게 경기를 풀어나갑니다. 후배 선수들에게 많은 조언을 해주는 든든한 맏언니 역할을 하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"마지막 불꽃"</strong></p>
                <p>여전히 그랜드슬램 본선에 직행할 수 있는 랭킹을 유지하고 있습니다. 베테랑의 품격을 보여주며 매 경기 최선을 다하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '추렌코의 최고 랭킹은?',
                    answer: '2019년에 세계 랭킹 23위까지 올랐습니다.'
                },
                {
                    question: '그녀의 은퇴 계획은?',
                    answer: '구체적인 계획은 밝히지 않았으나, 몸이 허락하는 한 계속해서 투어 생활을 이어가고 싶다는 의지를 보였습니다.'
                }
            ]
        }
    },
    'magda-linette': {
        name: '마그다 리네트', nameEn: 'Magda Linette', country: 'Poland', countryFlag: '🇵🇱', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '성실함의 대명사. 30대에 접어들어 2023 호주 오픈 4강에 진출하며 커리어 하이를 찍은 대기만성형 플레이어입니다.',
        detailedProfile: {
            oneLineSummary: '30대에 커리어 하이를 찍은 폴란드의 "대기만성", 노력의 아이콘.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">⏳ "늦게 핀 꽃이 더 아름답다"</div>
                    <p>이가 시비옹테크의 그늘에 가려져 있던 폴란드의 2인자였으나, 2023 호주 오픈에서 기적 같은 4강 진출을 이뤄내며 전 세계를 놀라게 했습니다. 30세가 넘은 나이에 전성기를 맞이한 그녀의 스토리는 많은 이들에게 영감을 줍니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"안정적인 카운터 펀처"</strong></p>
                <p>매우 교과서적인 폼을 가지고 있습니다. 무리하지 않고 코스 구석구석을 찌르는 정교한 플레이가 강점입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 다운더라인 백핸드는 그녀의 필살기입니다.</li>
                    <li><strong>이동:</strong> 발이 빠르고 코트 커버가 넓습니다.</li>
                    <li><strong>전략:</strong> 상대의 약점을 파고드는 지능적인 플레이를 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '노력 (Effort)', score: 10, description: '성실함 그 자체.' },
                { name: '백핸드 (Backhand)', score: 9, description: '매우 정확함.' },
                { name: '이동 (Movement)', score: 8.5, description: '민첩함.' },
                { name: '멘탈 (Mental)', score: 8, description: '차분함.' },
                { name: '파워 (Power)', score: 6.5, description: '결정력은 다소 부족.' },
                { name: '서브 (Serve)', score: 7, description: '평균적.' }
            ],
            growthStory: `
                <p>폴란드 포즈난 출신입니다. 아버지도 테니스 코치입니다. 주니어 시절부터 두각을 나타냈으나, 성인 무대에서는 오랫동안 Top 50-100 사이를 오가는 평범한 선수였습니다. 하지만 포기하지 않고 꾸준히 노력한 끝에 30대에 빛을 보게 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 8강 vs 카롤리나 플리스코바',
                date: '2023. 01. 25',
                description: '생애 첫 메이저 4강 확정. 강서브를 자랑하는 전 세계 1위 플리스코바를 상대로 리턴과 스트로크 대결에서 완승(6-3, 7-5)을 거뒀습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">☺️ "옆집 언니"</div>
                    <p>친근하고 소탈한 성격으로 팬들과 적극적으로 소통합니다. SNS에 올리는 유머러스한 게시물들이 화제가 되기도 합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"제2의 전성기 지속"</strong></p>
                <p>2024년에도 프라하 오픈 우승(클레이)을 차지하며 건재함을 과시했습니다. 하드, 잔디, 클레이를 가리지 않고 고른 성적을 내고 있습니다.</p>
            `,
            faq: [
                {
                    question: '리네트의 취미는?',
                    answer: '패션과 여행에 관심이 많으며, 특히 신발(스니커즈) 수집을 좋아한다고 합니다.'
                },
                {
                    question: '시비옹테크와의 관계는?',
                    answer: '매우 좋습니다. 빌리 진 킹 컵 등 국가대항전에서 함께 폴란드를 대표해 뛰며 서로를 응원합니다.'
                }
            ]
        }
    },
    'sofia-kenin': {
        name: '소피아 케닌', nameEn: 'Sofia Kenin', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2020 호주 오픈 챔피언. 작은 체구에도 불구하고 뛰어난 타이밍과 코트 커버력, 그리고 강한 승부근성이 돋보이는 선수입니다.',
        detailedProfile: {
            oneLineSummary: '2020 호주 오픈 챔피언, 거인들을 쓰러뜨리는 "소닉(Sonic)" 같은 스피드와 기술.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "언더독의 반란"</div>
                    <p>2020년 호주 오픈에서 21세의 나이로 우승하며 세계를 깜짝 놀라게 했습니다. 결승에서 가르비녜 무구루사를 꺾었고, 같은 해 롤랑가로스에서도 준우승을 차지하며 "원 히트 원더"가 아님을 증명했습니다. 독특한 플레이 스타일과 불타는 승부욕으로 유명합니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"지능적인 카운터 펀처"</strong></p>
                <p>힘으로 제압하기보다는 타이밍과 코스로 승부합니다. 공을 라이징(바운드되자마자)으로 처리하여 상대의 시간을 뺏는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 투어 최고 수준의 드롭샷을 구사합니다. 예측할 수 없는 타이밍에 툭 떨어뜨립니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드가 매우 정확하며 위너를 많이 만들어냅니다.</li>
                    <li><strong>서브:</strong> 토스 높이가 일정하지 않아 읽기 어렵지만, 이로 인해 서브 난조를 겪기도 합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 9.5, description: '드롭샷 장인.' },
                { name: '멘탈 (Mental)', score: 8, description: '승부욕이 강함.' },
                { name: '스피드 (Speed)', score: 9, description: '다람쥐처럼 빠름.' },
                { name: '타이밍 (Timing)', score: 9.5, description: '박자 뺏기.' },
                { name: '파워 (Power)', score: 6.5, description: '평범함.' },
                { name: '서브 (Serve)', score: 6, description: '기복이 심함.' }
            ],
            growthStory: `
                <p>러시아 모스크바에서 태어났지만 어릴 때 가족과 함께 미국으로 이주했습니다. '테니스 신동'으로 불리며 각종 TV 쇼에 출연했고, 5살 때 킴 클리스터스의 손을 잡고 경기장에 입장한 영상이 유명합니다. 아버지 알렉스 케닌의 독특한 지도를 받으며 성장했습니다.</p>
            `,
            signatureMatch: {
                title: '2020 호주 오픈 결승 vs 가르비녜 무구루사',
                date: '2020. 02. 01',
                description: '그랜드슬램 우승의 순간. 첫 메이저 결승임에도 전혀 주눅 들지 않고, 3세트 중요한 순간마다 위너를 터뜨리며 역전승(4-6, 6-2, 6-2)을 거뒀습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇺🇸 "아메리칸 드림"</div>
                    <p>이민자 가정에서 성공 신화를 쓴 주인공입니다. 경기 중 끊임없이 혼잣말을 하거나 라켓을 던지는 등 감정 표현이 솔직하여 팬들의 호불호가 갈리지만, 그만큼 열정적입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부진 탈출 중"</strong></p>
                <p>우승 이후 긴 슬럼프와 부상을 겪으며 랭킹이 400위권까지 떨어졌었으나, 2023 윔블던 3회전, 샌디에이고 준우승 등으로 다시 Top 50에 복귀하며 부활의 신호탄을 쏘아 올렸습니다.</p>
            `,
            faq: [
                {
                    question: '케닌의 별명은?',
                    answer: '"소닉(Sonic)"입니다. 닌텐도 캐릭터 소닉처럼 빠르고 에너지가 넘쳐서 붙여진 별명입니다.'
                },
                {
                    question: '그녀의 코치는?',
                    answer: '아버지 알렉스 케닌과 오랫동안 함께했으나, 성적 부진으로 인해 결별과 재결합을 반복하고 있습니다.'
                }
            ]
        }
    },
    'paula-badosa': {
        name: '파울라 바도사', nameEn: 'Paula Badosa', country: 'Spain', countryFlag: '🇪🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 베이스라인 플레이가 강점인 스페인의 스타. 부상을 딛고 다시 랭킹을 끌어올리고 있는 저력의 선수입니다.',
        detailedProfile: {
            oneLineSummary: '스페인의 열정을 담은 "파워 히터", 부상을 딛고 돌아온 테니스 여신.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇪🇸 "샤라포바의 후예?"</div>
                    <p>큰 키와 강력한 스트로크, 그리고 스타성 때문에 마리아 샤라포바와 자주 비교되었습니다. 2021년 인디언 웰스 우승으로 세계 2위까지 올랐으나, 등 부상으로 은퇴 위기까지 겪었습니다. 하지만 2024년, 기적처럼 부활하여 다시 투어를 호령하고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너"</strong></p>
                <p>묵직한 서브와 강력한 그라운드 스트로크로 상대를 힘으로 누릅니다. 특히 하드 코트에서 공의 스피드가 배가됩니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 상위권의 서브 스피드(시속 190km 이상)를 자랑합니다.</li>
                    <li><strong>포핸드:</strong> 역크로스 포핸드가 위력적이며, 위너를 만들어내는 주무기입니다.</li>
                    <li><strong>멘탈:</strong> 과거에는 멘탈이 약점이었으나, 심리 치료와 경험을 통해 훨씬 단단해졌습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '최상급.' },
                { name: '서브 (Serve)', score: 9, description: '에이스 제조.' },
                { name: '스타성 (Star)', score: 10, description: '슈퍼스타.' },
                { name: '체력 (Stamina)', score: 6, description: '부상 관리 필수.' },
                { name: '멘탈 (Mental)', score: 8, description: '성숙해짐.' },
                { name: '수비 (Defense)', score: 7, description: '나쁘지 않음.' }
            ],
            growthStory: `
                <p>미국 뉴욕 맨해튼에서 태어났지만, 7살 때 스페인으로 돌아가 바르셀로나에서 성장했습니다. 어릴 때부터 엘리트 코스를 밟았지만, 과도한 기대에 대한 부담감으로 우울증을 겪기도 했습니다. 이를 극복하고 세계 정상급 선수로 성장한 인간 승리의 주인공입니다.</p>
            `,
            signatureMatch: {
                title: '2021 인디언 웰스 결승 vs 빅토리아 아자렌카',
                date: '2021. 10. 17',
                description: '커리어 첫 WTA 1000 우승. 전 세계 1위 아자렌카와 3시간 4분의 혈투 끝에 2-1(7-6, 2-6, 7-6)로 승리했습니다. 대회 역사상 최고의 결승전 중 하나로 꼽힙니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💑 "치치파스티토스 (Tsitsidosa)"</div>
                    <p>그리스의 테니스 스타 스테파노스 치치파스와 공개 연애 중입니다. 두 선수는 SNS에 커플 계정을 운영하며 테니스계 최고의 '파워 커플'로 사랑받고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"화려한 부활"</strong></p>
                <p>2024년 워싱턴 오픈 우승을 차지하며 부상 공백을 완벽하게 메웠습니다. 랭킹도 수직 상승하여 다시 시드권에 진입했습니다.</p>
            `,
            faq: [
                {
                    question: '그녀의 별명은?',
                    answer: '부모님이 패션업계에 종사해서인지 패션 감각이 뛰어나 "테니스계의 모델"로도 불립니다.'
                },
                {
                    question: '사용하는 라켓은?',
                    answer: '윌슨 블레이드(Wilson Blade) 98을 사용합니다.'
                }
            ]
        }
    },
    'karolina-muchova': {
        name: '카롤리나 무호바', nameEn: 'Karolina Muchova', country: 'Czech Republic', countryFlag: '🇨🇿', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '올라운드 플레이어의 정석. 다양한 구질과 네트 플레이, 슬라이스를 자유자재로 구사하며 "테니스를 가장 예쁘게 치는 선수" 중 한 명으로 꼽힙니다. 2023 롤랑가로스 준우승자.',
        detailedProfile: {
            oneLineSummary: '2023 롤랑가로스 준우승, 테니스를 예술로 승화시키는 체코의 "테크니션".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "코트 위의 예술가"</div>
                    <p>현대 테니스에서 보기 드문 <strong>'올라운드 플레이'의 정석</strong>을 보여줍니다. 단순히 공을 세게 치는 것이 아니라, 네트 플레이, 드롭샷, 로브, 슬라이스 등 모든 기술을 완벽하게 구사합니다. 테니스 전설 크리스 에버트가 "남자 선수처럼 플레이한다(긍정적 의미)"고 극찬했을 정도입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"클래식 올라운더"</strong></p>
                <p>서브 앤 발리를 자주 구사하며, 네트 앞에서의 움직임이 환상적입니다. 상대의 허를 찌르는 창의적인 플레이가 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>발리:</strong> 투어 최고의 발리 능력을 보유했습니다. 터치감이 예술입니다.</li>
                    <li><strong>슬라이스:</strong> 백핸드 슬라이스를 공격적으로 활용하여 상대의 리듬을 끊습니다.</li>
                    <li><strong>움직임:</strong> 부드럽고 우아한 풋워크로 코트 전체를 누빕니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 10, description: '마스터피스.' },
                { name: '네트 (Net)', score: 10, description: '발리 장인.' },
                { name: '창의성 (Creativity)', score: 10, description: '예측 불가.' },
                { name: '파워 (Power)', score: 7.5, description: '적절함.' },
                { name: '체력 (Stamina)', score: 6.5, description: '유리몸.' },
                { name: '서브 (Serve)', score: 8.5, description: '코스가 좋음.' }
            ],
            growthStory: `
                <p>체코 올로모우츠 출신입니다. 아버지는 체코 프로축구 선수 출신입니다. 어릴 때부터 다양한 운동을 섭렵하여 뛰어난 운동 신경을 갖췄습니다. 프로 데뷔 후 잦은 부상으로 고전했지만, 건강할 때만큼은 Top 10 레벨임을 증명해왔습니다.</p>
            `,
            signatureMatch: {
                title: '2023 롤랑가로스 4강 vs 아리나 사바렌카',
                date: '2023. 06. 08',
                description: '기적의 대역전극. 3세트 2-5로 뒤지며 매치 포인트까지 몰렸으나, 믿을 수 없는 집중력으로 5게임 연속 따내며 7-5로 역전승했습니다. '
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎸 "음악을 사랑하는 소녀"</div>
                    <p>기타 연주와 노래 실력이 수준급입니다. 코트 밖에서는 수줍음 많은 평범한 음악 애호가의 모습을 보여줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상과의 전쟁"</strong></p>
                <p>2023년 US 오픈 4강 이후 손목 수술로 장기간 결장했습니다. 2024년 6월, 9개월 만에 복귀하여 다시 감각을 끌어올리고 있습니다. 팬들은 그녀가 건강하게 시즌을 치르기만을 기도하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '무호바의 롤모델은?',
                    answer: '로저 페더러입니다. 그녀의 우아한 플레이 스타일은 페더러의 영향을 많이 받았습니다.'
                },
                {
                    question: '가장 좋아하는 대회는?',
                    answer: 'US 오픈과 멜버른(호주 오픈)을 좋아한다고 밝혔으나, 성적은 클레이인 롤랑가로스에서 가장 좋았습니다.'
                }
            ]
        }
    },
    'ajla-tomljanovic': {
        name: '아일라 톰얀로비치', nameEn: 'Ajla Tomljanovic', country: 'Australia', countryFlag: '🇦🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '강력한 그라운드 스트로크를 가진 호주의 간판. 세레나 윌리엄스의 은퇴 경기 상대이자 승자로 역사에 남았으며, 메이저 대회에서 꾸준히 8강권에 도전하는 실력자입니다.',
        detailedProfile: {
            oneLineSummary: '세레나 윌리엄스의 은퇴 경기를 장식한 승자, 윔블던 8강 2회 연속 진출자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎬 "넷플릭스 브레이크 포인트의 스타"</div>
                    <p>넷플릭스 테니스 다큐멘터리 'Break Point'의 주요 출연자로 대중적인 인지도를 얻었습니다. 특히 2022 US 오픈에서 '여제' 세레나 윌리엄스의 커리어 마지막 경기 상대로 나서 승리하며 전 세계의 주목을 받았습니다. 그 압박감을 이겨낸 강심장입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너"</strong></p>
                <p>큰 키에서 나오는 시원한 스트로크가 일품입니다. 백핸드 대결에서 밀리지 않으며, 기회가 오면 다운더라인으로 공격을 전환합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 그녀의 가장 강력한 무기입니다. 크로스와 다운더라인 모두 정확합니다.</li>
                    <li><strong>서브:</strong> 강한 퍼스트 서브를 가지고 있으나, 세컨드 서브가 공략당하는 경우가 있습니다.</li>
                    <li><strong>멘탈:</strong> 과거에는 경기 중 잘 무너졌으나, 최근 몇 년간 위기 관리 능력이 크게 향상되었습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '백핸드 (Backhand)', score: 9, description: '주무기.' },
                { name: '멘탈 (Mental)', score: 8, description: '세레나를 이긴 심장.' },
                { name: '파워 (Power)', score: 8, description: '준수함.' },
                { name: '스타성 (Star)', score: 8.5, description: '넷플릭스 효과.' },
                { name: '체력 (Stamina)', score: 7, description: '부상 잦음.' },
                { name: '이동 (Movement)', score: 7, description: '평균적.' }
            ],
            growthStory: `
                <p>크로아티아 자그레브에서 태어났습니다. 아버지도 핸드볼 유럽 챔피언 출신입니다. 2014년에 호주로 국적을 옮겼습니다. 어릴 때부터 크리스 에버트와 친분을 쌓으며 그녀의 멘토링을 받았습니다.</p>
            `,
            signatureMatch: {
                title: '2022 US 오픈 3회전 vs 세레나 윌리엄스',
                date: '2022. 09. 03',
                description: '역사에 남은 경기. 2만 명이 넘는 관중이 세레나를 일방적으로 응원하는 압도적인 분위기 속에서도 흔들리지 않고 2-1(7-5, 6-7, 6-1)로 승리했습니다. '
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "패셔니스타"</div>
                    <p>경기장 밖에서는 모델 뺨치는 패션 센스를 자랑합니다. 'Pencil'이라는 독자적인 테니스 의류 브랜드를 런칭하는 등 다방면에서 재능을 보입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"부상 복귀"</strong></p>
                <p>2023년 무릎 수술로 시즌을 통째로 날렸습니다. 2024년 홍콩 오픈 우승(WTA 125) 등을 통해 경기 감각을 되찾고 있으며, 다시 랭킹을 끌어올릴 준비를 마쳤습니다.</p>
            `,
            faq: [
                {
                    question: '톰얀로비치의 전 남자친구?',
                    answer: '닉 키리오스, 마테오 베레티니 등 유명 테니스 선수들과 교제하여 화제가 되기도 했습니다.'
                },
                {
                    question: '국적 논란?',
                    answer: '크로아티아 태생이지만 호주 시민권을 획득하여 호주 국가대표(빌리 진 킹 컵 등)로 활약하고 있습니다.'
                }
            ]
        }
    },
    'camila-giorgi': {
        name: '카밀라 조르지', nameEn: 'Camila Giorgi', country: 'Italy', countryFlag: '🇮🇹', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '이탈리아의 하드 히터. 작은 체구에서 뿜어져 나오는 폭발적인 스트로크 파워는 투어 최고 수준이며, 공격적인 스타일로 정평이 나 있습니다.',
        detailedProfile: {
            oneLineSummary: '이탈리아의 "패션 아이콘"이자 폭발적인 "하드 히터".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "코트 위의 런웨이"</div>
                    <p>어머니가 직접 디자인한 독창적인("Giomila" 브랜드) 유니폼을 입고 경기에 나섭니다. 짧은 스커트와 과감한 디자인은 항상 화제를 모으며, 그녀의 스타성을 더욱 돋보이게 합니다. 실력만큼이나 패션으로 유명한 선수입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"하이 리스크, 하이 리턴 (High Risk, High Return)"</strong></p>
                <p>타협하지 않는 공격 테니스입니다. 모든 공을 전력으로 때립니다. 들어가는 날은 누구도 막을 수 없지만, 안 들어가는 날은 에러가 쏟아집니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 체구에 비해 상상할 수 없는 파워를 냅니다.</li>
                    <li><strong>스피드:</strong> 발이 매우 빠르고 반응 속도가 뛰어납니다.</li>
                    <li><strong>기복:</strong> "중간"이 없습니다. 모 아니면 도 스타일입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '작은 고추가 맵다.' },
                { name: '스피드 (Speed)', score: 9, description: '매우 빠름.' },
                { name: '스타성 (Star)', score: 9.5, description: '패션 화제성.' },
                { name: '안정성 (Stability)', score: 4, description: '에러가 많음.' },
                { name: '멘탈 (Mental)', score: 6, description: '포커 페이스.' },
                { name: '서브 (Serve)', score: 7, description: '더블 폴트가 많음.' }
            ],
            growthStory: `
                <p>이탈리아 마체라타 출신입니다. 아르헨티나 출신 아버지 세르지오 조르지의 열정적인(때로는 과격한) 지도를 받으며 성장했습니다. 5살 때 체조를 하다가 테니스로 전향했습니다.</p>
            `,
            signatureMatch: {
                title: '2021 캐나다 오픈(몬트리올) 결승 vs 카롤리나 플리스코바',
                date: '2021. 08. 15',
                description: '생애 최고의 순간. WTA 1000 시리즈 결승에서 강호 플리스코바를 2-0(6-3, 7-5)으로 완파하며 커리어 가장 큰 타이틀을 획득했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😐 "얼음 공주?"</div>
                    <p>경기 중 감정 표현을 거의 하지 않습니다. 이기고 있어도, 지고 있어도 표정 변화가 없어 'Ice Maiden'이라고도 불립니다. 가끔 심판과 논쟁할 때만 열정을 보여줍니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"은퇴?"</strong></p>
                <p>2024년 5월, 갑작스럽게 은퇴 소식이 전해졌습니다. 공식적인 은퇴식 없이 조용히 투어를 떠났으나, 여전히 많은 팬들이 그녀의 강렬했던 플레이를 기억하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '조르지의 키는?',
                    answer: '프로필상 168cm이지만, 실제로는 더 작아 보입니다. 하지만 파워는 180cm 선수들 못지않습니다.'
                },
                {
                    question: '그녀의 브랜드?',
                    answer: '가족이 운영하는 "Giomila"라는 의류 브랜드를 입습니다. 테니스복 같지 않은 디자인이 특징입니다.'
                }
            ]
        }
    },
    'wang-xinyu': {
        name: '왕 신유', nameEn: 'Wang Xinyu', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '중국 테니스의 차세대 주자 "중국의 샤라포바". 182cm의 장신에서 나오는 시원한 스트로크가 강점이며, 복식에서도 그랜드슬램 우승을 차지했습니다.',
        detailedProfile: {
            oneLineSummary: '182cm 장신에서 뿜어져 나오는 시원한 스트로크, 복식 그랜드슬램 챔피언.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇨🇳 "차세대 중국 에이스"</div>
                    <p>정친원과 함께 중국 테니스를 이끄는 쌍두마차입니다. 2023년 프랑스 오픈 복식에서 시에 수웨이와 짝을 이뤄 우승하며 <strong>그랜드슬램 타이틀</strong>을 획득했습니다. 단식에서도 US 오픈 16강에 오르는 등 빠르게 성장하고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"플랫 히터"</strong></p>
                <p>큰 키를 활용해 위에서 아래로 찍어 누르는 듯한 플랫성 타구를 구사합니다. 공이 낮고 빠르게 깔려 들어옵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 스윙 스피드가 빠르고 타점이 앞에서 형성되어 공격적입니다.</li>
                    <li><strong>서브:</strong> 장신을 이용한 서브가 위협적입니다.</li>
                    <li><strong>복식 능력:</strong> 네트 플레이와 발리 감각이 뛰어나 단식 경기 운영에도 도움이 됩니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 8.5, description: '묵직함.' },
                { name: '복식 (Doubles)', score: 9.5, description: '롤랑가로스 챔피언.' },
                { name: '서브 (Serve)', score: 8, description: '강점.' },
                { name: '이동 (Movement)', score: 7.5, description: '키에 비해 좋음.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '성장 중.' },
                { name: '경험 (Experience)', score: 7, description: '쌓가는 중.' }
            ],
            growthStory: `
                <p>중국 선전 출신입니다. 아버지가 전직 테니스 선수이자 중국 국가대표 감독 출신이라 엘리트 교육을 받았습니다. 16세에 호주 오픈 주니어 본선에 진출하며 일찌감치 유망주로 주목받았습니다.</p>
            `,
            signatureMatch: {
                title: '2023 US 오픈 16강 진출 (vs 슈미들로바)',
                date: '2023. 09. 03',
                description: '단식 커리어 하이. 접전 끝에 승리하며 생애 첫 메이저 16강 무대를 밟았습니다. 복식 우승에 이어 단식에서도 경쟁력을 입증한 대회였습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "미소 천사"</div>
                    <p>경기 중에도 미소를 잃지 않으며, 파트너(시에 수웨이)와의 케미가 매우 좋습니다. "중국 테니스계의 미모 담당"으로도 불립니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"안정적인 Top 50"</strong></p>
                <p>2024년에도 윔블던 16강에 진출하며 잔디 코트에서도 강한 면모를 보였습니다. 꾸준히 30~50위권을 유지하며 상위 도약을 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '별명은?',
                    answer: '이름을 줄여서 "Wang (왕)"이라고 불리지만, 중국 내에서는 "작은 왕(Little Wang)" 등 애칭으로 불립니다.'
                },
                {
                    question: '복식 파트너?',
                    answer: '대만 레전드 시에 수웨이와 함께 "스트레이트 세트"라는 별명(웃음)으로 불릴 만큼 환상의 호흡을 보여주었습니다.'
                }
            ]
        }
    },
    'wang-xiyu': {
        name: '왕 시위', nameEn: 'Wang Xiyu', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Left-handed', backhand: 'Two-handed',
        longBio: '강력한 왼손 포핸드를 가진 중국의 기대주. 2018 US 오픈 주니어 챔피언 출신으로, 파워풀한 테니스를 구사합니다.',
        detailedProfile: {
            oneLineSummary: '2018 US 오픈 주니어 챔피언, 강력한 "왼손 포핸드"를 장착한 파워 히터.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏆 "주니어 세계 1위 출신"</div>
                    <p>2018년 US 오픈 주니어 여자 단식 우승자입니다. 주니어 시절부터 압도적인 피지컬과 파워로 세계 1위를 찍었으며, 성인 무대에서도 2023년 광저우 오픈 우승으로 WTA 투어 타이틀을 획득했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워풀 왼손잡이 (Lefty Power Player)"</strong></p>
                <p>나달과 같은 왼손잡이의 이점을 잘 살립니다. 특히 왼쪽에서 대각선으로 빠져나가는 포핸드 크로스 샷이 매우 위력적입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 걸린 왼손 포핸드는 상대 오른쪽 깊숙이 떨어져 받기 까다롭습니다.</li>
                    <li><strong>서브:</strong> 왼손잡이 특유의 슬라이스 서브를 잘 활용합니다.</li>
                    <li><strong>공격성:</strong> 기회가 오면 주저 없이 강타를 날립니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9, description: '왼손 파워.' },
                { name: '잠재력 (Potential)', score: 8.5, description: '아직 젊음.' },
                { name: '서브 (Serve)', score: 8, description: '왼손 이점.' },
                { name: '정교함 (Precision)', score: 6.5, description: '다듬는 중.' },
                { name: '멘탈 (Mental)', score: 7, description: '기복 있음.' },
                { name: '이동 (Movement)', score: 7.5, description: '준수함.' }
            ],
            growthStory: `
                <p>중국 장쑤성 타이싱 출신입니다. 4살 때 테니스를 시작했습니다. 어머니가 음악가이기를 바랐지만 본인은 테니스를 선택했습니다. 12살 때 베이징에 있는 테니스 아카데미로 유학을 떠나 실력을 키웠습니다.</p>
            `,
            signatureMatch: {
                title: '2023 광저우 오픈 결승 vs 마그다 리네트',
                date: '2023. 09. 23',
                description: '생애 첫 WTA 투어 우승. 홈 관중 앞에서 베테랑 리네트를 6-0, 6-2로 완파하며 압도적인 경기력을 보여주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦁 "사자후"</div>
                    <p>중요한 포인트를 땄을 때 터뜨리는 포효가 인상적입니다. 파워풀한 플레이 스타일과 어우러져 관중을 압도하는 카리스마가 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 안착 목표"</strong></p>
                <p>2024년 오스틴 오픈 준우승 등 꾸준히 결승 무대를 밟으며 랭킹을 끌어올리고 있습니다. 기복만 줄인다면 상위권 도약이 가능해 보입니다.</p>
            `,
            faq: [
                {
                    question: '왕 신유와의 관계?',
                    answer: '이름이 비슷하고 나이대도 비슷해 라이벌이자 동료입니다. 팬들은 "Left Wang (시위)", "Right Wang (신유)"로 장난스레 구분하기도 합니다.'
                },
                {
                    question: '취미는?',
                    answer: '요리와 제빵을 좋아해서 직접 만든 쿠키 사진을 SNS에 올리곤 합니다.'
                }
            ]
        }
    },
    'zhu-lin': {
        name: '주 린', nameEn: 'Zhu Lin', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대기만성형 플레이어. 꾸준한 노력 끝에 2023 호주 오픈 16강, 투어 첫 우승을 달성하며 전성기를 맞이했습니다. ',
        detailedProfile: {
            oneLineSummary: '29세에 만개한 "늦게 핀 꽃", 희곡 "주(Zhu) 변의 서사시".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌸 "대기만성 (Late Bloomer)"</div>
                    <p>오랫동안 100위권 밖을 맴돌았으나, 포기하지 않고 29세가 되던 2023년에 잠재력을 폭발시켰습니다. 호주 오픈 16강에서 마리아 사카리(당시 6위)를 꺾는 파란을 일으키며 <strong>"지금이 내 전성기"</strong>라고 외친 인터뷰가 화제가 되었습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 카운터 펀처"</strong></p>
                <p>안정적인 수비를 바탕으로 하다가, 상대의 빈틈이 보이면 날카로운 다운더라인 샷으로 득점합니다. </p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>기본기:</strong> 스트로크 폼이 매우 깔끔하고 군더더기가 없습니다.</li>
                    <li><strong>멘탈:</strong> 자신감이 붙은 후 위기 상황에서도 과감한 샷을 날립니다.</li>
                    <li><strong>이동:</strong> 코트 커버가 훌륭합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '노력 (Effort)', score: 10, description: '끈기의 결실.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '자신감 충전.' },
                { name: '수비 (Defense)', score: 8, description: '안정적.' },
                { name: '기술 (Technique)', score: 8, description: '교과서적.' },
                { name: '파워 (Power)', score: 7, description: '세지 않음.' },
                { name: '서브 (Serve)', score: 6.5, description: '개선 필요.' }
            ],
            growthStory: `
                <p>중국 안후이성 출신입니다. 아버지의 권유로 4살 때 테니스를 시작했습니다. 프로 데뷔 후 오랫동안 챌린저 급 대회만 전전했으나, 끊임없는 훈련과 마인드셋 변화로 커리어 반전을 이뤄냈습니다.</p>
            `,
            signatureMatch: {
                title: '2023 호주 오픈 3회전 vs 마리아 사카리',
                date: '2023. 01. 20',
                description: '인생 경기. 세계 6위 사카리를 상대로 2-1(7-6, 1-6, 6-4) 승리를 거두며 생애 첫 메이저 16강에 진출했습니다. 경기 후 눈물을 흘리며 "내가 이런 선수를 이길 수 있을지 몰랐다"고 말해 감동을 주었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎭 "주(Zhu) 변작가"</div>
                    <p>드라마틱한 경기 내용 때문에 중국 팬들은 그녀를 '작가(극본가)'라고 부르기도 합니다. 롤러코스터 같은 경기력 끝에 승리하는 경우가 많기 때문입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 유지"</strong></p>
                <p>2023년 후아 힌 챔피언십 우승(첫 투어 타이틀), 오사카 준우승 등 꾸준히 성적을 내고 있습니다. 2024년에도 태국 오픈 준우승을 차지했습니다.</p>
            `,
            faq: [
                {
                    question: '좋아하는 선수는?',
                    answer: '중국의 레전드 리나(Li Na)를 존경하며, 그녀처럼 늦은 나이에도 성공하고 싶다고 말했습니다.'
                }
            ]
        }
    },
    'yuan-yue': {
        name: '위안 위에', nameEn: 'Yuan Yue', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '공격적인 플레이가 돋보이는 중국 선수. 2024년 투어 첫 우승을 차지하며 세계 랭킹을 빠르게 끌어올리고 있습니다.',
        detailedProfile: {
            oneLineSummary: '2024년 혜성처럼 등장한 중국의 "라이징 스타", 공격 본능.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "무서운 상승세"</div>
                    <p>2024년 초반, 텍사스 오스틴 오픈에서 <strong>생애 첫 WTA 투어 우승</strong>을 차지하고, 곧바로 열린 인디언 웰스에서도 8강에 오르는 등 파죽지세의 활약을 펼쳤습니다. 불과 몇 달 만에 랭킹을 100위권 밖에서 30위권으로 끌어올린 돌풍의 주인공입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"어그레시브 샷메이커"</strong></p>
                <p>공을 치는 임팩트 소리부터 다릅니다. 매우 빠르고 강한 플랫성 타구를 구사하며, 상대를 베이스라인 뒤로 밀어냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 탄환 같은 스피드의 포핸드 위너를 양산합니다.</li>
                    <li><strong>공격성:</strong> 수비보다는 공격으로 포인트를 따는 것을 선호합니다. "먼저 치는 자가 이긴다"는 스타일입니다.</li>
                    <li><strong>서브:</strong> 퍼스트 서브 확률이 높고 파워가 좋습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '상승세 (Momentum)', score: 10, description: '무서운 기세.' },
                { name: '파워 (Power)', score: 9, description: '강력한 임팩트.' },
                { name: '공격성 (Aggression)', score: 9, description: '물러서지 않음.' },
                { name: '서브 (Serve)', score: 8, description: '좋은 편.' },
                { name: '경험 (Experience)', score: 6, description: '이제 시작.' },
                { name: '수비 (Defense)', score: 6.5, description: '공격이 최선의 수비.' }
            ],
            growthStory: `
                <p>중국 양저우 출신입니다. 10살이라는 다소 늦은 나이에 테니스를 시작했습니다. 경제적인 어려움 때문에 코치 없이 혼자 투어를 다니기도 했으나, 끈기와 노력으로 스폰서와 코치를 구하며 자수성가했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 ATX 오픈 결승 vs 왕 시위',
                date: '2024. 03. 04',
                description: '생애 첫 우승. 같은 국적의 라이벌 왕 시위와의 "중국 더비" 결승에서 2-0(6-4, 7-6)으로 승리하며 감격의 첫 트로피를 들어 올렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎒 "나 홀로 여행가"</div>
                    <p>과거 코치 없이 무거운 짐을 혼자 짊어지고 저가 항공을 이용하며 투어를 다니던 모습이 알려져 팬들의 응원을 받았습니다. 이제는 당당한 챔피언입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 40 진입"</strong></p>
                <p>2024년의 기세를 이어가며 중국 테니스의 새로운 주축으로 자리 잡았습니다. 메이저 대회 시드 배정도 받게 되었습니다.</p>
            `,
            faq: [
                {
                    question: '코치는 누구?',
                    answer: '현재 새로운 코치진과 함께하며 전술적인 완성도를 높이고 있습니다.'
                }
            ]
        }
    },
    'diane-parry': {
        name: '디안 파리', nameEn: 'Diane Parry', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'One-handed',
        longBio: 'WTA 투어에서 보기 드문 원핸드 백핸드 구사자. 우아한 폼과 클래식한 테니스 스타일로 주목받는 프랑스의 유망주입니다.',
        detailedProfile: {
            oneLineSummary: 'WTA 투어의 희귀종 "원핸드 백핸더", 프랑스의 우아함을 담은 테니스.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🦢 "클래식의 부활"</div>
                    <p>여자 테니스에서 거의 멸종 위기인 <strong>'원핸드 백핸드'</strong>를 구사하는 젊은 선수입니다. 쥐스틴 에넹, 아멜리에 모레스모를 연상시키는 우아한 폼과 슬라이스 활용 능력으로 "테니스의 낭만"을 보여줍니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"클래식 & 버라이어티"</strong></p>
                <p>파워보다는 회전과 코스를 이용합니다. 특히 클레이 코트에서 강점을 보입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 원핸드 백핸드를 사용하며, 깊은 슬라이스와 강한 탑스핀 드라이브를 섞어 씁니다.</li>
                    <li><strong>포핸드:</strong> 헤비 탑스핀이 많이 걸려 바운드가 높게 튑니다.</li>
                    <li><strong>서브:</strong> 킥 서브를 즐겨 사용합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 9.5, description: '희소성.' },
                { name: '우아함 (Elegance)', score: 10, description: '클래식함.' },
                { name: '클레이 (Clay)', score: 9, description: '선호함.' },
                { name: '파워 (Power)', score: 6.5, description: '약한 편.' },
                { name: '스피드 (Speed)', score: 7, description: '보통.' },
                { name: '서브 (Serve)', score: 7, description: '킥 서브.' }
            ],
            growthStory: `
                <p>프랑스 니스 출신입니다. 어릴 때부터 아멜리에 모레스모(전 세계 1위, 원핸드 백핸더)를 보며 꿈을 키웠습니다. 2019년 16세의 나이로 프랑스 오픈 본선에서 승리하며 혜성처럼 등장했습니다.</p>
            `,
            signatureMatch: {
                title: '2022 프랑스 오픈 1회전 vs 바르보라 크레이치코바',
                date: '2022. 05. 23',
                description: '디펜딩 챔피언 격파. 전년도 우승자이자 세계 2위인 크레이치코바를 상대로 홈 관중의 열광적인 응원 속에 역전승을 거두는 대이변을 만들었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎨 "예술 점수 100점"</div>
                    <p>백핸드 칠 때의 폼이 너무 아름다워서, 승패와 상관없이 그녀의 경기를 찾아보는 팬들이 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 안착"</strong></p>
                <p>2024년 6월 노팅엄 오픈 4강에 오르는 등 클레이 외의 코트에서도 적응력을 높이고 있습니다. 꾸준히 50위권을 유지 중입니다.</p>
            `,
            faq: [
                {
                    question: '왜 원핸드를 쓰나요?',
                    answer: '어릴 때 로저 페더러의 경기를 보고 반해서 따라 하기 시작했다고 합니다.'
                }
            ]
        }
    },
    'clara-burel': {
        name: '클라라 뷔렐', nameEn: 'Clara Burel', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '프랑스의 영 건. 주니어 세계 1위 출신으로, 안정적인 경기 운영과 영리한 플레이로 성인 무대에서도 두각을 나타내고 있습니다.',
        detailedProfile: {
            oneLineSummary: '주니어 세계 1위 출신, 작지만 매운 "프랑스 차세대 기수".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "주니어 랭킹 1위"</div>
                    <p>2018년 주니어 세계 랭킹 1위를 기록했던 특급 유망주 출신입니다. 2020년 롤랑가로스에서 19세의 나이로 3회전에 진출하며 성인 무대 신고식을 치렀습니다. 작은 체구지만 영리한 경기 운영이 돋보입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"전술적인 카운터 펀처"</strong></p>
                <p>힘으로 맞불을 놓기보다는 상대의 템포를 뺏고 코트를 넓게 사용합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 기가 막힌 타이밍에 드롭샷을 구사합니다.</li>
                    <li><strong>백핸드:</strong> 안정적이고 실수가 적습니다.</li>
                    <li><strong>서브:</strong> 키(176cm)에 비해 서브 파워는 다소 아쉽지만 코석 공략이 좋습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '전술 (Tactics)', score: 9, description: '영리함.' },
                { name: '잠재력 (Potential)', score: 8.5, description: '성장 중.' },
                { name: '이동 (Movement)', score: 8.5, description: '빠름.' },
                { name: '파워 (Power)', score: 6.5, description: '보완 필요.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '침착함.' },
                { name: '서브 (Serve)', score: 6, description: '더블 폴트 주의.' }
            ],
            growthStory: `
                <p>프랑스 렌 출신입니다. 주니어 시절 유스 올림픽 은메달, US 오픈 주니어 준우승 등 화려한 성적을 냈습니다. 프로 전향 후 손목 부상으로 고전했으나 잘 극복했습니다.</p>
            `,
            signatureMatch: {
                title: '2024 호주 오픈 2회전 vs 제시카 페굴라',
                date: '2024. 01. 18',
                description: '거물 사냥. 세계 랭킹 5위 제시카 페굴라를 2-0(6-4, 6-2)으로 완파하며 생애 최고의 승리를 거뒀습니다. 수비와 역습이 완벽했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "프랑스의 희망"</div>
                    <p>가르시아, 파리와 함께 프랑스 테니스의 미래를 짊어질 재목으로 기대를 한 몸에 받고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 50 진입"</strong></p>
                <p>페굴라를 꺾은 기세를 몰아 랭킹을 40위권까지 끌어올렸습니다. 투어 결승에도 두 차례(로잔 등) 진출했습니다.</p>
            `,
            faq: [
                {
                    question: '좋아하는 코트는?',
                    answer: '주니어 시절에는 하드 코트 성적이 좋았으나, 프로에서는 클레이 코트에서도 강한 모습을 보입니다.'
                }
            ]
        }
    },
    'varvara-gracheva': {
        name: '바르바라 그라체바', nameEn: 'Varvara Gracheva', country: 'France', countryFlag: '🇫🇷', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '러시아에서 프랑스로 국적을 변경한 선수. 다양한 구질을 섞어 쓰는 까다로운 스트로크로 상대를 괴롭히는 스타일입니다.',
        detailedProfile: {
            oneLineSummary: '러시아에서 프랑스로 귀화한 "뉴 프렌치", 예측 불가능한 스트로크.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇫🇷 "마르세유즈를 부르는 바르바라"</div>
                    <p>러시아 태생이지만 2023년 프랑스 국적을 취득했습니다. 귀화 직후 열린 프랑스 오픈에서 관중들의 열렬한 "라 마르세유즈(프랑스 국가)" 응원을 받으며 감동적인 장면을 연출했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"변칙적인 베이스라이너"</strong></p>
                <p>정박자로 치지 않습니다. 공의 궤적과 타이밍을 섞어서 상대를 불편하게 만듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 극단적인 그립을 사용하여 회전량이 많습니다.</li>
                    <li><strong>적응력:</strong> 상대의 스타일에 따라 자신의 플레이를 변화시킵니다.</li>
                    <li><strong>수비:</strong> 끈질기게 따라가서 공을 넘깁니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '적응력 (Adaptability)', score: 9, description: '카멜레온.' },
                { name: '수비 (Defense)', score: 8, description: '끈질김.' },
                { name: '파워 (Power)', score: 7, description: '평균.' },
                { name: '서브 (Serve)', score: 6.5, description: '개선 중.' },
                { name: '멘탈 (Mental)', score: 7.5, description: '홈 응원 중요.' },
                { name: '체력 (Stamina)', score: 8, description: '좋음.' }
            ],
            growthStory: `
                <p>러시아 모스크바 근교에서 태어났습니다. 2016년부터 프랑스 칸에 있는 아카데미에서 훈련하며 프랑스 문화를 익혔습니다. 5년 넘게 거주하며 자연스럽게 귀화를 선택했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 인디언 웰스 16강 vs 다리아 카사트키나',
                date: '2023. 03. 14',
                description: '러시아 더비(당시 국적) 승리. Top 10 선수인 카사트키나를 상대로 2-0 완승을 거두며 자신이 만만치 않은 상대임을 증명했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "프랑스어 인터뷰"</div>
                    <p>완벽한 프랑스어로 인터뷰하여 프랑스 팬들의 마음을 사로잡았습니다. "나는 이제 프랑스인"이라는 정체성이 확고합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"프랑스 국가대표"</strong></p>
                <p>빌리 진 킹 컵 프랑스 대표팀에도 발탁되었습니다. 꾸준히 40~60위권을 유지하며 투어에 안착했습니다.</p>
            `,
            faq: [
                {
                    question: '국적 변경 이유는?',
                    answer: '오랫동안 프랑스에서 살며 훈련했고, 프랑스 테니스 협회의 체계적인 지원과 환경에 만족했기 때문이라고 합니다.'
                }
            ]
        }
    },
    'tatjana-maria': {
        name: '타티아나 마리아', nameEn: 'Tatjana Maria', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Right-handed', backhand: 'One-handed',
        longBio: '슬라이스 마스터. 포핸드와 백핸드 모두에서 자유자재로 구사하는 슬라이스로 상대를 혼란에 빠뜨리는 독특한 스타일의 베테랑입니다. 두 아이의 엄마이자 2022 윔블던 4강 신화의 주인공.',
        detailedProfile: {
            oneLineSummary: '두 아이의 엄마, 2022 윔블던 4강 신화, "슬라이스 깎는 장인".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🤰 "슈퍼맘의 기적"</div>
                    <p>두 번의 출산 후에도 투어에 복귀하여, <strong>2022 윔블던 4강</strong>이라는 믿을 수 없는 성적을 냈습니다. 당시 34세, 두 아이의 엄마, 랭킹 103위였던 그녀가 일으킨 돌풍은 전 세계에 큰 감동을 주었습니다. "엄마는 강하다"를 몸소 보여준 선수입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"슬라이스 마스터 (Slice Master)"</strong></p>
                <p>현대 테니스에서 가장 독특한 스타일입니다. 포핸드와 백핸드 모두 슬라이스를 자유자재로 구사합니다. 공이 바닥에 깔리거나 멈추는 등 변칙적이라 상대가 타이밍을 잡기 매우 힘듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드 슬라이스:</strong> 보통 공격적으로 치는 포핸드조차 깎아 칩니다. 상대가 적응하지 못하고 자멸합니다.</li>
                    <li><strong>전술:</strong> 상대의 힘을 이용하고, 네트 플레이로 마무리합니다.</li>
                    <li><strong>멘탈:</strong> 경험에서 나오는 여유와 침착함이 돋보입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '독창성 (Originality)', score: 10, description: '유일무이.' },
                { name: '전술 (Tactics)', score: 10, description: '체스 플레이어.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '엄마의 힘.' },
                { name: '기술 (Technique)', score: 9, description: '슬라이스 장인.' },
                { name: '파워 (Power)', score: 4, description: '힘으로 안 침.' },
                { name: '체력 (Stamina)', score: 8, description: '철인.' }
            ],
            growthStory: `
                <p>독일 바트 사울가우 출신입니다. 2008년 폐색전증으로 생사를 오가는 위기를 겪기도 했으나 극복했습니다. 남편이자 코치인 샤를 에두아르 마리아와 함께 투어를 다니며, 딸 샬롯과 세실리아를 키우고 있습니다.</p>
            `,
            signatureMatch: {
                title: '2022 윔블던 8강 vs 율레 니마이어',
                date: '2022. 07. 05',
                description: '독일 더비 승리. 한 세트를 내주고 2세트에서도 뒤지고 있었으나, 끈질긴 수비와 노련미로 역전승을 거두며 4강에 진출했습니다. 엄마로서 이룬 최고의 업적입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👩‍👧‍👧 "패밀리 투어"</div>
                    <p>경기장에 항상 남편과 두 딸이 함께합니다. 인터뷰 중 아이들이 난입(?)하거나 안겨 있는 모습이 자주 보여 팬들의 미소를 자아냅니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"멈추지 않는 도전"</strong></p>
                <p>30대 중반을 훌쩍 넘긴 나이에도 여전히 투어를 뛰며, 2023년 보고타 우승(WTA 250) 타이틀 방어에 성공하는 등 녹슬지 않은 기량을 과시하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '언제까지 선수 생활을?',
                    answer: '테니스를 즐기고 있고 가족이 함께하기 때문에 은퇴 생각은 아직 없다고 합니다.'
                },
                {
                    question: '딸도 테니스를 하나요?',
                    answer: '첫째 딸 샬롯도 테니스를 열심히 배우고 있으며, 엄마처럼 프로 선수가 되는 것이 꿈이라고 합니다.'
                }
            ]
        }
    },
    'laura-siegemund': {
        name: '로라 시그문드', nameEn: 'Laura Siegemund', country: 'Germany', countryFlag: '🇩🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '변칙 플레이의 여왕. 드롭샷, 네트 대시 등 다양한 전술로 상대를 흔드는 지능적인 플레이가 일품이며, 복식에서도 그랜드슬램 챔피언입니다.',
        detailedProfile: {
            oneLineSummary: '코트 위의 "마술사", 상대를 미치게 만드는 다양한 기술의 향연.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧙‍♀️ "변칙의 여왕"</div>
                    <p>현대 테니스에서 보기 드문 유형의 선수입니다. 파워보다는 드롭샷, 로브, 서브 앤 발리 등 온갖 기술을 섞어 상대의 리듬을 뺏습니다. 상대 선수들이 "가장 경기하기 싫은 선수"로 꼽기도 합니다.</p>
                    <p>복식에서도 그랜드슬램(US 오픈, 프랑스 오픈 혼복 등) 우승을 여러 차례 차지한 베테랑입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"올코트 테크니션"</strong></p>
                <p>정석적인 랠리를 거의 하지 않습니다. 끊임없이 전술을 변화시킵니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>드롭샷:</strong> 그녀의 시그니처입니다. 예고 동작 없이 툭 떨어뜨립니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 랭커답게 발리 감각이 매우 뛰어납니다.</li>
                    <li><strong>타임 딜레이:</strong> 서브 시간을 길게 끌거나 루틴을 길게 가져가 상대를 조급하게 만듭니다. (이로 인해 경고를 받기도 합니다.)</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 10, description: '만능 재주꾼.' },
                { name: '전술 (Tactics)', score: 9.5, description: '수싸움의 대가.' },
                { name: '멘탈 (Mental)', score: 8, description: '질기다.' },
                { name: '파워 (Power)', score: 6, description: '약한 편.' },
                { name: '스피드 (Speed)', score: 7.5, description: '준수함.' },
                { name: '복식 (Doubles)', score: 9.5, description: '최상위 레벨.' }
            ],
            growthStory: `
                <p>독일 필더슈타트 출신입니다. 심리학 학사 학위를 가지고 있을 정도로 학구파이며, 이는 그녀의 지능적인 플레이 스타일에도 영향을 미쳤습니다. 20대 후반과 30대에 전성기를 맞이한 대기만성형 선수입니다.</p>
            `,
            signatureMatch: {
                title: '2020 프랑스 오픈 8강',
                date: '2020. 10. 07',
                description: '클레이 코트에서의 저력을 보여준 대회. 32세의 나이에 생애 첫 메이저 8강에 진출했으며, 다채로운 드롭샷으로 상대들을 무력화시켰습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎓 "심리학자 테니스 선수"</div>
                    <p>실제 심리학 학위가 있어 멘탈 게임에 능합니다. 경기 중 보여주는 독특한 루틴과 제스처는 팬들에게는 볼거리, 상대에게는 악몽입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"복식 최강자, 단식 경쟁력 유지"</strong></p>
                <p>2024년 WTA 파이널스 복식 우승을 차지하며 복식 세계 랭킹 최상위권을 지키고 있습니다. 단식에서도 여전히 까다로운 상대로 활약 중입니다.</p>
            `,
            faq: [
                {
                    question: '시그문드의 전공은?',
                    answer: '하겐 대학에서 심리학 학사 학위를 받았습니다. 논문 주제도 스포츠 심리학 관련이었습니다.'
                },
                {
                    question: '그녀의 별명은?',
                    answer: '"Enten (오리)"라고 불리기도 합니다.'
                }
            ]
        }
    },


    // --- Added Male (Bonus) ---
    'hong-seong-chan': {
        name: '홍성찬', nameEn: 'Seong-chan Hong', country: 'Korea', countryFlag: '🇰🇷', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '대한민국의 테니스 국가대표. "홍대리"라는 별명처럼 데이비스컵 등 국가대항전에서 놀라운 투혼과 승부사 기질을 발휘하며 한국 테니스의 허리를 책임지고 있습니다.',
        detailedProfile: {
            oneLineSummary: '대한민국 국가대표 "홍대리", 끈질긴 수비와 강철 멘탈의 소유자.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇰🇷 "국가대항전의 사나이"</div>
                    <p>평소에는 조용하다가도 데이비스컵 등 국가대항전만 되면 120%의 실력을 발휘하는 승부사입니다. 2022-2023 데이비스컵 본선 진출의 숨은 일등공신이며, 랭킹 차이가 많이 나는 상위 랭커들을 상대로도 절대 밀리지 않는 끈기를 보여줍니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"철벽 수비 (Defensive Counter Puncher)"</strong></p>
                <p>상대가 지쳐서 쓰러질 때까지 공을 넘깁니다. 코트 커버력이 워낙 좋아 '벽'을 상대하는 느낌을 줍니다. 최근에는 공격력도 보강하여 챌린저 무대에서 성적을 내고 있습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>풋워크:</strong> 한국 선수 중 가장 빠르다는 평가를 받습니다.</li>
                    <li><strong>백핸드:</strong> 안정적이고 실수가 없습니다.</li>
                    <li><strong>발리:</strong> 주니어 시절부터 다져진 네트 플레이 감각이 좋습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '수비 (Defense)', score: 9.5, description: '좀처럼 뚫리지 않음.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '위기에서 더 강해짐.' },
                { name: '스피드 (Speed)', score: 9, description: '코트 전체를 커버.' },
                { name: '체력 (Stamina)', score: 9, description: '장기전 전문.' },
                { name: '파워 (Power)', score: 5, description: '결정력 보강 필요.' },
                { name: '서브 (Serve)', score: 6, description: '안정적인 경기 운영 위주.' }
            ],
            growthStory: `
                <p>강원도 출신으로 초등학생 시절부터 '초등 랭킹 1위'를 독식했습니다. 2015년 호주 오픈 주니어 준우승을 차지하며 정현, 이덕희와 함께 '한국 테니스 트로이카'로 불렸습니다. 성인 무대 적응에 시간이 걸렸지만, 최근 챌린저 우승 등을 통해 늦깍이 전성기를 맞이했습니다.</p>
            `,
            signatureMatch: {
                title: '2023 데이비스컵 벨기에전 vs 지주 베리스',
                date: '2023. 02. 05',
                description: '한국의 본선 진출을 확정 지은 기적의 역전승. 1, 2세트 타이브레이크 접전 끝에 귀중한 승리를 따내며 대역전 드라마의 마침표를 찍었습니다. "홍대리"라는 별명이 전국적으로 알려진 계기가 되었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🏢 "홍대리"</div>
                    <p>묵묵히 제 몫을 다하는 모습이 마치 직장인의 비애(?)와 끈기를 닮았다고 하여 붙여진 별명입니다. 테니스 팬들에게는 가장 믿음직한 선수 중 한 명입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"커리어 하이 갱신 중"</strong></p>
                <p>2024년 챌린저 투어 준우승, US 오픈 예선 결승 진출 등 꾸준히 개인 최고 랭킹(100위권 중반)을 경신하며 ATP 투어 진입을 눈앞에 두고 있습니다.</p>
            `,
            faq: [
                {
                    question: '홍성찬의 별명 "홍대리"의 유래는?',
                    answer: '데이비스컵에서 중요한 승리를 따내며 팀을 구하는 모습이 마치 회사에서 궂은일을 도맡아 해결하는 대리님 같다고 하여 팬들이 붙여준 애칭입니다.'
                },
                {
                    question: '홍성찬의 주니어 시절 성적은?',
                    answer: '2015년 호주 오픈 주니어 남자 단식 준우승을 차지했습니다.'
                }
            ]
        }
    },


    // --- New Additions (Batch 3) ---
    'venus-williams': {
        name: '비너스 윌리엄스', nameEn: 'Venus Williams', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '7개의 그랜드슬램 타이틀을 보유한 살아있는 전설. 동생 세레나와 함께 여자 테니스의 파워 시대를 열었으며, 40대가 넘은 나이에도 코트를 지키는 존경받는 아이콘입니다.',
        detailedProfile: {
            oneLineSummary: '여자 테니스 파워 게임의 창시자, 영원한 챔피언이자 "Queen V".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👑 "The Legend"</div>
                    <p>그녀의 업적은 테니스를 넘어섭니다. 윔블던 상금 남녀 동등 지급을 이끌어낸 투쟁가이자, 흑인 여성 스포츠 스타의 길을 개척한 선구자입니다. 윔블던 5회 우승을 포함해 총 7개의 메이저 단식 타이틀을 보유하고 있습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"오리지널 파워 히터"</strong></p>
                <p>큰 키와 긴 팔다리에서 나오는 시원한 스윙이 일품입니다. 전성기 시절 서브 속도는 타의 추종을 불허했습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 전성기 시절 시속 200km를 넘나드는 서브로 코트를 지배했습니다.</li>
                    <li><strong>네트 플레이:</strong> 복식 그랜드슬램(14회 우승) 경력이 말해주듯 발리와 네트 센스가 탁월합니다.</li>
                    <li><strong>우아함:</strong> 파워풀하면서도 동작이 우아합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '존경 (Respect)', score: 10, description: '살아있는 역사.' },
                { name: '네트 (Net)', score: 9.5, description: '복식 여제.' },
                { name: '서브 (Serve)', score: 8.5, description: '클래스는 영원하다.' },
                { name: '파워 (Power)', score: 8, description: '여전한 펀치력.' },
                { name: '이동 (Movement)', score: 5, description: '나이에 따른 저하.' },
                { name: '체력 (Stamina)', score: 5, description: '자가면역질환 투병.' }
            ],
            growthStory: `
                <p>미국 캘리포니아 콤프턴의 위험한 빈민가에서 아버지 리차드 윌리엄스의 지도로 테니스를 시작했습니다. 영화 '킹 리차드'의 실제 모델입니다.</p>
            `,
            signatureMatch: {
                title: '2005 윔블던 결승 vs 린제이 데이븐포트',
                date: '2005. 07. 02',
                description: '윔블던 역사상 가장 명승부 중 하나. 매치 포인트 위기를 넘기고 2시간 45분의 혈투 끝에 우승을 차지했습니다. 우승 직후 펄쩍 뛰며 기뻐하는 모습은 전설적인 장면입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "Eleven"</div>
                    <p>자신만의 의류 브랜드 'Eleven'을 런칭해 디자이너로도 활동합니다. 쇼그렌 증후군이라는 난치병을 앓으면서도 투어를 떠나지 않는 열정은 모두의 귀감이 됩니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"테니스를 사랑하니까"</strong></p>
                <p>랭킹은 많이 떨어졌고 1회전 탈락이 잦지만, 와일드카드로 대회에 참가하며 팬들과 만나고 있습니다. 승패를 떠나 그녀가 코트에 서 있는 것만으로도 역사입니다.</p>
            `,
            faq: [
                {
                    question: '언제 은퇴하나요?',
                    answer: '아직 공식 은퇴 계획을 밝히지 않았습니다. 동생 세레나는 은퇴했지만, 비너스는 여전히 경기를 즐기고 싶어 합니다.'
                }
            ]
        }
    },
    'maria-sharapova': {
        name: '마리아 샤라포바', nameEn: 'Maria Sharapova', country: 'Russia', countryFlag: '🇷🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '커리어 그랜드슬램 달성자. 실력과 스타성을 완벽하게 겸비했던 테니스 역사상 최고의 슈퍼스타 중 한 명입니다. 강렬한 괴성(Shouting)과 끈질긴 승부 근성이 트레이드마크였습니다.',
        detailedProfile: {
            oneLineSummary: '17세 윔블던 우승의 충격, 실력과 미모, 사업 수완까지 갖춘 "테니스 여제".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🌟 "슈퍼스타"</div>
                    <p>2004년 17세의 나이로 윔블던 결승에서 세레나 윌리엄스를 꺾고 우승하며 세계적인 신드롬을 일으켰습니다. 4대 메이저 대회를 모두 우승(커리어 그랜드슬램)한 실력파이며, 포브스 선정 '세계에서 가장 돈 많이 버는 여선수' 11년 연속 1위를 차지했습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"공격적인 베이스라이너"</strong></p>
                <p>절대 수비하지 않고, 어떤 공이든 공격적으로 받아칩니다. 특유의 높은 타점에서 내리꽂는 샷이 일품입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>멘탈:</strong> 경기 중 루틴(뒤돌아서 줄 정리)을 철저히 지키며 평정심을 유지합니다. 역전승의 명수였습니다.</li>
                    <li><strong>리턴:</strong> 강력한 리턴으로 상대 서브 게임을 압박했습니다.</li>
                    <li><strong>드롭샷:</strong> 거의 쓰지 않고 스트로크 대결을 고집하는 뚝심이 있었습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '스타성 (Star)', score: 10, description: '비교 불가.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '강철 멘탈.' },
                { name: '파워 (Power)', score: 9, description: '강력한 베이스라이너.' },
                { name: '서브 (Serve)', score: 7, description: '어깨 부상 후 약점인 더블 폴트.' },
                { name: '이동 (Movement)', score: 7.5, description: '클레이에서 미끄러지는 법을 터득 후 완성형이 됨.' },
                { name: '네트 (Net)', score: 6.5, description: '드라이브 발리 선호.' }
            ],
            growthStory: `
                <p>러시아 시베리아에서 태어나, 7세 때 아버지가 단돈 700달러를 들고 미국으로 건너와 테니스 유학을 시켰습니다. 성공을 향한 헝그리 정신의 표본입니다.</p>
            `,
            signatureMatch: {
                title: '2004 윔블던 결승 vs 세레나 윌리엄스',
                date: '2004. 07. 03',
                description: '전설의 시작. 무적이었던 세레나를 17세 소녀가 2-0(6-1, 6-4)으로 완파하며 세계 테니스 판도를 뒤흔들었습니다. 마지막 포인트를 따고 무릎을 꿇고 얼굴을 감싸 쥐는 장면은 영원히 기억됩니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍬 "Sugarpova"</div>
                    <p>자신의 이름을 딴 사탕 브랜드 '슈가포바'를 런칭해 성공시킨 사업가이기도 합니다. 은퇴 후에도 패션, 뷰티 아이콘으로 활발히 활동하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"은퇴 후 제2의 삶"</strong></p>
                <p>2020년 은퇴를 선언했습니다. 현재는 사업가이자 엄마로서의 삶을 즐기고 있으며, 가끔 테니스 행사(피클볼 등)에 얼굴을 비춥니다.</p>
            `,
            faq: [
                {
                    question: '샤라포바의 괴성?',
                    answer: '공을 칠 때 100데시벨이 넘는 소리를 질러 논란이 되기도 했습니다. 그녀는 "어릴 때부터 습관이라 고칠 수 없다"고 했습니다.'
                }
            ]
        }
    },
    'garbine-muguruza': {
        name: '가르비녜 무구루사', nameEn: 'Garbine Muguruza', country: 'Spain', countryFlag: '🇪🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '프랑스 오픈과 윔블던을 모두 제패한 스페인의 스타. 윌리엄스 자매를 결승에서 모두 꺾고 우승한 유일한 선수로, 강력한 파워 테니스를 구사합니다.',
        detailedProfile: {
            oneLineSummary: '윌리엄스 자매 킬러, 흙과 잔디를 모두 정복한 "정열의 화신".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇪🇸 "나달의 여자 버전?"</div>
                    <p>스페인 선수지만 나달처럼 스핀을 걸기보다 플랫하게 때리는 공격형입니다. 프랑스 오픈(2016) 결승에서 세레나 윌리엄스를, 윔블던(2017) 결승에서 비너스 윌리엄스를 꺾고 우승했습니다. 윌리엄스 자매를 메이저 결승에서 모두 이긴 유일한 선수라는 기록을 가졌습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워 베이스라이너 (Aggressive)"</strong></p>
                <p>키 182cm의 장신에서 나오는 파괴력이 엄청납니다. 베이스라인 안쪽으로 들어와서 라이징 볼을 때립니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>공격:</strong> 수비보다는 무조건 공격입니다. 먼저 때려서 끝내는 것을 선호합니다.</li>
                    <li><strong>서브:</strong> 큰 키를 이용한 서브가 강력합니다.</li>
                    <li><strong>기복:</strong> 멘탈이나 컨디션 난조를 겪으면 걷잡을 수 없이 무너지는 경우가 있습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '압도적.' },
                { name: '공격성 (Aggression)', score: 10, description: '닥공.' },
                { name: '스타성 (Star)', score: 9, description: '화려함.' },
                { name: '멘탈 (Mental)', score: 6, description: '유리 멘탈.' },
                { name: '이동 (Movement)', score: 7, description: '준수함.' },
                { name: '서브 (Serve)', score: 8, description: '강력함.' }
            ],
            growthStory: `
                <p>베네수엘라 카라카스에서 태어났습니다. 6세 때 스페인으로 이주해 바르셀로나 아카데미에서 훈련했습니다. 그래서 두 나라 국적을 다 가지고 있으나 스페인 대표로 뛰었습니다.</p>
            `,
            signatureMatch: {
                title: '2016 프랑스 오픈 결승 vs 세레나 윌리엄스',
                date: '2016. 06. 04',
                description: '여제를 무너뜨리다. 무결점 여왕 세레나 윌리엄스를 상대로 힘대 힘 대결에서 전혀 밀리지 않고 2-0(7-5, 6-4) 완승을 거두며 첫 메이저 타이틀을 차지했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 "패션 & 은퇴"</div>
                    <p>모델어 같은 외모로 패션 화보도 많이 찍었습니다. 2024년 4월 공식 은퇴를 선언하여 팬들의 아쉬움을 샀습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Adios"</strong></p>
                <p>2024년 4월 공식 은퇴. 제2의 인생을 즐기고 있습니다.</p>
            `,
            faq: [
                {
                    question: '은퇴 이유?',
                    answer: '오랜 투어 생활에 지쳤고, 이제는 가족, 친구들과 평범한 삶을 즐기고 싶다고 밝혔습니다.'
                }
            ]
        }
    },
    'serena-williams': {
        name: '세레나 윌리엄스', nameEn: 'Serena Williams', country: 'United States', countryFlag: '🇺🇸', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '그랜드슬램 23회 우승에 빛나는 "GOAT". 여자 테니스의 차원을 바꾼 압도적인 파워와 불굴의 멘탈을 가진 역사상 최고의 선수입니다.',
        detailedProfile: {
            oneLineSummary: '여자 테니스 역사상 최고의 선수, "The Queen".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🐐 "The GOAT"</div>
                    <p>오픈 시대 이후 남녀 통틀어 최다인 23회의 그랜드슬램 단식 우승을 차지했습니다. 강력한 서브와 스트로크로 여자 테니스를 '파워 게임'으로 변화시킨 장본인이며, 출산 후에도 복귀하여 메이저 결승에 오르는 등 한계를 모르는 도전을 보여주었습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워 베이스라이너의 완성형"</strong></p>
                <p>테니스 역사상 가장 강력한 서브와 포핸드를 가졌습니다. 단순히 힘만 센 것이 아니라, 위기 상황에서 더 강해지는 멘탈과 경기 운영 능력까지 완벽했습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 테니스 역사상 최고의 서브입니다. 속도와 코스, 토스 동작까지 완벽해 읽을 수가 없습니다.</li>
                    <li><strong>멘탈:</strong> 매치 포인트에 몰려도 에이스를 꽂아 넣는 강심장입니다.</li>
                    <li><strong>리턴:</strong> 상대의 서브를 공격적으로 받아쳐 바로 주도권을 가져옵니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '역대 최고.' },
                { name: '파워 (Power)', score: 10, description: '비교 불가.' },
                { name: '멘탈 (Mental)', score: 10, description: '클러치 퀸.' },
                { name: '리턴 (Return)', score: 9.5, description: '공격적.' },
                { name: '스타성 (Star)', score: 10, description: '아이콘.' },
                { name: '이동 (Movement)', score: 8, description: '전성기는 빨랐음.' }
            ],
            growthStory: `
                <p>아버지 리차드 윌리엄스의 스파르타식 훈련을 받으며 언니 비너스와 함께 자랐습니다. 백인 위주의 테니스계에서 흑인 자매가 최정상에 오르는 과정은 전설이 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2017 호주 오픈 결승 vs 비너스 윌리엄스',
                date: '2017. 01. 28',
                description: '임신 우승. 임신 8주 차의 몸으로 언니 비너스를 꺾고 23번째 메이저 타이틀을 차지했습니다. 테니스 역사상 가장 위대한 우승 중 하나로 꼽힙니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👗 "Fashion & Mother"</div>
                    <p>코트 위 파격적인 패션으로 항상 화제를 모았습니다. 엄마가 된 후에는 '워킹맘'들을 대변하는 아이콘이 되었습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Evolution"</strong></p>
                <p>2022년 US 오픈을 끝으로 은퇴(진화, Evolution)를 선언했습니다. 현재는 사업가이자 투자자로 활발히 활동 중입니다.</p>
            `,
            faq: [
                {
                    question: '왜 은퇴가 아니라 진화라고 했나요?',
                    answer: '테니스 선수로서의 삶을 끝내고 새로운 영역으로 나아간다는 의미로 "Evolution from Tennis"라는 표현을 썼습니다.'
                }
            ]
        }
    },
    'ashleigh-barty': {
        name: '애슐리 바티', nameEn: 'Ashleigh Barty', country: 'Australia', countryFlag: '🇦🇺', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '세계 랭킹 1위 절정의 순간에 은퇴한 천재. 다양한 구질을 섞어 쓰는 올라운드 플레이와 겸손한 인품으로 전 세계 팬들의 사랑을 받았습니다.',
        detailedProfile: {
            oneLineSummary: '정상에서 쿨하게 떠난 "테니스 천재", 호주가 사랑한 영웅.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇦🇺 "The Aussie Pride"</div>
                    <p>44년 만에 호주 오픈을 제패한 호주 선수입니다. 세계 랭킹 1위를 굳건히 지키던 25세의 나이에 "이룰 것을 다 이뤘다"며 전격 은퇴를 선언해 전 세계에 충격을 주었습니다. 크리켓 선수로도 활동했을 만큼 운동 천재입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"전술적 올라운더 (Crafty)"</strong></p>
                <p>현대 테니스에서 보기 드문 다양한 기술을 구사합니다. 파워만으로 승부하지 않고 상대를 요리합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>슬라이스:</strong> 그녀의 백핸드 슬라이스는 투어 최고 수준으로, 상대를 곤경에 빠뜨립니다.</li>
                    <li><strong>서브/스매시:</strong> 단신(166cm)이지만 서브와 스매시 기술이 매우 좋습니다.</li>
                    <li><strong>멘탈:</strong> 항상 침착하고 포커페이스를 유지합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '기술 (Technique)', score: 10, description: '다재다능.' },
                { name: '전술 (Tactics)', score: 10, description: '코트의 체스 플레이어.' },
                { name: '슬라이스 (Slice)', score: 10, description: '마스터.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '평정심.' },
                { name: '이동 (Movement)', score: 9, description: '빠르고 효율적.' },
                { name: '파워 (Power)', score: 7.5, description: '기술적 완성도.' }
            ],
            growthStory: `
                <p>주니어 시절 천재로 불렸으나 압박감을 이기지 못해 테니스를 잠시 떠나 크리켓 선수로 활동했습니다. 복귀 후 테니스를 즐기게 되면서 세계 1위까지 올랐습니다.</p>
            `,
            signatureMatch: {
                title: '2022 호주 오픈 결승 vs 다니엘 콜린스',
                date: '2022. 01. 29',
                description: '홈 코트의 대관식. 44년 묵은 호주 테니스의 한을 풀며, 무실세트 우승이라는 완벽한 피날레를 장식했습니다. 이 대회를 끝으로 그녀는 전설로 남았습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🍺 "맥주 한 잔의 여유"</div>
                    <p>우승 후에도 소탈하게 맥주를 즐기는 모습 등 꾸밈없는 성격이 매력입니다. 동료 선수들이 가장 좋아하는 선수로 꼽힐 만큼 인성이 훌륭합니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Happy Life"</strong></p>
                <p>은퇴 후 엄마가 되어 행복한 가정을 꾸리고 있습니다. 골프 대회에 나가 우승을 차지하는 등 여전한 운동 신경을 보여줍니다.</p>
            `,
            faq: [
                {
                    question: '복귀 가능성은?',
                    answer: '본인은 "No"라고 단호하게 말합니다. 현재 삶에 매우 만족하고 있다고 합니다.'
                }
            ]
        }
    },
    'simona-halep': {
        name: '시모나 할렙', nameEn: 'Simona Halep', country: 'Romania', countryFlag: '🇷🇴', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '루마니아의 국민 영웅. 작은 체구지만 폭발적인 스피드와 지치지 않는 체력으로 코트를 누비는 "작은 거인"입니다. 2019 윔블던 챔피언입니다.',
        detailedProfile: {
            oneLineSummary: '작은 고추가 맵다, 코트 전체를 커버하는 "스피드 레이서".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇴 "루마니아의 자부심"</div>
                    <p>루마니아 최초의 여자 테니스 세계 랭킹 1위이자 윔블던 챔피언입니다. 168cm의 작은 키로 장신들의 파워 테니스 사이에서 스피드와 끈기로 살아남은 인간 승리의 아이콘입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"어그레시브 카운터 펀처"</strong></p>
                <p>수비만 하는 것이 아니라 기회가 오면 빠르게 공격으로 전환합니다. 코트 커버 범위가 엄청납니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 투어에서 가장 빠른 발을 가졌습니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드가 매우 날카롭습니다.</li>
                    <li><strong>체력:</strong> 3세트 접전에도 지치지 않는 강철 체력입니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '이동 (Movement)', score: 10, description: '최고 수준.' },
                { name: '체력 (Stamina)', score: 10, description: '에너자이저.' },
                { name: '수비 (Defense)', score: 9.5, description: '다 받아냄.' },
                { name: '백핸드 (Backhand)', score: 9, description: '주무기.' },
                { name: '멘탈 (Mental)', score: 8, description: '다혈질 기질 있음.' },
                { name: '서브 (Serve)', score: 6.5, description: '신체적 한계.' }
            ],
            growthStory: `
                <p>주니어 시절 가슴 축소 수술까지 감행하며 테니스에 모든 것을 걸었습니다. 세 번의 메이저 결승 패배 끝에 2018 프랑스 오픈에서 첫 우승을 차지하며 눈물을 흘렸습니다.</p>
            `,
            signatureMatch: {
                title: '2019 윔블던 결승 vs 세레나 윌리엄스',
                date: '2019. 07. 13',
                description: '인생 경기. 서브 에러를 단 3개만 기록하는 완벽한 경기력으로 세레나를 2-0(6-2, 6-2)으로 완파했습니다. 경기 시간이 1시간도 채 걸리지 않았습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">❤️ "열정"</div>
                    <p>솔직하고 감정 표현이 풍부해 팬들과 잘 소통합니다. 테니스에 대한 순수한 열정이 느껴지는 선수입니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"도핑 징계 후 복귀"</strong></p>
                <p>금지 약물 논란으로 징계를 받았다가 항소를 통해 기간이 단축되어 2024년 투어에 복귀했습니다. 명예 회복을 노리고 있습니다.</p>
            `,
            faq: [
                {
                    question: '가슴 수술?',
                    answer: '10대 시절 가슴이 너무 커서 움직임에 방해가 되자 축소 수술을 받았습니다. 테니스를 위해 몸까지 바꾼 그녀의 열정은 유명합니다.'
                }
            ]
        }
    },
    'zheng-qinwen': {
        name: '정친원', nameEn: 'Zheng Qinwen', country: 'China', countryFlag: '🇨🇳', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '2024 파리 올림픽 금메달리스트. 리나의 뒤를 잇는 중국 테니스의 새로운 에이스로, 강력한 서브와 공격적인 플레이가 돋보이는 "Queen Wen"입니다.',
        detailedProfile: {
            oneLineSummary: '아시아 최초 올림픽 단식 금메달, 대륙의 기상을 품은 "Queen Wen".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥇 "History Maker"</div>
                    <p>2024 파리 올림픽 여자 단식에서 아시아 선수 최초로 금메달을 획득하며 역사를 썼습니다. 2024 호주 오픈 준우승까지 차지하며 세계 Top 10에 안착, 리나 이후 최고의 아시아 스타로 떠올랐습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"파워 베이스라이너 (Heavy Hitter)"</strong></p>
                <p>강력한 톱스핀 포핸드와 서브로 상대를 힘으로 누릅니다. 클레이 코트에서도 강한 면모를 보입니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 여자 투어 최고 수준의 에이스 능력을 갖췄습니다.</li>
                    <li><strong>포핸드:</strong> 남자 선수 못지않은 강한 스핀과 파워를 자랑합니다.</li>
                    <li><strong>멘탈:</strong> 중요한 순간에 소리를 지르며 스스로를 끌어올리는 승부욕이 강합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '파워 (Power)', score: 9.5, description: '묵직함.' },
                { name: '서브 (Serve)', score: 9.5, description: '에이스 머신.' },
                { name: '체력 (Stamina)', score: 9, description: '지치지 않음.' },
                { name: '멘탈 (Mental)', score: 8.5, description: '강한 승부욕.' },
                { name: '이동 (Movement)', score: 8, description: '준수함.' },
                { name: '네트 (Net)', score: 7, description: '발전 중.' }
            ],
            growthStory: `
                <p>중국 후베이성 출신입니다. 2008년 베이징 올림픽을 보고 테니스를 시작했으며, 리나의 경기를 보며 꿈을 키웠습니다. 스페인에서 훈련하며 클레이 코트 실력을 키웠습니다.</p>
            `,
            signatureMatch: {
                title: '2024 파리 올림픽 4강 vs 이가 시비옹테크',
                date: '2024. 08. 01',
                description: '클레이 여제 격파. 롤랑가로스에서 무적에 가깝던 시비옹테크를 상대로 2-0 완승을 거두는 대이변을 연출하며 금메달의 발판을 마련했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎤 " 노래 실력?"</div>
                    <p>인터뷰에서 노래를 부르거나 춤을 추는 등 끼가 넘칩니다. 영어 실력도 유창하여 서구권 팬들에게도 인기가 많습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Top 10 굳히기"</strong></p>
                <p>올림픽 금메달 이후 자신감이 절정에 달해 있습니다. 그랜드슬램 우승을 향해 전진 중입니다.</p>
            `,
            faq: [
                {
                    question: '별명 Queen Wen?',
                    answer: '자신의 이름 Qinwen(친원)과 발음이 비슷한 Queen(여왕)을 합쳐 팬들이 붙여준 별명입니다. 본인도 이 별명을 매우 좋아합니다.'
                }
            ]
        }
    },
    'martina-hingis': {
        name: '마르티나 힝기스', nameEn: 'Martina Hingis', country: 'Switzerland', countryFlag: '🇨🇭', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '16세에 세계 1위에 오른 "알프스의 소녀". 힘이 아닌 두뇌와 정교한 기술로 거구들을 제압했던 테니스 아이큐 만렙의 천재입니다.',
        detailedProfile: {
            oneLineSummary: '힘으로 치는 테니스를 비웃듯 코트를 지휘한 "두뇌 플레이의 여왕".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🧠 "Tennis IQ"</div>
                    <p>최연소 그랜드슬램 우승(16세 3개월), 최연소 세계 1위(16세 6개월) 기록 보유자입니다. 파워 테니스가 도래하던 시기, 샷의 정확도와 예측 능력만으로 세계를 제패했습니다. 단식과 복식 모두 세계 1위에 오른 전설입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"전술적 카운터 펀처 (Tactical)"</strong></p>
                <p>상대의 힘을 역이용하고, 코트의 빈 곳을 정확히 찌릅니다. 미리 가서 기다리는 예측 능력이 소름 돋습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>터치:</strong> 드롭샷, 로브, 발리 등 손기술이 예술의 경지입니다.</li>
                    <li><strong>운영:</strong> 상대를 좌우 앞뒤로 흔들어 스스로 붕괴하게 만듭니다.</li>
                    <li><strong>서브:</strong> 파워는 약했지만 코스가 매우 예리했습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '두뇌 (IQ)', score: 10, description: '천재.' },
                { name: '기술 (Technique)', score: 10, description: '마스터.' },
                { name: '네트 (Net)', score: 10, description: '복식 여제.' },
                { name: '예측 (Anticipation)', score: 10, description: '미래를 봄.' },
                { name: '이동 (Movement)', score: 8.5, description: '효율적.' },
                { name: '파워 (Power)', score: 5, description: '유일한 약점.' }
            ],
            growthStory: `
                <p>슬로바키아에서 태어나 스위스로 이주했습니다. 어머니 멜라니 몰리터가 그녀를 위해 직접 코칭 프로그램을 설계하여 '테니스 기계'가 아닌 '테니스 예술가'로 키워냈습니다.</p>
            `,
            signatureMatch: {
                title: '1997 호주 오픈 결승 vs 마리 피에르스',
                date: '1997. 01. 25',
                description: '전설의 시작. 16세의 나이로 압도적인 경기력을 보여주며 2-0(6-2, 6-2)으로 승리, 최연소 메이저 챔피언에 등극했습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">😁 "Swiss Miss"</div>
                    <p>귀여운 외모와 밝은 미소로 '스위스 미스'라 불리며 전 세계적인 인기를 누렸습니다. 두 번의 은퇴 번복 후 복식 전문 선수로 복귀하여 메이저 우승을 추가하는 모습은 감동을 주었습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"Legend"</strong></p>
                <p>2017년 세 번째 은퇴를 선언했습니다. 현재는 코치로 활동하며 후배들을 양성하고 있습니다.</p>
            `,
            faq: [
                {
                    question: '이름의 유래?',
                    answer: '어머니가 테니스 전설 마르티나 나브라틸로바의 이름을 따서 지었습니다. 이름값을 톡톡히 했습니다.'
                }
            ]
        }
    },
    'kim-clijsters': {
        name: '킴 클리스터스', nameEn: 'Kim Clijsters', country: 'Belgium', countryFlag: '🇧🇪', gender: 'female', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '코트 위의 "슈퍼맘". 은퇴 후 출산하고 돌아와서 US 오픈을 2회나 더 우승한 전설적인 선수입니다. 다리 찢기(Split) 수비가 트레이드마크인 유연함의 끝판왕입니다.',
        detailedProfile: {
            oneLineSummary: '은퇴와 출산은 쉼표일 뿐, 돌아와서 다시 정상에 선 "슈퍼맘".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">👶 "Mother Champion"</div>
                    <p>2007년 23세에 은퇴하고 딸을 낳은 뒤, 2009년 복귀하여 바로 US 오픈을 우승했습니다. 어머니로서 그랜드슬램을 우승한 3명 중 한 명이자, 엄마 선수의 성공 신화를 쓴 주인공입니다. 통산 그랜드슬램 4회 우승자입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"유연한 어그레시버"</strong></p>
                <p>남자 선수들도 하기 힘든 일자 다리 찢기(Split)를 하면서 공을 받아내는 수비 범위가 놀랍습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>움직임:</strong> 하드코트에서도 슬라이딩을 자유자재로 구사합니다.</li>
                    <li><strong>포핸드:</strong> 강력하고 스핀이 많이 걸린 포핸드로 상대를 밀어냅니다.</li>
                    <li><strong>성격:</strong> '우리가 사랑한 킴(Our Kim)'이라 불릴 정도로 매너가 좋고 성격이 쾌활합니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '이동 (Movement)', score: 10, description: '전매특허 스플릿.' },
                { name: '파워 (Power)', score: 9, description: '묵직함.' },
                { name: '멘탈 (Mental)', score: 9.5, description: '긍정의 힘.' },
                { name: '수비 (Defense)', score: 9.5, description: '철벽.' },
                { name: '네트 (Net)', score: 7.5, description: '준수함.' },
                { name: '서브 (Serve)', score: 8, description: '안정적.' }
            ],
            growthStory: `
                <p>벨기에 빌젠 출신입니다. 축구 선수 아버지와 체조 선수 어머니의 유전자를 물려받아 뛰어난 운동 신경을 가졌습니다. 라이벌 쥐스틴 에넹과 함께 벨기에 테니스의 황금기를 이끌었습니다.</p>
            `,
            signatureMatch: {
                title: '2009 US 오픈 결승 vs 캐롤라인 보즈니아키',
                date: '2009. 09. 13',
                description: '동화 같은 우승. 와일드카드로 출전해 우승까지 차지한 최초의 선수. 우승 후 딸 제이다가 코트로 내려와 트로피를 만지는 장면은 테니스 역사상 가장 사랑스러운 순간 중 하나입니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🥰 "Aussie Kim"</div>
                    <p>레이튼 휴이트와 약혼했었던 인연으로 호주 팬들에게 'Aussie Kim'이라 불리며 자국 선수만큼의 사랑을 받았습니다. 항상 웃는 얼굴과 친절한 태도는 모든 이의 호감을 샀습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"영원한 레전드"</strong></p>
                <p>2022년 세 번째 은퇴를 했습니다. 명예의 전당에 헌액되었으며, 레전드 매치 등에 참가하며 테니스를 즐기고 있습니다.</p>
            `,
            faq: [
                {
                    question: '다리 찢기 비결?',
                    answer: '체조 선수 출신인 어머니의 영향으로 유연성을 타고났으며, 어릴 때부터 꾸준히 스트레칭을 했다고 합니다.'
                }
            ]
        }
    },
    'andy-roddick': {
        name: '앤디 로딕', nameEn: 'Andy Roddick', country: 'United States', countryFlag: '🇺🇸', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '광속 서브의 대명사. 시속 240km가 넘는 강서브를 앞세워 세계 1위에 올랐던 미국의 마지막 자존심입니다. 페더러라는 벽에 막혀 아쉽게 2인자에 머문 비운의 스타이기도 합니다.',
        detailedProfile: {
            oneLineSummary: '미국 남자 테니스의 마지막 1위, 페더러의 그늘에 가려진 "광속 서버".',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "Mr. Serve"</div>
                    <p>한때 세계에서 가장 빠른 서브 기록(249.4km/h)을 보유했었습니다. 2003년 US 오픈 우승자이자 세계 랭킹 1위였으나, 커리어 내내 '천적' 로저 페더러에게 막혀 4번의 그랜드슬램 준우승을 기록했습니다. 하지만 그의 유머와 열정은 많은 사랑을 받았습니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"빅 서버 + 포핸드"</strong></p>
                <p>서브로 압박하고 포핸드로 끝내는 단순하지만 강력한 패턴을 구사했습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 짧고 폭발적인 모션에서 나오는 서브는 알고도 못 막는 수준이었습니다.</li>
                    <li><strong>포핸드:</strong> 엄청난 톱스핀을 건 포핸드 역크로스가 주무기였습니다.</li>
                    <li><strong>네트:</strong> 코치 래리 스테판키를 만난 후 발리 능력을 보완하여 올라운더 면모를 갖췄습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '서브 (Serve)', score: 10, description: '전설적.' },
                { name: '파워 (Power)', score: 9.5, description: '강력함.' },
                { name: '포핸드 (Forehand)', score: 9.5, description: '해머.' },
                { name: '멘탈 (Mental)', score: 9, description: '열정.' },
                { name: '이동 (Movement)', score: 7, description: '평범.' },
                { name: '백핸드 (Backhand)', score: 7, description: '약점.' }
            ],
            growthStory: `
                <p>미국 텍사스 오스틴에 거주하고 있습니다. 주니어 시절부터 미국의 차세대 스타로 주목받았습니다. 은퇴 날, "개(반려견)를 산책시키고 싶다"는 소감을 남겨 화제가 되었습니다.</p>
            `,
            signatureMatch: {
                title: '2009 윔블던 결승 vs 로저 페더러',
                date: '2009. 07. 05',
                description: '가장 위대한 패배. 4시간 17분의 혈투, 마지막 5세트 스코어 14-16. 자신의 서브 게임을 딱 한 번 브레이크 당했는데 그것이 우승을 결정지은 순간이었습니다. 경기 후 "로저, 너 그거 알고 있니? 나 오늘 서브 딱 한 번 졌어"라는 농담 섞인 인터뷰로 관중을 울렸습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🎙️ "입담꾼"</div>
                    <p>기자회견실의 아이돌이었습니다. 유머러스하고 솔직한 인터뷰로 인기가 많았으며, 은퇴 후 방송 해설가로도 성공했습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"팟캐스트 스타"</strong></p>
                <p>개인 팟캐스트를 운영하며 활발히 소통하고 있습니다. 현역 시절 못지않은 분석력과 입담을 자랑합니다.</p>
            `,
            faq: [
                {
                    question: '페더러와의 상대 전적?',
                    answer: '3승 21패. 압도적인 열세였지만, 로딕은 "나는 그를 이기려고 노력하는 것을 멈추지 않았다"며 존중을 표했습니다.'
                }
            ]
        }
    },
    'lleyton-hewitt': {
        name: '레이튼 휴이트', nameEn: 'Lleyton Hewitt', country: 'Australia', countryFlag: '🇦🇺', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
        longBio: '"C\'mon!" 역대 최연소 세계 랭킹 1위 기록 보유자. 작은 체구에도 악바리 같은 근성과 빠른 발로 코트를 지배했던 호주의 전설입니다.',
        detailedProfile: {
            oneLineSummary: '포기를 모르는 "Rusty", 호주 테니스의 영혼이자 최연소 세계 1위.',
            whyNotable: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🇦🇺 "The Fighter"</div>
                    <p>20세 8개월의 나이로 역대 최연소 ATP 연말 세계 랭킹 1위(2001년)에 올랐습니다. 2001 US 오픈, 2002 윔블던 챔피언입니다. 끊임없이 소리치며 자신을 독려하는 파이팅 넘치는 스타일의 원조입니다.</p>
                </div>
            `,
            playStyle: `
                <p><strong>"카운터 펀처의 교과서"</strong></p>
                <p>상대의 강타를 빠른 발로 따라가 정확하게 되치기(Counter) 합니다. 끈질긴 수비로 상대를 질리게 만듭니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>로브:</strong> 키를 넘기는 톱스핀 로브가 일품입니다.</li>
                    <li><strong>리턴:</strong> 상대 서브를 블로킹하여 발밑에 떨어뜨리는 능력이 탁월했습니다.</li>
                    <li><strong>멘탈:</strong> 0-2로 뒤져도 역전할 수 있다는 믿음을 주는 선수였습니다.</li>
                </ul>
            `,
            hexagonStats: [
                { name: '멘탈 (Mental)', score: 10, description: '전투력 만렙.' },
                { name: '이동 (Movement)', score: 10, description: '다람쥐.' },
                { name: '리턴 (Return)', score: 9.5, description: '최상급.' },
                { name: '전술 (Tactics)', score: 9, description: '영리함.' },
                { name: '백핸드 (Backhand)', score: 8.5, description: '안정적.' },
                { name: '파워 (Power)', score: 6, description: '체격 열세.' }
            ],
            growthStory: `
                <p>호주 애들레이드 출신입니다. 호주식 풋볼(AFL) 선수가 되고 싶었으나 테니스를 선택했습니다. 하지만 풋볼 선수 특유의 투쟁심을 테니스 코트로 가져왔습니다.</p>
            `,
            signatureMatch: {
                title: '2001 US 오픈 결승 vs 피트 샘프라스',
                date: '2001. 09. 09',
                description: '황제 제압. 당대 최강의 서버 샘프라스를 상대로 단 한 번의 브레이크도 허용하지 않고 3-0으로 완승을 거두며 첫 메이저 타이틀을 차지했습니다. 세대교체의 신호탄이었습니다.'
            },
            fanAppeal: `
                <div class="highlight-box">
                    <div class="highlight-box-title">🗣️ "C'mon!"</div>
                    <p>그의 트레이드마크인 'C'mon!' 제스처는 수많은 테니스 키즈들이 따라 했습니다. 호주 데이비스컵 팀의 주장이자 멘토로서 여전히 큰 영향력을 발휘하고 있습니다.</p>
                </div>
            `,
            recentForm: `
                <p><strong>"영원한 캡틴"</strong></p>
                <p>2016년 은퇴했지만, 호주 대표팀 감독(Captain)으로서 후배들을 이끌고 있습니다. 가끔 복식 경기에 출전하며 녹슬지 않은 기량을 보여줍니다.</p>
            `,
            faq: [
                {
                    question: '왜 별명이 Rusty인가요?',
                    answer: '어릴 때 코치가 영화 \'National Lampoon\'s Vacation\'의 캐릭터 이름을 따서 붙여준 별명이라고 합니다.'
                }
            ]
        }
    },
};


export const getPlayerSlugs = () => Object.keys(PLAYERS_DB);

export const getPlayerBySlug = (slug: string) => PLAYERS_DB[slug];
