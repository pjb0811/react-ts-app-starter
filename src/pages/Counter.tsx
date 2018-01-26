import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../redux/modules/counter';

interface Props {
  CounterActions: typeof counterActions;
  num: number;
}

interface State {
  counter: number;
}

class Counter extends React.Component<Props> {
  render() {
    const { num, CounterActions } = this.props;
    return (
      <div>
      <h1>{num}</h1>
      <button onClick={CounterActions.increment}>+</button>
      <button onClick={CounterActions.decrement}>-</button>
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    num: state.counter
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions, dispatch)
  })
)(Counter);