import * as React from 'react';
import { Route } from 'react-router-dom';
import {
  Home, About, ReduxThunkExample, ReduxSagaExample, MobxExample
} from './components/pages';
import Menu from './components/Menu';
import { Helmet } from 'react-helmet';

interface Props {}

class App extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <title>React + TypeScript App Starter</title>
        </Helmet>
        <div>
          <Menu/>
          <Route exact={true} path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/reduxSagaExample" component={ReduxSagaExample}/>
          <Route path="/reduxThunkExample" component={ReduxThunkExample}/>
          <Route path="/mobxExample" component={MobxExample}/>
        </div>
      </div>
    );
  }
}

export default App;
