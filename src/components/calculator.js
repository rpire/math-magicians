import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <input type="text" id="entry" className="calc" name="entry" placeholder="0" />
        <div className="calc btn">AC</div>
        <div className="calc btn">+/-</div>
        <div className="calc btn">%</div>
        <div className="calc btn orange">/</div>
        <div className="calc btn">7</div>
        <div className="calc btn">8</div>
        <div className="calc btn">9</div>
        <div className="calc btn orange">*</div>
        <div className="calc btn">4</div>
        <div className="calc btn">5</div>
        <div className="calc btn">6</div>
        <div className="calc btn orange">-</div>
        <div className="calc btn">1</div>
        <div className="calc btn">2</div>
        <div className="calc btn">3</div>
        <div className="calc btn orange">+</div>
        <div id="zero" className="calc btn">0</div>
        <div className="calc btn">.</div>
        <div className="calc btn orange">=</div>
      </div>
    );
  }
}

export default Calculator;
