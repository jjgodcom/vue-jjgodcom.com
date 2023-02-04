[![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)](https://jjgodcom-vue.netlify.app/#/)

# <img src="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/logo.png" alt="logo" width="29" /> JJGODCOM 블로그 - Vue.js

개발하면서 자주 사용하는 자료들을 모아둔 블로그 겸 포트폴리오 사이트 입니다.<br/>

![JJGODCOM](https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/thumbnail.png)

⬇ 아래 링크는 이전에 사용한 블로그 입니다. ⬆
- [jjgodcom - ftp](https://jjgodcom-ftp.netlify.app/) <br/>
- [jjgodcom - 2018](https://web.archive.org/web/20180805230657/http://jjgodcom.com/)

## ✒️ 오픈 그래프(The Open Graph protocol)
웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

실제 적용된 KakaoTalk -

![JJGODCOM](https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/kakao.PNG)

실제 적용된 og & twitter 속성

```html
<!-- og -->
<meta property="og:type" content="website" />
<meta property="og:site_name" content="jjgodcom.com-vue" />
<meta property="og:title" content="jjgodcom.com-vue" />
<meta property="og:description" content="개발 관련 정보 공유 사이트 입니다." />
<meta property="og:image" content="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/og_kakao.png" />
<meta property="og:url" content="https://jjgodcom-vue.netlify.app/#/" />

<!-- twitter --> 
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="jjgodcom.com-vue" />
<meta property="twitter:title" content="jjgodcom.com-vue" />
<meta property="twitter:description" content="개발 관련 정보 공유 사이트 입니다." />
<meta property="twitter:image" content="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/og_kakao.png" />
<meta property="twitter:url" content="https://jjgodcom-vue.netlify.app/#/" />
```

- `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지의 간단한 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## ✒️ Favicon(파비콘, favorites icon)
웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.

> 파비콘 이미지는 루트 경로에 있어야 합니다! <br>
> `해당 프로젝트는 static 폴더에 favicon.ico 파일을 넣어야 적용 됩니다!`

실제 적용한 favicon

<img src="https://raw.githubusercontent.com/jjgodcom/vue-jjgodcom.com/master/src/assets/common/logo.png" alt="logo" width="100" />

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

- `favicon.ico` 64 x 64 (px) 또는 32 x 32 또는 16 x 16
- `favicon.png` 500 x 500 (px)

### 📌 .ico 파일 제작
아래 사이트에서 이미지를 업로드하면 손쉽게 `.ico` 파일을 제작할 수 있습니다.

[iconifier.net](https://iconifier.net/)

## ✒️ Reset.css

각 브라우저의 기본 스타일을 초기화합니다.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## ✒️ Fonts

해당 프로젝트에서는 [Google Fonts](https://fonts.google.com/)에서 제공하는 2개의 폰트를 사용했습니다.

```html
<!-- web font -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&family=Russo+One&display=swap" rel="stylesheet">
```
```scss
// scss 에 선언하세요!
$font--Russo: 'Russo One', sans-serif;
$font--NotoSans: 'Noto Sans KR', sans-serif;
```

## ✒️ GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다.
[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

> `해당 프로젝트에서는 npm 으로 설치함!`

적용된 코드 예제는 [이곳](https://github.com/jjgodcom/vue-jjgodcom.com/blob/master/src/components/common/ToTop.vue) 을 참고하세요!

## ✒️ ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다.<br>
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.

[ScrollMagic API](http://scrollmagic.io/docs/)

> `해당 프로젝트에서는 npm 으로 설치함!`

적용된 코드 예제는 [이곳](https://github.com/jjgodcom/vue-jjgodcom.com/blob/master/src/views/Home.vue) 을 참고하세요!

## ✒️ vue 프로젝트 기본 세팅
항상 개발할때마다 느끼지만 초기 프로젝트 세팅이 제일 어렵다.<br>
해당 프로젝트는 [이곳](https://github.com/ParkYoungWoong/vue3-webpack-template/tree/vue-router) 에서 clone을 받아서 개발을 시작했습니다.
