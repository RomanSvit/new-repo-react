import React, { Component } from "react";
import Form from './form/Form'
// import "./App.css";

class App extends Component {
  state = {
    isVisible: true
  };

  getFormValue = value => {
    console.log("app", value);
    if (value) {
      this.setState({
        isVisible: false
      });
    }
  };

  render() {
    const { isVisible } = this.state;
    return isVisible ? (
      <Form getFormValue={this.getFormValue} />
    ) : (
      <h2>Next</h2>
    );
  }
}

export default App;
