import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStart: false,
      timerStopped: true,
      sec: 0,
      min: 0,
      hr: 0,
      secs: 0,
      mins: 0,
      hrs: 0,
      laps: [],
      zerosec: 0,
      zeromin: 0,
      zerohr: 0,
      totalTime: 0,
      secLeft: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.secCount = this.secCount.bind(this);
    this.minCount = this.minCount.bind(this);
    this.hrCount = this.hrCount.bind(this);
    this.secDec = this.secDec.bind(this);
    this.minDec = this.minDec.bind(this);
    this.hrDec = this.hrDec.bind(this);
  }

  //all event handlers have to here
  secCount() {
    if (this.state.timerStopped) {
      this.setState(prevState => ({
        secs: prevState.secs + 1,
        sec: prevState.sec + 1
      }));
      if (this.state.sec > 58 && !this.state.timerStart) {
        this.setState(prevState => ({
          sec: 0,
          min: this.state.min + 1
        }));
      }
    }
  }
  minCount() {
    if (this.state.timerStopped) {
      this.setState(prevState => ({
        mins: prevState.mins + 60,
        min: prevState.min + 1
      }));
      if (this.state.min > 58 && !this.state.timerStart) {
        this.setState(prevState => ({
          min: 0,
          hr: this.state.hr + 1
        }));
      }
    }
  }
  hrCount() {
    if (this.state.timerStopped) {
      this.setState(prevState => ({
        hrs: prevState.hrs + 3600,
        hr: prevState.hr + 1
      }));
      if (this.state.hr > 24) {
        this.setState(prevState => ({
          min: 0,
          hr: 0,
          sec: 0
        }));
      }
    }
  }
  //deacrease time
  secDec() {
    if (this.state.timerStopped) {
      this.setState(prevState => ({
        secs: prevState.secs - 1,
        sec: prevState.sec - 1
      }));
    }
  }
  minDec() {
    if (this.state.timerStopped) {
      this.setState(prevState => ({
        mins: prevState.mins - 60,
        min: prevState.min - 1
      }));
    }
  }

  hrDec() {
    if (this.state.timerStopped) {
      this.setState(prevState => ({
        hrs: prevState.hrs - 3600,
        hr: prevState.hr - 1
      }));
      if (this.state.min < 1 && this.state.hr > 1) {
        this.setState(prevState => ({
          mins: this.state.mins + 60,
          hrs: this.state.hrs - 3600
        }));
      }
    }
  }

  startTimer() {
    const allseconds = this.state.secs + this.state.mins + this.state.hrs;
    const now = Date.now();
    const before = now + allseconds * 1000;
    if (!this.state.timerStart) {
      this.newtimer = setInterval(() => {
        this.setState({
          timerStart: true,
          timerStopped: false
        });

        let secondsLeft = Math.round((before - Date.now()) / 1000);
        const hrLeft = Math.floor(secondsLeft / 3600);
        const minLeft = Math.floor(secondsLeft / 60);
        const remseconds = secondsLeft % 60;

        this.setState({
          sec: remseconds,
          min: minLeft,
          hr: hrLeft
        });
        if (this.state.sec < 0) {
          clearInterval(this.newtimer);
          this.setState({
            timerStart: false,
            timerStopped: true,
            sec: 0,
            min: 0,
            hr: 0,
            secs: 0,
            mins: 0,
            hrs: 0,
            zerosec: 0,
            zeromin: 0,
            zerohr: 0,
            totalTime: 0,
            secLeft: 0
          });
        }
      }, 1000);
    }
  }

  stopTimer() {
    if (this.state.timerStart) {
      this.setState({
        timerStart: false,
        timerStopped: true
      });
    }
    clearInterval(this.newtimer);
  }

  resetTimer() {
    this.setState({
      timerStart: false,
      timerStopped: true,
      sec: 0,
      min: 0,
      hr: 0,
      secs: 0,
      mins: 0,
      hrs: 0,
      zerosec: 0,
      zeromin: 0,
      zerohr: 0,
      totalTime: 0,
      secLeft: 0
    });
    clearInterval(this.newtimer);
  }
  render() {
    // all functions have to be here

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

    if (this.state.hr < 10) {
      this.state.zerohr = "0";
    } else {
      this.state.zerohr = "";
    }

    return (
      <div className="alltimer">
        <h2 className="title top">timer</h2>
        <div className="clock">
          <div className="resets">
            <h6 id="reset-hr" onClick={this.hrCount}>
              {<FontAwesomeIcon icon="plus" color="white" size="1x" />}
            </h6>
            <h6 id="reset-min" onClick={this.minCount}>
              {<FontAwesomeIcon icon="plus" color="white" size="1x" />}
            </h6>
            <h6 id="reset-sec" onClick={this.secCount}>
              {<FontAwesomeIcon icon="plus" color="white" size="1x" />}
            </h6>
          </div>
          <div className="theclock" id="the-clock">
            <h1>
              {this.state.zerohr +
                this.state.hr +
                ":" +
                this.state.zeromin +
                this.state.min +
                ":" +
                this.state.zerosec +
                this.state.sec}
            </h1>
          </div>
          <div className="minus">
            <h6 id="minus-hr" onClick={this.hrDec}>
              {<FontAwesomeIcon icon="minus" color="white" size="1x" />}
            </h6>
            <h6 id="minus-min" onClick={this.minDec}>
              {<FontAwesomeIcon icon="minus" color="white" size="1x" />}
            </h6>
            <h6 id="minus-sec" onClick={this.secDec}>
              {<FontAwesomeIcon icon="minus" color="white" size="1x" />}
            </h6>
          </div>
        </div>
        <div className="timer-controls">
          <button id="play" onClick={this.startTimer}>
            <FontAwesomeIcon icon="play" color="white" size="1x" />
          </button>
          <button id="stop" onClick={this.stopTimer}>
            <FontAwesomeIcon icon="stop" color="white" size="1x" />
          </button>
          <button id="reset" onClick={this.resetTimer}>
            <FontAwesomeIcon icon="redo" color="white" size="1x" />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;
