import * as React from 'react';
import { Alert } from 'react-bootstrap';

import { ProductItem } from '../types';

export interface StateProps {
  lastProductOrdered?: ProductItem | null;
}

export interface DispatchProps {
}

export interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps;

export class DeliveredProductDisplay extends React.Component<Props> {
  render() {
    const { lastProductOrdered} = this.props;

    if (typeof lastProductOrdered === 'undefined' || lastProductOrdered === null) {
      return null;
    }

    return (
      <Alert bsStyle="success" style={{marginTop: '20px'}}>
        <h4>Product delivery</h4>
        {lastProductOrdered.item.name} ({lastProductOrdered.item.code}) was delivered!
      </Alert>
    );
  }
}
