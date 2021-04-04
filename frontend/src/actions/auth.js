import { AUTH, LOGOUT, AUTH_ERROR } from "../actionTypes";
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("/users/signin", formData);
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, data: error.response.data });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("/users/signup", formData);
    console.log(data);
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    dispatch({ type: AUTH_ERROR, data: error.response.data });
  }
};
export const me = () => async (dispatch) => {
  try {
    const { data } = await API.get("/users/me");

    if (data?.user) {
      dispatch({ type: AUTH, data });
    }
  } catch (error) {
    console.log(error);
  }
};
export const logout = (router) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    await API.post("/users/logout");
    // window.location.reload()
    router.push("/");
  } catch (error) {
    console.log(error.message);
  }
};
export const GoogleLogIn = (formData, router, signout) => async (dispatch) => {
  try {
    const { data } = await API.post("/users/googlelogin", formData);

    if (data?.user) {
      dispatch({ type: AUTH, data });
      signout();
      router.push("/");
    }
  } catch (error) {
    dispatch({ type: AUTH_ERROR, data: error.response.data });
  }
};
