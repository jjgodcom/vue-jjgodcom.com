export default {
  // 스토어에 하나의 모듈이 될수 있도록 namespaced: true 추가
  namespaced: true,
  // 상태
  state: () => ({
    isActive: '',
    show:false,
    menus:[
      'All',
      'Reference',
      'HTML',
      'CSS',
      'Java',
      'Bundler',
      'DB',
      'Git',
      'Protfolio'
    ],
    lists:[
      // page : 이동될 페이지 분류 portfolio OR note
      // title : 이름
      // type : work메뉴 클릭시 분류될거
      // image : 이미지
      // url : page 가 note일 경우 url 이동

      // Reference
      {
        page:'note',
        title:'Setting',
        type:'Reference',
        image:require('assets/work/reference/setting.png').default,
        url:'https://ten-wax-7f1.notion.site/Setting-0cc72bfd19c5400da4b0faf3d4d5af7b'
      },
      {
        page:'note',
        title:'Site',
        type:'Reference',
        image:require('assets/work/reference/site.png').default,
        url:'https://ten-wax-7f1.notion.site/Site-bde716a205a941e09859535b5dd917ca'
      },
      {
        page:'note',
        title:'Css',
        type:'Reference',
        image:require('assets/work/reference/css.png').default,
        url:'https://ten-wax-7f1.notion.site/Css-34a3fb32d0cb40c3ba46ebaac8305d93'
      },
      {
        page:'note',
        title:'Js',
        type:'Reference',
        image:require('assets/work/reference/js.png').default,
        url:'https://ten-wax-7f1.notion.site/Js-658506297a0e4634a0134c69f1d2b2cd'
      },
      {
        page:'note',
        title:'VSCode',
        type:'Reference',
        image:require('assets/work/reference/vscode.png').default,
        url:'https://ten-wax-7f1.notion.site/VSCode-503bb5b37a334de7a638357582641f8e'
      },
      // HTML
      {
        page:'note',
        title:'HTML',
        type:'HTML',
        image:require('assets/work/html/html.png').default,
        url:'https://ten-wax-7f1.notion.site/HTML-f2ad71e6a4f14ee0860d4793b9912405'
      },
      // CSS
      {
        page:'note',
        title:'CSS',
        type:'CSS',
        image:require('assets/work/css/css.png').default,
        url:''
      },
      {
        page:'note',
        title:'Scss',
        type:'CSS',
        image:require('assets/work/css/scss.png').default,
        url:''
      },
      // Java
      {
        page:'note',
        title:'JavaScript',
        type:'Java',
        image:require('assets/work/java/javascript.png').default,
        url:''
      },
      {
        page:'note',
        title:'jQuery',
        type:'Java',
        image:require('assets/work/java/jquery.png').default,
        url:''
      },
      {
        page:'note',
        title:'정규식',
        type:'Java',
        image:require('assets/work/java/regex.png').default,
        url:''
      },
      {
        page:'note',
        title:'Node.js',
        type:'Java',
        image:require('assets/work/java/node.png').default,
        url:''
      },
      {
        page:'note',
        title:'Vue.js',
        type:'Java',
        image:require('assets/work/java/vue.png').default,
        url:''
      },
      // Bundler
      {
        page:'note',
        title:'Parcel',
        type:'Bundler',
        image:require('assets/work/bundler/parcel.png').default,
        url:''
      },
      {
        page:'note',
        title:'WebPack',
        type:'Bundler',
        image:require('assets/work/bundler/webpack.png').default,
        url:''
      },
      // DB
      {
        page:'note',
        title:'Oracle',
        type:'DB',
        image:require('assets/work/db/oracle.png').default,
        url:''
      },
      {
        page:'note',
        title:'MySQL',
        type:'DB',
        image:require('assets/work/db/mysql.png').default,
        url:''
      },
      // Git 
      {
        page:'note',
        title:'Git',
        type:'Git',
        image:require('assets/work/git/git.png').default,
        url:''
      },
      {
        page:'note',
        title:'Markdown(.md)',
        type:'Git',
        image:require('assets/work/git/md.png').default,
        url:''
      },
      // portfolio
      {
        page:'portfolio',
        title:'jjgodcom.com-Vue',
        type:'Protfolio',
        image:require('assets/work/portfolio/vue.png').default,
        memo:'썸네일+이미지 해야함'
      },
      {
        page:'portfolio',
        title:'jjgodcom.com-ftp',
        type:'Protfolio',
        image:require('assets/work/portfolio/ftp.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Movie Search',
        type:'Protfolio',
        image:require('assets/work/portfolio/movie.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Overwatch',
        type:'Protfolio',
        image:require('assets/work/portfolio/overwatch.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Starbucks',
        type:'Protfolio',
        image:require('assets/work/portfolio/starbucks.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'jjgodcom.com-2018',
        type:'Protfolio',
        image:require('assets/work/portfolio/2018.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Webstandard',
        type:'Protfolio',
        image:require('assets/work/portfolio/webstandard.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Hynix',
        type:'Protfolio',
        image:require('assets/work/portfolio/hynix.png').default,
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'경주월드',
        type:'Protfolio',
        image:require('assets/work/portfolio/world.png').default,
        memo:'썸네일 해야함'
      }
    ]
  }),
  getters: {},
  mutations: {
    updateIsActive(state, payload) {
      state.isActive = payload
    },
    updateShow(state, payload) {
      state.show = payload
    }
  },
  actions: {
    changeIsActive(context, payload) {
      const { state, getters, commit } = context
      commit('updateIsActive', payload)
      // console.log(state.isActive)
    },
    changeIsShow(context, payload) {
      const { state, getters, commit } = context
      commit('updateShow', payload)
      // console.log(state.show)
    }
  }
}