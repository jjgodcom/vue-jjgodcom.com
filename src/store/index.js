import { createStore } from 'vuex'
import message from './message'
import work from './work'
import portfolio from './portfolio'

export default createStore({
  modules: {
    message,
    work,
    portfolio
  }
})
