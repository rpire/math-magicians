import React, { useState } from 'react';
import calculate from './logic/calculate';
import Calculator from './components/calculator';

function App() {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const changeHandle = (event) => {
    setData(calculate(data, event.target.innerHTML));
  }
  return (
    <div className="container">
      <h1>The Calculator Web App</h1>
      <Calculator
        data={data}
        onDataChange={changeHandle}
      />
    </div>
  );
}

export default App;
