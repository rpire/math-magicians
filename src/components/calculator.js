import React from 'react';
import Buttons from './buttons';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <div id="entry" className="calc" name="entry" placeholder="0">
          <span>{this.props.data.total}</span>
          <span>{this.props.data.operation}</span>
          <span>{this.props.data.next}</span>
        </div>
        <Buttons onButtonPress={this.props.onDataChange}/>
      </div>
    );
  }
}

export default Calculator;
