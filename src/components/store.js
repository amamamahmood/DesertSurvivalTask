import Vue from 'vue';
import Vuex from 'vuex';
//import { createStore } from 'vuex'
Vue.use(Vuex);


export const store = new Vuex.Store({
    state: {
        gender: 0,
        u_id: null,
        user_data : {
            uid: null,
            gender: 0,
            education: 0,
            major: null
        }
    },
    getters: {
        getGender: state => {
            return state.gender;
        },
        getUid: state => {
            return state.u_id;
        },
        getUserData: state => {
            return state.user_data;
        }
    },
    mutations: {
        storeGender(state, genderA) {
            state.gender = genderA;
        },
        storeUid(state, uid) {
            state.u_id = uid;
        },
        storeUserData(state, user_data) {
            state.user_data = user_data;
        }
    }
});