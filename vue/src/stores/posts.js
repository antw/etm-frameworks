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
