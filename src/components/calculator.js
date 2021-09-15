import React from 'react';
import Buttons from './buttons';
import propTypes from 'prop-types';

class Calculator extends React.PureComponent {
  render() {
    const {total, operation, next} = this.props.data;
    return (
      <div className="calculator">
        <div id="entry" className="calc" name="entry" placeholder="0">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <Buttons onButtonPress={this.props.onDataChange} />
      </div>
    );
  }
}

Calculator.propTypes = {
  onDataChange: propTypes.func.isRequired,
  total: propTypes.string.isRequired,
  next: propTypes.string.isRequired,
  operation: propTypes.string.isRequired,
}

export default Calculator;
