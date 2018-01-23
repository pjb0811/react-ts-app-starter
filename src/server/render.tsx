import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from '../App';

const render = (location: string) => ReactDOMServer.renderToString(
  <StaticRouter location={location}>
    <App/>
  </StaticRouter>
);

export default render;