import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class ZeroButtons extends React.Component {
  render() {
    return (
      <div className="zero-button">
        <h4>{this.props.zerobuttons}</h4>
      </div>
    );
  }
}

export default ZeroButtons;
