import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(http);
Vue.http.options.emulateJSON = true;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
