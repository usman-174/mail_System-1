import { SEND_MAIL, ALL_MAILS, MAIL_ERROR, RESET_STATE } from "../actionTypes";

export default (state = { mails: null, mailError: null }, action) => {
  switch (action.type) {
    case SEND_MAIL:
      return { ...state, mails: action?.data };
    case MAIL_ERROR:
      return { ...state, mailError: action?.data };
    case ALL_MAILS:
      return state;
    case RESET_STATE:
      return { ...state, mails: null, mailError: null };

    default:
      return state;
  }
};
