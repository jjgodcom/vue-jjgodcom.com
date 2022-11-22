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
      'JAVA',
      'DB',
      'REFERENCE',
      'PORTFOLIO',
      'OTHER'
    ],
    lists:[
      {
        title:'HTML',
        type:'HTML'
      },
      {
        title:'HTML2',
        type:'HTML'
      },
      {
        title:'CSS',
        type:'CSS'
      },
      {
        title:'Bundler',
        type:'Bundler'
      },
      {
        title:'JAVA',
        type:'JAVA'
      },
      {
        title:'DB',
        type:'DB'
      },
      {
        title:'REFERENCE',
        type:'REFERENCE'
      },
      {
        title:'PORTFOLIO',
        type:'PORTFOLIO'
      },
      {
        title:'OTHER',
        type:'OTHER'
      },
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