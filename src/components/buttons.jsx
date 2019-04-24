import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class CalcButtons extends React.Component {
  render() {
    return (
      <div className="calc-button">
        <h4>{this.props.buttons}</h4>
      </div>
    );
  }
}

export default CalcButtons;
