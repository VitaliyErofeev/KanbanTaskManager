const team = {
  namespaced: true,
  state: {
    users: [
      { fullName: "John Wick", position: "Front-End Developer" },
      { fullName: "Ava Page", position: "Back-End Developer" },
    ],
  },
  getters: {
    getTeam(state) {
      return state.users;
    },
  },
};

export default team;
