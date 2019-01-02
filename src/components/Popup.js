import React from "react";
import axios from "axios";

class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      login: "",
      password: "",
      show: true,
      error: false,
      title: "Are you a Raspberry Knight?"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = event => {
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
        if (response.status === 200 && response.data.status === "ok") {
          this.setState({ show: false, title: response.data.message });
        } else if (
          response.status === 200 &&
          response.data.status === "error"
        ) {
          this.setState({ error: true });
        } else {
          console.log(response);
          console.log(response.data.status);

          throw new Error("Whoops! status " + response.status);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="popup">
        <div className="popup__overlay" onClick={this.props.ourInputFunction} />
        <form className="popup__container" onSubmit={this.handleSubmit}>
          <h2
            className={
              this.state.show
                ? " popup__headline"
                : "popup__headline popup__headline--ok"
            }
          >
            {this.state.title}
          </h2>
          <input
            type="email"
            name="login"
            placeholder="Email"
            className={(() => {
              if (this.state.show && !this.state.error) {
                return "popup__input popup__input__text";
              } else if (this.state.error && this.state.show) {
                return "popup__input popup__input__text popup__input--error";
              } else {
                return "popup__input--hidden";
              }
            })()}
            required="required"
            value={this.state.login}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={(() => {
              if (this.state.show && !this.state.error) {
                return "popup__input popup__input__text";
              } else if (this.state.error && this.state.show) {
                return "popup__input popup__input__text popup__input--error";
              } else {
                return "popup__input--hidden";
              }
            })()}
            required="required"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <input
            type="submit"
            className={
              this.state.show ? " popup__button" : "popup__input--hidden"
            }
            onSubmit={this.handleSubmit}
            value="Log in"
          />
        </form>
      </div>
    );
  }
}

export default Popup;
