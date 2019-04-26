import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../components/title.jsx";
import HomeButton from "../components/homebutton.jsx";
import { Link } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="titlepage">
        <div className="titlebox main-box">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon="circle" color="white" size="lg" />
          </Link>
          <Title title="Essentials" />
        </div>
        <div className="icons">
          <Link to="/weather" style={{ textDecoration: 'none' }}>
            <div className="page-icons">
              <HomeButton
                sym={<FontAwesomeIcon icon="cloud" color="white" size="2x" />}
                pagetitle="weather"
              />
            </div>
          </Link>
          <Link to="/calc" style={{ textDecoration: 'none' }}>
            <div className="page-icons">
              <HomeButton
                sym={
                  <FontAwesomeIcon icon="calculator" color="white" size="2x" />
                }
                pagetitle="calculator"
              />
            </div>
          </Link>
          <Link to="/timer" style={{ textDecoration: 'none' }}>
            <div className="page-icons">
              <HomeButton
                sym={<FontAwesomeIcon icon="clock" color="white" size="2x" />}
                pagetitle="timer"
              />
            </div>
          </Link>
          <Link to="/stopwatch" style={{ textDecoration: 'none' }}>
            <div className="page-icons">
              <HomeButton
                sym={<FontAwesomeIcon icon="stopwatch" color="white" size="2x" />}
                pagetitle="stopwatch"
              />
            </div>
          </Link>
          <Link to="/todo" style={{ textDecoration: 'none' }}>
            <div className="page-icons">
              <HomeButton
                sym={<FontAwesomeIcon icon="list-alt" color="white" size="2x" />}
                pagetitle="to do"
              />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default App;
