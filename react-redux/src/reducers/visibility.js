function visibility(state = { filter: 'ALL' }, action) {
  if (action.type === 'SET_VISIBILITY_FILTER') {
    return { filter: action.filter };
  }

  return state;
}

export default visibility;
