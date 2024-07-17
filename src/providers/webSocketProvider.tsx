import React, {FC, useState} from 'react'
import {DEFAULT_PIZZA, PizzaContext, WebSocketContext} from "../contexts/webSocketContext";
import {WebSocketContextApi} from "../types/webSocketTypes";
import {DEFAULT_BASE_ENERGY} from "../const/app.constants";
import {API_URL, K_ID, K_PRIVATE, K_PUBLIC, WS_API_URL, WS_URL} from "../const/general.constants";

// eslint-disable-next-line
const proto: string = "syntax=\"proto3\";\
  message Envelope {\
    string ID = 1;\
    string Type = 2;\
    bytes Message = 3;\
  }\
  message PingMessage {\
    string ts = 1;\
  }";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: FC<Props> = ({ children }: Props) => {
  const [wallet] = useState<WebSocketContextApi['wallet']>({
    energy: DEFAULT_BASE_ENERGY,
    score: 0,
  })

  if (DEFAULT_PIZZA) {
    if (!DEFAULT_PIZZA.Initialized) {
      DEFAULT_PIZZA.Init({
        wsURL: WS_URL,
        apiURL: API_URL,
        wsapiURL: WS_API_URL,
        kID: K_ID,
        kPublic: K_PUBLIC,
        kPrivate: K_PRIVATE,
        proto: proto
      });
    }
  }

  const sendTap = () => {
    console.log('WebSocketProvider sendTap');
  }

  return (
    <WebSocketContext.Provider
      value={{wallet, sendTap}}
    >
      <PizzaContext.Provider value={DEFAULT_PIZZA}>
        {children}
      </PizzaContext.Provider>
    </WebSocketContext.Provider>
)
}
