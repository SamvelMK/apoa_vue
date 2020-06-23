import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        data: {
            date: Date.now(), // miliseconds
            consentTime: null,
            demographics:{
                startTime: null,
                endTime: null,
                age:null,
                sex: null,
                maritalStatus: null,
                specialty: 0,
                region: 0,
                workArea: 0,
                oncologistNarrow: null,
                narrowHematologist: null,
                yearPractice: null,
                yearEducation: null,
                hoursWorked: null,
                hoursNightShift: null,
                overtime: null,
                vacations: null,
                exercise: null,
                workTerminal: null,
                contEducation: null,
                psyServices: null,
                comTraining: null,
                comTrainingHours: null,
                covidWorkChange: null,
                covidWorkChangeMore: null,
                covidStress: null,
                covidStressMore: null,
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
        updateStartTime: (state, payload)=>{
            state.data.demographics.startTime = payload;
        },
        updateEndTime: (state, payload)=>{
            state.data.demographics.endTime = payload;
        },
        updateStartTimeMaslach: (state, payload)=>{
            state.data.maslach.push({startTimeMaslach: payload});
        },
        updateEndTimeMaslach: (state, payload)=>{
            state.data.maslach.push({endTimeMaslach: payload});
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
        updateStartTime({commit}, payload){
            commit('updateStartTime', payload);
        },
        updateEndTime({commit}, payload){
            commit('updateEndTime', payload);
        },
        updateStartTimeMaslach({commit}, payload){
            commit('updateStartTimeMaslach', payload);
        },
        updateEndTimeMaslach({commit}, payload){
            commit('updateEndTimeMaslach', payload);
        },
    }
})