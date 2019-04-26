import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faStopwatch,
  faClock,
  faStopCircle,
  faPlayCircle,
  faPauseCircle,
  faCloud,
  faCalculator,
  faListAlt,
  faWind,
  faSun,
  faCloudSun,
  faCloudSunRain,
  faCloudRain,
  faCloudShowersHeavy,
  faBolt,
  faCloudMoon,
  faMoon,
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlay,
  faStop,
  faPause,
  faRedo,
  faPlus,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./main.css";
import App from "./views/App.jsx";
import { Route, Link, BrowserRouter } from 'react-router-dom'
//import Weather from "./views/weather.js";
//import Calc from "./views/calc.jsx";
//import Timer from "./views/timer.jsx";
//import Stopwatch from "./views/stopwatch.jsx";
//import Todo from "./views/todo.jsx";
import Routing from "./routing.jsx";
import Weather from "./views/weather";

library.add(
  faCircle,
  faStopwatch,
  faClock,
  faStopCircle,
  faPlayCircle,
  faPauseCircle,
  faCloud,
  faCalculator,
  faListAlt,
  faWind,
  faSun,
  faCloudSun,
  faCloudSunRain,
  faCloudRain,
  faCloudShowersHeavy,
  faBolt,
  faCloudMoon,
  faMoon,
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlay,
  faStop,
  faPause,
  faRedo,
  faPlus,
  faTimes
);

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Routing />
    )

    //<Weather /><Stopwatch />
    //<Timer />;
    //<Calc />;
    //<Todo />;
    //<App />;
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
