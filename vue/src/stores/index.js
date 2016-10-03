import posts from './posts';
import comments from './comments';
import visibility from './visibility';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: { posts, comments, visibility },
});

export default store;
