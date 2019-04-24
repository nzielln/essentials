import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class Title extends React.Component {
  render() {
    return <h2 className="title main">{this.props.title}</h2>;
  }
}

export default Title;
