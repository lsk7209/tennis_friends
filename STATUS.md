# Status | 마지막: 2026-04-22
## 현재 작업
GSC 노출 개선 — 유지보수 모드

## 최근 변경 (최근 5개)
- 04-22: GSC 기반 콘텐츠 갭 개선 (야닉 한프만 신규 + Arthur Rinderknech 재작성)
  - /players/yannick-hanfmann 신규 (GSC 55 impressions, 페이지 없음 → 생성)
  - /players/arthur-landercknech 씬 콘텐츠 → 실제 커리어 정보로 전면 재작성
  - 62개 파일 미사용 import 49개 제거 (lint 일괄 정리)
  - Bing IndexNow + Google Indexing API 즉시 제출 완료
- 04-22: 사이트 전체 최적화 (성능·보안·SEO·AEO/GEO 5인팀 작업)
- 04-22: AEO/GEO 파일 전체 점검·업데이트
- 04-17: 저CTR 선수 5명 전용 정적 페이지 생성
- 04-17: auto-content.js + GitHub Actions cron 자동 콘텐츠 파이프라인 구축

## TODO
- [ ] scripts/ 추가 정리 — maintenance/ 하위 중복 체크 스크립트 제거 검토

## 결정사항
- next 16.0.7: 정상 설치·작동 확인, 문제 없음
- players.ts → male/female/index.ts (import 경로 무변경)
- blog-content.ts → part1/part2/part3/index.ts (import 경로 무변경)
- aggregateRating: 실제 리뷰 없이 구조화 데이터 평점 금지 (Google 페널티)

## 주의
- seo-safeguard.yml: PR마다 robots·llms·aggregateRating 자동 검사
- next 16은 아직 실험적 버전 — Vercel 배포 시 호환성 주의
