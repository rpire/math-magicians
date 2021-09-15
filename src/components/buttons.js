import React from "react";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
  }
  clickHandle = (event) => this.props.onButtonPress(event);
  
  render () {
    const symbols = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', '×',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];
    const buttons = symbols.map((symbol) => {
      if (/[÷×+\-=]/.test(symbol) && symbol !== '+/-') {
        return (<button key={symbol} type="button" className="calc btn orange" onClick={this.clickHandle}>{symbol}</button>);
      } else if (symbol === '0') {
        return (<button key={symbol} type="button" id="zero" className="calc btn" onClick={this.clickHandle}>0</button>);
      } else {
        return (<button key={symbol} type="button" className="calc btn" onClick={this.clickHandle}>{symbol}</button>)
      }
    });
    return buttons;
  }
}

export default Buttons;
