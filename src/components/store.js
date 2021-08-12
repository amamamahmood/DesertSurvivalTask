import Vue from 'vue';
import Vuex from 'vuex';
//import { createStore } from 'vuex'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        gender: 0,
        u_id: null
    },
    getters: {
        getGender: state => {
            return state.gender;
        },
        getUid: state => {
            return state.u_id;
        }
    },
    mutations: {
        storeGender(state, genderA) {
            state.gender = genderA;
        },
        storeUid(state, uid) {
            state.u_id = uid;
        }
    }
});