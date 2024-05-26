const CLICKER_CLICK = 'app/CLICKER_CLICK';
const CLICKER_REFILL = 'app/CLICKER_REFILL';
const CLICKER_RESTORE_ENERGY = 'app/CLICKER_REFILL';

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

export type AppStoreActionTypes =
  | ClickerClickType
  | ClickerRefillType
  | ClickerRestoreEnergyType;

export default {
  CLICKER_CLICK,
  CLICKER_REFILL,
  CLICKER_RESTORE_ENERGY,
} as const;
