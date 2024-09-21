import {FRIEND} from "./friends";
import {LOADING_TYPES} from "./app";
import {ITEM_TYPE} from "./items";

export type IState = {
  Points?: number;
  PointsHourlyRate?: number;
  Rank?: number;
  RankThreshold?: number;
  EnergyLevel?: number;
  TapThreshold?: number;
  TapLevel?: number;
  EnergyThreshold?: number;
  AvailableEnergy?: number;
  RefPointsToParent?: number;
  RefPointsToParentIfPremium?: number;
  RefPointsToInvitee?: number;
  PointsBonusHourlyRate?: number;
};

export type IClient = {
  uid: string | null;
  firstname?: string | null;
  lastname?: string | null;
  state?: IState;
};

export type IInventory = {
  EnergyBonus?: number;
  ID?: number;
  IncomeBonus?: number;
  PointsBonusHourlyRate?: number;
  PointsHourlyRate?: number;
  Price?: number;
  TapBonus?: number;
};

export type WebSocketWallet = {
  points: number;
  pointsHourlyRate: number;
  rank: number;
  rankThreshold: number;
  energyLevel: number;
  tapThreshold: number;
  tapLevel: number;
  energyThreshold: number;
  availableEnergy: number;
  refPointsToParent: number;
  refPointsToParentIfPremium: number;
  refPointsToInvitee: number;
  pointsBonusHourlyRate: number;
};

export type WebSocketProfile = {
  uid: string | null;
  firstname: string;
  lastname: string;
  state?: WebSocketWallet;
};

export interface WebSocketPaginator {
  limit: number;
  offset?: number;
  total?: number;
  order?: number;
}

export enum PIZZA_STATUS_TYPES {
  NOT_LOADED = 'NOT_LOADED',
  INITIALIZING = 'INITIALIZING',
  WS_OPENED = 'WS_OPENED',
  WS_DISCONNECTED = 'WS_DISCONNECTED',
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  FAILED_AUTHORIZATION = 'FAILED_AUTHORIZATION',
  WALLET_RECEIVED = 'WALLET_RECEIVED',
}
export interface WebSocketContextApi {
  pizzaState: PIZZA_STATUS_TYPES;
  setPizzaState: (payload: PIZZA_STATUS_TYPES) => void;
  profile: WebSocketProfile;
  wallet: WebSocketWallet;
  friends: { loaded: LOADING_TYPES; meta: WebSocketPaginator; list: FRIEND[]; }
  setWalletParams: (payload: WebSocketWallet) => void;
  init: () => void;
  sendTap: () => void;
  getInvitees: (payload: WebSocketPaginator) => void;
  getInventory: () => void;
  inventory: {
    loaded: LOADING_TYPES;
    list: ITEM_TYPE[];
  }
}
