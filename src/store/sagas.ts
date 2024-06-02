import { all, fork } from 'redux-saga/effects';

import appSagas from './app/sagas';
import itemsSagas from './items/sagas';

export default function* rootSaga() {
  yield all([
    fork(appSagas),
    fork(itemsSagas),
  ]);
}
