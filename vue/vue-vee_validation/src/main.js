import Vue from "vue";
import "./style/tailwind.css";
import App from "./App.vue";
import { extend, localize } from "vee-validate";
import * as rules from "vee-validate/dist/rules";
import en from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
