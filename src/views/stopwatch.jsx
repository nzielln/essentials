import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";
import { Link } from 'react-router-dom';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      timerStopped: true,
      sec: 0,
      min: 0,
      laps: [],
      zerosec: 0,
      zeromin: 0,
      laphr: 0,
      lapmin: 0,
      lapsec: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.getTimer = this.getTimer.bind(this);
    this.clearLaps = this.clearLaps.bind(this);
  }

  startTimer() {
    if (this.state.timerStopped) {
      this.start = setInterval(() => {
        this.setState({
          timerStart: true,
          timerStopped: false
        });
        if (this.state.timerStart) {
          this.setState(prevState => ({ sec: prevState.sec + 1 }));
        }
        if (this.state.sec >= 60) {
          this.setState(prevState => ({
            sec: 0,
            min: prevState.min + 1
          }));
        }
      }, 1000);
    }
  }

  pauseTimer() {
    if (this.state.timerStart) {
      this.setState({
        timerStart: false,
        timerStopped: true
      });
    }
    clearInterval(this.start);
  }

  stopTimer() {
    this.setState({
      timerStart: false,
      timerStopped: true,
      sec: 0,
      min: 0
    });
    clearInterval(this.start);
  }

  clearLaps() {
    this.setState({
      laps: []
    });
  }

  getTimer() {
    this.setState(prevState => ({
      laps: [
        ...prevState.laps,
        this.state.zeromin +
        this.state.min +
        ":" +
        this.state.zerosec +
        this.state.sec
      ]
    }));
    let arr = this.state.laps;
    const limit = lap => {
      if (arr.length >= 5) {
        arr.shift(lap);
      }
    };
    limit();
  }

  render() {
    //add zero if # is less than 9

    if (this.state.sec < 10) {
      this.state.zerosec = "0";
    } else {
      this.state.zerosec = "";
    }

    if (this.state.min < 10) {
      this.state.zeromin = "0";
    } else {
      this.state.zeromin = "";
    }

    if (this.state.lapsec < 10) {
      this.state.minsec = "0";
    } else {
      this.state.minsec = "";
    }

    if (this.state.lapmin < 10) {
      this.state.minzero = "0";
    } else {
      this.state.minzero = "";
    }

    return (
      <div className="alltimer">
        <div className="home" >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon="circle" color="white" size="lg" />
          </Link>
        </div>
        <h2 className="title top">stopwatch</h2>
        <div className="clock-stop">
          <div className="theclock" id="the-clock">
            <h1>
              {this.state.zeromin +
                this.state.min +
                ":" +
                this.state.zerosec +
                this.state.sec}
            </h1>
          </div>
          <div className="labels">
            <h6>m</h6>
            <h6>s</h6>
          </div>

          <div className="timer-controls">
            <button id="play" onClick={this.startTimer}>
              <FontAwesomeIcon icon="play" color="white" size="1x" />
            </button>
            <button id="pause" onClick={this.pauseTimer}>
              <FontAwesomeIcon icon="pause" color="white" size="1x" />
            </button>
            <button id="stop" onClick={this.stopTimer}>
              <FontAwesomeIcon icon="stop" color="white" size="1x" />
            </button>
            <button id="get" onClick={this.getTimer}>
              <FontAwesomeIcon icon="stopwatch" color="white" size="1x" />
            </button>
          </div>
        </div>
        <div className="laps">
          {this.state.laps.map(item => {
            return <h1 className="alllaps">{item}</h1>;
          })}
        </div>
        <button id="clear" onClick={this.clearLaps}>
          <FontAwesomeIcon icon="times" color="white" size="2x" />
        </button>
      </div >
    );
  }
}

export default Stopwatch;
