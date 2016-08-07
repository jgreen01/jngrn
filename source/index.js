import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

require('sass/index.scss');

const App = createApp(React);

render(
  <App />,
  document.getElementById('root')
);
