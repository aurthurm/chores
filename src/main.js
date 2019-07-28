import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'

// Using MDBPRO JQueryVersion CSS Only for elements not in MDBVue Free
import './assets/MDB-PRO-4.6.1/css/bootstrap.min.css'
import './assets/MDB-PRO-4.6.1/css/mdb.min.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
