# Status | 마지막: 2026-05-13
## 현재 작업
GSC/GA4 점검 완료. GA4 정상, 로컬 최적화 산출물 반영. 라이브는 재배포 필요
## 최근 변경 (최근 5개만)
- 05-13: 저품질 블로그 113개를 목록/RSS/사이트맵/AI 인덱스에서 제외하고 noindex 적용
- 05-13: 깨진 내부링크 5개를 현재 존재하는 /blog 경로로 수정
- 05-13: 테스트 답변 클릭 시 자동 다음 문항 이동 구현 및 브라우저 검증
- 05-13: GitHub Pages 정적 export 빌드 호환 수정
- 05-13: 사용하지 않는 Cloudflare Pages 워크플로우 2개 삭제
## TODO
- [ ] 셸 오류 복구 후 npm run build, git add/commit/push 실행
- [ ] Vercel 라이브 sitemap 463개 반영 및 noindex 대상 제외 확인
- [ ] GOOGLE_SITE_VERIFICATION 토큰 설정 여부 확인
- [ ] GitHub Pages는 private 저장소 현재 요금제에서 미지원이라 공개 전환 또는 요금제 변경 필요
- [ ] 저품질 글 113개는 추후 실제 보강 후 색인 복귀 검토
## 결정사항
- 저품질 대응: 즉시 삭제 대신 noindex + 목록/RSS/사이트맵/AI 인덱스 제외로 검색 노출 리스크 차단
- 배포 대상: Cloudflare 미사용. GitHub Pages 워크플로우만 유지
## 주의
- lint/type-check/build 통과. lint는 기존 경고 77개 유지.
- 내부링크 스캔 결과 문제 0개.
- dev 서버 http://localhost:3004 에서 noindex 헤더와 sitemap 제외 확인.
- GitHub Actions: SEO Safeguard 성공. GitHub Pages는 빌드 성공 후 private 저장소 Pages 미지원으로 Setup Pages 실패.
- 현재 Codex 셸 실행이 CreateProcessWithLogonW failed 1326/1909로 차단되어 git push 불가.
- 라이브 Vercel은 sitemap 527개로 오래된 배포. 로컬 out/sitemap.xml은 463개.
- GA4 G-W1K51D8SBX는 홈/블로그 page_view collect 204 확인.
