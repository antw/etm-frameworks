// increment
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  };
}

// decrement
export function decrement(index) {
  return {
    type: 'DECREMENT_LIKES',
    index
  };
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  };
}

// remove comment
export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    postId,
    i
  };
}

// photogrid visibility filter
export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}
