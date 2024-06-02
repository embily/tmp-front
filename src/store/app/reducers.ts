import types, { AppActionTypes } from '../actionTypes';

export type AppReducerState = {
  energy: number;
  score: number;
  loading: {
    [key: string]: boolean;
  };
  error: {
    [key: string]: string;
  };
  alert: {
    message: string | null;
    messageType: string | null;
  };
};

const INITIAL_STATE: AppReducerState = {
  energy: 1000,
  score: 13666,
  loading: {},
  error: {},
  alert: {
    message: null,
    messageType: null,
  },
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
    case types.SET_LOADING: {
      if (state.loading[action.key] && !action.status) {
        const newState = { ...state };
        delete newState.loading[action.key];
        return newState;
      }
      if (!state.loading[action.key] && action.status) {
        return {
          ...state,
          loading: { ...state.loading, [action.key]: action.status },
        };
      }
      return state;
    }
    case types.SET_ERROR: {
      if (state.error[action.key] && !action.message) {
        const newState = { ...state };
        delete newState.error[action.key];
        return newState;
      }
      if (action.message) {
        return {
          ...state,
          error: { ...state.error, [action.key]: action.message },
        };
      }
      return state;
    }
    case types.SET_ALERT: {
      return {
        ...state,
        alert: {
          message: action.message,
          messageType: action.messageType,
        },
      };
    }
    default:
      return state;
  }
};

export default appReducers;
