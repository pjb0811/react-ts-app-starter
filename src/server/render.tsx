import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';
import { createStore } from 'redux';
import { Provider  } from 'react-redux';
import counterApp from '../redux/reducers';
import { Helmet } from 'react-helmet';

const render = (location: string) => {
  const store = createStore(counterApp);
  const helmet = Helmet.renderStatic();
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={context}>
      <Provider store={store}>
        <App/>
      </Provider>
    </StaticRouter>
  );

  return {
    html,
    state: store.getState(),
    helmet,
  };
};

export default render;