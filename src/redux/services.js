import {
  GET_ALL_SERVICES_SUCCESS,
  GET_SERVICE_SUCCESS,
  GET_ALL_SERVICES_ERROR,
  GET_SERVICE_ERROR,
} from "../actions/type";

const initialState = {
  Services: [],
  Service: null,
  loading: true,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_SERVICES_SUCCESS:
      return {
        Services: payload,
        loading: false,
      };
    case GET_SERVICE_SUCCESS:
      return {
        Service: payload,
        loading: false,
      };
    case GET_ALL_SERVICES_ERROR:
    case GET_SERVICE_ERROR:
      return {
        loading: false,
        Services: [],
        Service: null,
        error: payload,
      };
    default:
      return state;
  }
}
