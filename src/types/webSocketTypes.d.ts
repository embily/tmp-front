export type WebSocketWallet = {
  energy: number;
  score: number;
};

export enum PIZZA_STATUS_TYPES {
  NOT_LOADED = 'NOT_LOADED',
  INITIALIZING = 'INITIALIZING',
  WS_OPENED = 'WS_OPENED',
  WS_DISCONNECTED = 'WS_DISCONNECTED',
  USER_AUTHORIZED = 'USER_AUTHORIZED',
  FAILED_AUTHORIZATION = 'FAILED_AUTHORIZATION',
}
export interface WebSocketContextApi {
  pizzaState: any;
  wallet: WebSocketWallet;
  init: () => void;
  sendTap: () => void;
}
