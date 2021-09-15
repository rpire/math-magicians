import React from 'react';
import propTypes from 'prop-types';
import Buttons from './buttons';


class Calculator extends React.PureComponent {
  render() {
    const { total, operation, next } = this.props.data;
    const { onDataChange } = this.props;
    return (
      <div className="calculator">
        <div id="entry" className="calc" name="entry" placeholder="0">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <Buttons onButtonPress={onDataChange} />
      </div>
    );
  }
}

Calculator.propTypes = {
  onDataChange: propTypes.func.isRequired,
  data: propTypes.instanceOf(Object).isRequired,
  total: propTypes.string.isRequired,
  next: propTypes.string.isRequired,
  operation: propTypes.string.isRequired,
};

export default Calculator;
