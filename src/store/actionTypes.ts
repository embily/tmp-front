import appTypes, { AppStoreActionTypes } from './app/actionTypes';
import itemsTypes, { ItemsActionTypes } from './items/actionTypes';
import walletTypes, { WalletActionTypes } from './wallet/actionTypes';

const appActionTypes = {
  ...appTypes,
  ...itemsTypes,
  ...walletTypes
} as const;

export type AppActionTypes =
  | AppStoreActionTypes
  | ItemsActionTypes
  | WalletActionTypes;

export default appActionTypes;
