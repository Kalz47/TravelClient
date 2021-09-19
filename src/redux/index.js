import { combineReducers } from "redux";
import auth from "./auth";
import womenService from "./womenService";
import menService from "./menService";
import kidService from "./kidService";

export default combineReducers({
  auth,
  womenService,
  menService,
  kidService,
});
