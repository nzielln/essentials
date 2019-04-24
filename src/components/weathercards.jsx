import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class WeatherCards extends React.Component {
  render() {
    return (
      <div className="weather-top">
        <div className="weather-card">
          <h5 className="day">{this.props.day}</h5>
          <h2 className="date">{this.props.thedate}</h2>
          <div className="weather-icon">{this.props.iconcard}</div>
        </div>
      </div>
    );
  }
}

export default WeatherCards;
