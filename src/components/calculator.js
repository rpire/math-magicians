import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.clickHandle = this.clickHandle.bind(this);
  }

  clickHandle = (event) => {
    this.setState((prevState) => {
      return (calculate(prevState, event.target.innerHTML));
    });
  }

  render() {
    return (
      <div className="calculator">
        <div id="entry" className="calc" name="entry" placeholder="0">
          <span>{this.state.total}</span>
          <span>{this.state.operation}</span>
          <span>{this.state.next}</span>
        </div>
        <button type="button" className="calc btn" onClick={this.clickHandle}>AC</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>+/-</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>%</button>
        <button type="button" className="calc btn orange" onClick={this.clickHandle}>÷</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>7</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>8</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>9</button>
        <button type="button" className="calc btn orange" onClick={this.clickHandle}>x</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>4</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>5</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>6</button>
        <button type="button" className="calc btn orange" onClick={this.clickHandle}>-</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>1</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>2</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>3</button>
        <button type="button" className="calc btn orange" onClick={this.clickHandle}>+</button>
        <button type="button" id="zero" className="calc btn" onClick={this.clickHandle}>0</button>
        <button type="button" className="calc btn" onClick={this.clickHandle}>.</button>
        <button type="button" className="calc btn orange" onClick={this.clickHandle}>=</button>
      </div>
    );
  }
}

export default Calculator;
