import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/";

// import * as moment from 'vue-moment';
// Vue.use(moment)

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");