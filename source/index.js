import React from 'react';
import { render } from 'react-dom';
import createApp from './App';

import BurgerMenu from 'react-burger-menu';

require('sass/index.scss');

const menuIcon = require('images/menu.svg');

const Menu = BurgerMenu.pushRotate;

const Page = createApp(React);

render(
  <div id="outter-container">
    <Menu
      pageWrapId="page-container"
      outerContainerId="outer-container"
      customBurgerIcon={ <img src={menuIcon} /> }
      >
      <h1> testing </h1>
    </Menu>
    <Page />
  </div>,
  document.getElementById('root')
);
