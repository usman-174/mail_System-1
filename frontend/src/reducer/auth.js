import { AUTH, LOGOUT, AUTH_ERROR } from "../actionTypes";

const authReducer = (state = { authData: null, authError: null }, action) => {
  switch (action.type) {
    case AUTH:
      return { ...state, authError: null, authData: action?.data };
    case AUTH_ERROR:
      return { ...state, authError: action?.data };
    case LOGOUT:
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
