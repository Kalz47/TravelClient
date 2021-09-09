import {
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_ERROR,
  GET_SERVICE_SUCCESS,
  GET_SERVICE_ERROR,
} from "../actions/type";

const initialState = {
  services: [],
  service: null,
  servicesLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_SERVICES_SUCCESS:
      return {
        ...state,
        services: payload,
        servicesLoading: false,
        error: null,
      };
    case GET_SERVICE_SUCCESS:
      return {
        ...state,
        service: payload,
        servicesLoading: false,
      };
    case GET_ALL_SERVICES_ERROR:
    case GET_SERVICE_ERROR:
      return {
        ...state,
        services: [],
        service: null,
        servicesLoading: false,
        error: payload,
      };
    default:
      return state;
  }
}
