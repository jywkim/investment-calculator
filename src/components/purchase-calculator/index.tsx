import * as React from 'react';
import { connect } from 'react-redux';
import { updateField, UpdateFieldAction } from '../../actions/index';
import { StoreState, Component } from '../../types/index';

interface Props {
  id: string;
  component?: Component;
  updateField?: UpdateFieldAction;
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
      <div className="calculatorContainer">
        <h3>Purchase</h3>
        <label htmlFor="shareQuantity" className="rowData">Share Quantity</label>
        <input name="shareQuantity" value={shareQuantity} onChange={this.handleOnChange} className="rowData"/>

        <label htmlFor="sharePrice" className="rowData">Share Price</label>
        <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange} className="rowData"/>

        <label htmlFor="subTotal" className="rowData">Subtotal</label>
        <input name="subTotal" value={subTotal} onChange={this.handleOnChange} className="rowData"/>
      </div>
    );
  }
}

function mapStateToProps({ components }: StoreState, props: Props) {
  return {
    component: components[props.id],
    id: props.id
  };
}

export default connect(mapStateToProps, { updateField })(PurchaseCalculator as any);
