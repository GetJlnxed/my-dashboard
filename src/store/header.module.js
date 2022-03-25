export const header = {
  namespaced: true,
  state: {
    title: "",
    appear: true,
  },
  actions: {
    changeTitle({ commit }, payload) {
      commit("changeTitle", payload);
    },
  },
  mutations: {
    changeTitle(state, payload) {
      state.title = payload;
      state.appear = false;
      setTimeout(() => {
        state.appear = true;
      }, 0);
    },
  },
  getters: {
    getHeaderData(state) {
      return state;
    },
  },
};
