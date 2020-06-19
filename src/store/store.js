import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        steps: 0,
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
        steps: state =>{
            state.steps
        }
    },
    mutations: {
        updatePil: (state, payload)=>{
            state.data.pil.push(payload);
        },
        stepIncrease: (state)=>{
            state.steps ++;
        }
    },
    actions: {
        updatePil({commit}, payload){
            commit('updatePil', payload);
        },
        stepIncrease({commit}){
            commit('stepIncrease');
        }
    }
})