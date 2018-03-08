import * as React from 'react';
import { Table } from 'react-bootstrap';

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
  renderItem(productItem: ProductItem) {
    return (
      <tr>
        <th>{productItem.item.name} ({productItem.item.code})</th>
        <td>${productItem.item.price.toFixed(2)}</td>
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
      <Table>
        <tr>
          <th>Name (Code)</th>
          <th>Price</th>
        </tr>
        {this.props.productItems.map((productItem) => this.renderItem(productItem))}
      </Table>
    );
  }
}
