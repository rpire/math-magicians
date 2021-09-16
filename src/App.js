import React from 'react';
import calculate from './logic/calculate';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.changeHandle = this.changeHandle.bind(this);
  }

  changeHandle = (event) => {
    this.setState((prevState) => calculate(prevState, event.target.innerHTML));
  } 

  render() {
    const { total, next, operation } = this.state;
    const obj = {
      total,
      next,
      operation,
    };

    return (
      <div className="container">
        <h1>The Calculator Web App</h1>
        <Calculator
          data={obj}
          onDataChange={this.changeHandle}
        />
      </div>
    );
  }
}

export default App;
