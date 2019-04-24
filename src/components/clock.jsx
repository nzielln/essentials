import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class Clock extends React.Component {
  render() {
    return (
      <div className="clock">
        <div className="resets">
          <h6 id="reset-hr">reset</h6>
          <h6 id="reset-min">reset</h6>
          <h6 id="reset-sec">reset</h6>
        </div>
        <div className="theclock" id="the-clock">
          <h1>
            <span id="add-hr">00</span>:<span id="add-min">00</span>:
            <span id="add-sec">00</span>
          </h1>
        </div>
        <div className="labels">
          <h6>h</h6>
          <h6>m</h6>
          <h6>s</h6>
        </div>
        <div className="minus">
          <h6 id="minus-hr">
            {<FontAwesomeIcon icon="minus" color="white" size="1x" />}
          </h6>
          <h6 id="minus-min">
            {<FontAwesomeIcon icon="minus" color="white" size="1x" />}
          </h6>
          <h6 id="minus-sec">
            {<FontAwesomeIcon icon="minus" color="white" size="1x" />}
          </h6>
        </div>
      </div>
    );
  }
}

export default Clock;
