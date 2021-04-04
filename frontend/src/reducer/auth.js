import { AUTH, LOGOUT } from "../actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("person", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.clear("person");
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
