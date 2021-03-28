import { takeLatest, put, call } from "redux-saga/effects";
import {
    GET_CUSTOMER_START,
    GET_CUSTOMER_SUCCESS,
    GET_CUSTOMER_FAILURE,
  } from "./constants";
import {
  getCustomer,
} from "../../../helpers/api/customers";
import { message } from "antd";

export function* getCustomerSaga(action) {
  try {
    const res = yield call(getCustomer, action.payload);
    yield put({
      type: GET_CUSTOMER_SUCCESS,
      results: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_CUSTOMER_FAILURE,
      error,
    });
    message.error("Something went wrong");
  }
}

export default function* customerSaga() {
  yield takeLatest(GET_CUSTOMER_START, getCustomerSaga);
}
