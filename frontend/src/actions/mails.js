import { SEND_MAIL, ALL_MAILS, MAIL_ERROR } from "../actionTypes";
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const send_mail = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("mails/send", formData);
    dispatch({ type: SEND_MAIL, data });
  } catch (error) {
    dispatch({ type: MAIL_ERROR, data: error.response.data });
  }
};
