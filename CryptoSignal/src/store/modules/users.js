const usersStore = {
  namespaced: true,
  state: {
    users: {
      count: 52,
    },
  },
  getters: {
    getUsers: ({ ...users }) => users,
  },
  mutations: {
    SET_USERS(state, cnt) {
      state.users.count = cnt;
    },
  },
  actions: {
    setUsers({ commit }, cnt) {
      commit('SET_USERS', cnt);
    },
  },
};

export default usersStore;
