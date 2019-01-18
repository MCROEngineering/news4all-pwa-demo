import { generateAsyncActionCreator } from 'utils/redux';
import * as c from './constants';

export const getAll = generateAsyncActionCreator(c.GET_ALL_USERS);
