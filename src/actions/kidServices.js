import {
  GET_ALL_KID_SERVICES_SUCCESS,
  GET_KID_SERVICE_SUCCESS,
  GET_ALL_KID_SERVICES_ERROR,
  GET_KID_SERVICE_ERROR,
} from "./type";
import axios from "axios";

export const getAllKidServices = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8000/api/kidservices");
    dispatch({
      type: GET_ALL_KID_SERVICES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_KID_SERVICES_ERROR,
      payload: err.message,
    });
  }
};

// export const getSingleService = (id) => async (dispatch) => {
//   try {
//     const res = await axios.get(`http://localhost:8000/api/kidservices/${id}`);
//     dispatch({
//       type: GET_KID_SERVICE_SUCCESS,
//       payload: res.data,
//     });
//   } catch (err) {
//     dispatch({
//       type: GET_KID_SERVICE_ERROR,
//       payload: err.message,
//     });
//   }
// };
