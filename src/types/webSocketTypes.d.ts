export type WebSocketWallet = {
  points: number;
  pointsHourlyRate: number;
  rank: number;
  rankThreshold: number;
};

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
  wallet: WebSocketWallet;
  setWalletParams: (payload: WebSocketWallet) => void;
  init: () => void;
  sendTap: () => void;
}
