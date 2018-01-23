import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home, Test } from './pages';
import Menu from './components/Menu';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div>
          <Menu/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/test" component={Test}/>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default hot(module)(App);
