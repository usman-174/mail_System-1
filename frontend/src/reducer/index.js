import { combineReducers } from "redux";
import auth from "./auth";
import mails from "./mails";

export default combineReducers({
  auth,
  mails,
});
