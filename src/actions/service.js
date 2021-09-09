import {
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_ERROR,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_ERROR,
} from "./type";
import axios from "axios";

export const getAllPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/services");
    dispatch({
      type: GET_ALL_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_SERVICES_ERROR,
      payload: err,
    });
  }
};

export const getService = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/api/services/${id}`);
    dispatch({
      type: GET_SERVICE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_SERVICE_ERROR,
      payload: err,
    });
  }
};
