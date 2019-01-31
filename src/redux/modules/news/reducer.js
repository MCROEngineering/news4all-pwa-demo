import moment from 'moment';
import { getApiStatuses } from 'utils/redux';
import * as c from './constants';

const initialStatuses = {
  request: false,
  success: false,
  error: false,
};

const initialState = {
  all: {
    data: [],
    meta: {},
  },
  allApi: initialStatuses,
  updatedAt: '',
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case c.GET_ALL_NEWS.REQUEST:
      return {
        ...state,
        allApi: getApiStatuses('request'),
      };
    case c.GET_ALL_NEWS.SUCCESS: {
      const { articles } = action.payload;

      return {
        ...state,
        all: {
          ...state.all,
          data: articles,
        },
        allApi: getApiStatuses('success'),
        updatedAt: moment().fromNow(),
      };
    }
    case c.GET_ALL_NEWS.FAILURE:
      return {
        ...state,
        allApi: getApiStatuses('failure'),
      };

    default:
      return state;
  }
};

export default userReducer;
