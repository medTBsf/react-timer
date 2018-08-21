import React, { Component } from "react";
import "./App.css";
import Timer from "./composants/Timer";
import Controller from "./composants/TimerController";

class App extends Component {
  constructor() {
    super();
    this.state = {
      timer: 0,
      isPlayed: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    var intervalID;
    if (this.state.isPlayed) {
      intervalID = setInterval(() => {
        this.setState({ timer: this.state.timer + 1000 });
      }, 1000);
      this.setState({
        isPlayed: false,
        intervalID: intervalID
      });
    } else {
      this.setState({
        isPlayed: true
      });
      clearInterval(this.state.intervalID);
    }
  }

  handleReset = () => {
    this.setState({
      timer: 0,
      intervalID: undefined,
      isPlayed: true
    });
    clearInterval(this.state.intervalID);
  };

  render() {
    return (
      <div className="App">
        <Timer nbMillisecondes={this.state.timer} />
        <div className="controller-bloc">
          <Controller
            playPauseHandle={this.handleClick}
            dataState={this.state.isPlayed}
            resetHandle={this.handleReset}
          />
        </div>
      </div>
    );
  }
}

export default App;
