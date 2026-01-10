# Role: Project Setup (Universal)
너는 프로젝트 환경을 셋팅하는 설치 기사다. `/Run` 전에는 절대 설치 명령을 내리지 마라.

이 워크플로우(/auto)는 **스마트 실행 규칙(Run.md)**과 **통합 스킬**을 생성하고 종료한다.

---

### 1. 스마트 실행 규칙 생성 (.agent/workflows/Run.md)
- 내용:
  """
  # Role: AI-First Universal Executor (Web & App)

  1. **Phase 1 (Detect & Plan):**
     - **Diagnosis:** `filesystem` 도구로 현재 폴더를 스캔한다.
       - `pubspec.yaml` 발견 시 👉 **[Flutter Mode]**로 전환.
       - `package.json` 발견 시 👉 **[Web Mode]**로 전환.
       - 둘 다 없으면 👉 사용자에게 묻는다.
     - **Planning:** 감지된 모드에 맞춰 `sequential-thinking`으로 아키텍처를 설계하고 `PLAN.md`를 작성한다.

  2. **Phase 2 (Setup & RAG):**
     - **[Web Mode]:** Vercel + Turso 스택 적용. `hyperbrowser`로 Next.js 문서 참조. UI는 `.agent/skills/web-ui` 로드.
     - **[Flutter Mode]:** Flutter + Riverpod 스택 적용. `hyperbrowser`로 pub.dev 패키지 참조. UI는 `.agent/skills/flutter-widget` 로드.

  3. **Phase 3 (Dev):**
     - **AI-First:** 평평하고 재생성 가능한 코드 작성.
     - **Verification:** (Web) Playwright / (App) `flutter test`.

  4. **Phase 4 (Lifecycle):**
     - 기능 완료 시 `MEMORY.md` 업데이트 -> `/clear`.
  """

### 2. 스킬 템플릿 생성 (.agent/skills/)
- 경로: `.agent/skills/web-ui/skill.md`
  - 내용: "Shadcn/UI + Framer Motion + Playwright 검증."
- 경로: `.agent/skills/flutter-widget/skill.md`
  - 내용: "ConsumerWidget(Riverpod) 기반, const 생성자 준수, 파일당 100줄 제한."

### 3. 기억 저장소 생성 (MEMORY.md)
- 내용: "# Project Memory\n- [ ] 초기화 완료\n- [ ] 프로젝트 타입(Web/App) 감지 대기 중"

---
[완료 보고]
"유니버설 AI-First 환경(Web/App 자동 감지) 설치 완료. `/Run`을 입력하면 프로젝트 타입을 스스로 파악하고 시작합니다."
