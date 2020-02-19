import {
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOGOUT,
  // REGISTER_FAIL,
  // LOGIN_FAIL,
} from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: false,
  user: null,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
    case REGISTER_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
