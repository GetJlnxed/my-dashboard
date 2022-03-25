import Vue from "vue";
import Vuex from "vuex";
import { test } from "./test.module";
import { header } from "./header.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { test, header },
});
