import { FETCH_USER, FETCH_USERS } from '../actions/types';
import _ from 'lodash';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        ..._.mapKeys(action.payload, "_id")
      };
    default:
      return {
        ...state
      };
  }
};
