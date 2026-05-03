# Status | 마지막: 2026-05-03
## 현재 작업
모바일 옛 사이트 캐시/GA4 미집계 원인 수정 완료, 배포 대기

## 최근 변경 (최근 5개만)
- 05-03: GA4 ID를 서버 layout에서 확정해 `G-W1K51D8SBX`가 프로덕션에 주입되도록 수정
- 05-03: 모바일 옛 화면 방지를 위해 서비스워커/Cache API 초기화 컴포넌트 추가
- 05-03: 홈 응답에 `Clear-Site-Data`와 `Cache-Control: no-store` 헤더 추가
- 05-03: GSC 연결 확인: `sc-domain:tennisfrens.com` siteOwner 권한 정상
- 05-03: 블로그 30개 FAQ 조건부 렌더링 닫힘 누락 및 빈 FAQ 타입 보정

## TODO
- [ ] GitHub main 푸시 후 Vercel 자동배포 확인
- [ ] 라이브 HTML에서 `gtag/js?id=G-W1K51D8SBX` 재확인
- [ ] 모바일 실기기에서 옛 계산기 화면 제거 확인
- [ ] 기존 전체 lint 오류 정리

## 결정사항
- 원인: 모바일 브라우저의 이전 서비스워커/캐시가 옛 계산기 앱 셸을 제공했을 가능성이 큼
- GA4: 클라이언트에서 `VERCEL_ENV`를 보지 않고 서버에서 measurementId를 확정해 전달
- GSC: 대표 속성은 `sc-domain:tennisfrens.com`, www 홈은 apex canonical의 alternate로 확인됨

## 주의
- `npm run build` 통과
- 수정 파일 lint 통과
- 전체 `npm run lint`는 기존 코드 85개 오류로 실패
- Vercel CLI 현재 계정에는 tennisfrens 프로젝트/도메인이 보이지 않음
