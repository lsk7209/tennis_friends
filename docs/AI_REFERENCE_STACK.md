# AI Reference Stack

마지막 정리: 2026-05-15

이 문서는 사용자가 공유한 GitHub, MCP, 마케팅, 자동화 레퍼런스를 실제 작업에 쓰기 좋게 압축한 운영 기준이다. 원칙은 명확하다. 검증된 것은 작업 규칙으로 흡수하고, 불확실한 것은 후보로 보관하며, 계정·광고비·금융·초상권이 걸린 것은 안전 게이트 없이는 실행하지 않는다.

## 바로 적용된 운영 규칙

### 사이트 글쓰기/제목/최적화

- 사이트마다 `site-config/*persona*.yaml`, `site-config/site-persona.yaml`, `persona.yml`, `persona.md` 순서로 고유 페르소나를 읽는다.
- 글쓰기와 제목 생성은 사이트 페르소나를 기준으로 어조, 독자 수준, 금지 표현, 전문성 범위를 맞춘다.
- 30개, 100개, 300개 같은 대량 요청은 1개마다 확인하지 않고 전체 배치로 진행한다.
- 각 글은 독립적으로 long-tail 확장, 웹 리서치, 아웃라인, 본문, 검증을 거친다.
- 템플릿 복붙, 공통 FAQ 반복, 같은 도입부 구조 반복은 실패로 본다.
- goal은 글 1개가 아니라 전체 요청 단위에 건다. 전체 수량과 검증이 끝나기 전에는 완료 처리하지 않는다.

### 코딩/작업 방식

- 구현 전 성공 기준과 영향 범위를 먼저 정의한다.
- 기존 코드 관습을 우선하고, 필요한 파일만 좁게 바꾼다.
- 실패는 숨기지 않고 실패 목록과 재개 지점을 남긴다.
- 긴 작업은 `STATUS.md`, goal, memory에 상태를 남긴다.
- 검증 증거가 없으면 done으로 보지 않는다.

### 앱인토스 운영

- 큰 요청은 orchestrator 관점에서 먼저 쪼갠다.
- 아이디어는 triage, PM 스펙 없이는 구현하지 않는다.
- 구현 task에는 TDD 또는 검증 기준을 붙인다.
- QA는 최소 build, lint, 360px 모바일 viewport, console check를 남긴다.
- reviewer는 심사 반려 리스크를 별도로 본다.
- done은 검증 증거가 있을 때만 보낸다.

## 레퍼런스 분류

### 콘텐츠/SEO/GEO

| 후보 | 용도 | 적용 판단 |
| --- | --- | --- |
| `next-sitemap` | sitemap, robots 자동화 | Next.js SEO 기본 후보 |
| `aeo.js` | AEO/GEO 구조화 | 적용 전 프로젝트 호환 확인 |
| `next-llms-txt`, `dotenvx/llmstxt` | `llms.txt` 생성 | 사이트별 수동 품질 검수 필요 |
| RAGFlow | 문서형 지식베이스/RAG | 대규모 문서 검색이 필요할 때 후보 |
| AgentMemory 계열 | 장기 작업 기억 | STATUS.md/omx_memory 보완 후보 |

### 글쓰기/숏폼

| 후보 | 용도 | 적용 판단 |
| --- | --- | --- |
| Jenny Hoyos 공식 | 쇼츠 훅/과정/갈등/결말 구조 | 쇼츠 대본, 블로그 도입부에 제한 적용 |
| `gaebalai/claudecode-to` blog-shotform-gen | 블로그 URL → 9:16 mp4 | 설치 전 API 키, 비용, Windows, 품질 검증 |
| GPT-SoVITS + Remotion + FastAPI 구조 | 대화형 영상/미연시/숏폼 합성 | 자체 파이프라인 설계 참고 |
| Open-Generative-AI | 이미지·영상·립싱크 스튜디오 | 자체 콘텐츠 제작 후보, 권리 검토 필수 |

### 광고/마케팅

| 후보 | 용도 | 적용 판단 |
| --- | --- | --- |
| Claude Ads | 광고 계정 감사 체크리스트 | read-only 리포트/건강검진 템플릿으로 유용 |
| Meta Ads MCP | 광고 리포트/캠페인 조작 | 공식성 재검증, write action은 승인 게이트 필수 |
| Alex Hormozi Value Ladder | 상품/가격/퍼널 설계 | 랜딩, 가격표, 앱 수익화, 리드마그넷에 적용 |
| GrapesJS | 랜딩/뉴스레터/퍼널 빌더 | HTML sanitization, 권한, 퍼블리시 설계 필요 |

### 개발 생산성/에이전트 운영

| 후보 | 용도 | 적용 판단 |
| --- | --- | --- |
| `multica-ai/andrej-karpathy-skills` | AI 코딩 행동 규칙 | 이미 AGENTS/스킬에 반영, 원문 복붙 불필요 |
| Gstack | 역할 기반 Think→Ship 워크플로우 | 체크리스트/게이트로 참고 |
| `johunsang/semble_rs` | 코드 검색/출력 압축 | 큰 로그/대형 코드베이스에서 검증 후보 |
| `decolua/9router` | AI 라우터/토큰 절감 | 보안·약관 리스크 커서 즉시 도입 금지 |
| Printing Press | API 없는 웹서비스 CLI/MCP 생성 | HAR 토큰 제거, ToS 확인 후 read-only 우선 |

### 게임/인터랙티브

| 분야 | 후보 |
| --- | --- |
| Godot | `godotengine/godot`, `godotengine/godot-demo-projects` |
| Godot 스타터 | `KenneyNL/Starter-Kit-3D-Platformer`, `Starter-Kit-FPS`, `Starter-Kit-City-Builder` |
| 웹 2D | `phaserjs/phaser`, `excaliburjs/Excalibur`, `pixijs/pixijs` |
| 웹 3D | `mrdoob/three.js`, `pmndrs/react-three-fiber` |
| 물리/고성능 | `bevyengine/bevy`, `raysan5/raylib`, `dimforge/rapier` |
| 툴/에셋 | `mapeditor/tiled`, `deepnight/ldtk`, `Pixelorama`, `magictools` |

### 로컬/온디바이스 AI

| 후보 | 용도 | 적용 판단 |
| --- | --- | --- |
| `Luce-Org/lucebox-hub` | RTX 3090급 로컬 LLM 고속 추론 | Linux/Vast/GPU 환경 요청 시 후보 |
| `Liquid4All/cookbook` | SLM, WebGPU, 모바일, 로컬 RAG 레시피 | 앱 내 반복 기능/프라이버시 기능에 후보 |
| Ollama + Open WebUI + ComfyUI | 로컬 AI 기본 조합 | 하드웨어와 모델 라이선스 검토 후 |

### 금융/트레이딩

| 후보 | 용도 | 적용 판단 |
| --- | --- | --- |
| `HKUDS/AI-Trader` | 페이퍼 트레이딩, 신호/전략 UI | read-only/paper 기본, 실거래 자동화 금지 |

## 안전 게이트

### 무조건 read-only 우선

- 광고 계정
- 금융/트레이딩
- 로그인 세션이 필요한 웹서비스
- API 없는 서비스의 HAR 기반 자동화
- 고객 데이터, 문서, GSC, 광고 리포트

### write action 필수 조건

- 사용자 명시 승인
- 변경 전 diff 또는 실행 계획
- 예산/손실/횟수 상한
- 감사 로그
- 롤백 방법
- dry-run 또는 paper mode 우선 실행

### 생성형 미디어 필수 조건

- 저작권 확인
- 인물 초상권 확인
- 음성/립싱크 동의 확인
- 상표/브랜드 사용 범위 확인
- 성인/폭력/정치/의료/금융 등 정책 리스크 확인

## 우선순위

### 1순위: 이미 적용

- 사이트 페르소나 기반 글쓰기/제목/최적화
- 대량 글쓰기 일괄 처리
- goal 기반 전체 작업 추적
- 앱인토스 Kanban/QA 게이트
- 코딩 작업 성공 기준/검증 증거 원칙

### 2순위: 곧 쓸 가능성 높음

- Claude Ads: 광고 감사 템플릿
- Jenny Hoyos 공식 + Remotion: 블로그→숏폼 대본/영상
- GrapesJS: 랜딩/퍼널/뉴스레터 빌더
- Lazyweb: UI 레퍼런스 MCP
- RAGFlow: 문서 지식베이스

### 3순위: 요청 시 검토 후 도입

- AgentMemory
- Printing Press
- Open-Generative-AI
- Lucebox
- Liquid cookbook
- 9router
- AI-Trader

## 작업 라우팅

- 글 제목 대량 생성: `site-title-generator` 또는 `title-master-ko`
- 발행용 한국어 글 작성: `article-writer` 또는 `unique-writer-ko`
- 사이트 SEO/CWV/GEO 점검: `site-optimizer`
- 앱인토스 신규 앱: `toss-new`
- UI 신규 구축/리디자인: 기존 `design.md` 우선, 필요 시 Lazyweb 후보 검토
- 광고 계정 점검: Claude Ads 체크리스트 방식, API write 금지
- 블로그→숏폼: Jenny Hoyos 구조 → 대본 → TTS/이미지 → Remotion 합성
- 대규모 문서 Q&A: RAGFlow 후보
- API 없는 서비스 자동화: Printing Press 후보, HAR 보안 검토 필수

## 버리지 말아야 할 기준

- 좋은 레포가 있어도 바로 설치하지 않는다.
- 자동화가 가능해도 write action은 별도 안전 게이트를 둔다.
- 글쓰기는 템플릿이 아니라 매 글 독립 리서치와 페르소나로 만든다.
- 외부 도구는 우리 프로세스를 대체하는 것이 아니라 검증/속도/품질을 보강하는 역할이다.
