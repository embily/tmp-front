import {Context, createContext} from 'react';
import {WebSocketContextApi} from '../types/webSocketTypes';

export type PizzaInitParams = {
  wsURL: string;
  apiURL: string;
  wsapiURL: string;
  kID: string;
  kPublic: string;
  kPrivate: string;
  onWSOpen: () => void;
  onWSClose: () => void;
};

export type PizzaType = {
  Initialized: boolean;
  Init: (params: PizzaInitParams) => void;
  On: (name: string, func: (message: any) => void) => void;
  WSPing: (result: any) => void;
  WSAuth: (payload: { provider: string, username: string, password: string }, callback: (envelope: any, message: any) => void) => void;
  LastPingTime: number;
};

// @ts-ignore
export const DEFAULT_PIZZA: PizzaType = typeof window !== 'undefined' && window?.Pizza ? window.Pizza : null;
export const PizzaContext: Context<PizzaType> = createContext<typeof DEFAULT_PIZZA>(DEFAULT_PIZZA);
export const WebSocketContext: Context<WebSocketContextApi | undefined> = createContext<WebSocketContextApi | undefined>(undefined);

