const team = {
  namespaced: true,
  state: {
    users: [
      {
        fullName: "John Wick",
        age: 45,
        position: "Front-End Developer",
        tel: "548-86-45",
      },
      {
        fullName: "Ava Page",
        age: 30,
        position: "Back-End Developer",
        tel: "548-86-45",
      },
    ],
  },
  getters: {
    getTeam(state) {
      return state.users;
    },
  },
  mutations: {
    newUser(state, value) {
      state.users.push(value);
    },
  },
  actions: {
    newUser: (state, value) => state.commit("newUser", value),
  },
};

export default team;
