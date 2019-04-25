import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

export const ClearButtons = props => {
  return (
    <div className="calc-button">
      <h4 onClick={this.handleClearOut}>{props.clearbuttons}</h4>
    </div>
  );
};
