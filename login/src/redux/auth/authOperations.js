import api from "../../api/apiServicer";
import { loginRequest, loginSuccess, loginError, logout } from "./authActions";

const login = params => dispatch => {
  dispatch(loginRequest());
  api
    .login()
    .then(response => dispatch(loginSuccess(response)))
    .catch(error => dispatch(loginError(error)))
    .finally(dispatch(loginRequest()));
};


const loginErr = params => dispatch => {
  dispatch(loginRequest());
  api
    .loginError()
    // .then(response => dispatch(loginSuccess(response)))
    .then(error => dispatch(loginError(error)))
    .finally(dispatch(loginRequest()));
};
export { login, loginErr };