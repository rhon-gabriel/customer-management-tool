import { combineReducers } from "redux";
import customerReducer from "../containers/Customer/redux/reducer";

const rootReducer = combineReducers({
  customer: customerReducer,
});

export default rootReducer;
