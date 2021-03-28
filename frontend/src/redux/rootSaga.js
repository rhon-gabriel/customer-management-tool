import { all } from "redux-saga/effects";
import customerSaga from "../containers/Customer/redux/saga";

export default function* rootSaga() {
  yield all([customerSaga()]);
}
