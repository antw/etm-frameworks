/* eslint-disable no-param-reassign */

import Vue from 'vue';
import initialPosts from '../../data/posts';

function updatePost(posts, code, updater) {
  const post = posts.find(p => p.code === code);

  if (post) {
    updater(post);
  }
}

const posts = {
  state: initialPosts,

  getters: {
    visiblePosts(state, getters, rootState) {
      switch (rootState.visibility.filter) {
        case 'LIKED':
          return state.filter(p => p.hasLiked);
        case 'ACTIVE':
          return state.filter(
            p => rootState.comments[p.code] && rootState.comments[p.code].length
          );
        default:
          return state;
      }
    },
  },

  mutations: {
    LIKE_POST(state, postId) {
      updatePost(state, postId, post => {
        Vue.set(post, 'likes', post.likes + 1);
        Vue.set(post, 'hasLiked', true);
      });
    },

    UNLIKE_POST(state, postId) {
      updatePost(state, postId, post => {
        Vue.set(post, 'likes', post.likes - 1);
        Vue.set(post, 'hasLiked', false);
      });
    },
  },
};

export default posts;
