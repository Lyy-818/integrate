import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

export default new Vuex.Store({
  state:{
       obj:{}
  },
  getters:{

  },
  mutations:{
        handleTakeworkData(state,data){
          console.log(11)
              state.obj=data
          console.log(state.obj)
        }
  },
  actions:{

  }
})
