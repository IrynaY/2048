import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Game from './components/game';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <header style={{backgroundColor: 'pink'}}>header</header>
    <Game/>
  </Provider>,
  document.getElementById('app')
);
