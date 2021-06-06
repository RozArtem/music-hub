
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { store } from './store';
import React, { StrictMode } from 'react';


ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,

  document.getElementById('root')
);