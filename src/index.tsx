import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";

import App from '@src/pages/App';
import store from '@src/store/'

if (module.hot) module.hot.accept();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
