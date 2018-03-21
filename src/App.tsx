import * as React from 'react';
import './App.css';
import PurchaseCalculator from './components/purchase-calculator/index';
import SellCalculator from './components/sell-calculator/index';
import SummaryCalculator from './components/summary-calculator/index';
import * as componentNames from './constants/component-names';
import { connect } from 'react-redux';
import { addComponent } from './actions/index';

interface Props {
  /* tslint:disable no-any */
  addComponent: any;
}

class App extends React.Component<Props> {

  componentWillMount() {
    this.props.addComponent(componentNames.purchaseShares);
    this.props.addComponent(componentNames.sellShares);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <h1 className="App-title">INVESTMENT CALCULATOR</h1>
        </header>
        <div className="App-intro">
          <PurchaseCalculator id={componentNames.purchaseShares} />
          <SellCalculator id={componentNames.sellShares} />
          <SummaryCalculator pid={componentNames.purchaseShares} sid={componentNames.sellShares} />
        </div>
      </div>
    );
  }
}

export default connect(null, { addComponent })(App as any);
