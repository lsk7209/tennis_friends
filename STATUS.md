# Status | 마지막: 2026-05-28
## 현재 작업
사이트 종합 최적화 1차 진행 중. 네이버 카페 배너 CTA 정적/동적 선수 글 적용까지 완료, 다음 세션은 콘텐츠 품질 보강 또는 lint 경고 정리부터 진행.
## 최근 변경 (최근 5개만)
- 05-28: 동적 선수 상세(`/players/[slug]`) 하단에도 네이버 카페 배너 CTA 직접 추가
- 05-28: 운영 배포 `dpl_FSFM1JBqMvSU9gedTZ53qqmZp9AG` 완료, GSC sitemap 2개 + IndexNow URL 640개 전송
- 05-28: 선수 상세 글 하단 네이버 카페 배너 노출 운영 확인(`/players/carlos-alcaraz`)
- 05-28: 네이버 카페 배너를 `docs/tennis.png` 원본 기반 PNG 자산으로 교체
- 05-28: 운영 배포 `dpl_7j6vfCnUA5ZdeGWBfaVrD5yQnvDB` 완료, GSC sitemap 2개 + IndexNow URL 638개 전송
## TODO
- [ ] 블로그 글 감사 554개 개선 대상 중 GSC 노출 상위 글부터 계속 개별 보강
- [ ] 기존 lint 경고 71개 정리
- [ ] 배포 후 7~14일 간 GSC에서 저CTR 선수/레슨비/경기 운영 글 CTR 변화 확인
## 결정사항
- 새 콘텐츠 발행 알림: `npm run publish:vercel` 경로에서 배포 후 GSC sitemap + Naver/Bing/IndexNow 자동 전송
- 자동생성 글 보강: 원본 대용량 파일을 직접 덮기보다 `part13-optimized` override로 개별 고품질 본문을 우선 적용
- 저CTR 페이지 보강: 실제 GSC 쿼리를 title 앞쪽에 배치하고 description은 독자 이득을 명확히 표시
- 모바일 광고: AdSense 자동 삽입 컨테이너는 전역 CSS로 뷰포트 폭 제한
## 주의
- 검증 통과: type-check, lint(0 errors/71 warnings), build, 로컬/운영 모바일·데스크톱 브라우저 확인
- 최신 GSC/IndexNow 전송: sitemap 2개, URL 640개
- 운영 확인 중 Google vignette 광고가 `aria-hidden` 콘솔 에러 1개를 만들 수 있음
- 콘텐츠 품질 감사상 템플릿 위험 글이 남아 있어 콘텐츠 최적화는 지속 작업 필요
