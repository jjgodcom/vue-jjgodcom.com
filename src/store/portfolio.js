export default {
  // 스토어에 하나의 모듈이 될수 있도록 namespaced: true 추가
  namespaced: true,
  // 상태
  state: () => ({
    lists:[
      {
        title:'jjgodcom.com-Vue',
        link:'https://jjgodcom-vue.netlify.app/#/',
        day:'2022년 10월 25일 ~ 개발중',
        language:'HTML, Scss, Javascript, Vue.js',
        description:'Vue를 기반으로한 포트폴리오겸 세번째 블로그 입니다.',
        image:require('assets/common/logo.png')
      },
      {
        title:'jjgodcom.com-ftp',
        link:'https://jjgodcom-ftp.netlify.app/',
        day:'2020년 10월 18일 ~ 개발중',
        language:'HTML, Css, Javascript, jQuery',
        description:'겁없이 도메인에 FTP서버 연결해서 만들다가 싹다 날리고 두번쨰로 만든 블로그 입니다.',
        image:require('assets/portfolio/jjgodcom-ftp.png')
      },
      {
        title:'Movie Search',
        link:'https://jjgodcom-vue-moviesearch.netlify.app/#/',
        day:'2022년 09월 18일 ~ 2022년 10월 25일',
        language:'HTML, Scss, Javascript, Vue.js',
        description:'React와 Vue 중에 고민하다가 Vue를 처음으로 공부하면서 만들어본 영화 검색 사이트 입니다.',
        image:require('assets/portfolio/movie.png')
      },
      {
        title:'Overwatch',
        link:'https://jjgodcom-ftp.netlify.app/views/portfolio/index.html',
        day:'2022년 09월 28일 ~ 2022년 09월 28일',
        language:'HTML, Css',
        description:'Css - display:flax 을 활용하여 Overwatch 캐릭터 레이아웃 구현한 페이지 입니다.',
        image:require('assets/portfolio/Overwatch.png')
      },
      {
        title:'Starbucks',
        link:'https://jjgodcom-ftp.netlify.app/views/portfolio/starbucks/index.html',
        day:'2022년 08월 28일 ~ 2022년 09월 02일',
        language:'HTML, Css, Javascript',
        description:'휴직중에 만들어본 카피 페이지 입니다.',
        image:require('assets/portfolio/Starbucks.png')
      },
      {
        title:'jjgodcom.com-2018',
        link:'https://web.archive.org/web/20180805230657/http://jjgodcom.com/',
        day:'2018년 08월 18일 ~ 2020년',
        language:'HTML, Css, Javascript, jQuery',
        description:'처음으로 개발을 접하고 도매인을 구매하여 만든 블로그 입니다.',
        image:require('assets/portfolio/jjgodcom-2018.png')
      },
      {
        title:'Webstandard',
        link:'https://web.archive.org/web/20180821032038/http://jjgodcom.com/web/index.html',
        day:'2018년 추정',
        language:'HTML, Css',
        description:'시멘틱태그를 이용한 웹표준을 사이트 입니다.',
        image:require('assets/portfolio/Webstandard.png')
      },
      {
        title:'Hynix',
        link:'https://web.archive.org/web/20180821035653/http://jjgodcom.com/hynix/index.html',
        day:'2018년 추정',
        language:'HTML, Css',
        description:'HTML 연습용으로 만든 카피 페이지 입니다.',
        image:require('assets/portfolio/Hynix.jpg')
      },
      {
        title:'경주월드',
        link:'https://web.archive.org/web/20180821021148/http://jjgodcom.com/mobile/index.html',
        day:'2018년 추정',
        language:'HTML, Css',
        description:'HTML 연습용으로 모바일 전용 카피 페이지 입니다.',
        image:require('assets/portfolio/경주월드.jpg')
      }
    ]
  }),
  getters: {},
  mutations: {
    updateIsActive(state, payload) {
      state.isActive = payload
    }
  },
  actions: {
    changeIsActive(context, payload) {
      const { state, getters, commit } = context
      commit('updateIsActive', payload)
      // console.log(state.isActive)
    }
  }
}