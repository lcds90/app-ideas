const user = {
  state: () => ({
    name: '',
    score: 0,
    failed: 0,
    answers: [],
  }),
  mutations: {
    checkIfAnswerIsCorrect(state, payload) {
      const hit = () => {
        state.score += payload.count;
        state.answers = [...state.answers, payload.answer];
      };
      const fail = () => {
        state.failed += 1;
      };
      if (payload.correct) hit();
      else fail();
    },
  },
  actions: {},
  getters: {},
};

export default user;
