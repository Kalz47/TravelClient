import { combineReducers } from "redux";
import auth from "./auth";
import services from "./services";
import location from "./location";

export default combineReducers({
  auth,
  services,
  location,
});
