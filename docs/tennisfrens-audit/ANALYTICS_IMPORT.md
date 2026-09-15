# GSC·GA4 export 결합

현재 로컬 환경에는 Google 서비스 계정 파일과 `GA4_PROPERTY_ID`가 없어 계정 데이터는 `NOT_VERIFIED`이다. 값이 없다는 사실을 0으로 바꾸지 않는다.

계정에서 익명화한 export를 준비한 뒤 `data/analytics-export.template.json` 형식으로 정규화하고 다음처럼 결합한다.

```powershell
node scripts/import-analytics-exports.mjs --gsc path\to\gsc.json --ga4 path\to\ga4.json
```

property, 시간대, 날짜 범위, dimensions, row limit을 반드시 기록한다. URL query는 분석용 경로로 정규화하지만 원본 export는 별도 보관한다. 개인 식별값이나 자유문자 이벤트 parameter는 저장소에 넣지 않는다. 클릭 0, 낮은 참여율, 낮은 CTR 중 하나만으로 URL 삭제·통합·noindex를 결정하지 않는다.
