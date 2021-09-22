import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import calculate from './logic/calculate';
import Calculator from './components/calculator';
import Quote from './pages/Quote';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState({
    total: '0',
    next: null,
    operation: null,
  });
  const changeHandle = (event) => {
    setData(calculate(data, event.target.innerHTML));
  };
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/calculator">
          <Calculator
            data={data}
            onDataChange={changeHandle}
          />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
