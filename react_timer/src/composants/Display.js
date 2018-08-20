import React from "react";
import "./Display.css";

function timerCalculate(millisecondes) {
  const hour = Math.floor(millisecondes / (1000 * 60 * 60));
  const restHour = millisecondes % (1000 * 60 * 60);

  const minute = Math.floor(restHour / (1000 * 60));
  const restMinute = restHour % (1000 * 60);

  const second = Math.floor(restMinute / 1000);

  return (
    String(hour).padStart(2, 0) +
    ":" +
    String(minute).padStart(2, 0) +
    ":" +
    String(second).padStart(2, 0)
  );
}

const Display = props => {
  return (
    <div className="display-bloc">
      <div className="digits">{timerCalculate(props.nbMillisecondes)}</div>
      <div className="digits-description">
        <div>Hour</div>
        <div>Minute</div>
        <div>Second</div>
      </div>
    </div>
  );
};

export default Display;
