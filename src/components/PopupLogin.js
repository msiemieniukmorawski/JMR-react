import React from "react";
import axios from "axios";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let password = event.target.elements[1].value;
    let login = event.target.elements[0].value;

    axios({
      method: "post",
      url: "https://recruitment-api.pyt1.stg.jmr.pl/login",
      data: {
        login,
        password
      }
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.message);
        } else {
          throw new Error("Whoops! status" + response.status);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="popup">
        <div className="popup__overlay" onClick={this.props.ourInputFunction} />
        <form className="popup__container" onSubmit={this.handleSubmit}>
          <h2 className="popup__headline">Are you a Raspberry Knight?</h2>
          <input
            type="email"
            name="login"
            placeholder="Email"
            className="popup__input popup__input__text"
            required="required"
            value={this.state.login}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="popup__input popup__input__text"
            required="required"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <input
            type="submit"
            className="popup__button"
            onSubmit={this.handleSubmit}
            value="Log in"
          />
        </form>
      </div>
    );
  }
}

export default Popup;
