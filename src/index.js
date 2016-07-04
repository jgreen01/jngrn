import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './stores';
import App from './containers/App';

import { MuiThemeProvider } from 'material-ui/styles';

// may or may not need 'react-tap-event-plugin'
// https://github.com/callemall/material-ui#react-tap-event-plugin
// http://stackoverflow.com/a/34015469/988941

const store = configureStore();

render(
 <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
