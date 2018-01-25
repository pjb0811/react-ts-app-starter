import * as React from 'react';
import { Route } from 'react-router-dom';
import { Home, Test, Counter, Option, Buttons } from './pages';
import Menu from './components/Menu';
import { hot } from 'react-hot-loader';
import { Helmet } from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <title>React App Starter</title>
        </Helmet>
        <div>
          <Menu/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/test" component={Test}/>
          <Counter/>
          <Option/>
          <Buttons/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
