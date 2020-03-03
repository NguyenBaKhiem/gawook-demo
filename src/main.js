require("./bootstrap");

import router from "./router";

// import "normalize.css/normalize.css";

// import ElementUI from 'element-ui';
// import "@assets/element/element-variables.scss";
// import LocalStorage from "./common/LocalStorageUtils";
// import store from "./store";
// import VueBroadcast from "./common/VueBroadcast";
// import VueRequestCanceler from  "./common/VueRequestCanceler";
// import * as vClickOutside from "v-click-outside-x";
// import VueTilt from "vue-tilt.js";
// import "./validations";
import "./lang";

import Vue from "vue";
import "./registerServiceWorker";

Vue.config.productionTip = false;

// Vue.use(VueTilt);
// Vue.use(vClickOutside);
// Vue.use(VueBroadcast);
// Vue.use(VueRequestCanceler);
// Vue.use(ElementUI);
// Vue.use(Element, {
//   size: LocalStorage.getItem("size") || "medium",
//   i18n: (key, value) => i18n.t(key, value)
// })

import App from "./App.vue";
window.app = new Vue({
  router,
  // store,
  // i18n,
  render: h => h(App)
}).$mount("#app");
