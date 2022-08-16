import Vue from "vue";
import App from "./App.vue";

import mixpanel from "mixpanel-browser";

mixpanel.init("12345");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
