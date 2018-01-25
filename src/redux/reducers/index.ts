import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
  value: 1,
  diff: 1
};

interface Action {
  type: string;
  diff: number;
}

const counter = (state = counterInitialState, action: Action) => {
  switch (action.type) {
    case INCREMENT:
    return Object.assign({}, state, {
      value: state.value + state.diff
    });
    case DECREMENT:
    return Object.assign({}, state, {
      value: state.value - state.diff
    });
    case SET_DIFF:
    return Object.assign({}, state, {
      diff: action.diff
    });
    default:
    return state;
  }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action: Action) => {
  switch (action.type) {
    default:
    return state;
  }
};

const counterApp = combineReducers({
  counter,
  extra
});

export default counterApp;