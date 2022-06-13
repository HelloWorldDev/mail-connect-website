import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginRegisterInfo:null//登录页面注册/登录表单信息
  },
  getters: {
    getLoginRegisterInfo(state){
        return state.loginRegisterInfo
    },
  },
  mutations: {
    setLoginRegisterInfo(state,value){
        state.loginRegisterInfo= value;
    },
  },
  actions: {
    setLoginRegisterInfo(context,value){
        context.commit('setLoginRegisterInfo',value)
    },
  },
  modules: {
  }
})
