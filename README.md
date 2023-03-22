## 문서

- https://www.notion.so/dableglobal/Web-Component-widget-eeb34e1f8cb5421b9132963c41a0d9dd?pvs=4

## 가이드

- #### 주의사항
  - HeavyAdBlock은 캐시되지 않고 Live환경에서만 동작합니다.
  - 기대대로 동작하지 않는 경우에는 캐시 데이터를 제거하고, nginx의 https접속과정을 다시 수행하고
  - learn-wc, reco-api의 로컬서버를 다시 시작해보세요 :)
- #### 개발 모드(Local)

  - [nginx 준비작업](https://www.notion.so/dableglobal/api-or-static-dable-io-77fd9710edfc4c9a83ec0f42b7165b2d#f71c9693cf694e39980ea0e210e0082e)
  - [reco-api 준비작업](https://www.notion.so/dableglobal/Web-Component-widget-eeb34e1f8cb5421b9132963c41a0d9dd?pvs=4#11c239daf9a94605a822d54eb989953f)
  - reco-api > yarn build:front > yarn start (localhost:4001)
  - [learn-wc 준비작업](https://www.notion.so/dableglobal/Web-Component-widget-eeb34e1f8cb5421b9132963c41a0d9dd?pvs=4#c3568796c3084788a32b5108019f8219)
  - learn-wc > npm run dev (localhost:1234)
  - 브라우저에서 localhost:1234 접속

- #### 라이브 모드(Live)
  - 소스코드 변경사항을 git add > commit > push > pullRequest > merge
  - netlify > depoly > published 상태 > 부여된 링크 클릭 > 확인
