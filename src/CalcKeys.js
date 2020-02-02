import React from "react";
import ResultDisplay from "./ResultDisplay";

class CalcKeys extends React.Component {
  constructor() {
    super();
    this.state = {
      equation: [],
      result: "",
      keyPress: "0",
      numbers: ""
    };
    this.handleNum = this.handleNum.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleNum, false);
  }

  /* handleEvent(event) {
    if (event.keyCode === 13) {
      this.handleResult } else {
        this.handleNum
      }
    }
  */

  handleNum(event) {
    var pressedButton;
    if (event.keyCode === 13) {
      console.log("Key", event.key);
      this.handleResult();
    } else {
      event.key
        ? (pressedButton = event.key)
        : (pressedButton = event.target.innerHTML);
      console.log("PressedButton", pressedButton);

      var numRegEx = /[0-9]/g;
      //if (numRegEx.test(pressedButton)) {
      this.setState(prevState => {
        const equation = [...prevState.equation, pressedButton];
        const numbers = (prevState.numbers += pressedButton);

        return {
          numbers,
          equation,
          keyPress: pressedButton
        };
      });
    }
    /*} else {
      this.setState(prevState => {
        const numbers = "";
        const equation = [...prevState.equation, pressedButton];
        return {
          numbers,
          equation,
        keyPress: pressedButton
        }
       
      })
    }*/
    console.log("Numbers", this.state.numbers);
    console.log("Equation", this.state.equation);
    /*this.setState(prevState => ({
      equation: [...prevState.equation, pressedButton],
      keyPress: pressedButton
    }));*/
  }

  handleResult() {
    var regEx = /[0-9]/g;
    var calculation = this.state.numbers;
    //var calculation = this.state.equation.join("");
    var calc = regEx.test(calculation[calculation.length - 1]);
    const tempResult = calc ? eval(calculation) : tempResult;
    this.setState({
      result: tempResult,
      numbers: tempResult
    });
    console.log("Temp", tempResult);
  }

  handleClear() {
    this.setState({
      equation: [0],
      result: "",
      keyPress: "0",
      numbers: ""
    });
  }

  handleRemove() {
    console.log("Array", this.state.equation);
    var lastButton = this.state.equation;
    var lN = this.state.numbers;
    var lastNumber = lN.slice(0, -1);
    var lastGone = lastButton.splice(-1, 1);
    console.log("LastGone", lastGone);
    var lastKey = this.state.equation[this.state.equation.length - 1];
    this.setState({
      equation: lastGone,
      keyPress: lastKey,
      numbers: lastNumber
    });
    console.log("LastGoneState", this.state.equation);
    console.log("LastKEyState", this.state.keyPress);
  }

  render() {
    console.log("Array", this.state.equation);
    return (
      <div>
        <div className="display">
          <ResultDisplay
            show={this.state.result}
            pressed={this.state.numbers}
          />
        </div>
        <div className="btn-group">
          <button onClick={this.handleClear} className="special">
            CE
          </button>
          <button onClick={this.handleRemove} className="special">
            C
          </button>
          <button onClick={this.handleNum} className="special">
            √
          </button>
          <button onClick={this.handleNum} className="special">
            +
          </button>
        </div>
        <div className="btn-group">
          <button className="calcKey" onClick={this.handleNum}>
            7
          </button>
          <button onClick={this.handleNum}>8</button>
          <button onClick={this.handleNum}>9</button>
          <button onClick={this.handleNum} className="special">
            -
          </button>
        </div>
        <div className="btn-group">
          <button onClick={this.handleNum} className="numButton">
            4
          </button>
          <button onClick={this.handleNum}>5</button>
          <button onClick={this.handleNum}>6</button>
          <button onClick={this.handleNum} className="special">
            *
          </button>
        </div>
        <div className="btn-group">
          <button onClick={this.handleNum} className="numButton">
            1
          </button>
          <button onClick={this.handleNum}>2</button>
          <button onClick={this.handleNum}>3</button>
          <button onClick={this.handleNum} className="special">
            /
          </button>
        </div>
        <div className="btn-group">
          <button onClick={this.handleNum} className="numButton">
            .
          </button>
          <button onClick={this.handleNum}>0</button>
          <button onClick={this.handleResult} className="result">
            =
          </button>
          <button onClick={this.handleNum} className="special">
            @
          </button>
        </div>
        <br />

        <br />
      </div>
    );
  }
}

export default CalcKeys;
