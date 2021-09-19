import {
  GET_ALL_WOMEN_SERVICES_SUCCESS,
  GET_WOMEN_SERVICE_SUCCESS,
  GET_ALL_WOMEN_SERVICES_ERROR,
  GET_WOMEN_SERVICE_ERROR,
} from "./type";
import axios from "axios";

export const getAllWomenServices = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/womenservices");
    dispatch({
      type: GET_ALL_WOMEN_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_WOMEN_SERVICES_ERROR,
      payload: err.message,
    });
  }
};
