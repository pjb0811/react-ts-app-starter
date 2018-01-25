import * as React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';

interface ButtonsProps {
  onIncrement: () => {};
  onDecrement: () => {};
}

class Buttons extends React.Component<ButtonsProps> {
  render() {
    return (
      <div>
      <button type="button" onClick={this.props.onIncrement}>
      +
      </button>
      <button type="button" onClick={this.props.onDecrement}>
      -
      </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch: Function) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
  };
};

export default connect(undefined, mapDispatchToProps)(Buttons);