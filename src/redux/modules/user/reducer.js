import config from 'config';
import { getApiStatuses } from 'utils/redux';
import { moveArrayElementToFirstPosition } from 'utils/common';
import * as c from './constants';

const { userTypes: { ROBOT } } = config;

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
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case c.GET_ALL_USERS.REQUEST:
      return {
        ...state,
        allApi: getApiStatuses('request'),
      };
    case c.GET_ALL_USERS.SUCCESS: {
      const { data } = action.payload;

      data.map((user) => {
        const userToReturn = user;

        if (user.title === ROBOT) {
          userToReturn.firstName = 'Unassigned';
          userToReturn.lastName = '';
        }
        return userToReturn;
      });

      const unassignedItem = data.filter(user => user.title === ROBOT);
      const dataToReturn = moveArrayElementToFirstPosition(data, unassignedItem[0]);

      return {
        ...state,
        all: {
          ...state.all,
          data: dataToReturn,
        },
        allApi: getApiStatuses('success'),
      };
    }
    case c.GET_ALL_USERS.FAILURE:
      return {
        ...state,
        allApi: getApiStatuses('failure'),
      };

    default:
      return state;
  }
};

export default userReducer;
