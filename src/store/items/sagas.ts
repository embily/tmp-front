import { all, put, takeLatest } from 'redux-saga/effects';

import { setLoading } from '../app/actions';
import {
  GetItemsRequest,
} from './actionTypes';
import types from '../actionTypes';
import {itemsMock} from "../../const/mocks.constants";

function* getItems({ payload }: GetItemsRequest) {
  yield put(setLoading(types.GET_ITEMS_REQUEST, true));
  try {
    const res: any = {
      items: itemsMock,
      meta: {
        page: 1,
        limit: 1,
        total_count: 1
      }
    };
    yield all([
      put({
        type: types.GET_ITEMS_SUCCESS,
        payload: {
          items: res.items,
          meta: res.meta
        }
      }),
      put(setLoading(types.GET_ITEMS_REQUEST, false)),
    ]);
  } catch (e: any) {
  }
}

export default function* itemsSagas() {
  yield takeLatest(types.GET_ITEMS_REQUEST, getItems);
}
