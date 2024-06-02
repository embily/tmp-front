import appTypes, { AppStoreActionTypes } from './app/actionTypes';
import itemsTypes, { ItemsActionTypes } from './items/actionTypes';

const appActionTypes = {
  ...appTypes,
  ...itemsTypes
} as const;

export type AppActionTypes =
  | AppStoreActionTypes
  | ItemsActionTypes;

export default appActionTypes;
