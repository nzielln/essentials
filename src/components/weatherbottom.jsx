import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class WeatherBottom extends React.Component {
  render() {
    return (
      <div className="weather-all-bottom">
        <div className="weathericon">{this.props.iconhere}</div>
        <div className="weather-bottom">
          <div className="temps">
            <h3 className="temp low">{this.props.temperatureLow}</h3>
            <h6 id="level">low</h6>
          </div>
          <div className="temps">
            <h1 className="temp average">{this.props.temperature}</h1>
          </div>
          <div className="temps">
            <h3 className="temp high">{this.props.temperatureHigh}</h3>
            <h6 id="level">high</h6>
          </div>
        </div>
        <div className="typedeg">
          <span className="degree-active">
            F
          </span>
        </div>
      </div>
    );
  }
}

export default WeatherBottom;
