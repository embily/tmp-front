import types, { AppActionTypes } from '../actionTypes';
import {
  DEFAULT_BASE_ENERGY,
  DEFAULT_BASE_SCORE,
  DEFAULT_ENERGY_PER_TAP, DEFAULT_RESTORE_ENERGY_PER_SECOND,
  DEFAULT_SCORE_PER_TAP
} from "../../const/app.constants";

export type WalletReducerState = {
  energy: number;
  score: number;
  pickupAmount: number;
};

const INITIAL_STATE: WalletReducerState = {
  energy: DEFAULT_BASE_ENERGY,
  score: DEFAULT_BASE_SCORE,
  pickupAmount: 0
};

const walletReducers = (state = INITIAL_STATE, action: AppActionTypes): WalletReducerState => {
  switch (action.type) {
    case types.CLICKER_CLICK:
      return {
        ...state,
        energy: state.energy - DEFAULT_ENERGY_PER_TAP,
        score: state.score + DEFAULT_SCORE_PER_TAP,
      };
    case types.CLICKER_REFILL:
      return {
        ...state,
        energy: DEFAULT_BASE_ENERGY,
      };
    case types.CLICKER_RESTORE_ENERGY:
      const newEnergy = state.energy + DEFAULT_RESTORE_ENERGY_PER_SECOND;
      return {
        ...state,
        energy: newEnergy > DEFAULT_BASE_ENERGY ? DEFAULT_BASE_ENERGY : newEnergy,
      };
    case types.GET_PICKUP_COINS:
      const newScore = state.score + action.payload.amount;
      return {
        ...state,
        score: newScore,
      };
    default:
      return state;
  }
};

export default walletReducers;
