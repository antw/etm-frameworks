function updatePost(state, i, mutator) {
  return [
    ...state.slice(0, i),
    mutator(state[i]),
    ...state.slice(i + 1)
  ];
}

function posts(state = [], action) {
  switch (action.type) {
    case 'INCREMENT_LIKES': {
      return updatePost(state, action.index, post => (
        { ...post, likes: post.likes + 1, isLiked: true }
      ));
    }

    case 'DECREMENT_LIKES': {
      return updatePost(state, action.index, post => (
        { ...post, likes: post.likes - 1, isLiked: false }
      ));
    }

    default: {
      return state;
    }
  }
}

export default posts;
