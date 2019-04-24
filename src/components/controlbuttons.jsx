import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class ControlButtons extends React.Component {
  render() {
    return (
      <div className="controls">
        <div className="circle">
          <h4>{this.props.control}</h4>
        </div>
      </div>
    );
  }
}

export default ControlButtons;
