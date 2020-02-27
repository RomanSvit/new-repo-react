// import React from "react";
// import Form from "../components/form/Form";

// const LoginPage = () => {
//   const dispatch = useDispatch();
//   return <Form formName="Login" credential={login} />;
// };

// export default LoginPage;

import React from "react";
import { connect } from "react-redux";
import Form from "../components/form/Form";
import { login } from "../redux/operations/authOperations";

const LoginPage = ({login}) => {
  return <Form formName="Login" credential={login} />;
};

export default connect(null, { login })(LoginPage);
