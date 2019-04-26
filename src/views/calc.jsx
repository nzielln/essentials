import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";
import { CalcButtons } from "../components/buttons.jsx";
import { ClearButtons } from "../components/clearbtn.jsx";
import { ZeroButtons } from "../components/buttonzero.jsx";
import { AnswerButton } from "../components/answer.jsx";
import * as math from "mathjs";
import { Link } from 'react-router-dom';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      saved: []
    };
    this.handleClearOut = this.handleClearOut.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
    this.handleEvaluate = this.handleEvaluate.bind(this);
    this.setArray = this.setArray.bind(this);
  }

  handleClearOut() {
    this.setState({
      input: ""
    });
  }

  handleCalculate = value => {
    this.setState({ input: this.state.input + value });
  };

  handleEvaluate() {
    this.setState({ input: math.eval(this.state.input) });
  }

  setArray() {
    this.setState(prevState => ({
      saved: [...prevState.saved, this.state.input]
    }));
    let arr = this.state.saved;
    const limit = ans => {
      if (arr.length >= 10) {
        arr.shift(ans);
      }
    };
    limit();
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div className="calculator-body">
        <div className="home" >
          <Link to="/" style={{ textDecoration: 'none' }}>
            <FontAwesomeIcon icon="circle" color="white" size="lg" />
          </Link>
        </div>
        <h2 className="title top">calculator</h2>
        <div className="buttonspace">
          <div className="calc-space">
            <div className="row1">
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                7
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                8
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                9
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                ÷
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                *
              </div>
            </div>
            <div className="row2">
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                4
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                5
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                6
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                -
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                .
              </div>
            </div>
            <div className="row3">
              <div className="calc-button" onClick={this.handlePercentage}>
                3
              </div>

              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                2
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                1
              </div>
              <div
                className="calc-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                +
              </div>
              <div className="calc-button" onClick={this.handleEvaluate}>
                =
              </div>
            </div>
            <div className="row4">
              <div
                className="zero-button"
                onClick={e => this.handleCalculate(e.target.innerHTML)}
              >
                0
              </div>
              <div className="zero-button-equal" onClick={this.handleClearOut}>
                AC
              </div>
            </div>
            <div className="answer">
              <div id="answerspace">{this.state.input}</div>
            </div>
          </div>
          <div className="saved-cont">
            <h6 className="saved">Saved</h6>
            <div className="saved-item-cont">
              {this.state.saved.map(item => {
                return <h6 className="saved-item">{item}</h6>;
              })}
            </div>

            <div className="save">
              <p id="save" onClick={this.setArray}>
                saved
              </p>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default Calc;
