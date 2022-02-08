import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './app';
import router from '../routes'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
