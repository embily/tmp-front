import {FRIEND} from "./friends";
import {LOADING_TYPES} from "./app";

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
};

export type WebSocketProfile = {
  id: number | null;
  uid: string | null;
  name?: string | null;
  balance?: number | null;
  profitPerHour?: number | null;
  avatar?: string | null;
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
  friends: { loaded: LOADING_TYPES; list: FRIEND[]; }
  setWalletParams: (payload: WebSocketWallet) => void;
  init: () => void;
  sendTap: () => void;
  getInvitees: (payload: WebSocketPaginator) => void;
}
