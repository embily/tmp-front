import React, {useEffect} from 'react';
import { ReactComponent as LoadingSVG } from "../../assets/images/loading.svg";
import { LoadingStyles } from './Loading.Styles';
import {PIZZA_STATUS_TYPES, WebSocketContextApi} from "../../types/webSocketTypes.d";
import useWebSocket from "../../hooks/useWebSocket";

const Loading: React.FC = () => {
  const webSocket: WebSocketContextApi = useWebSocket();
  const {init, pizzaState} = webSocket;

  useEffect(() => {
    if (pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
      init();
    }
  }, [pizzaState]);

  return (
    <LoadingStyles>
      <div className="image">
        <LoadingSVG/>
        {
          pizzaState !== PIZZA_STATUS_TYPES.USER_AUTHORIZED ? (
            <span className="state">{pizzaState}</span>
          ) : null
        }
      </div>
    </LoadingStyles>
  );
};

export default Loading;
