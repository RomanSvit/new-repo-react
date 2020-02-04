import React, { Component } from "react";
import shortid from "shortid";
import Select from "../select/Select.jsx";

const INITIAL_STATE = {
  wish: "",
  date: new Date().toDateString(),
  priority: "normal"
};

class WishForm extends Component {
  state = { ...INITIAL_STATE };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.getFormValueWish({ ...this.state, id: shortid() });
    this.setState({ ...INITIAL_STATE });
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
  };
  chooseSelect = param => {
    this.setState(
      {prority:param.value}
    )
  };

  render() {
    const { wish } = this.state;
    // const { onChooseSelect } = this.props;
    return (
      <>
        <Select onChooseSelect={this.chooseSelect} />
        <form onSubmit={this.handleSubmit}>
          <input
            minLength={5}
            maxLength={15}
            type="text"
            name="wish"
            onChange={this.handleChange}
            value={wish}
          />
        </form>
      </>
    );
  }
}

export default WishForm;
