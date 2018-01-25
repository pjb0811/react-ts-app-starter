import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import counterApp from '../redux/reducers';
const store = createStore(counterApp);

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

export default Root;