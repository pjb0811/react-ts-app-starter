import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './client/Root';
import { AppContainer  } from 'react-hot-loader';
import registerServiceWorker from './registerServiceWorker';

const render = (Component: any) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  );
};

render(Root);

if ((module as any).hot) {
  (module as any).hot.accept('./client/Root', () => { 
    render(Root);
  });
}
registerServiceWorker();
