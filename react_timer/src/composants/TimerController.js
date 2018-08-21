import React, { Component, Fragment } from "react";
import "./TimerController.css";

class Controller extends Component {
  render() {
    return (
      <Fragment>
        <button onClick={this.props.playPauseHandle}>
          {this.props.dataState ? "Play" : "Pause"}
        </button>
        <button onClick={this.props.resetHandle}>Reset</button>
      </Fragment>
    );
  }
}

export default Controller;
