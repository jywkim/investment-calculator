import * as React from 'react';

interface Props {

}

interface State {
  shareQuantity: number;
  sharePrice: number;
  subTotal: number;
}

class PurchaseCalculator extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      shareQuantity: 0,
      sharePrice: 0,
      subTotal: 0,
    };
  }

  /* tslint:disable no-any */
  handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const { shareQuantity, sharePrice, subTotal } = Object.assign({}, this.state, { [name]: value});

    let state = this.state;
    if (name === 'shareQuantity' || name === 'sharePrice') {
      state = {
        shareQuantity,
        sharePrice,
        subTotal: shareQuantity * sharePrice,
      };
    } else if (name === 'subTotal') {
      state = {
        shareQuantity: subTotal / sharePrice,
        sharePrice,
        subTotal,
      };
    }

    this.setState(state);
  }

  render() {
    const { shareQuantity, sharePrice, subTotal } = this.state;

    return (
      <div>
        <label htmlFor="shareQuantity">Share Quantity</label>
        <input name="shareQuantity" value={shareQuantity} onChange={this.handleOnChange}/>

        <label htmlFor="sharePrice">Share Price</label>
        <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange}/>

        <label htmlFor="subTotal">Subtotal</label>
        <input name="subTotal" value={subTotal} onChange={this.handleOnChange}/>
      </div>
    );
  }
}

export default PurchaseCalculator;
