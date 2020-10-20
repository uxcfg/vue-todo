import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import todoList from "./todoList";

export default new Vuex.Store({
	modules: { todoList },
});
