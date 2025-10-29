// 테니스 플레이 스타일 진단 데이터 및 로직

export interface PlayStyleQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    weights: {
      attacker: number;
      strategist: number;
      defender: number;
      allRounder: number;
      instinctive: number;
      powerBaseline: number;
      netCharger: number;
    };
  }[];
}

export interface PlayStyleResult {
  id: number;
  name: string;
  emoji: string;
  color: string;
  keywords: string[];
  description: string;
  strengths: string[];
  weaknesses: string[];
  recommendedShots: string[];
  recommendedTraining: string[];
  similarPro: {
    name: string;
    country: string;
    style: string;
  };
  equipment: {
    racket: string[];
    string: string;
    shoes: string;
  };
  quote: string;
  stats: {
    power: number;
    control: number;
    spin: number;
    net: number;
    stability: number;
    mental: number;
  };
}

export const playStyleQuestions: PlayStyleQuestion[] = [
  {
    id: 1,
    question: "경기에서 당신의 첫 전략은?",
    options: [
      {
        text: "강한 서브로 압박",
        weights: { attacker: 3, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "랠리 안정화부터",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "상대 패턴 파악",
        weights: { attacker: 0, strategist: 3, defender: 1, allRounder: 1, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "상황 보며 조절",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "감으로 승부",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 2,
    question: "랠리가 길어질수록 당신은?",
    options: [
      {
        text: "더 강하게 밀어붙인다",
        weights: { attacker: 3, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 3, netCharger: 1 }
      },
      {
        text: "안정적으로 버틴다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도와 타이밍을 바꾼다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "네트로 전진한다",
        weights: { attacker: 2, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 0, netCharger: 3 }
      },
      {
        text: "예상 밖의 샷을 시도한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 3,
    question: "득점 후 반응은?",
    options: [
      {
        text: "분석 중",
        weights: { attacker: 0, strategist: 3, defender: 1, allRounder: 1, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "흥분!",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 2, powerBaseline: 2, netCharger: 2 }
      },
      {
        text: "쿨하게 다음 포인트로",
        weights: { attacker: 1, strategist: 2, defender: 2, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "상대 표정 관찰",
        weights: { attacker: 0, strategist: 2, defender: 2, allRounder: 1, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "즉흥적으로 다음 샷 준비",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 4,
    question: "실수했을 때 당신은?",
    options: [
      {
        text: "더 공격적으로 밀어붙인다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안전한 샷으로 돌아간다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "원인을 분석한다",
        weights: { attacker: 0, strategist: 3, defender: 1, allRounder: 1, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "상황에 맞게 조절한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "감으로 다른 샷을 시도한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 5,
    question: "상대가 강한 샷을 날렸을 때?",
    options: [
      {
        text: "더 강하게 받아친다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 3, netCharger: 1 }
      },
      {
        text: "안정적으로 받아낸다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도로 회피한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "상황에 맞게 대응한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "예상 밖의 샷으로 대응한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 6,
    question: "경기 중 집중력이 떨어질 때?",
    options: [
      {
        text: "더 공격적으로 밀어붙인다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안전한 샷으로 집중한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "전략을 재검토한다",
        weights: { attacker: 0, strategist: 3, defender: 1, allRounder: 1, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "상황에 맞게 조절한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "감으로 새로운 샷을 시도한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 7,
    question: "상대가 약한 샷을 날렸을 때?",
    options: [
      {
        text: "강하게 마무리한다",
        weights: { attacker: 3, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 2 }
      },
      {
        text: "안정적으로 처리한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도로 마무리한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "상황에 맞게 처리한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "예상 밖의 샷으로 마무리한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 8,
    question: "경기 중 스트레스를 받을 때?",
    options: [
      {
        text: "더 공격적으로 밀어붙인다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안전한 샷으로 안정화한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "전략을 재검토한다",
        weights: { attacker: 0, strategist: 3, defender: 1, allRounder: 1, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "상황에 맞게 조절한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "감으로 새로운 샷을 시도한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 9,
    question: "상대가 네트로 올라왔을 때?",
    options: [
      {
        text: "강한 패싱샷으로 대응한다",
        weights: { attacker: 3, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안정적으로 로브한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도로 패싱샷을 시도한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "상황에 맞게 대응한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "예상 밖의 샷으로 대응한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 10,
    question: "경기 중 상대의 패턴을 파악했을 때?",
    options: [
      {
        text: "강하게 압박한다",
        weights: { attacker: 3, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안정적으로 대응한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "전략적으로 활용한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 0, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "상황에 맞게 활용한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "감으로 새로운 샷을 시도한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 11,
    question: "경기 중 상대가 약한 서브를 날렸을 때?",
    options: [
      {
        text: "강하게 리턴한다",
        weights: { attacker: 3, strategist: 1, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안정적으로 리턴한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도로 리턴한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "상황에 맞게 리턴한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "예상 밖의 샷으로 리턴한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 12,
    question: "경기 중 상대가 강한 서브를 날렸을 때?",
    options: [
      {
        text: "강하게 리턴한다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안정적으로 리턴한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도로 리턴한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "상황에 맞게 리턴한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "예상 밖의 샷으로 리턴한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 13,
    question: "경기 중 상대가 실수했을 때?",
    options: [
      {
        text: "더 강하게 압박한다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 2, netCharger: 1 }
      },
      {
        text: "안정적으로 대응한다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "전략적으로 활용한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 0, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "상황에 맞게 활용한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "감으로 새로운 샷을 시도한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  },
  {
    id: 14,
    question: "경기 중 상대가 강한 샷을 날렸을 때?",
    options: [
      {
        text: "더 강하게 받아친다",
        weights: { attacker: 3, strategist: 0, defender: 0, allRounder: 1, instinctive: 1, powerBaseline: 3, netCharger: 1 }
      },
      {
        text: "안정적으로 받아낸다",
        weights: { attacker: 0, strategist: 1, defender: 3, allRounder: 2, instinctive: 0, powerBaseline: 0, netCharger: 0 }
      },
      {
        text: "각도로 회피한다",
        weights: { attacker: 1, strategist: 3, defender: 1, allRounder: 2, instinctive: 1, powerBaseline: 1, netCharger: 2 }
      },
      {
        text: "상황에 맞게 대응한다",
        weights: { attacker: 1, strategist: 2, defender: 1, allRounder: 3, instinctive: 1, powerBaseline: 1, netCharger: 1 }
      },
      {
        text: "예상 밖의 샷으로 대응한다",
        weights: { attacker: 1, strategist: 0, defender: 0, allRounder: 1, instinctive: 3, powerBaseline: 1, netCharger: 1 }
      }
    ]
  }
];

export const playStyleResults: PlayStyleResult[] = [
  {
    id: 1,
    name: "공격가형",
    emoji: "⚡",
    color: "red",
    keywords: ["결단", "파워", "승부욕"],
    description: "빠른 템포, 초구 주도형. 리스크 감수형 공격가",
    strengths: ["결단력", "빠른 템포", "초구 주도권", "파워 샷"],
    weaknesses: ["감정 컨트롤", "수비 대응", "안정성"],
    recommendedShots: ["포핸드 위너", "강한 첫 서브", "패싱샷"],
    recommendedTraining: ["20볼 랠리 내 안정성 유지", "리턴 전 포지션 조정 훈련", "멘탈 컨트롤 루틴"],
    similarPro: {
      name: "Carlos Alcaraz",
      country: "스페인",
      style: "공격형"
    },
    equipment: {
      racket: ["Head Boom", "Babolat Pure Drive"],
      string: "폴리 계열, 텐션 52–54lb",
      shoes: "가벼운 반응형 모델"
    },
    quote: "망설임은 미스를 부른다. 자신 있게 스윙하라.",
    stats: {
      power: 5,
      control: 2,
      spin: 4,
      net: 3,
      stability: 2,
      mental: 3
    }
  },
  {
    id: 2,
    name: "전략가형",
    emoji: "🧠",
    color: "indigo",
    keywords: ["분석", "패턴", "냉정"],
    description: "데이터형 사고, 경기 전체를 설계하는 두뇌형",
    strengths: ["분석력", "패턴 파악", "냉정함", "전략적 사고"],
    weaknesses: ["즉흥성", "감정 표현", "공격성"],
    recommendedShots: ["각도 샷", "드롭샷", "로브"],
    recommendedTraining: ["상대 패턴 분석 훈련", "각도 샷 정확도 향상", "멘탈 강화"],
    similarPro: {
      name: "Novak Djokovic",
      country: "세르비아",
      style: "전략가형"
    },
    equipment: {
      racket: ["Wilson Blade", "Head Prestige"],
      string: "멀티 계열, 텐션 50–52lb",
      shoes: "안정성 중심 모델"
    },
    quote: "전략은 승부의 절반이다. 나머지는 실행이다.",
    stats: {
      power: 3,
      control: 5,
      spin: 3,
      net: 4,
      stability: 4,
      mental: 5
    }
  },
  {
    id: 3,
    name: "수비형",
    emoji: "🛡️",
    color: "green",
    keywords: ["끈기", "지구력", "집중"],
    description: "안정성과 인내력, 상대 실수를 유도하는 스타일",
    strengths: ["끈기", "지구력", "집중력", "안정성"],
    weaknesses: ["공격성", "파워", "결단력"],
    recommendedShots: ["로브", "안정적인 랠리", "컨트롤 샷"],
    recommendedTraining: ["지구력 향상", "안정성 랠리 훈련", "멘탈 강화"],
    similarPro: {
      name: "Rafael Nadal",
      country: "스페인",
      style: "수비형"
    },
    equipment: {
      racket: ["Babolat Pure Aero", "Wilson Clash"],
      string: "폴리 계열, 텐션 48–50lb",
      shoes: "지구력 중심 모델"
    },
    quote: "끈기는 승리의 열쇠다. 포기하지 마라.",
    stats: {
      power: 2,
      control: 5,
      spin: 5,
      net: 2,
      stability: 5,
      mental: 4
    }
  },
  {
    id: 4,
    name: "올라운더형",
    emoji: "🌀",
    color: "gold",
    keywords: ["균형", "유연", "적응력"],
    description: "상황 판단·샷 선택 모두 유연, 협동형 플레이어",
    strengths: ["균형감", "유연성", "적응력", "협동성"],
    weaknesses: ["특화 부족", "결단력", "공격성"],
    recommendedShots: ["올라운드 샷", "상황별 적응", "협동 플레이"],
    recommendedTraining: ["전체적 기술 향상", "상황 판단 훈련", "협동 플레이"],
    similarPro: {
      name: "Roger Federer",
      country: "스위스",
      style: "올라운더형"
    },
    equipment: {
      racket: ["Wilson Pro Staff", "Head Radical"],
      string: "멀티 계열, 텐션 50–52lb",
      shoes: "균형 중심 모델"
    },
    quote: "유연함이 승리의 길이다. 적응하라.",
    stats: {
      power: 3,
      control: 4,
      spin: 3,
      net: 4,
      stability: 4,
      mental: 4
    }
  },
  {
    id: 5,
    name: "본능형",
    emoji: "🔮",
    color: "violet",
    keywords: ["감각", "즉흥", "예측불가"],
    description: "리듬과 감으로 플레이, 창의적이고 예상 밖의 전개",
    strengths: ["감각", "즉흥성", "창의성", "예측불가"],
    weaknesses: ["안정성", "일관성", "분석력"],
    recommendedShots: ["즉흥 샷", "창의적 샷", "예상 밖의 샷"],
    recommendedTraining: ["감각 훈련", "즉흥성 향상", "창의적 샷 연습"],
    similarPro: {
      name: "Nick Kyrgios",
      country: "호주",
      style: "본능형"
    },
    equipment: {
      racket: ["Yonex EZONE", "Babolat Pure Strike"],
      string: "멀티 계열, 텐션 48–50lb",
      shoes: "가벼운 반응형 모델"
    },
    quote: "감각은 최고의 선생이다. 믿어라.",
    stats: {
      power: 4,
      control: 2,
      spin: 3,
      net: 3,
      stability: 2,
      mental: 3
    }
  },
  {
    id: 6,
    name: "파워 베이스라인형",
    emoji: "💥",
    color: "orange",
    keywords: ["포핸드", "속도", "공격적 베이스라인"],
    description: "힘과 스핀으로 경기 주도",
    strengths: ["파워", "스핀", "베이스라인", "속도"],
    weaknesses: ["네트 플레이", "컨트롤", "안정성"],
    recommendedShots: ["포핸드 위너", "스핀 샷", "베이스라인 샷"],
    recommendedTraining: ["파워 향상", "스핀 훈련", "베이스라인 안정성"],
    similarPro: {
      name: "Rafael Nadal",
      country: "스페인",
      style: "파워 베이스라인형"
    },
    equipment: {
      racket: ["Babolat Pure Aero", "Wilson Clash"],
      string: "폴리 계열, 텐션 50–52lb",
      shoes: "파워 중심 모델"
    },
    quote: "파워는 승리의 무기다. 단련하라.",
    stats: {
      power: 5,
      control: 3,
      spin: 5,
      net: 2,
      stability: 3,
      mental: 3
    }
  },
  {
    id: 7,
    name: "네트러시형",
    emoji: "🕊️",
    color: "cyan",
    keywords: ["전진", "발리", "결정력"],
    description: "네트를 장악하며 승부, 빠른 반응과 포지셔닝 능력",
    strengths: ["전진성", "발리", "결정력", "반응속도"],
    weaknesses: ["베이스라인", "지구력", "안정성"],
    recommendedShots: ["발리", "스매시", "드롭샷"],
    recommendedTraining: ["네트 플레이", "발리 훈련", "반응속도 향상"],
    similarPro: {
      name: "John McEnroe",
      country: "미국",
      style: "네트러시형"
    },
    equipment: {
      racket: ["Wilson Pro Staff", "Head Prestige"],
      string: "멀티 계열, 텐션 52–54lb",
      shoes: "가벼운 반응형 모델"
    },
    quote: "네트는 승리의 땅이다. 장악하라.",
    stats: {
      power: 4,
      control: 4,
      spin: 2,
      net: 5,
      stability: 3,
      mental: 4
    }
  }
];

export function calculatePlayStyle(answers: number[]): PlayStyleResult {
  const scores = {
    attacker: 0,
    strategist: 0,
    defender: 0,
    allRounder: 0,
    instinctive: 0,
    powerBaseline: 0,
    netCharger: 0
  };

  // 각 답변에 대해 점수 계산
  answers.forEach((answerIndex, questionIndex) => {
    const question = playStyleQuestions[questionIndex];
    if (question && question.options[answerIndex]) {
      const weights = question.options[answerIndex].weights;
      scores.attacker += weights.attacker;
      scores.strategist += weights.strategist;
      scores.defender += weights.defender;
      scores.allRounder += weights.allRounder;
      scores.instinctive += weights.instinctive;
      scores.powerBaseline += weights.powerBaseline;
      scores.netCharger += weights.netCharger;
    }
  });

  // 가장 높은 점수를 가진 스타일 찾기
  const maxScore = Math.max(...Object.values(scores));
  const dominantStyle = Object.keys(scores).find(key => scores[key as keyof typeof scores] === maxScore);

  // 스타일 ID 매핑
  const styleMapping: { [key: string]: number } = {
    attacker: 1,
    strategist: 2,
    defender: 3,
    allRounder: 4,
    instinctive: 5,
    powerBaseline: 6,
    netCharger: 7
  };

  const resultId = styleMapping[dominantStyle || 'allRounder'];
  return playStyleResults.find(result => result.id === resultId) || playStyleResults[3];
}

export function getPlayStyleStats(result: PlayStyleResult) {
  return [
    { name: '파워', value: result.stats.power, max: 5 },
    { name: '컨트롤', value: result.stats.control, max: 5 },
    { name: '스핀', value: result.stats.spin, max: 5 },
    { name: '네트', value: result.stats.net, max: 5 },
    { name: '안정성', value: result.stats.stability, max: 5 },
    { name: '멘탈', value: result.stats.mental, max: 5 }
  ];
}