import * as React from 'react';
import { StoreState } from '../../types/index';
import { connect } from 'react-redux';
import { updateField } from '../../actions/index';

/* tslint:disable no-any */
interface Props {
  id: string;
  component?: any;
  updateField?: any;
}

class SellCalculator extends React.PureComponent<Props> {

  /* tslint:disable no-any */
  handleOnChange = (e: any) => {
    const { name, value } = e.target;
    /* tslint:disable no-shadowed-variable */
    const { id, updateField, component } = this.props;
    const { shareQuantity, sharePrice, subTotal } = Object.assign({}, component, { [name]: value});

    let fields = { ...component };
    if (name === 'shareQuantity' || name === 'sharePrice') {
      fields = {
        shareQuantity,
        sharePrice,
        subTotal: shareQuantity * sharePrice,
      };
    } else if (name === 'subTotal') {
      fields = {
        shareQuantity: subTotal / sharePrice,
        sharePrice,
        subTotal,
      };
    }

    updateField(id, fields);
  }

  render() {
    const { shareQuantity, sharePrice, subTotal } = this.props.component;

    return (
      <div className="calculatorContainer">
        <h3>Sell</h3>
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

function mapStateToProps(state: StoreState, props: Props) {
  return {
    component: state.components[props.id],
    id: props.id
  };
}

export default connect(mapStateToProps, { updateField })(SellCalculator as any);
