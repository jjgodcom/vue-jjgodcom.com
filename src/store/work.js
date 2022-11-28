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
      // memo : 현상황 메모 나중에 지워야함

      // Reference
      {
        page:'setting',
        title:'Setting',
        type:'Reference',
        image:require('assets/work/reference/setting.png').default,
        memo:''
      },
      {
        page:'reference',
        title:'Reference',
        type:'Reference',
        image:require('assets/work/reference/reference.png').default,
        memo:''
      },
      {
        page:'vscode',
        title:'VSCode',
        type:'Reference',
        image:require('assets/work/reference/vscode.png').default,
        memo:''
      },
      // HTML
      {
        page:'html',
        title:'HTML',
        type:'HTML',
        image:require('assets/work/html/html.png').default,
        memo:'a'
      },
      // CSS
      {
        page:'css',
        title:'CSS',
        type:'CSS',
        image:require('assets/work/css/css.png').default,
        memo:''
      },
      {
        page:'scss',
        title:'Scss',
        type:'CSS',
        image:require('assets/work/css/scss.png').default,
        memo:''
      },
      // Java
      {
        page:'javaScript',
        title:'JavaScript',
        type:'Java',
        image:require('assets/work/java/javascript.png').default,
        memo:''
      },
      {
        page:'jQuery',
        title:'jQuery',
        type:'Java',
        image:require('assets/work/java/jquery.png').default,
        memo:''
      },
      {
        page:'regEx',
        title:'정규식',
        type:'Java',
        image:require('assets/work/java/regex.png').default,
        memo:''
      },
      {
        page:'node',
        title:'Node.js',
        type:'Java',
        image:require('assets/work/java/node.png').default,
        memo:''
      },
      {
        page:'vue',
        title:'Vue.js',
        type:'Java',
        image:require('assets/work/java/vue.png').default,
        memo:''
      },
      // Bundler
      {
        page:'parcel',
        title:'Parcel',
        type:'Bundler',
        image:require('assets/work/bundler/parcel.png').default,
        memo:''
      },
      {
        page:'webPack',
        title:'WebPack',
        type:'Bundler',
        image:require('assets/work/bundler/webpack.png').default,
        memo:''
      },
      // DB
      {
        page:'oracle',
        title:'Oracle',
        type:'DB',
        image:require('assets/work/db/oracle.png').default,
        memo:''
      },
      {
        page:'mysql',
        title:'MySQL',
        type:'DB',
        image:require('assets/work/db/mysql.png').default,
        memo:''
      },
      // Git 
      {
        page:'git',
        title:'Git',
        type:'Git',
        image:require('assets/work/git/git.png').default,
        memo:''
      },
      {
        page:'markdown',
        title:'Markdown(.md)',
        type:'Git',
        image:require('assets/work/git/md.png').default,
        memo:''
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