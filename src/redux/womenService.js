import {
  GET_ALL_WOMEN_SERVICES_SUCCESS,
  GET_WOMEN_SERVICE_SUCCESS,
  GET_ALL_WOMEN_SERVICES_ERROR,
  GET_WOMEN_SERVICE_ERROR,
} from "../actions/type";

const initialState = {
  womenServices: [],
  womenService: null,
  womenLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case GET_ALL_WOMEN_SERVICES_SUCCESS:
      return {
        womenServices: payload,
        womenLoading: false,
      };
    case GET_WOMEN_SERVICE_SUCCESS:
      return {
        womenService: payload,
        womenLoading: false,
      };
    case GET_ALL_WOMEN_SERVICES_ERROR:
    case GET_WOMEN_SERVICE_ERROR:
      return {
        womenLoading: false,
        womenServices: [],
        womenService: null,
        error: payload,
      };
    default:
      return state;
  }
}
