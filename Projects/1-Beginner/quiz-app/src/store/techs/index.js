import techs from './techs';

const questions = {
  state: () => ({
    list: techs,
  }),
  mutations: {},
  actions: {},
  getters: {
    randomTechs: (state) => {
      const shuffledArr = state.list.sort(() => 0.5 - Math.random());
      return {
        correct: shuffledArr[0],
        wrongs: shuffledArr.slice(1, 10),
      };
    },
  },
};
export default questions;
