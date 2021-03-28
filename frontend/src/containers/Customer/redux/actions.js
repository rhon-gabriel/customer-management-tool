import {
    GET_CUSTOMER_START
  } from "./constants";
  
  export function getCustomer(id) {
    return {
      type: GET_CUSTOMER_START,
      payload: id,
    };
  }
  