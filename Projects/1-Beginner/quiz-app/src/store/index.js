import { createStore } from 'vuex';
import techs from './techs';
import ranking from './ranking';
import user from './user';

export default createStore({
  modules: {
    techs,
    ranking,
    user,
  },
});
