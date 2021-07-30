import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)




const store = new Vuex.Store({
    state: {
        gender: 0
    },
    getter: {
        getGender: state => {
            return state.gender;
        }
    },
    mutations: {
        storeGender(state, genderA) {
            state = genderA;
        }
    }
})

export default new Vuex.Store(store);