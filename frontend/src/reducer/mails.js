import { SEND_MAIL, ALL_MAILS, MAIL_ERROR, RESET_STATE, GET_SEND_MAILS } from "../actionTypes";

export default (state = {sendMails: null,  mailError: null }, action) => {
  switch (action.type) {
    case SEND_MAIL:
      return { ...state, sendMails: [...state.sendMails,action?.data] };
    case MAIL_ERROR:
      return { ...state, mailError: action?.data };
    case ALL_MAILS:
      return state;
    case GET_SEND_MAILS:
      return {...state,sendMails:action?.data}
    case RESET_STATE:
      return { ...state, sendMails: null, mailError: null };

    default:
      return state;
  }
};
