import { createStore } from 'vuex'
import message from './message'
import work from './work'

export default createStore({
  modules: {
    message,
    work
  }
})
