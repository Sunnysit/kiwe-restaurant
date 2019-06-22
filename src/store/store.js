import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginId: '',
    rName:'',
    rid:'ChIJtwgTP4dxhlQRo5wIHcln0es',
    openLineUp: true,

    queryDate:{
      year: new Date().getFullYear(),
      month: new Date().getMonth()+1,
      date: new Date().getDate()
    },

    //Different wait list
    waitLineSmall:[],
    waitLineMedium:[],
    waitLineLarge:[],


    sizeStandard:{
      small:4,
      medium:8,
      large:14
    },

    estTime:{
      small:10,
      medium:20,
      large:30
    }

  },
  mutations,
  actions
})
