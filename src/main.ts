import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueMoment from "vue-moment";
import Clipboard from 'v-clipboard'

Vue.config.productionTip = false;

Vue.use(VueMoment);
Vue.use(Clipboard);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

