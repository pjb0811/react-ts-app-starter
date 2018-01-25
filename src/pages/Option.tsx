import * as React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../redux/actions';

interface OptionProps {
  onUpdateDiff: (value: number) => {};
}

interface OptionState {
  diff: string;
}

interface OnChangeDiffEvent {
  target: {
    value: string;
  };
}

class Option extends React.Component<OptionProps, OptionState> {
  constructor(props: OptionProps) {
    super(props);

    this.state = {
      diff: '1'
    };

    this.onChangeDiff = this.onChangeDiff.bind(this);
  }

  render() {
    return (
      <div>
      <input type="text" value={this.state.diff} onChange={this.onChangeDiff} />
      </div>
    );
  }

  onChangeDiff(e: OnChangeDiffEvent) {

    /* if (isNaN(e.target.value)) {
      return;
    } */

    this.setState({ diff: e.target.value });

    if (e.target.value === '') {
      this.setState({ diff: '0' });
    }
    this.props.onUpdateDiff(parseInt(e.target.value, 10));
  }
}

let mapDispatchToProps = (dispatch: Function) => {
  return {
    onUpdateDiff: (value: number) => dispatch(setDiff(value))
  };
};

export default connect(undefined, mapDispatchToProps)(Option);