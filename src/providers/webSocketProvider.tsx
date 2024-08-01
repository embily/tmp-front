import React, {FC, useState} from 'react'
import {DEFAULT_PIZZA, PizzaContext, WebSocketContext} from "../contexts/webSocketContext";
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../types/webSocketTypes.d";
import {DEFAULT_BASE_ENERGY} from "../const/app.constants";
import {API_URL, K_ID, K_PRIVATE, K_PUBLIC, WS_API_URL, WS_URL} from "../const/general.constants";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: FC<Props> = ({ children }: Props) => {
  // @ts-ignore
  const webApp = window.Telegram?.WebApp;
  const [wallet] = useState<WebSocketContextApi['wallet']>({
    energy: DEFAULT_BASE_ENERGY,
    score: 0,
  });
  const [pizzaState, setPizzaState] = useState<PIZZA_STATUS_TYPES>(PIZZA_STATUS_TYPES.NOT_LOADED);

  const init = () => {
    if (DEFAULT_PIZZA) {
      setPizzaState(PIZZA_STATUS_TYPES.INITIALIZING);
      if (!DEFAULT_PIZZA.Initialized && pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
        DEFAULT_PIZZA.Init({
          wsURL: WS_URL,
          apiURL: API_URL,
          wsapiURL: WS_API_URL,
          kID: K_ID,
          kPublic: K_PUBLIC,
          kPrivate: K_PRIVATE,
          onWSOpen: onWSOpenCallback,
          onWSClose: onWSCloseCallback,
        });
      }
    }
  }

  const onWSOpenCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_OPENED);
    auth();
  }

  const onWSCloseCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_DISCONNECTED);
  }

  const sendTap = () => {
    console.log('WebSocketProvider sendTap');
    DEFAULT_PIZZA.WSPing((result: any) => {
      console.log('tap callback', result);
    });
  }

  const auth = () => {
    if (!webApp.initDataUnsafe || !webApp.initData) return;

    try {
      DEFAULT_PIZZA.WSAuth({
        provider: "tg",
        username: String(webApp.initDataUnsafe.user.id),
        password: String(webApp.initData),
      }, (envelope, message) => {
        console.log('envelope', envelope);
        console.log('message', message);
        if (message.client) {
          console.log("Authentication success!");
          setPizzaState(PIZZA_STATUS_TYPES.USER_AUTHORIZED);
        } else {
          console.log("Authentication fail!");
          setPizzaState(PIZZA_STATUS_TYPES.FAILED_AUTHORIZATION);
        }
      });
    } catch (e) {
      console.log('WSAuth error', e);
    }

  }

  return (
    <WebSocketContext.Provider
      value={{pizzaState, wallet, init, sendTap}}
    >
      <PizzaContext.Provider value={DEFAULT_PIZZA}>
        {children}
      </PizzaContext.Provider>
    </WebSocketContext.Provider>
)
}
