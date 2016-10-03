/* eslint-disable no-param-reassign */

import Vue from 'vue';
import initialComments from '../../data/comments';

const comments = {
  state: initialComments,

  mutations: {
    ADD_COMMENT(state, { postId, user, text }) {
      if (!state[postId]) {
        Vue.set(state, postId, []);
      }

      state[postId].push({ user, text });
    },

    DELETE_COMMENT(state, { postId, i }) {
      state[postId].splice(i, 1);
    },
  },
};

export default comments;
