import {Context, createContext} from 'react';
import {WebSocketContextApi} from '../types/webSocketTypes';

export type PizzaInitParams = {
  wsURL: string;
  apiURL: string;
  wsapiURL: string;
  kID: string;
  kPublic: string;
  kPrivate: string;
  proto: string;
};

export type PizzaType = {
  Initialized: boolean;
  Init: (params: PizzaInitParams) => void;
  On: (name: string, func: (message: any) => void) => void;
  WSPing: (ctx: any, func: (result: any) => void) => void;
};

// @ts-ignore
export const DEFAULT_PIZZA: PizzaType = typeof window !== 'undefined' && window?.Pizza ? window.Pizza : null;
export const PizzaContext: Context<PizzaType> = createContext<typeof DEFAULT_PIZZA>(DEFAULT_PIZZA);
export const WebSocketContext: Context<WebSocketContextApi | undefined> = createContext<WebSocketContextApi | undefined>(undefined);

