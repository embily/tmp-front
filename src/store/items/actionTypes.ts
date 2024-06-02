const GET_ITEMS_REQUEST = 'GET_ITEMS_REQUEST';
const GET_ITEMS_SUCCESS = 'GET_ITEMS_SUCCESS';
const GET_ITEMS_FAILURE = 'GET_ITEMS_FAILURE';

type GetItemsActionType = {
  type: typeof GET_ITEMS_SUCCESS | typeof GET_ITEMS_FAILURE;
  payload?: any;
};

export type GetItemsRequest = {
  type: typeof GET_ITEMS_REQUEST;
  payload: any;
};

export type GetItemsTypes = GetItemsActionType | GetItemsRequest;

export type ItemsActionTypes =
  | GetItemsTypes;

export default {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} as const;
