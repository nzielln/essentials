import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class HomeButton extends React.Component {
  render() {
    return (
      <div className="symbox">
        <div className="symbol">{this.props.sym}</div>
        <h3 className="pagetitle">{this.props.pagetitle}</h3>
      </div>
    );
  }
}

export default HomeButton;
