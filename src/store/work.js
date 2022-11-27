export default {
  // 스토어에 하나의 모듈이 될수 있도록 namespaced: true 추가
  namespaced: true,
  // 상태
  state: () => ({
    isActive: '',
    show:false,
    menus:[
      'All',
      'HTML',
      'CSS',
      'Bundler',
      'Java',
      'DB',
      'Reference',
      'Protfolio',
      'Git',
      'Other'
    ],
    lists:[
      // page : 이동될 페이지 분류 portfolio OR note
      // title : 이름
      // type : work메뉴 클릭시 분류될거
      // image : 이미지
      // memo : 현상황 메모 나중에 지워야함

      // portfolio
      {
        page:'portfolio',
        title:'jjgodcom.com-Vue',
        type:'Protfolio',
        image:'',
        memo:'썸네일+이미지 해야함'
      },
      {
        page:'portfolio',
        title:'jjgodcom.com-ftp',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Movie Search',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Overwatch',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Starbucks',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'jjgodcom.com-2018',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Webstandard',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'Hynix',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      {
        page:'portfolio',
        title:'경주월드',
        type:'Protfolio',
        image:'',
        memo:'썸네일 해야함'
      },
      // Git 
      {
        page:'git',
        title:'Git',
        type:'Git',
        image:''
      },
      {
        page:'markdown',
        title:'Markdown(.md)',
        type:'Git',
        image:''
      },
      // Other
      {
        page:'vscode',
        title:'VSCode',
        type:'Other',
        image:''
      },
      {
        page:'setting',
        title:'Setting',
        type:'Other',
        image:''
      },
      // Reference
      {
        page:'reference',
        title:'Reference',
        type:'Reference',
        image:''
      },
      // HTML
      {
        page:'html',
        title:'HTML',
        type:'HTML',
        image:''
      },
      // CSS
      {
        page:'css',
        title:'CSS',
        type:'CSS',
        image:''
      },
      {
        page:'scss',
        title:'Scss',
        type:'CSS',
        image:''
      },
      // Java
      {
        page:'javaScript',
        title:'JavaScript',
        type:'Java',
        image:''
      },
      {
        page:'jQuery',
        title:'jQuery',
        type:'Java',
        image:''
      },
      {
        page:'regEx',
        title:'정규식',
        type:'Java',
        image:''
      },
      {
        page:'node',
        title:'Node.js',
        type:'Java',
        image:''
      },
      {
        page:'vue',
        title:'Vue.js',
        type:'Java',
        image:''
      },
      // Bundler
      {
        page:'parcel',
        title:'Parcel',
        type:'Bundler',
        image:''
      },
      {
        page:'webPack',
        title:'WebPack',
        type:'Bundler',
        image:''
      },
      // DB
      {
        page:'oracle',
        title:'Oracle',
        type:'DB',
        image:''
      },
      {
        page:'mysql',
        title:'MySQL',
        type:'DB',
        image:''
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