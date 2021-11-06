// =====IMPORT BOOTSTRAP======== 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery';
import '../node_modules/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// =====FOR GOOGLE MAPS API=====
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDLQBtSTdMwPYAir3RoXm47jJGz5xro_Wc',
  },
})

// FOR AOS ANIMATION
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';


Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
  created() {
    AOS.init();
  }
})
