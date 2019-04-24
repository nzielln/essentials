import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class Laps extends React.Component {
  render() {
    return (
      <div className="alllaps">
        <h5>
          {this.props.hr}:{this.props.min}:{this.props.sec}
        </h5>
      </div>
    );
  }
}

export default Laps;
