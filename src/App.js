import React from 'react';
import Calculator from './components/calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <h1>The Calculator Web App</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;