import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: {
            demographics:[],
            pil: [],
            maslach:[],
            eri:[],
        },
    },
    getters: {
        demographics: state => {
            state.data.demographics
        },
        pil: state => {
            return state.data.pil
        },
        maslach: state =>{
            state.data.demographics
        },
        eri: state=>{
            state.data.eri
        },
    },
    mutations: {
        updatePil: (state, payload)=>{
            state.data.pil.push(payload);
        },
    },
    actions: {
        updatePil({commit}, payload){
            commit('updatePil', payload);
        },
    }
})