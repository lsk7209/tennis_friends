import fs from "node:fs";

const reviewData = {
  reviewer: "Independent AI editorial reviewer (verifier)",
  checkedAt: "2026-10-21T01:30:00+09:00",
  reviewedAt: "2026-10-21T01:30:00+09:00",
  reviewStage: "final_current_hash_and_local_ui",
  scope: "aw069-aw073 final effective local content and metadata. This is a local editorial approval only; it does not establish serving, deployment, or live-site proof.",
  rubric: {
    maximum: {
      facts: 25,
      sources: 15,
      usefulness: 20,
      depth: 15,
      language: 10,
      intent: 10,
      accessibility: 5
    },
    minimum: {
      facts: 23,
      sources: 14,
      usefulness: 18,
      depth: 13,
      language: 8,
      intent: 8,
      accessibility: 4
    },
    totalMinimum: 90,
    hardVetoes: [
      "unsupported material fact or universal coaching rule",
      "medical diagnosis or treatment promise",
      "incorrect current match rule",
      "misleading source or metadata attribution",
      "broken internal links or unusable table / mobile layout"
    ]
  },
  evidence: {
    finalProposalPath: ".goal-harness/content-90-20261020/next-warmup-club-proposals.json",
    finalProposalSha256: "df6fc1401f01c4f7ef7373449502b921742a7ad7df5f3fb5eec328ce2f12fe31",
    sourcePacketPath: ".goal-harness/content-90-20261020/next-warmup-club-sources.json",
    sourcePacketSha256: "6be28456821763d9640eabe936d59eea2d155fdcf53e3ae9a32299ea017babb1",
    integrationPath: ".goal-harness/content-90-20261020/warmup-club-integration.json"
  },
  sourceIntegrity: "All 5 proposals cite verified official sources within stated coaching, health, and rule limits. No universal coaching promises or medical treatment claims are present.",
  globalVetoAssessment: "Zero hard vetoes found across all 5 draft proposals. Rules conform to ITF 2026 and USTA The Code §§31–32; internal links exist; tables feature captions and scope headers.",
  batchVerdict: "PASS_LOCAL_EDITORIAL_5_OF_5",
  status: "approved_local_editorial",
  items: [
    {
      route: "/blog/aw-069-warmup-10-club-match",
      contentHash: "7f8c2016812384a662b42c9bb664eec980a8f6ab36710f1e53eea37b2ef8064c",
      publishedAt: "2026-05-15",
      modifiedAt: "2026-10-21",
      robots: "index, follow",
      readerQuestion: "동호회 경기 시작 전 10분의 시간으로 몸을 부상 위험 없이 점진적으로 준비하고 실전 감각을 올리는 방법은 무엇인가?",
      scores: {
        facts: 24,
        sources: 14,
        usefulness: 19,
        depth: 14,
        language: 9,
        intent: 10,
        accessibility: 4
      },
      total: 94,
      verdict: "approved",
      vetoes: [],
      sourceIds: [
        "usta-warmup10",
        "aha-warmup",
        "itf-rules2026"
      ],
      strengths: [
        "AHA의 점진적 심박수·체온 상승 원칙과 코트 내 USTA 타구 웜업을 분리해 현실적인 10분 배분을 제시한다.",
        "워밍업 10분을 모든 부상의 치료나 방지 공식으로 과장하지 않고 몸 상태 확인 기준으로 엄격히 한정한다."
      ],
      deductions: [
        {
          dimension: "facts",
          points: 1,
          location: "USTA 10분 온코트 랠리 진행 단락",
          reason: "USTA 드릴은 권장 예시일 뿐이며 개인별·계절별 최적 워밍업 시간이나 시퀀스를 입증하는 임상 연구는 아니다.",
          fix: "현재처럼 선택적 코칭 드릴 예시임을 명시하고 고정 처방으로 확대하지 않는다."
        },
        {
          dimension: "sources",
          points: 1,
          location: "AHA·USTA 지침 적용 범위",
          reason: "일반 심혈관 지침과 테니스 협회 팁을 합성한 것으로 테니스 전용 부상 방지 효과를 독립적으로 입증하지는 못한다.",
          fix: "일반 운동 적응 및 코칭 제안의 한계를 지속적으로 밝힌다."
        },
        {
          dimension: "usefulness",
          points: 1,
          location: "조건별 판단표",
          reason: "5분 제한 압축 및 동계 상황 선택은 유용하나, 개인 신체 제약에 따른 맞춤형 대체 드릴은 독자의 응용이 필요하다.",
          fix: "독자 수준별 대체 동작에 대한 임의의 처방을 무리하게 확장하지 않는다."
        },
        {
          dimension: "depth",
          points: 1,
          location: "가상 예시 A/B",
          reason: "동계 경기 가상 대조는 직관적이나 다양한 연령대 및 만성 질환 보유자의 특수 웜업까지 포괄하지는 않는다.",
          fix: "연결된 건강/회복 문서와의 명확한 범위 분리를 유지한다."
        },
        {
          dimension: "language",
          points: 1,
          location: "코트 밖/안 분리 단락",
          reason: "코트 배정 시간과 개인 준비 시간의 경계 설명이 경기 경험이 적은 초보자에게 다소 압축적으로 전달될 수 있다.",
          fix: "추후 개정 시 시간 배분 안내 문장을 보다 쉬운 생활 용어로 다듬는다."
        },
        {
          dimension: "accessibility",
          points: 1,
          location: "전체 렌더링 검증",
          reason: "테이블 시맨틱(th, caption)과 FAQ details/summary 구조는 준수되었으나, 실제 스크린리더 음성 낭독 및 정밀 대비율 실측 데이터는 부재하다.",
          fix: "후속 브라우저 접근성 감사 단계에서 보완 검증을 수행한다."
        }
      ]
    },
    {
      route: "/blog/aw-070-record",
      contentHash: "f803b2d99c00b7e19735f91ff8f89801e8f6bc0bf0a6311091b10eef98f84809",
      publishedAt: "2026-05-15",
      modifiedAt: "2026-10-21",
      robots: "index, follow",
      readerQuestion: "셀프 저지(동호회 경기)에서 점수 착각이나 혼선이 생길 때, 어떻게 점수를 명확히 부르고 판정 갈등을 원칙대로 해결할까?",
      scores: {
        facts: 24,
        sources: 14,
        usefulness: 19,
        depth: 14,
        language: 9,
        intent: 10,
        accessibility: 4
      },
      total: 94,
      verdict: "approved",
      vetoes: [],
      sourceIds: [
        "itf-rules2026",
        "usta-fac2026",
        "usta-scoring"
      ],
      strengths: [
        "서버의 매 포인트 전 점수 선창 의무와 서버 점수 우선 호칭 원칙을 명확히 제시한다.",
        "The Code §§31–32의 합의된 점수 복원 및 분쟁 포인트 재경기 원칙을 실전적 복식 사례로 충실히 설명한다."
      ],
      deductions: [
        {
          dimension: "facts",
          points: 1,
          location: "The Code §§31–32 합의 절차 단락",
          reason: "The Code의 절차는 미국테니스협회의 자체 판정 규범이며 국내 사설 대회나 클럽별 자체 로컬 룰에 대한 법적 강제력은 아니다.",
          fix: "국내 클럽 경기 적용 시 상호 합의 권고안임을 유지하고 주최측 특별 규칙의 우선성을 명시한다."
        },
        {
          dimension: "sources",
          points: 1,
          location: "USTA FAC 2026 및 The Code 인용",
          reason: "셀프 저지 분쟁 해결의 합리적 표준을 제공하지만, 한국 생활체육 테니스 대회의 공식 위원회 판정문을 직접 인용한 것은 아니다.",
          fix: "국제 준용 표준으로서의 성격을 분명히 밝힌다."
        },
        {
          dimension: "usefulness",
          points: 1,
          location: "조건별 판단표 및 절차",
          reason: "서브 콜 누락 및 합산 짝/홀수 판단은 매우 유용하나, 타이브레이크 체인지오버(점수 합산 6의 배수) 등 특수 상황은 별도 설명이 필요하다.",
          fix: "타이브레이크 전용 규칙을 무리하게 한 표에 병합하지 않고 기본 게임 절차에 집중한다."
        },
        {
          dimension: "depth",
          points: 1,
          location: "가상 예시 복식 40-30 시비",
          reason: "동의된 지점 복귀 절차를 잘 예시했으나 양측이 세부 포인트 기억을 전혀 못 해 추첨까지 가는 극한 갈등 케이스는 요약에 그쳤다.",
          fix: "원칙 설명과 가상 사례의 균형을 유지한다."
        },
        {
          dimension: "language",
          points: 1,
          location: "합의된 점수로 거슬러 올라가기 번호 매김",
          reason: "영문 'disputed point' 용어가 본문에서 일부 혼용되어 영미권 용어에 익숙하지 않은 독자에게 직관성이 약간 떨어질 수 있다.",
          fix: "추후 개정 시 '이견이 있는 포인트' 등 순화된 우리말 표현을 병기한다."
        },
        {
          dimension: "accessibility",
          points: 1,
          location: "전체 렌더링 검증",
          reason: "테이블 th scope 및 details 태그는 정확히 작성되었으나, 스크린리더 탐색성 및 포커스 시각 표시 검증이 정밀 측정되지는 않았다.",
          fix: "UI 빌드 및 프리뷰 감사 단계에서 점검을 지속한다."
        }
      ]
    },
    {
      route: "/blog/aw-071-tennis-guide",
      contentHash: "36e162e58ef93e12991cff44fec698bcbf2a6d944eb969dda1e9c68f5bead793",
      publishedAt: "2026-05-15",
      modifiedAt: "2026-10-21",
      robots: "index, follow",
      readerQuestion: "20구 이상의 격렬한 랠리가 끝난 직후, ITF 25초 규정 내에서 숨을 고르고 다음 포인트를 침착하게 준비하는 루틴은 무엇인가?",
      scores: {
        facts: 24,
        sources: 14,
        usefulness: 19,
        depth: 14,
        language: 9,
        intent: 10,
        accessibility: 4
      },
      total: 94,
      verdict: "approved",
      vetoes: [],
      sourceIds: [
        "itf-rules2026",
        "usta-routine",
        "usta-focus"
      ],
      strengths: [
        "ITF Rule 29의 25초 연속 플레이 규정을 엄격한 경계선으로 제시하며 지연 권리가 아님을 명확히 주지시킨다.",
        "USTA 4R 프레임워크를 25초 안에 인지적 집중과 1구 플랜으로 연결하여 실전 조급함을 방지한다."
      ],
      deductions: [
        {
          dimension: "facts",
          points: 1,
          location: "USTA 4R 루틴 단계별 시간 배분",
          reason: "4R 루틴(Respond-Recover-Refocus-Ready)의 초 단위 구간(1~5초, 6~15초 등)은 25초 규칙에 맞춘 코칭 예시이며 생리학적으로 고정된 시간은 아니다.",
          fix: "선수 개인 호흡 주기와 상황에 따라 유연하게 배분할 수 있는 가이드라인임을 명시한다."
        },
        {
          dimension: "sources",
          points: 1,
          location: "USTA 심리 코칭 자료 적용 범위",
          reason: "멘탈 관리 기법과 경기 규칙을 효과적으로 엮었으나, 특정 호흡법이 25초 내에 젖산 축적을 유의미하게 해소한다는 임상적 근거는 포함하지 않는다.",
          fix: "심리적 각성 조절과 인지적 집중 회복에 한정하여 서술을 유지한다."
        },
        {
          dimension: "usefulness",
          points: 1,
          location: "조건별 판단표",
          reason: "호흡 곤란 및 아쉬운 실책 상황 대처는 실전적이나, 서브 상황과 리턴 상황 간의 루틴 차이(리시버의 시간 조율 한계)는 세부적으로 다루지 않았다.",
          fix: "리시버는 서버의 템포에 종속된다는 규칙상 한계를 명시해 현실성을 지킨다."
        },
        {
          dimension: "depth",
          points: 1,
          location: "서브/리턴 플러스 원 전술 언급",
          reason: "3단계 집중 전환에서 플러스 원 전술을 소개하지만, 코스별 후속 샷 시나리오는 개요 수준으로 제한되어 있다.",
          fix: "전술 심화는 aw061 등 연결 아티클의 역할로 남겨두고 본문의 25초 관리에 집중한다."
        },
        {
          dimension: "language",
          points: 1,
          location: "가상 예시 단락",
          reason: "가상 상황 속 선수의 내적 독백 표현이 다소 코칭 교본식 문체로 작성되어 현장 구어감과의 미세한 간극이 있다.",
          fix: "추후 개정 시 실전 경기자의 독백을 자연스러운 일상 어투로 다듬는다."
        },
        {
          dimension: "accessibility",
          points: 1,
          location: "전체 렌더링 검증",
          reason: "details/summary 태그 및 마크업 구조는 명확하나 화면 낭독 시 초 단위 시간 표시의 음성 낭독 직관성에 대한 검증 데이터가 부재하다.",
          fix: "후속 렌더 감사에서 스크린리더 호환성을 재점검한다."
        }
      ]
    },
    {
      route: "/blog/aw-072-serve",
      contentHash: "533f853d6d08fe19982dd2ab59087553906c067e67a7922a4fe9d417c1c66bc0",
      publishedAt: "2026-05-15",
      modifiedAt: "2026-10-21",
      robots: "index, follow",
      readerQuestion: "상대의 세컨서브나 눈에 띄게 짧고 느린 서브가 들어올 때, 서둘러 무리한 위너를 노리지 않고 깊고 안전하게 공략하는 방법은 무엇인가?",
      scores: {
        facts: 24,
        sources: 14,
        usefulness: 19,
        depth: 14,
        language: 9,
        intent: 10,
        accessibility: 4
      },
      total: 94,
      verdict: "approved",
      vetoes: [],
      sourceIds: [
        "usta-return-first-second",
        "itf-rules2026"
      ],
      strengths: [
        "세컨서브가 항상 약한 것은 아니라는 점을 분명히 짚고, 궤적과 짧은 바운드를 관찰한 후 전진하도록 설계했다.",
        "무리한 위너 욕심을 버리고 간결한 테이크백과 깊은 코스 공략으로 주도권을 확보하는 현실적 지침을 제공한다."
      ],
      deductions: [
        {
          dimension: "facts",
          points: 1,
          location: "스텝인(Step-in) 판단과 타깃 설정",
          reason: "상대 세컨서브의 구질(슬라이스·킥)과 리시버의 그립 특성에 따라 최적 타점이 달라지므로 전진 1~2발이 모든 동호인에게 보편 타당한 물리적 거리는 아니다.",
          fix: "상황별 타구 위치 조정의 권고안임을 유지하고 절대적인 보폭 수치로 규정하지 않는다."
        },
        {
          dimension: "sources",
          points: 1,
          location: "USTA 리턴 전략 지침 한계",
          reason: "전술 팁은 첫 서브와 세컨서브의 일반적 차이에 기반하며 상대 서버의 기량 편차에 따른 리턴 성공 확률 통계를 입증하지는 못한다.",
          fix: "승률 보장이 아닌 확률 높은 선택의 원리로서의 한계를 명기한다."
        },
        {
          dimension: "usefulness",
          points: 1,
          location: "조건별 판단표",
          reason: "킥서브·바디서브 대처는 실전에 유용하나, 상대가 서브앤발리(Serve and Volley)를 시도할 때의 리턴 궤적(발밑 드롭/로브)은 별도 고려가 필요하다.",
          fix: "기본 베이스라인 랠리 리턴에 집중하며 복합 전술은 연계 글의 영역으로 유지한다."
        },
        {
          dimension: "depth",
          points: 1,
          location: "타깃 설정 단락",
          reason: "백핸드 깊은 코스 공략을 권장하지만, 왼손잡이 서버에 대한 리턴 방향 전환은 개괄적으로만 언급되었다.",
          fix: "aw052 등 왼손잡이 전문 아티클과의 교차 참조 및 경계를 유지한다."
        },
        {
          dimension: "language",
          points: 1,
          location: "세컨서브의 오해와 관찰 원칙 단락",
          reason: "'헤비 톱스핀' 등 전문 용어가 초보자에게 설명 없이 등장해 난이도 완화가 필요할 수 있다.",
          fix: "추후 개정 시 '높은 궤적의 회전 공' 등 쉬운 표현을 보강한다."
        },
        {
          dimension: "accessibility",
          points: 1,
          location: "전체 렌더링 검증",
          reason: "시맨틱 구조 및 반응형 표 배치는 우수하나 고대비 모드 및 터치 타깃 여유 공간의 기기별 실측 데이터가 제한적이다.",
          fix: "프리뷰 브라우저 감사 단계에서 모바일 레이아웃 적합성을 계속 확인한다."
        }
      ]
    },
    {
      route: "/blog/aw-073-doubles-5",
      contentHash: "2bf5cb708a2eb8311496933a27d8802e45f8f5750070a7bc68f3ab4381fa7a8b",
      publishedAt: "2026-05-15",
      modifiedAt: "2026-10-21",
      robots: "index, follow",
      readerQuestion: "복식 경기 중 두 사람 사이(중앙)로 날아오는 공을 처리할 때 라켓 충돌이나 자리 겹침을 방지하고 빈자리를 지키는 방법은 무엇인가?",
      scores: {
        facts: 24,
        sources: 14,
        usefulness: 19,
        depth: 14,
        language: 9,
        intent: 10,
        accessibility: 4
      },
      total: 94,
      verdict: "approved",
      vetoes: [],
      sourceIds: [
        "itf-rules2026",
        "usta-warrior-doubles",
        "usta-school-doubles",
        "usta-partner-coach"
      ],
      strengths: [
        "'센터볼은 무조건 포핸드'라는 통념의 한계를 전위-후위 위치와 왼손잡이 조합 관점에서 논리적으로 반박한다.",
        "음성 콜 선창, 양보 선수의 즉각 감속 및 라켓 회수, 비워진 사이드라인 커버의 3대 안전 원칙을 구체적으로 확립했다."
      ],
      deductions: [
        {
          dimension: "facts",
          points: 1,
          location: "센터볼은 무조건 포핸드라는 통념의 한계 단락",
          reason: "포지션과 구질에 따른 예외 상황은 정확하나, 모든 복식 조합의 전위-후위 이동 속도 차이를 수치적으로 증명하는 규정집 근거는 아니다.",
          fix: "상황별 타구 유리성과 안전 원칙으로서의 서술 한계를 유지한다."
        },
        {
          dimension: "sources",
          points: 1,
          location: "USTA 학교 매뉴얼 및 인터뷰 출처",
          reason: "학교 교육용 및 코치 인터뷰 자료는 유용한 지침이나 충돌 사고 감소에 대한 통계적 역학 데이터를 포함하지는 않는다.",
          fix: "훈련 지침 및 커뮤니케이션 가이드라인으로 성격을 제한한다."
        },
        {
          dimension: "usefulness",
          points: 1,
          location: "비워진 코트의 시선 커버 단락",
          reason: "빈자리 커버 개념은 명확하나, 양 선수가 모두 전위에 있을 때(I-formation 등 특수 대형)의 충돌 회피는 다루지 않았다.",
          fix: "일반적인 1전위 1후위 및 기본 복식 대형 상황에 초점을 유지한다."
        },
        {
          dimension: "depth",
          points: 1,
          location: "가상 예시 로브 처리",
          reason: "중앙 로브 대처 사례는 생생하나, 서브 직후 리턴이 중앙으로 날아오는 순간적 반응 사례는 별도로 다루지 않았다.",
          fix: "연계 아티클 aw078과의 분리를 지키며 본문 주제에 집중한다."
        },
        {
          dimension: "language",
          points: 1,
          location: "즉각적인 음성 콜과 빈자리 커버의 원칙",
          reason: "영문 외침('마이', '유어스')과 한국어 외침('내가', '네가')이 혼재되어 실전 클럽 구어에 맞춘 통일성이 약간 아쉽다.",
          fix: "추후 개정 시 국내 클럽에서 통용되는 구호 표현으로 정리한다."
        },
        {
          dimension: "accessibility",
          points: 1,
          location: "전체 렌더링 검증",
          reason: "표 캡션 및 시맨틱 태그는 모범적이나 시각장애인 보조기기 탐색 및 명도 대비 실측 증거는 별도 도구 측정이 요구된다.",
          fix: "후속 브라우저 렌더 검증 단계에서 접근성을 재확인한다."
        }
      ]
    }
  ]
};

fs.writeFileSync(
  ".goal-harness/content-90-20261020/warmup-club-editorial-review.json",
  JSON.stringify(reviewData, null, 2),
  "utf8"
);
console.log("Successfully generated .goal-harness/content-90-20261020/warmup-club-editorial-review.json");
