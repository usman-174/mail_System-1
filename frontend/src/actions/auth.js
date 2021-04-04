import { AUTH } from "../actionTypes";
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("/users/signin", formData);
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("/users/signup", formData);
    console.log(data);
    dispatch({ type: AUTH, data });

    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
