import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './views/wrapper/App';
import HomePage from './views/HomePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
