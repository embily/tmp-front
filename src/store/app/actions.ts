import types from '../actionTypes';

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

export {
  clickerClick,
  clickerRefill,
  clickerRestoreEnergy
};
