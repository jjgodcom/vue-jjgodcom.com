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
      {
        title:'포폴 소개페이지',
        type:'portfolio',
        link:'/portfolio'
      },
      {
        title:'필기페이지',
        type:'test2',
        link:'/note'
      },
      {
        title:'Overwatch',
        type:'Protfolio',
        link:''
      },
      {
        title:'Movie Search',
        type:'Protfolio',
        link:''
      },
      {
        title:'jjgodcom.com',
        type:'Protfolio',
        link:''
      },
      {
        title:'Git',
        type:'Git',
        link:''
      },
      {
        title:'Markdown(.md)',
        type:'Git',
        link:''
      },
      {
        title:'VSCode',
        type:'Other',
        link:''
      },
      {
        title:'Setting',
        type:'Other',
        link:''
      },
      {
        title:'Reference',
        type:'Reference',
        link:''
      },
      {
        title:'HTML',
        type:'HTML',
        link:''
      },
      {
        title:'CSS',
        type:'CSS',
        link:''
      },
      {
        title:'Scss',
        type:'CSS',
        link:''
      },
      {
        title:'JavaScript',
        type:'Java',
        link:''
      },
      {
        title:'jQuery',
        type:'Java',
        link:''
      },
      {
        title:'정규식',
        type:'Java',
        link:''
      },
      {
        title:'Node.js',
        type:'Java',
        link:''
      },
      {
        title:'Vue.js',
        type:'Java',
        link:''
      },
      {
        title:'Parcel',
        type:'Bundler',
        link:''
      },
      {
        title:'WebPack',
        type:'Bundler',
        link:''
      },
      {
        title:'Oracle',
        type:'DB',
        link:''
      },
      {
        title:'MySQL',
        type:'DB',
        link:''
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