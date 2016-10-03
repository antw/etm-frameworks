/* eslint-disable no-param-reassign */

const visibility = {
  state: { filter: 'ALL' },

  mutations: {
    SET_VISIBILITY_FILTER(state, filter) {
      state.filter = filter;
    },
  },
};

export default visibility;
