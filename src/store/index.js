import { createStore } from 'vuex'

export default createStore({
  state: {
    darkTheme: Number(localStorage.getItem('darkTheme')) ? 1 : 0
  },
  getters: {
  },
  mutations: {
    switchTheme(state) {
      let status = Number(localStorage.getItem('darkTheme'))
      localStorage.setItem('darkTheme', status ? "0" : "1")
      state.darkTheme = status ? 0 : 1
    }
  },
  actions: {
  },
  modules: {
  }
})
