import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './views/wrapper/App';
import HomePage from './views/HomePage';
import CounterPage from './views/CounterPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
