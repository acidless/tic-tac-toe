import { createStore } from "vuex";

/*====================*/

const store = createStore({
  state() {
    return {
      winner: undefined,
    };
  },

  mutations: {
    setWinner(state, winner) {
      state.winner = winner;
    },
  },

  getters: {
    winner(state) {
      return state.winner;
    },
  },
});

/*====================*/

export default store;
