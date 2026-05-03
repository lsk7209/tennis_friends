# Status | 마지막: 2026-05-03
## 현재 작업
모바일 옛 사이트 캐시 제거 및 GA4 실시간 수집 복구 완료

## 최근 변경 (최근 5개만)
- 05-03: GA4 Data API 연결 확인: `properties/534356101`, stream `G-W1K51D8SBX`
- 05-03: `page_view`를 명시적 GA4 이벤트로 전송하도록 수정 및 Vercel 배포
- 05-03: GA4 초기화 완료 후 페이지뷰를 보내도록 `GAProvider` 타이밍 보정
- 05-03: 모바일 옛 화면 방지를 위해 서비스워커/Cache API 초기화 및 `Clear-Site-Data` 헤더 추가
- 05-03: GSC 연결 확인: `sc-domain:tennisfrens.com` siteOwner 권한 정상

## TODO
- [ ] GA4 Data API 일반 보고서에 `page_view` 반영 확인
- [ ] 1~2일 뒤 `Clear-Site-Data` 헤더 제거 검토
- [ ] 기존 전체 lint 오류 정리

## 결정사항
- GA4 property: `534356101`
- GA4 stream: `G-W1K51D8SBX`, `https://tennisfrens.com`
- GA4 페이지뷰: `send_page_view:false` 초기화 후 수동 `event: page_view` 전송
- GSC 대표 속성: `sc-domain:tennisfrens.com`

## 주의
- `npm run build` 통과
- 수정 파일 lint 통과
- 라이브 브라우저에서 `g/collect ... en=page_view` 204 확인
- Data API realtime은 `activeUsers=1` 확인, `page_view`는 지연/표시 차이 가능
