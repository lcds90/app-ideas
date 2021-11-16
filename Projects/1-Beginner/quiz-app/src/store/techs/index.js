import techs from './techs';

const questions = {
  state: () => ({
    list: techs,
  }),
  mutations: {},
  actions: {},
  getters: {
    randomTechs: ({ list }) => {
      const shuffledArr = list
        .sort(() => 0.5 - Math.random())
        .map((tech) => ({ ...tech, correct: false }))
        .slice(0, 10);

      shuffledArr[Math.floor(Math.random() * shuffledArr.length)].correct = true;

      return shuffledArr;
    },
  },
};
export default questions;
