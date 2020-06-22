import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: {
            demographics:{
                age:null,
                sex: null,
                maritalStatus: null,
                specialty: 1,
                region: 1,
                workArea: 1,
                oncologistNarrow: null,
                narrowHematologist: null,
                yearPractice: null,
                yearEducation: null,
                hoursWorked: null,
                nightShift: null,
                overtime: null,
                vacations: null,
                exercise: null,
                workTerminal: null,
                contEducation: null,
                psyServices: null,
                comTraining: null,
                comTrainingHours: null,
            },
            pil: [],
            maslach:[],
            eri:[],
        },
    },
    getters: {
        demographics: state => {
            return state.data.demographics
        },
        pil: state => {
            return state.data.pil
        },
        maslach: state => {
            return state.data.maslach
        },
        eri: state=>{
            return state.data.eri
        },
    },
    mutations: {
        updatePil: (state, payload)=>{
            state.data.pil.push(payload);
        },
        updateMaslach: (state, payload)=>{
            state.data.maslach.push(payload);
        },
        updateEri: (state, payload)=>{
            state.data.eri.push(payload);
        },
        updateDemographics: (state, payload)=>{
            state.data.demographics.push(payload);
        },
    },
    actions: {
        updatePil({commit}, payload){
            commit('updatePil', payload);
        },
        updateMaslach({commit}, payload){
            commit('updateMaslach', payload);
        },
        updateEri({commit}, payload){
            commit('updateEri', payload);
        },
        updateDemographics({commit}, payload){
            commit('updateDemographics', payload);
        },
    }
})