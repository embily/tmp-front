import { combineReducers } from 'redux';

import appReducer from './app/reducers';
import itemsReducer from './items/reducers';

const reducer = combineReducers({
  app: appReducer,
  items: itemsReducer
});

export default reducer;
