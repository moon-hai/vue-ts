import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'
import Counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: User,
    counter: Counter
  }
})
