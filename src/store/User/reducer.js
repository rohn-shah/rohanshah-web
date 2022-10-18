import {
  FETCH_USER_START,
  FETCH_USER_COMPLETE,
  FETCH_USER_ERROR,
} from './types';

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_START:
      return { isFetching: true };
    case FETCH_USER_COMPLETE:
      return { isFetching: false, ...action.payload.user };
    case FETCH_USER_ERROR:
      return { isFetching: false };
    default:
      return state;
  }
};
