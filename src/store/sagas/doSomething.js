// import { delay } from 'redux-saga';
import 'whatwg-fetch';
import { call, put, takeLatest } from 'redux-saga/effects';
import { DO_SOMETHING } from '../actions/actions';


function* fetchContent(action) {
  try {
    yield console.log('do something');
    // yield call(fetch('SOME_URL', action.data));
  } catch (e) {
    yield put('DO_SOMETHING_WITH ERROR', e);
  }
}

function* fetchContentSaga() {
  yield takeLatest(DO_SOMETHING, fetchContent);
}

export default fetchContentSaga;