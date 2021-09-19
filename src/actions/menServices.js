import {
  GET_ALL_MEN_SERVICES_SUCCESS,
  GET_MEN_SERVICE_SUCCESS,
  GET_ALL_MEN_SERVICES_ERROR,
  GET_MEN_SERVICE_ERROR,
} from "./type";
import axios from "axios";

export const getAllMenServices = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/menservices");
    dispatch({
      type: GET_ALL_MEN_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_MEN_SERVICES_ERROR,
      payload: err.message,
    });
  }
};
