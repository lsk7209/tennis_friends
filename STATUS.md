# Status | 마지막: 2026-05-13
## 현재 작업
저품질 블로그 색인 보호, 내부링크 점검, 배포 코드 푸시 완료. 배포는 저장소/시크릿 설정에서 차단됨
## 최근 변경 (최근 5개만)
- 05-13: 저품질 블로그 113개를 목록/RSS/사이트맵/AI 인덱스에서 제외하고 noindex 적용
- 05-13: 깨진 내부링크 5개를 현재 존재하는 /blog 경로로 수정
- 05-13: 테스트 답변 클릭 시 자동 다음 문항 이동 구현 및 브라우저 검증
- 05-13: GitHub Pages 정적 export 빌드 호환 수정
- 05-13: Cloudflare Pages 배포를 next-on-pages에서 정적 export(out) 방식으로 전환
## TODO
- [ ] GitHub Pages는 private 저장소 현재 요금제에서 미지원이라 공개 전환 또는 요금제 변경 필요
- [ ] Cloudflare Pages는 GitHub Secrets에 CLOUDFLARE_API_TOKEN, CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_PAGES_PROJECT 필요
- [ ] 저품질 글 113개는 추후 실제 보강 후 색인 복귀 검토
## 결정사항
- 저품질 대응: 즉시 삭제 대신 noindex + 목록/RSS/사이트맵/AI 인덱스 제외로 검색 노출 리스크 차단
- Cloudflare 배포: next-on-pages 빌드 오류 회피를 위해 STATIC_EXPORT=true + out 배포 사용
## 주의
- lint/type-check/build 통과. lint는 기존 경고 77개 유지.
- 내부링크 스캔 결과 문제 0개.
- dev 서버 http://localhost:3004 에서 noindex 헤더와 sitemap 제외 확인.
- GitHub Actions: SEO Safeguard 성공, GitHub Pages 빌드 성공 후 Setup Pages 실패, Cloudflare 빌드 성공 후 API token 누락으로 Publish 실패.
