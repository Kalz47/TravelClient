import {
  GET_ALL_KID_SERVICES_SUCCESS,
  GET_KID_SERVICE_SUCCESS,
  GET_ALL_KID_SERVICES_ERROR,
  GET_KID_SERVICE_ERROR,
} from "../actions/type";

const initialState = {
  kidServices: [],
  kidService: null,
  kidLoading: true,
  error: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_KID_SERVICES_SUCCESS:
      return {
        kidServices: payload,
        kidLoading: false,
      };
    case GET_KID_SERVICE_SUCCESS:
      return {
        kidService: payload,
        kidLoading: false,
      };
    case GET_ALL_KID_SERVICES_ERROR:
    case GET_KID_SERVICE_ERROR:
      return {
        kidLoading: false,
        kidServices: [],
        kidService: null,
        error: payload,
      };
    default:
      return state;
  }
}
