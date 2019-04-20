import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import GoogleLogin from 'vue-google-login';
import "vuetify/dist/vuetify.min.css";
import router from "./router";
import Vuetify from 'vuetify';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.component('GoogleLogin', GoogleLogin);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
