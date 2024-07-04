import { all, fork } from 'redux-saga/effects';

import appSagas from './app/sagas';
import itemsSagas from './items/sagas';
import walletSagas from './wallet/sagas';

export default function* rootSaga() {
  yield all([
    fork(appSagas),
    fork(itemsSagas),
    fork(walletSagas),
  ]);
}
