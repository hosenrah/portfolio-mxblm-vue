import Vue from 'vue';
import VuePageTransition from 'vue-page-transition';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VuePageTransition);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
