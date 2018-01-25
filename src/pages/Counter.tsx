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