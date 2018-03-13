import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as counterActions from '../../redux-saga/actions/counter';
import * as postActions from '../../redux-saga/actions/post';

interface Props {
  counter: number;
  CounterActions: {
    incrementAsync: () => {};
    decrementAsync: () => {};
  };
  post: {
    toJS: Function;
  };
  PostActions: {
    requestPost: (id: number) => {};
  };
}

class ReduxSagaExample extends React.Component<Props> {
  componentWillMount() {
    const { counter } = this.props;
    this.getPost(counter);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.counter !== nextProps.counter) {
      this.getPost(nextProps.counter);
    }
  }

  getPost = async (id: number) => {
    const { PostActions } = this.props;
    PostActions.requestPost(id);
  }

  render() {
    const { post, counter, CounterActions } = this.props;
    const result = post.toJS();

    return (
      <div>
      <h1>{counter}</h1>
      <button onClick={CounterActions.incrementAsync}>+</button>
      <button onClick={CounterActions.decrementAsync}>-</button>
      {
        result.pending ?
          <h2>Loading...</h2> :
          result.error ?
            <h1>Error!</h1> : (
              <div>
                  <h1>{result.data.title}</h1>
                  <p>{result.data.body}</p>
              </div>
          )
      }
      </div>
    );
  }
}

export default connect(
  (state: Props) => ({
    counter: state.counter,
    post: state.post
  }),
  (dispatch) => ({
    CounterActions: bindActionCreators(counterActions as Props['CounterActions'], dispatch),
    PostActions: bindActionCreators(postActions as Props['PostActions'], dispatch)
  })
)(ReduxSagaExample);