# Status | 마지막: 2026-04-23
## 현재 작업
애드센스 심사 준비 — 유지보수 모드

## 최근 변경 (최근 5개)
- 04-23: GA4 공식 통합 (`G-W1K51D8SBX`)
  - GAProvider + lib/analytics.ts (trackEvent 유틸)
  - layout.tsx 통합 (AdSense/Tracking과 공존)
  - 테스트 완료 이벤트 자동 전송 (AdSense 전환 신호)
- 04-23: 애드센스 최적화 7건 (빌드 성공)
  - public/ads.txt + Contact 가짜정보 제거 + About 허위통계 제거
  - Privacy Google AdSense·DART 쿠키 조항 신설
  - BlogPost 정리, AuthorByline 추가, Footer disclaimer + 연도 동적화
- 04-22: scripts 정리 — 일회성 스크립트 삭제
- 04-22: GSC 기반 콘텐츠 갭 개선 (야닉 한프만 신규 + Arthur Rinderknech 재작성)
- 04-22: 사이트 전체 최적화 (성능·보안·SEO·AEO/GEO 5인팀 작업)
- 04-17: auto-content.js + GitHub Actions cron 자동 콘텐츠 파이프라인 구축

## TODO
- [ ] **GSC 콘텐츠 갭** (우선순위 높음, 페이지만 만들면 유입 확보):
  - 아르튀르 랭데르크네슈 (258 imp/월, pos 10.4) — 기존 페이지 존재, URL 정리 필요
  - 알렉스 미첼슨 (117 imp/월)
  - 토미 폴 (86 imp/월) — 블로그에 있음, /players 로 이관 검토
  - 토마시 마하치 (44 imp/월)
  - 맥켄지 맥도날드 (23 imp/월)
- [ ] **GSC 저CTR** 제목·메타 개선: 미오미르 케크마노비치(92 imp), 마르틴 란달루세(79 imp), 마리 부즈코바(26 imp)
- [ ] **Vercel 환경변수 추가**: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-W1K51D8SBX` (현재 fallback으로 하드코딩됨)
- [ ] 블로그 100+ 템플릿 치환형 문장 재작성 (Scaled Content Abuse 리스크)
- [ ] blog-posts.js에 author 필드 추가 + [slug] 동적 라우트에 AuthorByline 적용
- [ ] 애드센스 재심사 신청 전 30일 대기 + GSC 수동 색인 요청

## 결정사항
- next 16.0.7: 정상 설치·작동 확인, 문제 없음
- players.ts → male/female/index.ts (import 경로 무변경)
- blog-content.ts → part1/part2/part3/index.ts (import 경로 무변경)
- aggregateRating: 실제 리뷰 없이 구조화 데이터 평점 금지 (Google 페널티)

## 주의
- seo-safeguard.yml: PR마다 robots·llms·aggregateRating 자동 검사
- next 16은 아직 실험적 버전 — Vercel 배포 시 호환성 주의
