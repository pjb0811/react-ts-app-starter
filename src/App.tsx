import * as React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { Home, Test } from './pages';
import Menu from './components/Menu';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Menu/>
            <Route exact={true} path="/" component={Home}/>
            <Route path="/test" component={Test}/>
          </div>
        </BrowserRouter> 
      </div>
    );
  }
}

export default hot(module)(App);
