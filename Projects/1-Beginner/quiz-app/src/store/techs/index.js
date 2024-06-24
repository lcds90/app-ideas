import techs from './techs';

const questions = {
  state: () => ({
    list: techs,
  }),
  mutations: {},
  actions: {},
  getters: {
    randomTechs: ({ list }) => {
      const shuffledArr = () => {
        const arr = list
          .sort(() => 0.5 - Math.random())
          .map((tech) => ({ ...tech, correct: false }))
          .slice(0, 9);

        arr[Math.floor(Math.random() * shuffledArr.length)].correct = true;
        return arr;
      };
      return shuffledArr;
    },
  },
};
export default questions;
