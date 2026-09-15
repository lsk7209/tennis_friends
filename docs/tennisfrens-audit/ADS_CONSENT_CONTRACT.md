# 광고·동의 운영 계약

- 기준일: 2026-09-15
- 게시자 식별자: `ca-pub-3050601904412736` (소스와 `ads.txt`에서 일치)
- 로컬에서 확인한 범위: 로더/게시자 ID/`ads.txt`/개인정보 문구/외부 효과 격리
- 계정 승인·사이트 연결·실제 광고 송출·수익: `NOT_VERIFIED`
- Google Privacy & Messaging 메시지 게시·사이트 배정: `NOT_VERIFIED`
- 현재 인증 CMP 이름·CMP ID·Web 지원·TC string v2.3: `NOT_VERIFIED`

## 적용 기준

사이트 운영 주체가 한국에 있더라도 EEA, 영국, 스위스 사용자에게 개인 맞춤 광고를 제공하면 Google의 인증 CMP 및 IAB TCF 요건을 확인해야 한다. 2026-03-01 이후 생성되는 TC string은 TCF v2.3 요건을 따라야 한다. 인증 CMP 사용 여부만으로 법률 준수를 단정하지 않는다.

운영 반영 전에 다음을 계정과 실제 브라우저에서 확인한다.

1. Google 인증 CMP 목록에서 CMP 이름, CMP ID, Web 플랫폼 지원을 재확인한다.
2. EEA·영국·스위스 환경에서 동의 UI, 거절, 재선택/철회가 동작하는지 확인한다.
3. Purpose 1 동의가 없을 때 광고 요청이 어떤 모드로 처리되는지 네트워크 증거로 기록한다.
4. 생성된 TC string이 v2.3이고 disclosed-vendors segment와 Google 공급자 정보가 올바른지 확인한다.
5. 광고 파트너와 Google 데이터 사용 정책 링크가 실제 공개 문구에 포함되는지 확인한다.

## 공식 근거

- Google 인증 CMP 요구사항: https://support.google.com/adsense/answer/13554116?hl=en
- TCF 통합 및 오류 처리: https://support.google.com/adsense/answer/9804260?hl=en
- TCF v2.3 전환: https://support.google.com/adsense/answer/16942036?hl=en
- 개인정보·동의 정책: https://support.google.com/adsense/answer/7670013?hl=en
- 동의 철회: https://support.google.com/adsense/answer/10959060?hl=en

로컬 코드만으로 위 계정·지역·실제 송출 상태를 사실로 만들지 않는다. 인증된 계정 증거와 운영 환경 검증 전에는 배포 준비 상태를 `NOT_READY`로 유지한다.
