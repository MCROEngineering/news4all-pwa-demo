import { persistReducer, persistCombineReducers } from 'redux-persist';

import NewsReducer from 'redux/modules/news/reducer';
import storage from 'redux-persist/lib/storage';

const reducers = {
  news: persistReducer({
    key: 'news',
    storage,
    whitelist: ['all'],
  }, NewsReducer),
};

const appReducer = persistCombineReducers({
  key: 'root',
  storage,
}, reducers);

export default appReducer;
