import api from "@/services/api.js";

export const test = {
  namespaced: true,
  state: {
    events: [],
  },
  actions: {
    getTestData({ commit }) {
      return new Promise((resolve, reject) => {
        api
          .getTestList()
          .then((res) => {
            commit("addTestData", res.data);
            resolve(res.data);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },
  mutations: {
    addTestData(state, payload) {
      state.events = payload;
    },
  },
  getters: {
    getTestData(state) {
      return state.events;
    },
  },
  // mutations: {
  //   addEvent(state, payload) {},
  // },
  // getters: {
  //   getEvents(state) {
  //     return state.events;
  //   },
  // },
};
