import {
  SEND_MAIL,
  MAIL_ERROR,
  RESET_STATE,
  GET_SENT_MAILS,
  GET_INBOX_MAILS,
} from "../actionTypes";

export default (state = { sendMails: null, mailError: null }, action) => {
  switch (action.type) {
    case SEND_MAIL:
    case GET_INBOX_MAILS:
    case GET_SENT_MAILS:
      return { ...state, sendMails: action?.data };
    case MAIL_ERROR:
      return { ...state, mailError: action?.data };
    case RESET_STATE:
      return { ...state, sendMails: null, mailError: null };

    default:
      return state;
  }
};
