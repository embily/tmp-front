import {Context, createContext} from 'react';
import {WebSocketContextApi, WebSocketPaginator, WebSocketProfile} from '../types/webSocketTypes';

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
  On: (name: string, func: (envelope: any, message: any) => void) => void;
  WSMe: (callback: (envelope: any, message: any) => void) => void;
  WSTap: () => void;
  WSState: () => void;
  WSInvitees: (payload: WebSocketPaginator, callback: (envelope: any, message: {meta?: WebSocketPaginator; clients?: WebSocketProfile[]}) => void) => void;
  WSAuth: (payload: { provider: string, username: string, password: string }, callback: (envelope: any, message: any) => void) => void;
  LastPingTime: number;
};

// @ts-ignore
export const DEFAULT_PIZZA: PizzaType = typeof window !== 'undefined' && window?.Pizza ? window.Pizza : null;
export const PizzaContext: Context<PizzaType> = createContext<typeof DEFAULT_PIZZA>(DEFAULT_PIZZA);
export const WebSocketContext: Context<WebSocketContextApi | undefined> = createContext<WebSocketContextApi | undefined>(undefined);

