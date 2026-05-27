# Status | 마지막: 2026-05-27
## 현재 작업
Core Web Vitals 최적화 완료. PSI 재측정 후 효과 확인 필요.
## 최근 변경 (최근 5개만)
- 05-27: 블로그 CLS 0.163 수정 — table-layout:fixed, table-wrapper overflow-x, tf-tldr 스타일
- 05-27: Court Energy 리디자인 완료 — globals.css @theme, layout.tsx 폰트, button.tsx 5 variant, 홈 6개 섹션 컴포넌트, motion-presets, tool-card 신규
- 05-27: Hero LCP 6.3s 수정 — motion.h1 → plain h1 (Framer Motion hydration 의존성 제거)
- 05-27: 타이틀 중복 `TennisFriends | TennisFriends` 수정 — title: { absolute: fullTitle }
- 05-27: next.config.ts date-fns optimizePackageImports 추가
## TODO
- [ ] PSI 재측정 — 블로그 CLS 0.163 → 목표 0.1 미만
- [ ] AdSense 슬롯 ID 환경변수 반영 (사용자에게 콘솔에서 5개 ID 확인 요청)
- [ ] 선수 페이지 한국어 메타 보강
- [ ] 인덱싱 해제 4개 슬러그 효과 모니터링 (2~4주 후)
## 결정사항
- 트래픽의 87%가 네이버 (m.search.naver 74% + naver organic 13%) → 네이버 우선 최적화 정당
- LOW_QUALITY 114개 중 GSC 노출 5+만 4개 단계적 해제 (B 전략, 위험 최소화)
- 미정의 토큰은 shadcn 토큰으로 매핑 (`text-foreground`, `text-muted-foreground`, `bg-card`, `bg-background`)
## 주의
- blog/[slug] 변경 후 dev 서버 검증 필요 (라이트 모드 본문 가독성)
- 인덱싱 해제 4개 글은 Vercel 배포 후 search:notify가 자동 인덱싱 요청
- lint/biome은 Stop hook 자동 처리 — Claude가 직접 호출 금지
