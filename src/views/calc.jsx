import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./../main.css";
import CalcButtons from "../components/buttons.jsx";
import ZeroButtons from "../components/buttonzero.jsx";
import AnswerButton from "../components/answer.jsx";

class Calc extends React.Component {
  render() {
    return (
      <div className="calculator-body">
        <h2 className="title top">calculator</h2>
        <div className="buttonspace">
          <div className="row1">
            <CalcButtons buttons="7" />
            <CalcButtons buttons="8" />
            <CalcButtons buttons="9" />
            <CalcButtons buttons="×" />
            <CalcButtons buttons="÷" />
          </div>
          <div className="row2">
            <CalcButtons buttons="4" />
            <CalcButtons buttons="5" />
            <CalcButtons buttons="6" />
            <CalcButtons buttons="-" />
            <CalcButtons buttons="%" />
          </div>
          <div className="row3">
            <CalcButtons buttons="3" />
            <CalcButtons buttons="2" />
            <CalcButtons buttons="1" />
            <CalcButtons buttons="+" />
            <CalcButtons buttons="+/-" />
          </div>
          <div className="row4">
            <ZeroButtons zerobuttons="0 " />
            <CalcButtons buttons="." />
            <CalcButtons buttons="=" />
            <CalcButtons buttons="AC" />
          </div>
        </div>
        <div className="answer">
          <AnswerButton answerspace="000" />
        </div>
      </div>
    );
  }
}

export default Calc;
