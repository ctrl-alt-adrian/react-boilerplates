/**
 * 
 * index.js
 * 
 * This is the entry file for the application, 
 * only setup and boilerplate code.
 */
import React from 'react';
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';

import App from './components/app';
import reducers from './rootReducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const render = Component => {
  ReactDom.render(
    <AppContainer>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <Component />
      </Provider>
    </AppContainer>
    , document.getElementById('root')
  );
}

render(App)
if (module.hot) {
  module.hot.accept('./components/app', () => { render(App)
  });
}