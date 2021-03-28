import {
    GET_CUSTOMER_START,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
  } from "./constants";
  
  const initialState = {
    results: null,
    loading: true,
    error: false,
  };
  
  export default function customerReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CUSTOMER_START:
        return {
          ...state,
          loading: true,
          error: false,
        };
      case GET_CUSTOMER_SUCCESS:
        return {
          ...state,
          results: action.results,
          loading: false,
          error: false,
        };
      case GET_CUSTOMER_FAILURE:
        return {
          ...state,
          loading: false,
          error: true,
        };
      default:
        return state;
    }
  }
  