import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
import dayjs from "dayjs";

Vue.use(Buefy);
Vue.use(dayjs);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
