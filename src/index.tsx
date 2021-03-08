import React from 'react';
import ReactDOM from 'react-dom';

import App from '@src/pages/App';

if (module.hot) module.hot.accept();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
