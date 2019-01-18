import { getAllNewsRequest } from 'services/api';

import * as ac from './actionsCreators';

export function getNews() {
  return async (dispatch) => {
    dispatch(ac.getAll.request());
    try {
      const response = await getAllNewsRequest();

      return dispatch(ac.getAll.success(response));
    } catch (err) {
      return dispatch(ac.getAll.error(err));
    }
  };
}
