const task = {
  namespaced: true,
  state: {
    tempCard: {},
    dashboard: {
      columns: [
        {
          name: "Test",
          cards: [
            {
              title:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
            {
              title:
                "Lorem Ipsum is simply dummy text of the printing industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            },
          ],
        },
      ],
      // stages: [{ name: "", tasks: [{ description: "" }] }],
    },
  },
  getters: {
    getColumns(state) {
      return state.dashboard.columns;
    },
    getTempCard(state) {
      return state.tempCard;
    },
  },
  mutations: {
    newColumn(state, value) {
      state.dashboard.columns.push(value);
    },
    newCard(state, value) {
      var a = state.dashboard.columns.findIndex((x) => x == value.column);
      state.dashboard.columns[a].cards.push(value.card);
    },
    setTempCard(state, value) {
      state.tempCard = value;
    },
    removeTempCard(state) {
      state.tempCard = {};
    },
  },
  actions: {
    newColumn: (state, value) => state.commit("newColumn", value),
    newCard: (state, value) => state.commit("newCard", value),
    setTempCard: (state, value) => state.commit("setTempCard", value),
    removeTempCard: (state) => state.commit("removeTempCard"),
  },
};

export default task;
