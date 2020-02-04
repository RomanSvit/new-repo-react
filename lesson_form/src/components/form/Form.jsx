import React, { Component } from "react";
const INITIAL_STATE = {
  login: "",
  email: "",
  password: ""
};
class Form extends Component {
  state = { ...INITIAL_STATE };
  handleSubmit = e => {
    e.preventDefault();
    this.props.getFormValue(this.state);
    // const [login, email, password] = e.target.elements;
    // console.log(login.value);
    // console.log(email.value);
    // console.log(password.value);
    // this.setState({
    //   login: login.value,
    //   email: email.value,
    //   password: password.value
    // });
    this.setState({
      ...INITIAL_STATE
    });
  };
  handleChange = e => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    // console.log(this.state);
    // console.log("rerender");
    const { login, email, password } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="login"
            onChange={this.handleChange}
            value={login}
          />
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
          <button type="submit">Submit</button>
          
        </form>
      </>
    );
  }
}

export default Form;
