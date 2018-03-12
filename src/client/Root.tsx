import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

// redux-thunk
import { Provider  } from 'react-redux';
import store from '../redux-thunk/store';

// // mobx
// import { Provider } from 'mobx-react';
// import Store from '../mobx/Store';
// const store = new Store();

const Root = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);

export default Root;