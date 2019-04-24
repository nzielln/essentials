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
import App from "./components/App.jsx";
//import Weather from "./views/weather.js";
//import Calc from "./views/calc.jsx";
//import Timer from "./views/timer.jsx";
import Stopwatch from "./views/stopwatch.jsx";
//import Todo from "./views/todo.jsx";

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
export const keepData = () => {
  //just for getting data
};
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Stopwatch />
      </div>
      //cards.map( )
    );

    //<Weather /><Stopwatch />
    //<Timer />;
    //<Calc />;
    //<Todo />;
    //<App />;
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
