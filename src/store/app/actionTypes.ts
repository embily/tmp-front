import types from '../actionTypes';
import {ITEM_TYPE} from "../../types/items";

const SET_ITEM = 'app/SET_ITEM';
const CLEAR = 'app/CLEAR';
const SET_LOADING = 'app/SET_LOADING';
const SET_ERROR = 'app/SET_ERROR';
const SET_ALERT = 'app/SET_ALERT';
const OPEN_MODAL = 'app/OPEN_MODAL';
const CLOSE_MODAL = 'app/CLOSE_MODAL';

type SetItemType = {
  type: typeof SET_ITEM;
  payload: ITEM_TYPE;
};

export type ClearRequest = {
  type: typeof CLEAR;
};

interface SetLoading {
  type: typeof types.SET_LOADING;
  key: string;
  status: boolean;
}
interface SetError {
  type: typeof types.SET_ERROR;
  key: string;
  message: null | string;
}

interface SetAlert {
  type: typeof types.SET_ALERT;
  message: string | null;
  messageType: string | null;
}

type OpenModalType = {
  type: typeof OPEN_MODAL;
  payload?: any;
};
type CloseModalType = {
  type: typeof CLOSE_MODAL;
  payload?: null;
};

export type AppStoreActionTypes =
  | SetItemType
  | ClearRequest
  | SetLoading
  | SetError
  | SetAlert
  | OpenModalType
  | CloseModalType;

export default {
  SET_ITEM,
  CLEAR,
  SET_LOADING,
  SET_ERROR,
  SET_ALERT,
  OPEN_MODAL,
  CLOSE_MODAL,
} as const;
