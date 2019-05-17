import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";
import WeatherCards from "../components/weathercards.jsx";
import WeatherBottom from "../components/weatherbottom.jsx";
import { networkInterfaces } from "os";
import { Link } from 'react-router-dom';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      icon: "",
      temperatureHigh: "",
      temperatureLow: "",
      day: "",
      thedate: ""
    };
  }

  componentDidMount() {
    let lat;
    let long;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        long = pos.coords.longitude;
        lat = pos.coords.latitude;
        const url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/94b18e1062640b5cb4c0c641479029b7/${lat},${long}`;

        fetch(url)
          .then(result => {
            return result.json();
          })
          .then(ourdata => {
            console.log(ourdata);
            let low = Math.floor(ourdata.daily.data[0].temperatureMin)
            let ave = Math.floor(ourdata.currently.temperature)
            let high = Math.floor(ourdata.daily.data[0].temperatureMax)
            this.setState({
              icon: ourdata.daily.data[0].icon,
              temperature: ave,
              temperatureHigh: high,
              temperatureLow: low
            });
          });
      });
    }
  }

  render() {
    const { temperature, icon, temperatureHigh, temperatureLow } = this.state;
    //for bottom
    let iconDetermine, iconDark;
    if (this.state.icon === "partly-cloudy-day") {
      iconDetermine = (
        <FontAwesomeIcon icon="cloud-sun" color="white" size="3x" />
      );
      iconDark = <FontAwesomeIcon icon="cloud-sun" color="black" size="2x" />;
    } else if (this.state.icon === "partly-cloudy-night") {
      iconDetermine = (
        <FontAwesomeIcon icon="cloud-moon" color="white" size="3x" />
      );
      iconDark = <FontAwesomeIcon icon="cloud-moon" color="black" size="2x" />;
    } else if (this.state.icon === "rain") {
      iconDetermine = (
        <FontAwesomeIcon icon="cloud-rain" color="white" size="3x" />
      );
      iconDark = <FontAwesomeIcon icon="cloud-rain" color="black" size="2x" />;
    } else if (this.state.icon === "wind") {
      iconDetermine = <FontAwesomeIcon icon="wind" color="white" size="3x" />;
      iconDark = <FontAwesomeIcon icon="wind" color="black" size="2x" />;
    } else if (this.state.icon === "clear-day") {
      iconDetermine = <FontAwesomeIcon icon="sun" color="white" size="3x" />;
      iconDark = <FontAwesomeIcon icon="sun" color="black" size="2x" />;
    } else if (this.state.icon === "clear-night") {
      iconDetermine = <FontAwesomeIcon icon="moon" color="white" size="3x" />;
      iconDark = <FontAwesomeIcon icon="moon" color="black" size="2x" />;
    } else if (this.state.icon === "cloudy") {
      iconDetermine = <FontAwesomeIcon icon="cloud" color="white" size="3x" />;
      iconDark = <FontAwesomeIcon icon="cloud" color="black" size="2x" />;
    } else if (this.state.icon === "thunderstorm") {
      iconDetermine = <FontAwesomeIcon icon="bolt" color="white" size="3x" />;
      iconDark = <FontAwesomeIcon icon="bolt" color="black" size="2x" />;
    } else {
      iconDetermine = <FontAwesomeIcon icon="cloud" color="white" size="3x" />;
      iconDark = <FontAwesomeIcon icon="cloud" color="black" size="2x" />;
    }

    //date and day
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    const today = new Date();
    const date = today.getDate();
    const theday = today.getDay();
    const dayName = days[theday];
    console.log(dayName);

    return (
      <div className="weatherbox">
        <div className="home" >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon="circle" color="white" size="lg" />
          </Link>
        </div>
        <h2 className="title top">weather</h2>
        <WeatherCards iconcard={iconDark} thedate={date} day={dayName} />
        <WeatherBottom
          iconhere={iconDetermine}
          temperatureLow={this.state.temperatureLow}
          temperature={this.state.temperature}
          temperatureHigh={this.state.temperatureHigh}
        />
      </div >
    );
  }
}

export default Weather;
