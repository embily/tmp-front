import React, { FC, useState } from 'react';
import {CHANNEL_URL} from '../const/general.constants';

const SocketTest: FC = () => {

  const [ws, setWS] = useState<WebSocket | null>(null);
  const [wsStatus, setWsStatus] = useState('closed');
  const [lastMsg, setLastMsg] = useState('');

  const openWebSocket = () => {
    if ("WebSocket" in window)  {
      const newWS = new WebSocket(CHANNEL_URL);
      newWS.onopen = () => {
        console.log("WebSocket opened.");
        setWsStatus('opened');
        setWS(newWS);
      };

      newWS.onmessage = (evt) => {
        const msg = evt.data;
        console.log("Message received: " + msg);
        setLastMsg(msg);
      };
      newWS.onclose = () => {
        console.log("WebSocket closed.");
        setWsStatus('closed');
      };
    } else {
      console.log("This browser does not support WebSockets.");
    }
  };
  const closeWebSocket = () => {
    if (ws) {
      ws.close();
    }
  }

  const pingWebSocket = () => {
    console.log('pingWebSocket', ws);
    if (ws) {
      ws.send("Ping!");
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => openWebSocket()}>Open WebSocket</button>
        <button onClick={() => pingWebSocket()}>Ping WebSocket</button>
        <button onClick={() => closeWebSocket()}>Close WebSocket</button>
      </div>
      <div>
        <span>Connect status:</span>
        <span>{wsStatus}</span>
      </div>
      <div>
        <span>Last Message:</span>
        <span>{lastMsg}</span>
      </div>
    </div>
  );
};

export default SocketTest;
