# Status | 마지막: 2026-05-27
## 현재 작업
Court Energy 홈페이지 리디자인 완료 (빌드 통과). dev 서버 localhost:3000 실행 중 — 브라우저 육안 검증 대기.
## 최근 변경 (최근 5개만)
- 05-27: Court Energy 리디자인 완료 — globals.css @theme, layout.tsx 폰트, button.tsx 5 variant, 홈 6개 섹션 컴포넌트, motion-presets, tool-card 신규
- 05-27: PlayerArticlePage.tsx FAQ props 오류 수정 (`faqs` → `items`)
- 05-27: blog-posts.js 머지 컨플릭트 해소 (HEAD + articleWriter 브랜치 통합)
- 05-27: 미정의 Tailwind 토큰 정리 — about/contact/blog[slug]/RelatedContent 4파일 (74회)
- 05-27: 블로그 본문 `prose-invert` 강제 → `dark:prose-invert` 조건부화
## TODO
- [ ] **[지금]** localhost:3000 홈페이지 육안 확인 (Hero 다크 배경 + volt CTA, 티커, 카드 그리드)
- [ ] **[지금]** about/contact/blog 라이트 모드 가독성 검증 (기존 페이지 영향 없는지)
- [ ] PSI API Key 받으면 5페이지 × mobile/desktop 측정
- [ ] AdSense 자동광고 적용 완료 확인
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
