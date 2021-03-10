# 설치

### next 프로젝트 시작

````
npx create-next-app .
````
' . ' 을 붙이면 현재 드렉토리 안에서 프로젝트가 설치된다.  


### typescript 설정

````npm
 npm install --save-dev typescript @types/react @types/react-dom @types/node

 npm run dev
````
npm run dev 를 실행하면 next-env.d.ts 파일과 tsconfig.json 파일이 생성된다.

typescript 를 사용하려면 파일명이 tsx(_app.js -> _app.tsx)로 바꾼 후 사용 할 수있다.

### Style Components 설정

````
npm i styled-components @types/styled-components styled-reset
````

### redux 설정

````
npm install redux react-redux
npm install next-redux-wrapper
npm install -d redux-devtools-extension @types/next-redux-wrapper @types/react-redux 
````

### redux-saga 설정

````
npm install redux-saga
````

redux-saga는 redux 의 미들웨어로 사용된다.
