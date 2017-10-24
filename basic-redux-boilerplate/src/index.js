/**
 * 
 * app.js
 * 
 * This is the entry file for the application, 
 * only setup and boilerplate code.
 */
import React from 'react';
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './rootReducer';

ReactDom.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'));