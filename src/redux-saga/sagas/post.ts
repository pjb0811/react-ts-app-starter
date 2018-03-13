import { call, put, takeEvery, fork } from 'redux-saga/effects';
import * as post from '../actions/post';
import API from '../api';

function* runRequestSuggest(action: { payload: object}) {
  try {
    const { data } = yield call(API.getPost as any, action.payload);
    yield put({ type: post.SUCCESS_POST, payload: { data } });
  } catch (error) {
    yield put({ type: post.FAILURE_POST, payload: { error } });
  }
}
function* handleRequestPost() {
  yield takeEvery(post.REQUEST_POST as any, runRequestSuggest);
}

export function* watchHandleRequestPost() {
  yield fork(handleRequestPost);
}