import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { AppContextProvider } from './Helpers/Context';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);