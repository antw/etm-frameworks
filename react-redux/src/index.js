import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Root from './components/Root';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import NotFound from './components/NotFound';

import './index.css';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Root}>
        <IndexRoute component={PhotoGrid} />
        <Route path="view/:postId" component={Single} />
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
