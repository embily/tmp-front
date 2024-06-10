import types from '../actionTypes';
import {ITEM_TYPE} from "../../types/items";

// Type returns type of action
const clickerClick = () => ({
  type: types.CLICKER_CLICK,
  payload: null,
});

const clickerRefill = () => ({
  type: types.CLICKER_REFILL,
  payload: null,
});

const clickerRestoreEnergy = () => ({
  type: types.CLICKER_RESTORE_ENERGY,
  payload: null,
});

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

export {
  clickerClick,
  clickerRefill,
  clickerRestoreEnergy,
  setItem,
  setLoading,
  setError,
  setAlert,
  clear
};
