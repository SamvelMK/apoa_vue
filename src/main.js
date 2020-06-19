import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue'

import { routes } from './routes';
import { store } from './store/store'

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
