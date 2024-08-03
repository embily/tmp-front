import { useEffect } from 'react';
import usePizza from './usePizza';
import useWebSocket from './useWebSocket';
import {PizzaType} from "../contexts/webSocketContext";
import {WebSocketContextApi} from "../types/webSocketTypes";

interface IStore extends PizzaType, WebSocketContextApi {}

const useStore: () => readonly [IStore] = () => {
  const pizza: PizzaType = usePizza();
  const webSocket: WebSocketContextApi = useWebSocket();
  const store: IStore = {...pizza, ...webSocket};


  useEffect(() => {
    if (!pizza) return;
    const eventHandler = (envelope: any, message: any) => {
      console.log('RState envelope', envelope);
      console.log('RState message', message);
      webSocket.setWallet({
        points: message.state?.Points || 0
      })
    };
    console.log('initializing RState');
    pizza.On('RState', eventHandler);
  }, [pizza]);

  return [store] as const;
};

export default useStore;
