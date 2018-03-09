import * as React from 'react';
import { Table, Label } from 'react-bootstrap';

import { ProductItem } from '../types';

export interface StateProps {
  productItems: ProductItem[];
}

export interface DispatchProps {
}

export interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps;

export class ProductListing extends React.Component<Props> {
  renderItem(productItem: ProductItem, i: number) {
    return (
      <tr key={i}>
        <th>
          {productItem.item.name} ({productItem.item.code})
          {productItem.isNew && <Label bsStyle="primary" style={{marginLeft: '5px'}}>New!</Label>}
          {productItem.isPopular && <Label bsStyle="success" style={{marginLeft: '5px'}}>Popular!</Label>}
          {productItem.isOnSale && <Label bsStyle="success" style={{marginLeft: '5px'}}>Sale!</Label>}
        </th>
        <td>${productItem.item.price.toFixed(2)}</td>
        <td>{productItem.quantity}</td>
      </tr>
    );
  }

  render() {
    if (this.props.productItems.length === 0) {
      return (
        <p>No products found!</p>
      );
    }

    return (
      <Table bsClass="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Name (Code)</th>
            <th>Price</th>
            <th>Stock Level</th>
          </tr>
        </thead>
        <tbody>
          {this.props.productItems.map((productItem, i) => this.renderItem(productItem, i))}
        </tbody>
      </Table>
    );
  }
}
