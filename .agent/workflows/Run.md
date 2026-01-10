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
