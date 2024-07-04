import types, { AppActionTypes } from '../actionTypes';
import {PROFILE_TYPE} from "../../types/items";
import {profileMock} from "../../const/mocks.constants";
// @ts-ignore
import {cloneDeep, findIndex} from 'lodash';

export type AppReducerState = {
  profile: PROFILE_TYPE;
  modal: any;
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
  profile: profileMock,
  modal: null,
  loading: {},
  error: {},
  alert: {
    message: null,
    messageType: null,
  },
};

const appReducers = (state = INITIAL_STATE, action: AppActionTypes): AppReducerState => {
  switch (action.type) {
    case types.SET_ITEM:
      const setItemProfile = cloneDeep(state.profile);
      const itemIndex = findIndex(setItemProfile.dressed, {type: action.payload.type});
      setItemProfile.dressed[itemIndex] = action.payload;
      return {
        ...state,
        profile: setItemProfile
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
    case types.OPEN_MODAL:
      const newModal = action.payload;
      newModal.opened = true;
      return {
        ...state,
        modal: newModal,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export default appReducers;
