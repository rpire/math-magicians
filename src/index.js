import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './components/calculator';
import reportWebVitals from './reportWebVitals';

class CalculatorApp extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <h1>The Calculator Web App</h1>
        <Calculator />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <CalculatorApp />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
