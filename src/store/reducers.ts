import { combineReducers } from 'redux';

import appReducer from './app/reducers';
import itemsReducer from './items/reducers';
import walletReducer from './wallet/reducers';

const reducer = combineReducers({
  app: appReducer,
  items: itemsReducer,
  wallet: walletReducer
});

export default reducer;
