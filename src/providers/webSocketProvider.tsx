import React, {FC, useEffect, useState} from 'react'
import {DEFAULT_PIZZA, PizzaContext, WebSocketContext} from "../contexts/webSocketContext";
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../types/webSocketTypes.d";
import {API_URL, K_ID, K_PRIVATE, K_PUBLIC, WS_API_URL, WS_URL} from "../const/general.constants";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: FC<Props> = ({ children }: Props) => {
  const [timer, setTimer] = useState<number>(0);
  // @ts-ignore
  const webApp = window.Telegram?.WebApp;
  const [wallet, setWallet] = useState<WebSocketContextApi['wallet']>({
    points: 0,
    pointsHourlyRate: 0,
    rank: 0
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
    setWallet(prev => ({
      ...prev,
      points: prev.points + 1
    }));
    DEFAULT_PIZZA.WSTap();
  }

  const auth = () => {
    if (!webApp.initDataUnsafe || !webApp.initData) return;
    console.log('webApp', webApp);
    try {
      DEFAULT_PIZZA.WSAuth({
        provider: "tg",
        username: String(webApp.initDataUnsafe.user.id),
        password: String(webApp.initData),
      }, (envelope, message) => {
        if (message.client) {
          setPizzaState(PIZZA_STATUS_TYPES.USER_AUTHORIZED);
          getState();
        } else {
          setPizzaState(PIZZA_STATUS_TYPES.FAILED_AUTHORIZATION);
        }
      });
    } catch (e) {
      console.log('WSAuth error', e);
    }
  }

  const getState = () => {
    console.log('getState');
    DEFAULT_PIZZA.WSState();
  }

  useEffect(() => {
    const s = timer + 1;

    if (s >= 5) {
      setTimer(0);
      getState();
      return () => {};
    }

    const intervalId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTimer(s);
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [timer]);

  return (
    <WebSocketContext.Provider
      value={{pizzaState, setPizzaState, wallet, setWallet, init, sendTap}}
    >
      <PizzaContext.Provider value={DEFAULT_PIZZA}>
        {children}
      </PizzaContext.Provider>
    </WebSocketContext.Provider>
)
}
