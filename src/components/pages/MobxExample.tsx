import * as React from 'react';
import { observer, inject } from 'mobx-react';

interface Props {
  store: {
    counter: number;
    post: {
      status: string;
      data: {
        title: string;
        body: string;
      }
    }
    increase: () => {};
    decrease: () => {};
    fetchPostData: Function;
  };
}

@inject('store')
@observer
class MobxExample extends React.Component<Props> {

  componentWillMount() {
    const { store } = this.props;
    store.fetchPostData(store.counter);
  }

  render() {
    const { store } = this.props;
    const { counter, post } = store;

    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={store.increase}>+</button>
        <button onClick={store.decrease}>-</button>
        {
          post.status === 'pending' ?
            <h2>Loading...</h2> :
            post.status === 'error' ?
              <h1>Error!</h1> : (
                <div>
                    <h1>{post.data.title}</h1>
                    <p>{post.data.body}</p>
                </div>
            )
        }
      </div>
    );
  }
}

export default MobxExample;