import { useEffect } from 'react';
import usePizza from './usePizza';
import useWebSocket from './useWebSocket';
import {PizzaType} from "../contexts/webSocketContext";
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../types/webSocketTypes.d";

interface IStore extends PizzaType, WebSocketContextApi {}

const useStore: () => readonly [IStore] = () => {
  const pizza: PizzaType = usePizza();
  const webSocket: WebSocketContextApi = useWebSocket();
  const store: IStore = {...pizza, ...webSocket};


  useEffect(() => {
    if (!pizza) return;
    const eventHandler = (envelope: any, message: any) => {
      console.log('RState message', message);
      webSocket.setPizzaState(PIZZA_STATUS_TYPES.WALLET_RECEIVED)
      webSocket.setWalletParams({
        points: message.state?.Points || 0,
        pointsHourlyRate: message.state?.PointsHourlyRate || 0,
        rank: message.state?.Rank || 0,
        rankThreshold: message.state?.RankThreshold || 0,
      })
    };

    pizza.On('RState', eventHandler);
  }, [pizza]);

  return [store] as const;
};

export default useStore;
