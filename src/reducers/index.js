import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./authReducer";
import newsletters from "./../reducers/newsletterReducer";
import requests from "../reducers/index";
// import header from '../';

const rootReducer = combineReducers({
  form,
  auth,
  newsletters,
  requests,
  // header
});

export default rootReducer;