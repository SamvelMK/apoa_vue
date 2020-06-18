import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        demographics:[],
        pil: [],
        maslach:[],
        eri:[],
    },
    getters: {
        demographics: state => {
            state.demographics
        },
        pil: state => {
            return state.pil
        },
        maslach: state =>{
            state.demographics
        },
        eri: state=>{
            state.eri
        }
    },
    mutations: {
        updatePil: (state, payload)=>{
            state.pil.push(payload);
        },
    },
    actions: {
        updatePil({commit}, payload){
            commit('updatePil', payload);
        }
    }
})