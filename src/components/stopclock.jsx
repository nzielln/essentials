import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class StopClock extends React.Component {
  render() {
    return (
      <div className="clock">
        <div className="theclock">
          <h1>00:00:00</h1>
        </div>
        <div className="labels">
          <h6>h</h6>
          <h6>m</h6>
          <h6>s</h6>
        </div>
      </div>
    );
  }
}

export default StopClock;
