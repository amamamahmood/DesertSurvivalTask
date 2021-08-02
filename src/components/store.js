import Vue from 'vue'
import Vuex from 'vuex'
//import { createStore } from 'vuex'
Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        gender: 0
    },
    getters: {
        getGender: state => {
            return state.gender;
        }
    },
    mutations: {
        storeGender(state, genderA) {
            state.gender = genderA;
        }
    }
});