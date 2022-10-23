import VueYandexMetrika from 'vue-yandex-metrika';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueYandexMetrika, {
  id: 90886799,
  router,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
