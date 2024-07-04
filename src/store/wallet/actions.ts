import types from '../actionTypes';

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

const getPickUpCoins = (payload: any) => ({
  type: types.GET_PICKUP_COINS,
  payload,
});

export {
  clickerClick,
  clickerRefill,
  clickerRestoreEnergy,
  getPickUpCoins,
};
