export default {
  // 스토어에 하나의 모듈이 될수 있도록 namespaced: true 추가
  namespaced: true,
  // 상태
  state: () => ({
    lists:[
      {
        title:'jjgodcom.com-Vue',
        link:'https://jjgodcom-vue.netlify.app/#/',
        language:'HTML, SCSS, Javascript, Vue.js',
        works:
        [
          '디자인 작업 (100%)',
          '사용자 페이지(Vue.js) 개발 (100%)'
        ],
        description:'Vue를 기반으로한 포트폴리오겸 세번째 블로그 입니다.',
        images:
        [
          require('assets/portfolio/jjgodcom-vue.png').default
        ]
      },
      {
        title:'jjgodcom.com-ftp',
        link:'https://jjgodcom-ftp.netlify.app/',
        language:'HTML, CSS, Javascript, jQuery',
        works:
        [
          '디자인 작업 (100%)',
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'겁없이 도메인에 FTP서버 연결해서 만들다가 싹다 날리고 두번쨰로 만든 블로그 입니다.',
        images:
        [
          require('assets/portfolio/jjgodcom-ftp.png').default
        ]
      },
      {
        title:'Movie Search',
        link:'https://jjgodcom-vue-moviesearch.netlify.app/#/',
        language:'HTML, SCSS, Javascript, Vue.js',
        works:[],
        description:'React와 Vue 중에 고민하다가 Vue를 처음으로 공부하면서 만들어본 영화 검색 사이트 입니다.',
        images:
        [
          require('assets/portfolio/movie.png').default
        ]
      },
      {
        title:'Starbucks',
        link:'https://jjgodcom-ftp.netlify.app/views/portfolio/starbucks/index.html',
        language:'HTML, CSS, Javascript',
        works:[],
        description:'휴직중에 만들어본 스타벅스 카피 페이지 입니다.',
        images:
        [
          require('assets/portfolio/Starbucks.png').default
        ]
      },
      {
        title:'Overwatch',
        link:'https://jjgodcom-ftp.netlify.app/views/portfolio/index.html',
        language:'HTML, CSS',
        works:[],
        description:'CSS - display:flax 을 활용하여 Overwatch 캐릭터 레이아웃 구현한 페이지 입니다.',
        images:
        [
          require('assets/portfolio/Overwatch.png').default
        ]
      },
      {
        title:'jjgodcom.com-2018',
        link:'https://web.archive.org/web/20180805230657/http://jjgodcom.com/',
        language:'HTML, CSS, Javascript, jQuery',
        works:
        [
          '디자인 작업 (100%)',
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'처음으로 개발을 접하고 도메인을 구매하여 만든 블로그 입니다.',
        images:
        [
          require('assets/portfolio/jjgodcom-2018.png').default
        ]
      },
      {
        title:'아이디어콘서트',
        link:'http://www.ideaconcert.com',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '디자인 작업 (10%) - 반응형 디자인이 없어 임의로 진행함',
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'언제나 즐거운 상상으로 새로운 콘텐츠와 문화기술을 만드는 아이디어콘서트 회사의 방향성을 홍보하기 위해 제작 하였습니다.',
        images:
        [
          require('assets/portfolio/ideaconcert.png').default
        ]
      },
      {
        title:'디어맨',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'아이디어 등록, 변리사 매칭, 특허 출원 신청까지 한번에 해결해주는 특허출원 도움 사이트 입니다.',
        images:
        [
          require('assets/portfolio/deaman01.png').default,
          require('assets/portfolio/deaman02.png').default,
          require('assets/portfolio/deaman03.png').default
        ]
      },
      {
        title:'마크맨',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'상표 등록, 상호 등록, 변리사 매칭, 상표 검색 등 상표와 관련된 서비스를 제공하는 사이트 입니다.',
        images:
        [
          require('assets/portfolio/markman.png').default
        ]
      },
      {
        title:'문라이트',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'흑백만화 스캔본을 자동으로 영상화 시켜주는 제작툴로 스캔본을 업로드만 하면 자동으로 컷을 분리, 자동 채색, 영상화 진행, 세부적인 연출 제작툴 을 제공 합니다.',
        images:
        [
          require('assets/portfolio/moon01.png').default,
          require('assets/portfolio/moon02.png').default,
          require('assets/portfolio/moon03.png').default,
          require('assets/portfolio/moon04.png').default
        ]
      },
      {
        title:'스팅',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'스타 마케팅 플래폼(STING)은 스타트업이나 중소기업이 상품을 스타와 매칭하여 온라인으로 홍보를 할 수 있도록 하는 서비스입니다.',
        images:
        [
          require('assets/portfolio/sting.png').default
        ]
      },
      {
        title:'자인맨',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'디자인 출원을 누구든 손쉽고 간편하게 제공하는 사이트 입니다.',
        images:
        [
          require('assets/portfolio/singman.png').default
        ]
      },
      {
        title:'투니비 라이트',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'투니비 저작툴을 보다 간편하게 모바일로 웹툰을 업로드 하여 컷 편집, 영상 편집을 제공합니다.',
        images:
        [
          require('assets/portfolio/lite.png').default
        ]
      },
      {
        title:'투니비 저작툴',
        link:'https://toonivie.com/',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'투니비 저작툴은 웹툰 혹은 만화 단행본을 손쉽게 웹툰무비로 만드는 저작 플랫폼입니다. ',
        images:
        [
          require('assets/portfolio/tool.png').default
        ]
      },
      {
        title:'투니비 플랫폼',
        link:'https://toonivie.com/',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'투니비(Toonivie) 플랫폼은 웹툰무비, 웹툰, 단편을 업로드하는 플랫폼 입니다.',
        images:
        [
          require('assets/portfolio/toonivie.png').default
        ]
      },
      {
        title:'투니비 플랫폼 2019',
        link:'https://toonivie.com/',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'투니비(Toonivie) 플랫폼은 웹툰무비, 웹툰, 단편을 업로드하는 플랫폼 입니다.',
        images:
        [
          require('assets/portfolio/toonivie2019.png').default
        ]
      },
      {
        title:'키즈페이',
        link:'',
        language:'HTML, CSS, Javascript, jQuery, MySQL, Spring',
        works:
        [
          '사용자 페이지(HTML) 개발 (100%)'
        ],
        description:'아토큐브 (attocube) 에서 외주를 받아 진행한 유아도구 결제, 주문, 관리를 간편하게 도와주는 사이트 입니다.',
        images:
        [
          require('assets/portfolio/kids.png').default
        ]
      },

      {
        title:'Webstandard',
        link:'https://web.archive.org/web/20180821032038/http://jjgodcom.com/web/index.html',
        language:'HTML, CSS',
        works:[],
        description:'시멘틱태그를 이용한 웹표준을 사이트 입니다.',
        images:
        [
          require('assets/portfolio/Webstandard.png').default
        ]
      },
      {
        title:'Hynix',
        link:'https://web.archive.org/web/20180821035653/http://jjgodcom.com/hynix/index.html',
        language:'HTML, CSS',
        works:[],
        description:'HTML 연습용으로 만든 Hynix 카피 페이지 입니다.',
        images:
        [
          require('assets/portfolio/Hynix.jpg').default
        ]
      },
      {
        title:'경주월드',
        link:'https://web.archive.org/web/20180821021148/http://jjgodcom.com/mobile/index.html',
        language:'HTML, CSS',
        works:[],
        description:'HTML 연습용으로 모바일 전용 카피 페이지 입니다.',
        images:
        [
          require('assets/portfolio/경주월드.jpg').default
        ]
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