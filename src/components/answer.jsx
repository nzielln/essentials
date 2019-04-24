import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class AnswerButton extends React.Component {
  render() {
    return <div id="answerspace">{this.props.answerspace}</div>;
  }
}

export default AnswerButton;
