import * as React from 'react';
import { Alert } from 'react-bootstrap';

export interface StateProps {
  changeRefunded?: number | null;
}

export interface DispatchProps {
}

export interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps;

export class RefundDisplay extends React.Component<Props> {
  render() {
    const { changeRefunded } = this.props;

    if (typeof changeRefunded === 'undefined' || changeRefunded === null || changeRefunded === 0) {
      return null;
    }

    return (
      <Alert bsStyle="success" style={{marginTop: '20px'}}>
        <h4>Refunded change</h4>
        ${changeRefunded.toFixed(2)} was refunded!
      </Alert>
    );
  }
}
