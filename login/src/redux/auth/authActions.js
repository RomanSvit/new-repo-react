import Types from "./authTypes";

const loginRequest = () => ({
  type: Types.LOGIN_REQUEST,
});
const loginSuccess = (data) => ({
  type: Types.LOGIN_SUCCESS,
  payload: data
});
const loginError = error => ({
  type: Types.LOGIN_ERROR,
  payload: error
});
const logout = () => ({
  type: Types.LOGOUT,
});
// const loginSuccess = (data) => ({
//   type: Types.LOGIN_SUCCESS,
//   payload: data
// });
export { loginRequest, loginSuccess, loginError, logout };


