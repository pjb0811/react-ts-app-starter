import * as React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import * as counterActions from '../redux/modules/counter';

interface Props {
  // CounterActions: {};
  num: number;
}

interface State {
  counter: number;
}

class Counter extends React.Component<Props> {
  render() {
    const { num } = this.props;
    console.log(this.props);
    return (
      <div>
      <h1>{num}</h1>
      {/* <button onClick={CounterActions.increment}>+</button>
      <button onClick={CounterActions.decrement}>-</button> */}
      </div>
    );
  }
}

export default connect(
  (state: State) => ({
    num: state.counter
  }),
)(Counter);

/*
import * as React from 'react';
import { connect } from 'react-redux';

interface CounterProps {
  value: number;
}

interface CounterState {
  counter: {
    value: number;
  };
}

class Counter extends React.Component<CounterProps, CounterState> {
  render() {
    return (
      <h1>VALUE: {this.props.value}</h1>
    );
  }
}

let mapStateToProps = (state: CounterState) => {
  return {
    value: state.counter.value
  };
};

export default connect(mapStateToProps)(Counter);
*/