import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import characterReducer from "./characterReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  char: characterReducer,
});
