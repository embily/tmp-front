import types from '../actionTypes';
import {ITEM_TYPE} from "../../types/items";

const setItem = (payload: ITEM_TYPE) => ({
  type: types.SET_ITEM,
  payload,
});

const setLoading = (key: string, status: boolean) => ({
  type: types.SET_LOADING,
  key,
  status,
});

const setError = (key: string, message: string | null) => ({
  type: types.SET_ERROR,
  key,
  message,
});

const setAlert = (message: string | null, messageType: string | null) => ({
  type: types.SET_ALERT,
  message,
  messageType,
});

const clear = () => ({
  type: types.CLEAR,
});

const openModal = (payload: any) => ({
  type: types.OPEN_MODAL,
  payload,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

export {
  setItem,
  setLoading,
  setError,
  setAlert,
  clear,
  openModal,
  closeModal
};
