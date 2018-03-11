import * as React from 'react';
import './App.css';
import PurchaseCalculator from './components/purchase-calculator/index';
import SellCalculator from './components/sell-calculator/index';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Investment Calculator</h1>
        </header>
        <p className="App-intro">
          <PurchaseCalculator />
          <SellCalculator />
        </p>
      </div>
    );
  }
}

export default App;
