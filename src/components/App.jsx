import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "./title.jsx";
import HomeButton from "./homebutton.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="titlepage">
        <div className="titlebox main-box">
          <FontAwesomeIcon icon="circle" color="white" size="lg" />
          <Title title="Essentials Things" />
        </div>
        <div className="icons">
          <div className="page-icons">
            <HomeButton
              sym={<FontAwesomeIcon icon="cloud" color="white" size="4x" />}
              pagetitle="weather"
            />
          </div>
          <div className="page-icons">
            <HomeButton
              sym={
                <FontAwesomeIcon icon="calculator" color="white" size="4x" />
              }
              pagetitle="calculator"
            />
          </div>
          <div className="page-icons">
            <HomeButton
              sym={<FontAwesomeIcon icon="clock" color="white" size="4x" />}
              pagetitle="timer"
            />
          </div>
          <div className="page-icons">
            <HomeButton
              sym={<FontAwesomeIcon icon="stopwatch" color="white" size="4x" />}
              pagetitle="stopwatch"
            />
          </div>
          <div className="page-icons">
            <HomeButton
              sym={<FontAwesomeIcon icon="list-alt" color="white" size="4x" />}
              pagetitle="to do"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
