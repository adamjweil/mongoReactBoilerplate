import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import { AUTH_ERROR, FETCH_USER } from './types'

export const fetchUser = (history) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};
