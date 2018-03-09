import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';
import { Helmet } from 'react-helmet';

// redux
// import { Provider } from 'react-redux';
// import store from '../redux/store';

// mobx
import { toJS } from 'mobx';
import { Provider } from 'mobx-react';
import Store from '../mobx/Store';

const render = async (location: string) => {
  const helmet = Helmet.renderStatic();
  const context = {};
  const store = new Store();

  const html = await ReactDOMServer.renderToString(
    <StaticRouter location={location} context={context}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );

  return {
    html,
    // redux
    // state: store.getState(),
    // mobx
    state: toJS(store),
    helmet,
  };
};

export default render;