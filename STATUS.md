# Status | 마지막: 2026-05-27
## 현재 작업
모든 Court Energy 페이지 적용 + 블로그 300편 통합 완료. 배포 전 PSI 재측정 필요.
## 최근 변경 (최근 5개만)
- 05-27: 블로그 article-writer 300편 통합 — blog-posts-aw-300.js + part11-article-writer-300.ts
- 05-27: Pretendard unicode-range @font-face 추가 (한글 U+AC00-D7AF 분리)
- 05-27: Court Energy 비홈 페이지 적용 — 선수 ATP뱃지, 유틸리티 허브 헤더, 블로그 카테고리 뱃지
- 05-27: Player Spotlight 섹션 추가 (홈), JetBrains Mono 폰트 로드
- 05-27: 블로그 CLS 0.163 수정 — table-layout:fixed, table-wrapper overflow-x, tf-tldr 스타일
## TODO
- [ ] PSI 재측정 — 블로그 CLS 0.163 → 목표 0.1 미만
- [ ] AdSense 슬롯 ID 환경변수 반영 (사용자에게 콘솔에서 5개 ID 확인 요청)
- [ ] 선수 페이지 한국어 메타 보강
- [ ] 인덱싱 해제 4개 슬러그 효과 모니터링 (2~4주 후)
- [ ] Vercel 배포 후 IndexNow로 새 300편 일괄 제출
## 결정사항
- 트래픽의 87%가 네이버 (m.search.naver 74% + naver organic 13%) → 네이버 우선 최적화 정당
- LOW_QUALITY 114개 중 GSC 노출 5+만 4개 단계적 해제 (B 전략, 위험 최소화)
- 블로그 full Court Energy hero 스킵 — blog post에 이미지 필드 없음, 뱃지만 적용
## 주의
- lint/biome은 Stop hook 자동 처리 — Claude가 직접 호출 금지
- 인덱싱 해제 4개 글은 Vercel 배포 후 search:notify가 자동 인덱싱 요청
