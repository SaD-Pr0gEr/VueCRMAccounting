import { createStore } from 'vuex'

export default createStore({
  state: {
    darkTheme: false
  },
  getters: {
  },
  mutations: {
    switchTheme(state) {
      state.darkTheme = !state.darkTheme
    }
  },
  actions: {
  },
  modules: {
  }
})
