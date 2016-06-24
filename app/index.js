import './app.global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React from 'react';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import {Provider} from 'react-redux';
import {Router, hashHistory} from 'react-router';
import {render} from 'react-dom';
import {syncHistoryWithStore} from 'react-router-redux';

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

const Root = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
);

render(
  <Root />,
  document.getElementById('root')
);
