import { SEND_MAIL, MAIL_ERROR, GET_SENT_MAILS } from "../actionTypes";
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

export const send_mail = (formData, router) => async (dispatch) => {
  try {
    const { data } = await API.post("/mails/send", formData);
    dispatch({ type: SEND_MAIL, data });
  } catch (error) {
    dispatch({ type: MAIL_ERROR, data: error.response.data });
  }
};

export const get_inbox_mails = () => async (dispatch) => {
  try {
    const { data } = await API.get("/mails/inboxmails");
    dispatch({ type: SEND_MAIL, data });
  } catch (error) {
    dispatch({ type: MAIL_ERROR, data: error.response.data });
  }
};

export const get_sent_mails = () => async (dispatch) => {
  try {
    const { data } = await API.get("/mails/sentmails");
    dispatch({ type: GET_SENT_MAILS, data });
  } catch (error) {
    dispatch({ type: MAIL_ERROR, data: error.response.data });
  }
};
