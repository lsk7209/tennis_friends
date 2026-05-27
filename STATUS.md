# Status | 마지막: 2026-05-27
## 현재 작업
Court Energy 전체 적용 + 블로그 300편 메타 개선 완료. 배포 대기 중.
## 최근 변경 (최근 5개만)
- 05-27: Court Energy 선수 페이지 적용 — PlayerArticlePage.tsx 히어로 배너 + rankingCurrent 필드 수정
- 05-27: 블로그 본문 색상 추가 — .aw-article h2(teal), strong(sky-blue), 다크모드 대응
- 05-27: 블로그 300편 메타 개선 — excerpt 인용구 기반 고유화, 섹션헤더·영어기관명 태그 제거
- 05-27: 블로그 article-writer 300편 통합 — blog-posts-aw-300.js + part11-article-writer-300.ts
- 05-27: Pretendard unicode-range @font-face 추가 (한글 U+AC00-D7AF 분리)
## TODO
- [ ] Vercel 배포 후 IndexNow로 새 300편 일괄 제출
- [ ] AdSense 슬롯 ID 환경변수 반영 (사용자에게 콘솔에서 5개 ID 확인 요청)
- [ ] 선수 페이지 rankingCurrent 데이터 보강 (현재 전체 미설정)
- [ ] 인덱싱 해제 4개 슬러그 효과 모니터링 (2~4주 후)
- [ ] PSI 재측정 (배포 후)
## 결정사항
- 트래픽의 87%가 네이버 (m.search.naver 74% + naver organic 13%) → 네이버 우선 최적화 정당
- LOW_QUALITY 114개 중 GSC 노출 5+만 4개 단계적 해제 (B 전략, 위험 최소화)
- 선수 rankingCurrent 미설정 → 랭킹 배지 미노출, 배경 장식 숫자는 "01" fallback 사용
## 주의
- lint/biome은 Stop hook 자동 처리 — Claude가 직접 호출 금지
- 인덱싱 해제 4개 글은 Vercel 배포 후 search:notify가 자동 인덱싱 요청
