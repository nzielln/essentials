import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

export const CalcButtons = props => {
  return (
    <div className="calc-button">
      <h4 onClick={this.handleCalculate}>{props.buttons}</h4>
    </div>
  );
};
