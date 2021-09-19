import {
  GET_ALL_MEN_SERVICES_SUCCESS,
  GET_MEN_SERVICE_SUCCESS,
  GET_ALL_MEN_SERVICES_ERROR,
  GET_MEN_SERVICE_ERROR,
} from "../actions/type";

const initialState = {
  menServices: [],
  menService: null,
  menLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_MEN_SERVICES_SUCCESS:
      return {
        menServices: payload,
        menLoading: false,
      };
    case GET_MEN_SERVICE_SUCCESS:
      return {
        menService: payload,
        menLoading: false,
      };
    case GET_ALL_MEN_SERVICES_ERROR:
    case GET_MEN_SERVICE_ERROR:
      return {
        menLoading: false,
        menServices: [],
        menService: null,
        error: payload,
      };
    default:
      return state;
  }
}
