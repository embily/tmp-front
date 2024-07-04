const CLICKER_CLICK = 'CLICKER_CLICK';
const CLICKER_REFILL = 'CLICKER_REFILL';
const CLICKER_RESTORE_ENERGY = 'CLICKER_RESTORE_ENERGY';
const GET_PICKUP_COINS = 'GET_PICKUP_COINS';

type ClickerClickType = {
  type: typeof CLICKER_CLICK;
  payload?: null;
};

type ClickerRefillType = {
  type: typeof CLICKER_REFILL;
  payload?: null;
};

type ClickerRestoreEnergyType = {
  type: typeof CLICKER_RESTORE_ENERGY;
  payload?: null;
};

export type GetPickUpCoins = {
  type: typeof GET_PICKUP_COINS;
  payload: any;
};

export type WalletActionTypes =
  | ClickerClickType
  | ClickerRefillType
  | ClickerRestoreEnergyType
  | GetPickUpCoins;

export default {
  CLICKER_CLICK,
  CLICKER_REFILL,
  CLICKER_RESTORE_ENERGY,
  GET_PICKUP_COINS,
} as const;
