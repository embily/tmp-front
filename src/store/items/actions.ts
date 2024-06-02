import types from '../actionTypes';

// Type returns type of action
const getItems = () => ({
  type: types.GET_ITEMS_REQUEST,
  payload: null,
});

export {
  getItems,
};
