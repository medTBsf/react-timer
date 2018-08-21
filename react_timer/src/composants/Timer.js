import React from "react";
import Display from "./Display";

const Timer = props => {
  return <Display nbMillisecondes={props.nbMillisecondes} />;
};

export default Timer;
