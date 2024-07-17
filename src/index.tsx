import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {WebSocketProvider} from "./providers/webSocketProvider";

import App from "./App";
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSocketProvider>
        <App />
      </WebSocketProvider>
    </Provider>
  </React.StrictMode>
);
