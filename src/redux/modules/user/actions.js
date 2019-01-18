import { getAllRequest } from 'services/user';

import * as ac from './actionsCreators';

export function getAll() {
  const meta = 'l=1000&s=3'; // By default get 1k and sort them alphabetically

  // SORT_NONE = 0;
  // SORT_NAME = 1;
  // SORT_EMAIL = 2;
  // SORT_FIRST_NAME = 3; <--- this is the one used
  // SORT_LAST_NAME = 4;

  return async (dispatch) => {
    dispatch(ac.getAll.request());
    try {
      const response = await getAllRequest(meta);
      return dispatch(ac.getAll.success(response));
    } catch (err) {
      return dispatch(ac.getAll.error(err));
    }
  };
}
