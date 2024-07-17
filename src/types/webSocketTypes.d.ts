export type WebSocketWallet = {
  energy: number;
  score: number;
};
export interface WebSocketContextApi {
  wallet: WebSocketWallet;
  sendTap: () => void
}
