import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import comments from './comments';
import posts from './posts';
import visibility from './visibility';

const rootReducer = combineReducers({
  comments,
  posts,
  visibility,
  routing: routerReducer
});

export default rootReducer;
