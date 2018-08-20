import React, { Component } from "react";
import Display from "./Display";

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0
    };
    setInterval(() => {
      this.setState({ timer: this.state.timer + 1000 });
    }, 1000);
  }
  render() {
    return <Display nbMillisecondes={this.state.timer} />;
  }
}

export default Timer;
