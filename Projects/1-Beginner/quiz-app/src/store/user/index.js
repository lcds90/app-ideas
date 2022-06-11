import { registerUserInRanking } from '@/api';

const user = {
  state: () => ({
    name: '',
    score: 0,
    failed: 0,
    answers: [],
    gameFinished: false,
  }),
  mutations: {
    gameFinished: (state) => {
      const { name, score, failed } = state;
      state.gameFinished = true;
      registerUserInRanking({ name, points: { score, failed } });
    },
    checkIfAnswerIsCorrect(state, payload) {
      const hit = () => {
        state.score += payload.count;
        state.answers = [...state.answers, payload.answer];
      };
      const fail = () => {
        state.score += payload.count;
        state.failed += 1;
      };
      return payload.answer.correct ? hit() : fail();
    },
    setUsername(state, payload) {
      state.name = payload.username;
    },
  },
  actions: {},
  getters: {},
};

export default user;
