import React from "react";
import Popup from "./Popup";

class Main extends React.Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
  };

  render() {
    return (
      <>
        <main className="container">
          <div className="jumbotron">
            <img
              src="images/name_raspberry.png"
              alt="raspberry kingdom"
              className="jumbotron__images"
            />
            <div className="jumbotron__btn">
              <span
                onClick={this.handleClick}
                className="jumbotron__btn__content jumbotron__btn__content--hover"
              >
                Enter the gates
              </span>
            </div>
          </div>
        </main>
        {this.state.isClicked && <Popup ourInputFunction={this.handleClick} />}
      </>
    );
  }
}
export default Main;
