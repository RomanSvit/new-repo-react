import { combineReducers } from "redux";
import  Types  from "./authTypes";

const user = (state = null, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCESS:
      return payload.user;
    case Types.LOGOUT:
      return null;
    default:
      return state;
  }
};
const token = (state = null, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCESS:
      return payload.token;
    case Types.LOGOUT:
      return null;
    default:
      return state;
  }
};
const error = (state = null, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_ERROR:
      return payload.error;
    default:
      return state;
  }
};
const isAuth = (state = false, { type, payload }) => {
  switch (type) {
    case Types.LOGIN_SUCCESS:
      return true;
    case Types.LOGOUT:
      return false;
    default:
      return false;
  }
};
const authReducer = combineReducers({ user, token, error, isAuth });
export default authReducer;
