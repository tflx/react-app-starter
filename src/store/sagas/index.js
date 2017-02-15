import fetchContentSaga from './doSomething';

function* sagas() {
  yield [
    fetchContentSaga(),
  ];
}

export default sagas;