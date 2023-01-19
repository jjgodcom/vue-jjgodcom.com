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
        url:'https://ten-wax-7f1.notion.site/CSS-246bec3114924e0b84e1e1fd8b3c3f55'
      },
      {
        page:'note',
        title:'Scss',
        type:'CSS',
        image:require('assets/work/css/scss.png').default,
        url:'https://ten-wax-7f1.notion.site/SCSS-88ffbe958d2743df9dbe07c497b86ffe'
      },
      // Java
      {
        page:'note',
        title:'JavaScript',
        type:'Java',
        image:require('assets/work/java/javascript.png').default,
        url:'https://ten-wax-7f1.notion.site/JavaScript-38a5c43bb231419e97024c43285116ec'
      },
      {
        page:'note',
        title:'정규식',
        type:'Java',
        image:require('assets/work/java/regex.png').default,
        url:'https://ten-wax-7f1.notion.site/884362a3dc6341f6ad4a892ac8cf2692'
      },
      {
        page:'note',
        title:'jQuery',
        type:'Java',
        image:require('assets/work/java/jquery.png').default,
        url:'https://ten-wax-7f1.notion.site/jQuery-f5768d4c887b4d4b9231ec4d0b84aa5b'
      },
      {
        page:'note',
        title:'Node.js',
        type:'Java',
        image:require('assets/work/java/node.png').default,
        url:'https://ten-wax-7f1.notion.site/Node-js-edd4b65b6f1b4f1095bfec45e0b420e2'
      },
      {
        page:'note',
        title:'Vue.js',
        type:'Java',
        image:require('assets/work/java/vue.png').default,
        url:'https://ten-wax-7f1.notion.site/Vue-js-d7d6f755ad4241559ef8397ced08ca10'
      },
      // Bundler
      {
        page:'note',
        title:'Parcel',
        type:'Bundler',
        image:require('assets/work/bundler/parcel.png').default,
        url:'https://ten-wax-7f1.notion.site/Parcel-a4d1da4800f444f8af3f1b92e17c2398'
      },
      {
        page:'note',
        title:'WebPack',
        type:'Bundler',
        image:require('assets/work/bundler/webpack.png').default,
        url:'https://ten-wax-7f1.notion.site/WebPack-b4e4b38a180f4f66b07f9d46d20160d4'
      },
      // DB
      {
        page:'note',
        title:'Oracle',
        type:'DB',
        image:require('assets/work/db/oracle.png').default,
        url:'https://ten-wax-7f1.notion.site/Oracle-270e57927fa74c3da5e7f1f8c630a29d'
      },
      {
        page:'note',
        title:'MySQL',
        type:'DB',
        image:require('assets/work/db/mysql.png').default,
        url:'https://ten-wax-7f1.notion.site/MySQL-c16e66fcc7364e2d8a9f76b6db8f26d7'
      },
      // Git 
      {
        page:'note',
        title:'Git',
        type:'Git',
        image:require('assets/work/git/git.png').default,
        url:'https://ten-wax-7f1.notion.site/Git-32ae4ccd384b41f68cd9cdfd4d98c657'
      },
      {
        page:'note',
        title:'Markdown(.md)',
        type:'Git',
        image:require('assets/work/git/md.png').default,
        url:'https://ten-wax-7f1.notion.site/Markdown-md-61ccded703bf46038ddaf05c3186868b'
      },
      // portfolio
      {
        page:'portfolio',
        title:'jjgodcom.com-Vue',
        type:'Protfolio',
        image:require('assets/work/portfolio/vue.png').default,
      },
      {
        page:'portfolio',
        title:'jjgodcom.com-ftp',
        type:'Protfolio',
        image:require('assets/work/portfolio/ftp.png').default,
      },
      {
        page:'portfolio',
        title:'Movie Search',
        type:'Protfolio',
        image:require('assets/work/portfolio/movie.png').default,
      },
      {
        page:'portfolio',
        title:'Starbucks',
        type:'Protfolio',
        image:require('assets/work/portfolio/starbucks.png').default,
      },
      {
        page:'portfolio',
        title:'Overwatch',
        type:'Protfolio',
        image:require('assets/work/portfolio/overwatch.png').default,
      },
      {
        page:'portfolio',
        title:'jjgodcom.com-2018',
        type:'Protfolio',
        image:require('assets/work/portfolio/2018.png').default,
      },
      {
        page:'portfolio',
        title:'아이디어콘서트',
        type:'Protfolio',
        image:require('assets/work/portfolio/ideaconcert.png').default,
      },
      {
        page:'portfolio',
        title:'디어맨',
        type:'Protfolio',
        image:require('assets/work/portfolio/deaman.png').default,
      },
      {
        page:'portfolio',
        title:'마크맨',
        type:'Protfolio',
        image:require('assets/work/portfolio/markman.png').default,
      },
      {
        page:'portfolio',
        title:'문라이트',
        type:'Protfolio',
        image:require('assets/work/portfolio/moonlight.png').default,
      },
      {
        page:'portfolio',
        title:'스팅',
        type:'Protfolio',
        image:require('assets/work/portfolio/sting.png').default,
      },
      {
        page:'portfolio',
        title:'자인맨',
        type:'Protfolio',
        image:require('assets/work/portfolio/signman.png').default,
      },
      {
        page:'portfolio',
        title:'투니비 라이트',
        type:'Protfolio',
        image:require('assets/work/portfolio/toonivie-lite.png').default,
      },
      {
        page:'portfolio',
        title:'투니비 저작툴',
        type:'Protfolio',
        image:require('assets/work/portfolio/toonivie-tool.png').default,
      },
      {
        page:'portfolio',
        title:'투니비 플랫폼',
        type:'Protfolio',
        image:require('assets/work/portfolio/toonivie-platform.png').default,
      },
      {
        page:'portfolio',
        title:'투니비 플랫폼 2019',
        type:'Protfolio',
        image:require('assets/work/portfolio/toonivie-platform2019.png').default,
      },
      {
        page:'portfolio',
        title:'키즈페이',
        type:'Protfolio',
        image:require('assets/work/portfolio/kidspay.png').default,
      },
      {
        page:'portfolio',
        title:'Webstandard',
        type:'Protfolio',
        image:require('assets/work/portfolio/webstandard.png').default,
      },
      {
        page:'portfolio',
        title:'Hynix',
        type:'Protfolio',
        image:require('assets/work/portfolio/hynix.png').default,
      },
      {
        page:'portfolio',
        title:'경주월드',
        type:'Protfolio',
        image:require('assets/work/portfolio/world.png').default,
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