import Vue from "vue";
import App from "./App.vue";
import vueResource from "vue-resource";
import router from "router";
import _ from "underscore";

Vue.config.productionTip = false;
Vue.use(vueResource);

new Vue({
  render: h => h(App)
}).$mount("#app");
