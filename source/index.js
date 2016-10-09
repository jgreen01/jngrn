import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

require('sass/index.scss');


const Page = createApp(React);

render(
  <Page />,
  document.getElementById('root')
);
