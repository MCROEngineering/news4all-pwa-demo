import { combineReducers } from 'redux';

import NewsReducer from 'redux/modules/news/reducer';

const reducers = {
  news: NewsReducer,
};

export default combineReducers(reducers);
