import types, { AppActionTypes } from '../actionTypes';
import {ITEM_TYPE} from "../../types/items";
import {LOADING_TYPES} from "../../types/app.d";
import {itemsMock} from "../../const/mocks.constants";
// @ts-ignore
import {cloneDeep, pickBy, keys, findIndex} from 'lodash';

export type ItemsReducerState = {
  list: ITEM_TYPE[];
  page: number;
  limit: number;
  total_count: number;
  loaded: LOADING_TYPES;
  answer: any;
};

const INITIAL_STATE: ItemsReducerState = {
  list: itemsMock,
  page: 0,
  limit: 0,
  total_count: 0,
  loaded: LOADING_TYPES.NOT_LOADED,
  answer: {},
};

const itemsReducers = (state = INITIAL_STATE, action: AppActionTypes): ItemsReducerState => {
  switch (action.type) {
    case types.GET_ITEMS_REQUEST:
      return {
        ...state,
        list: [],
        page: 0,
        limit: 0,
        total_count: 0,
        loaded: LOADING_TYPES.LOADING
      };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        list: action.payload.items,
        page: action.payload.meta.page,
        limit: action.payload.meta.limit,
        total_count: action.payload.meta.total_count,
        loaded: LOADING_TYPES.LOADED,
        answer: action.payload.answer || {}
      };
    case types.GET_ITEMS_FAILURE:
      return {
        ...state,
        answer: action.payload || {},
      };
    case types.SET_ITEM:
      const setItemList = cloneDeep(state.list);
      const itemIndexes = keys(pickBy(setItemList, {type: action.payload.type}));
      itemIndexes.forEach((itemIndex: number) => {
        setItemList[itemIndex].selected = false;
      })
      const selectedItem = findIndex(setItemList, action.payload);
      setItemList[selectedItem].selected = true;
      return {
        ...state,
        list: setItemList,
      };
    default:
      return state;
  }
};

export default itemsReducers;
