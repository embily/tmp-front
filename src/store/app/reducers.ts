import types, { AppActionTypes } from '../actionTypes';

export type AppReducerState = {
  energy: number;
  score: number;
};

const INITIAL_STATE: AppReducerState = {
  energy: 1000,
  score: 13666,
};

const appReducers = (state = INITIAL_STATE, action: AppActionTypes): AppReducerState => {
  switch (action.type) {
    case types.CLICKER_CLICK:
      return {
        ...state,
        energy: state.energy - 1,
        score: state.score + 1,
      };
    case types.CLICKER_REFILL:
      return {
        ...state,
        energy: 1000,
      };
    default:
      return state;
  }
};

export default appReducers;
