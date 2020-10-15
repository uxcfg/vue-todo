import Vue from "vue";
import App from "./App.vue";
import "./assets/reset.scss";
import "./assets/general.scss";

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
}).$mount("#app");