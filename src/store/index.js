import Vue from "vue";
import Vuex from "vuex";
import createPersist from "vuex-localstorage";

import task from "./task";
import team from "./team";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [
    createPersist({
      namespace: "taskmanager",
      initialState: {},
      // ONE_WEEK
      expires: 7 * 24 * 60 * 60 * 1e3,
      paths: ["task", "team"],
    }),
  ],
  modules: {
    task,
    team,
  },
});

export default store;
