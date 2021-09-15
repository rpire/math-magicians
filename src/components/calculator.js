import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null
    }
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle = async (event) => {
    this.setState(calculate(this.state, event.target.innerHTML));
  }
  render() {
    return (
      <div className="calculator">
        <div id="entry" className="calc" name="entry" placeholder="0">{this.state.total}{this.state.operation}{this.state.next}</div>
        <div className="calc btn" onClick={this.clickHandle}>AC</div>
        <div className="calc btn" onClick={this.clickHandle}>+/-</div>
        <div className="calc btn" onClick={this.clickHandle}>%</div>
        <div className="calc btn orange" onClick={this.clickHandle}>÷</div>
        <div className="calc btn" onClick={this.clickHandle}>7</div>
        <div className="calc btn" onClick={this.clickHandle}>8</div>
        <div className="calc btn" onClick={this.clickHandle}>9</div>
        <div className="calc btn orange" onClick={this.clickHandle}>x</div>
        <div className="calc btn" onClick={this.clickHandle}>4</div>
        <div className="calc btn" onClick={this.clickHandle}>5</div>
        <div className="calc btn" onClick={this.clickHandle}>6</div>
        <div className="calc btn orange" onClick={this.clickHandle}>-</div>
        <div className="calc btn" onClick={this.clickHandle}>1</div>
        <div className="calc btn" onClick={this.clickHandle}>2</div>
        <div className="calc btn" onClick={this.clickHandle}>3</div>
        <div className="calc btn orange" onClick={this.clickHandle}>+</div>
        <div id="zero" className="calc btn" onClick={this.clickHandle}>0</div>
        <div className="calc btn" onClick={this.clickHandle}>.</div>
        <div className="calc btn orange" onClick={this.clickHandle}>=</div>
      </div>
    );
  }
}

export default Calculator;
